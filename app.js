function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      // Filter the data for the object with the desired sample number
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      // Use d3 to select the panel with id of #sample-metadata
      var PANEL = d3.select("#sample-metadata");
      // Use `.html("") to clear any existing metadata
      PANEL.html("");
      Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text('${key.toUpperCase()}: ${value}');
      });

       //Build charts
       function buildCharts (testSamples) {
            var samples=data.samples;
            var resultArray = samples.filer(sampleObj =>
                sampleObj.id == testSamples);
            var result= resultArray[0]
            var ids= result.otu_ids;
            var labels = resultArray.otu_labels;
            var values = result.sample_values;
            
      }

      //Bar Chart
      var barChart ={
          y: ids.slice(0,10).map(otuID => 'OTU ${otuID}').reverse(),
          x: values.slice(0,10).reverse(),
          text: labels.slice(0,10).reverse(),
          type: "bar",
          orientation: 'h'
          };      
        
        var barLayout = {
            title: "Top 10 Bacteria Culters",
            margin: {t: 20, l: 100}
        };
      var sampleName=data.names;
      sampleName.forEach((sample) => {
          selector.append('optional').text(testSamples).property('value, testSample');

          Plotly.newPlot('bar', bar_data, barLayout);
      });
     

    
        var firstSample=sampleName[0];
      buildCharts(firstSample);
      buildMetadata(firstSample);

      function optionChange(newSample) {
          buildCharts(newSample);
          buildMetadata(NewSample);
      }
    Init();


      // BONUS: Build the Gauge Chart
      buildGauge(result.wfreq);
    });
   }

     
