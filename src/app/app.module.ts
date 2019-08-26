import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from './login/login.component';


import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptBottomNavigationBarModule} from "nativescript-bottom-navigation/angular";
import { TabViewComponent } from './tab-view/tab-view.component';

@NgModule({
   bootstrap: [
      AppComponent
   ],
   imports: [
      AppRoutingModule,
      NativeScriptModule,
      NativeScriptUISideDrawerModule,
      NativeScriptFormsModule,
      NativeScriptHttpClientModule,
      NativeScriptBottomNavigationBarModule
   ],
   declarations: [
      AppComponent,
      LoginComponent,
      TabViewComponent
   ],
   schemas: [
      NO_ERRORS_SCHEMA
   ]
})
export class AppModule { }
