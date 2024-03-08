(function (window) {
  var otherspeakWord = "Hello";
  var helloSpeaker = {
    speak: function (name) {
      console.log(otherspeakWord + " " + name);
    }
  };
  window.helloSpeaker = helloSpeaker;
})(window);
