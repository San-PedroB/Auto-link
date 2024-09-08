import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss'],
})
export class ModalLoginComponent {

  constructor(private modalController: ModalController, private router: Router) {}

  navegarPasajero() {
    this.router.navigate(['home-pasajero'])
    console.log('Iniciar sesión como Pasajero');
    this.dismissModal();
  }

  navegarConductor() {
    this.router.navigate(['home-conductor'])
    console.log('Iniciar sesión como Conductor');
    this.dismissModal();
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}


