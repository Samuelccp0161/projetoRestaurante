import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
      //Ativa animação fade após um pequno atraso.

    setTimeout((): void => {
      const fadeElement = document.querySelector('.fade');
      if(fadeElement){
        fadeElement.classList.add('show');
      }
    }, 100); //Adiciona um atraso de 100ms.
  }

}
