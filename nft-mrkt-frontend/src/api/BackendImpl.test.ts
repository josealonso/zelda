import '@testing-library/jest-dom'
import BackendAPIImpl from "./BackendImpl";

const testAddress = "0xfc43f5f9dd45258b3aff31bdbe6561d97e8b71de"

test('covalent api', async () => {
    let api = new BackendAPIImpl("test")
    let nfts = await api.getUserNFTs(testAddress)
    expect(nfts).not.toBeNull()
    expect(nfts).toHaveLength(4)
}, 15000);
