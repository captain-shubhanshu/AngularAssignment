import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { HighlighterDirective } from './highlighter.directive';

@NgModule({
  declarations: [UsersComponent, HighlighterDirective],
  imports: [CommonModule],
  exports: [UsersComponent],
})
export class UsersModule {}
