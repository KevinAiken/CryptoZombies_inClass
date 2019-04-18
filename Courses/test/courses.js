var Courses = artifacts.require("./Courses.sol");

contract("Courses", function () {
    let contract;

    beforeEach('setup contract for each test', async function () {
        contract = await Courses.deployed();
    });

    it("instructor exists after creating instructor", async function () {
        await contract.setInstructor.call("0xa6F3cB51495b2496BC2066AF369F3C9D18c96cAa", 28, "Juan", "Banda");
        let result = await contract.getInstructor.call("0xa6F3cB51495b2496BC2066AF369F3C9D18c96cAa");
        assert.isTrue(result === [28, "Juan", "Banda"]);
    });

    it("instructor count increases after adding instructor", async function() {
        let countBefore = await contract.countInstructors.call();
        await contract.setInstructor.call("0xa6F3cB51495b2496BC2066AF369F3C9D18c96cAa", 28, "Juan", "Banda");
        let result = await contract.countInstructors.call();
        assert.isTrue(countBefore === (result - 1));
    });

    it("instructor is returned in array of address", async function () {
        let initialInstructors = await contract.getInstructors.call();
        await contract.setInstructor.call("0xa6F3cB51495b2496BC2066AF369F3C9D18c96cAa", 28, "Juan", "Banda");
        let resultInstructors = await contract.getInstructors.call();
        assert.isTrue(resultInstructors[initialInstructors.length] == "0xa6F3cB51495b2496BC2066AF369F3C9D18c96cAa" );
    })
});

