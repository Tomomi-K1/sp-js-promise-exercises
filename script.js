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
