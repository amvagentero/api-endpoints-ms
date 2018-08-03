const apiEndpoints = require('./models/apiEndpoint');

exports.list = async (req, res) => {
  try {
    const result = await apiEndpoints.find({});
    res.json(result);
  } catch (e) {
    res.status(500).send(e);
  }
  //const query = req.query || {};
  /*
    User.apiQuery(query)
    // limit the information returned (server side) – e.g. no password
      .select('name email username bio url twitter background')
      .then((users) => {
        res.json(users);
      })
      .catch((err) => {
        logger.error(err);
        res.status(422).send(err.errors);
      }); */
};

const mongoose = require('mongoose');


exports.createApiEndpoint = async (req, res) => {
  const data = Object.assign({}, req.body) || {};
  data._id = mongoose.Types.ObjectId();
  try {
    const result = await apiEndpoints.create(data);
    res.json(result);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.updateApiEnpoint = (req, res) => {

};

exports.findOneEndpoint = (req, res) => {
  const id = req.params.id;

};