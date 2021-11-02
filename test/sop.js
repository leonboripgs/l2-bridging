const SpiritOrbPetsv1 = artifacts.require("SpiritOrbPetsv1");
const MediatorSOPv1 = artifacts.require("MediatorSOPv1");

const truffleAssert = require('truffle-assertions');

contract("MediatorSOPv1", async accounts => {
    let SOPv1;
    let mediatorSOPv1;
    beforeEach(async () => {
        SOPv1 = await SpiritOrbPetsv1.deployed();
        mediatorSOPv1 = await MediatorSOPv1.deployed();
    });

    it("[SOPv1] should mint nfts", async () => {
        await SOPv1.mintPet(3);
    })

})