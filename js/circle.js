/**
 * Created by zanmarolt on 3/29/16.
 */
var Circle = function(width, height, container){

    this.width = width;
    this.height = height;

    this.render(container);
    this.addEvents();
};

// prototypes are basically a better alternative to attaching a function to
// this.function(); except it is on the top level

Circle.prototype.setPosition = function(properties){

    this.circleElement.css(properties);

};

Circle.prototype.render = function(container) {

    this.circleElement = $('<div>', {class:'circle'});
    this.circleElement.css({
        width:this.width,
        height:this.height,
        x:Math.random()*$(window).height(),
        y:Math.random()*$(window).width()
    });
    $(container).append(this.circleElement);
};

Circle.prototype.removeEvents = function(){

    this.circleElement.off();

};

Circle.prototype.addEvents = function(){

    var self = this;

    this.circleElement.on('mouseenter', function(){

        $(self.circleElement).transition({scale:1.5});

    })
};