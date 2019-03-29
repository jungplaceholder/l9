import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-graph-modal',
  templateUrl: './graph-modal.page.html',
  styleUrls: ['./graph-modal.page.scss'],
})
export class GraphModalPage implements OnInit {

  constructor(public modalController: ModalController, public toastController: ToastController) { }

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

  public myChartLabels = ["begin datum","rat irl l9 broski","eind datum"];
  public myChartData = [
    {data:[10,20,50,12,35,12,69], label:'idk?'},
    {data:[15,19,44,54,31,13], label: 'idk!'}
  ];
  public myChartType = 'bar';
  public myChartLegend = true;

}
