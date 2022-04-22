class Usuario {
    constructor(nombre,apellido,nombreLibro,autorLibro,mascota){
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros=[{"Nombre":nombreLibro, "Autor": autorLibro}];
        this.mascota=[mascota];
    }
    getFullName(){
    let nombreCompleto = ()=>{
        return (`Mi nombre completo es ${this.nombre} ${this.apellido}`)
    }
    return nombreCompleto()
    }
    addMascota(mascota){
    this.mascota.push(mascota)
    }
    countMascotas(){
    return (`La cantidad de mascotas que tengo es de : ${this.mascota.length}`)
    }
    addBook(nombre,autor){

        this.libros.push({"Nombre":nombre, "Autor": autor})
        return this.libros
    }
    getBookNames(){
        return this.libros.map(a => a.Nombre)
    }
}


const usuario = new Usuario ("Otar","Kebadze", "The Maze Runner", "James Dashner" ,"perro");
console.log(usuario);
console.log(usuario.getFullName());
console.log(usuario.countMascotas());
console.log(usuario.mascota)
usuario.addMascota("gato");
usuario.countMascotas();
console.log(usuario.countMascotas());
console.log(usuario.mascota)
console.log(usuario.getBookNames());
console.log(usuario.addBook("Señor de los Anillos","Tolkien"));
console.log(usuario.getBookNames());