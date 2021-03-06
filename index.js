const lolcatjs = require('lolcatjs')
const figlet = require('figlet')
let { spawn } = require('child_process')
let path = require('path')
const CFonts  = require('cfonts')

lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;

CFonts.say('[ROOT] STARTING BOT...', {
font: 'console',
align: 'left',
gradient: ['blue', 'red']
})

CFonts.say('----------------- MS_BOT -----------------', {
    font: 'console',
    align: 'center',
    gradient: ['blue', 'green']
})
CFonts.say('Welcome In\nMS BOT WA', {
  font: 'chrome',
  align: 'center',
  gradient: ['blue', 'green']
})
function start() {
  let args = [path.join('Fxc7.js'), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['blue', 'green']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  .on('message', data => {
    if (data == 'reset') {
      console.log('RESET')
      p.kill()
      start()
      delete p
    }
  })
}
start('Fxc7.js')
