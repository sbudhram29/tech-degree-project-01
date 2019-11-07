// array of quotes stored in Object
const quotes = [
    {
        quote: "The most common way people give up their power is by thinking they don’t have an" +
            "y.",
        source: "Alice Walker"
    }, {
        quote: "The mind is everything. What you think you become.",
        source: "Buddha",
        category: "Healthy Living"
    }, {
        quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
        source: "Chinese Proverb",
        category: "Common Sense"
    }, {
        quote: "An unexamined life is not worth living.",
        source: "Socrates",
        category: "Philosphy"
    }, {
        quote: "Eighty percent of success is showing up.",
        source: "Woody Allen",
        category: "Humor"
    }, {
        quote: "Your time is limited, so don’t waste it living someone else’s life.",
        source: "Steve Jobs",
        category: "Self Development"
    }, {
        quote: "Change will not come if we wait for some other person or some other time. We are" +
            " the ones we have been waiting for. We are the change that we seek.",
        source: "Barack Obama",
        category: "Powerful",
        year: 2008
    }, {
        quote: "If you want to know what a man's like, take a good look at how he treats his inf" +
            "eriors, not his equals.",
        source: "JK Rowling",
        citation: "Harry Potter and the Goblet of Fire",
        category: "Fun",
        year: 2000
    }

];

//array of colors
const colors = [ 'ForestGreen', 'DodgerBlue', 'FireBrick', 'DarkSlateGray', 'DarkOrchid' ];

// returns a random quotes based on Math.random and length of 'quote' array
const getRandomQuote = function (quoteArray) {

    return quotes[ Math.floor(Math.random() * quoteArray.length) ];
}
// get random background color from color array get the element in quote-box and
const randomColor = function () {
    return colors[ Math.floor(Math.random() * colors.length) ];
}
// change innerHTML to quote details
const printQuote = function () {
    const quoteDiv = document.getElementById('quote-box');
    let quote = getRandomQuote(quotes);
    let bgColor = randomColor();
    document.body.style.backgroundColor = bgColor;
    document
        .getElementById('loadQuote')
        .style
        .backgroundColor = bgColor;

    let quoteHtml = "";
    quoteHtml += '<p class="quote">' + quote.quote + '</p>'
    quoteHtml += '<p class="source">' + quote.source;

    if (quote.citation) {
        quoteHtml += '<span class="citation">' + quote.citation + '</span>';
    }

    if (quote.year) {
        quoteHtml += '<span class="year">' + quote.year + '</span>';
    }

    if (quote.category) {
        quoteHtml += '<span class="category">' + quote.category + '</span>';
    }

    quoteHtml += '</p>';

    quoteDiv.innerHTML = quoteHtml;

}
// call printQuote to display initial quote
printQuote();
//refresh quote every 20 seconds
setInterval(printQuote, 20000);

//add a event listener for button click call printQuote on each click
document
    .getElementById('loadQuote')
    .addEventListener("click", printQuote, false);