import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from '../views/user/user.component';
import { UserCreateComponent } from '../views/user/create/create.component';
import { UserUpdateComponent } from '../views/user/update/update.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AvailableCaseComponent } from './views/available-case/available-case.component';
import { MyCaseComponent } from './views/my-case/my-case.component';
import { AvailableCaseDetailComponent } from './views/available-case-detail/available-case-detail.component';
import { MyCaseDetailComponent } from './views/my-case-detail/my-case-detail.component';
import { CommunicationComponent } from './views/communication/communication.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'available-case', component: AvailableCaseComponent },
    { path: 'my-case', component: MyCaseComponent },
    { path: 'available-case-detail', component: AvailableCaseDetailComponent },
    { path: 'my-case-detail', component: MyCaseDetailComponent },
    { path: 'communication', component: CommunicationComponent },
    { path: 'user', component: UserComponent },
    { path: 'user/add', component: UserCreateComponent },
    { path: 'user/update/:id', component: UserUpdateComponent },
    { path: '**', redirectTo: '/dashboard' }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

