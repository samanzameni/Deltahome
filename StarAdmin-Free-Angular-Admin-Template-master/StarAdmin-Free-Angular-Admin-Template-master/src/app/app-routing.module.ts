import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabsComponent } from './tabs/tabs.component';
import {ZameniformComponent} from './zameniform/zameniform.component';
import {LoginComponent} from './login/login.component';
import {IndexComponent} from './index/index.component';
import {PropertyListComponent} from './property-list/property-list.component';
import {ImageuploadComponent} from './imageupload/imageupload.component';
import {BaseInfoComponent} from './base-info/base-info.component';
import {LeafletComponent} from './leaflet/leaflet.component';
import {PhotosLocationComponent} from './photos-location/photos-location.component';
import {SetDepositComponent} from './set-deposit/set-deposit.component';
import {ReviewComponent} from './review/review.component';

const routes: Routes = [
  { path: '', redirectTo: '/Index', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'buttons', component: ButtonsComponent},
  { path: 'tables', component: TablesComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'accordions', component: AccordionsComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'progressbar', component: ProgressbarComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'dropdowns', component: DropdownComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'AddProperty', component: ZameniformComponent},
  { path: 'Login', component: LoginComponent},
  { path: 'Index', component: IndexComponent},
  { path: 'PropertyList', component: PropertyListComponent},
  { path: 'ImageUpload', component: ImageuploadComponent},
  { path: 'BaseInfo', component: BaseInfoComponent},
  { path: 'leaflet', component: LeafletComponent},
  { path: 'Photos&Location', component: PhotosLocationComponent},
  { path: 'SetDeposit', component: SetDepositComponent},
  { path: 'Review', component: ReviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
