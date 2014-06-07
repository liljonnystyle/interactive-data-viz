# Introduction to Interactive Data Visualization with d3.js

* * * 


## Schedule: Day 1

**9:00am**: Arrival and Check-In

**9:15am**: The Landscape of Data Visualization

* Overview of available tools and what will be covered in the next 2 days.

**9:30am**: Basic Visualization Concepts

* Learning some of the theory and vocabulary that pops up in visualizations, as well as some general guildelines for visual design.

**10:00am**: Narrative Structures

* Lecture and discussion. Analysis and breakdown of outstanding data visualizations.

###Exercise:

1. What is the narrative structure?2. How does the visualization lead you through the data?3. What is the story being told?4. How could this have been improved?

Examples:

* [Where Does the Money Go?](http://migration.stamen.com/#bin=0)
* [Word Frequency Between The Bible and the Quran](http://www.pitchinteractive.com/bibleQuran/#war)
* [Buy or Rent Calculator](http://www.nytimes.com/interactive/2014/upshot/buy-rent-calculator.html)
* [Poverty Tracker](http://povertytracker.robinhood.org/)
* [The Refugee Project](http://www.therefugeeproject.org/)

**11:15am**: Interrogating the Data

* [Crime Data per State (2005)](http://www.infochimps.com/datasets/crime-rates-by-state-2004-and-2005-and-by-type-2005-cleaned-up-v)

####Exercise:

1. Come up with three questions to ask the data
2. Sketch two visualization types to explore each question


**12:00pm**: Break for Lunch

**1:00pm**: Build an Interactive Data Visualization

* Work with CSV file to build a visualization. Data binding, scales, axes, user interaction with d3.js.

**4:00pm**: Conclusion and Short Review

## Schedule: Day 2

**9:00am**: Arrival and Check In

**9:15am**: Making Understandable Visualizations

* Making the narrative of data storytelling understandable to the user using principles from UX and interaction deisgn. When and how to include instructions with your visualization, common UX pitfalls, and a close reading of successful visualizaitons.

####Exercise

1. What sort of UI elements are present?2. Is there a key?3. How does the visualization instruct the viewer to use it?4. How could it be improved?

Examples:

* [House Hunting](http://www.trulia.com/vis/tru247/)
* [Four Ways to Slice Obama's Budget Proposal](http://www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html?_r=0)
* [Selfiexploratory](http://selfiecity.net/selfiexploratory/)
* [The Death of Afgans](http://www.thenation.com/afghanistan-database)
* [How Recession Shaped the Economy](http://www.nytimes.com/interactive/2014/06/05/upshot/how-the-recession-reshaped-the-economy-in-255-charts.html)

**10:00am**: d3.js vs. CSS

* When to use d3.js and when to use CSS in your visualization. We'll cover this topic both from a visual design and a user interaction perspective.

**11:00am**: Let's make a map!

**12:00pm**: Break for Lunch

**1:00pm**: Animation in Data Visualization

* Understanding when and how to use animation in your visualization. Going through the d3 transition() API, and building multi-step animations.

**2:30pm**: Continuing Our Map Exercise

**4:00pm**: Review and Additional Resources

# Resources

##Resources, Day 1


### The d3.js Environment

* [d3 Show Real](http://bl.ocks.org/mbostock/1256572)
* [d3 Layouts](https://github.com/mbostock/d3/wiki/Layouts)
* [NVD3](http://nvd3.org/)
* [Rickshaw](http://code.shutterstock.com/rickshaw/)
* [Crossfilter](http://square.github.io/crossfilter/)
* [dc.js](http://dc-js.github.io/dc.js/)
* [RAW](http://app.raw.densitydesign.org/)

* * * 

### Basic Visualization Concepts

* [Chart Suggestions, A Thought Starter](http://extremepresentation.typepad.com/blog/files/choosing_a_good_chart.pdf)
* [d3.js Gallery](https://github.com/mbostock/d3/wiki/Gallery)
* [Attribute Encoding](http://www.madetomeasurekpis.com/using-cognitive-research-to-design-better-reports-and-dashboards/)
* [Preattentive Processing](http://www.infovis-wiki.net/index.php/Preattentive_processing)
* [Find the Un-bump](http://search.bwh.harvard.edu/new/pubs/IntrotoSearchAsym.pdf)
* [Cartogram Types](http://www.ncgia.ucsb.edu/projects/Cartogram_Central/types.html)
* Electoral Vote Maps: [1](http://www.centerforpolitics.org/crystalball/articles/category/2012-president/) [2](http://www-personal.umich.edu/~mejn/election/2012/) [3](http://s1062.photobucket.com/user/JeffreyLAlbertson/media/Other%20Cartograms/electoralcollegemap2012vfinal-1.gif.html) [4](http://vis.berkeley.edu/courses/cs294-10-fa07/wiki/index.php/Using_Space_Effectively:_2D)
* [Color Theory Tutorial](http://earthobservatory.nasa.gov/blogs/elegantfigures/2013/08/05/subtleties-of-color-part-1-of-6/)
* [ColorBrewer Scales](http://bl.ocks.org/mbostock/5577023)

* * *

###Narrative Structure
* [Narrative Categories](http://vis.stanford.edu/files/2010-Narrative-InfoVis.pdf)
* Author Driven
	* [Refugees by Country](http://visualizations.manassra.com/syria)
	* [The Facebook Offering](http://www.nytimes.com/interactive/2012/05/17/business/dealbook/how-the-facebook-offering-compares.html)
* Viewer Driven
	* [Crimespotting](http://sanfrancisco.crimespotting.org/#dtstart=2014-04-19T23:59:59-07:00&dtend=2014-04-26T23:59:59-07:00&hours=0-23&types=AA,Mu,Ro,SA,DP,Na,Al,Pr,Th,VT,Va,Bu,Ar&lat=37.760&lon=-122.438&zoom=13)
	* [Paths to the White House](http://elections.nytimes.com/2012/results/president/scenarios)
* Martini Glass
	* [Out of Sight, Out of Mind](http://drones.pitchinteractive.com/)
	* [US Gun Deaths](http://guns.periscopic.com/?year=2013)
* [Facebook Friendships](http://www.facebookstories.com/stories/1574/interactive-mapping-the-world-s-friendships#color=continent&story=1&country=US) 


***

###d3.js Time!

* [Protovis, an Interactive Toolkit for Visualization](http://vis.stanford.edu/files/2009-Protovis-InfoVis.pdf)
* [An SVG Primer](http://alignedleft.com/tutorials/d3/an-svg-primer)
* [Binding Data Tutorial](https://www.dashingd3js.com/binding-data-to-dom-elements)
* [Scales Tutorial](http://alignedleft.com/tutorials/d3/scales)
* [Axes Tutorial](http://alignedleft.com/tutorials/d3/axes)
* [SVG Transform Attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform)

***

##Resources Day 2

###UI Design Principles
* [Bootstrap Components](http://getbootstrap.com/components/)
* [Animatable](http://leaverou.github.io/animatable/)


* * *

###Animation
* [Piecewise Animations (Graphic)](http://research.microsoft.com/pubs/130998/bv_ch19.pdf)
* [Piecewise Animations (Movie)](http://vis.berkeley.edu/papers/animated_transitions/)
* [d3 Transition API](https://github.com/mbostock/d3/wiki/Transitions)
* [Easing Equations](http://easings.net/)
* [Motion Studies Video](http://vimeo.com/17411241)
* [d3 Easing Equations, Visualized](http://blog.vctr.me/experiments/transition-tweens.html)

* * *

##General Resources
* [Let's Make A Map — d3.geo() Tutorial](http://bost.ocks.org/mike/map/)
* [Infochimps — Free Datasets](http://infochimps.org/datasets)
* [A Tour Through the Visualization Zoo](http://hci.stanford.edu/jheer/files/zoo/)
* [Mind-Hacking Visual Transitions](http://looksgoodworkswell.blogspot.com/2006_03_01_archive.html)
