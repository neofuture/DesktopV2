import {LanguageModel} from '../language-model';

export const langFi: LanguageModel = {
  product: 'Desktop V2', // safe
  company: 'Oceanworks', // safe
  desktop: {
    ribbon: {
      contacts: 'Yhteydet',
      settings: 'asetukset',
      someLongerText: 'Jotakin pidempää tekstiä',
      catalogues: 'luettelot',
      multiSelect: 'Monivalinta',
      ghost: 'Aave',
      planMode1: 'Suunnittelutila 1',
      planMode2: 'Suunnittelutila 2',
      planMode3: 'Suunnittelutila 3',
      planMode4: 'Suunnittelutila 4',
      deleteRecord: 'Poista tietue',
      saveRecord: 'Tallenna tietue',
      addRecord: 'Lisää tietue',
      sendEmail: 'Lähettää sähköpostia',
      editSettings: 'Muokkaa asetuksia',
      cancelAddingRecord: 'Peruuta uuden tietueen lisääminen',
      discardChanges: 'Hylkää muutokset',
    },
    menu: {
      menu1: 'Valikko 1',
      menu2: 'Valikko 2',
      menu3: 'Valikko 3',
      menu4: 'Valikko 4',
    },
    window: {
      close: 'kiinni',
      minimise: 'Minimoida',
      maximise: 'Maksimoida',
      centre: 'Keskusta',
      restore: 'Palauttaa',
      loading: 'Ladataan',
      dockTop: 'Telakan yläosa',
      dockRight: 'Telakka oikealle',
      dockBottom: 'Telakointi pohjaan',
      dockLeft: 'Telakka vasen',
      dockTopLeft: 'Telakan yläosa vasemmalle',
      dockTopRight: 'Telakka ylhäällä oikealla',
      dockBottomLeft: 'Telakointi alhaalta vasen',
      dockBottomRight: 'Telakointi alhaalta oikealle',
      unDockWindow: 'Poista ikkuna',
      moveWindow: 'Siirrä ikkuna',
      top: 'ylin',
      width: 'Leveys',
      left: 'Vasen',
      height: 'Korkeus',
      login: 'Kirjaudu sisään',
      newWindow: 'Uusi ikkuna',
      profile: 'Profiili',
      setDockPosition: 'Aseta telakan sijainti',
      unsaved: 'Tallentamaton',
      placeInPanel: 'Aseta paneeliin',
      removeFromPanel: 'Poista paneelista',
      about: 'Noin',
      demo: 'esittely',
      demo1: 'Esittely',
      demo2: 'Esittely Kaksi',
      demo3: 'Esittelykolmi',
      demo4: 'Demo Neljä',
      contactManager: 'Ota yhteyttä johtajaan',
      addHistory: 'Lisää historia',
      addSupportTicket: 'Lisää tukilippu',
      editSettings: 'Muokkaa asetuksia',
    },
    panel: {
      close: 'kiinni',
      dockTop: 'Telakan yläosa',
      dockRight: 'Telakka oikealle',
      dockBottom: 'Telakointi pohjaan',
      dockLeft: 'Telakka vasen',
      dockTopLeft: 'Telakan yläosa vasemmalle',
      dockTopRight: 'Telakka ylhäällä oikealla',
      dockBottomLeft: 'Telakointi alhaalta vasen',
      dockBottomRight: 'Telakointi alhaalta oikealle',
      unDockPanel: 'Poista paneeli',
      moveWindow: 'Siirrä ikkuna',
      top: 'ylin',
      width: 'Leveys',
      left: 'Vasen',
      height: 'Korkeus',
      setDockPosition: 'Aseta telakan sijainti',
      system: 'Järjestelmä',
    },
    toast: {
      close: 'kiinni',
      dismiss: 'erottaa',
      success: 'Menestys',
      warning: 'Varoitus',
      information: 'Tiedot',
      error: 'Virhe',
      loginSuccessful: 'Kirjautuminen onnistui',
      logoutSuccessful: 'Uloskirjautuminen onnistui',
      loginFailed: 'Kirjautuminen epäonnistui',
    },
    dialog: {
      ok: 'kunnossa',
      cancel: 'Peruuttaa',
      close: 'kiinni',
      yes: 'Joo',
      no: 'Ei',
      agree: 'Olla samaa mieltä',
      disagree: 'olla eri mieltä',
      decline: 'aleneminen',
      closeWindow: 'Sulje ikkuna',
      youHaveUnsavedContentAreYouSureYouWantToCloseThisWindow: 'Sinulla on tallentamatonta sisältöä. <br><br> Haluatko varmasti sulkea tämän ikkunan?',
      newPanel: 'Uusi paneeli',
      pleaseSpecifyYourPanelName: 'Määritä paneelisi nimi',
      panelName: 'Paneelin nimi',
      left: 'Vasen',
      width: 'Leveys',
      createPanel: 'Luo paneeli',
      closePanel: 'Sulje paneeli',
      doYouWantToCloseTheWindows: 'Haluatko sulkea ikkunat?',
      keepWindows: 'Pidä Windows',
      closeWindows: 'Sulje Windows',
      discardChanges: 'Hylkää muutokset',
      areYouSureYouWishToDiscardYourChanges: 'Haluatko varmasti hylätä muutokset?',
      discard: 'Hylkää',
      deleteRecord: 'Poista tietue',
      areYouSureYouWishToDeleteThisRecord: 'Haluatko varmasti poistaa tämän tietueen?',
      delete: 'Poistaa',
    },
    tabBar: {
      autoHide: 'Automaattinen piilotus',
    },
    newWindow: 'Uusi ikkuna',
    loading: 'Ladataan...',
  },
  components: {
    languageSelector: {
      language: 'langFi',
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
      settings: 'asetukset',
      ribbonSize: 'Nauhan koko',
      tabBarAutoHide: 'Välilehtipalkin automaattinen piilotus',
      small: 'Pieni',
      large: 'Suuri',
    },
    videoPlayer: {
      play: 'pelata',
      pause: 'Tauko',
      volume: 'tilavuus',
      fullScreen: 'Vaihda koko näytölle',
      exitFullScreen: 'Poistu koko näytöstä',
      skipBack: 'Hyppää takaisin',
      skipForward: 'Ohita eteenpäin',
      mute: 'mykkä',
      unMute: 'Mykistyksen',
      pictureInPicture: 'Näytä kuva kuvassa',
      errorLoadingVideo: 'Virhe videon lataamisessa',
      restart: 'Käynnistä video uudelleen',
      settings: 'asetukset',
    }
  },
  system: {
    example: {
      test: 'Testaus OK',
    },
    engine: {},
    userLogin: {
      username: 'Käyttäjätunnus',
      password: 'Salasana',
      login: 'Kirjaudu sisään',
      pleaseWaitLoggingIn: 'Odota...',
    },
    userMenu: {
      profile: 'Profiili',
      logout: 'Kirjautua ulos',
    },
    splash: {
      close: 'kiinni',
      autoCloseIn: 'Automaattinen sulkeminen sisään',
    },
    about: {
      close: 'kiinni',
    }
  },
  contactManager: {
    noRecordsFound: 'Merkintöjä ei löydy',
    recordChanged: '*** Tietue muutettu ***',
    addingNewRecord: '*** Uusi ennätys ***',
    ofCount: '/ [COUNT]',
    staff: 'Henkilökunta',
    customers: 'Asiakkaat',
    contacts: 'Yhteydet',
    suppliers: 'Toimittajat',
    editSettings: 'Muokkaa asetuksia',
    pleaseSelect: 'Ole hyvä ja valitse',
    advancedSearch: 'Tarkennettu Haku',
    switchView: 'Vaihda näkymää',
    title: 'Otsikko',
    forename: 'Etunimi',
    surname: 'Sukunimi',
    address: 'Osoite',
    town: 'Kaupunki kaupunki',
    county: 'Lääni',
    postcode: 'Postinumero',
    lookup: 'Katso ylös',
    country: 'Maa',
    notes: 'Huomautuksia',
    jobTitle: 'Työnimike',
    department: 'Osasto',
    work: 'Tehdä työtä',
    fax: 'Faksi',
    mobile: 'Matkapuhelin',
    email: 'Sähköposti',
    group: 'Ryhmä',
    category: 'Kategoria',
    updateRecord: 'Päivitä tietue',
    newRecord: 'Uusi ennätys',
    deleteRecord: 'Poista tietue',
    created: 'Luotu',
    updated: 'Päivitetty',
    lastUpdatedBy: 'Viimeksi päivittänyt',
    lastLogin: 'Viimeinen kirjautuminen',
    start: 'Ensimmäinen levy',
    previous50: 'Takaisin 50 levyä',
    previous: 'Edellinen tietue',
    next: 'Seuraava ennätys',
    next50: 'Välitä edelleen 50 tietuetta',
    end: 'Viimeinen ennätys',
    categories: 'Luokat',
    accountNumber: 'Tilinumero',
    company: 'Yhtiö',
    division: 'Divisioona',
    type: 'Tyyppi',
    status: 'Tila',
    website: 'Verkkosivusto',
    contactAssociations: 'Ota yhteyttä yhdistyksiin',
    general: 'Kenraali',
    authentication: 'Todennus',
    otherInfo: 'Muita tietoja',
    companySettings: 'Yrityksen asetukset',
    access: 'Pääsy',
    username: 'Käyttäjätunnus',
    password: 'Salasana',
    allowLogin: 'Salli sisäänkirjautuminen',
    notesAndHistory: 'Muistiinpanot ja historia',
    supportTickets: 'Tukiliput',
    accounts: 'Tilit',
    contactProfile: 'Yhteysprofiili',
    documentsAndFiles: 'Asiakirjat ja tiedostot',
    searching: 'Etsitään ...',
    selectAddress: 'Valitse Osoite',
    addressNotListed: 'Osoitetta ei ole lueteltu',
    pleaseWaitLoading: 'Odota. Ladataan...',
    Administrator: 'Järjestelmänvalvoja',
    Moderator: 'Moderaattori',
    Manager: 'Hallinnoitu',
    Supervisor: 'Valvoja',
    User: 'Käyttäjä',
    'No Status': 'Ei statusta',
    Opportunity: 'Tilaisuus',
    Prospect: 'Näkymä',
    'Not Contacted': 'Ei yhteyttä',
    'Appointment Booked': 'Nimitys varattu',
    '2nd Appointment Booked': '2. nimitys varattu',
    'Awaiting Decision': 'Odotetaan päätöstä',
    Customer: 'Asiakas',
    Live: 'Elää',
    Lead: 'Kuollut',
    notesHistory: {
      addNotesOrHistory: 'Lisää muistiinpanoja tai historiaa',
      addSupportTicket: 'Lisää tukilippu',
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
    mr: 'Herra',
    ms: 'neiti',
    miss: 'Neiti',
    mrs: 'rouva',
    mx: 'Mx',
    master: 'Hallita',
    dir: 'hyvä herra',
    madam: 'Rouva',
    dame: 'Dame',
    lord: 'Herra',
    lady: 'Nainen',
    viscount: 'Varakreivi',
    dr: 'DR',
    prof: 'Prof.',
    br: 'Br',
    sr: 'Sr',
    fr: 'Fr',
    rev: 'Rev',
    pr: 'PR',
    elder: 'Vanhin',
  }
};
