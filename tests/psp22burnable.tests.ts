/* eslint-disable */
import { expect, fromSigner, setupContract, addPairWithAmount, getSigner } from './helpers';
import {Keyring} from "@polkadot/keyring"


describe('PSP22Burnable', () => {
    async function setup() {
        return setupContract('my_psp22_burnable', 'new', '1000')
    }

    it('Assigns initial balance', async () => {
        const { query, defaultSigner: sender } = await setup()

        await expect(query.balanceOf(sender.address)).to.have.output(1000)
    })

    it('Can burn', async () => {
        const { query, tx, contract  } = await setup();

        // Arrange - Create a signer and transfer tokens to him
        const ALICE = await getSigner('Alice')
        await tx.transfer(ALICE.address, 10, []);

        // Act - Burn Alice's tokens
        await fromSigner(contract, ALICE.address).tx.burn(10)

        // Assert - Ensure sender balance is now 999
        await expect( query.balanceOf(ALICE.address)).to.have.output(0);
    })

    it('Decreases total supply after burning', async () => {
        const { contract, query} = await setup()

        // Arrange - Ensure initial supply is correct
        await expect(query.totalSupply()).to.have.output(1000)

        // Act - Burn token from owner
        await contract.tx.burn( 1)

        // Assert - Ensure sender balance is now 999
        await expect(query.totalSupply()).to.have.output(999)
    })

    it('Can burn from', async () => {
        const { query, tx, contract, defaultSigner, accounts: [alice, bob, eve]  } = await setup();

        // Arrange - Create a signer, transfer tokens to him and approve that contract can spend his tokens
        const ALICE = await getSigner('Alice')
        await tx.transfer(ALICE.address, 10, []);
        await fromSigner(contract, ALICE.address).tx.approve(defaultSigner.address, 10)

        // Act - burn from Alice address
        await fromSigner(contract, defaultSigner.address).tx.burnFrom(ALICE.address, 10)

        // Assert - ensure needed amount was burnt
        await expect( query.balanceOf(ALICE.address)).to.have.output(0);
    })

    it('Can burn from many', async () => {
        const { query, tx, contract, defaultSigner } = await setup();

        // Arrange - Create a signers, transfer tokens to them and approve that contract can spend their tokens
        const ALICE = await getSigner('Alice')
        const BOB = await getSigner('Bob')
        await tx.transfer(ALICE.address, 10, []);
        await tx.transfer(BOB.address, 10, []);
        await fromSigner(contract, ALICE.address).tx.approve(defaultSigner.address, 10)
        await fromSigner(contract, BOB.address).tx.approve(defaultSigner.address, 10)

        // Act - burn tokens from Alice and Bob
        await fromSigner(contract, defaultSigner.address).tx.burnFromMany([[ALICE.address, 10], [BOB.address, 10]])

        // Assert - ensure needed amount was burnt
        await expect( query.balanceOf(ALICE.address)).to.have.output(0);
        await expect( query.balanceOf(BOB.address)).to.have.output(0);
    })

    it('Fails if do not have an allowance to burn from one of the account', async () => {
        const { query, tx, contract, defaultSigner } = await setup();

        // Arrange - Create a signers, transfer tokens to them but not give neede allowance to one of the signers
        const ALICE = await getSigner('Alice')
        const BOB = await getSigner('Bob')
        await tx.transfer(ALICE.address, 10, []);
        await tx.transfer(BOB.address, 10, []);
        await fromSigner(contract, ALICE.address).tx.approve(defaultSigner.address, 10)

        // Act - burn tokens from Alice and Bob
        await expect(fromSigner(contract, defaultSigner.address).tx.burnFromMany([[ALICE.address, 10], [BOB.address, 10]])).to.eventually.be.rejected

        // Assert - ensure tokens was not burnt from the accounts
        await expect( query.balanceOf(ALICE.address)).to.have.output(10);
        await expect( query.balanceOf(BOB.address)).to.have.output(10);
    })

    it(`Fails if one of the account's balance exceeds amount to burn`, async () => {
        const { query, tx, contract, defaultSigner } = await setup();

        // Arrange - Create a signers, transfer tokens to them and give allowance
        const ALICE = await getSigner('Alice')
        const BOB = await getSigner('Bob')
        await tx.transfer(ALICE.address, 10, []);
        await tx.transfer(BOB.address, 5, []);
        await fromSigner(contract, ALICE.address).tx.approve(defaultSigner.address, 10)
        await fromSigner(contract, BOB.address).tx.approve(defaultSigner.address, 10)

        // Act - burn tokens from Alice and Bob but burt from Bob more than he own
        await expect(fromSigner(contract, defaultSigner.address).tx.burnFromMany([[ALICE.address, 10], [BOB.address, 10]])).to.eventually.be.rejected

        // Assert - ensure tokens was not burnt from the accounts
        await expect( query.balanceOf(ALICE.address)).to.have.output(10);
        await expect( query.balanceOf(BOB.address)).to.have.output(5);
    })

})
