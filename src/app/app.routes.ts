import { Routes } from '@angular/router';
import { HomeLayout } from './layouts/home-layout/home-layout'
import { Homepage } from './features/home/pages/homepage/homepage'


export const routes: Routes = [
    {
        path: '',
        component: HomeLayout,
        children: [
            { path: '', component: Homepage }
        ]
    }
];
