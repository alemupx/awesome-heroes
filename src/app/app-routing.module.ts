import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoggedInAuthGuard } from './shared/guards/loggedInAuth.guard';


const routes: Routes = [

  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },

  {
    path: 'register',
    canActivate: [LoggedInAuthGuard],
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },

  {
    path: 'login',
    canActivate: [LoggedInAuthGuard],
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },

  {
    path: 'account',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountPageModule)
  },

  {
    path: 'games',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/games/games.module').then(m => m.GamesPageModule)
  },

  {
    path: 'game/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/game/game.module').then(m => m.GamePageModule)
  },

  {
    path: 'player/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/player/player.module').then(m => m.PlayerPageModule)
  },


  {
    path: 'add-player/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/player-add/player-add.module').then(m => m.PlayerAddPageModule)
  },

  {
    path: 'edit-player/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/player-edit/player-edit.module').then(m => m.PlayerEditPageModule)
  },

  {
    path: 'forms/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/forms/forms.module').then(m => m.FormsPageModule)
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
