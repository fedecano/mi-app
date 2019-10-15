import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { MiappSharedModule } from 'app/shared/shared.module';
import { MiappCoreModule } from 'app/core/core.module';
import { MiappAppRoutingModule } from './app-routing.module';
import { MiappHomeModule } from './home/home.module';
import { MiappEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    MiappSharedModule,
    MiappCoreModule,
    MiappHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    MiappEntityModule,
    MiappAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class MiappAppModule {}
