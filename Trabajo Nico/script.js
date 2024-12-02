class GestorInternet{
    constructor(nombre, numContrato){
        this.nombre = nombre
        this.numContrato = numContrato
        this.tipoPlan = "básico"
        this.velocidad = 100
        this.precio = 15000
    }

    getNombre(){
        return this.nombre
    }

    getNumContrato(){
        return this.numContrato
    }

    getVelocidad(){
        return this.velocidad
    }

    getPrecio(){
        return this.precio
    }

    getTipoPlan(){
        return this.tipoPlan
    }

    setPrecio(nuevoPrecio){
        if (nuevoPrecio > 0){
            this.precio = nuevoPrecio
        }
        else{
            alert("El nuevo precio debe ser mayor a 0")
        }
    }
    setPlan(nuevoPlan){
        if (nuevoPlan == "basico" || nuevoPlan == "estandar" || nuevoPlan == "premium"){
            this.tipoPlan = nuevoPlan
            if (nuevoPlan == "básico"){
                this.velocidad = 100
            }
            else if (nuevoPlan == "estandar"){
                this.velocidad = 200
            }
            else{
                this.velocidad = 300
            }
        }
        else{
            alert("El nuevo plan debe ser básico, estandar o premium")
        }
    }

    calcularPeriodo(cantidadMeses){
        for (let i = 0; i < cantidadMeses; i++){
            this.precio = this.precio + (this.precio * 0.10)
        }
        return this.precio
    }
}

let gestor1;

    

function iniciarUsuario(){
    const nombre = document.getElementById("nombre").value
    const numContrato = document.getElementById("contrato").value
    gestor1 = new GestorInternet(nombre, numContrato)
    mostrarInformacion()
}

function cambiarPrecio(){
    const nuevoPrecio = document.getElementById("precio").value
    gestor1.setPrecio(nuevoPrecio)
    mostrarInformacion()
}

function cambiarPlan(){
    const nuevoPlan = document.getElementById("nplan").value
    gestor1.setPlan(nuevoPlan)
    mostrarInformacion()
}
    
function mostrarInformacion(){
    document.getElementById("mostrarNombre").innerHTML = gestor1.getNombre()
    document.getElementById("mostrarContrato").innerHTML = gestor1.getNumContrato()
    document.getElementById("mostrarPlan").innerHTML = gestor1.getTipoPlan()
    document.getElementById("mostrarPrecio").innerHTML = gestor1.getPrecio()
}