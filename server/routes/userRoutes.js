const express = require('express')
const router = require('express').Router();
const { getUsers, postUsers, updateUsers, deleteUsers } = require('../controllers/userControllers');

// read
router.get('/', getUsers)

// create
router.post('/', postUsers)

// update
router.put('/:id', updateUsers)

// delete
router.delete('/:id', deleteUsers)

module.exports = router;