import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../service/registroservice.service';
import { 
  FormGroup, 
  FormControl, 
  Validators, 
  FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  formularioLogin : FormGroup;
  usuarios : Usuario[] = [];
  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private alertController: AlertController, 
              private menuController: MenuController,
              private toastController: ToastController,
              private registroService: RegistroserviceService,
              private navController: NavController,
              private fb: FormBuilder) {
                this.formularioLogin = this.fb.group({
                  'correo': new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern(this.emailPattern)]),
                  'password': new FormControl("", Validators.compose([Validators.required, Validators.minLength(2)])),
                });
               }


  get f(){
  return this.formularioLogin.controls;
}
  
  ngOnInit() {
    this.menuController.swipeGesture(false, 'first')
  }
  mostrarMenu(){
    this.menuController.open('first');

  }

  usuario = {
    email: '',
    password:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }


  //método que comprueba la existencia del usuario en el storage
  async Ingresar(){
    var f = this.formularioLogin.value; 
    var a = 0;
    this.registroService.getUsuarios().then(datos => { 
      this.usuarios=datos;
      if (!datos || datos.length==0)
      {
        return null;
      }

      for (let obj of this.usuarios){
        if (f.correo == obj.correoUsuario && f.password==obj.passUsuario){
          a=1;

          console.log('¡Ingresado con exito!', obj.nomUsuario);
          localStorage.setItem('ingresado', 'true');
          if (obj.tipo == 'docente'){
            localStorage.setItem('docente', 'true');
            this.navController.navigateRoot('docente');
          }
          if (obj.tipo == 'alumno'){
            localStorage.setItem('estudiante', 'true');
            this.navController.navigateRoot('estudiante');
          }
          this.showToast(obj.nomUsuario);
        }
      }//findelfor
      if (a==0){
        this.alertMsg();
      }
  })
}//findelmetodo

  async alertMsg(){
    const alert = await this.alertController.create({ 
      header: '¡Error!',
      message: 'Los datos ingresados son incorrectos',
      buttons: ['Aceptar']
    });
    await alert.present();
    return;
  }

  async showToast (msg){
    const toast = await this.toastController.create({
      message: '¡Bienvenido! '+ msg,
      duration: 2000
    });
    toast.present();
  }

}
