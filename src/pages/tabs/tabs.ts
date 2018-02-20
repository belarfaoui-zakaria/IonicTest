import { Component } from '@angular/core';

import { MedikitPage } from '../medikit/medikit';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab2Root = HomePage;
  tab1Root = MedikitPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
