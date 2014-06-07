# Making a Bar Chart

***
## 0. Displaying Data on the Page

So we've got a basic HTML page, with an SVG element on the page and [d3.csv()](https://github.com/mbostock/d3/wiki/CSV#csv) loading our CSV file.

###Goals:
1. Understand how [.data()](https://github.com/mbostock/d3/wiki/Selections#data), [.enter()](https://github.com/mbostock/d3/wiki/Selections#wiki-enter), and [.exit()](https://github.com/mbostock/d3/wiki/Selections#exit) work
2. Add [rect](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect) elements to the page with our CSV data bound to them
3. Set the ```width```, ```height```, ```x```, and ```y``` attributes

***
## 1. Adding Scales

Now that we've got some (ugly!!) bars on the page, let's make them a bit prettier with [d3.scale](https://github.com/mbostock/d3/wiki/Quantitative-Scales#linear). A scale is comprised of three parts:

* Type of scale, either quantitative (linear, power, log), ordinal (discrete sets, like names or categories), or time (using the Date() object)
* Domain (input)
* Range (output)

We'll use ```d3.scale.linear()``` for three aspects of our graph: x-position, y-position, and color.

###Goals:
1. Use [d3.max()](https://github.com/mbostock/d3/wiki/Arrays#d3_max) to calculate the max of our dataset
2. Add an x-position scale to evenly space our bars with appropriate padding (```x```)
3. Add a y-position scale to calculate both ```height``` and ```y```
4. Add a color scale to calculate the ```fill``` of the bars according to their value

***

## 2. Adding Axes

Time to start getting fancy! Now we're going to add some labeling to our file, to turn it from a pile of rectangles into an understandable graph. We'll be adding three important items:

* A graph title so that we know which datapoint we are looking at
* Y-Axis to show the values of the bars
* State labels on the bottom of the graph

We'll be introducing a couple of concepts here, namely [d3.axis()](https://github.com/mbostock/d3/wiki/SVG-Axes#axis) for the y-axis, and making use of SVG  [g](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g) elements and [transform](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform) attributes to create the state labels. We'll also look at some of the formatting elements available for SVG [text](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text).

###Goals:
1. Add a ```text``` label at the top of the graph with our datapoint as a title
2. Use ```d3.axis()``` with our y-position ```scale``` to add a y-axes on the left side of the graph
3. Add state labels, in three parts:
	1. Wrap each of the ```rect``` elements in a ```g``` group, ```translate``` them to their correct position
	2. Reposition ```rect```  inside of the transform
	3. Add ```text``` labels with the state name and ```rotate``` them to be vertical.

***

##3. Time to Add Interactivity!

Oh boy, now we're getting somewhere! It's time to make use of our full dataset, and add the ability to view graphs of the other data columns. This section is designed to show the difference between ```.enter()``` code and regular updates, and how to bind new data to elements through ```.data()``` and update the SVG attributes.

###Goals:
1. Refactor the code so that you have a function to call each time the data is updated.
2. Make a button that randomly picks which data column to show, and updates the graph when clicked

***

## 4. Basic User Interactivity

Data visualization is no fun without the data, so let's build a way to see the individual datapoints. In this section we'll add some hover interactivity, and explore when it's best to do that in CSS vs. JS. For the JS side of things, we'll be exploring d3's event-binding with [.on()](https://github.com/mbostock/d3/wiki/Selections#on).

###Goals:
1. Add a data label at the top of each bar
2. Hide the label, and display it on ```:hover``` of the group in CSS
3. Rewrite the hover behavior using ```.on("mouseenter")``` and ```.on("mouseleave")```

***

#Hooray, you have a bar chart!
