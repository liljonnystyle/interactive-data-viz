# Making a Symbol Map
***
##0. Starting with a Map — crime_map_0.html

Now that we've got some d3 basics under our belt, let's move on to something a bit more complicated: geo data!

This HTML file has a lot going on, including loading a geoJSON file with US state data, as well as our trusty crime data file. Our goal is to make a Symbol Map, specifically to add a circle for each state, centered on its centroid and sized according to the datapoint.

###Goals:
1. Understand the basics of [d3.geo()](https://github.com/mbostock/d3/wiki/Geo):
	1. How [d3.geo.path()](https://github.com/mbostock/d3/wiki/Geo-Paths#path) handles geoJSON data
	2. How [.projection()](https://github.com/mbostock/d3/wiki/Geo-Paths#path_projection) works
	3. How to use [.centroid()](https://github.com/mbostock/d3/wiki/Geo-Paths#path_centroid)

2. Add circles at the centroid of each state:
	1.  Use [```d3.scale.sqrt()```](https://github.com/mbostock/d3/wiki/Quantitative-Scales#sqrt) as the scale for the circle area
	2.  Create a special ```d3.geo.path()``` function using [```.pointRadius()```](https://github.com/mbostock/d3/wiki/Geo-Paths#wiki-path_pointRadius) for the circle path
	3.  Append the circle using ```path``` on top of the map

***
##1. Basic Symbol Map — crime_map_1.html

Hooray, now we have an (ugly!!) symbol map. It's time to use our tricks from the bar chart to make this map look better — let's add some color to those circles, and data labels on top.

###Goals:
1. Color the circles using ```d3.scale()```
2. Add data labels above the circle that appear on hover

***

##2. Add the Bar Chart! — crime_map_2.html

OK, now it's time to get fancy. Let's grab the code that we used to build the bar chart and mix it in with the map functions. We'll have to adjust the dimensions of the chart to make it fit, but when we're finished we'll have two different views of the data on one page!

###Goals:
1. Load the bar chart on the same page as the map
2. Adjust the layout until everything fits nicely

***

##3. Connect the Chart to the Map — crime_map_3.html

It wouldn't be a party if the map and the chart didn't influence each other, so let's hook them up! 

We'll accomplish this through a mix of class names and CSS styles. First, add class names on the dot group and the bar group, according to each element's State name, with this function:

```
function getClassName(name){
    return name.toLowerCase().replace(/^\s+|\s+$/g, '').replace(/\s+/g, '-');
}
```

Then make use of ```.on("mouseenter")``` and ```.on("mouseleave")``` to add a ```.selected``` class name to the respective SVG element — and let CSS handle the rest!

###Goals:
1. Make it so that a hover event on the map triggers a hover event in the chart
2. Reverse it so that a hover event on the chart triggers the map
3. Refine the hover style to make the interaction more obvious

***

##4. Refine the UI and Add Basic Animation — crime_map_4.html

Our visualization is looking pretty good, so now it's time to refine the design. Let's start by changing the "randomize" button to something more understandable, like a row of buttons for each data column.

Next, we'll add some basic animation to our chart for when it transitions between data columns. We'll have to reorganize some of our SVG attributes to be assigned before or after [.transition()](https://github.com/mbostock/d3/wiki/Transitions#d3_transition) is called.

###Goals:
1. Add buttons to select the data column
2. Add animation between chart types with ```.transition()```
3. Refactor the code for which attributes should be transitioned and which should be set before ```.transition()``` is called

###If you're feeling saucy:
1. Style the buttons set to look more cohesive
2. Add hover and selected state styles — and get creative!
3. Change the chart title to be more prominent on the page

***

##5. Enter Animations — crime_map_5.html

Our visualization is coming along nicely! But you'll realize that when the page loads, the map circles fade in from black, and the bar chart animates from the top left corner. Obviously this isn't ideal for a finished piece, so let's add some ```.enter()``` animations.

Personally, I like to fade-in my SVG elements by transitioning their fill from the background color to their assigned color. So let's set the ```fill``` of each entering element to ```#eee```. Slightly more complicated are the bars in the bar chart — we'll have to position them in their correct location to enter, and then animate their height from there.

###Goals:
1. Set a color on the circles so that they don't transition in from black
2. Position the bars so that they animate by growing upwards and with a more pleasant color transition

###If you're feeling saucy:
1. Play around with the timing of the animation, using ```.duration()``` and ```.delay()```
2. Try different easing equations

***