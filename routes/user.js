const router = require('express').Router();
const Ride = require('../models/Schema');

router.route('/').get((req, res) => {
  Ride.find()
    .then(Ride => res.json(Ride))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const firstname = req.body.firstname;
  const phone = req.body.phone;
  const email = req.body.email;
  const pickuplocation = req.body.pickuplocation;
  const destination= req.body.destination;
  const godate = req.body.godate;
  const hour = req.body.hour;
  const minute = req.body.minute;
  
  const newRide = new Ride({
    firstname,
    phone,
    email,
    pickuplocation,
    destination,
    godate,
    hour,
    minute,
  });

  newRide.save()
  .then(() => res.json('Ride added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Ride.findById(req.params.id)
    .then(Ride => {
      Ride.firstname = req.body.firstname;
      Ride.phone = req.body.phone;
      Ride.email = req.body.email;
      Ride.pickuplocation = req.body.pickuplocation;
      Ride.destination= req.body.destination;
      Ride.godate = req.body.godate;
      Ride.hour = req.body.hour;
      Ride.minute = req.body.minute;
      Ride.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;