import {LanguageModel} from '../language-model';

export const langFr: LanguageModel = {
  product: 'Desktop V2', // safe
  company: 'Oceanworks', // safe
  desktop: {
    ribbon: {
      contacts: 'Contacts',
      settings: 'Paramètres',
      someLongerText: 'Un texte plus long',
      catalogues: 'Catalogues',
      multiSelect: 'Sélection multiple',
      ghost: 'Fantôme',
    },
    menu: {
      menu1: 'Menu 1',
      menu2: 'Menu 2',
      menu3: 'Menu 3',
      menu4: 'Menu 4',
    },
    window: {
      close: 'Fermer',
      minimise: 'Minimiser',
      maximise: 'Maximiser',
      centre: 'Centre',
      restore: 'Restaurer',
      loading: 'Chargement',
      dockTop: 'Dessus de quai',
      dockRight: 'Dock à droite',
      dockBottom: 'Fond du quai',
      dockLeft: 'Dock gauche',
      dockTopLeft: 'Dock en haut à gauche',
      dockTopRight: 'Dock en haut à droite',
      dockBottomLeft: 'Dock en bas à gauche',
      dockBottomRight: 'Dock en bas à droite',
      unDockWindow: 'Détacher la fenêtre',
      moveWindow: 'Déplacer la fenêtre',
      top: 'Haut',
      width: 'Largeur',
      left: 'La gauche',
      height: 'la taille',
      login: 'S&#39;identifier',
      newWindow: 'Nouvelle fenetre',
      profile: 'Profil',
      setDockPosition: 'Définir la position du quai',
      unsaved: 'Non enregistré',
      placeInPanel: 'Placer dans le panneau',
      removeFromPanel: 'Supprimer du panneau',
      about: 'À propos',
      demo: 'Démo',
      demo1: 'Démo One',
      demo2: 'Démo deux',
      demo3: 'Démo trois',
      demo4: 'Démo quatre',
    },
    panel: {
      close: 'Fermer',
      dockTop: 'Dessus de quai',
      dockRight: 'Dock à droite',
      dockBottom: 'Fond du quai',
      dockLeft: 'Dock gauche',
      dockTopLeft: 'Dock en haut à gauche',
      dockTopRight: 'Dock en haut à droite',
      dockBottomLeft: 'Dock en bas à gauche',
      dockBottomRight: 'Dock en bas à droite',
      unDockPanel: 'Déverrouiller le panneau',
      moveWindow: 'Déplacer la fenêtre',
      top: 'Haut',
      width: 'Largeur',
      left: 'La gauche',
      height: 'la taille',
      setDockPosition: 'Définir la position du quai',
    },
    toast: {
      close: 'Fermer',
      dismiss: 'Rejeter',
      success: 'Succès',
      warning: 'avertissement',
      information: 'Information',
      error: 'Erreur',
      loginSuccessful: 'Connexion réussie',
      logoutSuccessful: 'Déconnexion réussie',
      loginFailed: 'Échec de la connexion',
    },
    dialog: {
      ok: 'D&#39;accord',
      cancel: 'Annuler',
      close: 'Fermer',
      yes: 'Oui',
      no: 'Non',
      agree: 'Se mettre d&#39;accord',
      disagree: 'Être en désaccord',
      decline: 'Déclin',
      closeWindow: 'Fermer la fenêtre',
      youHaveUnsavedContentAreYouSureYouWantToCloseThisWindow: 'Vous avez du contenu non enregistré. <br><br> Voulez-vous vraiment fermer cette fenêtre?',
      newPanel: 'Nouveau panneau',
      pleaseSpecifyYourPanelName: 'Veuillez spécifier le nom de votre panneau',
      panelName: 'Nom du panneau',
      left: 'La gauche',
      width: 'Largeur',
      createPanel: 'Créer un panneau',
      closePanel: 'Fermer le panneau',
      doYouWantToCloseTheWindows: 'Voulez-vous fermer les fenêtres?',
      keepWindows: 'Gardez Windows',
      closeWindows: 'Fermer Windows',
    },
    tabBar : {
      autoHide: 'Masquage automatique',
    },
    newWindow: 'Nouvelle fenetre',
  },
  components: {
    languageSelector: {
      language: 'langFr',
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
      settings: 'Paramètres',
      ribbonSize: 'Taille du ruban',
      tabBarAutoHide: 'Masquage automatique de la barre d&#39;onglets',
      small: 'Petit',
      large: 'Grand',
    },
    videoPlayer: {
      play: 'Jouer',
      pause: 'Pause',
      volume: 'Le volume',
      fullScreen: 'Passer en plein écran',
      exitFullScreen: 'Quitter le mode plein écran',
      skipBack: 'Revenir en arrière',
      skipForward: 'Aller en avant',
      mute: 'Muet',
      unMute: 'Annuler le son',
      pictureInPicture: 'Afficher l&#39;image dans l&#39;image',
      errorLoadingVideo: 'Erreur lors du chargement de la vidéo',
      restart: 'Redémarrer la vidéo',
      settings: 'Paramètres',
    }
  },
  system: {
    example: {
      test: 'Test OK',
    },
    engine: {},
    userLogin: {
      username: 'Nom d&#39;utilisateur',
      password: 'Mot de passe',
      login: 'S&#39;identifier',
      pleaseWaitLoggingIn: 'S&#39;il vous plaît, attendez...',
    },
    userMenu: {
      profile: 'Profil',
      logout: 'Se déconnecter',
    },
    splash: {
      close: 'Fermer',
      autoCloseIn: 'Fermeture automatique',
    },
    about: {
      close: 'Fermer',
    }
  }
};
