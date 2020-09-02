export interface LanguageModel {
  product: string;
  company: string;
  desktop: {
    ribbon: {
      contacts: string;
      settings: string;
      someLongerText: string;
      catalogues: string;
      multiSelect: string;
      ghost: string;
    };
    menu: {
      menu1: string;
      menu2: string;
      menu3: string;
      menu4: string;
    };
    window: {
      close: string;
      minimise: string;
      maximise: string;
      centre: string;
      restore: string;
      loading: string;
      dockTop: string;
      dockRight: string;
      dockBottom: string;
      dockLeft: string;
      dockTopLeft: string;
      dockTopRight: string;
      dockBottomLeft: string;
      dockBottomRight: string;
      unDockWindow: string;
      moveWindow: string;
      top: string;
      width: string;
      left: string;
      height: string;
      login: string;
      newWindow: string;
      profile: string;
      setDockPosition: string;
      unsaved: string;
      placeInPanel: string;
      removeFromPanel: string;
      about: string;
      demo: string;
      demo1: string;
      demo2: string;
      demo3: string;
      demo4: string;
    };
    panel: {
      close: string;
      dockTop: string;
      dockRight: string;
      dockBottom: string;
      dockLeft: string;
      dockTopLeft: string;
      dockTopRight: string;
      dockBottomLeft: string;
      dockBottomRight: string;
      unDockPanel: string;
      moveWindow: string;
      top: string;
      width: string;
      left: string;
      height: string;
      setDockPosition: string;
      system: string;
    };
    toast: {
      close: string;
      dismiss: string;
      success: string;
      warning: string;
      information: string;
      error: string;
      loginSuccessful: string;
      logoutSuccessful: string;
      loginFailed: string;
    };
    dialog: {
      ok: string;
      cancel: string;
      close: string;
      yes: string;
      no: string;
      agree: string;
      disagree: string;
      decline: string;
      closeWindow: string;
      youHaveUnsavedContentAreYouSureYouWantToCloseThisWindow: string;
      newPanel: string;
      pleaseSpecifyYourPanelName: string;
      panelName: string;
      left: string;
      width: string;
      createPanel: string;
      closePanel: string;
      doYouWantToCloseTheWindows: string;
      keepWindows: string;
      closeWindows: string;
    };
    tabBar : {
      autoHide: string;
    };
    newWindow: string;
    loading: string;
  };
  components: {
    languageSelector: {
      language: string;
      languages: {
        langEn: string;
        langFr: string;
        langDe: string;
        langNo: string;
        langRu: string;
        langNl: string;
        langEs: string;
        langIt: string;
        langDa: string;
        langSv: string;
        langPt: string;
        langFi: string;
        langZh: string;
        langPl: string;
      };
      flags: {
        langEn: string;
        langFr: string;
        langDe: string;
        langNo: string;
        langRu: string;
        langNl: string;
        langEs: string;
        langIt: string;
        langDa: string;
        langSv: string;
        langPt: string;
        langFi: string;
        langZh: string;
        langPl: string;
      }
    };
    settings: {
      settings: string;
      ribbonSize: string;
      tabBarAutoHide: string;
      small: string;
      large: string;
    };
    videoPlayer: {
      play: string;
      pause: string;
      volume: string;
      fullScreen: string;
      exitFullScreen: string;
      skipBack: string;
      skipForward: string;
      mute: string;
      unMute: string;
      pictureInPicture: string;
      errorLoadingVideo: string;
      restart: string;
      settings: string;
    }
  };
  system: {
    example: {
      test: string;
    };
    engine: {};
    userLogin: {
      username: string;
      password: string;
      login: string;
      pleaseWaitLoggingIn: string;
    };
    userMenu: {
      profile: string;
      logout: string;
    };
    splash: {
      close: string;
      autoCloseIn: string;
    };
    about: {
      close: string;
    }
  }
}
