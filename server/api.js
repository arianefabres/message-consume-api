const cors = require("cors");
const express = require("express");
const api = express();

api.use(cors());

api.get('/messages', async (req, res) => {
  try {
    const messages = require('./messages.json');
    // sort most recent at the top
    messages.messages.sort(function(a,b){
      if(a.timestamp == b.timestamp)
          return 0;
      if(a.timestamp > b.timestamp)
          return -1;
      if(a.timestamp < b.timestamp)
          return 1;
    });
    return res.send(messages);
  } catch (err) {
    console.log(err)
    return res.status(400).send({ error: 'Error loading messages' });
  }
});

api.listen('4001');

module.exports = api;