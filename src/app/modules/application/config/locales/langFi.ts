import {LanguageModel} from '../language-model';

export const langFi: LanguageModel = {
  product: 'Desktop V2', // safe
  company: 'Oceanworks', // safe
  desktop: {
    ribbon: {
      contacts: 'Yhteydet',
      settings: 'asetukset',
      someLongerText: 'Jotakin pidempää tekstiä',
      catalogues: 'luettelot',
      multiSelect: 'Monivalinta',
      ghost: 'Aave',
    },
    menu: {
      menu1: 'Valikko 1',
      menu2: 'Valikko 2',
      menu3: 'Valikko 3',
      menu4: 'Valikko 4',
    },
    window: {
      close: 'kiinni',
      minimise: 'Minimoida',
      maximise: 'Maksimoida',
      centre: 'Keskusta',
      restore: 'Palauttaa',
      loading: 'Ladataan',
      dockTop: 'Telakan yläosa',
      dockRight: 'Telakka oikealle',
      dockBottom: 'Telakointi pohjaan',
      dockLeft: 'Telakka vasen',
      dockTopLeft: 'Telakan yläosa vasemmalle',
      dockTopRight: 'Telakka ylhäällä oikealla',
      dockBottomLeft: 'Telakointi alhaalta vasen',
      dockBottomRight: 'Telakointi alhaalta oikealle',
      unDockWindow: 'Poista ikkuna',
      moveWindow: 'Siirrä ikkuna',
      top: 'ylin',
      width: 'Leveys',
      left: 'Vasen',
      height: 'Korkeus',
      login: 'Kirjaudu sisään',
      newWindow: 'Uusi ikkuna',
      profile: 'Profiili',
      setDockPosition: 'Aseta telakan sijainti',
      unsaved: 'Tallentamaton',
      placeInPanel: 'Aseta paneeliin',
      removeFromPanel: 'Poista paneelista',
      about: 'Noin',
      demo: 'esittely',
      demo1: 'Esittely',
      demo2: 'Esittely Kaksi',
      demo3: 'Esittelykolmi',
      demo4: 'Demo Neljä',
    },
    panel: {
      close: 'kiinni',
      dockTop: 'Telakan yläosa',
      dockRight: 'Telakka oikealle',
      dockBottom: 'Telakointi pohjaan',
      dockLeft: 'Telakka vasen',
      dockTopLeft: 'Telakan yläosa vasemmalle',
      dockTopRight: 'Telakka ylhäällä oikealla',
      dockBottomLeft: 'Telakointi alhaalta vasen',
      dockBottomRight: 'Telakointi alhaalta oikealle',
      unDockPanel: 'Poista paneeli',
      moveWindow: 'Siirrä ikkuna',
      top: 'ylin',
      width: 'Leveys',
      left: 'Vasen',
      height: 'Korkeus',
      setDockPosition: 'Aseta telakan sijainti',
      system: 'Järjestelmä',
    },
    toast: {
      close: 'kiinni',
      dismiss: 'erottaa',
      success: 'Menestys',
      warning: 'Varoitus',
      information: 'Tiedot',
      error: 'Virhe',
      loginSuccessful: 'Kirjautuminen onnistui',
      logoutSuccessful: 'Uloskirjautuminen onnistui',
      loginFailed: 'Kirjautuminen epäonnistui',
    },
    dialog: {
      ok: 'kunnossa',
      cancel: 'Peruuttaa',
      close: 'kiinni',
      yes: 'Joo',
      no: 'Ei',
      agree: 'Olla samaa mieltä',
      disagree: 'olla eri mieltä',
      decline: 'aleneminen',
      closeWindow: 'Sulje ikkuna',
      youHaveUnsavedContentAreYouSureYouWantToCloseThisWindow: 'Sinulla on tallentamatonta sisältöä. <br><br> Haluatko varmasti sulkea tämän ikkunan?',
      newPanel: 'Uusi paneeli',
      pleaseSpecifyYourPanelName: 'Määritä paneelisi nimi',
      panelName: 'Paneelin nimi',
      left: 'Vasen',
      width: 'Leveys',
      createPanel: 'Luo paneeli',
      closePanel: 'Sulje paneeli',
      doYouWantToCloseTheWindows: 'Haluatko sulkea ikkunat?',
      keepWindows: 'Pidä Windows',
      closeWindows: 'Sulje Windows',
    },
    tabBar : {
      autoHide: 'Automaattinen piilotus',
    },
    newWindow: 'Uusi ikkuna',
  },
  components: {
    languageSelector: {
      language: 'langFi',
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
      settings: 'asetukset',
      ribbonSize: 'Nauhan koko',
      tabBarAutoHide: 'Välilehtipalkin automaattinen piilotus',
      small: 'Pieni',
      large: 'Suuri',
    },
    videoPlayer: {
      play: 'pelata',
      pause: 'Tauko',
      volume: 'tilavuus',
      fullScreen: 'Vaihda koko näytölle',
      exitFullScreen: 'Poistu koko näytöstä',
      skipBack: 'Hyppää takaisin',
      skipForward: 'Ohita eteenpäin',
      mute: 'mykkä',
      unMute: 'Mykistyksen',
      pictureInPicture: 'Näytä kuva kuvassa',
      errorLoadingVideo: 'Virhe videon lataamisessa',
      restart: 'Käynnistä video uudelleen',
      settings: 'asetukset',
    }
  },
  system: {
    example: {
      test: 'Testaus OK',
    },
    engine: {},
    userLogin: {
      username: 'Käyttäjätunnus',
      password: 'Salasana',
      login: 'Kirjaudu sisään',
      pleaseWaitLoggingIn: 'Odota...',
    },
    userMenu: {
      profile: 'Profiili',
      logout: 'Kirjautua ulos',
    },
    splash: {
      close: 'kiinni',
      autoCloseIn: 'Automaattinen sulkeminen sisään',
    },
    about: {
      close: 'kiinni',
    }
  }
};
