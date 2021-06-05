import { SharedModule } from 'src/app/shared/shared.module';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { StorageService } from './services/storage.service';
import { ServicesModule } from 'src/app/services/services.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, SharedModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, HttpClientModule, StorageService, NativeStorage],
  bootstrap: [AppComponent],
})
export class AppModule {}
