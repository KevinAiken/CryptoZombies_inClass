const HelloEthSalon = artifacts.require("HelloEthSalon");

module.exports = function(deployer) {
    deployer.deploy(HelloEthSalon);
};

