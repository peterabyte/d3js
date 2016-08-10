define(["jquery", "config"], function($, config) {
    function handleSelectedExample(exampleId) {
        var e = findExample(exampleId);
        $("#example-content").empty();
        if (e) {
            $("#example-loading").removeClass("visually-hidden");
            $("#example-failed").addClass("visually-hidden");
            $.ajax({
                type: "GET",
                url: e.dataUrl,
                cache: true,
                dataType: "json",
                timeout: 2500
            }).done(function(data) {
                $("#example-loading").addClass("visually-hidden");
                e.callback(data);
            }).fail(function() {
                $("#example-loading").addClass("visually-hidden");
                $("#example-failed").removeClass("visually-hidden");
            });
        }
    }

    function findExample(exampleId) {
        var i;
        for (i = 0; i < config.examples.length; i = i + 1) {
            if (config.examples[i].id === exampleId) {
                return config.examples[i];
            }
        }
        return null;
    }

    var example = {
        init: function(exampleId) {
            if (exampleId) {
                handleSelectedExample(exampleId);
            }
        }
    };

    return example;
});