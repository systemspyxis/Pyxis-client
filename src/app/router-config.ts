import { CaptureChequeComponent } from './capture-cheque/capture-cheque.component';
import { Route } from '@angular/router';
import { AuthorizeChequeComponent } from './authorize-cheque/authorize-cheque.component';
import { ExportChequeComponent } from './export-cheque/export-cheque.component';
import { AdminComponentComponent } from './Admin/admin-component/admin-component.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { NewUserComponent } from './authentication/components/user/new-user.component';
import { HomeComponent } from './Home/home/home.component';
import { NewGroupComponent } from './authentication/components/groups/new-group.component';
import { UserListComponent } from './authentication/components/user/user-list/user-list.component';

const indexRoute:Route = {
    path: "",
    component: HomeComponent
};

const fallbackRoute:Route = {
    path: '**',
    component: HomeComponent
};
export const routeConfig = [
    {
        path: 'AddGroup',
        component: NewGroupComponent
    },
    {
        path: 'AddUser',
        component: NewUserComponent,
    },
    {
        path: 'User',
        component: NewUserComponent,
        outlet:'adduser'
    },
    {
        path: 'UserList',
        component: UserListComponent
    },
    {
        path: 'Login',
        component: LoginComponent
    },
    {
        path: 'Admin',
        component: AdminComponentComponent
    },
    {
        path: 'Capture',
        component: CaptureChequeComponent
    },
    {
        path: 'Authorize',
        component: AuthorizeChequeComponent
    },
    {
        path: 'Export',
        component: ExportChequeComponent
    },
    fallbackRoute,
    indexRoute
];