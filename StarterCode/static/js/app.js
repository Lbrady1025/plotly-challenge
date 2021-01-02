function readJSON(sample) {
    d3.json("../../data/samples.json").then( function(data) {
        //console.log(data);
    
    var ids = data.samples[0].otu_ids;
    console.log(ids);
    var sample_ids = data.samples[0].sample_ids;
    console.log(sample_ids);
    var labels = data.samples[0].otu_labels;
    console.log(labels);
    });
};

function init() {
    var dropdown = d3.select("#selDataset");

    d3.json("../../data/samples.json").then( function(data) {
        //console.log(data);

        data.names.forEach( function (name) {
            dropdown.append("option").text(name).property("value");

        readJSON();
    });
    });

};

init();