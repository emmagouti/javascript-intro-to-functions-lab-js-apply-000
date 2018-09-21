function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  var x = string.toUpperCase();
  console.log(x);
}

function logWhisper(string) {
  var y = string.toLowerCase();
  console.log(y);
}

function sayHiToGrandma(string) {
  var low = "hello";
  var high = "HELLO";
  var love = "I love you.";
  if (low === string)
    {
      console.log("I can't hear you!");
    }
  else if (high === string)
  {
    console.log("YES INDEED!");
  }
  else if (love === string)
  {
    console.log("I love you, too.");
  }
  }
