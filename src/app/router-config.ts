import { CaptureChequeComponent } from './capture-cheque/capture-cheque.component';
import { Route } from '@angular/router';
import { AuthorizeChequeComponent } from './authorize-cheque/authorize-cheque.component';
import { ExportChequeComponent } from './export-cheque/export-cheque.component';

const indexRoute:Route = {
    path: "",
    component: CaptureChequeComponent
};

const fallbackRoute:Route = {
    path: '**',
    component: CaptureChequeComponent
};
export const routeConfig = [
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