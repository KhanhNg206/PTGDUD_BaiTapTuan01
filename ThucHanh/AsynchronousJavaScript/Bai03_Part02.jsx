'use strict';

const imgContainer = document.querySelector('.images');

const wait = seconds =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000));

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

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(imgPath => createImage(imgPath));
    console.log(imgs); 

    const imgsEl = await Promise.all(imgs);

    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};

loadAll(['https://up.yimg.com/ib/th/id/OIP.h_REyr4IhtYw-7Zk-aJeLQHaE8?pid=Api&rs=1&c=1&qlt=95&w=142&h=94'
    ,'https://up.yimg.com/ib/th/id/OIP.h_REyr4IhtYw-7Zk-aJeLQHaE8?pid=Api&rs=1&c=1&qlt=95&w=142&h=94',
     'https://up.yimg.com/ib/th/id/OIP.h_REyr4IhtYw-7Zk-aJeLQHaE8?pid=Api&rs=1&c=1&qlt=95&w=142&h=94']);
