// =====part 1========
const $textArea = $('#text-area')

function showText(text){

        let $newLi =$('<li>').text(text)
        $textArea.append($newLi)
    
}

// part1.1&2
// axios.get('http://numbersapi.com/4,14,1984,7?json')
//     .then(res => {
//         console.log(res.data)
//         const obj = res.data;
//         for( const text in obj){
//             showText(obj[text])
//         }
//     })
//     .catch(err =>{
//         console.log(`Error: ${err}`)
//     })

// part 1.3
favNum = [4,7,14,84];
favoriteNumberFacts = [];

for(let num of favNum){
    favoriteNumberFacts.push(
        axios.get(`http://numbersapi.com/${num}?json`)
    );
}

Promise.all(favoriteNumberFacts)
    .then(favNumArray =>{
        for( let res of favNumArray){
            let text = res.data.text;
            showText(text);
        }
    })

// springboard answer
// Promise.all(
//     Array.from({ length: 4 }, () => {
//         return $.getJSON(`${baseURL}/${favNumber}?json`);
//     })
//     ).then(facts => {
//     facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
//     });

// Array.from() にはオプションの引数 mapFn があります。これにより作成中の配列のすべての要素に対して map() 関数を実行することができます。

// より明確に言うと、中間配列を生成しないことを除いて、Array.from(obj, mapFn, thisArg) は Array.from(obj).map(mapFn, thisArg) と同じ結果です。 mapFn は配列全体ではなく 2 つの引数 (element, index) のみを取るため、配列は構築途中になります。

// Array.from({length:5})の説明
// https://stackoverflow.com/questions/40528557/how-does-array-fromlength-5-v-i-i-work

