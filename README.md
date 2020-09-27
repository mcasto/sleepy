# sleepy

I use a Mac (running Catalina). When my wife and I are in a hotel room, 
I inevitably have my computer set up on the desk in the room and am working on something when she goes to bed.

She's hypersensitive to light in the room when she's going to sleep. If I manually reduce the brightness, I have to remember to turn it back up in the morning, but if I'm still groggy from waking, I often forget. To make this process easier, I wrote this little command-line app that dims my screen (and mutes my volume) for a pre-set time.

# Installation
`npm -i g mcasto/sleepy`

or

`yarn global add mcasto/sleepy`

# Usage
`$ sleepy [-h #] [-b #]`

or

`$ sleepy [--hours #] [--brightness #]`

# Command-Line Arguments
```
Usage: bin/index -h [num] -b [int 1-10]

Options:
  -h, --hours       Hours to dim screen                             [default: 8]
  -b, --brightness  Set brightness level (% of full brightness)     [default: 5]
  --help            Show help                                          [boolean]
```

# Examples
`$ sleepy -h 2 -b 5` will set brightness to 50% for 2 hours

`$ sleepy -h 0.001 -b 1` will set brightness to 10% for 3.6 seconds (a useful test)

# Notes
When it exits, brightness gets set to 100% and volume gets unmuted. This is true whether the script reaches its requested exit time or you use `CTRL-C` to force exit (or send SIGINT to the process).
