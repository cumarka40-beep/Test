const Quotes = [
  "Do what you can, with what you have, where you are." ,
 "Strive not to be a success, but rather to be of value." ,
 "Success isn't about the end result, it's about what you learn along the way.",
  "I've failed over and over and over again in my life, and that is why I succeed." ,
  "You may not control all the events that happen to you, but you can decide not to be reduced by them." ,
  "Failure is not the opposite of success; it is a stepping stone towards it." ,
  "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  "Life isn't about finding yourself. Life is about creating yourself.",
  "Take the time to enjoy the little things, for one day you may look back and realize they were the big things." ,
   "Our greatest natural resource is the minds of our children."
]
const usedIndex = new Set ()
const QuoteElement = document.getElementById("Quote");

function generateQoute(){
  if (usedIndex.size >= Quotes.length){
    usedIndex.clear();
  }
  while (true){
 const randomIdx = Math.floor(Math.random() * Quotes.length)
 if (usedIndex.has(randomIdx)) continue;
  const Quote = Quotes[randomIdx];
  QuoteElement.textContent = Quote;
  usedIndex.add(randomIdx)
  break
  }
  
}