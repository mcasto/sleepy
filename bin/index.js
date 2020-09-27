#!/usr/local/bin/node
process.stdin.resume();

process.on('SIGINT', (code) => {
  volume.unmute();
  exec(`brightness 1`);
  process.exit(0);
})

const { exec } = require('child_process');
const volume = require('osx-volume');
const {argv} = require('yargs');

const hours = argv.h || argv.hours || 8;
const brightness = .1 * (argv.b || argv.brightness || argv.bright || 5);

volume.mute();
exec(`brightness ${brightness}`);

setTimeout(() => {
  volume.unmute();
  exec(`brightness 1`);
}, (hours * 1000*60*60));