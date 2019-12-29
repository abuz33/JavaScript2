'use strict';

//Creating a function that targets Googles logo and change it into one logo of our desire.
function hijackGoogleLogo() {
  // The logo which we want to change.
  const hyfLogo = 'https://www.hackyourfuture.dk/static/logo-dark.svg';

  // When I inspect the logo of Google logo, I saw that its Id is hplogo.
  const logo = document.getElementById('hplogo');

  // changing both src and srcset of the website. And voila the result is as expected.
  logo.src = hyfLogo;
  logo.srcset = hyfLogo;
}

hijackGoogleLogo(); 