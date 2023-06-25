import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() profileImage: any;
  @Input() staffName!: string;
  @Input() staffRoles!: string[];
  @Input() staffID!: number;
  @Input() staffEmail!: string;
  @Input() vehicleRegNo?: string;
  @Input() is_active!: boolean;
}
