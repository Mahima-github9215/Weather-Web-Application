const key = '17d380ef71b0141f6807049a74bb6400';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=17d380ef71b0141f6807049a74bb6400'

//  fetch(baseURL)
//     .then((data) => { console.log('response', data.json()) })
//     .catch(() => {
//         result.innerHTML = `<h3 class="msg">City not found</h3>`;
//     });

const requestCity = async (city) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;

    //make fetch call (promise call)
    const response = await fetch(baseURL + query);

    //promise data
    const data = await response.json();
    return data;

}
    
    
    
