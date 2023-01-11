import {LanguageModel} from '../language-model';

export const langEs: LanguageModel = {
  product: 'Xectra', // safe
  company: 'Xectra Digital', // safe
  desktop: {
    ribbon: {
      contacts: 'Contactos',
      settings: 'Configuración',
      someLongerText: 'Texto más largo',
      catalogues: 'Catálogos',
      multiSelect: 'Selección múltiple',
      ghost: 'Fantasma',
      planMode1: 'Modo de plan 1',
      planMode2: 'Modo de plan 2',
      planMode3: 'Modo de plan 3',
      planMode4: 'Modo de plan 4',
      deleteRecord: 'Eliminar registro',
      saveRecord: 'Guardar registro',
      addRecord: 'Agregar registro',
      sendEmail: 'Enviar correo electrónico',
      editSettings: 'Editar configuración',
      cancelAddingRecord: 'Cancelar la adición de un nuevo registro',
      discardChanges: 'Descartar cambios',
      notesAndHistory: 'Notas e historia',
      supportTickets: 'Tickets de soporte',
      accounts: 'Cuentas',
      contactProfile: 'Perfil de contacto',
      documentsAndFiles: 'Documentos y archivos',
    },
    menu: {
      menu1: 'Menú 1',
      menu2: 'Menú 2',
      menu3: 'Menú 3',
      menu4: 'Menú 4',
    },
    window: {
      close: 'Cerrar',
      minimise: 'Minimizar',
      maximise: 'Maximizar',
      centre: 'Centro',
      restore: 'Restaurar',
      loading: 'Carga',
      dockTop: 'Dock Top',
      dockRight: 'Dock derecho',
      dockBottom: 'Fondo del muelle',
      dockLeft: 'Muelle izquierdo',
      dockTopLeft: 'Dock arriba a la izquierda',
      dockTopRight: 'Muelle superior derecho',
      dockBottomLeft: 'Dock abajo a la izquierda',
      dockBottomRight: 'Dock abajo a la derecha',
      unDockWindow: 'Desacoplar ventana',
      moveWindow: 'Mover ventana',
      top: 'Arriba',
      width: 'Ancho',
      left: 'Izquierda',
      height: 'Altura',
      resetWindowPosition: 'Restablecer posición de la ventana',
      login: 'Iniciar sesión',
      newWindow: 'Nueva ventana',
      profile: 'Perfil',
      setDockPosition: 'Establecer posición del muelle',
      unsaved: 'Inconversos',
      placeInPanel: 'Colocar en panel',
      removeFromPanel: 'Eliminar del panel',
      about: 'Acerca de',
      demo: 'Demo',
      demo1: 'Demostración Uno',
      demo2: 'Demo Dos',
      demo3: 'Demostración Tres',
      demo4: 'Demo Cuatro',
      contactManager: 'Gerente de Contacto',
      addHistory: 'Agregar historial',
      addSupportTicket: 'Agregar ticket de soporte',
      editSettings: 'Editar configuración',
      search: 'Buscar',
      editCategoryItem: 'Editar elemento de categoría',
      editGroupItem: 'Editar elemento de grupo',
      editStatusItem: 'Editar elemento de estado',
      editTypeItem: 'Editar elemento de tipo',
      addCategoryItem: 'Agregar elemento de categoría',
      addGroupItem: 'Agregar elemento de grupo',
      addStatusItem: 'Agregar elemento de estado',
      addTypeItem: 'Agregar elemento de tipo',
      notesHistory: 'Notas e historia',
      supportTickets: 'Tickets de soporte',
      planner: 'Planificador',
    },
    panel: {
      close: 'Cerrar',
      dockTop: 'Dock Top',
      dockRight: 'Dock derecho',
      dockBottom: 'Fondo del muelle',
      dockLeft: 'Muelle izquierdo',
      dockTopLeft: 'Dock arriba a la izquierda',
      dockTopRight: 'Muelle superior derecho',
      dockBottomLeft: 'Dock abajo a la izquierda',
      dockBottomRight: 'Dock abajo a la derecha',
      unDockPanel: 'Desacoplar panel',
      moveWindow: 'Mover ventana',
      top: 'Arriba',
      width: 'Ancho',
      left: 'Izquierda',
      height: 'Altura',
      setDockPosition: 'Establecer posición del muelle',
      system: 'Sistema',
    },
    toast: {
      close: 'Cerrar',
      dismiss: 'Despedir',
      success: 'Éxito',
      warning: 'Advertencia',
      information: 'Información',
      error: 'Error',
      loginSuccessful: 'Inicio de sesión exitoso',
      logoutSuccessful: 'Cierre de sesión exitoso',
      loginFailed: 'Error de inicio de sesión',
    },
    dialog: {
      ok: 'De acuerdo',
      cancel: 'Cancelar',
      close: 'Cerrar',
      yes: 'Sí',
      no: 'No',
      agree: 'Convenir',
      disagree: 'Discrepar',
      decline: 'Rechazar',
      closeWindow: 'Cerrar ventana',
      youHaveUnsavedContentAreYouSureYouWantToCloseThisWindow: 'Tienes contenido no guardado. <br><br>¿Está seguro de que desea cerrar esta ventana?',
      newPanel: 'Nuevo panel',
      pleaseSpecifyYourPanelName: 'Especifique el nombre de su panel',
      panelName: 'Nombre del panel',
      left: 'Izquierda',
      width: 'Ancho',
      createPanel: 'Crear panel',
      closePanel: 'Cerrar panel',
      doYouWantToCloseTheWindows: '¿Quieres cerrar las ventanas?',
      keepWindows: 'Mantener Windows',
      closeWindows: 'Cerrar ventanas',
      discardChanges: 'Descartar cambios',
      areYouSureYouWishToDiscardYourChanges: '¿Está seguro de que desea descartar sus cambios?',
      discard: 'Descartar',
      deleteRecord: 'Eliminar registro',
      areYouSureYouWishToDeleteThisRecord: '¿Está seguro de que desea eliminar este registro?',
      delete: 'Borrar',
    },
    tabBar: {
      autoHide: 'Ocultar automáticamente',
    },
    newWindow: 'Nueva ventana',
    loading: 'Carga...',
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
      settings: 'Configuración',
      ribbonSize: 'Tamaño de la cinta',
      tabBarAutoHide: 'Barra de pestañas ocultar automáticamente',
      small: 'Pequeño',
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
      unMute: 'Desactivar el silencio',
      pictureInPicture: 'Mostrar imagen en imagen',
      errorLoadingVideo: 'Error al cargar el vídeo',
      restart: 'Reiniciar vídeo',
      settings: 'Configuración',
    }
  },
  system: {
    example: {
      test: 'Pruebas correctas',
    },
    engine: {},
    userLogin: {
      username: 'Nombre de usuario',
      password: 'Contraseña',
      login: 'Iniciar sesión',
      pleaseWaitLoggingIn: 'Espera...',
    },
    userMenu: {
      profile: 'Perfil',
      logout: 'Cerrar sesión',
    },
    splash: {
      close: 'Cerrar',
      autoCloseIn: 'Cierre automático',
    },
    about: {
      close: 'Cerrar',
    }
  },
  contactManager: {
    noRecordsFound: 'No se encontraron registros',
    recordChanged: 'Registro cambiado ***',
    addingNewRecord: 'Nuevo récord ***',
    ofCount: 'de [CONTAR]',
    editSettings: 'Editar configuración',
    pleaseSelect: 'Por favor seleccione',
    advancedSearch: 'Búsqueda avanzada',
    switchView: 'Vista de conmutador',
    name: 'Nombre',
    forename: 'Apellido',
    surname: 'Apellido',
    address: 'Dirección',
    town: 'Pueblo/Ciudad',
    county: 'Condado',
    postcode: 'Código postal',
    lookup: 'Búsqueda',
    country: 'País',
    jobTitle: 'Título del trabajo',
    department: 'Departamento',
    work: 'Trabajo',
    fax: 'Fax',
    mobile: 'Móvil',
    email: 'Correo electrónico',
    group: 'Grupo',
    category: 'Categoría',
    updateRecord: 'Registro de actualización',
    newRecord: 'Nuevo récord',
    deleteRecord: 'Eliminar registro',
    created: 'Creado',
    updated: 'Actualizado',
    lastUpdatedBy: 'Última actualización por',
    lastLogin: 'Último inicio de sesión',
    start: 'Primer disco',
    previous50: 'Volver 50 Registros',
    previous: 'Récord anterior',
    next: 'Siguiente registro',
    next50: 'Adelante 50 registros',
    end: 'Último registro',
    categories: 'Categorías',
    accountNumber: 'Número de cuenta',
    company: 'Compañía',
    type: 'Tipo',
    status: 'Estado',
    website: 'Sitio web',
    contactAssociations: 'Contacto Asociaciones',
    general: 'General',
    authentication: 'Autenticación',
    otherInfo: 'Otra información',
    companySettings: 'Configuración de la empresa',
    access: 'Acceso',
    username: 'Nombre de usuario',
    password: 'Contraseña',
    allowLogin: 'Permitir inicio de sesión',
    notesAndHistory: 'Notas e historia',
    supportTickets: 'Tickets de soporte',
    accounts: 'Cuentas',
    contactProfile: 'Perfil de contacto',
    documentsAndFiles: 'Documentos y archivos',
    searching: 'Minucioso...',
    selectAddress: 'Seleccionar dirección',
    addressNotListed: 'Dirección no listada',
    pleaseWaitLoading: 'Espera. Carga...',
    readOnly: 'Sólo lectura ***',
    public: 'Público',
    private: 'Privado',
    addedBy: 'Añadido por',
    updatedBy: 'Actualizado por',
    Administrator: 'Administrador',
    Moderator: 'Presentador',
    Manager: 'Administrado',
    Supervisor: 'Supervisor',
    User: 'Usuario',
    None: 'Ninguno',
    Opportunity: 'Oportunidad',
    Prospect: 'Perspectiva',
    'Not Contacted': 'No contactado',
    'Appointment Booked': 'Cita reservada',
    '2nd Appointment Booked': '2ª Cita Reservada',
    'Awaiting Decision': 'En espera de decisión',
    Customer: 'Cliente',
    Staff: 'Personal',
    Contacts: 'Contactos',
    Suppliers: 'Proveedores',
    Live: 'Vivir',
    Lead: 'Muerto',
    contactRecords: 'Registros de contacto',
    companyRecords: 'Registros de la empresa',
    yourRecordHasBeenSaved: 'Su registro ha sido guardado',
    pleaseEnterALongerSurname: 'Introduce un apellido más largo',
    pleaseEnterALongerCompanyName: 'Introduzca un nombre de empresa más largo',
    pleaseSpecifyUserAuthDetails: 'Especifique los detalles de autenticación del usuario',
    yourRecordHasBeenDeleted: 'Tu registro ha sido eliminado',
    notesAndHistoryTab: {
      addNotesOrHistory: 'Agregar notas o historial',
      addSupportTicket: 'Agregar ticket de soporte',
      type: 'Tipo',
      date: 'Fecha',
      time: 'Hora',
      contact: 'Contacto',
      agent: 'Agente',
      popOut: 'Salir a una nueva ventana',
      noteComponent: {
        notes: 'Notas',
        supportCall: 'Llamada de soporte',
        openNote: 'Abrir nota',
        openSupportTicket: 'Abrir ticket de soporte',
      }
    },
    accountsTab: {
      ok: 'De acuerdo',
    },
    contactProfileTab: {
      ok: 'De acuerdo',
    },
    documentsAndFilesTab: {
      ok: 'De acuerdo',
    },
    settings: {
      categories: 'Categorías',
      types: 'Tipos',
      groups: 'Grupos',
      status: 'Estado',
      addNewCategory: 'Agregar nueva categoría',
      addNewContactCategory: 'Agregar nueva categoría de contacto',
      addNewCompanyCategory: 'Agregar nueva categoría de empresa',
      contactCategories: 'Categorías de contacto',
      companyCategories: 'Categorías de empresas',
      addNewStatus: 'Agregar nuevo estado',
      addNewGroup: 'Agregar nuevo grupo',
      addNewType: 'Agregar nuevo tipo',
      setDefault: 'Establecer valor predeterminado',
      item: {
        cancel: 'Cancelar',
        save: 'Salvar',
        CategoryName: 'Nombre de la categoría',
        GroupName: 'Nombre del grupo',
        StatusName: 'Nombre del estado',
        TypeName: 'Nombre del tipo',
        backgroundGradientTopColour: 'Color superior degradado de fondo',
        backgroundGradientBottomColour: 'Color inferior degradado de fondo',
        textColour: 'Color del texto',
        fieldTooShort: 'su [FIELD] es demasiado corto, especifique algo más largo que los caracteres [LENGTH]',
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
    mr: 'Sr',
    ms: 'Sra.',
    miss: 'Señorita',
    mrs: 'Sra',
    mx: 'Mx',
    master: 'Maestro',
    dir: 'Señor',
    madam: 'Señora',
    dame: 'Dama',
    lord: 'Señor',
    lady: 'Dama',
    viscount: 'Vizconde',
    dr: 'Dr',
    prof: 'Profesor',
    br: 'Br',
    sr: 'Sr.',
    fr: 'Vie',
    rev: 'Rev',
    pr: 'Pr',
    elder: 'Mayor',
  }
};
