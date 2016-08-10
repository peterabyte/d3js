define(["d3"], function(d3) {
    function cross(a, b) {
      var c = [], n = a.length, m = b.length, i, j;
      for (i = -1; ++i < n;) for (j = -1; ++j < m;) c.push({x: a[i], i: i, y: b[j], j: j});
      return c;
    }

    var multipleScaterplot = {
        callback: function(data) {
            var margin = {top: 20, right: 30, bottom: 30, left: 40},
                width = 960 - margin.left - margin.right,
                height = 500 - margin.top - margin.bottom;

            /*
             * value accessor - returns the value to encode for a given data object.
             * scale - maps value to a visual display encoding, such as a pixel position.
             * map function - maps from data value to display value
             * axis - sets up axis
             */

            // setup x
            var xValue = function(d) { return d.attack;}, // data -> value
                xScale = d3.scale.linear().range([0, width]), // value -> display
                xMap = function(d) { return xScale(xValue(d));}, // data -> display
                xAxis = d3.svg.axis().scale(xScale).orient("bottom").ticks(6).tickSize(-1 * height);

            // setup y
            var yValue = function(d) { return d.defense;}, // data -> value
                yScale = d3.scale.linear().range([height, 0]), // value -> display
                yMap = function(d) { return yScale(yValue(d));}, // data -> display
                yAxis = d3.svg.axis().scale(yScale).orient("left").ticks(6).tickSize(-1 * width);

            // setup fill color
            var cValue = function(d) { return d.level;},
                color = d3.scale.category10();

            // add the graph canvas to the body of the webpage
            var svg = d3.select("#example-content").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
              .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            // add the tooltip area to the webpage
            var tooltip = d3.select("body").append("div")
                .attr("class", "tooltip")
                .style("opacity", 0);

            // don't want dots overlapping axis, so add in buffer to data domain
            xScale.domain([d3.min(data, xValue)-1, d3.max(data, xValue)+1]);
            yScale.domain([d3.min(data, yValue)-1, d3.max(data, yValue)+1]);

            // x-axis
            svg.append("g")
              .attr("class", "x axis single-scaterplot-axis")
              .attr("transform", "translate(0," + height + ")")
              .call(xAxis)
              .append("text")
              .attr("class", "label")
              .attr("x", width)
              .attr("y", -6)
              .style("text-anchor", "end")
              .text("attack");

            // y-axis
            svg.append("g")
              .attr("class", "y axis single-scaterplot-axis")
              .call(yAxis)
              .append("text")
              .attr("class", "label")
              .attr("transform", "rotate(-90)")
              .attr("y", 6)
              .attr("dy", ".71em")
              .style("text-anchor", "end")
              .text("defense");

            // draw dots
            svg.selectAll(".dot")
              .data(data)
              .enter().append("circle")
              .attr("class", "dot")
              .attr("r", 3.5)
              .attr("cx", xMap)
              .attr("cy", yMap)
              .style("fill", function(d) { return color(cValue(d));})
              .on("mouseover", function(d) {
              tooltip.transition()
                .duration(200)
                .style("opacity", 0.9);
              tooltip.html(d.level + "<br/> (" + xValue(d) + ", " + yValue(d) + ")")
                .style("left", (d3.event.pageX + 5) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
            })
            .on("mouseout", function(d) {
              tooltip.transition()
                .duration(500)
                .style("opacity", 0);
            });

            // draw legend
            var legend = svg.selectAll(".legend")
            .data(color.domain())
            .enter().append("g")
            .attr("class", "legend")
            .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

            // draw legend colored rectangles
            legend.append("rect")
              .attr("x", width - 18)
              .attr("width", 18)
              .attr("height", 18)
              .style("fill", color);

            // draw legend text
            legend.append("text")
              .attr("x", width - 24)
              .attr("y", 9)
              .attr("dy", ".35em")
              .style("text-anchor", "end")
              .text(function(d) { return d;});
        }
    };

    return multipleScaterplot;
});