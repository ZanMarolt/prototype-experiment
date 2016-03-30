var app = {
    circles:[],
    numCircles:4,
    circleSize:50,
    padding:5,
    container:null,
    init:function(){

        app.renderContainer();
        app.render();
        app.addClickEvents();

    },
    renderContainer:function(){

        app.container = $('<div>',{class:'circle-container'});
        $('body').append(app.container);

    },
    render:function(){

        var widthSum    = app.numCircles*app.circleSize+(app.numCircles-1)*app.padding;
        var topOffset   = $(window).height()/2-app.circleSize/2;

        while(app.numCircles--){

            var circle = new Circle(
                app.numCircles,
                app.circleSize,
                app.circleSize,
                app.container,
                'circle-template-'+app.numCircles);

            circle.setPosition({
                x : (app.circleSize+app.padding)*app.numCircles,
                y : 0
            });
            app.circles.push(circle);

        }

        app.container.css({
            left        : '50%',
            y           : topOffset,
            marginLeft  : -widthSum/2
        });

    },
    addClickEvents:function(){

        for(var i=0;i<app.circles.length;i++){

            var circle = app.circles[i];
            circle.circleElement.on('click', function(){

                var _circle = this;

                app.fadeCirclesOut(this.id);

                setTimeout(function(){

                    app.scaleUpContainer();
                    _circle.removeEvents();
                    _circle.scaleUp();

                },1000);


            }.bind(circle));

        }

    },
    scaleUpContainer:function(){

        app.container.transition({
            width:$(window).width(),
            height:$(window).height(),
            top:0,
            y:0,
            left:0,
            margin:0
        });

    },
    resetContainer:function(){

        app.container.css({
            left        : '50%',
            y           : topOffset,
            marginLeft  : -widthSum/2
        });

    },
    fadeCirclesOut:function(id){

        for(var i=0;i<app.circles.length;i++){

            var circle = app.circles[i];
            if(circle.id !== id){
                circle.fadeOut();
            }

        }

    }

};

app.init();