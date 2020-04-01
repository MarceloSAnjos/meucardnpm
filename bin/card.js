#!/usr/bin/env node
// Usado para dizer ao Node.js que se trata de uma ferramenta do CLI

// Declarando os módulos:
const chalk = require('chalk')
const boxen = require('boxen')

// Definindo as opções para o ‘boxen’:
const options = {
  padding: 2,
  margin: 1,
  borderStyle: 'round'
}

// Inclusão do Text e mais as definições do ‘chalk’:
const data = {
  name: chalk.white('Marcelo dos Anjos/'),
  handle: chalk.green('marcelodosanjos'),
  work: chalk.white('Software Developer at World'),
  twitter: chalk.yellow('https://twitter.com/cellodosanjos'),
  github: chalk.cyan('https://github.com/marcelosanjos'),
  linkedin: chalk.white('https://www.linkedin.com/in/cellodosanjos/'),
  instagram: chalk.gray('https://instagram.com/cellodosanjos'),
  npx: chalk.white('npx marcelodosanjos'),
  labelWork: chalk.magenta.bold('      Work:'),
  labelTwitter: chalk.blue.bold('   Twitter:'),
  labelGitHub: chalk.gray.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelInstagram: chalk.red.bold(' Instagram:'),
  labelCard: chalk.white.bold('      Card:')
}

// Aqui será a saída do nosso Cartão Pessoal em NPX:
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const instagraming = `${data.labelInstagram}  ${data.instagram}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const carding = `${data.labelCard}  ${data.npx}`

// Aqui devemos colocar toda a nossa saída numa única variável para que possamos usar
// o ‘boxen de maneira efetiva:
const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + instagraming + newline + newline + carding

console.log(chalk.red(boxen(output, options)))