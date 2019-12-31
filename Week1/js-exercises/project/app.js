
const quotes = [
  {
    quote:'Be yourself; everyone else is already taken.',
    author:'Oscar Wilde'
  },
  {
    quote:'So many books, so little time.',
    author: 'Frank Zappa'
  },
  {
    quote:'A room without books is like a body without a soul.',
    author:'Marcus Tullius Cicero'
  },
  {
    quote:'You only live once, but if you do it right, once is enough.',
    author: 'Mae West'
  },
  {
    quote:'To give anything less than your best, is to sacrifice the gift.',
    author: 'Steve Prefontaine'
  },
  {
    quote:'The best way to find yourself is to lose yourself in the service of others.',
    author:'Mahatma Gandhi'
  },
  {
    quote:'It always seems impossible until it’s done.',
    author: 'Nelson Mandela'
  },
  {
    quote:'Not how long, but how well you have lived is the main thing.',
    author:'Seneca'
  },
  {
    quote:'I love those who can smile in trouble.',
    author: 'Leonardo da Vinci'
  }
]

const quotePlaceHolder = document.querySelector('#quote');
const authorPlaceHolder = document.querySelector('#author');
const button = document.querySelector('button');


button.addEventListener('click', randomQuoteGenerator);

function randomQuoteGenerator() {
  const random = Math.floor(Math.random() * quotes.length)
  quotePlaceHolder.innerText = quotes[random].quote;
  authorPlaceHolder.innerText = quotes[random].author;
}

