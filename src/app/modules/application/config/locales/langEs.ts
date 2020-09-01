import {LanguageModel} from '../language-model';

export const langEs: LanguageModel = {
  product: 'Desktop V2', // safe
  company: 'Oceanworks', // safe
  desktop: {
    ribbon: {
      contacts: 'Contactos',
      settings: 'Configuraciones',
      someLongerText: 'Algún texto más largo',
      catalogues: 'Catálogos',
      multiSelect: 'Selección múltiple',
      ghost: 'Fantasma',
    },
    menu: {
      menu1: 'Menú 1',
      menu2: 'Menú 2',
      menu3: 'Menú 3',
      menu4: 'Menú 4',
    },
    window: {
      close: 'Cerca',
      minimise: 'Minimizar',
      maximise: 'Maximizar',
      centre: 'Centrar',
      restore: 'Restaurar',
      loading: 'Cargando',
      dockTop: 'Dock Top',
      dockRight: 'Dock Right',
      dockBottom: 'Dock Bottom',
      dockLeft: 'Muelle a la izquierda',
      dockTopLeft: 'Muelle Arriba Izquierda',
      dockTopRight: 'Muelle Arriba Derecha',
      dockBottomLeft: 'Muelle Inferior Izquierdo',
      dockBottomRight: 'Muelle Inferior Derecha',
      unDockWindow: 'Desacoplar ventana',
      moveWindow: 'Mover ventana',
      top: 'Parte superior',
      width: 'Anchura',
      left: 'Izquierda',
      height: 'Altura',
      login: 'Iniciar sesión',
      newWindow: 'Nueva ventana',
      profile: 'Perfil',
      setDockPosition: 'Establecer posición de muelle',
      unsaved: 'No guardado',
      placeInPanel: 'Colocar en panel',
      removeFromPanel: 'Quitar del panel',
      about: 'Acerca de',
      demo: 'Manifestación',
      demo1: 'Demo uno',
      demo2: 'Demo dos',
      demo3: 'Demo tres',
      demo4: 'Demo cuatro',
    },
    panel: {
      close: 'Cerca',
      dockTop: 'Dock Top',
      dockRight: 'Dock Right',
      dockBottom: 'Dock Bottom',
      dockLeft: 'Muelle a la izquierda',
      dockTopLeft: 'Muelle Arriba Izquierda',
      dockTopRight: 'Muelle Arriba Derecha',
      dockBottomLeft: 'Muelle Inferior Izquierdo',
      dockBottomRight: 'Muelle Inferior Derecha',
      unDockPanel: 'Desacoplar el panel',
      moveWindow: 'Mover ventana',
      top: 'Parte superior',
      width: 'Anchura',
      left: 'Izquierda',
      height: 'Altura',
      setDockPosition: 'Establecer posición de muelle',
      system: 'Sistema',
    },
    toast: {
      close: 'Cerca',
      dismiss: 'Descartar',
      success: 'Éxito',
      warning: 'Advertencia',
      information: 'Información',
      error: 'Error',
      loginSuccessful: 'Inicio de sesión correcto',
      logoutSuccessful: 'Cierre de sesión exitoso',
      loginFailed: 'Error de inicio de sesion',
    },
    dialog: {
      ok: 'Okay',
      cancel: 'Cancelar',
      close: 'Cerca',
      yes: 'si',
      no: 'No',
      agree: 'De acuerdo',
      disagree: 'Discrepar',
      decline: 'Disminución',
      closeWindow: 'Cerrar ventana',
      youHaveUnsavedContentAreYouSureYouWantToCloseThisWindow: 'Tienes contenido sin guardar. <br><br> ¿Estás seguro de que quieres cerrar esta ventana?',
      newPanel: 'Nuevo panel',
      pleaseSpecifyYourPanelName: 'Especifique el nombre de su panel',
      panelName: 'Nombre del panel',
      left: 'Izquierda',
      width: 'Anchura',
      createPanel: 'Crear panel',
      closePanel: 'Cerrar panel',
      doYouWantToCloseTheWindows: '¿Quieres cerrar las ventanas?',
      keepWindows: 'Mantenga Windows',
      closeWindows: 'Cerrar ventanas',
    },
    tabBar : {
      autoHide: 'Auto-escondite',
    },
    newWindow: 'Nueva ventana',
  },
  components: {
    languageSelector: {
      language: 'langEs',
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
      settings: 'Configuraciones',
      ribbonSize: 'Tamaño de la cinta',
      tabBarAutoHide: 'Ocultar automáticamente la barra de pestañas',
      small: 'Pequeña',
      large: 'Grande',
    },
    videoPlayer: {
      play: 'Jugar',
      pause: 'Pausa',
      volume: 'Volumen',
      fullScreen: 'Cambiar a pantalla completa',
      exitFullScreen: 'Salir de pantalla completa',
      skipBack: 'Saltar atrás',
      skipForward: 'Saltar hacia adelante',
      mute: 'Mudo',
      unMute: 'Des-silenciar',
      pictureInPicture: 'Mostrar imagen en imagen',
      errorLoadingVideo: 'Error al cargar el video',
      restart: 'Reiniciar video',
      settings: 'Configuraciones',
    }
  },
  system: {
    example: {
      test: 'Prueba OK',
    },
    engine: {},
    userLogin: {
      username: 'Nombre de usuario',
      password: 'Contraseña',
      login: 'Iniciar sesión',
      pleaseWaitLoggingIn: 'Por favor espera...',
    },
    userMenu: {
      profile: 'Perfil',
      logout: 'Cerrar sesión',
    },
    splash: {
      close: 'Cerca',
      autoCloseIn: 'Cierre automático en',
    },
    about: {
      close: 'Cerca',
    }
  }
};
