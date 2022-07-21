const abi = require("./abi");
const contractAddr = require("./contractAddr");

const Caver = require("caver-js");
const caver = new Caver('https://api.baobab.klaytn.net:8651/')

module.exports = {
  post: async (req, res) => {
    try {

      const account = await caver.klay.getAccount();
      const tokenContract = await new caver.klay.Contract(abi, contractAddr, {
        from: '0x505c94083EB4DAe6a2f92cE485a3335F631Be77C'
      });
      tokenContract.options.address = contractAddr;

      const newTokenId = await tokenContract.methods.mintNFT('');

      console.log(account);
      console.log(newTokenId);

      res.send("test");
    } catch (error) {
      console.log(error);
    }
  },
};
