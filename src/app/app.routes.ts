import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MenuComponent } from './menu/menu.component';

//Definindo rotas.
export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, //Rota padrão que leva para HomeComponent.
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona para Home se a rota estiver vazia
    { path: 'home', component: HomeComponent }, //Rota leva para home.
    { path: 'login', component: LoginComponent }, //Rota leva para o login.
    { path: 'cadastro', component: CadastroComponent }, //Rota leva para o cadastro.
    { path: 'menu', component: MenuComponent }, //Rota leva para o menu do cliente .
    

];

@NgModule({
    imports: [RouterModule.forRoot(routes)], //Importando RouterModule com as rotas definidas.
    exports: [RouterModule] //Exportando RouterModule para ser utilizado em outros módulos.
})

export class AppRoutingModule { }
