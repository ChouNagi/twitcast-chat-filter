// ==UserScript==
// @name         Twitcast Chat Filter
// @namespace    https://github.com/ChouNagi
// @version      1.0.3
// @source       https://github.com/ChouNagi/twitcast-chat-filter
// @description  Detects LiveTL in Twitcast comments, and displays them as subtitles or in a separate feed. Also allows filtering comments.
// @match        http://twitcasting.tv/*
// @match        http://en.twitcasting.tv/*
// @match        http://ja.twitcasting.tv/*
// @match        https://twitcasting.tv/*
// @match        https://en.twitcasting.tv/*
// @match        https://ja.twitcasting.tv/*
// @author       ChouNagi
// @downloadURL  https://github.com/ChouNagi/twitcast-chat-filter/raw/main/twitcast-chat-filter.user.js
// @updateURL    https://github.com/ChouNagi/twitcast-chat-filter/raw/main/twitcast-chat-filter.user.js
// @icon         data:image/png;base64,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
// @grant        none
// ==/UserScript==

// Special Thanks:
// - MikeCRB (Spanish TL Check)
// - Naruhodon't (Portuguese TL Check)
// - KroketHamster (Dutch TL Check)
// - Google Translate

(function() {

  if((window.location + '').indexOf('mwebanimation.php?m=1') != -1) {
    return;
  }

  var DEBUG = false;

  var debugLog = function(thing) {
    if(DEBUG) {
      console.log(thing);
    }
  }

  debugLog("[TCF]: script running");
  var initialized = false;
  var initializeInterval = null;


  var formatTime = function( time ) {
    var milliseconds = ((time * 1000) | 0) - ((time | 0) * 1000);
  	var seconds = ((time | 0) % 60);
  	var minutes = (((time | 0) - seconds) / 60) % 60;
  	var hours = ((time | 0) - (minutes * 60) - seconds) / 3600;
    return ('' + (hours < 10 ? '0' : '') + hours + ":" + (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds);
  }

  var live_chat_element;

  var init = function() {
    if(live_chat_element != null) {
      return;
    }
  	debugLog("[TCF]: initializing");
    live_chat_element = document.querySelector('#comment-list-app .tw-comment-list-view__scroller');
    if(live_chat_element == null) {
       return;
    }

    window.clearInterval(initializeInterval);

    var watchingArchive = false;
    var watchingLive = false;


    var TWITCAST_TIME_REGEX = /(\d+)\/(\d+)\/(\d+) (\d+):(\d+):(\d+)(?:\s+([AP]M))?/;
    var TWITCAST_VIDEO_TIME_REGEX = /(?:(\d+):)?(\d+):(\d+)/;

    var translation_comments = { };
    var translation_authors = { };

    var seen_comment_ids = { };

    var authors = { };

    var videoStartTime = null;
    var lastVideoTime = null;

  	var lastVideoTimeOffsetForComment = 0;

    var parseComment = function(element, live) {

      live = !!live;

      var now = new Date().getTime();

      var iconElement = element.querySelector('.tw-comment-item-icon img');
      var userNameElement = element.querySelector('.tw-comment-item-name');
      var userIdElement = element.querySelector('.tw-comment-item-screen-id');
      var commentElement = element.querySelector('.tw-comment-item-comment');
      var dateElement = element.querySelector('.tw-comment-item-date');

      var icon = (iconElement ? iconElement.src : '').trim() || null;
      var username = (userNameElement ? userNameElement.textContent : '').trim() || null;
      var userId = (userIdElement ? userIdElement.textContent : '').trim() || null;
      var commentText = (commentElement ? commentElement.textContent : '').trim() || null;
      var dateString = (dateElement ? dateElement.getAttribute('datetime') : '').trim() || null;

      var dateGroups = dateString ? dateString.match(TWITCAST_TIME_REGEX) : null;

      var date;
      if(dateGroups && dateGroups[7] == 'AM') {
        var am_year = dateGroups[3] * 1;
        var am_month = dateGroups[1] * 1;
        if(am_month < 10) {
        	am_month = '0' + am_month;
        }
        var am_day = dateGroups[2] * 1;
        if(am_day < 10) {
        	am_day = '0' + am_day;
        }
        var am_hour = dateGroups[4] * 1;
        if(am_hour == 12) {
        	am_hour = 0;
        }
        if(am_hour < 10) {
        	am_hour = '0' + am_hour;
        }
        var am_minute = dateGroups[5] * 1;
        if(am_minute < 10) {
        	am_minute = '0' + am_minute;
        }
        var am_second = dateGroups[6] * 1;
        if(am_second < 10) {
        	am_second = '0' + am_second;
        }
        date = Date.parse(am_year + '-' + am_month + '-' + am_day + 'T' + am_hour + ':' + am_minute + ':' + am_second);
      }
      else if(dateGroups && dateGroups[7] == 'PM') {
        var pm_year = dateGroups[3] * 1;
        var pm_month = dateGroups[1] * 1;
        if(pm_month < 10) {
        	pm_month = '0' + pm_month;
        }
        var pm_day = dateGroups[2] * 1;
        if(pm_day < 10) {
        	pm_day = '0' + pm_day;
        }
        var pm_hour = dateGroups[4] * 1;
        if(pm_hour == 0) {
        	pm_hour = '00';
        }
        else if(pm_hour < 12) {
        	pm_hour += 12;
        }
        var pm_minute = dateGroups[5] * 1;
        if(pm_minute < 10) {
        	pm_minute = '0' + pm_minute;
        }
        var pm_second = dateGroups[6] * 1;
        if(pm_second < 10) {
        	pm_second = '0' + pm_second;
        }
        date = Date.parse(pm_year + '-' + pm_month + '-' + pm_day + 'T' + pm_hour + ':' + pm_minute + ':' + pm_second);
      }
      else if(dateGroups) {
        var year = dateGroups[3] * 1;
        var month = dateGroups[1] * 1;
        if(month < 10) {
        	month = '0' + month;
        }
        var day = dateGroups[2] * 1;
        if(day < 10) {
        	day = '0' + day;
        }
        var hour = dateGroups[4] * 1;
        if(hour < 10) {
        	hour = '0' + hour;
        }
        var minute = dateGroups[5] * 1;
        if(minute < 10) {
        	minute = '0' + minute;
        }
        var second = dateGroups[6] * 1;
        if(second < 10) {
        	second = '0' + second;
        }
        date = Date.parse(year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second);
      }
      else if(live) {
      	date = new Date().getTime();
      }
      else {
      	date = null;
      }

      var user = authors[userId] || null;

      if(user == null) {
        user = { };
        user.id = userId;
        user.image = icon;
        user.name = username;
        authors[userId] = user;
      }

      var commentId = userId + '_' + (date || dateString);

      var comment = { };
      comment.id = commentId;
      comment.text = commentText;
      comment.author = user;
      comment.dateSeen = now;
      if(lastVideoTime != null) {
      	comment.videoTimeSeen = lastVideoTime;
      }
      if(date) {
      	comment.datePosted = date;
        if(lastVideoTime != null) {
 		     	comment.videoTimePosted = (date - videoStartTime) / 1000;
      	}
      }
      return comment;
    }

    var FALLBACK_LANGUAGE = 'en';

    // Languages awaiting TLC:
    // - Indonesian
    // - German
    // - Japanese
    // - Chinese

    var INTERFACE_TRANSLATIONS = {
      'in': {
        'LANGUAGE_NAME': 'Bahasa Indonesia',
        'SETTINGS_POPUP_TITLE': 'Filter obrolan Twitcast',
        'SETTINGS_POPUP_INTERFACE_LANGUAGE': 'Bahasa antarmuka',
        'SETTINGS_POPUP_TRANSLATION_REGEXES': 'Regex untuk komentar terjemahan',
        'SETTINGS_POPUP_TRANSLATOR_USERNAMES': 'Penerjemah',
        'SETTINGS_POPUP_HIDE_COMMENTS_WITH_TEXT_MATCHING_REGEXES': 'Sembunyikan komentar yang cocok dengan ekspresi reguler',
        'SETTINGS_POPUP_HIDE_COMMENTS_BY_USERS': 'Sembunyikan komentar oleh pengguna',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY': 'Visibilitas komentar terjemahan',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_HIDE': 'Sembunyikan komentar',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_NORMAL': 'Tampilkan komentar secara normal',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_EMPHASISE': 'Tekankan komentar',
        'SETTINGS_POPUP_SHOW_TRANSLATION_FEED': 'Tampilkan umpan terjemahan',
        'SETTINGS_POPUP_SHOW_SUBTITLES': 'Tampilkan subtitle',
        'OPEN_SETTINGS_POPUP_BUTTON_TEXT': '[Pengaturan TCF]'
      },
      'de': {
        'LANGUAGE_NAME': 'Deutsch',
        'SETTINGS_POPUP_TITLE': 'Twitcast Chat Filter',
        'SETTINGS_POPUP_INTERFACE_LANGUAGE': 'Schnittstellensprache',
        'SETTINGS_POPUP_TRANSLATION_REGEXES': 'Übersetzungskommentar Regex',
        'SETTINGS_POPUP_TRANSLATOR_USERNAMES': 'Übersetzer',
        'SETTINGS_POPUP_HIDE_COMMENTS_WITH_TEXT_MATCHING_REGEXES': 'Kommentare ausblenden, die mit den unten stehenden Regex übereinstimmen',
        'SETTINGS_POPUP_HIDE_COMMENTS_BY_USERS': 'Kommentare von Benutzern ausblenden',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY': 'Sichtbarkeit von Übersetzungskommentaren',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_HIDE': 'Ausblenden',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_NORMAL': 'Nichts tun, normal anzeigen',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_EMPHASISE': 'Betonen',
        'SETTINGS_POPUP_SHOW_TRANSLATION_FEED': 'Übersetzungs-Feed anzeigen',
        'SETTINGS_POPUP_SHOW_SUBTITLES': 'Untertitel anzeigen',
        'OPEN_SETTINGS_POPUP_BUTTON_TEXT': '[TCF-Einstellungen]'
      },
      'en': {
        'LANGUAGE_NAME': 'English',
        'SETTINGS_POPUP_TITLE': 'Twitcast Chat Filter',
        'SETTINGS_POPUP_INTERFACE_LANGUAGE': 'Interface Language',
        'SETTINGS_POPUP_TRANSLATION_REGEXES': 'Translation Regexes',
        'SETTINGS_POPUP_TRANSLATOR_USERNAMES': 'Translators',
        'SETTINGS_POPUP_HIDE_COMMENTS_WITH_TEXT_MATCHING_REGEXES': 'Hide Comments with Text matching Regexes',
        'SETTINGS_POPUP_HIDE_COMMENTS_BY_USERS': 'Hide Comments by Users',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY': 'What to do with Translation Comments in Chat',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_HIDE': 'Hide',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_NORMAL': 'Show Normally',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_EMPHASISE': 'Emphasise',
        'SETTINGS_POPUP_SHOW_TRANSLATION_FEED': 'Show Translation Feed',
        'SETTINGS_POPUP_SHOW_SUBTITLES': 'Show Subtitles',
        'OPEN_SETTINGS_POPUP_BUTTON_TEXT': '[TCF Settings]'
      },
      'es': {
        'LANGUAGE_NAME': 'Español',
        'SETTINGS_POPUP_TITLE': 'Filtro de chat de Twitcast',
        'SETTINGS_POPUP_INTERFACE_LANGUAGE': 'Lenguaje de interfaz',
        'SETTINGS_POPUP_TRANSLATION_REGEXES': 'Regex de traducción',
        'SETTINGS_POPUP_TRANSLATOR_USERNAMES': 'Traductores',
        'SETTINGS_POPUP_HIDE_COMMENTS_WITH_TEXT_MATCHING_REGEXES': 'Ocultar comentarios con texto que coincida con expresiones regulares',
        'SETTINGS_POPUP_HIDE_COMMENTS_BY_USERS': 'Ocultar comentarios de los usuarios',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY': 'Qué hacer con los comentarios de traducción en el chat',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_HIDE': 'Ocultar',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_NORMAL': 'Mostrar normalmente',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_EMPHASISE': 'Enfatizar',
        'SETTINGS_POPUP_SHOW_TRANSLATION_FEED': 'Mostrar lista de traducciones recientes',
        'SETTINGS_POPUP_SHOW_SUBTITLES': 'Mostrar subtítulos',
        'OPEN_SETTINGS_POPUP_BUTTON_TEXT': '[TCF Ajustes]'
      },
      'nl': {
        'LANGUAGE_NAME': 'Nederlands',
        'SETTINGS_POPUP_TITLE': 'Twitcast Chatfilter',
        'SETTINGS_POPUP_INTERFACE_LANGUAGE': 'Interfacetaal',
        'SETTINGS_POPUP_TRANSLATION_REGEXES': 'Vertaalregexes',
        'SETTINGS_POPUP_TRANSLATOR_USERNAMES': 'Vertaler gebruikersnamen',
        'SETTINGS_POPUP_HIDE_COMMENTS_WITH_TEXT_MATCHING_REGEXES': 'Verberg opmerkingen met tekst die overeenkomt met deze regexes',
        'SETTINGS_POPUP_HIDE_COMMENTS_BY_USERS': 'Opmerkingen van deze gebruikers verbergen',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY': 'Wat te doen met vertaalopmerkingen?',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_HIDE': 'Opmerkingen verbergen',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_NORMAL': 'Opmerkingen normaal weergeven',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_EMPHASISE': 'Opmerkingen benadrukken',
        'SETTINGS_POPUP_SHOW_TRANSLATION_FEED': 'Vertaalfeed weergeven',
        'SETTINGS_POPUP_SHOW_SUBTITLES': 'Ondertiteling weergeven',
        'OPEN_SETTINGS_POPUP_BUTTON_TEXT': '[TCF Instellingen]'
      },
      'pt': {
        'LANGUAGE_NAME': 'Português',
        'SETTINGS_POPUP_TITLE': 'Filtro de bate-papo do Twitcast',
        'SETTINGS_POPUP_INTERFACE_LANGUAGE': 'Idioma da interface',
        'SETTINGS_POPUP_TRANSLATION_REGEXES': 'Regexes de tradução',
        'SETTINGS_POPUP_TRANSLATOR_USERNAMES': 'Nomes de usuário do tradutor',
        'SETTINGS_POPUP_HIDE_COMMENTS_WITH_TEXT_MATCHING_REGEXES': 'Ocultar comentários com texto que corresponda a esses regexes',
        'SETTINGS_POPUP_HIDE_COMMENTS_BY_USERS': 'Ocultar comentários desses usuários',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY': 'O que fazer com comentários de tradução?',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_HIDE': 'Ocultar comentários',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_NORMAL': 'Mostrar comentários normalmente',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_EMPHASISE': 'Enfatizar comentários',
        'SETTINGS_POPUP_SHOW_TRANSLATION_FEED': 'Mostrar feed de tradução',
        'SETTINGS_POPUP_SHOW_SUBTITLES': 'Mostrar legendas',
        'OPEN_SETTINGS_POPUP_BUTTON_TEXT': '[Configurações de TCF]'
      },
      'ja': {
        'LANGUAGE_NAME': '日本語',
        'SETTINGS_POPUP_TITLE': 'ツイキャス・チャットフィルター',
        'SETTINGS_POPUP_INTERFACE_LANGUAGE': 'インターフェース・言語',
        'SETTINGS_POPUP_TRANSLATION_REGEXES': '通訳コメントの正規表現',
        'SETTINGS_POPUP_TRANSLATOR_USERNAMES': '通訳者のユーザー名',
        'SETTINGS_POPUP_HIDE_COMMENTS_WITH_TEXT_MATCHING_REGEXES': '見たくないコメントの正規表現',
        'SETTINGS_POPUP_HIDE_COMMENTS_BY_USERS': '書いた人によってコメント隠す',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY': 'チャットの翻訳コメントにはどうしたい？',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_HIDE': '隠す',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_NORMAL': '何もしない、普通に表示する',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_EMPHASISE': '強調する',
        'SETTINGS_POPUP_SHOW_TRANSLATION_FEED': '翻訳フィードを表示する',
        'SETTINGS_POPUP_SHOW_SUBTITLES': '字幕を表示する',
        'OPEN_SETTINGS_POPUP_BUTTON_TEXT': '【TCF・設定】'
      },
      'zh': {
        'LANGUAGE_NAME': '中文',
        'SETTINGS_POPUP_TITLE': 'Twitcast 聊天過濾器',
        'SETTINGS_POPUP_INTERFACE_LANGUAGE': '界面語言',
        'SETTINGS_POPUP_TRANSLATION_REGEXES': '翻譯 正則表達式',
        'SETTINGS_POPUP_TRANSLATOR_USERNAMES': '譯者',
        'SETTINGS_POPUP_HIDE_COMMENTS_WITH_TEXT_MATCHING_REGEXES': '隱藏聊天中匹配正則表達式的評論',
        'SETTINGS_POPUP_HIDE_COMMENTS_BY_USERS': '隱藏用戶評論',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY': '如何處理翻譯人員在聊天中的評論',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_HIDE': '隱藏評論',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_NORMAL': '正常顯示評論',
        'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_EMPHASISE': '強調評論',
        'SETTINGS_POPUP_SHOW_TRANSLATION_FEED': '顯示翻譯提要',
        'SETTINGS_POPUP_SHOW_SUBTITLES': '顯示字幕',
        'OPEN_SETTINGS_POPUP_BUTTON_TEXT': '【TCF 設置】'
      }
    };

    var openSettingsPanelButton = null;
    var settingsPanelOverlay = null;
    var settingsPanelPopup = null;
    var settingsPanelCloseButton = null;
    var settingsPanelInterfaceLanguageLabel = null;
    var settingsPanelInterfaceLanguageDropdown = null;

    var subtitleOverlay = null;
    var translationFeed = null;


    var getSupportedLanguages = function() {
      return Object.keys(INTERFACE_TRANSLATIONS);
    }

    var getDefaultLanguage = function() {
      var language = (window.navigator.userLanguage || window.navigator.language || FALLBACK_LANGUAGE).toLowerCase();
      if(getSupportedLanguages().indexOf(language) == -1) {
        language = FALLBACK_LANGUAGE;
      }
      return language;
    }

    var settings = null;
    var defaults = {
      language: getDefaultLanguage(),
      translationRegexes: [
        '\\[(?:EN|en)\\]',
        '\\[(?:中文|CN|cn|ZH|zh)\\]'
      ],
      translatorUserNames: [ ],
      hideCommentsWithTextMatchingRegexes: [ ],
      hideCommentsByUsers: [ ],
      translationCommentVisibility: 'emphasise',
      showSubtitles: true,
      showTranslationFeed: true
    };

    var getTranslation = function(key, languageCode) {
      languageCode = languageCode || settings.language;

      if(languageCode == 'jp') {
        languageCode = 'ja';
      }
      if(languageCode == 'cn') {
        languageCode = 'zh';
      }

      if(INTERFACE_TRANSLATIONS.hasOwnProperty(languageCode)) {
        if(INTERFACE_TRANSLATIONS[languageCode].hasOwnProperty(key)) {
          return INTERFACE_TRANSLATIONS[languageCode][key];
        }
      }
      return key;
    }

    var loadSettings = function() {
      var storagePromise = null;
      if(window.GM && window.GM.getValue) {
        // userscript specific storage
        debugLog('[TCF] loading settings  with GM.getValue');
        storagePromise = GM.getValue('twitcast-chat-filter-settings');
      }
      else {
        var storage;
        if(window.unsafeWindow && window.unsafeWindow.localStorage) {
        	debugLog('[TCF] loading settings with window.unsafeWindow.localStorage');
          storage = window.unsafeWindow.localStorage;
        }
        else {
        	debugLog('[TCF] loading settings with window.localStorage');
        	storage = window.localStorage;
        }

        try {
          var settingsJSON = storage['twitcast-chat-filter-settings'];
          storagePromise = Promise.resolve(settingsJSON);
        }
        catch(e) {
          console.error(e);
          storagePromise = Promise.resolve('{}');
        }
      }

      return storagePromise.then(function(value) {
        debugLog('[TCF] loaded value from storage: ' + value);
        if(value) {
          try {
            settings = JSON.parse(value);
          }
          catch(e) {
            console.error(e);
            settings = { };
          }
        }
        else {
          settings = { };
        }
        validateSettings();
        return settings;
      }, function() {
        validateSettings();
        return settings;
      });
    }

    var validateSettings = function() {

      if(settings == null) {
      	settings = { };
      }
      for(var prop in defaults) {
        if(defaults.hasOwnProperty(prop) && (!settings.hasOwnProperty(prop) || ((typeof settings[prop]) != (typeof defaults[prop])))) {
          var value = defaults[prop];
          if(Array.isArray(value)) {
            value = value.slice();
          }
          settings[prop] = value;
        }
      }
      return settings;
    }

    var saveSettings = function() {
      var settingsJSON;
      try {
        settingsJSON = JSON.stringify(settings);
      }
      catch(e) {
      	console.error(e);
        return Promise.reject(e);
      }

      if(window.GM && window.GM.getValue) {
        // userscript specific storage
        return GM.setValue('twitcast-chat-filter-settings', settingsJSON);
      }
      else {
        var storage = window.unsafeWindow && window.unsafeWindow.localStorage ? window.unsafeWindow.localStorage : window.localStorage;
      	try {
          storage['twitcast-chat-filter-settings'] = settingsJSON;
          return Promise.resolve();
        }
        catch(e) {
          console.error(e);
          return Promise.reject(e);
        }
      }
    }


    var showSettingsPanel = function() {
      settingsPanelOverlay.style.opacity = '1';
      settingsPanelOverlay.style.pointerEvents = 'all';

    }
    var hideSettingsPanel = function() {
      settingsPanelOverlay.style.opacity = '0';
      settingsPanelOverlay.style.pointerEvents = 'none';
    }
    var setInterfaceLanguage = function(e) {
      var dropdown = e.target;
      var language = dropdown.value;
      settings.language = (language || '').toLowerCase() || 'en';
      saveSettings();

      var elementsToTranslate = Array.prototype.slice.call(settingsPanelPopup.querySelectorAll('[data-tl]'));
      elementsToTranslate.push(openSettingsPanelButton);
      for(var i=0; i<elementsToTranslate.length; i++) {
        elementsToTranslate[i].textContent = getTranslation(elementsToTranslate[i].getAttribute('data-tl'));
      }
    }
    var setTranslationRegexes = function(e) {
      var textarea = e.target;
      var regexList = (textarea.value || '').split(/\r?\n/g).map(function(s) { return s.trim(); });
      settings.translationRegexes = regexList;
      saveSettings();
    }
    var setTranslatorUserNames = function(e) {
      var textarea = e.target;
      var userList = Array.prototype.slice.call((textarea.value || '').split(/\r?\n/g)).map(function(x) {
        x = x.trim();
        if(x.length > 0 && x[0] != '@') {
          x = '@' + x;
        };
        return x;
      });
      settings.translatorUserNames = userList;
      saveSettings();
      textarea.value = userList.join('\r\n');
    }
    var setHideCommentsWithTextMatchingRegexes = function(e) {
      var textarea = e.target;
      var regexList = (textarea.value || '').split(/\r?\n/g).map(function(s) { return s.trim(); });
      settings.hideCommentsWithTextMatchingRegexes = regexList;
      saveSettings();
    }
    var setHideCommentsByUsers = function(e) {
      var textarea = e.target;
      var userList = Array.prototype.slice.call((textarea.value || '').split(/\r?\n/g)).map(function(x) {
        x = x.trim();
        if(x.length > 0 && x[0] != '@') {
          x = '@' + x;
        };
        return x;
      });
      settings.hideCommentsByUsers = userList;
      saveSettings();
      textarea.value = userList.join('\r\n');
    }

    var setTranslationCommentVisibility = function(e) {
      var dropdown = e.target;
      settings.translationCommentVisibility = dropdown.value;
      saveSettings();
      createTranslationCommentStyle();
    }

    var setShowTranslationFeed = function(e) {
      var checkbox = e.target;
      settings.showTranslationFeed = checkbox.checked;
      saveSettings();
      createTranslationCommentStyle();
    }

    var setShowSubtitles = function(e) {
      var checkbox = e.target;
      settings.showSubtitles = checkbox.checked;
      saveSettings();
      createTranslationCommentStyle();
    }

    var shouldCommentBeCensoredBecauseOfAuthor = function( comment ) {
      for(var u=0; u<settings.hideCommentsByUsers.length; u++) {
        var userId = settings.hideCommentsByUsers[u];
        if(comment.author && comment.author.id == userId) {
          return true;
        }
      }
      return false;
    }
    var shouldCommentBeCensored = function( comment ) {
      if(shouldCommentBeCensoredBecauseOfAuthor(comment)) {
        return true;
      }
      for(var r=0; r<settings.hideCommentsWithTextMatchingRegexes.length; r++) {
        if(settings.hideCommentsWithTextMatchingRegexes[r].trim() == '') {
          continue;
        }
        var regex;
        try {
          regex = new RegExp(settings.hideCommentsWithTextMatchingRegexes[r], 'g');
        }
        catch(e) {
          continue;
        }
        if(regex.test(comment.text || '')) {
          return true;
        }
      }
      return false;
    }

    var isCommentTranslation = function( comment ) {
      for(var u=0; u<settings.translatorUserNames.length; u++) {
        var userId = settings.translatorUserNames[u];
        if(comment.author && comment.author.id == userId) {
          return true;
        }
      }
      for(var r=0; r<settings.translationRegexes.length; r++) {
　　　　 if(settings.translationRegexes[r].trim() == '') {
          continue;
        }
        var regex;
        try {
          regex = new RegExp(settings.translationRegexes[r], 'g');
        }
        catch(e) {
          continue;
        }
        if(regex.test(comment.text || '')) {
          return true;
        }
      }
      return false;
    }

    var interval = setInterval(function() {

      if(live_chat_element == null) {
        window.clearInterval(interval);
        debugLog('[TCF] no comment section detected. aborting.')
        return;
      }

      var most_recent_comment = live_chat_element.querySelector('.tw-comment-item');

      var new_comments_this_interval = [ ];

      while(most_recent_comment != null) {

        var commentObject = parseComment(most_recent_comment);
        if(seen_comment_ids[commentObject.id]) {
          break;
        }

        if(isCommentTranslation(commentObject)) {
          translation_comments[commentObject.id] = commentObject;
          translation_authors[commentObject.author.id] = commentObject.author;
          most_recent_comment.classList.add('tcf-translation-comment');
        }

        if(shouldCommentBeCensored(commentObject)) {
          most_recent_comment.style.display = 'none';
        }

        new_comments_this_interval.push(commentObject);

        most_recent_comment = most_recent_comment.nextElementSibling;

        if(!most_recent_comment.matches('.tw-comment-item')) {
          most_recent_comment = null;
        }
      }

      if(new_comments_this_interval.length > 0) {
        debugLog('[TCF]: ' + new_comments_this_interval.length + ' comment' + (new_comments_this_interval.length != 1 ? 's' : ''));
      }

      // sort in reverse order, so most recent comments at end of list
      new_comments_this_interval = new_comments_this_interval.sort(function(a, b) {
        if(a.dateSeen < b.dateSeen) {
          return -1;
        }
        if(a.dateSeen > b.dateSeen) {
          return 1;
        }
        return 0;
      });

      for(var i=0; i<new_comments_this_interval.length; i++) {
        seen_comment_ids[new_comments_this_interval[i].id] = true;
      }

      if(new_comments_this_interval.length > 0) {
        debugLog('[TCF]: ' + new_comments_this_interval.length + ' new comment' + (new_comments_this_interval.length != 1 ? 's' : '') + ' detected');
      }

      for(var n=new_comments_this_interval.length-1; n>=0; n--) {
        if(isCommentTranslation(new_comments_this_interval[n]) && !shouldCommentBeCensoredBecauseOfAuthor(new_comments_this_interval[n])) {
          var newTranslationComment = new_comments_this_interval[n];
          debugLog('TRANSLATION COMMENT: ' + JSON.stringify(new_comments_this_interval[n]));
          if(translationFeed == null) {
            createSeparateTranslationFeed();
          }
          if(translationFeed) {
            var translationFeedLine = document.createElement('DIV');
            translationFeedLine.className = 'tcf-separate-translation-feed-line';

            if(newTranslationComment.videoTimePosted || newTranslationComment.videoTimeSeen) {
              var translationFeedTime = document.createElement('SPAN');
              translationFeedTime.className = 'tcf-separate-translation-feed-line-time';
              translationFeedTime.textContent = formatTime(newTranslationComment.videoTimePosted || newTranslationComment.videoTimeSeen);
              translationFeedLine.appendChild(translationFeedTime);
            }

            var translationFeedText = document.createElement('SPAN');
            translationFeedText.className = 'tcf-separate-translation-feed-line-text';
            translationFeedText.textContent = newTranslationComment.text;
            translationFeedLine.appendChild(translationFeedText);

            var translationFeedAuthor = document.createElement('SPAN');
            translationFeedAuthor.className = 'tcf-separate-translation-feed-line-author';
            translationFeedLine.appendChild(translationFeedAuthor);

            var translationFeedAuthorImage = document.createElement('IMG');
            translationFeedAuthorImage.className = 'tcf-separate-translation-feed-line-author-image';
            translationFeedAuthorImage.src = newTranslationComment.author.image;
            translationFeedAuthor.appendChild(translationFeedAuthorImage);

            var translationFeedAuthorName = document.createElement('SPAN');
            translationFeedAuthorName.className = 'tcf-separate-translation-feed-line-author-name';
            translationFeedAuthorName.textContent = newTranslationComment.author.name;
            translationFeedAuthor.appendChild(translationFeedAuthorName);

            if(translationFeed.children && translationFeed.children.length > 5) {
              translationFeed.removeChild(translationFeed.lastChild);
            }
            translationFeed.insertBefore(translationFeedLine, translationFeed.firstChild);
          }
          try {
            generateSubtitle(new_comments_this_interval[n]);
          }
          catch(e) {
            console.error(e);
          }
        }
        else {
          debugLog('COMMENT: ' + JSON.stringify(new_comments_this_interval[n]));
      	}
      }

    }, 243);

    var translationCommentStyle = null;

    var createSeparateTranslationFeed = function() {
      if(translationFeed != null) {
        return;
      }
      var elementToInsertBefore = document.querySelector('.tw-comment-list-view.tw-player-page__comment__list');
      if(elementToInsertBefore == null) {
        return;
      }

      translationFeed = document.createElement('DIV');
      translationFeed.className = 'tcf-separate-translation-feed';
      elementToInsertBefore.parentNode.insertBefore(translationFeed, elementToInsertBefore);
    }

    var createTranslationCommentStyle = function() {

      if(translationCommentStyle == null) {
        translationCommentStyle = document.createElement('STYLE');
        translationCommentStyle.id = 'tcf-translation-comment-style';
        document.head.appendChild(translationCommentStyle);
      }

      var css = '\n';

      if(settings.showSubtitles) {
        css += '.twitcast-chat-filter-subtitle-overlay { display: flex; }';
        css += '.twitcast-chat-filter-subtitle-author { display: flex; align-items: center; }';
        css += '.twitcast-chat-filter-subtitle-author-image { border-radius: 100%; height: 32px; width: 32px; margin-right: 6px; }';
        css += '.twitcast-chat-filter-subtitle-author-name { font-size: 20px; display: none; }';
        css += '.twitcast-chat-filter-subtitle { margin: 10px 30px 0px; padding: 5px 10px; display: flex; align-items: center; background-color: rgba(0,0,0,0.75); }';
        css += '.twitcast-chat-filter-subtitle-text { font-size: 24px; color: rgb(238, 238, 238); text-align: center; display: inline; }';
      }
      else {
        css += '.twitcast-chat-filter-subtitle-overlay { display: none; }';
      }

      if(settings.showTranslationFeed) {
        css += '.tcf-separate-translation-feed { display: block; overflow-y: scroll; max-height: 150px; user-select: none; moz-user-select: none; margin-bottom: 8px; }\n';
        css += '.tcf-separate-translation-feed-line { display: block; background-color: #eee; border-radius: 4px; margin: 4px; padding: 4px 6px; }\n';
        css += '.tcf-separate-translation-feed-line-time { font-weight: bold; font-family: Courier New, monospace; font-size: 12px; margin-right: 5px; color: #111; }\n';
        css += '.tcf-separate-translation-feed-line-author { margin-left: 5px; display: inline-block; }';
        css += '.tcf-separate-translation-feed-line-author-image { width: 12px; height: 12px; border-radius: 50%; margin: 0px 2px -2px 0px; opacity: 0.875; }\n';
        css += '.tcf-separate-translation-feed-line-author-name { font-size: 11px; color: #888; margin-right: 4px; }\n';
        css += '.tcf-separate-translation-feed-line-text { display: inline; font-size: 13px; color: #222; }\n';
      }
      else {
        css += '.tcf-separate-translation-feed { display: none; }\n';
      }

      if(settings.translationCommentVisibility == 'hide') {
        css += '.tcf-translation-comment { display: none; }\n';
      }
      else if(settings.translationCommentVisibility == 'emphasise') {
        css += '.tcf-translation-comment { display: flex; background-color: #fff4d8; font-weight: bold; color: #222; }\n';
      }
      else {
        css += '.tcf-translation-comment { display: flex; }\n';
      }

      translationCommentStyle.innerHTML = css;
    }

    var createOpenSettingsPanelButton = function() {

      openSettingsPanelButton = document.createElement('SPAN');
      openSettingsPanelButton.style.userSelect = 'none';
      openSettingsPanelButton.style.mozUserSelect = 'none';
      openSettingsPanelButton.style.cursor = 'pointer';
      openSettingsPanelButton.setAttribute('data-tl', 'OPEN_SETTINGS_POPUP_BUTTON_TEXT');
      openSettingsPanelButton.textContent = getTranslation('OPEN_SETTINGS_POPUP_BUTTON_TEXT');

      var elementToAppendTo = document.querySelector('#comment-list-app .tw-player-page__comment__title');
      if(elementToAppendTo) {
        elementToAppendTo.appendChild(openSettingsPanelButton);
      	openSettingsPanelButton.addEventListener('click', showSettingsPanel);

        var commentCountElement = document.querySelector('.tw-commment-comment-num');
        if(commentCountElement) {
          commentCountElement.style.marginRight = 'auto';
        }
      }

    }

    var createSettingsPanel = function() {

      settingsPanelOverlay = document.createElement('DIV');
      settingsPanelOverlay.style.position = 'fixed';
      settingsPanelOverlay.style.zIndex = '9999';
      settingsPanelOverlay.style.top = '0px';
      settingsPanelOverlay.style.left = '0px';
      settingsPanelOverlay.style.right = '0px';
      settingsPanelOverlay.style.bottom = '0px';
      settingsPanelOverlay.style.backgroundColor = 'rgba(0,0,0,0.4)';
      settingsPanelOverlay.style.display = 'flex';
      settingsPanelOverlay.style.alignItems = 'center';
      settingsPanelOverlay.style.justifyContent = 'center';
      settingsPanelOverlay.style.pointerEvents = 'all';
      settingsPanelOverlay.style.transition = 'opacity 0.25s linear';

      settingsPanelPopup = document.createElement('DIV');
      settingsPanelPopup.style.backgroundColor = '#f4f4f4';
      settingsPanelPopup.style.border = '3px solid #888';
      settingsPanelPopup.style.width = '400px';
      settingsPanelPopup.style.maxWidth = 'calc(100% - 40px)';
      settingsPanelOverlay.appendChild(settingsPanelPopup);

      var settingsPanelHeader = document.createElement('DIV');
      settingsPanelHeader.style.display = 'flex';
      settingsPanelHeader.style.alignItems = 'center';
      settingsPanelHeader.style.fontWeight = 'bold';
      settingsPanelHeader.style.fontSize = '1.25rem';
      settingsPanelPopup.appendChild(settingsPanelHeader);

      var settingsPanelTitle = document.createElement('DIV');
      settingsPanelTitle.setAttribute('data-tl', 'SETTINGS_POPUP_TITLE');
      settingsPanelTitle.textContent = getTranslation('SETTINGS_POPUP_TITLE');
      settingsPanelTitle.style.flex = '1';
      settingsPanelTitle.style.padding = '5px 10px';
      settingsPanelTitle.style.userSelect = 'none';
      settingsPanelTitle.style.mozUserSelect = 'none';
      settingsPanelHeader.appendChild(settingsPanelTitle);

      settingsPanelCloseButton = document.createElement('DIV');
      settingsPanelCloseButton.textContent = 'X';
      settingsPanelCloseButton.style.fontWeight = 'bold';
      settingsPanelCloseButton.style.fontSize = '1rem';
      settingsPanelCloseButton.style.padding = '6px 12px';
      settingsPanelCloseButton.style.backgroundColor = '#e4e4e4';
      settingsPanelCloseButton.style.cursor = 'pointer';
      settingsPanelCloseButton.style.userSelect = 'none';
      settingsPanelCloseButton.style.mozUserSelect = 'none';
      settingsPanelHeader.appendChild(settingsPanelCloseButton);

      var settingsPanelPopupContent = document.createElement('DIV');
      settingsPanelPopupContent.style.padding = '20px';
      settingsPanelPopup.appendChild(settingsPanelPopupContent);

      var settingsPanelInterfaceLanguageLabel = document.createElement('DIV');
      settingsPanelInterfaceLanguageLabel.style.marginTop = '20px';
      settingsPanelCloseButton.style.userSelect = 'none';
      settingsPanelCloseButton.style.mozUserSelect = 'none';
      settingsPanelInterfaceLanguageLabel.setAttribute('data-tl', 'SETTINGS_POPUP_INTERFACE_LANGUAGE');
      settingsPanelInterfaceLanguageLabel.textContent = getTranslation('SETTINGS_POPUP_INTERFACE_LANGUAGE');
      settingsPanelPopupContent.appendChild(settingsPanelInterfaceLanguageLabel);

      var settingsPanelInterfaceLanguageDropdown = document.createElement('SELECT');
      settingsPanelInterfaceLanguageDropdown.style.marginTop = '5px';
      settingsPanelInterfaceLanguageDropdown.style.width = 'calc(100% - 0px)';
      settingsPanelInterfaceLanguageDropdown.value = settings.language;
      settingsPanelPopupContent.appendChild(settingsPanelInterfaceLanguageDropdown);

      var languages = getSupportedLanguages();
      for(var n=0; n<languages.length; n++) {
        var language = languages[n];
        var settingsPanelInterfaceLanguageDropdownOption = document.createElement('OPTION');
        settingsPanelInterfaceLanguageDropdownOption.setAttribute('value', language);
        settingsPanelInterfaceLanguageDropdownOption.textContent = getTranslation('LANGUAGE_NAME', language);
        if(settings.language == language) {
          settingsPanelInterfaceLanguageDropdownOption.setAttribute('selected', 'selected');
        }
        settingsPanelInterfaceLanguageDropdown.appendChild(settingsPanelInterfaceLanguageDropdownOption);
      }

      var settingsPanelTranslationRegexesLabel = document.createElement('DIV');
      settingsPanelTranslationRegexesLabel.style.marginTop = '20px';
      settingsPanelTranslationRegexesLabel.style.userSelect = 'none';
      settingsPanelTranslationRegexesLabel.style.mozUserSelect = 'none';
      settingsPanelTranslationRegexesLabel.setAttribute('data-tl', 'SETTINGS_POPUP_TRANSLATION_REGEXES');
      settingsPanelTranslationRegexesLabel.textContent = getTranslation('SETTINGS_POPUP_TRANSLATION_REGEXES');
      settingsPanelPopupContent.appendChild(settingsPanelTranslationRegexesLabel);

      var settingsPanelTranslationRegexesTextarea = document.createElement('TEXTAREA');
      settingsPanelTranslationRegexesTextarea.style.marginTop = '5px';
      settingsPanelTranslationRegexesTextarea.style.width = 'calc(100% - 0px)';
      settingsPanelTranslationRegexesTextarea.style.minWidth = 'calc(100% - 0px)';
      settingsPanelTranslationRegexesTextarea.style.maxWidth = 'calc(100% - 0px)';
      settingsPanelTranslationRegexesTextarea.style.fontFamily = 'Courier New, monospace';
      settingsPanelTranslationRegexesTextarea.textContent = settings.translationRegexes.join('\r\n');
      settingsPanelPopupContent.appendChild(settingsPanelTranslationRegexesTextarea);

      var settingsPanelTranslatorUserNamesLabel = document.createElement('DIV');
      settingsPanelTranslatorUserNamesLabel.style.marginTop = '20px';
      settingsPanelTranslatorUserNamesLabel.setAttribute('data-tl', 'SETTINGS_POPUP_TRANSLATOR_USERNAMES');
      settingsPanelTranslatorUserNamesLabel.textContent = getTranslation('SETTINGS_POPUP_TRANSLATOR_USERNAMES');
      settingsPanelPopupContent.appendChild(settingsPanelTranslatorUserNamesLabel);

      var settingsPanelTranslatorUserNamesTextarea = document.createElement('TEXTAREA');
      settingsPanelTranslatorUserNamesTextarea.style.marginTop = '5px';
      settingsPanelTranslatorUserNamesTextarea.style.width = 'calc(100% - 0px)';
      settingsPanelTranslatorUserNamesTextarea.style.minWidth = 'calc(100% - 0px)';
      settingsPanelTranslatorUserNamesTextarea.style.maxWidth = 'calc(100% - 0px)';
      settingsPanelTranslatorUserNamesTextarea.style.fontFamily = 'Courier New, monospace';
      settingsPanelTranslatorUserNamesTextarea.textContent = settings.translatorUserNames.join('\r\n');
      settingsPanelPopupContent.appendChild(settingsPanelTranslatorUserNamesTextarea);

      var settingsPanelShowTranslationFeedWrapper = document.createElement('LABEL');
      settingsPanelShowTranslationFeedWrapper.style.marginTop = '20px';
      settingsPanelShowTranslationFeedWrapper.style.display = 'flex';
      settingsPanelShowTranslationFeedWrapper.style.alignItems = 'center';
      settingsPanelPopupContent.appendChild(settingsPanelShowTranslationFeedWrapper);

      var settingsPanelShowTranslationFeedCheckbox = document.createElement('INPUT');
      settingsPanelShowTranslationFeedCheckbox.setAttribute('type', 'checkbox');
      settingsPanelShowTranslationFeedCheckbox.checked = settings.showTranslationFeed;
      settingsPanelShowTranslationFeedWrapper.appendChild(settingsPanelShowTranslationFeedCheckbox);

      var settingsShowTranslationFeedLabel = document.createElement('SPAN');
      settingsShowTranslationFeedLabel.style.marginLeft = '10px';
      settingsShowTranslationFeedLabel.style.userSelect = 'none';
      settingsShowTranslationFeedLabel.style.mozUserSelect = 'none';
      settingsShowTranslationFeedLabel.setAttribute('data-tl', 'SETTINGS_POPUP_SHOW_TRANSLATION_FEED');
      settingsShowTranslationFeedLabel.textContent = getTranslation('SETTINGS_POPUP_SHOW_TRANSLATION_FEED');
      settingsPanelShowTranslationFeedWrapper.appendChild(settingsShowTranslationFeedLabel);

      var settingsPanelShowSubtitlesWrapper = document.createElement('LABEL');
      settingsPanelShowSubtitlesWrapper.style.marginTop = '20px';
      settingsPanelShowSubtitlesWrapper.style.display = 'flex';
      settingsPanelShowSubtitlesWrapper.style.alignItems = 'center';
      settingsPanelPopupContent.appendChild(settingsPanelShowSubtitlesWrapper);

      var settingsPanelShowSubtitlesCheckbox = document.createElement('INPUT');
      settingsPanelShowSubtitlesCheckbox.setAttribute('type', 'checkbox');
      settingsPanelShowSubtitlesCheckbox.checked = settings.showSubtitles;
      settingsPanelShowSubtitlesWrapper.appendChild(settingsPanelShowSubtitlesCheckbox);

      var settingsPanelShowSubtitlesLabel = document.createElement('SPAN');
      settingsPanelShowSubtitlesLabel.style.marginLeft = '10px';
      settingsPanelShowSubtitlesLabel.style.userSelect = 'none';
      settingsPanelShowSubtitlesLabel.style.mozUserSelect = 'none';
      settingsPanelShowSubtitlesLabel.setAttribute('data-tl', 'SETTINGS_POPUP_SHOW_SUBTITLES');
      settingsPanelShowSubtitlesLabel.textContent = getTranslation('SETTINGS_POPUP_SHOW_SUBTITLES');
      settingsPanelShowSubtitlesWrapper.appendChild(settingsPanelShowSubtitlesLabel);

      var settingsPanelTranslationCommentVisibilityLabel = document.createElement('DIV');
      settingsPanelTranslationCommentVisibilityLabel.style.marginTop = '20px';
      settingsPanelTranslationCommentVisibilityLabel.style.userSelect = 'none';
      settingsPanelTranslationCommentVisibilityLabel.style.mozUserSelect = 'none';
      settingsPanelTranslationCommentVisibilityLabel.setAttribute('data-tl', 'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY');
      settingsPanelTranslationCommentVisibilityLabel.textContent = getTranslation('SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY');
      settingsPanelPopupContent.appendChild(settingsPanelTranslationCommentVisibilityLabel);

      var settingsPanelTranslationCommentVisibilityDropdown = document.createElement('SELECT');
      settingsPanelTranslationCommentVisibilityDropdown.style.marginTop = '5px';
      settingsPanelTranslationCommentVisibilityDropdown.style.width = 'calc(100% - 0px)';
      settingsPanelPopupContent.appendChild(settingsPanelTranslationCommentVisibilityDropdown);

      if(true) {

      	var settingsPanelTranslationCommentVisibilityDropdown_None = document.createElement('OPTION');
        settingsPanelTranslationCommentVisibilityDropdown_None.setAttribute('value', 'hide');
      	settingsPanelTranslationCommentVisibilityDropdown_None.setAttribute('data-tl', 'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_HIDE');
      	settingsPanelTranslationCommentVisibilityDropdown_None.textContent = getTranslation('SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_HIDE');
        if(settings.translationCommentVisibility == 'hide') {
           settingsPanelTranslationCommentVisibilityDropdown_None.setAttribute('selected', 'selected');
        }
      	settingsPanelTranslationCommentVisibilityDropdown.appendChild(settingsPanelTranslationCommentVisibilityDropdown_None);

      	var settingsPanelTranslationCommentVisibilityDropdown_Hide = document.createElement('OPTION');
        settingsPanelTranslationCommentVisibilityDropdown_Hide.setAttribute('value', 'normal');
      	settingsPanelTranslationCommentVisibilityDropdown_Hide.setAttribute('data-tl', 'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_NORMAL');
      	settingsPanelTranslationCommentVisibilityDropdown_Hide.textContent = getTranslation('SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_NORMAL');
        if(settings.translationCommentVisibility == 'normal') {
           settingsPanelTranslationCommentVisibilityDropdown_Hide.setAttribute('selected', 'selected');
        }
      	settingsPanelTranslationCommentVisibilityDropdown.appendChild(settingsPanelTranslationCommentVisibilityDropdown_Hide);

      	var settingsPanelTranslationCommentVisibilityDropdown_Emphasise = document.createElement('OPTION');
        settingsPanelTranslationCommentVisibilityDropdown_Emphasise.setAttribute('value', 'emphasise');
      	settingsPanelTranslationCommentVisibilityDropdown_Emphasise.setAttribute('data-tl', 'SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_EMPHASISE');
      	settingsPanelTranslationCommentVisibilityDropdown_Emphasise.textContent = getTranslation('SETTINGS_POPUP_TRANSLATION_COMMENT_VISIBILITY_EMPHASISE');
        if(settings.translationCommentVisibility == 'emphasise') {
           settingsPanelTranslationCommentVisibilityDropdown_Emphasise.setAttribute('selected', 'selected');
        }
      	settingsPanelTranslationCommentVisibilityDropdown.appendChild(settingsPanelTranslationCommentVisibilityDropdown_Emphasise);

      	settingsPanelTranslationCommentVisibilityDropdown.value = settings.translationCommentVisibility;
      }

      var settingsPanelHideCommentsWithTextMatchingRegexesLabel = document.createElement('DIV');
      settingsPanelHideCommentsWithTextMatchingRegexesLabel.style.marginTop = '20px';
      settingsPanelHideCommentsWithTextMatchingRegexesLabel.setAttribute('data-tl', 'SETTINGS_POPUP_HIDE_COMMENTS_WITH_TEXT_MATCHING_REGEXES');
      settingsPanelHideCommentsWithTextMatchingRegexesLabel.textContent = getTranslation('SETTINGS_POPUP_HIDE_COMMENTS_WITH_TEXT_MATCHING_REGEXES');
      settingsPanelPopupContent.appendChild(settingsPanelHideCommentsWithTextMatchingRegexesLabel);

      var settingsPanelHideCommentsWithTextMatchingRegexesTextarea = document.createElement('TEXTAREA');
      settingsPanelHideCommentsWithTextMatchingRegexesTextarea.style.marginTop = '5px';
      settingsPanelHideCommentsWithTextMatchingRegexesTextarea.style.width = 'calc(100% - 0px)';
      settingsPanelHideCommentsWithTextMatchingRegexesTextarea.style.minWidth = 'calc(100% - 0px)';
      settingsPanelHideCommentsWithTextMatchingRegexesTextarea.style.maxWidth = 'calc(100% - 0px)';
      settingsPanelHideCommentsWithTextMatchingRegexesTextarea.style.fontFamily = 'Courier New, monospace';
      settingsPanelHideCommentsWithTextMatchingRegexesTextarea.textContent = settings.hideCommentsWithTextMatchingRegexes.join('\r\n');
      settingsPanelPopupContent.appendChild(settingsPanelHideCommentsWithTextMatchingRegexesTextarea);


      var settingsPanelHideCommentsByUsersLabel = document.createElement('DIV');
      settingsPanelHideCommentsByUsersLabel.style.marginTop = '20px';
      settingsPanelHideCommentsByUsersLabel.setAttribute('data-tl', 'SETTINGS_POPUP_HIDE_COMMENTS_BY_USERS');
      settingsPanelHideCommentsByUsersLabel.textContent = getTranslation('SETTINGS_POPUP_HIDE_COMMENTS_BY_USERS');
      settingsPanelPopupContent.appendChild(settingsPanelHideCommentsByUsersLabel);

      var settingsPanelHideCommentsByUsersTextarea = document.createElement('TEXTAREA');
      settingsPanelHideCommentsByUsersTextarea.style.marginTop = '5px';
      settingsPanelHideCommentsByUsersTextarea.style.width = 'calc(100% - 0px)';
      settingsPanelHideCommentsByUsersTextarea.style.minWidth = 'calc(100% - 0px)';
      settingsPanelHideCommentsByUsersTextarea.style.maxWidth = 'calc(100% - 0px)';
      settingsPanelHideCommentsByUsersTextarea.style.fontFamily = 'Courier New, monospace';
      settingsPanelHideCommentsByUsersTextarea.textContent = settings.hideCommentsByUsers.join('\r\n');
      settingsPanelPopupContent.appendChild(settingsPanelHideCommentsByUsersTextarea);


      document.body.appendChild(settingsPanelOverlay);

      settingsPanelCloseButton.addEventListener('click', hideSettingsPanel);
      settingsPanelInterfaceLanguageDropdown.addEventListener('change', setInterfaceLanguage);
      settingsPanelTranslationRegexesTextarea.addEventListener('change', setTranslationRegexes);
      settingsPanelTranslatorUserNamesTextarea.addEventListener('change', setTranslatorUserNames);
      settingsPanelHideCommentsWithTextMatchingRegexesTextarea.addEventListener('change', setHideCommentsWithTextMatchingRegexes);
      settingsPanelHideCommentsByUsersTextarea.addEventListener('change', setHideCommentsByUsers);
      settingsPanelShowTranslationFeedCheckbox.addEventListener('change', setShowTranslationFeed);
      settingsPanelShowSubtitlesCheckbox.addEventListener('change', setShowSubtitles);
      settingsPanelTranslationCommentVisibilityDropdown.addEventListener('change', setTranslationCommentVisibility);

      hideSettingsPanel();
    }

    var videoPlayerWrapper = null;
    var createSubtitleOverlay = function() {
      if(subtitleOverlay != null) {
        if(subtitleOverlay.parentNode != videoPlayerWrapper) {
          videoPlayerWrapper.appendChild(subtitleOverlay);
        }
      	return;
      }
      videoPlayerWrapper = document.querySelector('div#player');
      if(videoPlayerWrapper == null) {
        return;
      }
      subtitleOverlay = document.createElement('DIV');
      subtitleOverlay.className = 'twitcast-chat-filter-subtitle-overlay';
      subtitleOverlay.style.zIndex = '9000';
      subtitleOverlay.style.pointerEvents = 'none';
      subtitleOverlay.style.position = 'absolute';
      subtitleOverlay.style.width = '100%';
      subtitleOverlay.style.height = '100%';
      subtitleOverlay.style.top = '0';
      subtitleOverlay.style.left = '0';
      subtitleOverlay.style.boxSizing = 'border-box';
      subtitleOverlay.style.paddingBottom = '60px';
      subtitleOverlay.style.flexDirection = 'column-reverse';
      subtitleOverlay.style.alignItems = 'center';
      videoPlayerWrapper.appendChild(subtitleOverlay);
    }


    var getLineAdjustedLength = function( text ) {
      // counts Kanji/Hanzi as 2.5 letters, and kana as 1.5, spaces and punctuation as 0.1, and everything else as 1
      return (Array.prototype.slice.call(text || '').map(function(c) {
          if(/[\u4e00-\u9faf]/.test(c)) {
              return 2.5;
          }
          if(/\s|.|,|。|、/.test(c)) {
              return 0.1;
          }
          if(/[\u3040-\u30ff]/.test(c)) {
              return 1.5;
          }
          return 1;
      }).reduce(function(sum, value) {
          return sum + value;
      }, 0) + 0.5) | 0;
    }

    var getLineMinDuration = function( text ) {
      return Math.max(0.75, 0.25 + getLineAdjustedLength(text)/14)
    }

    var getLineEstimatedDuration = function( text ) {
      return Math.max(1, 0.25 + getLineAdjustedLength(text)/11)
    }

    var getLineMaxDuration = function( text ) {
      return Math.max(1.25, 0.25 + getLineAdjustedLength(text)/8)
    }

    var subtitle_array = [ ];
    var subtitle_map = { };

    var generateSubtitle = function(comment) {

      var subtitleId = comment.id;

      var estimatedDuration = getLineEstimatedDuration(comment.text);
      var minDuration = getLineMinDuration(comment.text);
      var maxDuration = getLineMaxDuration(comment.text);

      var startTimeToUse;
      if(watchingLive && comment.videoTimeSeen != null && comment.videoTimePosted != null) {
          startTimeToUse = (comment.videoTimePosted < (comment.videoTimeSeen - 12)) ? comment.videoTimePosted : comment.videoTimeSeen;
      }
      else if(comment.videoTimeSeen != null && comment.videoTimePosted != null) {
          startTimeToUse = (comment.videoTimePosted < (comment.videoTimeSeen - 5)) ? comment.videoTimePosted : comment.videoTimeSeen;
      }
      else if(comment.videoTimePosted != null) {
        startTimeToUse = comment.videoTimePosted;
      }
      else if(comment.videoTimeSeen != null) {
        startTimeToUse = comment.videoTimeSeen;
      }
      else {
        return;
      }

      var subtitle = subtitle_map[subtitleId] || null;
      if(subtitle == null) {
        subtitle = {
          id: subtitleId,
          comment: comment,
          start:   startTimeToUse
        }
        subtitle_map[subtitleId] = subtitle;
        if (subtitle_array.length == 0) {
        	subtitle_array.push(subtitle);
          subtitle.end = subtitle.start + estimatedDuration;
        }
        else {
          var inserted = false;
          for(var i=0; i<subtitle_array.length; i++) {
            if(subtitle_array[i].start > subtitle.start) {
              subtitle_array.splice(i, 0, subtitle);
              inserted = true;
              break;
            }
          }
          if(!inserted) {
            subtitle_array.push(subtitle);
          	subtitle.end = subtitle.start + estimatedDuration;
          }
        }
      }

      var subtitle_array_index = subtitle_array.indexOf(subtitle);
      var next_subtitle = subtitle_array[subtitle_array_index + 1] || null;
      var prev_subtitle = subtitle_array[subtitle_array_index - 1] || null;

      if(next_subtitle) {
        var end;
        if((subtitle.start + maxDuration) > next_subtitle.start) {
          end = next_subtitle.start;
        }
        else {
          end = subtitle.start + estimatedDuration;
        }
        if(end < (subtitle.start + minDuration)) {
          end = subtitle.start + minDuration;
        }
        subtitle.end = end;
      }
      else {
        subtitle.end = subtitle.start + estimatedDuration;
      }

      if(prev_subtitle) {
        var prevEstimatedDuration = getLineEstimatedDuration(prev_subtitle.comment.text);
        var prevMinDuration = getLineMinDuration(prev_subtitle.comment.text);
        var prevMaxDuration = getLineMaxDuration(prev_subtitle.comment.text);

        var prev_end;
        if((prev_subtitle.start + prevMaxDuration) > subtitle.start) {
          prev_end = subtitle.start;
        }
        else {
          prev_end = prev_subtitle.start + prevEstimatedDuration;
        }
        if(prev_end < (prev_subtitle.start + prevMinDuration)) {
          prev_end = prev_subtitle.start + prevMinDuration;
        }
        prev_subtitle.end = prev_end;
      }

      var subtitleStartTimeRoundedDown = (subtitle.start | 0);
      var subtitleEndTimeRoundedUp = (subtitle.end == (subtitle.end | 0)) ? subtitle.end : (subtitle.end + 1);

      if(settings.showSubtitles) {
        if(subtitleStartTimeRoundedDown <= lastVideoTime && lastVideoTime < subtitleEndTimeRoundedUp) {
          renderSubtitle(subtitle);
        }
      }

    }

    var renderSubtitle = function(subtitle) {

      if(subtitleOverlay == null || subtitleOverlay.parentNode != videoPlayerWrapper) {
      	createSubtitleOverlay();
      }

      var subtitleId = 'twitcast-chat-filter-subtitle_' + subtitle.id;

      var subtitleElement = document.getElementById(subtitleId)

      if(subtitleElement) {
        subtitleElement.style.display = '';
        return;
      }

      subtitleElement = document.createElement('DIV');
      subtitleElement.className = 'twitcast-chat-filter-subtitle';
      subtitleElement.id = subtitleId;
      subtitleElement.setAttribute('data-subtitle-id', subtitleId);
      if(subtitle.start != null) {
	      subtitleElement.setAttribute('data-start-time', subtitle.start);
      }
      if(subtitle.end != null) {
	      subtitleElement.setAttribute('data-end-time', subtitle.end);
      }

      if(subtitle.comment.author) {
        var subtitleAuthorElement = document.createElement('DIV');
        subtitleAuthorElement.className = 'twitcast-chat-filter-subtitle-author';
        subtitleElement.appendChild(subtitleAuthorElement);
      }

      if(subtitle.comment.author.image) {
        var subtitleAuthorImageElement = document.createElement('IMG');
        subtitleAuthorImageElement.className = 'twitcast-chat-filter-subtitle-author-image';
        subtitleAuthorImageElement.src = subtitle.comment.author.image;
        subtitleElement.appendChild(subtitleAuthorImageElement);
      }

      if(subtitle.comment.author.name) {
        var subtitleAuthorNameElement = document.createElement('SPAN');
        subtitleAuthorNameElement.className = 'twitcast-chat-filter-subtitle-author-name';
        subtitleAuthorNameElement.textContent = subtitle.comment.author.name || '';
        subtitleElement.appendChild(subtitleAuthorNameElement);
      }

	  var subtitleTextElement = document.createElement('DIV');
      subtitleTextElement.className = 'twitcast-chat-filter-subtitle-text';
      subtitleTextElement.textContent = subtitle.comment.text;
      subtitleElement.appendChild(subtitleTextElement);

      subtitleOverlay.appendChild(subtitleElement);
    }

    var videoTimeElement = document.querySelector('#mainwrapper .vjs-current-time-display');
    var liveVideoTimeElement = document.getElementById('updatetimer');

    if(liveVideoTimeElement) {
      watchingLive = true;
      watchingArchive = false;
    }
    else if(videoTimeElement) {
      watchingLive = false;
      watchingArchive = true;
    }
    var videoTimeCheckInterval = window.setInterval(function() {
      if(videoTimeElement == null) {
      	videoTimeElement = document.querySelector('#mainwrapper .vjs-current-time-display');
      }
      if(videoStartTime == null || isNaN(videoStartTime)) {
        var videoStartTimeElement = document.querySelector('#mainwrapper .tw-player-meta__status_item time');
        if(videoStartTimeElement) {
          videoStartTime = Date.parse(videoStartTimeElement.getAttribute('datetime'));
        }
      }
      if(liveVideoTimeElement == null) {
      	liveVideoTimeElement = document.getElementById('updatetimer');
      }
      if((videoStartTime == null || isNaN(videoStartTime)) && liveVideoTimeElement && liveVideoTimeElement.hasAttribute('data-started-at')) {
      	 videoStartTime = liveVideoTimeElement.getAttribute('data-started-at') * 1;
      }
      if(videoTimeElement == null && liveVideoTimeElement == null) {
        return;
      }
      if(liveVideoTimeElement) {
        watchingLive = true;
        watchingArchive = false;
      }
      else if(videoTimeElement) {
        watchingLive = false;
        watchingArchive = true;
      }
      var videoTimeText = videoTimeElement ? videoTimeElement.textContent : liveVideoTimeElement.textContent;
      var timeMatch = (videoTimeText || '').match(TWITCAST_VIDEO_TIME_REGEX);
      if(timeMatch) {
      	var currentVideoTime = ((timeMatch[1] || 0) * 3600) + (timeMatch[2] * 60) + (timeMatch[3] * 1);
        if(currentVideoTime != lastVideoTime) {
          onVideoTimeChange(currentVideoTime, lastVideoTime);
        	lastVideoTime = currentVideoTime;
        }
      }
    }, 125);

    var onVideoTimeChange = function(currentVideoTime, previousVideoTime) {
      debugLog('video time: ' + currentVideoTime);

      if(previousVideoTime > currentVideoTime || (currentVideoTime > (previousVideoTime + 3))) {
        seen_comment_ids = { };
        if(translationFeed != null) {
          translationFeed.innerHTML = '';
        }
      }

      if(settings.showSubtitles) {
        if(subtitleOverlay) {

          // remove all expired subtitles
          var visibleSubtitleElements = Array.prototype.slice.call(subtitleOverlay.querySelectorAll('.twitcast-chat-filter-subtitle'));
          for(var s=0; s<visibleSubtitleElements.length; s++) {
          	var subtitleElement = visibleSubtitleElements[s];
            var subtitleId = subtitleElement.getAttribute('data-subtitle-id');
            var subtitle = subtitle_map[subtitleId] || null;
            if(subtitle == null || subtitle.end >= currentVideoTime) {
              subtitleElement.parentNode.removeChild(subtitleElement);
            }
          }

          for(var s2=0; s2<subtitle_array.length; s2++) {
            var subtitle2 = subtitle_array[s2];
            var subtitleStartTimeRoundedDown = (subtitle2.start | 0);
            var subtitleEndTimeRoundedUp = (subtitle2.end == (subtitle2.end | 0)) ? subtitle2.end : (subtitle2.end + 1);
            if(subtitleStartTimeRoundedDown <= currentVideoTime && currentVideoTime < subtitleEndTimeRoundedUp) {
              renderSubtitle(subtitle2);
            }
          }
        }
        else {
        	createSubtitleOverlay();
        }
        if(!subtitleOverlay) {
        	return;
        }
      }
      else if(subtitleOverlay) {
        while(subtitleOverlay.firstChild) {
        	subtitleOverlay.removeChild(subtitleOverlay.firstChild);
        }
      }
    }


    loadSettings().then(function() {

      debugLog('[TCF] loaded settings: ' + JSON.stringify(settings));
      initialized = true;

      try {
        createTranslationCommentStyle();
        createSettingsPanel();
        createSubtitleOverlay();
        createSeparateTranslationFeed();
        createOpenSettingsPanelButton();
      }
      catch(e) {
        console.error(e);
      }

    }, function(e) {
      debugLog('[TCF] error loading settings');
    });

  };

  initializeInterval = window.setInterval(init, 250);

})();