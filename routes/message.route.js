const express = require('express');
const app = express();
const messageRoutes = express.Router();

// Require Message model in our routes module
let Message = require('../models/Message');

// Defined store route
messageRoutes.route('/add').post(function (req, res) {
  let message = new Message(req.body);

  console.log("message.id : " + message.id );
  console.log("message.content : " + message.content);

  message.save()
    .then(game => {
    res.status(200).json({'message': 'Message in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
messageRoutes.route('/').get(function (req, res) {
    Message.find(function (err, messages){
    if(err){
      console.log(err);
    }
    else {
      res.json(messages);
    }
  });
});

// Defined edit route
messageRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Message.findById(id, function (err, message){
      res.json(message);
  });
});

//  Defined update route
messageRoutes.route('/update/:id').post(function (req, res) {
    Message.findById(req.params.id, function(err, message) {
    if (!message)
      return next(new Error('Could not load Document'));
    else {
        message.id = req.body.id;
        message.content = req.body.content;

        message.save().then(message => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
messageRoutes.route('/delete/:id').get(function (req, res) {
    Message.findByIdAndRemove({_id: req.params.id}, function(err, message){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = messageRoutes;