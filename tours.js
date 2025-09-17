const express = require('express');
const router = express.Router();

const tours = [
  { id: 1, name: 'Paris', description: 'Explore the city of lights', image: 'paris.jpg' },
  { id: 2, name: 'Maldives', description: 'Enjoy the beautiful beaches', image: 'maldives.jpg' },
];

router.get('/', (req, res) => {
  res.json(tours);
});

module.exports = router;
