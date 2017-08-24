(function() {
    'use strict';

    angular
        .module('app')
        .controller('ChartController', ChartController);

    ChartController.$inject = [
        '$scope', '$rootScope', '$http'
    ];

    function ChartController($scope, $rootScope, $http) {
        var vm  = this;
            /*d3.json("targetdetailsMain.json", function(data) {
                var canvas = d3.select('#chart2').append('svg')
                .attr("width", 500)
                .attr("height", 400);

                canvas.selectAll("rect")
                .data(data)
                .enter()
                .append("rect")
                .attr("width",function(d) {
                    return d.EmployeeSize * 10
                })
                .attr("height", 15)
                .attr("y",function(d,i) {
                    return i* 40
                })
                .attr("fill", "red");

                 canvas.selectAll("text")
                 .data(data)
                 .enter()
                 .append("text")
                 .attr("fill", "black")
                 .attr("y",function(d,i) {
                     return i* 40 +15
                 })
                 .attr("x",5)
                 .text(function (d){
                     return d.TargetName;
                 })
            });*/

            /*var ctx = document.getElementById("myChart").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });*/

            //Getting data from a string
            var labels = [], EmployeeSize=[], Revenue =[];
            $http.get('targetdetails.json')
            .then(function(results){ 
                   if(results !=null){
                     results.data.forEach(function(packet) {
                            labels.push(packet.TargetName);
                            EmployeeSize.push(parseFloat(packet.EmployeeSize/10));
                            Revenue.push(parseFloat(packet.Revenue));

                    });
                    // Create the chart.js data structure using 'labels' and 'data'
                    var tempData = {
                    labels : labels,
                    datasets : [
                        {
                            label: "Target Employee Size(Thousands)",
                            fillColor: "rgba(220,220,220,0.2)",
                            strokeColor: "rgba(220,220,220,1)",
                            pointColor: "rgba(220,220,220,1)",
                            pointStrokeColor: "#fff",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgba(220,220,220,1)",
                            data: EmployeeSize
                        },
                        {
                            label: "Target Revenue(Billions)",
                            backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1,
                            data: Revenue
                        }
                    ]
                };
                    // Get the context of the canvas element we want to select
                    var ctx = document.getElementById("myChart").getContext("2d");

                    var myNewChart = new Chart(ctx , {
                        type: "line",
                        data: tempData, 
                    });
                }
            });

            }
})();