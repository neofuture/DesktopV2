import {LanguageModel} from '../language-model';

export const langSv: LanguageModel = {
  product: 'Desktop V2', // safe
  company: 'Oceanworks', // safe
  desktop: {
    ribbon: {
      contacts: 'Kontakter',
      settings: 'inställningar',
      someLongerText: 'Lite längre text',
      catalogues: 'kataloger',
      multiSelect: 'Flera val',
      ghost: 'Spöke',
      planMode1: 'Planläge 1',
      planMode2: 'Planläge 2',
      planMode3: 'Planläge 3',
      planMode4: 'Planläge 4',
      deleteRecord: 'Radera post',
      saveRecord: 'Spara post',
      addRecord: 'Lägg till post',
      sendEmail: 'Skicka epost',
      editSettings: 'Ändra inställningar',
      cancelAddingRecord: 'Avbryt Lägga till ny post',
      discardChanges: 'Ignorera ändringar',
      notesAndHistory: 'Anteckningar och historia',
      supportTickets: 'Supportbiljetter',
      accounts: 'Konton',
      contactProfile: 'Kontakta profil',
      documentsAndFiles: 'Dokument och filer',
    },
    menu: {
      menu1: 'Meny 1',
      menu2: 'Meny 2',
      menu3: 'Meny 3',
      menu4: 'Meny 4',
    },
    window: {
      close: 'Stänga',
      minimise: 'Minimera',
      maximise: 'Maximera',
      centre: 'Centrum',
      restore: 'Återställ',
      loading: 'Läser in',
      dockTop: 'Docktopp',
      dockRight: 'Dock rätt',
      dockBottom: 'Dockbotten',
      dockLeft: 'Dock vänster',
      dockTopLeft: 'Dock upp till vänster',
      dockTopRight: 'Dock upp till höger',
      dockBottomLeft: 'Dock nederst till vänster',
      dockBottomRight: 'Dock nederst till höger',
      unDockWindow: 'Lossa fönstret',
      moveWindow: 'Flytta fönster',
      top: 'Topp',
      width: 'Bredd',
      left: 'Vänster',
      height: 'Höjd',
      login: 'Logga in',
      newWindow: 'Nytt fönster',
      profile: 'Profil',
      setDockPosition: 'Ställ in dockposition',
      unsaved: 'som inte har sparats',
      placeInPanel: 'Placera i panelen',
      removeFromPanel: 'Ta bort från panelen',
      about: 'Handla om',
      demo: 'demo',
      demo1: 'Demo One',
      demo2: 'Demo två',
      demo3: 'Demo tre',
      demo4: 'Demo Four',
      contactManager: 'Kontakta chef',
      addHistory: 'Lägg till historik',
      addSupportTicket: 'Lägg till supportbiljett',
      editSettings: 'Ändra inställningar',
      search: 'Sök',
      editCategoryItem: 'Redigera kategoriobjekt',
      editGroupItem: 'Redigera gruppobjekt',
      editStatusItem: 'Redigera statusobjekt',
      editTypeItem: 'Redigera typobjekt',
      addCategoryItem: 'Lägg till kategoriobjekt',
      addGroupItem: 'Lägg till gruppobjekt',
      addStatusItem: 'Lägg till statusobjekt',
      addTypeItem: 'Lägg till typobjekt',
      notesHistory: 'Anteckningar och historia',
      supportTickets: 'Supportbiljetter',
    },
    panel: {
      close: 'Stänga',
      dockTop: 'Docktopp',
      dockRight: 'Dock rätt',
      dockBottom: 'Dockbotten',
      dockLeft: 'Dock vänster',
      dockTopLeft: 'Dock upp till vänster',
      dockTopRight: 'Dock upp till höger',
      dockBottomLeft: 'Dock nederst till vänster',
      dockBottomRight: 'Dock nederst till höger',
      unDockPanel: 'Lossa upp panelen',
      moveWindow: 'Flytta fönster',
      top: 'Topp',
      width: 'Bredd',
      left: 'Vänster',
      height: 'Höjd',
      setDockPosition: 'Ställ in dockposition',
      system: 'Systemet',
    },
    toast: {
      close: 'Stänga',
      dismiss: 'Avfärda',
      success: 'Framgång',
      warning: 'Varning',
      information: 'Information',
      error: 'Fel',
      loginSuccessful: 'Inloggningen lyckades',
      logoutSuccessful: 'Logga ut framgångsrikt',
      loginFailed: 'Inloggningen misslyckades',
    },
    dialog: {
      ok: 'OK',
      cancel: 'Annullera',
      close: 'Stänga',
      yes: 'Ja',
      no: 'Nej',
      agree: 'Hålla med',
      disagree: 'Instämmer inte alls',
      decline: 'Nedgång',
      closeWindow: 'Stäng fönstret',
      youHaveUnsavedContentAreYouSureYouWantToCloseThisWindow: 'Du har osparat innehåll. <br><br> Är du säker på att du vill stänga det här fönstret?',
      newPanel: 'Ny panel',
      pleaseSpecifyYourPanelName: 'Vänligen ange ditt panelnamn',
      panelName: 'Panelnamn',
      left: 'Vänster',
      width: 'Bredd',
      createPanel: 'Skapa panel',
      closePanel: 'Stäng panelen',
      doYouWantToCloseTheWindows: 'Vill du stänga fönstren?',
      keepWindows: 'Håll Windows',
      closeWindows: 'Stäng Windows',
      discardChanges: 'Ignorera ändringar',
      areYouSureYouWishToDiscardYourChanges: 'Är du säker på att du vill kassera dina ändringar?',
      discard: 'Kassera',
      deleteRecord: 'Radera post',
      areYouSureYouWishToDeleteThisRecord: 'Är du säker på att du vill ta bort den här posten?',
      delete: 'Radera',
    },
    tabBar: {
      autoHide: 'Auto Dölj',
    },
    newWindow: 'Nytt fönster',
    loading: 'Läser in...',
  },
  components: {
    languageSelector: {
      language: 'langSv',
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
      settings: 'inställningar',
      ribbonSize: 'Bandstorlek',
      tabBarAutoHide: 'Tabbfältet auto dölj',
      small: 'Små',
      large: 'Stor',
    },
    videoPlayer: {
      play: 'Spela',
      pause: 'Paus',
      volume: 'Volym',
      fullScreen: 'Byt till helskärm',
      exitFullScreen: 'Avsluta helskärm',
      skipBack: 'Hoppa tillbaka',
      skipForward: 'Hoppa framåt',
      mute: 'Stum',
      unMute: 'Un-Mute',
      pictureInPicture: 'Visa bild i bild',
      errorLoadingVideo: 'Fel vid inläsning av video',
      restart: 'Starta om videon',
      settings: 'inställningar',
    }
  },
  system: {
    example: {
      test: 'Testa OK',
    },
    engine: {},
    userLogin: {
      username: 'Användarnamn',
      password: 'Lösenord',
      login: 'Logga in',
      pleaseWaitLoggingIn: 'Vänta...',
    },
    userMenu: {
      profile: 'Profil',
      logout: 'Logga ut',
    },
    splash: {
      close: 'Stänga',
      autoCloseIn: 'Stäng automatiskt',
    },
    about: {
      close: 'Stänga',
    }
  },
  contactManager: {
    noRecordsFound: 'Inga uppgifter funna',
    recordChanged: '*** Record Changed ***',
    addingNewRecord: '*** Nytt rekord ***',
    ofCount: 'av [COUNT]',
    editSettings: 'Ändra inställningar',
    pleaseSelect: 'Vänligen välj',
    advancedSearch: 'avancerad sökning',
    switchView: 'Byt vy',
    name: 'namn',
    forename: 'Fornamn',
    surname: 'Efternamn',
    address: 'Adress',
    town: 'Stad / stad',
    county: 'Grevskap',
    postcode: 'Postnummer',
    lookup: 'Slå upp',
    country: 'Land',
    jobTitle: 'Jobbtitel',
    department: 'Avdelning',
    work: 'Arbete',
    fax: 'Fax',
    mobile: 'Mobil',
    email: 'E-post',
    group: 'Grupp',
    category: 'Kategori',
    updateRecord: 'Uppdatera post',
    newRecord: 'Nytt rekord',
    deleteRecord: 'Radera post',
    created: 'Skapad',
    updated: 'Uppdaterad',
    lastUpdatedBy: 'Senast uppdaterad av',
    lastLogin: 'Senaste inloggning',
    start: 'Första skivan',
    previous50: 'Tillbaka 50 poster',
    previous: 'Tidigare post',
    next: 'Nästa post',
    next50: 'Vidarebefordra 50 poster',
    end: 'Senaste rekord',
    categories: 'Kategorier',
    accountNumber: 'Konto Nej',
    company: 'Företag',
    type: 'Typ',
    status: 'Status',
    website: 'Hemsida',
    contactAssociations: 'Kontakta föreningar',
    general: 'Allmän',
    authentication: 'Autentisering',
    otherInfo: 'Annan information',
    companySettings: 'Företagsinställningar',
    access: 'Tillgång',
    username: 'Användarnamn',
    password: 'Lösenord',
    allowLogin: 'Tillåt inloggning',
    notesAndHistory: 'Anteckningar och historia',
    supportTickets: 'Supportbiljetter',
    accounts: 'Konton',
    contactProfile: 'Kontakta profil',
    documentsAndFiles: 'Dokument och filer',
    searching: 'Sökande...',
    selectAddress: 'Välj Adress',
    addressNotListed: 'Adressen är inte listad',
    pleaseWaitLoading: 'Vänta. Läser in...',
    readOnly: '*** Skrivskyddad ***',
    public: 'offentlig',
    private: 'Privat',
    addedBy: 'Tillagd av',
    updatedBy: 'Uppdaterad av',
    Administrator: 'Administratör',
    Moderator: 'Moderator',
    Manager: 'Hanteras',
    Supervisor: 'Handledare',
    User: 'Användare',
    None: 'Ingen',
    Opportunity: 'Möjlighet',
    Prospect: 'Utsikt',
    'Not Contacted': 'Ej kontaktad',
    'Appointment Booked': 'Möte bokad',
    '2nd Appointment Booked': '2: a mötet bokat',
    'Awaiting Decision': 'Väntar på beslut',
    Customer: 'Kund',
    Staff: 'Personal',
    Contacts: 'Kontakter',
    Suppliers: 'Leverantörer',
    Live: 'leva',
    Lead: 'Död',
    contactRecords: 'Kontakta Records',
    companyRecords: 'Företagsregister',
    yourRecordHasBeenSaved: 'Din post har sparats',
    pleaseEnterALongerSurname: 'Ange ett längre efternamn',
    pleaseEnterALongerCompanyName: 'Ange ett längre företagsnamn',
    pleaseSpecifyUserAuthDetails: 'Ange användarautentiseringsinformation',
    yourRecordHasBeenDeleted: 'Din post har tagits bort',
    notesAndHistoryTab: {
      addNotesOrHistory: 'Lägg till anteckningar eller historik',
      addSupportTicket: 'Lägg till supportbiljett',
      type: 'Typ',
      date: 'Datum',
      time: 'Tid',
      contact: 'Kontakt',
      agent: 'Ombud',
      popOut: 'Pop ut i ett nytt fönster',
      noteComponent: {
        notes: 'Anteckningar',
        supportCall: 'Support samtal',
        openNote: 'Öppna anteckningen',
        openSupportTicket: 'Öppna supportbiljett',
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
      addNewCategory: 'Lägg till ny kategori',
      addNewContactCategory: 'Lägg till ny kontaktkategori',
      addNewCompanyCategory: 'Lägg till ny företagskategori',
      contactCategories: 'Kontaktkategorier',
      companyCategories: 'Företagskategorier',
      addNewStatus: 'Lägg till ny status',
      addNewGroup: 'Lägg till ny grupp',
      addNewType: 'Lägg till ny typ',
      setDefault: 'Sätta som normalt',
      item: {
        cancel: 'Annullera',
        save: 'Spara',
        CategoryName: 'kategori namn',
        GroupName: 'Grupp namn',
        StatusName: 'Statusnamn',
        TypeName: 'Skriv namn',
        backgroundGradientTopColour: 'Bakgrundsgradient Toppfärg',
        backgroundGradientBottomColour: 'Bakgrund tonad bottenfärg',
        textColour: 'Textfärg',
        fieldTooShort: 'din [FIELD] är för kort. Ange något längre än [LENGTH] tecken',
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
    mr: 'herr',
    ms: 'Fröken',
    miss: 'Fröken',
    mrs: 'Fru',
    mx: 'Mx',
    master: 'Bemästra',
    dir: 'herr',
    madam: 'Fröken',
    dame: 'Dame',
    lord: 'herre',
    lady: 'Lady',
    viscount: 'Viscount',
    dr: 'Dr',
    prof: 'Prof.',
    br: 'Br',
    sr: 'Sr',
    fr: 'Fr',
    rev: 'Varv',
    pr: 'Pr',
    elder: 'Äldre',
  }
};
