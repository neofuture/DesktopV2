import {LanguageModel} from '../language-model';

export const langDe: LanguageModel = {
  product: 'Desktop V2', // safe
  company: 'Oceanworks', // safe
  desktop: {
    ribbon: {
      contacts: 'Kontakte',
      settings: 'die Einstellungen',
      someLongerText: 'Etwas längerer Text',
      catalogues: 'Kataloge',
      multiSelect: 'Mehrfachauswahl',
      ghost: 'Geist',
      planMode1: 'Planungsmodus 1',
      planMode2: 'Planungsmodus 2',
      planMode3: 'Planungsmodus 3',
      planMode4: 'Planungsmodus 4',
      deleteRecord: 'Aufzeichnung löschen',
      saveRecord: 'Datensatz speichern',
      addRecord: 'Datensatz hinzufügen',
      sendEmail: 'E-Mail senden',
      editSettings: 'Einstellungen bearbeiten',
      cancelAddingRecord: 'Abbrechen Hinzufügen eines neuen Datensatzes',
      discardChanges: 'Änderungen verwerfen',
      notesAndHistory: 'Notizen &amp; Geschichte',
      supportTickets: 'Support-Tickets',
      accounts: 'Konten',
      contactProfile: 'Kontaktprofil',
      documentsAndFiles: 'Dokumente &amp; Dateien',
    },
    menu: {
      menu1: 'Menü 1',
      menu2: 'Menü 2',
      menu3: 'Menü 3',
      menu4: 'Menü 4',
    },
    window: {
      close: 'Schließen',
      minimise: 'Minimieren',
      maximise: 'Maximieren',
      centre: 'Center',
      restore: 'Wiederherstellen',
      loading: 'Wird geladen',
      dockTop: 'Dock Top',
      dockRight: 'Dock rechts',
      dockBottom: 'Dock unten',
      dockLeft: 'Dock links',
      dockTopLeft: 'Dock oben links',
      dockTopRight: 'Dock oben rechts',
      dockBottomLeft: 'Dock unten links',
      dockBottomRight: 'Dock unten rechts',
      unDockWindow: 'Fenster abdocken',
      moveWindow: 'Fenster verschieben',
      top: 'oben',
      width: 'Breite',
      left: 'Links',
      height: 'Höhe',
      login: 'Anmeldung',
      newWindow: 'Neues Fenster',
      profile: 'Profil',
      setDockPosition: 'Dockposition einstellen',
      unsaved: 'Nicht gespeichert',
      placeInPanel: 'In die Platte legen',
      removeFromPanel: 'Vom Bedienfeld entfernen',
      about: 'Über',
      demo: 'Demo',
      demo1: 'Demo Eins',
      demo2: 'Demo Zwei',
      demo3: 'Demo Drei',
      demo4: 'Demo Vier',
      contactManager: 'Wenden Sie sich an den Manager',
      addHistory: 'Verlauf hinzufügen',
      addSupportTicket: 'Support-Ticket hinzufügen',
      editSettings: 'Einstellungen bearbeiten',
      search: 'Suche',
      editCategoryItem: 'Kategorieelement bearbeiten',
      editGroupItem: 'Gruppenelement bearbeiten',
      editStatusItem: 'Statuselement bearbeiten',
      editTypeItem: 'Typelement bearbeiten',
      addCategoryItem: 'Kategorieelement hinzufügen',
      addGroupItem: 'Gruppenelement hinzufügen',
      addStatusItem: 'Statuselement hinzufügen',
      addTypeItem: 'Typelement hinzufügen',
      notesHistory: 'Notizen &amp; Geschichte',
      supportTickets: 'Support-Tickets',
    },
    panel: {
      close: 'Schließen',
      dockTop: 'Dock Top',
      dockRight: 'Dock rechts',
      dockBottom: 'Dock unten',
      dockLeft: 'Dock links',
      dockTopLeft: 'Dock oben links',
      dockTopRight: 'Dock oben rechts',
      dockBottomLeft: 'Dock unten links',
      dockBottomRight: 'Dock unten rechts',
      unDockPanel: 'Bedienfeld abdocken',
      moveWindow: 'Fenster verschieben',
      top: 'oben',
      width: 'Breite',
      left: 'Links',
      height: 'Höhe',
      setDockPosition: 'Dockposition einstellen',
      system: 'System',
    },
    toast: {
      close: 'Schließen',
      dismiss: 'Entlassen',
      success: 'Erfolg',
      warning: 'Warnung',
      information: 'Information',
      error: 'Error',
      loginSuccessful: 'Anmeldung erfolgreich',
      logoutSuccessful: 'Abmeldung erfolgreich',
      loginFailed: 'Login fehlgeschlagen',
    },
    dialog: {
      ok: 'OK',
      cancel: 'Stornieren',
      close: 'Schließen',
      yes: 'Ja',
      no: 'Nein',
      agree: 'Zustimmen',
      disagree: 'Nicht zustimmen',
      decline: 'Ablehnen',
      closeWindow: 'Fenster schließen',
      youHaveUnsavedContentAreYouSureYouWantToCloseThisWindow: 'Sie haben nicht gespeicherten Inhalt. <br><br> Möchten Sie dieses Fenster wirklich schließen?',
      newPanel: 'Neues Panel',
      pleaseSpecifyYourPanelName: 'Bitte geben Sie Ihren Panel-Namen an',
      panelName: 'Panel Name',
      left: 'Links',
      width: 'Breite',
      createPanel: 'Panel erstellen',
      closePanel: 'Panel schließen',
      doYouWantToCloseTheWindows: 'Möchten Sie die Fenster schließen?',
      keepWindows: 'Behalten Sie Windows',
      closeWindows: 'Schließen Sie Windows',
      discardChanges: 'Änderungen verwerfen',
      areYouSureYouWishToDiscardYourChanges: 'Möchten Sie Ihre Änderungen wirklich verwerfen?',
      discard: 'Verwerfen',
      deleteRecord: 'Aufzeichnung löschen',
      areYouSureYouWishToDeleteThisRecord: 'Möchten Sie diesen Datensatz wirklich löschen?',
      delete: 'Löschen',
    },
    tabBar: {
      autoHide: 'Automatisch ausblenden',
    },
    newWindow: 'Neues Fenster',
    loading: 'Wird geladen...',
  },
  components: {
    languageSelector: {
      language: 'langDe',
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
      settings: 'die Einstellungen',
      ribbonSize: 'Bandgröße',
      tabBarAutoHide: 'Tab-Leiste automatisch ausblenden',
      small: 'Klein',
      large: 'Groß',
    },
    videoPlayer: {
      play: 'abspielen',
      pause: 'Pause',
      volume: 'Volumen',
      fullScreen: 'Wechseln Sie zum Vollbildmodus',
      exitFullScreen: 'Beenden Sie den Vollbildmodus',
      skipBack: 'Zurück überspringen',
      skipForward: 'Nach vorne spulen',
      mute: 'Stumm',
      unMute: 'Stummschaltung aufheben',
      pictureInPicture: 'Bild in Bild anzeigen',
      errorLoadingVideo: 'Fehler beim Laden des Videos',
      restart: 'Starten Sie das Video neu',
      settings: 'die Einstellungen',
    }
  },
  system: {
    example: {
      test: 'OK testen',
    },
    engine: {},
    userLogin: {
      username: 'Nutzername',
      password: 'Passwort',
      login: 'Anmeldung',
      pleaseWaitLoggingIn: 'Warten Sie mal...',
    },
    userMenu: {
      profile: 'Profil',
      logout: 'Ausloggen',
    },
    splash: {
      close: 'Schließen',
      autoCloseIn: 'Automatisch schließen',
    },
    about: {
      close: 'Schließen',
    }
  },
  contactManager: {
    noRecordsFound: 'Keine Aufzeichnungen gefunden',
    recordChanged: '*** Datensatz geändert ***',
    addingNewRecord: '*** Neuer Eintrag ***',
    ofCount: 'von [COUNT]',
    editSettings: 'Einstellungen bearbeiten',
    pleaseSelect: 'Bitte auswählen',
    advancedSearch: 'Erweiterte Suche',
    switchView: 'Ansicht wechseln',
    name: 'Name',
    forename: 'Vorname',
    surname: 'Nachname',
    address: 'Adresse',
    town: 'Stadt',
    county: 'Bezirk',
    postcode: 'Postleitzahl',
    lookup: 'Nachsehen',
    country: 'Land',
    jobTitle: 'Berufsbezeichnung',
    department: 'Abteilung',
    work: 'Arbeit',
    fax: 'Fax',
    mobile: 'Handy, Mobiltelefon',
    email: 'Email',
    group: 'Gruppe',
    category: 'Kategorie',
    updateRecord: 'Datensatz aktualisieren',
    newRecord: 'Neuer Eintrag',
    deleteRecord: 'Aufzeichnung löschen',
    created: 'Erstellt',
    updated: 'Aktualisiert',
    lastUpdatedBy: 'Zuletzt aktualisiert von',
    lastLogin: 'Letzte Anmeldung',
    start: 'Erste Aufnahme',
    previous50: 'Zurück 50 Datensätze',
    previous: 'Bisherigen Rekord',
    next: 'Nächste Aufzeichnung',
    next50: '50 Datensätze weiterleiten',
    end: 'Letzte Aufzeichnung',
    categories: 'Kategorien',
    accountNumber: 'Konto Nr',
    company: 'Unternehmen',
    type: 'Art',
    status: 'Status',
    website: 'Webseite',
    contactAssociations: 'Kontaktverbände',
    general: 'Allgemeines',
    authentication: 'Authentifizierung',
    otherInfo: 'Andere Informationen',
    companySettings: 'Firmeneinstellungen',
    access: 'Zugriff',
    username: 'Nutzername',
    password: 'Passwort',
    allowLogin: 'Login erlauben',
    notesAndHistory: 'Notizen &amp; Geschichte',
    supportTickets: 'Support-Tickets',
    accounts: 'Konten',
    contactProfile: 'Kontaktprofil',
    documentsAndFiles: 'Dokumente &amp; Dateien',
    searching: 'Suchen ...',
    selectAddress: 'Wählen Sie Adresse',
    addressNotListed: 'Adresse nicht aufgeführt',
    pleaseWaitLoading: 'Warten Sie mal. Wird geladen...',
    readOnly: '*** Schreibgeschützt ***',
    public: 'Öffentlichkeit',
    private: 'Privat',
    addedBy: 'Hinzugefügt von',
    updatedBy: 'Aktualisiert von',
    Administrator: 'Administrator',
    Moderator: 'Moderator',
    Manager: 'Gelang es',
    Supervisor: 'Supervisor',
    User: 'Nutzer',
    None: 'Keiner',
    Opportunity: 'Gelegenheit',
    Prospect: 'Aussicht',
    'Not Contacted': 'Nicht kontaktiert',
    'Appointment Booked': 'Termin gebucht',
    '2nd Appointment Booked': '2. Termin gebucht',
    'Awaiting Decision': 'Warten auf Entscheidung',
    Customer: 'Kunde',
    Staff: 'Mitarbeiter',
    Contacts: 'Kontakte',
    Suppliers: 'Lieferanten',
    Live: 'Wohnen',
    Lead: 'tot',
    contactRecords: 'Kontaktaufzeichnungen',
    companyRecords: 'Unternehmensunterlagen',
    yourRecordHasBeenSaved: 'Ihr Datensatz wurde gespeichert',
    pleaseEnterALongerSurname: 'Bitte geben Sie einen längeren Nachnamen ein',
    pleaseEnterALongerCompanyName: 'Bitte geben Sie einen längeren Firmennamen ein',
    pleaseSpecifyUserAuthDetails: 'Bitte geben Sie die Details zur Benutzerauthentifizierung an',
    yourRecordHasBeenDeleted: 'Ihr Datensatz wurde gelöscht',
    notesAndHistoryTab: {
      addNotesOrHistory: 'Notizen oder Verlauf hinzufügen',
      addSupportTicket: 'Support-Ticket hinzufügen',
      type: 'Art',
      date: 'Datum',
      time: 'Zeit',
      contact: 'Kontakt',
      agent: 'Agent',
      popOut: 'Pop in ein neues Fenster',
      noteComponent: {
        notes: 'Anmerkungen',
        supportCall: 'Support-Anruf',
        openNote: 'Hinweis öffnen',
        openSupportTicket: 'Öffnen Sie das Support Ticket',
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
      categories: 'Kategorien',
      types: 'Typen',
      groups: 'Gruppen',
      status: 'Status',
      addNewCategory: 'neue Kategorie hinzufügen',
      addNewContactCategory: 'Neue Kontaktkategorie hinzufügen',
      addNewCompanyCategory: 'Neue Firmenkategorie hinzufügen',
      contactCategories: 'Kontaktkategorien',
      companyCategories: 'Firmenkategorien',
      addNewStatus: 'Neuen Status hinzufügen',
      addNewGroup: 'Neue Gruppe hinzufügen',
      addNewType: 'Neuen Typ hinzufügen',
      setDefault: 'Standard festlegen',
      item: {
        cancel: 'Stornieren',
        save: 'speichern',
        CategoryName: 'Kategoriename',
        GroupName: 'Gruppenname',
        StatusName: 'Statusname',
        TypeName: 'Modellname',
        backgroundGradientTopColour: 'Hintergrund Farbverlauf Top Farbe',
        backgroundGradientBottomColour: 'Hintergrundgradienten-Grundfarbe',
        textColour: 'Textfarbe',
        fieldTooShort: 'Ihr [FELD] ist zu kurz. Bitte geben Sie etwas längeres als [LÄNGE] an',
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
    mr: 'Herr',
    ms: 'Frau',
    miss: 'Fräulein',
    mrs: 'Frau',
    mx: 'Mx',
    master: 'Meister',
    dir: 'Herr',
    madam: 'gnädige Frau',
    dame: 'Dame',
    lord: 'Herr',
    lady: 'Dame',
    viscount: 'Viscount',
    dr: 'DR',
    prof: 'Prof',
    br: 'Br',
    sr: 'Sr.',
    fr: 'Fr.',
    rev: 'Rev.',
    pr: 'Pr',
    elder: 'Ältere',
  }
};
