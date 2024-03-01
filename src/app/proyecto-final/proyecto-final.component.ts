import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-proyecto-final',
  standalone: true,
  imports: [GoogleMapsModule, CommonModule, FormsModule],
  templateUrl: './proyecto-final.component.html',
  styleUrl: './proyecto-final.component.scss'
})
export class ProyectoFinalComponent {
  users: any = []
  user: any = {
    name: "",
    description: "",
    position: {
      lat: "",
      lng: ""
    }
  }

  ngOnInit() {
  
  }

  submit(){
    this.users.push(this.user)
  }

  position(event: any){
    this.user.position ={
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    }

  }
}
