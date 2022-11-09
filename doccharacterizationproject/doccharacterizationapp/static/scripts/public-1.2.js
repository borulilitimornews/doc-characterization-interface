/* ============================ //
    Author: Gabriel de Jesus (Timor News Founder)  
    https://mestregabrieldejesus.wixsite.com/curriculum-vitae
    Create date: 04 April 2020
//============================*/

$(document).ready(function () {
    //Get Total Users (single session) per Hour
    $.getJSON("/public/total-session-per-hour", function (data) {

        var HourSession = []
        var TotalSession = []

        for (var i = 0; i < data.length; i++) {
            HourSession.push(data[i].oras_asesu + ':00 ');
            TotalSession.push(data[i].total_vizitante);
        }

        //Create New Chart
        Highcharts.chart('containerSessionPerHour', {
            chart: {
                type: 'spline',
                scrollablePlotArea: {
                    minWidth: 600,
                    scrollPositionX: 1
                }
            },
            title: {
                text: 'Total Visitors per Hour',
                align: 'center'
            },
            subtitle: {
                text: 'Real Time Report for Today',
                align: 'center'
            },
            xAxis: {
                categories: HourSession
            },
            yAxis: {
                title: {
                    text: 'Number of Visitors'
                },
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
            },
            plotOptions: {
                spline: {
                    lineWidth: 4,
                    states: {
                        hover: {
                            lineWidth: 5
                        }
                    },
                    marker: {
                        enabled: false
                    },
                }
            },
            series: [{
                name: 'Total Visitors',
                data: TotalSession

            }],
            navigation: {
                menuItemStyle: {
                    fontSize: '10px'
                }
            }
        });
    });


    //Total Sessions and Users(single Sessions) of last 7 days
    $.getJSON("/public/total-session-user-last-7-days", function (data) {

        var DateReq = []
        var TotalSession = []
        var TotalUser = []

        for (var i = 0; i < data.length; i++) {
            DateReq.push(data[i].data_asesu);
            TotalSession.push(data[i].total_sesaun);
            TotalUser.push(data[i].total_vizitante);
        }

        //alert('Date DEPOIS = ' + DateReq);
        //alert('Total Sessions DEPOIS = ' + TotalSession);
        //alert('Total Users DEPOIS = ' + TotalUser);

        // Create New Chart
        Highcharts.chart('containerUserSessions', {

            title: {
                text: 'Total Visitors and Sessions'
            },

            subtitle: {
                text: '(Real Time Report for One Week)'
            },

            yAxis: {
                title: {
                    text: 'Number of Visitors/Sessions'
                }
            },

            xAxis: {
                categories: DateReq
            },

            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            series: [{
                name: 'Total Visitors',
                data: TotalUser
            }, {
                name: 'Total Sessions',
                data: TotalSession
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }

        });

    });
    

    //Get Top-5 Session by Countries of Last 7 days
    $.getJSON("/Public/GetTopFiveCountries", function (data) {

        var Country = []
        var TotalSessions = []

        for (var i = 0; i < data.length; i++) {
            Country.push(data[i].CountryName);
            TotalSessions.push(data[i].TotalVisitors);
        }

        //Create New Charts
        Highcharts.chart('containerTop5Countries', {
            chart: {
                type: 'column',
                options3d: {
                    enabled: true,
                    alpha: 10,
                    beta: 25,
                    depth: 70
                }
            },
            title: {
                text: 'Total Visitors by Country'
            },
            subtitle: {
                text: 'Real Time Report of Top-5 Countries for One Week'
            },
            plotOptions: {
                column: {
                    depth: 25
                }
            },
            xAxis: {
                categories: Country,
                labels: {
                    skew3d: true,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yAxis: {
                title: {
                    text: null
                }
            },
            series: [{
                name: 'Total Visitors',
                data: TotalSessions
            }]
        });

    });


    //Get Users from Internet Providers (TT,Viettel and Telin)
    $.getJSON("/Public/GetTLInternetOperators", function (data) {

        //Create New Chart
        Highcharts.chart('containerTelcom', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Timor-Leste Visitors per Internet Provider'
            },
            subtitle: {
                text: 'Three Major Internet Provider Companies'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Users',
                colorByPoint: true,
                data: [{
                    name: 'Timor Telecom',
                    y: data.TT,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Telemor',
                        y: data.Telemor,
                        sliced: true,
                        selected: true
                }, {
                    name: 'Telkomcel',
                        y: data.Telin,
                        sliced: true,
                        selected: true
                }]
            }]
        });

    });

});