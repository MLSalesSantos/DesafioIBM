'use strict'; 

const express = require('express');
const router = express.Router();  
const controller = require('../controllers/reserva-controller');

router.get('/', controller.get);
router.get('/admin/:id', controller.getById);
router.get('/:status', controller.getByStatus);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/cancelar/:id', controller.delete);
router.post('/disponibilidade', controller.disponibilidade);
router.get('/disponibilidade', controller.getDisponibilidade);

module.exports = router;  