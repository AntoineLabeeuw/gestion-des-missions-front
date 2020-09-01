import { MissionDemandeComponent } from './missions/mission-demande/mission-demande.component';
import { MissionsComponent } from './missions/missions.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechComponent } from './tech/tech.component';
import { StatutConnecteService } from './auth/statut-connecte.service';
import { AuthComponent } from './auth/auth.component';
import { AccueilComponent } from './accueil/accueil.component';


const routes: Routes = [
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService] }, // /tech accessible uniquement si connecté
  { path: 'connexion', component: AuthComponent },
  { path: 'accueil', component: AccueilComponent, canActivate: [StatutConnecteService] },
  { path: 'missions', component: MissionsComponent },
  { path: 'mission-demande', component: MissionDemandeComponent },
  { path: '', redirectTo: '/tech', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
