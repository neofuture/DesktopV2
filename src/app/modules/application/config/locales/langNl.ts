import {LanguageModel} from '../language-model';

export const langNl: LanguageModel = {
  product: 'Desktop V2', // safe
  company: 'Oceanworks', // safe
  desktop: {
    ribbon: {
      contacts: 'Contacten',
      settings: 'Instellingen',
      someLongerText: 'Wat langere tekst',
      catalogues: 'Catalogi',
      multiSelect: 'Multi-Select',
      ghost: 'Geest',
      planMode1: 'Planmodus 1',
      planMode2: 'Planmodus 2',
      planMode3: 'Planmodus 3',
      planMode4: 'Planmodus 4',
      deleteRecord: 'Record verwijderen',
      saveRecord: 'Bewaar record',
      addRecord: 'Record toevoegen',
      sendEmail: 'E-mail verzenden',
      editSettings: 'Instellingen bewerken',
      cancelAddingRecord: 'Annuleer het toevoegen van een nieuw record',
      discardChanges: 'Veranderingen ongedaan maken',
    },
    menu: {
      menu1: 'Menu 1',
      menu2: 'Menu 2',
      menu3: 'Menu 3',
      menu4: 'Menu 4',
    },
    window: {
      close: 'Dichtbij',
      minimise: 'Minimaliseren',
      maximise: 'Maximaliseren',
      centre: 'centrum',
      restore: 'Herstellen',
      loading: 'Bezig met laden',
      dockTop: 'Dock Top',
      dockRight: 'Dock rechts',
      dockBottom: 'Dock Bottom',
      dockLeft: 'Dock links',
      dockTopLeft: 'Dock linksboven',
      dockTopRight: 'Dock rechtsboven',
      dockBottomLeft: 'Dock Linksonder',
      dockBottomRight: 'Dock rechtsonder',
      unDockWindow: 'Venster losmaken',
      moveWindow: 'Venster verplaatsen',
      top: 'Top',
      width: 'Breedte',
      left: 'Links',
      height: 'Hoogte',
      login: 'Log in',
      newWindow: 'Nieuw raam',
      profile: 'Profiel',
      setDockPosition: 'Dockpositie instellen',
      unsaved: 'Niet opgeslagen',
      placeInPanel: 'Plaats in paneel',
      removeFromPanel: 'Verwijderen uit paneel',
      about: 'Over',
      demo: 'Demo',
      demo1: 'Demo een',
      demo2: 'Demo twee',
      demo3: 'Demo drie',
      demo4: 'Demo vier',
      contactManager: 'Neem contact op met Manager',
      addHistory: 'Voeg geschiedenis toe',
      addSupportTicket: 'Voeg ondersteuningsticket toe',
      editSettings: 'Instellingen bewerken',
    },
    panel: {
      close: 'Dichtbij',
      dockTop: 'Dock Top',
      dockRight: 'Dock rechts',
      dockBottom: 'Dock Bottom',
      dockLeft: 'Dock links',
      dockTopLeft: 'Dock linksboven',
      dockTopRight: 'Dock rechtsboven',
      dockBottomLeft: 'Dock Linksonder',
      dockBottomRight: 'Dock rechtsonder',
      unDockPanel: 'Ontkoppel het paneel',
      moveWindow: 'Venster verplaatsen',
      top: 'Top',
      width: 'Breedte',
      left: 'Links',
      height: 'Hoogte',
      setDockPosition: 'Dockpositie instellen',
      system: 'Systeem',
    },
    toast: {
      close: 'Dichtbij',
      dismiss: 'Afwijzen',
      success: 'Succes',
      warning: 'Waarschuwing',
      information: 'Informatie',
      error: 'Fout',
      loginSuccessful: 'Succesvol ingelogd',
      logoutSuccessful: 'Afmelden succesvol',
      loginFailed: 'Aanmelden mislukt',
    },
    dialog: {
      ok: 'OK',
      cancel: 'Annuleer',
      close: 'Dichtbij',
      yes: 'Ja',
      no: 'Nee',
      agree: 'Mee eens',
      disagree: 'Het oneens zijn',
      decline: 'Afwijzen',
      closeWindow: 'Venster sluiten',
      youHaveUnsavedContentAreYouSureYouWantToCloseThisWindow: 'Je hebt niet-opgeslagen inhoud. <br><br> Weet u zeker dat u dit venster wilt sluiten?',
      newPanel: 'Nieuw paneel',
      pleaseSpecifyYourPanelName: 'Geef uw paneelnaam op',
      panelName: 'Paneelnaam',
      left: 'Links',
      width: 'Breedte',
      createPanel: 'Paneel maken',
      closePanel: 'Sluit paneel',
      doYouWantToCloseTheWindows: 'Wilt u de ramen sluiten?',
      keepWindows: 'Windows behouden',
      closeWindows: 'Sluit Windows',
      discardChanges: 'Veranderingen ongedaan maken',
      areYouSureYouWishToDiscardYourChanges: 'Weet u zeker dat u uw wijzigingen wilt annuleren?',
      discard: 'Gooi weg',
      deleteRecord: 'Record verwijderen',
      areYouSureYouWishToDeleteThisRecord: 'Weet u zeker dat u dit record wilt verwijderen?',
      delete: 'Verwijderen',
    },
    tabBar: {
      autoHide: 'Automatisch verbergen',
    },
    newWindow: 'Nieuw raam',
    loading: 'Bezig met laden...',
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
      ribbonSize: 'Lint maat',
      tabBarAutoHide: 'Tabbalk automatisch verbergen',
      small: 'Klein',
      large: 'Groot',
    },
    videoPlayer: {
      play: 'Speel',
      pause: 'Pauze',
      volume: 'Volume',
      fullScreen: 'Overschakelen naar volledig scherm',
      exitFullScreen: 'Verlaat volledig scherm',
      skipBack: 'Terug springen',
      skipForward: 'Spring vooruit',
      mute: 'Dempen',
      unMute: 'Dempen opheffen',
      pictureInPicture: 'Toon afbeelding in afbeelding',
      errorLoadingVideo: 'Fout bij het laden van video',
      restart: 'Start Video opnieuw',
      settings: 'Instellingen',
    }
  },
  system: {
    example: {
      test: 'OK testen',
    },
    engine: {},
    userLogin: {
      username: 'Gebruikersnaam',
      password: 'Wachtwoord',
      login: 'Log in',
      pleaseWaitLoggingIn: 'Wacht alsjeblieft...',
    },
    userMenu: {
      profile: 'Profiel',
      logout: 'Uitloggen',
    },
    splash: {
      close: 'Dichtbij',
      autoCloseIn: 'Auto sluiten in',
    },
    about: {
      close: 'Dichtbij',
    }
  },
  contactManager: {
    noRecordsFound: 'Geen verslagen gevonden',
    recordChanged: '*** Record gewijzigd ***',
    addingNewRecord: '*** Nieuw record ***',
    ofCount: 'van [COUNT]',
    staff: 'Personeel',
    customers: 'Klanten',
    contacts: 'Contacten',
    suppliers: 'Leveranciers',
    editSettings: 'Instellingen bewerken',
    pleaseSelect: 'Selecteer alstublieft',
    advancedSearch: 'geavanceerd zoeken',
    switchView: 'Schakel weergave',
    title: 'Titel',
    forename: 'Voornaam',
    surname: 'Achternaam',
    address: 'Adres',
    town: 'Stad / stad',
    county: 'Provincie',
    postcode: 'Postcode',
    lookup: 'Opzoeken',
    country: 'Land',
    notes: 'Opmerkingen',
    jobTitle: 'Functietitel',
    department: 'afdeling',
    work: 'Werk',
    fax: 'Fax',
    mobile: 'Mobiel',
    email: 'E-mail',
    group: 'Groep',
    category: 'Categorie',
    updateRecord: 'Update Record',
    newRecord: 'Nieuw record',
    deleteRecord: 'Record verwijderen',
    created: 'Gemaakt',
    updated: 'Bijgewerkt',
    lastUpdatedBy: 'Laatst bijgewerkt door',
    lastLogin: 'Laatste aanmelding',
    start: 'Eerste record',
    previous50: 'Terug 50 records',
    previous: 'Vorig record',
    next: 'Volgende record',
    next50: '50 records doorsturen',
    end: 'Laatste record',
    categories: 'Categorieën',
    accountNumber: 'Account nummer',
    company: 'Bedrijf',
    division: 'Divisie',
    type: 'Type',
    status: 'Toestand',
    website: 'Website',
    contactAssociations: 'Neem contact op met verenigingen',
    general: 'Algemeen',
    authentication: 'Authenticatie',
    otherInfo: 'Andere informatie',
    companySettings: 'Bedrijfsinstellingen',
    access: 'Toegang',
    username: 'Gebruikersnaam',
    password: 'Wachtwoord',
    allowLogin: 'Sta Inloggen toe',
    notesAndHistory: 'Aantekeningen en geschiedenis',
    supportTickets: 'Ondersteuningstickets',
    accounts: 'Accounts',
    contactProfile: 'Contact Profiel',
    documentsAndFiles: 'Documenten en bestanden',
    searching: 'Zoeken...',
    selectAddress: 'Selecteer adres',
    addressNotListed: 'Adres niet vermeld',
    pleaseWaitLoading: 'Even geduld aub. Bezig met laden...',
    Administrator: 'Beheerder',
    Moderator: 'Moderator',
    Manager: 'Beheerd',
    Supervisor: 'Leidinggevende',
    User: 'Gebruiker',
    'No Status': 'Geen status',
    Opportunity: 'Kans',
    Prospect: 'Vooruitzicht',
    'Not Contacted': 'Geen contact opgenomen',
    'Appointment Booked': 'Afspraak geboekt',
    '2nd Appointment Booked': '2e afspraak geboekt',
    'Awaiting Decision': 'In afwachting van een beslissing',
    Customer: 'Klant',
    Live: 'Leven',
    Lead: 'Dood',
    notesHistory: {
      addNotesOrHistory: 'Voeg notities of geschiedenis toe',
      addSupportTicket: 'Voeg ondersteuningsticket toe',
    }
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
    mr: 'Dhr',
    ms: 'Mevrouw',
    miss: 'Mevrouw',
    mrs: 'Mvr',
    mx: 'Mx',
    master: 'Meester',
    dir: 'Meneer',
    madam: 'Mevrouw',
    dame: 'Dame',
    lord: 'Heer',
    lady: 'Dame',
    viscount: 'Burggraaf',
    dr: 'Dr.',
    prof: 'Prof.',
    br: 'Br',
    sr: 'Sr',
    fr: 'Vr',
    rev: 'Rev',
    pr: 'Pr',
    elder: 'Ouderling',
  }
};
