let timediv = document.getElementById("timediv");
let timeofday = document.getElementById("timeofday");
let namediv = document.getElementById("name");
let focusdiv = document.getElementById("focus");
let quotediv = document.getElementById("quote");

//getTime function
function getTime() {
  //get time
  let time = new Date();
  let secs =
    time.getSeconds().toString().length == 1
      ? "0" + time.getSeconds()
      : time.getSeconds();
  let mins =
    time.getMinutes().toString().length == 1
      ? "0" + time.getMinutes()
      : time.getMinutes();
  let hours =
    time.getHours().toString().length == 1
      ? "0" + time.getHours()
      : time.getHours();

  //AM or PM
  if (hours >= 12) {
    var amPm = "PM";
  } else {
    var amPm = "AM";
  }
  timediv.textContent = `${hours}: ${mins}: ${secs} ${amPm}`;
  //Morning, Afternoon or Evening
  if (hours >= 0 && hours < 12) {
    timeofday.textContent = `Morning`;
  } else if (hours >= 12 && hours < 18) {
    timeofday.textContent = `Afternoon`;
  } else {
    timeofday.textContent = `Evening`;
  }

  //background changing
  if (hours >= 6 && hours < 12) {
    //background change
    document.body.classList.remove("midnight");
    document.body.classList.add("morning");
    //quote position change
    quotediv.classList.remove("midnightdisplay");
    quotediv.classList.add("morningdisplay");
  } else if (hours >= 12 && hours < 18) {
    //background change
    document.body.classList.remove("morning");
    document.body.classList.add("afternoon");
    //quote position change
    quotediv.classList.remove("morningdisplay");
    quotediv.classList.add("afternooneveningdisplay");
  } else if (hours >= 18 && hours <= 23) {
    //background change
    document.body.classList.remove("afternoon");
    document.body.classList.add("night");
    //quote position change
    quotediv.classList.remove("morningdisplay");
    quotediv.classList.add("afternooneveningdisplay");
  } else if (hours >= 0 && hours < 6) {
    //background change
    document.body.classList.remove("night");
    document.body.classList.add("midnight");
    //quote position change
    quotediv.classList.remove("afternooneveningdisplay");
    quotediv.classList.add("midnightdisplay");
  }
  //call itself every one second
  setInterval(() => {
    getTime();
  }, 1000);
}

getTime();

//local Storage for name

namediv.addEventListener("keydown", storename, true);
function storename(e) {
  if (e.which == 13 || e.keyCode == 13) {
    e.preventDefault();
    let name = namediv.textContent;
    localStorage.setItem("name", name);
    namediv.textContent = localStorage.getItem("name");
    namediv.blur();
  }
}

//local Storage for focus

focusdiv.addEventListener("keydown", storefocus, true);
function storefocus(e) {
  if (e.which == 13 || e.keyCode == 13) {
    e.preventDefault();
    let focus = focusdiv.textContent;

    localStorage.setItem("focus", focus);
    focusdiv.textContent = localStorage.getItem("focus");
    focusdiv.blur();
  }
}

//shuffle function
function shuffle(array) {
  for (i = 0; i <= array.length - 1; i++) {
    let randonNumber = Math.floor(Math.random() * (i + 1));
    let valueAtRandomIndex = array[randonNumber];
    array[randonNumber] = array[i];
    array[i] = valueAtRandomIndex;
  }
  return array;
}

