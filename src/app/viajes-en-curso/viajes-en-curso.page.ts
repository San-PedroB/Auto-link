import { Component, OnInit } from '@angular/core';
import { ServicioViajesService } from '../services/servicio-viajes.service'; // Importa el servicio de viajes
import { ToastController } from '@ionic/angular'; // Para mostrar mensajes Toast

@Component({
  selector: 'app-viajes-en-curso',
  templateUrl: './viajes-en-curso.page.html',
  styleUrls: ['./viajes-en-curso.page.scss'],
})
export class ViajesEnCursoPage implements OnInit {

  viaje: any = null;

  constructor(private servicioViajes: ServicioViajesService, private toastController: ToastController) { }

  ngOnInit() {
    // Obtener los datos del viaje desde el servicio
    this.viaje = this.servicioViajes.getDatos();
  }

  // Función para terminar el viaje
  async terminarViaje() {
    // Terminar el viaje usando el servicio
    this.servicioViajes.borrarViaje();  // No pasamos el formulario desde aquí

    // Actualizar la vista para reflejar que no hay viaje en curso
    this.viaje = null;

    // Muestra un mensaje de confirmación
    const toast = await this.toastController.create({
      message: 'El viaje ha sido terminado.',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }
}
