# sleepy

I use a Mac (running Catalina). When my wife and I are in a hotel room, 
I inevitably have my computer set up on the desk in the room and am working on something when she goes to bed.

She's hypersensitive to light in the room when she's going to sleep. I wrote this tiny command-line app so I can easily
dim my screen's brightness and mute the volume (so I don't accidentally start a sound that will wake her).

# Installation
`npm -i g mcasto/sleepy`
or
`yarn global add mcasto/sleepy`

# Usage
`$ sleepy [-h#] [-b#]`
or
`$ sleepy [--hours #] [--brightness #]`

# Command-line Arguments
`brightness` expects an integer between 0 and 10 (inclusive) and will be set to a percentage of its brightest setting based on that integer: (0%, 10%, 20%, ...)

`hours` can use decimals like 6.5 (6 hours and 30 minutes) or, if you want less than an hour, use something like 0.5 for 30 minutes.
