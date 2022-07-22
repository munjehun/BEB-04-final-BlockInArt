const abi = require("./abi");
const contractAddr = require("./contractAddr");

const Caver = require("caver-js");
const caver = new Caver("https://api.baobab.klaytn.net:8651/");

const ipfsUpload = require("./ipfsUpload");

module.exports = {
  post: async (req, res) => {
    try {
      const json = JSON.stringify({
        desc: "test",
        name: "test",
      });

      const jUrl = await ipfsUpload(json);

      const account = await caver.klay.accounts.wallet.add(
        "0xbe4741d99e691eeec76d9ee4519355542d283e81acc074ea8c4ccc0c0e0b4cc3"
      );

      console.log(account.address);

      const tokenContract = await new caver.klay.Contract(abi, contractAddr, {
        from: "0x505c94083EB4DAe6a2f92cE485a3335F631Be77C",
      });
      tokenContract.options.address = contractAddr;

      const tx = await tokenContract.methods.mintNFT(jUrl).send({
        from: account.address.toString(),
        gas: 2000000,
      });

      // console.log(account);
      console.log(tx);

      res.send("test");
    } catch (error) {
      console.log(error);
    }
  },
};
