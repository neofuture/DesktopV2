import {LanguageModel} from '../language-model';

export const langNl: LanguageModel = {
  product: 'Desktop V2', // safe
  company: 'Oceanworks', // safe
  desktop: {
    ribbon: {
      contacts: 'Contacten',
      settings: 'Instellingen',
      someLongerText: 'Wat langere tekst',
      catalogues: 'Catalogi',
      multiSelect: 'Multi-Select',
      ghost: 'Geest',
    },
    menu: {
      menu1: 'Menu 1',
      menu2: 'Menu 2',
      menu3: 'Menu 3',
      menu4: 'Menu 4',
    },
    window: {
      close: 'Dichtbij',
      minimise: 'Minimaliseren',
      maximise: 'Maximaliseren',
      centre: 'centrum',
      restore: 'Herstellen',
      loading: 'Bezig met laden',
      dockTop: 'Dock Top',
      dockRight: 'Dock rechts',
      dockBottom: 'Dock Bottom',
      dockLeft: 'Dock links',
      dockTopLeft: 'Dock linksboven',
      dockTopRight: 'Dock rechtsboven',
      dockBottomLeft: 'Dock Linksonder',
      dockBottomRight: 'Dock rechtsonder',
      unDockWindow: 'Venster losmaken',
      moveWindow: 'Venster verplaatsen',
      top: 'Top',
      width: 'Breedte',
      left: 'Links',
      height: 'Hoogte',
      login: 'Log in',
      newWindow: 'Nieuw raam',
      profile: 'Profiel',
      setDockPosition: 'Dockpositie instellen',
      unsaved: 'Niet opgeslagen',
      placeInPanel: 'Plaats in paneel',
      removeFromPanel: 'Verwijderen uit paneel',
      about: 'Over',
      demo: 'Demo',
      demo1: 'Demo een',
      demo2: 'Demo twee',
      demo3: 'Demo drie',
      demo4: 'Demo vier',
    },
    panel: {
      close: 'Dichtbij',
      dockTop: 'Dock Top',
      dockRight: 'Dock rechts',
      dockBottom: 'Dock Bottom',
      dockLeft: 'Dock links',
      dockTopLeft: 'Dock linksboven',
      dockTopRight: 'Dock rechtsboven',
      dockBottomLeft: 'Dock Linksonder',
      dockBottomRight: 'Dock rechtsonder',
      unDockPanel: 'Ontkoppel het paneel',
      moveWindow: 'Venster verplaatsen',
      top: 'Top',
      width: 'Breedte',
      left: 'Links',
      height: 'Hoogte',
      setDockPosition: 'Dockpositie instellen',
      system: 'Systeem',
    },
    toast: {
      close: 'Dichtbij',
      dismiss: 'Afwijzen',
      success: 'Succes',
      warning: 'Waarschuwing',
      information: 'Informatie',
      error: 'Fout',
      loginSuccessful: 'Succesvol ingelogd',
      logoutSuccessful: 'Afmelden succesvol',
      loginFailed: 'Aanmelden mislukt',
    },
    dialog: {
      ok: 'OK',
      cancel: 'Annuleer',
      close: 'Dichtbij',
      yes: 'Ja',
      no: 'Nee',
      agree: 'Mee eens',
      disagree: 'Het oneens zijn',
      decline: 'Afwijzen',
      closeWindow: 'Venster sluiten',
      youHaveUnsavedContentAreYouSureYouWantToCloseThisWindow: 'Je hebt niet-opgeslagen inhoud. <br><br> Weet u zeker dat u dit venster wilt sluiten?',
      newPanel: 'Nieuw paneel',
      pleaseSpecifyYourPanelName: 'Geef uw paneelnaam op',
      panelName: 'Paneelnaam',
      left: 'Links',
      width: 'Breedte',
      createPanel: 'Paneel maken',
      closePanel: 'Sluit paneel',
      doYouWantToCloseTheWindows: 'Wilt u de ramen sluiten?',
      keepWindows: 'Windows behouden',
      closeWindows: 'Sluit Windows',
    },
    tabBar : {
      autoHide: 'Automatisch verbergen',
    },
    newWindow: 'Nieuw raam',
    loading: 'Bezig met laden...',
  },
  components: {
    languageSelector: {
      language: 'langNl',
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
      settings: 'Instellingen',
      ribbonSize: 'Lint maat',
      tabBarAutoHide: 'Tabbalk automatisch verbergen',
      small: 'Klein',
      large: 'Groot',
    },
    videoPlayer: {
      play: 'Speel',
      pause: 'Pauze',
      volume: 'Volume',
      fullScreen: 'Overschakelen naar volledig scherm',
      exitFullScreen: 'Verlaat volledig scherm',
      skipBack: 'Terug springen',
      skipForward: 'Spring vooruit',
      mute: 'Dempen',
      unMute: 'Dempen opheffen',
      pictureInPicture: 'Toon afbeelding in afbeelding',
      errorLoadingVideo: 'Fout bij het laden van video',
      restart: 'Start Video opnieuw',
      settings: 'Instellingen',
    }
  },
  system: {
    example: {
      test: 'OK testen',
    },
    engine: {},
    userLogin: {
      username: 'Gebruikersnaam',
      password: 'Wachtwoord',
      login: 'Log in',
      pleaseWaitLoggingIn: 'Wacht alsjeblieft...',
    },
    userMenu: {
      profile: 'Profiel',
      logout: 'Uitloggen',
    },
    splash: {
      close: 'Dichtbij',
      autoCloseIn: 'Auto sluiten in',
    },
    about: {
      close: 'Dichtbij',
    }
  }
};
