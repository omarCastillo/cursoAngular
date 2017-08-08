import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})

export class FrutaComponent {
    public nombre_coponente = 'Componentes de fruta';
    public listado_frutas = 'Naranja, pera y sandia.';
    public nombre: string;
    public edad: number;
    public mayorEdad: boolean;
    public trabajos: Array<any> = ['Estudiante', 'Web developer', 22]


    constructor() {
        this.nombre = 'Omar';
        this.edad = 22;
        this.mayorEdad = true;
    }

    ngOnInit() {
        // this.cambiaNombre('omar');
        // alert('hola' + ' ' + this.nombre);

        // variables

        var uno  = 8;
        var dos = 15;

        if(uno === 8){
            let uno = 55;
            console.log('dentro del if: ' + uno);
        }

        console.log('fuera del if: ' + uno);
       

    }

    cambiaNombre(nombre) {
        this.nombre = nombre;
    }
}