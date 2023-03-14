/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/ban-types */
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public alertController: AlertController) {}
  async exibirAlerta(mensagem: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Título',
      subHeader: 'Subtitulo',
      message: mensagem,
      buttons: ['OK'],
    });
    await alert.present();
  }
  verificaSelecionado(valor: any) { //recebe o parametro (any- esse parametro recebe qqr tipo de valor)
    let mensagem: string;
    mensagem = valor.detail.value; //variavel.detail.value //a propriedade $event é detail.value //no caso da multipla seleção a variavel virou um vetor
    this.exibirAlerta(mensagem);
  }
}
