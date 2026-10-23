import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-register',
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    DatePickerModule,
    SelectModule
  ],
  templateUrl: './book-register.component.html',
  styleUrl: './book-register.component.css'
})
export class BookRegisterComponent {

  types = [
    {label: 'Aventura' , value: 'AVENTURA'},
    {label: 'Terror' , value: 'TERROR'},
    {label: 'Filosofia' , value: 'FILOSOFIA'},
    {label: 'Gastronomia' , value: 'GASTRONOMIA'},
    {label: 'Nacional' , value: 'NACIONAL'},
    {label: 'Internacional' , value: 'INTERNACIONAL'}
  ]

}
