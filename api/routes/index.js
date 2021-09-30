const express = require('express')

//foi adicionado as rotas de niveis e turmas

const pessoas = require('./pessoasRoute')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')

//foi adicionado as instâncias de níveis e turmas
//e refatorado um pouco a função
module.exports = app => {
 app.use(
   express.json(),
   pessoas,
   niveis,
   turmas
   )
 }