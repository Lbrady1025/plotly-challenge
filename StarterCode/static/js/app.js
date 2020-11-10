function readJSON(id) {
    d3.json("../samples.json").then( function(data) {
        console.log(data);
    });
    // var ids = data.samples[0].otu_ids;
    // console.log(ids);
    // var sample_ids = data.samples[0].sample_ids;
    // console.log(sample_ids);
    // var labels = data.samples[0].otu_labels;
    // console.log(labels);

};
