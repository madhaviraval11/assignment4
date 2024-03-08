(function (window) {
  var jspeakWord = "Good Bye";
  var byeSpeaker = {
    speak: function (name) {
      console.log(jspeakWord + " " + name);
    }
  };
  window.byeSpeaker = byeSpeaker;
})(window);
