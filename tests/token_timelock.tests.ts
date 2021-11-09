import { expect, fromSigner, setupContract } from './helpers'
import { network } from 'redspot'

const { api } = network

describe('TOKEN_TIMELOCK', () => {
    async function setup() {
        let psp22 = await setupContract('my_psp22', 'new', '1000')
        const beneficiary = psp22.defaultSigner
        let releaseTime = (Date.now() / 1000) + (24 * 60 * 60)
        let timelock = await setupContract('my_psp22_token_timelock', 'new', psp22.contract.address, beneficiary.address, releaseTime)
        return { psp22, timelock, beneficiary, releaseTime }
    }

    it('New works', async () => {
        const { psp22: psp22Container, timelock: timelockContainer, beneficiary, releaseTime } = await setup()
        const { contract: psp22 } = psp22Container
        const { query: timelockQuery } = timelockContainer

        await expect(timelockQuery.token()).to.have.output(psp22.address)
        await expect(timelockQuery.beneficiary()).to.have.output(beneficiary.address)
        await expect(timelockQuery.releaseTime()).to.have.output(releaseTime)
    })

    it('Release works', async () => {
        const { psp22: psp22Container, timelock: timelockContainer, beneficiary, releaseTime } = await setup()
        const { contract: psp22, query: psp22Query } = psp22Container
        const { contract: timelock } = timelockContainer

        let depositedTokens = 1000
        // deposit tokens to the contract
        await expect(fromSigner(psp22, beneficiary.address).tx.transfer(timelock.address, depositedTokens, [])).to.eventually.be.fulfilled
        await expect(psp22Query.balanceOf(timelock.address)).to.have.output(depositedTokens)
        await expect(psp22Query.balanceOf(beneficiary.address)).to.have.output(0)
        await api.tx.timestamp.set(releaseTime).signAndSend(beneficiary.pair)

        // release the tokens
        await expect(fromSigner(timelock, beneficiary.address).tx.release()).to.eventually.be.fulfilled

        // // timelock should be empty
        await expect(psp22Query.balanceOf(timelock.address)).to.have.output(0)
        await expect(psp22Query.balanceOf(beneficiary.address)).to.have.output(depositedTokens)
    })

    it('Release soon should not work', async () => {
        const { psp22: psp22Container, timelock: timelockContainer, beneficiary } = await setup()
        const { contract: psp22, query: psp22Query } = psp22Container
        const { contract: timelock } = timelockContainer

        let depositedTokens = 1000
        // deposit tokens to the contract
        await expect(fromSigner(psp22, beneficiary.address).tx.transfer(timelock.address, depositedTokens, [])).to.eventually.be.fulfilled
        await expect(psp22Query.balanceOf(timelock.address)).to.have.output(depositedTokens)
        await expect(psp22Query.balanceOf(beneficiary.address)).to.have.output(0)

        // release the tokens early
        await expect(fromSigner(timelock, beneficiary.address).tx.release())

        await expect(psp22Query.balanceOf(timelock.address)).to.have.output(depositedTokens)
        await expect(psp22Query.balanceOf(beneficiary.address)).to.have.output(0)
    })

    it('Release without deposit should not work', async () => {
        const { psp22: psp22Container, timelock: timelockContainer, beneficiary, releaseTime } = await setup()
        const { query: psp22Query } = psp22Container
        const { contract: timelock } = timelockContainer

        let tokens = 1000
        await expect(psp22Query.balanceOf(timelock.address)).to.have.output(0)
        await expect(psp22Query.balanceOf(beneficiary.address)).to.have.output(tokens)
        await api.tx.timestamp.set(releaseTime).signAndSend(beneficiary.pair)

        // release the tokens
        await expect(fromSigner(timelock, beneficiary.address).tx.release()).to.eventually.be.rejected

        // // timelock should be empty
        await expect(psp22Query.balanceOf(timelock.address)).to.have.output(0)
        await expect(psp22Query.balanceOf(beneficiary.address)).to.have.output(tokens)
    })

})
