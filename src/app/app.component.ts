import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private navController: NavController) {}

  componentes : Componente[] = [
    {
      icon: 'home-outline',
      name: 'Cerrar Sesión',
      redirecTo:'/login'
      
    }
  ];

  deslogear(){
    localStorage.clear();
    this.navController.navigateRoot('login');
  }
}
