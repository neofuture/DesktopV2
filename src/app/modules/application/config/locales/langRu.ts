import {LanguageModel} from '../language-model';

export const langRu: LanguageModel = {
  product: 'Desktop V2', // safe
  company: 'Oceanworks', // safe
  desktop: {
    ribbon: {
      contacts: 'контакты',
      settings: 'настройки',
      someLongerText: 'Немного длиннее текст',
      catalogues: 'Каталоги',
      multiSelect: 'Выбор из нескольких вариантов',
      ghost: 'Призрак',
    },
    menu: {
      menu1: 'Меню 1',
      menu2: 'Меню 2',
      menu3: 'Меню 3',
      menu4: 'Меню 4',
    },
    window: {
      close: 'близко',
      minimise: 'Свести к минимуму',
      maximise: 'Максимизация',
      centre: 'Центр',
      restore: 'Восстановить',
      loading: 'загрузка',
      dockTop: 'Док-топ',
      dockRight: 'Док справа',
      dockBottom: 'Док-низ',
      dockLeft: 'Док слева',
      dockTopLeft: 'Док вверху слева',
      dockTopRight: 'Док вверху справа',
      dockBottomLeft: 'Док снизу слева',
      dockBottomRight: 'Док снизу справа',
      unDockWindow: 'Открепить окно',
      moveWindow: 'Переместить окно',
      top: 'верхний',
      width: 'Ширина',
      left: 'Осталось',
      height: 'Рост',
      login: 'Авторизоваться',
      newWindow: 'Новое окно',
      profile: 'Профиль',
      setDockPosition: 'Установить положение дока',
      unsaved: 'неспасенный',
      placeInPanel: 'Поместить в панель',
      removeFromPanel: 'Удалить с панели',
      about: 'Около',
      demo: 'демонстрация',
      demo1: 'Демо первый',
      demo2: 'Демо 2',
      demo3: 'Демо Третья',
      demo4: 'Демо четвертая',
    },
    panel: {
      close: 'близко',
      dockTop: 'Док-топ',
      dockRight: 'Док справа',
      dockBottom: 'Док-низ',
      dockLeft: 'Док слева',
      dockTopLeft: 'Док вверху слева',
      dockTopRight: 'Док вверху справа',
      dockBottomLeft: 'Док снизу слева',
      dockBottomRight: 'Док снизу справа',
      unDockPanel: 'Отстыковать панель',
      moveWindow: 'Переместить окно',
      top: 'верхний',
      width: 'Ширина',
      left: 'Осталось',
      height: 'Рост',
      setDockPosition: 'Установить положение дока',
      system: 'Система',
    },
    toast: {
      close: 'близко',
      dismiss: 'отклонять',
      success: 'успех',
      warning: 'Предупреждение',
      information: 'Информация',
      error: 'ошибка',
      loginSuccessful: 'Успешный вход в систему',
      logoutSuccessful: 'Выход выполнен успешно',
      loginFailed: 'Вход в систему не удался',
    },
    dialog: {
      ok: 'хорошо',
      cancel: 'Отмена',
      close: 'близко',
      yes: 'да',
      no: 'нет',
      agree: 'Согласен',
      disagree: 'не соглашаться',
      decline: 'снижение',
      closeWindow: 'Закрытое окно',
      youHaveUnsavedContentAreYouSureYouWantToCloseThisWindow: 'У вас есть несохраненный контент. <br><br> Вы уверены, что хотите закрыть это окно?',
      newPanel: 'Новая панель',
      pleaseSpecifyYourPanelName: 'Укажите название вашей панели',
      panelName: 'Название панели',
      left: 'Осталось',
      width: 'Ширина',
      createPanel: 'Создать панель',
      closePanel: 'Закрыть панель',
      doYouWantToCloseTheWindows: 'Вы хотите закрыть окна?',
      keepWindows: 'Сохранить Windows',
      closeWindows: 'Закрыть окна',
    },
    tabBar : {
      autoHide: 'Авто-скрытие',
    },
    newWindow: 'Новое окно',
  },
  components: {
    languageSelector: {
      language: 'langRu',
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
      settings: 'настройки',
      ribbonSize: 'Размер ленты',
      tabBarAutoHide: 'Панель вкладок автоматически скрывается',
      small: 'Маленький',
      large: 'большой',
    },
    videoPlayer: {
      play: 'Играть',
      pause: 'Пауза',
      volume: 'объем',
      fullScreen: 'Перейти в полноэкранный режим',
      exitFullScreen: 'Выйти из полноэкранного режима',
      skipBack: 'Перейти назад',
      skipForward: 'Перейти вперед',
      mute: 'безгласный',
      unMute: 'Un-Mute',
      pictureInPicture: 'Показать картинку в картинке',
      errorLoadingVideo: 'Ошибка загрузки видео',
      restart: 'Перезапустить видео',
      settings: 'настройки',
    }
  },
  system: {
    example: {
      test: 'Тестирование ОК',
    },
    engine: {},
    userLogin: {
      username: 'имя пользователя',
      password: 'пароль',
      login: 'Авторизоваться',
      pleaseWaitLoggingIn: 'Пожалуйста, подождите...',
    },
    userMenu: {
      profile: 'Профиль',
      logout: 'Выйти',
    },
    splash: {
      close: 'близко',
      autoCloseIn: 'Автоматическое закрытие в',
    },
    about: {
      close: 'близко',
    }
  }
};
