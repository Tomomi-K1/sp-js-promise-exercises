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
let cardsPromise = [];
cardsPromise.push(axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
// axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res =>{
        console.log(res)
        return axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`)
    })
    .then(res =>{
        console.log(res)
        return axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`)

    })
    .catch(err =>{
        console.log(err)
    }));

Promise.all(cardsPromise)
    .then(promiseArray =>{
        console.log('promise.all')
        for(let res of promiseArray){
            console.log(res);
        }
    });

