d3.json("../samples.json").then((importedData) => {
    //console.log(importedData)
    var data = importedData
    samples= importedData.samples   
    names = importedData.names
    meta = importedData.metadata

   otu_ids=importedData.samples[0]

   samples.sort(function(a,b) {
       return parseFloat(b.samples) - parseFloat(a.samples);
   });

console.log('order ? ', samples)
samples=samples.slice(0, 10);
console.log('order of samples? ', samples)

samples = samples.reverse();

var trace1 = {
    x: samples.map(row => row.samples),
    y: samples.map(row => row.otu_ids),
    text: samples.map(row => row.otu_labels),
    name: "Top 10 OTUs",
    type: "bar",
    orientation: "h"
};

var chartData = [trace1];

var laytout = {
    title: "Top 10 OTU's for Individuals",
    margin: {
        l: 100,
        r: 100,
        t: 100,
        b:100
    }
};
    Plotly.newPlot('plot', chartData, layout);
});