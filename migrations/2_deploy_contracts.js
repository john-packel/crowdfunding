var FundingHub = artifacts.require("./FundingHub.sol");

module.exports = function(deployer) {
    deployer.deploy(FundingHub).then(function() {
        FundingHub.deployed().then(function(instance) {
          instance.createProject(0x48656c6c6f000000000000000000000000000000000000000000000000000000, 10000, new Date().getTime() + 604800000);
        });
    });

};
