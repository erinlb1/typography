html {
  font-size: 18px;
}

@font-face {
  font-family: 'Croissant One'; 
  src: url("fonts/CroissantOne-Regular.ttf");

}
/* work-sans-regular - latin */
@font-face {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/work-sans-v18-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/work-sans-v18-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/work-sans-v18-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/work-sans-v18-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/work-sans-v18-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/work-sans-v18-latin-regular.svg#WorkSans') format('svg'); /* Legacy iOS */
}

/* merriweather-regular - latin */
@font-face {
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/merriweather-v30-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/merriweather-v30-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/merriweather-v30-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/merriweather-v30-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/merriweather-v30-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/merriweather-v30-latin-regular.svg#Merriweather') format('svg'); /* Legacy iOS */
}

/* abril-fatface-regular - latin */
@font-face {
  font-family: 'Abril Fatface';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/abril-fatface-v19-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/abril-fatface-v19-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/abril-fatface-v19-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/abril-fatface-v19-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/abril-fatface-v19-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/abril-fatface-v19-latin-regular.svg#AbrilFatface') format('svg'); /* Legacy iOS */
}

@media only screen and (max-width: 1000px) {
  html {
    font-size: 16px;
  }
}

@media only screen and (max-width: 680px) {
  html {
    font-size: 14px;
  }
}

/* Header */

.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4.44rem;
  padding: 0 12%;
  background-color: white;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
  font-family: Verdana, sans-serif;
  font-size: .77rem;
  font-weight: bold;
}

.header .logo {
  flex-grow: 1;
  color: #ffb78c;
}

.header li {
  display: inline;
  padding-right: 2.22rem;
}

.header li a {
  text-decoration: none;
  color: #4a4a4a;
}

@media only screen and (max-width: 550px) {
  .header {
    flex-direction: column;
  }

  .header .logo {
    flex-grow: 0;
  }
}

/* Banner */

.banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50rem;
  background: url("https://content.codecademy.com/courses/freelance-1/unit-6/project-morocco/banner.jpg") center center no-repeat;
  background-size: cover;
  color: #ffb78c;
}

.banner h2 {
  padding: .55rem 0;
  border-top: 4px solid #ffb78c;
  border-bottom: 4px solid #ffb78c;
  font-size: 1.44rem;
  letter-spacing: 2px;
  font-weight: 500;
  font-family: 'Work Sans', "Arial", sans-serif;
}

.banner h1 {
  padding-top: 1.11rem;
  font-size: 11rem;
  font-weight: 900;
  font-family: 'Abril Fatface', sans-serif;
}

@media only screen and (max-width: 750px) {
  .banner {
    height: 40rem;
  }

  .banner h1 {
    font-size: 8rem;
  }
}

@media only screen and (max-width: 530px) {
  .banner {
    height: 30rem;
  }

  .banner h1 {
    font-size: 6rem;
  }
}

/* Journal */

.journal {
  padding: 0 25% 4rem 25%;
  background-color: rgb(254, 231, 218);
  color: #4a4a4a;
  font-family: 'Work Sans', serif;
}

.photo {
  width: 75%;
  padding: 1.11rem;
  border-radius: 5px;
  margin: 0 auto 4.44rem auto;
  background-color: white;
}

.photo .image-container {
  overflow: hidden;
  margin-bottom: 1.11rem;
}

.photo .image-container img {
  width: 100%;
}

.photo .caption {
  font-style: italic;
  font-family: 'Merriweather', serif;
}

.photo.first {
  position: relative;
  top: -2.77rem;
  margin-bottom: 1.67rem;
}

.journal p {
  padding-bottom: 2.77rem;
  font-size: 1.5rem;
  line-height: 1.4;
}

.journal .first-letter {
  float: left;
  padding-right: 1.4rem;
  font-family: "Abril Fatface", serif;
  font-size: 7.44rem;
  color: #10b0d8;
  line-height: .87;
}

.quote {
  display: block;
  padding: 4.44rem 0;
  margin-bottom: 3.33rem;
  border-top: 4px solid black;
  border-bottom: 4px solid black;
  text-align: center;
  font-size: 3.55rem;
  font-weight: 800;
  line-height: 1.2;
}

@media only screen and (max-width: 680px) {
  .journal {
    padding: 0 10% 4rem 10%;
  }
}

/* Footer */

footer {
  display: flex;
  align-items: center;
  padding: 0 1%;
  background-color: #212121;
  line-height: 1.5;
  font-family: 'Croissant One', "Merriweather", serif;
}

footer .image-container {
  width: 400px;
}

footer .content {
  flex-grow: 1;
  font-style: italic;
  color: #9b9b9b;
}

footer p {
  padding-bottom: 1.66rem;
}

footer p:last-child {
  padding-bottom: 0;
}

footer .author {
  color: #ffb78c;
}

footer em {
  color: #cfcfcf;
}

@media only screen and (max-width: 750px) {
  footer {
    flex-direction: column;
    padding: 0 10% 2rem 10%;
  }

  footer .image-container {
    height: 300px;
    margin-bottom: 2rem;
    overflow: hidden;
  }
}
