import {Component} from '@angular/core';

  @Component({
      selector: 'empleados',
      templateUrl: './empleados.component.html',
        styleUrls: ['./empleados.component.css']    
  })

  export class EmpleadosComponent{
      public id_empleado = '0001';
      public nombre = 'Omar';
      public apellidos = 'Castillo Rosales';
      public edad = '22';
      public cargo = 'Jefe'
  }

  