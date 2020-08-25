import {LanguageModel} from '../language-model';

export const langDa: LanguageModel = {
  product: 'Desktop V2', // safe
  company: 'Oceanworks', // safe
  desktop: {
    ribbon: {
      contacts: 'Kontakter',
      settings: 'Indstillinger',
      someLongerText: 'Noget længere tekst',
      catalogues: 'Kataloger',
      multiSelect: 'Multi Select',
    },
    menu: {
      menu1: 'Menu 1',
      menu2: 'Menu 2',
      menu3: 'Menu 3',
      menu4: 'Menu 4',
    },
    window: {
      close: 'Tæt',
      minimise: 'Minimer',
      maximise: 'Maksimer',
      centre: 'Centrum',
      restore: 'Gendan',
      loading: 'Indlæser',
      dockTop: 'Dock Top',
      dockRight: 'Dock Right',
      dockBottom: 'Dockbund',
      dockLeft: 'Dock til venstre',
      dockTopLeft: 'Dock øverst til venstre',
      dockTopRight: 'Dock øverst til højre',
      dockBottomLeft: 'Dock nederst til venstre',
      dockBottomRight: 'Dock nederst til højre',
      unDockWindow: 'Lås vinduet op',
      moveWindow: 'Flyt vindue',
      top: 'Top',
      width: 'Bredde',
      left: 'Venstre',
      height: 'Højde',
      login: 'Log på',
      newWindow: 'Nyt vindue',
      profile: 'Profil',
      setDockPosition: 'Indstil dockposition',
      unsaved: 'Ikke-gemt',
      placeInPanel: 'Placer i panelet',
      removeFromPanel: 'Fjern fra panelet',
      about: 'Om',
      demo: 'Demo',
      demo1: 'Demo One',
      demo2: 'Demo To',
      demo3: 'Demo tre',
      demo4: 'Demo Fire',
    },
    panel: {
      close: 'Tæt',
      dockTop: 'Dock Top',
      dockRight: 'Dock Right',
      dockBottom: 'Dockbund',
      dockLeft: 'Dock til venstre',
      dockTopLeft: 'Dock øverst til venstre',
      dockTopRight: 'Dock øverst til højre',
      dockBottomLeft: 'Dock nederst til venstre',
      dockBottomRight: 'Dock nederst til højre',
      unDockPanel: 'Fjern låsen',
      moveWindow: 'Flyt vindue',
      top: 'Top',
      width: 'Bredde',
      left: 'Venstre',
      height: 'Højde',
      setDockPosition: 'Indstil dockposition',
    },
    toast: {
      close: 'Tæt',
      dismiss: 'Afskedige',
      success: 'Succes',
      warning: 'Advarsel',
      information: 'Information',
      error: 'Fejl',
      loginSuccessful: 'Login Vellykket',
      logoutSuccessful: 'Log ud Vellykket',
      loginFailed: 'Login mislykkedes',
    },
    dialog: {
      ok: 'Okay',
      cancel: 'Afbestille',
      close: 'Tæt',
      yes: 'Ja',
      no: 'Ingen',
      agree: 'Enig',
      disagree: 'Være uenig',
      decline: 'Nedgang',
      closeWindow: 'Luk vinduet',
      youHaveUnsavedContentAreYouSureYouWantToCloseThisWindow: 'Du har ikke-gemt indhold. <br><br> Er du sikker på, at du vil lukke dette vindue?',
      newPanel: 'Nyt panel',
      pleaseSpecifyYourPanelName: 'Angiv venligst dit panelnavn',
      panelName: 'Panelnavn',
      left: 'Venstre',
      width: 'Bredde',
      createPanel: 'Opret panel',
      closePanel: 'Luk panel',
      doYouWantToCloseTheWindows: 'Vil du lukke vinduerne?',
      keepWindows: 'Hold Windows',
      closeWindows: 'Luk Windows',
    },
    tabBar : {
      autoHide: 'Auto skjul',
    },
    newWindow: 'Nyt vindue',
  },
  components: {
    languageSelector: {
      language: 'langDa',
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
      settings: 'Indstillinger',
      ribbonSize: 'Båndstørrelse',
      tabBarAutoHide: 'Fanebjælke automatisk skjul',
      small: 'Lille',
      large: 'Stor',
    },
    videoPlayer: {
      play: 'Spil',
      pause: 'Pause',
      volume: 'Bind',
      fullScreen: 'Skift til fuld skærm',
      exitFullScreen: 'Afslut fuld skærm',
      skipBack: 'Spring tilbage',
      skipForward: 'Spring fremad',
      mute: 'Stum',
      unMute: 'Un-Mute',
      pictureInPicture: 'Vis billede i billede',
      errorLoadingVideo: 'Fejl ved indlæsning af video',
      restart: 'Genstart video',
      settings: 'Indstillinger',
    }
  },
  system: {
    example: {
      test: 'Test af OK',
    },
    engine: {},
    userLogin: {
      username: 'Brugernavn',
      password: 'Adgangskode',
      login: 'Log på',
      pleaseWaitLoggingIn: 'Vent venligst...',
    },
    userMenu: {
      profile: 'Profil',
      logout: 'Log ud',
    },
    splash: {
      close: 'Tæt',
      autoCloseIn: 'Luk automatisk ind',
    },
    about: {
      close: 'Tæt',
    }
  }
};
