(function (window) {
  var names = ["Yaakov", "John", "jen", "Jason","jagruti","ford","kim","jeel","mmariua", "Paul", "Frank", "Larry", "Paula","Janvi","Mansi","jinek","janak", "Laura", "Jim"];

  for (var i in names) {
    var firstLetter = names[i].charAt(0).toLowerCase() ;
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})(window);
