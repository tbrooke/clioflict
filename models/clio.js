// Model for clios

// Inspired by: https://github.com/madhums/node-express-mongoose-demo


/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , crypto = require('crypto')
  , _ = require('underscore')
  , authTypes = ['github', 'twitter', 'facebook', 'google']

/**
 * User Schema
 */

var ClioSchema = new Schema({
  name: { type: String, default: '' },
  description: { type: String, default: '' },
  username: { type: String, default: '' },
  hashed_authtoken: { type: String, default: '' },
  salt: { type: String, default: '' },
})
