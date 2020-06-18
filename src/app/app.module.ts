import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgxUiLoaderModule, NgxUiLoaderConfig} from 'ngx-ui-loader';

import { AppComponent } from './app.component';
import { EventEmitterService } from 'src/providers/event-emitter.service';
import { GlobalVars } from 'src/providers/globalVars';
import { DialogLegendComponent } from './dialog-legend/dialog-legend.component';
import { AngularMaterialModule } from './angular-material.module';
import { DialogDetailsComponent } from './dialog-details/dialog-details.component';
import { DialogLayerPreviewComponent } from './dialog-layer-preview/dialog-layer-preview.component';
import { KOService } from 'src/providers/ko.service';
import { KategorijaService } from 'src/providers/kategorija.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { MapaComponent } from './mapa/mapa.component';
import { TackeService } from 'src/providers/tacke.service';
import { PoligoniService } from 'src/providers/poligoni.service';
import { LinijeService } from 'src/providers/linije.service';
import { MLinijeService } from 'src/providers/mlinije.service';
import { DialogService } from 'src/providers/dialog.service';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'green',
  bgsOpacity: 0.5,
  bgsPosition: 'bottom-right',
  bgsSize: 60,
  bgsType: 'ball-spin',
  blur: 5,
  delay: 0.2,
  fgsColor: '#17a11e',
  fgsPosition: 'center-center',
  fgsSize: 60,
  fgsType: 'folding-cube',
  gap: 24,
  logoPosition: 'center-center',
  logoSize: 120,
  // "logoUrl": "assets/imgs/logo.png",
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(40, 40, 40, 0.8)',
  pbColor: 'green',
  pbDirection: 'ltr',
  pbThickness: 3,
  hasProgressBar: true,
  text: 'Molimo sačekajte...',
  textColor: '#FFFFFF',
  textPosition: 'center-center',
  maxTime: 8000,
  minTime: 0
};


@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    DialogLegendComponent,
    DialogDetailsComponent,
    DialogLayerPreviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    AngularMaterialModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AngularMaterialModule,
    ColorPickerModule,
  ],
  entryComponents: [DialogLegendComponent, DialogDetailsComponent, DialogLayerPreviewComponent],
  providers: [
    EventEmitterService,
    GlobalVars,
    KOService,
    KategorijaService,
    GlobalVars,
    TackeService,
    PoligoniService,
    LinijeService,
    MLinijeService,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
