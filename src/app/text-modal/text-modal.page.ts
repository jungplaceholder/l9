import { Component, OnInit } from '@angular/core';
import { ModalController,ToastController} from '@ionic/angular';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-text-modal',
  templateUrl: './text-modal.page.html',
  styleUrls: ['./text-modal.page.scss'],
})
export class TextModalPage implements OnInit {

  arrayFirebase : any [];
  inputFirebase: {};
  
  constructor(public modalController: ModalController, public toastController:ToastController,private fdb: AngularFireDatabase) { 
    this.fdb.list("/Lijst/").valueChanges().subscribe(values => {
      this.arrayFirebase = values;
      console.log(this.arrayFirebase);
    });
  }
  
  ngOnInit() {
  }

  toonFalse(){
    this.modalController.dismiss();
  }
  async toonToast() {
    const toast = await this.toastController.create({
      message: 'Printing started.',
      duration: 3000,
      position: 'bottom'
    });
    await toast.present();
  }

}
