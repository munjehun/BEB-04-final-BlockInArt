module.exports = {
  post: (req, res) => {
    try {
      console.log(req.session.user_id)
      if(!req.session.user_id){
        res.status(400).send();
      } else {
        res.status(200).send();
        req.session.destroy()
      }
    } catch (error) {
      console.log(error)
    }
  },
};
