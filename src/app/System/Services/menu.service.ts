import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  getSideMenu(): MenuItem[] {
    return [
      {
        label: 'Workflow',
        icon: 'pi pi-pw pi-file',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
        },
        {
          label: 'Edit',
          icon: 'pi pi-fw pi-external-link',
          routerLink: "Capture"
        }
        ]
      },
      {
        label: 'Security',
        icon: 'pi pi-pw pi-lock',
        items: [
          {
            label: 'Users',
            icon: 'pi pi-pw pi-user',
            routerLink: "UserList"
          },
          {
            label: 'Groups',
            icon: 'pi pi-pw pi-users',
            routerLink:'AddGroup'
          },
          {
            label: 'Permissions',
            icon: 'pi pi-pw pi-key'
          }
        ]
      },
      {
        label: 'Setup',
        icon: 'pi pi-pw pi-sliders-h',
        items: [
          {
            label: 'Database',
            icon: 'pi pi-pw pi-cloud'
          },
          {
            label: 'Calender',
            icon: 'pi pi-pw pi-calendar'
          },
          {
            label: 'Tools',
            icon: 'pi pi-pw pi-palette'
          },
          {
            label: 'Sysytem',
            icon: 'pi pi-pw pi-desktop',
            items: [
              {
                label: 'Constants',
                icon: 'pi pi-pw pi-list'
              }
            ]
          }
        ]
      }
    ]
  }
}
