/**
 * convercion de unidades, de metros, yardas, pulgadas y pies
 * @method cambiarUnidades
 * @param {string} id - el id de los inputs de metros, yardas, pulgadas o pies
 * @param {number} value - el valor de los inputs de metros, yardas, pulgadas o pies
 * @return
 */
function cambiarUnidades(id,value){
    if(isNaN(value)){
        alert("se ingreso un valor incorecto");
        document.lasUnidades.unid_metro.value="";
        document.lasUnidades.unid_pulgada.value=""
        document.lasUnidades.unid_pie.value=""
        document.lasUnidades.unid_yarda.value=""
    }else if (id=="metro"){
        document.lasUnidades.unid_pulgada.value=39.3701*value;
        document.lasUnidades.unid_pie.value=3.28084*value;
        document.lasUnidades.unid_yarda.value=1.09361*value;
    }else if (id=="pulgada"){
        document.lasUnidades.unid_metro.value=0.0254*value;
        document.lasUnidades.unid_pie.value=0.0833333*value;
        document.lasUnidades.unid_yarda.value=0.0277778*value;
    }else if (id=="pie"){
        document.lasUnidades.unid_pulgada.value=12*value;
        document.lasUnidades.unid_metro.value=0.3048*value;
        document.lasUnidades.unid_yarda.value=0.333333*value;
    }else if (id=="yarda"){
        document.lasUnidades.unid_pulgada.value=36*value;
        document.lasUnidades.unid_pie.value=3*value;
        document.lasUnidades.unid_metro.value=0.9144*value;
    }
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
