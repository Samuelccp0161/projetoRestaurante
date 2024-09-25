import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  ngOnInit(): void {
    // Rola para baixo após um pequeno atraso
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight); // Rola para o final da página
    }, 100); // Atraso de 100ms
  }
}
