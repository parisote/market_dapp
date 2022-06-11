<template>
    <div class="pageitem">
        <h2>NUEVA TECNOLOGIAS - PROYECTO FINAL</h2>
        <p><em>Nuestro Equipo</em></p>
    </div>
    <div id="contenedor">
        <center>
                <div class="col">
                    <img class="circular--square foto1" src="@/assets/IMG_7400.jpg">Alfonso
                    <img class="circular--square foto1" src="@/assets/IMG_7401.jpg">Tomas Climent
                    <img class="circular--square foto1" src="@/assets/IMG_7404.jpg">Fede Jamus
                </div>
                <div class="col">
                    <img class="circular--square foto1" src="https://placeimg.com/200/200/animals">Agostina
                    <img class="circular--square foto1" src="https://placeimg.com/200/200/animals">Diego
                </div>

        </center>
    </div>


    <div class="pageitem">
        <p>Phasellus ac leo eget felis egestas vestibulum nec at velit. Vivamus venenatis, nibh ut tempus viverra, tellus augue pulvinar sapien, at iaculis justo nisi non metus. Quisque quis malesuada arcu, sed ultricies nibh. Duis vehicula metus quis arcu rutrum faucibus eget ut ex. Curabitur lacus justo, iaculis congue suscipit quis, posuere at turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in quam non urna volutpat consequat. Proin mollis ut mauris et venenatis. Vivamus dui nibh, blandit vitae pellentesque sed, finibus sit amet nulla.</p>
    </div>
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
</style>