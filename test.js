<script defer>

var width = 1200, height = 500, padding = 50;
var svg = d3.select("span").append("svg").attr("width",width).attr("height",height);

d3.json("states.json",function(json){
    svg.append("g").attr("class","mapGroup");
    var states = svg.select(".mapGroup")
        .selectAll(".stateLine")
        .data(json.features);

    states.enter()
        .append("path")
        .attr("class","stateLine")
        .attr("d", d3.geo.path());
        // .attr("projection", d3.geo.orthographic);

    function getCentroid(stateName) {
        var stateData;
        json.features.forEach(function(d,i){
            if (d.properties.NAME == stateName) {
                stateData = d;
                return;
            }
        });
        return d3.geo.centroid(stateData);
    }

    d3.csv("crime_each.csv",function(csv){

        var dataTitles = ["Murder","Robbery","Aggravated Assault","Burglary","Motor Vehicle Theft"];
        var dataPoint = dataTitles[Math.floor(Math.random()*5)];

        var button = d3.select("body").insert("div","svg")
            .attr("class","button").text("randomize")
            .on("click",function(){
                dataPoint = dataTitles[Math.floor(Math.random()*5)];
                displayData();
            });

        function setupData() {
            svg.append("text").attr("class","title")
                .attr("x",width/2).attr("y",padding)
                .text(dataPoint);
                
            var states = svg.append("g").attr("class","dotGroup")
                .selectAll(".state").data(csv);
            var entering = states.enter().append("g").attr("class","state");

            entering.append("path").datum(function(d) {
                var stateName = d.State.replace(/^\s+|\s+$/g, '');
                return {
                    type: "Point",
                    coordinates: getCentroid(stateName), 
                    radius: parseFloat(d[dataPoint]),
                    dataset: d
                };
            });
        }

        function displayData() {

            var extent = d3.extent(csv,function(d){
                return parseFloat(d[dataPoint]);
            });
            // console.log(extent);
            var radiusScale = d3.scale
                .sqrt()
                .domain(extent)
                .range([3,30]);
            var circlePath = d3.geo.path()
                .pointRadius(function(d){
                    return radiusScale(d.radius);
                })
            svg.select(".dotGroup")
                .selectAll("path")
                .each(function(d){
                    d.radius = parseFloat(d.dataset[dataPoint])
                })
                .attr("d",circlePath);
            svg.select(".title")
                .text(dataPoint);

        }

        setupData();
        displayData();
    });
});

</script>