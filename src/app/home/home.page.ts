import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TextModalPage } from '../text-modal/text-modal.page';
import { GraphModalPage } from '../graph-modal/graph-modal.page';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

arrayFirebase : any [];
inputFirebase: {};

  constructor (public modalController: ModalController,
    public AngularFireDatabase: AngularFireDatabase){

this.AngularFireDatabase.list("/Lijst/").valueChanges().subscribe(values => {
  this.arrayFirebase = values;
  console.log(this.arrayFirebase);
});

  }

  async functieToonTextModal(){
    const textModal = await this.modalController.create({component: TextModalPage});
    await textModal.present();
  }

  async functieToonGraphModal(){
    const graphModal = await this.modalController.create({component: GraphModalPage})
    await graphModal.present();
  }

  async functiePushNaarDb(){
    this.AngularFireDatabase.list("/Lijst").push(this.inputFirebase);
  }

  async functieDeleteGanseLijst(i){
    this.AngularFireDatabase.list("/Lijst/").remove(this.arrayFirebase[i].$key);
  }
}
