import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guard/auth.guard';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path: 'tabla',loadChildren: () =>
      import('./tabla/tabla.module').then((m) => m.TablaModule),
      canLoad:[AuthGuard]},
      {
      path: 'usuarios',loadChildren: () =>
      import('./usuarios/usuarios.module').then((m) => m.UsuariosModule),
      canLoad:[AuthGuard]
      },
      {path:'auth',loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
