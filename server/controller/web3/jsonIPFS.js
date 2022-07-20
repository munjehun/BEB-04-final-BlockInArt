module.exports = {
  post: async (req, res) => {
    try {
      res.send('test');
    } catch (error) {
      console.log(error)
    }
  },
};