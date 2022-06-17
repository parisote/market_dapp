<template>
    <div class="pageitem">
        <h2>NUEVA TECNOLOGIAS - PROYECTO FINAL</h2>
        <p><em>Nuestro Equipo</em></p>
    </div>
    <div class="container rounded bg-white mt-5 mb-5">
        <center>
            <div class="row">
                <div class="col-md-3 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="circular--square foto1" width="150px" src="@/assets/IMG_7400.jpg"><span class="font-weight-bold">Alfonso</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
                </div>
                <div class="col-md-3 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="circular--square foto1" width="150px" src="@/assets/IMG_7401.jpg"><span class="font-weight-bold">Tomas Climent</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
                </div>
                <div class="col-md-3 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="circular--square foto1" width="150px" src="@/assets/IMG_7404.jpg"><span class="font-weight-bold">Fede Jamus</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
                </div>
                <div class="col-md-3 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="circular--square foto1" width="150px" src="https://placeimg.com/200/200/animals"><span class="font-weight-bold">Diego</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
                </div>
            </div>
        </center>
    </div>
    <section>
        <h1>Red ETHERIUM</h1>
        <div class="content">
            <p>El proyecto corre sobre la RED ETHEREUM permitiendo a los usuarios utilizar billeteras virtuales</p><a href="">Learn more</a>
        </div>
        <div class="img">
            <img src="https://previews.123rf.com/images/rastudio/rastudio1712/rastudio171200888/92046169-s%C3%ADmbolo-de-ethereum-en-fondo-futurista-del-pol%C3%ADgono-del-hud-con-el-mapa-del-mundo-y-la-red-par-a-cua.jpg"/></div>    
    </section>
    <section>
        <h1>VUE JS</h1>
        <div class="content">
            <p>Utilizamos toda la programcion con VUE JS, junto con codigo javascript y las rutas correspondientes</p><a href="">Learn more</a>
        </div>
        <div class="img">
            <img src="https://lenguajejs.com/vuejs/introduccion/primeros-pasos/vue-main.js-app.vue.png"/></div>    
    </section>
</template>

<script>
export default {

}
</script>

<style >

.foto1 { padding: 10px; margin: 10px; border: 2px solid black; float: center; width: 250px; }

.imga1 {
  padding: 5px 10px 5px 10px;
  margin: 2px;
  display:inline-block;
  width: 200px;
}
.circular--square {
  border-top-left-radius: 50% 50%;
  border-top-right-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;
}
.pageitem {
    display:table;
    width:100%;
    margin-bottom:15px;
    padding-top:15px;
    text-align:center;
}

.pageitem h1 {
    font-weight:normal;
    color:#555;
    margin:0;
    text-align:left;
}

.pageitem h2 {
    font-size:32px;
    background-color:inherit;
    color:#444;
    margin-top:0;
}

.pageitem p em {
    background-color:inherit;
    color:#444;
    font-size:40px;
    font-style:normal;
    font-weight:100;
}

.pageitem p {
    padding:0 75px;
    margin:0;
    font-size:18px;
    line-height:200%;
 }
.col {
    float:left;
    margin:auto;
    width:100%;
    text-align:center;
}

.col ul#sub {
   clear:both;
   float:none;
   margin:auto; 
}

.col ul#sub li {
    text-align:center;
}

ul#bottomnav {
    display: list-item;
    list-style-type: none;
 }

ul#bottomnav li {
    display:block;
    text-align:center;
}
:root {
  --box-x-padding: 2rem;
  --box-y-padding: 2rem;
}
@media (min-width: 40em) {
  :root {
    --box-y-padding: 4rem;
  }
}
@media (min-width: 60em) {
  :root {
    --box-x-padding: 3rem;
    --box-y-padding: 6rem;
  }
}
@media (min-width: 40em) {
  section {
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-template-columns: 4fr 4fr 5fr;
    grid-template-areas: '. . title' 'img img content' 'img img .';
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;
  }
  section::after {
    content: '';
    grid-column: 2/-1;
    grid-row: 1/3;
    position: relative;
    z-index: -1;
    background: #fff;
    box-shadow: 0 0.2em 1em rgba(85, 50, 50, 0.2);
  }
  h1 {
    grid-area: title;
    padding-top: var(--box-y-padding);
    padding-left: var(--box-x-padding);
  }
  .content {
    grid-area: content;
    padding-bottom: var(--box-y-padding);
    padding-left: var(--box-x-padding);
    padding-right: var(--box-x-padding);
  }
  .img {
    grid-area: img;
  }
}
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");
html {
  font-family: Montserrat, sans-serif;
  font-size: 15px;
  background-color: white;
}
body {
  padding: 1em;
}
h1 {
  font-size: 4em;
  margin: 0 0 1rem;
  font-family: serif;
  position: relative;
}
h1::after {
  content: '';
  position: absolute;
  width: 6rem;
  /* background-color: rgb(247, 243, 243); */
  height: 2px;
  top: 0;
  left: 0;
}
@media (min-width: 40em) {
  h1::after {
    left: var(--box-x-padding);
    top: var(--box-y-padding);
  }
}
.content {
  color: #4d4d4d;
  margin-bottom: var(--box-y-padding);
}
@media (min-width: 40em) {
  .content {
    margin-bottom: 0;
  }
}
p {
  margin-top: 0;
  margin-bottom: var(--box-y-padding);
  line-height: 1.5;
}
.content a {
  text-decoration: none;
  border: 1px solid #b3b3b3;
  border-radius: 1em;
  padding: 1em 2em;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: inherit;
  display: inline-block;
  background-color: #fff;
}
.img {
  position: relative;
}
.img a {
  position: absolute;
  left: 0;
  bottom: 0;
}
img {
  max-width: 100%;
  vertical-align: middle;
  box-shadow: 0 0.2em 1.2em rgba(61,48,41,0.1);
}
.attribution {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #ea4c89;
  color: #fff;
  padding: 0.5em 1em;
}


</style>