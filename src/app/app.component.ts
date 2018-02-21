import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListaRdrsPage } from '../pages/lista-rdrs/lista-rdrs';
import { LemaRotarioPage } from '../pages/lema-rotario/lema-rotario';
import { ListaPresidentesPage } from '../pages/lista-presidentes/lista-presidentes';
import { ClubesPage } from '../pages/clubes/clubes';
import { EquipeDistritalPage } from '../pages/equipe-distrital/equipe-distrital';
import { AgendaPage } from '../pages/agenda/agenda';
import { DownloadsPage } from '../pages/downloads/downloads';
import { FaqPage } from '../pages/faq/faq';
import { ListaCargosPage } from '../pages/lista-cargos/lista-cargos';

import { ConsolidadoProvider } from '../providers/consolidado/consolidado';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;

    pages: Array<{ title: string, component: any }>;

    constructor(
        public platform: Platform, 
        public statusBar: StatusBar, 
        public splashScreen: SplashScreen,
        private consolidadoProvider: ConsolidadoProvider) {
        
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Distríto 4430', component: HomePage },
            { title: 'Galeria RDRs', component: ListaRdrsPage },
            { title: 'Lema rotário', component: LemaRotarioPage },
            { title: 'Presidentes', component: ListaPresidentesPage },
            { title: 'Clubes', component: ClubesPage },
            { title: 'Equipe distrital', component: EquipeDistritalPage },
            { title: 'Agenda', component: AgendaPage },
            { title: 'Guia de cargos', component: ListaCargosPage },
            { title: 'Download', component: DownloadsPage },
            { title: 'F.A.Q.', component: FaqPage }
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });

        
        this.consolidadoProvider.atualizar().then(retorno => {
            retorno.subscribe(() => {
                console.log('fim');
            });
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
