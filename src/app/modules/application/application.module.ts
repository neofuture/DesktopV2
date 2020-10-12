import {NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {DesktopComponent} from './components/ui/desktop/desktop.component';
import {LoaderComponent} from './components/ui/loader/loader.component';
import {TooltipDirective} from './directives/tooltip.directive';
import {AutoFocusDirective} from './directives/auto-focus.directive';
import {LanguageSelectorComponent} from './components/core/language-selector/language-selector.component';
import {RibbonSeparatorComponent} from './components/ui/desktop/titlebar/ribbon/ribbon-separator/ribbon-separator.component';
import {TabComponent} from './components/ui/desktop/tabbar/tab/tab.component';
import {RibbonButtonComponent} from './components/ui/desktop/titlebar/ribbon/ribbon-button/ribbon-button.component';
import {TabbarComponent} from './components/ui/desktop/tabbar/tabbar.component';
import {WindowComponent} from './components/ui/desktop/window/window.component';
import {RibbonComponent} from './components/ui/desktop/titlebar/ribbon/ribbon.component';
import {TitlebarComponent} from './components/ui/desktop/titlebar/titlebar.component';
import {MenuComponent} from './components/ui/desktop/titlebar/menu/menu.component';
import {FormsModule} from '@angular/forms';
import {ApplicationComponent} from './application.component';
import {ApplicationRoutingModule} from './application-routing.module';
import {VersionComponent} from './components/core/version/version.component';
import {UserMenuComponent} from './components/system/user/user-menu/user-menu.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ToastComponent} from './components/ui/desktop/toast/toast.component';
import {TokenInterceptor} from './interceptors/token.interceptor';
import {DialogComponent} from './components/ui/desktop/dialog/dialog.component';
import {SearchBoxComponent} from './components/system/search/search-box/search-box.component';
import {ExternalComponent} from './components/core/external/external.component';
import {PanelComponent} from './components/ui/desktop/panel/panel.component';
import {SettingsComponent} from './components/core/settings/settings.component';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {DoublePanelComponent} from './components/ui/double-panel/double-panel.component';
import {LocaleReplacePipe} from './pipes/locale-replace.pipe';
import { LocalePipe } from './pipes/locale.pipe';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';
import localeDa from '@angular/common/locales/da';
import localeEs from '@angular/common/locales/es';
import localeFi from '@angular/common/locales/fi';
import localeIt from '@angular/common/locales/it';
import localeNl from '@angular/common/locales/nl';
import localeNo from '@angular/common/locales/nb';
import localePt from '@angular/common/locales/pt';
import localeSe from '@angular/common/locales/se';
import localeRu from '@angular/common/locales/ru';
import { DatePipe } from '@angular/common';

registerLocaleData(localeFr, 'fr');
registerLocaleData(localeDe, 'de');
registerLocaleData(localeDa, 'da');
registerLocaleData(localeEs, 'es');
registerLocaleData(localeFi, 'fi');
registerLocaleData(localeIt, 'it');
registerLocaleData(localeNl, 'nl');
registerLocaleData(localeNo, 'no');
registerLocaleData(localePt, 'pt');
registerLocaleData(localeSe, 'se');
registerLocaleData(localeRu, 'ru');
@NgModule({
  declarations: [
    DesktopComponent,
    TitlebarComponent,
    MenuComponent,
    RibbonComponent,
    WindowComponent,
    TabbarComponent,
    RibbonButtonComponent,
    TabComponent,
    RibbonSeparatorComponent,
    LanguageSelectorComponent,
    TooltipDirective,
    LoaderComponent,
    ApplicationComponent,
    VersionComponent,
    UserMenuComponent,
    ToastComponent,
    DialogComponent,
    AutoFocusDirective,
    SearchBoxComponent,
    ExternalComponent,
    PanelComponent,
    SettingsComponent,
    DoublePanelComponent,
    LocaleReplacePipe,
    LocalePipe
  ],
    exports: [
        ApplicationComponent,
        LoaderComponent,
        VersionComponent,
        LanguageSelectorComponent,
        TooltipDirective,
        RibbonComponent,
        DoublePanelComponent,
        LocaleReplacePipe,
        LocalePipe
    ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    FormsModule,
    HttpClientModule,
    ScrollToModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    DatePipe
  ]
})
// @ts-ignore
export class ApplicationModule {
}
