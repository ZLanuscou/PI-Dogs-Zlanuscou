function Validate(dog) {
    const incorrecto = {}
    const regex = new RegExp(/[0-9]/)
    if(dog.Peso.length < 1 || dog.Altura.length <1 || dog.Años_de_vida.length < 1 || dog.Nombre.length<1 || dog.Temperamentos.length < 1){
      incorrecto.Llenar = "Error datos vacios"
    }
  if(dog.Peso < 1){
    incorrecto.Peso = "El peso debe ser mayor a 1"
  }
  if(dog.Peso > 99){
    incorrecto.Peso = "El peso debe ser menor a 99"
  }
  if(dog.Altura < 1){
    incorrecto.Peso = "La altura debe ser mayor a 1"
  }

if(dog.Nombre.length < 1){
    incorrecto.Nombre = "Debe ingresar un nombre"
}
if(regex.test(dog.Nombre)){
    incorrecto.Nombre = "El nombre no puede contener numeros"
  }
  if(!regex.test(dog.Años_de_vida) || !dog.Años_de_vida.includes("-")){
    incorrecto.Años_de_vida = "Los años deben estar en este formato: 1 - 2"
  }
  if(!regex.test(dog.Peso) || !dog.Peso.includes("-")){
    incorrecto.Peso = "El peso debe tener un min y un max en este formato: 1 - 2"
  }
  if(!regex.test(dog.Altura) || !dog.Altura.includes("-")){
    incorrecto.Altura = "La altura debe tener un min y un max en este formato: 1 - 2"
  }
    return incorrecto
}

export default Validate