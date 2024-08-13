const express = require('express');
const router = express.Router();
const Image = require('../models/Image');

router.get('/:id', async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ success: false, message: 'Image not found' });
    }
    res.set('Content-Type', image.contentType);
    res.send(Buffer.from(image.imageBase64, 'base64'));
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error });
  }
});

module.exports = router;
