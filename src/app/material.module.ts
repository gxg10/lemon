import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatFormFieldModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
