#!/usr/local/bin/node
process.stdin.resume();

const brightness = require("osx-brightness");
const volume = require("osx-volume");
const { argv } = require("yargs");

process.on("SIGINT", (code) => {
  volume.unmute();
  brightness.set(1);
  process.exit(0);
});

const hours = argv.h || argv.hours || 8;
const level = 0.1 * (argv.b || argv.brightness || argv.bright || 5);

volume.mute();
brightness.set(level);

setTimeout(() => {
  volume.unmute();
  brightness.set(1);
  process.exit(0);
}, hours * 1000 * 60 * 60);
