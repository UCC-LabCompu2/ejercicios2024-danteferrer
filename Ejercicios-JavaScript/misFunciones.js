/**
 * convercion de unidades, de metros, yardas, pulgadas y pies
 * @method cambiarUnidades
 * @param {string} id - el id de los inputs de metros, yardas, pulgadas o pies
 * @param {number} value - el valor de los inputs de metros, yardas, pulgadas o pies
 * @return
 */
function cambiarUnidades(id,value){
    var metro, pulgada, pie, yarda;
    // if (value.include(",")){
    //     value=value.replace(",",".")
    // }
    if(isNaN(value)) {
        alert("se ingreso un valor incorecto");
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = ""
        document.lasUnidades.unid_pie.value = ""
        document.lasUnidades.unid_yarda.value = ""
    }else if (id=="metro"){
        metro=value;
        pulgada=39.3701*value;
        pie=3.28084*value;
        yarda=1.09361*value;
    }else if (id=="pulgada"){
        pulgada=value;
        metro=0.0254*value;
        pie=0.0833333*value;
        yarda=0.0277778*value;
    }else if (id=="pie"){
        pie=value;
        pulgada=12*value;
        metro=0.3048*value;
        yarda=0.333333*value;
    }else if (id=="yarda"){
        yarda=value;
        pulgada=36*value;
        pie=3*value;
        metro=0.9144*value;
    }
    document.lasUnidades.unid_metro.value= Math.round(metro*100)/100;
    document.lasUnidades.unid_pulgada.value= Math.round(pulgada*100)/100;
    document.lasUnidades.unid_pie.value= Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value= Math.round(yarda*100)/100;
}
function convertirGR(id){
    var grad, rad;
    if (id=="grados"){
        grad=document.getElementById("grados").value;
        rad= (grad* Math.PI)/180;
    }else if (id=="radianes"){
        rad=document.getElementById("radianes").value;
        grad= (rad*180)/Math.PI;
    }
    document.getElementById("grados").value=grad;
    document.getElementById("radianes").value=rad;
}
function mostrar_ocultar(valorMo){
    if (valorMo=="val_mostrar"){
        document.getElementById("divMo").style.display='block';
    }else if (valorMo=="val_ocultar"){
        document.getElementById("divMo").style.display='none';
    }
}
function calcularSuma(){
    var num1, num2;
    num1= Number( document.getElementsByName("sum_num1")[0].value);
    num2=document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].innerHTML=num1+ Number(num2);
}
function calcularResta(){
    var num1, num2;
    num1= Number ( document.getElementsByName("res_num1")[0].value);
    num2=document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].innerHTML= num1 - Number(num2);
}
function calcularMulti(){
    var num1, num2;
    num1= Number( document.getElementsByName("mul_num1")[0].value);
    num2=document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].innerHTML=num1 * Number(num2);
}
function calcularDiv(){
    var num1, num2;
    num1= Number( document.getElementsByName("div_num1")[0].value);
    num2=document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].innerHTML=num1 / Number(num2);
}
function cargarWeb(){
    var cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp, "_self");
}

function cargarResultado(){
    var urlComp, cant, unidad;
    urlComp = window.location.href.split("#");
    cant = urlComp[1];
    unidad = urlComp[2];
    document.getElementById("dist").value = cant + " " + unidad;
}

function guardarLocal(){
    let distancia, unidad;
    distancia = document.getElementById('distancia').value;
    unidad = document.getElementsByName('unidades')[0].value;
    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadLS", unidad);
    window.open('2_web.html', "_self");
}

function cargarLocal(){
    let cant, unid;

    cant = localStorage.getItem("distanciaLS");
    unid = localStorage.getItem("unidadLS");
    document.getElementById("dist").value = cant + " " + unid;
}
function dibujarCiruloCuadrado(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var yMax = canvas.height;
    var xMax = canvas.width;
    var margen =5;
    ctx.fillStyle = "#992058";
    ctx.fillRect(0 + margen,yMax - 40 - margen, 40, 40);
    ctx.arc(xMax/2,yMax/2, 30, 0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#436357";
    ctx.fill();
}
var bandera;
function dibujar(event){
    var canvas = document.getElementById("canvaDibujo");
    var ctx = canvas.getContext("2d");
    var posx = event.clientX;
    var posy = event.clientY;
    console.log(posx, posy);
    canvas.onmousedown = function (){ bandera = true};
    canvas.onmouseup = function (){bandera = false};
    if (bandera){ctx.fillRect(posx, posy,5,5);
        ctx.fill;}


}
function limpiar(){
    var canvas = document.getElementById("canvaDibujo");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
}
