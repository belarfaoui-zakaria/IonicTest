import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanDetailPage } from './scan-detail';

@NgModule({
  declarations: [
    ScanDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanDetailPage),
  ],
})
export class ScanDetailPageModule {}
