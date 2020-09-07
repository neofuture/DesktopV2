import {LanguageModel} from '../language-model';

export const langIt: LanguageModel = {
  product: 'Desktop V2', // safe
  company: 'Oceanworks', // safe
  desktop: {
    ribbon: {
      contacts: 'Contatti',
      settings: 'impostazioni',
      someLongerText: 'Qualche testo più lungo',
      catalogues: 'Cataloghi',
      multiSelect: 'Selezione multipla',
      ghost: 'Fantasma',
      planMode1: 'Modalità piano 1',
      planMode2: 'Modalità piano 2',
      planMode3: 'Modalità piano 3',
      planMode4: 'Modalità piano 4',
    },
    menu: {
      menu1: 'Menu 1',
      menu2: 'Menu 2',
      menu3: 'Menu 3',
      menu4: 'Menu 4',
    },
    window: {
      close: 'Vicino',
      minimise: 'Minimizzare',
      maximise: 'aumentare al massimo',
      centre: 'Centro',
      restore: 'Ristabilire',
      loading: 'Caricamento in corso',
      dockTop: 'Dock Top',
      dockRight: 'Dock a destra',
      dockBottom: 'Bacino inferiore',
      dockLeft: 'Dock a sinistra',
      dockTopLeft: 'Dock in alto a sinistra',
      dockTopRight: 'Dock in alto a destra',
      dockBottomLeft: 'Dock in basso a sinistra',
      dockBottomRight: 'Dock in basso a destra',
      unDockWindow: 'Finestra di sblocco',
      moveWindow: 'Sposta finestra',
      top: 'Superiore',
      width: 'Larghezza',
      left: 'Sinistra',
      height: 'Altezza',
      login: 'Accesso',
      newWindow: 'Nuova finestra',
      profile: 'Profilo',
      setDockPosition: 'Imposta posizione dock',
      unsaved: 'Non salvato',
      placeInPanel: 'Posiziona nel pannello',
      removeFromPanel: 'Rimuovi dal pannello',
      about: 'Di',
      demo: 'dimostrazione',
      demo1: 'Demo One',
      demo2: 'Demo Two',
      demo3: 'Demo Tre',
      demo4: 'Demo Four',
    },
    panel: {
      close: 'Vicino',
      dockTop: 'Dock Top',
      dockRight: 'Dock a destra',
      dockBottom: 'Bacino inferiore',
      dockLeft: 'Dock a sinistra',
      dockTopLeft: 'Dock in alto a sinistra',
      dockTopRight: 'Dock in alto a destra',
      dockBottomLeft: 'Dock in basso a sinistra',
      dockBottomRight: 'Dock in basso a destra',
      unDockPanel: 'Disancora pannello',
      moveWindow: 'Sposta finestra',
      top: 'Superiore',
      width: 'Larghezza',
      left: 'Sinistra',
      height: 'Altezza',
      setDockPosition: 'Imposta posizione dock',
      system: 'Sistema',
    },
    toast: {
      close: 'Vicino',
      dismiss: 'Respingere',
      success: 'Successo',
      warning: 'avvertimento',
      information: 'Informazione',
      error: 'Errore',
      loginSuccessful: 'Accesso riuscito',
      logoutSuccessful: 'Logout riuscito',
      loginFailed: 'Accesso fallito',
    },
    dialog: {
      ok: 'ok',
      cancel: 'Annulla',
      close: 'Vicino',
      yes: 'sì',
      no: 'No',
      agree: 'Essere d&#39;accordo',
      disagree: 'Disaccordo',
      decline: 'Declino',
      closeWindow: 'Chiudi la finestra',
      youHaveUnsavedContentAreYouSureYouWantToCloseThisWindow: 'Hai contenuti non salvati. <br><br> Sei sicuro di voler chiudere questa finestra?',
      newPanel: 'Nuovo pannello',
      pleaseSpecifyYourPanelName: 'Si prega di specificare il nome del pannello',
      panelName: 'Nome pannello',
      left: 'Sinistra',
      width: 'Larghezza',
      createPanel: 'Crea pannello',
      closePanel: 'Chiudi il pannello',
      doYouWantToCloseTheWindows: 'Vuoi chiudere le finestre?',
      keepWindows: 'Mantieni Windows',
      closeWindows: 'Chiudi Windows',
    },
    tabBar : {
      autoHide: 'Nascondi automaticamente',
    },
    newWindow: 'Nuova finestra',
    loading: 'Caricamento in corso...',
  },
  components: {
    languageSelector: {
      language: 'langIt',
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
      settings: 'impostazioni',
      ribbonSize: 'Dimensioni del nastro',
      tabBarAutoHide: 'Nascondi automaticamente la barra delle schede',
      small: 'Piccolo',
      large: 'Grande',
    },
    videoPlayer: {
      play: 'Giocare',
      pause: 'Pausa',
      volume: 'Volume',
      fullScreen: 'Passa a schermo intero',
      exitFullScreen: 'Esci dalla modalità schermo intero',
      skipBack: 'Salta indietro',
      skipForward: 'Salta avanti',
      mute: 'muto',
      unMute: 'Un-Mute',
      pictureInPicture: 'Mostra Picture in Picture',
      errorLoadingVideo: 'Errore durante il caricamento del video',
      restart: 'Riavvia il video',
      settings: 'impostazioni',
    }
  },
  system: {
    example: {
      test: 'Test OK',
    },
    engine: {},
    userLogin: {
      username: 'Nome utente',
      password: 'Parola d&#39;ordine',
      login: 'Accesso',
      pleaseWaitLoggingIn: 'Attendere prego...',
    },
    userMenu: {
      profile: 'Profilo',
      logout: 'Disconnettersi',
    },
    splash: {
      close: 'Vicino',
      autoCloseIn: 'Chiusura automatica',
    },
    about: {
      close: 'Vicino',
    }
  }
};
