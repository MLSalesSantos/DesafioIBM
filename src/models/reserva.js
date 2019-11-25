'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    tipo: {
        type: String,
        require: [true, 'O tipo é obrigatorio'],
        enum: ['SAIBRO', 'HARD'],
        trim: true,
        description : " Tipo da quadra a ser reservada "
    },

    status: {   
        type: String,
        require: true,
        trim: true,
        enum: ['ativa', 'cancelada', 'pago'],
        default: "ativa",
        description : " Status da reserva "
    
    },

    criadaEm: { 
        type: Date,
        trim: true,
        default: new Date().toISOString(),
        description : " Data/Hora da insercao da Reserva "
    },

    inicioEm: {
        type: Date,
        require: [true, 'A adata de inicio é obrigatoria'],
        trim: true,
        description : " Data/Hora do inicio da partrida "
    },

    fimEm: {
        type: Date,
        require: [true, 'A adata de fim é obrigatoria'],
        trim: true,
        description : " Data/Hora do fim da partida "
    },

    duracao: {
        type: String,
        require: [true, 'A adata de inicio é obrigatoria'],
        trim: true,
        description : " Tempo de duracao da reserva "
    },

    valor: {
        type: String,
        trim: true,
        description : " Valor corado pela reserva "
    },

    canceladaEM: {
        type: Date,
        trim: true,
        description : " Data/Hora do cancelamento da reserva "
    }

});
mongoose.connect('mongodb://localhost:27017/Reservas', { useNewUrlParser: true, useUnifiedTopology: true });
const Reserva = mongoose.model('Reserva', schema);
module.exports = Reserva;