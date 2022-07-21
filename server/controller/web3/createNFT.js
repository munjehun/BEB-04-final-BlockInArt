const abi = require("./abi");
const contractAddr = require("./contractAddr");

const fs = require("fs");

const Caver = require("caver-js");
const caver = new Caver("https://api.baobab.klaytn.net:8651/");

const ipfsUpload = require("./ipfsUpload");

module.exports = {
  post: async (req, res) => {
    try {

      const json = JSON.stringify({
        desc: 'test',
        name: 'test',
      })

      const jUrl = await ipfsUpload(json);


      const tokenContract = await new caver.klay.Contract(abi, contractAddr, {
        from: '0x505c94083EB4DAe6a2f92cE485a3335F631Be77C',
      });
      tokenContract.options.address = contractAddr;

      // const newTokenId = await tokenContract.methods.mintNFT(jUrl).send({
      //   from: '0x505c94083EB4DAe6a2f92cE485a3335F631Be77C',
      //   gas: 2000000,
      // });

      // console.log(account);
      console.log(newTokenId);

      res.send(ipfs);
    } catch (error) {
      console.log(error);
    }
  },
};
