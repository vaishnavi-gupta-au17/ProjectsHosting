const btn = document.querySelector('#btn');
const img = document.querySelector('#photo');
  // listen for clicks
btn.addEventListener('click', function() {
  // make the request
  const xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      const url = JSON.parse(xhr.responseText).message;
      img.src = url;
    } else {
      console.log('Error');
    }
  }
  
  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
  xhr.send();
});