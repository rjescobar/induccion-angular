import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent]
})
export class UiModule {}
