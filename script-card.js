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
$(function(){
    
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res=>{
        deckId =res.data.deck_id;
        $requestBtn.show()
    });

    $requestBtn.click(function(e){
        e.preventDefault()
        axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then(res =>{
            // let cardValue=res.data.cards[0].value;
            // let cardSuit =res.data.cards[0].suit;
            let cardImgUrl = res.data.cards[0].image
            let rotate = Math.random()*90 -45;
            let positionX = Math.random()*40 -20;
            let positionY = Math.random()*40 -20;
            console.log(`cardUrl:${cardImgUrl}, rotate:${rotate}, X:${positionX}, Y:${positionY}`);
            $cardDisplay.append(
                $('<img>', {
                    src: cardImgUrl,
                    css:{
                        transform: `translate(${positionX}px, ${positionY}px) rotate(${rotate}deg)`
                    }
                })
            )
        })
        .catch(err=>{
            $requestBtn.hide()
            console.log(err)
        })
        // ====springboard answer=====
        // .then(data => {
        //   let cardSrc = data.cards[0].image;
        //   let angle = Math.random() * 90 - 45;
        //   let randomX = Math.random() * 40 - 20;
        //   let randomY = Math.random() * 40 - 20;
        //   $cardArea.append(
        //     $('<img>', {
        //       src: cardSrc,
        //       css: {
        //         transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
        //       }
        //     })
        //   );
        //   if (data.remaining === 0) $btn.remove();
        // });
        // Trasnlate: https://developer.mozilla.org/ja/docs/Web/CSS/transform-function/translate
    })


});

function showCard(imgUrl){
    let newImg=$('<img>').attr('src',imgUrl);
    $cardDisplay.append(newImg)
}