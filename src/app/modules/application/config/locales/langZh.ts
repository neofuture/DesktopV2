import {LanguageModel} from '../language-model';

export const langZh: LanguageModel = {
  product: 'Desktop V2', // safe
  company: 'Oceanworks', // safe
  desktop: {
    ribbon: {
      contacts: '联络人',
      settings: '设定值',
      someLongerText: '一些较长的文字',
      catalogues: '产品目录',
      multiSelect: '多选',
      ghost: '鬼',
    },
    menu: {
      menu1: '菜单1',
      menu2: '菜单2',
      menu3: '菜单3',
      menu4: '菜单4',
    },
    window: {
      close: '关',
      minimise: '最小化',
      maximise: '最大化',
      centre: '中央',
      restore: '恢复',
      loading: '载入中',
      dockTop: '码头上衣',
      dockRight: '右码头',
      dockBottom: '码头底部',
      dockLeft: '左码头',
      dockTopLeft: '码头左上方',
      dockTopRight: '码头右上角',
      dockBottomLeft: '码头左下',
      dockBottomRight: '码头右下角',
      unDockWindow: '取消停靠窗口',
      moveWindow: '移动视窗',
      top: '最佳',
      width: '宽度',
      left: '剩下',
      height: '高度',
      login: '登录',
      newWindow: '新窗户',
      profile: '个人资料',
      setDockPosition: '设置码头位置',
      unsaved: '未保存',
      placeInPanel: '放置在面板中',
      removeFromPanel: '从面板上删除',
      about: '关于',
      demo: '演示版',
      demo1: '演示一',
      demo2: '演示二',
      demo3: '示范三',
      demo4: '演示四',
    },
    panel: {
      close: '关',
      dockTop: '码头上衣',
      dockRight: '右码头',
      dockBottom: '码头底部',
      dockLeft: '左码头',
      dockTopLeft: '码头左上方',
      dockTopRight: '码头右上角',
      dockBottomLeft: '码头左下',
      dockBottomRight: '码头右下角',
      unDockPanel: '取消停靠面板',
      moveWindow: '移动视窗',
      top: '最佳',
      width: '宽度',
      left: '剩下',
      height: '高度',
      setDockPosition: '设置码头位置',
      system: '系统',
    },
    toast: {
      close: '关',
      dismiss: '解雇',
      success: '成功',
      warning: '警告',
      information: '信息',
      error: '错误',
      loginSuccessful: '登陆成功',
      logoutSuccessful: '登出成功',
      loginFailed: '登录失败',
    },
    dialog: {
      ok: '好',
      cancel: '取消',
      close: '关',
      yes: '是',
      no: '没有',
      agree: '同意',
      disagree: '不同意',
      decline: '下降',
      closeWindow: '关闭窗口',
      youHaveUnsavedContentAreYouSureYouWantToCloseThisWindow: '您有未保存的内容。 <br><br>您确定要关闭此窗口吗？',
      newPanel: '新面板',
      pleaseSpecifyYourPanelName: '请指定您的面板名称',
      panelName: '面板名称',
      left: '剩下',
      width: '宽度',
      createPanel: '创建面板',
      closePanel: '关闭面板',
      doYouWantToCloseTheWindows: '您要关闭窗户吗？',
      keepWindows: '保持Windows',
      closeWindows: '关闭视窗',
    },
    tabBar : {
      autoHide: '自动隐藏',
    },
    newWindow: '新窗户',
    loading: '载入中...',
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
      settings: '设定值',
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
      skipBack: '向后跳',
      skipForward: '向前跳',
      mute: '静音',
      unMute: '取消静音',
      pictureInPicture: '图片展示',
      errorLoadingVideo: '加载视频时出错',
      restart: '重新启动影片',
      settings: '设定值',
    }
  },
  system: {
    example: {
      test: '测试OK',
    },
    engine: {},
    userLogin: {
      username: '用户名',
      password: '密码',
      login: '登录',
      pleaseWaitLoggingIn: '请稍候...',
    },
    userMenu: {
      profile: '个人资料',
      logout: '登出',
    },
    splash: {
      close: '关',
      autoCloseIn: '自动关闭',
    },
    about: {
      close: '关',
    }
  }
};
