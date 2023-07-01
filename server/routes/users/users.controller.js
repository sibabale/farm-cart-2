const users =  require('../../models/users.model')

function createNewUser (req, res) {

  if (!req.body.title) {
    return res.status(400).json({
      message: "No user name"
    }) 
  } else {
    users.push({...req.body});
    res.send(users)
  }

};

function getUser (req, res) {

  if (!req.body.title) {
    return res.status(400).json({
      message: "No user name"
    }) 
  } else {
    users.push({...req.body});
    res.send(users)
  }

};



module.exports =  {
  getUser,
  createNewUser,
}