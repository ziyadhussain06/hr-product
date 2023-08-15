import { NgModule } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';

import { MatSelectModule } from '@angular/material/select';


const Material = [
  MatIconModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatButtonModule,
  MatStepperModule,
  FormsModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
]

@NgModule({
  imports: [Material],
  exports: [Material],
})
export class MaterialModule {
  constructor(
    public matIconRegistry: MatIconRegistry,
    public domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "eazio--logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/eazio--logo.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "envelope",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/24/outline/envelope.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "eazio-logo-black",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/eazio-logo-black.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "user",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/24/outline/user.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "at-sign",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/20/solid/at-sign.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "at-sign",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/20/solid/at-sign.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "lock-close",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/24/outline/lock-closed.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "info-tooltip",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/info-tooltip.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "warning-tooltip",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/warning-tooltip.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "x-mark",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/20/solid/x-mark.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "rocket",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/rocket.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "robot",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/robot.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "left-arrow",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/20/solid/arrow-left.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "eazio-icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/eazio-icon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "category-icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/category-icon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "chevron-down",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/20/solid/chevron-down.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "globle",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/globle.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "location-outline",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/location-outline.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "envelope-outline",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/24/outline/envelope.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "building-outline",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/building-outline.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "world-outline",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/world-outline.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "arrow-right",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/24/solid/arrow-right.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "arrow-left",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/24/solid/arrow-left.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "current-location",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/current-location.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "reload-spinner",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/reload-spinner.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "eye-slash",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/24/outline/eye-slash.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "eye",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/24/outline/eye.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "alert-circle",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/24/outline/alert-circle.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "Shield-outline",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/shield-outline.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "check",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/check.svg")
    );
    
  }
}
