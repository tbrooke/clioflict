// Model for users

// Inspired by: https://github.com/madhums/node-express-mongoose-demo


/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , crypto = require('crypto')
  , _ = require('underscore')

/**
 * User Schema
 */

var userSchema = new Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  username: { type: String, default: '' },
  hashed_password: { type: String, default: '' },
  salt: { type: String, default: '' }
});

exports = mongoose.model('User', userSchema);