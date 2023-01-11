import {LanguageModel} from '../language-model';

export const langZh: LanguageModel = {
  product: 'Xectra', // safe
  company: 'Xectra Digital', // safe
  desktop: {
    ribbon: {
      contacts: '接触',
      settings: '设置',
      someLongerText: '一些较长的文本',
      catalogues: '目录',
      multiSelect: '多选',
      ghost: '鬼',
      planMode1: '计划模式 1',
      planMode2: '计划模式 2',
      planMode3: '计划模式 3',
      planMode4: '计划模式 4',
      deleteRecord: '删除记录',
      saveRecord: '保存记录',
      addRecord: '添加记录',
      sendEmail: '发送电子邮件',
      editSettings: '编辑设置',
      cancelAddingRecord: '取消添加新记录',
      discardChanges: '放弃更改',
      notesAndHistory: '注释和历史',
      supportTickets: '支持票证',
      accounts: '帐户',
      contactProfile: '联系人资料',
      documentsAndFiles: '文档和文件',
    },
    menu: {
      menu1: '菜单 1',
      menu2: '菜单 2',
      menu3: '菜单 3',
      menu4: '菜单 4',
    },
    window: {
      close: '关闭',
      minimise: '减少',
      maximise: '最大化',
      centre: '中心',
      restore: '恢复',
      loading: '装载',
      dockTop: '坞站顶部',
      dockRight: '右停靠',
      dockBottom: '坞站底部',
      dockLeft: '停靠左侧',
      dockTopLeft: '停靠栏左上角',
      dockTopRight: '停靠栏右上角',
      dockBottomLeft: '停靠栏左下角',
      dockBottomRight: '停靠栏右下角',
      unDockWindow: '取消停靠窗口',
      moveWindow: '移动窗口',
      top: '返回页首',
      width: '宽度',
      left: '左',
      height: '高度',
      resetWindowPosition: '重置窗口位置',
      login: '登录',
      newWindow: '新窗口',
      profile: '轮廓',
      setDockPosition: '设置停靠位置',
      unsaved: '未保存',
      placeInPanel: '放置在面板中',
      removeFromPanel: '从面板中删除',
      about: '大约',
      demo: '演示',
      demo1: '演示一',
      demo2: '演示二',
      demo3: '演示三',
      demo4: '演示四',
      contactManager: '联系人经理',
      addHistory: '添加历史记录',
      addSupportTicket: '添加支持票证',
      editSettings: '编辑设置',
      search: '搜索',
      editCategoryItem: '编辑类别项',
      editGroupItem: '编辑组项目',
      editStatusItem: '编辑状态项',
      editTypeItem: '编辑类型项',
      addCategoryItem: '添加类别项',
      addGroupItem: '添加组项',
      addStatusItem: '添加状态项',
      addTypeItem: '添加文字项',
      notesHistory: '注释和历史',
      supportTickets: '支持票证',
      planner: '计划',
    },
    panel: {
      close: '关闭',
      dockTop: '坞站顶部',
      dockRight: '右停靠',
      dockBottom: '坞站底部',
      dockLeft: '停靠左侧',
      dockTopLeft: '停靠栏左上角',
      dockTopRight: '停靠栏右上角',
      dockBottomLeft: '停靠栏左下角',
      dockBottomRight: '停靠栏右下角',
      unDockPanel: '取消停靠面板',
      moveWindow: '移动窗口',
      top: '返回页首',
      width: '宽度',
      left: '左',
      height: '高度',
      setDockPosition: '设置停靠位置',
      system: '系统',
    },
    toast: {
      close: '关闭',
      dismiss: '解雇',
      success: '成功',
      warning: '警告',
      information: '信息',
      error: '错误',
      loginSuccessful: '登录成功',
      logoutSuccessful: '注销成功',
      loginFailed: '登录失败',
    },
    dialog: {
      ok: '还行',
      cancel: '取消',
      close: '关闭',
      yes: '是的',
      no: '不',
      agree: '同意',
      disagree: '反对',
      decline: '下降',
      closeWindow: '关闭窗口',
      youHaveUnsavedContentAreYouSureYouWantToCloseThisWindow: '您有未保存的内容。<br><br>您确定要关闭此窗口吗？',
      newPanel: '新建面板',
      pleaseSpecifyYourPanelName: '请指定您的小组名称',
      panelName: '面板名称',
      left: '左',
      width: '宽度',
      createPanel: '创建面板',
      closePanel: '关闭面板',
      doYouWantToCloseTheWindows: '你想关窗户吗？',
      keepWindows: '保持窗户',
      closeWindows: '关闭窗口',
      discardChanges: '放弃更改',
      areYouSureYouWishToDiscardYourChanges: '您确定要放弃更改吗？',
      discard: '丢弃',
      deleteRecord: '删除记录',
      areYouSureYouWishToDeleteThisRecord: '是否确实要删除此记录？',
      delete: '删除',
    },
    tabBar: {
      autoHide: '自动隐藏',
    },
    newWindow: '新窗口',
    loading: '装载。。。',
  },
  components: {
    languageSelector: {
      language: 'langZh',
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
      settings: '设置',
      ribbonSize: '碳带尺寸',
      tabBarAutoHide: '标签栏自动隐藏',
      small: '小',
      large: '大',
    },
    videoPlayer: {
      play: '玩',
      pause: '暂停',
      volume: '卷',
      fullScreen: '切换到全屏',
      exitFullScreen: '退出全屏',
      skipBack: '跳回',
      skipForward: '向前跳跃',
      mute: '静音',
      unMute: '取消静音',
      pictureInPicture: '显示画中画',
      errorLoadingVideo: '加载视频时出错',
      restart: '重启视频',
      settings: '设置',
    }
  },
  system: {
    example: {
      test: '测试正常',
    },
    engine: {},
    userLogin: {
      username: '用户名',
      password: '密码',
      login: '登录',
      pleaseWaitLoggingIn: '请稍候。。。',
    },
    userMenu: {
      profile: '轮廓',
      logout: '注销',
    },
    splash: {
      close: '关闭',
      autoCloseIn: '自动关闭',
    },
    about: {
      close: '关闭',
    }
  },
  contactManager: {
    noRecordsFound: '未找到记录',
    recordChanged: '记录已更改 ***',
    addingNewRecord: '新纪录***',
    ofCount: '的 [计数]',
    editSettings: '编辑设置',
    pleaseSelect: '请选择',
    advancedSearch: '高级搜索',
    switchView: '切换视图',
    name: '名字',
    forename: '福纳姆',
    surname: '姓',
    address: '地址',
    town: '城镇/城市',
    county: '县',
    postcode: '邮政编码',
    lookup: '查找',
    country: '国家',
    jobTitle: '职称',
    department: '部门',
    work: '工作',
    fax: '传真',
    mobile: '移动',
    email: '电子邮件',
    group: '群',
    category: '类别',
    updateRecord: '更新记录',
    newRecord: '新纪录',
    deleteRecord: '删除记录',
    created: '创建',
    updated: '更新',
    lastUpdatedBy: '最后更新者',
    lastLogin: '上次登录',
    start: '首条记录',
    previous50: '返回 50 条记录',
    previous: '上一条记录',
    next: '下一条记录',
    next50: '转发 50 条记录',
    end: '最后一条记录',
    categories: '类别',
    accountNumber: '户口号码',
    company: '公司',
    type: '类型',
    status: '地位',
    website: '网站',
    contactAssociations: '联系协会',
    general: '常规',
    authentication: '认证',
    otherInfo: '其他信息',
    companySettings: '公司设置',
    access: '访问',
    username: '用户名',
    password: '密码',
    allowLogin: '允许登录',
    notesAndHistory: '注释和历史',
    supportTickets: '支持票证',
    accounts: '帐户',
    contactProfile: '联系人资料',
    documentsAndFiles: '文档和文件',
    searching: '搜索。。。',
    selectAddress: '选择地址',
    addressNotListed: '地址未列出',
    pleaseWaitLoading: '请稍候。装载。。。',
    readOnly: '只读***',
    public: '公共',
    private: '私人',
    addedBy: '添加者',
    updatedBy: '更新者',
    Administrator: '管理员',
    Moderator: '主持人',
    Manager: '管理',
    Supervisor: '主管',
    User: '用户',
    None: '没有',
    Opportunity: '机会',
    Prospect: '展望',
    'Not Contacted': '未联系',
    'Appointment Booked': '预约已预订',
    '2nd Appointment Booked': '第二次预约预订',
    'Awaiting Decision': '等待决定',
    Customer: '客户',
    Staff: '员工',
    Contacts: '接触',
    Suppliers: '供应商',
    Live: '住',
    Lead: '死',
    contactRecords: '联系人记录',
    companyRecords: '公司记录',
    yourRecordHasBeenSaved: '您的记录已保存',
    pleaseEnterALongerSurname: '请输入更长的姓氏',
    pleaseEnterALongerCompanyName: '请输入更长的公司名称',
    pleaseSpecifyUserAuthDetails: '请指定用户身份验证详细信息',
    yourRecordHasBeenDeleted: '您的记录已被删除',
    notesAndHistoryTab: {
      addNotesOrHistory: '添加备注或历史记录',
      addSupportTicket: '添加支持票证',
      type: '类型',
      date: '日期',
      time: '时间',
      contact: '联系',
      agent: '代理',
      popOut: '弹出到新窗口中',
      noteComponent: {
        notes: '笔记',
        supportCall: '支持电话',
        openNote: '打开笔记',
        openSupportTicket: '打开支持票证',
      }
    },
    accountsTab: {
      ok: '还行',
    },
    contactProfileTab: {
      ok: '还行',
    },
    documentsAndFilesTab: {
      ok: '还行',
    },
    settings: {
      categories: '类别',
      types: '类型',
      groups: '组',
      status: '地位',
      addNewCategory: '添加新类别',
      addNewContactCategory: '添加新联系人类别',
      addNewCompanyCategory: '添加新的公司类别',
      contactCategories: '联系人类别',
      companyCategories: '公司类别',
      addNewStatus: '添加新状态',
      addNewGroup: '添加新组',
      addNewType: '添加新类型',
      setDefault: '设置默认值',
      item: {
        cancel: '取消',
        save: '救',
        CategoryName: '类别名称',
        GroupName: '组名称',
        StatusName: '状态名称',
        TypeName: '类型名称',
        backgroundGradientTopColour: '背景渐变顶部颜色',
        backgroundGradientBottomColour: '背景渐变底部颜色',
        textColour: '文本颜色',
        fieldTooShort: '您的 [字段] 太短，请指定比 [长度] 字符长的内容',
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
    mr: '先生',
    ms: '女士',
    miss: '思念',
    mrs: '太太',
    mx: '墨西哥',
    master: '主人',
    dir: '先生',
    madam: '夫人',
    dame: '圣母 院',
    lord: '主',
    lady: '女士',
    viscount: '子爵',
    dr: '博士',
    prof: '教授',
    br: '溴',
    sr: '锶',
    fr: '周五',
    rev: '转速',
    pr: '公关',
    elder: '长老',
  }
};
