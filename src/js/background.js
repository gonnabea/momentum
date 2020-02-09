const image1 = () => {
  document.body.style.background =
    "url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/snow-covered-pine-trees-on-sunset-royalty-free-image-615101076-1541521490.jpg?crop=0.670xw:1.00xh;0.330xw,0&resize=480:*')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  document.body.style.color = "white";
};

const image2 = () => {
  document.body.style.background =
    "url('https://cdnassets.hw.net/dims4/GG/fe4351e/2147483647/resize/876x%3E/quality/90/?url=https%3A%2F%2Fcdnassets.hw.net%2F29%2Fa2%2F543f7c374cd8a20b2db4c1320399%2Fwinter.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  document.body.style.color = "black";
};

const image3 = () => {
  document.body.style.background =
    "url('https://24.media.tumblr.com/4111c4f354d06420f2a7770e580af571/tumblr_mqocecTPgM1rlnjw2o1_1280.gif')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
};

const randomBox = () => {
  const randomNumber = Math.ceil(Math.random() * 10);
  if (randomNumber < 4) {
    image1();
  } else if (randomNumber >= 4 && randomNumber < 7) {
    image2();
  } else {
    image3();
  }
};

randomBox();
