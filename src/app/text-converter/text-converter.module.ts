import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextConverterRoutingModule } from './text-converter-routing.module';
import { ConverterMainComponent } from './components/converter-main/converter-main.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ConverterMainComponent],
  imports: [
    CommonModule,
    TextConverterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class TextConverterModule { }
