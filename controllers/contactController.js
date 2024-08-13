const express = require('express');

const contact = async (req, res) => {
    try {
      const { name,email,comment } = req.body;
      console.log(email)
      res.json(email);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };


  
  module.exports = {
    contact
  };
  