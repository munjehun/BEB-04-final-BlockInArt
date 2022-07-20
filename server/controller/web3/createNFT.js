const abi = require("./abi");
const contractAddr = require("./contractAddr");

const Caver = require("caver-js");
const caver = new Caver('https://api.baobab.klaytn.net:8651/')

module.exports = {
  post: async (req, res) => {
    try {
      const tokenContract = await new caver.klay.Contract(abi, contractAddr);
      tokenContract.options.address = contractAddr;

      const newTokenId = await tokenContract.methods.mintNFT()
      .send({ from: account, gas: 0xf4240 });

      console.log(tokenContract);

      res.send("test");
    } catch (error) {
      console.log(error);
    }
  },
};
