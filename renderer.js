// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

//https://api.openweathermap.org/data/2.5/weather?q=london&appid=80f895757aaaa1e4a1fbe36d82a9880e
const btnLondon = document.querySelector('#btn-london');
const btnGoldCoast = document.querySelector('#btn-goldcoast');
const btnLasVegas = document.querySelector('#btn-lasvegas');
const btnRioDeJaneiro = document.querySelector('#btn-riodejaneiro');
const btnNatal = document.querySelector('#btn-natal');
const weatherCard = document.querySelector('.weather-card');

const getHtml = (name, icon, description, temperature) => {
  const divImg = document.createElement('div')
  divImg.className = 'w-25 d-inline-flex'
  const image = document.createElement('img')
  image.src = `https://openweathermap.org/img/wn/${icon}@2x.png`
  image.alt = 'description'
  divImg.appendChild(image)

  const desc = document.createElement('h6')
  desc.innerText = description

  const city = document.createElement('h3')
  city.className = 'm-0'
  city.innerText = name

  const temp = document.createElement('div')
  temp.innerHTML = `${temperature} &deg;C`

  const divBody = document.createElement('div')
  divBody.className = 'card-body p-0 weather-card-body'

  divBody.appendChild(divImg)
  divBody.appendChild(desc)
  divBody.appendChild(city)
  divBody.appendChild(temp)
  return (divBody)
}

btnLondon.addEventListener('click', async (e) => {
  e.preventDefault();
  const weatherCardBody = document.querySelector('.weather-card-body')
  if (weatherCardBody)
  weatherCard.removeChild(weatherCardBody)

  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=80f895757aaaa1e4a1fbe36d82a9880e`)
    .then((res) => res.json())
      .then((data) => data)
      .catch(err => err);

    const { weather, main, name } = data;
    const icon = weather[0].icon;
    const description = weather[0].description;
    const temperature = main.temp;

    const html = getHtml(name, icon, description, temperature);
    
    weatherCard.appendChild(html)
  })

btnGoldCoast.addEventListener('click', async (e) => {
  e.preventDefault();
  const weatherCardBody = document.querySelector('.weather-card-body')
  if (weatherCardBody)
  weatherCard.removeChild(weatherCardBody)

  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=gold%20coast&units=metric&appid=80f895757aaaa1e4a1fbe36d82a9880e`)
    .then((res) => res.json())
      .then((data) => data)
      .catch(err => err);

    const { weather, main, name } = data;
    const icon = weather[0].icon;
    const description = weather[0].description;
    const temperature = main.temp;

    const html = getHtml(name, icon, description, temperature);
    
    weatherCard.appendChild(html)
  })

btnLasVegas.addEventListener('click', async (e) => {
  e.preventDefault();
  const weatherCardBody = document.querySelector('.weather-card-body')
  if (weatherCardBody)
  weatherCard.removeChild(weatherCardBody)

  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=las%20vegas&units=metric&appid=80f895757aaaa1e4a1fbe36d82a9880e`)
    .then((res) => res.json())
      .then((data) => data)
      .catch(err => err);

    const { weather, main, name } = data;
    const icon = weather[0].icon;
    const description = weather[0].description;
    const temperature = main.temp;

    const html = getHtml(name, icon, description, temperature);
    
    weatherCard.appendChild(html)
  })

btnRioDeJaneiro  .addEventListener('click', async (e) => {
  e.preventDefault();
  const weatherCardBody = document.querySelector('.weather-card-body')
  if (weatherCardBody)
  weatherCard.removeChild(weatherCardBody)

  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=rio%20de%20janeiro&units=metric&appid=80f895757aaaa1e4a1fbe36d82a9880e`)
    .then((res) => res.json())
      .then((data) => data)
      .catch(err => err);

    const { weather, main, name } = data;
    const icon = weather[0].icon;
    const description = weather[0].description;
    const temperature = main.temp;

    const html = getHtml(name, icon, description, temperature);
    
    weatherCard.appendChild(html)
  })
 
btnNatal.addEventListener('click', async (e) => {
  e.preventDefault();
  const weatherCardBody = document.querySelector('.weather-card-body')
  if (weatherCardBody)
  weatherCard.removeChild(weatherCardBody)

  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=natal&units=metric&appid=80f895757aaaa1e4a1fbe36d82a9880e`)
    .then((res) => res.json())
      .then((data) => data)
      .catch(err => err);

    const { weather, main, name } = data;
    const icon = weather[0].icon;
    const description = weather[0].description;
    const temperature = main.temp;

    const html = getHtml(name, icon, description, temperature);
    
    weatherCard.appendChild(html)
  })