import { Routes } from '@angular/router';
import { WritableSignalsComponent } from './signals/writable-signals/writable-signals.component';

export const routes: Routes = [
    {
        path: '',
        component: WritableSignalsComponent
    },
    {
        path: 'writable-signals',
        component: WritableSignalsComponent,
        title: 'Writable Signals'
    },
    {
        path: '**',
        redirectTo: 'writable-signals'
    }
];
