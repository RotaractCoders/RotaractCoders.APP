import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams } from 'ionic-angular';
import { SocioClubeResult } from '../../models/results/socio-clube-result';
import { SocioProvider } from '../../providers/socio/socio';
import { DetalheSocioIntermediarioPage } from '../detalhe-socio-intermediario/detalhe-socio-intermediario';
import { Config } from '../../config';

@Component({
    selector: 'page-equipe-distrital',
    templateUrl: 'equipe-distrital.html',
    providers: [ 
        SocioProvider
    ]
})
export class EquipeDistritalPage {

    config = new Config();
    lista: SocioClubeResult[] = [];

    loader = this.loadingController.create({
        content: 'Carregando...',
    });

    constructor(
        private socioProvider: SocioProvider,
        private loadingController: LoadingController,
        public navCtrl: NavController,
        public navParams: NavParams) {
        
            this.loader.present().then(() => {
                this.socioProvider.listarEquipeDistrital(this.config.gestaoDe, this.config.gestaoAte).subscribe(data => {
                    
                    this.lista = data;
                    this.loader.dismiss();
                    
                }, err => this.loader.dismiss());
            });
    }

    abrirSocio(codigoSocio: string) {
        
        this.navCtrl.push(DetalheSocioIntermediarioPage, { 
            codigoSocio: codigoSocio
        });
    }
}
