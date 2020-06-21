$(document).ready(function() {
    var main = {
        examples : [
            {
                id: "single-scaterplot",
                name: "Single Scaterplot",
                description: "",
                render: window.singleScaterplot.render,
                xValue: {
                    id: 'attack',
                    name: 'Attack'
                },
                yValue: {
                    id: 'defense',
                    name: 'Defense'
                },
                nominalValue: {
                    id: 'level'
                }
            },
            {
                id: "multiple-scaterplot",
                name: "Multiple Scaterplot",
                description: "",
                render: window.multipleScaterplot.render,
                xValue: {
                    id: 'attack',
                    name: 'Attack'
                },
                yValue: {
                    id: 'defense',
                    name: 'Defense'
                },
                nominalValue: {
                    idList: ['type', 'level'],
                    idToShow: 'level'
                }
            }
        ],

        init : function() {
            $('#chartSelector').on('hidden.bs.dropdown', function (event) {
                var exampleId;
                if (event && event.clickEvent && event.clickEvent.target) {
                    exampleId = event.clickEvent.target.getAttribute("data-example");
                }
                if (exampleId) {
                    $("#chartName").text("");
                    $("#chartContent").empty();
                    for (var i = 0; i < main.examples.length; i++) {
                        if (exampleId == main.examples[i].id) {
                            $("#chartName").text(main.examples[i].name);
                            main.examples[i].render("#chartContent", window.data, main.examples[i]);
                            break;
                        }
                    }
                }
            })
        }
    };

    main.init();
});