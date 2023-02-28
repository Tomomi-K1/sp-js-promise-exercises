// part 2
// == 1. ==
// axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//     .then(res =>{
//         console.log("Shuffle the Cards")
//         console.log(res)
//         return axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`)
//     })
//     .then(res=>{
//         console.log(res.data.cards)
//         let cards = res.data.cards;
//         console.log(`${cards[0].value} of ${cards[0].suit}`)
//     })
//     .catch(err =>{
//         console.log(err)
//     })
// == 2. ==
// let firstCard;
// axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
// // axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//     .then(res =>{
//         console.log(res)
//         return axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`)
//     })
//     .then(res =>{
//         console.log(res)
//         firstCard = res.data.cards[0]
//         return axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`)
//     })
//     .then(res =>{
//         console.log(res)
//         let secondCard = res.data.cards[0]
//         console.log(`first card : ${firstCard.value} of ${firstCard.suit}`)
//         console.log(`second card : ${secondCard.value} of ${secondCard.suit}`)
//     })
//     .catch(err =>{
//         console.log(err)
//     });

// === 3====
// Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.
$requestBtn = $('#requestbtn');
$cardDisplay = $('.card-display');
let deckId =null;
$('document').ready(
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res=>{
        deckId =res.data.deck_id;
        $requestBtn.show()
    })
)

$requestBtn.click(function(e){
    e.preventDefault()
    axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(res =>{
        // let cardValue=res.data.cards[0].value;
        // let cardSuit =res.data.cards[0].suit;
        let cardImgUrl = res.data.cards[0].image
        console.log(cardImgUrl);
        showCard(cardImgUrl);
    })
    .catch(err=>{
        $requestBtn.hide()
        console.log(err)
    })
})

function showCard(imgUrl){
    let newImg=$('<img>').attr('src',imgUrl);
    $cardDisplay.append(newImg)
}

