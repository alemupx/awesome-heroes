import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoggedInAuthGuard } from './shared/guards/loggedInAuth.guard';


const routes: Routes = [
  {
    path: 'login',
    canActivate: [LoggedInAuthGuard],
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },

  {
    path: 'games',
    canActivate: [AuthGuard],

    loadChildren: () => import('./pages/games/games.module').then(m => m.GamesPageModule)
  },



  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },

  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountPageModule)
  },

  {
    path: 'game/:id',
    loadChildren: () => import('./pages/game/game.module').then(m => m.GamePageModule)
  },

  {
    path: 'player/:id',
    loadChildren: () => import('./pages/player/player.module').then(m => m.PlayerPageModule)
  },
  { path: '**', redirectTo: 'home' },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
