import {LanguageModel} from '../language-model';

export const langEs: LanguageModel = {
  product: 'Desktop V2', // safe
  company: 'Oceanworks', // safe
  desktop: {
    ribbon: {
      contacts: 'Contactos',
      settings: 'Configuraciones',
      someLongerText: 'Algún texto más largo',
      catalogues: 'Catálogos',
      multiSelect: 'Selección múltiple',
      ghost: 'Fantasma',
      planMode1: 'Modo plan 1',
      planMode2: 'Modo plan 2',
      planMode3: 'Modo plan 3',
      planMode4: 'Modo plan 4',
      deleteRecord: 'Eliminar el registro',
      saveRecord: 'Guardar registro',
      addRecord: 'Agregar registro',
      sendEmail: 'Enviar correo electrónico',
      editSettings: 'Editar ajustes',
      cancelAddingRecord: 'Cancelar la adición de un nuevo registro',
      discardChanges: 'Descartar los cambios',
    },
    menu: {
      menu1: 'Menú 1',
      menu2: 'Menú 2',
      menu3: 'Menú 3',
      menu4: 'Menú 4',
    },
    window: {
      close: 'Cerca',
      minimise: 'Minimizar',
      maximise: 'Maximizar',
      centre: 'Centrar',
      restore: 'Restaurar',
      loading: 'Cargando',
      dockTop: 'Dock Top',
      dockRight: 'Dock Right',
      dockBottom: 'Dock Bottom',
      dockLeft: 'Muelle a la izquierda',
      dockTopLeft: 'Muelle Arriba Izquierda',
      dockTopRight: 'Muelle Arriba Derecha',
      dockBottomLeft: 'Muelle Inferior Izquierdo',
      dockBottomRight: 'Muelle Inferior Derecha',
      unDockWindow: 'Desacoplar ventana',
      moveWindow: 'Mover ventana',
      top: 'Parte superior',
      width: 'Anchura',
      left: 'Izquierda',
      height: 'Altura',
      login: 'Iniciar sesión',
      newWindow: 'Nueva ventana',
      profile: 'Perfil',
      setDockPosition: 'Establecer posición de muelle',
      unsaved: 'No guardado',
      placeInPanel: 'Colocar en panel',
      removeFromPanel: 'Quitar del panel',
      about: 'Acerca de',
      demo: 'Manifestación',
      demo1: 'Demo uno',
      demo2: 'Demo dos',
      demo3: 'Demo tres',
      demo4: 'Demo cuatro',
      contactManager: 'Gerente de contacto',
    },
    panel: {
      close: 'Cerca',
      dockTop: 'Dock Top',
      dockRight: 'Dock Right',
      dockBottom: 'Dock Bottom',
      dockLeft: 'Muelle a la izquierda',
      dockTopLeft: 'Muelle Arriba Izquierda',
      dockTopRight: 'Muelle Arriba Derecha',
      dockBottomLeft: 'Muelle Inferior Izquierdo',
      dockBottomRight: 'Muelle Inferior Derecha',
      unDockPanel: 'Desacoplar el panel',
      moveWindow: 'Mover ventana',
      top: 'Parte superior',
      width: 'Anchura',
      left: 'Izquierda',
      height: 'Altura',
      setDockPosition: 'Establecer posición de muelle',
      system: 'Sistema',
    },
    toast: {
      close: 'Cerca',
      dismiss: 'Descartar',
      success: 'Éxito',
      warning: 'Advertencia',
      information: 'Información',
      error: 'Error',
      loginSuccessful: 'Inicio de sesión correcto',
      logoutSuccessful: 'Cierre de sesión exitoso',
      loginFailed: 'Error de inicio de sesion',
    },
    dialog: {
      ok: 'Okay',
      cancel: 'Cancelar',
      close: 'Cerca',
      yes: 'si',
      no: 'No',
      agree: 'De acuerdo',
      disagree: 'Discrepar',
      decline: 'Disminución',
      closeWindow: 'Cerrar ventana',
      youHaveUnsavedContentAreYouSureYouWantToCloseThisWindow: 'Tienes contenido sin guardar. <br><br> ¿Estás seguro de que quieres cerrar esta ventana?',
      newPanel: 'Nuevo panel',
      pleaseSpecifyYourPanelName: 'Especifique el nombre de su panel',
      panelName: 'Nombre del panel',
      left: 'Izquierda',
      width: 'Anchura',
      createPanel: 'Crear panel',
      closePanel: 'Cerrar panel',
      doYouWantToCloseTheWindows: '¿Quieres cerrar las ventanas?',
      keepWindows: 'Mantenga Windows',
      closeWindows: 'Cerrar ventanas',
      discardChanges: 'Descartar los cambios',
      areYouSureYouWishToDiscardYourChanges: '¿Está seguro de que desea descartar sus cambios?',
      discard: 'Descarte',
      deleteRecord: 'Eliminar el registro',
      areYouSureYouWishToDeleteThisRecord: '¿Está seguro de que desea eliminar este registro?',
      delete: 'Eliminar',
    },
    tabBar: {
      autoHide: 'Auto-escondite',
    },
    newWindow: 'Nueva ventana',
    loading: 'Cargando...',
  },
  components: {
    languageSelector: {
      language: 'langEs',
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
      settings: 'Configuraciones',
      ribbonSize: 'Tamaño de la cinta',
      tabBarAutoHide: 'Ocultar automáticamente la barra de pestañas',
      small: 'Pequeña',
      large: 'Grande',
    },
    videoPlayer: {
      play: 'Jugar',
      pause: 'Pausa',
      volume: 'Volumen',
      fullScreen: 'Cambiar a pantalla completa',
      exitFullScreen: 'Salir de pantalla completa',
      skipBack: 'Saltar atrás',
      skipForward: 'Saltar hacia adelante',
      mute: 'Mudo',
      unMute: 'Des-silenciar',
      pictureInPicture: 'Mostrar imagen en imagen',
      errorLoadingVideo: 'Error al cargar el video',
      restart: 'Reiniciar video',
      settings: 'Configuraciones',
    }
  },
  system: {
    example: {
      test: 'Prueba OK',
    },
    engine: {},
    userLogin: {
      username: 'Nombre de usuario',
      password: 'Contraseña',
      login: 'Iniciar sesión',
      pleaseWaitLoggingIn: 'Por favor espera...',
    },
    userMenu: {
      profile: 'Perfil',
      logout: 'Cerrar sesión',
    },
    splash: {
      close: 'Cerca',
      autoCloseIn: 'Cierre automático en',
    },
    about: {
      close: 'Cerca',
    }
  },
  contactManager: {
    recordChanged: '*** Registro cambiado ***',
    addingNewRecord: '*** Nuevo record ***',
    ofCount: 'de [COUNT]',
    staff: 'Personal',
    customers: 'Clientes',
    contacts: 'Contactos',
    suppliers: 'Proveedores',
    editSettings: 'Editar ajustes',
    pleaseSelect: 'Por favor seleccione',
    advancedSearch: 'Búsqueda Avanzada',
    switchView: 'Cambiar vista',
    title: 'Título',
    forename: 'Forname',
    surname: 'Apellido',
    address: 'Habla a',
    town: 'Pueblo / Ciudad',
    county: 'Condado',
    postcode: 'Código postal',
    lookup: 'Buscar',
    country: 'País',
    notes: 'Notas',
    jobTitle: 'Título profesional',
    department: 'Departamento',
    work: 'Trabajo',
    fax: 'Fax',
    mobile: 'Móvil',
    email: 'Correo electrónico',
    group: 'Grupo',
    category: 'Categoría',
    updateRecord: 'Actualizar registro',
    newRecord: 'Nuevo record',
    deleteRecord: 'Eliminar el registro',
    created: 'Creado',
    updated: 'Actualizado',
    lastUpdatedBy: 'Actualizado por última vez por',
    lastLogin: 'Último acceso',
    start: 'Primer registro',
    previous50: 'Atrás 50 registros',
    previous: 'Récord anterior',
    next: 'Siguiente registro',
    next50: 'Reenviar 50 registros',
    end: 'Último registro',
    categories: 'Categorías',
    accountNumber: 'Cuenta No',
    company: 'Empresa',
    division: 'División',
    type: 'Tipo',
    status: 'Estado',
    website: 'Sitio web',
    contactAssociations: 'Asociaciones de contacto',
    general: 'General',
    authentication: 'Autenticación',
    otherInfo: 'Otra información',
    companySettings: 'Configuración de la empresa',
    access: 'Acceso',
    username: 'Nombre de usuario',
    password: 'Contraseña',
    allowLogin: 'Permitir acceso',
    notesAndHistory: 'Notas e historia',
    accounts: 'Cuentas',
    contactProfile: 'Perfil de contacto',
    documentsAndFiles: 'Documentos y archivos',
    searching: 'Buscando...',
    selectAddress: 'Seleccionar dirección',
    addressNotListed: 'Dirección no incluida',
    pleaseWaitLoading: 'Por favor espera. Cargando...',
    Administrator: 'Administrador',
    Moderator: 'Moderador',
    Manager: 'Administrado',
    Supervisor: 'Supervisor',
    User: 'Usuario',
    'No Status': 'Sin Estado',
    Opportunity: 'Oportunidad',
    Prospect: 'Perspectiva',
    'Not Contacted': 'No contactado',
    'Appointment Booked': 'Cita reservada',
    '2nd Appointment Booked': '2da cita reservada',
    'Awaiting Decision': 'Pendiente de decisión',
    Customer: 'Cliente',
    Live: 'En Vivo',
    Lead: 'Muerto',
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
    mr: 'Señor',
    ms: 'Em',
    miss: 'Pierda',
    mrs: 'señora',
    mx: 'Mx',
    master: 'Maestro',
    dir: 'señor',
    madam: 'Señora',
    dame: 'Dama',
    lord: 'Señor',
    lady: 'dama',
    viscount: 'Vizconde',
    dr: 'Dr',
    prof: 'Profe',
    br: 'Br',
    sr: 'Sr',
    fr: 'Fr',
    rev: 'Rdo',
    pr: 'Pr',
    elder: 'Mayor',
  }
};
