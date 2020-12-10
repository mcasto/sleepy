#!/usr/local/bin/node
const { exec } = require("child_process");

process.stdin.resume();

const startTime = new Date();
console.log(`\nStarted at ${startTime.toLocaleTimeString()}`);

const getDuration = () => {
  const elapsed = intervalToDuration({
    start: startTime,
    end: new Date(),
  });

  return `${elapsed.hours} hours, ${elapsed.minutes} minutes`;
};

const gracefulExit = () => {
  volume.unmute();
  brightness.set(1);
  console.clear();
  console.log(`\nStarted at ${startTime.toLocaleTimeString()}`);
  console.log(`${getDuration()}\n`);
  exec("do-not-disturb off");
  process.exit(0);
};

const { intervalToDuration } = require("date-fns");
const brightness = require("osx-brightness");
const volume = require("osx-volume");
const { join } = require("path");
const argv = require("yargs")
  .alias("h", "hours")
  .describe("h", "Hours to dim screen")
  .default("h", 15)
  .alias("b", "brightness")
  .describe("b", "Set brightness level (% of full brightness)")
  .default("b", 1)
  .alias("p", "pink")
  .describe("p", "Open Pink Noise Player")
  .default("p", "true")
  .usage("Usage: $0 -h [num] -b [int 1-10]")
  .help("help").argv;

process.on("SIGINT", (code) => {
  gracefulExit();
});

const hours = argv.h || argv.hours || 15;
const level = 0.1 * (argv.b || argv.brightness || argv.bright || 1);
const pink = argv.p !== "false" || argv.pink !== "false";

let pinkInterval;

if (!pink) {
  volume.mute();
} else {
  exec(`afplay ${join(__dirname, "pink-noise.wav")}`);
  pinkInterval = setInterval(() => {
    exec(`afplay ${join(__dirname, "pink-noise.wav")}`);
  }, 9999);
}

brightness.set(level);
exec("do-not-disturb on");

const timeLog = setInterval(() => {
  process.stdout.write(`${getDuration()}\r`);
}, 1000);

setTimeout(() => {
  gracefulExit();
}, hours * 1000 * 60 * 60);
