'use strict';

const Reserva = require('../models/reserva');
const moment = require('moment');

const TIPOS_LIST = {
  SAIBRO: 'SAIBRO',
  HARD: 'HARD'
}

const isValidTipo = (tipo) => {
  let valores = Object.values(TIPOS_LIST);
  for (let i = 0; i <= valores.length; i++) {
    if (tipo === valores[i]) {
      return true;
    }
  }
  return false;
}

exports.get = async () => {
  const res = await Reserva.find({}, 'tipo status criadaEm inicioEm fimEm valor duracao');
  return res;
}

exports.getById = async (id) => {
  const res = await Reserva
    .findById(id, 'tipo status criadaEm inicioEm fimEm valor duracao');
  return res;
}

exports.getByStatus = async (status) => {
  const res = await Reserva
    .find({
      status: status
    }, 'tipo status criadaEm inicioEm fimEm valor duracao');
  return res;
}

exports.delete = async (id, data) => {
  await Reserva
    .findByIdAndUpdate(id, {
      $set: {
        tipo: data.tipo,
        status: data.status,
        criadaEm: data.criadaEm,
        inicioEm: data.inicioEm,
        fimEm: data.fimEm,
        duracao: data.duracao,
        valor: data.valor,
        canceladaEm: data.canceladaEm
      }
    });
}

exports.create = async (data) => {
  const dataInicio = moment(data.inicioEm);
  const dataFim = moment(data.fimEm);
  const criadaEm = new Date().toISOString();
  const duracao = new Date(dataFim.toDate() - dataInicio.toDate());

  if (!data) {
    throw new Error('Sem dados!')
  }

  if (!isValidTipo(data.tipo)) {
    throw new Error('O campo tipo so pode conter SAIBRO ou HARD')
  }

  if (!data.tipo) {
    throw new Error('O campo tipo precisa ser inserido no formato SAIBRO ou HARD')
  }

  if (!data.inicioEm || !data.fimEm) {
    throw new Error('Os campos incioEm e fimEm precisao ser inseridos no formato yyyy-mm-ddThh:mm:ssZ')
  }

  if ((duracao < 60) || (duracao % 60 !== 0)) {
    throw new Error('A duracao tem que ser maior que 60 minutos e multiplo de 60!')
  }

  let tempo = duracao.getUTCHours() + "h ";
  tempo += duracao.getUTCMinutes() + "m ";
  tempo += duracao.getUTCSeconds() + "s ";

  let valor = ((duracao.getTime() / (1000 * 60)) * 0.5)

  dataInicio.subtract(1, 'minutes')
  dataFim.add(1, 'minutes')
  const reservaExiste = await Reserva.find({
    tipo: data.tipo,
    inicioEm: {
      $gte: dataInicio.utc()
    },
    fimEm: {
      $lte: dataFim.utc()
    }
  });

  if (reservaExiste.length !== 0) {
    throw new Error('A Reserva ja existe');
  }

  data.valor = (valor).toFixed(2);
  data.duracao = (duracao.getTime() / (1000 * 60));
  data.criadaEm = criadaEm;
  var reserva = new Reserva(data);
  await reserva.save();
}

exports.update = async (id, data) => {
  const dataInicio = moment(data.inicioEm);
  const dataFim = moment(data.fimEm);
  const criadaEm = new Date().toISOString();
  const duracao = new Date(dataFim.toDate() - dataInicio.toDate());

  if (!data) {
    throw new Error('Sem dados!')
  }

  if (!isValidTipo(data.tipo)) {
    throw new Error('O campo tipo so pode conter SAIBRO ou HARD')
  }

  if (!data.tipo) {
    throw new Error('O campo tipo precisa ser inserido no formato SAIBRO ou HARD')
  }

  if (!data.inicioEm || !data.fimEm) {
    throw new Error('Os campos incioEm e fimEm precisao ser inseridos no formato yyyy-mm-ddThh:mm:ssZ')
  }

  if ((duracao < 60) || (duracao % 60 !== 0)) {
    throw new Error('A duracao tem que ser maior que 60 minutos e multiplo de 60!')
  }

  let tempo = duracao.getUTCHours() + "h ";
  tempo += duracao.getUTCMinutes() + "m ";
  tempo += duracao.getUTCSeconds() + "s ";

  let valor = ((duracao.getTime() / (1000 * 60)) * 0.5)

  dataInicio.subtract(1, 'minutes')
  dataFim.add(1, 'minutes')
  const reservaExiste = await Reserva.find({
    tipo: data.tipo,
    inicioEm: {
      $gte: dataInicio.utc()
    },
    fimEm: {
      $lte: dataFim.utc()
    }
  });

  if (reservaExiste.length !== 0) {
    throw new Error('A Reserva ja existe');
  }

  data.valor = (valor).toFixed(2);
  data.duracao = (duracao.getTime() / (1000 * 60));
  data.criadaEm = criadaEm;
  await Reserva
    .findByIdAndUpdate(id, {
      $set: {
        tipo: data.tipo,
        status: data.status,
        criadaEm: data.criadaEm,
        inicioEm: data.inicioEm,
        fimEm: data.fimEm
      }
    });
}

exports.disponibilidade = async (data) => {
  const res = await Reserva.find({
    tipo: data.tipo,
    inicioEm: new Date(data.inicioEm),
    fimEm: new Date(data.fimEm)
  },
    'tipo status criadaEm inicioEm fimEm valor duracao');
  return res;
}

exports.getDisponibilidade = async (data) => {
  const res = await Reserva
    .find({
      tipo: data.tipo,
      inicioEm: new Date(data.inicioEm),
      fimEm: new Date(data.fimEm)
    }, 'tipo inicioEm fimEm duracao');
  return res;
}