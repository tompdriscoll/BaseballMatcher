import _ from 'lodash'

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());

window.addEventListener('DOMContentLoaded', () => {
    
const fetch = require('node-fetch');
let form = document.getElementById('player-form')
let input = document.getElementById('player-name')



form.addEventListener('submit', () => {
    
    function search(){
        let playerName = input.value + '%25'
        const url = 'https://mlb-data.p.rapidapi.com/json/named.search_player_all.bam?name_part='+playerName+'&sport_code=mlb&active_sw=Y';
    
        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'mlb-data.p.rapidapi.com',
            'X-RapidAPI-Key': 'c590d7f8a0msh94e62ba0bda616bp1d9deejsn3a9e6e843909'
        }
        };
    
        fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));

            debugger
    }

    console.log(search())
})

})