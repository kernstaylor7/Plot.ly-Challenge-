  
function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata= data.metadata;
      var resultsArray= metadata.filter(sampleObj => 
        sampleObj.id == sample);
      var result= resultsArray[0]
      var panel = d3.select("#sample-metadata");
      panel.html("");
      Object.entries(result).forEach(([key, value]) => {
        panel.append("h6").text(`${key}: ${value}`);
      });
  
  
    });
  }
  
  
  function buildCharts(sample) {

  d3.json("samples.json").then((data) => {
    var samples= data.samples;
    var resultsArray= samples.filter(sampleObj => 
        sampleObj.id == sample);
    var result= resultsArray[0]
  
    var ids = result.otu_ids;
    var labels = result.otu_labels;
    var values = result.sample_values;
  
    var LayoutBubble = {
      margin: { t: 0 },
      xAxis: { title: "OTU ID" },
      hoverMode: "closest",
      };
  
      var DataBubble = [ 
      {
        x: ids,
        y: values,
        text: labels,
        mode: "markers",
        marker: {
          color: ids,
          size: values,
          }
      }
    ];
  
    Plotly.newPlot("bubble", DataBubble, LayoutBubble);
   
    var barData =[
      {
        y:ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
        x:values.slice(0,10).reverse(),
        text:labels.slice(0,10).reverse(),
        type:"bar",
        orientation:"h"
  
      }
    ];
  
    var barLayout = {
      title: "Top 10 Bacteria Types Found",
      margin: { t: 30, l: 150 }
    };
  
    Plotly.newPlot("bar", barData, barLayout);
  });
  }
   
  
  function init() {
  var selector = d3.select("#selDataset");
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
  
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
  }
  
  function optionChanged(newSample) {

    
  buildCharts(newSample);
  buildMetadata(newSample);
  }
  
  init();