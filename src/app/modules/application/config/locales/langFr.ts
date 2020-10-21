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
      planMode1: 'Mode plan 1',
      planMode2: 'Mode plan 2',
      planMode3: 'Mode plan 3',
      planMode4: 'Mode plan 4',
      deleteRecord: 'Supprimer l&#39;enregistrement',
      saveRecord: 'Enregistrer l&#39;enregistrement',
      addRecord: 'Ajouter un enregistrement',
      sendEmail: 'Envoyer un e-mail',
      editSettings: 'Modifier les paramètres',
      cancelAddingRecord: 'Annuler l&#39;ajout d&#39;un nouvel enregistrement',
      discardChanges: 'Annuler les modifications',
      notesAndHistory: 'Notes et histoire',
      supportTickets: 'Billets d&#39;assistance',
      accounts: 'Comptes',
      contactProfile: 'Profil de contact',
      documentsAndFiles: 'Documents et fichiers',
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
      contactManager: 'Gestionnaire de contacts',
      addHistory: 'Ajouter un historique',
      addSupportTicket: 'Ajouter un ticket de support',
      editSettings: 'Modifier les paramètres',
      search: 'Chercher',
      editCategoryItem: 'Modifier l&#39;élément de catégorie',
      editGroupItem: 'Modifier l&#39;élément de groupe',
      editStatusItem: 'Modifier l&#39;élément de statut',
      editTypeItem: 'Modifier l&#39;élément de type',
      addCategoryItem: 'Ajouter un élément de catégorie',
      addGroupItem: 'Ajouter un élément de groupe',
      addStatusItem: 'Ajouter un élément de statut',
      addTypeItem: 'Ajouter un élément de type',
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
      system: 'Système',
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
      discardChanges: 'Annuler les modifications',
      areYouSureYouWishToDiscardYourChanges: 'Voulez-vous vraiment annuler vos modifications?',
      discard: 'Jeter',
      deleteRecord: 'Supprimer l&#39;enregistrement',
      areYouSureYouWishToDeleteThisRecord: 'Êtes-vous sûr de vouloir supprimer cet enregistrement?',
      delete: 'Effacer',
    },
    tabBar: {
      autoHide: 'Masquage automatique',
    },
    newWindow: 'Nouvelle fenetre',
    loading: 'Chargement...',
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
  },
  contactManager: {
    noRecordsFound: 'Aucun enregistrement trouvé',
    recordChanged: '*** Enregistrement changé ***',
    addingNewRecord: '*** Nouvel enregistrement ***',
    ofCount: 'sur [COUNT]',
    editSettings: 'Modifier les paramètres',
    pleaseSelect: 'Veuillez sélectionner',
    advancedSearch: 'Recherche Avancée',
    switchView: 'Changer de vue',
    name: 'Nom',
    forename: 'Prénom',
    surname: 'Nom de famille',
    address: 'Adresse',
    town: 'Ville / Ville',
    county: 'Comté',
    postcode: 'Code postal',
    lookup: 'Chercher',
    country: 'Pays',
    jobTitle: 'Profession',
    department: 'département',
    work: 'Travail',
    fax: 'Fax',
    mobile: 'Mobile',
    email: 'Email',
    group: 'Groupe',
    category: 'Catégorie',
    updateRecord: 'Mettre à jour l&#39;enregistrement',
    newRecord: 'Nouvel enregistrement',
    deleteRecord: 'Supprimer l&#39;enregistrement',
    created: 'Créé',
    updated: 'Mis à jour',
    lastUpdatedBy: 'Dernière mise à jour par',
    lastLogin: 'Dernière connexion',
    start: 'Premier enregistrement',
    previous50: 'Retour 50 records',
    previous: 'Enregistrement précédent',
    next: 'Enregistrement suivant',
    next50: 'Attaquer 50 records',
    end: 'Dernier enregistrement',
    categories: 'Catégories',
    accountNumber: 'N ° de compte',
    company: 'Compagnie',
    type: 'Type',
    status: 'Statut',
    website: 'Site Internet',
    contactAssociations: 'Contacter les associations',
    general: 'Général',
    authentication: 'Authentification',
    otherInfo: 'les autres informations',
    companySettings: 'Paramètres de l&#39;entreprise',
    access: 'Accès',
    username: 'Nom d&#39;utilisateur',
    password: 'Mot de passe',
    allowLogin: 'Autoriser la connexion',
    notesAndHistory: 'Notes et histoire',
    supportTickets: 'Billets d&#39;assistance',
    accounts: 'Comptes',
    contactProfile: 'Profil de contact',
    documentsAndFiles: 'Documents et fichiers',
    searching: 'Recherche...',
    selectAddress: 'Sélectionnez une adresse',
    addressNotListed: 'Adresse non répertoriée',
    pleaseWaitLoading: 'S&#39;il vous plaît, attendez. Chargement...',
    readOnly: '*** Lecture seulement ***',
    public: 'Publique',
    private: 'Privé',
    addedBy: 'Ajouté par',
    updatedBy: 'Mis à jour par',
    Administrator: 'Administrateur',
    Moderator: 'Modérateur',
    Manager: 'Géré',
    Supervisor: 'Superviseur',
    User: 'Utilisateur',
    None: 'Aucun',
    Opportunity: 'Opportunité',
    Prospect: 'Perspective',
    'Not Contacted': 'Non contacté',
    'Appointment Booked': 'Rendez-vous réservé',
    '2nd Appointment Booked': '2ème rendez-vous réservé',
    'Awaiting Decision': 'En attente de décision',
    Customer: 'Client',
    Staff: 'Personnel',
    Contacts: 'Contacts',
    Suppliers: 'Fournisseurs',
    Live: 'Vivre',
    Lead: 'Morte',
    contactRecords: 'Dossiers de contact',
    companyRecords: 'Dossiers de l&#39;entreprise',
    yourRecordHasBeenSaved: 'Votre dossier a été sauvegardé',
    pleaseEnterALongerSurname: 'Veuillez saisir un nom de famille plus long',
    pleaseEnterALongerCompanyName: 'Veuillez saisir un nom d&#39;entreprise plus long',
    pleaseSpecifyUserAuthDetails: 'Veuillez spécifier les détails d&#39;authentification de l&#39;utilisateur',
    yourRecordHasBeenDeleted: 'Votre dossier a été supprimé',
    notesAndHistoryTab: {
      addNotesOrHistory: 'Ajouter des notes ou un historique',
      addSupportTicket: 'Ajouter un ticket de support',
    },
    accountsTab: {
      ok: 'D&#39;accord',
    },
    contactProfileTab: {
      ok: 'D&#39;accord',
    },
    documentsAndFilesTab: {
      ok: 'D&#39;accord',
    },
    settings: {
      categories: 'Catégories',
      types: 'Les types',
      groups: 'Groupes',
      status: 'Statut',
      addNewCategory: 'Ajouter une nouvelle catégorie',
      addNewContactCategory: 'Ajouter une nouvelle catégorie de contact',
      addNewCompanyCategory: 'Ajouter une nouvelle catégorie d&#39;entreprise',
      contactCategories: 'Catégories de contact',
      companyCategories: 'Catégories d&#39;entreprises',
      addNewStatus: 'Ajouter un nouveau statut',
      addNewGroup: 'Ajouter un nouveau groupe',
      addNewType: 'Ajouter un nouveau type',
      setDefault: 'Définir par defaut',
      item: {
        cancel: 'Annuler',
        save: 'sauvegarder',
        CategoryName: 'Nom de catégorie',
        GroupName: 'Nom de groupe',
        StatusName: 'Nom du statut',
        TypeName: 'Nom du type',
        backgroundGradientTopColour: 'Couleur du haut du dégradé d&#39;arrière-plan',
        backgroundGradientBottomColour: 'Couleur du fond du dégradé d&#39;arrière-plan',
        textColour: 'Couleur du texte',
        fieldTooShort: 'votre [FIELD] est trop court, veuillez spécifier quelque chose de plus de [LENGTH] caractères',
      }
    },
  },
  countries: {
    AF: 'Afghanistan', // safe
    AL: 'Albania', // safe
    DZ: 'Algeria', // safe
    AS: 'American Samoa', // safe
    AD: 'Andorra', // safe
    AO: 'Angola', // safe
    AI: 'Anguilla', // safe
    AQ: 'Antarctica', // safe
    AG: 'Antigua and Barbuda', // safe
    AR: 'Argentina', // safe
    AM: 'Armenia', // safe
    AW: 'Aruba', // safe
    AU: 'Australia', // safe
    AT: 'Austria', // safe
    AZ: 'Azerbaijan', // safe
    BS: 'Bahamas', // safe
    BH: 'Bahrain', // safe
    BD: 'Bangladesh', // safe
    BB: 'Barbados', // safe
    BY: 'Belarus', // safe
    BE: 'Belgium', // safe
    BZ: 'Belize', // safe
    BJ: 'Benin', // safe
    BM: 'Bermuda', // safe
    BT: 'Bhutan', // safe
    BO: 'Bolivia (Plurinational State of)', // safe
    BQ: 'Bonaire, Sint Eustatius and Saba', // safe
    BA: 'Bosnia and Herzegovina', // safe
    BW: 'Botswana', // safe
    BV: 'Bouvet Island', // safe
    BR: 'Brazil', // safe
    IO: 'British Indian Ocean Territory', // safe
    BN: 'Brunei Darussalam', // safe
    BG: 'Bulgaria', // safe
    BF: 'Burkina Faso', // safe
    BI: 'Burundi', // safe
    CV: 'Cabo Verde', // safe
    KH: 'Cambodia', // safe
    CM: 'Cameroon', // safe
    CA: 'Canada', // safe
    KY: 'Cayman Islands', // safe
    CF: 'Central African Republic', // safe
    TD: 'Chad', // safe
    CL: 'Chile', // safe
    CN: 'China', // safe
    CX: 'Christmas Island', // safe
    CC: 'Cocos (Keeling) Islands', // safe
    CO: 'Colombia', // safe
    KM: 'Comoros', // safe
    CD: 'Congo (the Democratic Republic of the)', // safe
    CG: 'Congo', // safe
    CK: 'Cook Islands', // safe
    CR: 'Costa Rica', // safe
    HR: 'Croatia', // safe
    CU: 'Cuba', // safe
    CW: 'Curaçao', // safe
    CY: 'Cyprus', // safe
    CZ: 'Czechia', // safe
    CI: 'Côte d\'Ivoire', // safe
    DK: 'Denmark', // safe
    DJ: 'Djibouti', // safe
    DM: 'Dominica', // safe
    DO: 'Dominican Republic', // safe
    EC: 'Ecuador', // safe
    EG: 'Egypt', // safe
    SV: 'El Salvador', // safe
    GQ: 'Equatorial Guinea', // safe
    ER: 'Eritrea', // safe
    EE: 'Estonia', // safe
    SZ: 'Eswatini', // safe
    ET: 'Ethiopia', // safe
    FK: 'Falkland Islands [Malvinas]', // safe
    FO: 'Faroe Islands', // safe
    FJ: 'Fiji', // safe
    FI: 'Finland', // safe
    FR: 'France', // safe
    GF: 'French Guiana', // safe
    PF: 'French Polynesia', // safe
    TF: 'French Southern Territories', // safe
    GA: 'Gabon', // safe
    GM: 'Gambia', // safe
    GE: 'Georgia', // safe
    DE: 'Germany', // safe
    GH: 'Ghana', // safe
    GI: 'Gibraltar', // safe
    GR: 'Greece', // safe
    GL: 'Greenland', // safe
    GD: 'Grenada', // safe
    GP: 'Guadeloupe', // safe
    GU: 'Guam', // safe
    GT: 'Guatemala', // safe
    GG: 'Guernsey', // safe
    GN: 'Guinea', // safe
    GW: 'Guinea-Bissau', // safe
    GY: 'Guyana', // safe
    HT: 'Haiti', // safe
    HM: 'Heard Island and McDonald Islands', // safe
    VA: 'Holy See', // safe
    HN: 'Honduras', // safe
    HK: 'Hong Kong', // safe
    HU: 'Hungary', // safe
    IS: 'Iceland', // safe
    IN: 'India', // safe
    ID: 'Indonesia', // safe
    IR: 'Iran (Islamic Republic of)', // safe
    IQ: 'Iraq', // safe
    IE: 'Ireland', // safe
    IM: 'Isle of Man', // safe
    IL: 'Israel', // safe
    IT: 'Italy', // safe
    JM: 'Jamaica', // safe
    JP: 'Japan', // safe
    JE: 'Jersey', // safe
    JO: 'Jordan', // safe
    KZ: 'Kazakhstan', // safe
    KE: 'Kenya', // safe
    KI: 'Kiribati', // safe
    KP: 'Korea (the Democratic People\'s Republic of)', // safe
    KR: 'Korea (the Republic of)', // safe
    KW: 'Kuwait', // safe
    KG: 'Kyrgyzstan', // safe
    LA: 'Lao People\'s Democratic Republic', // safe
    LV: 'Latvia', // safe
    LB: 'Lebanon', // safe
    LS: 'Lesotho', // safe
    LR: 'Liberia', // safe
    LY: 'Libya', // safe
    LI: 'Liechtenstein', // safe
    LT: 'Lithuania', // safe
    LU: 'Luxembourg', // safe
    MO: 'Macao', // safe
    MG: 'Madagascar', // safe
    MW: 'Malawi', // safe
    MY: 'Malaysia', // safe
    MV: 'Maldives', // safe
    ML: 'Mali', // safe
    MT: 'Malta', // safe
    MH: 'Marshall Islands', // safe
    MQ: 'Martinique', // safe
    MR: 'Mauritania', // safe
    MU: 'Mauritius', // safe
    YT: 'Mayotte', // safe
    MX: 'Mexico', // safe
    FM: 'Micronesia (Federated States of)', // safe
    MD: 'Moldova (the Republic of)', // safe
    MC: 'Monaco', // safe
    MN: 'Mongolia', // safe
    ME: 'Montenegro', // safe
    MS: 'Montserrat', // safe
    MA: 'Morocco', // safe
    MZ: 'Mozambique', // safe
    MM: 'Myanmar', // safe
    NA: 'Namibia', // safe
    NR: 'Nauru', // safe
    NP: 'Nepal', // safe
    NL: 'Netherlands', // safe
    NC: 'New Caledonia', // safe
    NZ: 'New Zealand', // safe
    NI: 'Nicaragua', // safe
    NE: 'Niger', // safe
    NG: 'Nigeria', // safe
    NU: 'Niue', // safe
    NF: 'Norfolk Island', // safe
    MK: 'North Macedonia', // safe
    MP: 'Northern Mariana Islands', // safe
    NO: 'Norway', // safe
    OM: 'Oman', // safe
    PK: 'Pakistan', // safe
    PW: 'Palau', // safe
    PS: 'Palestine, State of', // safe
    PA: 'Panama', // safe
    PG: 'Papua New Guinea', // safe
    PY: 'Paraguay', // safe
    PE: 'Peru', // safe
    PH: 'Philippines', // safe
    PN: 'Pitcairn', // safe
    PL: 'Poland', // safe
    PT: 'Portugal', // safe
    PR: 'Puerto Rico', // safe
    QA: 'Qatar', // safe
    RO: 'Romania', // safe
    RU: 'Russian Federation', // safe
    RW: 'Rwanda', // safe
    RE: 'Réunion', // safe
    BL: 'Saint Barthélemy', // safe
    SH: 'Saint Helena, Ascension and Tristan da Cunha', // safe
    KN: 'Saint Kitts and Nevis', // safe
    LC: 'Saint Lucia', // safe
    MF: 'Saint Martin (French part)', // safe
    PM: 'Saint Pierre and Miquelon', // safe
    VC: 'Saint Vincent and the Grenadines', // safe
    WS: 'Samoa', // safe
    SM: 'San Marino', // safe
    ST: 'Sao Tome and Principe', // safe
    SA: 'Saudi Arabia', // safe
    SN: 'Senegal', // safe
    RS: 'Serbia', // safe
    SC: 'Seychelles', // safe
    SL: 'Sierra Leone', // safe
    SG: 'Singapore', // safe
    SX: 'Sint Maarten (Dutch part)', // safe
    SK: 'Slovakia', // safe
    SI: 'Slovenia', // safe
    SB: 'Solomon Islands', // safe
    SO: 'Somalia', // safe
    ZA: 'South Africa', // safe
    GS: 'South Georgia and the South Sandwich Islands', // safe
    SS: 'South Sudan', // safe
    ES: 'Spain', // safe
    LK: 'Sri Lanka', // safe
    SD: 'Sudan', // safe
    SR: 'Suriname', // safe
    SJ: 'Svalbard and Jan Mayen', // safe
    SE: 'Sweden', // safe
    CH: 'Switzerland', // safe
    SY: 'Syrian Arab Republic', // safe
    TW: 'Taiwan (Province of China)', // safe
    TJ: 'Tajikistan', // safe
    TZ: 'Tanzania, the United Republic of', // safe
    TH: 'Thailand', // safe
    TL: 'Timor-Leste', // safe
    TG: 'Togo', // safe
    TK: 'Tokelau', // safe
    TO: 'Tonga', // safe
    TT: 'Trinidad and Tobago', // safe
    TN: 'Tunisia', // safe
    TR: 'Turkey', // safe
    TM: 'Turkmenistan', // safe
    TC: 'Turks and Caicos Islands', // safe
    TV: 'Tuvalu', // safe
    UG: 'Uganda', // safe
    UA: 'Ukraine', // safe
    AE: 'United Arab Emirates', // safe
    GB: 'United Kingdom', // safe
    UM: 'United States Minor Outlying Islands', // safe
    US: 'United States of America', // safe
    UY: 'Uruguay', // safe
    UZ: 'Uzbekistan', // safe
    VU: 'Vanuatu', // safe
    VE: 'Venezuela (Bolivarian Republic of)', // safe
    VN: 'Viet Nam', // safe
    VG: 'Virgin Islands (British)', // safe
    VI: 'Virgin Islands (U.S.)', // safe
    WF: 'Wallis and Futuna', // safe
    EH: 'Western Sahara*', // safe
    YE: 'Yemen', // safe
    ZM: 'Zambia', // safe
    ZW: 'Zimbabwe', // safe
    AX: 'Åland Islands' // safe
  },
  honorifics: {
    mr: 'm',
    ms: 'SP',
    miss: 'Mademoiselle',
    mrs: 'Mme',
    mx: 'Mx',
    master: 'Maître',
    dir: 'Monsieur',
    madam: 'Madame',
    dame: 'Dame',
    lord: 'Seigneur',
    lady: 'Dame',
    viscount: 'Vicomte',
    dr: 'Dr',
    prof: 'Prof',
    br: 'Br',
    sr: 'Sr',
    fr: 'Fr',
    rev: 'Tour',
    pr: 'Pr',
    elder: 'Aîné',
  }
};
