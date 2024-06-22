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
    document.getElementsByName("sum_total")[0].value=num1+ Number(num2);
}
function calcularResta(){
    var num1, num2;
    num1= Number ( document.getElementsByName("res_num1")[0].value);
    num2=document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].value= num1 - Number(num2);
}
function calcularMulti(){
    var num1, num2;
    num1= Number( document.getElementsByName("mul_num1")[0].value);
    num2=document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].value=num1 * Number(num2);
}
function calcularDiv(){
    var num1, num2;
    num1= Number( document.getElementsByName("div_num1")[0].value);
    num2=document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].value=num1 / Number(num2);
}

