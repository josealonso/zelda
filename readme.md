# Zelda
### by Our3

## Introduction

Zelda allows makers and owners to create links between their physical items and the blockchain. 
For makers, the application provides a way to upload images and metadata for real-world products, 
create digital tokens representing those items (along with corresponding QR codes), 
and offer them for sale in a decentralized marketplace. 

For buyers, the application allows them to browse available collections in the marketplace, 
buy a token from a collection, and see the current tokens they own.

## Getting it up and running

### Prereqs

- Node.js
- hardhat

### Commands

1. start the hardhat node 
in zelda/nft-mrkt-backend run `npx hardhat node`

2. deploy the marketplace contract
in zelda/nft-mrkt-backend run `npx hardhat run scripts/deploy.ts --network localhost`

3. instead of the usual npm start to start the react server, use this instead
in zelda/nft-mrkt-frontend run `npm run start2`


npm start will still use the stubbed data


Visit [Our3](https://our3.xyz) \
Follow [Our3](https://twitter.com/our310)
