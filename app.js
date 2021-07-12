var selectID = d3.select("selectDataset")
var demographTable= d3.select('sample_metadata')
var barChart= d3.select('bar');
var bubbleChart= d3.select('bubble')
var guageChart = d3.select('guage')

function init() {
    resetData();
    d3.json('../samples.json').then((data => {
        data.samples.forEach((samples=> {
            var option =idSelect.append('option');
            option.text(samples);

        var otuID = idSelect.property('vaule')
        plotCharts(otuID);
        
        })); 
    }))
}

function resetData() {

    demographTable.html('');
    barChart.html('');
    bubbleChart.html('');
    guageChart.html('');
};

var selectMetadata= data.metadata.filter(participant => participant.id ==id)[0];
var washFrequency= selectMetadata.washFrequency;

Object.entries(selectMetadata).forEach(([key, value])=> {
    var list=demographTable.append('ul');
    list.attr('class', 'list-group lost-group-flush');
    var item=list.append('li');
    item.attr('class', 'list-group-item p-1 emo-text bg-transparent');
    item.text('${key}: ${value}');

});