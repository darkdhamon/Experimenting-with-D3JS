(function () {
    // data set
    const dataset = [200, 8, 50, 16, 16, 32, 64, 128, 65, 48, 215, 45, 31, 20, 24];
    // find the largest number in the data set.
    const largest = d3.max(dataset);
    const time = 2000;

    // HTML Horizantal Bar Chart
    {
        const graph1 = d3.select("#graph1");


        // D3 Scaling method
        var scale = d3.scaleLinear()
            .domain([0, largest])
            .range([0, 100]);

        graph1.selectAll("div.horizantal-bar")
            .data(dataset)
            .enter()
            // add a bar to the graph for each data element
            .append("div").attr("class", "horizantal-bar")
            // set the inital width to 0
            .style("width",
                function() {
                    return "0";
                })
            // bars transition to there correct values.
            .transition().duration(time).style("width",
                function(d) {
                    return scale(d) + "%";
                })
            // set the text of the div to the value of the data point.
            .text(
                function(d) {
                    return d;
                });

        // set each bar to a different color.
        graph1.selectAll("div").style("background-color",
            function(d, i) {
                return "hsl(" + 360 / dataset.length * i + ",100%,80%)";
            });
    }
    // SVG Horizantal Bar Chart
    {
        const graph2 = d3.select("#graph2");
        $("#graph2").hide();
        var loaded = false;
        var initialLoadComplete = false;
        function renderSVGHorzBarGraph() {
            if (loaded) {
                $("#graph2").show();
            }
            var width = $("#graph2").innerWidth();
            
            // D3 Scaling
            var scale = d3.scaleLinear()
                .domain([0, largest])
                .range([0, width-6]);
            var barHeight = 20;
            
            graph2.style("height", function () { return barHeight * dataset.length+8 });
            graph2.selectAll("g").remove();
            //graph2.attr("viewBox", function() { return "0 0 " + width + " " + barHeight * dataset.length; });
            const bar = graph2.selectAll("g").data(dataset).enter()
                .append("g")
                .attr("transform",
                    function(d, i) {
                        return "translate(0," + i * barHeight + ")";
                    });
            if (!initialLoadComplete) {
                bar.append("rect")
                    .attr("width", 0)
                    .attr("height", barHeight - 3).style("fill",
                        function (d, i) {
                            return "hsl(" + 360 / dataset.length * i + ",100%,80%)";
                        })
                    .transition().duration(time)
                    .attr("width", scale);;


                bar.append("text")
                    .attr("x", 0)
                    .attr("y", barHeight / 2 -2)
                    .attr("dy", ".35em")
                    .text(function(d) { return d; })
                    .transition().duration(time)
                    .attr("x", function(d) { return scale(d) - 3; });
            } else {
                bar.append("rect")
                    .attr("height", barHeight - 1)
                    .attr("width", scale).style("fill",
                        function (d, i) {
                            return "hsl(" + 360 / dataset.length * i + ",100%,80%)";
                        });;


                bar.append("text")
                    .attr("y", barHeight / 2)
                    .attr("dy", ".35em")
                    .text(function (d) { return d; })
                    .attr("x", function (d) { return scale(d) - 3; });
            }
            if (loaded) {
                initialLoadComplete = loaded;
            }
            loaded = true;
        }

        renderSVGHorzBarGraph();
        setTimeout(renderSVGHorzBarGraph, 1);
        //$("svg").on("load", RenderSVGBarGraph);
        $(window).resize(renderSVGHorzBarGraph);
    }
    // SVG Vertical Bar Chart from 
    {
        const graph3 = d3.select("#graph3");
        $("#graph3").hideFocus();
        var loaded = false;
        var initialLoadComplete = false;
        function renderSVGVertBarGraph() {
            if (loaded) {
                $("#graph3").show();
            }
            var width = $("#graph3").innerWidth();
            var hieght = $("#graph3").innerHeight();
            //d3 scaling
            var scale = d3.scaleLinear().range([hieght, 0]).domain([largest, 0]);

            var barWidth = width / dataset.length;

            graph3.selectAll("g").remove();

            const bar graph3

        }
    }
})();