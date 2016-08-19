define(
        [
            "chart/multiplescaterplot",
            "chart/singlescaterplot"
        ],
        function (
            multipleScaterplot,
            singleScaterplot
        ) {
    "use strict";

    window.config = {
        supportLink: 'https://github.com/learnerbot/d3js',
        examples: [
            {
                id: "multiple-scaterplot",
                name: "Multiple Scaterplot",
                description: "",
                dataUrl: "/src/data/robots.json",
                callback: multipleScaterplot.callback,
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
            },
            {
                id: "single-scaterplot",
                name: "Single Scaterplot",
                description: "",
                dataUrl: "/src/data/robots.json",
                callback: singleScaterplot.callback,
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
            }
        ]
    };

    return window.config;
});