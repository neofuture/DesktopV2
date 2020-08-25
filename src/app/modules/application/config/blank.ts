import {LanguageModel} from './language-model';

// tslint:disable-next-line:variable-name
export const blank: LanguageModel = {
  product: 'Desktop V2', // safe',
  company: 'Oceanworks', // safe',
  desktop: {
    ribbon: {
      contacts: 'Contacts',
      settings: 'Settings',
      someLongerText: 'Some Longer Text',
      catalogues: 'Catalogues',
      multiSelect: 'Multi Select',
    },
    menu: {
      menu1: 'Menu 1',
      menu2: 'Menu 2',
      menu3: 'Menu 3',
      menu4: 'Menu 4',
    },
    window: {
      close: 'Close',
      minimise: 'Minimise',
      maximise: 'Maximise',
      centre: 'Centre',
      restore: 'Restore',
      loading: 'Loading',
      dockTop: 'Dock Top',
      dockRight: 'Dock Right',
      dockBottom: 'Dock Bottom',
      dockLeft: 'Dock Left',
      dockTopLeft: 'Dock Top Left',
      dockTopRight: 'Dock Top Right',
      dockBottomLeft: 'Dock Bottom Left',
      dockBottomRight: 'Dock Bottom Right',
      unDockWindow: 'Undock Window',
      moveWindow: 'Move Window',
      top: 'Top',
      width: 'Width',
      left: 'Left',
      height: 'Height',
      login: 'Login',
      newWindow: 'New Window',
      profile: 'Profile',
      setDockPosition: 'Set Dock Position',
      unsaved: 'Unsaved',
      placeInPanel: 'Place in panel',
      removeFromPanel: 'Remove From Panel',
      about: 'About',
      demo: 'Demo',
      demo1: 'Demo One',
      demo2: 'Demo Two',
      demo3: 'Demo Three',
      demo4: 'Demo Four',
    },
    panel: {
      close: 'Close',
      dockTop: 'Dock Top',
      dockRight: 'Dock Right',
      dockBottom: 'Dock Bottom',
      dockLeft: 'Dock Left',
      dockTopLeft: 'Dock Top Left',
      dockTopRight: 'Dock Top Right',
      dockBottomLeft: 'Dock Bottom Left',
      dockBottomRight: 'Dock Bottom Right',
      unDockPanel: 'Undock Panel',
      moveWindow: 'Move Window',
      top: 'Top',
      width: 'Width',
      left: 'Left',
      height: 'Height',
      setDockPosition: 'Set Dock Position',
    },
    toast: {
      close: 'Close',
      dismiss: 'Dismiss',
      success: 'Success',
      warning: 'Warning',
      information: 'Information',
      error: 'Error',
      loginSuccessful: 'Login Successful',
      logoutSuccessful: 'Logout Successful',
      loginFailed: 'Login Failed',
    },
    dialog: {
      ok: 'OK',
      cancel: 'Cancel',
      close: 'Close',
      yes: 'Yes',
      no: 'No',
      agree: 'Agree',
      disagree: 'Disagree',
      decline: 'Decline',
      closeWindow: 'Close Window',
      youHaveUnsavedContentAreYouSureYouWantToCloseThisWindow: 'You have unsaved content.<br><br>Are you sure you want to close this window ?',
      newPanel: 'New Panel',
      pleaseSpecifyYourPanelName: 'Please specify your panel name',
      panelName: 'Panel Name',
      left: 'Left',
      width: 'Width',
      createPanel: 'Create Panel',
      closePanel: 'Close Panel',
      doYouWantToCloseTheWindows: 'Do you want to close the windows ?',
      keepWindows: 'Keep Windows',
      closeWindows: 'Close Windows',
    },
    tabBar : {
      autoHide: 'Auto Hide',
    },
    newWindow: 'New Window',
  },
  components: {
    languageSelector: {
      language: 'langEn',
      languages: {
        langEn: 'English', // safe',
        langFr: 'Français', // safe',
        langDe: 'Deutsch', // safe',
        langNo: 'Norsk', // safe',
        langRu: 'Russkiy', // safe',
        langNl: 'Nederlands', // safe',
        langEs: 'Español', // safe',
        langIt: 'Italiano', // safe',
        langDa: 'Dansk', // safe',
        langSv: 'Svenska', // safe',
        langPt: 'Português', // safe',
        langFi: 'Suomi', // safe',
        langZh: '中文', // safe',
        langPl: 'Polskie' // safe',
      },
      flags: {
        langEn: 'united-kingdom.png', // safe',
        langFr: 'france.png', // safe',
        langDe: 'germany.png', // safe',
        langNo: 'norway.png', // safe',
        langRu: 'russia.png', // safe',
        langNl: 'netherlands.png', // safe',
        langEs: 'spain.png', // safe',
        langIt: 'italy.png', // safe',
        langDa: 'denmark.png', // safe',
        langSv: 'sweden.png', // safe',
        langPt: 'portugal.png', // safe',
        langFi: 'finland.png', // safe',
        langZh: 'china.png', // safe',
        langPl: 'republic-of-poland.png' // safe',
      }
    },
    settings: {
      settings: 'Settings',
      ribbonSize: 'Ribbon size',
      tabBarAutoHide: 'Tab bar auto hide',
      small: 'Small',
      large: 'Large',
    },
    videoPlayer: {
      play: 'Play',
      pause: 'Pause',
      volume: 'Volume',
      fullScreen: 'Switch to Full Screen',
      exitFullScreen: 'Exit Full Screen',
      skipBack: 'Skip Back',
      skipForward: 'Skip Forward',
      mute: 'Mute',
      unMute: 'Un-Mute',
      pictureInPicture: 'Show Picture in Picture',
      errorLoadingVideo: 'Error Loading Video',
      restart: 'Restart Video',
      settings: 'Settings',
    }
  },
  system: {
    example: {
      test: 'Testing OK',
    },
    engine: {},
    userLogin: {
      username: 'Username',
      password: 'Password',
      login: 'Login',
      pleaseWaitLoggingIn: 'Please Wait...',
    },
    userMenu: {
      profile: 'Profile',
      logout: 'Logout',
    },
    splash: {
      close: 'Close',
      autoCloseIn: 'Auto close in',
    },
    about: {
      close: 'Close',
    }
  }
};