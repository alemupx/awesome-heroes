import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoggedInAuthGuard } from './shared/guards/loggedInAuth.guard';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [LoggedInAuthGuard],
    loadChildren: () =>
      import('./paginas/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./paginas/home/home.module').then((m) => m.HomePageModule),
  },

  {
    path: 'partidas',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./paginas/partidas/partidas.module').then(
        (m) => m.PartidasPageModule
      ),
  },

  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
