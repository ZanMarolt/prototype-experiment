/**
 * Created by zanmarolt on 3/29/16.
 */
var app = {

    circles:[],
    numCircles:4,
    circleSize:100,
    padding:5,
    container:null,
    init:function(){

        app.renderContainer();
        app.render();
        setTimeout(function(){

            for(var i=0;i<app.circles.length;i++){
                var circle = app.circles[i];
                //circle.removeEvents();
            }

        }, 4000)

    },
    renderContainer:function(){

        app.container = $('<div>', {class:'circle-container'});
        $('body').append(app.container);

    },
    render:function(){

        var widthSum = app.numCircles*app.circleSize+(app.numCircles-1)*app.padding;
        var topOffset   = $(window).height()/2-app.circleSize/2;

        while(app.numCircles--){

            var circle = new Circle(app.circleSize,app.circleSize, 'body', app.container);
            circle.setPosition({
               y:topOffset,
                x:(app.circleSize+app.padding)*app.numCircles
            });
            app.circles.push(circle);

        }

        app.container.css({
            left            : '50%',
            marginLeft      : -widthSum/2
        });

    },
    addClickEvents:function(){



    }
};

app.init();