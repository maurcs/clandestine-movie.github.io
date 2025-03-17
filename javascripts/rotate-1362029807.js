jQuery.fn.rotate = function(){
  var rotatables = this;
  var timeoutLength = 7000;
  
  return {
    firstRun:true,
    init:function(){
      this.startRotations();
    },
    getSelected:function(items){
      var visible = $(items[0]).parent().children(':visible');
      if(visible.length > 1){
        return visible[0];
      }else{
        return visible;
      }
    },
    next:function(items){
      var rotater = this;
      var selected = rotater.getSelected(items);
      $(selected).fadeOut(function(){
        var next = $(selected).next();
        if(next.length == 0){
          var next = $(items[0]);
        }
        next.fadeIn();
      });
    },
    startRotations:function(){
      var rotater = this;
      $(rotatables).each(function(){
        var items = $(this).children("div");
        if(items.length>1){
          $(items).hide();
          $(items[0]).show();
          window.setInterval(function(){
            rotater.next(items);
          },timeoutLength);
        }
      });
    }
  }.init();
  
};