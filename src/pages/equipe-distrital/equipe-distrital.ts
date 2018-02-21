import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SocioResult } from '../../models/results/socio-result';

import { SocioProvider } from '../../providers/socio/socio';


@IonicPage()
@Component({
    selector: 'page-equipe-distrital',
    templateUrl: 'equipe-distrital.html',
    providers: [ 
        SocioProvider
    ]
})
export class EquipeDistritalPage {

    lista: SocioResult[] = [];

    constructor(
        private socioProvider: SocioProvider,
        public navCtrl: NavController,
        public navParams: NavParams) {
        
            this.socioProvider.listar().then(data => {
                
                this.lista = data;
                this.lista = this.lista.filter(x => x.cargos.filter(cargo => cargo.tipoCargo == 'Distrital' && cargo.gestaoDe == 18).length > 0);
    
                this.lista.forEach(x => {
                    let cargo = x.cargos.filter(cargo => cargo.tipoCargo == 'Distrital' && cargo.gestaoDe == 18)[0];
                    x.cargo = cargo.nome;
                });
            });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EquipeDistritalPage');
    }

}
