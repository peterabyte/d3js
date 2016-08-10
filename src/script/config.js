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
                callback: multipleScaterplot.callback
            },
            {
                id: "single-scaterplot",
                name: "Single Scaterplot",
                description: "",
                dataUrl: "/src/data/robots.json",
                callback: singleScaterplot.callback
            }
        ]
    };

    return window.config;
});