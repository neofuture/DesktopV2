import {LanguageModel} from '../language-model';

export const langNo: LanguageModel = {
  product: 'Desktop V2', // safe
  company: 'Oceanworks', // safe
  desktop: {
    ribbon: {
      contacts: 'Kontakt',
      settings: 'innstillinger',
      someLongerText: 'Noe lengre tekst',
      catalogues: 'kataloger',
      multiSelect: 'Flervalg',
      ghost: 'Spøkelse',
      planMode1: 'Planmodus 1',
      planMode2: 'Planmodus 2',
      planMode3: 'Planmodus 3',
      planMode4: 'Planmodus 4',
      deleteRecord: 'Slett posten',
      saveRecord: 'Lagre post',
      addRecord: 'Legg til post',
      sendEmail: 'Send e-post',
      editSettings: 'Endre innstillinger',
      cancelAddingRecord: 'Avbryt legge til ny post',
      discardChanges: 'Forkaste endringer',
      notesAndHistory: 'Notater og historie',
      supportTickets: 'Støttebilletter',
      accounts: 'Kontoer',
      contactProfile: 'Kontaktprofil',
      documentsAndFiles: 'Dokumenter og filer',
    },
    menu: {
      menu1: 'Meny 1',
      menu2: 'Meny 2',
      menu3: 'Meny 3',
      menu4: 'Meny 4',
    },
    window: {
      close: 'Lukk',
      minimise: 'Minimer',
      maximise: 'Maksimer',
      centre: 'Senter',
      restore: 'Restaurere',
      loading: 'Laster',
      dockTop: 'Dock Top',
      dockRight: 'Dock Right',
      dockBottom: 'Dock-bunn',
      dockLeft: 'Dock til venstre',
      dockTopLeft: 'Dock øverst til venstre',
      dockTopRight: 'Dock øverst til høyre',
      dockBottomLeft: 'Dock nederst til venstre',
      dockBottomRight: 'Dock nede til høyre',
      unDockWindow: 'Lås opp vinduet',
      moveWindow: 'Flytt vindu',
      top: 'Topp',
      width: 'Bredde',
      left: 'Venstre',
      height: 'Høyde',
      login: 'Logg Inn',
      newWindow: 'Nytt vindu',
      profile: 'Profil',
      setDockPosition: 'Still inn dockposisjon',
      unsaved: 'ufrelste',
      placeInPanel: 'Plasser i panelet',
      removeFromPanel: 'Fjern fra panelet',
      about: 'Om',
      demo: 'Demo',
      demo1: 'Demo One',
      demo2: 'Demo To',
      demo3: 'Demo Three',
      demo4: 'Demo Fire',
      contactManager: 'Kontakt leder',
      addHistory: 'Legg til historie',
      addSupportTicket: 'Legg til supportbillett',
      editSettings: 'Endre innstillinger',
      search: 'Søk',
      editCategoryItem: 'Rediger kategorielement',
      editGroupItem: 'Rediger gruppeelement',
      editStatusItem: 'Rediger statuselement',
      editTypeItem: 'Rediger typeelement',
      addCategoryItem: 'Legg til kategorielement',
      addGroupItem: 'Legg til gruppeelement',
      addStatusItem: 'Legg til statuselement',
      addTypeItem: 'Legg til typeelement',
      notesHistory: 'Notater og historie',
      supportTickets: 'Støttebilletter',
    },
    panel: {
      close: 'Lukk',
      dockTop: 'Dock Top',
      dockRight: 'Dock Right',
      dockBottom: 'Dock-bunn',
      dockLeft: 'Dock til venstre',
      dockTopLeft: 'Dock øverst til venstre',
      dockTopRight: 'Dock øverst til høyre',
      dockBottomLeft: 'Dock nederst til venstre',
      dockBottomRight: 'Dock nede til høyre',
      unDockPanel: 'Lås opp panelet',
      moveWindow: 'Flytt vindu',
      top: 'Topp',
      width: 'Bredde',
      left: 'Venstre',
      height: 'Høyde',
      setDockPosition: 'Still inn dockposisjon',
      system: 'System',
    },
    toast: {
      close: 'Lukk',
      dismiss: 'Avskjedige',
      success: 'Suksess',
      warning: 'Advarsel',
      information: 'Informasjon',
      error: 'Feil',
      loginSuccessful: 'Vellykket innlogging',
      logoutSuccessful: 'Logg ut vellykket',
      loginFailed: 'Innlogging feilet',
    },
    dialog: {
      ok: 'OK',
      cancel: 'Avbryt',
      close: 'Lukk',
      yes: 'Ja',
      no: 'Nei',
      agree: 'Bli enige',
      disagree: 'Være uenig',
      decline: 'Avslå',
      closeWindow: 'Lukk vindu',
      youHaveUnsavedContentAreYouSureYouWantToCloseThisWindow: 'Du har ikke lagret innhold. <br><br> Er du sikker på at du vil lukke dette vinduet?',
      newPanel: 'Nytt panel',
      pleaseSpecifyYourPanelName: 'Vennligst spesifiser panelnavnet',
      panelName: 'Panelnavn',
      left: 'Venstre',
      width: 'Bredde',
      createPanel: 'Lag panel',
      closePanel: 'Lukk panelet',
      doYouWantToCloseTheWindows: 'Vil du lukke vinduene?',
      keepWindows: 'Hold Windows',
      closeWindows: 'Lukk Windows',
      discardChanges: 'Forkaste endringer',
      areYouSureYouWishToDiscardYourChanges: 'Er du sikker på at du vil forkaste endringene?',
      discard: 'Kast',
      deleteRecord: 'Slett posten',
      areYouSureYouWishToDeleteThisRecord: 'Er du sikker på at du vil slette denne posten?',
      delete: 'Slett',
    },
    tabBar: {
      autoHide: 'Skjul automatisk',
    },
    newWindow: 'Nytt vindu',
    loading: 'Laster inn ...',
  },
  components: {
    languageSelector: {
      language: 'langNo',
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
      settings: 'innstillinger',
      ribbonSize: 'Båndstørrelse',
      tabBarAutoHide: 'Tabbelinje automatisk skjul',
      small: 'Liten',
      large: 'Stor',
    },
    videoPlayer: {
      play: 'Spille',
      pause: 'Pause',
      volume: 'Volum',
      fullScreen: 'Bytt til fullskjerm',
      exitFullScreen: 'Gå ut av fullskjerm',
      skipBack: 'Hopp tilbake',
      skipForward: 'Hopp fremover',
      mute: 'Stum',
      unMute: 'Un-Mute',
      pictureInPicture: 'Vis bilde i bilde',
      errorLoadingVideo: 'Feil ved lasting av video',
      restart: 'Start videoen på nytt',
      settings: 'innstillinger',
    }
  },
  system: {
    example: {
      test: 'Tester OK',
    },
    engine: {},
    userLogin: {
      username: 'Brukernavn',
      password: 'Passord',
      login: 'Logg Inn',
      pleaseWaitLoggingIn: 'Vennligst vent...',
    },
    userMenu: {
      profile: 'Profil',
      logout: 'Logg ut',
    },
    splash: {
      close: 'Lukk',
      autoCloseIn: 'Lukk automatisk inn',
    },
    about: {
      close: 'Lukk',
    }
  },
  contactManager: {
    noRecordsFound: 'Ingen opptak funnet',
    recordChanged: '*** Record Endret ***',
    addingNewRecord: '*** Ny rekord ***',
    ofCount: 'av [COUNT]',
    editSettings: 'Endre innstillinger',
    pleaseSelect: 'Vennligst velg',
    advancedSearch: 'Avansert søk',
    switchView: 'Bytt visning',
    name: 'Navn',
    forename: 'Fornavn',
    surname: 'Etternavn',
    address: 'Adresse',
    town: 'By / by',
    county: 'fylke',
    postcode: 'Postnummer',
    lookup: 'Se opp',
    country: 'Land',
    jobTitle: 'Jobbtittel',
    department: 'Avdeling',
    work: 'Arbeid',
    fax: 'Faks',
    mobile: 'Mobil',
    email: 'E-post',
    group: 'Gruppe',
    category: 'Kategori',
    updateRecord: 'Oppdater Record',
    newRecord: 'Ny rekord',
    deleteRecord: 'Slett posten',
    created: 'Laget',
    updated: 'Oppdatert',
    lastUpdatedBy: 'Sist oppdatert av',
    lastLogin: 'Siste innlogging',
    start: 'Første plate',
    previous50: 'Tilbake 50 poster',
    previous: 'Forrige post',
    next: 'Neste post',
    next50: 'Frem 50 poster',
    end: 'Siste plate',
    categories: 'Kategorier',
    accountNumber: 'Kontonr',
    company: 'Selskap',
    type: 'Type',
    status: 'Status',
    website: 'Nettsted',
    contactAssociations: 'Kontakt foreninger',
    general: 'Generell',
    authentication: 'Godkjenning',
    otherInfo: 'Annen informasjon',
    companySettings: 'Firmainnstillinger',
    access: 'Adgang',
    username: 'Brukernavn',
    password: 'Passord',
    allowLogin: 'Tillat pålogging',
    notesAndHistory: 'Notater og historie',
    supportTickets: 'Støttebilletter',
    accounts: 'Kontoer',
    contactProfile: 'Kontaktprofil',
    documentsAndFiles: 'Dokumenter og filer',
    searching: 'Søker...',
    selectAddress: 'Velg Adresse',
    addressNotListed: 'Adressen er ikke oppført',
    pleaseWaitLoading: 'Vennligst vent. Laster inn ...',
    readOnly: '*** Skrivebeskyttet ***',
    public: 'Offentlig',
    private: 'Privat',
    addedBy: 'Lagt til av',
    updatedBy: 'Oppdatert av',
    Administrator: 'Administrator',
    Moderator: 'Moderator',
    Manager: 'Fikk til',
    Supervisor: 'Veileder',
    User: 'Bruker',
    None: 'Ingen',
    Opportunity: 'Mulighet',
    Prospect: 'Prospekt',
    'Not Contacted': 'Ikke kontaktet',
    'Appointment Booked': 'Avtale booket',
    '2nd Appointment Booked': '2. avtale bestilt',
    'Awaiting Decision': 'Venter på beslutning',
    Customer: 'Kunde',
    Staff: 'Personale',
    Contacts: 'Kontakt',
    Suppliers: 'Leverandører',
    Live: 'Bo',
    Lead: 'Død',
    contactRecords: 'Kontakt poster',
    companyRecords: 'Firmaposter',
    yourRecordHasBeenSaved: 'Posten din er lagret',
    pleaseEnterALongerSurname: 'Vennligst skriv inn et lengre etternavn',
    pleaseEnterALongerCompanyName: 'Angi et lengre firmanavn',
    pleaseSpecifyUserAuthDetails: 'Vennligst spesifiser brukerautentiseringsdetaljer',
    yourRecordHasBeenDeleted: 'Posten din er slettet',
    notesAndHistoryTab: {
      addNotesOrHistory: 'Legg til notater eller historie',
      addSupportTicket: 'Legg til supportbillett',
      type: 'Type',
      date: 'Dato',
      time: 'Tid',
      contact: 'Ta kontakt med',
      agent: 'Middel',
      popOut: 'Gå ut i et nytt vindu',
      noteComponent: {
        notes: 'Merknader',
        supportCall: 'Støtteanrop',
        openNote: 'Åpne notat',
        openSupportTicket: 'Åpne Support Ticket',
      }
    },
    accountsTab: {
      ok: 'OK',
    },
    contactProfileTab: {
      ok: 'OK',
    },
    documentsAndFilesTab: {
      ok: 'OK',
    },
    settings: {
      categories: 'Kategorier',
      types: 'Typer',
      groups: 'Grupper',
      status: 'Status',
      addNewCategory: 'Legg til ny kategori',
      addNewContactCategory: 'Legg til ny kontaktkategori',
      addNewCompanyCategory: 'Legg til ny firmakategori',
      contactCategories: 'Kontaktkategorier',
      companyCategories: 'Bedriftskategorier',
      addNewStatus: 'Legg til ny status',
      addNewGroup: 'Legg til ny gruppe',
      addNewType: 'Legg til ny type',
      setDefault: 'Sett standard',
      item: {
        cancel: 'Avbryt',
        save: 'Lagre',
        CategoryName: 'kategori navn',
        GroupName: 'Gruppenavn',
        StatusName: 'Statusnavn',
        TypeName: 'Skriv navn',
        backgroundGradientTopColour: 'Bakgrunn Gradient Toppfarge',
        backgroundGradientBottomColour: 'Bakgrunn Gradient Bunnfarge',
        textColour: 'Tekstfarge',
        fieldTooShort: '[FIELD] er for kort. Angi noe lengre enn [LENGTH] tegn',
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
    mr: 'MR',
    ms: 'Fru',
    miss: 'Gå glipp av',
    mrs: 'Fru',
    mx: 'Mx',
    master: 'Herre',
    dir: 'Herr',
    madam: 'Fru',
    dame: 'Dame',
    lord: 'Lord',
    lady: 'dame',
    viscount: 'Viscount',
    dr: 'Dr.',
    prof: 'Prof.',
    br: 'Br',
    sr: 'Sr',
    fr: 'Fr',
    rev: 'Rev.',
    pr: 'Pr',
    elder: 'Eldre',
  }
};
