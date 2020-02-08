import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-baseball';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon("githubicon", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/appImages/github.svg"));
    this.matIconRegistry.addSvgIcon("linkedinicon", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/appImages/Linkedin.svg"));
  }
}
