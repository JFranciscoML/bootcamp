import { Component } from '@angular/core';
import { ExampleService } from '../services/example.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tercer-dia',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './tercer-dia.component.html',
  styleUrl: './tercer-dia.component.scss'
})
export class TercerDiaComponent {
  name = ""

  users = [];

  constructor(public service: ExampleService) {

  }


  ngOnInit() {
    this.service.obtenerlista().subscribe(resp => {
      console.log(resp);

    }
    )
  }
  editartexto(text:string){
    console.log(text)
    return text;
  }
}
