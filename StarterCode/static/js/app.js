function readJSON(sample) {
    d3.json("../../data/samples.json").then( function(data) {
        //console.log(data);
    var metadata = data.metadata;

    var getResult = metadata.filter(sampleArr => sampleArr.id == sample);
    var result = getResult[0];

    var panel = d3.select("#sample-metadata");

    panel.html("");

    Object.entires(result).foreach(([key,value]) => panel.append("h6").text(`${key.toUpperCase()}: ${value}`))

    });
};

function addCharts (sample) {
    d3.json("../../data/samples.json").then( function(data) {
        var sample = data.sample;
        var getResult = sample.filter(sampleArr => sample.id == sample);
        var result = getResult[0];

        var ids = result.otu_ids;
        console.log(ids);
        var sample_ids = result.sample_ids;
        console.log(sample_ids);
        var labels = result.otu_labels;
        console.log(labels);
    })
    

};

function init() {
    var dropdown = d3.select("#selDataset");

    d3.json("../../data/samples.json").then( function(data) {
        //console.log(data);

        data.names.forEach( function (name) {
            dropdown.append("option").text(name).property("value");

    });
    });

};

init();