// process.env.RESERVOIR_API_KEY

const sdk = require('api')('@reservoirprotocol/v1.0#cpy2fla8spifn');

sdk.auth(process.env.RESERVOIR_API_KEY);
sdk.server('https://api-goerli.reservoir.tools');
sdk.postExecuteListV4({
  params: [
    {
      orderKind: 'seaport',
      orderbook: 'reservoir',
      automatedRoyalties: true,
      fees: [
        '0xaF609ef0f3b682B5992c7A2Ecc0485afD4816d54:10'
      ],
      currency: '0x883B256EeD86a9A603C0F98eD7CDE252ce497930',
      token: '0x46e663972AfE9D500B0A366CdEb8788e39DF1478:220',
      quantity: 3,
      weiPrice: '6600000000000000000',
      listingTime: '1669158515',
      expirationTime: '1669849715'
    }
  ],
  maker: '0xaF609ef0f3b682B5992c7A2Ecc0485afD4816d54',
  source: 'lux.market'
}, {accept: '*/*'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));