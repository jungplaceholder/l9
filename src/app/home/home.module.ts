import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { TextModalPage } from '../text-modal/text-modal.page';
import { GraphModalPage } from '../graph-modal/graph-modal.page';
import { ChartsModule} from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage,TextModalPage,GraphModalPage],
  entryComponents: [TextModalPage,GraphModalPage]
})
export class HomePageModule {}
