// const create = require("ipfs-http-client");

module.exports = {
  post: async (req, res) => {
    try {
      const uploadIPFS = async (file) => {
        const ipfs = create("https://ipfs.infura.io:5001/api/v0");
        return (await ipfs.add(file)).path;
      };

      const ipfsUrl = 'https://ipfs.infura.io/ipfs/';
      const imagePath = await uploadIPFS('test');
      const metadata = {
          "description": inputText,
          "image": `${ipfsUrl}${imagePath}`,
          "name": "PETO_NFT",
      };
      // const metadataPath = await uploadIPFS(JSON.stringify(metadata));

      console.log({metadata})

      res.send('test');
      
    } catch (error) {
      console.log(error)
    }
  },
};