import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

const quoteData = [
  { text: "The best answer to anger is silence.", author: "Marcus Aurelius" },
  { text: "The more we value things outside our control, the less control we have.", author: "Marcus Aurelius" },
  { text: "How ridiculous and how strange to be surprised at anything which happens in life.", author: "Marcus Aurelius" },
  { text: "You have power over your mind – not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
  { text: "The best revenge is not to be like your enemy.", author: "Marcus Aurelius" },
  { text: "We suffer more often in imagination than in reality.", author: "Seneca" },
  { text: "Ignorance is the cause of fear.", author: "Seneca" },
  { text: "While we wait for life, life passes.", author: "Seneca" },
  { text: "Life is long, if you know how to use it.", author: "Seneca" },
  { text: "Hurry up and live.", author: "Seneca"},
  { text: "We have two ears and one mouth so that we can listen twice as much as we speak.", author: "Epictetus"},
  { text: "No man is free who is not master of himself.", author: "Epictetus"},
  { text: "Men are disturbed not by things, but by the view which they take of them.", author: "Epictetus"}, 
  { text: "It is difficulties that show what men are.", author: "Epictetus"},
  { text: "Make the best use of what is in your power, and take the rest as it happens.", author: "Epictetus"},
  { text: "All the good are friends of one another.", author: "Zeno"},
  { text: "No loss should be more regrettable to us than losing our time, for it’s irretrievable.", author: "Zeno"},
  { text: "Man conquers the world by conquering himself.", author: "Zeno"},
  { text: "Steel your sensibilities, so that life shall hurt you as little as possible.", author: "Zeno"},
  { text: "A bad feeling is a commotion of the mind repugnant to reason, and against nature.", author: "Zeno"},
  { text: "He with the most who is content with the least.", author: "Diogenes"},
  { text: "The foundation of every state is the education of its youth.", author: "Diogenes"},
  { text: "Dogs and philosophers do the greatest good and get the fewest rewards.", author: "Diogenes"},
  { text: "Poverty is a virtue which one can teach oneself.", author: "Diogenes"},
  { text: "I am not an Athenian or a Greek, but a citizen of the world.", author: "Diogenes"},
  { text: "We begin to lose our hesitation to do immoral things when we lose our hesitation to speak of them.", author: "Musoniuis Rufus"},
  { text: "Humanity must seek what is NOT simple and obvious using the simple and obvious.", author: "Musoniuis Rufus"},
  { text: "Since every man dies, it is better to die with distinction than to live long.", author: "Musoniuis Rufus"},
  { text: "Only by exhibiting actions in harmony with the sound words which he has received will anyone be helped by philosophy.", author: "Musoniuis Rufus"},
  { text: "Thus whoever destroys human marriage destroys the home, the city-the whole human race.", author: "Musoniuis Rufus"}
];

const QuoteBox = ({ quote, handleNewQuote }) => (
<div id="quote-box">
  <p id="text">{quote.text}</p>
  <h3 id = "author">{quote.author}</h3>
  <div class="actions">
    <button
      id="new-quote"
      class="button"
      onClick={handleNewQuote}
      >
      New Quote
    </button>
    <a href = "https://twitter.com/intent/tweet"
      id="tweet-quote"
      target="_blank"
      >
      Tweet
    </a>
  </div>
</div>
);

const getRandomIndex = () => 
Math.round(Math.random() * ((quoteData.length - 1) - 0) + 0);

const App = () => {
  const [quote,setQuote] = React.useState(quoteData[getRandomIndex()])
  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()])
  }
 return (<div class="main">
    <QuoteBox quote = {quote} handleNewQuote = {handleNewQuote}/>
  </div>
        )
}
  

    
  
ReactDOM.render(<App />, document.querySelector("#app"))
