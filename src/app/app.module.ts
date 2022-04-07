import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbCardModule, NbLayoutModule, NbTabsetModule, NbThemeModule } from '@nebular/theme';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { NebularCompComponent } from './nebular-comp/nebular-comp.component';
import { GlobalCompComponent } from './nebular-comp/global-comp/global-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    NebularCompComponent,
    GlobalCompComponent
  ],
  imports: [
    BrowserModule,
    NbLayoutModule,
    NbCardModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbEvaIconsModule,
    AppRoutingModule,
    NbTabsetModule,
    NbCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
