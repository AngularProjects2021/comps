import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModsHomeComponent } from './mods-home/mods-home.component';
import { ModalComponent } from './modal/modal.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { AccordionComponent } from './accordion/accordion.component';


@NgModule({
  declarations: [ModsHomeComponent, ModalComponent, AccordionComponent],
  imports: [
    CommonModule,
    NgbPaginationModule,
    NgbAlertModule,
    SharedModule,
    ModsRoutingModule
  ],
  exports:[ModsHomeComponent]
})
export class ModsModule { }
