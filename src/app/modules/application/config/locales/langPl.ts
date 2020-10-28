import {LanguageModel} from '../language-model';

export const langPl: LanguageModel = {
  product: 'Desktop V2', // safe
  company: 'Oceanworks', // safe
  desktop: {
    ribbon: {
      contacts: 'Łączność',
      settings: 'Ustawienia',
      someLongerText: 'Dłuższy tekst',
      catalogues: 'Katalogi',
      multiSelect: 'Wielokrotny wybór',
      ghost: 'Duch',
      planMode1: 'Tryb planowania 1',
      planMode2: 'Tryb planowania 2',
      planMode3: 'Tryb planowania 3',
      planMode4: 'Tryb planowania 4',
      deleteRecord: 'Usuń rekord',
      saveRecord: 'Zapisz rekord',
      addRecord: 'Dodaj rekord',
      sendEmail: 'Wysłać email',
      editSettings: 'Edytuj ustawienia',
      cancelAddingRecord: 'Anuluj dodawanie nowego rekordu',
      discardChanges: 'Odrzucić zmiany',
      notesAndHistory: 'Notatki i historia',
      supportTickets: 'Bilety pomocy technicznej',
      accounts: 'Konta',
      contactProfile: 'Profil kontaktu',
      documentsAndFiles: 'Dokumenty i pliki',
    },
    menu: {
      menu1: 'Menu 1',
      menu2: 'Menu 2',
      menu3: 'Menu 3',
      menu4: 'Menu 4',
    },
    window: {
      close: 'Blisko',
      minimise: 'Zminimalizować',
      maximise: 'Wyolbrzymiać',
      centre: 'Środek',
      restore: 'Przywracać',
      loading: 'Ładowanie',
      dockTop: 'Dock Top',
      dockRight: 'Zadokuj w prawo',
      dockBottom: 'Zadokuj na dole',
      dockLeft: 'Zadokuj w lewo',
      dockTopLeft: 'Dokuj u góry po lewej',
      dockTopRight: 'Zadokuj w prawym górnym rogu',
      dockBottomLeft: 'Zadokuj na dole po lewej',
      dockBottomRight: 'Zadokuj w prawym dolnym rogu',
      unDockWindow: 'Oddokuj okno',
      moveWindow: 'Przesuń okno',
      top: 'Top',
      width: 'Szerokość',
      left: 'Lewo',
      height: 'Wysokość',
      login: 'Zaloguj sie',
      newWindow: 'Nowe okno',
      profile: 'Profil',
      setDockPosition: 'Ustaw pozycję dokowania',
      unsaved: 'Niezapisany',
      placeInPanel: 'Umieść w panelu',
      removeFromPanel: 'Usuń z panelu',
      about: 'O',
      demo: 'Próbny',
      demo1: 'Demo One',
      demo2: 'Demo Two',
      demo3: 'Demo Three',
      demo4: 'Demo Four',
      contactManager: 'Contact Manager',
      addHistory: 'Dodaj historię',
      addSupportTicket: 'Dodaj bilet pomocy technicznej',
      editSettings: 'Edytuj ustawienia',
      search: 'Szukaj',
      editCategoryItem: 'Edytuj element kategorii',
      editGroupItem: 'Edytuj element grupy',
      editStatusItem: 'Edytuj pozycję stanu',
      editTypeItem: 'Edytuj typ elementu',
      addCategoryItem: 'Dodaj pozycję kategorii',
      addGroupItem: 'Dodaj element grupy',
      addStatusItem: 'Dodaj pozycję statusu',
      addTypeItem: 'Dodaj element typu',
      notesHistory: 'Notatki i historia',
      supportTickets: 'Bilety pomocy technicznej',
    },
    panel: {
      close: 'Blisko',
      dockTop: 'Dock Top',
      dockRight: 'Zadokuj w prawo',
      dockBottom: 'Zadokuj na dole',
      dockLeft: 'Zadokuj w lewo',
      dockTopLeft: 'Dokuj u góry po lewej',
      dockTopRight: 'Zadokuj w prawym górnym rogu',
      dockBottomLeft: 'Zadokuj na dole po lewej',
      dockBottomRight: 'Zadokuj w prawym dolnym rogu',
      unDockPanel: 'Oddokuj panel',
      moveWindow: 'Przesuń okno',
      top: 'Top',
      width: 'Szerokość',
      left: 'Lewo',
      height: 'Wysokość',
      setDockPosition: 'Ustaw pozycję dokowania',
      system: 'System',
    },
    toast: {
      close: 'Blisko',
      dismiss: 'Oddalić',
      success: 'Sukces',
      warning: 'Ostrzeżenie',
      information: 'Informacja',
      error: 'Błąd',
      loginSuccessful: 'Logowanie zakończone sukcesem',
      logoutSuccessful: 'Wylogowanie powiodło się',
      loginFailed: 'Logowanie nie powiodło się',
    },
    dialog: {
      ok: 'dobrze',
      cancel: 'Anuluj',
      close: 'Blisko',
      yes: 'tak',
      no: 'Nie',
      agree: 'Zgodzić się',
      disagree: 'Nie zgadzać się',
      decline: 'Upadek',
      closeWindow: 'Zamknij okno',
      youHaveUnsavedContentAreYouSureYouWantToCloseThisWindow: 'Masz niezapisane treści. <br><br> Czy na pewno chcesz zamknąć to okno?',
      newPanel: 'Nowy panel',
      pleaseSpecifyYourPanelName: 'Podaj nazwę panelu',
      panelName: 'Nazwa panelu',
      left: 'Lewo',
      width: 'Szerokość',
      createPanel: 'Utwórz panel',
      closePanel: 'Zamknij panel',
      doYouWantToCloseTheWindows: 'Chcesz zamknąć okna?',
      keepWindows: 'Zachowaj Windows',
      closeWindows: 'Zamknij Windows',
      discardChanges: 'Odrzucić zmiany',
      areYouSureYouWishToDiscardYourChanges: 'Czy na pewno chcesz odrzucić zmiany?',
      discard: 'Odrzucać',
      deleteRecord: 'Usuń rekord',
      areYouSureYouWishToDeleteThisRecord: 'Czy na pewno chcesz usunąć ten wpis?',
      delete: 'Kasować',
    },
    tabBar: {
      autoHide: 'Automatyczne chowanie',
    },
    newWindow: 'Nowe okno',
    loading: 'Ładowanie...',
  },
  components: {
    languageSelector: {
      language: 'langPl',
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
      settings: 'Ustawienia',
      ribbonSize: 'Rozmiar wstążki',
      tabBarAutoHide: 'Automatyczne ukrywanie paska kart',
      small: 'Mały',
      large: 'Duży',
    },
    videoPlayer: {
      play: 'Grać',
      pause: 'Pauza',
      volume: 'Tom',
      fullScreen: 'Przełącz na pełny ekran',
      exitFullScreen: 'Wyłączyć tryb pełnoekranowy',
      skipBack: 'Przejdź wstecz',
      skipForward: 'Przejdź do przodu',
      mute: 'Niemy',
      unMute: 'Wyłącz wyciszenie',
      pictureInPicture: 'Pokaż obraz w obrazie',
      errorLoadingVideo: 'Błąd podczas ładowania filmu',
      restart: 'Uruchom ponownie wideo',
      settings: 'Ustawienia',
    }
  },
  system: {
    example: {
      test: 'Testowanie OK',
    },
    engine: {},
    userLogin: {
      username: 'Nazwa Użytkownika',
      password: 'Hasło',
      login: 'Zaloguj sie',
      pleaseWaitLoggingIn: 'Proszę czekać...',
    },
    userMenu: {
      profile: 'Profil',
      logout: 'Wyloguj',
    },
    splash: {
      close: 'Blisko',
      autoCloseIn: 'Automatyczne zamykanie',
    },
    about: {
      close: 'Blisko',
    }
  },
  contactManager: {
    noRecordsFound: 'Nic nie znaleziono',
    recordChanged: '*** Rekord zmieniony ***',
    addingNewRecord: '*** Nowy rekord ***',
    ofCount: 'z [COUNT]',
    editSettings: 'Edytuj ustawienia',
    pleaseSelect: 'Proszę wybrać',
    advancedSearch: 'zaawansowane wyszukiwanie',
    switchView: 'Przełącz widok',
    name: 'Nazwa',
    forename: 'Forname',
    surname: 'Nazwisko',
    address: 'Adres',
    town: 'Miasto / Miasto',
    county: 'Hrabstwo',
    postcode: 'Kod pocztowy',
    lookup: 'Wyszukaj',
    country: 'Kraj',
    jobTitle: 'Stanowisko',
    department: 'Departament',
    work: 'Praca',
    fax: 'Faks',
    mobile: 'mobilny',
    email: 'E-mail',
    group: 'Grupa',
    category: 'Kategoria',
    updateRecord: 'Zaktualizuj rekord',
    newRecord: 'Nowy rekord',
    deleteRecord: 'Usuń rekord',
    created: 'Utworzony',
    updated: 'Zaktualizowano',
    lastUpdatedBy: 'Ostatnia aktualizacja przez',
    lastLogin: 'Ostatnie logowanie',
    start: 'Pierwszy rekord',
    previous50: 'Wstecz 50 rekordów',
    previous: 'Poprzednie nagranie',
    next: 'Następny rekord',
    next50: 'Prześlij 50 rekordów',
    end: 'Ostatni rekord',
    categories: 'Kategorie',
    accountNumber: 'Nr konta',
    company: 'Firma',
    type: 'Rodzaj',
    status: 'Status',
    website: 'Stronie internetowej',
    contactAssociations: 'Skontaktuj się ze stowarzyszeniami',
    general: 'Generał',
    authentication: 'Poświadczenie',
    otherInfo: 'Inne informacje',
    companySettings: 'Ustawienia firmy',
    access: 'Dostęp',
    username: 'Nazwa Użytkownika',
    password: 'Hasło',
    allowLogin: 'Umożliwić logowanie',
    notesAndHistory: 'Notatki i historia',
    supportTickets: 'Bilety pomocy technicznej',
    accounts: 'Konta',
    contactProfile: 'Profil kontaktu',
    documentsAndFiles: 'Dokumenty i pliki',
    searching: 'Badawczy...',
    selectAddress: 'Wybierz adres',
    addressNotListed: 'Adres nie został wymieniony',
    pleaseWaitLoading: 'Proszę czekać. Ładowanie...',
    readOnly: '*** Tylko czytać ***',
    public: 'Publiczny',
    private: 'Prywatny',
    addedBy: 'Dodane przez',
    updatedBy: 'Aktualizowany przez',
    Administrator: 'Administrator',
    Moderator: 'Moderator',
    Manager: 'Zarządzane',
    Supervisor: 'Kierownik',
    User: 'Użytkownik',
    None: 'Żaden',
    Opportunity: 'Okazja',
    Prospect: 'Perspektywa',
    'Not Contacted': 'Brak kontaktu',
    'Appointment Booked': 'Zarezerwowano spotkanie',
    '2nd Appointment Booked': 'Zarezerwowano drugą wizytę',
    'Awaiting Decision': 'Oczekiwanie na decyzję',
    Customer: 'Klient',
    Staff: 'Personel',
    Contacts: 'Łączność',
    Suppliers: 'Dostawcy',
    Live: 'Relacja na żywo',
    Lead: 'Nie żyje',
    contactRecords: 'Contact Records',
    companyRecords: 'Dokumentacja firmy',
    yourRecordHasBeenSaved: 'Twój rekord został zapisany',
    pleaseEnterALongerSurname: 'Wpisz dłuższe nazwisko',
    pleaseEnterALongerCompanyName: 'Wprowadź dłuższą nazwę firmy',
    pleaseSpecifyUserAuthDetails: 'Podaj szczegóły uwierzytelniania użytkownika',
    yourRecordHasBeenDeleted: 'Twój wpis został usunięty',
    notesAndHistoryTab: {
      addNotesOrHistory: 'Dodaj notatki lub historię',
      addSupportTicket: 'Dodaj bilet pomocy technicznej',
      type: 'Rodzaj',
      date: 'Data',
      time: 'Czas',
      contact: 'Kontakt',
      agent: 'Agent',
      popOut: 'Wyskocz w nowym oknie',
      noteComponent: {
        notes: 'Uwagi',
        supportCall: 'Połączenie z pomocą techniczną',
        openNote: 'Otwórz notatkę',
        openSupportTicket: 'Otwórz zgłoszenie do pomocy technicznej',
      }
    },
    accountsTab: {
      ok: 'dobrze',
    },
    contactProfileTab: {
      ok: 'dobrze',
    },
    documentsAndFilesTab: {
      ok: 'dobrze',
    },
    settings: {
      categories: 'Kategorie',
      types: 'Rodzaje',
      groups: 'Grupy',
      status: 'Status',
      addNewCategory: 'Dodaj nową kategorię',
      addNewContactCategory: 'Dodaj nową kategorię kontaktów',
      addNewCompanyCategory: 'Dodaj nową kategorię firmy',
      contactCategories: 'Kategorie kontaktów',
      companyCategories: 'Kategorie firm',
      addNewStatus: 'Dodaj nowy status',
      addNewGroup: 'Dodaj nową grupę',
      addNewType: 'Dodaj nowy typ',
      setDefault: 'Ustaw domyślne',
      item: {
        cancel: 'Anuluj',
        save: 'Zapisać',
        CategoryName: 'Nazwa Kategorii',
        GroupName: 'Nazwa grupy',
        StatusName: 'Nazwa statusu',
        TypeName: 'Wpisz imię',
        backgroundGradientTopColour: 'Tło Gradientu Górnego Koloru',
        backgroundGradientBottomColour: 'Dolny kolor tła gradientu',
        textColour: 'Kolor tekstu',
        fieldTooShort: 'Twoje [FIELD] jest za krótkie. Podaj więcej niż [LENGTH] znaków',
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
    mr: 'Pan',
    ms: 'SM',
    miss: 'Chybienie',
    mrs: 'Pani',
    mx: 'Mx',
    master: 'Mistrz',
    dir: 'Pan',
    madam: 'Szanowna Pani',
    dame: 'Dama',
    lord: 'Lord',
    lady: 'Dama',
    viscount: 'Wicehrabia',
    dr: 'dr',
    prof: 'Prof',
    br: 'Br',
    sr: 'Sr',
    fr: 'Ks',
    rev: 'Obrót silnika',
    pr: 'Pr',
    elder: 'Starszy',
  }
};
