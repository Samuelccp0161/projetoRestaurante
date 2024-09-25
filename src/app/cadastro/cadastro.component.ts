import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {
  
  ngOnInit(): void {
    // Rola para baixo após um pequeno atraso
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight); // Rola para o final da página
    }, 100); // Atraso de 100ms
  }
}
