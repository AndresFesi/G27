//AQUI EMPIEZAN LAS FUNCIONES DE BASE DE DATOS PARA LA SECCION DE DOCTORES
function consultarInformacionDoctores(){
    $.ajax({
        url:"https://gd185c7793d0c52-medicos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor",
        type:"GET",
        dataType:"JSON",
        success:function(respuestaDoctores){
            console.log(respuestaDoctores);
            informacionDoctores(respuestaDoctores.items)
        }
    });
}

//experimento
function cargarInformacionDoctores(idDoctores){
    let datosDoctores={
        id:idDoctores
    };
    let dataToSend=JSON.stringify(datosDoctores);
    $.ajax({
        url:"https://gd185c7793d0c52-medicos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor/:id",
        type:"GET",
        dataType:"JSON",
        success:function(respuestaDoctores){
            $("#resultadoDoctores").empty();
            $("#id").val("#id");
            $("#specialty").val("#specialty");
            $("#graduate_year").val("graduate_year");
            $("#department_id").val("department_id");
            $("#name").val("name");
            consultarInformacionDoctores();
        }
    });
}

function informacionDoctores(items){
    let tablaDoctores = "<table>";
    for(i=0; i<items.length; i++){
        tablaDoctores += "<tr>";
        tablaDoctores += "<td>" + items[i].id + "</td>";
        tablaDoctores += "<td>" + items[i].specialty + "</td>";
        tablaDoctores += "<td>" + items[i].graduate_year + "</td>";
        tablaDoctores += "<td>" + items[i].department_id + "</td>";
        tablaDoctores += "<td>" + items[i].name + "</td>";
        tablaDoctores += "<td> <button onclick='borrarInformacionDoctores("+items[i].id+")'>Borrar</button>";
        tablaDoctores += "<td> <button onclick='cargarInformacionDoctores("+items[i].id+")'>Editar</button>";//BORRAR SI NO FUNCIONA
        tablaDoctores += "</tr>"
    }
    tablaDoctores += "</table>";
    $("#resultadoDoctores").append(tablaDoctores);
}

function guardarInformacionDoctores(){
    let datosDoctores={
        id:$("#id").val(),
        specialty:$("#specialty").val(),
        graduate_year:$("#graduate_year").val(),
        department_id:$("#department_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(datosDoctores);
    $.ajax({
        url:"https://gd185c7793d0c52-medicos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor",
        type:"POST",
        data:datosDoctores,
        datatype:"JSON",
        success:function(respuestaDoctores){
            $("#resultadoDoctores").empty();
            $("#id").val("");
            $("#specialty").val("");
            $("#graduate_year").val("");
            $("#department_id").val("");
            $("#name").val("");
            consultarInformacionDoctores();
            alert("Se ha guardado el registro.")
        }
    });
}

function actualizarInformacionDoctores(){
    let datosDoctores={
        id:$("#id").val(),
        specialty:$("#specialty").val(),
        graduate_year:$("#graduate_year").val(),
        department_id:$("#department_id").val(),
        name:$("#name").val(),
    };
    console.log(datosDoctores);
    let dataToSend=JSON.stringify(datosDoctores);
    $.ajax({
        url:"https://gd185c7793d0c52-medicos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaDoctores){
            $("#resultadoDoctores").empty();
            $("#id").val("");
            $("#specialty").val("");
            $("#graduate_year").val("");
            $("#department_id").val("");
            $("#name").val("");
            consultarInformacionDoctores();
            alert("Se ha actualizado el registro.")
        }
    });
}

function borrarInformacionDoctores(idDoctores){
    let datosDoctores={
        id:idDoctores
    };
    let dataToSend=JSON.stringify(datosDoctores);
    $.ajax({
        url:"https://gd185c7793d0c52-medicos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaDoctores){
            $("#resultadoDoctores").empty();
            consultarInformacionDoctores();
            alert("Se ha eliminado el registro.")
        }
    });
}



//AQUI EMPIEZAN LAS FUNCIONES DE BASE DE DATOS PARA LA SECCION DE CLIENTES

function consultarInformacionClientes(){
    $.ajax({
        url:"https://gd185c7793d0c52-medicos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        dataType:"JSON",
        success:function(respuestaClientes){
            console.log(respuestaClientes);
            informacionClientes(respuestaClientes.items)
        }
    });
}

