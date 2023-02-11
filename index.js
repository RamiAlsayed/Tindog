import dogs from './data.js';

const dogArr = dogs.map((dogsData) => {
  const { name, avatar, age, bio } = dogsData;

  return `<div class="photoBox">
     
      <div><img class="dog-photos" src="${avatar}" alt="${name}"></div>
      <div><img class="nope-badge" src="/images/badge-nope.png" alt="nope"></div>
      <div><img class="like-badge" src="/images/badge-like.png" alt="like"></div>
      <div class="bio"><strong>${name}, ${age}</strong><br>${bio}</div>
      
      </div>`;
});
const dogPhotos = document.querySelector('.dog-photos');

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  randerDofphotos() {
    return dogArr[dogArr.length - 1];
  }
}

const newDog = new Dog(dogArr);

dogPhotos.innerHTML = newDog.randerDofphotos();

const heart = document.querySelector('#heart');
const cross = document.querySelector('#cross');

function hideCrossHeart() {
  if (!dogArr.length) {
    dogPhotos.innerHTML = `<div class="message">
    <h2>Thank you! That is all for now come again soon for new dogs pics 🐶 </h2>
    </div>`;
    heart.style.display = 'none';
    cross.style.display = 'none';
    setTimeout(() => {
      location.reload();
    }, 7000);
  }
}
document.addEventListener('click', (e) => {
  const likeBadge = document.querySelector('.like-badge');

  if (e.target.id === 'heart' && !newDog.hasBeenLiked) {
    likeBadge.style.display = 'block';
    cross.style.display = 'none';
    heart.style.display = 'none';
    setTimeout(() => {
      heart.style.display = 'block';
      cross.style.display = 'block';
    }, 2000);

    setTimeout(() => {
      if (!newDog.hasBeenLiked) {
        dogPhotos.innerHTML = dogArr.shift();

        hideCrossHeart();
      }
    }, 2000);
  }
});

document.addEventListener('click', (e) => {
  const nopeBadge = document.querySelector('.nope-badge');
  if (e.target.id === 'cross' && !newDog.hasBeenSwiped) {
    nopeBadge.style.display = 'block';
    heart.style.display = 'none';
    cross.style.display = 'none';
    setTimeout(() => {
      cross.style.display = 'block';
      heart.style.display = 'block';
    }, 2000);

    setTimeout(() => {
      if (!newDog.hasBeenSwiped) {
        dogPhotos.innerHTML = dogArr.shift();

        hideCrossHeart();
      }
    }, 2000);
  }
});
