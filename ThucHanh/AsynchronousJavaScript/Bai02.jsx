'use strict';

// DOM
const imgContainer = document.querySelector('.images');

// wait function
const wait = seconds =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000));

// PART 1
const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error('Image not found'));
    });
  });
};

// PART 2
let currentImg;

createImage('https://up.yimg.com/ib/th/id/OIP.h_REyr4IhtYw-7Zk-aJeLQHaE8?pid=Api&rs=1&c=1&qlt=95&w=142&h=94')
  .then(img => {
    currentImg = img;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('https://up.yimg.com/ib/th/id/OIP.h_REyr4IhtYw-7Zk-aJeLQHaE8?pid=Api&rs=1&c=1&qlt=95&w=142&h=94');
  })
  .then(img => {
    currentImg = img;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => {
    console.error(err);
  });
