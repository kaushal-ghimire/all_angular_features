import { Routes } from '@angular/router';
import { WritableSignalsComponent } from './signals/writable-signals/writable-signals.component';
import { ComputedSignalsComponent } from './signals/computed-signals/computed-signals.component';

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
        path: 'computed-signals',
        component: ComputedSignalsComponent,
        title: 'Computed Signals'
    },
    {
        path: '**',
        redirectTo: 'writable-signals'
    }
];
