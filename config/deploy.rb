# see: http://blog.evantahler.com/blog/deploying-node-js-applications-with-capistrano.html

require 'capistrano/grunt'

set :application, "clioflict"
set :repository,  "git@github.com:tbrooke/clioflict.git"
set :scm, :git
set :use_sudo, true
set :sudo_prompt, ""
set :user, 'deploy'
set :ssh_options, {:forward_agent => true}
set :branch, :master
set :deploy_via, :remote_cache
set :port, 2029
set :keep_releases, 5
set :deploy_to, "/var/apps/node/#{application}"
default_run_options[:pty] = true

# node-deploy options
set :app_command, "app.js"
set :app_environment, "PORT=443"

# set :scm, :git # You can set :scm explicitly or Capistrano will make an intelligent guess based on known version control directory names
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

role :app, "conflicts.austin.utexas.edu"                          # This may be the same as your `Web` server

# if you want to clean up old releases on each deploy uncomment this:
after "deploy:restart", "deploy:cleanup"

namespace :deploy do

  before 'deploy:start', 'deploy:npm_install'
  before 'deploy:restart', 'deploy:npm_install'
  before 'deploy:default', 'deploy:setup'

  after 'deploy:create_symlink', 'deploy:symlink_node_folders'
  after 'deploy:setup', 'deploy:node_additional_setup'

  desc "START the servers"
  task :start, :roles => :app, :except => { :no_release => true } do
    run "cd #{current_path} && #{app_environment} node_modules/.bin/forever start -a -l #{current_path}/log/forever.log -o #{current_path}/log/out.log -e #{current_path}/log/err.log #{app_command}"
  end

  desc "STOP the servers"
  task :stop, :roles => :app, :except => { :no_release => true } do
    run "cd #{current_path} && node_modules/.bin/forever stop #{app_command}"
  end

  desc "RESTART the servers"
  task :restart, :roles => :app, :except => { :no_release => true } do
    run "cd #{current_path} && #{app_environment} node_modules/.bin/forever restart #{app_command}"
  end

  desc "Link Shared modules"
  task :symlink_node_folders, :roles => :app, :except => { :no_release => true } do
    run "ln -s #{shared_path}/node_modules #{current_path}/node_modules"
  end
  
  desc "Create shared directory"
  task :node_additional_setup, :roles => :app, :except => { :no_release => true } do
    run "sudo mkdir -p #{shared_path}/node_modules"
  end

  desc "Setup Bower_components"
  task :bower_setup, :roles => :app, :except => { :no_release => true } do
    run "sudo mkdir -p #{shared_path}/bower_components"
  end

  desc "Link Bower Components"
  task :symlink_bower_folders, :roles => :app, :except => { :no_release => true } do
    run "ln -s #{shared_path}/bower_components #{current_path}/bower_components"
  end

  desc "Node Install"
  task :npm_install, :roles => :app, :except => { :no_release => true } do
    run "cd #{current_path} && npm install"
  end

  desc "Bower Install"
  task :bower_install, :roles => :app, :except => { :no_release => true } do
    run "cd #{current_path} && bower install"
  end

  desc "NPM Update"
  task :npm_update, :roles => :app, :except => { :no_release => true } do
    run "cd #{current_path} && npm update"
  end

end