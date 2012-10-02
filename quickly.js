jQuery.fn.exists = function(){return this.length>0;}

/*
 * Div
 */
function div(name){
  that = $('<div></div>');
  that.hasA = function(object){
    this.append(object);
    this[object.name]=object;
  }
  that.cursor = function(cursortype){
    that.css({'cursor':cursortype});
  }
  that.name = function(name){
    that.data("name", name);
  };
  return that
}

/*
 * Audio
 */
function audio(name){
  that = $('<audio class="music"></audio>');
  that.src = function(source){
    that.append($('<source src="audio/music.ogg" type="audio/ogg" />'));
    that.find('source').attr("src", source);
  }
  that.loop = function(loop){
    if(loop){
      this.attr("loop", "loop");
    }else{
      this.attr("loop", null);
    }
  }
  that.play = function(){
    this[0].play();
  }
  that.pause = function(){
    this[0].pause();
  }
  that.paused = function(){
    return this[0].paused;
  }
  return that;
}

/*
 * Form
 */
function form(name){
  that = $('body').append('<form></form>');
  that.name = function(name){
    that.data("name", name);
  };
  return that
}


/*
 * Audio
 */
function image(name){
  that = $('<img src="" />');
  that.name = function(name){
    that.data("name", name);
  };
  that.src = function(source){
    that.attr("src", source);
  }
  that.cursor = function(cursortype){
    that.css({'cursor':cursortype});
  }
  return that;
}

/*
 * Body
 */
function body(){
  return $('body');
}

/*
 * clearBoth
 */
function clearBoth(){
  that = $('<div style="clear:both;"></div>');
  return that;
}