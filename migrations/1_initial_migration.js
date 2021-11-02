var fs = require('fs');

const SpiritOrbPetsv1 = artifacts.require("SpiritOrbPetsv1");
const MediatorSOPv1 = artifacts.require("MediatorSOPv1");

module.exports = async function(deployer) {
  try {
    let contracts = {};

    await deployer.deploy(SpiritOrbPetsv1, {
      gas: 4000000
    });
    contracts["SpiritOrbPetsv1"] = SpiritOrbPetsv1.address;

    await deployer.deploy(MediatorSOPv1, SpiritOrbPetsv1.address);
    contracts["MediatorSOPv1"] = MediatorSOPv1.address;

    await fs.promises.writeFile('contracts.json', JSON.stringify(contracts));
  } catch (error) {
    console.log(error);
  }
}