import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [HeaderComponent, NotFoundComponent],
  declarations: [HeaderComponent, NotFoundComponent]
})
export class UiModule {}
