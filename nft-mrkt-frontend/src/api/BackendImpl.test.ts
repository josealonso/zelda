import '@testing-library/jest-dom'
import BackendAPIImpl from "./BackendImpl";
import { AlchemyProvider } from "@ethersproject/providers";
import { BigNumber } from "ethers";

const testAddress = "0xfc43f5f9dd45258b3aff31bdbe6561d97e8b71de"

test('covalent api', async () => {
    let api = new BackendAPIImpl("test")
    let nfts = await api.getUserNFTs(testAddress)
    expect(nfts).not.toBeNull()
    expect(nfts).toHaveLength(4)
}, 15000);

test('test get nft meta from mumbai', async () => {
    const provider = async function() {
        return new AlchemyProvider("maticmum");
    }
    let api = new BackendAPIImpl(
      "test",
      provider
      )
    let token = await api.getTokenDetail("0x38bc14caca3d7e9fb096930f91a47dbbbf11b2e2", 11);

    expect(token.id).toEqual(BigNumber.from(11))
    expect(token.ownerAddress.toLowerCase()).toEqual(testAddress)
    expect(token.name).toEqual("asdfas")
    expect(token.description).toEqual("asdasdfasd")
    expect(token.image).toEqual("https://cross-mint.s3.eu-central-1.amazonaws.com/files/80001/d8295e23-20f9-4504-a16c-02c7c8729f57")
}, 15000);
