import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjouterScanPage } from './ajouter-scan';

@NgModule({
  declarations: [
    AjouterScanPage,
  ],
  imports: [
    IonicPageModule.forChild(AjouterScanPage),
  ],
})
export class AjouterScanPageModule {}
