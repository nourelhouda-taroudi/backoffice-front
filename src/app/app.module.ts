import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DefaultLayoutComponent } from './views/containers';
import { SpinnerComponent } from './views/global/spinner/spinner.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];
@NgModule({
  declarations: [
    AppComponent,
    APP_CONTAINERS,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
