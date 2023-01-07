import {Component, OnInit} from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls:['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit{
  currentUser!:KeycloakProfile;
  constructor(
    private readonly keycloakService: KeycloakService,
  ){}

  async ngOnInit() {
    this.currentUser = await this.keycloakService.loadUserProfile();
  }
  logout(){
    this.keycloakService.logout()
  }
}
