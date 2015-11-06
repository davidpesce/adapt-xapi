define([
    'coreJS/adapt',
    'underscore',
    'extensions/adapt-tincan/js/xapiwrapper.min'
], function(Adapt, _, xapi) {

    var xapiWrapper;
    var STATE_PROGRESS = 'adapt-course-progress';


    var ExperienceAPI = Backbone.Model.extend({
        defaults: {
            initialised: false,
            state: null
        },

        initialize: function(){

        }

    });

    Adapt.on('app:dataReady', function() {
        new ExperienceAPI();
    });

});



