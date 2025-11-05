import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from '@nativescript/ui-sidedrawer';
import { filter } from 'rxjs/operators';
import * as app from '@nativescript/core/application';
import { RadSideDrawerComponent } from '@nativescript/ui-sidedrawer/angular';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(RadSideDrawerComponent, { static: false }) 
  public drawerComponent!: RadSideDrawerComponent;

  private _sideDrawerTransition!: DrawerTransitionBase;

  constructor(
    private router: Router,
    private routerExtensions: RouterExtensions,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    // Empty constructor
  }

  ngOnInit(): void {
    this._sideDrawerTransition = new SlideInOnTopTransition();
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => this.changeDetectorRef.detectChanges());
  }

  ngAfterViewInit(): void {
    this.drawerComponent.sideDrawer.drawerTransition = this._sideDrawerTransition;
  }

  get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTransition;
  }

  isPageSelected(pageTitle: string): boolean {
    return this.router.url.indexOf(pageTitle) > -1;
  }

  onNavBtnTap(): void {
    this.drawerComponent.sideDrawer.showDrawer();
  }

  onNavItemTap(navItemRoute: string): void {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: 'fade'
      }
    });

    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.closeDrawer();
  }
}