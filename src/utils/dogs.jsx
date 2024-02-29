const apiKey = 'live_js1I9MDcTXDFqs4EQ1NCaHf1c5rasF2iT24oFqHepOKCFKtPXgcHgPDtIV0BG4dz';
const apiUrl = 'https://api.thedogapi.com/v1/images/search';

function fetchCatImages() {
  return fetch(apiUrl, {
    headers: {
      'x-api-key': apiKey
    }
  }).then(response => {
    if (!response.ok) {
      throw new Error('Error with network response');
    }
    return response.json();
  }).catch(error => {
    console.error('Error fetching cat images:', error);
    return [];
  });
}

function displayCatImages(images) {
  const imageContainer = document.getElementById('image-container');
  imageContainer.innerHTML = '';

  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.url;
    imgElement.alt = 'Cat Image';
    imageContainer.appendChild(imgElement);
  });
}

async function loadCatImages() {
  const images = await fetchCatImages();
  displayCatImages(images);
}

document.addEventListener('DOMContentLoaded', loadCatImages);

// reload images
document.addEventListener('click', function(event) {
  if (event.target.tagName === 'IMG') {
    loadCatImages();
  }
});