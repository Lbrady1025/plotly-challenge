function readJSON(sample) {
    d3.json("../../data/samples.json").then( function(data) {
        //console.log(data);
    var metadata = data.metadata;

    var getResult = metadata.filter(sampleArr => sampleArr.id == sample);
    var result = getResult[0];

    var panel = d3.select("#sample-metadata");

    panel.html("");

    Object.entries(result).forEach(([key,value]) => panel.append("h6").text(`${key.toUpperCase()}: ${value}`))

    });
};

function addCharts (sample) {
    d3.json("../../data/samples.json").then( function(data) {
        var samples = data.samples;
        var getResult = samples.filter(sampleArr => sampleArr.id == sample);
        var result = getResult[0];

        var otu_ids = result.otu_ids;
        // console.log(ids);
        var sample_values = result.sample_values;
        // console.log(sample_ids);
        var otu_labels = result.otu_labels;
        // console.log(labels);

        var bubbleLayout = {
            title: "Bacteria Cultures Per Sample",
            margin: { t: 0 },
            hovermode: "closest",
            xaxis: { title: "OTU ID" },
            margin: { t: 30}
          };
          var bubbleData = [
            {
              x: otu_ids,
              y: sample_values,
              text: otu_labels,
              mode: "markers",
              marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Earth"
              }
            }
          ];
      
          Plotly.newPlot("bubble", bubbleData, bubbleLayout);
      
    })
    

};

function init() {
    var dropdown = d3.select("#selDataset");

    d3.json("../../data/samples.json").then( function(data) {
        //console.log(data);

        names = data.names;

        names.forEach( function (name) {
            dropdown.append("option").text(name).property("value");

        var initSample = names[0];
        readJSON(initSample);
        addCharts(initSample);
    });
    });

};

init();