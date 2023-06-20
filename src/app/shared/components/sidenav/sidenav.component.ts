import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  opened: boolean = true;
  sideNavList: any[] = [];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);

    this.sideNavList = [
      { name: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
      {
        name: 'Collections', route: '/collections', icon: 'shopping_basket', dropdown: true, children: [
          { name: 'Supervisor', route: '', icon: 'info' },
          { name: 'Driver', route: '', icon: 'info' },
          { name: 'Factory', route: '', icon: 'info' },
          { name: 'Tally', route: '', icon: 'info' }
        ]
      },
      { name: 'Payments', route: '/payments', icon: 'payment' },
      {
        name: 'Reports', route: '/reports', icon: 'bar_chart', dropdown: true, children: [
          { name: 'Area', route: '', icon: '' },
          { name: 'Personnel', route: '', icon: '' },
          { name: 'Payments', route: '', icon: '' }
        ]
      },
      {
        name: 'Users', route: '/users', icon: 'supervisor_account', dropdown: true, children: [
          { name: 'Casuals', route: '', icon: '' },
          { name: 'Staff', route: '', icon: '' }
        ]
      },
      { name: 'System Settings', route: '/settings', icon: 'settings' },
    ]
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