function informacionClientes(items){
    let tablaClientes = "<table>";
    for(i=0; i<items.length; i++){
        tablaClientes += "<tr>";
        tablaClientes += "<td>" + items[i].id + "</td>";
        tablaClientes += "<td>" + items[i].name + "</td>";
        tablaClientes += "<td>" + items[i].email + "</td>";
        tablaClientes += "<td>" + items[i].age + "</td>";
        tablaClientes += "<td> <button onclick='borrarInformacionClientes("+items[i].id+")'>Borrar</button>";
        tablaClientes += "</tr>"
    }
    tablaClientes += "</table>";
    $("#resultadoClientes").append(tablaClientes);
}

function guardarInformacionClientes(){
    let datosClientes={
        id:$("#id2").val(),
        name:$("#name2").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(datosClientes);
    $.ajax({
        url:"https://gd185c7793d0c52-medicos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:datosClientes,
        datatype:"JSON",
        success:function(respuestaClientes){
            $("#resultadoClientes").empty();
            $("id2").val("");
            $("#name2").val("");
            $("#email").val("");
            $("#age").val("");
            consultarInformacionClientes();
            alert("Se ha guardado el registro.")
        }
    });
}

function actualizarInformacionClientes(){
    let datosClientes={
        id:$("#id2").val(),
        name:$("#name2").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    console.log(datosClientes);
    let dataToSend=JSON.stringify(datosClientes);
    $.ajax({
        url:"https://gd185c7793d0c52-medicos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaClientes){
            $("#resultadoClientes").empty();
            $("#id2").val("");
            $("#name2").val(""),
            $("#email").val("");
            $("#age").val("");
            consultarInformacionClientes();
            alert("Se ha actualizado el registro.")
        }
    });
}

function borrarInformacionClientes(idClientes){
    let datosClientes={
        id:idClientes
    };
    let dataToSend=JSON.stringify(datosClientes);
    $.ajax({
        url:"https://gd185c7793d0c52-medicos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaClientes){
            $("#resultadoClientes").empty();
            consultarInformacionClientes();
            alert("Se ha eliminado el registro.")
        }
    });
}

//AQUI EMPIEZAN LAS FUNCIONES DE BASE DE DATOS PARA LA SECCION DE MENSAJES

function consultarInformacionMensajes(){
    $.ajax({
        url:"https://gd185c7793d0c52-medicos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        dataType:"JSON",
        success:function(respuestaMensajes){
            console.log(respuestaMensajes);
            informacionMensajes(respuestaMensajes.items)
        }
    });
}

function informacionMensajes(items){
    let tablaMensajes = "<table>";
    for(i=0; i<items.length; i++){
        tablaMensajes += "<tr>";
        tablaMensajes += "<td>" + items[i].id + "</td>";
        tablaMensajes += "<td>" + items[i].messagetext + "</td>";
         tablaMensajes += "<td> <button onclick='borrarInformacionMensajes("+items[i].id+")'>Borrar</button>";
        tablaMensajes += "</tr>"
    }
    tablaMensajes += "</table>";
    $("#resultadoMensajes").append(tablaMensajes);
}

function guardarInformacionMensajes(){
    let datosMensajes={
        id:$("#id3").val(),
        messagetext:$("#messagetext").val(),
    };
    let dataToSend=JSON.stringify(datosMensajes);
    $.ajax({
        url:"https://gd185c7793d0c52-medicos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:datosMensajes,
        datatype:"JSON",
        success:function(respuestaMensajes){
            $("#resultadoMensajes").empty();
            $("#id3").val(""),
            $("#messagetext").val(""),
            consultarInformacionMensajes();
            alert("Se ha guardado el registro.")
        }
    });
}

function actualizarInformacionMensajes(){
    let datosMensajes={
        id:$("#id3").val(),
        messagetext:$("#messagetext").val(),
    };
    console.log(datosMensajes);
    let dataToSend=JSON.stringify(datosMensajes);
    $.ajax({
        url:"https://gd185c7793d0c52-medicos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaMensajes){
            $("#resultadoMensajes").empty();
            $("#id3").val("");
            $("#messagetext").val(""),
            consultarInformacionMensajes();
            alert("Se ha actualizado el registro.")
        }
    });
}

function borrarInformacionMensajes(idMensajes){
    let datosMensajes={
        id:idMensajes
    };
    let dataToSend=JSON.stringify(datosMensajes);
    $.ajax({
        url:"https://gd185c7793d0c52-medicos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaMensajes){
            $("#resultadoMensajes").empty();
            consultarInformacionMensajes();
            alert("Se ha eliminado el registro.")
        }
    });
}