#Basic Animation

Animation takes awhile to get comfortable with, so it's best to just jump right in and start getting a feel for different movements, easings, durations and delays.

I've provided a basic HTML page with a button that animates three circles when you click it. At the moment it chooses a Math.random() position for the circles to be, and that movement is the only animation.

## Goals:

1. Play with a few different attributes to animate, such as position, fill, radius, stroke, or opacity
2. Add a delay on the elements and see how that feels in different animations ```.delay(function(d,i){ return i*200; }) ```
3. . Try out different easing equations, and try to get a feel for the difference between, say, ```cubic-in```, ```cubic-out```, and ```cubic-in-out```. If these feel too subtle, try playing with ```elastic``` and ```bounce```.

## If you're feeling saucy:

1. Try out method-chaining several animations, using ```.each("end",function(){ })```
2. Figure out how to animate items along a curve. (Hint: you're going to need ```.attrTween()``` and ```d3.interpolate()``` )