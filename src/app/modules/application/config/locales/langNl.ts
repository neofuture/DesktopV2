import {LanguageModel} from '../language-model';

export const langNl: LanguageModel = {
  product: 'Xectra', // safe
  company: 'Xectra Digital', // safe
  desktop: {
    ribbon: {
      contacts: 'Contactpersonen',
      settings: 'Instellingen',
      someLongerText: 'Wat langere tekst',
      catalogues: 'Catalogi',
      multiSelect: 'Meerdere selecties',
      ghost: 'Spook',
      planMode1: 'Planmodus 1',
      planMode2: 'Plan modus 2',
      planMode3: 'Planmodus 3',
      planMode4: 'Planmodus 4',
      deleteRecord: 'Record verwijderen',
      saveRecord: 'Record opslaan',
      addRecord: 'Record toevoegen',
      sendEmail: 'E-mail verzenden',
      editSettings: 'Instellingen bewerken',
      cancelAddingRecord: 'Nieuwe record toevoegen annuleren',
      discardChanges: 'Wijzigingen negeren',
      notesAndHistory: 'Notities &amp;Geschiedenis',
      supportTickets: 'Ondersteuningstickets',
      accounts: 'Rekeningen',
      contactProfile: 'Contact Profiel',
      documentsAndFiles: 'Documenten &amp; Bestanden',
    },
    menu: {
      menu1: 'Menukaart 1',
      menu2: 'Menukaart 2',
      menu3: 'Menukaart 3',
      menu4: 'Menukaart 4',
    },
    window: {
      close: 'Sluiten',
      minimise: 'Minimaliseren',
      maximise: 'Maximaliseren',
      centre: 'Middelpunt',
      restore: 'Herstellen',
      loading: 'Laden',
      dockTop: 'Dock Boven',
      dockRight: 'Dock rechts',
      dockBottom: 'Dock Bodem',
      dockLeft: 'Dock links',
      dockTopLeft: 'Dock linksboven',
      dockTopRight: 'Dock rechtsboven',
      dockBottomLeft: 'Dock Linksonder',
      dockBottomRight: 'Dock rechtsonder',
      unDockWindow: 'Loskoppelen venster',
      moveWindow: 'Venster Verplaatsen',
      top: 'Boven',
      width: 'Breedte',
      left: 'Links',
      height: 'Hoogte',
      resetWindowPosition: 'Vensterpositie opnieuw instellen',
      login: 'Inloggen',
      newWindow: 'Nieuw venster',
      profile: 'Profiel',
      setDockPosition: 'Dock-positie instellen',
      unsaved: 'Opgeslagen',
      placeInPanel: 'Plaatsen in paneel',
      removeFromPanel: 'Verwijderen uit paneel',
      about: 'Over',
      demo: 'Demo',
      demo1: 'Demo Een',
      demo2: 'Demo twee',
      demo3: 'Demo Drie',
      demo4: 'Demo Vier',
      contactManager: 'Contact Manager',
      addHistory: 'Geschiedenis toevoegen',
      addSupportTicket: 'Ondersteuningsticket toevoegen',
      editSettings: 'Instellingen bewerken',
      search: 'Zoeken',
      editCategoryItem: 'Rubrieksitem bewerken',
      editGroupItem: 'Groepsitem bewerken',
      editStatusItem: 'Statusitem bewerken',
      editTypeItem: 'Type-item bewerken',
      addCategoryItem: 'Rubrieksitem toevoegen',
      addGroupItem: 'Groepsitem toevoegen',
      addStatusItem: 'Statusitem toevoegen',
      addTypeItem: 'Type-item toevoegen',
      notesHistory: 'Notities &amp;Geschiedenis',
      supportTickets: 'Ondersteuningstickets',
      planner: 'Planner',
    },
    panel: {
      close: 'Sluiten',
      dockTop: 'Dock Boven',
      dockRight: 'Dock rechts',
      dockBottom: 'Dock Bodem',
      dockLeft: 'Dock links',
      dockTopLeft: 'Dock linksboven',
      dockTopRight: 'Dock rechtsboven',
      dockBottomLeft: 'Dock Linksonder',
      dockBottomRight: 'Dock rechtsonder',
      unDockPanel: 'Loskoppel paneel',
      moveWindow: 'Venster Verplaatsen',
      top: 'Boven',
      width: 'Breedte',
      left: 'Links',
      height: 'Hoogte',
      setDockPosition: 'Dock-positie instellen',
      system: 'Systeem',
    },
    toast: {
      close: 'Sluiten',
      dismiss: 'Ontslaan',
      success: 'Succes',
      warning: 'Waarschuwing',
      information: 'Informatie',
      error: 'Fout',
      loginSuccessful: 'Inloggen geslaagd',
      logoutSuccessful: 'Uitloggen geslaagd',
      loginFailed: 'Inloggen mislukt',
    },
    dialog: {
      ok: 'OK',
      cancel: 'Annuleren',
      close: 'Sluiten',
      yes: 'Ja',
      no: 'Nee',
      agree: 'Instemmen',
      disagree: 'Het oneens zijn',
      decline: 'Afnemen',
      closeWindow: 'Venster sluiten',
      youHaveUnsavedContentAreYouSureYouWantToCloseThisWindow: 'Je hebt niet-opgeslagen inhoud. <br><br>Weet u zeker dat u dit venster wilt sluiten?',
      newPanel: 'Nieuw paneel',
      pleaseSpecifyYourPanelName: 'Geef uw paneelnaam op',
      panelName: 'Naam van paneel',
      left: 'Links',
      width: 'Breedte',
      createPanel: 'Deelvenster maken',
      closePanel: 'Paneel sluiten',
      doYouWantToCloseTheWindows: 'Wilt u de ramen sluiten ?',
      keepWindows: 'Windows behouden',
      closeWindows: 'Sluit Windows',
      discardChanges: 'Wijzigingen negeren',
      areYouSureYouWishToDiscardYourChanges: 'Weet u zeker dat u uw wijzigingen wilt weggooien?',
      discard: 'Afdanken',
      deleteRecord: 'Record verwijderen',
      areYouSureYouWishToDeleteThisRecord: 'Weet u zeker dat u dit record wilt verwijderen?',
      delete: 'Verwijderen',
    },
    tabBar: {
      autoHide: 'Automatisch verbergen',
    },
    newWindow: 'Nieuw venster',
    loading: 'Laden...',
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
      ribbonSize: 'Lint grootte',
      tabBarAutoHide: 'Tabbladbalk automatisch verbergen',
      small: 'Klein',
      large: 'Groot',
    },
    videoPlayer: {
      play: 'Spelen',
      pause: 'Pauzeren',
      volume: 'Volume',
      fullScreen: 'Overschakelen naar volledig scherm',
      exitFullScreen: 'Volledig scherm afsluiten',
      skipBack: 'Terugspringen',
      skipForward: 'Vooruitspringen',
      mute: 'Stom',
      unMute: 'Dempen opheffen',
      pictureInPicture: 'Toon afbeelding in afbeelding',
      errorLoadingVideo: 'Fout bij het laden van video',
      restart: 'Video opnieuw starten',
      settings: 'Instellingen',
    }
  },
  system: {
    example: {
      test: 'Testen OK',
    },
    engine: {},
    userLogin: {
      username: 'Gebruikersnaam',
      password: 'Wachtwoord',
      login: 'Inloggen',
      pleaseWaitLoggingIn: 'Een ogenblik geduld...',
    },
    userMenu: {
      profile: 'Profiel',
      logout: 'Logout',
    },
    splash: {
      close: 'Sluiten',
      autoCloseIn: 'Automatisch insluiten',
    },
    about: {
      close: 'Sluiten',
    }
  },
  contactManager: {
    noRecordsFound: 'Geen records gevonden',
    recordChanged: 'Record gewijzigd ***',
    addingNewRecord: 'Nieuw record ***',
    ofCount: 'van [AANTAL]',
    editSettings: 'Instellingen bewerken',
    pleaseSelect: 'Maak een keuze',
    advancedSearch: 'Geavanceerd zoeken',
    switchView: 'Weergave wijzigen',
    name: 'Naam',
    forename: 'Voornaam',
    surname: 'Achternaam',
    address: 'Adres',
    town: 'Plaats',
    county: 'Graafschap',
    postcode: 'Postcode',
    lookup: 'Lookup',
    country: 'Land',
    jobTitle: 'Functie',
    department: 'Departement',
    work: 'Werk',
    fax: 'Fax',
    mobile: 'Mobiel',
    email: 'E-mail',
    group: 'Groep',
    category: 'Categorie',
    updateRecord: 'Record bijwerken',
    newRecord: 'Nieuw record',
    deleteRecord: 'Record verwijderen',
    created: 'Geschapen',
    updated: 'Bijgewerkt',
    lastUpdatedBy: 'Laatst bijgewerkt op',
    lastLogin: 'Laatste login',
    start: 'Eerste plaat',
    previous50: 'Terug 50 Records',
    previous: 'Vorige record',
    next: 'Volgende record',
    next50: '50 records doorsturen',
    end: 'Laatste record',
    categories: 'Categorieën',
    accountNumber: 'Rekeningnummer',
    company: 'Bedrijf',
    type: 'Type',
    status: 'Status',
    website: 'Website',
    contactAssociations: 'Contact Verenigingen',
    general: 'Algemeen',
    authentication: 'Authenticatie',
    otherInfo: 'Overige informatie',
    companySettings: 'Bedrijfsinstellingen',
    access: 'Toegang',
    username: 'Gebruikersnaam',
    password: 'Wachtwoord',
    allowLogin: 'Inloggen toestaan',
    notesAndHistory: 'Notities &amp;Geschiedenis',
    supportTickets: 'Ondersteuningstickets',
    accounts: 'Rekeningen',
    contactProfile: 'Contact Profiel',
    documentsAndFiles: 'Documenten &amp; Bestanden',
    searching: 'Zoeken...',
    selectAddress: 'Selecteer adres',
    addressNotListed: 'Adres niet vermeld',
    pleaseWaitLoading: 'Een ogenblik geduld. Laden...',
    readOnly: 'Alleen-lezen ***',
    public: 'Publiek',
    private: 'Privé',
    addedBy: 'Toegevoegd door',
    updatedBy: 'Bijgewerkt door',
    Administrator: 'Administrateur',
    Moderator: 'Presentator',
    Manager: 'Beheerd',
    Supervisor: 'Opzichter',
    User: 'Gebruiker',
    None: 'Geen',
    Opportunity: 'Gelegenheid',
    Prospect: 'Vooruitzicht',
    'Not Contacted': 'Geen contact opgenomen',
    'Appointment Booked': 'Afspraak geboekt',
    '2nd Appointment Booked': '2e afspraak geboekt',
    'Awaiting Decision': 'In afwachting van een beslissing',
    Customer: 'Klant',
    Staff: 'Staf',
    Contacts: 'Contactpersonen',
    Suppliers: 'Leveranciers',
    Live: 'Wonen',
    Lead: 'Dood',
    contactRecords: 'Records voor contactpersonen',
    companyRecords: 'Bedrijfsrecords',
    yourRecordHasBeenSaved: 'Uw record is opgeslagen',
    pleaseEnterALongerSurname: 'Voer een langere achternaam in',
    pleaseEnterALongerCompanyName: 'Voer een langere bedrijfsnaam in',
    pleaseSpecifyUserAuthDetails: 'Geef gebruikersverificatiegegevens op',
    yourRecordHasBeenDeleted: 'Uw record is verwijderd',
    notesAndHistoryTab: {
      addNotesOrHistory: 'Notities of geschiedenis toevoegen',
      addSupportTicket: 'Ondersteuningsticket toevoegen',
      type: 'Type',
      date: 'Datum',
      time: 'Tijd',
      contact: 'Contact',
      agent: 'Agent',
      popOut: 'Pop-out in een nieuw venster',
      noteComponent: {
        notes: 'Notities',
        supportCall: 'Ondersteuningsoproep',
        openNote: 'Notitie openen',
        openSupportTicket: 'Open supportticket',
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
      categories: 'Categorieën',
      types: 'Typen',
      groups: 'Groepen',
      status: 'Status',
      addNewCategory: 'Nieuwe rubriek toevoegen',
      addNewContactCategory: 'Nieuwe contactcategorie toevoegen',
      addNewCompanyCategory: 'Nieuwe bedrijfscategorie toevoegen',
      contactCategories: 'Contact Categorieën',
      companyCategories: 'Bedrijfscategorieën',
      addNewStatus: 'Nieuwe status toevoegen',
      addNewGroup: 'Nieuwe groep toevoegen',
      addNewType: 'Nieuw type toevoegen',
      setDefault: 'Standaard instellen',
      item: {
        cancel: 'Annuleren',
        save: 'Redden',
        CategoryName: 'Categorie naam',
        GroupName: 'Naam van groep',
        StatusName: 'Status naam',
        TypeName: 'Typenaam',
        backgroundGradientTopColour: 'Achtergrondverloop topkleur',
        backgroundGradientBottomColour: 'Achtergrondverloop onderkleur',
        textColour: 'Tekstkleur',
        fieldTooShort: 'uw [VELD] te kort is, geef iets op dat langer is dan [LENGTE] tekens',
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
    mr: 'Meneer',
    ms: 'Mevrouw',
    miss: 'Missen',
    mrs: 'Mevrouw',
    mx: 'Mx',
    master: 'Meester',
    dir: 'Meneer',
    madam: 'Mevrouw',
    dame: 'Lady',
    lord: 'Heer',
    lady: 'Dame',
    viscount: 'Burggraaf',
    dr: 'Dr',
    prof: 'Prof',
    br: 'Br',
    sr: 'Sr',
    fr: 'Vr',
    rev: 'Rev',
    pr: 'Pr',
    elder: 'Ouder',
  }
};
