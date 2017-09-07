// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'

// Import our contract artifacts and turn them into usable abstractions.
import fundinghub_artifacts from '../../build/contracts/FundingHub.json'

angular.module('etherCrowdServices', []).service('accountsService', ['$window', function($window){

    var FundingHub = contract(fundinghub_artifacts);

    var accounts = [];
    var account = "";

    this.getBalance = function(callback) {

        web3.eth.getBalance(accounts[0], function(error, result) {
            callback(error, result);
        });
    };

    this.getMainAccount = function() {
        return accounts[0];
    };

    this.init = function(onInitialised) {


      // Bootstrap the MetaCoin abstraction for Use.
      FundingHub.setProvider(web3.currentProvider);

      // Get the initial account balance so it can be displayed.
      web3.eth.getAccounts(function(err, accs) {
        if (err != null) {
          alert("There was an error fetching your accounts.");
          return;
        }

        if (accs.length == 0) {
          alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
          return;
        }

        accounts = accs;
        account = accounts[0];
        console.log("your account is: "+account);
        onInitialised();

      });

    };

}]);