let quotesArray = [
  {
    q: "When you are talented you do it whatever it is until your fingers bleed or your eyes are ready to fall out of your head.",
    a: "Stephen King",
    c: "120",
    h: "<blockquote>&ldquo;When you are talented you do it whatever it is until your fingers bleed or your eyes are ready to fall out of your head.&rdquo; &mdash; <footer>Stephen King</footer></blockquote>",
  },
  {
    q: "Hope is not a strategy. Luck is not a factor. Fear is not an option.",
    a: "James Cameron",
    c: "68",
    h: "<blockquote>&ldquo;Hope is not a strategy. Luck is not a factor. Fear is not an option.&rdquo; &mdash; <footer>James Cameron</footer></blockquote>",
  },
  {
    q: "For things to change, you have to change.",
    a: "Jim Rohn",
    c: "41",
    h: "<blockquote>&ldquo;For things to change, you have to change.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>",
  },
  {
    q: "The best way to understanding is a few good examples.",
    a: "Isaac Newton",
    c: "53",
    h: "<blockquote>&ldquo;The best way to understanding is a few good examples.&rdquo; &mdash; <footer>Isaac Newton</footer></blockquote>",
  },
  {
    q: "It is the power of thought that gives man power over nature.",
    a: "Hans Christian Andersen",
    c: "60",
    h: "<blockquote>&ldquo;It is the power of thought that gives man power over nature.&rdquo; &mdash; <footer>Hans Christian Andersen</footer></blockquote>",
  },
  {
    q: "To a mind that is still, the entire universe surrenders.",
    a: "Zhuangzi",
    c: "56",
    h: "<blockquote>&ldquo;To a mind that is still, the entire universe surrenders.&rdquo; &mdash; <footer>Zhuangzi</footer></blockquote>",
  },
  {
    q: "People who say it cannot be done should not interrupt those who are doing it.",
    a: "George Bernard Shaw",
    c: "77",
    h: "<blockquote>&ldquo;People who say it cannot be done should not interrupt those who are doing it.&rdquo; &mdash; <footer>George Bernard Shaw</footer></blockquote>",
  },
  {
    q: "The truth is simple. If it was complicated, everyone would understand it.",
    a: "Walt Whitman",
    c: "73",
    h: "<blockquote>&ldquo;The truth is simple. If it was complicated, everyone would understand it.&rdquo; &mdash; <footer>Walt Whitman</footer></blockquote>",
  },
  {
    q: "There are two ways of seeing: with the body and with the soul. The body's sight can sometimes forget, but the soul remembers forever.",
    a: "Alexandre Dumas",
    c: "133",
    h: "<blockquote>&ldquo;There are two ways of seeing: with the body and with the soul. The body's sight can sometimes forget, but the soul remembers forever.&rdquo; &mdash; <footer>Alexandre Dumas</footer></blockquote>",
  },
  {
    q: "Only in the agony of parting do we look into the depths of love.",
    a: "George Eliot",
    c: "64",
    h: "<blockquote>&ldquo;Only in the agony of parting do we look into the depths of love.&rdquo; &mdash; <footer>George Eliot</footer></blockquote>",
  },
  {
    q: "Hope means hoping when everything seems hopeless.",
    a: "Gilbert Chesterton",
    c: "49",
    h: "<blockquote>&ldquo;Hope means hoping when everything seems hopeless.&rdquo; &mdash; <footer>Gilbert Chesterton</footer></blockquote>",
  },
  {
    q: "Remember where you came from, where you're going, and why you created this mess you got yourself into in the first place.",
    a: "Richard Bach",
    c: "121",
    h: "<blockquote>&ldquo;Remember where you came from, where you're going, and why you created this mess you got yourself into in the first place.&rdquo; &mdash; <footer>Richard Bach</footer></blockquote>",
  },
  {
    q: "Observe things as they are and don't pay attention to other people.",
    a: "Huang Po",
    c: "67",
    h: "<blockquote>&ldquo;Observe things as they are and don't pay attention to other people.&rdquo; &mdash; <footer>Huang Po</footer></blockquote>",
  },
  {
    q: "Stop being a prisoner of your past. Become the architect of your future.",
    a: "Robin Sharma",
    c: "72",
    h: "<blockquote>&ldquo;Stop being a prisoner of your past. Become the architect of your future.&rdquo; &mdash; <footer>Robin Sharma</footer></blockquote>",
  },
  {
    q: "To be in harmony with the wholeness of things is not to have anxiety over imperfections.",
    a: "Dogen",
    c: "88",
    h: "<blockquote>&ldquo;To be in harmony with the wholeness of things is not to have anxiety over imperfections.&rdquo; &mdash; <footer>Dogen</footer></blockquote>",
  },
  {
    q: "It's necessary to get the losers out of your life if you want to live your dream.",
    a: "Les Brown",
    c: "81",
    h: "<blockquote>&ldquo;It's necessary to get the losers out of your life if you want to live your dream.&rdquo; &mdash; <footer>Les Brown</footer></blockquote>",
  },
  {
    q: "Be strong. Be confident. Be the star of your own life.",
    a: "Estee Lauder",
    c: "54",
    h: "<blockquote>&ldquo;Be strong. Be confident. Be the star of your own life.&rdquo; &mdash; <footer>Estee Lauder</footer></blockquote>",
  },
  {
    q: "Letting go means to come to the realization that some people are a part of your history, but not a part of your destiny.",
    a: "Steve Maraboli",
    c: "120",
    h: "<blockquote>&ldquo;Letting go means to come to the realization that some people are a part of your history, but not a part of your destiny.&rdquo; &mdash; <footer>Steve Maraboli</footer></blockquote>",
  },
  {
    q: "Mastery is not a function of genius or talent, it is a function of time and intense focus applied to a particular field of knowledge.",
    a: "Robert Greene",
    c: "133",
    h: "<blockquote>&ldquo;Mastery is not a function of genius or talent, it is a function of time and intense focus applied to a particular field of knowledge.&rdquo; &mdash; <footer>Robert Greene</footer></blockquote>",
  },
  {
    q: "Truth is such a rare thing, it is delighted to tell it.",
    a: "Emily Dickinson",
    c: "55",
    h: "<blockquote>&ldquo;Truth is such a rare thing, it is delighted to tell it.&rdquo; &mdash; <footer>Emily Dickinson</footer></blockquote>",
  },
  {
    q: "Meanings are not determined by situations, but we determine ourselves by the meanings we give to situations.",
    a: "Alfred Adler",
    c: "108",
    h: "<blockquote>&ldquo;Meanings are not determined by situations, but we determine ourselves by the meanings we give to situations.&rdquo; &mdash; <footer>Alfred Adler</footer></blockquote>",
  },
  {
    q: "Never whine, never complain, never try to justify yourself.",
    a: "Robert Greene",
    c: "59",
    h: "<blockquote>&ldquo;Never whine, never complain, never try to justify yourself.&rdquo; &mdash; <footer>Robert Greene</footer></blockquote>",
  },
  {
    q: "Lack of emotion causes lack of progress and lack of motivation.",
    a: "Tony Robbins",
    c: "63",
    h: "<blockquote>&ldquo;Lack of emotion causes lack of progress and lack of motivation.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>",
  },
  {
    q: "Life should be touched, not strangled.  ",
    a: "Ray Bradbury",
    c: "40",
    h: "<blockquote>&ldquo;Life should be touched, not strangled.  &rdquo; &mdash; <footer>Ray Bradbury</footer></blockquote>",
  },
  {
    q: "Excellence is not an exception, it is a prevailing attitude.",
    a: "Colin Powell",
    c: "60",
    h: "<blockquote>&ldquo;Excellence is not an exception, it is a prevailing attitude.&rdquo; &mdash; <footer>Colin Powell</footer></blockquote>",
  },
  {
    q: "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration. ",
    a: "Nikola Tesla",
    c: "100",
    h: "<blockquote>&ldquo;If you want to find the secrets of the universe, think in terms of energy, frequency and vibration. &rdquo; &mdash; <footer>Nikola Tesla</footer></blockquote>",
  },
  {
    q: "You are not what you think you are, You are not what others think you are, You are what you think others think you are.",
    a: "Unknown",
    c: "119",
    h: "<blockquote>&ldquo;You are not what you think you are, You are not what others think you are, You are what you think others think you are.&rdquo; &mdash; <footer>Unknown</footer></blockquote>",
  },
  {
    q: "The less people know, the more stubbornly they know it.",
    a: "Osho",
    c: "55",
    h: "<blockquote>&ldquo;The less people know, the more stubbornly they know it.&rdquo; &mdash; <footer>Osho</footer></blockquote>",
  },
  {
    q: "Associate yourself with men of good quality, if you esteem your own reputation; for 'tis better to be alone than in bad company. ",
    a: "George Washington",
    c: "129",
    h: "<blockquote>&ldquo;Associate yourself with men of good quality, if you esteem your own reputation; for 'tis better to be alone than in bad company. &rdquo; &mdash; <footer>George Washington</footer></blockquote>",
  },
  {
    q: "If it is not right, do not do it, if it is not true, do not say it.",
    a: "Marcus Aurelius",
    c: "67",
    h: "<blockquote>&ldquo;If it is not right, do not do it, if it is not true, do not say it.&rdquo; &mdash; <footer>Marcus Aurelius</footer></blockquote>",
  },
  {
    q: "Treat everyone with politeness and kindness, not because they are nice, but because you are.",
    a: "Roy T. Bennett",
    c: "92",
    h: "<blockquote>&ldquo;Treat everyone with politeness and kindness, not because they are nice, but because you are.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>",
  },
  {
    q: "Change will not come if we wait for some other person, or if we wait for some other time.",
    a: "Barack Obama",
    c: "89",
    h: "<blockquote>&ldquo;Change will not come if we wait for some other person, or if we wait for some other time.&rdquo; &mdash; <footer>Barack Obama</footer></blockquote>",
  },
  {
    q: "The truth is not for all men, but for those who seek it.",
    a: "Ayn Rand",
    c: "56",
    h: "<blockquote>&ldquo;The truth is not for all men, but for those who seek it.&rdquo; &mdash; <footer>Ayn Rand</footer></blockquote>",
  },
  {
    q: "The secret of happiness is not in doing what you like but in liking what you have to do.",
    a: "Sathya Sai Baba",
    c: "88",
    h: "<blockquote>&ldquo;The secret of happiness is not in doing what you like but in liking what you have to do.&rdquo; &mdash; <footer>Sathya Sai Baba</footer></blockquote>",
  },
  {
    q: "Rewards and punishment is the lowest form of education.",
    a: "Zhuangzi",
    c: "55",
    h: "<blockquote>&ldquo;Rewards and punishment is the lowest form of education.&rdquo; &mdash; <footer>Zhuangzi</footer></blockquote>",
  },
  {
    q: "Show me a hero, and I'll write you a tragedy.",
    a: "F. Scott Fitzgerald",
    c: "45",
    h: "<blockquote>&ldquo;Show me a hero, and I'll write you a tragedy.&rdquo; &mdash; <footer>F. Scott Fitzgerald</footer></blockquote>",
  },
  {
    q: "Anyone who wants to achieve a dream must stay strong, focused and steady.",
    a: "Estee Lauder",
    c: "73",
    h: "<blockquote>&ldquo;Anyone who wants to achieve a dream must stay strong, focused and steady.&rdquo; &mdash; <footer>Estee Lauder</footer></blockquote>",
  },
  {
    q: "Whatever you do,strive to do it so well that no man living and no man dead and no man yet to be born could do it any better.",
    a: "Benjamin Mays",
    c: "124",
    h: "<blockquote>&ldquo;Whatever you do,strive to do it so well that no man living and no man dead and no man yet to be born could do it any better.&rdquo; &mdash; <footer>Benjamin Mays</footer></blockquote>",
  },
  {
    q: "Always do what is right. It will gratify half of mankind and astound the other.",
    a: "Mark Twain",
    c: "79",
    h: "<blockquote>&ldquo;Always do what is right. It will gratify half of mankind and astound the other.&rdquo; &mdash; <footer>Mark Twain</footer></blockquote>",
  },
  {
    q: "I try more and more to be myself, caring relatively little whether people approve or disapprove.",
    a: "Vincent van Gogh",
    c: "96",
    h: "<blockquote>&ldquo;I try more and more to be myself, caring relatively little whether people approve or disapprove.&rdquo; &mdash; <footer>Vincent van Gogh</footer></blockquote>",
  },
  {
    q: "Imagination is everything. It is the preview of life's coming attractions.",
    a: "Albert Einstein",
    c: "74",
    h: "<blockquote>&ldquo;Imagination is everything. It is the preview of life's coming attractions.&rdquo; &mdash; <footer>Albert Einstein</footer></blockquote>",
  },
  {
    q: "I think self-awareness is probably the most important thing towards being a champion. ",
    a: "Billie Jean King",
    c: "86",
    h: "<blockquote>&ldquo;I think self-awareness is probably the most important thing towards being a champion. &rdquo; &mdash; <footer>Billie Jean King</footer></blockquote>",
  },
  {
    q: "Don't criticize what you can't understand. ",
    a: "Bob Dylan",
    c: "43",
    h: "<blockquote>&ldquo;Don't criticize what you can't understand. &rdquo; &mdash; <footer>Bob Dylan</footer></blockquote>",
  },
  {
    q: "Who wishes to fight must first count the cost.",
    a: "Sun Tzu",
    c: "46",
    h: "<blockquote>&ldquo;Who wishes to fight must first count the cost.&rdquo; &mdash; <footer>Sun Tzu</footer></blockquote>",
  },
  {
    q: "The merit of all things lies in their difficulty.",
    a: "Alexandre Dumas",
    c: "49",
    h: "<blockquote>&ldquo;The merit of all things lies in their difficulty.&rdquo; &mdash; <footer>Alexandre Dumas</footer></blockquote>",
  },
  {
    q: "Don't let what you cannot do interfere with what you can do.",
    a: "John Wooden",
    c: "60",
    h: "<blockquote>&ldquo;Don't let what you cannot do interfere with what you can do.&rdquo; &mdash; <footer>John Wooden</footer></blockquote>",
  },
  {
    q: "Life is the art of drawing sufficient conclusions from insufficient premises.",
    a: "Samuel Butler",
    c: "77",
    h: "<blockquote>&ldquo;Life is the art of drawing sufficient conclusions from insufficient premises.&rdquo; &mdash; <footer>Samuel Butler</footer></blockquote>",
  },
  {
    q: "I skate to where the puck is going to be, not where it has been.",
    a: "Wayne Gretzky",
    c: "64",
    h: "<blockquote>&ldquo;I skate to where the puck is going to be, not where it has been.&rdquo; &mdash; <footer>Wayne Gretzky</footer></blockquote>",
  },
  {
    q: "Trying to define yourself is like trying to bite your own teeth.",
    a: "Zen Proverb",
    c: "64",
    h: "<blockquote>&ldquo;Trying to define yourself is like trying to bite your own teeth.&rdquo; &mdash; <footer>Zen Proverb</footer></blockquote>",
  },
  {
    q: "The truly rich men are the ones who have health, loved ones and a work they love.",
    a: "Maxime Lagace",
    c: "81",
    h: "<blockquote>&ldquo;The truly rich men are the ones who have health, loved ones and a work they love.&rdquo; &mdash; <footer>Maxime Lagace</footer></blockquote>",
  },
];

//fetching when reloaded
window.onload = function (e) {
  let name =
    localStorage.getItem("name") == null
      ? "[Enter name]"
      : localStorage.getItem("name");
  namediv.textContent = `${name}`;

  let focus =
    localStorage.getItem("focus") == null
      ? "[Enter focus]"
      : localStorage.getItem("focus");
  focusdiv.textContent = `${focus}`;

  let shuffledArray = [...shuffle(quotesArray)];

  quotediv.innerHTML = `${shuffledArray[30]["h"]}`;
};
