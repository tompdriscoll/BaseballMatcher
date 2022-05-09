let input = document.getElementById('player-name')



input.addEventListener(onsubmit, () => {

    function search(){
        const fetch = require('node-fetch');
        let name = input.value + '%25'
        const url = 'https://mlb-data.p.rapidapi.com/json/named.search_player_all.bam?name_part='name'&sport_code='mlb'&active_sw='Y'';
    
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
    }
})