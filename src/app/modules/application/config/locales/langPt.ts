import {LanguageModel} from '../language-model';

export const langPt: LanguageModel = {
  product: 'Tailwind', // safe
  company: 'Carl Fearby', // safe
  desktop: {
    ribbon: {
      contacts: 'Contatos',
      settings: 'Configurações',
      someLongerText: 'Algum texto mais longo',
      catalogues: 'Catálogos',
      multiSelect: 'Multi Select',
      ghost: 'Fantasma',
      planMode1: 'Modo de plano 1',
      planMode2: 'Modo de plano 2',
      planMode3: 'Modo de Plano 3',
      planMode4: 'Modo de Plano 4',
      deleteRecord: 'Apagar registro',
      saveRecord: 'Salvar registro',
      addRecord: 'Adicionar registro',
      sendEmail: 'Enviar email',
      editSettings: 'Editar Configurações',
      cancelAddingRecord: 'Cancelar adição de novo registro',
      discardChanges: 'Descartar mudanças',
      notesAndHistory: 'Notas e História',
      supportTickets: 'Tíquetes de Suporte',
      accounts: 'Contas',
      contactProfile: 'Perfil de contato',
      documentsAndFiles: 'Documentos e arquivos',
    },
    menu: {
      menu1: 'Menu 1',
      menu2: 'Menu 2',
      menu3: 'Menu 3',
      menu4: 'Menu 4',
    },
    window: {
      close: 'Perto',
      minimise: 'Minimizar',
      maximise: 'Maximizar',
      centre: 'Centro',
      restore: 'Restaurar',
      loading: 'Carregando',
      dockTop: 'Dock Top',
      dockRight: 'Dock Right',
      dockBottom: 'Dock Bottom',
      dockLeft: 'Doca à esquerda',
      dockTopLeft: 'Doca superior esquerda',
      dockTopRight: 'Doca superior direita',
      dockBottomLeft: 'Doca inferior esquerda',
      dockBottomRight: 'Doca inferior direita',
      unDockWindow: 'Janela de desencaixe',
      moveWindow: 'Mover janela',
      top: 'Topo',
      width: 'Largura',
      left: 'Esquerda',
      height: 'Altura',
      resetWindowPosition: '',
      login: 'Conecte-se',
      newWindow: 'Nova janela',
      profile: 'Perfil',
      setDockPosition: 'Definir posição da doca',
      unsaved: 'Não salvo',
      placeInPanel: 'Colocar no painel',
      removeFromPanel: 'Remover do painel',
      about: 'Sobre',
      demo: 'Demo',
      demo1: 'Demonstração Um',
      demo2: 'Demo Dois',
      demo3: 'Demo Três',
      demo4: 'Demonstração Quatro',
      contactManager: 'Gerente de contato',
      addHistory: 'Adicionar História',
      addSupportTicket: 'Adicionar tíquete de suporte',
      editSettings: 'Editar Configurações',
      search: 'Pesquisa',
      editCategoryItem: 'Editar Item de Categoria',
      editGroupItem: 'Editar Item do Grupo',
      editStatusItem: 'Editar Item de Status',
      editTypeItem: 'Editar Tipo de Item',
      addCategoryItem: 'Adicionar Item de Categoria',
      addGroupItem: 'Adicionar Item de Grupo',
      addStatusItem: 'Adicionar Item de Status',
      addTypeItem: 'Adicionar Tipo de Item',
      notesHistory: 'Notas e História',
      supportTickets: 'Tíquetes de Suporte',
    },
    panel: {
      close: 'Perto',
      dockTop: 'Dock Top',
      dockRight: 'Dock Right',
      dockBottom: 'Dock Bottom',
      dockLeft: 'Doca à esquerda',
      dockTopLeft: 'Doca superior esquerda',
      dockTopRight: 'Doca superior direita',
      dockBottomLeft: 'Doca inferior esquerda',
      dockBottomRight: 'Doca inferior direita',
      unDockPanel: 'Desencaixar painel',
      moveWindow: 'Mover janela',
      top: 'Topo',
      width: 'Largura',
      left: 'Esquerda',
      height: 'Altura',
      setDockPosition: 'Definir posição da doca',
      system: 'Sistema',
    },
    toast: {
      close: 'Perto',
      dismiss: 'Dispensar',
      success: 'Sucesso',
      warning: 'Aviso',
      information: 'Em formação',
      error: 'Erro',
      loginSuccessful: 'Login bem sucedido',
      logoutSuccessful: 'Logout bem sucedido',
      loginFailed: 'Falha na autenticação',
    },
    dialog: {
      ok: 'Está bem',
      cancel: 'Cancelar',
      close: 'Perto',
      yes: 'sim',
      no: 'Não',
      agree: 'Aceita',
      disagree: 'Discordo',
      decline: 'Declínio',
      closeWindow: 'Janela fechada',
      youHaveUnsavedContentAreYouSureYouWantToCloseThisWindow: 'Você tem conteúdo não salvo. <br><br> Tem certeza que deseja fechar esta janela?',
      newPanel: 'Novo Painel',
      pleaseSpecifyYourPanelName: 'Especifique o nome do seu painel',
      panelName: 'Nome do Painel',
      left: 'Esquerda',
      width: 'Largura',
      createPanel: 'Criar Painel',
      closePanel: 'Fechar painel',
      doYouWantToCloseTheWindows: 'Você quer fechar as janelas?',
      keepWindows: 'Keep Windows',
      closeWindows: 'Fechar o Windows',
      discardChanges: 'Descartar mudanças',
      areYouSureYouWishToDiscardYourChanges: 'Tem certeza de que deseja descartar suas alterações?',
      discard: 'Descartar',
      deleteRecord: 'Apagar registro',
      areYouSureYouWishToDeleteThisRecord: 'Tem certeza de que deseja excluir este registro?',
      delete: 'Excluir',
    },
    tabBar: {
      autoHide: 'Ocultar automaticamente',
    },
    newWindow: 'Nova janela',
    loading: 'Carregando...',
  },
  components: {
    languageSelector: {
      language: 'langPt',
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
      settings: 'Configurações',
      ribbonSize: 'Tamanho da fita',
      tabBarAutoHide: 'Ocultar automaticamente a barra de guias',
      small: 'Pequeno',
      large: 'ampla',
    },
    videoPlayer: {
      play: 'Jogar',
      pause: 'Pausa',
      volume: 'Volume',
      fullScreen: 'Mudar para tela inteira',
      exitFullScreen: 'Sair da tela inteira',
      skipBack: 'Retroceder',
      skipForward: 'Passe à frente',
      mute: 'Mudo',
      unMute: 'Un-Mute',
      pictureInPicture: 'Mostrar imagem na imagem',
      errorLoadingVideo: 'Erro ao carregar o vídeo',
      restart: 'Reiniciar vídeo',
      settings: 'Configurações',
    }
  },
  system: {
    example: {
      test: 'Testing OK',
    },
    engine: {},
    userLogin: {
      username: 'Nome do usuário',
      password: 'Senha',
      login: 'Conecte-se',
      pleaseWaitLoggingIn: 'Por favor, espere...',
    },
    userMenu: {
      profile: 'Perfil',
      logout: 'Sair',
    },
    splash: {
      close: 'Perto',
      autoCloseIn: 'Fechamento automático em',
    },
    about: {
      close: 'Perto',
    }
  },
  contactManager: {
    noRecordsFound: 'Nenhum registro foi encontrado',
    recordChanged: '*** Registro alterado ***',
    addingNewRecord: '*** Novo recorde ***',
    ofCount: 'de [COUNT]',
    editSettings: 'Editar Configurações',
    pleaseSelect: 'Por favor selecione',
    advancedSearch: 'Busca Avançada',
    switchView: 'Mudar de vista',
    name: 'Nome',
    forename: 'Forname',
    surname: 'Sobrenome',
    address: 'Endereço',
    town: '',
    county: 'município',
    postcode: 'Código Postal',
    lookup: 'Olho para cima',
    country: 'País',
    jobTitle: 'Titulo do trabalho',
    department: 'Departamento',
    work: 'Trabalhos',
    fax: 'Fax',
    mobile: 'Móvel',
    email: 'O email',
    group: 'Grupo',
    category: 'Categoria',
    updateRecord: 'Atualizar registro',
    newRecord: 'Novo recorde',
    deleteRecord: 'Apagar registro',
    created: 'Criado',
    updated: 'Atualizada',
    lastUpdatedBy: 'Atualizado pela última vez por',
    lastLogin: 'Último Login',
    start: 'Primeiro registro',
    previous50: 'Back 50 Records',
    previous: 'Registro anterior',
    next: 'Próximo registro',
    next50: 'Encaminhar 50 registros',
    end: 'Último Registro',
    categories: 'Categorias',
    accountNumber: 'Não da conta',
    company: 'Companhia',
    type: 'Tipo',
    status: 'Status',
    website: 'Local na rede Internet',
    contactAssociations: 'Associações de contato',
    general: 'Geral',
    authentication: 'Autenticação',
    otherInfo: 'Outra informação',
    companySettings: 'Configurações da empresa',
    access: 'Acesso',
    username: 'Nome do usuário',
    password: 'Senha',
    allowLogin: 'Permitir o login',
    notesAndHistory: 'Notas e História',
    supportTickets: 'Tíquetes de Suporte',
    accounts: 'Contas',
    contactProfile: 'Perfil de contato',
    documentsAndFiles: 'Documentos e arquivos',
    searching: 'Procurando...',
    selectAddress: 'Selecione o endereço',
    addressNotListed: 'Endereço não listado',
    pleaseWaitLoading: 'Por favor, espere. Carregando...',
    readOnly: '*** Somente leitura ***',
    public: 'Público',
    private: 'Privado',
    addedBy: 'Adicionado por',
    updatedBy: 'Atualizado por',
    Administrator: 'Administrador',
    Moderator: 'Moderador',
    Manager: 'Gerenciou',
    Supervisor: 'Supervisor',
    User: 'Do utilizador',
    None: 'Nenhum',
    Opportunity: 'Oportunidade',
    Prospect: 'Prospect',
    'Not Contacted': 'Não contatado',
    'Appointment Booked': 'Compromisso Marcado',
    '2nd Appointment Booked': '2ª consulta marcada',
    'Awaiting Decision': 'Aguardando Decisão',
    Customer: 'Cliente',
    Staff: 'Funcionários',
    Contacts: 'Contatos',
    Suppliers: 'Fornecedores',
    Live: 'Viver',
    Lead: 'Morto',
    contactRecords: 'Registros de contato',
    companyRecords: 'Registros da empresa',
    yourRecordHasBeenSaved: 'Seu registro foi salvo',
    pleaseEnterALongerSurname: 'Por favor, insira um sobrenome mais longo',
    pleaseEnterALongerCompanyName: 'Insira um nome de empresa mais longo',
    pleaseSpecifyUserAuthDetails: 'Especifique os detalhes de autenticação do usuário',
    yourRecordHasBeenDeleted: 'Seu registro foi excluído',
    notesAndHistoryTab: {
      addNotesOrHistory: 'Adicionar notas ou histórico',
      addSupportTicket: 'Adicionar tíquete de suporte',
      type: 'Tipo',
      date: 'Encontro',
      time: 'Tempo',
      contact: 'Contato',
      agent: 'Agente',
      popOut: 'Abra uma nova janela',
      noteComponent: {
        notes: 'Notas',
        supportCall: 'Chamada de Suporte',
        openNote: 'Nota Aberta',
        openSupportTicket: 'Tíquete de Suporte Aberto',
      }
    },
    accountsTab: {
      ok: 'Está bem',
    },
    contactProfileTab: {
      ok: 'Está bem',
    },
    documentsAndFilesTab: {
      ok: 'Está bem',
    },
    settings: {
      categories: 'Categorias',
      types: 'Tipos',
      groups: 'Grupos',
      status: 'Status',
      addNewCategory: 'Adicionar Nova Categoria',
      addNewContactCategory: 'Adicionar nova categoria de contato',
      addNewCompanyCategory: 'Adicionar nova categoria de empresa',
      contactCategories: 'Categorias de contato',
      companyCategories: 'Categorias de empresa',
      addNewStatus: 'Adicionar novo status',
      addNewGroup: 'Adicionar Novo Grupo',
      addNewType: 'Adicionar Novo Tipo',
      setDefault: 'Conjunto padrão',
      item: {
        cancel: 'Cancelar',
        save: 'Salve ',
        CategoryName: 'Nome da Categoria',
        GroupName: 'Nome do grupo',
        StatusName: 'Nome do status',
        TypeName: 'Digite o nome',
        backgroundGradientTopColour: 'Cor superior do gradiente do fundo',
        backgroundGradientBottomColour: 'Cor do fundo gradiente',
        textColour: 'Cor do Texto',
        fieldTooShort: 'seu [FIELD] é muito curto, especifique algo com mais de [LENGTH] caracteres',
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
    ms: 'Em',
    miss: 'Senhorita',
    mrs: 'Sra',
    mx: 'Mx',
    master: 'mestre',
    dir: 'Senhor',
    madam: 'Senhora',
    dame: 'Dama',
    lord: 'senhor',
    lady: 'Senhora',
    viscount: 'Visconde',
    dr: 'Dr',
    prof: 'Prof',
    br: 'Br',
    sr: 'Sr',
    fr: 'Fr',
    rev: 'Rev',
    pr: 'Pr',
    elder: 'Mais velho',
  }
};
