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

  sidenavContent = Array.from(
    { length: 10 },
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

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
        name: 'Reports', route: '', icon: 'bar_chart', dropdown: true, children: [
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
