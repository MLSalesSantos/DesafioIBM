'use strict';

//const mongoose = require('mongoose');
//const Reserva = require('../models/reserva');
const repository = require("../repositories/reservas-repository");

exports.get = async (req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisicao'
        });
    }
}

exports.getById = async (req, res, next) => {
    try {
        var data = await repository.getById(req.params.id)
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisicao'
        });
    }
}

exports.getByStatus = async (req, res, next) => {
    try {
        var data = await repository.getByStatus(req.params.status);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.post = async (req, res, next) => {
    try {
        await repository.create(req.body);
        res.status(201).send({
            message: 'Reserva cadastrada com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: e.message

        });
    }
};

exports.put = async (req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Reserva atualizada com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisicao - ' + e.message,
        });
    }
};

exports.delete = async (req, res, next) => {
    try {
        await repository.delete(req.params.id, req.body)
        res.status(200).send({
            message: 'Reserva cancelada com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisicao'
        });
    }
};

exports.disponibilidade = async (req, res, next) => {
    try {
        const dispo = await repository.disponibilidade(req.body);
        console.log(dispo)
        res.status(201).send(
            dispo.length > 0 ? 'Reserva nao disponivel'
                : 'Reserva disponivel'
        );
    } catch (e) {
        res.status(500).send({
            message: e.message

        });
    }
};

exports.getDisponibilidade = async (req, res, next) => {
    try {
        const getDispo = await repository.GetDisponibilidade(req.body);
        console.log(getDispo)
        res.status(200).send({
            message: 'message de positivo'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisicao - ' + e.message,
        });
    }
};