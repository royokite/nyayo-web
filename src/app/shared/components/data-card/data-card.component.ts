import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.scss']
})
export class DataCardComponent {
  @Input() title!: string;
  @Input() number!: number;
  @Input() backgroundImage!: string;
  @Input() showDropdown = false;

  selected = 'embu';
}
