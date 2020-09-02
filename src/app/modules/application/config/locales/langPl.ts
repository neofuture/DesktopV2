import {LanguageModel} from '../language-model';

export const langPl: LanguageModel = {
  product: 'Desktop V2', // safe
  company: 'Oceanworks', // safe
  desktop: {
    ribbon: {
      contacts: 'Łączność',
      settings: 'Ustawienia',
      someLongerText: 'Dłuższy tekst',
      catalogues: 'Katalogi',
      multiSelect: 'Wielokrotny wybór',
      ghost: 'Duch',
    },
    menu: {
      menu1: 'Menu 1',
      menu2: 'Menu 2',
      menu3: 'Menu 3',
      menu4: 'Menu 4',
    },
    window: {
      close: 'Blisko',
      minimise: 'Zminimalizować',
      maximise: 'Wyolbrzymiać',
      centre: 'Środek',
      restore: 'Przywracać',
      loading: 'Ładowanie',
      dockTop: 'Dock Top',
      dockRight: 'Zadokuj w prawo',
      dockBottom: 'Zadokuj na dole',
      dockLeft: 'Zadokuj w lewo',
      dockTopLeft: 'Dokuj u góry po lewej',
      dockTopRight: 'Zadokuj w prawym górnym rogu',
      dockBottomLeft: 'Zadokuj na dole po lewej',
      dockBottomRight: 'Zadokuj w prawym dolnym rogu',
      unDockWindow: 'Oddokuj okno',
      moveWindow: 'Przesuń okno',
      top: 'Top',
      width: 'Szerokość',
      left: 'Lewo',
      height: 'Wysokość',
      login: 'Zaloguj sie',
      newWindow: 'Nowe okno',
      profile: 'Profil',
      setDockPosition: 'Ustaw pozycję dokowania',
      unsaved: 'Niezapisany',
      placeInPanel: 'Umieść w panelu',
      removeFromPanel: 'Usuń z panelu',
      about: 'O',
      demo: 'Próbny',
      demo1: 'Demo One',
      demo2: 'Demo Two',
      demo3: 'Demo Three',
      demo4: 'Demo Four',
    },
    panel: {
      close: 'Blisko',
      dockTop: 'Dock Top',
      dockRight: 'Zadokuj w prawo',
      dockBottom: 'Zadokuj na dole',
      dockLeft: 'Zadokuj w lewo',
      dockTopLeft: 'Dokuj u góry po lewej',
      dockTopRight: 'Zadokuj w prawym górnym rogu',
      dockBottomLeft: 'Zadokuj na dole po lewej',
      dockBottomRight: 'Zadokuj w prawym dolnym rogu',
      unDockPanel: 'Oddokuj panel',
      moveWindow: 'Przesuń okno',
      top: 'Top',
      width: 'Szerokość',
      left: 'Lewo',
      height: 'Wysokość',
      setDockPosition: 'Ustaw pozycję dokowania',
      system: 'System',
    },
    toast: {
      close: 'Blisko',
      dismiss: 'Oddalić',
      success: 'Sukces',
      warning: 'Ostrzeżenie',
      information: 'Informacja',
      error: 'Błąd',
      loginSuccessful: 'Logowanie zakończone sukcesem',
      logoutSuccessful: 'Wylogowanie powiodło się',
      loginFailed: 'Logowanie nie powiodło się',
    },
    dialog: {
      ok: 'dobrze',
      cancel: 'Anuluj',
      close: 'Blisko',
      yes: 'tak',
      no: 'Nie',
      agree: 'Zgodzić się',
      disagree: 'Nie zgadzać się',
      decline: 'Upadek',
      closeWindow: 'Zamknij okno',
      youHaveUnsavedContentAreYouSureYouWantToCloseThisWindow: 'Masz niezapisane treści. <br><br> Czy na pewno chcesz zamknąć to okno?',
      newPanel: 'Nowy panel',
      pleaseSpecifyYourPanelName: 'Podaj nazwę panelu',
      panelName: 'Nazwa panelu',
      left: 'Lewo',
      width: 'Szerokość',
      createPanel: 'Utwórz panel',
      closePanel: 'Zamknij panel',
      doYouWantToCloseTheWindows: 'Chcesz zamknąć okna?',
      keepWindows: 'Zachowaj Windows',
      closeWindows: 'Zamknij Windows',
    },
    tabBar : {
      autoHide: 'Automatyczne chowanie',
    },
    newWindow: 'Nowe okno',
    loading: 'Ładowanie...',
  },
  components: {
    languageSelector: {
      language: 'langPl',
      languages: {
        langEn: 'English', // safe
        langFr: 'Français', // safe
        langDe: 'Deutsch', // safe
        langNo: 'Norsk', // safe
        langRu: 'Russkiy', // safe
        langNl: 'Nederlands', // safe
        langEs: 'Español', // safe
        langIt: 'Italiano', // safe
        langDa: 'Dansk', // safe
        langSv: 'Svenska', // safe
        langPt: 'Português', // safe
        langFi: 'Suomi', // safe
        langZh: '中文', // safe
        langPl: 'Polskie' // safe
      },
      flags: {
        langEn: 'united-kingdom.png', // safe
        langFr: 'france.png', // safe
        langDe: 'germany.png', // safe
        langNo: 'norway.png', // safe
        langRu: 'russia.png', // safe
        langNl: 'netherlands.png', // safe
        langEs: 'spain.png', // safe
        langIt: 'italy.png', // safe
        langDa: 'denmark.png', // safe
        langSv: 'sweden.png', // safe
        langPt: 'portugal.png', // safe
        langFi: 'finland.png', // safe
        langZh: 'china.png', // safe
        langPl: 'republic-of-poland.png' // safe
      }
    },
    settings: {
      settings: 'Ustawienia',
      ribbonSize: 'Rozmiar wstążki',
      tabBarAutoHide: 'Automatyczne ukrywanie paska kart',
      small: 'Mały',
      large: 'Duży',
    },
    videoPlayer: {
      play: 'Grać',
      pause: 'Pauza',
      volume: 'Tom',
      fullScreen: 'Przełącz na pełny ekran',
      exitFullScreen: 'Wyłączyć tryb pełnoekranowy',
      skipBack: 'Przejdź wstecz',
      skipForward: 'Przejdź do przodu',
      mute: 'Niemy',
      unMute: 'Wyłącz wyciszenie',
      pictureInPicture: 'Pokaż obraz w obrazie',
      errorLoadingVideo: 'Błąd podczas ładowania filmu',
      restart: 'Uruchom ponownie wideo',
      settings: 'Ustawienia',
    }
  },
  system: {
    example: {
      test: 'Testowanie OK',
    },
    engine: {},
    userLogin: {
      username: 'Nazwa Użytkownika',
      password: 'Hasło',
      login: 'Zaloguj sie',
      pleaseWaitLoggingIn: 'Proszę czekać...',
    },
    userMenu: {
      profile: 'Profil',
      logout: 'Wyloguj',
    },
    splash: {
      close: 'Blisko',
      autoCloseIn: 'Automatyczne zamykanie',
    },
    about: {
      close: 'Blisko',
    }
  }
};
