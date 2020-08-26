import {LanguageModel} from '../language-model';

export const langPt: LanguageModel = {
  product: 'Desktop V2', // safe
  company: 'Oceanworks', // safe
  desktop: {
    ribbon: {
      contacts: 'Contatos',
      settings: 'Configurações',
      someLongerText: 'Algum texto mais longo',
      catalogues: 'Catálogos',
      multiSelect: 'Multi Select',
      ghost: 'Fantasma',
    },
    menu: {
      menu1: 'Menu 1',
      menu2: 'Menu 2',
      menu3: 'Menu 3',
      menu4: 'Menu 4',
    },
    window: {
      close: 'Perto',
      minimise: 'Minimizar',
      maximise: 'Maximizar',
      centre: 'Centro',
      restore: 'Restaurar',
      loading: 'Carregando',
      dockTop: 'Dock Top',
      dockRight: 'Dock Right',
      dockBottom: 'Dock Bottom',
      dockLeft: 'Doca à esquerda',
      dockTopLeft: 'Doca superior esquerda',
      dockTopRight: 'Doca superior direita',
      dockBottomLeft: 'Doca inferior esquerda',
      dockBottomRight: 'Doca inferior direita',
      unDockWindow: 'Janela de desencaixe',
      moveWindow: 'Mover janela',
      top: 'Topo',
      width: 'Largura',
      left: 'Esquerda',
      height: 'Altura',
      login: 'Conecte-se',
      newWindow: 'Nova janela',
      profile: 'Perfil',
      setDockPosition: 'Definir posição da doca',
      unsaved: 'Não salvo',
      placeInPanel: 'Colocar no painel',
      removeFromPanel: 'Remover do painel',
      about: 'Sobre',
      demo: 'Demo',
      demo1: 'Demonstração Um',
      demo2: 'Demo Dois',
      demo3: 'Demo Três',
      demo4: 'Demonstração Quatro',
    },
    panel: {
      close: 'Perto',
      dockTop: 'Dock Top',
      dockRight: 'Dock Right',
      dockBottom: 'Dock Bottom',
      dockLeft: 'Doca à esquerda',
      dockTopLeft: 'Doca superior esquerda',
      dockTopRight: 'Doca superior direita',
      dockBottomLeft: 'Doca inferior esquerda',
      dockBottomRight: 'Doca inferior direita',
      unDockPanel: 'Desencaixar painel',
      moveWindow: 'Mover janela',
      top: 'Topo',
      width: 'Largura',
      left: 'Esquerda',
      height: 'Altura',
      setDockPosition: 'Definir posição da doca',
    },
    toast: {
      close: 'Perto',
      dismiss: 'Dispensar',
      success: 'Sucesso',
      warning: 'Aviso',
      information: 'Em formação',
      error: 'Erro',
      loginSuccessful: 'Login bem sucedido',
      logoutSuccessful: 'Logout bem sucedido',
      loginFailed: 'Falha na autenticação',
    },
    dialog: {
      ok: 'Está bem',
      cancel: 'Cancelar',
      close: 'Perto',
      yes: 'sim',
      no: 'Não',
      agree: 'Aceita',
      disagree: 'Discordo',
      decline: 'Declínio',
      closeWindow: 'Janela fechada',
      youHaveUnsavedContentAreYouSureYouWantToCloseThisWindow: 'Você tem conteúdo não salvo. <br><br> Tem certeza que deseja fechar esta janela?',
      newPanel: 'Novo Painel',
      pleaseSpecifyYourPanelName: 'Especifique o nome do seu painel',
      panelName: 'Nome do Painel',
      left: 'Esquerda',
      width: 'Largura',
      createPanel: 'Criar Painel',
      closePanel: 'Fechar painel',
      doYouWantToCloseTheWindows: 'Você quer fechar as janelas?',
      keepWindows: 'Keep Windows',
      closeWindows: 'Fechar o Windows',
    },
    tabBar : {
      autoHide: 'Ocultar automaticamente',
    },
    newWindow: 'Nova janela',
  },
  components: {
    languageSelector: {
      language: 'langPt',
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
      settings: 'Configurações',
      ribbonSize: 'Tamanho da fita',
      tabBarAutoHide: 'Ocultar automaticamente a barra de guias',
      small: 'Pequeno',
      large: 'ampla',
    },
    videoPlayer: {
      play: 'Jogar',
      pause: 'Pausa',
      volume: 'Volume',
      fullScreen: 'Mudar para tela inteira',
      exitFullScreen: 'Sair da tela inteira',
      skipBack: 'Retroceder',
      skipForward: 'Passe à frente',
      mute: 'Mudo',
      unMute: 'Un-Mute',
      pictureInPicture: 'Mostrar imagem na imagem',
      errorLoadingVideo: 'Erro ao carregar o vídeo',
      restart: 'Reiniciar vídeo',
      settings: 'Configurações',
    }
  },
  system: {
    example: {
      test: 'Testing OK',
    },
    engine: {},
    userLogin: {
      username: 'Nome do usuário',
      password: 'Senha',
      login: 'Conecte-se',
      pleaseWaitLoggingIn: 'Por favor, espere...',
    },
    userMenu: {
      profile: 'Perfil',
      logout: 'Sair',
    },
    splash: {
      close: 'Perto',
      autoCloseIn: 'Fechamento automático em',
    },
    about: {
      close: 'Perto',
    }
  }
};
