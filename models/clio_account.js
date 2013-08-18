var mongoose = require('mongoose');
var clioApi  = require('../lib/clio_api');
var _ = require('lodash');

var clioAccountSchema = mongoose.Schema({
  accessToken: { type: String, required: true, index: {unique: true}},
  clioId: { type: String, required: true, index: {unique: true}},
  name: String
});

clioAccountSchema.static('setupAccount', function(accessToken, user, callback) {
  var parsedClio;
  clioApi.get(accessToken, '/users/who_am_i', handleApiResponse);

  function handleApiResponse(err, response, body) {
    parsedClio = JSON.parse(body);
    return ClioAccount.findOne({clioId: parsedClio.account.id}, handleExistingAccount);
  };

  function handleExistingAccount(err, clioAccount) {
    if (err) {
      console.log("error: " + err);
    } else if (!clioAccount) {
      clioAccount = new ClioAccount({clioId: parsedClio.account.id});
    }
    clioAccount.accessToken = accessToken;
    clioAccount.name = parsedClio.account.name;
    return clioAccount.save(handleAccountSave);
  };

  function handleAccountSave(err, clioAccount) {
    if (err) console.log("error: " + err);
    else {
      addAccountIdToUser(clioAccount.id);
    }
    return callback();
  };

  function addAccountIdToUser(accountId) {
    if (!_.find(user.clioAccountIds, function(acc) { return acc === accountId; })) {
      user.clioAccountIds.push(accountId);
      user.save();
    }
  };

});

var ClioAccount = mongoose.model('ClioAccount', clioAccountSchema);

module.exports = ClioAccount;