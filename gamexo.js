var wwc_keycode = "073ded1edcedd11f60005ae969cabf11";

























// ============= Adapted Intersection System for the New Project =============

window.sectorSystem = {

    settings: {

        lineWidth: 0.15,

        lineColor: 0xFF0000,

        lineAlpha: 0.3,

        backgroundColor: 0x000000,

        backgroundAlpha: 0.6,

        sectorTextStyle: {

            fontFamily: "Arial",

            fontSize: 14,

            fill: 0xFFFFFF

        },

        quarterTextStyle: {

            fontFamily: "Arial",

            fontSize: 20,

            fill: 0xFFFFFF

        },

        showLines: true

    },

    

    state: {

        container: null,

        graphics: null,

        isActive: false,

        currentMode: null,

        texts: [],

        initialized: false,

        renderContainer: null,

        restored: false

    },
// ✅ Improved function to locate the render container for the new project



    findRenderContainer: function() {

        if (this.state.renderContainer) return this.state.renderContainer;

        

        

// Possible paths for the new project only
        const possiblePaths = [

// General paths for PIXI
            () => window.app?.stage,

            () => window.PIXI?.app?.stage,

            () => window.gameApp?.stage,

            () => window.renderer?.stage,

            

// Possible game paths from the new code
            () => window._wwc?._anApp?.og?.af?.ng?.mf,

            () => window._1f8817?.og?.af?.ng?.mf,

            () => window.decoder?.og?.af?.ng?.mf,

            () => window.game?.renderer?.stage,

            () => window.game?.scene?.stage,

            

// Search in global variables for the new project
            () => {

                for (let key in window) {

                    try {

                        const obj = window[key];

                        if (obj && typeof obj === 'object') {

                            // البحث عن PIXI Container

                            if (obj instanceof PIXI.Container) {

                                return obj;

                            }

                            // البحث في خصائص الكائن

                            if (obj.stage instanceof PIXI.Container) {

                                return obj.stage;

                            }

                            if (obj.mf instanceof PIXI.Container) {

                                return obj.mf;

                            }

                            // البحث في المسارات المعقدة

                            if (obj.og?.af?.ng?.mf instanceof PIXI.Container) {

                                return obj.og.af.ng.mf;

                            }

                        }

                    } catch (e) {

                        // تجاهل الأخطاء وكمل البحث

                    }

                }

                return null;

            }

        ];

        

        // جرب كل مسار

        for (let i = 0; i < possiblePaths.length; i++) {

            try {

                const container = possiblePaths[i]();

                if (container && container instanceof PIXI.Container) {

                    this.state.renderContainer = container;

                    return container;

                }

            } catch (e) {

                // تجاهل الأخطاء وكمل البحث

            }

        }

        

        return null;

    },

    

    // ✅ دالة محسنة للحصول على نصف القطر

    getRadius: function() {

        // جرب مسارات مختلفة للحصول على نصف القطر بناءً على الكود الجديد

        const radiusPaths = [

            () => window._wwc?._anApp?.dh?.hh?.zg,

            () => window._1f8817?.dh?.hh?.zg,

            () => window.decoder?.dh?.hh?.zg,

            () => window.game?.radius,

            () => window.gameRadius,

            () => window.mapRadius,

            () => 500 // القيمة الافتراضية

        ];

        

        for (let path of radiusPaths) {

            try {

                const radius = path();

                if (radius && typeof radius === 'number' && radius > 0) {

                    return radius;

                }

            } catch (e) {

                // تجاهل وكمل

            }

        }

        

        return 500; // قيمة افتراضية

    },

    

    clearTexts: function() {

        this.state.texts.forEach(text => {

            if (text && text.parent) {

                text.parent.removeChild(text);

            }

        });

        this.state.texts = [];

    },

    

    initDrawing: function(radius) {

        this.clearTexts();

        this.state.graphics.clear();

        

        this.state.graphics.lineStyle(

            this.settings.lineWidth, 

            this.settings.lineColor, 

            this.settings.lineAlpha

        );

        this.state.graphics.beginFill(

            this.settings.backgroundColor, 

            this.settings.backgroundAlpha

        );

        this.state.graphics.drawCircle(0, 0, radius);

        this.state.graphics.endFill();

        

        return radius;

    },

    

    drawSectors: function() {

        const radius = this.initDrawing(this.getRadius());

        const innerRadius = radius / 3;

        

        if (this.settings.showLines) {

            // رسم الدوائر الداخلية

            for (let layer = 1; layer < 3; layer++) {

                this.state.graphics.drawCircle(0, 0, radius - (layer * innerRadius));

            }

            

            // رسم خطوط التقسيم

            for (let sector = 0; sector < 4; sector++) {

                const angle = sector * Math.PI / 2;

                this.state.graphics.moveTo(0, 0);

                this.state.graphics.lineTo(

                    Math.cos(angle) * radius,

                    Math.sin(angle) * radius

                );

            }

        }

        

        // إضافة النصوص

        for (let sector = 0; sector < 4; sector++) {

            const angle = sector * Math.PI / 2;

            

            for (let layer = 0; layer < 3; layer++) {

                const textRadius = radius - (layer * innerRadius + innerRadius/2);

                const midAngle = angle + Math.PI/4;

                

                const label = ['S', 'D', 'F'][layer] + (sector + 1);

                

                const text = new PIXI.Text(label, this.settings.sectorTextStyle);

                

                text.anchor.set(0.5);

                text.position.set(

                    Math.cos(midAngle) * textRadius,

                    Math.sin(midAngle) * textRadius

                );

                

                this.state.container.addChild(text);

                this.state.texts.push(text);

            }

        }

    },

    

    drawQuarters: function() {

        const radius = this.initDrawing(this.getRadius());

        

        if (this.settings.showLines) {

            // رسم الخطوط المتقاطعة

            this.state.graphics.moveTo(-radius, 0);

            this.state.graphics.lineTo(radius, 0);

            this.state.graphics.moveTo(0, -radius);

            this.state.graphics.lineTo(0, radius);

        }

        

        // إضافة نصوص الأرباع

        [

            {n: 'UP 1', x: 1, y: -1},

            {n: 'UP 2', x: -1, y: -1},

            {n: 'UP 3', x: -1, y: 1},

            {n: 'UP 4', x: 1, y: 1}

        ].forEach(q => {

            const text = new PIXI.Text(q.n, this.settings.quarterTextStyle);

            

            text.anchor.set(0.5);

            text.position.set(q.x * radius / 3, q.y * radius / 3);

            this.state.container.addChild(text);

            this.state.texts.push(text);

        });

    },

    

    // ✅ دالة محسنة لتهيئة الرسوميات

    initGraphics: function() {

        if (this.state.initialized) return true;

        

        

        const renderContainer = this.findRenderContainer();

        if (!renderContainer) {

            return false;

        }

        

        try {

            this.state.container = new PIXI.Container();

            this.state.graphics = new PIXI.Graphics();

            this.state.container.addChild(this.state.graphics);

            renderContainer.addChild(this.state.container);

            

            // تعيين خصائص إضافية إذا كانت متاحة

            if (this.state.container.zIndex !== undefined) {

                this.state.container.zIndex = 10;

            }

            this.state.container.visible = false;

            this.state.initialized = true;

            

            return true;

        } catch (error) {

            return false;

        }

    },

    

    toggleMode: function(mode) {



        

        if (!this.initGraphics()) {

            return;

        }

        

        if (this.state.isActive && this.state.currentMode === mode) {

            // إلغاء التفعيل

            this.state.container.visible = false;

            this.state.isActive = false;

            this.state.currentMode = null;

            

            // تحديث الزر إذا وجد

            const toggleButton = document.getElementById("sector_system_toggle");

            if (toggleButton) {

                toggleButton.checked = false;

            }

            

            this.saveSettings();

            return;

        }

        

        // التفعيل

        this.state.isActive = true;

        this.state.currentMode = mode;

        this.state.container.visible = true;

        

        // تحديث الزر إذا وجد

        const toggleButton = document.getElementById("sector_system_toggle");

        if (toggleButton) {

            toggleButton.checked = true;

        }

        

        if (mode === 'sectors') {

            this.drawSectors();

        } else {

            this.drawQuarters();

        }

        

        this.saveSettings();

    },

    

    // ✅ إعداد أحداث لوحة المفاتيح المحسن

    setupKeyboardEvents: function() {

        

        const keyboardHandler = (event) => {

            const keyCode = event.keyCode || event.which;

            const key = event.key;

            

            // تجنب التداخل مع حقول الإدخال

            if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {

                return;

            }

            

            // تجنب التداخل مع النوافذ المفتوحة

            if (event.target.closest('.wup-modal, .wormup-container')) {

                return;

            }

            

            const keyActions = {

                // مفتاح S أو + أو = للقطاعات

                83: () => this.toggleMode('sectors'),    // S

                187: () => this.toggleMode('sectors'),   // = (مع shift يصبح +)

                61: () => this.toggleMode('sectors'),    // = (بدون shift)

                

                // مفتاح X للأرباع

                88: () => this.toggleMode('quarters')    // X

            };

            

            if (keyActions[keyCode]) {

                event.preventDefault();

                keyActions[keyCode]();

                

                // تهيئة واجهة المستخدم إذا كانت متاحة

                if (typeof this.initUserInterface === 'function') {

                    this.initUserInterface();

                }

            }

        };

        

        // إضافة مستمع الأحداث

        document.addEventListener('keydown', keyboardHandler);

    },

    

    saveSettings: function() {

        try {

            const settings = {

                settings: this.settings,

                isActive: this.state.isActive,

                currentMode: this.state.currentMode

            };

            

            localStorage.setItem("sectorSystemSettings", JSON.stringify(settings));

        } catch (e) {

        }

    },

    

    loadSettings: function() {

        try {

            const savedData = localStorage.getItem("sectorSystemSettings");

            if (savedData) {

                const parsed = JSON.parse(savedData);

                

                if (parsed.settings) {

                    this.settings = {...this.settings, ...parsed.settings};

                }

                

                this.savedState = {

                    isActive: parsed.isActive || false,

                    currentMode: parsed.currentMode || "sectors"

                };

                

            }

        } catch (e) {

        }

    },

    

    applySettings: function() {

        if (this.state.isActive && this.state.currentMode) {

            if (this.state.currentMode === 'sectors') {

                this.drawSectors();

            } else {

                this.drawQuarters();

            }

        }

    },

    

    // ✅ دالة التهيئة الرئيسية المحسنة

    init: function() {

        

        // التحقق من وجود PIXI

        if (typeof PIXI === 'undefined') {

            setTimeout(() => this.init(), 1000);

            return;

        }

        

        // تحميل الإعدادات

        this.loadSettings();

        

        // إعداد أحداث لوحة المفاتيح

        this.setupKeyboardEvents();

        

        // محاولة التهيئة المباشرة

        const initSuccess = this.initGraphics();

        

        if (!initSuccess) {

            setTimeout(() => this.init(), 1000);

            return;

        }

        

        // استعادة الحالة المحفوظة

        setTimeout(() => {

            if (this.savedState && this.savedState.isActive) {

                this.state.isActive = true;

                this.state.currentMode = this.savedState.currentMode;

                this.state.container.visible = true;

                

                if (this.state.currentMode === 'sectors') {

                    this.drawSectors();

                } else {

                    this.drawQuarters();

                }

                

                // تحديث الزر إذا وجد

                const toggleButton = document.getElementById("sector_system_toggle");

                if (toggleButton) {

                    toggleButton.checked = true;

                }

                

                this.state.restored = true;

            }

        }, 1000);

        

    },

    

    // ✅ واجهة المستخدم المحسنة

    initUserInterface: function() {



        

        // التحقق من وجود jQuery

        if (typeof $ === 'undefined') {

            return;

        }

        

        function colorToHex(color) {

            return "#" + color.toString(16).padStart(6, '0');

        }

        

        function hexToColor(hex) {

            return parseInt(hex.replace('#', ''), 16);

        }

        

        // استعادة الحالة إذا لم تكن مستعادة

        if (!this.state.restored && this.savedState && this.savedState.isActive) {

            this.toggleMode(this.savedState.currentMode || 'sectors');

            this.state.restored = true;

        }

        

        // تحديث واجهة المستخدم

        const updateUI = () => {

            // تحديث زر التفعيل

            const toggleBtn = $("#sector_system_toggle");

            if (toggleBtn.length) {

                toggleBtn.prop("checked", this.state.isActive);

            }

            

            // تحديث نمط العرض

            const modeSelect = $("#sector_display_mode");

            if (modeSelect.length) {

                modeSelect.val(this.state.currentMode || 'sectors');

            }

            

            // تحديث الألوان

            const bgColorInput = $("#sector_bg_color");

            if (bgColorInput.length) {

                bgColorInput.val(colorToHex(this.settings.backgroundColor));

            }

            

            const lineColorInput = $("#sector_line_color");

            if (lineColorInput.length) {

                lineColorInput.val(colorToHex(this.settings.lineColor));

            }

            

            // تحديث الشفافية

            const bgOpacitySlider = $("#sector_bg_opacity");

            const bgOpacityValue = $("#sector_bg_opacity_value");

            if (bgOpacitySlider.length && bgOpacityValue.length) {

                bgOpacitySlider.val(this.settings.backgroundAlpha * 100);

                bgOpacityValue.text(Math.round(this.settings.backgroundAlpha * 100) + "%");

            }

            

            const lineOpacitySlider = $("#sector_line_opacity");

            const lineOpacityValue = $("#sector_line_opacity_value");

            if (lineOpacitySlider.length && lineOpacityValue.length) {

                lineOpacitySlider.val(this.settings.lineAlpha * 100);

                lineOpacityValue.text(Math.round(this.settings.lineAlpha * 100) + "%");

            }

            

            // تحديث إظهار الخطوط

            const showLinesCheckbox = $("#sector_show_lines");

            if (showLinesCheckbox.length) {

                showLinesCheckbox.prop("checked", this.settings.showLines);

            }

            

            // إظهار/إخفاء لوحة الإعدادات

            const settingsPanel = $("#sector_settings_panel");

            if (settingsPanel.length) {

                if (this.state.isActive) {

                    settingsPanel.slideDown(300);

                } else {

                    settingsPanel.slideUp(200);

                }

            }

            

            // إظهار/إخفاء خيارات الخطوط

            const linesOptions = $("#sector_lines_options");

            if (linesOptions.length) {

                if (!this.settings.showLines) {

                    linesOptions.slideUp(200);

                } else {

                    linesOptions.slideDown(200);

                }

            }

        };

        

        // ربط الأحداث بـ jQuery

        $("#sector_system_toggle").off('change').on('change', (e) => {

            const isChecked = $(e.target).prop("checked");

            

            if (isChecked) {

                const mode = $("#sector_display_mode").val() || 'sectors';

                this.toggleMode(mode);

            } else {

                if (this.state.isActive) {

                    this.toggleMode(this.state.currentMode);

                }

            }

            

            updateUI();

        });

        

        $("#sector_display_mode").off('change').on('change', (e) => {

            const mode = $(e.target).val();

            if (this.state.isActive) {

                this.toggleMode(this.state.currentMode);

                this.toggleMode(mode);

                updateUI();

            }

        });

        

        // ربط أحداث الألوان والإعدادات الأخرى

        $("#sector_bg_color").off('change').on('change', (e) => {

            this.settings.backgroundColor = hexToColor($(e.target).val());

            this.applySettings();

            this.saveSettings();

        });

        

        $("#sector_line_color").off('change').on('change', (e) => {

            this.settings.lineColor = hexToColor($(e.target).val());

            this.applySettings();

            this.saveSettings();

        });

        

        $("#sector_bg_opacity").off('input').on('input', (e) => {

            const value = parseInt($(e.target).val()) / 100;

            this.settings.backgroundAlpha = value;

            $("#sector_bg_opacity_value").text(Math.round(value * 100) + "%");

            this.applySettings();

            this.saveSettings();

        });

        

        $("#sector_line_opacity").off('input').on('input', (e) => {

            const value = parseInt($(e.target).val()) / 100;

            this.settings.lineAlpha = value;

            $("#sector_line_opacity_value").text(Math.round(value * 100) + "%");

            this.applySettings();

            this.saveSettings();

        });

        

        $("#sector_show_lines").off('change').on('change', (e) => {

            this.settings.showLines = $(e.target).prop("checked");

            

            const linesOptions = $("#sector_lines_options");

            if (!this.settings.showLines) {

                linesOptions.slideUp(200);

            } else {

                linesOptions.slideDown(200);

            }

            

            this.applySettings();

            this.saveSettings();

        });

        

        // تحديث الواجهة

        updateUI();

    },

    

};



// تهيئة النظام عند تحميل الصفحة

setTimeout(() => {

    if (window.sectorSystem && typeof window.sectorSystem.init === 'function') {

        window.sectorSystem.init();

    }

}, 1000);



// تهيئة واجهة المستخدم عند النقر على خلفيات (إذا كانت موجودة)

$(document).ready(function() {

    $(".sidebar-item[data-tab='backgrounds']").on('click', function() {

        if (window.sectorSystem && typeof window.sectorSystem.initUserInterface === 'function') {

            setTimeout(() => window.sectorSystem.initUserInterface(), 100);

        }

    });

});



// إضافة دوال مساعدة عامة

window.toggleSectors = () => window.sectorSystem?.toggleMode('sectors');

window.toggleQuarters = () => window.sectorSystem?.toggleMode('quarters');

window.debugSectors = () => window.sectorSystem?.debug();























(() => {

  var _0x2f7c71 = {

    "./node_modules/@socket.io/component-emitter/lib/esm/index.js": (_0x5a5dfc, _0x3f02bc, _0x310817) => {

      'use strict';



      _0x310817.r(_0x3f02bc);

      _0x310817.d(_0x3f02bc, {

        Emitter: () => _0x28624a

      });

      function _0x28624a(_0x574c46) {

        if (_0x574c46) {

          return _0x34ab5d(_0x574c46);

        }

      }

      function _0x34ab5d(_0x21c073) {

        for (var _0xc19f12 in _0x28624a.prototype) {

          _0x21c073[_0xc19f12] = _0x28624a.prototype[_0xc19f12];

        }

        return _0x21c073;

      }

      _0x28624a.prototype.on = _0x28624a.prototype.addEventListener = function (_0x1872c9, _0x953d01) {

        this._callbacks = this._callbacks || {};

        (this._callbacks["$" + _0x1872c9] = this._callbacks["$" + _0x1872c9] || []).push(_0x953d01);

        return this;

      };

      _0x28624a.prototype.once = function (_0xecafbe, _0x3908c4) {

        function _0x361a5e() {

          this.off(_0xecafbe, _0x361a5e);

          _0x3908c4.apply(this, arguments);

        }

        _0x361a5e.fn = _0x3908c4;

        this.on(_0xecafbe, _0x361a5e);

        return this;

      };

      _0x28624a.prototype.off = _0x28624a.prototype.removeListener = _0x28624a.prototype.removeAllListeners = _0x28624a.prototype.removeEventListener = function (_0x3ba586, _0x15bf29) {

        this._callbacks = this._callbacks || {};

        if (arguments.length == 0) {

          this._callbacks = {};

          return this;

        }

        var _0x11ef6e = this._callbacks["$" + _0x3ba586];

        if (!_0x11ef6e) {

          return this;

        }

        if (arguments.length == 1) {

          delete this._callbacks["$" + _0x3ba586];

          return this;

        }

        var _0x1f70e0;

        for (var _0x3be247 = 0; _0x3be247 < _0x11ef6e.length; _0x3be247++) {

          _0x1f70e0 = _0x11ef6e[_0x3be247];

          if (_0x1f70e0 === _0x15bf29 || _0x1f70e0.fn === _0x15bf29) {

            _0x11ef6e.splice(_0x3be247, 1);

            break;

          }

        }

        if (_0x11ef6e.length === 0) {

          delete this._callbacks["$" + _0x3ba586];

        }

        return this;

      };

      _0x28624a.prototype.emit = function (_0x15582d) {

        this._callbacks = this._callbacks || {};

        var _0x4fa3d5 = new Array(arguments.length - 1);

        var _0x156311 = this._callbacks["$" + _0x15582d];

        for (var _0x5ff839 = 1; _0x5ff839 < arguments.length; _0x5ff839++) {

          _0x4fa3d5[_0x5ff839 - 1] = arguments[_0x5ff839];

        }

        if (_0x156311) {

          _0x156311 = _0x156311.slice(0);

          for (var _0x5ff839 = 0, _0x5e75bf = _0x156311.length; _0x5ff839 < _0x5e75bf; ++_0x5ff839) {

            _0x156311[_0x5ff839].apply(this, _0x4fa3d5);

          }

        }

        return this;

      };

      _0x28624a.prototype.emitReserved = _0x28624a.prototype.emit;

      _0x28624a.prototype.listeners = function (_0x25f0e8) {

        this._callbacks = this._callbacks || {};

        return this._callbacks["$" + _0x25f0e8] || [];

      };

      _0x28624a.prototype.hasListeners = function (_0x5e27c5) {

        return !!this.listeners(_0x5e27c5).length;

      };

    },

    "./node_modules/engine.io-client/build/esm/contrib/has-cors.js": (_0x9cfe83, _0x4ea2ea, _0x38f88b) => {

      'use strict';



      _0x38f88b.r(_0x4ea2ea);

      _0x38f88b.d(_0x4ea2ea, {

        hasCORS: () => _0x3f1f11

      });

      let _0x828774 = false;

      try {

        _0x828774 = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();

      } catch (_0x5988cf) {}

      const _0x3f1f11 = _0x828774;

    },

    "./node_modules/engine.io-client/build/esm/contrib/parseqs.js": (_0x1a9e75, _0x4e68f7, _0x470d5f) => {

      'use strict';



      _0x470d5f.r(_0x4e68f7);

      _0x470d5f.d(_0x4e68f7, {

        decode: () => _0x303fcf,

        encode: () => _0x242cab

      });

      function _0x242cab(_0x36cb55) {

        let _0x3d1d0e = "";

        for (let _0x389c68 in _0x36cb55) {

          if (_0x36cb55.hasOwnProperty(_0x389c68)) {

            if (_0x3d1d0e.length) {

              _0x3d1d0e += "&";

            }

            _0x3d1d0e += encodeURIComponent(_0x389c68) + "=" + encodeURIComponent(_0x36cb55[_0x389c68]);

          }

        }

        return _0x3d1d0e;

      }

      function _0x303fcf(_0x5e333f) {

        let _0x4a7744 = {};

        let _0x22b1e7 = _0x5e333f.split("&");

        for (let _0xa393c3 = 0, _0x34f89f = _0x22b1e7.length; _0xa393c3 < _0x34f89f; _0xa393c3++) {

          let _0x486093 = _0x22b1e7[_0xa393c3].split("=");

          _0x4a7744[decodeURIComponent(_0x486093[0])] = decodeURIComponent(_0x486093[1]);

        }

        return _0x4a7744;

      }

    },

    "./node_modules/engine.io-client/build/esm/contrib/parseuri.js": (_0x1f1f21, _0x37d09a, _0x4277c8) => {

      'use strict';



      _0x4277c8.r(_0x37d09a);

      _0x4277c8.d(_0x37d09a, {

        parse: () => _0x4127fb

      });

      const _0xbd51d6 = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

      const _0x1de277 = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];

      function _0x4127fb(_0x3dca2c) {

        if (_0x3dca2c.length > 8000) {

          throw "URI too long";

        }

        const _0x108e5b = _0x3dca2c;

        const _0x1c5914 = _0x3dca2c.indexOf("[");

        const _0x5660fe = _0x3dca2c.indexOf("]");

        if (_0x1c5914 != -1 && _0x5660fe != -1) {

          _0x3dca2c = _0x3dca2c.substring(0, _0x1c5914) + _0x3dca2c.substring(_0x1c5914, _0x5660fe).replace(/:/g, ";") + _0x3dca2c.substring(_0x5660fe, _0x3dca2c.length);

        }

        let _0x53b7d7 = _0xbd51d6.exec(_0x3dca2c || "");

        let _0x218861 = {};

        let _0x1519c0 = 14;

        while (_0x1519c0--) {

          _0x218861[_0x1de277[_0x1519c0]] = _0x53b7d7[_0x1519c0] || "";

        }

        if (_0x1c5914 != -1 && _0x5660fe != -1) {

          _0x218861.source = _0x108e5b;

          _0x218861.host = _0x218861.host.substring(1, _0x218861.host.length - 1).replace(/;/g, ":");

          _0x218861.authority = _0x218861.authority.replace("[", "").replace("]", "").replace(/;/g, ":");

          _0x218861.ipv6uri = true;

        }

        _0x218861.pathNames = _0x2d0011(_0x218861, _0x218861.path);

        _0x218861.queryKey = _0x2bb25a(_0x218861, _0x218861.query);

        return _0x218861;

      }

      function _0x2d0011(_0x16a9d9, _0xef8bcb) {

        const _0x1ae869 = /\/{2,9}/g;

        const _0x4b13e8 = _0xef8bcb.replace(_0x1ae869, "/").split("/");

        if (_0xef8bcb.slice(0, 1) == "/" || _0xef8bcb.length === 0) {

          _0x4b13e8.splice(0, 1);

        }

        if (_0xef8bcb.slice(-1) == "/") {

          _0x4b13e8.splice(_0x4b13e8.length - 1, 1);

        }

        return _0x4b13e8;

      }

      function _0x2bb25a(_0x8dddd8, _0x5e6355) {

        const _0x5948d4 = {};

        _0x5e6355.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (_0x12cf38, _0x31a268, _0x5620c8) {

          if (_0x31a268) {

            _0x5948d4[_0x31a268] = _0x5620c8;

          }

        });

        return _0x5948d4;

      }

    },

    "./node_modules/engine.io-client/build/esm/globals.js": (_0x53be5d, _0x3642eb, _0x595137) => {

      'use strict';



      _0x595137.r(_0x3642eb);

      _0x595137.d(_0x3642eb, {

        createCookieJar: () => _0x4f614b,

        defaultBinaryType: () => _0x30c680,

        globalThisShim: () => _0x42b6cc,

        nextTick: () => _0x203b81

      });

      const _0x203b81 = (() => {

        const _0x37c613 = typeof Promise === "function" && typeof Promise.resolve === "function";

        if (_0x37c613) {

          return _0x547229 => Promise.resolve().then(_0x547229);

        } else {

          return (_0x1e60fa, _0x1832e2) => _0x1832e2(_0x1e60fa, 0);

        }

      })();

      const _0x42b6cc = (() => {

        if (typeof self !== "undefined") {

          return self;

        } else if (typeof window !== "undefined") {

          return window;

        } else {

          return Function("return this")();

        }

      })();

      const _0x30c680 = "arraybuffer";

      function _0x4f614b() {}

    },

    "./node_modules/engine.io-client/build/esm/index.js": (_0x5ed920, _0x570fd5, _0x1038ea) => {

      'use strict';



      _0x1038ea.r(_0x570fd5);

      _0x1038ea.d(_0x570fd5, {

        Fetch: () => _0x5cfb07.Fetch,

        NodeWebSocket: () => _0x136510.WS,

        NodeXHR: () => _0x10878e.XHR,

        Socket: () => _0x5fee1f.Socket,

        SocketWithUpgrade: () => _0x5fee1f.SocketWithUpgrade,

        SocketWithoutUpgrade: () => _0x5fee1f.SocketWithoutUpgrade,

        Transport: () => _0x34cb6e.Transport,

        TransportError: () => _0x34cb6e.TransportError,

        WebSocket: () => _0x136510.WS,

        WebTransport: () => _0x24e409.WT,

        XHR: () => _0x10878e.XHR,

        installTimerFunctions: () => _0x218a24.installTimerFunctions,

        nextTick: () => _0x4a5395.nextTick,

        parse: () => _0x3a8e9e.parse,

        protocol: () => _0x331bac,

        transports: () => _0x4570ce.transports

      });

      var _0x5fee1f = _0x1038ea("./node_modules/engine.io-client/build/esm/socket.js");

      var _0x34cb6e = _0x1038ea("./node_modules/engine.io-client/build/esm/transport.js");

      var _0x4570ce = _0x1038ea("./node_modules/engine.io-client/build/esm/transports/index.js");

      var _0x218a24 = _0x1038ea("./node_modules/engine.io-client/build/esm/util.js");

      var _0x3a8e9e = _0x1038ea("./node_modules/engine.io-client/build/esm/contrib/parseuri.js");

      var _0x4a5395 = _0x1038ea("./node_modules/engine.io-client/build/esm/globals.js");

      var _0x5cfb07 = _0x1038ea("./node_modules/engine.io-client/build/esm/transports/polling-fetch.js");

      var _0x10878e = _0x1038ea("./node_modules/engine.io-client/build/esm/transports/polling-xhr.js");

      var _0x136510 = _0x1038ea("./node_modules/engine.io-client/build/esm/transports/websocket.js");

      var _0x24e409 = _0x1038ea("./node_modules/engine.io-client/build/esm/transports/webtransport.js");

      const _0x331bac = _0x5fee1f.Socket.protocol;

    },

    "./node_modules/engine.io-client/build/esm/socket.js": (_0x28ef40, _0x71cbf5, _0x34cbbb) => {

      'use strict';



      _0x34cbbb.r(_0x71cbf5);

      _0x34cbbb.d(_0x71cbf5, {

        Socket: () => _0x39f31b,

        SocketWithUpgrade: () => _0xfaaf12,

        SocketWithoutUpgrade: () => _0x313e6f

      });

      var _0x492706 = _0x34cbbb("./node_modules/engine.io-client/build/esm/transports/index.js");

      var _0x42ccfe = _0x34cbbb("./node_modules/engine.io-client/build/esm/util.js");

      var _0x5d085d = _0x34cbbb("./node_modules/engine.io-client/build/esm/contrib/parseqs.js");

      var _0x8d593c = _0x34cbbb("./node_modules/engine.io-client/build/esm/contrib/parseuri.js");

      var _0x39fa0a = _0x34cbbb("./node_modules/@socket.io/component-emitter/lib/esm/index.js");

      var _0x5808cf = _0x34cbbb("./node_modules/engine.io-parser/build/esm/index.js");

      var _0x2449d7 = _0x34cbbb("./node_modules/engine.io-client/build/esm/globals.js");

      const _0x3a2ef2 = typeof addEventListener === "function" && typeof removeEventListener === "function";

      const _0x1a19d2 = [];

      if (_0x3a2ef2) {

        addEventListener("offline", () => {

          _0x1a19d2.forEach(_0x195fb9 => _0x195fb9());

        }, false);

      }

      class _0x313e6f extends _0x39fa0a.Emitter {

        constructor(_0x424a19, _0x10bec4) {

          super();

          this.binaryType = _0x2449d7.defaultBinaryType;

          this.writeBuffer = [];

          this._prevBufferLen = 0;

          this._pingInterval = -1;

          this._pingTimeout = -1;

          this._maxPayload = -1;

          this._pingTimeoutTime = Infinity;

          if (_0x424a19 && typeof _0x424a19 === "object") {

            _0x10bec4 = _0x424a19;

            _0x424a19 = null;

          }

          if (_0x424a19) {

            const _0x535d6a = (0, _0x8d593c.parse)(_0x424a19);

            _0x10bec4.hostname = _0x535d6a.host;

            _0x10bec4.secure = _0x535d6a.protocol === "https" || _0x535d6a.protocol === "wss";

            _0x10bec4.port = _0x535d6a.port;

            if (_0x535d6a.query) {

              _0x10bec4.query = _0x535d6a.query;

            }

          } else if (_0x10bec4.host) {

            _0x10bec4.hostname = (0, _0x8d593c.parse)(_0x10bec4.host).host;

          }

          (0, _0x42ccfe.installTimerFunctions)(this, _0x10bec4);

          this.secure = _0x10bec4.secure ?? (typeof location !== "undefined" && location.protocol === "https:");

          if (_0x10bec4.hostname && !_0x10bec4.port) {

            _0x10bec4.port = this.secure ? "443" : "80";

          }

          this.hostname = _0x10bec4.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");

          this.port = _0x10bec4.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");

          this.transports = [];

          this._transportsByName = {};

          _0x10bec4.transports.forEach(_0x3b3a77 => {

            const _0x3a874d = _0x3b3a77.prototype.name;

            this.transports.push(_0x3a874d);

            this._transportsByName[_0x3a874d] = _0x3b3a77;

          });

          this.opts = Object.assign({

            path: "/engine.io",

            agent: false,

            withCredentials: false,

            upgrade: true,

            timestampParam: "t",

            rememberUpgrade: false,

            addTrailingSlash: true,

            rejectUnauthorized: true,

            perMessageDeflate: {

              threshold: 1024

            },

            transportOptions: {},

            closeOnBeforeunload: false

          }, _0x10bec4);

          this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");

          if (typeof this.opts.query === "string") {

            this.opts.query = (0, _0x5d085d.decode)(this.opts.query);

          }

          if (_0x3a2ef2) {

            if (this.opts.closeOnBeforeunload) {

              this._beforeunloadEventListener = () => {

                if (this.transport) {

                  this.transport.removeAllListeners();

                  this.transport.close();

                }

              };

              addEventListener("beforeunload", this._beforeunloadEventListener, false);

            }

            if (this.hostname !== "localhost") {

              this._offlineEventListener = () => {

                this._onClose("transport close", {

                  description: "network connection lost"

                });

              };

              _0x1a19d2.push(this._offlineEventListener);

            }

          }

          if (this.opts.withCredentials) {

            this._cookieJar = (0, _0x2449d7.createCookieJar)();

          }

          this._open();

        }

        createTransport(_0x2b0cb9) {

          const _0x24a3c0 = Object.assign({}, this.opts.query);

          _0x24a3c0.EIO = _0x5808cf.protocol;

          _0x24a3c0.transport = _0x2b0cb9;

          if (this.id) {

            _0x24a3c0.sid = this.id;

          }

          const _0x28cc7e = Object.assign({}, this.opts, {

            query: _0x24a3c0,

            socket: this,

            hostname: this.hostname,

            secure: this.secure,

            port: this.port

          }, this.opts.transportOptions[_0x2b0cb9]);

          return new this._transportsByName[_0x2b0cb9](_0x28cc7e);

        }

        _open() {

          if (this.transports.length === 0) {

            this.setTimeoutFn(() => {

              this.emitReserved("error", "No transports available");

            }, 0);

            return;

          }

          const _0x544cba = this.opts.rememberUpgrade && _0x313e6f.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];

          this.readyState = "opening";

          const _0xaf4dbd = this.createTransport(_0x544cba);

          _0xaf4dbd.open();

          this.setTransport(_0xaf4dbd);

        }

        setTransport(_0x5340d9) {

          if (this.transport) {

            this.transport.removeAllListeners();

          }

          this.transport = _0x5340d9;

          _0x5340d9.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", _0x16cb92 => this._onClose("transport close", _0x16cb92));

        }

        onOpen() {

          this.readyState = "open";

          _0x313e6f.priorWebsocketSuccess = this.transport.name === "websocket";

          this.emitReserved("open");

          this.flush();

        }

        _onPacket(_0x4006c5) {

          if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {

            this.emitReserved("packet", _0x4006c5);

            this.emitReserved("heartbeat");

            switch (_0x4006c5.type) {

              case "open":

                this.onHandshake(JSON.parse(_0x4006c5.data));

                break;

              case "ping":

                this._sendPacket("pong");

                this.emitReserved("ping");

                this.emitReserved("pong");

                this._resetPingTimeout();

                break;

              case "error":

                const _0x1987ec = new Error("server error");

                _0x1987ec.code = _0x4006c5.data;

                this._onError(_0x1987ec);

                break;

              case "message":

                this.emitReserved("data", _0x4006c5.data);

                this.emitReserved("message", _0x4006c5.data);

                break;

            }

          } else {}

        }

        onHandshake(_0x39f346) {

          this.emitReserved("handshake", _0x39f346);

          this.id = _0x39f346.sid;

          this.transport.query.sid = _0x39f346.sid;

          this._pingInterval = _0x39f346.pingInterval;

          this._pingTimeout = _0x39f346.pingTimeout;

          this._maxPayload = _0x39f346.maxPayload;

          this.onOpen();

          if (this.readyState === "closed") {

            return;

          }

          this._resetPingTimeout();

        }

        _resetPingTimeout() {

          this.clearTimeoutFn(this._pingTimeoutTimer);

          const _0x2e91c4 = this._pingInterval + this._pingTimeout;

          this._pingTimeoutTime = Date.now() + _0x2e91c4;

          this._pingTimeoutTimer = this.setTimeoutFn(() => {

            this._onClose("ping timeout");

          }, _0x2e91c4);

          if (this.opts.autoUnref) {

            this._pingTimeoutTimer.unref();

          }

        }

        _onDrain() {

          this.writeBuffer.splice(0, this._prevBufferLen);

          this._prevBufferLen = 0;

          if (this.writeBuffer.length === 0) {

            this.emitReserved("drain");

          } else {

            this.flush();

          }

        }

        flush() {

          if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {

            const _0x5719da = this._getWritablePackets();

            this.transport.send(_0x5719da);

            this._prevBufferLen = _0x5719da.length;

            this.emitReserved("flush");

          }

        }

        _getWritablePackets() {

          const _0x2405c3 = this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;

          if (!_0x2405c3) {

            return this.writeBuffer;

          }

          let _0x193951 = 1;

          for (let _0x3836c1 = 0; _0x3836c1 < this.writeBuffer.length; _0x3836c1++) {

            const _0xd33995 = this.writeBuffer[_0x3836c1].data;

            if (_0xd33995) {

              _0x193951 += (0, _0x42ccfe.byteLength)(_0xd33995);

            }

            if (_0x3836c1 > 0 && _0x193951 > this._maxPayload) {

              return this.writeBuffer.slice(0, _0x3836c1);

            }

            _0x193951 += 2;

          }

          return this.writeBuffer;

        }

        _hasPingExpired() {

          if (!this._pingTimeoutTime) {

            return true;

          }

          const _0x1ad478 = Date.now() > this._pingTimeoutTime;

          if (_0x1ad478) {

            this._pingTimeoutTime = 0;

            (0, _0x2449d7.nextTick)(() => {

              this._onClose("ping timeout");

            }, this.setTimeoutFn);

          }

          return _0x1ad478;

        }

        write(_0x10fe91, _0x4343aa, _0x21a003) {

          this._sendPacket("message", _0x10fe91, _0x4343aa, _0x21a003);

          return this;

        }

        send(_0x2ec2be, _0x2e5230, _0x305a73) {

          this._sendPacket("message", _0x2ec2be, _0x2e5230, _0x305a73);

          return this;

        }

        _sendPacket(_0x5d4c77, _0x11a662, _0xd02cbd, _0x3eece6) {

          if (typeof _0x11a662 === "function") {

            _0x3eece6 = _0x11a662;

            _0x11a662 = undefined;

          }

          if (typeof _0xd02cbd === "function") {

            _0x3eece6 = _0xd02cbd;

            _0xd02cbd = null;

          }

          if (this.readyState === "closing" || this.readyState === "closed") {

            return;

          }

          _0xd02cbd = _0xd02cbd || {};

          _0xd02cbd.compress = _0xd02cbd.compress !== false;

          const _0xf22878 = {

            type: _0x5d4c77,

            data: _0x11a662,

            options: _0xd02cbd

          };

          this.emitReserved("packetCreate", _0xf22878);

          this.writeBuffer.push(_0xf22878);

          if (_0x3eece6) {

            this.once("flush", _0x3eece6);

          }

          this.flush();

        }

        close() {

          const _0x52bec6 = () => {

            this._onClose("forced close");

            this.transport.close();

          };

          const _0x4f0ede = () => {

            this.off("upgrade", _0x4f0ede);

            this.off("upgradeError", _0x4f0ede);

            _0x52bec6();

          };

          const _0x2e09b5 = () => {

            this.once("upgrade", _0x4f0ede);

            this.once("upgradeError", _0x4f0ede);

          };

          if (this.readyState === "opening" || this.readyState === "open") {

            this.readyState = "closing";

            if (this.writeBuffer.length) {

              this.once("drain", () => {

                if (this.upgrading) {

                  _0x2e09b5();

                } else {

                  _0x52bec6();

                }

              });

            } else if (this.upgrading) {

              _0x2e09b5();

            } else {

              _0x52bec6();

            }

          }

          return this;

        }

        _onError(_0x4d8fe3) {

          _0x313e6f.priorWebsocketSuccess = false;

          if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {

            this.transports.shift();

            return this._open();

          }

          this.emitReserved("error", _0x4d8fe3);

          this._onClose("transport error", _0x4d8fe3);

        }

        _onClose(_0x57c24e, _0x32f0c4) {

          if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {

            this.clearTimeoutFn(this._pingTimeoutTimer);

            this.transport.removeAllListeners("close");

            this.transport.close();

            this.transport.removeAllListeners();

            if (_0x3a2ef2) {

              if (this._beforeunloadEventListener) {

                removeEventListener("beforeunload", this._beforeunloadEventListener, false);

              }

              if (this._offlineEventListener) {

                const _0x3cacaa = _0x1a19d2.indexOf(this._offlineEventListener);

                if (_0x3cacaa !== -1) {

                  _0x1a19d2.splice(_0x3cacaa, 1);

                }

              }

            }

            this.readyState = "closed";

            this.id = null;

            this.emitReserved("close", _0x57c24e, _0x32f0c4);

            this.writeBuffer = [];

            this._prevBufferLen = 0;

          }

        }

      }

      _0x313e6f.protocol = _0x5808cf.protocol;

      class _0xfaaf12 extends _0x313e6f {

        constructor() {

          super(...arguments);

          this._upgrades = [];

        }

        onOpen() {

          super.onOpen();

          if (this.readyState === "open" && this.opts.upgrade) {

            for (let _0x5599d2 = 0; _0x5599d2 < this._upgrades.length; _0x5599d2++) {

              this._probe(this._upgrades[_0x5599d2]);

            }

          }

        }

        _probe(_0x96b0af) {

          let _0x5a9d1b = this.createTransport(_0x96b0af);

          let _0x4520c7 = false;

          _0x313e6f.priorWebsocketSuccess = false;

          const _0x157243 = () => {

            if (_0x4520c7) {

              return;

            }

            _0x5a9d1b.send([{

              type: "ping",

              data: "probe"

            }]);

            _0x5a9d1b.once("packet", _0x450484 => {

              if (_0x4520c7) {

                return;

              }

              if (_0x450484.type === "pong" && _0x450484.data === "probe") {

                this.upgrading = true;

                this.emitReserved("upgrading", _0x5a9d1b);

                if (!_0x5a9d1b) {

                  return;

                }

                _0x313e6f.priorWebsocketSuccess = _0x5a9d1b.name === "websocket";

                this.transport.pause(() => {

                  if (_0x4520c7) {

                    return;

                  }

                  if (this.readyState === "closed") {

                    return;

                  }

                  _0x145b05();

                  this.setTransport(_0x5a9d1b);

                  _0x5a9d1b.send([{

                    type: "upgrade"

                  }]);

                  this.emitReserved("upgrade", _0x5a9d1b);

                  _0x5a9d1b = null;

                  this.upgrading = false;

                  this.flush();

                });

              } else {

                const _0x271926 = new Error("probe error");

                _0x271926.transport = _0x5a9d1b.name;

                this.emitReserved("upgradeError", _0x271926);

              }

            });

          };

          function _0x326bce() {

            if (_0x4520c7) {

              return;

            }

            _0x4520c7 = true;

            _0x145b05();

            _0x5a9d1b.close();

            _0x5a9d1b = null;

          }

          const _0x16e29b = _0x7a0642 => {

            const _0x581ec9 = new Error("probe error: " + _0x7a0642);

            _0x581ec9.transport = _0x5a9d1b.name;

            _0x326bce();

            this.emitReserved("upgradeError", _0x581ec9);

          };

          function _0x3c34d2() {

            _0x16e29b("transport closed");

          }

          function _0x256975() {

            _0x16e29b("socket closed");

          }

          function _0x4be3cf(_0x254ccb) {

            if (_0x5a9d1b && _0x254ccb.name !== _0x5a9d1b.name) {

              _0x326bce();

            }

          }

          const _0x145b05 = () => {

            _0x5a9d1b.removeListener("open", _0x157243);

            _0x5a9d1b.removeListener("error", _0x16e29b);

            _0x5a9d1b.removeListener("close", _0x3c34d2);

            this.off("close", _0x256975);

            this.off("upgrading", _0x4be3cf);

          };

          _0x5a9d1b.once("open", _0x157243);

          _0x5a9d1b.once("error", _0x16e29b);

          _0x5a9d1b.once("close", _0x3c34d2);

          this.once("close", _0x256975);

          this.once("upgrading", _0x4be3cf);

          if (this._upgrades.indexOf("webtransport") !== -1 && _0x96b0af !== "webtransport") {

            this.setTimeoutFn(() => {

              if (!_0x4520c7) {

                _0x5a9d1b.open();

              }

            }, 200);

          } else {

            _0x5a9d1b.open();

          }

        }

        onHandshake(_0x1fed2d) {

          this._upgrades = this._filterUpgrades(_0x1fed2d.upgrades);

          super.onHandshake(_0x1fed2d);

        }

        _filterUpgrades(_0x372047) {

          const _0x129de5 = [];

          for (let _0x53775a = 0; _0x53775a < _0x372047.length; _0x53775a++) {

            if (~this.transports.indexOf(_0x372047[_0x53775a])) {

              _0x129de5.push(_0x372047[_0x53775a]);

            }

          }

          return _0x129de5;

        }

      }

      class _0x39f31b extends _0xfaaf12 {

        constructor(_0x5d43b8, _0x6ce81f = {}) {

          const _0x3311b3 = typeof _0x5d43b8 === "object" ? _0x5d43b8 : _0x6ce81f;

          if (!_0x3311b3.transports || _0x3311b3.transports && typeof _0x3311b3.transports[0] === "string") {

            _0x3311b3.transports = (_0x3311b3.transports || ["polling", "websocket", "webtransport"]).map(_0x4ca31b => _0x492706.transports[_0x4ca31b]).filter(_0x3b023d => !!_0x3b023d);

          }

          super(_0x5d43b8, _0x3311b3);

        }

      }

    },

    "./node_modules/engine.io-client/build/esm/transport.js": (_0x193592, _0x2af853, _0x17b607) => {

      'use strict';



      _0x17b607.r(_0x2af853);

      _0x17b607.d(_0x2af853, {

        Transport: () => _0x311770,

        TransportError: () => _0x5c3db4

      });

      var _0x3a6366 = _0x17b607("./node_modules/engine.io-parser/build/esm/index.js");

      var _0x4fe05d = _0x17b607("./node_modules/@socket.io/component-emitter/lib/esm/index.js");

      var _0x2d563a = _0x17b607("./node_modules/engine.io-client/build/esm/util.js");

      var _0x2b15dd = _0x17b607("./node_modules/engine.io-client/build/esm/contrib/parseqs.js");

      class _0x5c3db4 extends Error {

        constructor(_0x156d54, _0x1cec92, _0x431bc0) {

          super(_0x156d54);

          this.description = _0x1cec92;

          this.context = _0x431bc0;

          this.type = "TransportError";

        }

      }

      class _0x311770 extends _0x4fe05d.Emitter {

        constructor(_0x395123) {

          super();

          this.writable = false;

          (0, _0x2d563a.installTimerFunctions)(this, _0x395123);

          this.opts = _0x395123;

          this.query = _0x395123.query;

          this.socket = _0x395123.socket;

          this.supportsBinary = !_0x395123.forceBase64;

        }

        onError(_0x6f5e05, _0x211628, _0x24eda9) {

          super.emitReserved("error", new _0x5c3db4(_0x6f5e05, _0x211628, _0x24eda9));

          return this;

        }

        open() {

          this.readyState = "opening";

          this.doOpen();

          return this;

        }

        close() {

          if (this.readyState === "opening" || this.readyState === "open") {

            this.doClose();

            this.onClose();

          }

          return this;

        }

        send(_0x3d0df2) {

          if (this.readyState === "open") {

            this.write(_0x3d0df2);

          } else {}

        }

        onOpen() {

          this.readyState = "open";

          this.writable = true;

          super.emitReserved("open");

        }

        onData(_0x15efbe) {

          const _0x43d473 = (0, _0x3a6366.decodePacket)(_0x15efbe, this.socket.binaryType);

          this.onPacket(_0x43d473);

        }

        onPacket(_0xa072dd) {

          super.emitReserved("packet", _0xa072dd);

        }

        onClose(_0x33c98a) {

          this.readyState = "closed";

          super.emitReserved("close", _0x33c98a);

        }

        pause(_0x49891a) {}

        createUri(_0x26bc21, _0x3c295e = {}) {

          return _0x26bc21 + "://" + this._hostname() + this._port() + this.opts.path + this._query(_0x3c295e);

        }

        _hostname() {

          const _0xa4f252 = this.opts.hostname;

          if (_0xa4f252.indexOf(":") === -1) {

            return _0xa4f252;

          } else {

            return "[" + _0xa4f252 + "]";

          }

        }

        _port() {

          if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) {

            return ":" + this.opts.port;

          } else {

            return "";

          }

        }

        _query(_0x569ed5) {

          const _0x5ebde1 = (0, _0x2b15dd.encode)(_0x569ed5);

          if (_0x5ebde1.length) {

            return "?" + _0x5ebde1;

          } else {

            return "";

          }

        }

      }

    },

    "./node_modules/engine.io-client/build/esm/transports/index.js": (_0xaa02f8, _0x4d8565, _0x40b44b) => {

      'use strict';



      _0x40b44b.r(_0x4d8565);

      _0x40b44b.d(_0x4d8565, {

        transports: () => _0x4b5993

      });

      var _0x405df8 = _0x40b44b("./node_modules/engine.io-client/build/esm/transports/polling-xhr.js");

      var _0x257926 = _0x40b44b("./node_modules/engine.io-client/build/esm/transports/websocket.js");

      var _0x5c1534 = _0x40b44b("./node_modules/engine.io-client/build/esm/transports/webtransport.js");

      const _0x4b5993 = {

        websocket: _0x257926.WS,

        webtransport: _0x5c1534.WT,

        polling: _0x405df8.XHR

      };

    },

    "./node_modules/engine.io-client/build/esm/transports/polling-fetch.js": (_0x35afe1, _0x37558a, _0x538c35) => {

      'use strict';



      _0x538c35.r(_0x37558a);

      _0x538c35.d(_0x37558a, {

        Fetch: () => _0xed7723

      });

      var _0x467969 = _0x538c35("./node_modules/engine.io-client/build/esm/transports/polling.js");

      class _0xed7723 extends _0x467969.Polling {

        doPoll() {

          this._fetch().then(_0x32c15f => {

            if (!_0x32c15f.ok) {

              return this.onError("fetch read error", _0x32c15f.status, _0x32c15f);

            }

            _0x32c15f.text().then(_0x5ea395 => this.onData(_0x5ea395));

          }).catch(_0x355fe2 => {

            this.onError("fetch read error", _0x355fe2);

          });

        }

        doWrite(_0x4df7aa, _0x39422a) {

          this._fetch(_0x4df7aa).then(_0x3f9a2e => {

            if (!_0x3f9a2e.ok) {

              return this.onError("fetch write error", _0x3f9a2e.status, _0x3f9a2e);

            }

            _0x39422a();

          }).catch(_0x1ca67e => {

            this.onError("fetch write error", _0x1ca67e);

          });

        }

        _fetch(_0x104a95) {

          var _0xc7f76a;

          const _0x1722a0 = _0x104a95 !== undefined;

          const _0x521ceb = new Headers(this.opts.extraHeaders);

          if (_0x1722a0) {

            _0x521ceb.set("content-type", "text/plain;charset=UTF-8");

          }

          if ((_0xc7f76a = this.socket._cookieJar) === null || _0xc7f76a === undefined) {

            undefined;

          } else {

            _0xc7f76a.appendCookies(_0x521ceb);

          }

          return fetch(this.uri(), {

            method: _0x1722a0 ? "POST" : "GET",

            body: _0x1722a0 ? _0x104a95 : null,

            headers: _0x521ceb,

            credentials: this.opts.withCredentials ? "include" : "omit"

          }).then(_0xb8b381 => {

            var _0x24223a;

            if ((_0x24223a = this.socket._cookieJar) === null || _0x24223a === undefined) {

              undefined;

            } else {

              _0x24223a.parseCookies(_0xb8b381.headers.getSetCookie());

            }

            return _0xb8b381;

          });

        }

      }

    },

    "./node_modules/engine.io-client/build/esm/transports/polling-xhr.js": (_0x71e784, _0x1a0203, _0x2fcd7f) => {

      'use strict';



      _0x2fcd7f.r(_0x1a0203);

      _0x2fcd7f.d(_0x1a0203, {

        BaseXHR: () => _0x42353e,

        Request: () => _0x4c8d4a,

        XHR: () => _0x917f03

      });

      var _0x4bd427 = _0x2fcd7f("./node_modules/engine.io-client/build/esm/transports/polling.js");

      var _0x2a47fb = _0x2fcd7f("./node_modules/@socket.io/component-emitter/lib/esm/index.js");

      var _0x1e2a26 = _0x2fcd7f("./node_modules/engine.io-client/build/esm/util.js");

      var _0x2559d2 = _0x2fcd7f("./node_modules/engine.io-client/build/esm/globals.js");

      var _0x342fb9 = _0x2fcd7f("./node_modules/engine.io-client/build/esm/contrib/has-cors.js");

      function _0x55a522() {}

      class _0x42353e extends _0x4bd427.Polling {

        constructor(_0x25e741) {

          super(_0x25e741);

          if (typeof location !== "undefined") {

            const _0x21edc7 = location.protocol === "https:";

            let _0x13195b = location.port;

            if (!_0x13195b) {

              _0x13195b = _0x21edc7 ? "443" : "80";

            }

            this.xd = typeof location !== "undefined" && _0x25e741.hostname !== location.hostname || _0x13195b !== _0x25e741.port;

          }

        }

        doWrite(_0x4e8c0d, _0x4730b6) {

          const _0x36527d = this.request({

            method: "POST",

            data: _0x4e8c0d

          });

          _0x36527d.on("success", _0x4730b6);

          _0x36527d.on("error", (_0xc50ccf, _0x1d22db) => {

            this.onError("xhr post error", _0xc50ccf, _0x1d22db);

          });

        }

        doPoll() {

          const _0x16a867 = this.request();

          _0x16a867.on("data", this.onData.bind(this));

          _0x16a867.on("error", (_0x5e2379, _0x3f722f) => {

            this.onError("xhr poll error", _0x5e2379, _0x3f722f);

          });

          this.pollXhr = _0x16a867;

        }

      }

      class _0x4c8d4a extends _0x2a47fb.Emitter {

        constructor(_0x24d09c, _0x12a9a1, _0x21c309) {

          super();

          this.createRequest = _0x24d09c;

          (0, _0x1e2a26.installTimerFunctions)(this, _0x21c309);

          this._opts = _0x21c309;

          this._method = _0x21c309.method || "GET";

          this._uri = _0x12a9a1;

          this._data = _0x21c309.data !== undefined ? _0x21c309.data : null;

          this._create();

        }

        _create() {

          var _0x49a047;

          const _0x25a195 = (0, _0x1e2a26.pick)(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");

          _0x25a195.xdomain = !!this._opts.xd;

          const _0x334b37 = this._xhr = this.createRequest(_0x25a195);

          try {

            _0x334b37.open(this._method, this._uri, true);

            try {

              if (this._opts.extraHeaders) {

                if (_0x334b37.setDisableHeaderCheck) {

                  _0x334b37.setDisableHeaderCheck(true);

                }

                for (let _0x34f191 in this._opts.extraHeaders) {

                  if (this._opts.extraHeaders.hasOwnProperty(_0x34f191)) {

                    _0x334b37.setRequestHeader(_0x34f191, this._opts.extraHeaders[_0x34f191]);

                  }

                }

              }

            } catch (_0x397112) {}

            if (this._method === "POST") {

              try {

                _0x334b37.setRequestHeader("Content-type", "text/plain;charset=UTF-8");

              } catch (_0xd3c592) {}

            }

            try {

              _0x334b37.setRequestHeader("Accept", "*/*");

            } catch (_0x30a60e) {}

            if ((_0x49a047 = this._opts.cookieJar) === null || _0x49a047 === undefined) {

              undefined;

            } else {

              _0x49a047.addCookies(_0x334b37);

            }

            if ("withCredentials" in _0x334b37) {

              _0x334b37.withCredentials = this._opts.withCredentials;

            }

            if (this._opts.requestTimeout) {

              _0x334b37.timeout = this._opts.requestTimeout;

            }

            _0x334b37.onreadystatechange = () => {

              var _0x13dae5;

              if (_0x334b37.readyState === 3) {

                if ((_0x13dae5 = this._opts.cookieJar) === null || _0x13dae5 === undefined) {

                  undefined;

                } else {

                  _0x13dae5.parseCookies(_0x334b37.getResponseHeader("set-cookie"));

                }

              }

              if (_0x334b37.readyState !== 4) {

                return;

              }

              if (_0x334b37.status === 200 || _0x334b37.status === 1223) {

                this._onLoad();

              } else {

                this.setTimeoutFn(() => {

                  this._onError(typeof _0x334b37.status === "number" ? _0x334b37.status : 0);

                }, 0);

              }

            };

            _0x334b37.send(this._data);

          } catch (_0x543c28) {

            this.setTimeoutFn(() => {

              this._onError(_0x543c28);

            }, 0);

            return;

          }

          if (typeof document !== "undefined") {

            this._index = _0x4c8d4a.requestsCount++;

            _0x4c8d4a.requests[this._index] = this;

          }

        }

        _onError(_0x3e4639) {

          this.emitReserved("error", _0x3e4639, this._xhr);

          this._cleanup(true);

        }

        _cleanup(_0x30eb33) {

          if (typeof this._xhr === "undefined" || this._xhr === null) {

            return;

          }

          this._xhr.onreadystatechange = _0x55a522;

          if (_0x30eb33) {

            try {

              this._xhr.abort();

            } catch (_0x167ef8) {}

          }

          if (typeof document !== "undefined") {

            delete _0x4c8d4a.requests[this._index];

          }

          this._xhr = null;

        }

        _onLoad() {

          const _0x501842 = this._xhr.responseText;

          if (_0x501842 !== null) {

            this.emitReserved("data", _0x501842);

            this.emitReserved("success");

            this._cleanup();

          }

        }

        abort() {

          this._cleanup();

        }

      }

      _0x4c8d4a.requestsCount = 0;

      _0x4c8d4a.requests = {};

      if (typeof document !== "undefined") {

        if (typeof attachEvent === "function") {

          attachEvent("onunload", _0x3647fa);

        } else if (typeof addEventListener === "function") {

          const _0x463646 = "onpagehide" in _0x2559d2.globalThisShim ? "pagehide" : "unload";

          addEventListener(_0x463646, _0x3647fa, false);

        }

      }

      function _0x3647fa() {

        for (let _0x4c710b in _0x4c8d4a.requests) {

          if (_0x4c8d4a.requests.hasOwnProperty(_0x4c710b)) {

            _0x4c8d4a.requests[_0x4c710b].abort();

          }

        }

      }

      const _0x232b6d = function () {

        const _0x4b914a = _0x32dc9f({

          xdomain: false

        });

        return _0x4b914a && _0x4b914a.responseType !== null;

      }();

      class _0x917f03 extends _0x42353e {

        constructor(_0x5f448d) {

          super(_0x5f448d);

          const _0x2b4391 = _0x5f448d && _0x5f448d.forceBase64;

          this.supportsBinary = _0x232b6d && !_0x2b4391;

        }

        request(_0x13c091 = {}) {

          Object.assign(_0x13c091, {

            xd: this.xd

          }, this.opts);

          return new _0x4c8d4a(_0x32dc9f, this.uri(), _0x13c091);

        }

      }

      function _0x32dc9f(_0x53516b) {

        const _0xce14f2 = _0x53516b.xdomain;

        try {

          if (typeof XMLHttpRequest !== "undefined" && (!_0xce14f2 || _0x342fb9.hasCORS)) {

            return new XMLHttpRequest();

          }

        } catch (_0x46cbcf) {}

        if (!_0xce14f2) {

          try {

            return new _0x2559d2.globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");

          } catch (_0x15a324) {}

        }

      }

    },

    "./node_modules/engine.io-client/build/esm/transports/polling.js": (_0x214221, _0x4ed543, _0x510693) => {

      'use strict';



      _0x510693.r(_0x4ed543);

      _0x510693.d(_0x4ed543, {

        Polling: () => _0x4f7e92

      });

      var _0x1fcbc0 = _0x510693("./node_modules/engine.io-client/build/esm/transport.js");

      var _0x450397 = _0x510693("./node_modules/engine.io-client/build/esm/util.js");

      var _0x467ec1 = _0x510693("./node_modules/engine.io-parser/build/esm/index.js");

      class _0x4f7e92 extends _0x1fcbc0.Transport {

        constructor() {

          super(...arguments);

          this._polling = false;

        }

        get name() {

          return "polling";

        }

        doOpen() {

          this._poll();

        }

        pause(_0x5615d0) {

          this.readyState = "pausing";

          const _0x4187f5 = () => {

            this.readyState = "paused";

            _0x5615d0();

          };

          if (this._polling || !this.writable) {

            let _0x84aa91 = 0;

            if (this._polling) {

              _0x84aa91++;

              this.once("pollComplete", function () {

                if (! --_0x84aa91) {

                  _0x4187f5();

                }

              });

            }

            if (!this.writable) {

              _0x84aa91++;

              this.once("drain", function () {

                if (! --_0x84aa91) {

                  _0x4187f5();

                }

              });

            }

          } else {

            _0x4187f5();

          }

        }

        _poll() {

          this._polling = true;

          this.doPoll();

          this.emitReserved("poll");

        }

        onData(_0x3cdc03) {

          const _0x1a11b4 = _0x3422d9 => {

            if (this.readyState === "opening" && _0x3422d9.type === "open") {

              this.onOpen();

            }

            if (_0x3422d9.type === "close") {

              this.onClose({

                description: "transport closed by the server"

              });

              return false;

            }

            this.onPacket(_0x3422d9);

          };

          (0, _0x467ec1.decodePayload)(_0x3cdc03, this.socket.binaryType).forEach(_0x1a11b4);

          if (this.readyState !== "closed") {

            this._polling = false;

            this.emitReserved("pollComplete");

            if (this.readyState === "open") {

              this._poll();

            } else {}

          }

        }

        doClose() {

          const _0x275030 = () => {

            this.write([{

              type: "close"

            }]);

          };

          if (this.readyState === "open") {

            _0x275030();

          } else {

            this.once("open", _0x275030);

          }

        }

        write(_0x2668f6) {

          this.writable = false;

          (0, _0x467ec1.encodePayload)(_0x2668f6, _0x1f25a4 => {

            this.doWrite(_0x1f25a4, () => {

              this.writable = true;

              this.emitReserved("drain");

            });

          });

        }

        uri() {

          const _0x40acca = this.opts.secure ? "https" : "http";

          const _0x3dd378 = this.query || {};

          if (this.opts.timestampRequests !== false) {

            _0x3dd378[this.opts.timestampParam] = (0, _0x450397.randomString)();

          }

          if (!this.supportsBinary && !_0x3dd378.sid) {

            _0x3dd378.b64 = 1;

          }

          return this.createUri(_0x40acca, _0x3dd378);

        }

      }

    },

    "./node_modules/engine.io-client/build/esm/transports/websocket.js": (_0x405782, _0x331054, _0x377082) => {

      'use strict';



      _0x377082.r(_0x331054);

      _0x377082.d(_0x331054, {

        BaseWS: () => _0x4a1710,

        WS: () => _0x4f5a66

      });

      var _0x17df50 = _0x377082("./node_modules/engine.io-client/build/esm/transport.js");

      var _0x5cb784 = _0x377082("./node_modules/engine.io-client/build/esm/util.js");

      var _0x5b41e0 = _0x377082("./node_modules/engine.io-parser/build/esm/index.js");

      var _0x276623 = _0x377082("./node_modules/engine.io-client/build/esm/globals.js");

      const _0x2f3212 = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";

      class _0x4a1710 extends _0x17df50.Transport {

        get name() {

          return "websocket";

        }

        doOpen() {

          const _0x2bd65e = this.uri();

          const _0x10ca83 = this.opts.protocols;

          const _0x18dd92 = _0x2f3212 ? {} : (0, _0x5cb784.pick)(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");

          if (this.opts.extraHeaders) {

            _0x18dd92.headers = this.opts.extraHeaders;

          }

          try {

            this.ws = this.createSocket(_0x2bd65e, _0x10ca83, _0x18dd92);

          } catch (_0x2a39c2) {

            return this.emitReserved("error", _0x2a39c2);

          }

          this.ws.binaryType = this.socket.binaryType;

          this.addEventListeners();

        }

        addEventListeners() {

          this.ws.onopen = () => {

            if (this.opts.autoUnref) {

              this.ws._socket.unref();

            }

            this.onOpen();

          };

          this.ws.onclose = _0x5573c2 => this.onClose({

            description: "websocket connection closed",

            context: _0x5573c2

          });

          this.ws.onmessage = _0x545856 => this.onData(_0x545856.data);

          this.ws.onerror = _0x52009a => this.onError("websocket error", _0x52009a);

        }

        write(_0x43bcc4) {

          this.writable = false;

          for (let _0x4f036a = 0; _0x4f036a < _0x43bcc4.length; _0x4f036a++) {

            const _0x43ab0c = _0x43bcc4[_0x4f036a];

            const _0x25889d = _0x4f036a === _0x43bcc4.length - 1;

            (0, _0x5b41e0.encodePacket)(_0x43ab0c, this.supportsBinary, _0x5e3975 => {

              try {

                this.doWrite(_0x43ab0c, _0x5e3975);

              } catch (_0xed6af9) {}

              if (_0x25889d) {

                (0, _0x276623.nextTick)(() => {

                  this.writable = true;

                  this.emitReserved("drain");

                }, this.setTimeoutFn);

              }

            });

          }

        }

        doClose() {

          if (typeof this.ws !== "undefined") {

            this.ws.onerror = () => {};

            this.ws.close();

            this.ws = null;

          }

        }

        uri() {

          const _0x45ccf1 = this.opts.secure ? "wss" : "ws";

          const _0x30cedb = this.query || {};

          if (this.opts.timestampRequests) {

            _0x30cedb[this.opts.timestampParam] = (0, _0x5cb784.randomString)();

          }

          if (!this.supportsBinary) {

            _0x30cedb.b64 = 1;

          }

          return this.createUri(_0x45ccf1, _0x30cedb);

        }

      }

      const _0x1bfabf = _0x276623.globalThisShim.WebSocket || _0x276623.globalThisShim.MozWebSocket;

      class _0x4f5a66 extends _0x4a1710 {

        createSocket(_0x5cdd4c, _0x491634, _0x3163fb) {

          if (!_0x2f3212) {

            if (_0x491634) {

              return new _0x1bfabf(_0x5cdd4c, _0x491634);

            } else {

              return new _0x1bfabf(_0x5cdd4c);

            }

          } else {

            return new _0x1bfabf(_0x5cdd4c, _0x491634, _0x3163fb);

          }

        }

        doWrite(_0x59a9bc, _0x4db6c2) {

          this.ws.send(_0x4db6c2);

        }

      }

    },

    "./node_modules/engine.io-client/build/esm/transports/webtransport.js": (_0x236bea, _0x93b913, _0x3644cd) => {

      'use strict';



      _0x3644cd.r(_0x93b913);

      _0x3644cd.d(_0x93b913, {

        WT: () => _0x2f9d89

      });

      var _0x580b41 = _0x3644cd("./node_modules/engine.io-client/build/esm/transport.js");

      var _0x325353 = _0x3644cd("./node_modules/engine.io-client/build/esm/globals.js");

      var _0x50ce7 = _0x3644cd("./node_modules/engine.io-parser/build/esm/index.js");

      class _0x2f9d89 extends _0x580b41.Transport {

        get name() {

          return "webtransport";

        }

        doOpen() {

          try {

            this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);

          } catch (_0x21c9ea) {

            return this.emitReserved("error", _0x21c9ea);

          }

          this._transport.closed.then(() => {

            this.onClose();

          }).catch(_0x32713f => {

            this.onError("webtransport error", _0x32713f);

          });

          this._transport.ready.then(() => {

            this._transport.createBidirectionalStream().then(_0x339633 => {

              const _0xa842ab = (0, _0x50ce7.createPacketDecoderStream)(Number.MAX_SAFE_INTEGER, this.socket.binaryType);

              const _0x5e2bb0 = _0x339633.readable.pipeThrough(_0xa842ab).getReader();

              const _0x55a317 = (0, _0x50ce7.createPacketEncoderStream)();

              _0x55a317.readable.pipeTo(_0x339633.writable);

              this._writer = _0x55a317.writable.getWriter();

              const _0x282f3c = () => {

                _0x5e2bb0.read().then(({

                  done: _0x14e5be,

                  value: _0x1704a5

                }) => {

                  if (_0x14e5be) {

                    return;

                  }

                  this.onPacket(_0x1704a5);

                  _0x282f3c();

                }).catch(_0x1cd0da => {});

              };

              _0x282f3c();

              const _0x2c38b7 = {

                type: "open"

              };

              if (this.query.sid) {

                _0x2c38b7.data = "{\"sid\":\"" + this.query.sid + "\"}";

              }

              this._writer.write(_0x2c38b7).then(() => this.onOpen());

            });

          });

        }

        write(_0x17e52f) {

          this.writable = false;

          for (let _0x5d8784 = 0; _0x5d8784 < _0x17e52f.length; _0x5d8784++) {

            const _0x2d86b0 = _0x17e52f[_0x5d8784];

            const _0x3ec678 = _0x5d8784 === _0x17e52f.length - 1;

            this._writer.write(_0x2d86b0).then(() => {

              if (_0x3ec678) {

                (0, _0x325353.nextTick)(() => {

                  this.writable = true;

                  this.emitReserved("drain");

                }, this.setTimeoutFn);

              }

            });

          }

        }

        doClose() {

          var _0x40cdff;

          if ((_0x40cdff = this._transport) === null || _0x40cdff === undefined) {

            undefined;

          } else {

            _0x40cdff.close();

          }

        }

      }

    },

    "./node_modules/engine.io-client/build/esm/util.js": (_0x2bb98a, _0x2f84cb, _0x26baec) => {

      'use strict';



      _0x26baec.r(_0x2f84cb);

      _0x26baec.d(_0x2f84cb, {

        byteLength: () => _0x87be2e,

        installTimerFunctions: () => _0x9b4d1c,

        pick: () => _0x2ec1e8,

        randomString: () => _0x53a46a

      });

      var _0x34c6b1 = _0x26baec("./node_modules/engine.io-client/build/esm/globals.js");

      function _0x2ec1e8(_0x30cdc5, ..._0x2bf8de) {

        return _0x2bf8de.reduce((_0x4c8990, _0xe89553) => {

          if (_0x30cdc5.hasOwnProperty(_0xe89553)) {

            _0x4c8990[_0xe89553] = _0x30cdc5[_0xe89553];

          }

          return _0x4c8990;

        }, {});

      }

      const _0x143f0c = _0x34c6b1.globalThisShim.setTimeout;

      const _0x3c4d44 = _0x34c6b1.globalThisShim.clearTimeout;

      function _0x9b4d1c(_0x25d3cc, _0x149b07) {

        if (_0x149b07.useNativeTimers) {

          _0x25d3cc.setTimeoutFn = _0x143f0c.bind(_0x34c6b1.globalThisShim);

          _0x25d3cc.clearTimeoutFn = _0x3c4d44.bind(_0x34c6b1.globalThisShim);

        } else {

          _0x25d3cc.setTimeoutFn = _0x34c6b1.globalThisShim.setTimeout.bind(_0x34c6b1.globalThisShim);

          _0x25d3cc.clearTimeoutFn = _0x34c6b1.globalThisShim.clearTimeout.bind(_0x34c6b1.globalThisShim);

        }

      }

      const _0x2a63a3 = 1.33;

      function _0x87be2e(_0x4428f1) {

        if (typeof _0x4428f1 === "string") {

          return _0x39a701(_0x4428f1);

        }

        return Math.ceil((_0x4428f1.byteLength || _0x4428f1.size) * _0x2a63a3);

      }

      function _0x39a701(_0x394ff9) {

        let _0xdf7287 = 0;

        let _0x418735 = 0;

        for (let _0x4a9386 = 0, _0x5bafb8 = _0x394ff9.length; _0x4a9386 < _0x5bafb8; _0x4a9386++) {

          _0xdf7287 = _0x394ff9.charCodeAt(_0x4a9386);

          if (_0xdf7287 < 128) {

            _0x418735 += 1;

          } else if (_0xdf7287 < 2048) {

            _0x418735 += 2;

          } else if (_0xdf7287 < 55296 || _0xdf7287 >= 57344) {

            _0x418735 += 3;

          } else {

            _0x4a9386++;

            _0x418735 += 4;

          }

        }

        return _0x418735;

      }

      function _0x53a46a() {

        return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);

      }

    },

    "./node_modules/engine.io-parser/build/esm/commons.js": (_0x5ec951, _0x2a76c4, _0x32078c) => {

      'use strict';



      _0x32078c.r(_0x2a76c4);

      _0x32078c.d(_0x2a76c4, {

        ERROR_PACKET: () => _0x3b1992,

        PACKET_TYPES: () => _0x4e3c47,

        PACKET_TYPES_REVERSE: () => _0xe6b3dc

      });

      const _0x4e3c47 = Object.create(null);

      _0x4e3c47.open = "0";

      _0x4e3c47.close = "1";

      _0x4e3c47.ping = "2";

      _0x4e3c47.pong = "3";

      _0x4e3c47.message = "4";

      _0x4e3c47.upgrade = "5";

      _0x4e3c47.noop = "6";

      const _0xe6b3dc = Object.create(null);

      Object.keys(_0x4e3c47).forEach(_0x669f59 => {

        _0xe6b3dc[_0x4e3c47[_0x669f59]] = _0x669f59;

      });

      const _0x3b1992 = {

        type: "error",

        data: "parser error"

      };

    },

    "./node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js": (_0x4ebed5, _0x54bf0c, _0x22e8af) => {

      'use strict';



      _0x22e8af.r(_0x54bf0c);

      _0x22e8af.d(_0x54bf0c, {

        decode: () => _0x27d5ec,

        encode: () => _0x246c58

      });

      const _0x12b4ea = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

      const _0x2d39c4 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);

      for (let _0x3dfb54 = 0; _0x3dfb54 < _0x12b4ea.length; _0x3dfb54++) {

        _0x2d39c4[_0x12b4ea.charCodeAt(_0x3dfb54)] = _0x3dfb54;

      }

      const _0x246c58 = _0x283b04 => {

        let _0x224829 = new Uint8Array(_0x283b04);

        let _0x5d05a7;

        let _0x44f9fc = _0x224829.length;

        let _0x5578ad = "";

        for (_0x5d05a7 = 0; _0x5d05a7 < _0x44f9fc; _0x5d05a7 += 3) {

          _0x5578ad += _0x12b4ea[_0x224829[_0x5d05a7] >> 2];

          _0x5578ad += _0x12b4ea[(_0x224829[_0x5d05a7] & 3) << 4 | _0x224829[_0x5d05a7 + 1] >> 4];

          _0x5578ad += _0x12b4ea[(_0x224829[_0x5d05a7 + 1] & 15) << 2 | _0x224829[_0x5d05a7 + 2] >> 6];

          _0x5578ad += _0x12b4ea[_0x224829[_0x5d05a7 + 2] & 63];

        }

        if (_0x44f9fc % 3 === 2) {

          _0x5578ad = _0x5578ad.substring(0, _0x5578ad.length - 1) + "=";

        } else if (_0x44f9fc % 3 === 1) {

          _0x5578ad = _0x5578ad.substring(0, _0x5578ad.length - 2) + "==";

        }

        return _0x5578ad;

      };

      const _0x27d5ec = _0x34f948 => {

        let _0x1bc036 = _0x34f948.length * 0.75;

        let _0xaaa7a2 = _0x34f948.length;

        let _0x173719;

        let _0x475ef8 = 0;

        let _0x593880;

        let _0x22321c;

        let _0x27f7c3;

        let _0x1438a1;

        if (_0x34f948[_0x34f948.length - 1] === "=") {

          _0x1bc036--;

          if (_0x34f948[_0x34f948.length - 2] === "=") {

            _0x1bc036--;

          }

        }

        const _0x20520a = new ArrayBuffer(_0x1bc036);

        const _0x7830a3 = new Uint8Array(_0x20520a);

        for (_0x173719 = 0; _0x173719 < _0xaaa7a2; _0x173719 += 4) {

          _0x593880 = _0x2d39c4[_0x34f948.charCodeAt(_0x173719)];

          _0x22321c = _0x2d39c4[_0x34f948.charCodeAt(_0x173719 + 1)];

          _0x27f7c3 = _0x2d39c4[_0x34f948.charCodeAt(_0x173719 + 2)];

          _0x1438a1 = _0x2d39c4[_0x34f948.charCodeAt(_0x173719 + 3)];

          _0x7830a3[_0x475ef8++] = _0x593880 << 2 | _0x22321c >> 4;

          _0x7830a3[_0x475ef8++] = (_0x22321c & 15) << 4 | _0x27f7c3 >> 2;

          _0x7830a3[_0x475ef8++] = (_0x27f7c3 & 3) << 6 | _0x1438a1 & 63;

        }

        return _0x20520a;

      };

    },

    "./node_modules/engine.io-parser/build/esm/decodePacket.browser.js": (_0x5e6c83, _0x3af039, _0x16b1c0) => {

      'use strict';



      _0x16b1c0.r(_0x3af039);

      _0x16b1c0.d(_0x3af039, {

        decodePacket: () => _0x9b465e

      });

      var _0x51af7b = _0x16b1c0("./node_modules/engine.io-parser/build/esm/commons.js");

      var _0x197d9c = _0x16b1c0("./node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js");

      const _0x5781aa = typeof ArrayBuffer === "function";

      const _0x9b465e = (_0x1a86ea, _0x12c78a) => {

        if (typeof _0x1a86ea !== "string") {

          return {

            type: "message",

            data: _0x5af032(_0x1a86ea, _0x12c78a)

          };

        }

        const _0x1cdd46 = _0x1a86ea.charAt(0);

        if (_0x1cdd46 === "b") {

          return {

            type: "message",

            data: _0x59c862(_0x1a86ea.substring(1), _0x12c78a)

          };

        }

        const _0x57ca8d = _0x51af7b.PACKET_TYPES_REVERSE[_0x1cdd46];

        if (!_0x57ca8d) {

          return _0x51af7b.ERROR_PACKET;

        }

        if (_0x1a86ea.length > 1) {

          return {

            type: _0x51af7b.PACKET_TYPES_REVERSE[_0x1cdd46],

            data: _0x1a86ea.substring(1)

          };

        } else {

          return {

            type: _0x51af7b.PACKET_TYPES_REVERSE[_0x1cdd46]

          };

        }

      };

      const _0x59c862 = (_0x2d4c4f, _0x105898) => {

        if (_0x5781aa) {

          const _0x575bd9 = (0, _0x197d9c.decode)(_0x2d4c4f);

          return _0x5af032(_0x575bd9, _0x105898);

        } else {

          return {

            base64: true,

            data: _0x2d4c4f

          };

        }

      };

      const _0x5af032 = (_0x4bcf2e, _0x17817f) => {

        switch (_0x17817f) {

          case "blob":

            if (_0x4bcf2e instanceof Blob) {

              return _0x4bcf2e;

            } else {

              return new Blob([_0x4bcf2e]);

            }

          case "arraybuffer":

          default:

            if (_0x4bcf2e instanceof ArrayBuffer) {

              return _0x4bcf2e;

            } else {

              return _0x4bcf2e.buffer;

            }

        }

      };

    },

    "./node_modules/engine.io-parser/build/esm/encodePacket.browser.js": (_0x327315, _0x333cd2, _0x1d78fb) => {

      'use strict';



      _0x1d78fb.r(_0x333cd2);

      _0x1d78fb.d(_0x333cd2, {

        encodePacket: () => _0x5f1da3,

        encodePacketToBinary: () => _0x11bb5e

      });

      var _0x51c8ae = _0x1d78fb("./node_modules/engine.io-parser/build/esm/commons.js");

      const _0x34c77e = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";

      const _0x16ecaa = typeof ArrayBuffer === "function";

      const _0x8e5ecf = _0x437edb => {

        if (typeof ArrayBuffer.isView === "function") {

          return ArrayBuffer.isView(_0x437edb);

        } else {

          return _0x437edb && _0x437edb.buffer instanceof ArrayBuffer;

        }

      };

      const _0x5f1da3 = ({

        type: _0xf7b422,

        data: _0x1f3d29

      }, _0x44496c, _0x342131) => {

        if (_0x34c77e && _0x1f3d29 instanceof Blob) {

          if (_0x44496c) {

            return _0x342131(_0x1f3d29);

          } else {

            return _0x591939(_0x1f3d29, _0x342131);

          }

        } else if (_0x16ecaa && (_0x1f3d29 instanceof ArrayBuffer || _0x8e5ecf(_0x1f3d29))) {

          if (_0x44496c) {

            return _0x342131(_0x1f3d29);

          } else {

            return _0x591939(new Blob([_0x1f3d29]), _0x342131);

          }

        }

        return _0x342131(_0x51c8ae.PACKET_TYPES[_0xf7b422] + (_0x1f3d29 || ""));

      };

      const _0x591939 = (_0xe6cdea, _0x317cae) => {

        const _0x2030f5 = new FileReader();

        _0x2030f5.onload = function () {

          const _0x4e847e = _0x2030f5.result.split(",")[1];

          _0x317cae("b" + (_0x4e847e || ""));

        };

        return _0x2030f5.readAsDataURL(_0xe6cdea);

      };

      function _0x4bf9cf(_0x1a0622) {

        if (_0x1a0622 instanceof Uint8Array) {

          return _0x1a0622;

        } else if (_0x1a0622 instanceof ArrayBuffer) {

          return new Uint8Array(_0x1a0622);

        } else {

          return new Uint8Array(_0x1a0622.buffer, _0x1a0622.byteOffset, _0x1a0622.byteLength);

        }

      }

      let _0x22c5bc;

      function _0x11bb5e(_0x5cd5ed, _0x55fb85) {

        if (_0x34c77e && _0x5cd5ed.data instanceof Blob) {

          return _0x5cd5ed.data.arrayBuffer().then(_0x4bf9cf).then(_0x55fb85);

        } else if (_0x16ecaa && (_0x5cd5ed.data instanceof ArrayBuffer || _0x8e5ecf(_0x5cd5ed.data))) {

          return _0x55fb85(_0x4bf9cf(_0x5cd5ed.data));

        }

        _0x5f1da3(_0x5cd5ed, false, _0x48a5e3 => {

          if (!_0x22c5bc) {

            _0x22c5bc = new TextEncoder();

          }

          _0x55fb85(_0x22c5bc.encode(_0x48a5e3));

        });

      }

    },

    "./node_modules/engine.io-parser/build/esm/index.js": (_0x4bf4b0, _0x4b2ed0, _0x1aa74f) => {

      'use strict';



      _0x1aa74f.r(_0x4b2ed0);

      _0x1aa74f.d(_0x4b2ed0, {

        createPacketDecoderStream: () => _0xa8cfc5,

        createPacketEncoderStream: () => _0x1843f6,

        decodePacket: () => _0x7a9f72.decodePacket,

        decodePayload: () => _0x40afea,

        encodePacket: () => _0x35133f.encodePacket,

        encodePayload: () => _0x23bc98,

        protocol: () => _0x58ca47

      });

      var _0x35133f = _0x1aa74f("./node_modules/engine.io-parser/build/esm/encodePacket.browser.js");

      var _0x7a9f72 = _0x1aa74f("./node_modules/engine.io-parser/build/esm/decodePacket.browser.js");

      var _0x31eda2 = _0x1aa74f("./node_modules/engine.io-parser/build/esm/commons.js");

      const _0x75acc2 = String.fromCharCode(30);

      const _0x23bc98 = (_0x5dba47, _0x271ec1) => {

        const _0x141f66 = _0x5dba47.length;

        const _0x28fbce = new Array(_0x141f66);

        let _0x5d8a2d = 0;

        _0x5dba47.forEach((_0x27d47f, _0x250c05) => {

          (0, _0x35133f.encodePacket)(_0x27d47f, false, _0x14e8df => {

            _0x28fbce[_0x250c05] = _0x14e8df;

            if (++_0x5d8a2d === _0x141f66) {

              _0x271ec1(_0x28fbce.join(_0x75acc2));

            }

          });

        });

      };

      const _0x40afea = (_0x437cfb, _0x1f0313) => {

        const _0x361467 = _0x437cfb.split(_0x75acc2);

        const _0x49f6a3 = [];

        for (let _0x3a06a1 = 0; _0x3a06a1 < _0x361467.length; _0x3a06a1++) {

          const _0x8cb6eb = (0, _0x7a9f72.decodePacket)(_0x361467[_0x3a06a1], _0x1f0313);

          _0x49f6a3.push(_0x8cb6eb);

          if (_0x8cb6eb.type === "error") {

            break;

          }

        }

        return _0x49f6a3;

      };

      function _0x1843f6() {

        return new TransformStream({

          transform(_0x20f9aa, _0x3062b6) {

            (0, _0x35133f.encodePacketToBinary)(_0x20f9aa, _0x2f79d3 => {

              const _0x5e19e1 = _0x2f79d3.length;

              let _0x4acfb4;

              if (_0x5e19e1 < 126) {

                _0x4acfb4 = new Uint8Array(1);

                new DataView(_0x4acfb4.buffer).setUint8(0, _0x5e19e1);

              } else if (_0x5e19e1 < 65536) {

                _0x4acfb4 = new Uint8Array(3);

                const _0x39d918 = new DataView(_0x4acfb4.buffer);

                _0x39d918.setUint8(0, 126);

                _0x39d918.setUint16(1, _0x5e19e1);

              } else {

                _0x4acfb4 = new Uint8Array(9);

                const _0x1c3bfa = new DataView(_0x4acfb4.buffer);

                _0x1c3bfa.setUint8(0, 127);

                _0x1c3bfa.setBigUint64(1, BigInt(_0x5e19e1));

              }

              if (_0x20f9aa.data && typeof _0x20f9aa.data !== "string") {

                _0x4acfb4[0] |= 128;

              }

              _0x3062b6.enqueue(_0x4acfb4);

              _0x3062b6.enqueue(_0x2f79d3);

            });

          }

        });

      }

      let _0x2678b6;

      function _0x375d46(_0x4bb797) {

        return _0x4bb797.reduce((_0x11c1b7, _0x2ff2e6) => _0x11c1b7 + _0x2ff2e6.length, 0);

      }

      function _0x564c54(_0x273100, _0x273dbb) {

        if (_0x273100[0].length === _0x273dbb) {

          return _0x273100.shift();

        }

        const _0xa30d54 = new Uint8Array(_0x273dbb);

        let _0x215e60 = 0;

        for (let _0x82dd07 = 0; _0x82dd07 < _0x273dbb; _0x82dd07++) {

          _0xa30d54[_0x82dd07] = _0x273100[0][_0x215e60++];

          if (_0x215e60 === _0x273100[0].length) {

            _0x273100.shift();

            _0x215e60 = 0;

          }

        }

        if (_0x273100.length && _0x215e60 < _0x273100[0].length) {

          _0x273100[0] = _0x273100[0].slice(_0x215e60);

        }

        return _0xa30d54;

      }

      function _0xa8cfc5(_0x1f9a00, _0xfceb16) {

        if (!_0x2678b6) {

          _0x2678b6 = new TextDecoder();

        }

        const _0xbddf2c = [];

        let _0x5e7d3a = 0;

        let _0x59275d = -1;

        let _0x4c00d6 = false;

        return new TransformStream({

          transform(_0x125b02, _0x552afc) {

            _0xbddf2c.push(_0x125b02);

            while (true) {

              if (_0x5e7d3a === 0) {

                if (_0x375d46(_0xbddf2c) < 1) {

                  break;

                }

                const _0x1f0617 = _0x564c54(_0xbddf2c, 1);

                _0x4c00d6 = (_0x1f0617[0] & 128) === 128;

                _0x59275d = _0x1f0617[0] & 127;

                if (_0x59275d < 126) {

                  _0x5e7d3a = 3;

                } else if (_0x59275d === 126) {

                  _0x5e7d3a = 1;

                } else {

                  _0x5e7d3a = 2;

                }

              } else if (_0x5e7d3a === 1) {

                if (_0x375d46(_0xbddf2c) < 2) {

                  break;

                }

                const _0x3d462e = _0x564c54(_0xbddf2c, 2);

                _0x59275d = new DataView(_0x3d462e.buffer, _0x3d462e.byteOffset, _0x3d462e.length).getUint16(0);

                _0x5e7d3a = 3;

              } else if (_0x5e7d3a === 2) {

                if (_0x375d46(_0xbddf2c) < 8) {

                  break;

                }

                const _0x40a39c = _0x564c54(_0xbddf2c, 8);

                const _0x1191ff = new DataView(_0x40a39c.buffer, _0x40a39c.byteOffset, _0x40a39c.length);

                const _0x514b73 = _0x1191ff.getUint32(0);

                if (_0x514b73 > Math.pow(2, 21) - 1) {

                  _0x552afc.enqueue(_0x31eda2.ERROR_PACKET);

                  break;

                }

                _0x59275d = _0x514b73 * Math.pow(2, 32) + _0x1191ff.getUint32(4);

                _0x5e7d3a = 3;

              } else {

                if (_0x375d46(_0xbddf2c) < _0x59275d) {

                  break;

                }

                const _0x100b2b = _0x564c54(_0xbddf2c, _0x59275d);

                _0x552afc.enqueue((0, _0x7a9f72.decodePacket)(_0x4c00d6 ? _0x100b2b : _0x2678b6.decode(_0x100b2b), _0xfceb16));

                _0x5e7d3a = 0;

              }

              if (_0x59275d === 0 || _0x59275d > _0x1f9a00) {

                _0x552afc.enqueue(_0x31eda2.ERROR_PACKET);

                break;

              }

            }

          }

        });

      }

      const _0x58ca47 = 4;

    },

    "./node_modules/howler/dist/howler.js": (_0x211ead, _0x1c89b3, _0x4d1f29) => {

      var _0xe5bbae;

      var _0x25d64d;

      (function () {

        'use strict';



        function _0xad90df() {

          this.init();

        }

        _0xad90df.prototype = {

          init: function () {

            var _0x886ead = this || _0x20916e;

            _0x886ead._counter = 1000;

            _0x886ead._html5AudioPool = [];

            _0x886ead.html5PoolSize = 10;

            _0x886ead._codecs = {};

            _0x886ead._howls = [];

            _0x886ead._muted = false;

            _0x886ead._volume = 1;

            _0x886ead._canPlayEvent = "canplaythrough";

            _0x886ead._navigator = typeof window !== "undefined" && window.navigator ? window.navigator : null;

            _0x886ead.masterGain = null;

            _0x886ead.noAudio = false;

            _0x886ead.usingWebAudio = true;

            _0x886ead.autoSuspend = true;

            _0x886ead.ctx = null;

            _0x886ead.autoUnlock = true;

            _0x886ead._setup();

            return _0x886ead;

          },

          volume: function (_0x42ed37) {

            var _0x5d21fe = this || _0x20916e;

            _0x42ed37 = parseFloat(_0x42ed37);

            if (!_0x5d21fe.ctx) {

              _0x16e904();

            }

            if (typeof _0x42ed37 !== "undefined" && _0x42ed37 >= 0 && _0x42ed37 <= 1) {

              _0x5d21fe._volume = _0x42ed37;

              if (_0x5d21fe._muted) {

                return _0x5d21fe;

              }

              if (_0x5d21fe.usingWebAudio) {

                _0x5d21fe.masterGain.gain.setValueAtTime(_0x42ed37, _0x20916e.ctx.currentTime);

              }

              for (var _0x3cbb8b = 0; _0x3cbb8b < _0x5d21fe._howls.length; _0x3cbb8b++) {

                if (!_0x5d21fe._howls[_0x3cbb8b]._webAudio) {

                  var _0x154345 = _0x5d21fe._howls[_0x3cbb8b]._getSoundIds();

                  for (var _0x55cd9f = 0; _0x55cd9f < _0x154345.length; _0x55cd9f++) {

                    var _0x3c691d = _0x5d21fe._howls[_0x3cbb8b]._soundById(_0x154345[_0x55cd9f]);

                    if (_0x3c691d && _0x3c691d._node) {

                      _0x3c691d._node.volume = _0x3c691d._volume * _0x42ed37;

                    }

                  }

                }

              }

              return _0x5d21fe;

            }

            return _0x5d21fe._volume;

          },

          mute: function (_0x5cefbd) {

            var _0x19c6d3 = this || _0x20916e;

            if (!_0x19c6d3.ctx) {

              _0x16e904();

            }

            _0x19c6d3._muted = _0x5cefbd;

            if (_0x19c6d3.usingWebAudio) {

              _0x19c6d3.masterGain.gain.setValueAtTime(_0x5cefbd ? 0 : _0x19c6d3._volume, _0x20916e.ctx.currentTime);

            }

            for (var _0x95cdc4 = 0; _0x95cdc4 < _0x19c6d3._howls.length; _0x95cdc4++) {

              if (!_0x19c6d3._howls[_0x95cdc4]._webAudio) {

                var _0x7632e0 = _0x19c6d3._howls[_0x95cdc4]._getSoundIds();

                for (var _0x28df45 = 0; _0x28df45 < _0x7632e0.length; _0x28df45++) {

                  var _0x5564fe = _0x19c6d3._howls[_0x95cdc4]._soundById(_0x7632e0[_0x28df45]);

                  if (_0x5564fe && _0x5564fe._node) {

                    _0x5564fe._node.muted = _0x5cefbd ? true : _0x5564fe._muted;

                  }

                }

              }

            }

            return _0x19c6d3;

          },

          stop: function () {

            var _0xcdb714 = this || _0x20916e;

            for (var _0x5d3573 = 0; _0x5d3573 < _0xcdb714._howls.length; _0x5d3573++) {

              _0xcdb714._howls[_0x5d3573].stop();

            }

            return _0xcdb714;

          },

          unload: function () {

            var _0x1a3734 = this || _0x20916e;

            for (var _0x49a39c = _0x1a3734._howls.length - 1; _0x49a39c >= 0; _0x49a39c--) {

              _0x1a3734._howls[_0x49a39c].unload();

            }

            if (_0x1a3734.usingWebAudio && _0x1a3734.ctx && typeof _0x1a3734.ctx.close !== "undefined") {

              _0x1a3734.ctx.close();

              _0x1a3734.ctx = null;

              _0x16e904();

            }

            return _0x1a3734;

          },

          codecs: function (_0x385db9) {

            return (this || _0x20916e)._codecs[_0x385db9.replace(/^x-/, "")];

          },

          _setup: function () {

            var _0x4494f8 = this || _0x20916e;

            _0x4494f8.state = _0x4494f8.ctx ? _0x4494f8.ctx.state || "suspended" : "suspended";

            _0x4494f8._autoSuspend();

            if (!_0x4494f8.usingWebAudio) {

              if (typeof Audio !== "undefined") {

                try {

                  var _0x510c1f = new Audio();

                  if (typeof _0x510c1f.oncanplaythrough === "undefined") {

                    _0x4494f8._canPlayEvent = "canplay";

                  }

                } catch (_0x41511e) {

                  _0x4494f8.noAudio = true;

                }

              } else {

                _0x4494f8.noAudio = true;

              }

            }

            try {

              var _0x510c1f = new Audio();

              if (_0x510c1f.muted) {

                _0x4494f8.noAudio = true;

              }

            } catch (_0x634f92) {}

            if (!_0x4494f8.noAudio) {

              _0x4494f8._setupCodecs();

            }

            return _0x4494f8;

          },

          _setupCodecs: function () {

            var _0x3656bb = this || _0x20916e;

            var _0x161418 = null;

            try {

              _0x161418 = typeof Audio !== "undefined" ? new Audio() : null;

            } catch (_0x1c5435) {

              return _0x3656bb;

            }

            if (!_0x161418 || typeof _0x161418.canPlayType !== "function") {

              return _0x3656bb;

            }

            var _0x2701c9 = _0x161418.canPlayType("audio/mpeg;").replace(/^no$/, "");

            var _0x5ef8fd = _0x3656bb._navigator ? _0x3656bb._navigator.userAgent : "";

            var _0x73a77f = _0x5ef8fd.match(/OPR\/(\d+)/g);

            var _0x267dc2 = _0x73a77f && parseInt(_0x73a77f[0].split("/")[1], 10) < 33;

            var _0x3cbc9f = _0x5ef8fd.indexOf("Safari") !== -1 && _0x5ef8fd.indexOf("Chrome") === -1;

            var _0x166db4 = _0x5ef8fd.match(/Version\/(.*?) /);

            var _0x2ec4aa = _0x3cbc9f && _0x166db4 && parseInt(_0x166db4[1], 10) < 15;

            _0x3656bb._codecs = {

              mp3: !_0x267dc2 && (!!_0x2701c9 || !!_0x161418.canPlayType("audio/mp3;").replace(/^no$/, "")),

              mpeg: !!_0x2701c9,

              opus: !!_0x161418.canPlayType("audio/ogg; codecs=\"opus\"").replace(/^no$/, ""),

              ogg: !!_0x161418.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),

              oga: !!_0x161418.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),

              wav: !!(_0x161418.canPlayType("audio/wav; codecs=\"1\"") || _0x161418.canPlayType("audio/wav")).replace(/^no$/, ""),

              aac: !!_0x161418.canPlayType("audio/aac;").replace(/^no$/, ""),

              caf: !!_0x161418.canPlayType("audio/x-caf;").replace(/^no$/, ""),

              m4a: !!(_0x161418.canPlayType("audio/x-m4a;") || _0x161418.canPlayType("audio/m4a;") || _0x161418.canPlayType("audio/aac;")).replace(/^no$/, ""),

              m4b: !!(_0x161418.canPlayType("audio/x-m4b;") || _0x161418.canPlayType("audio/m4b;") || _0x161418.canPlayType("audio/aac;")).replace(/^no$/, ""),

              mp4: !!(_0x161418.canPlayType("audio/x-mp4;") || _0x161418.canPlayType("audio/mp4;") || _0x161418.canPlayType("audio/aac;")).replace(/^no$/, ""),

              weba: !_0x2ec4aa && !!_0x161418.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ""),

              webm: !_0x2ec4aa && !!_0x161418.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ""),

              dolby: !!_0x161418.canPlayType("audio/mp4; codecs=\"ec-3\"").replace(/^no$/, ""),

              flac: !!(_0x161418.canPlayType("audio/x-flac;") || _0x161418.canPlayType("audio/flac;")).replace(/^no$/, "")

            };

            return _0x3656bb;

          },

          _unlockAudio: function () {

            var _0x56ce41 = this || _0x20916e;

            if (_0x56ce41._audioUnlocked || !_0x56ce41.ctx) {

              return;

            }

            _0x56ce41._audioUnlocked = false;

            _0x56ce41.autoUnlock = false;

            if (!_0x56ce41._mobileUnloaded && _0x56ce41.ctx.sampleRate !== 44100) {

              _0x56ce41._mobileUnloaded = true;

              _0x56ce41.unload();

            }

            _0x56ce41._scratchBuffer = _0x56ce41.ctx.createBuffer(1, 1, 22050);

            function _0x1881db(_0x405059) {

              while (_0x56ce41._html5AudioPool.length < _0x56ce41.html5PoolSize) {

                try {

                  var _0x544b5c = new Audio();

                  _0x544b5c._unlocked = true;

                  _0x56ce41._releaseHtml5Audio(_0x544b5c);

                } catch (_0x19fbf8) {

                  _0x56ce41.noAudio = true;

                  break;

                }

              }

              for (var _0x32361d = 0; _0x32361d < _0x56ce41._howls.length; _0x32361d++) {

                if (!_0x56ce41._howls[_0x32361d]._webAudio) {

                  var _0x25d00b = _0x56ce41._howls[_0x32361d]._getSoundIds();

                  for (var _0x5e64bc = 0; _0x5e64bc < _0x25d00b.length; _0x5e64bc++) {

                    var _0x558ee6 = _0x56ce41._howls[_0x32361d]._soundById(_0x25d00b[_0x5e64bc]);

                    if (_0x558ee6 && _0x558ee6._node && !_0x558ee6._node._unlocked) {

                      _0x558ee6._node._unlocked = true;

                      _0x558ee6._node.load();

                    }

                  }

                }

              }

              _0x56ce41._autoResume();

              var _0x53f913 = _0x56ce41.ctx.createBufferSource();

              _0x53f913.buffer = _0x56ce41._scratchBuffer;

              _0x53f913.connect(_0x56ce41.ctx.destination);

              if (typeof _0x53f913.start === "undefined") {

                _0x53f913.noteOn(0);

              } else {

                _0x53f913.start(0);

              }

              if (typeof _0x56ce41.ctx.resume === "function") {

                _0x56ce41.ctx.resume();

              }

              _0x53f913.onended = function () {

                _0x53f913.disconnect(0);

                _0x56ce41._audioUnlocked = true;

                document.removeEventListener("touchstart", _0x1881db, true);

                document.removeEventListener("touchend", _0x1881db, true);

                document.removeEventListener("click", _0x1881db, true);

                document.removeEventListener("keydown", _0x1881db, true);

                for (var _0x4ff656 = 0; _0x4ff656 < _0x56ce41._howls.length; _0x4ff656++) {

                  _0x56ce41._howls[_0x4ff656]._emit("unlock");

                }

              };

            }

            document.addEventListener("touchstart", _0x1881db, true);

            document.addEventListener("touchend", _0x1881db, true);

            document.addEventListener("click", _0x1881db, true);

            document.addEventListener("keydown", _0x1881db, true);

            return _0x56ce41;

          },

          _obtainHtml5Audio: function () {

            var _0x51d356 = this || _0x20916e;

            if (_0x51d356._html5AudioPool.length) {

              return _0x51d356._html5AudioPool.pop();

            }

            var _0x55df8a = new Audio().play();

            if (_0x55df8a && typeof Promise !== "undefined" && (_0x55df8a instanceof Promise || typeof _0x55df8a.then === "function")) {

              _0x55df8a.catch(function () {

                console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");

              });

            }

            return new Audio();

          },

          _releaseHtml5Audio: function (_0x544dc8) {

            var _0x3948b3 = this || _0x20916e;

            if (_0x544dc8._unlocked) {

              _0x3948b3._html5AudioPool.push(_0x544dc8);

            }

            return _0x3948b3;

          },

          _autoSuspend: function () {

            var _0x14b3c1 = this;

            if (!_0x14b3c1.autoSuspend || !_0x14b3c1.ctx || typeof _0x14b3c1.ctx.suspend === "undefined" || !_0x20916e.usingWebAudio) {

              return;

            }

            for (var _0x464123 = 0; _0x464123 < _0x14b3c1._howls.length; _0x464123++) {

              if (_0x14b3c1._howls[_0x464123]._webAudio) {

                for (var _0x3be4ec = 0; _0x3be4ec < _0x14b3c1._howls[_0x464123]._sounds.length; _0x3be4ec++) {

                  if (!_0x14b3c1._howls[_0x464123]._sounds[_0x3be4ec]._paused) {

                    return _0x14b3c1;

                  }

                }

              }

            }

            if (_0x14b3c1._suspendTimer) {

              clearTimeout(_0x14b3c1._suspendTimer);

            }

            _0x14b3c1._suspendTimer = setTimeout(function () {

              if (!_0x14b3c1.autoSuspend) {

                return;

              }

              _0x14b3c1._suspendTimer = null;

              _0x14b3c1.state = "suspending";

              function _0x117008() {

                _0x14b3c1.state = "suspended";

                if (_0x14b3c1._resumeAfterSuspend) {

                  delete _0x14b3c1._resumeAfterSuspend;

                  _0x14b3c1._autoResume();

                }

              }

              _0x14b3c1.ctx.suspend().then(_0x117008, _0x117008);

            }, 30000);

            return _0x14b3c1;

          },

          _autoResume: function () {

            var _0x25c54d = this;

            if (!_0x25c54d.ctx || typeof _0x25c54d.ctx.resume === "undefined" || !_0x20916e.usingWebAudio) {

              return;

            }

            if (_0x25c54d.state === "running" && _0x25c54d.ctx.state !== "interrupted" && _0x25c54d._suspendTimer) {

              clearTimeout(_0x25c54d._suspendTimer);

              _0x25c54d._suspendTimer = null;

            } else if (_0x25c54d.state === "suspended" || _0x25c54d.state === "running" && _0x25c54d.ctx.state === "interrupted") {

              _0x25c54d.ctx.resume().then(function () {

                _0x25c54d.state = "running";

                for (var _0x4fe165 = 0; _0x4fe165 < _0x25c54d._howls.length; _0x4fe165++) {

                  _0x25c54d._howls[_0x4fe165]._emit("resume");

                }

              });

              if (_0x25c54d._suspendTimer) {

                clearTimeout(_0x25c54d._suspendTimer);

                _0x25c54d._suspendTimer = null;

              }

            } else if (_0x25c54d.state === "suspending") {

              _0x25c54d._resumeAfterSuspend = true;

            }

            return _0x25c54d;

          }

        };

        var _0x20916e = new _0xad90df();

        function _0x40ae91(_0x1c6ffd) {

          var _0x22381c = this;

          if (!_0x1c6ffd.src || _0x1c6ffd.src.length === 0) {

            console.error("An array of source files must be passed with any new Howl.");

            return;

          }

          _0x22381c.init(_0x1c6ffd);

        }

        _0x40ae91.prototype = {

          init: function (_0x1683fd) {

            var _0xf3773e = this;

            if (!_0x20916e.ctx) {

              _0x16e904();

            }

            _0xf3773e._autoplay = _0x1683fd.autoplay || false;

            _0xf3773e._format = typeof _0x1683fd.format !== "string" ? _0x1683fd.format : [_0x1683fd.format];

            _0xf3773e._html5 = _0x1683fd.html5 || false;

            _0xf3773e._muted = _0x1683fd.mute || false;

            _0xf3773e._loop = _0x1683fd.loop || false;

            _0xf3773e._pool = _0x1683fd.pool || 5;

            _0xf3773e._preload = typeof _0x1683fd.preload === "boolean" || _0x1683fd.preload === "metadata" ? _0x1683fd.preload : true;

            _0xf3773e._rate = _0x1683fd.rate || 1;

            _0xf3773e._sprite = _0x1683fd.sprite || {};

            _0xf3773e._src = typeof _0x1683fd.src !== "string" ? _0x1683fd.src : [_0x1683fd.src];

            _0xf3773e._volume = _0x1683fd.volume !== undefined ? _0x1683fd.volume : 1;

            _0xf3773e._xhr = {

              method: _0x1683fd.xhr && _0x1683fd.xhr.method ? _0x1683fd.xhr.method : "GET",

              headers: _0x1683fd.xhr && _0x1683fd.xhr.headers ? _0x1683fd.xhr.headers : null,

              withCredentials: _0x1683fd.xhr && _0x1683fd.xhr.withCredentials ? _0x1683fd.xhr.withCredentials : false

            };

            _0xf3773e._duration = 0;

            _0xf3773e._state = "unloaded";

            _0xf3773e._sounds = [];

            _0xf3773e._endTimers = {};

            _0xf3773e._queue = [];

            _0xf3773e._playLock = false;

            _0xf3773e._onend = _0x1683fd.onend ? [{

              fn: _0x1683fd.onend

            }] : [];

            _0xf3773e._onfade = _0x1683fd.onfade ? [{

              fn: _0x1683fd.onfade

            }] : [];

            _0xf3773e._onload = _0x1683fd.onload ? [{

              fn: _0x1683fd.onload

            }] : [];

            _0xf3773e._onloaderror = _0x1683fd.onloaderror ? [{

              fn: _0x1683fd.onloaderror

            }] : [];

            _0xf3773e._onplayerror = _0x1683fd.onplayerror ? [{

              fn: _0x1683fd.onplayerror

            }] : [];

            _0xf3773e._onpause = _0x1683fd.onpause ? [{

              fn: _0x1683fd.onpause

            }] : [];

            _0xf3773e._onplay = _0x1683fd.onplay ? [{

              fn: _0x1683fd.onplay

            }] : [];

            _0xf3773e._onstop = _0x1683fd.onstop ? [{

              fn: _0x1683fd.onstop

            }] : [];

            _0xf3773e._onmute = _0x1683fd.onmute ? [{

              fn: _0x1683fd.onmute

            }] : [];

            _0xf3773e._onvolume = _0x1683fd.onvolume ? [{

              fn: _0x1683fd.onvolume

            }] : [];

            _0xf3773e._onrate = _0x1683fd.onrate ? [{

              fn: _0x1683fd.onrate

            }] : [];

            _0xf3773e._onseek = _0x1683fd.onseek ? [{

              fn: _0x1683fd.onseek

            }] : [];

            _0xf3773e._onunlock = _0x1683fd.onunlock ? [{

              fn: _0x1683fd.onunlock

            }] : [];

            _0xf3773e._onresume = [];

            _0xf3773e._webAudio = _0x20916e.usingWebAudio && !_0xf3773e._html5;

            if (typeof _0x20916e.ctx !== "undefined" && _0x20916e.ctx && _0x20916e.autoUnlock) {

              _0x20916e._unlockAudio();

            }

            _0x20916e._howls.push(_0xf3773e);

            if (_0xf3773e._autoplay) {

              _0xf3773e._queue.push({

                event: "play",

                action: function () {

                  _0xf3773e.play();

                }

              });

            }

            if (_0xf3773e._preload && _0xf3773e._preload !== "none") {

              _0xf3773e.load();

            }

            return _0xf3773e;

          },

          load: function () {

            var _0x331be5 = this;

            var _0x3183db = null;

            if (_0x20916e.noAudio) {

              _0x331be5._emit("loaderror", null, "No audio support.");

              return;

            }

            if (typeof _0x331be5._src === "string") {

              _0x331be5._src = [_0x331be5._src];

            }

            for (var _0x23539d = 0; _0x23539d < _0x331be5._src.length; _0x23539d++) {

              var _0x5deffe;

              var _0x33d355;

              if (_0x331be5._format && _0x331be5._format[_0x23539d]) {

                _0x5deffe = _0x331be5._format[_0x23539d];

              } else {

                _0x33d355 = _0x331be5._src[_0x23539d];

                if (typeof _0x33d355 !== "string") {

                  _0x331be5._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");

                  continue;

                }

                _0x5deffe = /^data:audio\/([^;,]+);/i.exec(_0x33d355);

                if (!_0x5deffe) {

                  _0x5deffe = /\.([^.]+)$/.exec(_0x33d355.split("?", 1)[0]);

                }

                _0x5deffe &&= _0x5deffe[1].toLowerCase();

              }

              if (!_0x5deffe) {

                console.warn("No file extension was found. Consider using the \"format\" property or specify an extension.");

              }

              if (_0x5deffe && _0x20916e.codecs(_0x5deffe)) {

                _0x3183db = _0x331be5._src[_0x23539d];

                break;

              }

            }

            if (!_0x3183db) {

              _0x331be5._emit("loaderror", null, "No codec support for selected audio sources.");

              return;

            }

            _0x331be5._src = _0x3183db;

            _0x331be5._state = "loading";

            if (window.location.protocol === "https:" && _0x3183db.slice(0, 5) === "http:") {

              _0x331be5._html5 = true;

              _0x331be5._webAudio = false;

            }

            new _0x5d54a4(_0x331be5);

            if (_0x331be5._webAudio) {

              _0x77da41(_0x331be5);

            }

            return _0x331be5;

          },

          play: function (_0x18a71, _0x3835c5) {

            var _0x21d00d = this;

            var _0x3b4215 = null;

            if (typeof _0x18a71 === "number") {

              _0x3b4215 = _0x18a71;

              _0x18a71 = null;

            } else if (typeof _0x18a71 === "string" && _0x21d00d._state === "loaded" && !_0x21d00d._sprite[_0x18a71]) {

              return null;

            } else if (typeof _0x18a71 === "undefined") {

              _0x18a71 = "__default";

              if (!_0x21d00d._playLock) {

                var _0x3b01ab = 0;

                for (var _0x29dd02 = 0; _0x29dd02 < _0x21d00d._sounds.length; _0x29dd02++) {

                  if (_0x21d00d._sounds[_0x29dd02]._paused && !_0x21d00d._sounds[_0x29dd02]._ended) {

                    _0x3b01ab++;

                    _0x3b4215 = _0x21d00d._sounds[_0x29dd02]._id;

                  }

                }

                if (_0x3b01ab === 1) {

                  _0x18a71 = null;

                } else {

                  _0x3b4215 = null;

                }

              }

            }

            var _0x76a38d = _0x3b4215 ? _0x21d00d._soundById(_0x3b4215) : _0x21d00d._inactiveSound();

            if (!_0x76a38d) {

              return null;

            }

            if (_0x3b4215 && !_0x18a71) {

              _0x18a71 = _0x76a38d._sprite || "__default";

            }

            if (_0x21d00d._state !== "loaded") {

              _0x76a38d._sprite = _0x18a71;

              _0x76a38d._ended = false;

              var _0x1d7364 = _0x76a38d._id;

              _0x21d00d._queue.push({

                event: "play",

                action: function () {

                  _0x21d00d.play(_0x1d7364);

                }

              });

              return _0x1d7364;

            }

            if (_0x3b4215 && !_0x76a38d._paused) {

              if (!_0x3835c5) {

                _0x21d00d._loadQueue("play");

              }

              return _0x76a38d._id;

            }

            if (_0x21d00d._webAudio) {

              _0x20916e._autoResume();

            }

            var _0x269b52 = Math.max(0, _0x76a38d._seek > 0 ? _0x76a38d._seek : _0x21d00d._sprite[_0x18a71][0] / 1000);

            var _0x165635 = Math.max(0, (_0x21d00d._sprite[_0x18a71][0] + _0x21d00d._sprite[_0x18a71][1]) / 1000 - _0x269b52);

            var _0x35ca25 = _0x165635 * 1000 / Math.abs(_0x76a38d._rate);

            var _0x214281 = _0x21d00d._sprite[_0x18a71][0] / 1000;

            var _0x6c0104 = (_0x21d00d._sprite[_0x18a71][0] + _0x21d00d._sprite[_0x18a71][1]) / 1000;

            _0x76a38d._sprite = _0x18a71;

            _0x76a38d._ended = false;

            function _0x5d7227() {

              _0x76a38d._paused = false;

              _0x76a38d._seek = _0x269b52;

              _0x76a38d._start = _0x214281;

              _0x76a38d._stop = _0x6c0104;

              _0x76a38d._loop = !!_0x76a38d._loop || !!_0x21d00d._sprite[_0x18a71][2];

            }

            if (_0x269b52 >= _0x6c0104) {

              _0x21d00d._ended(_0x76a38d);

              return;

            }

            var _0x48ac6c = _0x76a38d._node;

            if (_0x21d00d._webAudio) {

              function _0x14d6f0() {

                _0x21d00d._playLock = false;

                _0x5d7227();

                _0x21d00d._refreshBuffer(_0x76a38d);

                var _0x276258 = _0x76a38d._muted || _0x21d00d._muted ? 0 : _0x76a38d._volume;

                _0x48ac6c.gain.setValueAtTime(_0x276258, _0x20916e.ctx.currentTime);

                _0x76a38d._playStart = _0x20916e.ctx.currentTime;

                if (typeof _0x48ac6c.bufferSource.start === "undefined") {

                  if (_0x76a38d._loop) {

                    _0x48ac6c.bufferSource.noteGrainOn(0, _0x269b52, 86400);

                  } else {

                    _0x48ac6c.bufferSource.noteGrainOn(0, _0x269b52, _0x165635);

                  }

                } else if (_0x76a38d._loop) {

                  _0x48ac6c.bufferSource.start(0, _0x269b52, 86400);

                } else {

                  _0x48ac6c.bufferSource.start(0, _0x269b52, _0x165635);

                }

                if (_0x35ca25 !== Infinity) {

                  _0x21d00d._endTimers[_0x76a38d._id] = setTimeout(_0x21d00d._ended.bind(_0x21d00d, _0x76a38d), _0x35ca25);

                }

                if (!_0x3835c5) {

                  setTimeout(function () {

                    _0x21d00d._emit("play", _0x76a38d._id);

                    _0x21d00d._loadQueue();

                  }, 0);

                }

              }

              if (_0x20916e.state === "running" && _0x20916e.ctx.state !== "interrupted") {

                _0x14d6f0();

              } else {

                _0x21d00d._playLock = true;

                _0x21d00d.once("resume", _0x14d6f0);

                _0x21d00d._clearTimer(_0x76a38d._id);

              }

            } else {

              function _0x56aeb7() {

                _0x48ac6c.currentTime = _0x269b52;

                _0x48ac6c.muted = _0x76a38d._muted || _0x21d00d._muted || _0x20916e._muted || _0x48ac6c.muted;

                _0x48ac6c.volume = _0x76a38d._volume * _0x20916e.volume();

                _0x48ac6c.playbackRate = _0x76a38d._rate;

                try {

                  var _0x19498c = _0x48ac6c.play();

                  if (_0x19498c && typeof Promise !== "undefined" && (_0x19498c instanceof Promise || typeof _0x19498c.then === "function")) {

                    _0x21d00d._playLock = true;

                    _0x5d7227();

                    _0x19498c.then(function () {

                      _0x21d00d._playLock = false;

                      _0x48ac6c._unlocked = true;

                      if (!_0x3835c5) {

                        _0x21d00d._emit("play", _0x76a38d._id);

                      } else {

                        _0x21d00d._loadQueue();

                      }

                    }).catch(function () {

                      _0x21d00d._playLock = false;

                      _0x21d00d._emit("playerror", _0x76a38d._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");

                      _0x76a38d._ended = true;

                      _0x76a38d._paused = true;

                    });

                  } else if (!_0x3835c5) {

                    _0x21d00d._playLock = false;

                    _0x5d7227();

                    _0x21d00d._emit("play", _0x76a38d._id);

                  }

                  _0x48ac6c.playbackRate = _0x76a38d._rate;

                  if (_0x48ac6c.paused) {

                    _0x21d00d._emit("playerror", _0x76a38d._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");

                    return;

                  }

                  if (_0x18a71 !== "__default" || _0x76a38d._loop) {

                    _0x21d00d._endTimers[_0x76a38d._id] = setTimeout(_0x21d00d._ended.bind(_0x21d00d, _0x76a38d), _0x35ca25);

                  } else {

                    _0x21d00d._endTimers[_0x76a38d._id] = function () {

                      _0x21d00d._ended(_0x76a38d);

                      _0x48ac6c.removeEventListener("ended", _0x21d00d._endTimers[_0x76a38d._id], false);

                    };

                    _0x48ac6c.addEventListener("ended", _0x21d00d._endTimers[_0x76a38d._id], false);

                  }

                } catch (_0xfc629b) {

                  _0x21d00d._emit("playerror", _0x76a38d._id, _0xfc629b);

                }

              }

              if (_0x48ac6c.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA") {

                _0x48ac6c.src = _0x21d00d._src;

                _0x48ac6c.load();

              }

              var _0xcb1c17 = window && window.ejecta || !_0x48ac6c.readyState && _0x20916e._navigator.isCocoonJS;

              if (_0x48ac6c.readyState >= 3 || _0xcb1c17) {

                _0x56aeb7();

              } else {

                _0x21d00d._playLock = true;

                _0x21d00d._state = "loading";

                function _0x857a3b() {

                  _0x21d00d._state = "loaded";

                  _0x56aeb7();

                  _0x48ac6c.removeEventListener(_0x20916e._canPlayEvent, _0x857a3b, false);

                }

                _0x48ac6c.addEventListener(_0x20916e._canPlayEvent, _0x857a3b, false);

                _0x21d00d._clearTimer(_0x76a38d._id);

              }

            }

            return _0x76a38d._id;

          },

          pause: function (_0x1c9d33) {

            var _0xa96ef1 = this;

            if (_0xa96ef1._state !== "loaded" || _0xa96ef1._playLock) {

              _0xa96ef1._queue.push({

                event: "pause",

                action: function () {

                  _0xa96ef1.pause(_0x1c9d33);

                }

              });

              return _0xa96ef1;

            }

            var _0x487e75 = _0xa96ef1._getSoundIds(_0x1c9d33);

            for (var _0xbda523 = 0; _0xbda523 < _0x487e75.length; _0xbda523++) {

              _0xa96ef1._clearTimer(_0x487e75[_0xbda523]);

              var _0x54995b = _0xa96ef1._soundById(_0x487e75[_0xbda523]);

              if (_0x54995b && !_0x54995b._paused) {

                _0x54995b._seek = _0xa96ef1.seek(_0x487e75[_0xbda523]);

                _0x54995b._rateSeek = 0;

                _0x54995b._paused = true;

                _0xa96ef1._stopFade(_0x487e75[_0xbda523]);

                if (_0x54995b._node) {

                  if (_0xa96ef1._webAudio) {

                    if (!_0x54995b._node.bufferSource) {

                      continue;

                    }

                    if (typeof _0x54995b._node.bufferSource.stop === "undefined") {

                      _0x54995b._node.bufferSource.noteOff(0);

                    } else {

                      _0x54995b._node.bufferSource.stop(0);

                    }

                    _0xa96ef1._cleanBuffer(_0x54995b._node);

                  } else if (!isNaN(_0x54995b._node.duration) || _0x54995b._node.duration === Infinity) {

                    _0x54995b._node.pause();

                  }

                }

              }

              if (!arguments[1]) {

                _0xa96ef1._emit("pause", _0x54995b ? _0x54995b._id : null);

              }

            }

            return _0xa96ef1;

          },

          stop: function (_0x41adef, _0x2af7b6) {

            var _0x52c3ff = this;

            if (_0x52c3ff._state !== "loaded" || _0x52c3ff._playLock) {

              _0x52c3ff._queue.push({

                event: "stop",

                action: function () {

                  _0x52c3ff.stop(_0x41adef);

                }

              });

              return _0x52c3ff;

            }

            var _0x23afcb = _0x52c3ff._getSoundIds(_0x41adef);

            for (var _0x1bc6c8 = 0; _0x1bc6c8 < _0x23afcb.length; _0x1bc6c8++) {

              _0x52c3ff._clearTimer(_0x23afcb[_0x1bc6c8]);

              var _0x173f02 = _0x52c3ff._soundById(_0x23afcb[_0x1bc6c8]);

              if (_0x173f02) {

                _0x173f02._seek = _0x173f02._start || 0;

                _0x173f02._rateSeek = 0;

                _0x173f02._paused = true;

                _0x173f02._ended = true;

                _0x52c3ff._stopFade(_0x23afcb[_0x1bc6c8]);

                if (_0x173f02._node) {

                  if (_0x52c3ff._webAudio) {

                    if (_0x173f02._node.bufferSource) {

                      if (typeof _0x173f02._node.bufferSource.stop === "undefined") {

                        _0x173f02._node.bufferSource.noteOff(0);

                      } else {

                        _0x173f02._node.bufferSource.stop(0);

                      }

                      _0x52c3ff._cleanBuffer(_0x173f02._node);

                    }

                  } else if (!isNaN(_0x173f02._node.duration) || _0x173f02._node.duration === Infinity) {

                    _0x173f02._node.currentTime = _0x173f02._start || 0;

                    _0x173f02._node.pause();

                    if (_0x173f02._node.duration === Infinity) {

                      _0x52c3ff._clearSound(_0x173f02._node);

                    }

                  }

                }

                if (!_0x2af7b6) {

                  _0x52c3ff._emit("stop", _0x173f02._id);

                }

              }

            }

            return _0x52c3ff;

          },

          mute: function (_0x1e11b7, _0x42d33f) {

            var _0x5cb723 = this;

            if (_0x5cb723._state !== "loaded" || _0x5cb723._playLock) {

              _0x5cb723._queue.push({

                event: "mute",

                action: function () {

                  _0x5cb723.mute(_0x1e11b7, _0x42d33f);

                }

              });

              return _0x5cb723;

            }

            if (typeof _0x42d33f === "undefined") {

              if (typeof _0x1e11b7 === "boolean") {

                _0x5cb723._muted = _0x1e11b7;

              } else {

                return _0x5cb723._muted;

              }

            }

            var _0x3dca93 = _0x5cb723._getSoundIds(_0x42d33f);

            for (var _0x2b4898 = 0; _0x2b4898 < _0x3dca93.length; _0x2b4898++) {

              var _0x543527 = _0x5cb723._soundById(_0x3dca93[_0x2b4898]);

              if (_0x543527) {

                _0x543527._muted = _0x1e11b7;

                if (_0x543527._interval) {

                  _0x5cb723._stopFade(_0x543527._id);

                }

                if (_0x5cb723._webAudio && _0x543527._node) {

                  _0x543527._node.gain.setValueAtTime(_0x1e11b7 ? 0 : _0x543527._volume, _0x20916e.ctx.currentTime);

                } else if (_0x543527._node) {

                  _0x543527._node.muted = _0x20916e._muted ? true : _0x1e11b7;

                }

                _0x5cb723._emit("mute", _0x543527._id);

              }

            }

            return _0x5cb723;

          },

          volume: function () {

            var _0x5d10d3 = this;

            var _0xe29d30 = arguments;

            var _0x30a6b2;

            var _0x31a27e;

            if (_0xe29d30.length === 0) {

              return _0x5d10d3._volume;

            } else if (_0xe29d30.length === 1 || _0xe29d30.length === 2 && typeof _0xe29d30[1] === "undefined") {

              var _0x182b2c = _0x5d10d3._getSoundIds();

              var _0x20fde5 = _0x182b2c.indexOf(_0xe29d30[0]);

              if (_0x20fde5 >= 0) {

                _0x31a27e = parseInt(_0xe29d30[0], 10);

              } else {

                _0x30a6b2 = parseFloat(_0xe29d30[0]);

              }

            } else if (_0xe29d30.length >= 2) {

              _0x30a6b2 = parseFloat(_0xe29d30[0]);

              _0x31a27e = parseInt(_0xe29d30[1], 10);

            }

            var _0x1faff6;

            if (typeof _0x30a6b2 !== "undefined" && _0x30a6b2 >= 0 && _0x30a6b2 <= 1) {

              if (_0x5d10d3._state !== "loaded" || _0x5d10d3._playLock) {

                _0x5d10d3._queue.push({

                  event: "volume",

                  action: function () {

                    _0x5d10d3.volume.apply(_0x5d10d3, _0xe29d30);

                  }

                });

                return _0x5d10d3;

              }

              if (typeof _0x31a27e === "undefined") {

                _0x5d10d3._volume = _0x30a6b2;

              }

              _0x31a27e = _0x5d10d3._getSoundIds(_0x31a27e);

              for (var _0x24121c = 0; _0x24121c < _0x31a27e.length; _0x24121c++) {

                _0x1faff6 = _0x5d10d3._soundById(_0x31a27e[_0x24121c]);

                if (_0x1faff6) {

                  _0x1faff6._volume = _0x30a6b2;

                  if (!_0xe29d30[2]) {

                    _0x5d10d3._stopFade(_0x31a27e[_0x24121c]);

                  }

                  if (_0x5d10d3._webAudio && _0x1faff6._node && !_0x1faff6._muted) {

                    _0x1faff6._node.gain.setValueAtTime(_0x30a6b2, _0x20916e.ctx.currentTime);

                  } else if (_0x1faff6._node && !_0x1faff6._muted) {

                    _0x1faff6._node.volume = _0x30a6b2 * _0x20916e.volume();

                  }

                  _0x5d10d3._emit("volume", _0x1faff6._id);

                }

              }

            } else {

              _0x1faff6 = _0x31a27e ? _0x5d10d3._soundById(_0x31a27e) : _0x5d10d3._sounds[0];

              if (_0x1faff6) {

                return _0x1faff6._volume;

              } else {

                return 0;

              }

            }

            return _0x5d10d3;

          },

          fade: function (_0x54b478, _0x15c49a, _0x1121bd, _0x361920) {

            var _0x5f34a0 = this;

            if (_0x5f34a0._state !== "loaded" || _0x5f34a0._playLock) {

              _0x5f34a0._queue.push({

                event: "fade",

                action: function () {

                  _0x5f34a0.fade(_0x54b478, _0x15c49a, _0x1121bd, _0x361920);

                }

              });

              return _0x5f34a0;

            }

            _0x54b478 = Math.min(Math.max(0, parseFloat(_0x54b478)), 1);

            _0x15c49a = Math.min(Math.max(0, parseFloat(_0x15c49a)), 1);

            _0x1121bd = parseFloat(_0x1121bd);

            _0x5f34a0.volume(_0x54b478, _0x361920);

            var _0x429696 = _0x5f34a0._getSoundIds(_0x361920);

            for (var _0x5abcbb = 0; _0x5abcbb < _0x429696.length; _0x5abcbb++) {

              var _0x16b431 = _0x5f34a0._soundById(_0x429696[_0x5abcbb]);

              if (_0x16b431) {

                if (!_0x361920) {

                  _0x5f34a0._stopFade(_0x429696[_0x5abcbb]);

                }

                if (_0x5f34a0._webAudio && !_0x16b431._muted) {

                  var _0x465042 = _0x20916e.ctx.currentTime;

                  var _0x4162eb = _0x465042 + _0x1121bd / 1000;

                  _0x16b431._volume = _0x54b478;

                  _0x16b431._node.gain.setValueAtTime(_0x54b478, _0x465042);

                  _0x16b431._node.gain.linearRampToValueAtTime(_0x15c49a, _0x4162eb);

                }

                _0x5f34a0._startFadeInterval(_0x16b431, _0x54b478, _0x15c49a, _0x1121bd, _0x429696[_0x5abcbb], typeof _0x361920 === "undefined");

              }

            }

            return _0x5f34a0;

          },

          _startFadeInterval: function (_0x5aef7f, _0x528d2f, _0x29553b, _0x14ab99, _0x52df94, _0x3f0126) {

            var _0x2e89f4 = this;

            var _0x456a82 = _0x528d2f;

            var _0x29f16f = _0x29553b - _0x528d2f;

            var _0x707d2d = Math.abs(_0x29f16f / 0.01);

            var _0x3dff54 = Math.max(4, _0x707d2d > 0 ? _0x14ab99 / _0x707d2d : _0x14ab99);

            var _0x453608 = Date.now();

            _0x5aef7f._fadeTo = _0x29553b;

            _0x5aef7f._interval = setInterval(function () {

              var _0xf7e66d = (Date.now() - _0x453608) / _0x14ab99;

              _0x453608 = Date.now();

              _0x456a82 += _0x29f16f * _0xf7e66d;

              _0x456a82 = Math.round(_0x456a82 * 100) / 100;

              if (_0x29f16f < 0) {

                _0x456a82 = Math.max(_0x29553b, _0x456a82);

              } else {

                _0x456a82 = Math.min(_0x29553b, _0x456a82);

              }

              if (_0x2e89f4._webAudio) {

                _0x5aef7f._volume = _0x456a82;

              } else {

                _0x2e89f4.volume(_0x456a82, _0x5aef7f._id, true);

              }

              if (_0x3f0126) {

                _0x2e89f4._volume = _0x456a82;

              }

              if (_0x29553b < _0x528d2f && _0x456a82 <= _0x29553b || _0x29553b > _0x528d2f && _0x456a82 >= _0x29553b) {

                clearInterval(_0x5aef7f._interval);

                _0x5aef7f._interval = null;

                _0x5aef7f._fadeTo = null;

                _0x2e89f4.volume(_0x29553b, _0x5aef7f._id);

                _0x2e89f4._emit("fade", _0x5aef7f._id);

              }

            }, _0x3dff54);

          },

          _stopFade: function (_0x160c27) {

            var _0x2a8400 = this;

            var _0x2c528f = _0x2a8400._soundById(_0x160c27);

            if (_0x2c528f && _0x2c528f._interval) {

              if (_0x2a8400._webAudio) {

                _0x2c528f._node.gain.cancelScheduledValues(_0x20916e.ctx.currentTime);

              }

              clearInterval(_0x2c528f._interval);

              _0x2c528f._interval = null;

              _0x2a8400.volume(_0x2c528f._fadeTo, _0x160c27);

              _0x2c528f._fadeTo = null;

              _0x2a8400._emit("fade", _0x160c27);

            }

            return _0x2a8400;

          },

          loop: function () {

            var _0x1958cd = this;

            var _0x32fdbf = arguments;

            var _0x100188;

            var _0x177c1d;

            var _0x11c9fa;

            if (_0x32fdbf.length === 0) {

              return _0x1958cd._loop;

            } else if (_0x32fdbf.length === 1) {

              if (typeof _0x32fdbf[0] === "boolean") {

                _0x100188 = _0x32fdbf[0];

                _0x1958cd._loop = _0x100188;

              } else {

                _0x11c9fa = _0x1958cd._soundById(parseInt(_0x32fdbf[0], 10));

                if (_0x11c9fa) {

                  return _0x11c9fa._loop;

                } else {

                  return false;

                }

              }

            } else if (_0x32fdbf.length === 2) {

              _0x100188 = _0x32fdbf[0];

              _0x177c1d = parseInt(_0x32fdbf[1], 10);

            }

            var _0x4a4d12 = _0x1958cd._getSoundIds(_0x177c1d);

            for (var _0xd7128f = 0; _0xd7128f < _0x4a4d12.length; _0xd7128f++) {

              _0x11c9fa = _0x1958cd._soundById(_0x4a4d12[_0xd7128f]);

              if (_0x11c9fa) {

                _0x11c9fa._loop = _0x100188;

                if (_0x1958cd._webAudio && _0x11c9fa._node && _0x11c9fa._node.bufferSource) {

                  _0x11c9fa._node.bufferSource.loop = _0x100188;

                  if (_0x100188) {

                    _0x11c9fa._node.bufferSource.loopStart = _0x11c9fa._start || 0;

                    _0x11c9fa._node.bufferSource.loopEnd = _0x11c9fa._stop;

                    if (_0x1958cd.playing(_0x4a4d12[_0xd7128f])) {

                      _0x1958cd.pause(_0x4a4d12[_0xd7128f], true);

                      _0x1958cd.play(_0x4a4d12[_0xd7128f], true);

                    }

                  }

                }

              }

            }

            return _0x1958cd;

          },

          rate: function () {

            var _0x2095f5 = this;

            var _0x8a6e93 = arguments;

            var _0x1c8663;

            var _0x11d8fc;

            if (_0x8a6e93.length === 0) {

              _0x11d8fc = _0x2095f5._sounds[0]._id;

            } else if (_0x8a6e93.length === 1) {

              var _0x10bf41 = _0x2095f5._getSoundIds();

              var _0x4ae5d9 = _0x10bf41.indexOf(_0x8a6e93[0]);

              if (_0x4ae5d9 >= 0) {

                _0x11d8fc = parseInt(_0x8a6e93[0], 10);

              } else {

                _0x1c8663 = parseFloat(_0x8a6e93[0]);

              }

            } else if (_0x8a6e93.length === 2) {

              _0x1c8663 = parseFloat(_0x8a6e93[0]);

              _0x11d8fc = parseInt(_0x8a6e93[1], 10);

            }

            var _0x477a06;

            if (typeof _0x1c8663 === "number") {

              if (_0x2095f5._state !== "loaded" || _0x2095f5._playLock) {

                _0x2095f5._queue.push({

                  event: "rate",

                  action: function () {

                    _0x2095f5.rate.apply(_0x2095f5, _0x8a6e93);

                  }

                });

                return _0x2095f5;

              }

              if (typeof _0x11d8fc === "undefined") {

                _0x2095f5._rate = _0x1c8663;

              }

              _0x11d8fc = _0x2095f5._getSoundIds(_0x11d8fc);

              for (var _0x1b55a6 = 0; _0x1b55a6 < _0x11d8fc.length; _0x1b55a6++) {

                _0x477a06 = _0x2095f5._soundById(_0x11d8fc[_0x1b55a6]);

                if (_0x477a06) {

                  if (_0x2095f5.playing(_0x11d8fc[_0x1b55a6])) {

                    _0x477a06._rateSeek = _0x2095f5.seek(_0x11d8fc[_0x1b55a6]);

                    _0x477a06._playStart = _0x2095f5._webAudio ? _0x20916e.ctx.currentTime : _0x477a06._playStart;

                  }

                  _0x477a06._rate = _0x1c8663;

                  if (_0x2095f5._webAudio && _0x477a06._node && _0x477a06._node.bufferSource) {

                    _0x477a06._node.bufferSource.playbackRate.setValueAtTime(_0x1c8663, _0x20916e.ctx.currentTime);

                  } else if (_0x477a06._node) {

                    _0x477a06._node.playbackRate = _0x1c8663;

                  }

                  var _0x278be6 = _0x2095f5.seek(_0x11d8fc[_0x1b55a6]);

                  var _0x4b2452 = (_0x2095f5._sprite[_0x477a06._sprite][0] + _0x2095f5._sprite[_0x477a06._sprite][1]) / 1000 - _0x278be6;

                  var _0x42fb03 = _0x4b2452 * 1000 / Math.abs(_0x477a06._rate);

                  if (_0x2095f5._endTimers[_0x11d8fc[_0x1b55a6]] || !_0x477a06._paused) {

                    _0x2095f5._clearTimer(_0x11d8fc[_0x1b55a6]);

                    _0x2095f5._endTimers[_0x11d8fc[_0x1b55a6]] = setTimeout(_0x2095f5._ended.bind(_0x2095f5, _0x477a06), _0x42fb03);

                  }

                  _0x2095f5._emit("rate", _0x477a06._id);

                }

              }

            } else {

              _0x477a06 = _0x2095f5._soundById(_0x11d8fc);

              if (_0x477a06) {

                return _0x477a06._rate;

              } else {

                return _0x2095f5._rate;

              }

            }

            return _0x2095f5;

          },

          seek: function () {

            var _0x2dc6b3 = this;

            var _0x295bc3 = arguments;

            var _0x2f7636;

            var _0x491482;

            if (_0x295bc3.length === 0) {

              if (_0x2dc6b3._sounds.length) {

                _0x491482 = _0x2dc6b3._sounds[0]._id;

              }

            } else if (_0x295bc3.length === 1) {

              var _0x554c8e = _0x2dc6b3._getSoundIds();

              var _0xc01839 = _0x554c8e.indexOf(_0x295bc3[0]);

              if (_0xc01839 >= 0) {

                _0x491482 = parseInt(_0x295bc3[0], 10);

              } else if (_0x2dc6b3._sounds.length) {

                _0x491482 = _0x2dc6b3._sounds[0]._id;

                _0x2f7636 = parseFloat(_0x295bc3[0]);

              }

            } else if (_0x295bc3.length === 2) {

              _0x2f7636 = parseFloat(_0x295bc3[0]);

              _0x491482 = parseInt(_0x295bc3[1], 10);

            }

            if (typeof _0x491482 === "undefined") {

              return 0;

            }

            if (typeof _0x2f7636 === "number" && (_0x2dc6b3._state !== "loaded" || _0x2dc6b3._playLock)) {

              _0x2dc6b3._queue.push({

                event: "seek",

                action: function () {

                  _0x2dc6b3.seek.apply(_0x2dc6b3, _0x295bc3);

                }

              });

              return _0x2dc6b3;

            }

            var _0x4e83cb = _0x2dc6b3._soundById(_0x491482);

            if (_0x4e83cb) {

              if (typeof _0x2f7636 === "number" && _0x2f7636 >= 0) {

                var _0x4d1e57 = _0x2dc6b3.playing(_0x491482);

                if (_0x4d1e57) {

                  _0x2dc6b3.pause(_0x491482, true);

                }

                _0x4e83cb._seek = _0x2f7636;

                _0x4e83cb._ended = false;

                _0x2dc6b3._clearTimer(_0x491482);

                if (!_0x2dc6b3._webAudio && _0x4e83cb._node && !isNaN(_0x4e83cb._node.duration)) {

                  _0x4e83cb._node.currentTime = _0x2f7636;

                }

                function _0x47fb34() {

                  if (_0x4d1e57) {

                    _0x2dc6b3.play(_0x491482, true);

                  }

                  _0x2dc6b3._emit("seek", _0x491482);

                }

                if (_0x4d1e57 && !_0x2dc6b3._webAudio) {

                  function _0x325907() {

                    if (!_0x2dc6b3._playLock) {

                      _0x47fb34();

                    } else {

                      setTimeout(_0x325907, 0);

                    }

                  }

                  setTimeout(_0x325907, 0);

                } else {

                  _0x47fb34();

                }

              } else if (_0x2dc6b3._webAudio) {

                var _0x409ede = _0x2dc6b3.playing(_0x491482) ? _0x20916e.ctx.currentTime - _0x4e83cb._playStart : 0;

                var _0x2949c1 = _0x4e83cb._rateSeek ? _0x4e83cb._rateSeek - _0x4e83cb._seek : 0;

                return _0x4e83cb._seek + (_0x2949c1 + _0x409ede * Math.abs(_0x4e83cb._rate));

              } else {

                return _0x4e83cb._node.currentTime;

              }

            }

            return _0x2dc6b3;

          },

          playing: function (_0x51961c) {

            var _0x29750c = this;

            if (typeof _0x51961c === "number") {

              var _0x1e2b21 = _0x29750c._soundById(_0x51961c);

              if (_0x1e2b21) {

                return !_0x1e2b21._paused;

              } else {

                return false;

              }

            }

            for (var _0x47f32d = 0; _0x47f32d < _0x29750c._sounds.length; _0x47f32d++) {

              if (!_0x29750c._sounds[_0x47f32d]._paused) {

                return true;

              }

            }

            return false;

          },

          duration: function (_0x39d99f) {

            var _0x34d8dd = this;

            var _0x16b78d = _0x34d8dd._duration;

            var _0x8015da = _0x34d8dd._soundById(_0x39d99f);

            if (_0x8015da) {

              _0x16b78d = _0x34d8dd._sprite[_0x8015da._sprite][1] / 1000;

            }

            return _0x16b78d;

          },

          state: function () {

            return this._state;

          },

          unload: function () {

            var _0x2560de = this;

            var _0x1232e1 = _0x2560de._sounds;

            for (var _0x1f9723 = 0; _0x1f9723 < _0x1232e1.length; _0x1f9723++) {

              if (!_0x1232e1[_0x1f9723]._paused) {

                _0x2560de.stop(_0x1232e1[_0x1f9723]._id);

              }

              if (!_0x2560de._webAudio) {

                _0x2560de._clearSound(_0x1232e1[_0x1f9723]._node);

                _0x1232e1[_0x1f9723]._node.removeEventListener("error", _0x1232e1[_0x1f9723]._errorFn, false);

                _0x1232e1[_0x1f9723]._node.removeEventListener(_0x20916e._canPlayEvent, _0x1232e1[_0x1f9723]._loadFn, false);

                _0x1232e1[_0x1f9723]._node.removeEventListener("ended", _0x1232e1[_0x1f9723]._endFn, false);

                _0x20916e._releaseHtml5Audio(_0x1232e1[_0x1f9723]._node);

              }

              delete _0x1232e1[_0x1f9723]._node;

              _0x2560de._clearTimer(_0x1232e1[_0x1f9723]._id);

            }

            var _0xbe72ee = _0x20916e._howls.indexOf(_0x2560de);

            if (_0xbe72ee >= 0) {

              _0x20916e._howls.splice(_0xbe72ee, 1);

            }

            var _0xce7288 = true;

            for (_0x1f9723 = 0; _0x1f9723 < _0x20916e._howls.length; _0x1f9723++) {

              if (_0x20916e._howls[_0x1f9723]._src === _0x2560de._src || _0x2560de._src.indexOf(_0x20916e._howls[_0x1f9723]._src) >= 0) {

                _0xce7288 = false;

                break;

              }

            }

            if (_0x2a62d7 && _0xce7288) {

              delete _0x2a62d7[_0x2560de._src];

            }

            _0x20916e.noAudio = false;

            _0x2560de._state = "unloaded";

            _0x2560de._sounds = [];

            _0x2560de = null;

            return null;

          },

          on: function (_0x172a63, _0x379f07, _0x34a6e0, _0x44f977) {

            var _0x2b54ed = this;

            var _0x3064ee = _0x2b54ed["_on" + _0x172a63];

            if (typeof _0x379f07 === "function") {

              _0x3064ee.push(_0x44f977 ? {

                id: _0x34a6e0,

                fn: _0x379f07,

                once: _0x44f977

              } : {

                id: _0x34a6e0,

                fn: _0x379f07

              });

            }

            return _0x2b54ed;

          },

          off: function (_0x28e14a, _0x29ecbd, _0x28da4d) {

            var _0x32a7dd = this;

            var _0x442218 = _0x32a7dd["_on" + _0x28e14a];

            var _0x375a94 = 0;

            if (typeof _0x29ecbd === "number") {

              _0x28da4d = _0x29ecbd;

              _0x29ecbd = null;

            }

            if (_0x29ecbd || _0x28da4d) {

              for (_0x375a94 = 0; _0x375a94 < _0x442218.length; _0x375a94++) {

                var _0x3520b6 = _0x28da4d === _0x442218[_0x375a94].id;

                if (_0x29ecbd === _0x442218[_0x375a94].fn && _0x3520b6 || !_0x29ecbd && _0x3520b6) {

                  _0x442218.splice(_0x375a94, 1);

                  break;

                }

              }

            } else if (_0x28e14a) {

              _0x32a7dd["_on" + _0x28e14a] = [];

            } else {

              var _0xdcd054 = Object.keys(_0x32a7dd);

              for (_0x375a94 = 0; _0x375a94 < _0xdcd054.length; _0x375a94++) {

                if (_0xdcd054[_0x375a94].indexOf("_on") === 0 && Array.isArray(_0x32a7dd[_0xdcd054[_0x375a94]])) {

                  _0x32a7dd[_0xdcd054[_0x375a94]] = [];

                }

              }

            }

            return _0x32a7dd;

          },

          once: function (_0x4b6344, _0x2b845b, _0x225a68) {

            var _0x59ab9f = this;

            _0x59ab9f.on(_0x4b6344, _0x2b845b, _0x225a68, 1);

            return _0x59ab9f;

          },

          _emit: function (_0x328d93, _0x3c8e7d, _0x49b2b0) {

            var _0x32ce57 = this;

            var _0x3183ae = _0x32ce57["_on" + _0x328d93];

            for (var _0x929049 = _0x3183ae.length - 1; _0x929049 >= 0; _0x929049--) {

              if (!_0x3183ae[_0x929049].id || _0x3183ae[_0x929049].id === _0x3c8e7d || _0x328d93 === "load") {

                setTimeout(function (_0x5ba7d1) {

                  _0x5ba7d1.call(this, _0x3c8e7d, _0x49b2b0);

                }.bind(_0x32ce57, _0x3183ae[_0x929049].fn), 0);

                if (_0x3183ae[_0x929049].once) {

                  _0x32ce57.off(_0x328d93, _0x3183ae[_0x929049].fn, _0x3183ae[_0x929049].id);

                }

              }

            }

            _0x32ce57._loadQueue(_0x328d93);

            return _0x32ce57;

          },

          _loadQueue: function (_0x318614) {

            var _0xb27133 = this;

            if (_0xb27133._queue.length > 0) {

              var _0x4917d3 = _0xb27133._queue[0];

              if (_0x4917d3.event === _0x318614) {

                _0xb27133._queue.shift();

                _0xb27133._loadQueue();

              }

              if (!_0x318614) {

                _0x4917d3.action();

              }

            }

            return _0xb27133;

          },

          _ended: function (_0x5dde15) {

            var _0x44a464 = this;

            var _0x47f73f = _0x5dde15._sprite;

            if (!_0x44a464._webAudio && _0x5dde15._node && !_0x5dde15._node.paused && !_0x5dde15._node.ended && _0x5dde15._node.currentTime < _0x5dde15._stop) {

              setTimeout(_0x44a464._ended.bind(_0x44a464, _0x5dde15), 100);

              return _0x44a464;

            }

            var _0x23c304 = !!_0x5dde15._loop || !!_0x44a464._sprite[_0x47f73f][2];

            _0x44a464._emit("end", _0x5dde15._id);

            if (!_0x44a464._webAudio && _0x23c304) {

              _0x44a464.stop(_0x5dde15._id, true).play(_0x5dde15._id);

            }

            if (_0x44a464._webAudio && _0x23c304) {

              _0x44a464._emit("play", _0x5dde15._id);

              _0x5dde15._seek = _0x5dde15._start || 0;

              _0x5dde15._rateSeek = 0;

              _0x5dde15._playStart = _0x20916e.ctx.currentTime;

              var _0x21a374 = (_0x5dde15._stop - _0x5dde15._start) * 1000 / Math.abs(_0x5dde15._rate);

              _0x44a464._endTimers[_0x5dde15._id] = setTimeout(_0x44a464._ended.bind(_0x44a464, _0x5dde15), _0x21a374);

            }

            if (_0x44a464._webAudio && !_0x23c304) {

              _0x5dde15._paused = true;

              _0x5dde15._ended = true;

              _0x5dde15._seek = _0x5dde15._start || 0;

              _0x5dde15._rateSeek = 0;

              _0x44a464._clearTimer(_0x5dde15._id);

              _0x44a464._cleanBuffer(_0x5dde15._node);

              _0x20916e._autoSuspend();

            }

            if (!_0x44a464._webAudio && !_0x23c304) {

              _0x44a464.stop(_0x5dde15._id, true);

            }

            return _0x44a464;

          },

          _clearTimer: function (_0x19c74f) {

            var _0x150c08 = this;

            if (_0x150c08._endTimers[_0x19c74f]) {

              if (typeof _0x150c08._endTimers[_0x19c74f] !== "function") {

                clearTimeout(_0x150c08._endTimers[_0x19c74f]);

              } else {

                var _0x4b6e20 = _0x150c08._soundById(_0x19c74f);

                if (_0x4b6e20 && _0x4b6e20._node) {

                  _0x4b6e20._node.removeEventListener("ended", _0x150c08._endTimers[_0x19c74f], false);

                }

              }

              delete _0x150c08._endTimers[_0x19c74f];

            }

            return _0x150c08;

          },

          _soundById: function (_0x1dc094) {

            var _0x288308 = this;

            for (var _0x3b893e = 0; _0x3b893e < _0x288308._sounds.length; _0x3b893e++) {

              if (_0x1dc094 === _0x288308._sounds[_0x3b893e]._id) {

                return _0x288308._sounds[_0x3b893e];

              }

            }

            return null;

          },

          _inactiveSound: function () {

            var _0x1608dd = this;

            _0x1608dd._drain();

            for (var _0x4f7178 = 0; _0x4f7178 < _0x1608dd._sounds.length; _0x4f7178++) {

              if (_0x1608dd._sounds[_0x4f7178]._ended) {

                return _0x1608dd._sounds[_0x4f7178].reset();

              }

            }

            return new _0x5d54a4(_0x1608dd);

          },

          _drain: function () {

            var _0x251a23 = this;

            var _0x41cf7b = _0x251a23._pool;

            var _0x49aebd = 0;

            var _0x5c704c = 0;

            if (_0x251a23._sounds.length < _0x41cf7b) {

              return;

            }

            for (_0x5c704c = 0; _0x5c704c < _0x251a23._sounds.length; _0x5c704c++) {

              if (_0x251a23._sounds[_0x5c704c]._ended) {

                _0x49aebd++;

              }

            }

            for (_0x5c704c = _0x251a23._sounds.length - 1; _0x5c704c >= 0; _0x5c704c--) {

              if (_0x49aebd <= _0x41cf7b) {

                return;

              }

              if (_0x251a23._sounds[_0x5c704c]._ended) {

                if (_0x251a23._webAudio && _0x251a23._sounds[_0x5c704c]._node) {

                  _0x251a23._sounds[_0x5c704c]._node.disconnect(0);

                }

                _0x251a23._sounds.splice(_0x5c704c, 1);

                _0x49aebd--;

              }

            }

          },

          _getSoundIds: function (_0x322fef) {

            var _0x3f258b = this;

            if (typeof _0x322fef === "undefined") {

              var _0x3be840 = [];

              for (var _0x9c6a35 = 0; _0x9c6a35 < _0x3f258b._sounds.length; _0x9c6a35++) {

                _0x3be840.push(_0x3f258b._sounds[_0x9c6a35]._id);

              }

              return _0x3be840;

            } else {

              return [_0x322fef];

            }

          },

          _refreshBuffer: function (_0x71a147) {

            var _0x485955 = this;

            _0x71a147._node.bufferSource = _0x20916e.ctx.createBufferSource();

            _0x71a147._node.bufferSource.buffer = _0x2a62d7[_0x485955._src];

            if (_0x71a147._panner) {

              _0x71a147._node.bufferSource.connect(_0x71a147._panner);

            } else {

              _0x71a147._node.bufferSource.connect(_0x71a147._node);

            }

            _0x71a147._node.bufferSource.loop = _0x71a147._loop;

            if (_0x71a147._loop) {

              _0x71a147._node.bufferSource.loopStart = _0x71a147._start || 0;

              _0x71a147._node.bufferSource.loopEnd = _0x71a147._stop || 0;

            }

            _0x71a147._node.bufferSource.playbackRate.setValueAtTime(_0x71a147._rate, _0x20916e.ctx.currentTime);

            return _0x485955;

          },

          _cleanBuffer: function (_0x21d87c) {

            var _0x1d5864 = this;

            var _0xdff146 = _0x20916e._navigator && _0x20916e._navigator.vendor.indexOf("Apple") >= 0;

            if (!_0x21d87c.bufferSource) {

              return _0x1d5864;

            }

            if (_0x20916e._scratchBuffer && _0x21d87c.bufferSource) {

              _0x21d87c.bufferSource.onended = null;

              _0x21d87c.bufferSource.disconnect(0);

              if (_0xdff146) {

                try {

                  _0x21d87c.bufferSource.buffer = _0x20916e._scratchBuffer;

                } catch (_0xe59acf) {}

              }

            }

            _0x21d87c.bufferSource = null;

            return _0x1d5864;

          },

          _clearSound: function (_0x20d22c) {

            var _0x3024c9 = /MSIE |Trident\//.test(_0x20916e._navigator && _0x20916e._navigator.userAgent);

            if (!_0x3024c9) {

              _0x20d22c.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";

            }

          }

        };

        function _0x5d54a4(_0x1f05de) {

          this._parent = _0x1f05de;

          this.init();

        }

        _0x5d54a4.prototype = {

          init: function () {

            var _0x195fab = this;

            var _0x5236ba = _0x195fab._parent;

            _0x195fab._muted = _0x5236ba._muted;

            _0x195fab._loop = _0x5236ba._loop;

            _0x195fab._volume = _0x5236ba._volume;

            _0x195fab._rate = _0x5236ba._rate;

            _0x195fab._seek = 0;

            _0x195fab._paused = true;

            _0x195fab._ended = true;

            _0x195fab._sprite = "__default";

            _0x195fab._id = ++_0x20916e._counter;

            _0x5236ba._sounds.push(_0x195fab);

            _0x195fab.create();

            return _0x195fab;

          },

          create: function () {

            var _0xae82b9 = this;

            var _0x147e47 = _0xae82b9._parent;

            var _0xf793dd = _0x20916e._muted || _0xae82b9._muted || _0xae82b9._parent._muted ? 0 : _0xae82b9._volume;

            if (_0x147e47._webAudio) {

              _0xae82b9._node = typeof _0x20916e.ctx.createGain === "undefined" ? _0x20916e.ctx.createGainNode() : _0x20916e.ctx.createGain();

              _0xae82b9._node.gain.setValueAtTime(_0xf793dd, _0x20916e.ctx.currentTime);

              _0xae82b9._node.paused = true;

              _0xae82b9._node.connect(_0x20916e.masterGain);

            } else if (!_0x20916e.noAudio) {

              _0xae82b9._node = _0x20916e._obtainHtml5Audio();

              _0xae82b9._errorFn = _0xae82b9._errorListener.bind(_0xae82b9);

              _0xae82b9._node.addEventListener("error", _0xae82b9._errorFn, false);

              _0xae82b9._loadFn = _0xae82b9._loadListener.bind(_0xae82b9);

              _0xae82b9._node.addEventListener(_0x20916e._canPlayEvent, _0xae82b9._loadFn, false);

              _0xae82b9._endFn = _0xae82b9._endListener.bind(_0xae82b9);

              _0xae82b9._node.addEventListener("ended", _0xae82b9._endFn, false);

              _0xae82b9._node.src = _0x147e47._src;

              _0xae82b9._node.preload = _0x147e47._preload === true ? "auto" : _0x147e47._preload;

              _0xae82b9._node.volume = _0xf793dd * _0x20916e.volume();

              _0xae82b9._node.load();

            }

            return _0xae82b9;

          },

          reset: function () {

            var _0x22c84a = this;

            var _0x3419c5 = _0x22c84a._parent;

            _0x22c84a._muted = _0x3419c5._muted;

            _0x22c84a._loop = _0x3419c5._loop;

            _0x22c84a._volume = _0x3419c5._volume;

            _0x22c84a._rate = _0x3419c5._rate;

            _0x22c84a._seek = 0;

            _0x22c84a._rateSeek = 0;

            _0x22c84a._paused = true;

            _0x22c84a._ended = true;

            _0x22c84a._sprite = "__default";

            _0x22c84a._id = ++_0x20916e._counter;

            return _0x22c84a;

          },

          _errorListener: function () {

            var _0x2e7c79 = this;

            _0x2e7c79._parent._emit("loaderror", _0x2e7c79._id, _0x2e7c79._node.error ? _0x2e7c79._node.error.code : 0);

            _0x2e7c79._node.removeEventListener("error", _0x2e7c79._errorFn, false);

          },

          _loadListener: function () {

            var _0x592fcc = this;

            var _0x4010eb = _0x592fcc._parent;

            _0x4010eb._duration = Math.ceil(_0x592fcc._node.duration * 10) / 10;

            if (Object.keys(_0x4010eb._sprite).length === 0) {

              _0x4010eb._sprite = {

                __default: [0, _0x4010eb._duration * 1000]

              };

            }

            if (_0x4010eb._state !== "loaded") {

              _0x4010eb._state = "loaded";

              _0x4010eb._emit("load");

              _0x4010eb._loadQueue();

            }

            _0x592fcc._node.removeEventListener(_0x20916e._canPlayEvent, _0x592fcc._loadFn, false);

          },

          _endListener: function () {

            var _0x2414f9 = this;

            var _0x14d50e = _0x2414f9._parent;

            if (_0x14d50e._duration === Infinity) {

              _0x14d50e._duration = Math.ceil(_0x2414f9._node.duration * 10) / 10;

              if (_0x14d50e._sprite.__default[1] === Infinity) {

                _0x14d50e._sprite.__default[1] = _0x14d50e._duration * 1000;

              }

              _0x14d50e._ended(_0x2414f9);

            }

            _0x2414f9._node.removeEventListener("ended", _0x2414f9._endFn, false);

          }

        };

        var _0x2a62d7 = {};

        function _0x77da41(_0x1c705e) {

          var _0x43041e = _0x1c705e._src;

          if (_0x2a62d7[_0x43041e]) {

            _0x1c705e._duration = _0x2a62d7[_0x43041e].duration;

            _0x4507a9(_0x1c705e);

            return;

          }

          if (/^data:[^;]+;base64,/.test(_0x43041e)) {

            var _0x2326e9 = atob(_0x43041e.split(",")[1]);

            var _0x38a77b = new Uint8Array(_0x2326e9.length);

            for (var _0x211162 = 0; _0x211162 < _0x2326e9.length; ++_0x211162) {

              _0x38a77b[_0x211162] = _0x2326e9.charCodeAt(_0x211162);

            }

            _0xf89111(_0x38a77b.buffer, _0x1c705e);

          } else {

            var _0x36f4f8 = new XMLHttpRequest();

            _0x36f4f8.open(_0x1c705e._xhr.method, _0x43041e, true);

            _0x36f4f8.withCredentials = _0x1c705e._xhr.withCredentials;

            _0x36f4f8.responseType = "arraybuffer";

            if (_0x1c705e._xhr.headers) {

              Object.keys(_0x1c705e._xhr.headers).forEach(function (_0x5c3cd4) {

                _0x36f4f8.setRequestHeader(_0x5c3cd4, _0x1c705e._xhr.headers[_0x5c3cd4]);

              });

            }

            _0x36f4f8.onload = function () {

              var _0x5a4138 = (_0x36f4f8.status + "")[0];

              if (_0x5a4138 !== "0" && _0x5a4138 !== "2" && _0x5a4138 !== "3") {

                _0x1c705e._emit("loaderror", null, "Failed loading audio file with status: " + _0x36f4f8.status + ".");

                return;

              }

              _0xf89111(_0x36f4f8.response, _0x1c705e);

            };

            _0x36f4f8.onerror = function () {

              if (_0x1c705e._webAudio) {

                _0x1c705e._html5 = true;

                _0x1c705e._webAudio = false;

                _0x1c705e._sounds = [];

                delete _0x2a62d7[_0x43041e];

                _0x1c705e.load();

              }

            };

            _0x390768(_0x36f4f8);

          }

        }

        function _0x390768(_0x17f223) {

          try {

            _0x17f223.send();

          } catch (_0x7ae979) {

            _0x17f223.onerror();

          }

        }

        function _0xf89111(_0x55941c, _0x53912a) {

          function _0x38f3ac() {

            _0x53912a._emit("loaderror", null, "Decoding audio data failed.");

          }

          function _0x2d8a45(_0x51406d) {

            if (_0x51406d && _0x53912a._sounds.length > 0) {

              _0x2a62d7[_0x53912a._src] = _0x51406d;

              _0x4507a9(_0x53912a, _0x51406d);

            } else {

              _0x38f3ac();

            }

          }

          if (typeof Promise !== "undefined" && _0x20916e.ctx.decodeAudioData.length === 1) {

            _0x20916e.ctx.decodeAudioData(_0x55941c).then(_0x2d8a45).catch(_0x38f3ac);

          } else {

            _0x20916e.ctx.decodeAudioData(_0x55941c, _0x2d8a45, _0x38f3ac);

          }

        }

        function _0x4507a9(_0x18b10f, _0x79ef8c) {

          if (_0x79ef8c && !_0x18b10f._duration) {

            _0x18b10f._duration = _0x79ef8c.duration;

          }

          if (Object.keys(_0x18b10f._sprite).length === 0) {

            _0x18b10f._sprite = {

              __default: [0, _0x18b10f._duration * 1000]

            };

          }

          if (_0x18b10f._state !== "loaded") {

            _0x18b10f._state = "loaded";

            _0x18b10f._emit("load");

            _0x18b10f._loadQueue();

          }

        }

        function _0x16e904() {

          if (!_0x20916e.usingWebAudio) {

            return;

          }

          try {

            if (typeof AudioContext !== "undefined") {

              _0x20916e.ctx = new AudioContext();

            } else if (typeof webkitAudioContext !== "undefined") {

              _0x20916e.ctx = new webkitAudioContext();

            } else {

              _0x20916e.usingWebAudio = false;

            }

          } catch (_0x47a746) {

            _0x20916e.usingWebAudio = false;

          }

          if (!_0x20916e.ctx) {

            _0x20916e.usingWebAudio = false;

          }

          var _0x4604a2 = /iP(hone|od|ad)/.test(_0x20916e._navigator && _0x20916e._navigator.platform);

          var _0x45e1e6 = _0x20916e._navigator && _0x20916e._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);

          var _0x51cbf0 = _0x45e1e6 ? parseInt(_0x45e1e6[1], 10) : null;

          if (_0x4604a2 && _0x51cbf0 && _0x51cbf0 < 9) {

            var _0x5e5980 = /safari/.test(_0x20916e._navigator && _0x20916e._navigator.userAgent.toLowerCase());

            if (_0x20916e._navigator && !_0x5e5980) {

              _0x20916e.usingWebAudio = false;

            }

          }

          if (_0x20916e.usingWebAudio) {

            _0x20916e.masterGain = typeof _0x20916e.ctx.createGain === "undefined" ? _0x20916e.ctx.createGainNode() : _0x20916e.ctx.createGain();

            _0x20916e.masterGain.gain.setValueAtTime(_0x20916e._muted ? 0 : _0x20916e._volume, _0x20916e.ctx.currentTime);

            _0x20916e.masterGain.connect(_0x20916e.ctx.destination);

          }

          _0x20916e._setup();

        }

        if (true) {

          _0xe5bbae = [];

          _0x25d64d = function () {

            return {

              Howler: _0x20916e,

              Howl: _0x40ae91

            };

          }.apply(_0x1c89b3, _0xe5bbae);

          if (_0x25d64d !== undefined) {

            _0x211ead.exports = _0x25d64d;

          }

        }

        if (true) {

          _0x1c89b3.Howler = _0x20916e;

          _0x1c89b3.Howl = _0x40ae91;

        }

        if (typeof _0x4d1f29.g !== "undefined") {

          _0x4d1f29.g.HowlerGlobal = _0xad90df;

          _0x4d1f29.g.Howler = _0x20916e;

          _0x4d1f29.g.Howl = _0x40ae91;

          _0x4d1f29.g.Sound = _0x5d54a4;

        } else if (typeof window !== "undefined") {

          window.HowlerGlobal = _0xad90df;

          window.Howler = _0x20916e;

          window.Howl = _0x40ae91;

          window.Sound = _0x5d54a4;

        }

      })();

      (function () {

        'use strict';



        HowlerGlobal.prototype._pos = [0, 0, 0];

        HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];

        HowlerGlobal.prototype.stereo = function (_0x32fc5f) {

          var _0x3a93a6 = this;

          if (!_0x3a93a6.ctx || !_0x3a93a6.ctx.listener) {

            return _0x3a93a6;

          }

          for (var _0x476a91 = _0x3a93a6._howls.length - 1; _0x476a91 >= 0; _0x476a91--) {

            _0x3a93a6._howls[_0x476a91].stereo(_0x32fc5f);

          }

          return _0x3a93a6;

        };

        HowlerGlobal.prototype.pos = function (_0x2dcf8f, _0x594d1a, _0xa0b7dd) {

          var _0x3a6065 = this;

          if (!_0x3a6065.ctx || !_0x3a6065.ctx.listener) {

            return _0x3a6065;

          }

          _0x594d1a = typeof _0x594d1a !== "number" ? _0x3a6065._pos[1] : _0x594d1a;

          _0xa0b7dd = typeof _0xa0b7dd !== "number" ? _0x3a6065._pos[2] : _0xa0b7dd;

          if (typeof _0x2dcf8f === "number") {

            _0x3a6065._pos = [_0x2dcf8f, _0x594d1a, _0xa0b7dd];

            if (typeof _0x3a6065.ctx.listener.positionX !== "undefined") {

              _0x3a6065.ctx.listener.positionX.setTargetAtTime(_0x3a6065._pos[0], Howler.ctx.currentTime, 0.1);

              _0x3a6065.ctx.listener.positionY.setTargetAtTime(_0x3a6065._pos[1], Howler.ctx.currentTime, 0.1);

              _0x3a6065.ctx.listener.positionZ.setTargetAtTime(_0x3a6065._pos[2], Howler.ctx.currentTime, 0.1);

            } else {

              _0x3a6065.ctx.listener.setPosition(_0x3a6065._pos[0], _0x3a6065._pos[1], _0x3a6065._pos[2]);

            }

          } else {

            return _0x3a6065._pos;

          }

          return _0x3a6065;

        };

        HowlerGlobal.prototype.orientation = function (_0x15b38b, _0x3b43fc, _0x18a577, _0x3c923a, _0x296856, _0x1a0866) {

          var _0x438f65 = this;

          if (!_0x438f65.ctx || !_0x438f65.ctx.listener) {

            return _0x438f65;

          }

          var _0x265afa = _0x438f65._orientation;

          _0x3b43fc = typeof _0x3b43fc !== "number" ? _0x265afa[1] : _0x3b43fc;

          _0x18a577 = typeof _0x18a577 !== "number" ? _0x265afa[2] : _0x18a577;

          _0x3c923a = typeof _0x3c923a !== "number" ? _0x265afa[3] : _0x3c923a;

          _0x296856 = typeof _0x296856 !== "number" ? _0x265afa[4] : _0x296856;

          _0x1a0866 = typeof _0x1a0866 !== "number" ? _0x265afa[5] : _0x1a0866;

          if (typeof _0x15b38b === "number") {

            _0x438f65._orientation = [_0x15b38b, _0x3b43fc, _0x18a577, _0x3c923a, _0x296856, _0x1a0866];

            if (typeof _0x438f65.ctx.listener.forwardX !== "undefined") {

              _0x438f65.ctx.listener.forwardX.setTargetAtTime(_0x15b38b, Howler.ctx.currentTime, 0.1);

              _0x438f65.ctx.listener.forwardY.setTargetAtTime(_0x3b43fc, Howler.ctx.currentTime, 0.1);

              _0x438f65.ctx.listener.forwardZ.setTargetAtTime(_0x18a577, Howler.ctx.currentTime, 0.1);

              _0x438f65.ctx.listener.upX.setTargetAtTime(_0x3c923a, Howler.ctx.currentTime, 0.1);

              _0x438f65.ctx.listener.upY.setTargetAtTime(_0x296856, Howler.ctx.currentTime, 0.1);

              _0x438f65.ctx.listener.upZ.setTargetAtTime(_0x1a0866, Howler.ctx.currentTime, 0.1);

            } else {

              _0x438f65.ctx.listener.setOrientation(_0x15b38b, _0x3b43fc, _0x18a577, _0x3c923a, _0x296856, _0x1a0866);

            }

          } else {

            return _0x265afa;

          }

          return _0x438f65;

        };

        Howl.prototype.init = function (_0x1a38e8) {

          return function (_0x1d3fea) {

            var _0x2aae1a = this;

            _0x2aae1a._orientation = _0x1d3fea.orientation || [1, 0, 0];

            _0x2aae1a._stereo = _0x1d3fea.stereo || null;

            _0x2aae1a._pos = _0x1d3fea.pos || null;

            _0x2aae1a._pannerAttr = {

              coneInnerAngle: typeof _0x1d3fea.coneInnerAngle !== "undefined" ? _0x1d3fea.coneInnerAngle : 360,

              coneOuterAngle: typeof _0x1d3fea.coneOuterAngle !== "undefined" ? _0x1d3fea.coneOuterAngle : 360,

              coneOuterGain: typeof _0x1d3fea.coneOuterGain !== "undefined" ? _0x1d3fea.coneOuterGain : 0,

              distanceModel: typeof _0x1d3fea.distanceModel !== "undefined" ? _0x1d3fea.distanceModel : "inverse",

              maxDistance: typeof _0x1d3fea.maxDistance !== "undefined" ? _0x1d3fea.maxDistance : 10000,

              panningModel: typeof _0x1d3fea.panningModel !== "undefined" ? _0x1d3fea.panningModel : "HRTF",

              refDistance: typeof _0x1d3fea.refDistance !== "undefined" ? _0x1d3fea.refDistance : 1,

              rolloffFactor: typeof _0x1d3fea.rolloffFactor !== "undefined" ? _0x1d3fea.rolloffFactor : 1

            };

            _0x2aae1a._onstereo = _0x1d3fea.onstereo ? [{

              fn: _0x1d3fea.onstereo

            }] : [];

            _0x2aae1a._onpos = _0x1d3fea.onpos ? [{

              fn: _0x1d3fea.onpos

            }] : [];

            _0x2aae1a._onorientation = _0x1d3fea.onorientation ? [{

              fn: _0x1d3fea.onorientation

            }] : [];

            return _0x1a38e8.call(this, _0x1d3fea);

          };

        }(Howl.prototype.init);

        Howl.prototype.stereo = function (_0x12fcd5, _0x572930) {

          var _0x50df86 = this;

          if (!_0x50df86._webAudio) {

            return _0x50df86;

          }

          if (_0x50df86._state !== "loaded") {

            _0x50df86._queue.push({

              event: "stereo",

              action: function () {

                _0x50df86.stereo(_0x12fcd5, _0x572930);

              }

            });

            return _0x50df86;

          }

          var _0x2af2c8 = typeof Howler.ctx.createStereoPanner === "undefined" ? "spatial" : "stereo";

          if (typeof _0x572930 === "undefined") {

            if (typeof _0x12fcd5 === "number") {

              _0x50df86._stereo = _0x12fcd5;

              _0x50df86._pos = [_0x12fcd5, 0, 0];

            } else {

              return _0x50df86._stereo;

            }

          }

          var _0x537984 = _0x50df86._getSoundIds(_0x572930);

          for (var _0x2e696c = 0; _0x2e696c < _0x537984.length; _0x2e696c++) {

            var _0x15c3a4 = _0x50df86._soundById(_0x537984[_0x2e696c]);

            if (_0x15c3a4) {

              if (typeof _0x12fcd5 === "number") {

                _0x15c3a4._stereo = _0x12fcd5;

                _0x15c3a4._pos = [_0x12fcd5, 0, 0];

                if (_0x15c3a4._node) {

                  _0x15c3a4._pannerAttr.panningModel = "equalpower";

                  if (!_0x15c3a4._panner || !_0x15c3a4._panner.pan) {

                    _0x4ceea6(_0x15c3a4, _0x2af2c8);

                  }

                  if (_0x2af2c8 === "spatial") {

                    if (typeof _0x15c3a4._panner.positionX !== "undefined") {

                      _0x15c3a4._panner.positionX.setValueAtTime(_0x12fcd5, Howler.ctx.currentTime);

                      _0x15c3a4._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);

                      _0x15c3a4._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);

                    } else {

                      _0x15c3a4._panner.setPosition(_0x12fcd5, 0, 0);

                    }

                  } else {

                    _0x15c3a4._panner.pan.setValueAtTime(_0x12fcd5, Howler.ctx.currentTime);

                  }

                }

                _0x50df86._emit("stereo", _0x15c3a4._id);

              } else {

                return _0x15c3a4._stereo;

              }

            }

          }

          return _0x50df86;

        };

        Howl.prototype.pos = function (_0x14ce1e, _0x5177d8, _0xa665dc, _0x448db5) {

          var _0x2e6414 = this;

          if (!_0x2e6414._webAudio) {

            return _0x2e6414;

          }

          if (_0x2e6414._state !== "loaded") {

            _0x2e6414._queue.push({

              event: "pos",

              action: function () {

                _0x2e6414.pos(_0x14ce1e, _0x5177d8, _0xa665dc, _0x448db5);

              }

            });

            return _0x2e6414;

          }

          _0x5177d8 = typeof _0x5177d8 !== "number" ? 0 : _0x5177d8;

          _0xa665dc = typeof _0xa665dc !== "number" ? -0.5 : _0xa665dc;

          if (typeof _0x448db5 === "undefined") {

            if (typeof _0x14ce1e === "number") {

              _0x2e6414._pos = [_0x14ce1e, _0x5177d8, _0xa665dc];

            } else {

              return _0x2e6414._pos;

            }

          }

          var _0x50df53 = _0x2e6414._getSoundIds(_0x448db5);

          for (var _0x3eddd8 = 0; _0x3eddd8 < _0x50df53.length; _0x3eddd8++) {

            var _0x3c5dd5 = _0x2e6414._soundById(_0x50df53[_0x3eddd8]);

            if (_0x3c5dd5) {

              if (typeof _0x14ce1e === "number") {

                _0x3c5dd5._pos = [_0x14ce1e, _0x5177d8, _0xa665dc];

                if (_0x3c5dd5._node) {

                  if (!_0x3c5dd5._panner || _0x3c5dd5._panner.pan) {

                    _0x4ceea6(_0x3c5dd5, "spatial");

                  }

                  if (typeof _0x3c5dd5._panner.positionX !== "undefined") {

                    _0x3c5dd5._panner.positionX.setValueAtTime(_0x14ce1e, Howler.ctx.currentTime);

                    _0x3c5dd5._panner.positionY.setValueAtTime(_0x5177d8, Howler.ctx.currentTime);

                    _0x3c5dd5._panner.positionZ.setValueAtTime(_0xa665dc, Howler.ctx.currentTime);

                  } else {

                    _0x3c5dd5._panner.setPosition(_0x14ce1e, _0x5177d8, _0xa665dc);

                  }

                }

                _0x2e6414._emit("pos", _0x3c5dd5._id);

              } else {

                return _0x3c5dd5._pos;

              }

            }

          }

          return _0x2e6414;

        };

        Howl.prototype.orientation = function (_0x24d9f9, _0x5937f5, _0x54a0b4, _0x17b2b8) {

          var _0x5d8e02 = this;

          if (!_0x5d8e02._webAudio) {

            return _0x5d8e02;

          }

          if (_0x5d8e02._state !== "loaded") {

            _0x5d8e02._queue.push({

              event: "orientation",

              action: function () {

                _0x5d8e02.orientation(_0x24d9f9, _0x5937f5, _0x54a0b4, _0x17b2b8);

              }

            });

            return _0x5d8e02;

          }

          _0x5937f5 = typeof _0x5937f5 !== "number" ? _0x5d8e02._orientation[1] : _0x5937f5;

          _0x54a0b4 = typeof _0x54a0b4 !== "number" ? _0x5d8e02._orientation[2] : _0x54a0b4;

          if (typeof _0x17b2b8 === "undefined") {

            if (typeof _0x24d9f9 === "number") {

              _0x5d8e02._orientation = [_0x24d9f9, _0x5937f5, _0x54a0b4];

            } else {

              return _0x5d8e02._orientation;

            }

          }

          var _0x540cb8 = _0x5d8e02._getSoundIds(_0x17b2b8);

          for (var _0x29f100 = 0; _0x29f100 < _0x540cb8.length; _0x29f100++) {

            var _0x30af20 = _0x5d8e02._soundById(_0x540cb8[_0x29f100]);

            if (_0x30af20) {

              if (typeof _0x24d9f9 === "number") {

                _0x30af20._orientation = [_0x24d9f9, _0x5937f5, _0x54a0b4];

                if (_0x30af20._node) {

                  if (!_0x30af20._panner) {

                    if (!_0x30af20._pos) {

                      _0x30af20._pos = _0x5d8e02._pos || [0, 0, -0.5];

                    }

                    _0x4ceea6(_0x30af20, "spatial");

                  }

                  if (typeof _0x30af20._panner.orientationX !== "undefined") {

                    _0x30af20._panner.orientationX.setValueAtTime(_0x24d9f9, Howler.ctx.currentTime);

                    _0x30af20._panner.orientationY.setValueAtTime(_0x5937f5, Howler.ctx.currentTime);

                    _0x30af20._panner.orientationZ.setValueAtTime(_0x54a0b4, Howler.ctx.currentTime);

                  } else {

                    _0x30af20._panner.setOrientation(_0x24d9f9, _0x5937f5, _0x54a0b4);

                  }

                }

                _0x5d8e02._emit("orientation", _0x30af20._id);

              } else {

                return _0x30af20._orientation;

              }

            }

          }

          return _0x5d8e02;

        };

        Howl.prototype.pannerAttr = function () {

          var _0x74d522 = this;

          var _0x1be95d = arguments;

          var _0x4a0ba7;

          var _0x5a0d9a;

          var _0x2bccbe;

          if (!_0x74d522._webAudio) {

            return _0x74d522;

          }

          if (_0x1be95d.length === 0) {

            return _0x74d522._pannerAttr;

          } else if (_0x1be95d.length === 1) {

            if (typeof _0x1be95d[0] === "object") {

              _0x4a0ba7 = _0x1be95d[0];

              if (typeof _0x5a0d9a === "undefined") {

                if (!_0x4a0ba7.pannerAttr) {

                  _0x4a0ba7.pannerAttr = {

                    coneInnerAngle: _0x4a0ba7.coneInnerAngle,

                    coneOuterAngle: _0x4a0ba7.coneOuterAngle,

                    coneOuterGain: _0x4a0ba7.coneOuterGain,

                    distanceModel: _0x4a0ba7.distanceModel,

                    maxDistance: _0x4a0ba7.maxDistance,

                    refDistance: _0x4a0ba7.refDistance,

                    rolloffFactor: _0x4a0ba7.rolloffFactor,

                    panningModel: _0x4a0ba7.panningModel

                  };

                }

                _0x74d522._pannerAttr = {

                  coneInnerAngle: typeof _0x4a0ba7.pannerAttr.coneInnerAngle !== "undefined" ? _0x4a0ba7.pannerAttr.coneInnerAngle : _0x74d522._coneInnerAngle,

                  coneOuterAngle: typeof _0x4a0ba7.pannerAttr.coneOuterAngle !== "undefined" ? _0x4a0ba7.pannerAttr.coneOuterAngle : _0x74d522._coneOuterAngle,

                  coneOuterGain: typeof _0x4a0ba7.pannerAttr.coneOuterGain !== "undefined" ? _0x4a0ba7.pannerAttr.coneOuterGain : _0x74d522._coneOuterGain,

                  distanceModel: typeof _0x4a0ba7.pannerAttr.distanceModel !== "undefined" ? _0x4a0ba7.pannerAttr.distanceModel : _0x74d522._distanceModel,

                  maxDistance: typeof _0x4a0ba7.pannerAttr.maxDistance !== "undefined" ? _0x4a0ba7.pannerAttr.maxDistance : _0x74d522._maxDistance,

                  refDistance: typeof _0x4a0ba7.pannerAttr.refDistance !== "undefined" ? _0x4a0ba7.pannerAttr.refDistance : _0x74d522._refDistance,

                  rolloffFactor: typeof _0x4a0ba7.pannerAttr.rolloffFactor !== "undefined" ? _0x4a0ba7.pannerAttr.rolloffFactor : _0x74d522._rolloffFactor,

                  panningModel: typeof _0x4a0ba7.pannerAttr.panningModel !== "undefined" ? _0x4a0ba7.pannerAttr.panningModel : _0x74d522._panningModel

                };

              }

            } else {

              _0x2bccbe = _0x74d522._soundById(parseInt(_0x1be95d[0], 10));

              if (_0x2bccbe) {

                return _0x2bccbe._pannerAttr;

              } else {

                return _0x74d522._pannerAttr;

              }

            }

          } else if (_0x1be95d.length === 2) {

            _0x4a0ba7 = _0x1be95d[0];

            _0x5a0d9a = parseInt(_0x1be95d[1], 10);

          }

          var _0x20e916 = _0x74d522._getSoundIds(_0x5a0d9a);

          for (var _0x1cd3a8 = 0; _0x1cd3a8 < _0x20e916.length; _0x1cd3a8++) {

            _0x2bccbe = _0x74d522._soundById(_0x20e916[_0x1cd3a8]);

            if (_0x2bccbe) {

              var _0x5c5d39 = _0x2bccbe._pannerAttr;

              _0x5c5d39 = {

                coneInnerAngle: typeof _0x4a0ba7.coneInnerAngle !== "undefined" ? _0x4a0ba7.coneInnerAngle : _0x5c5d39.coneInnerAngle,

                coneOuterAngle: typeof _0x4a0ba7.coneOuterAngle !== "undefined" ? _0x4a0ba7.coneOuterAngle : _0x5c5d39.coneOuterAngle,

                coneOuterGain: typeof _0x4a0ba7.coneOuterGain !== "undefined" ? _0x4a0ba7.coneOuterGain : _0x5c5d39.coneOuterGain,

                distanceModel: typeof _0x4a0ba7.distanceModel !== "undefined" ? _0x4a0ba7.distanceModel : _0x5c5d39.distanceModel,

                maxDistance: typeof _0x4a0ba7.maxDistance !== "undefined" ? _0x4a0ba7.maxDistance : _0x5c5d39.maxDistance,

                refDistance: typeof _0x4a0ba7.refDistance !== "undefined" ? _0x4a0ba7.refDistance : _0x5c5d39.refDistance,

                rolloffFactor: typeof _0x4a0ba7.rolloffFactor !== "undefined" ? _0x4a0ba7.rolloffFactor : _0x5c5d39.rolloffFactor,

                panningModel: typeof _0x4a0ba7.panningModel !== "undefined" ? _0x4a0ba7.panningModel : _0x5c5d39.panningModel

              };

              var _0x45d74d = _0x2bccbe._panner;

              if (!_0x45d74d) {

                if (!_0x2bccbe._pos) {

                  _0x2bccbe._pos = _0x74d522._pos || [0, 0, -0.5];

                }

                _0x4ceea6(_0x2bccbe, "spatial");

                _0x45d74d = _0x2bccbe._panner;

              }

              _0x45d74d.coneInnerAngle = _0x5c5d39.coneInnerAngle;

              _0x45d74d.coneOuterAngle = _0x5c5d39.coneOuterAngle;

              _0x45d74d.coneOuterGain = _0x5c5d39.coneOuterGain;

              _0x45d74d.distanceModel = _0x5c5d39.distanceModel;

              _0x45d74d.maxDistance = _0x5c5d39.maxDistance;

              _0x45d74d.refDistance = _0x5c5d39.refDistance;

              _0x45d74d.rolloffFactor = _0x5c5d39.rolloffFactor;

              _0x45d74d.panningModel = _0x5c5d39.panningModel;

            }

          }

          return _0x74d522;

        };

        Sound.prototype.init = function (_0xf1aaeb) {

          return function () {

            var _0x129b34 = this;

            var _0x4f4437 = _0x129b34._parent;

            _0x129b34._orientation = _0x4f4437._orientation;

            _0x129b34._stereo = _0x4f4437._stereo;

            _0x129b34._pos = _0x4f4437._pos;

            _0x129b34._pannerAttr = _0x4f4437._pannerAttr;

            _0xf1aaeb.call(this);

            if (_0x129b34._stereo) {

              _0x4f4437.stereo(_0x129b34._stereo);

            } else if (_0x129b34._pos) {

              _0x4f4437.pos(_0x129b34._pos[0], _0x129b34._pos[1], _0x129b34._pos[2], _0x129b34._id);

            }

          };

        }(Sound.prototype.init);

        Sound.prototype.reset = function (_0x35535a) {

          return function () {

            var _0x2a2173 = this;

            var _0x28b243 = _0x2a2173._parent;

            _0x2a2173._orientation = _0x28b243._orientation;

            _0x2a2173._stereo = _0x28b243._stereo;

            _0x2a2173._pos = _0x28b243._pos;

            _0x2a2173._pannerAttr = _0x28b243._pannerAttr;

            if (_0x2a2173._stereo) {

              _0x28b243.stereo(_0x2a2173._stereo);

            } else if (_0x2a2173._pos) {

              _0x28b243.pos(_0x2a2173._pos[0], _0x2a2173._pos[1], _0x2a2173._pos[2], _0x2a2173._id);

            } else if (_0x2a2173._panner) {

              _0x2a2173._panner.disconnect(0);

              _0x2a2173._panner = undefined;

              _0x28b243._refreshBuffer(_0x2a2173);

            }

            return _0x35535a.call(this);

          };

        }(Sound.prototype.reset);

        function _0x4ceea6(_0x3583c1, _0x5c3070) {

          _0x5c3070 = _0x5c3070 || "spatial";

          if (_0x5c3070 === "spatial") {

            _0x3583c1._panner = Howler.ctx.createPanner();

            _0x3583c1._panner.coneInnerAngle = _0x3583c1._pannerAttr.coneInnerAngle;

            _0x3583c1._panner.coneOuterAngle = _0x3583c1._pannerAttr.coneOuterAngle;

            _0x3583c1._panner.coneOuterGain = _0x3583c1._pannerAttr.coneOuterGain;

            _0x3583c1._panner.distanceModel = _0x3583c1._pannerAttr.distanceModel;

            _0x3583c1._panner.maxDistance = _0x3583c1._pannerAttr.maxDistance;

            _0x3583c1._panner.refDistance = _0x3583c1._pannerAttr.refDistance;

            _0x3583c1._panner.rolloffFactor = _0x3583c1._pannerAttr.rolloffFactor;

            _0x3583c1._panner.panningModel = _0x3583c1._pannerAttr.panningModel;

            if (typeof _0x3583c1._panner.positionX !== "undefined") {

              _0x3583c1._panner.positionX.setValueAtTime(_0x3583c1._pos[0], Howler.ctx.currentTime);

              _0x3583c1._panner.positionY.setValueAtTime(_0x3583c1._pos[1], Howler.ctx.currentTime);

              _0x3583c1._panner.positionZ.setValueAtTime(_0x3583c1._pos[2], Howler.ctx.currentTime);

            } else {

              _0x3583c1._panner.setPosition(_0x3583c1._pos[0], _0x3583c1._pos[1], _0x3583c1._pos[2]);

            }

            if (typeof _0x3583c1._panner.orientationX !== "undefined") {

              _0x3583c1._panner.orientationX.setValueAtTime(_0x3583c1._orientation[0], Howler.ctx.currentTime);

              _0x3583c1._panner.orientationY.setValueAtTime(_0x3583c1._orientation[1], Howler.ctx.currentTime);

              _0x3583c1._panner.orientationZ.setValueAtTime(_0x3583c1._orientation[2], Howler.ctx.currentTime);

            } else {

              _0x3583c1._panner.setOrientation(_0x3583c1._orientation[0], _0x3583c1._orientation[1], _0x3583c1._orientation[2]);

            }

          } else {

            _0x3583c1._panner = Howler.ctx.createStereoPanner();

            _0x3583c1._panner.pan.setValueAtTime(_0x3583c1._stereo, Howler.ctx.currentTime);

          }

          _0x3583c1._panner.connect(_0x3583c1._node);

          if (!_0x3583c1._paused) {

            _0x3583c1._parent.pause(_0x3583c1._id, true).play(_0x3583c1._id, true);

          }

        }

      })();

    },

    "./node_modules/socket.io-client/build/esm/contrib/backo2.js": (_0xc59b37, _0x3da21e, _0x1d8f4c) => {

      'use strict';



      _0x1d8f4c.r(_0x3da21e);

      _0x1d8f4c.d(_0x3da21e, {

        Backoff: () => _0x5dd613

      });

      function _0x5dd613(_0x2a1f5f) {

        _0x2a1f5f = _0x2a1f5f || {};

        this.ms = _0x2a1f5f.min || 100;

        this.max = _0x2a1f5f.max || 10000;

        this.factor = _0x2a1f5f.factor || 2;

        this.jitter = _0x2a1f5f.jitter > 0 && _0x2a1f5f.jitter <= 1 ? _0x2a1f5f.jitter : 0;

        this.attempts = 0;

      }

      _0x5dd613.prototype.duration = function () {

        var _0x4a0c15 = this.ms * Math.pow(this.factor, this.attempts++);

        if (this.jitter) {

          var _0x55ffd3 = Math.random();

          var _0x3e731a = Math.floor(_0x55ffd3 * this.jitter * _0x4a0c15);

          _0x4a0c15 = (Math.floor(_0x55ffd3 * 10) & 1) == 0 ? _0x4a0c15 - _0x3e731a : _0x4a0c15 + _0x3e731a;

        }

        return Math.min(_0x4a0c15, this.max) | 0;

      };

      _0x5dd613.prototype.reset = function () {

        this.attempts = 0;

      };

      _0x5dd613.prototype.setMin = function (_0x21a9e9) {

        this.ms = _0x21a9e9;

      };

      _0x5dd613.prototype.setMax = function (_0xf15541) {

        this.max = _0xf15541;

      };

      _0x5dd613.prototype.setJitter = function (_0x48ecb8) {

        this.jitter = _0x48ecb8;

      };

    },

    "./node_modules/socket.io-client/build/esm/index.js": (_0x5b3ea0, _0x4261e3, _0x26c95e) => {

      'use strict';



      _0x26c95e.r(_0x4261e3);

      _0x26c95e.d(_0x4261e3, {

        Fetch: () => _0x292418.Fetch,

        Manager: () => _0x9a88.Manager,

        NodeWebSocket: () => _0x292418.NodeWebSocket,

        NodeXHR: () => _0x292418.NodeXHR,

        Socket: () => _0x52f36d.Socket,

        WebSocket: () => _0x292418.WebSocket,

        WebTransport: () => _0x292418.WebTransport,

        XHR: () => _0x292418.XHR,

        connect: () => _0x344f07,

        default: () => _0x344f07,

        io: () => _0x344f07,

        protocol: () => _0x1510ab.protocol

      });

      var _0x38b5b0 = _0x26c95e("./node_modules/socket.io-client/build/esm/url.js");

      var _0x9a88 = _0x26c95e("./node_modules/socket.io-client/build/esm/manager.js");

      var _0x52f36d = _0x26c95e("./node_modules/socket.io-client/build/esm/socket.js");

      var _0x1510ab = _0x26c95e("./node_modules/socket.io-parser/build/esm/index.js");

      var _0x292418 = _0x26c95e("./node_modules/engine.io-client/build/esm/index.js");

      const _0x5f4ba5 = {};

      function _0x344f07(_0x4c39aa, _0x42671b) {

        if (typeof _0x4c39aa === "object") {

          _0x42671b = _0x4c39aa;

          _0x4c39aa = undefined;

        }

        _0x42671b = _0x42671b || {};

        const _0x5a3e26 = (0, _0x38b5b0.url)(_0x4c39aa, _0x42671b.path || "/socket.io");

        const _0x551990 = _0x5a3e26.source;

        const _0x2c8165 = _0x5a3e26.id;

        const _0x53bc24 = _0x5a3e26.path;

        const _0x514b83 = _0x5f4ba5[_0x2c8165] && _0x53bc24 in _0x5f4ba5[_0x2c8165].nsps;

        const _0x42004c = _0x42671b.forceNew || _0x42671b["force new connection"] || _0x42671b.multiplex === false || _0x514b83;

        let _0x4e5927;

        if (_0x42004c) {

          _0x4e5927 = new _0x9a88.Manager(_0x551990, _0x42671b);

        } else {

          if (!_0x5f4ba5[_0x2c8165]) {

            _0x5f4ba5[_0x2c8165] = new _0x9a88.Manager(_0x551990, _0x42671b);

          }

          _0x4e5927 = _0x5f4ba5[_0x2c8165];

        }

        if (_0x5a3e26.query && !_0x42671b.query) {

          _0x42671b.query = _0x5a3e26.queryKey;

        }

        return _0x4e5927.socket(_0x5a3e26.path, _0x42671b);

      }

      Object.assign(_0x344f07, {

        Manager: _0x9a88.Manager,

        Socket: _0x52f36d.Socket,

        io: _0x344f07,

        connect: _0x344f07

      });

    },

    "./node_modules/socket.io-client/build/esm/manager.js": (_0x305d95, _0x8f6b73, _0x5a14ad) => {

      'use strict';



      _0x5a14ad.r(_0x8f6b73);

      _0x5a14ad.d(_0x8f6b73, {

        Manager: () => _0x406da5

      });

      var _0x56d1d6 = _0x5a14ad("./node_modules/engine.io-client/build/esm/index.js");

      var _0x35db6f = _0x5a14ad("./node_modules/socket.io-client/build/esm/socket.js");

      var _0x3be5f0 = _0x5a14ad("./node_modules/socket.io-parser/build/esm/index.js");

      var _0x29f1a1 = _0x5a14ad("./node_modules/socket.io-client/build/esm/on.js");

      var _0x6fc285 = _0x5a14ad("./node_modules/socket.io-client/build/esm/contrib/backo2.js");

      var _0x1b091b = _0x5a14ad("./node_modules/@socket.io/component-emitter/lib/esm/index.js");

      class _0x406da5 extends _0x1b091b.Emitter {

        constructor(_0x2a85ea, _0x2b4063) {

          super();

          this.nsps = {};

          this.subs = [];

          if (_0x2a85ea && typeof _0x2a85ea === "object") {

            _0x2b4063 = _0x2a85ea;

            _0x2a85ea = undefined;

          }

          _0x2b4063 = _0x2b4063 || {};

          _0x2b4063.path = _0x2b4063.path || "/socket.io";

          this.opts = _0x2b4063;

          (0, _0x56d1d6.installTimerFunctions)(this, _0x2b4063);

          this.reconnection(_0x2b4063.reconnection !== false);

          this.reconnectionAttempts(_0x2b4063.reconnectionAttempts || Infinity);

          this.reconnectionDelay(_0x2b4063.reconnectionDelay || 1000);

          this.reconnectionDelayMax(_0x2b4063.reconnectionDelayMax || 5000);

          this.randomizationFactor(_0x2b4063.randomizationFactor ?? 0.5);

          this.backoff = new _0x6fc285.Backoff({

            min: this.reconnectionDelay(),

            max: this.reconnectionDelayMax(),

            jitter: this.randomizationFactor()

          });

          this.timeout(_0x2b4063.timeout == null ? 20000 : _0x2b4063.timeout);

          this._readyState = "closed";

          this.uri = _0x2a85ea;

          const _0x3cec15 = _0x2b4063.parser || _0x3be5f0;

          this.encoder = new _0x3cec15.Encoder();

          this.decoder = new _0x3cec15.Decoder();

          this._autoConnect = _0x2b4063.autoConnect !== false;

          if (this._autoConnect) {

            this.open();

          }

        }

        reconnection(_0x5cafc7) {

          if (!arguments.length) {

            return this._reconnection;

          }

          this._reconnection = !!_0x5cafc7;

          if (!_0x5cafc7) {

            this.skipReconnect = true;

          }

          return this;

        }

        reconnectionAttempts(_0x26bb99) {

          if (_0x26bb99 === undefined) {

            return this._reconnectionAttempts;

          }

          this._reconnectionAttempts = _0x26bb99;

          return this;

        }

        reconnectionDelay(_0x4e8fec) {

          var _0x215799;

          if (_0x4e8fec === undefined) {

            return this._reconnectionDelay;

          }

          this._reconnectionDelay = _0x4e8fec;

          if ((_0x215799 = this.backoff) === null || _0x215799 === undefined) {

            undefined;

          } else {

            _0x215799.setMin(_0x4e8fec);

          }

          return this;

        }

        randomizationFactor(_0x49b181) {

          var _0x1a4ee3;

          if (_0x49b181 === undefined) {

            return this._randomizationFactor;

          }

          this._randomizationFactor = _0x49b181;

          if ((_0x1a4ee3 = this.backoff) === null || _0x1a4ee3 === undefined) {

            undefined;

          } else {

            _0x1a4ee3.setJitter(_0x49b181);

          }

          return this;

        }

        reconnectionDelayMax(_0x56add4) {

          var _0xa33dcf;

          if (_0x56add4 === undefined) {

            return this._reconnectionDelayMax;

          }

          this._reconnectionDelayMax = _0x56add4;

          if ((_0xa33dcf = this.backoff) === null || _0xa33dcf === undefined) {

            undefined;

          } else {

            _0xa33dcf.setMax(_0x56add4);

          }

          return this;

        }

        timeout(_0x1adb65) {

          if (!arguments.length) {

            return this._timeout;

          }

          this._timeout = _0x1adb65;

          return this;

        }

        maybeReconnectOnOpen() {

          if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {

            this.reconnect();

          }

        }

        open(_0x14c12e) {

          if (~this._readyState.indexOf("open")) {

            return this;

          }

          this.engine = new _0x56d1d6.Socket(this.uri, this.opts);

          const _0x5f01ff = this.engine;

          const _0x193f8e = this;

          this._readyState = "opening";

          this.skipReconnect = false;

          const _0x57a6f5 = (0, _0x29f1a1.on)(_0x5f01ff, "open", function () {

            _0x193f8e.onopen();

            if (_0x14c12e) {

              _0x14c12e();

            }

          });

          const _0x2e6c5e = _0x54c1e8 => {

            this.cleanup();

            this._readyState = "closed";

            this.emitReserved("error", _0x54c1e8);

            if (_0x14c12e) {

              _0x14c12e(_0x54c1e8);

            } else {

              this.maybeReconnectOnOpen();

            }

          };

          const _0x5f1c72 = (0, _0x29f1a1.on)(_0x5f01ff, "error", _0x2e6c5e);

          if (this._timeout !== false) {

            const _0x1b1ac0 = this._timeout;

            const _0x287aca = this.setTimeoutFn(() => {

              _0x57a6f5();

              _0x2e6c5e(new Error("timeout"));

              _0x5f01ff.close();

            }, _0x1b1ac0);

            if (this.opts.autoUnref) {

              _0x287aca.unref();

            }

            this.subs.push(() => {

              this.clearTimeoutFn(_0x287aca);

            });

          }

          this.subs.push(_0x57a6f5);

          this.subs.push(_0x5f1c72);

          return this;

        }

        connect(_0x31c5a2) {

          return this.open(_0x31c5a2);

        }

        onopen() {

          this.cleanup();

          this._readyState = "open";

          this.emitReserved("open");

          const _0x218e4b = this.engine;

          this.subs.push((0, _0x29f1a1.on)(_0x218e4b, "ping", this.onping.bind(this)), (0, _0x29f1a1.on)(_0x218e4b, "data", this.ondata.bind(this)), (0, _0x29f1a1.on)(_0x218e4b, "error", this.onerror.bind(this)), (0, _0x29f1a1.on)(_0x218e4b, "close", this.onclose.bind(this)), (0, _0x29f1a1.on)(this.decoder, "decoded", this.ondecoded.bind(this)));

        }

        onping() {

          this.emitReserved("ping");

        }

        ondata(_0x297a58) {

          try {

            this.decoder.add(_0x297a58);

          } catch (_0x5052c9) {

            this.onclose("parse error", _0x5052c9);

          }

        }

        ondecoded(_0x5936e3) {

          (0, _0x56d1d6.nextTick)(() => {

            this.emitReserved("packet", _0x5936e3);

          }, this.setTimeoutFn);

        }

        onerror(_0x2c2eac) {

          this.emitReserved("error", _0x2c2eac);

        }

        socket(_0x53e7a7, _0x37abdd) {

          let _0x585a2d = this.nsps[_0x53e7a7];

          if (!_0x585a2d) {

            _0x585a2d = new _0x35db6f.Socket(this, _0x53e7a7, _0x37abdd);

            this.nsps[_0x53e7a7] = _0x585a2d;

          } else if (this._autoConnect && !_0x585a2d.active) {

            _0x585a2d.connect();

          }

          return _0x585a2d;

        }

        _destroy(_0x532b6f) {

          const _0x4ac566 = Object.keys(this.nsps);

          for (const _0x404aa9 of _0x4ac566) {

            const _0xee615d = this.nsps[_0x404aa9];

            if (_0xee615d.active) {

              return;

            }

          }

          this._close();

        }

        _packet(_0x129313) {

          const _0x57cd7b = this.encoder.encode(_0x129313);

          for (let _0x3d4070 = 0; _0x3d4070 < _0x57cd7b.length; _0x3d4070++) {

            this.engine.write(_0x57cd7b[_0x3d4070], _0x129313.options);

          }

        }

        cleanup() {

          this.subs.forEach(_0x5cc370 => _0x5cc370());

          this.subs.length = 0;

          this.decoder.destroy();

        }

        _close() {

          this.skipReconnect = true;

          this._reconnecting = false;

          this.onclose("forced close");

        }

        disconnect() {

          return this._close();

        }

        onclose(_0x454548, _0x283cba) {

          var _0x55dd84;

          this.cleanup();

          if ((_0x55dd84 = this.engine) === null || _0x55dd84 === undefined) {

            undefined;

          } else {

            _0x55dd84.close();

          }

          this.backoff.reset();

          this._readyState = "closed";

          this.emitReserved("close", _0x454548, _0x283cba);

          if (this._reconnection && !this.skipReconnect) {

            this.reconnect();

          }

        }

        reconnect() {

          if (this._reconnecting || this.skipReconnect) {

            return this;

          }

          const _0x1eaa7d = this;

          if (this.backoff.attempts >= this._reconnectionAttempts) {

            this.backoff.reset();

            this.emitReserved("reconnect_failed");

            this._reconnecting = false;

          } else {

            const _0x29f85a = this.backoff.duration();

            this._reconnecting = true;

            const _0x1fc6ae = this.setTimeoutFn(() => {

              if (_0x1eaa7d.skipReconnect) {

                return;

              }

              this.emitReserved("reconnect_attempt", _0x1eaa7d.backoff.attempts);

              if (_0x1eaa7d.skipReconnect) {

                return;

              }

              _0x1eaa7d.open(_0x5ca623 => {

                if (_0x5ca623) {

                  _0x1eaa7d._reconnecting = false;

                  _0x1eaa7d.reconnect();

                  this.emitReserved("reconnect_error", _0x5ca623);

                } else {

                  _0x1eaa7d.onreconnect();

                }

              });

            }, _0x29f85a);

            if (this.opts.autoUnref) {

              _0x1fc6ae.unref();

            }

            this.subs.push(() => {

              this.clearTimeoutFn(_0x1fc6ae);

            });

          }

        }

        onreconnect() {

          const _0x32fba2 = this.backoff.attempts;

          this._reconnecting = false;

          this.backoff.reset();

          this.emitReserved("reconnect", _0x32fba2);

        }

      }

    },

    "./node_modules/socket.io-client/build/esm/on.js": (_0x5e830e, _0x392df1, _0x1a167a) => {

      'use strict';



      _0x1a167a.r(_0x392df1);

      _0x1a167a.d(_0x392df1, {

        on: () => _0x1b0811

      });

      function _0x1b0811(_0x5dd79d, _0x1731a7, _0x51f55f) {

        _0x5dd79d.on(_0x1731a7, _0x51f55f);

        return function _0xdc9ed5() {

          _0x5dd79d.off(_0x1731a7, _0x51f55f);

        };

      }

    },

    "./node_modules/socket.io-client/build/esm/socket.js": (_0x2aa166, _0x2ab4fd, _0x1e5e75) => {

      'use strict';



      _0x1e5e75.r(_0x2ab4fd);

      _0x1e5e75.d(_0x2ab4fd, {

        Socket: () => _0x376ebd

      });

      var _0x3abb68 = _0x1e5e75("./node_modules/socket.io-parser/build/esm/index.js");

      var _0x5f3689 = _0x1e5e75("./node_modules/socket.io-client/build/esm/on.js");

      var _0x28ed5a = _0x1e5e75("./node_modules/@socket.io/component-emitter/lib/esm/index.js");

      const _0x3ac9e0 = Object.freeze({

        connect: 1,

        connect_error: 1,

        disconnect: 1,

        disconnecting: 1,

        newListener: 1,

        removeListener: 1

      });

      class _0x376ebd extends _0x28ed5a.Emitter {

        constructor(_0x32c296, _0x5ede29, _0x481b04) {

          super();

          this.connected = false;

          this.recovered = false;

          this.receiveBuffer = [];

          this.sendBuffer = [];

          this._queue = [];

          this._queueSeq = 0;

          this.ids = 0;

          this.acks = {};

          this.flags = {};

          this.io = _0x32c296;

          this.nsp = _0x5ede29;

          if (_0x481b04 && _0x481b04.auth) {

            this.auth = _0x481b04.auth;

          }

          this._opts = Object.assign({}, _0x481b04);

          if (this.io._autoConnect) {

            this.open();

          }

        }

        get disconnected() {

          return !this.connected;

        }

        subEvents() {

          if (this.subs) {

            return;

          }

          const _0x3c3234 = this.io;

          this.subs = [(0, _0x5f3689.on)(_0x3c3234, "open", this.onopen.bind(this)), (0, _0x5f3689.on)(_0x3c3234, "packet", this.onpacket.bind(this)), (0, _0x5f3689.on)(_0x3c3234, "error", this.onerror.bind(this)), (0, _0x5f3689.on)(_0x3c3234, "close", this.onclose.bind(this))];

        }

        get active() {

          return !!this.subs;

        }

        connect() {

          if (this.connected) {

            return this;

          }

          this.subEvents();

          if (!this.io._reconnecting) {

            this.io.open();

          }

          if (this.io._readyState === "open") {

            this.onopen();

          }

          return this;

        }

        open() {

          return this.connect();

        }

        send(..._0x4a6dd1) {

          _0x4a6dd1.unshift("message");

          this.emit.apply(this, _0x4a6dd1);

          return this;

        }

        emit(_0x292da8, ..._0x3891cd) {

          var _0x15ed35;

          if (_0x3ac9e0.hasOwnProperty(_0x292da8)) {

            throw new Error("\"" + _0x292da8.toString() + "\" is a reserved event name");

          }

          _0x3891cd.unshift(_0x292da8);

          if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {

            this._addToQueue(_0x3891cd);

            return this;

          }

          const _0x5817b4 = {

            type: _0x3abb68.PacketType.EVENT,

            data: _0x3891cd

          };

          _0x5817b4.options = {};

          _0x5817b4.options.compress = this.flags.compress !== false;

          if (typeof _0x3891cd[_0x3891cd.length - 1] === "function") {

            const _0x32cfd7 = this.ids++;

            const _0x4d0129 = _0x3891cd.pop();

            this._registerAckCallback(_0x32cfd7, _0x4d0129);

            _0x5817b4.id = _0x32cfd7;

          }

          const _0x142bd3 = this.io.engine?.transport?.writable;

          const _0x505d3b = this.connected && !((_0x15ed35 = this.io.engine) === null || _0x15ed35 === undefined ? undefined : _0x15ed35._hasPingExpired());

          const _0x3e348e = this.flags.volatile && !_0x142bd3;

          if (_0x3e348e) {} else if (_0x505d3b) {

            this.notifyOutgoingListeners(_0x5817b4);

            this.packet(_0x5817b4);

          } else {

            this.sendBuffer.push(_0x5817b4);

          }

          this.flags = {};

          return this;

        }

        _registerAckCallback(_0x465d3d, _0x2b58f1) {

          const _0x4e9776 = this.flags.timeout ?? this._opts.ackTimeout;

          if (_0x4e9776 === undefined) {

            this.acks[_0x465d3d] = _0x2b58f1;

            return;

          }

          const _0x22f88b = this.io.setTimeoutFn(() => {

            delete this.acks[_0x465d3d];

            for (let _0x137938 = 0; _0x137938 < this.sendBuffer.length; _0x137938++) {

              if (this.sendBuffer[_0x137938].id === _0x465d3d) {

                this.sendBuffer.splice(_0x137938, 1);

              }

            }

            _0x2b58f1.call(this, new Error("operation has timed out"));

          }, _0x4e9776);

          const _0x239099 = (..._0x545d2e) => {

            this.io.clearTimeoutFn(_0x22f88b);

            _0x2b58f1.apply(this, _0x545d2e);

          };

          _0x239099.withError = true;

          this.acks[_0x465d3d] = _0x239099;

        }

        emitWithAck(_0x5bb08a, ..._0x2e95e6) {

          return new Promise((_0x1d512e, _0x1a8275) => {

            const _0x3cd9e0 = (_0x37da67, _0xf30306) => {

              if (_0x37da67) {

                return _0x1a8275(_0x37da67);

              } else {

                return _0x1d512e(_0xf30306);

              }

            };

            _0x3cd9e0.withError = true;

            _0x2e95e6.push(_0x3cd9e0);

            this.emit(_0x5bb08a, ..._0x2e95e6);

          });

        }

        _addToQueue(_0x276810) {

          let _0x52b5f9;

          if (typeof _0x276810[_0x276810.length - 1] === "function") {

            _0x52b5f9 = _0x276810.pop();

          }

          const _0x380b15 = {

            id: this._queueSeq++,

            tryCount: 0,

            pending: false,

            args: _0x276810,

            flags: Object.assign({

              fromQueue: true

            }, this.flags)

          };

          _0x276810.push((_0x36e4f3, ..._0x307c2e) => {

            if (_0x380b15 !== this._queue[0]) {

              return;

            }

            const _0x5c103a = _0x36e4f3 !== null;

            if (_0x5c103a) {

              if (_0x380b15.tryCount > this._opts.retries) {

                this._queue.shift();

                if (_0x52b5f9) {

                  _0x52b5f9(_0x36e4f3);

                }

              }

            } else {

              this._queue.shift();

              if (_0x52b5f9) {

                _0x52b5f9(null, ..._0x307c2e);

              }

            }

            _0x380b15.pending = false;

            return this._drainQueue();

          });

          this._queue.push(_0x380b15);

          this._drainQueue();

        }

        _drainQueue(_0x524f55 = false) {

          if (!this.connected || this._queue.length === 0) {

            return;

          }

          const _0x423bba = this._queue[0];

          if (_0x423bba.pending && !_0x524f55) {

            return;

          }

          _0x423bba.pending = true;

          _0x423bba.tryCount++;

          this.flags = _0x423bba.flags;

          this.emit.apply(this, _0x423bba.args);

        }

        packet(_0x5a049e) {

          _0x5a049e.nsp = this.nsp;

          this.io._packet(_0x5a049e);

        }

        onopen() {

          if (typeof this.auth == "function") {

            this.auth(_0x1e4101 => {

              this._sendConnectPacket(_0x1e4101);

            });

          } else {

            this._sendConnectPacket(this.auth);

          }

        }

        _sendConnectPacket(_0x5710ea) {

          this.packet({

            type: _0x3abb68.PacketType.CONNECT,

            data: this._pid ? Object.assign({

              pid: this._pid,

              offset: this._lastOffset

            }, _0x5710ea) : _0x5710ea

          });

        }

        onerror(_0x42dd2d) {

          if (!this.connected) {

            this.emitReserved("connect_error", _0x42dd2d);

          }

        }

        onclose(_0x3cf0b4, _0x593aec) {

          this.connected = false;

          delete this.id;

          this.emitReserved("disconnect", _0x3cf0b4, _0x593aec);

          this._clearAcks();

        }

        _clearAcks() {

          Object.keys(this.acks).forEach(_0x150ec7 => {

            const _0x24775b = this.sendBuffer.some(_0x38b90d => String(_0x38b90d.id) === _0x150ec7);

            if (!_0x24775b) {

              const _0x2e6e14 = this.acks[_0x150ec7];

              delete this.acks[_0x150ec7];

              if (_0x2e6e14.withError) {

                _0x2e6e14.call(this, new Error("socket has been disconnected"));

              }

            }

          });

        }

        onpacket(_0x1be42f) {

          const _0x2a7582 = _0x1be42f.nsp === this.nsp;

          if (!_0x2a7582) {

            return;

          }

          switch (_0x1be42f.type) {

            case _0x3abb68.PacketType.CONNECT:

              if (_0x1be42f.data && _0x1be42f.data.sid) {

                this.onconnect(_0x1be42f.data.sid, _0x1be42f.data.pid);

              } else {

                this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));

              }

              break;

            case _0x3abb68.PacketType.EVENT:

            case _0x3abb68.PacketType.BINARY_EVENT:

              this.onevent(_0x1be42f);

              break;

            case _0x3abb68.PacketType.ACK:

            case _0x3abb68.PacketType.BINARY_ACK:

              this.onack(_0x1be42f);

              break;

            case _0x3abb68.PacketType.DISCONNECT:

              this.ondisconnect();

              break;

            case _0x3abb68.PacketType.CONNECT_ERROR:

              this.destroy();

              const _0x2e4457 = new Error(_0x1be42f.data.message);

              _0x2e4457.data = _0x1be42f.data.data;

              this.emitReserved("connect_error", _0x2e4457);

              break;

          }

        }

        onevent(_0x1921b2) {

          const _0xc7dc39 = _0x1921b2.data || [];

          if (_0x1921b2.id != null) {

            _0xc7dc39.push(this.ack(_0x1921b2.id));

          }

          if (this.connected) {

            this.emitEvent(_0xc7dc39);

          } else {

            this.receiveBuffer.push(Object.freeze(_0xc7dc39));

          }

        }

        emitEvent(_0x54b640) {

          if (this._anyListeners && this._anyListeners.length) {

            const _0x30b117 = this._anyListeners.slice();

            for (const _0x528b6f of _0x30b117) {

              _0x528b6f.apply(this, _0x54b640);

            }

          }

          super.emit.apply(this, _0x54b640);

          if (this._pid && _0x54b640.length && typeof _0x54b640[_0x54b640.length - 1] === "string") {

            this._lastOffset = _0x54b640[_0x54b640.length - 1];

          }

        }

        ack(_0x551960) {

          const _0x152cb0 = this;

          let _0x48c8c5 = false;

          return function (..._0x533fb7) {

            if (_0x48c8c5) {

              return;

            }

            _0x48c8c5 = true;

            _0x152cb0.packet({

              type: _0x3abb68.PacketType.ACK,

              id: _0x551960,

              data: _0x533fb7

            });

          };

        }

        onack(_0x563281) {

          const _0x2ac751 = this.acks[_0x563281.id];

          if (typeof _0x2ac751 !== "function") {

            return;

          }

          delete this.acks[_0x563281.id];

          if (_0x2ac751.withError) {

            _0x563281.data.unshift(null);

          }

          _0x2ac751.apply(this, _0x563281.data);

        }

        onconnect(_0x402eee, _0x5837ef) {

          this.id = _0x402eee;

          this.recovered = _0x5837ef && this._pid === _0x5837ef;

          this._pid = _0x5837ef;

          this.connected = true;

          this.emitBuffered();

          this.emitReserved("connect");

          this._drainQueue(true);

        }

        emitBuffered() {

          this.receiveBuffer.forEach(_0x44c061 => this.emitEvent(_0x44c061));

          this.receiveBuffer = [];

          this.sendBuffer.forEach(_0x452b0c => {

            this.notifyOutgoingListeners(_0x452b0c);

            this.packet(_0x452b0c);

          });

          this.sendBuffer = [];

        }

        ondisconnect() {

          this.destroy();

          this.onclose("io server disconnect");

        }

        destroy() {

          if (this.subs) {

            this.subs.forEach(_0x13d74d => _0x13d74d());

            this.subs = undefined;

          }

          this.io._destroy(this);

        }

        disconnect() {

          if (this.connected) {

            this.packet({

              type: _0x3abb68.PacketType.DISCONNECT

            });

          }

          this.destroy();

          if (this.connected) {

            this.onclose("io client disconnect");

          }

          return this;

        }

        close() {

          return this.disconnect();

        }

        compress(_0x3dc88c) {

          this.flags.compress = _0x3dc88c;

          return this;

        }

        get volatile() {

          this.flags.volatile = true;

          return this;

        }

        timeout(_0x1a98f0) {

          this.flags.timeout = _0x1a98f0;

          return this;

        }

        onAny(_0x4a04b1) {

          this._anyListeners = this._anyListeners || [];

          this._anyListeners.push(_0x4a04b1);

          return this;

        }

        prependAny(_0x1058fb) {

          this._anyListeners = this._anyListeners || [];

          this._anyListeners.unshift(_0x1058fb);

          return this;

        }

        offAny(_0x328b2d) {

          if (!this._anyListeners) {

            return this;

          }

          if (_0x328b2d) {

            const _0x5c441d = this._anyListeners;

            for (let _0x1de9c6 = 0; _0x1de9c6 < _0x5c441d.length; _0x1de9c6++) {

              if (_0x328b2d === _0x5c441d[_0x1de9c6]) {

                _0x5c441d.splice(_0x1de9c6, 1);

                return this;

              }

            }

          } else {

            this._anyListeners = [];

          }

          return this;

        }

        listenersAny() {

          return this._anyListeners || [];

        }

        onAnyOutgoing(_0x3abf87) {

          this._anyOutgoingListeners = this._anyOutgoingListeners || [];

          this._anyOutgoingListeners.push(_0x3abf87);

          return this;

        }

        prependAnyOutgoing(_0x51307a) {

          this._anyOutgoingListeners = this._anyOutgoingListeners || [];

          this._anyOutgoingListeners.unshift(_0x51307a);

          return this;

        }

        offAnyOutgoing(_0x36f7d8) {

          if (!this._anyOutgoingListeners) {

            return this;

          }

          if (_0x36f7d8) {

            const _0x5e17ca = this._anyOutgoingListeners;

            for (let _0x42bee6 = 0; _0x42bee6 < _0x5e17ca.length; _0x42bee6++) {

              if (_0x36f7d8 === _0x5e17ca[_0x42bee6]) {

                _0x5e17ca.splice(_0x42bee6, 1);

                return this;

              }

            }

          } else {

            this._anyOutgoingListeners = [];

          }

          return this;

        }

        listenersAnyOutgoing() {

          return this._anyOutgoingListeners || [];

        }

        notifyOutgoingListeners(_0x1af0b9) {

          if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {

            const _0x4e1da1 = this._anyOutgoingListeners.slice();

            for (const _0x1b7ed9 of _0x4e1da1) {

              _0x1b7ed9.apply(this, _0x1af0b9.data);

            }

          }

        }

      }

    },

    "./node_modules/socket.io-client/build/esm/url.js": (_0x205a13, _0x44a92e, _0x112460) => {

      'use strict';



      _0x112460.r(_0x44a92e);

      _0x112460.d(_0x44a92e, {

        url: () => _0x46c015

      });

      var _0x9594ad = _0x112460("./node_modules/engine.io-client/build/esm/index.js");

      function _0x46c015(_0x22dd41, _0x2a8e0f = "", _0x279648) {

        let _0x157fcb = _0x22dd41;

        _0x279648 = _0x279648 || typeof location !== "undefined" && location;

        if (_0x22dd41 == null) {

          _0x22dd41 = _0x279648.protocol + "//" + _0x279648.host;

        }

        if (typeof _0x22dd41 === "string") {

          if (_0x22dd41.charAt(0) === "/") {

            if (_0x22dd41.charAt(1) === "/") {

              _0x22dd41 = _0x279648.protocol + _0x22dd41;

            } else {

              _0x22dd41 = _0x279648.host + _0x22dd41;

            }

          }

          if (!/^(https?|wss?):\/\//.test(_0x22dd41)) {

            if (typeof _0x279648 !== "undefined") {

              _0x22dd41 = _0x279648.protocol + "//" + _0x22dd41;

            } else {

              _0x22dd41 = "https://" + _0x22dd41;

            }

          }

          _0x157fcb = (0, _0x9594ad.parse)(_0x22dd41);

        }

        if (!_0x157fcb.port) {

          if (/^(http|ws)$/.test(_0x157fcb.protocol)) {

            _0x157fcb.port = "80";

          } else if (/^(http|ws)s$/.test(_0x157fcb.protocol)) {

            _0x157fcb.port = "443";

          }

        }

        _0x157fcb.path = _0x157fcb.path || "/";

        const _0x5f5cb1 = _0x157fcb.host.indexOf(":") !== -1;

        const _0x2342b1 = _0x5f5cb1 ? "[" + _0x157fcb.host + "]" : _0x157fcb.host;

        _0x157fcb.id = _0x157fcb.protocol + "://" + _0x2342b1 + ":" + _0x157fcb.port + _0x2a8e0f;

        _0x157fcb.href = _0x157fcb.protocol + "://" + _0x2342b1 + (_0x279648 && _0x279648.port === _0x157fcb.port ? "" : ":" + _0x157fcb.port);

        return _0x157fcb;

      }

    },

    "./node_modules/socket.io-parser/build/esm/binary.js": (_0x5a3262, _0x263c6c, _0x20529d) => {

      'use strict';



      _0x20529d.r(_0x263c6c);

      _0x20529d.d(_0x263c6c, {

        deconstructPacket: () => _0x2d31c8,

        reconstructPacket: () => _0x5a4331

      });

      var _0x5f3c8d = _0x20529d("./node_modules/socket.io-parser/build/esm/is-binary.js");

      function _0x2d31c8(_0x341b62) {

        const _0x94a40d = [];

        const _0x3bf8fc = _0x341b62.data;

        const _0x44c063 = _0x341b62;

        _0x44c063.data = _0x3160ed(_0x3bf8fc, _0x94a40d);

        _0x44c063.attachments = _0x94a40d.length;

        return {

          packet: _0x44c063,

          buffers: _0x94a40d

        };

      }

      function _0x3160ed(_0x516f18, _0x848f15) {

        if (!_0x516f18) {

          return _0x516f18;

        }

        if ((0, _0x5f3c8d.isBinary)(_0x516f18)) {

          const _0x3175cb = {

            _placeholder: true,

            num: _0x848f15.length

          };

          _0x848f15.push(_0x516f18);

          return _0x3175cb;

        } else if (Array.isArray(_0x516f18)) {

          const _0x48f40c = new Array(_0x516f18.length);

          for (let _0xa9cee7 = 0; _0xa9cee7 < _0x516f18.length; _0xa9cee7++) {

            _0x48f40c[_0xa9cee7] = _0x3160ed(_0x516f18[_0xa9cee7], _0x848f15);

          }

          return _0x48f40c;

        } else if (typeof _0x516f18 === "object" && !(_0x516f18 instanceof Date)) {

          const _0x358358 = {};

          for (const _0x57af22 in _0x516f18) {

            if (Object.prototype.hasOwnProperty.call(_0x516f18, _0x57af22)) {

              _0x358358[_0x57af22] = _0x3160ed(_0x516f18[_0x57af22], _0x848f15);

            }

          }

          return _0x358358;

        }

        return _0x516f18;

      }

      function _0x5a4331(_0x3d1201, _0x4d4fa1) {

        _0x3d1201.data = _0x184d25(_0x3d1201.data, _0x4d4fa1);

        delete _0x3d1201.attachments;

        return _0x3d1201;

      }

      function _0x184d25(_0x1745f5, _0x1bc45e) {

        if (!_0x1745f5) {

          return _0x1745f5;

        }

        if (_0x1745f5 && _0x1745f5._placeholder === true) {

          const _0x5bf4e5 = typeof _0x1745f5.num === "number" && _0x1745f5.num >= 0 && _0x1745f5.num < _0x1bc45e.length;

          if (_0x5bf4e5) {

            return _0x1bc45e[_0x1745f5.num];

          } else {

            throw new Error("illegal attachments");

          }

        } else if (Array.isArray(_0x1745f5)) {

          for (let _0x907317 = 0; _0x907317 < _0x1745f5.length; _0x907317++) {

            _0x1745f5[_0x907317] = _0x184d25(_0x1745f5[_0x907317], _0x1bc45e);

          }

        } else if (typeof _0x1745f5 === "object") {

          for (const _0x5636b2 in _0x1745f5) {

            if (Object.prototype.hasOwnProperty.call(_0x1745f5, _0x5636b2)) {

              _0x1745f5[_0x5636b2] = _0x184d25(_0x1745f5[_0x5636b2], _0x1bc45e);

            }

          }

        }

        return _0x1745f5;

      }

    },

    "./node_modules/socket.io-parser/build/esm/index.js": (_0x3008ae, _0x32301d, _0x5bc101) => {

      'use strict';



      _0x5bc101.r(_0x32301d);

      _0x5bc101.d(_0x32301d, {

        Decoder: () => _0x5d64da,

        Encoder: () => _0xae9d68,

        PacketType: () => _0x3651cf,

        protocol: () => _0x3bf281

      });

      var _0x31ee3c = _0x5bc101("./node_modules/@socket.io/component-emitter/lib/esm/index.js");

      var _0x1336b8 = _0x5bc101("./node_modules/socket.io-parser/build/esm/binary.js");

      var _0x2edcbe = _0x5bc101("./node_modules/socket.io-parser/build/esm/is-binary.js");

      const _0x5348f5 = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];

      const _0x3bf281 = 5;

      var _0x3651cf;

      (function (_0x29950f) {

        _0x29950f[_0x29950f.CONNECT = 0] = "CONNECT";

        _0x29950f[_0x29950f.DISCONNECT = 1] = "DISCONNECT";

        _0x29950f[_0x29950f.EVENT = 2] = "EVENT";

        _0x29950f[_0x29950f.ACK = 3] = "ACK";

        _0x29950f[_0x29950f.CONNECT_ERROR = 4] = "CONNECT_ERROR";

        _0x29950f[_0x29950f.BINARY_EVENT = 5] = "BINARY_EVENT";

        _0x29950f[_0x29950f.BINARY_ACK = 6] = "BINARY_ACK";

      })(_0x3651cf ||= {});

      class _0xae9d68 {

        constructor(_0x5229ca) {

          this.replacer = _0x5229ca;

        }

        encode(_0xe350b6) {

          if (_0xe350b6.type === _0x3651cf.EVENT || _0xe350b6.type === _0x3651cf.ACK) {

            if ((0, _0x2edcbe.hasBinary)(_0xe350b6)) {

              return this.encodeAsBinary({

                type: _0xe350b6.type === _0x3651cf.EVENT ? _0x3651cf.BINARY_EVENT : _0x3651cf.BINARY_ACK,

                nsp: _0xe350b6.nsp,

                data: _0xe350b6.data,

                id: _0xe350b6.id

              });

            }

          }

          return [this.encodeAsString(_0xe350b6)];

        }

        encodeAsString(_0x4c0c47) {

          let _0x93d8c = "" + _0x4c0c47.type;

          if (_0x4c0c47.type === _0x3651cf.BINARY_EVENT || _0x4c0c47.type === _0x3651cf.BINARY_ACK) {

            _0x93d8c += _0x4c0c47.attachments + "-";

          }

          if (_0x4c0c47.nsp && _0x4c0c47.nsp !== "/") {

            _0x93d8c += _0x4c0c47.nsp + ",";

          }

          if (_0x4c0c47.id != null) {

            _0x93d8c += _0x4c0c47.id;

          }

          if (_0x4c0c47.data != null) {

            _0x93d8c += JSON.stringify(_0x4c0c47.data, this.replacer);

          }

          return _0x93d8c;

        }

        encodeAsBinary(_0x508857) {

          const _0x2d296b = (0, _0x1336b8.deconstructPacket)(_0x508857);

          const _0x17c90a = this.encodeAsString(_0x2d296b.packet);

          const _0x25a0f5 = _0x2d296b.buffers;

          _0x25a0f5.unshift(_0x17c90a);

          return _0x25a0f5;

        }

      }

      function _0x2c0c91(_0x571a29) {

        return Object.prototype.toString.call(_0x571a29) === "[object Object]";

      }

      class _0x5d64da extends _0x31ee3c.Emitter {

        constructor(_0x15ae88) {

          super();

          this.reviver = _0x15ae88;

        }

        add(_0x4ca917) {

          let _0x5aeac2;

          if (typeof _0x4ca917 === "string") {

            if (this.reconstructor) {

              throw new Error("got plaintext data when reconstructing a packet");

            }

            _0x5aeac2 = this.decodeString(_0x4ca917);

            const _0xd6ab73 = _0x5aeac2.type === _0x3651cf.BINARY_EVENT;

            if (_0xd6ab73 || _0x5aeac2.type === _0x3651cf.BINARY_ACK) {

              _0x5aeac2.type = _0xd6ab73 ? _0x3651cf.EVENT : _0x3651cf.ACK;

              this.reconstructor = new _0x5300ed(_0x5aeac2);

              if (_0x5aeac2.attachments === 0) {

                super.emitReserved("decoded", _0x5aeac2);

              }

            } else {

              super.emitReserved("decoded", _0x5aeac2);

            }

          } else if ((0, _0x2edcbe.isBinary)(_0x4ca917) || _0x4ca917.base64) {

            if (!this.reconstructor) {

              throw new Error("got binary data when not reconstructing a packet");

            } else {

              _0x5aeac2 = this.reconstructor.takeBinaryData(_0x4ca917);

              if (_0x5aeac2) {

                this.reconstructor = null;

                super.emitReserved("decoded", _0x5aeac2);

              }

            }

          } else {

            throw new Error("Unknown type: " + _0x4ca917);

          }

        }

        decodeString(_0x4be6bf) {

          let _0x3ba913 = 0;

          const _0x12d7ae = {

            type: Number(_0x4be6bf.charAt(0))

          };

          if (_0x3651cf[_0x12d7ae.type] === undefined) {

            throw new Error("unknown packet type " + _0x12d7ae.type);

          }

          if (_0x12d7ae.type === _0x3651cf.BINARY_EVENT || _0x12d7ae.type === _0x3651cf.BINARY_ACK) {

            const _0x41ee54 = _0x3ba913 + 1;

            while (_0x4be6bf.charAt(++_0x3ba913) !== "-" && _0x3ba913 != _0x4be6bf.length) {}

            const _0x126289 = _0x4be6bf.substring(_0x41ee54, _0x3ba913);

            if (_0x126289 != Number(_0x126289) || _0x4be6bf.charAt(_0x3ba913) !== "-") {

              throw new Error("Illegal attachments");

            }

            _0x12d7ae.attachments = Number(_0x126289);

          }

          if (_0x4be6bf.charAt(_0x3ba913 + 1) === "/") {

            const _0x219f89 = _0x3ba913 + 1;

            while (++_0x3ba913) {

              const _0x5bc94e = _0x4be6bf.charAt(_0x3ba913);

              if (_0x5bc94e === ",") {

                break;

              }

              if (_0x3ba913 === _0x4be6bf.length) {

                break;

              }

            }

            _0x12d7ae.nsp = _0x4be6bf.substring(_0x219f89, _0x3ba913);

          } else {

            _0x12d7ae.nsp = "/";

          }

          const _0x25d049 = _0x4be6bf.charAt(_0x3ba913 + 1);

          if (_0x25d049 !== "" && Number(_0x25d049) == _0x25d049) {

            const _0x44bfd7 = _0x3ba913 + 1;

            while (++_0x3ba913) {

              const _0x525ac6 = _0x4be6bf.charAt(_0x3ba913);

              if (_0x525ac6 == null || Number(_0x525ac6) != _0x525ac6) {

                --_0x3ba913;

                break;

              }

              if (_0x3ba913 === _0x4be6bf.length) {

                break;

              }

            }

            _0x12d7ae.id = Number(_0x4be6bf.substring(_0x44bfd7, _0x3ba913 + 1));

          }

          if (_0x4be6bf.charAt(++_0x3ba913)) {

            const _0x22e987 = this.tryParse(_0x4be6bf.substr(_0x3ba913));

            if (_0x5d64da.isPayloadValid(_0x12d7ae.type, _0x22e987)) {

              _0x12d7ae.data = _0x22e987;

            } else {

              throw new Error("invalid payload");

            }

          }

          return _0x12d7ae;

        }

        tryParse(_0xac2b8b) {

          try {

            return JSON.parse(_0xac2b8b, this.reviver);

          } catch (_0x4ec127) {

            return false;

          }

        }

        static isPayloadValid(_0x34b743, _0x8b88d3) {

          switch (_0x34b743) {

            case _0x3651cf.CONNECT:

              return _0x2c0c91(_0x8b88d3);

            case _0x3651cf.DISCONNECT:

              return _0x8b88d3 === undefined;

            case _0x3651cf.CONNECT_ERROR:

              return typeof _0x8b88d3 === "string" || _0x2c0c91(_0x8b88d3);

            case _0x3651cf.EVENT:

            case _0x3651cf.BINARY_EVENT:

              return Array.isArray(_0x8b88d3) && (typeof _0x8b88d3[0] === "number" || typeof _0x8b88d3[0] === "string" && _0x5348f5.indexOf(_0x8b88d3[0]) === -1);

            case _0x3651cf.ACK:

            case _0x3651cf.BINARY_ACK:

              return Array.isArray(_0x8b88d3);

          }

        }

        destroy() {

          if (this.reconstructor) {

            this.reconstructor.finishedReconstruction();

            this.reconstructor = null;

          }

        }

      }

      class _0x5300ed {

        constructor(_0x4099eb) {

          this.packet = _0x4099eb;

          this.buffers = [];

          this.reconPack = _0x4099eb;

        }

        takeBinaryData(_0x5d0a88) {

          this.buffers.push(_0x5d0a88);

          if (this.buffers.length === this.reconPack.attachments) {

            const _0x17d821 = (0, _0x1336b8.reconstructPacket)(this.reconPack, this.buffers);

            this.finishedReconstruction();

            return _0x17d821;

          }

          return null;

        }

        finishedReconstruction() {

          this.reconPack = null;

          this.buffers = [];

        }

      }

    },

    "./node_modules/socket.io-parser/build/esm/is-binary.js": (_0x41886c, _0x43b902, _0x109ac1) => {

      'use strict';



      _0x109ac1.r(_0x43b902);

      _0x109ac1.d(_0x43b902, {

        hasBinary: () => _0x5b7f8e,

        isBinary: () => _0x5ae815

      });

      const _0x3fc4f7 = typeof ArrayBuffer === "function";

      const _0x57e897 = _0x151f0b => {

        if (typeof ArrayBuffer.isView === "function") {

          return ArrayBuffer.isView(_0x151f0b);

        } else {

          return _0x151f0b.buffer instanceof ArrayBuffer;

        }

      };

      const _0x1d85f8 = Object.prototype.toString;

      const _0x131b7e = typeof Blob === "function" || typeof Blob !== "undefined" && _0x1d85f8.call(Blob) === "[object BlobConstructor]";

      const _0x346b5c = typeof File === "function" || typeof File !== "undefined" && _0x1d85f8.call(File) === "[object FileConstructor]";

      function _0x5ae815(_0x121014) {

        return _0x3fc4f7 && (_0x121014 instanceof ArrayBuffer || _0x57e897(_0x121014)) || _0x131b7e && _0x121014 instanceof Blob || _0x346b5c && _0x121014 instanceof File;

      }

      function _0x5b7f8e(_0xeb45e8, _0x3780e7) {

        if (!_0xeb45e8 || typeof _0xeb45e8 !== "object") {

          return false;

        }

        if (Array.isArray(_0xeb45e8)) {

          for (let _0xcbb716 = 0, _0x5ce44a = _0xeb45e8.length; _0xcbb716 < _0x5ce44a; _0xcbb716++) {

            if (_0x5b7f8e(_0xeb45e8[_0xcbb716])) {

              return true;

            }

          }

          return false;

        }

        if (_0x5ae815(_0xeb45e8)) {

          return true;

        }

        if (_0xeb45e8.toJSON && typeof _0xeb45e8.toJSON === "function" && arguments.length === 1) {

          return _0x5b7f8e(_0xeb45e8.toJSON(), true);

        }

        for (const _0x164271 in _0xeb45e8) {

          if (Object.prototype.hasOwnProperty.call(_0xeb45e8, _0x164271) && _0x5b7f8e(_0xeb45e8[_0x164271])) {

            return true;

          }

        }

        return false;

      }

    },

    "./src/temp.js": (_0x4fd33d, _0x438008, _0x540829) => {

      'use strict';



      _0x540829.r(_0x438008);

      var _0x5a6428 = _0x540829("./node_modules/howler/dist/howler.js");

      var _0x1917b5 = _0x540829.n(_0x5a6428);

      var _0x3265ad = _0x540829("./node_modules/socket.io-client/build/esm/index.js");

      _0x4fd33d = _0x540829.hmd(_0x4fd33d);

      function _0xafbee0(_0x10b520, _0x5299da) {

        if (!(_0x10b520 instanceof _0x5299da)) {

          throw new TypeError("Cannot call a class as a function");

        }

      }

      function _0x53eaa9(_0xdd603f, _0x500176) {

        for (var _0x5ca624 = 0; _0x5ca624 < _0x500176.length; _0x5ca624++) {

          var _0x2110a1 = _0x500176[_0x5ca624];

          _0x2110a1.enumerable = _0x2110a1.enumerable || false;

          _0x2110a1.configurable = true;

          if ("value" in _0x2110a1) {

            _0x2110a1.writable = true;

          }

          Object.defineProperty(_0xdd603f, _0x6a009(_0x2110a1.key), _0x2110a1);

        }

      }

      function _0xf99ac0(_0x52cc79, _0x532671, _0x356ed8) {

        if (_0x532671) {

          _0x53eaa9(_0x52cc79.prototype, _0x532671);

        }

        if (_0x356ed8) {

          _0x53eaa9(_0x52cc79, _0x356ed8);

        }

        Object.defineProperty(_0x52cc79, "prototype", {

          writable: false

        });

        return _0x52cc79;

      }

      function _0x27c453(_0xcc5fda) {

        return _0x2a2b2e(_0xcc5fda) || _0x78b1e6(_0xcc5fda) || _0x78e4a6(_0xcc5fda) || _0x115ec4();

      }

      function _0x115ec4() {

        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");

      }

      function _0x78b1e6(_0x1266b5) {

        if (typeof Symbol != "undefined" && _0x1266b5[Symbol.iterator] != null || _0x1266b5["@@iterator"] != null) {

          return Array.from(_0x1266b5);

        }

      }

      function _0x2a2b2e(_0x5082e2) {

        if (Array.isArray(_0x5082e2)) {

          return _0x468726(_0x5082e2);

        }

      }

      function _0x5939f8(_0x17d37d, _0x5345db) {

        var _0x43e974 = typeof Symbol != "undefined" && _0x17d37d[Symbol.iterator] || _0x17d37d["@@iterator"];

        if (!_0x43e974) {

          if (Array.isArray(_0x17d37d) || (_0x43e974 = _0x78e4a6(_0x17d37d)) || _0x5345db && _0x17d37d && typeof _0x17d37d.length == "number") {

            if (_0x43e974) {

              _0x17d37d = _0x43e974;

            }

            var _0x1e1dff = 0;

            var _0x1936ee = function _0x2beae0() {};

            return {

              s: _0x1936ee,

              n: function (_0x201e3a) {

                function _0x564ad6() {

                  return _0x201e3a.apply(this, arguments);

                }

                _0x564ad6.toString = function () {

                  return _0x201e3a.toString();

                };

                return _0x564ad6;

              }(function () {

                if (_0x1e1dff >= _0x17d37d.length) {

                  return {

                    done: true

                  };

                } else {

                  return {

                    done: false,

                    value: _0x17d37d[_0x1e1dff++]

                  };

                }

              }),

              e: function _0x1a1942(_0x206ec0) {

                throw _0x206ec0;

              },

              f: _0x1936ee

            };

          }

          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");

        }

        var _0x4d7d0d;

        var _0x5cd0 = true;

        var _0x185015 = false;

        return {

          s: function _0x16ff2() {

            _0x43e974 = _0x43e974.call(_0x17d37d);

          },

          n: function _0x2376d4() {

            var _0x4aedf3 = _0x43e974.next();

            _0x5cd0 = _0x4aedf3.done;

            return _0x4aedf3;

          },

          e: function _0x36674f(_0x174006) {

            _0x185015 = true;

            _0x4d7d0d = _0x174006;

          },

          f: function _0x397088() {

            try {

              if (!_0x5cd0 && _0x43e974.return != null) {

                _0x43e974.return();

              }

            } finally {

              if (_0x185015) {

                throw _0x4d7d0d;

              }

            }

          }

        };

      }

      function _0x78e4a6(_0x5eafd4, _0x23411b) {

        if (_0x5eafd4) {

          if (typeof _0x5eafd4 == "string") {

            return _0x468726(_0x5eafd4, _0x23411b);

          }

          var _0x49db2a = {}.toString.call(_0x5eafd4).slice(8, -1);

          if (_0x49db2a === "Object" && _0x5eafd4.constructor) {

            _0x49db2a = _0x5eafd4.constructor.name;

          }

          if (_0x49db2a === "Map" || _0x49db2a === "Set") {

            return Array.from(_0x5eafd4);

          } else if (_0x49db2a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x49db2a)) {

            return _0x468726(_0x5eafd4, _0x23411b);

          } else {

            return undefined;

          }

        }

      }

      function _0x468726(_0x258415, _0x15f670) {

        if (_0x15f670 == null || _0x15f670 > _0x258415.length) {

          _0x15f670 = _0x258415.length;

        }

        for (var _0x528810 = 0, _0xd06baa = Array(_0x15f670); _0x528810 < _0x15f670; _0x528810++) {

          _0xd06baa[_0x528810] = _0x258415[_0x528810];

        }

        return _0xd06baa;

      }

      function _0x15624e(_0x6df0b3, _0xd418a7) {

        var _0x2c6b01 = Object.keys(_0x6df0b3);

        if (Object.getOwnPropertySymbols) {

          var _0x5b77ab = Object.getOwnPropertySymbols(_0x6df0b3);

          if (_0xd418a7) {

            _0x5b77ab = _0x5b77ab.filter(function (_0x2d2b96) {

              return Object.getOwnPropertyDescriptor(_0x6df0b3, _0x2d2b96).enumerable;

            });

          }

          _0x2c6b01.push.apply(_0x2c6b01, _0x5b77ab);

        }

        return _0x2c6b01;

      }

      function _0x201363(_0xcb859f) {

        for (var _0x171db3 = 1; _0x171db3 < arguments.length; _0x171db3++) {

          var _0x2199f7 = arguments[_0x171db3] ?? {};

          if (_0x171db3 % 2) {

            _0x15624e(Object(_0x2199f7), true).forEach(function (_0x52cd12) {

              _0x48e06b(_0xcb859f, _0x52cd12, _0x2199f7[_0x52cd12]);

            });

          } else if (Object.getOwnPropertyDescriptors) {

            Object.defineProperties(_0xcb859f, Object.getOwnPropertyDescriptors(_0x2199f7));

          } else {

            _0x15624e(Object(_0x2199f7)).forEach(function (_0xcb1c3) {

              Object.defineProperty(_0xcb859f, _0xcb1c3, Object.getOwnPropertyDescriptor(_0x2199f7, _0xcb1c3));

            });

          }

        }

        return _0xcb859f;

      }

      function _0x48e06b(_0x2d6fbf, _0x427d9e, _0xe61724) {

        if ((_0x427d9e = _0x6a009(_0x427d9e)) in _0x2d6fbf) {

          Object.defineProperty(_0x2d6fbf, _0x427d9e, {

            value: _0xe61724,

            enumerable: true,

            configurable: true,

            writable: true

          });

        } else {

          _0x2d6fbf[_0x427d9e] = _0xe61724;

        }

        return _0x2d6fbf;

      }

      function _0x6a009(_0x1cf91d) {

        var _0x51f1fd = _0x4d0e0e(_0x1cf91d, "string");

        if (_0x20a029(_0x51f1fd) == "symbol") {

          return _0x51f1fd;

        } else {

          return _0x51f1fd + "";

        }

      }

      function _0x4d0e0e(_0x4a9342, _0x5e1844) {

        if (_0x20a029(_0x4a9342) != "object" || !_0x4a9342) {

          return _0x4a9342;

        }

        var _0x14d6ea = _0x4a9342[Symbol.toPrimitive];

        if (_0x14d6ea !== undefined) {

          var _0x572d48 = _0x14d6ea.call(_0x4a9342, _0x5e1844 || "default");

          if (_0x20a029(_0x572d48) != "object") {

            return _0x572d48;

          }

          throw new TypeError("@@toPrimitive must return a primitive value.");

        }

        return (_0x5e1844 === "string" ? String : Number)(_0x4a9342);

      }

      function _0x3e50a4() {

        'use strict';



        _0x3e50a4 = function _0x3a8bf7() {

          return _0x39dbbe;

        };

        var _0x19a59c;

        var _0x39dbbe = {};

        var _0x6e8b47 = Object.prototype;

        var _0x11c512 = _0x6e8b47.hasOwnProperty;

        var _0x50145f = Object.defineProperty || function (_0x21dbf7, _0xf16032, _0x2f753e) {

          _0x21dbf7[_0xf16032] = _0x2f753e.value;

        };

        var _0x4da541 = typeof Symbol == "function" ? Symbol : {};

        var _0x2efe1a = _0x4da541.iterator || "@@iterator";

        var _0xf7129a = _0x4da541.asyncIterator || "@@asyncIterator";

        var _0x4998d3 = _0x4da541.toStringTag || "@@toStringTag";

        function _0x54ea08(_0x2ce149, _0xad4bb5, _0x580846) {

          Object.defineProperty(_0x2ce149, _0xad4bb5, {

            value: _0x580846,

            enumerable: true,

            configurable: true,

            writable: true

          });

          return _0x2ce149[_0xad4bb5];

        }

        try {

          _0x54ea08({}, "");

        } catch (_0x484b8b) {

          _0x54ea08 = function _0x119b84(_0x117a00, _0x11ab9b, _0x494c0b) {

            return _0x117a00[_0x11ab9b] = _0x494c0b;

          };

        }

        function _0x2c95b9(_0x412ff5, _0xe853fe, _0xe93011, _0xf0452e) {

          var _0x5e8407 = _0xe853fe && _0xe853fe.prototype instanceof _0x599153 ? _0xe853fe : _0x599153;

          var _0x444053 = Object.create(_0x5e8407.prototype);

          var _0x32c208 = new _0x1fb0be(_0xf0452e || []);

          _0x50145f(_0x444053, "_invoke", {

            value: _0x4f593d(_0x412ff5, _0xe93011, _0x32c208)

          });

          return _0x444053;

        }

        function _0x38c92f(_0x278361, _0x3ed187, _0x448274) {

          try {

            return {

              type: "normal",

              arg: _0x278361.call(_0x3ed187, _0x448274)

            };

          } catch (_0xebac14) {

            return {

              type: "throw",

              arg: _0xebac14

            };

          }

        }

        _0x39dbbe.wrap = _0x2c95b9;

        var _0x5ee577 = "suspendedStart";

        var _0x621ef9 = "suspendedYield";

        var _0x1aa8dc = "executing";

        var _0xa7ec2d = "completed";

        var _0x1cc468 = {};

        function _0x599153() {}

        function _0x1104c1() {}

        function _0x5ece06() {}

        var _0x3a1fac = {};

        _0x54ea08(_0x3a1fac, _0x2efe1a, function () {

          return this;

        });

        var _0x58dd38 = Object.getPrototypeOf;

        var _0x323f82 = _0x58dd38 && _0x58dd38(_0x58dd38(_0x1e6709([])));

        if (_0x323f82 && _0x323f82 !== _0x6e8b47 && _0x11c512.call(_0x323f82, _0x2efe1a)) {

          _0x3a1fac = _0x323f82;

        }

        var _0x4b6547 = _0x5ece06.prototype = _0x599153.prototype = Object.create(_0x3a1fac);

        function _0x1f3539(_0x47bd71) {

          ["next", "throw", "return"].forEach(function (_0x1367eb) {

            _0x54ea08(_0x47bd71, _0x1367eb, function (_0x46bc8e) {

              return this._invoke(_0x1367eb, _0x46bc8e);

            });

          });

        }

        function _0x51bbe2(_0xfce935, _0x269b42) {

          function _0x330345(_0x39b26a, _0x2cd15c, _0x36de1c, _0x36705c) {

            var _0x16aa58 = _0x38c92f(_0xfce935[_0x39b26a], _0xfce935, _0x2cd15c);

            if (_0x16aa58.type !== "throw") {

              var _0x264795 = _0x16aa58.arg;

              var _0x5b310a = _0x264795.value;

              if (_0x5b310a && _0x20a029(_0x5b310a) == "object" && _0x11c512.call(_0x5b310a, "__await")) {

                return _0x269b42.resolve(_0x5b310a.__await).then(function (_0x575965) {

                  _0x330345("next", _0x575965, _0x36de1c, _0x36705c);

                }, function (_0x5237bd) {

                  _0x330345("throw", _0x5237bd, _0x36de1c, _0x36705c);

                });

              } else {

                return _0x269b42.resolve(_0x5b310a).then(function (_0x14e70c) {

                  _0x264795.value = _0x14e70c;

                  _0x36de1c(_0x264795);

                }, function (_0x423e94) {

                  return _0x330345("throw", _0x423e94, _0x36de1c, _0x36705c);

                });

              }

            }

            _0x36705c(_0x16aa58.arg);

          }

          var _0x22ae0f;

          _0x50145f(this, "_invoke", {

            value: function _0x9bb3e5(_0x2e7c77, _0x293711) {

              function _0xf9124d() {

                return new _0x269b42(function (_0x3a9426, _0xbdd977) {

                  _0x330345(_0x2e7c77, _0x293711, _0x3a9426, _0xbdd977);

                });

              }

              return _0x22ae0f = _0x22ae0f ? _0x22ae0f.then(_0xf9124d, _0xf9124d) : _0xf9124d();

            }

          });

        }

        function _0x4f593d(_0xd35e4, _0x4c6556, _0x127038) {

          var _0x3ccf0b = _0x5ee577;

          return function (_0x25da62, _0x56b5cb) {

            if (_0x3ccf0b === _0x1aa8dc) {

              throw Error("Generator is already running");

            }

            if (_0x3ccf0b === _0xa7ec2d) {

              if (_0x25da62 === "throw") {

                throw _0x56b5cb;

              }

              return {

                value: _0x19a59c,

                done: true

              };

            }

            _0x127038.method = _0x25da62;

            _0x127038.arg = _0x56b5cb;

            while (true) {

              var _0x37452d = _0x127038.delegate;

              if (_0x37452d) {

                var _0x24bcf7 = _0x4b2975(_0x37452d, _0x127038);

                if (_0x24bcf7) {

                  if (_0x24bcf7 === _0x1cc468) {

                    continue;

                  }

                  return _0x24bcf7;

                }

              }

              if (_0x127038.method === "next") {

                _0x127038.sent = _0x127038._sent = _0x127038.arg;

              } else if (_0x127038.method === "throw") {

                if (_0x3ccf0b === _0x5ee577) {

                  _0x3ccf0b = _0xa7ec2d;

                  throw _0x127038.arg;

                }

                _0x127038.dispatchException(_0x127038.arg);

              } else if (_0x127038.method === "return") {

                _0x127038.abrupt("return", _0x127038.arg);

              }

              _0x3ccf0b = _0x1aa8dc;

              var _0x2f7146 = _0x38c92f(_0xd35e4, _0x4c6556, _0x127038);

              if (_0x2f7146.type === "normal") {

                _0x3ccf0b = _0x127038.done ? _0xa7ec2d : _0x621ef9;

                if (_0x2f7146.arg === _0x1cc468) {

                  continue;

                }

                return {

                  value: _0x2f7146.arg,

                  done: _0x127038.done

                };

              }

              if (_0x2f7146.type === "throw") {

                _0x3ccf0b = _0xa7ec2d;

                _0x127038.method = "throw";

                _0x127038.arg = _0x2f7146.arg;

              }

            }

          };

        }

        function _0x4b2975(_0x2a07f3, _0x5eb9b9) {

          var _0x5d507a = _0x5eb9b9.method;

          var _0x207bf0 = _0x2a07f3.iterator[_0x5d507a];

          if (_0x207bf0 === _0x19a59c) {

            _0x5eb9b9.delegate = null;

            if (_0x5d507a !== "throw" || !_0x2a07f3.iterator.return || !(_0x5eb9b9.method = "return", _0x5eb9b9.arg = _0x19a59c, _0x4b2975(_0x2a07f3, _0x5eb9b9), _0x5eb9b9.method === "throw")) {

              if (_0x5d507a !== "return") {

                _0x5eb9b9.method = "throw";

                _0x5eb9b9.arg = new TypeError("The iterator does not provide a '" + _0x5d507a + "' method");

              }

            }

            return _0x1cc468;

          }

          var _0x14729b = _0x38c92f(_0x207bf0, _0x2a07f3.iterator, _0x5eb9b9.arg);

          if (_0x14729b.type === "throw") {

            _0x5eb9b9.method = "throw";

            _0x5eb9b9.arg = _0x14729b.arg;

            _0x5eb9b9.delegate = null;

            return _0x1cc468;

          }

          var _0x2ace80 = _0x14729b.arg;

          if (_0x2ace80) {

            if (_0x2ace80.done) {

              _0x5eb9b9[_0x2a07f3.resultName] = _0x2ace80.value;

              _0x5eb9b9.next = _0x2a07f3.nextLoc;

              if (_0x5eb9b9.method !== "return") {

                _0x5eb9b9.method = "next";

                _0x5eb9b9.arg = _0x19a59c;

              }

              _0x5eb9b9.delegate = null;

              return _0x1cc468;

            } else {

              return _0x2ace80;

            }

          } else {

            _0x5eb9b9.method = "throw";

            _0x5eb9b9.arg = new TypeError("iterator result is not an object");

            _0x5eb9b9.delegate = null;

            return _0x1cc468;

          }

        }

        function _0x36b971(_0x2eaf5f) {

          var _0x19113c = {

            tryLoc: _0x2eaf5f[0]

          };

          if (1 in _0x2eaf5f) {

            _0x19113c.catchLoc = _0x2eaf5f[1];

          }

          if (2 in _0x2eaf5f) {

            _0x19113c.finallyLoc = _0x2eaf5f[2];

            _0x19113c.afterLoc = _0x2eaf5f[3];

          }

          this.tryEntries.push(_0x19113c);

        }

        function _0x4818a3(_0x34467e) {

          var _0x32be41 = _0x34467e.completion || {};

          _0x32be41.type = "normal";

          delete _0x32be41.arg;

          _0x34467e.completion = _0x32be41;

        }

        function _0x1fb0be(_0x3f2cd3) {

          this.tryEntries = [{

            tryLoc: "root"

          }];

          _0x3f2cd3.forEach(_0x36b971, this);

          this.reset(true);

        }

        function _0x1e6709(_0x54e955) {

          if (_0x54e955 || _0x54e955 === "") {

            var _0x526fe2 = _0x54e955[_0x2efe1a];

            if (_0x526fe2) {

              return _0x526fe2.call(_0x54e955);

            }

            if (typeof _0x54e955.next == "function") {

              return _0x54e955;

            }

            if (!isNaN(_0x54e955.length)) {

              var _0xa2935e = -1;

              var _0x56a8e5 = function _0x56de9a() {

                while (++_0xa2935e < _0x54e955.length) {

                  if (_0x11c512.call(_0x54e955, _0xa2935e)) {

                    _0x56de9a.value = _0x54e955[_0xa2935e];

                    _0x56de9a.done = false;

                    return _0x56de9a;

                  }

                }

                _0x56de9a.value = _0x19a59c;

                _0x56de9a.done = true;

                return _0x56de9a;

              };

              return _0x56a8e5.next = _0x56a8e5;

            }

          }

          throw new TypeError(_0x20a029(_0x54e955) + " is not iterable");

        }

        _0x1104c1.prototype = _0x5ece06;

        _0x50145f(_0x4b6547, "constructor", {

          value: _0x5ece06,

          configurable: true

        });

        _0x50145f(_0x5ece06, "constructor", {

          value: _0x1104c1,

          configurable: true

        });

        _0x1104c1.displayName = _0x54ea08(_0x5ece06, _0x4998d3, "GeneratorFunction");

        _0x39dbbe.isGeneratorFunction = function (_0x5ca3f8) {

          var _0x1b7ebc = typeof _0x5ca3f8 == "function" && _0x5ca3f8.constructor;

          return !!_0x1b7ebc && (_0x1b7ebc === _0x1104c1 || (_0x1b7ebc.displayName || _0x1b7ebc.name) === "GeneratorFunction");

        };

        _0x39dbbe.mark = function (_0x4146e9) {

          if (Object.setPrototypeOf) {

            Object.setPrototypeOf(_0x4146e9, _0x5ece06);

          } else {

            _0x4146e9.__proto__ = _0x5ece06;

            _0x54ea08(_0x4146e9, _0x4998d3, "GeneratorFunction");

          }

          _0x4146e9.prototype = Object.create(_0x4b6547);

          return _0x4146e9;

        };

        _0x39dbbe.awrap = function (_0x3e68ee) {

          return {

            __await: _0x3e68ee

          };

        };

        _0x1f3539(_0x51bbe2.prototype);

        _0x54ea08(_0x51bbe2.prototype, _0xf7129a, function () {

          return this;

        });

        _0x39dbbe.AsyncIterator = _0x51bbe2;

        _0x39dbbe.async = function (_0x3b503f, _0x31cf5f, _0x483952, _0x19cac0, _0x24a91a = Promise) {

          var _0x2ad9ae = new _0x51bbe2(_0x2c95b9(_0x3b503f, _0x31cf5f, _0x483952, _0x19cac0), _0x24a91a);

          if (_0x39dbbe.isGeneratorFunction(_0x31cf5f)) {

            return _0x2ad9ae;

          } else {

            return _0x2ad9ae.next().then(function (_0x38857b) {

              if (_0x38857b.done) {

                return _0x38857b.value;

              } else {

                return _0x2ad9ae.next();

              }

            });

          }

        };

        _0x1f3539(_0x4b6547);

        _0x54ea08(_0x4b6547, _0x4998d3, "Generator");

        _0x54ea08(_0x4b6547, _0x2efe1a, function () {

          return this;

        });

        _0x54ea08(_0x4b6547, "toString", function () {

          return "[object Generator]";

        });

        _0x39dbbe.keys = function (_0x50887e) {

          var _0x433ab4 = Object(_0x50887e);

          var _0x58e686 = [];

          for (var _0x375519 in _0x433ab4) {

            _0x58e686.push(_0x375519);

          }

          _0x58e686.reverse();

          return function _0x354129() {

            while (_0x58e686.length) {

              var _0x4f763a = _0x58e686.pop();

              if (_0x4f763a in _0x433ab4) {

                _0x354129.value = _0x4f763a;

                _0x354129.done = false;

                return _0x354129;

              }

            }

            _0x354129.done = true;

            return _0x354129;

          };

        };

        _0x39dbbe.values = _0x1e6709;

        _0x1fb0be.prototype = {

          constructor: _0x1fb0be,

          reset: function _0x22833d(_0x446400) {

            this.prev = 0;

            this.next = 0;

            this.sent = this._sent = _0x19a59c;

            this.done = false;

            this.delegate = null;

            this.method = "next";

            this.arg = _0x19a59c;

            this.tryEntries.forEach(_0x4818a3);

            if (!_0x446400) {

              for (var _0x3c3b87 in this) {

                if (_0x3c3b87.charAt(0) === "t" && _0x11c512.call(this, _0x3c3b87) && !isNaN(+_0x3c3b87.slice(1))) {

                  this[_0x3c3b87] = _0x19a59c;

                }

              }

            }

          },

          stop: function _0x32cfd8() {

            this.done = true;

            var _0x5c8995 = this.tryEntries[0].completion;

            if (_0x5c8995.type === "throw") {

              throw _0x5c8995.arg;

            }

            return this.rval;

          },

          dispatchException: function _0x259069(_0x4f6514) {

            if (this.done) {

              throw _0x4f6514;

            }

            var _0x1bf49c = this;

            function _0x4e8afc(_0x19d68c, _0x2d36b4) {

              _0x244295.type = "throw";

              _0x244295.arg = _0x4f6514;

              _0x1bf49c.next = _0x19d68c;

              if (_0x2d36b4) {

                _0x1bf49c.method = "next";

                _0x1bf49c.arg = _0x19a59c;

              }

              return !!_0x2d36b4;

            }

            for (var _0x521f24 = this.tryEntries.length - 1; _0x521f24 >= 0; --_0x521f24) {

              var _0x83ab1d = this.tryEntries[_0x521f24];

              var _0x244295 = _0x83ab1d.completion;

              if (_0x83ab1d.tryLoc === "root") {

                return _0x4e8afc("end");

              }

              if (_0x83ab1d.tryLoc <= this.prev) {

                var _0x5de324 = _0x11c512.call(_0x83ab1d, "catchLoc");

                var _0x156373 = _0x11c512.call(_0x83ab1d, "finallyLoc");

                if (_0x5de324 && _0x156373) {

                  if (this.prev < _0x83ab1d.catchLoc) {

                    return _0x4e8afc(_0x83ab1d.catchLoc, true);

                  }

                  if (this.prev < _0x83ab1d.finallyLoc) {

                    return _0x4e8afc(_0x83ab1d.finallyLoc);

                  }

                } else if (_0x5de324) {

                  if (this.prev < _0x83ab1d.catchLoc) {

                    return _0x4e8afc(_0x83ab1d.catchLoc, true);

                  }

                } else {

                  if (!_0x156373) {

                    throw Error("try statement without catch or finally");

                  }

                  if (this.prev < _0x83ab1d.finallyLoc) {

                    return _0x4e8afc(_0x83ab1d.finallyLoc);

                  }

                }

              }

            }

          },

          abrupt: function _0x2e8df1(_0x2be637, _0x1ad11e) {

            for (var _0x22f77e = this.tryEntries.length - 1; _0x22f77e >= 0; --_0x22f77e) {

              var _0x1b443b = this.tryEntries[_0x22f77e];

              if (_0x1b443b.tryLoc <= this.prev && _0x11c512.call(_0x1b443b, "finallyLoc") && this.prev < _0x1b443b.finallyLoc) {

                var _0x3f51f3 = _0x1b443b;

                break;

              }

            }

            if (_0x3f51f3 && (_0x2be637 === "break" || _0x2be637 === "continue") && _0x3f51f3.tryLoc <= _0x1ad11e && _0x1ad11e <= _0x3f51f3.finallyLoc) {

              _0x3f51f3 = null;

            }

            var _0x3ebbfc = _0x3f51f3 ? _0x3f51f3.completion : {};

            _0x3ebbfc.type = _0x2be637;

            _0x3ebbfc.arg = _0x1ad11e;

            if (_0x3f51f3) {

              this.method = "next";

              this.next = _0x3f51f3.finallyLoc;

              return _0x1cc468;

            } else {

              return this.complete(_0x3ebbfc);

            }

          },

          complete: function _0x1205f5(_0x2a0c86, _0x3f1fb9) {

            if (_0x2a0c86.type === "throw") {

              throw _0x2a0c86.arg;

            }

            if (_0x2a0c86.type === "break" || _0x2a0c86.type === "continue") {

              this.next = _0x2a0c86.arg;

            } else if (_0x2a0c86.type === "return") {

              this.rval = this.arg = _0x2a0c86.arg;

              this.method = "return";

              this.next = "end";

            } else if (_0x2a0c86.type === "normal" && _0x3f1fb9) {

              this.next = _0x3f1fb9;

            }

            return _0x1cc468;

          },

          finish: function _0x3cf0db(_0x5c5bd4) {

            for (var _0x2c0b17 = this.tryEntries.length - 1; _0x2c0b17 >= 0; --_0x2c0b17) {

              var _0x5272fb = this.tryEntries[_0x2c0b17];

              if (_0x5272fb.finallyLoc === _0x5c5bd4) {

                this.complete(_0x5272fb.completion, _0x5272fb.afterLoc);

                _0x4818a3(_0x5272fb);

                return _0x1cc468;

              }

            }

          },

          catch: function _0x17bfb5(_0x511d8c) {

            for (var _0x5d8b47 = this.tryEntries.length - 1; _0x5d8b47 >= 0; --_0x5d8b47) {

              var _0x3e6cd7 = this.tryEntries[_0x5d8b47];

              if (_0x3e6cd7.tryLoc === _0x511d8c) {

                var _0x163157 = _0x3e6cd7.completion;

                if (_0x163157.type === "throw") {

                  var _0x4a4461 = _0x163157.arg;

                  _0x4818a3(_0x3e6cd7);

                }

                return _0x4a4461;

              }

            }

            throw Error("illegal catch attempt");

          },

          delegateYield: function _0x100bdc(_0x10c785, _0x122b55, _0x59d7cf) {

            this.delegate = {

              iterator: _0x1e6709(_0x10c785),

              resultName: _0x122b55,

              nextLoc: _0x59d7cf

            };

            if (this.method === "next") {

              this.arg = _0x19a59c;

            }

            return _0x1cc468;

          }

        };

        return _0x39dbbe;

      }

      function _0x550395(_0x42d017, _0x3625dc, _0x19c2a2, _0x29ad13, _0x23914e, _0x3327d7, _0xdac5b7) {

        try {

          var _0x44ce82 = _0x42d017[_0x3327d7](_0xdac5b7);

          var _0x2e2bf8 = _0x44ce82.value;

        } catch (_0x278ee5) {

          _0x19c2a2(_0x278ee5);

          return;

        }

        if (_0x44ce82.done) {

          _0x3625dc(_0x2e2bf8);

        } else {

          Promise.resolve(_0x2e2bf8).then(_0x29ad13, _0x23914e);

        }

      }

      function _0x5a1854(_0x2c220a) {

        return function () {

          var _0xf035e8 = this;

          var _0x2869cf = arguments;

          return new Promise(function (_0x4a5d45, _0x23e489) {

            var _0x3ec448 = _0x2c220a.apply(_0xf035e8, _0x2869cf);

            function _0x4b6484(_0x50603d) {

              _0x550395(_0x3ec448, _0x4a5d45, _0x23e489, _0x4b6484, _0x31e7e5, "next", _0x50603d);

            }

            function _0x31e7e5(_0xa6e67c) {

              _0x550395(_0x3ec448, _0x4a5d45, _0x23e489, _0x4b6484, _0x31e7e5, "throw", _0xa6e67c);

            }

            _0x4b6484(undefined);

          });

        };

      }

      function _0x20a029(_0x3f2bcb) {

        '@babel/helpers - typeof';



        _0x20a029 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (_0x551cbd) {

          return typeof _0x551cbd;

        } : function (_0x1e10ad) {

          if (_0x1e10ad && typeof Symbol == "function" && _0x1e10ad.constructor === Symbol && _0x1e10ad !== Symbol.prototype) {

            return "symbol";

          } else {

            return typeof _0x1e10ad;

          }

        };

        return _0x20a029(_0x3f2bcb);

      }

      var _0x24c052 = 0;

      window.URLSERV_WORMWORLD = _0x24c052 ? "http://localhost:3102" : "https://wormworld.io/extension";

      window.URL_CDN = _0x24c052 ? "http://localhost:3000" : "https://asserts.wormworld.io";

      window.URL_CDN_B = _0x24c052 ? "localhost:3000" : "asserts.wormworld.io";

      window.URL_CDN_C = _0x24c052;

      window.URL_CDN_IKIT = "https://ik.imagekit.io/jdfnxk119";

      var _0xd396b2 = /(.{18})(([AB])([0-9A-Za-z_]{2})([0-9A-Za-z]{3})([0-9A-Z_]{2})([0-9A-Z_]{2})([0-9A-Z_]{2})([0-9A-Z_]{2}))/;

      var _0x32d5e7 = true;

      var _0x5bb04c = true;

      var _0x51c67d = false;

      var _0x30b68b = 18;

      window.backgroundArena = [{

        nome: "Default",

        uri: window.URL_CDN + "/backgrounds/bkgnd0.png"

      }, {

        nome: "Green",

        uri: window.URL_CDN + "/backgrounds/bkgnd8.png"

      }, {

        nome: "Blue",

        uri: window.URL_CDN + "/backgrounds/bkgnd9.png"

      }, {

        nome: "Blue Black",

        uri: window.URL_CDN + "/backgrounds/bkgnd10.png"

      }, {

        nome: "Blue Light",

        uri: window.URL_CDN + "/backgrounds/bkgnd6.png"

      }, {

        nome: "Desert",

        uri: window.URL_CDN + "/backgrounds/bkgnd7.png"

      }, {

        nome: "Textil",

        uri: window.URL_CDN + "/backgrounds/bkgnd11.png"

      }, {

        nome: "Sky Blue",

        uri: window.URL_CDN + "/backgrounds/bg_sky_1.png"

      }, {

        nome: "Sky Purp",

        uri: window.URL_CDN + "/backgrounds/bg_sky_2.png"

      }, {

        nome: "Sky Violet",

        uri: window.URL_CDN + "/backgrounds/bg_sky_3.png"

      }, {

        nome: "Sky Orange",

        uri: window.URL_CDN + "/backgrounds/bg_sky_4.png"

      }, {

        nome: "Sky Write",

        uri: window.URL_CDN + "/backgrounds/bg_sky_5.png"

      }, {

        nome: "Arena 1",

        uri: window.URL_CDN + "/backgrounds/arena01.png",

        w: 1100,

        h: 1100

      }, {

        nome: "Arena 2",

        uri: window.URL_CDN + "/backgrounds/arena02.png",

        w: 1100,

        h: 1100

      }, {

        nome: "Arena 3",

        uri: window.URL_CDN + "/backgrounds/arena03.png",

        w: 1100,

        h: 1100

      }, {

        nome: "Arena 4",

        uri: window.URL_CDN + "/backgrounds/arena04.png",

        w: 1100,

        h: 1100

      }];

      (function (_0x7e16e) {

        if ((typeof exports === "undefined" ? "undefined" : _0x20a029(exports)) === "object" && "object" !== "undefined") {

          _0x4fd33d.exports = _0x7e16e();

        } else if (typeof define === "function" && _0x540829.amdO) {

          define([], _0x7e16e);

        } else {

          var _0x983543;

          if (typeof window !== "undefined") {

            _0x983543 = window;

          } else if (typeof _0x540829.g !== "undefined") {

            _0x983543 = _0x540829.g;

          } else if (typeof self !== "undefined") {

            _0x983543 = self;

          } else {

            _0x983543 = this;

          }

          _0x983543.nipplejs = _0x7e16e();

        }

      })(function () {

        var _0x2ad18d;

        var _0x5e336c;

        var _0x8dfc25;

        "use strict";

        var _0x2056de = !!("ontouchstart" in window);

        var _0x54199a = window.PointerEvent ? true : false;

        var _0x465aad = window.MSPointerEvent ? true : false;

        var _0x512b85 = {

          touch: {

            start: "touchstart",

            move: "touchmove",

            end: "touchend, touchcancel"

          },

          mouse: {

            start: "mousedown",

            move: "mousemove",

            end: "mouseup"

          },

          pointer: {

            start: "pointerdown",

            move: "pointermove",

            end: "pointerup, pointercancel"

          },

          MSPointer: {

            start: "MSPointerDown",

            move: "MSPointerMove",

            end: "MSPointerUp"

          }

        };

        var _0x51422a;

        var _0x42d455 = {};

        if (_0x54199a) {

          _0x51422a = _0x512b85.pointer;

        } else if (_0x465aad) {

          _0x51422a = _0x512b85.MSPointer;

        } else if (_0x2056de) {

          _0x51422a = _0x512b85.touch;

          _0x42d455 = _0x512b85.mouse;

        } else {

          _0x51422a = _0x512b85.mouse;

        }

        var _0x3edfe6 = {};

        _0x3edfe6.distance = function (_0x43fae5, _0x16d7cb) {

          var _0x5de105 = _0x16d7cb.x - _0x43fae5.x;

          var _0x2a4c01 = _0x16d7cb.y - _0x43fae5.y;

          return Math.sqrt(_0x5de105 * _0x5de105 + _0x2a4c01 * _0x2a4c01);

        };

        _0x3edfe6.angle = function (_0x17929c, _0x3246cc) {

          var _0x20f122 = _0x3246cc.x - _0x17929c.x;

          var _0xa064ea = _0x3246cc.y - _0x17929c.y;

          return _0x3edfe6.degrees(Math.atan2(_0xa064ea, _0x20f122));

        };

        _0x3edfe6.findCoord = function (_0x2a9298, _0x5f1ffd, _0x4bbb18) {

          var _0x29ef1e = {

            x: 0,

            y: 0

          };

          _0x4bbb18 = _0x3edfe6.radians(_0x4bbb18);

          _0x29ef1e.x = _0x2a9298.x - _0x5f1ffd * Math.cos(_0x4bbb18);

          _0x29ef1e.y = _0x2a9298.y - _0x5f1ffd * Math.sin(_0x4bbb18);

          return _0x29ef1e;

        };

        _0x3edfe6.radians = function (_0x29c1c4) {

          return _0x29c1c4 * (Math.PI / 180);

        };

        _0x3edfe6.degrees = function (_0xd590c1) {

          return _0xd590c1 * (180 / Math.PI);

        };

        _0x3edfe6.bindEvt = function (_0x4218ef, _0x4183c8, _0x5f514c) {

          var _0x302f45 = _0x4183c8.split(/[ ,]+/g);

          var _0x434907;

          for (var _0x51930f = 0; _0x51930f < _0x302f45.length; _0x51930f += 1) {

            _0x434907 = _0x302f45[_0x51930f];

            if (_0x4218ef.addEventListener) {

              _0x4218ef.addEventListener(_0x434907, _0x5f514c, false);

            } else if (_0x4218ef.attachEvent) {

              _0x4218ef.attachEvent(_0x434907, _0x5f514c);

            }

          }

        };

        _0x3edfe6.unbindEvt = function (_0x5a0b87, _0x2faf0d, _0x5d93d2) {

          var _0x925fe2 = _0x2faf0d.split(/[ ,]+/g);

          var _0x172e07;

          for (var _0x301a5f = 0; _0x301a5f < _0x925fe2.length; _0x301a5f += 1) {

            _0x172e07 = _0x925fe2[_0x301a5f];

            if (_0x5a0b87.removeEventListener) {

              _0x5a0b87.removeEventListener(_0x172e07, _0x5d93d2);

            } else if (_0x5a0b87.detachEvent) {

              _0x5a0b87.detachEvent(_0x172e07, _0x5d93d2);

            }

          }

        };

        _0x3edfe6.trigger = function (_0x3f4761, _0x336971, _0x4ecc9a) {

          var _0x2fb5da = new CustomEvent(_0x336971, _0x4ecc9a);

          _0x3f4761.dispatchEvent(_0x2fb5da);

        };

        _0x3edfe6.prepareEvent = function (_0x506abf) {

          _0x506abf.preventDefault();

          if (_0x506abf.type.match(/^touch/)) {

            return _0x506abf.changedTouches;

          } else {

            return _0x506abf;

          }

        };

        _0x3edfe6.getScroll = function () {

          var _0x372db1 = window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;

          var _0xb92cff = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

          return {

            x: _0x372db1,

            y: _0xb92cff

          };

        };

        _0x3edfe6.applyPosition = function (_0x32fcc3, _0x2f04e0) {

          if (_0x2f04e0.top || _0x2f04e0.right || _0x2f04e0.bottom || _0x2f04e0.left) {

            _0x32fcc3.style.top = _0x2f04e0.top;

            _0x32fcc3.style.right = _0x2f04e0.right;

            _0x32fcc3.style.bottom = _0x2f04e0.bottom;

            _0x32fcc3.style.left = _0x2f04e0.left;

          } else {

            _0x32fcc3.style.left = _0x2f04e0.x + "px";

            _0x32fcc3.style.top = _0x2f04e0.y + "px";

          }

        };

        _0x3edfe6.getTransitionStyle = function (_0x3acad0, _0x267787, _0x5ef5af) {

          var _0x395b10 = _0x3edfe6.configStylePropertyObject(_0x3acad0);

          for (var _0x216a82 in _0x395b10) {

            if (_0x395b10.hasOwnProperty(_0x216a82)) {

              if (typeof _0x267787 === "string") {

                _0x395b10[_0x216a82] = _0x267787 + " " + _0x5ef5af;

              } else {

                var _0x4c0442 = "";

                for (var _0x4b164a = 0, _0x4f44bb = _0x267787.length; _0x4b164a < _0x4f44bb; _0x4b164a += 1) {

                  _0x4c0442 += _0x267787[_0x4b164a] + " " + _0x5ef5af + ", ";

                }

                _0x395b10[_0x216a82] = _0x4c0442.slice(0, -2);

              }

            }

          }

          return _0x395b10;

        };

        _0x3edfe6.getVendorStyle = function (_0xbd1873, _0x4648ad) {

          var _0x2adad4 = _0x3edfe6.configStylePropertyObject(_0xbd1873);

          for (var _0x210852 in _0x2adad4) {

            if (_0x2adad4.hasOwnProperty(_0x210852)) {

              _0x2adad4[_0x210852] = _0x4648ad;

            }

          }

          return _0x2adad4;

        };

        _0x3edfe6.configStylePropertyObject = function (_0xad4ec0) {

          var _0xc84480 = {

            [_0xad4ec0]: ""

          };

          var _0x98572a = ["webkit", "Moz", "o"];

          _0x98572a.forEach(function (_0x2d99d2) {

            _0xc84480[_0x2d99d2 + _0xad4ec0.charAt(0).toUpperCase() + _0xad4ec0.slice(1)] = "";

          });

          return _0xc84480;

        };

        _0x3edfe6.extend = function (_0x810574, _0x2f6948) {

          for (var _0xef48a8 in _0x2f6948) {

            if (_0x2f6948.hasOwnProperty(_0xef48a8)) {

              _0x810574[_0xef48a8] = _0x2f6948[_0xef48a8];

            }

          }

          return _0x810574;

        };

        _0x3edfe6.safeExtend = function (_0x56d489, _0x3b28c8) {

          var _0x1c5b1b = {};

          for (var _0x30a821 in _0x56d489) {

            if (_0x56d489.hasOwnProperty(_0x30a821) && _0x3b28c8.hasOwnProperty(_0x30a821)) {

              _0x1c5b1b[_0x30a821] = _0x3b28c8[_0x30a821];

            } else if (_0x56d489.hasOwnProperty(_0x30a821)) {

              _0x1c5b1b[_0x30a821] = _0x56d489[_0x30a821];

            }

          }

          return _0x1c5b1b;

        };

        _0x3edfe6.map = function (_0x1c73e8, _0x536d9b) {

          if (_0x1c73e8.length) {

            for (var _0x2476c8 = 0, _0x3dd449 = _0x1c73e8.length; _0x2476c8 < _0x3dd449; _0x2476c8 += 1) {

              _0x536d9b(_0x1c73e8[_0x2476c8]);

            }

          } else {

            _0x536d9b(_0x1c73e8);

          }

        };

        function _0x3a5d63() {}

        ;

        _0x3a5d63.prototype.on = function (_0x365473, _0x4a4946) {

          var _0x5b077b = this;

          var _0x341be4 = _0x365473.split(/[ ,]+/g);

          var _0x1fbe6e;

          _0x5b077b._handlers_ = _0x5b077b._handlers_ || {};

          for (var _0x5198b1 = 0; _0x5198b1 < _0x341be4.length; _0x5198b1 += 1) {

            _0x1fbe6e = _0x341be4[_0x5198b1];

            _0x5b077b._handlers_[_0x1fbe6e] = _0x5b077b._handlers_[_0x1fbe6e] || [];

            _0x5b077b._handlers_[_0x1fbe6e].push(_0x4a4946);

          }

          return _0x5b077b;

        };

        _0x3a5d63.prototype.off = function (_0x5847a3, _0x50e85d) {

          var _0x5db2a2 = this;

          _0x5db2a2._handlers_ = _0x5db2a2._handlers_ || {};

          if (_0x5847a3 === undefined) {

            _0x5db2a2._handlers_ = {};

          } else if (_0x50e85d === undefined) {

            _0x5db2a2._handlers_[_0x5847a3] = null;

          } else if (_0x5db2a2._handlers_[_0x5847a3] && _0x5db2a2._handlers_[_0x5847a3].indexOf(_0x50e85d) >= 0) {

            _0x5db2a2._handlers_[_0x5847a3].splice(_0x5db2a2._handlers_[_0x5847a3].indexOf(_0x50e85d), 1);

          }

          return _0x5db2a2;

        };

        _0x3a5d63.prototype.trigger = function (_0x526f8c, _0x3f0439) {

          var _0x44fc72 = this;

          var _0x412439 = _0x526f8c.split(/[ ,]+/g);

          var _0x5ec6c7;

          _0x44fc72._handlers_ = _0x44fc72._handlers_ || {};

          for (var _0x4e8d08 = 0; _0x4e8d08 < _0x412439.length; _0x4e8d08 += 1) {

            _0x5ec6c7 = _0x412439[_0x4e8d08];

            if (_0x44fc72._handlers_[_0x5ec6c7] && _0x44fc72._handlers_[_0x5ec6c7].length) {

              _0x44fc72._handlers_[_0x5ec6c7].forEach(function (_0x12643c) {

                _0x12643c.call(_0x44fc72, {

                  type: _0x5ec6c7,

                  target: _0x44fc72

                }, _0x3f0439);

              });

            }

          }

        };

        _0x3a5d63.prototype.config = function (_0x5236c9) {

          var _0x35097d = this;

          _0x35097d.options = _0x35097d.defaults || {};

          if (_0x5236c9) {

            _0x35097d.options = _0x3edfe6.safeExtend(_0x35097d.options, _0x5236c9);

          }

        };

        _0x3a5d63.prototype.bindEvt = function (_0x581006, _0x5f13b6) {

          var _0x4a2139 = this;

          _0x4a2139._domHandlers_ = _0x4a2139._domHandlers_ || {};

          _0x4a2139._domHandlers_[_0x5f13b6] = function () {

            if (typeof _0x4a2139["on" + _0x5f13b6] === "function") {

              _0x4a2139["on" + _0x5f13b6].apply(_0x4a2139, arguments);

            } else {

              console.warn("[WARNING] : Missing \"on" + _0x5f13b6 + "\" handler.");

            }

          };

          _0x3edfe6.bindEvt(_0x581006, _0x51422a[_0x5f13b6], _0x4a2139._domHandlers_[_0x5f13b6]);

          if (_0x42d455[_0x5f13b6]) {

            _0x3edfe6.bindEvt(_0x581006, _0x42d455[_0x5f13b6], _0x4a2139._domHandlers_[_0x5f13b6]);

          }

          return _0x4a2139;

        };

        _0x3a5d63.prototype.unbindEvt = function (_0x4f48c7, _0x5924bd) {

          var _0x376b4d = this;

          _0x376b4d._domHandlers_ = _0x376b4d._domHandlers_ || {};

          _0x3edfe6.unbindEvt(_0x4f48c7, _0x51422a[_0x5924bd], _0x376b4d._domHandlers_[_0x5924bd]);

          if (_0x42d455[_0x5924bd]) {

            _0x3edfe6.unbindEvt(_0x4f48c7, _0x42d455[_0x5924bd], _0x376b4d._domHandlers_[_0x5924bd]);

          }

          delete _0x376b4d._domHandlers_[_0x5924bd];

          return this;

        };

        function _0x4d6ada(_0x122e2d, _0x388742) {

          this.identifier = _0x388742.identifier;

          this.position = _0x388742.position;

          this.frontPosition = _0x388742.frontPosition;

          this.collection = _0x122e2d;

          this.defaults = {

            size: 100,

            threshold: 0.1,

            color: "white",

            fadeTime: 250,

            dataOnly: false,

            restJoystick: true,

            restOpacity: 0.5,

            mode: "dynamic",

            zone: document.body,

            lockX: false,

            lockY: false,

            dumbBox: null

          };

          this.config(_0x388742);

          if (this.options.mode === "dynamic") {

            this.options.restOpacity = 0;

          }

          this.id = _0x4d6ada.id;

          _0x4d6ada.id += 1;

          this.buildEl().stylize();

          this.instance = {

            el: this.ui.el,

            on: this.on.bind(this),

            off: this.off.bind(this),

            show: this.show.bind(this),

            hide: this.hide.bind(this),

            add: this.addToDom.bind(this),

            remove: this.removeFromDom.bind(this),

            destroy: this.destroy.bind(this),

            resetDirection: this.resetDirection.bind(this),

            computeDirection: this.computeDirection.bind(this),

            trigger: this.trigger.bind(this),

            position: this.position,

            frontPosition: this.frontPosition,

            ui: this.ui,

            identifier: this.identifier,

            id: this.id,

            options: this.options

          };

          return this.instance;

        }

        ;

        _0x4d6ada.prototype = new _0x3a5d63();

        _0x4d6ada.constructor = _0x4d6ada;

        _0x4d6ada.id = 0;

        _0x4d6ada.prototype.buildEl = function (_0x1ffeb2) {

          this.ui = {};

          if (this.options.dataOnly) {

            return this;

          }

          this.ui.el = document.createElement("div");

          this.ui.back = document.createElement("div");

          this.ui.front = document.createElement("div");

          this.ui.el.className = "nipple collection_" + this.collection.id;

          this.ui.back.className = "back";

          this.ui.front.className = "front";

          this.ui.el.setAttribute("id", "nipple_" + this.collection.id + "_" + this.id);

          this.ui.el.appendChild(this.ui.back);

          this.ui.el.appendChild(this.ui.front);

          return this;

        };

        _0x4d6ada.prototype.stylize = function () {

          if (this.options.dataOnly) {

            return this;

          }

          var _0x50fcb2 = this.options.fadeTime + "ms";

          var _0x5d699c = _0x3edfe6.getVendorStyle("borderRadius", "50%");

          var _0x13ddc6 = _0x3edfe6.getTransitionStyle("transition", "opacity", _0x50fcb2);

          var _0x46003d = {

            el: {

              position: "absolute",

              opacity: this.options.restOpacity,

              display: "block",

              zIndex: 999

            },

            back: {

              position: "absolute",

              display: "block",

              width: this.options.size + "px",

              height: this.options.size + "px",

              marginLeft: -this.options.size / 2 + "px",

              marginTop: -this.options.size / 2 + "px",

              background: this.options.color,

              opacity: ".5"

            },

            front: {

              width: this.options.size / 2 + "px",

              height: this.options.size / 2 + "px",

              position: "absolute",

              display: "block",

              marginLeft: -this.options.size / 4 + "px",

              marginTop: -this.options.size / 4 + "px",

              background: this.options.color,

              opacity: ".5"

            }

          };

          _0x3edfe6.extend(_0x46003d.el, _0x13ddc6);

          _0x3edfe6.extend(_0x46003d.back, _0x5d699c);

          _0x3edfe6.extend(_0x46003d.front, _0x5d699c);

          this.applyStyles(_0x46003d);

          return this;

        };

        _0x4d6ada.prototype.applyStyles = function (_0x351008) {

          for (var _0x2f892f in this.ui) {

            if (this.ui.hasOwnProperty(_0x2f892f)) {

              for (var _0x3e6d2f in _0x351008[_0x2f892f]) {

                this.ui[_0x2f892f].style[_0x3e6d2f] = _0x351008[_0x2f892f][_0x3e6d2f];

              }

            }

          }

          return this;

        };

        _0x4d6ada.prototype.addToDom = function () {

          if (this.options.dataOnly || document.body.contains(this.ui.el)) {

            return this;

          }

          this.options.zone.appendChild(this.ui.el);

          return this;

        };

        _0x4d6ada.prototype.removeFromDom = function () {

          if (this.options.dataOnly || !document.body.contains(this.ui.el)) {

            return this;

          }

          this.options.zone.removeChild(this.ui.el);

          return this;

        };

        _0x4d6ada.prototype.destroy = function () {

          clearTimeout(this.removeTimeout);

          clearTimeout(this.showTimeout);

          clearTimeout(this.restTimeout);

          this.trigger("destroyed", this.instance);

          this.removeFromDom();

          this.off();

        };

        _0x4d6ada.prototype.show = function (_0x26a7fc) {

          var _0x332655 = this;

          if (_0x332655.options.dataOnly) {

            return _0x332655;

          }

          clearTimeout(_0x332655.removeTimeout);

          clearTimeout(_0x332655.showTimeout);

          clearTimeout(_0x332655.restTimeout);

          _0x332655.addToDom();

          _0x332655.restCallback();

          setTimeout(function () {

            _0x332655.ui.el.style.opacity = 1;

          }, 0);

          _0x332655.showTimeout = setTimeout(function () {

            _0x332655.trigger("shown", _0x332655.instance);

            if (typeof _0x26a7fc === "function") {

              _0x26a7fc.call(this);

            }

          }, _0x332655.options.fadeTime);

          return _0x332655;

        };

        _0x4d6ada.prototype.hide = function (_0x40ce0a) {

          var _0x56acbb = this;

          if (_0x56acbb.options.dataOnly) {

            return _0x56acbb;

          }

          _0x56acbb.ui.el.style.opacity = _0x56acbb.options.restOpacity;

          clearTimeout(_0x56acbb.removeTimeout);

          clearTimeout(_0x56acbb.showTimeout);

          clearTimeout(_0x56acbb.restTimeout);

          _0x56acbb.removeTimeout = setTimeout(function () {

            var _0x5a12ff = _0x56acbb.options.mode === "dynamic" ? "none" : "block";

            _0x56acbb.ui.el.style.display = _0x5a12ff;

            if (typeof _0x40ce0a === "function") {

              _0x40ce0a.call(_0x56acbb);

            }

            _0x56acbb.trigger("hidden", _0x56acbb.instance);

          }, _0x56acbb.options.fadeTime);

          if (_0x56acbb.options.restJoystick) {

            _0x56acbb.restPosition();

          }

          return _0x56acbb;

        };

        _0x4d6ada.prototype.restPosition = function (_0x364804) {

          var _0x31a113 = this;

          _0x31a113.frontPosition = {

            x: 0,

            y: 0

          };

          var _0x31dddf = _0x31a113.options.fadeTime + "ms";

          var _0x13eb4c = {};

          _0x13eb4c.front = _0x3edfe6.getTransitionStyle("transition", ["top", "left"], _0x31dddf);

          var _0x5e8c5d = {

            front: {}

          };

          _0x5e8c5d.front = {

            left: _0x31a113.frontPosition.x + "px",

            top: _0x31a113.frontPosition.y + "px"

          };

          _0x31a113.applyStyles(_0x13eb4c);

          _0x31a113.applyStyles(_0x5e8c5d);

          _0x31a113.restTimeout = setTimeout(function () {

            if (typeof _0x364804 === "function") {

              _0x364804.call(_0x31a113);

            }

            _0x31a113.restCallback();

          }, _0x31a113.options.fadeTime);

        };

        _0x4d6ada.prototype.restCallback = function () {

          var _0x350ce7 = this;

          var _0xc2b426 = {};

          _0xc2b426.front = _0x3edfe6.getTransitionStyle("transition", "none", "");

          _0x350ce7.applyStyles(_0xc2b426);

          _0x350ce7.trigger("rested", _0x350ce7.instance);

        };

        _0x4d6ada.prototype.resetDirection = function () {

          this.direction = {

            x: false,

            y: false,

            angle: false

          };

        };

        _0x4d6ada.prototype.computeDirection = function (_0x18ccf9) {

          var _0xd8b1f7 = _0x18ccf9.angle.radian;

          var _0x4cf471 = Math.PI / 4;

          var _0x443309 = Math.PI / 2;

          var _0xc5b48c;

          var _0x4b3551;

          var _0x3ede25;

          if (_0xd8b1f7 > _0x4cf471 && _0xd8b1f7 < _0x4cf471 * 3 && !_0x18ccf9.lockX) {

            _0xc5b48c = "up";

          } else if (_0xd8b1f7 > -_0x4cf471 && _0xd8b1f7 <= _0x4cf471 && !_0x18ccf9.lockY) {

            _0xc5b48c = "left";

          } else if (_0xd8b1f7 > -_0x4cf471 * 3 && _0xd8b1f7 <= -_0x4cf471 && !_0x18ccf9.lockX) {

            _0xc5b48c = "down";

          } else if (!_0x18ccf9.lockY) {

            _0xc5b48c = "right";

          }

          if (!_0x18ccf9.lockY) {

            if (_0xd8b1f7 > -_0x443309 && _0xd8b1f7 < _0x443309) {

              _0x4b3551 = "left";

            } else {

              _0x4b3551 = "right";

            }

          }

          if (!_0x18ccf9.lockX) {

            if (_0xd8b1f7 > 0) {

              _0x3ede25 = "up";

            } else {

              _0x3ede25 = "down";

            }

          }

          if (_0x18ccf9.force > this.options.threshold) {

            var _0x5ee4c8 = {};

            for (var _0x80316e in this.direction) {

              if (this.direction.hasOwnProperty(_0x80316e)) {

                _0x5ee4c8[_0x80316e] = this.direction[_0x80316e];

              }

            }

            var _0x54e326 = {};

            this.direction = {

              x: _0x4b3551,

              y: _0x3ede25,

              angle: _0xc5b48c

            };

            _0x18ccf9.direction = this.direction;

            for (var _0x80316e in _0x5ee4c8) {

              if (_0x5ee4c8[_0x80316e] === this.direction[_0x80316e]) {

                _0x54e326[_0x80316e] = true;

              }

            }

            if (_0x54e326.x && _0x54e326.y && _0x54e326.angle) {

              return _0x18ccf9;

            }

            if (!_0x54e326.x || !_0x54e326.y) {

              this.trigger("plain", _0x18ccf9);

            }

            if (!_0x54e326.x) {

              this.trigger("plain:" + _0x4b3551, _0x18ccf9);

            }

            if (!_0x54e326.y) {

              this.trigger("plain:" + _0x3ede25, _0x18ccf9);

            }

            if (!_0x54e326.angle) {

              this.trigger("dir dir:" + _0xc5b48c, _0x18ccf9);

            }

          }

          return _0x18ccf9;

        };

        function _0x29d714(_0x50d8d4, _0x527034) {

          var _0x4f5072 = this;

          _0x4f5072.nipples = [];

          _0x4f5072.idles = [];

          _0x4f5072.actives = [];

          _0x4f5072.ids = [];

          _0x4f5072.pressureIntervals = {};

          _0x4f5072.manager = _0x50d8d4;

          _0x4f5072.id = _0x29d714.id;

          _0x29d714.id += 1;

          _0x4f5072.defaults = {

            zone: document.body,

            multitouch: false,

            maxNumberOfNipples: 10,

            mode: "dynamic",

            position: {

              top: 0,

              left: 0

            },

            catchDistance: 200,

            size: 100,

            threshold: 0.1,

            color: "white",

            fadeTime: 250,

            dataOnly: false,

            restJoystick: true,

            restOpacity: 0.5,

            lockX: false,

            lockY: false,

            dumbBox: null

          };

          _0x4f5072.config(_0x527034);

          if (_0x4f5072.options.mode === "static" || _0x4f5072.options.mode === "semi") {

            _0x4f5072.options.multitouch = false;

          }

          if (!_0x4f5072.options.multitouch) {

            _0x4f5072.options.maxNumberOfNipples = 1;

          }

          _0x4f5072.updateBox();

          _0x4f5072.prepareNipples();

          _0x4f5072.bindings();

          _0x4f5072.begin();

          return _0x4f5072.nipples;

        }

        _0x29d714.prototype = new _0x3a5d63();

        _0x29d714.constructor = _0x29d714;

        _0x29d714.id = 0;

        _0x29d714.prototype.prepareNipples = function () {

          var _0x58d672 = this;

          var _0x4341af = _0x58d672.nipples;

          _0x4341af.on = _0x58d672.on.bind(_0x58d672);

          _0x4341af.off = _0x58d672.off.bind(_0x58d672);

          _0x4341af.options = _0x58d672.options;

          _0x4341af.destroy = _0x58d672.destroy.bind(_0x58d672);

          _0x4341af.ids = _0x58d672.ids;

          _0x4341af.id = _0x58d672.id;

          _0x4341af.processOnMove = _0x58d672.processOnMove.bind(_0x58d672);

          _0x4341af.processOnEnd = _0x58d672.processOnEnd.bind(_0x58d672);

          _0x4341af.get = function (_0xa6d2a6) {

            if (_0xa6d2a6 === undefined) {

              return _0x4341af[0];

            }

            for (var _0x1ecc88 = 0, _0x5363b3 = _0x4341af.length; _0x1ecc88 < _0x5363b3; _0x1ecc88 += 1) {

              if (_0x4341af[_0x1ecc88].identifier === _0xa6d2a6) {

                return _0x4341af[_0x1ecc88];

              }

            }

            return false;

          };

        };

        _0x29d714.prototype.bindings = function () {

          var _0x3f6cef = this;

          _0x3f6cef.bindEvt(_0x3f6cef.options.zone, "start");

          _0x3f6cef.options.zone.style.touchAction = "none";

          _0x3f6cef.options.zone.style.msTouchAction = "none";

        };

        _0x29d714.prototype.begin = function () {

          var _0x12886e = this;

          var _0x1193b1 = _0x12886e.options;

          if (_0x1193b1.mode === "static") {

            var _0x224853 = _0x12886e.createNipple(_0x1193b1.position, _0x12886e.manager.getIdentifier());

            _0x224853.add();

            _0x12886e.idles.push(_0x224853);

          }

        };

        _0x29d714.prototype.createNipple = function (_0x477426, _0x5d2c37) {

          var _0x233a94 = this;

          var _0x131630 = _0x3edfe6.getScroll();

          var _0x46b9e8 = {};

          var _0x492b15 = _0x233a94.options;

          if (_0x477426.x && _0x477426.y) {

            _0x46b9e8 = {

              x: _0x477426.x - (_0x131630.x + _0x233a94.box.left),

              y: _0x477426.y - (_0x131630.y + _0x233a94.box.top)

            };

          } else if (_0x477426.top || _0x477426.right || _0x477426.bottom || _0x477426.left) {

            var _0x4e11c1 = document.createElement("DIV");

            _0x4e11c1.style.display = "hidden";

            _0x4e11c1.style.top = _0x477426.top;

            _0x4e11c1.style.right = _0x477426.right;

            _0x4e11c1.style.bottom = _0x477426.bottom;

            _0x4e11c1.style.left = _0x477426.left;

            _0x4e11c1.style.position = "absolute";

            _0x492b15.zone.appendChild(_0x4e11c1);

            var _0x3cda7e = _0x4e11c1.getBoundingClientRect();

            _0x492b15.zone.removeChild(_0x4e11c1);

            _0x46b9e8 = _0x477426;

            _0x477426 = {

              x: (_0x492b15.dumbBox ? _0x492b15.dumbBox.left : _0x3cda7e.left) + _0x131630.x,

              y: (_0x492b15.dumbBox ? _0x492b15.dumbBox.top : _0x3cda7e.top) + _0x131630.y

            };

          }

          var _0x4b49ef = new _0x4d6ada(_0x233a94, {

            color: _0x492b15.color,

            size: _0x492b15.size,

            threshold: _0x492b15.threshold,

            fadeTime: _0x492b15.fadeTime,

            dataOnly: _0x492b15.dataOnly,

            restJoystick: _0x492b15.restJoystick,

            restOpacity: _0x492b15.restOpacity,

            mode: _0x492b15.mode,

            identifier: _0x5d2c37,

            position: _0x477426,

            zone: _0x492b15.zone,

            frontPosition: {

              x: 0,

              y: 0

            }

          });

          if (!_0x492b15.dataOnly) {

            _0x3edfe6.applyPosition(_0x4b49ef.ui.el, _0x46b9e8);

            _0x3edfe6.applyPosition(_0x4b49ef.ui.front, _0x4b49ef.frontPosition);

          }

          _0x233a94.nipples.push(_0x4b49ef);

          _0x233a94.trigger("added " + _0x4b49ef.identifier + ":added", _0x4b49ef);

          _0x233a94.manager.trigger("added " + _0x4b49ef.identifier + ":added", _0x4b49ef);

          _0x233a94.bindNipple(_0x4b49ef);

          return _0x4b49ef;

        };

        _0x29d714.prototype.updateBox = function () {

          var _0x46ab56 = this;

          _0x46ab56.box = _0x46ab56.options.zone.getBoundingClientRect();

        };

        _0x29d714.prototype.bindNipple = function (_0x5c8482) {

          var _0xcb12ba = this;

          var _0x147113;

          var _0x407300 = function _0x54a627(_0x2c9884, _0x3932f9) {

            _0x147113 = _0x2c9884.type + " " + _0x3932f9.id + ":" + _0x2c9884.type;

            _0xcb12ba.trigger(_0x147113, _0x3932f9);

          };

          _0x5c8482.on("destroyed", _0xcb12ba.onDestroyed.bind(_0xcb12ba));

          _0x5c8482.on("shown hidden rested dir plain", _0x407300);

          _0x5c8482.on("dir:up dir:right dir:down dir:left", _0x407300);

          _0x5c8482.on("plain:up plain:right plain:down plain:left", _0x407300);

        };

        _0x29d714.prototype.pressureFn = function (_0x196493, _0x4acc46, _0x1ef52a) {

          var _0x37b8ff = this;

          var _0x53493e = 0;

          clearInterval(_0x37b8ff.pressureIntervals[_0x1ef52a]);

          _0x37b8ff.pressureIntervals[_0x1ef52a] = setInterval(function () {

            var _0x150faf = _0x196493.force || _0x196493.pressure || _0x196493.webkitForce || 0;

            if (_0x150faf !== _0x53493e) {

              _0x4acc46.trigger("pressure", _0x150faf);

              _0x37b8ff.trigger("pressure " + _0x4acc46.identifier + ":pressure", _0x150faf);

              _0x53493e = _0x150faf;

            }

          }.bind(_0x37b8ff), 100);

        };

        _0x29d714.prototype.onstart = function (_0x17ede9) {

          var _0x183471 = this;

          var _0x55397a = _0x183471.options;

          _0x17ede9 = _0x3edfe6.prepareEvent(_0x17ede9);

          _0x183471.updateBox();

          var _0x335627 = function _0x42657c(_0x49d5bc) {

            if (_0x183471.actives.length < _0x55397a.maxNumberOfNipples) {

              _0x183471.processOnStart(_0x49d5bc);

            }

          };

          _0x3edfe6.map(_0x17ede9, _0x335627);

          _0x183471.manager.bindDocument();

          return false;

        };

        _0x29d714.prototype.processOnStart = function (_0x59e2d8) {

          var _0x5f2cd6 = this;

          var _0xf013a4 = _0x5f2cd6.options;

          var _0x51742c;

          var _0x416ebf = _0x5f2cd6.manager.getIdentifier(_0x59e2d8);

          var _0x43306e = _0x59e2d8.force || _0x59e2d8.pressure || _0x59e2d8.webkitForce || 0;

          var _0x1ce398 = {

            x: _0x59e2d8.pageX,

            y: _0x59e2d8.pageY

          };

          var _0x7cb7e = _0x5f2cd6.getOrCreate(_0x416ebf, _0x1ce398);

          if (_0x7cb7e.identifier !== _0x416ebf) {

            _0x5f2cd6.manager.removeIdentifier(_0x7cb7e.identifier);

          }

          _0x7cb7e.identifier = _0x416ebf;

          var _0x357976 = function _0x59264c(_0x5fe08d) {

            _0x5fe08d.trigger("start", _0x5fe08d);

            _0x5f2cd6.trigger("start " + _0x5fe08d.id + ":start", _0x5fe08d);

            _0x5fe08d.show();

            if (_0x43306e > 0) {

              _0x5f2cd6.pressureFn(_0x59e2d8, _0x5fe08d, _0x5fe08d.identifier);

            }

            _0x5f2cd6.processOnMove(_0x59e2d8);

          };

          if ((_0x51742c = _0x5f2cd6.idles.indexOf(_0x7cb7e)) >= 0) {

            _0x5f2cd6.idles.splice(_0x51742c, 1);

          }

          _0x5f2cd6.actives.push(_0x7cb7e);

          _0x5f2cd6.ids.push(_0x7cb7e.identifier);

          if (_0xf013a4.mode !== "semi") {

            _0x357976(_0x7cb7e);

          } else {

            var _0x1217c9 = _0x3edfe6.distance(_0x1ce398, _0x7cb7e.position);

            if (_0x1217c9 <= _0xf013a4.catchDistance) {

              _0x357976(_0x7cb7e);

            } else {

              _0x7cb7e.destroy();

              _0x5f2cd6.processOnStart(_0x59e2d8);

              return;

            }

          }

          return _0x7cb7e;

        };

        _0x29d714.prototype.getOrCreate = function (_0x440af5, _0x4fceaa) {

          var _0x425b7a = this;

          var _0xe3238e = _0x425b7a.options;

          var _0x40ba4;

          if (/(semi|static)/.test(_0xe3238e.mode)) {

            _0x40ba4 = _0x425b7a.idles[0];

            if (_0x40ba4) {

              _0x425b7a.idles.splice(0, 1);

              return _0x40ba4;

            }

            if (_0xe3238e.mode === "semi") {

              return _0x425b7a.createNipple(_0x4fceaa, _0x440af5);

            }

            console.warn("Coudln't find the needed nipple.");

            return false;

          }

          _0x40ba4 = _0x425b7a.createNipple(_0x4fceaa, _0x440af5);

          return _0x40ba4;

        };

        _0x29d714.prototype.processOnMove = function (_0x3712f7) {

          var _0x18fcf4 = this;

          var _0x3168fe = _0x18fcf4.options;

          var _0x2eb001 = _0x18fcf4.manager.getIdentifier(_0x3712f7);

          var _0x242ace = _0x18fcf4.nipples.get(_0x2eb001);

          if (!_0x242ace) {

            console.error("Found zombie joystick with ID " + _0x2eb001);

            _0x18fcf4.manager.removeIdentifier(_0x2eb001);

            return;

          }

          _0x242ace.identifier = _0x2eb001;

          var _0x1d3ee4 = _0x242ace.options.size / 2;

          var _0x45de3c = {

            x: _0x3712f7.pageX,

            y: _0x3712f7.pageY

          };

          var _0x1d0c2d = _0x3edfe6.distance(_0x45de3c, _0x242ace.position);

          var _0x2115cb = _0x3edfe6.angle(_0x45de3c, _0x242ace.position);

          var _0x3abee7 = _0x3edfe6.radians(_0x2115cb);

          var _0x21a59c = _0x1d0c2d / _0x1d3ee4;

          if (_0x1d0c2d > _0x1d3ee4) {

            _0x1d0c2d = _0x1d3ee4;

            _0x45de3c = _0x3edfe6.findCoord(_0x242ace.position, _0x1d0c2d, _0x2115cb);

          }

          var _0x3f86cf = _0x45de3c.x - _0x242ace.position.x;

          var _0x377a8f = _0x45de3c.y - _0x242ace.position.y;

          if (_0x3168fe.lockX) {

            _0x377a8f = 0;

          }

          if (_0x3168fe.lockY) {

            _0x3f86cf = 0;

          }

          _0x242ace.frontPosition = {

            x: _0x3f86cf,

            y: _0x377a8f

          };

          if (!_0x3168fe.dataOnly) {

            _0x3edfe6.applyPosition(_0x242ace.ui.front, _0x242ace.frontPosition);

          }

          var _0x1a8a81 = {

            identifier: _0x242ace.identifier,

            position: _0x45de3c,

            force: _0x21a59c,

            pressure: _0x3712f7.force || _0x3712f7.pressure || _0x3712f7.webkitForce || 0,

            distance: _0x1d0c2d,

            angle: {

              radian: _0x3abee7,

              degree: _0x2115cb

            },

            instance: _0x242ace,

            lockX: _0x3168fe.lockX,

            lockY: _0x3168fe.lockY

          };

          _0x1a8a81 = _0x242ace.computeDirection(_0x1a8a81);

          _0x1a8a81.angle = {

            radian: _0x3edfe6.radians(180 - _0x2115cb),

            degree: 180 - _0x2115cb

          };

          _0x242ace.trigger("move", _0x1a8a81);

          _0x18fcf4.trigger("move " + _0x242ace.id + ":move", _0x1a8a81);

        };

        _0x29d714.prototype.processOnEnd = function (_0x28f296) {

          var _0x166750 = this;

          var _0x341cbd = _0x166750.options;

          var _0x2c9a13 = _0x166750.manager.getIdentifier(_0x28f296);

          var _0x1e0baf = _0x166750.nipples.get(_0x2c9a13);

          var _0x555839 = _0x166750.manager.removeIdentifier(_0x1e0baf.identifier);

          if (!_0x1e0baf) {

            return;

          }

          if (!_0x341cbd.dataOnly) {

            _0x1e0baf.hide(function () {

              if (_0x341cbd.mode === "dynamic") {

                _0x1e0baf.trigger("removed", _0x1e0baf);

                _0x166750.trigger("removed " + _0x1e0baf.id + ":removed", _0x1e0baf);

                _0x166750.manager.trigger("removed " + _0x1e0baf.id + ":removed", _0x1e0baf);

                _0x1e0baf.destroy();

              }

            });

          }

          clearInterval(_0x166750.pressureIntervals[_0x1e0baf.identifier]);

          _0x1e0baf.resetDirection();

          _0x1e0baf.trigger("end", _0x1e0baf);

          _0x166750.trigger("end " + _0x1e0baf.id + ":end", _0x1e0baf);

          if (_0x166750.ids.indexOf(_0x1e0baf.identifier) >= 0) {

            _0x166750.ids.splice(_0x166750.ids.indexOf(_0x1e0baf.identifier), 1);

          }

          if (_0x166750.actives.indexOf(_0x1e0baf) >= 0) {

            _0x166750.actives.splice(_0x166750.actives.indexOf(_0x1e0baf), 1);

          }

          if (/(semi|static)/.test(_0x341cbd.mode)) {

            _0x166750.idles.push(_0x1e0baf);

          } else if (_0x166750.nipples.indexOf(_0x1e0baf) >= 0) {

            _0x166750.nipples.splice(_0x166750.nipples.indexOf(_0x1e0baf), 1);

          }

          _0x166750.manager.unbindDocument();

          if (/(semi|static)/.test(_0x341cbd.mode)) {

            _0x166750.manager.ids[_0x555839.id] = _0x555839.identifier;

          }

        };

        _0x29d714.prototype.onDestroyed = function (_0x2a7f1f, _0x4d9729) {

          var _0x802bf8 = this;

          if (_0x802bf8.nipples.indexOf(_0x4d9729) >= 0) {

            _0x802bf8.nipples.splice(_0x802bf8.nipples.indexOf(_0x4d9729), 1);

          }

          if (_0x802bf8.actives.indexOf(_0x4d9729) >= 0) {

            _0x802bf8.actives.splice(_0x802bf8.actives.indexOf(_0x4d9729), 1);

          }

          if (_0x802bf8.idles.indexOf(_0x4d9729) >= 0) {

            _0x802bf8.idles.splice(_0x802bf8.idles.indexOf(_0x4d9729), 1);

          }

          if (_0x802bf8.ids.indexOf(_0x4d9729.identifier) >= 0) {

            _0x802bf8.ids.splice(_0x802bf8.ids.indexOf(_0x4d9729.identifier), 1);

          }

          _0x802bf8.manager.removeIdentifier(_0x4d9729.identifier);

          _0x802bf8.manager.unbindDocument();

        };

        _0x29d714.prototype.destroy = function () {

          var _0x34776f = this;

          _0x34776f.unbindEvt(_0x34776f.options.zone, "start");

          _0x34776f.nipples.forEach(function (_0x54351b) {

            _0x54351b.destroy();

          });

          for (var _0x4161bb in _0x34776f.pressureIntervals) {

            if (_0x34776f.pressureIntervals.hasOwnProperty(_0x4161bb)) {

              clearInterval(_0x34776f.pressureIntervals[_0x4161bb]);

            }

          }

          _0x34776f.trigger("destroyed", _0x34776f.nipples);

          _0x34776f.manager.unbindDocument();

          _0x34776f.off();

        };

        function _0x27efa6(_0x2511b5) {

          var _0x447e99 = this;

          _0x447e99.ids = {};

          _0x447e99.index = 0;

          _0x447e99.collections = [];

          _0x447e99.config(_0x2511b5);

          _0x447e99.prepareCollections();

          var _0x3a735d;

          _0x3edfe6.bindEvt(window, "resize", function (_0x1953bf) {

            clearTimeout(_0x3a735d);

            _0x3a735d = setTimeout(function () {

              var _0x229253;

              var _0x54a2cf = _0x3edfe6.getScroll();

              _0x447e99.collections.forEach(function (_0x51ac47) {

                _0x51ac47.forEach(function (_0x1e78c2) {

                  _0x229253 = _0x1e78c2.el.getBoundingClientRect();

                  _0x1e78c2.position = {

                    x: _0x54a2cf.x + _0x229253.left,

                    y: _0x54a2cf.y + _0x229253.top

                  };

                });

              });

            }, 100);

          });

          return _0x447e99.collections;

        }

        ;

        _0x27efa6.prototype = new _0x3a5d63();

        _0x27efa6.constructor = _0x27efa6;

        _0x27efa6.prototype.prepareCollections = function () {

          var _0x28364c = this;

          _0x28364c.collections.create = _0x28364c.create.bind(_0x28364c);

          _0x28364c.collections.on = _0x28364c.on.bind(_0x28364c);

          _0x28364c.collections.off = _0x28364c.off.bind(_0x28364c);

          _0x28364c.collections.destroy = _0x28364c.destroy.bind(_0x28364c);

          _0x28364c.collections.get = function (_0x12225f) {

            var _0x3b7cc8;

            _0x28364c.collections.every(function (_0x450fd0) {

              if (_0x3b7cc8 = _0x450fd0.get(_0x12225f)) {

                return false;

              }

              return true;

            });

            return _0x3b7cc8;

          };

        };

        _0x27efa6.prototype.create = function (_0x4bc83f) {

          return this.createCollection(_0x4bc83f);

        };

        _0x27efa6.prototype.createCollection = function (_0x7f1d93) {

          var _0x2e1068 = this;

          var _0xffe39a = new _0x29d714(_0x2e1068, _0x7f1d93);

          _0x2e1068.bindCollection(_0xffe39a);

          _0x2e1068.collections.push(_0xffe39a);

          return _0xffe39a;

        };

        _0x27efa6.prototype.bindCollection = function (_0x1cf189) {

          var _0x47f61c = this;

          var _0x538e07;

          var _0x375ab3 = function _0xbca52d(_0x3c6d97, _0x5397b1) {

            _0x538e07 = _0x3c6d97.type + " " + _0x5397b1.id + ":" + _0x3c6d97.type;

            _0x47f61c.trigger(_0x538e07, _0x5397b1);

          };

          _0x1cf189.on("destroyed", _0x47f61c.onDestroyed.bind(_0x47f61c));

          _0x1cf189.on("shown hidden rested dir plain", _0x375ab3);

          _0x1cf189.on("dir:up dir:right dir:down dir:left", _0x375ab3);

          _0x1cf189.on("plain:up plain:right plain:down plain:left", _0x375ab3);

        };

        _0x27efa6.prototype.bindDocument = function () {

          var _0x57f9ef = this;

          if (!_0x57f9ef.binded) {

            _0x57f9ef.bindEvt(document, "move").bindEvt(document, "end");

            _0x57f9ef.binded = true;

          }

        };

        _0x27efa6.prototype.unbindDocument = function (_0x22a7f5) {

          var _0x487ad8 = this;

          if (!Object.keys(_0x487ad8.ids).length || _0x22a7f5 === true) {

            _0x487ad8.unbindEvt(document, "move").unbindEvt(document, "end");

            _0x487ad8.binded = false;

          }

        };

        _0x27efa6.prototype.getIdentifier = function (_0x5bfa07) {

          var _0x27408a;

          if (!_0x5bfa07) {

            _0x27408a = this.index;

          } else {

            _0x27408a = _0x5bfa07.identifier === undefined ? _0x5bfa07.pointerId : _0x5bfa07.identifier;

            if (_0x27408a === undefined) {

              _0x27408a = this.latest || 0;

            }

          }

          if (this.ids[_0x27408a] === undefined) {

            this.ids[_0x27408a] = this.index;

            this.index += 1;

          }

          this.latest = _0x27408a;

          return this.ids[_0x27408a];

        };

        _0x27efa6.prototype.removeIdentifier = function (_0x4fd709) {

          var _0x17d5f7 = {};

          for (var _0x2f3701 in this.ids) {

            if (this.ids[_0x2f3701] === _0x4fd709) {

              _0x17d5f7.id = _0x2f3701;

              _0x17d5f7.identifier = this.ids[_0x2f3701];

              delete this.ids[_0x2f3701];

              break;

            }

          }

          return _0x17d5f7;

        };

        _0x27efa6.prototype.onmove = function (_0x4a8159) {

          var _0x526099 = this;

          _0x526099.onAny("move", _0x4a8159);

          return false;

        };

        _0x27efa6.prototype.onend = function (_0x591aa9) {

          var _0x5d9d8f = this;

          _0x5d9d8f.onAny("end", _0x591aa9);

          return false;

        };

        _0x27efa6.prototype.oncancel = function (_0x4ec01e) {

          var _0x7f65f = this;

          _0x7f65f.onAny("end", _0x4ec01e);

          return false;

        };

        _0x27efa6.prototype.onAny = function (_0x453f8d, _0x45483c) {

          var _0x13bed2 = this;

          var _0x3af86e;

          var _0x38e6d3 = "processOn" + _0x453f8d.charAt(0).toUpperCase() + _0x453f8d.slice(1);

          _0x45483c = _0x3edfe6.prepareEvent(_0x45483c);

          var _0x1092df = function _0x1eeeb3(_0x186712, _0x41ceb0, _0x443c2b) {

            if (_0x443c2b.ids.indexOf(_0x41ceb0) >= 0) {

              _0x443c2b[_0x38e6d3](_0x186712);

              _0x186712._found_ = true;

            }

          };

          var _0x13fe88 = function _0x28dedf(_0x25e0fa) {

            _0x3af86e = _0x13bed2.getIdentifier(_0x25e0fa);

            _0x3edfe6.map(_0x13bed2.collections, _0x1092df.bind(null, _0x25e0fa, _0x3af86e));

            if (!_0x25e0fa._found_) {

              _0x13bed2.removeIdentifier(_0x3af86e);

            }

          };

          _0x3edfe6.map(_0x45483c, _0x13fe88);

          return false;

        };

        _0x27efa6.prototype.destroy = function () {

          var _0x297cd9 = this;

          _0x297cd9.unbindDocument(true);

          _0x297cd9.ids = {};

          _0x297cd9.index = 0;

          _0x297cd9.collections.forEach(function (_0x3a08fa) {

            _0x3a08fa.destroy();

          });

          _0x297cd9.off();

        };

        _0x27efa6.prototype.onDestroyed = function (_0xf00de0, _0x2c703c) {

          var _0x39fa13 = this;

          if (_0x39fa13.collections.indexOf(_0x2c703c) < 0) {

            return false;

          }

          _0x39fa13.collections.splice(_0x39fa13.collections.indexOf(_0x2c703c), 1);

        };

        var _0x5b9fd5 = new _0x27efa6();

        return {

          create: function _0xac3946(_0x1e2457) {

            return _0x5b9fd5.create(_0x1e2457);

          },

          factory: _0x5b9fd5

        };

      });

      var _0x3b8b0f = false;

      var _0x309b30 = true;

      var _0x3ee884 = 2;

      var _0x242f64 = null;

      var _0x2614f5 = 1;

      var _0x25c7fd = null;

      var _0x6cbaac = {};

      var _0xde0406 = 0;

      window.createLine = function (_0x14f74, _0x81f631) {

        var _0x2d5298 = new PIXI.Graphics();

        var _0xeda465 = "#ff0000";

        if (bbs.laserColor && typeof bbs.laserColor === "string") {

          _0xeda465 = parseInt(bbs.laserColor.toString().replace("#", "0x"));

        }

        _0x2d5298.lineStyle(bbs.laser || 0.2, _0xeda465, 1);

        _0x2d5298.moveTo(0, 0);

        _0x2d5298.lineTo(0, 0);

        _0x2d5298.zIndex = 10001;

        _0x2d5298.name = "lineHS";

        _0x2d5298.alpha = 0;

        _0x2d5298.filters = [new PIXI.filters.BlurFilter(5)];

        _0x14f74.addChild(_0x2d5298);

      };

      window.movimentaLinha = function () {

        try {

          if (!_wwc._anApp.dh.ch.Nm) {

            return;

          }

          var _0x55c9d6 = _wwc._anApp.og.af.ng.mf.getChildByName("lineHS");

          var _0xce33e1 = _wwc._anApp.dh.ch.Nm.oc;

          var _0x42aa46 = _0xce33e1.position.x;

          var _0x16b484 = _0xce33e1.position.y;

          var _0xbf88fc = "#ff0000";

          if (bbs.laserColor && typeof bbs.laserColor === "string") {

            _0xbf88fc = parseInt(bbs.laserColor.toString().replace("#", "0x"));

          }

          _0x55c9d6.lineStyle(bbs.laser || 0.2, _0xbf88fc, 1);

          _0x55c9d6.clear();

          _0x55c9d6.lineStyle(bbs.laser || 0.1, _0xbf88fc, 1);

          _0x55c9d6.moveTo(0, 0);

          _0x55c9d6.lineTo(_0x42aa46, _0x16b484);

          if (bbs.laserActive && _wwc.ismobile) {

            _0x55c9d6.alpha = 0.3;

          }

          _0x55c9d6.filters = [new PIXI.filters.BlurFilter(5)];

        } catch (_0x457d70) {

          console.error(_0x457d70);

        }

      };

      window.gerarCodigoUnico = function () {

        var _0x4bf65b = bbs.userId || "";

        var _0x28f214 = _0x4bf65b.match(/\d/g);

        var _0x510440 = (_0x28f214 || []).reduce(function (_0x26250f, _0x4e4ad8) {

          return _0x26250f + parseInt(_0x4e4ad8, 10);

        }, 0);

        var _0x386875 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        var _0x1e26d6 = 5;

        var _0x127f05 = "";

        var _0x5c1e1c = "";

        for (var _0x5669b6 = 0; _0x5669b6 < _0x1e26d6; _0x5669b6++) {

          var _0x483b30 = Math.floor(Math.random() * _0x386875.length);

          _0x127f05 += _0x386875.charAt(_0x483b30);

          var _0x4289a2 = Math.floor(Math.random() * _0x386875.length);

          _0x5c1e1c += _0x386875.charAt(_0x4289a2);

        }

        return "ROOM" + _0x5c1e1c + "_" + _0x510440 + "_" + _0x127f05;

      };

      var _0x3a85d3 = {

        sao: "wss://nycsam01.wormworld.io",

        dal: "wss://nycsam01.wormworld.io",

        hil: "wss://nycsam01.wormworld.io",

        vin: "wss://nycsam01.wormworld.io",

        fra: "wss://fraceu01.wormworld.io",

        gra: "wss://fraceu01.wormworld.io",

        dxb: "wss://fraceu01.wormworld.io",

        sin: "wss://sin01.wormworld.io",

        tok: "wss://sin01.wormworld.io",

        local: "ws://localhost:5001"

      };

      var _0x4f8045 = {

        fra: [30055, 31770, 30106, 30339, 30106],

        gra: [32054, 31038],

        sin: [31764, 30165, 30703, 31211, 31026, 32677, 31211, 31203],

        tok: [30171, 31091],

        sao: [30208, 31770, 31533, 30208, 30327, 30786, 32609],

        hil: [30162, 30042, 32403, 30296],

        dal: [31091, 31230, 32584, 31750],

        dxb: [32703, 31975, 32650],

        vin: [32368]

      };

      var _0x2a3828 = ["sao", "dal", "hil", "vin", "fra", "gra", "sin", "tok", "dxb"];

      var _0x493371 = {

        loaded: false,

        sprites: {},

        textures: {},

        resources: {}

      };

      $("#mm-params-nickname").attr("maxlength", _0x30b68b);

      var _0x49249a = {

        ref: [],

        hs: {},

        fxdo: function _0x207d84(_0x4da763) {

          if (bbs.activeSounds2 && bbs.start) {

            if (!_0x49249a[_0x4da763].playing()) {

              _0x49249a[_0x4da763].play();

            }

          }

        },

        fxAux: function _0x4f5ab8(_0x587b99, _0x3cf0d4) {

          if (_0x3cf0d4 === 1 && !_0x49249a.fxStatus.top1) {

            _0x49249a.fxStatus.top1 = true;

            _0x49249a.fxdo("top1");

          }

          return _0x587b99;

        },

        fxStatus: {

          top1: false

        }

      };

      window._wwcio = {

        message: null,

        obj: {},

        player: {},

        join: function _0x483644() {},

        update: function _0x2e6ee0() {},

        leave: function _0xa15770() {},

        leaderboardUpdated: function _0x3a79cc(_0x128864, _0x5dadca) {

          _0x522f60(_0x128864, _0x5dadca);

        },

        sendLocation: function _0x49b1d0() {},

        findFriend: function _0x5b1baa() {},

        close: function _0x3f262e() {},

        set: function _0x3fe0b0(_0x48d8de) {

          return _0x48d8de;

        },

        friend: null,

        myLocation: {},

        crown: null

      };

      window._wwc = {

        deadPositionMap: function _0x5e76c4() {

          var _0x5219d7 = new PIXI.Text("X", _wwc.fontStyleMap());

          _0x5219d7.position.x = _wwc.memory.positionOfDead.x;

          _0x5219d7.position.y = _wwc.memory.positionOfDead.y;

          _wwc._anApp.og.af.ng.Tg.addChild(_0x5219d7);

          var _0x30b1a8 = 0;

          var _0x5cfc33 = setInterval(function () {

            _0x30b1a8 = !_0x30b1a8;

            _0x5219d7.alpha = _0x30b1a8;

          }, 500);

          var _0x225118 = setTimeout(function () {

            clearInterval(_0x5cfc33);

            if (!_wwc._anApp.og.af.ng.Tg) {

              return;

            }

            _wwc._anApp.og.af.ng.Tg.removeChild(_0x5219d7);

            _0x5219d7.destroy();

          }, 60000);

          _wwc.removeDeadPositionMap = function () {

            clearInterval(_0x5cfc33);

            clearTimeout(_0x225118);

            if (!_wwc._anApp.og.af.ng.Tg) {

              return;

            }

            _wwc._anApp.og.af.ng.Tg.removeChild(_0x5219d7);

            if (_0x5219d7 && _0x5219d7.destroy) {

              _0x5219d7.destroy();

            }

          };

        },

        fontStyleMap: function _0x3afe2d(_0x50943c) {

          return {

            fontFamily: "Arial",

            fontSize: "12px",

            fill: "red",

            align: "center",

            fontWeight: "bold"

          };

        },

        startGame: function _0x328231() {

          if (_wwc.memory.positionOfDead) {

            var _0x564657 = _wwc.deadPositionMap();

          }

        },

        stopGame: function _0x2482e7() {

          var _0x5d3b1d;

          var _0x46eab8;

          _wwcio.close();

          _wwcio.findFriendActived = false;

          if (!_wwcio.myLocation) {

            return;

          }

          _wwc.memory.positionOfDead = {

            x: (_0x5d3b1d = _wwcio.myLocation) === null || _0x5d3b1d === undefined || (_0x5d3b1d = _0x5d3b1d.position) === null || _0x5d3b1d === undefined ? undefined : _0x5d3b1d.x,

            y: (_0x46eab8 = _wwcio.myLocation) === null || _0x46eab8 === undefined || (_0x46eab8 = _0x46eab8.position) === null || _0x46eab8 === undefined ? undefined : _0x46eab8.y

          };

          if (_wwc.removeDeadPositionMap) {

            _wwc.removeDeadPositionMap();

          }

        },

        memory: {},

        mySkin: null,

        customPaths: {

          map: null

        },

        _ass_type: [],

        testSkinMod: function _0x19e5cf(_0x4a2a8d) {

          var _0xb42f7 = typeof _0x4a2a8d === "string";

          _0x4a2a8d = parseInt(_0x4a2a8d);

          if (_0xb42f7 && isNaN(_0x4a2a8d)) {

            return false;

          } else {

            return parseInt(_0x4a2a8d) >= 399 && parseInt(_0x4a2a8d) < 8999;

          }

        },

        testWear: function _0x4e54d6(_0x436e5f) {

          var _0x3573f7 = typeof _0x436e5f === "string";

          _0x436e5f = parseInt(_0x436e5f);

          if (_0x3573f7 && isNaN(_0x436e5f)) {

            return false;

          } else {

            return parseInt(_0x436e5f) >= 399 && parseInt(_0x436e5f) < 8999;

          }

        },

        isNumberValid: function _0x16f729(_0x4f3633) {

          return _0x4f3633 !== "" && _0x4f3633 !== null && _0x4f3633 !== undefined && !isNaN(_0x4f3633);

        },

        validInputWear: function _0x2c9862(_0x51f82b) {

          var _0x2a99bb = _wwc.testWear(_0x51f82b);

          var _0x9b7b4c = typeof skinId === "string";

          if (!_0x2a99bb && !_0x9b7b4c) {

            return _0x51f82b;

          }

          return 0;

        },

        validInput: function _0x3c2211(_0x20798b) {

          var _0x4e1f0c = _wwc.testSkinMod(_0x20798b);

          var _0x5f4ef9 = typeof _0x20798b === "string";

          if (!_0x4e1f0c && !_0x5f4ef9) {

            return _0x20798b;

          }

          try {

            var _0x51c86f = $("#inputReplaceSkin").val();

            return encodeURI(_wwc.isNumberValid(_0x51c86f) ? _0x51c86f : bbs.idReplaceSkin || 35);

          } catch (_0x12c01d) {

            return encodeURI(35);

          }

        },

        fullscreen: null,

        joystick: function _0x58f660(_0x10f8ae) {

          var _0x1a1c1d = {

            checked: true,

            color: "red",

            mode: "dynamic",

            positionMode: "L",

            size: 100,

            pxy: 100

          };

          return _0x1a1c1d;

        },

        load_con: function _0x5e52e9() {

          $(".selecionar-sala-v2").click(function (_0x45b1c6) {

            _0x45b1c6.preventDefault();

            var _0x17941c = $(this).attr("data-con") || bbs.con;

            var _0x419512 = $(this).attr("data-type");

            w2c2020.addRoom($(this).attr("data-room"));

            _0x1f8817.dh.Zp = function (_0x6f2177, _0x4817dc, _0x5cd26d) {

              bbs.con = _0x5cd26d ? _0x6f2177 : _0x17941c || _0x6f2177;

              _wwc.Zp(bbs.con, _0x4817dc);

            };

            _0x1f8817.Pn();

          });

        },

        fnSaveGame: function _0x86cb37() {

          var _0x529ab9 = $("#saveGame");

          _0x529ab9.prop("checked", bbs.saveGame);

          _0x529ab9.change(function () {

            if (!this.checked) {

              var _0x3e5ec0 = confirm("PORTUGUES:\nAtenÃ§Ã£o: os registros seram apagados; Confirma?\n\nEnglish:\nAttention: the records will be deleted; Confirm?\n\nArabic:\nØªÙ†Ø¨ÙŠÙ‡: Ø³ÙŠØªÙ… Ø­Ø°Ù  Ø§Ù„Ø³Ø¬Ù„Ø§Øª Ø› ØªØ¤ÙƒØ¯ØŸ");

              $(this).prop("checked", !_0x3e5ec0);

              if (!this.checked) {

                _wwc.fnSetCounts("zerar");

              }

            }

            bbs.saveGame = this.checked;

            w2c2020.hsTotal.alpha = this.checked ? 1 : 0;

            w2c2020.killTotal.alpha = this.checked ? 1 : 0;

            localStorage.setItem("wwcSaveGame", this.checked ? JSON.stringify(bbs) : null);

          });

        },

        fnSetCounts: function _0x59d908(_0x4dbad6, _0x4d865a) {

          var _0x286b2b = function _0x8816ce(_0x35cc0d, _0x351343, _0x3be4e4, _0x125fb7) {

            _wwc.setCountGame(_0x35cc0d, _0x351343, _0x3be4e4, _0x125fb7);

          };

          if (_0x4dbad6 === "count") {

            bbs.kill = (bbs.kill || 0) + (_0x4d865a ? 0 : 1);

            bbs.headshot = (bbs.headshot || 0) + (_0x4d865a ? 1 : 0);

            bbs.HOL = bbs.headshot > bbs.HOL ? bbs.headshot : bbs.HOL;

            bbs.tkill = bbs.tkill + (_0x4d865a ? 0 : 1);

            bbs.theadshot = bbs.theadshot + (_0x4d865a ? 1 : 0);

          }

          if (_0x4dbad6 === "open") {

            bbs.kill = 0;

            bbs.headshot = 0;

            if (bbs.saveGame) {}

          }

          if (_0x4dbad6 === "close") {

            if (bbs.saveGame) {

              bbs.died = (bbs.died || 0) + 1;

            } else {

              _wwc.fnSetCounts("zerar");

            }

          }

          if (_0x4dbad6 === "zerar") {

            bbs.kill = 0;

            bbs.tkill = 0;

            bbs.headshot = 0;

            bbs.theadshot = 0;

            bbs.died = 0;

          }

          _0x286b2b(bbs.kill, bbs.headshot, bbs.tkill, bbs.theadshot);

          localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

        },

        setCountGame: function _0x14ddcd(_0x3adc21, _0xc0fa44, _0x2f2cba, _0x449077) {

          if (!bbs.saveGame) {

            w2c2020.hsTotal.alpha = 0;

            w2c2020.killTotal.alpha = 0;

          }

          w2c2020.hs.text = _0xc0fa44;

          w2c2020.hsTotal.text = _0x449077;

          w2c2020.kill.text = _0x3adc21;

          w2c2020.killTotal.text = _0x2f2cba;

        },

        ismobile: _0x44b844(),

        Zp: undefined

      };

      window.bbs = {

        version: 0,

        headshot: 0,

        kill: 0,

        theadshot: 0,

        tkill: 0,

        died: 0,

        start: 0,

        HOL: 0,

        tk: null,

        country: null,

        finish: 0,

        saveGame: false,

        idReplaceSkin: 34,

        mobile: false,

        joystick: null,

        configJoystick: {

          buttons: {

            respawn: {

              label: "RESPAWN",

              labelAbbreviation: "RP",

              active: false,

              action: "mbf.mbfass6()"

            },

            lobby: {

              label: "LOBBY",

              labelAbbreviation: "L",

              active: true,

              action: "mbf.mbfass5()"

            },

            rotate: {

              label: "ROTATE",

              labelAbbreviation: "A",

              active: true,

              action: "mbf.mbfass4()"

            },

            snail: {

              label: "SNAIL",

              labelAbbreviation: "B",

              active: true,

              action: "mbf.mbfass3()"

            },

            search: {

              label: "SEARCH",

              labelAbbreviation: "SE",

              active: false,

              action: "mbf.mbfass0()"

            },

            swap: {

              label: "SWAP",

              labelAbbreviation: "SW",

              active: false,

              action: "mbf.mbf_cambiar()"

            },

            zoomplus: {

              label: "Z+",

              labelAbbreviation: "+",

              active: true,

              action: "mbf.mbfass1()"

            },

            zoomminus: {

              label: "Z-",

              labelAbbreviation: "-",

              active: true,

              action: "mbf.mbfass2()"

            },

            zoom: {

              label: "x1",

              labelAbbreviation: "x1",

              active: true,

              action: "mbf.mbfass7()"

            }

          },

          typeZoom: ["btn", "range"],

          typeCurrent: "btn",

          typeName: ["all", "abb"],

          typeCurrentName: "abb"

        },

        customJoystick: null,

        display: {

          customClock: null,

          clock: {

            x: 60,

            y: 60

          },

          top: {

            x: 225,

            y: 1

          },

          default: false,

          custom: false,

          m: {

            x: 60,

            y: 60

          },

          r: {

            x: 225,

            y: 1

          },

          ms: false

        },

        PropertyManager: {},

        acs: true,

        lr: false,

        showTophs: false,

        showRechs: false,

        con: null,

        params: "",

        arrow: true,

        activeBadLang: false,

        activeSounds2: true,

        activeZoom: true,

        activeZoomMobile: true,

        hudPositionMode: 0,

        top10Show: [],

        background: null,

        backgroundIsCustom: false,

        nickname: null,

        code: null,

        configZoom: {

          limitDown: 0.25,

          step: 0.25,

          closeUp: 0.5,

          closeDown: 1

        },

        laserActive: false,

        laserColor: 16711680,

        laser: 0.1,

        displayFriends: {

          x: -10,

          y: 315,

          rotation: 0

        },

        enemyNameColor: null,

        enemyNameFontSize: null,

        novidadewormworld: 0

      };

      var _0x2a2048 = localStorage.getItem("wwc_version");

      var _0x4064a2 = localStorage.getItem("wwcSaveGame");

      var _0x13cb7c = localStorage.getItem("wwc_config");

      _0x4064a2 &&= JSON.parse(_0x4064a2);

      for (var _0x131433 in _0x4064a2) {

        switch (_0x131433) {

          case "configJoystick":

            if (!_0x4064a2[_0x131433]) {

              break;

            }

            bbs[_0x131433] = _0x4064a2[_0x131433];

            for (var _0x3e4400 in _0x4064a2[_0x131433].buttons) {

              bbs[_0x131433].buttons[_0x3e4400] = _0x4064a2[_0x131433].buttons[_0x3e4400];

            }

            for (var _0x1b445a in _0x4064a2[_0x131433]) {

              bbs[_0x131433][_0x1b445a] = _0x4064a2[_0x131433][_0x1b445a];

            }

            break;

          case "joystick":

            bbs[_0x131433] = _wwc.joystick();

            for (var _0x4f5851 in _0x4064a2[_0x131433]) {

              bbs[_0x131433][_0x4f5851] = _0x4064a2[_0x131433][_0x4f5851];

            }

            break;

          case "display":

            for (var _0x54333f in _0x4064a2[_0x131433]) {

              bbs[_0x131433][_0x54333f] = _0x4064a2[_0x131433][_0x54333f];

            }

            break;

          default:

            bbs[_0x131433] = _0x4064a2[_0x131433];

            break;

        }

      }

      if (!bbs.version || bbs.version !== _0x3ee884) {

        bbs.version = _0x3ee884;

        bbs.joystick = _wwc.joystick();

      }

      

      

      bbs.loading = true;

      window.respawnFn = function () {

        _0x1f8817.dh.Cn = 0;

        if (_0x1f8817.dh.mq) {

          _0x1f8817.dh.mq.close();

        }

        _0x1f8817.dh.mq = null;

        _0x1f8817.dh.Zp = function (_0x3c5637, _0x4cf567) {

          _wwc.Zp(bbs.con || _0x3c5637, _0x4cf567);

        };

        _0x1f8817.Pn();

      };

      window.lobbyFn = function () {

        _0x1f8817.dh.Cn = 0;

        if (_0x1f8817.dh.mq) {

          _0x1f8817.dh.mq.close();

        }

        _0x1f8817.dh.mq = null;

        _0x1f8817.dh.Np();

        _0x3e8ba8();

      };

      $("<button type=\"button\" id=\"mm-wwc\" style=\"float: right;line-height: 48px;width: 70px;background: #00ccff;color: #FFF;font-weight: bold;margin-right: 5px;border-radius: 15px; cursor: pointer;box-shadow: 0 0 8px 2px rgba(0, 200, 255, 0.5), 0 0 15px 4px rgba(0, 200, 255, 0.3);text-shadow: 0 0 3px rgba(0, 200, 255, 0.5);animation: mmwwcGlow 2s ease-in-out infinite;\">⚙️</button>").insertAfter("#mm-store");

      $(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");

      $(".wear-view-cont").append("<div id=\"idWearViewCont\"></div>");

      var _0x14afd1 = "display:none;position:relative;background:#FFF;padding:15px;max-width:680px;margin:10px auto;";

      if (_wwc.ismobile) {

        _0x14afd1 = "display:none;position:relative;\n                  background:#FFF;padding:20px;\n                  width:calc(100vw - var(--scrollbar-width));\n                  height:100vh;";

      }

      $("body").append(`<div id="wwc-set-view" class="base-popup-view" style="${_0x14afd1}"></div>`);

      var _0x1b61c5 = "ass";

      window.mbf = {};

      var _0x517127 = function _0x1eef04(_0x67e6aa) {

        if (bbs.shiftKey) {

          return;

        }

        var _0xafa882 = 30;

        var _0x4ff870 = 0;

        var _0x50afd1 = false;

        function _0x5f0ef3() {

          var _0x50f2ff = parseFloat(_0x1f8817.og.af.Bn);

          _0x50f2ff = (_0x50f2ff - 0.06) % (Math.PI * 2);

          if (_0x50f2ff < 0) {

            _0x50f2ff += Math.PI * 2;

          }

          _0x1f8817.og.af.Bn = _0x50f2ff.toFixed(2);

        }

        function _0x4c88ad(_0x16b76b) {

          _0x3b8b0f = setInterval(function () {

            if (_0x16b76b === 1) {

              _0x4ff870 = _0x50afd1 ? _0x4ff870 - 1 : _0x4ff870 + 1;

              if (_0x4ff870 % 80 === 0 && !_0x50afd1) {

                _0xafa882 = _0xafa882 + 18;

                clearInterval(_0x3b8b0f);

                _0x4c88ad(1);

              }

            }

            _0x5f0ef3();

          }, _0xafa882);

        }

        if ((_0x67e6aa == 7 || _0x67e6aa.key == "7") && _0x3b8b0f === null) {

          _0x1f8817.og.af.ng.Eb.removeEventListener("pointermove", mbf.onmovepoint, true);

          _0x4c88ad(1);

          return;

        }

        if ((_0x67e6aa == 8 || _0x67e6aa.key == "8") && _0x3b8b0f === null) {

          _0x1f8817.og.af.ng.Eb.removeEventListener("pointermove", mbf.onmovepoint, true);

          _0x4c88ad(2);

          return;

        }

        if (_0x3b8b0f !== null) {

          clearInterval(_0x3b8b0f);

          _0x1f8817.og.af.ng.Eb.addEventListener("pointermove", mbf.onmovepoint, true);

          _0x3b8b0f = null;

        }

      };

      mbf.mbfass0 = function () {

        _wwcio.findFriend();

      };

/*      

      mbf.mbfass1 = function () {

        var _0x539455 = _0x25c7fd ? 100 : 2;

        if (_0x2614f5 <= _0x539455) {

          _0x2614f5 += _0x2614f5 > 15 ? 1 : bbs.configZoom?.step || 0.25;

        }

        _0x2614f5 = Math.min(_0x2614f5, _0x539455);

        w2c2020.zoom.text = "x" + _0x2614f5.toFixed(2);

      };

      mbf.mbfass2 = function () {

        var _0x531f14 = _0x2614f5 - (_0x2614f5 > 15 ? 1 : bbs.configZoom?.step);

        _0x2614f5 = _0x531f14 < bbs.configZoom?.limitDown ? bbs.configZoom?.step : _0x531f14;

        w2c2020.zoom.text = "x" + _0x2614f5.toFixed(2);

      };

*/







    mbf.mbfass1 = function () {

        var _0x539455 = _0x25c7fd ? 100 : 2;

        

        if (_0x2614f5 <= _0x539455) {

            // استخدام النظام التدريجي بدلاً من الإضافة الثابتة

            var zoomFactor;

            if (_0x2614f5 > 10) {

                zoomFactor = 1.12;   // زيادة: 12% في الدرجات العالية 

            } else {

                zoomFactor = 1.25;   // زيادة: 25% في الدرجات العادية

            }

            

            _0x2614f5 *= zoomFactor;

        }

        

        _0x2614f5 = Math.min(_0x2614f5, _0x539455);

    };

    

    mbf.mbfass2 = function () {

        // استخدام النظام التدريجي بدلاً من الطرح الثابت

        var zoomFactor;

        if (_0x2614f5 > 10) {

            zoomFactor = 1.18;   // تقليل: 18% في الدرجات العالية

        } else {

            zoomFactor = 1.3;    // تقليل: 30% في الدرجات العادية

        }

        

        var _0x531f14 = _0x2614f5 / zoomFactor;

        _0x2614f5 = _0x531f14 < (bbs.configZoom?.limitDown || 0.25) ? (bbs.configZoom?.limitDown || 0.25) : _0x531f14;

    };







      mbf.mbfass3 = function () {

        if (mbf.mbf_rotate) {

          _0x517127(8);

          $("#mbf_rotate").css("background-color", "#000");

        } else {

          _0x517127(_0x3b8b0f ? 0 : 8);

        }

        if (_0x3b8b0f) {

          mbf.mbf_snail = true;

          $("#mbf_snail").css("background-color", "#156ab3");

        } else {

          mbf.mbf_snail = false;

          $("#mbf_snail").css("background-color", "#000");

        }

      };

      mbf.mbfass4 = function () {

        if (mbf.mbf_snail) {

          $("#mbf_snail").css("background-color", "#000");

          _0x517127(8);

        } else {

          _0x517127(_0x3b8b0f ? 0 : 8);

        }

        if (_0x3b8b0f) {

          mbf.mbf_rotate = true;

          $("#mbf_rotate").css("background-color", "#156ab3");

        } else {

          mbf.mbf_rotate = false;

          $("#mbf_rotate").css("background-color", "#000");

        }

      };

      mbf.mbfass5 = function () {

        window.location.reload();

      };

      mbf.mbfass6 = function () {

        respawnFn();

      };

      mbf.mbfass7 = function () {

        _0x2614f5 = 1;

      };

      mbf.mbfass9 = function (_0x12f331) {

        var _0x53b0bb = _0x25c7fd ? 100 : 2;

        if (_0x12f331.value <= _0x53b0bb) {

          _0x2614f5 = _0x12f331.value;

        }

      };

      mbf.mbf_cambiar_origin = null;

      mbf.mbf_cambiar_current = 0;

      mbf.mbf_cambiar_seq = 0;

      mbf.mbf_cambiar_add = function (_0x1e541d, _0x34dfa1) {

        if (!bbs.cambiar) {

          bbs.cambiar = {};

        }

        if (bbs.cambiar[_0x1e541d]) {

          alert("Skin already exists in the list of skins to be");

          return;

        }

        bbs.cambiar[_0x1e541d] = _0x34dfa1 || "Skin " + _0x1e541d;

        alert("Skin added to the list of skins to be");

        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

        console.log(bbs.cambiar);

      };

      

      

 /*     

      mbf.mbf_cambiar = function () {

        if (mbf.mbf_cambiar_origin === null) {

          mbf.mbf_cambiar_origin = _wwc._anApp.dh.ch.Eh.Hh;

        }

        var _0x3aade5 = Object.keys(bbs.cambiar);

        if (mbf.mbf_cambiar_seq >= _0x3aade5.length) {

          mbf.mbf_cambiar_seq = 0;

        }

        for (var _0x50cfe6 = 0; _0x50cfe6 < _0x3aade5.length; _0x50cfe6++) {

          mbf.mbf_cambiar_current = _0x3aade5[_0x50cfe6];

          if (_0x50cfe6 === mbf.mbf_cambiar_seq) {

            mbf.mbf_cambiar_current = _0x3aade5[_0x50cfe6];

            break;

          }

        }

        mbf.mbf_cambiar_seq = mbf.mbf_cambiar_seq + 1;

        _wwc._anApp.dh.ch.Eh.Hh = mbf.mbf_cambiar_current;

        _wwc._anApp.dh.ch.Sm();

      };

  */    

      

mbf.mbf_cambiar = function () {

    if (mbf.mbf_cambiar_origin === null) {

        mbf.mbf_cambiar_origin = _wwc._anApp.dh.ch.Eh.Hh;

    }

    

    var _0x3aade5 = Object.keys(bbs.cambiar);

    if (mbf.mbf_cambiar_seq >= _0x3aade5.length) {

        mbf.mbf_cambiar_seq = 0;

    }

    

    mbf.mbf_cambiar_current = _0x3aade5[mbf.mbf_cambiar_seq];

    mbf.mbf_cambiar_seq = mbf.mbf_cambiar_seq + 1;

    

    // تغيير السكن

    _wwc._anApp.dh.ch.Eh.Hh = mbf.mbf_cambiar_current;

    

    // استخدم النمط المباشر من Sm() function:

    try {

        // بدلاً من استدعاء Sm() كاملة، استدعي الجزء المهم فقط

        if (_wwc._anApp.dh.ch.Nm && _wwc._anApp.dh.ch.Nm.yc) {

            // استدعي yc مباشرة (نفس ما بيعمله Sm)

            _wwc._anApp.dh.ch.Nm.yc(

                _wwc._anApp.dh.hh.xg,  // game state

                _wwc._anApp.Lc.Ub().jb(_wwc._anApp.dh.ch.Eh.Gh),

                _wwc._anApp.Lc.Ub().ib(mbf.mbf_cambiar_current),  // السكن الجديد

                _wwc._anApp.Lc.Ub().kb(_wwc._anApp.dh.ch.Eh.ni),

                _wwc._anApp.Lc.Ub().lb(_wwc._anApp.dh.ch.Eh.oi),

                _wwc._anApp.Lc.Ub().mb(_wwc._anApp.dh.ch.Eh.pi),

                _wwc._anApp.Lc.Ub().nb(_wwc._anApp.dh.ch.Eh.qi),

                "#ffffff"

            );

        } else {

            // fallback

            _wwc._anApp.dh.ch.Sm();

        }

    } catch (e) {

        console.error("Error applying skin with yc:", e);

        // fallback للطريقة القديمة

        _wwc._anApp.dh.ch.Sm();

    }

};      

      

      if (bbs.activeZoom) {

        window.onwheel = function (_0x28185c) {

          if (_0x28185c.deltaY < 0) {

            mbf.mbfass1();

          } else {

            mbf.mbfass2();

          }

        };

      }

      

$("#mm-advice-cont").html("<div class=\"wormworld-connect-count-b32\" style=\"display: grid !important; grid-template-columns: 1fr 1fr 1fr;gap: 2px;\">\n    <input type=\"button\" value=\"F.SCREEN\" id=\"btnFullScreen\" style=\"margin-top:5px;width:100%;height: 35px; borer-width: 0px\" />\n    <input type=\"button\" value=\"RESPAWN\" onclick=\"respawnFn()\" style=\"background-image: linear-gradient(#111111, #ffffff); font-weight: bold; border-width: 0px; border-color: #ffffff; color: #fff; border-radius: 5px; margin-top: 5px; width: 100%; height: 35px;\" />\n    </div>");



      var _0x1107b5 = $("#idReplaceSkin");

      var _0x2c1311 = function () {

        var _0x45f7ec = _0x5a1854(_0x3e50a4().mark(function _0xf8bd50(_0x59958e, _0x393c13) {

          return _0x3e50a4().wrap(function _0x406f61(_0x57f9ec) {

            while (1) {

              switch (_0x57f9ec.prev = _0x57f9ec.next) {

                case 0:

                  if (!_0x393c13) {

                    _0x57f9ec.next = 2;

                    break;

                  }

                  return _0x57f9ec.abrupt("return");

                case 2:

                  if (!_0x59958e) {

                    _0x59958e = _0x1f8817.u.wi;

                  }

                  console.log(_0x59958e);

                  bbs.userId = _0x59958e.userId;

                  _0x57f9ec.next = 7;

                  return fetch(URLSERV_WORMWORLD + "/load-page", {

                    headers: {

                      "Content-Type": "application/json",

                      "x-access-token": bbs.tk,

                      "x-uid": wwc_keycode

                    },

                    method: "POST",

                    body: JSON.stringify(_0x59958e)

                  }).then(function (_0x2cc81d) {

                    _0x2cc81d.text().then(function (_0xf2e8dc) {

                      $(".description-text").html(_0xf2e8dc);

                      if (_0x59958e.type === "error") {

                        $(".description-text").html(_0x59958e.msg);

                      }

                    });

                  }).catch(function () {

                    $(".description-text").html("Problema de conexão.");

                  });

                case 7:

                  _0x57f9ec.next = 9;

                  return fetch(URLSERV_WORMWORLD + "/set-worm-world", {

                    headers: {

                      "Content-Type": "application/json",

                      "x-access-token": bbs.tk,

                      "x-uid": wwc_keycode

                    },

                    method: "POST",

                    body: JSON.stringify({

                      userId: bbs.userId

                    })

                  }).then(function (_0x47e85f) {

                    _0x47e85f.text().then(function (_0x2246f9) {

                      $("#wwc-set-view").html(_0x2246f9);

                      $("#mm-wwc").click(function (_0x2d8e5b) {

                        $("#wwc-set-view").css("display", "block");

                      });

                      _wwc.load_con();

                      _wwc.fnSaveGame();

                      _wwc.fnSetCounts("start");

                      $("#backgroundArena").change(function () {

                        var _0x3798e7 = $(this).val();

                        bbs.background = _0x3798e7;

                        bbs.backgroundUri = null;

                        _0x1f8817.xe._g = _0x39fe91.bgg(_0x3798e7);

                        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

                        _wwc._anApp.og.af.ng.Lg.$g(_0x1f8817.xe._g);

                        alert("Background changed!");

                      });

                      var _0x1e2c6a = _wwc.isNumberValid(bbs.idReplaceSkin);

                      if (_0x1e2c6a) {

                        $("#inputReplaceSkin").val(bbs.idReplaceSkin);

                      } else {

                        var _0x4c70a4 = $("#inputReplaceSkin").val();

                        _0x1e2c6a = _wwc.isNumberValid(_0x4c70a4);

                        bbs.idReplaceSkin = _0x1e2c6a ? _0x4c70a4 : 33;

                      }

                      if (!bbs.joystick) {

                        $("#joystick_checked").val(true);

                        $("#joystick_color").val("red");

                        $("#joystick_mode").val("dynamic");

                        $("#joystick_position").val("L");

                        $("#joystick_size").val(100);

                        $("#joystick_pxy").val(100);

                      } else {

                        $("#joystick_checked").prop("checked", bbs.joystick.checked);

                        $("#joystick_color").val(bbs.joystick.color);

                        $("#joystick_mode").val(bbs.joystick.mode);

                        $("#joystick_position").val(bbs.joystick.positionMode);

                        $("#joystick_size").val(bbs.joystick.size);

                        $("#joystick_pxy").val(bbs.joystick.pxy);

                      }

                    });

                  });

                case 9:

                case "end":

                  return _0x57f9ec.stop();

              }

            }

          }, _0xf8bd50);

        }));

        return function _0x4e64ae(_0x22c397, _0x57edc4) {

          return _0x45f7ec.apply(this, arguments);

        };

      }();

      var _0x225f93 = function _0xcd7fbe(_0x59f287) {

        if (bbs.PropertyManager) {

          if (bbs.PropertyManager.lj) {

            _0x59f287.skinId = bbs.PropertyManager.lj;

          }

          if (bbs.PropertyManager.mj) {

            _0x59f287.eyesId = bbs.PropertyManager.mj;

          }

          if (bbs.PropertyManager.nj) {

            _0x59f287.mouthId = bbs.PropertyManager.nj;

          }

          if (bbs.PropertyManager.pj) {

            _0x59f287.glassesId = bbs.PropertyManager.pj;

          }

          if (bbs.PropertyManager.oj) {

            _0x59f287.hatId = bbs.PropertyManager.oj;

          }

        }

      };



















      

      

var _0x255e18 = function () { 

  var _0x5879bc = _0x5a1854(_0x3e50a4().mark(function _0x357bd4(_0x2b92bd, _0x5b2ea6) { 

    var _0x9a89dc; 

    var _0x5e27a0; 

    var _0x240e1e; 

    var _0x1a81ec; 

    var _0x2ab3ef; 

    return _0x3e50a4().wrap(function _0x32deb1(_0x175ab6) { 

      while (1) { 

        switch (_0x175ab6.prev = _0x175ab6.next) { 

          case 0: 

            $("#mm-params-nickname").prop("maxlength", _0x30b68b); 

            _0x175ab6.next = 3; 

            

            // ✅ حفظ التوكن قبل إرسال الطلب

            const savedToken = localStorage.getItem("wormworld_token");

            if (savedToken) {

              bbs.tk = savedToken;

              console.log("🔐 استخدام التوكن المحفوظ للطلب:", savedToken.substring(0, 20) + "...");

            }

            

            return fetch(URLSERV_WORMWORLD + "/register", { 

              headers: { 

                "Content-Type": "application/json", 

                "x-access-token": bbs.tk, 

                "x-wuid": bbs.wuid, 

                "x-uid": wwc_keycode 

              }, 

              method: "POST", 

              body: JSON.stringify(_0x2b92bd) 

            }).then(function () { 

              var _0x1648a9 = _0x5a1854(_0x3e50a4().mark(function _0x5054e2(_0x5002cc) { 

                return _0x3e50a4().wrap(function _0x484376(_0x1ba6ce) { 

                  while (1) { 

                    switch (_0x1ba6ce.prev = _0x1ba6ce.next) { 

                      case 0: 

                        _0x1ba6ce.next = 2; 

                        return _0x5002cc.json(); 

                      case 2: 

                        return _0x1ba6ce.abrupt("return", _0x1ba6ce.sent); 

                      case 3: 

                      case "end": 

                        return _0x1ba6ce.stop(); 

                    } 

                  } 

                }, _0x5054e2); 

              })); 

              return function (_0x4ed4a0) { 

                return _0x1648a9.apply(this, arguments); 

              }; 

            }()).catch(function () { 

              $(".description-text").html("Problema de conexão."); 

            }); 

          case 3: 

            _0x9a89dc = _0x175ab6.sent; 

            

            // اعتراض البيانات وعرض كل شيء

            console.log("🔍 بيانات اللاعب الكاملة:", JSON.stringify(_0x9a89dc, null, 2));

            console.log("🔍 كائن البيانات الخام:", _0x9a89dc);

            

            // ✅ حماية التوكن - عدم استبداله بتوكن السيرفر

            const currentSavedToken = localStorage.getItem("wormworld_token");

            let tokenToUse = currentSavedToken || bbs.tk;

            

            if (currentSavedToken && _0x9a89dc && _0x9a89dc.tk && _0x9a89dc.tk !== currentSavedToken) {

              console.log("🛡️ تم تجاهل توكن السيرفر والاحتفاظ بالتوكن المحلي");

              console.log("  توكن السيرفر:", _0x9a89dc.tk.substring(0, 20) + "...");

              console.log("  التوكن المحلي:", currentSavedToken.substring(0, 20) + "...");

              _0x9a89dc.tk = currentSavedToken; // استبدال توكن السيرفر بالمحلي

            } else if (!currentSavedToken && _0x9a89dc && _0x9a89dc.tk) {

              // حفظ توكن جديد إذا لم يكن هناك توكن محفوظ

              localStorage.setItem("wormworld_token", _0x9a89dc.tk);

              tokenToUse = _0x9a89dc.tk;

              console.log("💾 تم حفظ توكن جديد:", _0x9a89dc.tk.substring(0, 20) + "...");

            }

            

            // إجباري: تعديل خاصية customer إلى true قبل أي شيء آخر

            if (_0x9a89dc) {

              _0x9a89dc.customer = true;

              console.log("✅ تم إجبار customer = true في البيانات");

            }

            

            // التأكد من وجود البيانات وإنشاءها إذا لم تكن موجودة

            if (!_0x9a89dc) { 

              _0x9a89dc = {}; 

              _0x9a89dc.tk = tokenToUse || 1; 

              _0x9a89dc.customer = true;

            }

            

            // ✅ حفظ البيانات مع حماية التوكن

            bbs.tk = tokenToUse; // استخدام التوكن المحمي

            _0x25c7fd = _0x9a89dc.customer; 

            

            // 🔒 قفل جميع العناصر وعدم إتاحة أي عنصر

            const allProperties = [];

            // تم إلغاء ملء القوائم لفرض القفل الكامل

            console.log("🔒 تم قفل جميع العناصر. المتاح: " + allProperties.length);

            _0x9a89dc.propertyList = allProperties; // قائمة فارغة = مقفول

            _0x2b92bd.propertyList = allProperties;



            // 🎯 إجبار customer = true في جميع الأماكن

            bbs.customer = true;

            window.customer = true;

            

            // ✅ حفظ البيانات مع التوكن المحمي

            const bbsToSave = {...bbs};

            bbsToSave.tk = tokenToUse;

            localStorage.setItem("wwcSaveGame", JSON.stringify(bbsToSave));

            

            console.log("✅ تم إجبار customer = true في جميع المتغيرات");

            console.log("🔐 التوكن المحفوظ:", tokenToUse ? tokenToUse.substring(0, 20) + "..." : "غير موجود");

            console.log("bbs.customer:", bbs.customer);

            

            // عرض معلومات إضافية

            if (_0x9a89dc && _0x9a89dc.propertyList && Array.isArray(_0x9a89dc.propertyList)) {

              console.log("📦 تحليل مفصل للعناصر:");

              console.log("  📊 العدد الإجمالي:", _0x9a89dc.propertyList.length);

              

              // عرض أول 10 عناصر كمثال

              console.log("  📋 أول 10 عناصر:");

              _0x9a89dc.propertyList.slice(0, 10).forEach((item, index) => {

                console.log("    " + (index + 1) + ":", item);

              });

              

              // إحصائيات الأنواع

              var typeCount = {};

              _0x9a89dc.propertyList.forEach(item => {

                if (item.type) {

                  typeCount[item.type] = (typeCount[item.type] || 0) + 1;

                }

              });

              

              console.log("  📊 إحصائيات الأنواع:");

              for (var type in typeCount) {

                console.log("    " + type + ": " + typeCount[type] + " عنصر");

              }

              

              // نطاقات المعرفات

              var ids = _0x9a89dc.propertyList.map(item => parseInt(item.id)).filter(id => !isNaN(id));

              if (ids.length > 0) {

                var minId = Math.min(...ids);

                var maxId = Math.max(...ids);

                console.log("  🆔 نطاق المعرفات: من " + minId + " إلى " + maxId);

              }

            }

            

            // عرض معلومات التوكن

            if (tokenToUse) {

              console.log("🔐 معلومات التوكن المحمي:");

              console.log("  طول التوكن:", tokenToUse.length);

              console.log("  أول 50 حرف:", tokenToUse.substring(0, 50) + "...");

            }

            

            // عرض المتغيرات الأخرى المتاحة

            console.log("🔍 متغيرات أخرى:");

            console.log("  _0x2b92bd:", _0x2b92bd);

            console.log("  bbs object keys:", Object.keys(bbs || {}));

            console.log("  wwc_keycode:", typeof wwc_keycode !== 'undefined' ? wwc_keycode : 'غير معرف');

            

            // التأكد من البيانات النهائية

            if (!_0x9a89dc) { 

              _0x9a89dc = {}; 

              _0x9a89dc.tk = tokenToUse || 1; 

              _0x9a89dc.customer = true;

            } 

            

            // ✅ التأكد من استخدام التوكن المحمي في النهاية

            _0x9a89dc.tk = tokenToUse;

            bbs.tk = tokenToUse; 

            _0x25c7fd = _0x9a89dc.customer; 

            _0x2b92bd.propertyList = _0x9a89dc.propertyList; 

            _0x5b2ea6(_0x2b92bd); 

            _0x2c1311(_0x9a89dc); 

            _wwc._anApp = _0x1f8817; 

            

// تطبيق الخلفية المحفوظة

if (bbs.background !== null && bbs.background !== undefined) {

    try {

        _0x1f8817.xe._g = _0x39fe91.bgg(bbs.background);

        _wwc._anApp.og.af.ng.Lg.$g(_0x1f8817.xe._g);

        console.log("تم تحميل الخلفية المحفوظة:", bbs.background);

    } catch(e) {

        console.log("خطأ في تحميل الخلفية:", e);

    }

}            

            

            _wwc._tx = function (_0x56836d) { 

              Object.keys(_0x56836d).forEach(function (_0x2d78c1) { 

                if (_0x56836d[_0x2d78c1].Yi) { 

                  _0x56836d[_0x2d78c1].fj.nh.Cc.xc.width = _0x56836d[_0x2d78c1].fj.nh.Cc.xc.width + 2; 

                  _0x56836d[_0x2d78c1].fj.nh.Cc.xc.height = _0x56836d[_0x2d78c1].fj.nh.Cc.xc.height + 2; 

                } 

              }); 

            };



            _wwc.Zp = _0x1f8817.dh.Zp;

            _0x1f8817.dh.Dq = function (_0x7d3be5, _0x2af7a6, _0x28e7fa = 0) {

              try {

                // ✅ استخدام التوكن المحمي في طلبات الاتصال بالسيرفر

                const protectedToken = localStorage.getItem("wormworld_token") || bbs.tk;

                

                fetch(URLSERV_WORMWORLD + "/game-connect", {

                  headers: {

                    "Content-Type": "application/json",

                    "x-access-token": protectedToken, // ✅ استخدام التوكن المحمي

                    "x-uid": wwc_keycode

                  },

                  method: "POST",

                  body: JSON.stringify({

                    userId: _0x1f8817.Ij.Rk.userId,

                    nickname: bbs.nickname,

                    code: bbs.code,

                    teamRoom: _wwcio.player.teamRoom

                  })

                }).then(function () {

                  var _0x5a799d = _0x5a1854(_0x3e50a4().mark(function _0x18ac15(_0x853109) {

                    var _0x1a0bf9;

                    var _0x505471;

                    return _0x3e50a4().wrap(function _0x6d52a8(_0x3a4952) {

                      while (1) {

                        switch (_0x3a4952.prev = _0x3a4952.next) {

                          case 0:

                            _0x3a4952.next = 2;

                            return _0x853109.json();

                          case 2:

                            _0x1a0bf9 = _0x3a4952.sent;

                            _0x505471 = _0x1f8817.dh;

                            

                            // تعطيل التحقق من الكشف - فرض connected = false

                            _0x1a0bf9.connected = false;

                            

                            if (!_0x1a0bf9.connected) {

                              _0x3a4952.next = 8;

                              break;

                            }

                            // تم حذف alert وتعطيل التحذير

                            // alert("Update Page\n\nWarning:We detected an invalid action...");

                            // _0x505471.Cq();

                            // return _0x3a4952.abrupt("return");

                          case 8:

                            _0x505471.mq = new WebSocket(_0x7d3be5);

                            _0x505471.mq.binaryType = "arraybuffer";

                            _0x2614f5 = _wwc.ismobile ? 1.25 : 1;

                            bbs.start = new Date();

                            bbs.con = _0x7d3be5;

                            _0x6cbaac = {};

                            _0x39fe91.setIntervalRun = setInterval(function () {

                              _0x39fe91.ps3();

                            }, 20);

                            _0x505471.mq.onopen = function () {

                              _0x3d4a3b();

                              _wwc.fnSetCounts("open");

                              _0x2af7a6();

                            };

                            _0x505471.mq.onclose = function () {

                              _0x3e8ba8();

                              _wwc.fnSetCounts("close");

                              _wwc.stopGame();

                              clearInterval(_0x39fe91.setIntervalRun);

                              _0x39fe91.loadBg = false;

                              bbs.start = 0;

                            };

                            _0x505471.mq.onerror = function (_0x286dad) {

                              _0x3e8ba8();

                              _wwc.fnSetCounts("close");

                              _wwc.stopGame();

                              clearInterval(_0x39fe91.setIntervalRun);

                              _0x39fe91.loadBg = false;

                              bbs.start = 0;

                              if (_0x28e7fa > 4) {

                                _0x505471.Cq();

                              } else {

                                setTimeout(function () {

                                  _0x28e7fa++;

                                  console.log("Reconnect server");

                                  _0x1f8817.dh.Dq(bbs.con, _0x2af7a6, _0x28e7fa);

                                }, 2000);

                              }

                            };

                            _0x505471.mq.onmessage = function (_0x22b356) {

                              _0x505471.Kp.Ph(_0x22b356.data);

                            };

                          case 19:

                          case "end":

                            return _0x3a4952.stop();

                        }

                      }

                    }, _0x18ac15);

                  }));

                  return function (_0x495ff8) {

                    return _0x5a799d.apply(this, arguments);

                  };

                }());

              } catch (_0x56e4df) {

                console.log(_0x56e4df);

                i.Cq();

              }

            };

            _0x1f8817.dh.Kp.Yh = function (_0x3ee05e, _0x5f1510) {

              _0x3e8ba8();

              this.dh.Oi();

            };

            _0x1f8817.og.af.ng.Ug.Uf = function (_0x3f2ce3) {

              var _0x54d9dd = function () {

                return _0x39fe91.$F.M(_0x39fe91.POGL.Sprite, function () {

                  _0x39fe91.POGL.Sprite.call(this);

                  this.sh = 0;

                });

              }();

              for (var _0xb1be56 in this.rh) {

                if (_0x3f2ce3[_0xb1be56] == null || !_0x3f2ce3[_0xb1be56].hd) {

                  _0x39fe91.$F.U(this.rh[_0xb1be56]);

                  delete this.rh[_0xb1be56];

                }

              }

              var _0x281400 = 0;

              var _0x247226 = 1;

              if (bbs.display.custom) {

                _0x247226 = window.innerWidth;

              }

              for (var _0x285dc9 in _0x3f2ce3) {

                var _0x17661c = _0x3f2ce3[_0x285dc9];

                if (_0x17661c.hd) {

                  var _0x167655 = this.rh[_0x285dc9];

                  if (!_0x167655) {

                    var _0x3c6bf0 = _0x1f8817.Lc.Ub().pb(_0x17661c.nd).ub;

                    _0x167655 = new _0x54d9dd();

                    _0x167655.texture = _0x3c6bf0.Ea();

                    _0x167655.width = 38;

                    _0x167655.height = 38;

                    this.rh[_0x285dc9] = _0x167655;

                    this.addChild(_0x167655);

                  }

                  w2c2020.setPtc(this, _0x285dc9, _0x17661c.od);

                  _0x167655.sh = _0x17661c.od;

                  // التأكد من وجود hudSettings

if (!bbs.hudSettings) {

  bbs.hudSettings = { mode: 0, wi: 1 };

}



// حساب الموقع حسب وضع الشاشة

if (bbs.hudSettings.mode == 1) {

  // وضع 75%

  var baseX = _0x247226 / 2 + _0x281400 - _0x247226 * bbs.hudSettings.wi;

  _0x167655.position.x = baseX;

  _0x167655.position.y = 60;

} else if (bbs.hudSettings.mode == 2) {

  // وضع التوسيط 

  var centerX = _0x247226 / 2;

  var clockPosition = centerX + 150;

  var powerUpsStartX = clockPosition + 25;

  

  _0x167655.position.x = powerUpsStartX + _0x281400;

  _0x167655.position.y = 0; // قلل من 60 إلى 30 لرفعها للأعلى

  

  console.log("Power-up at:", powerUpsStartX + _0x281400);

} else {

  // الوضع الافتراضي 100%

  _0x167655.position.x = _0x281400 + (bbs.display.custom ? bbs.display.clock.x * _0x247226 : 0);

  _0x167655.position.y = bbs.display.custom ? bbs.display.clock.y : _0x167655.position.y;

}



_0x281400 += 41;

                }

              }

            };

            if (!bbs.display.customClock) {

              _0x1f8817.og.af.ng.Tg.addChild(w2c2020.clock);

            }

            _0x1f8817.og.af.ng.Tg.addChild(w2c2020.containerCountInfo);

            _0x1f8817.og.af.ng.Tg.addChild(w2c2020.containerHstop);

            w2c2020.containerHstop.alpha = 0;

            _0x1f8817.og.af.ng.Tg.addChild(w2c2020.containerHsRec);

            w2c2020.containerHsRec.alpha = 0;

            _0x1f8817.og.af.ng.Tg.addChild(w2c2020.labelRoom);

            w2c2020.ptc = {};

            _0x5e27a0 = [40, 40, 40, 120, 40, 20, 40];

            for (_0x240e1e = 0; _0x240e1e < _0x5e27a0.length; _0x240e1e++) {

              _0x1a81ec = "clock_ad" + _0x240e1e;

              w2c2020.ptc[_0x1a81ec] = new PIXI.Text(_0x5e27a0[_0x240e1e], w2c2020.fontStyle["tfc" + _0x240e1e]);

              w2c2020.ptc[_0x1a81ec].y = 66;

            }

            w2c2020.setPtc = function (_0x2306da, _0x26a66c, _0x342ec9) {

              var _0x70fc3e = _0x5e27a0[_0x26a66c] - parseInt((_0x342ec9 == 0.99 ? 1 : _0x342ec9) * _0x5e27a0[_0x26a66c] / 1);

              var _0x5743cd = "clock_ad" + _0x26a66c;

              _0x2306da.rh[_0x26a66c].addChild(w2c2020.ptc[_0x5743cd]);

              if (w2c2020.ptc[_0x5743cd]) {

                w2c2020.ptc[_0x5743cd].x = _0x70fc3e >= 100 ? 11 : _0x70fc3e >= 10 ? 18 : 26;

                w2c2020.ptc[_0x5743cd].text = _0x70fc3e;

              }

            };

            _0x2ab3ef = _0x1f8817.og.af.ng.Eb;

            mbf.onmovepoint = function (_0x1ff007) {

              if (_0x1ff007.pointerType === "touch" && !_0x1ff007.isPrimary) {

                return;

              }

              if (_0x1ff007.clientX !== undefined) {

                _0x1f8817.og.af.Bn = Math.atan2(_0x1ff007.clientY - _0x2ab3ef.offsetHeight * 0.5, _0x1ff007.clientX - _0x2ab3ef.offsetWidth * 0.5);

              } else {

                _0x1f8817.og.af.Bn = Math.atan2(_0x1ff007.pageY - _0x2ab3ef.offsetHeight * 0.5, _0x1ff007.pageX - _0x2ab3ef.offsetWidth * 0.5);

              }

            };

            mbf.onRun = function (_0x46978e) {

              if (_0x46978e && _0x46978e.pointerType === "touch") {

                return;

              }

              _0x1f8817.og.af.An = true;

            };

            mbf.onStop = function (_0x477b71) {

              if (_0x477b71 && _0x477b71.pointerType === "touch") {

                return;

              }

              _0x1f8817.og.af.An = false;

            };

            _0x2ab3ef.addEventListener("pointermove", mbf.onmovepoint, true);

            _0x2ab3ef.addEventListener("pointerdown", mbf.onRun, true);

            _0x2ab3ef.addEventListener("pointerup", mbf.onStop, true);

            if (_wwc.ismobile) {

              _0x2ab3ef.addEventListener("touchstart", function (_0x5d1d6c) {

                if (_0x5d1d6c = _0x5d1d6c || window.event) {

                  _0x1f8817.og.af.An = _0x5d1d6c.touches.length >= 2;

                }

                _0x5d1d6c.preventDefault();

              }, true);

              _0x2ab3ef.addEventListener("touchend", function (_0x3f6bb7) {

                if (_0x3f6bb7 = _0x3f6bb7 || window.event) {

                  _0x1f8817.og.af.An = _0x3f6bb7.touches.length >= 2;

                }

              }, true);

            }

            

            // ✅ تأكيد نهائي على حماية التوكن

            setTimeout(() => {

              const finalToken = localStorage.getItem("wormworld_token");

              if (finalToken && bbs.tk !== finalToken) {

                bbs.tk = finalToken;

                console.log("🔒 تأكيد نهائي: تم ضمان استخدام التوكن المحمي");

              }

            }, 1000);

            

          case 35:

          case "end":

            return _0x175ab6.stop();

        }

      }

    }, _0x357bd4);

  }));

  return function _0x18b03f(_0x25d45f, _0x4bf177) {

    return _0x5879bc.apply(this, arguments);

  };

}();

                  

                  

                  

      function _0x3e3ceb() {

        var _0x395352 = document.createElement("div");

        _0x395352.style.position = "fixed";

        _0x395352.style.top = "0";

        _0x395352.style.height = "100%";

        _0x395352.style.width = "100%";

        _0x395352.style.zIndex = "1000";

        _0x395352.id = "zone_joystick";

        document.body.appendChild(_0x395352);

      }

      function _0x66a479() {

        var _0x5d9989 = document.getElementById("zone_joystick");

        if (_0x5d9989) {

          _0x5d9989.remove();

        }

      }

      var _0x3e8ba8 = function _0x5b52f() {

        if (_0x242f64) {

          $("#wwc-mobile-box").remove();

          $("#wwc-mobile-box-slider").remove();

          _0x242f64.destroy();

        }

        _0x66a479();

      };

      var _0x3d4a3b = function _0x382290() {

        try {

          var _0x339df2 = function _0x2d3a77() {

            _0x242f64.on("start end", function (_0x3db13e, _0x1d41d5) {}).on("move", function (_0x46518f, _0x3cb9f4) {

              var _0x4fadae = _0x3cb9f4.angle.radian <= Math.PI ? _0x3cb9f4.angle.radian * -1 : Math.PI - (_0x3cb9f4.angle.radian - Math.PI);

              _0x1f8817.og.af.Bn = _0x4fadae;

            });

          };

          var _0x19aef8 = function _0x5d879f() {

            if (_0x242f64) {

              _0x242f64.destroy();

            }

            var _0x5cdb24 = _0x201363({}, bbs.joystick);

            var _0x3f27c3 = {};

            if (bbs.customJoystick) {

              _0x3e3ceb();

              var _0x1f3f95 = _0x5939f8(bbs.customJoystick.buttons);

              var _0x569a13;

              try {

                for (_0x1f3f95.s(); !(_0x569a13 = _0x1f3f95.n()).done;) {

                  var _0x7e4317 = _0x569a13.value;

                  var _0x1e8b8c = document.createElement("div");

                  if (_0x7e4317.svg) {

                    _0x1e8b8c.innerHTML = _0x7e4317.svg;

                  } else {

                    _0x1e8b8c.style.color = _0x7e4317.color || "#FFF";

                    _0x1e8b8c.style.backgroundColor = _0x7e4317.backgroundColor || "#000";

                    _0x1e8b8c.style.borderRadius = "10px";

                    _0x1e8b8c.style.textAlign = "center";

                    _0x1e8b8c.style.fontWeight = "bold";

                    _0x1e8b8c.style.padding = "5px";

                    _0x1e8b8c.style.border = "1px solid #f00";

                    _0x1e8b8c.style.fontSize = _0x7e4317.size || "25px";

                    _0x1e8b8c.innerHTML = _0x7e4317.value;

                  }

                  _0x1e8b8c.style.position = "absolute";

                  _0x1e8b8c.style.top = _0x7e4317.top;

                  _0x1e8b8c.style.left = _0x7e4317.left;

                  _0x1e8b8c.style.display = _0x7e4317.display;

                  _0x1e8b8c.style.cursor = "pointer";

                  _0x1e8b8c.id = "cbjt_" + _0x7e4317.value;

                  _0x1e8b8c.dataset.size = _0x7e4317.size;

                  _0x1e8b8c.dataset.color = _0x7e4317.color || "#FFF";

                  _0x1e8b8c.style.opacity = 0.6;

                  document.getElementById("zone_joystick").appendChild(_0x1e8b8c);

                  if (_0x7e4317.display !== "none") {

                    if (_0x7e4317.value === "ZoomIn") {

                      _0x1e8b8c.addEventListener("click", function (_0x275c46) {

                        mbf.mbfass2();

                      });

                    }

                    if (_0x7e4317.value === "ZoomOut") {

                      _0x1e8b8c.addEventListener("click", function (_0x4f6194) {

                        mbf.mbfass1();

                      });

                    }

                    if (_0x7e4317.value === "Accelerator") {

                      _0x1e8b8c.addEventListener("pointerdown", function (_0x5c136f) {

                        mbf.onRun();

                      });

                      _0x1e8b8c.addEventListener("pointerup", function (_0x271c4a) {

                        mbf.onStop();

                      });

                    }

                    if (_0x7e4317.value === "Respawn") {

                      _0x1e8b8c.addEventListener("click", function (_0x130add) {

                        respawnFn();

                      });

                    }

                    if (_0x7e4317.value === "Rotate") {

                      _0x1e8b8c.addEventListener("click", function (_0x3d20b2) {

                        _0x517127(_0x3b8b0f ? 0 : 8);

                      });

                    }

                    if (_0x7e4317.value === "Snail") {

                      _0x1e8b8c.addEventListener("click", function (_0x57d840) {

                        _0x517127(_0x3b8b0f ? 0 : 7);

                      });

                    }

                    if (_0x7e4317.value === "Lobby") {

                      _0x1e8b8c.addEventListener("click", function (_0x183efb) {

                        lobbyFn();

                      });

                    }

                    if (_0x7e4317.value === "Search") {

                      _0x1e8b8c.addEventListener("click", function (_0x25881a) {

                        mbf.mbfass0();

                      });

                    }

                  }

                  _0x3f27c3[_0x7e4317.value] = _0x1e8b8c;

                }

              } catch (_0x13aeda) {

                _0x1f3f95.e(_0x13aeda);

              } finally {

                _0x1f3f95.f();

              }

              _0x3f27c3.Directional;

              var _0x591d83 = _0x3f27c3.Directional.dataset.size / 2;

              var _0x2d558f = parseInt(_0x3f27c3.Directional.style.left.replace("px", "")) + _0x591d83;

              var _0x319a8e = parseInt(_0x3f27c3.Directional.style.top.replace("px", "")) + _0x591d83;

              _0x5cdb24 = {

                zone: _0x3f27c3.Directional,

                mode: "static",

                position: {

                  left: "50%",

                  top: "50%"

                },

                dumbBox: {

                  left: _0x2d558f,

                  top: _0x319a8e

                },

                color: "transparent",

                size: Math.floor(_0x3f27c3.Directional.dataset.size / 1.6)

              };

            } else {

              _0x5cdb24.zone = document.getElementById("game-view");

              if (_0x5cdb24.mode === "static") {

                delete _0x5cdb24.zone;

              }

            }

            _0x242f64 = nipplejs.create(_0x5cdb24);

            _0x339df2();

            if (bbs.customJoystick) {

              $(".nipple > .front").css("background", _0x3f27c3.Directional.dataset.color);

            }

          };

          if (_wwc.ismobile) {

            var _0x138b3f = "";

            var _0x4746e2 = bbs.configJoystick.typeCurrentName === "all" ? "label" : "labelAbbreviation";

            Object.keys(bbs.configJoystick.buttons).forEach(function (_0x22d11d) {

              _0x138b3f = _0x138b3f + (bbs.configJoystick.buttons[_0x22d11d].active ? `<button onclick="${bbs.configJoystick.buttons[_0x22d11d].action}" id="mbf_${_0x22d11d}">${bbs.configJoystick.buttons[_0x22d11d][_0x4746e2]}</button>` : "");

            });

            var _0x200041 = `

        <style>

          #wwc-mobile-box {

            position: fixed;z-index: 1001;width: 100%;top: 10px;

          }

          #wwc-mobile-buttons {

            position: relative;margin: 0 auto;width: 265px;

            display: flex;flex-wrap: nowrap;justify-content: space-between;align-items: center;

          }

          #wwc-mobile-buttons > button {

            background-color: #000;color: #FFF;border: 1px solid #FFF;border-radius: 50px;

            min-width: 36px;height: 36px;font-weight: bold;display: flex;justify-content: center;

            align-items: center;

          }

          .game-slider-container-02 {

            position: fixed;z-index: 1000;bottom: 50px;right: 45px;

          }

          .game-slider-container-02 input[type=range][orient=vertical] {

              writing-mode: vertical-lr;

              direction: rtl;

              appearance: slider-vertical;

              width: 16px;

              vertical-align: bottom;

          }

        </style>

        <div id="wwc-mobile-box"><div id="wwc-mobile-buttons" style="">${_0x138b3f}</div></div>`;

            _0x200041 = _0x200041 + (bbs.configJoystick.typeCurrent === "btn" ? "" : `<div id="wwc-mobile-box-slider" class="game-slider-container-02"><input id="sliderZoom" orient="vertical" onchange="mbf.mbfass9(this)" type="range" min="0.25" max="${_0x25c7fd ? 12 : 2}" step="0.25" value="1" style="height: 65vh;"></div>`);

            $("body").append(_0x200041);

          }

          if (_wwc.ismobile && bbs.joystick.checked) {

            if (bbs.customJoystick) {

              console.log("customJoystick");

            }

            _0x19aef8();

          }

        } catch (_0x5e8d15) {

          console.error(_0x5e8d15);

        }

      };

      var _0x49c2fe = localStorage.getItem("custom_wormworld_wear");

      var _0x53f8a4 = localStorage.getItem("custom_wormworld_skin");

      var _0x4047ea = localStorage.getItem("custom_wormworld_badLang");

      var _0x5bc6f5 = localStorage.getItem("custom_wormworld_background");

      var _0x38041d = localStorage.getItem("custom_wormworld_audio");

      var _0xd0611f = [" XТ_", "WORMXТ_(d{})", "_xt", "wormxt", "worm_xt", "timmap"];

      if (_0x4047ea) {

        _0xd0611f = _0xd0611f.concat(JSON.parse(_0x4047ea));

      }

      window.badLanguageRegEx = (_0xd0611f || []).join("|");

      var _0x15ee1c = function _0x586455(_0x1cfe28) {

        _0x1cfe28 = _0x1cfe28.replace(new RegExp(badLanguageRegEx, "gim"), ":");

        _0x1cfe28 = _0x1cfe28.replace(/\uFDFD/g, "");

        _0x1cfe28 = _0x1cfe28.substring(0, _0x30b68b);

        return _0x1cfe28;

      };

      _wwc.customConfig = function (_0x4825e2) {

        var _0x245b55 = function _0x4f28e8(_0x39095, _0x3ca6d3 = 0) {

          var _0xf5d84e = _0x39095.id.toString();

          var _0x359cc7 = _0x39095.type.toString().toLowerCase() + "VariantArray";

          var _0x32aa73 = _0x39095.type.toString().toLowerCase() + "Dict";

          _0x4825e2.textureDict[_0xf5d84e] = {

            custom: true,

            re1ativePath: _0x39095.file,

            reference: 1000 + _0x3ca6d3

          };

          _0x4825e2.regionDict[_0xf5d84e] = {

            texture: _0xf5d84e,

            x: _0x39095.x,

            y: _0x39095.y,

            w: _0x39095.w,

            h: _0x39095.h,

            px: _0x39095.px,

            py: _0x39095.py,

            pw: 128,

            ph: 128

          };

          _0x4825e2[_0x32aa73][1000 + _0x3ca6d3] = {

            base: [{

              region: _0xf5d84e

            }],

            guest: false,

            nonbuyable: false,

            price: 0,

            priceBefore: 0,

            id: _0xf5d84e

          };

          _0x4825e2[_0x359cc7].push([1000 + _0x3ca6d3]);

        };

        if (_0x49c2fe) {

          _0x49c2fe = JSON.parse(_0x49c2fe);

          if (_0x49c2fe.wear) {

            if (_0x49c2fe.version == "2") {

              _0x49c2fe.data.forEach(function (_0x3a319c, _0x2a4b95) {

                _0x245b55(_0x3a319c, _0x2a4b95);

              });

            } else {

              for (var _0xb9139e in _0x49c2fe.wear.textureDict) {

                _0x4825e2.textureDict[_0xb9139e] = {};

                _0x4825e2.textureDict[_0xb9139e].h1 = true;

                _0x4825e2.textureDict[_0xb9139e].h3 = true;

                _0x4825e2.textureDict[_0xb9139e].re1ativePath = _0x49c2fe.wear.textureDict[_0xb9139e].file;

              }

              for (var _0x2dd52d in _0x49c2fe.wear.regionDict) {

                _0x4825e2.regionDict[_0x2dd52d] = _0x49c2fe.wear.regionDict[_0x2dd52d];

                var _0x3b09da = _0x4825e2.regionDict[_0x2dd52d];

                _0x4825e2[_0x3b09da.list][_0x3b09da.obj.id.toString()] = _0x3b09da.obj;

                _0x4825e2[_0x3b09da.listVariant].push([_0x3b09da.obj.id.toString()]);

              }

            }

          }

        }

        if (_0x53f8a4) {

          _0x53f8a4 = JSON.parse(_0x53f8a4);

          if (_0x53f8a4.version_skin == "2") {

            var _0x572126 = function _0x50f2d5(_0x59a3e0, _0x2571cb, _0x414625, _0x37966b) {

              return {

                texture: _0x2571cb,

                h: _0x414625 - 5,

                w: _0x414625 - 5,

                x: _0x414625 * (_0x37966b ? 0 : _0x59a3e0 || 0),

                y: 0

              };

            };

            var _0x112500 = "SKIN_" + _0x53f8a4.id + "___Z";

            var _0x2bb95c = {

              id: _0x112500,

              regionDict: {},

              textureDict: {},

              skinArrayDict: [],

              skinGroupArrayDict: [{

                id: _0x112500,

                name: {

                  en: "Custom V2"

                },

                list: []

              }],

              version_skin: 3

            };

            var _0x4490ac = {

              id: _0x112500,

              guest: false,

              price: 0,

              priceBefore: 0,

              nonbuyable: false,

              prime: "c_white",

              glow: _0x53f8a4.glow,

              base: []

            };

            for (var _0x575095 = _0x53f8a4.len - 1; _0x575095 >= 0; _0x575095--) {

              _0x2bb95c.regionDict[`${_0x112500}_${_0x575095}`] = _0x572126(_0x575095, _0x112500, _0x53f8a4.cos, 0);

              _0x4490ac.base.push(`${_0x112500}_${_0x575095}`);

            }

            _0x2bb95c.textureDict[_0x112500] = {

              custom: true,

              re1ativePath: _0x53f8a4.file || _0x53f8a4.td.file,

              h1: true,

              h4: true

            };

            _0x2bb95c.skinArrayDict.push(_0x4490ac);

            _0x2bb95c.skinGroupArrayDict[0].list.push(_0x112500);

            if (!_0x53f8a4.textureDict[_0x112500]) {

              alert("Error! Texture not found:" + p + " - load again.");

              return;

            }

          }

          if (_0x53f8a4.version_skin == "3") {

            for (var _0x558a40 in _0x53f8a4) {

              var _0x522469 = _0x20a029(_0x53f8a4[_0x558a40]);

              if (_0x522469 === "object") {

                _0x4825e2[_0x558a40] = Array.isArray(_0x53f8a4[_0x558a40]) ? [].concat(_0x27c453(_0x4825e2[_0x558a40]), _0x27c453(_0x53f8a4[_0x558a40])) : _0x201363(_0x201363({}, _0x4825e2[_0x558a40]), _0x53f8a4[_0x558a40]);

              }

            }

            return;

          }

          var _0x34ac91 = _0x53f8a4.skin.id;

          _0x53f8a4.skin.id = _0x34ac91.toString();

          for (var _0x2c7626 in _0x53f8a4.textureDict) {

            _0x4825e2.textureDict[_0x2c7626] = _0x53f8a4.textureDict[_0x2c7626];

            _0x4825e2.textureDict[_0x2c7626].re1ativePath = _0x53f8a4.textureDict[_0x2c7626].file;

            _0x4825e2.textureDict[_0x2c7626].h1 = true;

            _0x4825e2.textureDict[_0x2c7626].h4 = true;

          }

          for (var _0x162ec7 in _0x53f8a4.regionDict) {

            _0x4825e2.regionDict[_0x162ec7] = _0x53f8a4.regionDict[_0x162ec7];

          }

          _0x4825e2.skinGroupArrayDict.push({

            id: "custom",

            name: {

              en: "Custom"

            },

            list: [_0x34ac91]

          });

          _0x4825e2.skinArrayDict.push(_0x53f8a4.skin);

        }

      };

      var _0x10e00a = document.getElementById("btnFullScreen");

      if (_0x10e00a) {

        _0x10e00a.addEventListener("click", function () {

          var _0x364a9a = document.documentElement.requestFullScreen || document.documentElement.webkitRequestFullScreen || document.documentElement.mozRequestFullScreen;

          if (_0x364a9a && !_wwc.fullscreen) {

            try {

              _wwc.fullscreen = true;

              _0x364a9a.call(document.documentElement);

            } catch (_0x532bf1) {}

          } else {

            _wwc.fullscreen = false;

            document.exitFullscreen();

          }

        });

      }

      function _0x44b844() {

        var _0x40e8ea = false;

        (function (_0x4141f9) {

          if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0x4141f9) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0x4141f9.substr(0, 4))) {

            _0x40e8ea = true;

          }

        })(navigator.userAgent || navigator.vendor || window.opera);

        return _0x40e8ea;

      }

      window.w2c2020 = {

        fontStyle: {

          amarelo: new PIXI.TextStyle({

            align: "center",

            fill: "#ffe600ff",

            fontSize: 10,

            lineJoin: "round",

            stroke: "#ffe600ff",

            strokeThickness: 1,

            whiteSpace: "normal",

            wordWrap: true

          }),

          branco: new PIXI.TextStyle({

            align: "center",

            fill: "#ffe600ff",

            fontSize: 10,

            lineJoin: "round",

            stroke: "#ffe600ff",
            
            strokeThickness: 1,

            whiteSpace: "normal",

            wordWrap: true

          }),

          hsBranco: new PIXI.TextStyle({

            align: "center",

            fill: "#ffffffff",

            fontSize: 9,

            lineJoin: "round",

            whiteSpace: "normal",

            wordWrap: true,

            fontWeight: "bold"

          }),

          hsBrancoRight: new PIXI.TextStyle(_0x48e06b({

            align: "center",

            fill: "#fff",

            fontSize: 9,

            lineJoin: "round",

            whiteSpace: "normal",

            wordWrap: true,

            fontWeight: "bold"

          }, "align", "right")),

          brancoXzoom: new PIXI.TextStyle({

            align: "center",

            fill: "#fff",

            fontSize: 8,

            lineJoin: "round",

            whiteSpace: "normal",

            wordWrap: true,

            fontWeight: "bold"

          }),

          verdeXzoom: new PIXI.TextStyle({

            align: "center",

            fill: "#0ff555",

            fontSize: 9,

            lineJoin: "round",

            whiteSpace: "normal",

            wordWrap: true,

            fontWeight: "bold"

          })

        }

      };

      var _0x34cbc5 = ["#ffffffff", "#ffffffff", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];

      for (var _0x16d41d = 0; _0x16d41d < _0x34cbc5.length; _0x16d41d++) {

        var _0x3d2d94 = _0x34cbc5[_0x16d41d];

        w2c2020.fontStyle["tfc" + _0x16d41d] = new PIXI.TextStyle({

          align: "center",

          fill: "#ffffff",

          fontSize: 25,

          lineJoin: "round",

          whiteSpace: "normal",

          wordWrap: true,

          fontWeight: "bold"

        });

      }



      w2c2020.conteinerTeam = new PIXI.Container();

      w2c2020.conteinerTeam.id = "team";

      w2c2020.friends = new PIXI.Container();

      w2c2020.friends.background = new PIXI.Graphics();

      w2c2020.friends.background.beginFill(0, 0.4);

      w2c2020.friends.background.drawRect(0, 0, 100, 130);

      w2c2020.friends.background.endFill();

      w2c2020.friends.addChild(w2c2020.friends.background);

      w2c2020.friends.position.x = bbs.displayFriends?.x || -10;

      w2c2020.friends.position.y = bbs.displayFriends?.y || 315;

      w2c2020.friends.position.rotate = bbs.displayFriends?.rotate || 0;

      w2c2020.friends.alpha = 0;

      w2c2020.moveSprite = PIXI.Sprite.from(URLSERV_WORMWORLD + "/img/move-icon.png");

      w2c2020.moveSprite.width = 20;

      w2c2020.moveSprite.height = 20;

      w2c2020.moveSprite.x = 75;

      w2c2020.moveSprite.y = 130;

      w2c2020.moveSprite.interactive = true;

      w2c2020.moveSprite.buttonMode = true;

      w2c2020.rotation = PIXI.Sprite.from(URLSERV_WORMWORLD + "/img/rotate-icon.png");

      w2c2020.rotation.width = 25;

      w2c2020.rotation.height = 25;

      w2c2020.rotation.x = 45;

      w2c2020.rotation.y = 130;

      w2c2020.rotation.interactive = true;

      w2c2020.rotation.buttonMode = true;

      w2c2020.friends.addChild(w2c2020.moveSprite);

      w2c2020.friends.addChild(w2c2020.rotation);

      var _0xcedae7 = false;

      var _0x16b7d5 = {

        x: 0,

        y: 0

      };

      w2c2020.rotation.on("pointerdown", function (_0x1c0e2d) {

        w2c2020.friends.rotation += Math.PI / 2;

        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs || {}));

      });

      w2c2020.moveSprite.on("pointerdown", function (_0x2fd415) {

        _0xcedae7 = true;

        _0x16b7d5.x = _0x2fd415.data.global.x - w2c2020.friends.x;

        _0x16b7d5.y = _0x2fd415.data.global.y - w2c2020.friends.y;

      });

      w2c2020.moveSprite.on("pointerup", function () {

        _0xcedae7 = false;

      });

      w2c2020.moveSprite.on("pointerupoutside", function () {

        _0xcedae7 = false;

      });

      w2c2020.moveSprite.on("pointermove", function (_0x1e6f82) {

        if (_0xcedae7) {

          var _0x1f21d1 = _0x1e6f82.data.global;

          w2c2020.friends.x = _0x1f21d1.x - _0x16b7d5.x;

          w2c2020.friends.y = _0x1f21d1.y - _0x16b7d5.y;

          bbs.displayFriends.x = w2c2020.friends.x;

          bbs.displayFriends.y = w2c2020.friends.y;

          localStorage.setItem("wwcSaveGame", JSON.stringify(bbs || {}));

        }

      });

      w2c2020.moveSprite.visible = false;

      w2c2020.rotation.visible = false;

      window.addEventListener("keydown", function (_0x447885) {

        if (_0x447885.key === "Escape") {

          w2c2020.moveSprite.visible = !w2c2020.moveSprite.visible;

          w2c2020.rotation.visible = !w2c2020.rotation.visible;

        }

      });

      w2c2020.label_hs = new PIXI.Text("HS", w2c2020.fontStyle.amarelo);



      w2c2020.label_hs.x = 15;

      w2c2020.label_hs.y = 107;

      w2c2020.hs = new PIXI.Text("0", w2c2020.fontStyle.amarelo);

      w2c2020.hs.x = 20;

      w2c2020.hs.y = 119;

      w2c2020.hsTotal = new PIXI.Text("0", w2c2020.fontStyle.branco);

      w2c2020.hsTotal.x = 20;

      w2c2020.hsTotal.y = 132;

      w2c2020.label_kill = new PIXI.Text("KILL", w2c2020.fontStyle.branco);





      w2c2020.label_kill.x = 50;

      w2c2020.label_kill.y = 107;

      w2c2020.kill = new PIXI.Text("0", w2c2020.fontStyle.branco);

      w2c2020.kill.x = 60;

      w2c2020.kill.y = 120;

      w2c2020.killTotal = new PIXI.Text("0", w2c2020.fontStyle.branco);

      w2c2020.killTotal.x = 60;

      w2c2020.killTotal.y = 133;

      w2c2020.clock = PIXI.Sprite.from("https://asserts.wormworld.io/images/clock.png");

      w2c2020.clock.width = 100;

      w2c2020.clock.height = 100;

      w2c2020.clock.x = -50;

      w2c2020.clock.y = -50;

      w2c2020.containerHsRec = new PIXI.Container();

      w2c2020.containerHsRec.x = -55;

      w2c2020.containerHsRec.y = 270;

      w2c2020.containerHstop = new PIXI.Container();

      w2c2020.containerHstop.x = -55;

      w2c2020.containerHstop.y = 170;

      w2c2020.containerHsIndex = new PIXI.Container();

      w2c2020.containerHsNames = new PIXI.Container();

      w2c2020.containerHsValue = new PIXI.Container();

      var _0x2f706b = function _0x344381(_0x351c3a) {};

      w2c2020.top1rec = "🥇";

      w2c2020.top2rec = "🥈";

      w2c2020.top3rec = "🥉";

      w2c2020.titleRec = new PIXI.Text("Records (kb 0)", w2c2020.fontStyle.amarelo);

      w2c2020.titleRec.y = -5;

      for (var _0xc8cbb9 = 0; _0xc8cbb9 < 3; _0xc8cbb9++) {

        var _0x475563 = _0xc8cbb9 + 1;

        var _0x456562 = new PIXI.Text(w2c2020["top" + _0x475563 + "rec"], w2c2020.fontStyle.hsBrancoRight);

        _0x456562.x = _0xc8cbb9 >= 9 ? -5 : 0;

        _0x456562.y = _0x475563 * 13;

        w2c2020.containerHsRec.addChild(_0x456562);

        var _0x3ed3bb = new PIXI.Text("--", w2c2020.fontStyle.hsBranco);

        _0x3ed3bb.x = 15;

        _0x3ed3bb.y = _0x475563 * 13;

        w2c2020.containerHsRec.addChild(_0x3ed3bb);

        var _0x144046 = new PIXI.Text("-", w2c2020.fontStyle.hsBrancoRight);

        _0x144046.x = 135;

        _0x144046.y = _0x475563 * 13;

        w2c2020.containerHsRec.addChild(_0x144046);

      }

      w2c2020.containerHsRec.addChild(w2c2020.titleRec);

      var _0x365892 = 6;

      var _0x522f60 = function _0x261bce(_0x11b4e8, _0x5266c0) {

        if (_0x5266c0 && _0x5266c0.length > 0) {

          for (var _0x5852da = 0; _0x5852da < 3; _0x5852da++) {

            if (w2c2020.containerHsRec.children[_0x5852da]) {

              w2c2020.containerHsRec.children[_0x5852da * 3 + 1].text = _0x5266c0 && _0x5266c0[_0x5852da] ? _0x5266c0[_0x5852da].nickname.substring(0, 17) : "--";

            }

            if (w2c2020.containerHsRec.children[_0x5852da]) {

              w2c2020.containerHsRec.children[_0x5852da * 3 + 2].text = _0x5266c0 && _0x5266c0[_0x5852da] ? _0x5266c0[_0x5852da].score : "--";

            }

          }

        }

        if (_0x11b4e8 && _0x11b4e8.length > 0) {

          for (var _0x92226d = 0; _0x92226d < _0x365892; _0x92226d++) {

            var _0x20b9c7 = "--";

            var _0x38f66e = "--";

            if (_0x11b4e8 && _0x11b4e8[_0x92226d]) {

              _0x20b9c7 = _0x11b4e8[_0x92226d].nickname ? _0x11b4e8[_0x92226d].nickname.substring(0, 14) : "--";

              _0x38f66e = parseInt(_0x11b4e8[_0x92226d].score || 0);

            }

            if (w2c2020.containerHsNames.children[_0x92226d]) {

              w2c2020.containerHsNames.children[_0x92226d].text = _0x20b9c7;

            }

            if (w2c2020.containerHsValue.children[_0x92226d]) {

              w2c2020.containerHsValue.children[_0x92226d].text = _0x38f66e;

            }

          }

        }

      };

      w2c2020.containerHstop.addChild(new PIXI.Text("TOP HS (kb 9)", w2c2020.fontStyle.amarelo));

      for (var _0xae236f = 0; _0xae236f < _0x365892; _0xae236f++) {

        var _0x29cb16 = new PIXI.Text(_0xae236f + 1, w2c2020.fontStyle.hsBranco);

        _0x29cb16.x = _0xae236f >= 9 ? -5 : 0;

        _0x29cb16.y = (_0xae236f + 1) * 13;

        w2c2020.containerHsIndex.addChild(_0x29cb16);

        var _0x18138f = new PIXI.Text("..", w2c2020.fontStyle.hsBranco);

        _0x18138f.x = 10;

        _0x18138f.y = (_0xae236f + 1) * 13;

        w2c2020.containerHsNames.addChild(_0x18138f);

        var _0x5e3928 = new PIXI.Text(0, w2c2020.fontStyle.hsBrancoRight);

        _0x5e3928.x = 130;

        _0x5e3928.y = (_0xae236f + 1) * 13;

        w2c2020.containerHsValue.addChild(_0x5e3928);

      }

      w2c2020.containerHstop.addChild(w2c2020.containerHsIndex);

      w2c2020.containerHstop.addChild(w2c2020.containerHsNames);

      w2c2020.containerHstop.addChild(w2c2020.containerHsValue);

      w2c2020.containerCountInfo = new PIXI.Container();

      w2c2020.containerCountInfo.x = -45;

      w2c2020.containerCountInfo.y = -52;

      w2c2020.containerCountInfo.addChild(w2c2020.friends);

      w2c2020.containerCountInfo.addChild(w2c2020.label_hs);

      w2c2020.containerCountInfo.addChild(w2c2020.hs);

      w2c2020.containerCountInfo.addChild(w2c2020.hsTotal);

      w2c2020.containerCountInfo.addChild(w2c2020.label_kill);

      w2c2020.containerCountInfo.addChild(w2c2020.kill);

      w2c2020.containerCountInfo.addChild(w2c2020.killTotal);

      w2c2020.labelRoom = new PIXI.Text("WXO", w2c2020.fontStyle.amarelo);

      w2c2020.labelRoom.x = -50;

      w2c2020.labelRoom.y = -56;

      w2c2020.addRoom = function (_0x2fb5c9) {

        w2c2020.labelRoom.text = _0x2fb5c9 || "WXO";

      };

      window.addEventListener("keydown", function (_0x3f5f45) {

        if (_0x3f5f45.key == "7") {

          _0x517127(_0x3b8b0f ? 0 : 7);

        }

        if (_0x3f5f45.key == "8") {

          _0x517127(_0x3b8b0f ? 0 : 8);

        }

        if (_0x3f5f45.key === "0" && bbs.showRechs) {

          w2c2020.containerHsRec.alpha = !w2c2020.containerHsRec.alpha;

        }

        if (_0x3f5f45.key === "9" && bbs.showTophs) {

          w2c2020.containerHstop.alpha = !w2c2020.containerHstop.alpha;

        }

        if (_0x3f5f45.key === "6" && _0x39fe91.setIntervalRun) {

          _0x309b30 = !_0x309b30;

        }

        if (_0x3f5f45.key === "5") {

          respawnFn();

        }

        if (_0x3f5f45.key === "4") {

          var _0x4c0926 = _wwc._anApp.og.af.ng.mf.getChildByName("lineHS");

          if (_0x4c0926) {

            _0x4c0926.alpha = _0x4c0926.alpha ? 0 : 0.3;

          }

        }

if (_0x3f5f45.key === "3") {

    var _0x327140 = _0xde0406;

    if (backgroundArena.length < _0x327140) {

        _0x327140 = bbs.background || 0;

        _0xde0406 = 0;

    }

    

    // تطبيق الخلفية فوراً

    _0x1f8817.xe._g = _0x39fe91.bgg(_0x327140);

    _wwc._anApp.og.af.ng.Lg.$g(_0x1f8817.xe._g);

    

    // حفظ الخلفية

    bbs.background = _0x327140;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    $("#backgroundArena").val(_0x327140);

    

    _0xde0406++;

}

        if (_0x3f5f45.key === "1") {

          mbf.mbf_cambiar();

        }

        if (_0x3f5f45.key === "x1") {

          _wwcio.update(1);

        }

        if (_0x3f5f45.key === "x2") {

          _wwcio.update(2);

        }

        if (_0x3f5f45.key === "<" || _0x3f5f45.key === "," && _0x39fe91.setIntervalRun) {

          mbf.mbfass1();

        }

        if (_0x3f5f45.key === ">" || _0x3f5f45.key === "." && _0x39fe91.setIntervalRun) {

          mbf.mbfass2();

        }

        if (_0x3f5f45.key === "z" || _0x3f5f45.key === "Z" && _0x39fe91.setIntervalRun) {

          _0x2614f5 = bbs.configZoom?.closeDown || 1;

        }

        if (_0x3f5f45.key === "c" || _0x3f5f45.key === "C" && _0x39fe91.setIntervalRun) {

          _0x2614f5 = _0x2614f5 === 0.5 ? 2 : bbs.configZoom?.closeUp || 0.25;

        }

      });

      var _0x1f8817 = {

        Lc: {

          Gb: {}

        }

      };

      var _0x39fe91 = {

        pm: {},

        ps: 0,

        ps2: function _0x4e902e(_0x6d2a64, _0xfccb2d, _0x321c94) {

          if (true) {

            var _0x4fb9cd = _0x321c94 ? 128 : 0;

            var _0xcf2812 = _0x39fe91.$F.N(_0xfccb2d) / _0x39fe91.$V.F * 128 & 127;

            var _0x10896f = (_0x4fb9cd | _0xcf2812) & 255;

            if (_0x6d2a64.nq !== _0x10896f) {

              var _0x30bfc8 = new ArrayBuffer(1);

              new DataView(_0x30bfc8).setInt8(0, _0x10896f);

              _0x6d2a64.Eq(_0x30bfc8);

              _0x6d2a64.nq = _0x10896f;

            }

          } else {}

        },

        ps3: function _0x2c3473() {

          _0x1f8817.dh.xq(_0x1f8817.og.af.Gn(), _0x1f8817.og.af.Hn());

        },

        setIntervalRun: null,

        loadBg: false,

        LG: function _0x4096fe(_0xadfdd8, _0x981b8a, _0x2fb067) {

          _0xadfdd8.Ll("gg", _0x2fb067.credential, null);

        },

        Lg: function _0x727e47(_0x3e61c2) {

          _0x1f8817.xe._g = _0x39fe91.bgg();

          _wwc.$C = _0x3e61c2;

          _wwc.$W = _0x39fe91;

          if (bbs.bgGameWidth > 512) {

            return new _0x3e61c2.WMGBS1();

          } else {

            return new _0x3e61c2.WMGBS2();

          }

        },

        registry: function () {

          var _0x3b8e7d = _0x5a1854(_0x3e50a4().mark(function _0x39cb24(_0x59b433) {

            var _0x4a96ac;

            return _0x3e50a4().wrap(function _0x249954(_0x5a9679) {

              while (1) {

                switch (_0x5a9679.prev = _0x5a9679.next) {

                  case 0:

                    _0x5a9679.next = 2;

                    return fetch(URLSERV_WORMWORLD + "/dynamic/assets/registry", {

                      method: "POST",

                      headers: {

                        "Content-Type": "application/json",

                        "x-uid": wwc_keycode

                      },

                      body: JSON.stringify(_0x59b433)

                    }).then(function (_0x24cd03) {

                      if (!_0x24cd03.ok) {

                        return _0x59b433;

                      }

                      return _0x24cd03.json();

                    });

                  case 2:

                    _0x4a96ac = _0x5a9679.sent;

                    return _0x5a9679.abrupt("return", _0x4a96ac);

                  case 4:

                  case "end":

                    return _0x5a9679.stop();

                }

              }

            }, _0x39cb24);

          }));

          function _0x573f69(_0x335c6a) {

            return _0x3b8e7d.apply(this, arguments);

          }

          return _0x573f69;

        }()

      };

      _0x39fe91.Vd = function (_0x564df8, _0x2e9158) {

        _wwc.customConfig(_0x564df8);

        if (!_0x564df8) {

          return;

        }

        var _0x14f194 = this;

        function _0x59fc32(_0x6f760c) {

          var _0x180c7d = _0x2e9158.Id.Ld;

          _0x14f194.Rd(_0x180c7d, _0x2e9158.Od.bc(_0x180c7d).lc(_0x6f760c));

        }

        if (this.Fd) {

          this.Pd();

          return;

        }

        var _0x36af93 = [];

        var _0x26ff5d = [];

        var _0x1e6525 = 0;

        var _0x59787b = new PIXI.Loader();

        for (var _0x52e62b in _0x564df8.textureDict) {

          if (_0x564df8.textureDict.hasOwnProperty(_0x52e62b)) {

            var _0x586f5b = _0x564df8.textureDict[_0x52e62b];

            var _0x497fd3 = _0x586f5b.re1ativePath || _0x586f5b.relativePath;

            var _0x15d7f4 = _0x586f5b.fileSize || 100;

            var _0x8009b8 = _0x586f5b.sha256 || null;

            var _0x5f562f = new _0x2e9158.Wd(_0x52e62b, _0x497fd3, _0x15d7f4, _0x8009b8);

            _0x5f562f.h1 = _0x586f5b.h1;

            _0x5f562f.h4 = _0x586f5b.h4;

            _0x5f562f.skinEvo = _0x586f5b.skinEvo;

            _0x5f562f.lines = _0x586f5b.lines;

            _0x5f562f.speed = _0x586f5b.speed;

            _0x36af93.push(_0x5f562f);

            _0x59787b.add(_0x52e62b, _0x497fd3);

          }

        }

        _0x59787b.onProgress.add(function (_0x11dfa2, _0xc3e677) {

          _0x59fc32(_0x11dfa2.progress / 100);

        });

        _0x59787b.load(function (_0x2fbf2f, _0x13ae4b) {

          _0x36af93.forEach(function (_0x11f169) {

            _0x11f169.resource = _0x13ae4b[_0x11f169.ae];

          });

          _0x14f194.$d(_0x564df8, _0x36af93, _0x2e9158);

        });

        return;

      };

      _0x39fe91.Zd = function (_0x1ffa54, _0x4e8cc0, _0x35d73b, _0x4e216f) {

        $.ajax({

          type: "GET",

          url: _0x1ffa54._d,

          xhrFields: {

            responseType: "arraybuffer",

            onprogress: function _0x203563(_0x5c1e25) {

              if (_0x5c1e25.lengthComputable) {

                _0x4e216f(_0x5c1e25.loaded / _0x5c1e25.total);

              }

            }

          }

        }).fail(function () {

          _0x4e8cc0(new Error());

        }).done(function (_0x55bcbb) {

          _0x35d73b(_0x55bcbb);

        });

      };

      _0x39fe91.$d = function (_0x175274, _0x48be07, _0x313908) {

        function _0x28f351(_0x428e91) {

          var _0x47f72d = _0x313908.Id.Md;

          _0x33900e.Rd(_0x47f72d, _0x313908.Od.bc(_0x47f72d).lc(_0x428e91));

        }

        var _0x33900e = this;

        if (this.Fd) {

          this.Pd();

          return;

        }

        var _0x454e76;

        var _0x122d6b;

        var _0x1f7273 = {};

        var _0x1ccf63 = function _0x155611() {

          for (var _0x51f6d6 = 0; _0x51f6d6 < _0x48be07.length; _0x51f6d6++) {

            try {

              window.URL.revokeObjectURL(_0x48be07[_0x51f6d6].Xd);

            } catch (_0x215864) {}

          }

          _0x33900e.Sd(new Error());

        };

        var _0x4c214b = function _0x193ee1() {

          var _0x5e8227 = _0x539bcd == 5 ? 0 : _0x539bcd;

          _0x28f351(_0x5e8227 / 4);

          _0x1f7273[_0x454e76.ae] = new _0x39fe91.$C.be(_0x454e76.Xd, _0x122d6b);

          _0x5e1798();

        };

        var _0x5e1798 = function _0x419e21() {

          try {

            if (_0x539bcd < _0x48be07.length) {

              _0x454e76 = _0x48be07[_0x539bcd];

              _0x539bcd++;

              _0x1f7273[_0x454e76.ae] = new _0x39fe91.$C.be(_0x454e76.resource.texture, _0x454e76.resource.texture.baseTexture);

              _0x5e1798();

              return;

            }

            return _0x33900e.ce(_0x175274, _0x1f7273);

          } catch (_0x117e22) {

            console.error(_0x117e22);

          }

        };

        var _0x539bcd = 0;

        _0x5e1798();

      };

      _0x39fe91.p = function (_0x4de635, _0x511b08) {

        _0x4de635 = _0x4de635.split("|");

        _0x39fe91.pm[_0x4de635[0]] = {

          p: _0x4de635[1],

          i: _0x511b08

        };

      };

      _0x39fe91.ae = function (_0x4107e1, _0x1fd5ab, _0x294668) {

        if (_0x1fd5ab.maV !== 1) {

          _0x1fd5ab.maV = 1;

          var _0x2704ca = _0x1fd5ab.ma.trim().match(_0xd396b2);

          if (_0x2704ca && _0x294668.dh.Fh[_0x1fd5ab.ae]) {

            var _0x3efd99 = function _0x3616b2(_0xab8a6b, _0x50a265) {

              if (_0xab8a6b.includes("_")) {

                if (_0x3afe33["WEAR_W" + _0x2a31c5 + "_" + _0xab8a6b]) {

                  return _0x3afe33["WEAR_W" + _0x2a31c5 + "_" + _0xab8a6b].reference;

                } else {

                  return _0x50a265;

                }

              }

              return _wwc.wearMap[_0xab8a6b];

            };

            var _0x2136ef = _0x2704ca[3];

            var _0x2a31c5 = _0x2704ca[4];

            var _0x2c5d83 = _0x2704ca[5];

            var _0x43b25a = _0x2704ca[6];

            var _0x2dee31 = _0x2704ca[7];

            var _0xc4390 = _0x2704ca[8];

            var _0x5b31f4 = _0x2704ca[9];

            var _0x3afe33 = _0x1f8817.Lc.Xb().textureDict;

            var _0x77ef67 = _0x2136ef === "B";

            if (_0x2c5d83 !== "000") {

              var _0x5a617a = "SKIN_S" + _0x2c5d83.substring(0, 2) + "___" + _0x2c5d83.substring(2);

              var _0x5bf7ef = _0x3afe33[_0x5a617a];

              _0x294668.dh.Fh[_0x1fd5ab.ae].Eh.Hh = !_0x77ef67 ? parseInt(_wwc.skinMap[_0x2c5d83]) : _0x5bf7ef ? _0x5a617a : _0x294668.dh.Fh[_0x1fd5ab.ae].Eh.Hh;

            }

            if (_0x43b25a !== "00") {

              _0x294668.dh.Fh[_0x1fd5ab.ae].Eh.ni = _0x3efd99(_0x43b25a, _0x294668.dh.Fh[_0x1fd5ab.ae].Eh.ni);

            }

            if (_0x2dee31 !== "00") {

              _0x294668.dh.Fh[_0x1fd5ab.ae].Eh.oi = _0x3efd99(_0x2dee31, _0x294668.dh.Fh[_0x1fd5ab.ae].Eh.oi);

            }

            if (_0xc4390 !== "00") {

              _0x294668.dh.Fh[_0x1fd5ab.ae].Eh.pi = _0x3efd99(_0xc4390, _0x294668.dh.Fh[_0x1fd5ab.ae].Eh.pi);

            }

            if (_0x5b31f4 !== "00") {

              _0x294668.dh.Fh[_0x1fd5ab.ae].Eh.qi = _0x3efd99(_0x5b31f4, _0x294668.dh.Fh[_0x1fd5ab.ae].Eh.qi);

            }

            _0x294668.dh.Fh[_0x1fd5ab.ae].Eh.ma = _0x15ee1c(_0x294668.dh.Fh[_0x1fd5ab.ae].Eh.ma);

          }

        }

        _0x1fd5ab.ma = _0x15ee1c(_0x1fd5ab.ma);

      };

      _0x39fe91.Xp = function (_0x3e53ec, _0x43633b, _0x2b49d1, _0x3a2d40, _0x52ff6e, _0x4c25ab, _0x4f368a) {

        if (!_wwc.skinMap) {

          _wwc.skinMap = _0x1f8817.Lc.Xb().skinMap;

        }

        if (!_wwc.wearMap) {

          _wwc.wearMap = _0x1f8817.Lc.Xb().wearMap;

        }

        var _0x11065b = /^(SKIN|WEAR)_(.*?)_(.{2}|.{3})$/;

        var _0x162870 = _0x1f8817.Lc.Xb().hatDict[_0x4f368a] ? _0x1f8817.Lc.Xb().hatDict[_0x4f368a].id : _0x4f368a;

        var _0x2a5a05 = _0x1f8817.Lc.Xb().glassesDict[_0x4c25ab] ? _0x1f8817.Lc.Xb().glassesDict[_0x4c25ab].id : _0x4c25ab;

        var _0x1897b9 = _0x1f8817.Lc.Xb().glassesDict[_0x52ff6e] ? _0x1f8817.Lc.Xb().mouthDict[_0x52ff6e].id : _0x52ff6e;

        var _0x540b6b = _0x1f8817.Lc.Xb().glassesDict[_0x3a2d40] ? _0x1f8817.Lc.Xb().eyesDict[_0x3a2d40].id : _0x3a2d40;

        var _0x2abb74 = "A";

        var _0x45e8c2 = "";

        var _0x5e701c = "__";

        var _0x3082cb = function _0x5b5203(_0x54c68b, _0x49402e) {

          if (_0x11065b.test(_0x54c68b)) {

            var _0x14441e = _0x11065b.exec(_0x54c68b);

            return {

              id: _0x14441e[2],

              value: _0x14441e[3],

              testRun: true

            };

          }

          return {

            id: null,

            value: null,

            testRun: false

          };

        };

        var _0x5a8343 = {

          h: _0x3082cb(_0x2b49d1, "h"),

          r: _0x3082cb(_0x540b6b, "r"),

          a: _0x3082cb(_0x1897b9, "a"),

          f: _0x3082cb(_0x2a5a05, "f"),

          c: _0x3082cb(_0x162870, "c")

        };

        if (_0x5a8343.h.testRun) {

          _0x45e8c2 = _0x5a8343.h.id.substring(1);

          _0x2abb74 = "B";

        }

        if (_0x5a8343.r.testRun || _0x5a8343.a.testRun || _0x5a8343.f.testRun || _0x5a8343.c.testRun) {

          _0x5e701c = (_0x5a8343.r.id || _0x5a8343.a.id || _0x5a8343.f.id || _0x5a8343.c.id).substring(1);

        }

        var _0x5216fc = function _0x6c0f13(_0x17f5e7, _0x283c7d) {

          if (_0x5a8343[_0x283c7d].value) {

            return _0x5a8343[_0x283c7d].value.padStart(_0x283c7d === "h" ? 3 : 2, "0");

          }

          if (!_wwc[_0x283c7d === "h" ? "testSkinMod" : "testWear"](_0x17f5e7 || 0)) {

            if (_0x5a8343[_0x283c7d].testRun) {

              return _0x17f5e7.toString().padStart(_0x283c7d === "h" ? 3 : 2, "0");

            } else if (_0x283c7d === "h") {

              return "000";

            } else {

              return "00";

            }

          }

          return _wwc[_0x283c7d === "h" ? "skinMap" : "wearMap"][_0x17f5e7] || (_0x283c7d === "h" ? "000" : "00");

        };

        var _0x417b86 = _0x5216fc(_0x2b49d1, "h");

        var _0x56618e = _0x5216fc(_0x3a2d40, "r");

        var _0x3a6196 = _0x5216fc(_0x52ff6e, "a");

        var _0x816f6f = _0x5216fc(_0x4c25ab, "f");

        var _0x29e203 = _0x5216fc(_0x4f368a, "c");

        var _0x41a2e8 = _0x2abb74 + _0x5e701c + _0x45e8c2 + _0x417b86.replace("__", "") + _0x56618e + _0x3a6196 + _0x816f6f + _0x29e203;

        bbs.code = `${_0x417b86 || "000"}|${_0x29e203 || "00"}`;

        function _0x3488e6(_0x2c9263, _0x1db41a) {

          var _0x184391 = "";

          _0x184391 = _0x2c9263.substring(0, _0x30b68b).padEnd(_0x30b68b, "_");

          var _0x1465b8 = _0x184391 + _0x1db41a;

          return _0x1465b8;

        }

        bbs.nickname = _0x3488e6(_0x43633b, _0x41a2e8);

        return bbs.nickname;

      };

      _0x39fe91.bgg = function (_0x42e33e) {

        _0x42e33e = parseInt(_0x42e33e);

        var _0x1209b4 = bbs.backgroundUri || "/images/bg-pattern-pow2-ARENA.png";

        if (!isNaN(_0x42e33e)) {

          _0x1209b4 = backgroundArena[_0x42e33e]?.uri || _0x1209b4;

          bbs.bgGameWidth = backgroundArena[_0x42e33e]?.w || 512;

          bbs.bgGameHeight = backgroundArena[_0x42e33e]?.h || 256;

        }

        var _0xcec954 = PIXI.BaseTexture.from(_0x1209b4);

        bbs.bgGameWidth = _0xcec954.width || bbs.bgGameWidth || 512;

        bbs.bgGameHeight = _0xcec954.height || bbs.bgGameHeight || 256;

        _0xcec954.wrapMode = bbs.bgGameWidth > 999 ? PIXI.WRAP_MODES.CLAMP : PIXI.WRAP_MODES.REPEAT;

        return new PIXI.Texture(_0xcec954);

      };

      _0x39fe91.genereteTexture = function (_0x6ba826) {

        var _0x3fb97e = 128;

        var _0x221290 = 9;

        try {

          var _0x57b5ac = function _0x4acede() {

            var _0x3b4359 = [];

            for (var _0x31dbb5 = 0; _0x31dbb5 < _0x6ba826.lines; _0x31dbb5++) {

              lineContainer = [];

              for (var _0x1c2a05 = 0; _0x1c2a05 < _0x221290; _0x1c2a05++) {

                try {

                  var _0x590887 = PIXI.Texture.from(_0x6ba826._d, {

                    x: _0x1c2a05 * _0x3fb97e,

                    y: _0x31dbb5 * _0x3fb97e,

                    width: _0x3fb97e,

                    height: _0x3fb97e

                  });

                  lineContainer.push(_0x590887);

                } catch (_0x229f5c) {

                  console.log(_0x31dbb5, _0x1c2a05);

                  console.log(_0x229f5c);

                  return;

                }

              }

              _0x3b4359.push(lineContainer);

            }

            return _0x3b4359;

          };

          return _0x57b5ac();

        } catch (_0x482abc) {

          return [];

        }

      };

      var _0x296091 = {

        headshot: "https://timmapwormate.com/images/hs_2.mp3",

        shaokahn: window.URL_CDN + "/sounds/shao_kahn_sound_effect.mp3",

        speed: window.URL_CDN + "/sounds/woo_Hoo_sound_effect.mp3",

        curve: window.URL_CDN + "/sounds/yes_effect.mp3",

        loser: window.URL_CDN + "/sounds/negative_beeps_effect.mp3",

        top1: window.URL_CDN + "/sounds/mission_complete_sound_effect.mp3"

      };

      _0x49249a.ref = ["speed", "curve"];

      for (var _0x40b7e5 in _0x296091) {

        _0x49249a[_0x40b7e5] = new _0x5a6428.Howl({

          src: [_0x296091[_0x40b7e5]],

          html5: true,

          autoplay: _0x40b7e5 == "top1",

          loop: false

        });

      }

      var _0x2d6cbb = {

        "rotate(0deg)": 0,

        "rotate(90deg)": 1.5707963267948966,

        "rotate(180deg)": 3.141592653589793,

        "rotate(270deg)": 4.71238898038469,

        "rotate(360deg)": 0

      };

      var _0x23d1c9 = typeof Symbol == "function" && _0x20a029(Symbol.iterator) == "symbol" ? function (_0x1d14d6) {

        return _0x20a029(_0x1d14d6);

      } : function (_0x2cc07f) {

        if (_0x2cc07f && typeof Symbol == "function" && _0x2cc07f.constructor === Symbol && _0x2cc07f !== Symbol.prototype) {

          return "symbol";

        } else {

          return _0x20a029(_0x2cc07f);

        }

      };

      var _0x3d881c;

      window.addEventListener("load", function () {

        function _0x309142() {

          (function (_0x123286, _0x5ba21e, _0xed879d) {

            function _0x56eeb2(_0x197971, _0x46e401) {

              return (_0x197971 === undefined ? "undefined" : _0x23d1c9(_0x197971)) === _0x46e401;

            }

            function _0x108936() {

              if (typeof _0x5ba21e.createElement != "function") {

                return _0x5ba21e.createElement(arguments[0]);

              } else if (_0x166f6c) {

                return _0x5ba21e.createElementNS.call(_0x5ba21e, "http://www.w3.org/2000/svg", arguments[0]);

              } else {

                return _0x5ba21e.createElement.apply(_0x5ba21e, arguments);

              }

            }

            var _0x155355 = [];

            var _0xa04d40 = [];

            var _0x1a107e = {

              _version: "3.3.1",

              _config: {

                classPrefix: "",

                enableClasses: true,

                enableJSClass: true,

                usePrefixes: true

              },

              _q: [],

              on: function _0x13d554(_0x4f7bab, _0x42fb49) {

                var _0x5cee81 = this;

                setTimeout(function () {

                  _0x42fb49(_0x5cee81[_0x4f7bab]);

                }, 0);

              },

              addTest: function _0x4e18c6(_0xf4952f, _0x3c775d, _0x428677) {

                _0xa04d40.push({

                  name: _0xf4952f,

                  fn: _0x3c775d,

                  options: _0x428677

                });

              },

              addAsyncTest: function _0x191cd7(_0x2b87ef) {

                _0xa04d40.push({

                  name: null,

                  fn: _0x2b87ef

                });

              }

            };

            var _0x3b117e = function _0x5cedab() {};

            _0x3b117e.prototype = _0x1a107e;

            _0x3b117e = new _0x3b117e();

            var _0x1550bc = false;

            try {

              _0x1550bc = "WebSocket" in _0x123286 && _0x123286.WebSocket.CLOSING === 2;

            } catch (_0x1fe2a3) {}

            _0x3b117e.addTest("websockets", _0x1550bc);

            var _0x4d2d3d = _0x5ba21e.documentElement;

            var _0x166f6c = _0x4d2d3d.nodeName.toLowerCase() === "svg";

            _0x3b117e.addTest("canvas", function () {

              var _0x5e5288 = _0x108936("canvas");

              return !!_0x5e5288.getContext && !!_0x5e5288.getContext("2d");

            });

            _0x3b117e.addTest("canvastext", function () {

              return _0x3b117e.canvas !== false && typeof _0x108936("canvas").getContext("2d").fillText == "function";

            });

            (function () {

              var _0x2e7706;

              var _0x3d10fb;

              var _0x739fe7;

              var _0x57ff90;

              var _0x20246e;

              var _0x4e441a;

              var _0x3f8c3e;

              for (var _0x325c42 in _0xa04d40) {

                if (_0xa04d40.hasOwnProperty(_0x325c42)) {

                  _0x2e7706 = [];

                  _0x3d10fb = _0xa04d40[_0x325c42];

                  if (_0x3d10fb.name && (_0x2e7706.push(_0x3d10fb.name.toLowerCase()), _0x3d10fb.options && _0x3d10fb.options.aliases && _0x3d10fb.options.aliases.length)) {

                    for (_0x739fe7 = 0; _0x739fe7 < _0x3d10fb.options.aliases.length; _0x739fe7++) {

                      _0x2e7706.push(_0x3d10fb.options.aliases[_0x739fe7].toLowerCase());

                    }

                  }

                  _0x57ff90 = _0x56eeb2(_0x3d10fb.fn, "function") ? _0x3d10fb.fn() : _0x3d10fb.fn;

                  _0x20246e = 0;

                  for (; _0x20246e < _0x2e7706.length; _0x20246e++) {

                    _0x4e441a = _0x2e7706[_0x20246e];

                    _0x3f8c3e = _0x4e441a.split(".");

                    if (_0x3f8c3e.length === 1) {

                      _0x3b117e[_0x3f8c3e[0]] = _0x57ff90;

                    } else {

                      if (!!_0x3b117e[_0x3f8c3e[0]] && !(_0x3b117e[_0x3f8c3e[0]] instanceof Boolean)) {

                        _0x3b117e[_0x3f8c3e[0]] = new Boolean(_0x3b117e[_0x3f8c3e[0]]);

                      }

                      _0x3b117e[_0x3f8c3e[0]][_0x3f8c3e[1]] = _0x57ff90;

                    }

                    _0x155355.push((_0x57ff90 ? "" : "no-") + _0x3f8c3e.join("-"));

                  }

                }

              }

            })();

            (function (_0x225fa0) {

              var _0x5094cb = _0x4d2d3d.className;

              var _0x4d01c0 = _0x3b117e._config.classPrefix || "";

              if (_0x166f6c) {

                _0x5094cb = _0x5094cb.baseVal;

              }

              if (_0x3b117e._config.enableJSClass) {

                var _0x359724 = new RegExp("(^|\\s)" + _0x4d01c0 + "no-js(\\s|$)");

                _0x5094cb = _0x5094cb.replace(_0x359724, "$1" + _0x4d01c0 + "js$2");

              }

              if (_0x3b117e._config.enableClasses) {

                _0x5094cb += " " + _0x4d01c0 + _0x225fa0.join(" " + _0x4d01c0);

                if (_0x166f6c) {

                  _0x4d2d3d.className.baseVal = _0x5094cb;

                } else {

                  _0x4d2d3d.className = _0x5094cb;

                }

              }

            })(_0x155355);

            delete _0x1a107e.addTest;

            delete _0x1a107e.addAsyncTest;

            for (var _0x383d95 = 0; _0x383d95 < _0x3b117e._q.length; _0x383d95++) {

              _0x3b117e._q[_0x383d95]();

            }

            _0x123286.Modernizr = _0x3b117e;

          })(window, document);

          return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;

        }

        document.getElementById("game-wrap").style.display = "block";

        if (!_0x309142()) {

          document.getElementById("error-view").style.display = "block";

          return;

        }

        (function () {

          function _0x5d39d0() {

            return _0x1f8817;

          }

          var _0x232886 = {};

          var _0x1c15a7 = {};

          var decoder = {

            a: {

              r: window.runtimeHash,

              b: "https://gateway.wormate.io",

              c: "https://resources.wormate.io",

              d: "/images/linelogo-valday2023.png",

              e: "/images/guest-avatar-valday2023.png",

              f: "/images/confetti-valday2023.png",

              g: "/images/bg-event-pattern-valday2023.png"

            }

          };

          decoder.a.i = function () {

            var _0x1f9e4f = window.I18N_LANG;

            _0x1f9e4f ||= "en";

            return _0x1f9e4f;

          }();

          decoder.a.j = function () {

            var _0xc8d0b1 = undefined;

            switch (decoder.a.i) {

              case "uk":

                _0xc8d0b1 = "uk_UA";

                break;

              case "de":

                _0xc8d0b1 = "de_DE";

                break;

              case "fr":

                _0xc8d0b1 = "fr_FR";

                break;

              case "es":

                _0xc8d0b1 = "es_ES";

                break;

              default:

                _0xc8d0b1 = "en_US";

            }

            return _0xc8d0b1;

          }();

          moment.locale(decoder.a.j);

          var _0x429afb = function () {

            return {

              Container: PIXI.Container,

              BaseTexture: PIXI.BaseTexture,

              Texture: PIXI.Texture,

              Renderer: PIXI.Renderer,

              Graphics: PIXI.Graphics,

              Shader: PIXI.Shader,

              Rectangle: PIXI.Rectangle,

              Sprite: PIXI.Sprite,

              Text: PIXI.Text,

              Geometry: PIXI.Geometry,

              Mesh: PIXI.Mesh,

              v: {

                z: PIXI.BLEND_MODES.ADD,

                A: PIXI.BLEND_MODES.SCREEN,

                B: PIXI.BLEND_MODES.MULTIPLY

              },

              C: {

                D: PIXI.WRAP_MODES.REPEAT

              }

            };

          }();

          _0x1c15a7.F = 6.283185307179586;

          _0x1c15a7.G = Math.PI;

          decoder.H = function (_0x5cdb68) {

            return window.I18N_MESSAGES[_0x5cdb68];

          };

          decoder.I = function (_0x101cfb) {

            if (_0x101cfb[decoder.a.i]) {

              return _0x101cfb[decoder.a.i];

            } else if (_0x101cfb.en) {

              return _0x101cfb.en;

            } else {

              return _0x101cfb.x;

            }

          };

          decoder.J = function (_0x2c55ce) {

            var _0x54c240 = (Math.floor(_0x2c55ce) % 60).toString();

            var _0x5ddd62 = (Math.floor(_0x2c55ce / 60) % 60).toString();

            var _0x214181 = (Math.floor(_0x2c55ce / 3600) % 24).toString();

            var _0x5169f6 = Math.floor(_0x2c55ce / 86400).toString();

            var _0x5866a6 = decoder.H("util.time.days");

            var _0x425353 = decoder.H("util.time.hours");

            var _0x22eff1 = decoder.H("util.time.min");

            var _0x2595bf = decoder.H("util.time.sec");

            if (_0x5169f6 > 0) {

              return _0x5169f6 + " " + _0x5866a6 + " " + _0x214181 + " " + _0x425353 + " " + _0x5ddd62 + " " + _0x22eff1 + " " + _0x54c240 + " " + _0x2595bf;

            } else if (_0x214181 > 0) {

              return _0x214181 + " " + _0x425353 + " " + _0x5ddd62 + " " + _0x22eff1 + " " + _0x54c240 + " " + _0x2595bf;

            } else if (_0x5ddd62 > 0) {

              return _0x5ddd62 + " " + _0x22eff1 + " " + _0x54c240 + " " + _0x2595bf;

            } else {

              return _0x54c240 + " " + _0x2595bf;

            }

          };

          decoder.K = function (_0x20a6fa) {

            if (_0x20a6fa.includes("href")) {

              return _0x20a6fa.replaceAll("href", "target=\"_black\" href");

            } else {

              return _0x20a6fa;

            }

          };

          decoder.L = function (_0x19bbfb, _0x36808b, _0x23fe8c, _0xe3048a) {

            var _0x16a148 = document.createElement("script");

            var _0x1c262d = true;

            if (_0x23d1c9(_0x36808b) !== "undefined" && _0x36808b !== null) {

              if (_0x23d1c9(_0x36808b.id) !== "undefined") {

                _0x16a148.id = _0x36808b.id;

              }

              if (_0x23d1c9(_0x36808b.async) !== "undefined" && _0x36808b.async) {

                _0x16a148.async = "async";

              }

              if (_0x23d1c9(_0x36808b.defer) !== "undefined" && _0x36808b.defer) {

                _0x16a148.defer = "defer";

              }

              if (_0x23d1c9(_0x36808b.crossorigin) !== "undefined") {

                _0x16a148.crossorigin = _0x36808b.crossorigin;

              }

            }

            _0x16a148.type = _0x16a148.type == _0xe3048a ? "module" : "text/javascript";

            _0x16a148.src = _0x19bbfb;

            if (_0x23fe8c) {

              _0x16a148.onload = _0x16a148.onreadystatechange = function () {

                _0x1c262d = false;

                try {

                  _0x23fe8c();

                } catch (_0x929086) {}

                _0x16a148.onload = _0x16a148.onreadystatechange = null;

              };

            }

            (document.head || document.getElementsByTagName("head")[0]).appendChild(_0x16a148);

          };

          decoder.M = function (_0x10da92, _0x5a1ae2) {

            var _0x4f939a = _0x5a1ae2;

            _0x4f939a.prototype = Object.create(_0x10da92.prototype);

            _0x4f939a.prototype.constructor = _0x4f939a;

            _0x4f939a.parent = _0x10da92;

            return _0x4f939a;

          };

          decoder.N = function (_0xe7c7bc) {

            _0xe7c7bc %= _0x1c15a7.F;

            if (_0xe7c7bc < 0) {

              return _0xe7c7bc + _0x1c15a7.F;

            } else {

              return _0xe7c7bc;

            }

          };

          decoder.O = function (_0x3cb762, _0x230aff, _0x1a8fe5) {

            return decoder.P(_0x1a8fe5, _0x3cb762, _0x230aff);

          };

          decoder.P = function (_0x2c7a33, _0x2516c3, _0x258d7b) {

            if (_0x2c7a33 > _0x258d7b) {

              return _0x258d7b;

            } else if (_0x2c7a33 < _0x2516c3) {

              return _0x2516c3;

            } else if (Number.isFinite(_0x2c7a33)) {

              return _0x2c7a33;

            } else {

              return (_0x2516c3 + _0x258d7b) * 0.5;

            }

          };

          decoder.Q = function (_0xe287a9, _0x343776, _0xfb2ad2, _0x53fc79) {

            if (_0x343776 > _0xe287a9) {

              return Math.min(_0x343776, _0xe287a9 + _0xfb2ad2 * _0x53fc79);

            } else {

              return Math.max(_0x343776, _0xe287a9 - _0xfb2ad2 * _0x53fc79);

            }

          };

          decoder.R = function (_0x501520, _0x39a6dd, _0x6752e0, _0x5f00be, _0x53f5af) {

            return _0x39a6dd + (_0x501520 - _0x39a6dd) * Math.pow(1 - _0x5f00be, _0x6752e0 / _0x53f5af);

          };

          decoder.S = function (_0xac452f, _0x160e60, _0x1c9c4f) {

            return _0xac452f - (_0xac452f - _0x160e60) * _0x1c9c4f;

          };

          decoder.T = function (_0x44bffe, _0x47cd1b, _0x3414b9, _0x4dfa35) {

            var _0x92bca9 = _0x3414b9;

            var _0x4a899d = _0x47cd1b;

            var _0x1aa41c = _0x47cd1b + _0x4dfa35;

            if (_0x44bffe == null) {

              throw new TypeError("this is null or not defined");

            }

            var _0x3ed0fc = _0x44bffe.length >>> 0;

            var _0x2279d6 = _0x92bca9 >> 0;

            var _0x51ee10 = _0x2279d6 < 0 ? Math.max(_0x3ed0fc + _0x2279d6, 0) : Math.min(_0x2279d6, _0x3ed0fc);

            var _0x3c295c = _0x4a899d >> 0;

            var _0x2a44fb = _0x3c295c < 0 ? Math.max(_0x3ed0fc + _0x3c295c, 0) : Math.min(_0x3c295c, _0x3ed0fc);

            var _0x298153 = _0x1aa41c === undefined ? _0x3ed0fc : _0x1aa41c >> 0;

            var _0x4d5671 = _0x298153 < 0 ? Math.max(_0x3ed0fc + _0x298153, 0) : Math.min(_0x298153, _0x3ed0fc);

            var _0x5227da = Math.min(_0x4d5671 - _0x2a44fb, _0x3ed0fc - _0x51ee10);

            var _0x4a9968 = 1;

            for (_0x2a44fb < _0x51ee10 && _0x51ee10 < _0x2a44fb + _0x5227da && (_0x4a9968 = -1, _0x2a44fb += _0x5227da - 1, _0x51ee10 += _0x5227da - 1); _0x5227da > 0;) {

              if (_0x2a44fb in _0x44bffe) {

                _0x44bffe[_0x51ee10] = _0x44bffe[_0x2a44fb];

              } else {

                delete _0x44bffe[_0x51ee10];

              }

              _0x2a44fb += _0x4a9968;

              _0x51ee10 += _0x4a9968;

              _0x5227da--;

            }

            return _0x44bffe;

          };

          decoder.U = function (_0x3edde4) {

            if (_0x3edde4.parent != null) {

              _0x3edde4.parent.removeChild(_0x3edde4);

            }

          };

          decoder.V = function (_0x185992, _0x5eacd7) {

            return _0x185992 + (_0x5eacd7 - _0x185992) * Math.random();

          };

          decoder.W = function (_0x4eac39) {

            return _0x4eac39[parseInt(Math.random() * _0x4eac39.length)];

          };

          decoder.X = function () {

            return Math.random().toString(36).substring(2, 15);

          };

          decoder.Y = function (_0x29362b, _0xfa95a8, _0x1fe42a) {

            var _0x326436 = (1 - Math.abs(_0x1fe42a * 2 - 1)) * _0xfa95a8;

            var _0x4277df = _0x326436 * (1 - Math.abs(_0x29362b / 60 % 2 - 1));

            var _0x55f933 = _0x1fe42a - _0x326436 / 2;

            if (_0x29362b >= 0 && _0x29362b < 60) {

              return [_0x55f933 + _0x326436, _0x55f933 + _0x4277df, _0x55f933 + 0];

            } else if (_0x29362b >= 60 && _0x29362b < 120) {

              return [_0x55f933 + _0x4277df, _0x55f933 + _0x326436, _0x55f933 + 0];

            } else if (_0x29362b >= 120 && _0x29362b < 180) {

              return [_0x55f933 + 0, _0x55f933 + _0x326436, _0x55f933 + _0x4277df];

            } else if (_0x29362b >= 180 && _0x29362b < 240) {

              return [_0x55f933 + 0, _0x55f933 + _0x4277df, _0x55f933 + _0x326436];

            } else if (_0x29362b >= 240 && _0x29362b < 300) {

              return [_0x55f933 + _0x4277df, _0x55f933 + 0, _0x55f933 + _0x326436];

            } else {

              return [_0x55f933 + _0x326436, _0x55f933 + 0, _0x55f933 + _0x4277df];

            }

          };

          decoder.Z = function (_0x3480f7, _0x2b02dc, _0x379262) {

            $.get(_0x3480f7).fail(_0x2b02dc).done(_0x379262);

          };

          decoder.$ = function (_0x378ebb, _0x32a2f6, _0x478cf9, _0x598eee) {

            $.ajax({

              type: "GET",

              url: _0x378ebb,

              xhrFields: {

                responseType: "arraybuffer",

                onprogress: function _0x3ef19f(_0x499274) {

                  if (_0x499274.lengthComputable) {

                    _0x598eee(_0x499274.loaded / _0x499274.total * 100);

                  }

                }

              }

            }).fail(_0x32a2f6).done(_0x478cf9);

          };

          decoder._ = function (_0x4b9d6e, _0x1ebbde) {

            for (var _0x807836 in _0x4b9d6e) {

              if (_0x4b9d6e.hasOwnProperty(_0x807836)) {

                _0x1ebbde(_0x807836, _0x4b9d6e[_0x807836]);

              }

            }

          };

          decoder.aa = function (_0x95fc71) {

            for (var _0x231f47 = _0x95fc71.length - 1; _0x231f47 > 0; _0x231f47--) {

              var _0x4e9de1 = Math.floor(Math.random() * (_0x231f47 + 1));

              var _0x5acd98 = _0x95fc71[_0x231f47];

              _0x95fc71[_0x231f47] = _0x95fc71[_0x4e9de1];

              _0x95fc71[_0x4e9de1] = _0x5acd98;

            }

            return _0x95fc71;

          };

          (function () {

            var _0xa6826f = 0;

            try {

              DataView.prototype.ba = function (_0x4708f4) {

                try {

                  _0xa6826f = _0x4708f4;

                  return this.getInt8(_0x4708f4);

                } catch (_0x5e03a6) {

                  console.log(_0xa6826f);

                  _0x1f8817.dh.mq.close();

                  return 0;

                }

              };

              DataView.prototype.ca = function (_0x41c7ce) {

                try {

                  _0xa6826f = _0x41c7ce;

                  return this.getInt16(_0x41c7ce);

                } catch (_0x346401) {

                  console.log(_0xa6826f);

                  _0x1f8817.dh.mq.close();

                  return 0;

                }

              };

              DataView.prototype.da = function (_0x3f28be) {

                try {

                  _0xa6826f = _0x3f28be;

                  return this.getInt32(_0x3f28be);

                } catch (_0x54bb70) {

                  console.log(_0xa6826f);

                  _0x1f8817.dh.mq.close();

                  return 0;

                }

              };

              DataView.prototype.ea = function (_0x4581b2) {

                try {

                  _0xa6826f = _0x4581b2;

                  return this.getFloat32(_0x4581b2);

                } catch (_0x5de6f6) {

                  console.log(_0xa6826f);

                  _0x1f8817.dh.mq.close();

                  return 0;

                }

              };

              DataView.prototype.fa = function (_0x519b0b) {

                try {

                  _0xa6826f = _0x519b0b;

                  return this.getFloat64(_0x519b0b);

                } catch (_0x4ab8fa) {

                  console.log(_0xa6826f);

                  _0x1f8817.dh.mq.close();

                  return 0;

                }

              };

            } catch (_0x1ed33d) {

              console.log(_0xa6826f);

              console.error("Error adding methods to DataView prototype:", _0x1ed33d);

            }

          })();

          decoder.ga = function () {

            function _0xbffe44() {

              if (URLSERV_WORMWORLD) {

                try {

                  ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");

                } catch (_0xeb218d) {}

                _0x3ba0f4(true);

              }

            }

            var _0x464076 = false;

            var _0x3ba0f4 = function _0x46d60d() {};

            var _0x580a16 = {};

            var _0x3a8239 = "JDHnkHtYwyXyVgG9";

            $("#adbl-continue").click(function () {

              $("#" + _0x3a8239).fadeOut(500);

              _0x3ba0f4(false);

            });

            _0x580a16.ha = function (_0x4b3880) {

              _0x3ba0f4 = _0x4b3880;

              if (!_0x464076) {

                try {

                  aiptag.cmd.player.push(function () {

                    aiptag.adplayer = new aipPlayer({

                      AD_WIDTH: 960,

                      AD_HEIGHT: 540,

                      AD_FULLSCREEN: true,

                      AD_CENTERPLAYER: false,

                      LOADING_TEXT: "loading advertisement",

                      PREROLL_ELEM: function _0x375eef() {

                        return document.getElementById("1eaom01c3pxu9wd3");

                      },

                      AIP_COMPLETE: function _0x562953(_0x226af7) {

                        _0x3ba0f4(true);

                        $("#1eaom01c3pxu9wd3").hide();

                        $("#" + _0x3a8239).hide();

                        try {

                          ga("send", "event", "preroll", window.runtimeHash + "_complete");

                        } catch (_0x5af873) {}

                      },

                      AIP_REMOVE: function _0x14c724() {}

                    });

                  });

                  _0x464076 = true;

                } catch (_0x1d2978) {}

              }

            };

            _0x580a16.ia = function () {

              try {

                ga("send", "event", "antiadblocker", window.runtimeHash + "_start");

              } catch (_0x57b554) {}

              _0xbffe44();

            };

            return _0x580a16;

          };

          decoder.ja = function (_0x3cfc3f, _0x2fe42c) {

            var _0x31e518 = $("#" + _0x3cfc3f);

            var _0x1a9165 = _0x2fe42c;

            var _0xd13dd0 = {};

            var _0x5177ba = false;

            _0xd13dd0.ha = function () {

              if (!_0x5177ba) {

                _0x31e518.empty();

                _0x31e518.append("<div id='" + _0x1a9165 + "'></div>");

                try {

                  try {

                    ga("send", "event", "banner", window.runtimeHash + "_display");

                  } catch (_0x19e191) {}

                  aiptag.cmd.display.push(function () {

                    aipDisplayTag.display(_0x1a9165);

                  });

                  _0x5177ba = true;

                } catch (_0x59a7af) {}

              }

            };

            _0xd13dd0.ka = function () {

              try {

                try {

                  ga("send", "event", "banner", window.runtimeHash + "_refresh");

                } catch (_0x57792a) {}

                aiptag.cmd.display.push(function () {

                  aipDisplayTag.display(_0x1a9165);

                });

              } catch (_0x4b8ab9) {}

            };

            return _0xd13dd0;

          };

          _0x232886.la = function () {

            function _0x40fcdf(_0x20851d, _0x4e1b69, _0x503737, _0x3ec321, _0x34298e, _0xd11509, _0x5bab74, _0x586821, _0xdf324f, _0x3e48ab, _0x7a36a5) {

              this.ma = _0x20851d;

              this.na = _0x4e1b69;

              this.oa = null;

              this.pa = false;

              this.qa = _0x503737;

              this.ra = _0x3ec321;

              this.sa = _0x34298e;

              this.ta = _0xd11509;

              this.ua = _0x5bab74 || (_0xdf324f || _0x34298e) / 2;

              this.va = _0x586821 || (_0x3e48ab || _0xd11509) / 2;

              this.wa = _0xdf324f || _0x34298e;

              this.xa = _0x3e48ab || _0xd11509;

              this.ya = 0.5 - (this.ua - this.wa * 0.5) / this.sa;

              this.za = 0.5 - (this.va - this.xa * 0.5) / this.ta;

              this.Aa = this.sa / this.wa;

              if (_0x7a36a5) {

                this.ev = _0x7a36a5;

              } else {

                null;

              }

              this.Ba = this.ta / this.xa;

            }

            _0x40fcdf.Ca = function () {

              return new _0x40fcdf("", null, 0, 0, 0, 0, 0, 0, 0, 0);

            };

            _0x40fcdf.Da = function (_0x298116, _0x4fc09d, _0x6c25db, _0x230218) {

              return new _0x40fcdf(_0x298116, _0x4fc09d, _0x6c25db.x, _0x6c25db.y, _0x6c25db.w, _0x6c25db.h, _0x6c25db.px, _0x6c25db.py, _0x6c25db.pw, _0x6c25db.ph, _0x230218);

            };

            _0x40fcdf.prototype.Ea = function () {

              if (this.pa) {

                return this.oa;

              }

              if (this.na != null) {

                this.oa = new _0x429afb.Texture(this.na, new _0x429afb.Rectangle(this.qa, this.ra, this.sa, this.ta));

              }

              this.pa = true;

              return this.oa;

            };

            _0x40fcdf.prototype.Fa = function () {

              if (this.oa != null) {

                this.oa.destroy();

              }

            };

            return _0x40fcdf;

          }();

          _0x232886.Ga = function () {

            function _0x3320da(_0x5631cc, _0x3a6132, _0x40cda6, _0x2c2d7e, _0x35a81c, _0x5cee2a, _0x4d680b, _0x289239, _0x5d649d, _0x250bae, _0x15b2b4, _0xf1e9de, _0x4f5b0d, _0x57b880, _0x4850ef, _0x5a785e, _0x2f09fd, _0x227d98) {

              this.Ha = _0x5631cc;

              this.Ia = _0x3a6132;

              this.Ja = _0x40cda6;

              this.Ka = _0x2c2d7e;

              this.La = _0x35a81c;

              this.Ma = _0x5cee2a;

              this.Na = _0x4d680b;

              this.Oa = _0x289239;

              this.Pa = _0x5d649d;

              this.Qa = _0x250bae;

              this.Ra = _0x15b2b4;

              this.Sa = _0xf1e9de;

              this.Ta = _0x4f5b0d;

              this.Ua = _0x57b880;

              this.Va = _0x4850ef;

              this.Wa = _0x5a785e;

              this.Xa = _0x2f09fd;

              this.Ya = _0x227d98;

            }

            _0x3320da.prototype.Fa = function () {

              for (var _0x5ea289 = 0; _0x5ea289 < this.Ha.length; _0x5ea289++) {

                this.Ha[_0x5ea289].dispose();

                this.Ha[_0x5ea289].destroy();

              }

              this.Ha = [];

              for (var _0x35d057 = 0; _0x35d057 < this.Ia.length; _0x35d057++) {

                this.Ia[_0x35d057].Fa();

              }

              this.Ia = [];

            };

            _0x3320da.Ca = function () {

              var _0xef8872 = new _0x3320da.Za(_0x232886._a.$a, _0x232886._a.$a);

              var _0x3fd3f4 = new _0x3320da.ab("#ffffff", [_0x232886._a.$a], [_0x232886._a.$a]);

              return new _0x3320da([], [], {}, _0xef8872, {}, new _0x3320da.bb(_0x232886._a.$a), {}, _0x3fd3f4, {}, new _0x3320da.cb("", _0x3fd3f4, _0xef8872), {}, new _0x3320da.db([_0x232886._a.$a]), {}, new _0x3320da.db([_0x232886._a.$a]), {}, new _0x3320da.db([_0x232886._a.$a]), {}, new _0x3320da.db([_0x232886._a.$a]));

            };

            _0x3320da.eb = function (_0x297c8d, _0x25d257, _0x3dc262, _0x44f895) {

              var _0x84acaa = new _0x3320da.Za(_0x232886._a.$a, _0x232886._a.$a);

              var _0x2eff1e = new _0x3320da.ab("#ffffff", [_0x297c8d], [_0x25d257]);

              return new _0x3320da([], [], {}, _0x84acaa, {}, new _0x3320da.bb(_0x232886._a.$a), {}, _0x2eff1e, {}, new _0x3320da.cb("", _0x2eff1e, _0x84acaa), {}, new _0x3320da.db([_0x3dc262]), {}, new _0x3320da.db([_0x44f895]), {}, new _0x3320da.db([_0x232886._a.$a]), {}, new _0x3320da.db([_0x232886._a.$a]));

            };

            _0x3320da.fb = function (_0x16df38, _0x35df65, _0x3d9842, _0x4dd828) {

              var _0x4b099f = {};

              decoder._(_0x16df38.colorDict, function (_0x433924, _0x1a69f1) {

                _0x4b099f[_0x433924] = "#" + _0x1a69f1;

              });

              var _0x58ece9 = {};

              for (var _0x4ee612 = 0; _0x4ee612 < _0x16df38.skinArrayDict.length; _0x4ee612++) {

                var _0x26d9a0 = _0x16df38.skinArrayDict[_0x4ee612];

                _0x58ece9[_0x26d9a0.id] = new _0x3320da.ab(_0x4b099f[_0x26d9a0.prime], _0x26d9a0.base.map(function (_0x4ac9ee) {

                  return _0x35df65[_0x4ac9ee];

                }), _0x26d9a0.glow.map(function (_0x5722fb, _0xa8f5ba) {

                  return _0x35df65[_0x5722fb];

                }));

                if (_0x26d9a0.glow[0] == "a_trans") {

                  _0x58ece9[_0x26d9a0.id].vbb = _0x35df65.a_black;

                }

              }

              var _0x3f3cce = undefined;

              var _0x5459ba = _0x16df38.skinUnknown;

              try {

                _0x3f3cce = new _0x3320da.ab(_0x4b099f[_0x5459ba.prime], _0x5459ba.base.map(function (_0x5f12fd) {

                  return _0x35df65[_0x5f12fd];

                }), _0x5459ba.glow.map(function (_0x36db2d) {

                  return _0x35df65[_0x36db2d];

                }));

              } catch (_0x389973) {}

              var _0x112cc2 = {};

              decoder._(_0x16df38.eyesDict, function (_0x3dc5df, _0x455a34) {

                var _0x59843f = parseInt(_0x3dc5df);

                _0x112cc2[_0x59843f] = new _0x3320da.db(_0x455a34.base.map(function (_0x37d42d) {

                  return _0x35df65[_0x37d42d.region];

                }));

              });

              var _0xe32c4 = new _0x3320da.db(_0x16df38.eyesUnknown.base.map(function (_0x4f6118) {

                return _0x35df65[_0x4f6118.region];

              }));

              var _0x1c8cb5 = {};

              decoder._(_0x16df38.mouthDict, function (_0x70300b, _0x440fd2) {

                var _0x1148e7 = parseInt(_0x70300b);

                _0x1c8cb5[_0x1148e7] = new _0x3320da.db(_0x440fd2.base.map(function (_0x3edfc5) {

                  return _0x35df65[_0x3edfc5.region];

                }));

              });

              var _0x181c56 = new _0x3320da.db(_0x16df38.mouthUnknown.base.map(function (_0xabfa86) {

                return _0x35df65[_0xabfa86.region];

              }));

              var _0x5084e9 = {};

              decoder._(_0x16df38.hatDict, function (_0x4b9544, _0x26a12d) {

                var _0x5b9132 = parseInt(_0x4b9544);

                _0x5084e9[_0x5b9132] = new _0x3320da.db(_0x26a12d.base.map(function (_0x5bf5d7) {

                  return _0x35df65[_0x5bf5d7.region];

                }));

              });

              var _0x368ffe = new _0x3320da.db(_0x16df38.hatUnknown.base.map(function (_0x1d8182) {

                return _0x35df65[_0x1d8182.region];

              }));

              var _0xce10e8 = {};

              decoder._(_0x16df38.glassesDict, function (_0x158396, _0x2153b1) {

                var _0x48d777 = parseInt(_0x158396);

                _0xce10e8[_0x48d777] = new _0x3320da.db(_0x2153b1.base.map(function (_0x306aca) {

                  return _0x35df65[_0x306aca.region];

                }));

              });

              var _0x1adddb = new _0x3320da.db(_0x16df38.glassesUnknown.base.map(function (_0xce0f6d) {

                return _0x35df65[_0xce0f6d.region];

              }));

              var _0x10fc0b = {};

              decoder._(_0x16df38.portionDict, function (_0x5a9da2, _0x194a54) {

                _0x5a9da2 = parseInt(_0x5a9da2);

                _0x10fc0b[_0x5a9da2] = new _0x3320da.Za(_0x35df65[_0x194a54.base], _0x35df65[_0x194a54.glow]);

              });

              var _0x3c777f = undefined;

              var _0x5effe5 = _0x16df38.portionUnknown;

              _0x3c777f = new _0x3320da.Za(_0x35df65[_0x5effe5.base], _0x35df65[_0x5effe5.glow]);

              var _0x406602 = {};

              decoder._(_0x16df38.abilityDict, function (_0x22467f, _0x330807) {

                _0x22467f = parseInt(_0x22467f);

                _0x406602[_0x22467f] = new _0x3320da.bb(_0x35df65[_0x330807.base]);

              });

              var _0x1ce112 = undefined;

              var _0x43aeda = _0x16df38.abilityUnknown;

              _0x1ce112 = new _0x3320da.bb(_0x35df65[_0x43aeda.base]);

              var _0x252759 = {};

              decoder._(_0x16df38.teamDict, function (_0x159a98, _0x4c06ff) {

                _0x159a98 = parseInt(_0x159a98);

                _0x252759[_0x159a98] = new _0x3320da.cb(_0x4c06ff.title, new _0x3320da.ab(_0x4b099f[_0x4c06ff.skin.prime], null, _0x4c06ff.skin.glow.map(function (_0x123341) {

                  return _0x35df65[_0x123341];

                })), new _0x3320da.Za(null, _0x35df65[_0x4c06ff.portion.glow]));

              });

              var _0x101b80 = new _0x3320da.cb({}, _0x3f3cce, _0x3c777f);

              return new _0x3320da(_0x3d9842, _0x4dd828, _0x10fc0b, _0x3c777f, _0x406602, _0x1ce112, _0x58ece9, _0x3f3cce, _0x252759, _0x101b80, _0x112cc2, _0xe32c4, _0x1c8cb5, _0x181c56, _0x5084e9, _0x368ffe, _0xce10e8, _0x1adddb);

            };

            _0x3320da.prototype.gb = function (_0x1fd26a) {

              var _0x232d2a = decoder.aa(Object.keys(this.Na)).slice(0, _0x1fd26a);

              var _0x20746a = decoder.aa(Object.keys(this.Ra)).slice(0, _0x1fd26a);

              var _0x213678 = decoder.aa(Object.keys(this.Ta)).slice(0, _0x1fd26a);

              var _0x1d1e4d = decoder.aa(Object.keys(this.Va)).slice(0, _0x1fd26a);

              var _0x12a483 = decoder.aa(Object.keys(this.Xa)).slice(0, _0x1fd26a);

              var _0x433dfb = [];

              for (var _0x13037a = 0; _0x13037a < _0x1fd26a; _0x13037a++) {

                var _0x4f38ca = _0x232d2a.length > 0 ? _0x232d2a[_0x13037a % _0x232d2a.length] : 0;

                var _0x1cbe92 = _0x20746a.length > 0 ? _0x20746a[_0x13037a % _0x20746a.length] : 0;

                var _0xa33eb9 = _0x213678.length > 0 ? _0x213678[_0x13037a % _0x213678.length] : 0;

                var _0x54dd56 = _0x1d1e4d.length > 0 ? _0x1d1e4d[_0x13037a % _0x1d1e4d.length] : 0;

                var _0x232273 = _0x12a483.length > 0 ? _0x12a483[_0x13037a % _0x12a483.length] : 0;

                _0x433dfb.push(new _0x232886.hb(_0x4f38ca, _0x1cbe92, _0xa33eb9, _0x54dd56, _0x232273));

              }

              return _0x433dfb;

            };

            _0x3320da.prototype.ib = function (_0x502fdb) {

              if (this.Na.hasOwnProperty(_0x502fdb)) {

                return this.Na[_0x502fdb];

              } else {

                return this.Oa;

              }

            };

            _0x3320da.prototype.jb = function (_0x14c1c3) {

              if (this.Pa.hasOwnProperty(_0x14c1c3)) {

                return this.Pa[_0x14c1c3];

              } else {

                return this.Qa;

              }

            };

            _0x3320da.prototype.kb = function (_0x2289c9) {

              if (this.Ra.hasOwnProperty(_0x2289c9)) {

                return this.Ra[_0x2289c9];

              } else {

                return this.Sa;

              }

            };

            _0x3320da.prototype.lb = function (_0x53c8db) {

              if (this.Ta.hasOwnProperty(_0x53c8db)) {

                return this.Ta[_0x53c8db];

              } else {

                return this.Ua;

              }

            };

            _0x3320da.prototype.mb = function (_0x463cfc) {

              if (this.Xa.hasOwnProperty(_0x463cfc)) {

                return this.Xa[_0x463cfc];

              } else {

                return this.Ya;

              }

            };

            _0x3320da.prototype.nb = function (_0x2545d5) {

              if (this.Va.hasOwnProperty(_0x2545d5)) {

                return this.Va[_0x2545d5];

              } else {

                return this.Wa;

              }

            };

            _0x3320da.prototype.ob = function (_0xaadad4) {

              if (this.Ja.hasOwnProperty(_0xaadad4)) {

                return this.Ja[_0xaadad4];

              } else {

                return this.Ka;

              }

            };

            _0x3320da.prototype.pb = function (_0x350fb9) {

              if (this.La.hasOwnProperty(_0x350fb9)) {

                return this.La[_0x350fb9];

              } else {

                return this.Ma;

              }

            };

            _0x3320da.cb = function () {

              function _0x2a6d84(_0x322b68, _0x24028f, _0x5b2e17) {

                this.qb = _0x322b68;

                this.rb = _0x24028f;

                this.sb = _0x5b2e17;

              }

              return _0x2a6d84;

            }();

            _0x3320da.ab = function () {

              function _0x459c0d(_0x26e379, _0x1ebf87, _0x1b75e4) {

                this.tb = _0x26e379;

                this.ub = _0x1ebf87;

                this.vb = _0x1b75e4;

              }

              return _0x459c0d;

            }();

            _0x3320da.db = function () {

              function _0x573047(_0x2badf2) {

                this.ub = _0x2badf2;

              }

              return _0x573047;

            }();

            _0x3320da.Za = function () {

              function _0x35f562(_0x393b7b, _0x3603ee) {

                this.ub = _0x393b7b;

                this.vb = _0x3603ee;

              }

              return _0x35f562;

            }();

            _0x3320da.bb = function () {

              function _0x4d85e6(_0x1c24fc) {

                this.ub = _0x1c24fc;

              }

              return _0x4d85e6;

            }();

            return _0x3320da;

          }();

          _0x232886._a = function () {

            function _0x272628() {

              var _0x3bdebe = _0x429afb.BaseTexture.from("/images/wear-ability.png");

              for (var _0x499c12 = 1; _0x499c12 < 10; _0x499c12++) {

                this["vb" + _0x499c12] = new _0x232886.la("emoji_" + _0x499c12, _0x3bdebe, 4, 4, 146, 146, 63.5, 63.5, 128, 128);

              }

              this.wb = new _0x232886.la("magnet_ability", _0x3bdebe, 158, 86, 67, 124, 148, 63.5, 128, 128);

              this.xb = new _0x232886.la("velocity_ability", _0x3bdebe, 158, 4, 87, 74, 203, 63.5, 128, 128);

              this.yb = new _0x232886.la("flex_ability", _0x3bdebe, 4, 4, 146, 146, 63.5, 63.5, 128, 128);

              // Zigzag 1: First custom image
              var newTexture = _0x429afb.BaseTexture.from("https://i.imgur.com/LFiCido.png");
              this.pwrFlex = new _0x232886.la("flex_ability", newTexture, 156, 140, 87, 60, 170, 128.5, 128, 128);

              // Zigzag 2: Second custom image (LvJ1RxC - working)
              var newTexture2 = _0x429afb.BaseTexture.from("https://i.imgur.com/LvJ1RxC.png");
              this.pwrFlex2 = new _0x232886.la("flex_ability2", newTexture2, 156, 4, 87, 74, 285, 63.5, 128, 128);

              // Zigzag 3: Third custom image
              var newTexture3 = _0x429afb.BaseTexture.from("https://wormup.in/assets/images/zigzagability1.png");
              this.pwrFlex3 = new _0x232886.la("flex_ability3", newTexture3, 158, 4, 87, 74, 203, 63.5, 128, 128);



              var _0x499c12 = _0x429afb.BaseTexture.from("/images/def-look.png");

              var _0x8f0f7 = new _0x232886.la("def_eyes", _0x499c12, 0, 0, 42, 80, 75, 64, 128, 128);

              var _0x544dc7 = new _0x232886.la("def_mouth", _0x499c12, 46, 0, 20, 48, 109, 63, 128, 128);

              var _0x2ef0b2 = new _0x232886.la("def_skin_glow", _0x499c12, 70, 0, 32, 32, 0, 0, 0, 0);

              var _0x1c9bdf = new _0x232886.la("def_skin_base", _0x499c12, 46, 52, 64, 64, 0, 0, 0, 0);

              var _0x5e6030 = _0x232886.Ga.eb(_0x1c9bdf, _0x2ef0b2, _0x8f0f7, _0x544dc7);

              _wwc.mySkin = _0x5e6030;

              this.zb = new _0x232886.Ab({}, _0x5e6030);

              this.Bb = -10000;

              this.Cb = -10000;

              this.Db = function () {

                var _0x18a84d = window.document.createElement("canvas");

                _0x18a84d.width = 80;

                _0x18a84d.height = 80;

                return {

                  Eb: _0x18a84d,

                  Fb: _0x18a84d.getContext("2d"),

                  oa: new _0x429afb.Texture(_0x429afb.BaseTexture.from(_0x18a84d))

                };

              }();

              this.Gb = null;

              this.Hb = [];

            }

            _0x272628.$a = _0x232886.la.Ca();

            _0x272628.prototype.ha = function () {};

            _0x272628.prototype.Ib = function (_0x25f9e7, _0x4807d1, _0x5794e1) {

              var _0x3192fc = this;

              var _0x4bda5c = this.zb.Jb();

              if (_0x4bda5c > 0 && Date.now() - this.Bb < 1200000) {

                if (_0x25f9e7 != null) {

                  _0x25f9e7();

                }

                return;

              }

              if (this.Gb != null && !this.Gb.Kb()) {

                if (Date.now() - this.Bb < 300000) {

                  if (_0x25f9e7 != null) {

                    _0x25f9e7();

                  }

                  return;

                }

                this.Gb.Lb();

                this.Gb = null;

              }

              var _0x25be31 = new _0x232886.Mb(_0x4bda5c);

              _0x25be31.Nb(function (_0x17aa30, _0x39e843) {

                if (_0x25be31 === _0x3192fc.Gb && _0x5794e1 != null) {

                  _0x5794e1(_0x17aa30, _0x39e843);

                }

              });

              _0x25be31.Ob(function (_0x38aaae) {

                if (_0x25be31 === _0x3192fc.Gb && _0x4807d1 != null) {

                  _0x4807d1(_0x38aaae);

                }

              });

              _0x25be31.Pb(function () {

                if (_0x25be31 === _0x3192fc.Gb && _0x4807d1 != null) {

                  _0x4807d1(new Error());

                }

              });

              _0x25be31.Qb(function () {

                if (_0x25be31 === _0x3192fc.Gb && _0x25f9e7 != null) {

                  _0x25f9e7();

                }

              });

              _0x25be31.Rb(function (_0x2b85fd) {

                if (_0x25be31 === _0x3192fc.Gb) {

                  _0x3192fc.Cb = Date.now();

                  _0x3192fc.Gb = null;

                  _0x3192fc.Sb();

                  _0x3192fc.zb.Ub().Fa();

                  _0x3192fc.zb = _0x2b85fd;

                  if (_0x25f9e7 != null) {

                    _0x25f9e7();

                  }

                  _0x3192fc.Tb();

                  return;

                }

                try {

                  _0x2b85fd.Ub().Fa();

                } catch (_0x2af22d) {}

              });

              _0x25be31.Vb();

              this.Bb = Date.now();

              this.Gb = _0x25be31;

            };

            _0x272628.prototype.Sb = function () {};

            _0x272628.prototype.Wb = function () {

              return this.zb.Jb() > 0;

            };

            _0x272628.prototype.Xb = function () {

              return this.zb.Yb();

            };

            _0x272628.prototype.Zb = function () {

              return this.Db;

            };

            _0x272628.prototype.$b = function (_0x17f861) {

              this.Hb.push(_0x17f861);

            };

            _0x272628.prototype.Tb = function () {

              for (var _0x262753 = 0; _0x262753 < this.Hb.length; _0x262753++) {

                this.Hb[_0x262753]();

              }

            };

            _0x272628.prototype.Ub = function () {

              return this.zb.Ub();

            };

            return _0x272628;

          }();

          _0x232886._b = function () {

            function _0x35f0ba(_0x40e2d6) {

              this.ac = _0x40e2d6;

            }

            _0x35f0ba.prototype.bc = function (_0x103ce9) {

              return this.ac[_0x103ce9];

            };

            _0x35f0ba.cc = function () {

              function _0x472f5c() {

                this.dc = [];

              }

              _0x472f5c.prototype.ec = function (_0x52dfb5, _0x528b46) {

                for (var _0x1241b7 = 0; _0x1241b7 < this.dc.length; _0x1241b7++) {

                  if (this.dc[_0x1241b7].fc === _0x52dfb5) {

                    throw new Error();

                  }

                }

                this.dc.push(new _0x35f0ba.gc(_0x52dfb5, _0x528b46));

                return this;

              };

              _0x472f5c.prototype.hc = function () {

                var _0x2272d5 = 0;

                for (var _0x41a58d = 0; _0x41a58d < this.dc.length; _0x41a58d++) {

                  _0x2272d5 += this.dc[_0x41a58d].ic;

                }

                var _0x598b5a = {};

                var _0x4733aa = 0;

                for (var _0x4eaefb = 0; _0x4eaefb < this.dc.length; _0x4eaefb++) {

                  var _0xa7c005 = this.dc[_0x4eaefb];

                  _0xa7c005.ic = _0xa7c005.ic / _0x2272d5;

                  _0xa7c005.jc = _0x4733aa;

                  _0xa7c005.kc = _0x4733aa + _0xa7c005.ic;

                  _0x4733aa = _0xa7c005.kc;

                  _0x598b5a[_0xa7c005.fc] = _0xa7c005;

                }

                return new _0x35f0ba(_0x598b5a);

              };

              return _0x472f5c;

            }();

            _0x35f0ba.gc = function () {

              function _0x1d70d4(_0x24cc6e, _0x5b6e2a) {

                this.fc = _0x24cc6e;

                this.ic = _0x5b6e2a;

                this.jc = 0;

                this.kc = 0;

              }

              _0x1d70d4.prototype.lc = function (_0x3db263) {

                return this.jc + (this.kc - this.jc) * _0x3db263;

              };

              return _0x1d70d4;

            }();

            return _0x35f0ba;

          }();

          _0x232886.WormSpriteTree = function () {

            function _0x4121bc() {

              this.nc = new _0x429afb.Container();

              this.nc.sortableChildren = true;

              this.oc = new _0x513720();

              this.oc.zIndex = _0xa980af * ((_0x52e105 + 1) * 2 + 1 + 3);

              this.pc = 0;

              this.qc = new Array(_0x52e105);

              this.qc[0] = this.rc(0, new _0x232886.sc(), new _0x232886.sc());

              for (var _0x12014b = 1; _0x12014b < _0x52e105; _0x12014b++) {

                this.qc[_0x12014b] = this.rc(_0x12014b, new _0x232886.sc(), new _0x232886.sc());

              }

              this.tc = 0;

              this.uc = 0;

              this.vc = 0;

            }

            var _0xa980af = 0.001;

            var _0x52e105 = 797;

            var _0x5ae62e = 3.14159;

            var _0x343d73 = -0.06640625;

            var _0x2570f8 = 0.84375;

            var _0x48045b = 0.2578125;

            var _0x2ed33e = -0.03515625;

            var _0x343e37 = -0.0625;

            var _0x5c053a = 0.5625;

            var _0x43f7c7 = _0x343d73 * 3 + _0x2570f8;

            var _0x31ebc7 = _0x48045b - _0x343d73 * 3;

            var _0x230100 = _0x343d73 + _0x2ed33e;

            var _0x62be62 = 0.375;

            var _0x1ae837 = 0.75;

            var _0x37f7e4 = _0x343e37 + _0x343e37;

            var _0x13edbb = _0x2ed33e * 3 + _0x48045b;

            var _0x2dda3a = _0x2570f8 - _0x2ed33e * 3;

            var _0x2f753f = _0x2ed33e + _0x343d73;

            _0x4121bc.wc = _0x52e105;

            _0x4121bc.prototype.rc = function (_0x4d2ed0, _0x1c6fb0, _0x534cd0) {

              var _0x408c9c = new _0xcd0b4c(_0x1c6fb0, _0x534cd0);

              _0x1c6fb0.xc.zIndex = _0xa980af * ((_0x52e105 - _0x4d2ed0) * 2 + 1 + 3);

              _0x534cd0.xc.zIndex = _0xa980af * ((_0x52e105 - _0x4d2ed0) * 2 - 2 + 3);

              return _0x408c9c;

            };

            _0x4121bc.prototype.yc = function (_0x5db182, _0x45a4d4, _0x47cba5, _0x3e3e1e, _0x40f811, _0x140063, _0x39ff11, _0xafe1e7) {

              var _0x52ebab = _0x47cba5.ub;

              var _0x354e7a = _0x5db182 === _0x232886.Ac.zc ? _0x45a4d4.rb.vb : _0x47cba5.vb;

              if (_0x52ebab.length > 0 && _0x354e7a.length > 0) {

                for (var _0x4ad705 = 0; _0x4ad705 < this.qc.length; _0x4ad705++) {

                  this.qc[_0x4ad705].Cc.Bc(_0x52ebab[_0x4ad705 % _0x52ebab.length], _0x4ad705 % _0x52ebab.length, _0x4ad705);

                  this.qc[_0x4ad705].Dc.Bc(_0x4ad705 == 0 && _0x47cba5.vbb ? _0x47cba5.vbb : _0x354e7a[_0x4ad705 % _0x354e7a.length], _0x4ad705 % _0x52ebab.length, _0x4ad705);

                  this.qc[_0x4ad705].Cc.Ec(_0xafe1e7);

                  this.qc[_0x4ad705].Dc.Ec(_0xafe1e7);

                }

              }

              this.oc.yc(_0x3e3e1e, _0x40f811, _0x140063, _0x39ff11);

            };

            var _0x513720 = function () {

              var _0x321fbc = decoder.M(_0x429afb.Container, function () {

                _0x429afb.Container.call(this);

                this.sortableChildren = true;

                this.Fc = [];

                this.Gc = [];

                this.Hc = [];

                this.Ic = [];

                this.Jc = new _0x429afb.Container();

                this.Kc = [];

                this.message = new _0x429afb.Container();

                for (var _0x4bff03 = 0; _0x4bff03 < 4; _0x4bff03++) {

                  var _0x3ce7e3 = new _0x232886.sc();

                  _0x3ce7e3.Bc(_0x5d39d0().Lc.wb);

                  this.Jc.addChild(_0x3ce7e3.xc);

                  this.Kc.push(_0x3ce7e3);

                }

                this.message.zIndex = 0.0012;

                this.addChild(this.message);

                this.VcUn();

                this.Jc.zIndex = 0.0011;

                this.addChild(this.Jc);

                this.Mc();

                this.Nc = new _0x232886.sc();

                this.Nc.Bc(_0x5d39d0().Lc.xb);

                this.Nc.xc.zIndex = 0.001;

                this.addChild(this.Nc.xc);

                this.Oc();

                

                

                this.pwr_flex = new _0x232886.sc();

                (function(){
                  try {
                    var z = String(((window.bbsConfig||window.bbs||{}).zigzag)||'0');
                    console.log('Game loading zigzag config:', z);
                    var set = _0x5d39d0().Lc;
                    var tex = set.pwrFlex1 || set.yb; // Default/Normal zigzag
                    if (z === '1') tex = set.pwrFlex || set.pwrFlex1;
                    else if (z === '2') tex = set.pwrFlex2 || set.pwrFlex;
                    else if (z === '3') tex = set.pwrFlex3 || set.pwrFlex2 || set.pwrFlex;
                    console.log('Selected zigzag texture:', tex);
                    this.pwr_flex.Bc(tex);
                  } catch (err) {
                    console.error('Error loading zigzag:', err);
                    this.pwr_flex.Bc(_0x5d39d0().Lc.pwrFlex);
                  }
                }).call(this);

                this.pwr_flex.xc.zIndex = 0.001;

                this.addChild(this.pwr_flex.xc);

                this.disableFlex();                  

                                

                

                

                

              });

              _0x321fbc.prototype.yc = function (_0x31c647, _0x175505, _0xac4502, _0x13cfa0) {

                this.Pc(0.002, this.Fc, _0x31c647.ub);

                this.Pc(0.003, this.Gc, _0x175505.ub);

                this.Pc(0.004, this.Ic, _0x13cfa0.ub);

                this.Pc(0.005, this.Hc, _0xac4502.ub);

              };

              _0x321fbc.prototype.Pc = function (_0x5b1bdd, _0x27b81b, _0x49fdaf) {

                while (_0x49fdaf.length > _0x27b81b.length) {

                  var _0x4b95a4 = new _0x232886.sc();

                  _0x27b81b.push(_0x4b95a4);

                  this.addChild(_0x4b95a4.Qc());

                }

                while (_0x49fdaf.length < _0x27b81b.length) {

                  _0x27b81b.pop().Rc();

                }

                var _0x5ac9ae = _0x5b1bdd;

                for (var _0x4d483a = 0; _0x4d483a < _0x49fdaf.length; _0x4d483a++) {

                  _0x5ac9ae += 0.0001;

                  var _0x57ad56 = _0x27b81b[_0x4d483a];

                  _0x57ad56.Bc(_0x49fdaf[_0x4d483a]);

                  _0x57ad56.xc.zIndex = _0x5ac9ae;

                }

              };

              _0x321fbc.prototype.Sc = function (_0x1ee728, _0x47ac1d, _0x313641, _0xe0f1a) {

                this.visible = true;

                this.position.set(_0x1ee728, _0x47ac1d);

                this.rotation = _0xe0f1a;

                for (var _0x532b46 = 0; _0x532b46 < this.Fc.length; _0x532b46++) {

                  this.Fc[_0x532b46].Tc(_0x313641);

                }

                for (var _0x54ae84 = 0; _0x54ae84 < this.Gc.length; _0x54ae84++) {

                  this.Gc[_0x54ae84].Tc(_0x313641);

                }

                for (var _0xe3829c = 0; _0xe3829c < this.Hc.length; _0xe3829c++) {

                  this.Hc[_0xe3829c].Tc(_0x313641);

                }

                for (var _0x2c5712 = 0; _0x2c5712 < this.Ic.length; _0x2c5712++) {

                  this.Ic[_0x2c5712].Tc(_0x313641);

                }

              };

              _0x321fbc.prototype.Uc = function () {

                this.visible = false;

              };

              _0x321fbc.prototype.VcAc = function (_0x24004d, _0x563084, _0x5dfbb1, _0x45c858, _0x2a9adc) {

                this.message.visible = true;

                this.Mc2.Tc(_0x563084);

              };

              _0x321fbc.prototype.VcUn = function () {

                this.message.visible = false;

              };

              _0x321fbc.prototype.Vc = function (_0x4c1d48, _0x33377c, _0x4f9bd6, _0x41d90b) {

                this.Jc.visible = true;

                var _0x334333 = _0x4f9bd6 / 1000;

                var _0x5e8761 = 1 / this.Kc.length;

                for (var _0x536450 = 0; _0x536450 < this.Kc.length; _0x536450++) {

                  var _0x821da8 = 1 - (_0x334333 + _0x5e8761 * _0x536450) % 1;

                  this.Kc[_0x536450].xc.alpha = 1 - _0x821da8;

                  this.Kc[_0x536450].Tc(_0x33377c * (0.5 + _0x821da8 * 4.5));

                }

              };

              _0x321fbc.prototype.Mc = function () {

                this.Jc.visible = false;

              };

              _0x321fbc.prototype.Wc = function (app, config, utils, hexByte) {

                this.Nc.xc.visible = true;

                this.Nc.xc.alpha = decoder.Q(this.Nc.xc.alpha, app.Xc ? 0.9 : 0.2, hexByte, 0.0025);

                this.Nc.Tc(config);

              };

              

              

               _0x321fbc.prototype.activeFlex = function (app, config, utils, hexByte) {

                this.pwr_flex.xc.visible = true;

                this.pwr_flex.xc.alpha = decoder.Q(this.Nc.xc.alpha, app.Xc ? 0.9 : 0.2, hexByte, 0.0025);

                this.pwr_flex.Tc(config);

              };

              _0x321fbc.prototype.disableFlex = function () {

                this.pwr_flex.xc.visible = false;

              };                  

              

              _0x321fbc.prototype.WXX = function (_0x23ef75, _0x18a544, _0x4cb97b, _0x372cf1) {

                this.Nc.xc.visible = true;

                this.Nc.xc.alpha = decoder.Q(this.Nc.xc.alpha, _0x23ef75.Xc ? 0.9 : 0.2, _0x372cf1, 0.0025);

                this.Nc.Tc(_0x18a544);

              };

              _0x321fbc.prototype.Oc = function () {

                this.Nc.xc.visible = false;

              };

              return _0x321fbc;

            }();

            _0x4121bc.prototype.Yc = function (_0x93abfb) {

              return this.uc + this.vc * Math.sin(_0x93abfb * (Math.PI * 0.1) - this.tc);

            };

            _0x4121bc.prototype.Zc = function (hexByte, gameSettings, savedGame, _0x34dad7) {

              var createJoystick = hexByte.$c * 2;

              var _0x1b5b69 = hexByte._c;

              var _0xae2e11 = hexByte.ad;

              var _0x260b5f = _0xae2e11 * 4 - 3;

              var _0xcbec26 = _0x260b5f;

              this.tc = gameSettings / 400 * Math.PI;

              this.uc = createJoystick * 1.5;

              this.vc = createJoystick * 0.15 * hexByte.bd;

              var _0x248071;

              var _0x8b391c;

              var _0x27ca05;

              var _0x3c1ff3;

              var _0x577d9e;

              var _0x5395cc;

              var _0x2aaee0;

              var _0x5f029f;

              _0x8b391c = _0x1b5b69[0];

              _0x5395cc = _0x1b5b69[1];

              if (_0x34dad7(_0x8b391c, _0x5395cc)) {

                _0x27ca05 = _0x1b5b69[2];

                _0x2aaee0 = _0x1b5b69[3];

                _0x3c1ff3 = _0x1b5b69[4];

                _0x5f029f = _0x1b5b69[5];

                var _0x422f85 = Math.atan2(_0x5f029f + _0x5395cc * 2 - _0x2aaee0 * 3, _0x3c1ff3 + _0x8b391c * 2 - _0x27ca05 * 3);

                this.oc.Sc(_0x8b391c, _0x5395cc, createJoystick, _0x422f85);

                this.qc[0].Sc(_0x8b391c, _0x5395cc, createJoystick, this.Yc(0), _0x422f85);

                this.qc[1].Sc(_0x43f7c7 * _0x8b391c + _0x31ebc7 * _0x27ca05 + _0x230100 * _0x3c1ff3, _0x43f7c7 * _0x5395cc + _0x31ebc7 * _0x2aaee0 + _0x230100 * _0x5f029f, createJoystick, this.Yc(1), _0xcd0b4c.cd(this.qc[0], this.qc[2]));

                this.qc[2].Sc(_0x62be62 * _0x8b391c + _0x1ae837 * _0x27ca05 + _0x37f7e4 * _0x3c1ff3, _0x62be62 * _0x5395cc + _0x1ae837 * _0x2aaee0 + _0x37f7e4 * _0x5f029f, createJoystick, this.Yc(2), _0xcd0b4c.cd(this.qc[1], this.qc[3]));

                this.qc[3].Sc(_0x13edbb * _0x8b391c + _0x2dda3a * _0x27ca05 + _0x2f753f * _0x3c1ff3, _0x13edbb * _0x5395cc + _0x2dda3a * _0x2aaee0 + _0x2f753f * _0x5f029f, createJoystick, this.Yc(3), _0xcd0b4c.cd(this.qc[2], this.qc[4]));

              } else {

                this.oc.Uc();

                this.qc[0].Uc();

                this.qc[1].Uc();

                this.qc[2].Uc();

                this.qc[3].Uc();

              }

              var _0x33b482 = 4;

              var _0x43e211 = 2;

              var _0x37b097 = _0xae2e11 * 2 - 4;

              while (_0x43e211 < _0x37b097) {

                _0x8b391c = _0x1b5b69[_0x43e211];

                _0x5395cc = _0x1b5b69[_0x43e211 + 1];

                if (_0x34dad7(_0x8b391c, _0x5395cc)) {

                  _0x248071 = _0x1b5b69[_0x43e211 - 2];

                  _0x577d9e = _0x1b5b69[_0x43e211 - 1];

                  _0x27ca05 = _0x1b5b69[_0x43e211 + 2];

                  _0x2aaee0 = _0x1b5b69[_0x43e211 + 3];

                  _0x3c1ff3 = _0x1b5b69[_0x43e211 + 4];

                  _0x5f029f = _0x1b5b69[_0x43e211 + 5];

                  this.qc[_0x33b482].Sc(_0x8b391c, _0x5395cc, createJoystick, this.Yc(_0x33b482), _0xcd0b4c.cd(this.qc[_0x33b482 - 1], this.qc[_0x33b482 + 1]));

                  _0x33b482++;

                  this.qc[_0x33b482].Sc(_0x343d73 * _0x248071 + _0x2570f8 * _0x8b391c + _0x48045b * _0x27ca05 + _0x2ed33e * _0x3c1ff3, _0x343d73 * _0x577d9e + _0x2570f8 * _0x5395cc + _0x48045b * _0x2aaee0 + _0x2ed33e * _0x5f029f, createJoystick, this.Yc(_0x33b482), _0xcd0b4c.cd(this.qc[_0x33b482 - 1], this.qc[_0x33b482 + 1]));

                  _0x33b482++;

                  this.qc[_0x33b482].Sc(_0x343e37 * _0x248071 + _0x5c053a * _0x8b391c + _0x5c053a * _0x27ca05 + _0x343e37 * _0x3c1ff3, _0x343e37 * _0x577d9e + _0x5c053a * _0x5395cc + _0x5c053a * _0x2aaee0 + _0x343e37 * _0x5f029f, createJoystick, this.Yc(_0x33b482), _0xcd0b4c.cd(this.qc[_0x33b482 - 1], this.qc[_0x33b482 + 1]));

                  _0x33b482++;

                  this.qc[_0x33b482].Sc(_0x2ed33e * _0x248071 + _0x48045b * _0x8b391c + _0x2570f8 * _0x27ca05 + _0x343d73 * _0x3c1ff3, _0x2ed33e * _0x577d9e + _0x48045b * _0x5395cc + _0x2570f8 * _0x2aaee0 + _0x343d73 * _0x5f029f, createJoystick, this.Yc(_0x33b482), _0xcd0b4c.cd(this.qc[_0x33b482 - 1], this.qc[_0x33b482 + 1]));

                  _0x33b482++;

                } else {

                  this.qc[_0x33b482].Uc();

                  _0x33b482++;

                  this.qc[_0x33b482].Uc();

                  _0x33b482++;

                  this.qc[_0x33b482].Uc();

                  _0x33b482++;

                  this.qc[_0x33b482].Uc();

                  _0x33b482++;

                }

                _0x43e211 += 2;

              }

              _0x8b391c = _0x1b5b69[_0xae2e11 * 2 - 4];

              _0x5395cc = _0x1b5b69[_0xae2e11 * 2 - 3];

              if (_0x34dad7(_0x8b391c, _0x5395cc)) {

                _0x248071 = _0x1b5b69[_0xae2e11 * 2 - 6];

                _0x577d9e = _0x1b5b69[_0xae2e11 * 2 - 5];

                _0x27ca05 = _0x1b5b69[_0xae2e11 * 2 - 2];

                _0x2aaee0 = _0x1b5b69[_0xae2e11 * 2 - 1];

                this.qc[_0x260b5f - 5].Sc(_0x8b391c, _0x5395cc, createJoystick, this.Yc(_0x260b5f - 5), _0xcd0b4c.cd(this.qc[_0x260b5f - 6], this.qc[_0x260b5f - 4]));

                this.qc[_0x260b5f - 4].Sc(_0x2f753f * _0x248071 + _0x2dda3a * _0x8b391c + _0x13edbb * _0x27ca05, _0x2f753f * _0x577d9e + _0x2dda3a * _0x5395cc + _0x13edbb * _0x2aaee0, createJoystick, this.Yc(_0x260b5f - 4), _0xcd0b4c.cd(this.qc[_0x260b5f - 5], this.qc[_0x260b5f - 3]));

                this.qc[_0x260b5f - 3].Sc(_0x37f7e4 * _0x248071 + _0x1ae837 * _0x8b391c + _0x62be62 * _0x27ca05, _0x37f7e4 * _0x577d9e + _0x1ae837 * _0x5395cc + _0x62be62 * _0x2aaee0, createJoystick, this.Yc(_0x260b5f - 3), _0xcd0b4c.cd(this.qc[_0x260b5f - 4], this.qc[_0x260b5f - 2]));

                this.qc[_0x260b5f - 2].Sc(_0x230100 * _0x248071 + _0x31ebc7 * _0x8b391c + _0x43f7c7 * _0x27ca05, _0x230100 * _0x577d9e + _0x31ebc7 * _0x5395cc + _0x43f7c7 * _0x2aaee0, createJoystick, this.Yc(_0x260b5f - 2), _0xcd0b4c.cd(this.qc[_0x260b5f - 3], this.qc[_0x260b5f - 1]));

                this.qc[_0x260b5f - 1].Sc(_0x27ca05, _0x2aaee0, createJoystick, this.Yc(_0x260b5f - 1), _0xcd0b4c.cd(this.qc[_0x260b5f - 2], this.qc[_0x260b5f - 1]));

              } else {

                this.qc[_0x260b5f - 5].Uc();

                this.qc[_0x260b5f - 4].Uc();

                this.qc[_0x260b5f - 3].Uc();

                this.qc[_0x260b5f - 2].Uc();

                this.qc[_0x260b5f - 1].Uc();

              }

              if (this.pc === 0 && _0xcbec26 > 0) {

                this.nc.addChild(this.oc);

              }

              if (this.pc > 0 && _0xcbec26 === 0) {

                decoder.U(this.oc);

              }

              while (this.pc < _0xcbec26) {

                this.nc.addChild(this.qc[this.pc].Cc.Qc());

                this.nc.addChild(this.qc[this.pc].Dc.Qc());

                this.pc += 1;

              }

              while (this.pc > _0xcbec26) {

                this.pc -= 1;

                this.qc[this.pc].Dc.Rc();

                this.qc[this.pc].Cc.Rc();

              }

              var _0x765944 = hexByte.dd[_0x232886.fd.ed];

              if (this.qc[0].gd() && _0x765944 && _0x765944.hd) {

                this.oc.Vc(hexByte, createJoystick, gameSettings, savedGame);

              } else {

                this.oc.Mc();

              }

              var _0x453319 = hexByte.dd[_0x232886.fd.jd];

              if (this.qc[0].gd() && _0x453319 && _0x453319.hd) {

                this.oc.Wc(hexByte, createJoystick, gameSettings, savedGame);

              } else {

                this.oc.Oc();

              }

          

              

            var leFlex = hexByte.dd[_0x232886.fd.pd];

            if (this.qc[0].gd() && leFlex != null && leFlex.hd) {

               this.oc.activeFlex(hexByte, createJoystick, gameSettings, savedGame);

            } else {

               this.oc.disableFlex();

            }                  

              

              movimentaLinha();

            };

            var _0xcd0b4c = function () {

              function _0x28ab10(_0x527f04, _0x5519d8) {

                this.Cc = _0x527f04;

                this.Cc.kd(false);

                this.Dc = _0x5519d8;

                this.Dc.kd(false);

                this.ev = null;

              }

              _0x28ab10.prototype.Sc = function (_0x1f7c67, _0x282f2f, _0x24882e, _0x2bab31, _0x2ac312) {

                this.Cc.kd(true);

                this.Cc.ld(_0x1f7c67, _0x282f2f);

                this.Cc.Tc(_0x24882e);

                this.Cc.md(_0x2ac312);

                this.Dc.kd(true);

                this.Dc.ld(_0x1f7c67, _0x282f2f);

                this.Dc.Tc(_0x2bab31);

                this.Dc.md(_0x2ac312);

              };

              _0x28ab10.prototype.Uc = function () {

                this.Cc.kd(false);

                this.Dc.kd(false);

              };

              _0x28ab10.prototype.gd = function () {

                return this.Cc.gd();

              };

              _0x28ab10.cd = function (_0x387883, _0x5137b4) {

                return Math.atan2(_0x387883.Cc.xc.position.y - _0x5137b4.Cc.xc.position.y, _0x387883.Cc.xc.position.x - _0x5137b4.Cc.xc.position.x);

              };

              return _0x28ab10;

            }();

            return _0x4121bc;

          }();

          _0x232886.fd = function () {

            function _0x1f0a2d(_0x75fc16) {

              this.nd = _0x75fc16;

              this.hd = false;

              this.od = 1;

            }

            _0x1f0a2d.jd = 0;

            _0x1f0a2d.pd = 1;

            _0x1f0a2d.ed = 2;

            _0x1f0a2d.qd = 6;

            _0x1f0a2d.rd = 3;

            _0x1f0a2d.sd = 4;

            _0x1f0a2d.td = 5;

            return _0x1f0a2d;

          }();

          _0x232886.Ab = function (_0x2880f0) {

            var _0x592386 = function () {

              function _0x442818(_0x507bfc, _0x2cc7fe) {

                _0xafbee0(this, _0x442818);

                this.ud = _0x507bfc;

                this.vd = _0x2cc7fe;

              }

              return _0xf99ac0(_0x442818, [{

                key: "Jb",

                value: function _0x40d7dc() {

                  return this.ud.revision;

                }

              }, {

                key: "Yb",

                value: function _0x409d27() {

                  _0x39fe91.Jb();

                  return this.ud;

                }

              }, {

                key: "Ub",

                value: function _0x5bd3b1() {

                  return this.vd;

                }

              }]);

            }();

            _0x2880f0 = _0x592386;

            _0x48e06b(_0x592386, "wd", new _0x2880f0({}, _0x232886.Ga.Ca()));

            return _0x592386;

          }();

          _0x232886.Mb = function () {

            function _0x557c5b(_0x91450e) {

              this.xd = function () {

                ++_0x557c5b.yd;

                return function (_0x124718, _0x17658e) {};

              }();

              this.zd = _0x91450e;

              this.Ad = null;

              this.Bd = null;

              this.Cd = null;

              this.Dd = null;

              this.Ed = null;

              this.Fd = false;

              this.Gd = false;

              this.Hd = false;

            }

            _0x557c5b.Id = {

              Jd: "0x0",

              Kd: "0x1",

              Ld: "0x2",

              Md: "0x3",

              Nd: "0x4"

            };

            _0x557c5b.yd = 100000;

            _0x557c5b.Od = new _0x232886._b.cc().ec(_0x557c5b.Id.Jd, 1).ec(_0x557c5b.Id.Kd, 10).ec(_0x557c5b.Id.Ld, 50).ec(_0x557c5b.Id.Md, 15).ec(_0x557c5b.Id.Nd, 5).hc();

            _0x557c5b.prototype.Rb = function (_0x4b0e3c) {

              this.Ad = _0x4b0e3c;

            };

            _0x557c5b.prototype.Qb = function (_0x3f4c8f) {

              this.Bd = _0x3f4c8f;

            };

            _0x557c5b.prototype.Ob = function (_0x49f46a) {

              this.Cd = _0x49f46a;

            };

            _0x557c5b.prototype.Pb = function (_0x1d211c) {

              this.Dd = _0x1d211c;

            };

            _0x557c5b.prototype.Nb = function (_0x1eeb97) {

              this.Ed = _0x1eeb97;

            };

            _0x557c5b.prototype.Kb = function () {

              return this.Hd;

            };

            _0x557c5b.prototype.Lb = function () {

              this.Fd = true;

            };

            _0x557c5b.prototype.Vb = function () {

              if (!this.Gd) {

                this.Gd = true;

                if (this.Fd) {

                  this.Pd();

                  return;

                }

                this.Qd();

              }

            };

            _0x557c5b.prototype.Qd = function () {

              function _0x1a460e(_0x38dc8a) {

                var _0xda09fd = _0x557c5b.Id.Jd;

                _0x589c2d.Rd(_0xda09fd, _0x557c5b.Od.bc(_0xda09fd).lc(_0x38dc8a));

              }

              var _0x589c2d = this;

              if (this.Fd) {

                this.Pd();

                return;

              }

              $.ajax({

                type: "GET",

                url: decoder.a.c + "/dynamic/assets/revision.json",

                xhrFields: {

                  onprogress: function _0x1c5461(_0xddaa3f) {

                    if (_0xddaa3f.lengthComputable) {

                      _0x1a460e(_0xddaa3f.loaded / _0xddaa3f.total);

                    }

                  }

                }

              }).fail(function () {

                _0x589c2d.Sd(new Error());

              }).done(function (_0x7376a1) {

                if (_0x7376a1 <= _0x589c2d.zd) {

                  _0x589c2d.Td();

                  return;

                }

                _0x589c2d.Ud();

              });

            };

            _0x557c5b.prototype.Ud = _0x5a1854(_0x3e50a4().mark(function _0x1c4a5a() {

              var _0x7a4639;

              var _0x3b0475;

              var _0x455226;

              return _0x3e50a4().wrap(function _0x1931f8(_0x23517c) {

                while (1) {

                  switch (_0x23517c.prev = _0x23517c.next) {

                    case 0:

                      _0x7a4639 = function _0x5c480a(_0x37bcf6) {

                        var _0x506bee = _0x557c5b.Id.Kd;

                        _0x3b0475.Rd(_0x506bee, _0x557c5b.Od.bc(_0x506bee).lc(_0x37bcf6));

                      };

                      _0x3b0475 = this;

                      if (!this.Fd) {

                        _0x23517c.next = 4;

                        break;

                      }

                      return _0x23517c.abrupt("return", void this.Pd());

                    case 4:

                      _0x23517c.next = 6;

                      return fetch(URLSERV_WORMWORLD + "/version");

                    case 6:

                      _0x455226 = _0x23517c.sent;

                      _0x23517c.next = 9;

                      return _0x455226.json();

                    case 9:

                      _0x455226 = _0x23517c.sent;

                      localStorage.setItem("wwc_version", _0x455226);

                      if (_0x2a2048 != _0x455226) {

                        $.ajax({

                          type: "GET",

                          url: decoder.a.c + "/dynamic/assets/registry.json",

                          xhrFields: {

                            onprogress: function _0x2919fa(_0x515af3) {

                              if (_0x515af3.lengthComputable) {

                                _0x7a4639(_0x515af3.loaded / _0x515af3.total);

                              }

                            }

                          }

                        }).fail(function () {

                          _0x3b0475.Sd(new Error());

                        }).done(function () {

                          var _0x324afb = _0x5a1854(_0x3e50a4().mark(function _0x13d3bd(_0x4c510f) {

                            return _0x3e50a4().wrap(function _0x78940f(_0x550e77) {

                              while (1) {

                                switch (_0x550e77.prev = _0x550e77.next) {

                                  case 0:

                                    _0x550e77.next = 2;

                                    return _0x39fe91.registry(_0x4c510f);

                                  case 2:

                                    _0x4c510f = _0x550e77.sent;

                                    localStorage.setItem("wwc_config", JSON.stringify(_0x4c510f));

                                    _0x3b0475.Vd(_0x4c510f, _0x557c5b);

                                  case 5:

                                  case "end":

                                    return _0x550e77.stop();

                                }

                              }

                            }, _0x13d3bd);

                          }));

                          return function (_0x2f5afd) {

                            return _0x324afb.apply(this, arguments);

                          };

                        }());

                      } else {

                        try {

                          _0x13cb7c = JSON.parse(_0x13cb7c);

                          _0x7a4639(1);

                          _0x3b0475.Vd(_0x13cb7c, _0x557c5b);

                        } catch (_0x11b5b4) {

                          console.log("ConfigError", _0x11b5b4);

                          localStorage.removeItem("wwc_version");

                          localStorage.removeItem("wwc_config");

                        }

                      }

                    case 12:

                    case "end":

                      return _0x23517c.stop();

                  }

                }

              }, _0x1c4a5a, this);

            }));

            _0x557c5b.prototype.Vd = _0x39fe91.Vd || function (_0x54c2f8) {

              function _0x4131cb(_0x1d68d6) {

                var _0x29aa48 = _0x557c5b.Id.Ld;

                _0x222e71.Rd(_0x29aa48, _0x557c5b.Od.bc(_0x29aa48).lc(_0x1d68d6));

              }

              var _0x222e71 = this;

              if (this.Fd) {

                this.Pd();

                return;

              }

              var _0x2a869d = [];

              var _0x5edb90 = [];

              var _0x267cb8 = 0;

              for (var _0x5132fa in _0x54c2f8.textureDict) {

                if (_0x54c2f8.textureDict.hasOwnProperty(_0x5132fa)) {

                  var _0x16de6c = _0x54c2f8.textureDict[_0x5132fa];

                  var _0x3f1cd7 = decoder.a.c + _0x16de6c.relativePath;

                  var _0x29ec7c = _0x16de6c.fileSize;

                  var _0x580b23 = _0x16de6c.sha256;

                  var _0x4e5150 = new _0x557c5b.Wd(_0x5132fa, _0x3f1cd7, _0x29ec7c, _0x580b23);

                  _0x2a869d.push(_0x4e5150);

                  _0x5edb90.push(_0x4e5150);

                  _0x267cb8 += _0x29ec7c;

                }

              }

              var _0x769c91;

              var _0x35189f = 0;

              var _0x190bce = function _0x1a5656(_0x2be6ff) {

                for (var _0x21167f = 0; _0x21167f < _0x5edb90.length; _0x21167f++) {

                  try {

                    window.URL.revokeObjectURL(_0x5edb90[_0x21167f].Xd);

                  } catch (_0x27236c) {}

                }

                _0x222e71.Sd(_0x2be6ff);

              };

              var _0x3842f6 = function _0x55bd66(_0x5b0b29) {

                var _0x2fed07 = Math.floor(_0x769c91.Yd * _0x5b0b29);

                _0x4131cb((_0x35189f + _0x2fed07) / _0x267cb8);

              };

              var _0x2e1ae2 = function _0x52de88(_0x37d794) {

                var _0x4a6134 = new Blob([_0x37d794]);

                _0x769c91.Xd = window.URL.createObjectURL(_0x4a6134);

                _0x35189f += _0x769c91.Yd;

                _0xc833d8();

              };

              var _0xc833d8 = function _0x12319() {

                if (_0x4cee4b < _0x5edb90.length) {

                  _0x769c91 = _0x5edb90[_0x4cee4b++];

                  _0x222e71.Zd(_0x769c91, _0x190bce, _0x2e1ae2, _0x3842f6);

                  return;

                }

                setTimeout(function () {

                  return _0x222e71.$d(_0x54c2f8, _0x2a869d);

                }, 0);

              };

              var _0x4cee4b = 0;

              _0xc833d8();

            };

            _0x557c5b.prototype.Zd = _0x39fe91.Zd || function (_0x5a12d6, _0x2ad7cd, _0x5375d, _0x56f423) {

              $.ajax({

                type: "GET",

                url: _0x5a12d6._d,

                xhrFields: {

                  responseType: "arraybuffer",

                  onprogress: function _0x115b6a(_0x1b1beb) {

                    if (_0x1b1beb.lengthComputable) {

                      _0x56f423(_0x1b1beb.loaded / _0x1b1beb.total);

                    }

                  }

                }

              }).fail(function () {

                _0x2ad7cd(new Error());

              }).done(function (_0x13d817) {

                _0x5375d(_0x13d817);

              });

            };

            _0x557c5b.prototype.$d = _0x39fe91.$d || function (_0x44abab, _0x3392a5) {

              function _0x406abd(_0x1a8fd2) {

                var _0x57d3d4 = _0x557c5b.Id.Md;

                _0x25a67e.Rd(_0x57d3d4, _0x557c5b.Od.bc(_0x57d3d4).lc(_0x1a8fd2));

              }

              var _0x25a67e = this;

              if (this.Fd) {

                this.Pd();

                return;

              }

              var _0xcb3cbb;

              var _0x4f8cef;

              var _0x469439 = {};

              var _0x162867 = function _0x37b5df() {

                for (var _0x354676 = 0; _0x354676 < _0x3392a5.length; _0x354676++) {

                  try {

                    window.URL.revokeObjectURL(_0x3392a5[_0x354676].Xd);

                  } catch (_0x588d7e) {}

                }

                _0x25a67e.Sd(new Error());

              };

              var _0xc307f7 = function _0x13e6e0() {

                _0x406abd(_0x4d6c9e / _0x3392a5.length);

                _0x469439[_0xcb3cbb.ae] = new _0x232886.be(_0xcb3cbb.Xd, _0x4f8cef);

                _0x5468dc();

              };

              var _0x5468dc = function _0x24e3a4() {

                if (_0x4d6c9e < _0x3392a5.length) {

                  _0xcb3cbb = _0x3392a5[_0x4d6c9e++];

                  _0x4f8cef = PIXI.BaseTexture.from(_0xcb3cbb.Xd);

                  _0x4f8cef.on("error", _0x162867);

                  _0x4f8cef.on("loaded", _0xc307f7);

                  return;

                }

                setTimeout(function () {

                  return _0x25a67e.ce(_0x44abab, _0x469439);

                }, 0);

              };

              var _0x4d6c9e = 0;

              _0x5468dc();

            };

            _0x557c5b.prototype.ce = function (_0x25e7cd, _0x2148b8) {

              function _0x36c8ab(_0x26043f) {

                var _0x6768b8 = _0x557c5b.Id.Nd;

                _0xf481ef.Rd(_0x6768b8, _0x557c5b.Od.bc(_0x6768b8).lc(_0x26043f));

              }

              var _0xf481ef = this;

              var _0x50114e = {};

              var _0x187482 = 0;

              var _0x47a4b9 = Object.values(_0x25e7cd.regionDict).length;

              decoder._(_0x25e7cd.regionDict, function (_0x5104c5, _0x75d288) {

                var _0x2f1fb8 = null;

                try {

                  var _0x35c848 = null;

                  if (_0x2148b8[_0x75d288.texture].ev) {

                    _0x35c848 = _0x2148b8[_0x75d288.texture].ev;

                  }

                  var _0x274905 = _0x75d288.texture + ":" + _0x5104c5;

                  _0x2f1fb8 = _0x232886.la.Da(_0x274905, _0x2148b8[_0x75d288.texture].oa, _0x75d288, _0x35c848);

                  _0x50114e[_0x5104c5] = _0x2f1fb8;

                  if (++_0x187482 % 10 == 0) {

                    _0x36c8ab(_0x187482 / _0x47a4b9);

                  }

                } catch (_0x4f83c7) {}

              });

              var _0x5053e9 = Object.values(_0x2148b8).map(function (_0x129e08) {

                return _0x129e08.oa;

              });

              var _0x203f20 = Object.values(_0x50114e);

              var _0x4954fe = new _0x232886.Ab(_0x25e7cd, _0x232886.Ga.fb(_0x25e7cd, _0x50114e, _0x5053e9, _0x203f20));

              setTimeout(function () {

                return _0xf481ef.de(_0x4954fe);

              }, 0);

            };

            _0x557c5b.Wd = function () {

              function _0x34702a(_0x4ce35d, _0x4fe6d4, _0x4f4fd3, _0x2e0e8c) {

                this.ae = _0x4ce35d;

                this._d = _0x4fe6d4;

                this.Yd = _0x4f4fd3;

                this.ee = _0x2e0e8c;

                this.Xd = "";

              }

              return _0x34702a;

            }();

            _0x557c5b.prototype.de = function (_0x4895dd) {

              if (this.Hd) {

                _0x4895dd.Ub().Fa();

                return;

              }

              this.Hd = true;

              var _0x2e536a = this;

              setTimeout(function () {

                return _0x2e536a.Ad(_0x4895dd);

              }, 0);

            };

            _0x557c5b.prototype.Td = function () {

              if (!this.Hd) {

                this.Hd = true;

                var _0x3919a2 = this;

                setTimeout(function () {

                  return _0x3919a2.Bd();

                }, 0);

              }

            };

            _0x557c5b.prototype.Sd = function (_0x317c6c) {

              if (!this.Hd) {

                this.Hd = true;

                var _0x4c7225 = this;

                setTimeout(function () {

                  return _0x4c7225.Cd(_0x317c6c);

                }, 0);

              }

            };

            _0x557c5b.prototype.Pd = function () {

              if (!this.Hd) {

                this.Hd = true;

                var _0x5e4050 = this;

                setTimeout(function () {

                  return _0x5e4050.Dd();

                }, 0);

              }

            };

            _0x557c5b.prototype.Rd = function (_0x19eac7, _0x24068d) {

              if (!this.Hd && !this.Fd) {

                var _0x356dba = this;

                return _0x356dba.Ed(_0x19eac7, _0x24068d);

              }

            };

            return _0x557c5b;

          }();

          _0x232886.fe = function () {

            return {};

          }();

          _0x232886.ge = function () {

            function _0x56ebb1() {

              this.he = _0x232886.ge.je.ie;

              this.ke = false;

              this.le = false;

              this.me = null;

              this.ne = null;

            }

            _0x56ebb1.prototype.ha = function () {};

            _0x56ebb1.prototype.oe = function (_0x1a0b32) {

              this.le = _0x1a0b32;

            };

            _0x56ebb1.prototype.pe = function (_0x2507a5) {

              this.he = _0x2507a5;

              this.qe();

            };

            _0x56ebb1.prototype.re = function (_0x41528a) {

              this.ke = _0x41528a;

              this.qe();

            };

            _0x56ebb1.prototype.qe = function () {};

            _0x56ebb1.prototype.se = function (_0x78e248, _0x56cf8d) {

              if (!_0x5d39d0().Lc.Wb()) {

                return null;

              }

              var _0x124511 = _0x78e248[_0x56cf8d];

              if (_0x124511 == null || _0x124511.length === 0) {

                return null;

              } else {

                return _0x124511[Math.floor(Math.random() * _0x124511.length)].cloneNode();

              }

            };

            _0x56ebb1.prototype.te = function (_0x34ec86, _0x29d785, _0x27035a) {

              if (this.le && !(_0x27035a <= 0)) {

                var _0xbe104e = this.se(_0x34ec86, _0x29d785);

                if (_0xbe104e != null) {

                  _0xbe104e.volume = Math.min(1, _0x27035a);

                  _0xbe104e.play();

                }

              }

            };

            _0x56ebb1.prototype.ue = function (_0x5e0953, _0x281a0b) {

              if (this.he.ve) {

                this.te(app.xe.we, _0x5e0953, _0x281a0b);

              }

            };

            _0x56ebb1.prototype.ye = function (_0x435b74, _0x44199e) {

              if (this.he.ze) {

                this.te(app.xe.Ae, _0x435b74, _0x44199e);

              }

            };

            _0x56ebb1.prototype.Be = function () {};

            _0x56ebb1.prototype.Ce = function () {};

            _0x56ebb1.prototype.De = function () {};

            _0x56ebb1.prototype.Ee = function () {};

            _0x56ebb1.prototype.Fe = function () {};

            _0x56ebb1.prototype.Ge = function () {};

            _0x56ebb1.prototype.He = function (_0x976814, _0x419a35, _0x4d6505) {};

            _0x56ebb1.prototype.Ie = function (_0x19077a) {};

            _0x56ebb1.prototype.Je = function (_0x452a7b) {};

            _0x56ebb1.prototype.Ke = function (_0x267bbd) {};

            _0x56ebb1.prototype.Le = function (_0x32e031) {};

            _0x56ebb1.prototype.Me = function (_0x331679) {};

            _0x56ebb1.prototype.Ne = function (_0x4d3a65) {};

            _0x56ebb1.prototype.Oe = function (_0x5d9c87) {};

            _0x56ebb1.prototype.Pe = function (_0x10cb3a) {};

            _0x56ebb1.prototype.Qe = function (_0x108a84) {};

            _0x56ebb1.prototype.Re = function (_0x427c8b) {};

            _0x56ebb1.prototype.Se = function (_0x441391) {};

            _0x56ebb1.prototype.Te = function (_0x37eaef) {};

            _0x56ebb1.prototype.Ue = function (_0x2dbdac) {};

            _0x56ebb1.prototype.Ve = function (_0x1e5363) {};

            _0x56ebb1.prototype.We = function (_0xeddd74, _0x232e50) {};

            _0x56ebb1.prototype.Xe = function (_0x888585) {};

            _0x56ebb1.prototype.Ye = function (_0x3440d6, _0x9ed43d, _0x22c44a) {};

            _0x56ebb1.je = {

              ie: {

                Ze: false,

                $e: false,

                ze: true,

                ve: false

              },

              _e: {

                Ze: false,

                $e: true,

                ze: true,

                ve: false

              },

              af: {

                Ze: true,

                $e: false,

                ze: false,

                ve: true

              },

              bf: {

                Ze: false,

                $e: false,

                ze: true,

                ve: false

              },

              cf: {

                Ze: false,

                $e: false,

                ze: false,

                ve: false

              }

            };

            return _0x56ebb1;

          }();

          _0x232886.GameView = function () {

            function _0x331e23(_0x8439c) {

              var _0x2a3a28 = _0x5d39d0();

              this.ef = _0x8439c;

              this.Eb = _0x8439c.get()[0];

              this.ff = 1;

              this.gf = 1;

              this.hf = null;

              this.lf = new _0x429afb.Renderer({

                view: _0x8439c.get()[0],

                backgroundColor: 0,

                transparent: false,

                antialias: false,

                autoResize: true

              });

              this.mf = new _0x429afb.Container();

              this.mf.sortableChildren = true;

              this.nf = new _0x429afb.Container();

              this.nf.zIndex = 0;

              this.mf.addChild(this.nf);

              this.uf = new _0x429afb.Container();

              this.uf.zIndex = 3;

              this.mf.addChild(this.uf);

              this.vf = [];

              this.wf = [];

              this.xf = [];

              this.ha();

            }

            var _0x580731 = 0;

            var _0x17f190 = 5;

            var _0x288023 = 40;

            var _0x491149 = [{

              yf: 1,

              zf: 0.15,

              Af: 0

            }, {

              yf: 1,

              zf: 0.125,

              Af: 0

            }, {

              yf: 1,

              zf: 0.1,

              Af: 0

            }, {

              yf: 1,

              zf: 0.075,

              Af: 0

            }, {

              yf: 1,

              zf: 0.05,

              Af: 0

            }, {

              yf: 1,

              zf: 0.025,

              Af: 0

            }, {

              yf: 1,

              zf: 0,

              Af: 0.025

            }, {

              yf: 1,

              zf: 0,

              Af: 0.05

            }, {

              yf: 1,

              zf: 0,

              Af: 0.075

            }, {

              yf: 1,

              zf: 0,

              Af: 0.1

            }, {

              yf: 1,

              zf: 0,

              Af: 0.125

            }, {

              yf: 1,

              zf: 0,

              Af: 0.15

            }];

            _0x331e23.prototype.ha = function () {

              var _0x47aa28 = _0x5d39d0();

              this.lf.backgroundColor = _0x580731;

              this.vf = new Array(_0x491149.length);

              for (var _0x4ab4f2 = 0; _0x4ab4f2 < this.vf.length; _0x4ab4f2++) {

                this.vf[_0x4ab4f2] = new _0x429afb.Sprite();

                this.vf[_0x4ab4f2].texture = _0x47aa28.xe.Bf;

                this.vf[_0x4ab4f2].anchor.set(0.5);

                this.nf.addChild(this.vf[_0x4ab4f2]);

              }

              this.wf = new Array(_0x47aa28.xe.Cf.length);

              for (var _0x1cafb0 = 0; _0x1cafb0 < this.wf.length; _0x1cafb0++) {

                this.wf[_0x1cafb0] = new _0x429afb.Sprite();

                this.wf[_0x1cafb0].texture = _0x47aa28.xe.Cf[_0x1cafb0];

                this.wf[_0x1cafb0].anchor.set(0.5);

                this.uf.addChild(this.wf[_0x1cafb0]);

              }

              this.xf = new Array(this.wf.length);

              for (var _0x506939 = 0; _0x506939 < this.xf.length; _0x506939++) {

                var _0x44595f = [0.6, 1, 0.5];

                this.xf[_0x506939] = {

                  Df: decoder.V(0, _0x1c15a7.F),

                  Ef: decoder.V(0.09, 0.16) * 0.66,

                  Ff: decoder.V(0, 1),

                  Gf: decoder.V(0, 1),

                  Hf: 0,

                  yf: _0x44595f[0],

                  zf: _0x44595f[1],

                  Af: _0x44595f[2]

                };

              }

              this.If();

              this.Jf();

            };

            _0x331e23.hd = false;

            _0x331e23.Kf = function (_0x15971a) {

              _0x331e23.hd = _0x15971a;

            };

            _0x331e23.prototype.Lf = function (_0x2c3031) {

              this.hf.Kf(_0x2c3031);

            };

            _0x331e23.prototype.Jf = function () {

              var _0x55196f = window.devicePixelRatio ? window.devicePixelRatio : 1;

              this.ff = this.ef.width();

              this.gf = this.ef.height();

              this.lf.resize(this.ff, this.gf);

              this.lf.resolution = _0x55196f;

              this.Eb.width = _0x55196f * this.ff;

              this.Eb.height = _0x55196f * this.gf;

              var _0x2c574a = Math.max(this.ff, this.gf) * 0.6;

              for (var _0x21b651 = 0; _0x21b651 < this.vf.length; _0x21b651++) {

                this.vf[_0x21b651].width = _0x2c574a;

                this.vf[_0x21b651].height = _0x2c574a;

              }

            };

            _0x331e23.prototype.Nf = function (_0x4bc527, _0x72e415) {

              if (_0x331e23.hd) {

                var _0x3dd4c8 = _0x4bc527 / 1000;

                var _0x2b8655 = _0x72e415 / 1000;

                var _0x2ac85e = this.ef.width();

                var _0x37e5e9 = this.ef.height();

                for (var _0x56f5c2 = 0; _0x56f5c2 < this.vf.length; _0x56f5c2++) {

                  var _0x19fcf9 = _0x491149[_0x56f5c2 % _0x491149.length];

                  var _0xf33e00 = this.vf[_0x56f5c2];

                  var _0x43f321 = _0x56f5c2 / this.vf.length * _0x1c15a7.G;

                  var _0xc53c0b = _0x3dd4c8 * 0.5 * 0.12;

                  var _0x1f74c1 = Math.cos((_0xc53c0b + _0x43f321) * 3) * Math.cos(_0x43f321) - Math.sin((_0xc53c0b + _0x43f321) * 5) * Math.sin(_0x43f321);

                  var _0x416dcd = Math.cos((_0xc53c0b + _0x43f321) * 3) * Math.sin(_0x43f321) + Math.sin((_0xc53c0b + _0x43f321) * 5) * Math.cos(_0x43f321);

                  var _0x1bc8d4 = 0.2 + Math.cos(_0x43f321 + _0x3dd4c8 * 0.075) * 0.2;

                  var _0x1512b4 = _0x19fcf9.Af * 255 << 16 & 16711680 | _0x19fcf9.zf * 255 << 8 & 65280 | _0x19fcf9.yf * 255 & 255;

                  _0xf33e00.tint = _0x1512b4;

                  _0xf33e00.alpha = _0x1bc8d4;

                  _0xf33e00.position.set(_0x2ac85e * (0.2 + (_0x1f74c1 + 1) * 0.5 * 0.6), _0x37e5e9 * (0.1 + (_0x416dcd + 1) * 0.5 * 0.8));

                }

                var _0x15c4b5 = Math.max(_0x2ac85e, _0x37e5e9) * 0.05;

                for (var _0x23a167 = 0; _0x23a167 < this.wf.length; _0x23a167++) {

                  var _0x1fa373 = this.xf[_0x23a167];

                  var _0x2100f8 = this.wf[_0x23a167];

                  var _0xca4866 = _0x1c15a7.F * _0x23a167 / this.wf.length + _0x1fa373.Df;

                  _0x1fa373.Gf += _0x1fa373.Ef * _0x2b8655;

                  if (_0x1fa373.Gf > 1.1) {

                    _0x1fa373.Df = Math.random() * _0x1c15a7.F;

                    _0x1fa373.Ef = (0.09 + Math.random() * 0.07) * 0.66;

                    _0x1fa373.Ff = 0.15 + Math.random() * 0.7;

                    _0x1fa373.Gf = -0.1;

                  }

                  var _0xfd868 = _0x1fa373.Ff + Math.sin(Math.sin(_0xca4866 + _0x3dd4c8 * 0.48) * 6) * 0.03;

                  var _0x55e891 = _0x1fa373.Gf;

                  var _0x4b3458 = (0.4 + (1 + Math.sin(_0xca4866 + _0x3dd4c8 * 0.12)) * 0.5 * 1.2) * 0.5;

                  var _0x165479 = _0xca4866 + _0x1fa373.Ef * 2 * _0x3dd4c8;

                  var _0x44d7f7 = decoder.P(Math.sin(Math.PI * _0x55e891), 0.1, 1);

                  var _0x18b978 = _0x1fa373.zf * 255 << 8 & 65280 | _0x1fa373.Af * 255 << 16 & 16711680 | _0x1fa373.yf * 255 & 255;

                  _0x2100f8.alpha = _0x44d7f7;

                  _0x2100f8.tint = _0x18b978;

                  _0x2100f8.position.set(_0x2ac85e * _0xfd868, _0x37e5e9 * _0x55e891);

                  _0x2100f8.rotation = _0x165479;

                  var _0xe79ff4 = _0x2100f8.texture.width / _0x2100f8.texture.height;

                  _0x2100f8.width = _0x4b3458 * _0x15c4b5;

                  _0x2100f8.height = _0x4b3458 * _0x15c4b5 * _0xe79ff4;

                }

                this.Of();

                this.lf.render(this.mf, null, true);

              }

            };

            _0x331e23.prototype.Pf = function () {

              var _0x3320c2 = _0x5d39d0();

              if (_0x3320c2.Lc.Wb()) {

                var _0x4d6af6 = _0x3320c2.Lc.Ub().gb(_0x17f190);

                for (var _0x313d0a = 0; _0x313d0a < _0x17f190; _0x313d0a++) {

                  this.hf.Qf(_0x313d0a, _0x4d6af6[_0x313d0a]);

                }

              } else {

                var _0x3f06ff = decoder.V(0, 1);

                for (var _0xef3261 = 0; _0xef3261 < _0x17f190; _0xef3261++) {

                  var _0x41169c = (_0x3f06ff + _0xef3261 / _0x17f190) % 1;

                  var _0x479a51 = decoder.Y(Math.floor(_0x41169c * 360), 0.85, 0.5);

                  var _0x307a44 = _0x479a51[0] * 255 & 255 | _0x479a51[1] * 255 << 8 & 65280 | _0x479a51[2] * 255 << 16 & 16711680;

                  var _0x1d6871 = "000000" + _0x307a44.toString(16);

                  _0x1d6871 = "#" + _0x1d6871.substring(_0x1d6871.length - 6, _0x1d6871.length);

                  this.hf.Rf(_0xef3261, _0x1d6871);

                }

              }

            };

            _0x331e23.prototype.If = function () {

              var _0x2ceefe = Math.min(this.ff, this.gf);

              var _0x2bcfcd = Date.now();

              for (var _0x1d78b1 = 0; _0x1d78b1 < _0x17f190; _0x1d78b1++) {

                var _0x35725a = _0x1d78b1 / _0x17f190 * _0x1c15a7.F;

                var _0x2e5f6d = _0x2cb706(_0x2bcfcd, 0.12, _0x35725a);

                _0x2e5f6d.qa = _0x2e5f6d.qa * 4;

                _0x2e5f6d.ra = _0x2e5f6d.ra * 4;

                this.hf.Sf(_0x1d78b1, (this.ff + _0x2e5f6d.qa * _0x2ceefe) * 0.5, (this.gf + _0x2e5f6d.ra * _0x2ceefe) * 0.5);

              }

            };

            _0x331e23.prototype.Of = function () {

              var _0x282a6f = Math.min(this.ff, this.gf);

              var _0x159527 = Date.now();

              for (var _0x5b1cd1 = 0; _0x5b1cd1 < _0x17f190; _0x5b1cd1++) {

                var _0xd6dd1b = _0x5b1cd1 / _0x17f190 * _0x1c15a7.F;

                var _0x444513 = _0x2cb706(_0x159527, 0.12, _0xd6dd1b);

                this.hf.Tf(_0x5b1cd1, (this.ff + _0x444513.qa * _0x282a6f) * 0.5, (this.gf + _0x444513.ra * _0x282a6f) * 0.5);

              }

              this.hf.Uf();

            };

            var _0x2cb706 = function _0x429fd2(_0x553188, _0x5e4d77, _0x192f77) {

              var _0x35abc9 = _0x553188 / 1000;

              return {

                qa: (Math.cos(_0x5e4d77 * _0x35abc9 + _0x192f77) + Math.cos(_0x5e4d77 * -32 * _0x35abc9 + _0x192f77) * 0.4 + Math.cos(_0x5e4d77 * 7 * _0x35abc9 + _0x192f77) * 0.7) * 0.8,

                ra: (Math.sin(_0x5e4d77 * _0x35abc9 + _0x192f77) + Math.sin(_0x5e4d77 * -32 * _0x35abc9 + _0x192f77) * 0.4 + Math.sin(_0x5e4d77 * 7 * _0x35abc9 + _0x192f77) * 0.7) * 0.8

              };

            };

            return _0x331e23;

          }();

          _0x232886.Vf = function () {

            function _0x43f293() {}

            _0x43f293.Wf = "consent_state_2";

            _0x43f293.Xf = "showPlayerNames";

            _0x43f293.Yf = "musicEnabled";

            _0x43f293.Zf = "sfxEnabled";

            _0x43f293.$f = "account_type";

            _0x43f293._f = "gameMode";

            _0x43f293.ag = "nickname";

            _0x43f293.bg = "skin";

            _0x43f293.cg = "prerollCount";

            _0x43f293.dg = "shared";

            _0x43f293.eg = function (_0x5c5726, _0x297350, _0x1e4213) {

              var _0x12aed5 = new Date();

              _0x12aed5.setTime(_0x12aed5.getTime() + _0x1e4213 * 86400000);

              var _0x36c5b9 = "expires=" + _0x12aed5.toUTCString();

              document.cookie = _0x5c5726 + "=" + _0x297350 + "; " + _0x36c5b9;

            };

            _0x43f293.fg = function (_0x56d008) {

              var _0x469db8 = _0x56d008 + "=";

              for (var _0x1a67a7 = document.cookie.split(";"), _0x2368a1 = 0; _0x2368a1 < _0x1a67a7.length; _0x2368a1++) {

                for (var _0x37a3dd = _0x1a67a7[_0x2368a1]; _0x37a3dd.charAt(0) == " ";) {

                  _0x37a3dd = _0x37a3dd.substring(1);

                }

                if (_0x37a3dd.indexOf(_0x469db8) == 0) {

                  if (_0x56d008 == "nickname=") {

                    _0x37a3dd.substring(_0x469db8.length, _0x37a3dd.length).substring(0, _0x30b68b);

                  }

                  return _0x37a3dd.substring(_0x469db8.length, _0x37a3dd.length);

                }

              }

              return "";

            };

            return _0x43f293;

          }();

          _0x1c15a7.gg = function () {

            function _0x3abb13(_0x4ab538, _0x3b25ce, _0x5b7d6d) {

              var _0x1309c5 = false;

              for (var _0x59714a = _0x5b7d6d.length, _0x38723d = 0, _0x5e8d0e = _0x59714a - 1; _0x38723d < _0x59714a; _0x5e8d0e = _0x38723d++) {

                if (_0x5b7d6d[_0x38723d][1] > _0x3b25ce != _0x5b7d6d[_0x5e8d0e][1] > _0x3b25ce && _0x4ab538 < (_0x5b7d6d[_0x5e8d0e][0] - _0x5b7d6d[_0x38723d][0]) * (_0x3b25ce - _0x5b7d6d[_0x38723d][1]) / (_0x5b7d6d[_0x5e8d0e][1] - _0x5b7d6d[_0x38723d][1]) + _0x5b7d6d[_0x38723d][0]) {

                  _0x1309c5 = !_0x1309c5;

                }

              }

              return _0x1309c5;

            }

            var _0x4c898e = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];

            return {

              hg: function _0x2c94b8(_0x4d9595, _0x2820e5) {

                return _0x3abb13(_0x2820e5, _0x4d9595, _0x4c898e);

              }

            };

          }();

          _0x232886.ig = function () {

            function _0x10d330(_0x4fdb71) {

              var _0x269cba = undefined;

              _0x269cba = _0x4fdb71 > 0 ? "+" + Math.floor(_0x4fdb71) : _0x4fdb71 < 0 ? "-" + Math.floor(_0x4fdb71) : "0";

              var _0x9ef501 = Math.min(1.5, 0.5 + _0x4fdb71 / 600);

              var _0xdc1d52 = undefined;

              if (_0x4fdb71 < 1) {

                _0xdc1d52 = "0xFFFFFF";

              } else if (_0x4fdb71 < 30) {

                var _0x530deb = (_0x4fdb71 - 1) / 29;

                _0xdc1d52 = _0x4718c8((1 - _0x530deb) * 1 + _0x530deb * 0.96, (1 - _0x530deb) * 1 + _0x530deb * 0.82, (1 - _0x530deb) * 1 + _0x530deb * 0);

              } else if (_0x4fdb71 < 300) {

                var _0x572f29 = (_0x4fdb71 - 30) / 270;

                _0xdc1d52 = _0x4718c8((1 - _0x572f29) * 0.96 + _0x572f29 * 0.93, (1 - _0x572f29) * 0.82 + _0x572f29 * 0.34, (1 - _0x572f29) * 0 + _0x572f29 * 0.25);

              } else if (_0x4fdb71 < 700) {

                var _0x10fd1f = (_0x4fdb71 - 300) / 400;

                _0xdc1d52 = _0x4718c8((1 - _0x10fd1f) * 0.93 + _0x10fd1f * 0.98, (1 - _0x10fd1f) * 0.34 + _0x10fd1f * 0, (1 - _0x10fd1f) * 0.25 + _0x10fd1f * 0.98);

              } else {

                _0xdc1d52 = _0x4718c8(0.98, 0, 0.98);

              }

              var _0x518c6b = Math.random();

              var _0xbee4f3 = 1 + Math.random() * 0.5;

              return new _0x1ef059(_0x269cba, _0xdc1d52, true, 0.5, _0x9ef501, _0x518c6b, _0xbee4f3);

            }

            function _0x129cd8(_0xcf150c, _0x1c201a) {

              var _0x4bfe16 = undefined;

              var _0xda15ec = undefined;

              if (_0x1c201a) {

                _0x4bfe16 = 1.3;

                _0xda15ec = _0x4718c8(0.93, 0.34, 0.25);

              } else {

                _0x4bfe16 = 1.1;

                _0xda15ec = _0x4718c8(0.96, 0.82, 0);

              }

              return new _0x1ef059(_0xcf150c, _0xda15ec, true, 0.5, _0x4bfe16, 0.5, 0.7);

            }

            function _0x4718c8(_0x45bd0b, _0x3e8d1e, _0x30c432) {

              return ((_0x45bd0b * 255 & 255) << 16) + ((_0x3e8d1e * 255 & 255) << 8) + (_0x30c432 * 255 & 255);

            }

            var _0x5cc87f = decoder.M(_0x429afb.Container, function () {

              _0x429afb.Container.call(this);

              this.jg = [];

              this.kg = 0;

            });

            _0x5cc87f.prototype.lg = function (_0x1dd721) {

              this.kg += _0x1dd721;

              if (this.kg >= 1) {

                var _0x4ead9d = Math.floor(this.kg);

                this.kg -= _0x4ead9d;

                var _0x4e7fd7 = _0x10d330(_0x4ead9d);

                this.addChild(_0x4e7fd7);

                this.jg.push(_0x4e7fd7);

              }

            };

            _0x5cc87f.prototype.mg = function (_0x5d028c) {

              _wwc.fnSetCounts("count", _0x5d028c);

              if (_0x5d028c) {

                if (!(window.bbs.headshot % 10)) {

                  _0x49249a.fxdo("shaokahn");

                } else {

                  _0x49249a.fxdo("headshot");

                }

                var _0x4cda0f = _0x129cd8(decoder.H("index.game.floating.headshot"), true);

                this.addChild(_0x4cda0f);

                this.jg.push(_0x4cda0f);

              } else {

                var _0x3452ee = _0x129cd8(decoder.H("index.game.floating.wellDone"), false);

                this.addChild(_0x3452ee);

                this.jg.push(_0x3452ee);

              }

            };

            _0x5cc87f.prototype.Uf = function (_0x42d0ed, _0x48b48e) {

              var _0x2443b5 = _0x5d39d0().og.af.ng;

              var _0x5a4635 = _0x2443b5.lf.width / _0x2443b5.lf.resolution;

              var _0x4420af = _0x2443b5.lf.height / _0x2443b5.lf.resolution;

              for (var _0xd89d3e = 0; _0xd89d3e < this.jg.length;) {

                var _0x4e5e4b = this.jg[_0xd89d3e];

                _0x4e5e4b.pg = _0x4e5e4b.pg + _0x48b48e / 2000 * _0x4e5e4b.qg;

                _0x4e5e4b.rg = _0x4e5e4b.rg + _0x48b48e / 2000 * _0x4e5e4b.sg;

                _0x4e5e4b.alpha = Math.sin(Math.PI * _0x4e5e4b.rg) * 0.5;

                _0x4e5e4b.scale.set(_0x4e5e4b.pg);

                _0x4e5e4b.position.x = _0x5a4635 * (0.25 + _0x4e5e4b.tg * 0.5);

                _0x4e5e4b.position.y = _0x4e5e4b.ug ? _0x4420af * (1 - (1 + _0x4e5e4b.rg) * 0.5) : _0x4420af * (1 - (0 + _0x4e5e4b.rg) * 0.5);

                if (_0x4e5e4b.rg > 1) {

                  decoder.U(_0x4e5e4b);

                  this.jg.splice(_0xd89d3e, 1);

                  _0xd89d3e--;

                }

                _0xd89d3e++;

              }

            };

            var _0x1ef059 = function () {

              return decoder.M(_0x429afb.Text, function (_0x2b11ab, _0x2b2e63, _0x226079, _0x45fab4, _0x246f8b, _0x56d32d, _0xd9600d) {

                _0x429afb.Text.call(this, _0x2b11ab, {

                  fill: _0x2b2e63,

                  fontFamily: "PTSans",

                  fontSize: 36

                });

                this.anchor.set(0.5);

                this.ug = _0x226079;

                this.pg = _0x45fab4;

                this.qg = _0x246f8b;

                this.tg = _0x56d32d;

                this.rg = 0;

                this.sg = _0xd9600d;

              });

            }();

            return _0x5cc87f;

          }();

          _0x232886.be = function () {

            function _0x5a440d(_0x3be228, _0x74eb46) {

              this.Xd = _0x3be228;

              this.oa = _0x74eb46;

            }

            return _0x5a440d;

          }();

          _0x232886.Ac = {

            vg: 0,

            zc: 16

          };

          _0x232886.GameParams = function () {

            function _0xc671bf() {

              this.xg = _0x232886.Ac.vg;

              this.yg = 0;

              this.zg = 500;

              this.Ag = 4000;

              this.Bg = 7000;

            }

            _0xc671bf.Cg = 0;

            _0xc671bf.prototype.Dg = function () {

              return this.zg * 1.02;

            };

            return _0xc671bf;

          }();

          _0x232886.Eg = function () {

            function _0x166b7d(_0x390e47) {

              this.ef = _0x390e47;

              this.Eb = _0x390e47.get()[0];

              this.lf = new _0x429afb.Renderer({

                view: _0x390e47.get()[0],

                backgroundColor: _0x31c95c,

                antialias: false

              });

              this.mf = new _0x429afb.Container();

              this.mf.sortableChildren = true;

              this.Fg = Math.floor(Math.random() * 360);

              this.Gg = 0;

              this.Hg = 0;

              this.Ig = 15;

              this.Jg = 0.5;

              this.Kg = 0;

              this.Lg = _0x39fe91.Lg(_0x232886);

              this.Ng = new _0x429afb.Graphics();

              this.Og = new _0x429afb.Container();

              this.Pg = new _0x429afb.Container();

              this.Pg.sortableChildren = true;

              this.Qg = new _0x429afb.Container();

              this.Rg = new _0x429afb.Container();

              this.Rg.sortableChildren = true;

              this.Sg = new _0x429afb.Container();

              this.Tg = new _0x5a38cc();

              this.Ug = new _0x2cec63();

              this.Vg = new _0x1b7628();

              this.Wg = new _0x232886.ig();

              this.Xg = new _0x429afb.Sprite();

              this.Yg = {

                x: 0,

                y: 0

              };

              this.ha();

            }

            var _0x31c95c = 0;

            _0x166b7d.prototype.ha = function () {

              this.lf.backgroundColor = _0x31c95c;

              this.Lg.sf.zIndex = 1;

              this.mf.addChild(this.Lg.sf);

              this.Ng.zIndex = 20;

              this.mf.addChild(this.Ng);

              this.Og.zIndex = 5000;

              this.mf.addChild(this.Og);

              this.Pg.zIndex = 5100;

              this.mf.addChild(this.Pg);

              this.Qg.zIndex = 10000;

              this.mf.addChild(this.Qg);

              createLine(this.mf, this.Lg.sf);

              this.Xg.texture = _0x5d39d0().xe.Zg;

              this.Xg.anchor.set(0.5);

              this.Xg.zIndex = 1;

              this.Rg.addChild(this.Xg);

              this.Sg.alpha = 0.6;

              this.Sg.zIndex = 2;

              this.Rg.addChild(this.Sg);

              this.Wg.zIndex = 3;

              this.Rg.addChild(this.Wg);

              this.Tg.alpha = 0.8;

              this.Tg.zIndex = 4;

              this.Rg.addChild(this.Tg);

              this.Ug.zIndex = 5;

              this.Rg.addChild(this.Ug);

              this.Vg.zIndex = 6;

              this.Rg.addChild(this.Vg);

              this.Jf();

            };

_0x166b7d.prototype.Jf = function () {

  var _0x2cb31c = this.ef.width();

  var _0x26fd21 = this.ef.height();

  

  // الإعدادات الافتراضية للعناصر

  var _0x66a94e = window.bbs.display.custom ? window.bbs.display.clock.x * _0x2cb31c : 0;

  var _0x4ae51a = window.bbs.display.custom ? window.bbs.display.clock.y * _0x26fd21 : 0;

  var _0x1327a5 = window.bbs.display.custom ? window.bbs.display.top.x * _0x2cb31c : _0x2cb31c - 255;

  var _0x1a81a9 = window.bbs.display.custom ? window.bbs.display.top.y * screen.height : 1;

  var _0x57718b = window.bbs.display.clock.rc ? _0x2d6cbb[window.bbs.display.clock.rc] : 0;

  var _0x3943bc = window.bbs.display.top.rt ? _0x2d6cbb[window.bbs.display.top.rt] : 0;

  

  var _0x29913b = window.devicePixelRatio ? window.devicePixelRatio : 1;

  var _0x977294 = _0x29913b * _0x2cb31c;

  var _0x1858e9 = _0x29913b * _0x26fd21;

  var _0x3a37f6 = Math.min(Math.min(_0x2cb31c, _0x26fd21), Math.max(_0x2cb31c, _0x26fd21) * 0.625);

  

  this.lf.resize(_0x2cb31c, _0x26fd21);

  this.lf.resolution = _0x29913b;

  this.Eb.width = _0x977294;

  this.Eb.height = _0x1858e9;

  this.Jg = _0x3a37f6;

  this.Xg.position.set(_0x2cb31c / 2, _0x26fd21 / 2);

  this.Xg.width = _0x2cb31c;

  this.Xg.height = _0x26fd21;

  

  // تطبيق إعدادات Screen Mode

  if (window.bbs.hudSettings && window.bbs.hudSettings.mode !== undefined) {

    var screenWidth = _0x2cb31c;

    var hudMode = window.bbs.hudSettings.mode;

    var hudWi = window.bbs.hudSettings.wi || 1;

    

    // حساب مواقع العناصر حسب الوضع المختار

    var clockX, infoX, topX;

    

    if (hudMode == 0) {

      // الوضع الافتراضي 100%

      clockX = 60 + _0x66a94e;

      infoX = 110;

      topX = _0x1327a5;

    } else if (hudMode == 1) {

      // وضع 75% 

      clockX = screenWidth / 2 + (60 + _0x66a94e) - screenWidth * hudWi;

      infoX = screenWidth / 2 + 110 - screenWidth * hudWi;

      topX = screenWidth / 2 - 225 + screenWidth * hudWi - 50;

} else if (hudMode == 2) {

  // وضع Center - ترتيب صحيح: الأسماء يساراً

  var centerX = screenWidth / 2; // مركز الشاشة = 674

  

  topX = centerX - 230;   // المتصدرين (الأسماء) يساراً: 474

  infoX = centerX;        // المعلومات في المنتصف: 674

  clockX = centerX + 110; // الساعة يميناً: 824

  

  console.log("Center positions - Top(أسماء):", topX, "Info:", infoX, "Clock:", clockX);

} else {

      // احتياطي للوضع الافتراضي

      clockX = 60 + _0x66a94e;

      infoX = 110;

      topX = _0x1327a5;

    }

    

    // تطبيق المواقع الجديدة

    this.Tg.position.set(clockX, 60 + _0x4ae51a + (_0x57718b ? this.Tg.height / 4 : 0));

    this.Ug.position.set(infoX, 10);

    this.Vg.position.set(topX, _0x1a81a9 + (_0x3943bc ? this.Vg.height : 0));

  } else {

    // الإعدادات الافتراضية في حالة عدم وجود hudSettings

    this.Tg.position.set(60 + _0x66a94e, 60 + _0x4ae51a + (_0x57718b ? this.Tg.height / 4 : 0));

    this.Ug.position.set(110, 10);

    this.Vg.position.set(_0x1327a5, _0x1a81a9 + (_0x3943bc ? this.Vg.height : 0));

  }

  

  this.Tg.rotation = _0x57718b;

  this.Vg.rotation = _0x3943bc;

};

            _0x166b7d.prototype.Uf = function (_0x1f0372, _0x51fe2e) {

              var _0x48f4fc = _0x1f8817;

              this.Ig = 15;

              this.Og.removeChildren();

              this.Pg.removeChildren();

              this.Qg.removeChildren();

              this.Sg.removeChildren();

              this.Lg.$g(_0x1f0372.xg === _0x232886.Ac.vg ? _0x48f4fc.xe._g : _0x48f4fc.xe.ah);

              var _0x134557 = this.Ng;

              _0x134557.clear();

              _0x134557.lineStyle(0.2, 16711680, 0.6);

              _0x134557.drawCircle(0, 0, _0x1f0372.zg);

              _0x134557.endFill();

              this.Vg.bh = _0x51fe2e;

              this.Sg.visible = _0x51fe2e;

            };

            _0x166b7d.prototype.Nf = function (_0x2c02a0, _0x3656be) {

              if (this.lf.width <= 5) {

                return;

              }

              var _0x30c644 = _0x1f8817;

              var _0x13eda4 = _0x30c644.dh.ch;

              var _0x573b52 = this.lf.width / this.lf.resolution;

              var _0x49601c = this.lf.height / this.lf.resolution;

              this.Ig = _0x39fe91.$F.Q(this.Ig, _0x30c644.dh.eh, _0x3656be, 0.002);

              var _0x314d35 = this.Jg / (this.Ig * _0x2614f5);

              var _0x89ec2e = _0x30c644.dh.ch.dd[_0x39fe91.$C.fd.qd];

              var _0x199a41 = _0x89ec2e != null && _0x89ec2e.hd;

              this.Kg = _0x39fe91.$F.P(this.Kg + _0x3656be / 1000 * ((_0x199a41 ? 1 : 0) * 0.1 - this.Kg), 0, 1);

              this.Xg.alpha = this.Kg;

              this.Fg = (this.Fg + _0x3656be * 0.01) % 360;

              this.Gg = Math.sin(_0x2c02a0 / 1200 * 2 * Math.PI);

              var _0x51c884 = _0x13eda4.fh();

              this.Yg.x = _0x39fe91.$F.R(this.Yg.x, _0x51c884.x, _0x3656be, 0.5, 33.333);

              this.Yg.y = _0x39fe91.$F.R(this.Yg.y, _0x51c884.y, _0x3656be, 0.5, 33.333);

              var _0x3a483d = _0x573b52 / _0x314d35 / 2;

              var _0xdf11bc = _0x49601c / _0x314d35 / 2;

              _0x30c644.dh.gh(this.Yg.x - _0x3a483d * 1.3, this.Yg.x + _0x3a483d * 1.3, this.Yg.y - _0xdf11bc * 1.3, this.Yg.y + _0xdf11bc * 1.3);

              if (!bbs.backgroundIsCustom) {

                this.Lg.Uf(this.Yg.x, this.Yg.y, _0x3a483d * 2, _0xdf11bc * 2);

              }

              var _0x3726f7 = _0x30c644.dh.hh.zg;

              this.mf.scale.set(_0x314d35, _0x314d35);

              this.mf.position.set(_0x573b52 / 2 - this.Yg.x * _0x314d35, _0x49601c / 2 - this.Yg.y * _0x314d35);

              var _0x5ba80 = Math.hypot(_0x51c884.x, _0x51c884.y);

              if (_0x5ba80 > _0x3726f7 - 10) {

                this.Hg = _0x39fe91.$F.P(1 + (_0x5ba80 - _0x3726f7) / 10, 0, 1);

                var _0x489544 = Math.cos(this.Fg * _0x39fe91.$V.F / 360) * (1 - this.Hg) + this.Hg * 1;

                var _0x29de24 = Math.sin(this.Fg * _0x39fe91.$V.F / 360) * (1 - this.Hg);

                var _0x35e773 = (Math.atan2(_0x29de24, _0x489544) + _0x39fe91.$V.F) % _0x39fe91.$V.F * 360 / _0x39fe91.$V.F;

                var _0x4ccdac = this.Hg * (0.5 + this.Gg * 0.5);

                var _0x585a66 = _0x39fe91.$F.Y(Math.floor(_0x35e773), 1, 0.75 - this.Hg * 0.25);

                this.Lg.Ec(_0x585a66[0], _0x585a66[1], _0x585a66[2], 0.1 + _0x4ccdac * 0.2);

              } else {

                this.Hg = 0;

                var _0x165a45 = _0x39fe91.$F.Y(Math.floor(this.Fg), 1, 0.75);

                this.Lg.Ec(_0x165a45[0], _0x165a45[1], _0x165a45[2], 0.1);

              }

              for (var _0x4c892c = 0; _0x4c892c < this.Sg.children.length; _0x4c892c++) {

                var _0x1bcd47 = this.Sg.children[_0x4c892c];

                _0x1bcd47.position.set(_0x573b52 / 2 - (this.Yg.x - _0x1bcd47.ih.x) * _0x314d35, _0x49601c / 2 - (this.Yg.y - _0x1bcd47.ih.y) * _0x314d35);

              }

              this.Tg.jh.position.x = _0x51c884.x / _0x3726f7 * this.Tg.kh;

              this.Tg.jh.position.y = _0x51c884.y / _0x3726f7 * this.Tg.kh;

              _wwcio.myLocation = this.Tg.jh;

              this.Ug.lh(_0x2c02a0);

              this.Wg.Uf(_0x2c02a0, _0x3656be);

              this.lf.render(this.mf, null, true);

              this.lf.render(this.Rg, null, false);

            };

            _0x166b7d.prototype.mh = function (_0x9153f, _0x214ecb) {

              _0x214ecb.nh.Cc.Qc().zIndex = (_0x9153f + 2147483648) / 4294967296 * 5000;

              this.Og.addChild(_0x214ecb.nh.Dc.Qc());

              this.Pg.addChild(_0x214ecb.nh.Cc.Qc());

            };

            _0x166b7d.prototype.oh = function (_0x51397a, _0x3898b2, _0x6dc31e) {

              _0x3898b2.nc.zIndex = _0x5d39d0().dh.hh.yg ? 0 : 10 + (_0x51397a + 32768) / 65536 * 5000;

              this.Qg.addChild(_0x3898b2.nc);

              if (_0x51397a != _0x5d39d0().dh.hh.yg) {

                this.Sg.addChild(_0x6dc31e);

              }

            };

            var _0x5a38cc = function () {

              return decoder.M(_0x429afb.Container, function () {

                _0x429afb.Container.call(this);

                this.kh = 40;

                this.qh = new _0x429afb.Sprite();

                this.qh.anchor.set(0.5);

                this.qh.alpha = 0.5;

                var _0x36537b = new _0x429afb.Graphics();

                _0x36537b.beginFill("black", 0.4);

                _0x36537b.drawCircle(0, 0, this.kh);

                _0x36537b.endFill();

                _0x36537b.lineStyle(1.5, 16225317);

                _0x36537b.drawCircle(0, 0, this.kh);

                _0x36537b.moveTo(0, -this.kh);

                _0x36537b.lineTo(0, +this.kh);

                _0x36537b.moveTo(-this.kh, 0);

                _0x36537b.lineTo(+this.kh, 0);

                _0x36537b.endFill();

                if (bbs.display.customClock) {

                  _0x36537b = new _0x429afb.Sprite();

                  _0x36537b.texture = new _0x429afb.Texture.from(bbs.display.customClock.file);

                  _0x36537b.width = this.kh * 2.75;

                  _0x36537b.height = this.kh * 2.75;

                  _0x36537b.anchor.set(0.5);

                }



            



                this.jh = new _0x429afb.Graphics();

                this.qh.alpha = 0.5;

                this.jh.zIndex = 2;

                this.jh.alpha = 0.9;

                this.jh.beginFill(0xFFFFFF);

                this.jh.drawCircle(0, 0, this.kh * 0.1);

                this.jh.endFill();

                this.jh.lineStyle(1.5, "white");

                this.jh.drawCircle(0, 0, this.kh * 0.1);

                this.addChild(_0x36537b);

                this.addChild(this.qh);

                this.addChild(this.jh);

                this.addChild(w2c2020.conteinerTeam);

              });

            }();

            

            

            var _0x2cec63 = function () {

              var _0xb23f0f = decoder.M(_0x429afb.Container, function () {

                _0x429afb.Container.call(this);

                this.rh = {};

              });

              _0xb23f0f.prototype.lh = function (_0x490003) {

                var _0x420e40 = 0.5 + Math.cos(_0x1c15a7.F * (_0x490003 / 1000 / 1.6)) * 0.5;

                for (var _0x4cad85 in this.rh) {

                  var _0x3ef82e = this.rh[_0x4cad85];

                  var _0x5ecdf9 = _0x3ef82e.sh;

                  _0x3ef82e.alpha = 1 - _0x5ecdf9 + _0x5ecdf9 * _0x420e40;

                }

              };

              _0xb23f0f.prototype.Uf = function (_0x3f8d0e) {

                for (var _0x3ab659 in this.rh) {

                  if (_0x3f8d0e[_0x3ab659] == null || !_0x3f8d0e[_0x3ab659].hd) {

                    decoder.U(this.rh[_0x3ab659]);

                    delete this.rh[_0x3ab659];

                  }

                }

                var _0x3f3e79 = 0;

                for (var _0x36d9be in _0x3f8d0e) {

                  var _0x5e00e4 = _0x3f8d0e[_0x36d9be];

                  if (_0x5e00e4.hd) {

                    var _0x538515 = this.rh[_0x36d9be];

                    if (!_0x538515) {

                      var _0x3f39f6 = _0x5d39d0().Lc.Ub().pb(_0x5e00e4.nd).ub;

                      _0x538515 = new _0x390ebd();

                      _0x538515.texture = _0x3f39f6.Ea();

                      _0x538515.width = 40;

                      _0x538515.height = 40;

                      this.rh[_0x36d9be] = _0x538515;

                      this.addChild(_0x538515);

                    }

                    _0x538515.sh = _0x5e00e4.od;

                    _0x538515.position.x = _0x3f3e79;

                    _0x3f3e79 += 40;

                  }

                }

              };

              var _0x390ebd = function () {

                return decoder.M(_0x429afb.Sprite, function () {

                  _0x429afb.Sprite.call(this);

                  this.sh = 0;

                });

              }();

              return _0xb23f0f;

            }();

            var _0x1b7628 = function () {

              var _0x23101f = decoder.M(_0x429afb.Container, function () {

                _0x429afb.Container.call(this);

                this.bh = true;

                this.th = 12;

                this.uh = 9;

                this.jg = [];

                for (var _0x37fa4b = 0; _0x37fa4b < 14; _0x37fa4b++) {

                  this.vh();

                }

              });

              _0x23101f.prototype.Uf = function (_0xc6e963) {

                var _0x4d1f77 = _0x5d39d0();

                var _0x412d6f = _0x4d1f77.dh.hh.xg === _0x232886.Ac.zc;

                var _0x1543ea = 0;

                var _0xdda9a8 = 0;

                if (_0xdda9a8 >= this.jg.length) {

                  this.vh();

                }

                this.jg[_0xdda9a8].wh(1, "white");

                this.jg[_0xdda9a8].xh("", decoder.H("index.game.leader.top10"), "(" + _0x4d1f77.dh.yh + " online)");

                this.jg[_0xdda9a8].position.y = _0x1543ea;

                _0x1543ea += this.th;

                _0xdda9a8 += 1;

                if (_0xc6e963.zh.length > 0) {

                  _0x1543ea += this.uh;

                }

                for (var _0x3a2cc3 = 0; _0x3a2cc3 < _0xc6e963.zh.length; _0x3a2cc3++) {

                  var _0x4ea242 = _0xc6e963.zh[_0x3a2cc3];

                  var _0x1ee0e4 = _0x4d1f77.Lc.Ub().jb(_0x4ea242.Ah);

                  var _0xa8230e = "";

                  var _0x3e6004 = _0x4d1f77.Lc.Xb().textDict[_0x1ee0e4.qb];

                  if (_0x3e6004 != null) {

                    _0xa8230e = decoder.I(_0x3e6004);

                  }

                  if (_0xdda9a8 >= this.jg.length) {

                    this.vh();

                  }

                  this.jg[_0xdda9a8].wh(0.8, _0x1ee0e4.rb.tb);

                  this.jg[_0xdda9a8].xh("" + (_0x3a2cc3 + 1), _0xa8230e, "" + Math.floor(_0x4ea242.Bh));

                  this.jg[_0xdda9a8].position.y = _0x1543ea;

                  _0x1543ea += this.th;

                  _0xdda9a8 += 1;

                }

                if (_0xc6e963.Ch.length > 0) {

                  _0x1543ea += this.uh;

                }

                for (var _0x5874db = 0; _0x5874db < _0xc6e963.Ch.length; _0x5874db++) {

                  var _0x8d7799 = _0xc6e963.Ch[_0x5874db];

                  var _0x5767ff = _0x4d1f77.dh.hh.yg == _0x8d7799.Dh;

                  var _0x257493;

                  var _0x3d4aa3;

                  if (_0x5767ff) {

                    _0x257493 = "white";

                    _0x3d4aa3 = _0x4d1f77.dh.ch.Eh.ma;

                  } else {

                    var _0x3bbf26 = _0x4d1f77.dh.Fh[_0x8d7799.Dh];

                    if (!_0x257493) {

                      _0x257493 = "white";

                    }

                    if (_0x3bbf26 != null) {

                      _0x257493 = _0x412d6f ? _0x4d1f77.Lc.Ub().jb(_0x3bbf26.Eh.Gh).rb.tb : _0x4d1f77.Lc.Ub().ib(_0x3bbf26.Eh.Hh).tb || _0x257493;

                      _0x3d4aa3 = this.bh && _0x309b30 ? _0x3bbf26.Eh.ma : "---";

                    } else {

                      _0x257493 = "gray";

                      _0x3d4aa3 = "?";

                    }

                  }

                  if (_0x5767ff) {

                    _0x1543ea += this.uh;

                  }

                  if (_0xdda9a8 >= this.jg.length) {

                    this.vh();

                  }

                  this.jg[_0xdda9a8].wh(_0x5767ff ? 1 : 0.8, _0x257493);

                  this.jg[_0xdda9a8].xh("" + (_0x5874db + 1), _0x3d4aa3, "" + Math.floor(_0x8d7799.Bh));

                  this.jg[_0xdda9a8].position.y = _0x1543ea;

                  _0x1543ea += this.th;

                  _0xdda9a8 += 1;

                  if (_0x5767ff) {

                    _0x1543ea += this.uh;

                  }

                  if (window.bbs.lr && _0x5874db === 2) {

                    break;

                  }

                }

                if (_0x4d1f77.dh.Ih > (window.bbs.lr ? 3 : _0xc6e963.Ch.length)) {

                  _0x1543ea += this.uh;

                  if (_0xdda9a8 >= this.jg.length) {

                    this.vh();

                  }

                  this.jg[_0xdda9a8].wh(1, "white");

                  this.jg[_0xdda9a8].xh("" + _0x4d1f77.dh.Ih, _0x4d1f77.dh.ch.Eh.ma, "" + Math.floor(_0x4d1f77.dh.ch.Bh));

                  this.jg[_0xdda9a8].position.y = _0x1543ea;

                  _0x1543ea += this.th;

                  _0xdda9a8 += 1;

                  _0x1543ea += this.uh;

                }

                while (this.jg.length > _0xdda9a8) {

                  decoder.U(this.jg.pop());

                }

              };

              _0x23101f.prototype.vh = function () {

                var _0x1ec84f = new _0x5a887c();

                _0x1ec84f.position.y = 0;

                if (this.jg.length > 0) {

                  _0x1ec84f.position.y = this.jg[this.jg.length - 1].position.y + this.th;

                }

                this.jg.push(_0x1ec84f);

                this.addChild(_0x1ec84f);

              };

              var _0x5a887c = function () {

                var _0x21872b = decoder.M(_0x429afb.Container, function () {

                  _0x429afb.Container.call(this);

                  this.Jh = new _0x429afb.Text("", {

                    fontFamily: "PTSans",

                    fontSize: 12,

                    fill: "white"

                  });

                  this.Jh.anchor.x = 1;

                  this.Jh.position.x = 30;

                  this.addChild(this.Jh);

                  this.Kh = new _0x429afb.Text("", {

                    fontFamily: "PTSans",

                    fontSize: 12,

                    fill: "white"

                  });

                  this.Kh.anchor.x = 0;

                  this.Kh.position.x = 35;

                  this.addChild(this.Kh);

                  this.Lh = new _0x429afb.Text("", {

                    fontFamily: "PTSans",

                    fontSize: 12,

                    fill: "white"

                  });

                  this.Lh.anchor.x = 1;

                  this.Lh.position.x = 250;

                  this.addChild(this.Lh);

                });

                _0x21872b.prototype.xh = function (_0x5899f1, _0x13f3dc, _0x25954b) {

                  this.Jh.text = _0x5899f1;

                  this.Lh.text = _0x25954b;

                  this.Kh.text = _0x13f3dc;

                };

                _0x21872b.prototype.wh = function (_0x671954, _0xd1d009) {

                  this.Jh.alpha = _0x671954;

                  this.Jh.style.fill = _0xd1d009;

                  this.Kh.alpha = _0x671954;

                  this.Kh.style.fill = _0xd1d009;

                  this.Lh.alpha = _0x671954;

                  this.Lh.style.fill = _0xd1d009;

                };

                return _0x21872b;

              }();

              return _0x23101f;

            }();

            return _0x166b7d;

          }();

          _0x232886.MessageProcessor = function () {

            function _0x1e2f42(_0x21c80e) {

              this.dh = _0x21c80e;

              this.Nh = [];

              this.Oh = 0;

            }

            _0x1e2f42.prototype.Ph = function (_0x39e14b) {

              this.Nh.push(new DataView(_0x39e14b));

            };

            _0x1e2f42.prototype.Qh = function () {

              this.Nh = [];

              this.Oh = 0;

            };

            _0x1e2f42.prototype.Rh = function () {

              for (var _0x120918 = 0; _0x120918 < 16; _0x120918++) {

                if (this.Nh.length === 0) {

                  return;

                }

                var _0x2e9b91 = this.Nh.shift();

                try {

                  this.Sh(_0x2e9b91);

                } catch (_0x34e998) {

                  throw _0x34e998;

                }

              }

            };

            _0x1e2f42.prototype.Sh = function (_0x10bd9e) {

              switch (_0x10bd9e.ba(0) & 255) {

                case 0:

                  this.Th(_0x10bd9e, 1);

                  return;

                case 1:

                  this.Uh(_0x10bd9e, 1);

                  return;

                case 2:

                  this.Vh(_0x10bd9e, 1);

                  return;

                case 3:

                  this.Wh(_0x10bd9e, 1);

                  return;

                case 4:

                  this.Xh(_0x10bd9e, 1);

                  return;

                case 5:

                  this.Yh(_0x10bd9e, 1);

                  return;

              }

            };

            _0x1e2f42.prototype.Th = function (_0x16dabd, _0x205499) {

              this.dh.hh.xg = _0x16dabd.ba(_0x205499);

              _0x205499 += 1;

              var _0x15f01e = _0x16dabd.ca(_0x205499);

              _0x205499 += 2;

              this.dh.hh.yg = _0x15f01e;

              this.dh.ch.Eh.ae = _0x15f01e;

              this.dh.hh.zg = _0x16dabd.ea(_0x205499);

              _0x205499 += 4;

              this.dh.hh.Ag = _0x16dabd.ea(_0x205499);

              _0x205499 += 4;

              this.dh.hh.Bg = _0x16dabd.ea(_0x205499);

              _0x205499 += 4;

              _0x5d39d0().og.af.ng.Uf(this.dh.hh, _0x5d39d0().og.$h.Zh());

              return _0x205499;

            };

            _0x1e2f42.prototype.Uh = function (_0x617c1d, _0x1db386) {

              var _0x548bba = this.Oh++;

              var _0x4b685f = _0x617c1d.ca(_0x1db386);

              _0x1db386 += 2;

              var _0x2ae025 = undefined;

              _0x2ae025 = this._h(_0x617c1d, _0x1db386);

              _0x1db386 += this.ai(_0x2ae025);

              for (var _0x50d859 = 0; _0x50d859 < _0x2ae025; _0x50d859++) {

                _0x1db386 = this.bi(_0x617c1d, _0x1db386);

              }

              _0x2ae025 = this._h(_0x617c1d, _0x1db386);

              _0x1db386 += this.ai(_0x2ae025);

              for (var _0x52ae6b = 0; _0x52ae6b < _0x2ae025; _0x52ae6b++) {

                _0x1db386 = this.ci(_0x617c1d, _0x1db386);

              }

              _0x2ae025 = this._h(_0x617c1d, _0x1db386);

              _0x1db386 += this.ai(_0x2ae025);

              for (var _0x4b4532 = 0; _0x4b4532 < _0x2ae025; _0x4b4532++) {

                _0x1db386 = this.di(_0x617c1d, _0x1db386);

              }

              _0x2ae025 = this._h(_0x617c1d, _0x1db386);

              _0x1db386 += this.ai(_0x2ae025);

              for (var _0x11297d = 0; _0x11297d < _0x2ae025; _0x11297d++) {

                _0x1db386 = this.ei(_0x617c1d, _0x1db386);

              }

              _0x2ae025 = this._h(_0x617c1d, _0x1db386);

              _0x1db386 += this.ai(_0x2ae025);

              for (var _0x250ca1 = 0; _0x250ca1 < _0x2ae025; _0x250ca1++) {

                _0x1db386 = this.fi(_0x617c1d, _0x1db386);

              }

              _0x2ae025 = this._h(_0x617c1d, _0x1db386);

              _0x1db386 += this.ai(_0x2ae025);

              for (var _0x35c976 = 0; _0x35c976 < _0x2ae025; _0x35c976++) {

                _0x1db386 = this.gi(_0x617c1d, _0x1db386);

              }

              _0x2ae025 = this._h(_0x617c1d, _0x1db386);

              _0x1db386 += this.ai(_0x2ae025);

              for (var _0x1688c2 = 0; _0x1688c2 < _0x2ae025; _0x1688c2++) {

                _0x1db386 = this.hi(_0x617c1d, _0x1db386);

              }

              _0x2ae025 = this._h(_0x617c1d, _0x1db386);

              _0x1db386 += this.ai(_0x2ae025);

              for (var _0x632bc3 = 0; _0x632bc3 < _0x2ae025; _0x632bc3++) {

                _0x1db386 = this.ii(_0x617c1d, _0x1db386);

              }

              if (_0x548bba > 0) {

                _0x1db386 = this.ji(_0x617c1d, _0x1db386);

              }

              this.dh.ki(_0x548bba, _0x4b685f);

              return _0x1db386;

            };

            _0x1e2f42.prototype.ei = function (_0x543865, _0x32b32e) {

              var _0x2a1879 = new _0x232886.Worm.li();

              _0x2a1879.ae = _0x543865.ca(_0x32b32e);

              _0x32b32e += 2;

              _0x2a1879.Gh = this.dh.hh.xg === _0x232886.Ac.zc ? _0x543865.ba(_0x32b32e++) : _0x39fe91.ps ? _0x39fe91.ps : _0x232886.GameParams.Cg;

              _0x2a1879.Hh = _0x543865.ca(_0x32b32e);

              _0x39fe91.p("Hh|lj", _0x32b32e);

              _0x32b32e += 2;

              _0x2a1879.ni = _0x543865.ca(_0x32b32e);

              _0x39fe91.p("ni|mj", _0x32b32e);

              _0x32b32e += 2;

              _0x2a1879.oi = _0x543865.ca(_0x32b32e);

              _0x39fe91.p("oi|nj", _0x32b32e);

              _0x32b32e += 2;

              _0x2a1879.pi = _0x543865.ca(_0x32b32e);

              _0x39fe91.p("pi|pj", _0x32b32e);

              _0x32b32e += 2;

              _0x2a1879.qi = _0x543865.ca(_0x32b32e);

              _0x39fe91.p("qi|oj", _0x32b32e);

              _0x32b32e += 2;

              var _0x546ff9 = _0x543865.ba(_0x32b32e);

              _0x32b32e += 1;

              var _0xbc668e = "";

              for (var _0x49b213 = 0; _0x49b213 < _0x546ff9; _0x49b213++) {

                _0xbc668e += String.fromCharCode(_0x543865.ca(_0x32b32e));

                _0x32b32e += 2;

              }

              _0x2a1879.ma = _0xbc668e;

              if (this.dh.hh.yg === _0x2a1879.ae) {

                var _0x536488 = Object.keys(_0x39fe91.pm);

                _0x536488.forEach(function (_0x5c4b58) {

                  _0x2a1879[_0x5c4b58] = window.bbs.PropertyManager[_0x39fe91.pm[_0x5c4b58].p];

                  _0x543865.setInt16(_0x39fe91.pm[_0x5c4b58].i, _0x2a1879[_0x5c4b58]);

                });

                this.dh.ch.ri(_0x2a1879);

                _wwc.startGame();

                _wwcio.connect(_0x2a1879);

              } else {

                var _0x678981 = this.dh.Fh[_0x2a1879.ae];

                if (_0x678981 != null) {

                  _0x678981.si();

                }

                var _0x4fe3cb = new _0x232886.Worm(this.dh.hh);

                _0x4fe3cb.ti(_0x5d39d0().og.af.ng);

                this.dh.Fh[_0x2a1879.ae] = _0x4fe3cb;

                _0x4fe3cb.ri(_0x2a1879);

              }

              _0x39fe91.ae(_0x543865, _0x2a1879, this);

              return _0x32b32e;

            };

            _0x1e2f42.prototype.fi = function (_0xf3ef82, _0x4018de) {

              var _0x1693b8 = _0xf3ef82.ca(_0x4018de);

              _0x4018de += 2;

              var _0x87188c = _0xf3ef82.ba(_0x4018de);

              _0x4018de++;

              var _0x39427e = !!(_0x87188c & 1);

              var _0x2c90dd = !!(_0x87188c & 2);

              var _0x5aae28 = 0;

              if (_0x39427e) {

                _0x5aae28 = _0xf3ef82.ca(_0x4018de);

                _0x4018de += 2;

              }

              var _0x4696fe = this.vi(_0x1693b8);

              if (_0x4696fe === undefined) {

                return _0x4018de;

              }

              _0x4696fe.wi = false;

              if (!_0x4696fe.xi) {

                return _0x4018de;

              }

              var _0x19d403 = this.vi(_0x1693b8);

              if (_0x39427e && _0x19d403 !== undefined && _0x19d403.xi) {

                if (_0x5aae28 === this.dh.hh.yg) {

                  var _0x5b7340 = this.dh.ch.fh();

                  var _0x29ab0a = _0x4696fe.yi(_0x5b7340.x, _0x5b7340.y);

                  Math.max(0, 1 - _0x29ab0a.distance / (this.dh.eh * 0.5));

                  if (_0x29ab0a.distance < this.dh.eh * 0.5) {

                    var _0x479a1d = _0x5d39d0().og.af.ng.Wg;

                    _0x479a1d.mg(_0x2c90dd);

                    _wwcio["update"](_0x87188c, _0x2c90dd);

                  }

                } else if (_0x1693b8 === this.dh.hh.yg) ;else {

                  var _0x2b74f2 = this.dh.ch.fh();

                  var _0x2fa84c = _0x4696fe.yi(_0x2b74f2.x, _0x2b74f2.y);

                  Math.max(0, 1 - _0x2fa84c.distance / (this.dh.eh * 0.5));

                }

              } else if (_0x1693b8 === this.dh.hh.yg) ;else {

                var _0x1206b9 = this.dh.ch.fh();

                var _0x5a2924 = _0x4696fe.yi(_0x1206b9.x, _0x1206b9.y);

                Math.max(0, 1 - _0x5a2924.distance / (this.dh.eh * 0.5));

              }

              return _0x4018de;

            };

            _0x1e2f42.prototype.ii = function (_0x3d7cf7, _0x112232) {

              var _0x3291d9 = _0x3d7cf7.ca(_0x112232);

              _0x112232 += 2;

              var _0x2ac57a = _0x3291d9 === this.dh.hh.yg ? null : this.dh.Fh[_0x3291d9];

              var _0x4ea92a = _0x3d7cf7.ba(_0x112232);

              _0x112232 += 1;

              var _0x4d0c46 = !!(_0x4ea92a & 1);

              if (_0x4ea92a & 2) {

                var _0x55227f = _0x3d7cf7.ea(_0x112232);

                _0x112232 += 4;

                if (_0x2ac57a) {

                  _0x2ac57a.zi(_0x55227f);

                }

              }

              var _0x3c8051 = this.Ai(_0x3d7cf7.ba(_0x112232++), _0x3d7cf7.ba(_0x112232++), _0x3d7cf7.ba(_0x112232++));

              var _0x24f967 = this.Ai(_0x3d7cf7.ba(_0x112232++), _0x3d7cf7.ba(_0x112232++), _0x3d7cf7.ba(_0x112232++));

              if (_0x2ac57a) {

                _0x2ac57a.Bi(_0x3c8051, _0x24f967, _0x4d0c46);

                var _0x2794f0 = this.dh.ch.fh();

                var _0x34afef = _0x2ac57a.fh();

                var _0x11ff9a = Math.max(0, 1 - Math.hypot(_0x2794f0.x - _0x34afef.x, _0x2794f0.y - _0x34afef.y) / (this.dh.eh * 0.5));

                _0x5d39d0().Ci.Ye(_0x11ff9a, _0x3291d9, _0x4d0c46);

              }

              var _0x3a75c9 = this._h(_0x3d7cf7, _0x112232);

              _0x112232 += this.ai(_0x3a75c9);

              if (_0x2ac57a) {

                for (var _0x3160d3 in _0x2ac57a.dd) {

                  var _0x13f3ea = _0x2ac57a.dd[_0x3160d3];

                  if (_0x13f3ea) {

                    _0x13f3ea.hd = false;

                  }

                }

              }

              for (var _0x943e00 = 0; _0x943e00 < _0x3a75c9; _0x943e00++) {

                var _0xb77f6a = _0x3d7cf7.ba(_0x112232);

                _0x112232++;

                var _0x1985d1 = _0x3d7cf7.ba(_0x112232);

                _0x112232++;

                if (_0x2ac57a) {

                  var _0x499e25 = _0x2ac57a.dd[_0xb77f6a];

                  _0x499e25 ||= _0x2ac57a.dd[_0xb77f6a] = new _0x232886.fd(_0xb77f6a);

                  _0x499e25.hd = true;

                  _0x499e25.od = Math.min(1, Math.max(0, _0x1985d1 / 100));

                }

              }

              return _0x112232;

            };

            _0x1e2f42.prototype.ji = function (_0x34c5bb, _0x1f5137) {

              var _0x2812e8 = this.dh.ch;

              var _0x46e023 = _0x34c5bb.ba(_0x1f5137);

              _0x1f5137 += 1;

              var _0x1983d6 = !!(_0x46e023 & 1);

              var _0x305a54 = !!(_0x46e023 & 2);

              var _0x2f2b71 = !!(_0x46e023 & 4);

              if (_0x305a54) {

                var _0x39c04f = _0x2812e8.Bh;

                _0x2812e8.zi(_0x34c5bb.ea(_0x1f5137));

                _0x1f5137 += 4;

                _0x39c04f = _0x2812e8.Bh - _0x39c04f;

                if (_0x39c04f > 0) {

                  _0x5d39d0().og.af.ng.Wg.lg(_0x39c04f);

                }

              }

              if (_0x2f2b71) {

                this.dh.Di = _0x34c5bb.ea(_0x1f5137);

                _0x1f5137 += 4;

              }

              var _0x4d6afa = this.Ai(_0x34c5bb.ba(_0x1f5137++), _0x34c5bb.ba(_0x1f5137++), _0x34c5bb.ba(_0x1f5137++));

              var _0xc2625d = this.Ai(_0x34c5bb.ba(_0x1f5137++), _0x34c5bb.ba(_0x1f5137++), _0x34c5bb.ba(_0x1f5137++));

              _0x2812e8.Bi(_0x4d6afa, _0xc2625d, _0x1983d6);

              _0x5d39d0().Ci.Ye(0.5, this.dh.hh.yg, _0x1983d6);

              var _0x1ca179 = this._h(_0x34c5bb, _0x1f5137);

              _0x1f5137 += this.ai(_0x1ca179);

              for (var _0x5ed314 in _0x2812e8.dd) {

                var _0x5318a8 = _0x2812e8.dd[_0x5ed314];

                if (_0x5318a8) {

                  _0x5318a8.hd = false;

                }

              }

              for (var _0x7d52cb = 0; _0x7d52cb < _0x1ca179; _0x7d52cb++) {

                var _0x47163c = _0x34c5bb.ba(_0x1f5137);

                _0x1f5137++;

                var _0x740be8 = _0x34c5bb.ba(_0x1f5137);

                _0x1f5137++;

                var _0x1ef80c = _0x2812e8.dd[_0x47163c];

                if (!_0x1ef80c) {

                  _0x1ef80c = new _0x232886.fd(_0x47163c);

                  _0x2812e8.dd[_0x47163c] = _0x1ef80c;

                }

                _0x1ef80c.hd = true;

                _0x1ef80c.od = Math.min(1, Math.max(0, _0x740be8 / 100));

              }

              _0x5d39d0().og.af.ng.Ug.Uf(_0x2812e8.dd);

            };

            _0x1e2f42.prototype.gi = function (_0x142f88, _0x5bcc37) {

              var _0x39cfeb = this;

              var _0x3b1dc8 = _0x142f88.ca(_0x5bcc37);

              _0x5bcc37 += 2;

              var _0x4d63b7 = this.vi(_0x3b1dc8);

              var _0x68307d = _0x142f88.ea(_0x5bcc37);

              _0x5bcc37 += 4;

              var _0x37c09d = this._h(_0x142f88, _0x5bcc37);

              _0x5bcc37 += this.ai(_0x37c09d);

              if (_0x4d63b7) {

                _0x4d63b7.zi(_0x68307d);

                _0x4d63b7.Ei(function () {

                  return _0x39cfeb.Ai(_0x142f88.ba(_0x5bcc37++), _0x142f88.ba(_0x5bcc37++), _0x142f88.ba(_0x5bcc37++));

                }, _0x37c09d);

                _0x4d63b7.kd(true);

                var _0x683766 = this.dh.ch.fh();

                var _0x4cf240 = _0x4d63b7.fh();

                var _0xa77bb0 = Math.max(0, 1 - Math.hypot(_0x683766.x - _0x4cf240.x, _0x683766.y - _0x4cf240.y) / (this.dh.eh * 0.5));

                _0x5d39d0().Ci.We(_0xa77bb0, _0x3b1dc8);

              } else {

                _0x5bcc37 += _0x37c09d * 6;

              }

              return _0x5bcc37;

            };

            _0x1e2f42.prototype.hi = function (_0x8a8eda, _0x144831) {

              var _0x5a017a = _0x8a8eda.ca(_0x144831);

              _0x144831 += 2;

              var _0x244b95 = this.dh.Fh[_0x5a017a];

              if (_0x244b95 && _0x244b95.wi) {

                _0x244b95.kd(false);

              }

              _0x5d39d0().Ci.Xe(_0x5a017a);

              return _0x144831;

            };

            _0x1e2f42.prototype.bi = function (_0x42a75f, _0x51c661) {

              var _0x28b7b5 = new _0x232886.Fi.li();

              _0x28b7b5.ae = _0x42a75f.da(_0x51c661);

              _0x51c661 += 4;

              _0x28b7b5.Gh = this.dh.hh.xg === _0x232886.Ac.zc ? _0x42a75f.ba(_0x51c661++) : _0x39fe91.ps ? _0x39fe91.ps : _0x232886.GameParams.Cg;

              _0x28b7b5.Gi = this.Ai(_0x42a75f.ba(_0x51c661++), _0x42a75f.ba(_0x51c661++), _0x42a75f.ba(_0x51c661++));

              _0x28b7b5.Hh = _0x42a75f.ba(_0x51c661++);

              var _0x4b37ae = this.dh.Hi[_0x28b7b5.ae];

              if (_0x4b37ae != null) {

                _0x4b37ae.si();

              }

              var _0xa7cdb3 = new _0x232886.Fi(_0x28b7b5, _0x5d39d0().og.af.ng);

              _0xa7cdb3.Ii(this.Ji(_0x28b7b5.ae), this.Ki(_0x28b7b5.ae), true);

              this.dh.Hi[_0x28b7b5.ae] = _0xa7cdb3;

              return _0x51c661;

            };

            _0x1e2f42.prototype.ci = function (_0x28636d, _0x339332) {

              var _0x44fcc4 = _0x28636d.da(_0x339332);

              _0x339332 += 4;

              var _0x5132ca = this.dh.Hi[_0x44fcc4];

              if (_0x5132ca) {

                _0x5132ca.Li = 0;

                _0x5132ca.Mi = _0x5132ca.Mi * 1.5;

                _0x5132ca.Ni = true;

              }

              return _0x339332;

            };

            _0x1e2f42.prototype.di = function (_0xd9b45d, _0x25f427) {

              var _0x350980 = _0xd9b45d.da(_0x25f427);

              _0x25f427 += 4;

              var _0xf6f70e = _0xd9b45d.ca(_0x25f427);

              _0x25f427 += 2;

              var _0x336feb = this.dh.Hi[_0x350980];

              if (_0x336feb) {

                _0x336feb.Li = 0;

                _0x336feb.Mi = _0x336feb.Mi * 0.1;

                _0x336feb.Ni = true;

                var _0x5db851 = this.vi(_0xf6f70e);

                if (_0x5db851 && _0x5db851.xi) {

                  this.dh.hh.yg;

                  var _0x30dcf6 = _0x5db851.fh();

                  _0x336feb.Ii(_0x30dcf6.x, _0x30dcf6.y, false);

                }

              }

              return _0x25f427;

            };

            var _0x100b69 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];

            _0x1e2f42.prototype.Vh = function (_0x4a5f2f) {

              var _0xfed2ef = _0x5d39d0().Lc.Zb().Fb;

              var _0x57273e = _0xfed2ef.getImageData(0, 0, 80, 80);

              var _0x54a303 = _0x100b69[0];

              var _0x19e013 = 80 - _0x54a303;

              var _0x5f0122 = 0;

              for (var _0x183f50 = 0; _0x183f50 < 628; _0x183f50++) {

                var _0x4852a0 = _0x4a5f2f.ba(1 + _0x183f50);

                for (var _0x1bdf1e = 0; _0x1bdf1e < 8; _0x1bdf1e++) {

                  var _0x3ebaa3 = (_0x4852a0 >> _0x1bdf1e & 1) != 0;

                  var _0x4b3418 = (_0x54a303 + _0x5f0122 * 80) * 4;

                  if (_0x3ebaa3) {

                    _0x57273e.data[_0x4b3418] = 255;

                    _0x57273e.data[_0x4b3418 + 1] = 255;

                    _0x57273e.data[_0x4b3418 + 2] = 255;

                    _0x57273e.data[_0x4b3418 + 3] = 255;

                  } else {

                    _0x57273e.data[_0x4b3418 + 3] = 0;

                  }

                  if (++_0x54a303 >= _0x19e013 && ++_0x5f0122 < 80) {

                    _0x54a303 = _0x100b69[_0x5f0122];

                    _0x19e013 = 80 - _0x54a303;

                  }

                }

              }

              _0xfed2ef.putImageData(_0x57273e, 0, 0);

              if (_wwcio.player && _wwcio.player.teamRoom) {

                _wwcio.sendLocation({

                  x: _wwcio.myLocation.position.x,

                  y: _wwcio.myLocation.position.y

                });

              }

              var _0x22da43 = _0x5d39d0().og.af.ng.Tg.qh;

              _0x22da43.texture = _0x5d39d0().Lc.Zb().oa;

              _0x22da43.texture.update();

            };

            _0x1e2f42.prototype.Xh = function (_0x541187, _0x48ff2d) {

              _0x541187.da(_0x48ff2d);

            };

            _0x1e2f42.prototype.Yh = function (_0x24e854, _0x24350f) {

              this.dh.Oi();

            };

            _0x1e2f42.prototype.Wh = function (_0xe47cac, _0x2ce6ab) {

              this.dh.yh = _0xe47cac.ca(_0x2ce6ab);

              _0x2ce6ab += 2;

              this.dh.Ih = _0xe47cac.ca(_0x2ce6ab);

              _0x2ce6ab += 2;

              var _0x335996 = new _0x232886.Pi();

              _0x335996.Ch = [];

              for (var _0x47b600 = _0xe47cac.ba(_0x2ce6ab++), _0x1d8401 = 0; _0x1d8401 < _0x47b600; _0x1d8401++) {

                var _0xf77898 = _0xe47cac.ca(_0x2ce6ab);

                _0x2ce6ab += 2;

                var _0xbede2d = _0xe47cac.ea(_0x2ce6ab);

                _0x2ce6ab += 4;

                _0x335996.Ch.push(_0x232886.Pi.Qi(_0xf77898, _0xbede2d));

              }

              _0x335996.zh = [];

              if (this.dh.hh.xg === _0x232886.Ac.zc) {

                for (var _0x5229bd = _0xe47cac.ba(_0x2ce6ab++), _0x4f2722 = 0; _0x4f2722 < _0x5229bd; _0x4f2722++) {

                  var _0x3274f4 = _0xe47cac.ba(_0x2ce6ab);

                  _0x2ce6ab += 1;

                  var _0x32a3ed = _0xe47cac.ea(_0x2ce6ab);

                  _0x2ce6ab += 4;

                  _0x335996.zh.push(_0x232886.Pi.Ri(_0x3274f4, _0x32a3ed));

                }

              }

              _0x5d39d0().og.af.ng.Vg.Uf(_0x335996);

            };

            _0x1e2f42.prototype.vi = function (_0x2df30a) {

              if (_0x2df30a === this.dh.hh.yg) {

                return this.dh.ch;

              } else {

                return this.dh.Fh[_0x2df30a];

              }

            };

            _0x1e2f42.prototype.Ai = function (_0x5ec0f4, _0x192c87, _0x2ec33a) {

              return (((_0x2ec33a & 255 | _0x192c87 << 8 & 65280 | _0x5ec0f4 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;

            };

            _0x1e2f42.prototype.Ji = function (_0xc811aa) {

              return ((_0xc811aa & 65535) / 32768 - 1) * this.dh.hh.Dg();

            };

            _0x1e2f42.prototype.Ki = function (_0x18aa74) {

              return ((_0x18aa74 >> 16 & 65535) / 32768 - 1) * this.dh.hh.Dg();

            };

            _0x1e2f42.prototype._h = function (_0x76c224, _0x2b76b8) {

              var _0x48af26 = _0x76c224.ba(_0x2b76b8);

              if ((_0x48af26 & 128) == 0) {

                return _0x48af26;

              }

              var _0x293eca = _0x76c224.ba(_0x2b76b8 + 1);

              if ((_0x293eca & 128) == 0) {

                return _0x293eca | _0x48af26 << 7 & 16256;

              }

              var _0x196054 = _0x76c224.ba(_0x2b76b8 + 2);

              if ((_0x196054 & 128) == 0) {

                return _0x196054 | _0x293eca << 7 & 16256 | _0x48af26 << 14 & 2080768;

              }

              var _0x47a3e4 = _0x76c224.ba(_0x2b76b8 + 3);

              if ((_0x47a3e4 & 128) == 0) {

                return _0x47a3e4 | _0x196054 << 7 & 16256 | _0x293eca << 14 & 2080768 | _0x48af26 << 21 & 266338304;

              } else {

                return undefined;

              }

            };

            _0x1e2f42.prototype.ai = function (_0x1e788d) {

              if (_0x1e788d < 128) {

                return 1;

              } else if (_0x1e788d < 16384) {

                return 2;

              } else if (_0x1e788d < 2097152) {

                return 3;

              } else if (_0x1e788d < 268435456) {

                return 4;

              } else {

                return undefined;

              }

            };

            return _0x1e2f42;

          }();

          _0x232886.Si = function () {

            function _0x132892(_0x1bd008) {

              this.Ti = _0x1bd008;

            }

            _0x132892.Ui = function () {

              return new _0x232886.Si(null);

            };

            _0x132892.Vi = function (_0x58e6ba) {

              return new _0x232886.Si(_0x58e6ba);

            };

            _0x132892.prototype.bc = function () {

              return this.Ti;

            };

            _0x132892.prototype.Wi = function () {

              return this.Ti != null;

            };

            _0x132892.prototype.Xi = function (_0xac9ca7) {

              if (this.Ti != null) {

                _0xac9ca7(this.Ti);

              }

            };

            return _0x132892;

          }();

          _0x232886.Fi = function () {

            function _0xe116e8(_0x5b2167, _0x2e5308) {

              this.Eh = _0x5b2167;

              this.Yi = _0x5b2167.Hh >= 80;

              this.Zi = 0;

              this.$i = 0;

              this._i = 0;

              this.aj = 0;

              this.Mi = this.Yi ? 1 : _0x5b2167.Gi;

              this.Li = 1;

              this.Ni = false;

              this.bj = 0;

              this.cj = 0;

              this.dj = 1;

              this.ej = Math.random() * 6.283185307179586;

              this.fj = new _0x232886.PortionSpriteTree();

              this.fj.yc(_0x5d39d0().dh.hh.xg, this.Eh.Gh === _0x232886.GameParams.Cg ? null : _0x5d39d0().Lc.Ub().jb(this.Eh.Gh), _0x5d39d0().Lc.Ub().ob(this.Eh.Hh));

              _0x2e5308.mh(_0x5b2167.ae, this.fj);

            }

            _0xe116e8.prototype.si = function () {

              this.fj.nh.Dc.Rc();

              this.fj.nh.Cc.Rc();

              this.fj.nh.Dc.xc.width = 100;

              this.fj.nh.Dc.xc.height = 100;

            };

            _0xe116e8.prototype.Ii = function (_0x13cfeb, _0x3729f1, _0x4b8ea0) {

              this.Zi = _0x13cfeb;

              this.$i = _0x3729f1;

              if (_0x4b8ea0) {

                this._i = _0x13cfeb;

                this.aj = _0x3729f1;

              }

            };

            _0xe116e8.prototype.hj = function (_0x2df0a1, _0x773b05) {

              var _0x5b4250 = Math.min(0.5, this.Mi * 1);

              var _0x1ca45e = Math.min(2.5, this.Mi * 1.5);

              this.bj = decoder.Q(this.bj, _0x5b4250, _0x773b05, 0.0025);

              this.cj = decoder.Q(this.cj, _0x1ca45e, _0x773b05, 0.0025);

              this.dj = decoder.Q(this.dj, this.Li, _0x773b05, 0.0025);

            };

            _0xe116e8.prototype.ij = function (_0x10c818, _0x57feb1, _0x2d555f) {

              this._i = decoder.Q(this._i, this.Zi, _0x57feb1, 0.0025);

              this.aj = decoder.Q(this.aj, this.$i, _0x57feb1, 0.0025);

              this.fj.Uf(this, _0x10c818, _0x57feb1, _0x2d555f);

            };

            _0xe116e8.li = function () {

              function _0x518326() {

                this.me = 0;

                this.ae = 0;

                this.Gh = _0x39fe91.ps ? _0x39fe91.ps : _0x232886.GameParams.Cg;

                this.Gi = 0;

                this.Hh = 0;

              }

              return _0x518326;

            }();

            return _0xe116e8;

          }();

          _0x232886.PortionSpriteTree = function () {

            var _0x481824 = 500;

            var _0x356560 = 100;

            function _0x4edf90() {

              this.nh = new _0x341920(new _0x232886.sc(), new _0x232886.sc());

              this.nh.Dc.xc.blendMode = _0x429afb.v.z;

              this.nh.Dc.xc.zIndex = _0x356560;

              this.nh.Cc.xc.zIndex = _0x481824;

            }

            _0x4edf90.prototype.yc = function (_0x5f457e, _0x3728af, _0x33927e) {

              var _0x5675a4 = _0x33927e.ub;

              if (_0x5675a4) {

                this.nh.Cc.Bc(_0x5675a4);

              }

              var _0x177a38 = _0x5f457e === _0x232886.Ac.zc && _0x3728af ? _0x3728af.sb.vb : _0x33927e.vb;

              if (_0x177a38) {

                this.nh.Dc.Bc(_0x177a38);

              }

            };

            _0x4edf90.prototype.Uf = function (_0x5430d4, _0x46a02b, _0x1faf34, _0x292edc) {

              if (!_0x292edc(_0x5430d4._i, _0x5430d4.aj)) {

                this.nh.Uc();

              } else {

                var _0x448352 = _0x2614f5 > 1 ? _0x2614f5 / 5 : 0;

                var _0x1f8bfb = _0x5430d4.cj * 1 + Math.cos(_0x5430d4.ej + _0x46a02b / 200) * 0.3;

                this.nh.Sc(_0x5430d4._i, _0x5430d4.aj, _0x5430d4.Yi ? _0x5430d4.bj * 2 + _0x448352 : _0x5430d4.bj * 2, _0x5430d4.Yi ? _0x5430d4.dj * 1 + _0x448352 : _0x5430d4.dj * 1, _0x5430d4.Yi ? _0x1f8bfb * 1.2 + _0x448352 : _0x1f8bfb * 2, _0x5430d4.Yi ? _0x5430d4.dj * 0.8 : _0x5430d4.dj * 0.3);

              }

            };

            var _0x341920 = function () {

              function _0x3e6144(_0x4afab5, _0x4add6c) {

                this.Cc = _0x4afab5;

                this.Dc = _0x4add6c;

              }

              _0x3e6144.prototype.Sc = function (_0x29bb4d, _0x190f21, _0x341a32, _0x59806d, _0x5c6591, _0x401d9e) {

                this.Cc.kd(true);

                this.Cc.ld(_0x29bb4d, _0x190f21);

                this.Cc.Tc(_0x341a32);

                this.Cc.jj(_0x59806d);

                this.Dc.kd(true);

                this.Dc.ld(_0x29bb4d, _0x190f21);

                this.Dc.Tc(_0x5c6591);

                this.Dc.jj(_0x401d9e);

              };

              _0x3e6144.prototype.Uc = function () {};

              return _0x3e6144;

            }();

            return _0x4edf90;

          }();

          _0x232886.kj = function () {

            function _0x18108a() {

              this.lj = 0;

              this.mj = 0;

              this.nj = 0;

              this.oj = 0;

              this.pj = 0;

              this.qj = [];

            }

            function _0x1a82e5(_0x182994, _0x223cf1) {

              for (var _0x3ee075 = 0; _0x3ee075 < _0x182994.length; _0x3ee075++) {

                if (_0x182994[_0x3ee075].id == _0x223cf1) {

                  return _0x3ee075;

                }

              }

              return -1;

            }

            _0x18108a.prototype.ha = function () {};

            _0x18108a.prototype.rj = function (_0x57f208) {

              if (!window.bbs.loading) {

                window.bbs.PropertyManager = _0x201363({}, this);

                localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

              }

              switch (_0x57f208) {

                case _0x232886.tj.sj:

                  return this.lj;

                case _0x232886.tj.uj:

                  return this.mj;

                case _0x232886.tj.vj:

                  return this.nj;

                case _0x232886.tj.wj:

                  return this.oj;

                case _0x232886.tj.xj:

                  return this.pj;

              }

              return 0;

            };

            _0x18108a.prototype.yj = function () {

              return new _0x232886.hb(this.lj, this.mj, this.nj, this.oj, this.pj);

            };

            _0x18108a.prototype.zj = function (_0x2e28e4) {

              this.qj.push(_0x2e28e4);

              this.Aj();

            };

            _0x18108a.prototype.Bj = function () {

              if (!_0x5d39d0().Lc.Wb()) {

                return decoder.W([32, 33, 34, 35]);

              }

              var _0x29fb58 = [];

              for (var _0x463d57 = _0x5d39d0().Lc.Xb().skinArrayDict, _0x4253fc = 0; _0x4253fc < _0x463d57.length; _0x4253fc++) {

                var _0x2f5ebc = _0x463d57[_0x4253fc];

                if (this.Cj(_0x2f5ebc.id, _0x232886.tj.sj)) {

                  _0x29fb58.push(_0x2f5ebc);

                }

              }

              if (_0x29fb58.length === 0) {

                return 0;

              } else {

                return _0x29fb58[parseInt(_0x29fb58.length * Math.random())].id;

              }

            };

            _0x18108a.prototype.Dj = function () {

              if (_0x5d39d0().Lc.Wb()) {

                var _0x5e4983 = _0x5d39d0().Lc.Xb().skinArrayDict;

                var _0x28672a = _0x1a82e5(_0x5e4983, this.lj);

                if (!(_0x28672a < 0)) {

                  for (var _0x152d6b = _0x28672a + 1; _0x152d6b < _0x5e4983.length; _0x152d6b++) {

                    if (this.Cj(_0x5e4983[_0x152d6b].id, _0x232886.tj.sj)) {

                      this.lj = _0x5e4983[_0x152d6b].id;

                      this.Aj();

                      return;

                    }

                  }

                  for (var _0x8e9ff = 0; _0x8e9ff < _0x28672a; _0x8e9ff++) {

                    if (this.Cj(_0x5e4983[_0x8e9ff].id, _0x232886.tj.sj)) {

                      this.lj = _0x5e4983[_0x8e9ff].id;

                      this.Aj();

                      return;

                    }

                  }

                }

              }

            };

            _0x18108a.prototype.Ej = function () {

              var _0x44fbd3 = _0x5d39d0();

              if (_0x44fbd3.Lc.Wb) {

                var _0x5da6bc = _0x44fbd3.Lc.Xb().skinArrayDict;

                var _0xf94200 = _0x1a82e5(_0x5da6bc, this.lj);

                if (!(_0xf94200 < 0)) {

                  for (var _0x48b4e1 = _0xf94200 - 1; _0x48b4e1 >= 0; _0x48b4e1--) {

                    if (this.Cj(_0x5da6bc[_0x48b4e1].id, _0x232886.tj.sj)) {

                      this.lj = _0x5da6bc[_0x48b4e1].id;

                      this.Aj();

                      return;

                    }

                  }

                  for (var _0xe04a21 = _0x5da6bc.length - 1; _0xe04a21 > _0xf94200; _0xe04a21--) {

                    if (this.Cj(_0x5da6bc[_0xe04a21].id, _0x232886.tj.sj)) {

                      this.lj = _0x5da6bc[_0xe04a21].id;

                      this.Aj();

                      return;

                    }

                  }

                }

              }

            };

            _0x18108a.prototype.Fj = function (_0x4f194d, _0x194ca8) {

              if (!_0x5d39d0().Lc.Wb() || this.Cj(_0x4f194d, _0x194ca8)) {

                switch (_0x194ca8) {

                  case _0x232886.tj.sj:

                    if (this.lj !== _0x4f194d) {

                      this.lj = _0x4f194d;

                      this.Aj();

                    }

                    return;

                  case _0x232886.tj.uj:

                    if (this.mj !== _0x4f194d) {

                      this.mj = _0x4f194d;

                      this.Aj();

                    }

                    return;

                  case _0x232886.tj.vj:

                    if (this.nj !== _0x4f194d) {

                      this.nj = _0x4f194d;

                      this.Aj();

                    }

                    return;

                  case _0x232886.tj.wj:

                    if (this.oj !== _0x4f194d) {

                      this.oj = _0x4f194d;

                      this.Aj();

                    }

                    return;

                  case _0x232886.tj.xj:

                    if (this.pj !== _0x4f194d) {

                      this.pj = _0x4f194d;

                      this.Aj();

                    }

                    return;

                }

              }

            };

            _0x18108a.prototype.Cj = function (_0x300262, _0x220ac8) {

              var _0x308a85 = this.Gj(_0x300262, _0x220ac8);

              return _0x308a85 != null && (_0x5d39d0().Ij.Hj() ? _0x308a85.Jj() === 0 && !_0x308a85.Kj() || _0x5d39d0().Ij.Lj(_0x300262, _0x220ac8) : _0x308a85.Mj());

            };

            _0x18108a.prototype.Gj = function (_0x2bbe9a, _0x244031) {

              if (!_0x5d39d0().Lc.Wb()) {

                return null;

              }

              var _0x312261 = _0x5d39d0().Lc.Xb();

              if (_0x244031 === _0x232886.tj.sj) {

                var _0x52b806 = _0x1a82e5(_0x312261.skinArrayDict, _0x2bbe9a);

                if (_0x52b806 < 0) {

                  return null;

                } else {

                  return _0x232886.Oj.Nj(_0x312261.skinArrayDict[_0x52b806]);

                }

              }

              var _0x31a1df = null;

              switch (_0x244031) {

                case _0x232886.tj.uj:

                  _0x31a1df = _0x312261.eyesDict[_0x2bbe9a];

                  break;

                case _0x232886.tj.vj:

                  _0x31a1df = _0x312261.mouthDict[_0x2bbe9a];

                  break;

                case _0x232886.tj.wj:

                  _0x31a1df = _0x312261.hatDict[_0x2bbe9a];

                  break;

                case _0x232886.tj.xj:

                  _0x31a1df = _0x312261.glassesDict[_0x2bbe9a];

              }

              if (_0x31a1df != null) {

                return _0x232886.Oj.Pj(_0x31a1df);

              } else {

                return null;

              }

            };

            _0x18108a.prototype.Aj = function () {

              for (var _0x369d31 = 0; _0x369d31 < this.qj.length; _0x369d31++) {

                this.qj[_0x369d31]();

              }

            };

            return _0x18108a;

          }();

          _0x232886.tj = function () {

            function _0x469f99() {}

            _0x469f99.sj = "SKIN";

            _0x469f99.uj = "EYES";

            _0x469f99.vj = "MOUTH";

            _0x469f99.xj = "GLASSES";

            _0x469f99.wj = "HAT";

            return _0x469f99;

          }();

          _0x232886.Qj = function () {

            function _0x116385() {

              this.Bf = new _0x429afb.Texture(_0x429afb.BaseTexture.from("/images/bg-obstacle.png"));

              this.Cf = new Array(36);

              this._g = _0x39fe91.bgg();

              this.ah = new _0x429afb.Texture(function () {

                var _0x25ca49 = _0x429afb.BaseTexture.from("/images/bg-pattern-pow2-TEAM2.png");

                _0x25ca49.wrapMode = _0x429afb.C.D;

                return _0x25ca49;

              }());

              this.Zg = new _0x429afb.Texture(_0x429afb.BaseTexture.from("/images/lens.png"));

              this.rf = null;

              this.Db = function () {

                var _0x216a4b = window.document.createElement("canvas");

                _0x216a4b.width = 80;

                _0x216a4b.height = 80;

                return {

                  Eb: _0x216a4b,

                  Fb: _0x216a4b.getContext("2d"),

                  oa: new _0x429afb.Texture(_0x429afb.BaseTexture.from(_0x216a4b))

                };

              }();

              this.Ae = {};

              this.we = {};

              this.Rj = [];

              this.Sj = null;

            }

            _0x116385.prototype.ha = function (_0x5cb891) {

              function _0x1c9ff7() {

                if (--_0x1b98bd == 0) {

                  _0x5cb891();

                }

              }

              var _0x1b98bd = 4;

              this.Ae = {};

              _0x1c9ff7();

              this.we = {};

              _0x1c9ff7();

              this.Rj = [];

              _0x1c9ff7();

              this.Sj = null;

              _0x1c9ff7();

            };

            return _0x116385;

          }();

          _0x232886.Tj = function () {

            function _0x1d9903() {

              this.Uj = null;

              this.af = new _0x232886.Vj();

              this._e = new _0x232886.Wj();

              this.Xj = new _0x232886.Yj();

              this.Zj = new _0x232886.$j();

              this._j = new _0x232886.ak();

              this.bk = new _0x232886.ck();

              this.dk = new _0x232886.ek();

              this.fk = new _0x232886.gk();

              this.$h = new _0x232886.hk();

              this.ik = new _0x232886.jk();

              this.kk = new _0x232886.lk();

              this.mk = new _0x232886.nk();

              this.ok = new _0x232886.pk();

              this.qk = new _0x232886.rk();

              this.ie = new _0x232886.sk();

              this.tk = new _0x232886.uk();

              this.vk = new _0x232886.wk();

              this.xk = new _0x232886.yk();

              this.zk = [];

            }

            function _0x364b87(_0x95b751, _0x2d1e70) {

              if (_0x2d1e70 !== 0) {

                var _0x4a19fd = _0x95b751[_0x2d1e70];

                decoder.T(_0x95b751, 0, 1, _0x2d1e70);

                _0x95b751[0] = _0x4a19fd;

              }

            }

            function _0x4f182f(_0x32952d, _0x33d36d) {

              if (_0x33d36d !== _0x32952d.length + 1) {

                var _0x27b28c = _0x32952d[_0x33d36d];

                decoder.T(_0x32952d, _0x33d36d + 1, _0x33d36d, _0x32952d.length - _0x33d36d - 1);

                _0x32952d[_0x32952d.length - 1] = _0x27b28c;

              }

            }

            function _0x33776a(_0x4dcf05, _0x311c6d) {

              for (var _0x1ed6a7 = 0; _0x1ed6a7 < _0x4dcf05.length; _0x1ed6a7++) {

                if (_0x4dcf05[_0x1ed6a7] === _0x311c6d) {

                  return _0x1ed6a7;

                }

              }

              return -1;

            }

            _0x1d9903.prototype.ha = function () {

              this.Uj = null;

              this.zk = [this.af, this._e, this.Xj, this.Zj, this._j, this.bk, this.dk, this.fk, this.$h, this.ik, this.kk, this.mk, this.ok, this.qk, this.ie, this.tk, this.vk, this.xk];

              for (var _0x4f0358 = 0; _0x4f0358 < this.zk.length; _0x4f0358++) {

                this.zk[_0x4f0358].ha();

              }

            };

            _0x1d9903.prototype.lh = function (_0x1081d1, _0x16b46d) {

              for (var _0x1fa884 = this.zk.length - 1; _0x1fa884 >= 0; _0x1fa884--) {

                this.zk[_0x1fa884].Nf(_0x1081d1, _0x16b46d);

              }

              if (this.zk[0] !== this.af && this.zk[0] !== this.xk && this.Uj != null) {

                this.Uj.Nf(_0x1081d1, _0x16b46d);

              }

            };

            _0x1d9903.prototype.Jf = function () {

              for (var _0x580996 = this.zk.length - 1; _0x580996 >= 0; _0x580996--) {

                this.zk[_0x580996].Jf();

              }

              if (this.Uj != null) {

                this.Uj.Jf();

              }

            };

            _0x1d9903.prototype.Ak = function (_0x2f2ec9) {

              var _0x238ba7 = _0x33776a(this.zk, _0x2f2ec9);

              if (!(_0x238ba7 < 0)) {

                this.zk[0].Bk();

                _0x364b87(this.zk, _0x238ba7);

                this.Ck();

              }

            };

            _0x1d9903.prototype.Dk = function () {

              this.zk[0].Bk();

              do {

                _0x4f182f(this.zk, 0);

              } while (this.zk[0].nd !== _0x232886.Fk.Ek);

              this.Ck();

            };

            _0x1d9903.prototype.Ck = function () {

              var _0x1dfd2d = this.zk[0];

              _0x1dfd2d.Gk();

              _0x1dfd2d.Hk();

              this.Ik();

            };

            _0x1d9903.prototype.Jk = function () {

              return this.zk.length !== 0 && this.zk[0].nd === _0x232886.Fk.Ek && this.qk.Kk();

            };

            _0x1d9903.prototype.Lk = function () {

              if (this.zk.length === 0) {

                return null;

              } else {

                return this.zk[0];

              }

            };

            _0x1d9903.prototype.Ik = function () {

              if (this.Jk()) {

                this.Ak(this.qk);

              }

            };

            return _0x1d9903;

          }();

          _0x232886.Pi = function () {

            function _0x1943a0() {

              this.Ch = [];

              this.zh = [];

            }

            _0x1943a0.Qi = function (_0x323faf, _0x1221c5) {

              return {

                Dh: _0x323faf,

                Bh: _0x1221c5

              };

            };

            _0x1943a0.Ri = function (_0x50b5a8, _0x425f10) {

              return {

                Ah: _0x50b5a8,

                Bh: _0x425f10

              };

            };

            return _0x1943a0;

          }();

          _0x232886.Mk = function () {

            function _0x33ff40() {

              this.setNk = new WeakSet();

              this.Nk = [];

              this.Ok = [];

              this.Pk = false;

              this.Qk = _0x450861;

              this.Rk = {};

            }

            var _0x450861 = "guest";

            _0x33ff40.Sk = new (function () {

              function _0x8eb46f() {}

              _0x8eb46f.Tk = function () {

                function _0x1b7d1a(_0x48f746) {

                  this.Uk = _0x48f746;

                }

                return _0x1b7d1a;

              }();

              _0x8eb46f.prototype.Vk = function () {

                return typeof FB != "undefined";

              };

              _0x8eb46f.prototype.Wk = function (_0x38a4fb, _0x3f139b, _0x167c81) {

                var _0x5718dc = "https://graph.facebook.com/me?access_token=" + _0x38a4fb;

                $.get(_0x5718dc).fail(function () {

                  _0x3f139b();

                }).done(function () {

                  _0x167c81();

                });

              };

              _0x8eb46f.prototype.Xk = function (_0x55e4dd, _0x4540e0) {

                if (!this.Vk()) {

                  _0x55e4dd();

                  return;

                }

                this.Yk(function () {

                  FB.login(function (_0x4341f) {

                    if (_0x4341f.status !== "connected") {

                      _0x55e4dd();

                      return;

                    }

                    var _0x15f68d = _0x4341f.authResponse.accessToken;

                    _0x4540e0(new _0x8eb46f.Tk(_0x15f68d));

                  });

                }, function (_0x9705bf) {

                  _0x4540e0(_0x9705bf);

                });

              };

              _0x8eb46f.prototype.Yk = function (_0x4be54d, _0x2d05fb) {

                var _0x1cfa28 = this;

                if (!this.Vk()) {

                  _0x4be54d();

                  return;

                }

                FB.getLoginStatus(function (_0x15e6d2) {

                  if (_0x15e6d2.status !== "connected") {

                    _0x4be54d();

                    return;

                  }

                  var _0x5ceaa9 = _0x15e6d2.authResponse.accessToken;

                  _0x1cfa28.Wk(_0x5ceaa9, function () {

                    _0x4be54d();

                  }, function () {

                    _0x2d05fb(new _0x8eb46f.Tk(_0x5ceaa9));

                  });

                });

              };

              _0x8eb46f.prototype.Zk = function () {

                if (this.Vk()) {

                  FB.logout();

                }

              };

              return _0x8eb46f;

            }())();

            _0x33ff40.$k = new (function () {

              function _0x5a2bf2() {}

              _0x5a2bf2._k = function () {

                function _0x4575a0(_0x580fce, _0x3061d9) {

                  this.Uk = _0x580fce;

                  this.al = _0x3061d9;

                }

                return _0x4575a0;

              }();

              _0x5a2bf2.prototype.Vk = function () {

                return typeof _0x3d881c !== "undefined";

              };

              _0x5a2bf2.prototype.Xk = function (_0x3f4490, _0x3026bf) {

                if (typeof _0x3d881c === "undefined") {

                  _0x3f4490();

                  return;

                }

                if (_0x3d881c === undefined) {

                  _0x3f4490();

                  return;

                }

                _0x3d881c.then(function () {

                  if (_0x3d881c.isSignedIn.get()) {

                    var _0x27c356 = _0x3d881c.currentUser.get();

                    var _0x2a5fd7 = _0x27c356.getAuthResponse().id_token;

                    var _0x4a7d34 = new Date().getTime() + _0x27c356.getAuthResponse().expires_in * 1000;

                    if (new Date().getTime() < _0x4a7d34) {

                      _0x3026bf(new _0x5a2bf2._k(_0x2a5fd7, _0x4a7d34));

                      return;

                    }

                  }

                  _0x3d881c.signIn().then(function (_0x38a1de) {

                    if (typeof _0x38a1de.error !== "undefined") {

                      _0x3f4490();

                      return;

                    }

                    if (!_0x38a1de.isSignedIn()) {

                      _0x3f4490();

                      return;

                    }

                    var _0x3f614f = _0x38a1de.getAuthResponse().id_token;

                    var _0xb720af = new Date().getTime() + _0x38a1de.getAuthResponse().expires_in * 1000;

                    _0x3026bf(new _0x5a2bf2._k(_0x3f614f, _0xb720af));

                  });

                });

              };

              _0x5a2bf2.prototype.Yk = function (_0x48bb69, _0x1a29b2) {

                if (_0x3d881c === undefined) {

                  _0x48bb69();

                  return;

                }

                _0x3d881c.then(function () {

                  if (_0x3d881c.isSignedIn.get()) {

                    var _0x4af1a3 = _0x3d881c.currentUser.get();

                    var _0x412b24 = _0x4af1a3.getAuthResponse().id_token;

                    var _0x10be00 = new Date().getTime() + _0x4af1a3.getAuthResponse().expires_in * 1000;

                    if (new Date().getTime() < _0x10be00) {

                      _0x1a29b2(new _0x5a2bf2._k(_0x412b24, _0x10be00));

                      return;

                    }

                  }

                  _0x48bb69();

                });

              };

              _0x5a2bf2.prototype.Zk = function () {

                if (_0x3d881c !== undefined) {

                  _0x3d881c.signOut();

                }

              };

              return _0x5a2bf2;

            }())();

            _0x33ff40.prototype.ha = function () {

              this.bl();

            };

            _0x33ff40.prototype.cl = function () {

              if (this.Pk) {

                return this.Rk.userId;

              } else {

                return "";

              }

            };

            _0x33ff40.prototype.dl = function () {

              if (this.Pk) {

                return this.Rk.username;

              } else {

                return "";

              }

            };

            _0x33ff40.prototype.el = function () {

              if (this.Pk) {

                return this.Rk.nickname.substring(0, _0x30b68b);

              } else {

                return "";

              }

            };

            _0x33ff40.prototype.fl = function () {

              if (this.Pk) {

                return this.Rk.avatarUrl;

              } else {

                return GUEST_AVATAR_URL;

              }

            };

            _0x33ff40.prototype.gl = function () {

              return this.Pk && this.Rk.isBuyer;

            };

            _0x33ff40.prototype.hl = function () {

              return this.Pk && this.Rk.isConsentGiven;

            };

            _0x33ff40.prototype.il = function () {

              if (this.Pk) {

                return this.Rk.coins;

              } else {

                return 0;

              }

            };

            _0x33ff40.prototype.jl = function () {

              if (this.Pk) {

                return this.Rk.level;

              } else {

                return 1;

              }

            };

            _0x33ff40.prototype.kl = function () {

              if (this.Pk) {

                return this.Rk.expOnLevel;

              } else {

                return 0;

              }

            };

            _0x33ff40.prototype.ll = function () {

              if (this.Pk) {

                return this.Rk.expToNext;

              } else {

                return 50;

              }

            };

            _0x33ff40.prototype.ml = function () {

              if (this.Pk) {

                return this.Rk.skinId;

              } else {

                return 0;

              }

            };

            _0x33ff40.prototype.nl = function () {

              if (this.Pk) {

                return this.Rk.eyesId;

              } else {

                return 0;

              }

            };

            _0x33ff40.prototype.ol = function () {

              if (this.Pk) {

                return this.Rk.mouthId;

              } else {

                return 0;

              }

            };

            _0x33ff40.prototype.pl = function () {

              if (this.Pk) {

                return this.Rk.glassesId;

              } else {

                return 0;

              }

            };

            _0x33ff40.prototype.ql = function () {

              if (this.Pk) {

                return this.Rk.hatId;

              } else {

                return 0;

              }

            };

            _0x33ff40.prototype.rl = function () {

              if (this.Pk) {

                return this.Rk.highScore;

              } else {

                return 0;

              }

            };

            _0x33ff40.prototype.sl = function () {

              if (this.Pk) {

                return this.Rk.bestSurvivalTimeSec;

              } else {

                return 0;

              }

            };

            _0x33ff40.prototype.tl = function () {

              if (this.Pk) {

                return this.Rk.kills;

              } else {

                return 0;

              }

            };

            _0x33ff40.prototype.ul = function () {

              if (this.Pk) {

                return this.Rk.headShots;

              } else {

                return 0;

              }

            };

            _0x33ff40.prototype.vl = function () {

              if (this.Pk) {

                return this.Rk.sessionsPlayed;

              } else {

                return 0;

              }

            };

            _0x33ff40.prototype.wl = function () {

              if (this.Pk) {

                return this.Rk.totalPlayTimeSec;

              } else {

                return 0;

              }

            };

            _0x33ff40.prototype.xl = function () {

              if (this.Pk) {

                return this.Rk.regDate;

              } else {

                return {};

              }

            };

            _0x33ff40.prototype.yl = function (_0x5465e7) {

              this.Nk.push(_0x5465e7);

              _0x5465e7();

            };

            _0x33ff40.prototype.zl = function (_0x27135a) {

              this.Ok.push(_0x27135a);

              _0x27135a();

            };

            _0x33ff40.prototype.Lj = function (_0x27ab0d, _0x453edb) {

              var _0x1549cf = this.Rk.propertyList;

              if (_0x1549cf == null) {

                return false;

              }

              var _0x57332c = _0x27ab0d.toString();

              for (var _0x13b1f3 = 0; _0x13b1f3 < _0x1549cf.length; _0x13b1f3++) {

                var _0x535d79 = _0x1549cf[_0x13b1f3];

                if (_0x535d79.id === _0x57332c && _0x535d79.type === _0x453edb) {

                  return true;

                }

              }

              return false;

            };

            _0x33ff40.prototype.Hj = function () {

              return this.Pk;

            };

            _0x33ff40.prototype.Al = function () {

              return this.Qk;

            };

            _0x33ff40.prototype.Bl = function (_0x59ae4f) {

              var _0x175c84 = this;

              var _0x1333dc = this.cl();

              var _0x4cddd1 = this.il();

              var _0x57aa77 = this.jl();

              this.Cl(function () {

                if (_0x59ae4f != null) {

                  _0x59ae4f();

                }

              }, function (_0x35e289) {

                _0x225f93(_0x35e289.user_data);

                _0x175c84.Rk = _0x35e289.user_data;

                _0x175c84.Dl();

                _0x175c84.Rk.isConsentGiven = true;

                var _0x224ad4 = _0x175c84.cl();

                var _0x851563 = _0x175c84.il();

                var _0x4a137b = _0x175c84.jl();

                if (_0x1333dc === _0x224ad4) {

                  if (_0x4a137b > 1 && _0x4a137b !== _0x57aa77) {

                    _0x5d39d0().og.qk.El(new _0x232886.Fl(currLevel));

                  }

                  var _0x869326 = _0x851563 - _0x4cddd1;

                  if (_0x869326 >= 20) {

                    _0x5d39d0().og.qk.El(new _0x232886.Gl(_0x869326));

                  }

                }

                if (_0x59ae4f != null) {

                  _0x59ae4f();

                }

              });

            };

            _0x33ff40.prototype.Cl = function (_0x10de35, _0x1dccbb) {

              var _0x127090 = decoder.a.b + "/pub/wuid/" + this.Qk + "/getUserData";

              bbs.wuid = this.Qk;

              decoder.Z(_0x127090, _0x10de35, function (_0x2a0aa3) {

                if (_0x2a0aa3.code !== 1200) {

                  _0x10de35();

                } else {

                  _0x1dccbb(_0x2a0aa3);

                }

              });

            };

            _0x33ff40.prototype.Hl = function (_0x148a80, _0x3a7306, _0x28bf80, _0xe20ea3) {

              var _0x1a25e = decoder.a.b + "/pub/wuid/" + this.Qk + "/buyProperty?id=" + _0x148a80 + "&type=" + _0x3a7306;

              decoder.Z(_0x1a25e, function () {

                _0x28bf80();

              }, function (_0x10c4e9) {

                if (_0x10c4e9.code !== 1200) {

                  _0x28bf80();

                } else {

                  _0xe20ea3(_0x10c4e9);

                }

              });

            };

            _0x33ff40.prototype.Il = function (_0x56461f, _0x48f427) {

              var _0x174936 = decoder.a.b + "/pub/wuid/" + this.Qk + "/deleteAccount";

              decoder.Z(_0x174936, _0x56461f, function (_0x5ead35) {

                if (_0x5ead35.code !== 1200) {

                  _0x56461f();

                } else {

                  _0x48f427(_0x5ead35);

                }

              });

            };

            _0x33ff40.prototype.Jl = function (_0x19afcf) {

              var _0x52a009 = this;

              if (this.Pk) {

                this.Kl();

              }

              _0x33ff40.Sk.Xk(function () {

                _0x19afcf();

              }, function (_0x5632b9) {

                _0x52a009.Ll("fb", _0x5632b9.Uk, _0x19afcf);

              });

            };

            _0x33ff40.prototype.Ml = function (_0x1a2544) {

              var _0x553720 = this;

              if (this.Pk) {

                this.Kl();

              }

              _0x33ff40.$k.Xk(function () {

                _0x1a2544();

              }, function (_0x358777) {

                _0x553720.Ll("gg", _0x358777.Uk, _0x1a2544);

              });

            };

            _0x33ff40.prototype.Ll = function (_0x34a137, _0x1ccd67, _0x4f18cb, _0xa92517) {

              _0xa92517 = _0xa92517 || 0;

              var _0x1e00f6 = $("#please-wait-view");

              if (_0xa92517 < 1) {

                _0x1e00f6.append(` AUTO CONNECTION <i id="auto_connection_text">${_0xa92517}<i>...`);

              }

              var _0xe0d252 = this;

              var _0x5df71d = _0x34a137 + "_" + _0x1ccd67;

              var _0x46476b = "https://gateway.wormate.io/pub/wuid/" + _0x5df71d + "/login";

              bbs.wuid = _0x5df71d;

              _0xa92517++;

              _0x1e00f6.fadeIn(500);

              $("#auto_connection_text").html(_0xa92517);

              fetch(_0x46476b, {

                mode: "cors"

              }).then(function (_0x194ec8) {

                if (_0x194ec8.ok) {

                  return _0x194ec8.json();

                } else {

                  throw new Error("Erro na solicitação");

                }

              }).then(function (_0x31b744) {

                if (_0x31b744.code !== 1200) {

                  _0xe0d252.Ll(_0x34a137, _0x1ccd67, _0x4f18cb, _0xa92517);

                  return;

                }

                if (_0x31b744.user_data) {

                  _0x1e00f6.html("...");

                  _0x1e00f6.fadeOut(500);

                  _0xe0d252.Ol(_0x34a137, _0x1ccd67, _0x31b744.user_data);

                  if (_0x4f18cb != null) {

                    _0x4f18cb();

                  }

                }

              }).catch(function (_0x335feb) {

                _0xe0d252.Nl();

                _0x1e00f6.html("...");

                _0x1e00f6.fadeOut(500);

              });

            };

            _0x33ff40.prototype.Kl = function () {

              try {

                this.Pl();

                this.Ql();

              } catch (_0x3d93da) {}

              this.Rl();

            };

            _0x33ff40.prototype.Sl = function () {

              if (this.Pk) {

                this.Il(function () {}, function (_0x284945) {});

              }

            };

            _0x33ff40.prototype.Nl = function () {

              _0x5d39d0().og.Ak(_0x5d39d0().og.tk);

            };

            _0x33ff40.prototype.Ol = function (_0x15eb6b, _0x1d106d, _0x1cded4) {

              var _0x2868b3 = this;

              var _0x5cc676 = this.Pk ? this.Rk.userId : "guest";

              _0x255e18(_0x1cded4, function (_0x3c7957) {

                _0x225f93(_0x3c7957);

                _0x2868b3.Pk = true;

                _0x2868b3.Qk = _0x15eb6b + "_" + _0x1d106d;

                _0x2868b3.Rk = _0x3c7957;

                bbs.wuid = _0x2868b3.Qk;

                _0x232886.Vf.eg(_0x232886.Vf.$f, _0x15eb6b, 60);

                if (_0x5cc676 !== _0x2868b3.Rk.userId) {

                  _0x2868b3.Tl();

                } else {

                  _0x2868b3.Dl();

                }

                window.bbs.loading = false;

              });

            };

            _0x33ff40.prototype.Rl = function () {

              var _0x24a2f5 = this.Pk ? this.Rk.userId : "guest";

              this.Pk = false;

              this.Qk = _0x450861;

              this.Rk = {};

              _0x232886.Vf.eg(_0x232886.Vf.$f, "", 60);

              if (_0x24a2f5 !== this.Rk.userId) {

                this.Tl();

              } else {

                this.Dl();

              }

            };

            _0x33ff40.prototype.bl = function () {

              var _0x1ab325 = _0x232886.Vf.fg(_0x232886.Vf.$f);

              var _0x1c5e61 = this;

              if (_0x1ab325 === "fb") {

                var _0x579026 = 1;

                (function _0x5649d9() {

                  if (!_0x33ff40.Sk.Vk() && _0x579026++ < 5) {

                    setTimeout(_0x5649d9, 1000);

                    return;

                  }

                  _0x33ff40.Sk.Yk(function () {}, function (_0x761db0) {

                    _0x1c5e61.Ll("fb", _0x761db0.Uk);

                  });

                })();

              } else if (_0x1ab325 === "gg") {

                var _0x16f06c = 1;

                (function _0x50958d() {

                  if (!_0x33ff40.$k.Vk() && _0x16f06c++ < 5) {

                    setTimeout(_0x50958d, 1000);

                    return;

                  }

                  _0x33ff40.$k.Yk(function () {}, function (_0xf34860) {

                    _0x1c5e61.Ll("gg", _0xf34860.Uk);

                  });

                })();

              }

            };

            _0x33ff40.prototype.Tl = function () {

              for (var _0x51bf7a = 0; _0x51bf7a < this.Nk.length; _0x51bf7a++) {

                this.Nk[_0x51bf7a]();

              }

              this.Dl();

            };

            _0x33ff40.prototype.Dl = function () {

              for (var _0x1e7e47 = 0; _0x1e7e47 < this.Ok.length; _0x1e7e47++) {

                this.Ok[_0x1e7e47]();

              }

            };

            _0x33ff40.prototype.Pl = function () {

              _0x33ff40.Sk.Zk();

            };

            _0x33ff40.prototype.Ql = function () {

              _0x33ff40.$k.Zk();

            };

            return _0x33ff40;

          }();

          _0x232886.if = function () {

            function _0x49608d(_0x5d0a22, _0x56e0db, _0x49ff66) {

              this.ef = _0x49ff66;

              this.hd = false;

              this.nc = new _0x429afb.Container();

              this.nc.visible = false;

              this.Ul = new Array(_0x5d0a22);

              for (var _0x26e3bf = 0; _0x26e3bf < this.Ul.length; _0x26e3bf++) {

                var _0x4c962 = new _0x232886.Vl(new Float32Array(_0x56e0db * 3));

                _0x4c962.Wl(_0x56e0db);

                this.Ul[_0x26e3bf] = _0x4c962;

                this.nc.addChild(_0x4c962.tf());

              }

              this.ff = 1;

              this.gf = 1;

              this.Jf();

            }

            _0x49608d.prototype.tf = function () {

              return this.nc;

            };

            _0x49608d.prototype.Kf = function (_0x2859f5) {

              this.hd = _0x2859f5;

              this.nc.visible = _0x2859f5;

            };

            _0x49608d.prototype.Jf = function () {

              this.ff = this.ef.width();

              this.gf = this.ef.height();

              var _0x247519 = this.gf / 30;

              for (var _0x5b9793 = 0; _0x5b9793 < this.Ul.length; _0x5b9793++) {

                this.Ul[_0x5b9793].Xl(_0x247519);

              }

            };

            _0x49608d.prototype.Uf = function () {

              if (this.hd) {

                for (var _0x2f5c4d = 0; _0x2f5c4d < this.Ul.length; _0x2f5c4d++) {

                  this.Ul[_0x2f5c4d].Uf(this.lf);

                }

              }

            };

            _0x49608d.prototype.Yl = function () {

              return this.ff;

            };

            _0x49608d.prototype.Zl = function () {

              return this.gf;

            };

            _0x49608d.prototype.Qf = function (_0xfda307, _0x1b5308) {

              this.Ul[_0xfda307].$l(_0x1b5308);

            };

            _0x49608d.prototype.Rf = function (_0x1ecea8, _0x4406b2) {

              this.Ul[_0x1ecea8]._l(_0x4406b2);

            };

            _0x49608d.prototype.Sf = function (_0x197b4a, _0x13b17e, _0x57e899) {

              var _0x3f5774 = this.Ul[_0x197b4a];

              for (var _0x144faf = _0x3f5774.am(), _0x5a571c = _0x3f5774.bm, _0x138371 = 0; _0x138371 < _0x144faf; _0x138371++) {

                _0x5a571c[_0x138371 * 3] = _0x13b17e;

                _0x5a571c[_0x138371 * 3 + 1] = _0x57e899;

                _0x5a571c[_0x138371 * 3 + 2] = 0;

              }

            };

            _0x49608d.prototype.Tf = function (_0x4775e3, _0x227797, _0x581ce1) {

              var _0x2b07e7 = this.Ul[_0x4775e3];

              var _0x5cbe7c = _0x2b07e7.am();

              var _0x2f4aa7 = _0x2b07e7.bm;

              var _0x56fbff = _0x2b07e7.cm();

              var _0x30d6f2 = _0x2f4aa7[0];

              var _0x4c54b2 = undefined;

              var _0x4cbf15 = _0x2f4aa7[1];

              var _0xc4beb8 = undefined;

              var _0x245518 = _0x227797 - _0x30d6f2;

              var _0x2e4ffe = _0x581ce1 - _0x4cbf15;

              var _0x39a363 = Math.hypot(_0x245518, _0x2e4ffe);

              if (_0x39a363 > 0) {

                _0x2f4aa7[0] = _0x227797;

                _0x2f4aa7[1] = _0x581ce1;

                _0x2f4aa7[2] = Math.atan2(_0x2e4ffe, _0x245518);

                var _0x40850f = _0x56fbff * 0.25 / (_0x56fbff * 0.25 + _0x39a363);

                var _0x4afc36 = 1 - _0x40850f * 2;

                for (var _0x4ab128 = 1, _0x5bb061 = _0x5cbe7c; _0x4ab128 < _0x5bb061; _0x4ab128++) {

                  _0x4c54b2 = _0x2f4aa7[_0x4ab128 * 3];

                  _0x2f4aa7[_0x4ab128 * 3] = _0x2f4aa7[_0x4ab128 * 3 - 3] * _0x4afc36 + (_0x4c54b2 + _0x30d6f2) * _0x40850f;

                  _0x30d6f2 = _0x4c54b2;

                  _0xc4beb8 = _0x2f4aa7[_0x4ab128 * 3 + 1];

                  _0x2f4aa7[_0x4ab128 * 3 + 1] = _0x2f4aa7[_0x4ab128 * 3 - 2] * _0x4afc36 + (_0xc4beb8 + _0x4cbf15) * _0x40850f;

                  _0x4cbf15 = _0xc4beb8;

                  _0x2f4aa7[_0x4ab128 * 3 + 2] = Math.atan2(_0x2f4aa7[_0x4ab128 * 3 - 2] - _0x2f4aa7[_0x4ab128 * 3 + 1], _0x2f4aa7[_0x4ab128 * 3 - 3] - _0x2f4aa7[_0x4ab128 * 3]);

                }

              }

            };

            return _0x49608d;

          }();

          _0x232886.dm = function () {

            function _0x809956(_0x52dcf0) {

              var _0x22c669 = this;

              this.ef = _0x52dcf0;

              this.Eb = _0x52dcf0.get()[0];

              this.lf = new _0x429afb.Renderer({

                view: _0x52dcf0.get()[0],

                transparent: true,

                antialias: false

              });

              this.hd = false;

              this.em = new _0x232886.Vl(new Float32Array(_0x278405 * 3));

              this.ff = 1;

              this.gf = 1;

              this.fm = _0x551205.gm;

              this.hm = _0x551205.gm;

              this.im = _0x551205.gm;

              this.jm = _0x551205.gm;

              this.km = _0x551205.gm;

              this.Jf();

              _0x5d39d0().Lc.$b(function () {

                _0x22c669.em.lm();

              });

            }

            var _0x278405 = Math.min(100, _0x232886.WormSpriteTree.wc);

            var _0x551205 = {

              gm: "0lt0",

              mm: "0lt1",

              nm: "0lt2"

            };

            _0x809956.prototype.Kf = function (_0xbfb454) {

              this.hd = _0xbfb454;

            };

            _0x809956.prototype.Jf = function () {

              var _0x2d3c45 = window.devicePixelRatio ? window.devicePixelRatio : 1;

              this.ff = this.ef.width();

              this.gf = this.ef.height();

              this.lf.resize(this.ff, this.gf);

              this.lf.resolution = _0x2d3c45;

              this.Eb.width = _0x2d3c45 * this.ff;

              this.Eb.height = _0x2d3c45 * this.gf;

              var _0x82b984 = this.gf / 4;

              this.em.Xl(_0x82b984);

              var _0x38feff = decoder.P(Math.floor(this.ff / _0x82b984) * 2 - 5, 1, _0x278405);

              this.em.Wl(_0x38feff);

            };

            _0x809956.prototype.Nf = function () {

              if (this.hd) {

                var _0x412b09 = Date.now();

                var _0x359179 = _0x412b09 / 200;

                var _0x31d24e = Math.sin(_0x359179);

                this.em.om(this.pm(this.fm, _0x31d24e), this.qm(this.fm, _0x31d24e));

                this.em.rm(this.sm(this.hm, _0x31d24e), this.sm(this.im, _0x31d24e), this.sm(this.jm, _0x31d24e), this.sm(this.km, _0x31d24e));

                var _0x37bedb = this.em.cm();

                for (var _0x5e0f24 = this.em.am(), _0x3c1a3f = this.em.bm, _0x2a7d3f = this.ff - (this.ff - _0x37bedb * 0.5 * (_0x5e0f24 - 1)) * 0.5, _0x265370 = this.gf * 0.5, _0x47b0e2 = 0, _0x55ce75 = 0, _0x383f9f = -1; _0x383f9f < _0x5e0f24; _0x383f9f++) {

                  var _0x593460 = _0x383f9f;

                  var _0x68a638 = Math.cos(_0x593460 * 1 / 12 * Math.PI - _0x359179) * (1 - Math.pow(16, _0x593460 * -1 / 12));

                  if (_0x383f9f >= 0) {

                    _0x3c1a3f[_0x383f9f * 3] = _0x2a7d3f + _0x37bedb * -0.5 * _0x593460;

                    _0x3c1a3f[_0x383f9f * 3 + 1] = _0x265370 + _0x37bedb * 0.5 * _0x68a638;

                    _0x3c1a3f[_0x383f9f * 3 + 2] = Math.atan2(_0x55ce75 - _0x68a638, _0x593460 - _0x47b0e2);

                  }

                  _0x47b0e2 = _0x593460;

                  _0x55ce75 = _0x68a638;

                }

                this.em.Uf();

                this.em.tm(this.lf);

              }

            };

            _0x809956.prototype.$l = function (_0x131471) {

              this.em.$l(_0x131471);

            };

            _0x809956.prototype.um = function (_0xba630a) {

              this.fm = _0xba630a ? _0x551205.nm : _0x551205.mm;

              this.hm = _0x551205.gm;

              this.im = _0x551205.gm;

              this.jm = _0x551205.gm;

              this.km = _0x551205.gm;

            };

            _0x809956.prototype.vm = function (_0x142942) {

              this.fm = _0x551205.gm;

              this.hm = _0x142942 ? _0x551205.nm : _0x551205.mm;

              this.im = _0x551205.gm;

              this.jm = _0x551205.gm;

              this.km = _0x551205.gm;

            };

            _0x809956.prototype.wm = function (_0x5a2cd9) {

              this.fm = _0x551205.gm;

              this.hm = _0x551205.gm;

              this.im = _0x5a2cd9 ? _0x551205.nm : _0x551205.mm;

              this.jm = _0x551205.gm;

              this.km = _0x551205.gm;

            };

            _0x809956.prototype.xm = function (_0x53c8e2) {

              this.fm = _0x551205.gm;

              this.hm = _0x551205.gm;

              this.im = _0x551205.gm;

              this.jm = _0x53c8e2 ? _0x551205.nm : _0x551205.mm;

              this.km = _0x551205.gm;

            };

            _0x809956.prototype.ym = function (_0x8fad88) {

              this.fm = _0x551205.gm;

              this.hm = _0x551205.gm;

              this.im = _0x551205.gm;

              this.jm = _0x551205.gm;

              this.km = _0x8fad88 ? _0x551205.nm : _0x551205.mm;

            };

            _0x809956.prototype.pm = function (_0x4dcb6e, _0x496d87) {

              switch (_0x4dcb6e) {

                case _0x551205.mm:

                  return 0.9 + _0x496d87 * 0.1;

                case _0x551205.nm:

                  return 0.4 + _0x496d87 * 0.3;

              }

              return 1;

            };

            _0x809956.prototype.qm = function (_0x47f159, _0xbdebb9) {

              switch (_0x47f159) {

                case _0x551205.mm:

                  return 0.6 + _0xbdebb9 * 0.5;

                case _0x551205.nm:

                  return 0.3 + _0xbdebb9 * 0.3;

              }

              return 1;

            };

            _0x809956.prototype.sm = function (_0x3f0443, _0x5cea93) {

              switch (_0x3f0443) {

                case _0x551205.mm:

                  return 0.9 + _0x5cea93 * 0.1;

                case _0x551205.nm:

                  return 0.6 + _0x5cea93 * 0.4;

              }

              return 1;

            };

            return _0x809956;

          }();

          _0x232886.Oj = function () {

            function _0x33165c(_0x52f541, _0x5492af, _0x8ea078, _0x298da2, _0x1f4252) {

              this.zm = _0x52f541;

              this.Am = _0x5492af;

              this.Bm = _0x8ea078;

              this.Cm = _0x298da2;

              this.Dm = _0x1f4252;

            }

            _0x33165c.Nj = function (_0x3921d7) {

              return new _0x33165c(_0x3921d7.price, _0x3921d7.guest, _0x3921d7.nonbuyable, _0x3921d7.nonbuyableCause, _0x3921d7.description || _0x3921d7.refer?.texture || "SKIN NATIVE " + _0x3921d7.id);

            };

            _0x33165c.Pj = function (_0x34fc52) {

              return new _0x33165c(_0x34fc52.price, _0x34fc52.guest, _0x34fc52.nonbuyable, _0x34fc52.nonbuyableCause, _0x34fc52.description);

            };

            _0x33165c.prototype.Jj = function () {

              return this.zm;

            };

            _0x33165c.prototype.Mj = function () {

              return this.Am;

            };

            _0x33165c.prototype.Kj = function () {

              return this.Bm;

            };

            _0x33165c.prototype.Em = function () {

              return this.Cm;

            };

            _0x33165c.prototype.Fm = function () {

              return this.Dm;

            };

            return _0x33165c;

          }();

          _0x232886.qf = function () {

            function _0x11aa13(_0x299dde) {

              this.Gm = {};

              this.Gm[_0x462121] = _0x299dde;

              var _0x745dd5 = _0x429afb.Shader.from(_0x222081, _0x297a71, this.Gm);

              this.sf = new _0x429afb.Mesh(_0x3e7216, _0x745dd5);

              this.sf.blendMode = _0x429afb.v.B;

            }

            var _0x53e125 = "a1_" + decoder.X();

            var _0x536c10 = "a2_" + decoder.X();

            var _0x462121 = "u3_" + decoder.X();

            var _0xedd1ed = "u4_" + decoder.X();

            var _0x5ac496 = "v1_" + decoder.X();

            var _0x3e7216 = new _0x429afb.Geometry().addAttribute(_0x53e125, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(_0x536c10, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2);

            var _0x222081 = "precision mediump float;attribute vec2 " + _0x53e125 + ";attribute vec2 " + _0x536c10 + ";uniform mat3 translationMatrix ;uniform mat3 projectionMatrix; uniform vec4 " + _0xedd1ed + ";varying vec2 " + _0x5ac496 + ";const float ROT_ANGLE_DEG=7.5;const float ROT_COS=cos(ROT_ANGLE_DEG/180.0*6.283185307179586);const float ROT_SIN=sin(ROT_ANGLE_DEG/180.0*6.283185307179586);void main(){gl_Position=vec4((projectionMatrix * translationMatrix * vec3(" + _0x53e125 + ",1.0)).xy,0.0,1.0);vec4 _ScreenParams=" + _0xedd1ed + ";vec2 uv=" + _0x536c10 + ";vec2 mul=0.5*vec2(_ScreenParams.x*(_ScreenParams.w-1.0)+1.0,_ScreenParams.y*(_ScreenParams.z-1.0)+1.0);vec2 v2=(uv-vec2(0.5,0.5))*mul*1.25;v2=vec2(v2.x*ROT_COS-v2.y*ROT_SIN,v2.x*ROT_SIN+v2.y*ROT_COS)*vec2(1,2);uv=v2;" + _0x5ac496 + "=uv;}";

            var _0x297a71 = "precision highp float;varying vec2 " + _0x5ac496 + ";uniform sampler2D " + _0x462121 + ";void main(){gl_FragColor=texture2D(" + _0x462121 + "," + _0x5ac496 + ");}";

            _0x11aa13.prototype.Mf = function (_0x3ebb32, _0x530196) {

              this.sf.scale.x = _0x3ebb32;

              this.sf.scale.y = _0x530196;

              this.Gm[_0xedd1ed] = [_0x3ebb32, _0x530196, 1 / _0x3ebb32 + 1, 1 / _0x530196 + 1];

            };

            return _0x11aa13;

          }();

          _0x232886.WMGBS1 = function () {

            function _0x3c21ad(_0x2685c1) {

              var _0x5dd9f0 = bbs.bgGameWidth || 1;

              var _0x1d81e7 = bbs.bgGameHeight || 1;

              var _0x2da1d1 = 1100;

              var _0x177a8b = _0x5dd9f0 > 512 ? _0x5dd9f0 >= 1000 ? 1 : 0.1 : 0.01;

              this.Gm = {};

              this.Gm[_0x4d25d2] = [1, 0.5, 0.25, 0.5];

              this.Gm[_0x1de134] = _0x429afb.Texture.WHITE;

              this.Gm[_0x280e44] = [0, 0];

              this.Gm[_0x30d4ba] = [0, 0];

              this.sf = new PIXI.TilingSprite(_0x2685c1 || _0x1f8817.xe._g, _0x177a8b == 1 ? _0x2da1d1 : 120000, _0x177a8b == 1 ? _0x2da1d1 : 120000);

              this.sf.scale.x = _0x177a8b;

              this.sf.scale.y = _0x177a8b;

              this.sf.position.x = -(_0x177a8b == 1 ? _0x5dd9f0 / 2 : 625);

              this.sf.position.y = -(_0x177a8b == 1 ? _0x1d81e7 / 2 : 625);

              console.log("WMGBS1", _0x5dd9f0, _0x1d81e7);

            }

            var _0x4d25d2 = "u3_";

            var _0x1de134 = "u4_";

            var _0x280e44 = "u5_";

            var _0x30d4ba = "u6_";

            _0x3c21ad.prototype.Ec = function (_0xc3c223, _0x1893af, _0x131e30, _0xd4582f) {

              var _0x2d8f08 = this.Gm[_0x4d25d2];

              _0x2d8f08[0] = _0xc3c223;

              _0x2d8f08[1] = _0x1893af;

              _0x2d8f08[2] = _0x131e30;

              _0x2d8f08[3] = _0xd4582f;

            };

            _0x3c21ad.prototype.$g = function (_0x2e00c0) {

              this.Gm[_0x1de134] = _0x2e00c0;

            };

            _0x3c21ad.prototype.Uf = function (_0x2b4aa1, _0x187ebf, _0x4d1a7a, _0x3f2723) {};

            return _0x3c21ad;

          }();

          _0x232886.WMGBS2 = function () {

            console.log("WMGBS2");

            function _0x473ec4() {

              this.Gm = {};

              this.Gm[_0x16b447] = [1, 0.5, 0.25, 0.5];

              this.Gm[_0x518390] = _0x429afb.Texture.WHITE;

              this.Gm[_0x73df9] = [0, 0];

              this.Gm[_0x579405] = [0, 0];

              var _0x55467c = _0x429afb.Shader.from(_0x26d5af, _0x522399, this.Gm);

              this.sf = new _0x429afb.Mesh(_0x5da594, _0x55467c);

            }

            var _0x2fd992 = "a1_" + decoder.X();

            var _0x178722 = "a2_" + decoder.X();

            var _0x5654cd = "translationMatrix";

            var _0x540d8e = "projectionMatrix";

            var _0x16b447 = "u3_" + decoder.X();

            var _0x518390 = "u4_" + decoder.X();

            var _0x73df9 = "u5_" + decoder.X();

            var _0x579405 = "u6_" + decoder.X();

            var _0x459990 = "v1_" + decoder.X();

            var _0x5da594 = new _0x429afb.Geometry().addAttribute(_0x2fd992, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(_0x178722, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);

            var _0x26d5af = "precision mediump float;attribute vec2 " + _0x2fd992 + ";attribute vec2 " + _0x178722 + ";uniform mat3 " + _0x5654cd + ";uniform mat3 " + _0x540d8e + ";varying vec2 " + _0x459990 + ";void main(){" + _0x459990 + "=" + _0x178722 + ";gl_Position=vec4((" + _0x540d8e + "*" + _0x5654cd + "*vec3(" + _0x2fd992 + ",1.0)).xy,0.0,1.0);}";

            var _0x522399 = "precision highp float;varying vec2 " + _0x459990 + ";uniform vec4 " + _0x16b447 + ";uniform sampler2D " + _0x518390 + ";uniform vec2 " + _0x73df9 + ";uniform vec2 " + _0x579405 + ";void main(){vec2 coord=" + _0x459990 + "*" + _0x73df9 + "+" + _0x579405 + ";vec4 v_color_mix=" + _0x16b447 + ";gl_FragColor=texture2D(" + _0x518390 + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";

            _0x473ec4.prototype.Ec = function (_0x330a41, _0x5ab16b, _0x462582, _0x274732) {

              var _0x4de29f = this.Gm[_0x16b447];

              _0x4de29f[0] = _0x330a41;

              _0x4de29f[1] = _0x5ab16b;

              _0x4de29f[2] = _0x462582;

              _0x4de29f[3] = _0x274732;

            };

            _0x473ec4.prototype.$g = function (_0x56021b) {

              this.Gm[_0x518390] = _0x56021b;

            };

            _0x473ec4.prototype.Uf = function (_0x15f104, _0x8f5d0b, _0x1ae002, _0x11f4c8) {

              this.sf.position.x = _0x15f104;

              this.sf.position.y = _0x8f5d0b;

              this.sf.scale.x = _0x1ae002;

              this.sf.scale.y = _0x11f4c8;

              var _0x2646d2 = this.Gm[_0x73df9];

              _0x2646d2[0] = _0x1ae002 * 0.2520615384615385;

              _0x2646d2[1] = _0x11f4c8 * 0.4357063736263738;

              var _0x1e6b18 = this.Gm[_0x579405];

              _0x1e6b18[0] = _0x15f104 * 0.2520615384615385;

              _0x1e6b18[1] = _0x8f5d0b * 0.4357063736263738;

            };

            return _0x473ec4;

          }();

          _0x232886.sc = function () {

            function _0x28a552() {

              this.xc = new PIXI.Sprite();

              this.ev = null;

              this.Hm = 0;

              this.Im = 0;

              this.si = null;

            }

            _0x28a552.prototype.Bc = function (_0x2ed69d, _0x27570c, _0x47319f) {

              if (_0x2ed69d) {

                this.xc.texture = _0x2ed69d.Ea();

                this.xc.anchor.set(_0x2ed69d.ya, _0x2ed69d.za);

                this.Hm = _0x2ed69d.Aa;

                this.Im = _0x2ed69d.Ba;

              } else {}

            };

            _0x28a552.prototype.Ec = function (_0x4fc90f) {

              this.xc.tint = parseInt(_0x4fc90f.substring(1), 16);

            };

            _0x28a552.prototype.Tc = function (_0x5fde8) {

              try {

                this.xc.width = _0x5fde8 * this.Hm;

                this.xc.height = _0x5fde8 * this.Im;

              } catch (_0x1d543c) {}

            };

            _0x28a552.prototype.md = function (_0x46a2cc) {

              this.xc.rotation = _0x46a2cc;

            };

            _0x28a552.prototype.ld = function (_0x240fbe, _0x5ac3f3) {

              this.xc.position.set(_0x240fbe, _0x5ac3f3);

            };

            _0x28a552.prototype.kd = function (_0x32fff4) {

              this.xc.visible = _0x32fff4;

            };

            _0x28a552.prototype.gd = function () {

              return this.xc.visible;

            };

            _0x28a552.prototype.jj = function (_0x287e3f) {

              this.xc.alpha = _0x287e3f;

            };

            _0x28a552.prototype.Qc = function () {

              return this.xc;

            };

            _0x28a552.prototype.Rc = function () {

              decoder.U(this.xc);

            };

            return _0x28a552;

          }();

          _0x232886.Worm = function () {

            function _0x4df41c(_0x41ea20) {

              this.hh = _0x41ea20;

              this.Eh = new _0x232886.Worm.li();

              this.xi = false;

              this.wi = true;

              this.Xc = false;

              this.$c = 0;

              this.Jm = 0;

              this.dj = 1;

              this.bd = 0;

              this.Bh = 0;

              this.dd = {};

              this.ad = 0;

              this.Km = new Float32Array(_0x546fba * 2);

              this.Lm = new Float32Array(_0x546fba * 2);

              this._c = new Float32Array(_0x546fba * 2);

              this.Mm = null;

              this.Nm = null;

              this.Om = null;

              this.Pm();

            }

            var _0x546fba = 200;

            _0x4df41c.prototype.si = function () {

              if (this.Nm != null) {

                decoder.U(this.Nm.nc);

              }

              if (this.Om != null) {

                decoder.U(this.Om);

              }

            };

            _0x4df41c.prototype.Pm = function () {

              this.zi(0.25);

              this.Eh.ma = "";

              this.wi = true;

              this.dd = {};

              this.kd(false);

            };

            _0x4df41c.prototype.ri = function (_0x1be569) {

              this.Eh = _0x1be569;

              this.Qm(this.xi);

            };

            _0x4df41c.prototype.kd = function (_0x3d79da) {

              var _0x5b6b3b = this.xi;

              this.xi = _0x3d79da;

              this.Qm(_0x5b6b3b);

            };

            _0x4df41c.prototype.zi = function (_0x4f6132) {

              this.Bh = _0x4f6132 * 50;

              var _0x413b23 = _0x4f6132;

              if (_0x4f6132 > this.hh.Ag) {

                _0x413b23 = Math.atan((_0x4f6132 - this.hh.Ag) / this.hh.Bg) * this.hh.Bg + this.hh.Ag;

              }

              var _0x3bf180 = Math.sqrt(Math.pow(_0x413b23 * 5, 0.707106781186548) * 4 + 25);

              var _0x5f3ba9 = Math.min(_0x546fba, Math.max(3, (_0x3bf180 - 5) * 5 + 1));

              var _0x461998 = this.ad;

              this.$c = (5 + _0x3bf180 * 0.9) * 0.025;

              this.ad = Math.floor(_0x5f3ba9);

              this.Jm = _0x5f3ba9 - this.ad;

              if (_0x461998 > 0 && _0x461998 < this.ad) {

                var _0x3fea95 = this.Km[_0x461998 * 2 - 2];

                var _0x3f0efb = this.Km[_0x461998 * 2 - 1];

                var _0x251352 = this.Lm[_0x461998 * 2 - 2];

                var _0x530005 = this.Lm[_0x461998 * 2 - 1];

                var _0x10675b = this._c[_0x461998 * 2 - 2];

                var _0x3fc5d6 = this._c[_0x461998 * 2 - 1];

                for (var _0x2dd705 = _0x461998; _0x2dd705 < this.ad; _0x2dd705++) {

                  this.Km[_0x2dd705 * 2] = _0x3fea95;

                  this.Km[_0x2dd705 * 2 + 1] = _0x3f0efb;

                  this.Lm[_0x2dd705 * 2] = _0x251352;

                  this.Lm[_0x2dd705 * 2 + 1] = _0x530005;

                  this._c[_0x2dd705 * 2] = _0x10675b;

                  this._c[_0x2dd705 * 2 + 1] = _0x3fc5d6;

                }

              }

            };

            _0x4df41c.prototype.Ei = function (_0x3b539b, _0x4bfeab) {

              this.ad = _0x4bfeab;

              for (var _0xcd0c69 = 0; _0xcd0c69 < this.ad; _0xcd0c69++) {

                this.Km[_0xcd0c69 * 2] = this.Lm[_0xcd0c69 * 2] = this._c[_0xcd0c69 * 2] = _0x3b539b();

                this.Km[_0xcd0c69 * 2 + 1] = this.Lm[_0xcd0c69 * 2 + 1] = this._c[_0xcd0c69 * 2 + 1] = _0x3b539b();

              }

            };

            _0x4df41c.prototype.Bi = function (_0x2b4581, _0xc605f2, _0x73e246) {

              this.Xc = _0x73e246;

              for (var _0xa6688c = 0; _0xa6688c < this.ad; _0xa6688c++) {

                this.Km[_0xa6688c * 2] = this.Lm[_0xa6688c * 2];

                this.Km[_0xa6688c * 2 + 1] = this.Lm[_0xa6688c * 2 + 1];

              }

              var _0x288e27 = _0x2b4581 - this.Lm[0];

              var _0x37972b = _0xc605f2 - this.Lm[1];

              this.Rm(_0x288e27, _0x37972b, this.ad, this.Lm);

            };

            _0x4df41c.prototype.Rm = function (_0x2a8b5c, _0x3a71bf, _0x597e06, _0x48bba4) {

              var _0x5d96b2 = Math.hypot(_0x2a8b5c, _0x3a71bf);

              if (!(_0x5d96b2 <= 0)) {

                var _0x5f9ba5 = _0x48bba4[0];

                var _0x230425 = undefined;

                _0x48bba4[0] += _0x2a8b5c;

                var _0x40e9f3 = _0x48bba4[1];

                var _0xee262f = undefined;

                _0x48bba4[1] += _0x3a71bf;

                var _0x383c23 = this.$c / (this.$c + _0x5d96b2);

                var _0x49298e = 1 - _0x383c23 * 2;

                for (var _0x509e87 = 1, _0x599059 = _0x597e06 - 1; _0x509e87 < _0x599059; _0x509e87++) {

                  _0x230425 = _0x48bba4[_0x509e87 * 2];

                  _0x48bba4[_0x509e87 * 2] = _0x48bba4[_0x509e87 * 2 - 2] * _0x49298e + (_0x230425 + _0x5f9ba5) * _0x383c23;

                  _0x5f9ba5 = _0x230425;

                  _0xee262f = _0x48bba4[_0x509e87 * 2 + 1];

                  _0x48bba4[_0x509e87 * 2 + 1] = _0x48bba4[_0x509e87 * 2 - 1] * _0x49298e + (_0xee262f + _0x40e9f3) * _0x383c23;

                  _0x40e9f3 = _0xee262f;

                }

                _0x383c23 = this.Jm * this.$c / (this.Jm * this.$c + _0x5d96b2);

                _0x49298e = 1 - _0x383c23 * 2;

                _0x48bba4[_0x597e06 * 2 - 2] = _0x48bba4[_0x597e06 * 2 - 4] * _0x49298e + (_0x48bba4[_0x597e06 * 2 - 2] + _0x5f9ba5) * _0x383c23;

                _0x48bba4[_0x597e06 * 2 - 1] = _0x48bba4[_0x597e06 * 2 - 3] * _0x49298e + (_0x48bba4[_0x597e06 * 2 - 1] + _0x40e9f3) * _0x383c23;

              }

            };

            _0x4df41c.prototype.fh = function () {

              return {

                x: this._c[0],

                y: this._c[1]

              };

            };

            _0x4df41c.prototype.yi = function (_0xce97d, _0x54f51c) {

              var _0x186c0e = 1000000;

              var _0x4a14fb = _0xce97d;

              var _0x56d5e9 = _0x54f51c;

              for (var _0x230c42 = 0; _0x230c42 < this.ad; _0x230c42++) {

                var _0x24dbe5 = this._c[_0x230c42 * 2];

                var _0x1951e5 = this._c[_0x230c42 * 2 + 1];

                var _0x486bf8 = Math.hypot(_0xce97d - _0x24dbe5, _0x54f51c - _0x1951e5);

                if (_0x486bf8 < _0x186c0e) {

                  _0x186c0e = _0x486bf8;

                  _0x4a14fb = _0x24dbe5;

                  _0x56d5e9 = _0x1951e5;

                }

              }

              return {

                x: _0x4a14fb,

                y: _0x56d5e9,

                distance: _0x186c0e

              };

            };

            _0x4df41c.prototype.ti = function (_0x1c363a) {

              this.Mm = _0x1c363a;

            };

            _0x4df41c.prototype.hj = function (_0x4069b9, _0x150a83) {

              this.dj = decoder.Q(this.dj, this.wi ? this.Xc ? 0.9 + Math.cos(_0x4069b9 / 400 * Math.PI) * 0.1 : 1 : 0, _0x150a83, 1 / 800);

              this.bd = decoder.Q(this.bd, this.wi ? this.Xc ? 1 : 0 : 1, _0x150a83, 0.0025);

              if (this.Nm != null) {

                this.Nm.nc.alpha = this.dj;

              }

              if (this.Om != null) {

                this.Om.alpha = this.dj;

              }

            };

            _0x4df41c.prototype.ij = function (_0x39d742, _0xab9335, _0x439ce6, _0x57f654) {

              if (this.xi && this.wi) {

                var _0x2b7dab = Math.pow(0.11112, _0xab9335 / 95);

                for (var _0x3a274b = 0; _0x3a274b < this.ad; _0x3a274b++) {

                  this._c[_0x3a274b * 2] = decoder.S(decoder.S(this.Km[_0x3a274b * 2], this.Lm[_0x3a274b * 2], _0x439ce6), this._c[_0x3a274b * 2], _0x2b7dab);

                  this._c[_0x3a274b * 2 + 1] = decoder.S(decoder.S(this.Km[_0x3a274b * 2 + 1], this.Lm[_0x3a274b * 2 + 1], _0x439ce6), this._c[_0x3a274b * 2 + 1], _0x2b7dab);

                }

              }

              if (this.Nm && this.xi) {

                this.Nm.Zc(this, _0x39d742, _0xab9335, _0x57f654);

              }

              if (this.Om) {

                this.Om.ih.x = this._c[0];

                this.Om.ih.y = this._c[1] - this.$c * 3;

              }

            };

            _0x4df41c.prototype.Qm = function (_0x5a6e3f) {

              if (this.xi) {

                if (!_0x5a6e3f) {

                  this.Sm();

                }

              } else {

                if (this.Nm != null) {

                  decoder.U(this.Nm.nc);

                }

                if (this.Om != null) {

                  decoder.U(this.Om);

                }

              }

            };

            _0x4df41c.prototype.Sm = function () {

              var _0x898cae = _0x5d39d0();

              this.Nm = this.Nm || new _0x232886.WormSpriteTree();

              decoder.U(this.Nm.nc);

              this.Nm.yc(_0x898cae.dh.hh.xg, _0x898cae.Lc.Ub().jb(this.Eh.Gh), _0x898cae.Lc.Ub().ib(this.Eh.Hh), _0x898cae.Lc.Ub().kb(this.Eh.ni), _0x898cae.Lc.Ub().lb(this.Eh.oi), _0x898cae.Lc.Ub().mb(this.Eh.pi), _0x898cae.Lc.Ub().nb(this.Eh.qi), "#ffffff");

              this.Om = this.Om || new _0x232886.Tm("");

              decoder.U(this.Om);

              this.Om.style.fontFamily = "PTSans";

              this.Om.anchor.set(0.5);

              this.Om.style.fontSize = parseInt(bbs.enemyNameFontSize || 14);

              this.Om.style.fill = bbs.enemyNameColor || _0x898cae.Lc.Ub().ib(this.Eh.Hh).tb || "#fff";

              this.Om.style.fontWeight = "bold";

              this.Om.text = _0x309b30 ? this.Eh.ma : "-----";

              this.Mm.oh(this.Eh.ae, this.Nm, this.Om);

              console.log(this.Eh);

            };

            _0x4df41c.li = function () {

              function _0x4b1c68() {

                this.ae = 0;

                this.Gh = _0x39fe91.ps ? _0x39fe91.ps : _0x232886.GameParams.Cg;

                this.Hh = 0;

                this.ni = 0;

                this.oi = 0;

                this.pi = 0;

                this.qi = 0;

                this.ma = 0;

              }

              return _0x4b1c68;

            }();

            return _0x4df41c;

          }();

          _0x232886.Tm = function () {

            return decoder.M(_0x429afb.Text, function (_0x22e2e6, _0x468f75, _0x3b562b) {

              _0x429afb.Text.call(this, _0x22e2e6, _0x468f75, _0x3b562b);

              this.ih = {

                x: 0,

                y: 0

              };

            });

          }();

          _0x232886.hb = function () {

            function _0x4979d5(_0x4ca7d4, _0x231e84, _0x2130b7, _0x55faf8, _0x1c8a12) {

              this.lj = _0x4ca7d4;

              this.mj = _0x231e84;

              this.nj = _0x2130b7;

              this.oj = _0x55faf8;

              this.pj = _0x1c8a12;

            }

            _0x4979d5.prototype.Um = function (_0x5cb40f) {

              return new _0x4979d5(_0x5cb40f, this.mj, this.nj, this.oj, this.pj);

            };

            _0x4979d5.prototype.Vm = function (_0x23e887) {

              return new _0x4979d5(this.lj, _0x23e887, this.nj, this.oj, this.pj);

            };

            _0x4979d5.prototype.Wm = function (_0x4a9d27) {

              return new _0x4979d5(this.lj, this.mj, _0x4a9d27, this.oj, this.pj);

            };

            _0x4979d5.prototype.Xm = function (_0x39c34a) {

              return new _0x4979d5(this.lj, this.mj, this.nj, _0x39c34a, this.pj);

            };

            _0x4979d5.prototype.Ym = function (_0x578744) {

              return new _0x4979d5(this.lj, this.mj, this.nj, this.oj, _0x578744);

            };

            return _0x4979d5;

          }();

          _0x232886.Vl = function () {

            function _0x7f5298(_0x260a35) {

              this.Zm = new _0x232886.WormSpriteTree();

              this.Zm.nc.addChild(this.Zm.oc);

              this.$m = null;

              this._m = null;

              this.bm = _0x260a35;

              this.pc = 0;

              this.Gi = 1;

              this.an = 1;

              this.bn = 1;

              this.cn = 1;

              this.dn = 1;

              this.gn = 1;

              this.hn = 1;

              this._l("#ffffff");

            }

            var _0x2c102f = new _0x232886.hb(0, 0, 0, 0, 0);

            _0x7f5298.prototype.tf = function () {

              return this.Zm.nc;

            };

            _0x7f5298.prototype.Wl = function (_0x29e700) {

              this.pc = _0x29e700;

              if (this.Zm.pc !== _0x29e700) {

                for (var _0x277be7 = _0x29e700; _0x277be7 < this.Zm.qc.length; _0x277be7++) {

                  this.Zm.qc[_0x277be7].Uc();

                }

                while (this.Zm.pc > _0x29e700) {

                  this.Zm.pc -= 1;

                  var _0x2bcccb = this.Zm.qc[this.Zm.pc];

                  _0x2bcccb.Dc.Rc();

                  _0x2bcccb.Cc.Rc();

                }

                while (this.Zm.pc < _0x29e700) {

                  var _0x447ea1 = this.Zm.qc[this.Zm.pc];

                  this.Zm.pc += 1;

                  this.Zm.nc.addChild(_0x447ea1.Cc.Qc());

                  this.Zm.nc.addChild(_0x447ea1.Dc.Qc());

                  _0x447ea1.Cc.jj(this.an);

                  _0x447ea1.Dc.jj(this.bn);

                }

                for (var _0x2cd5a8 = 0; _0x2cd5a8 < this.Zm.oc.Fc.length; _0x2cd5a8++) {

                  this.Zm.oc.Fc[_0x2cd5a8].jj(this.cn);

                }

                for (var _0x4a89bb = 0; _0x4a89bb < this.Zm.oc.Gc.length; _0x4a89bb++) {

                  this.Zm.oc.Gc[_0x4a89bb].jj(this.dn);

                }

                for (var _0x330770 = 0; _0x330770 < this.Zm.oc.Ic.length; _0x330770++) {

                  this.Zm.oc.Ic[_0x330770].jj(this.gn);

                }

                for (var _0x56abad = 0; _0x56abad < this.Zm.oc.Hc.length; _0x56abad++) {

                  this.Zm.oc.Hc[_0x56abad].jj(this.hn);

                }

              }

            };

            _0x7f5298.prototype.am = function () {

              return this.pc;

            };

            _0x7f5298.prototype.$l = function (_0x48aa40) {

              this.$m = _0x48aa40;

              this._m = "#ffffff";

              this.lm();

            };

            _0x7f5298.prototype._l = function (_0x4acde1) {

              this.$m = _0x2c102f;

              this._m = _0x4acde1;

              this.lm();

            };

            _0x7f5298.prototype.lm = function () {

              var _0x1df481 = _0x5d39d0();

              this.Zm.yc(_0x232886.Ac.vg, null, _0x1df481.Lc.Ub().ib(this.$m.lj), _0x1df481.Lc.Ub().kb(this.$m.mj), _0x1df481.Lc.Ub().lb(this.$m.nj), _0x1df481.Lc.Ub().mb(this.$m.pj), _0x1df481.Lc.Ub().nb(this.$m.oj), this._m);

            };

            _0x7f5298.prototype.Xl = function (_0xbba9fd) {

              this.Gi = _0xbba9fd;

            };

            _0x7f5298.prototype.cm = function () {

              return this.Gi;

            };

            _0x7f5298.prototype.om = function (_0x2d95ab, _0x2daefa) {

              this.an = _0x2d95ab;

              this.bn = _0x2daefa;

              for (var _0x30ec49 = 0; _0x30ec49 < this.pc; _0x30ec49++) {

                var _0x451413 = this.Zm.qc[_0x30ec49];

                _0x451413.Cc.jj(this.an);

                _0x451413.Dc.jj(this.bn);

              }

            };

            _0x7f5298.prototype.rm = function (_0x422d9f, _0x18e61b, _0x450856, _0x18eb60) {

              this.cn = _0x422d9f;

              this.dn = _0x18e61b;

              this.gn = _0x450856;

              this.hn = _0x18eb60;

              for (var _0x4f7d2a = 0; _0x4f7d2a < this.Zm.oc.Fc.length; _0x4f7d2a++) {

                this.Zm.oc.Fc[_0x4f7d2a].jj(this.cn);

              }

              for (var _0x9d0a02 = 0; _0x9d0a02 < this.Zm.oc.Gc.length; _0x9d0a02++) {

                this.Zm.oc.Gc[_0x9d0a02].jj(this.dn);

              }

              for (var _0x133c52 = 0; _0x133c52 < this.Zm.oc.Ic.length; _0x133c52++) {

                this.Zm.oc.Ic[_0x133c52].jj(this.gn);

              }

              for (var _0x28c879 = 0; _0x28c879 < this.Zm.oc.Hc.length; _0x28c879++) {

                this.Zm.oc.Hc[_0x28c879].jj(this.hn);

              }

            };

            _0x7f5298.prototype.Uf = function () {

              var _0x1607cb = this.Gi * 2;

              var _0x21cee3 = this.Gi * 2 * 1.5;

              if (this.pc > 0) {

                var _0x2c220b = this.bm[0];

                var _0x5e5110 = this.bm[1];

                var _0x973f69 = this.bm[2];

                this.Zm.qc[0].Sc(_0x2c220b, _0x5e5110, _0x1607cb, _0x21cee3, _0x973f69);

                this.Zm.oc.Sc(_0x2c220b, _0x5e5110, _0x1607cb, _0x973f69);

              }

              for (var _0x40acda = 1; _0x40acda < this.pc; _0x40acda++) {

                var _0x3e028a = this.bm[_0x40acda * 3];

                var _0x8d6bcf = this.bm[_0x40acda * 3 + 1];

                var _0x343334 = this.bm[_0x40acda * 3 + 2];

                this.Zm.qc[_0x40acda].Sc(_0x3e028a, _0x8d6bcf, _0x1607cb, _0x21cee3, _0x343334);

              }

            };

            _0x7f5298.prototype.tm = function (_0x2915e2) {

              _0x2915e2.render(this.Zm.nc);

            };

            return _0x7f5298;

          }();

          _0x232886.kf = function () {

            function _0x34c9b2(_0x2c6d51) {

              this.nd = _0x2c6d51;

            }

            _0x34c9b2.bgcanvas = $("#background-canvas");

            _0x34c9b2.socialButtons = $("#social-buttons");

            _0x34c9b2.socialButtons.html("");

            _0x34c9b2.jn = $("#game-view");

            _0x34c9b2.gameCanvas = $("#game-canvas");

            _0x34c9b2.ln = $("#results-view");

            _0x34c9b2.mn = $("#stretch-box");

            _0x34c9b2.nn = $("#main-menu-view");

            _0x34c9b2.pn = $("#popup-view");

            _0x34c9b2.qn = $("#loading-view");

            _0x34c9b2.rn = $("#restricted-view");

            _0x34c9b2.sn = $("#toaster-view");

            _0x34c9b2.tn = $("#error-gateway-connection-view");

            _0x34c9b2.un_error = $("#error-game-connection-view");

            _0x34c9b2.vn = $("#markup-wrap");

            _0x34c9b2.prototype.ha = function () {};

            _0x34c9b2.prototype.Gk = function () {};

            _0x34c9b2.prototype.Hk = function () {};

            _0x34c9b2.prototype.Bk = function () {};

            _0x34c9b2.prototype.Jf = function () {};

            _0x34c9b2.prototype.Nf = function (_0x5c0dd2, _0x27f67e) {};

            return _0x34c9b2;

          }();

          _0x232886.Vj = function () {

            function _0x35d960(_0x2498d9, _0x19cf46, _0x4efa6c, _0x4a9633, _0x18ba4c, _0x4fc42f) {

              var _0x5e0b2e = "OK";

              var _0x1f0b4e = $(_0x5e0b2e);

              _0x1f0b4e.click(function () {

                if (typeof FB != "undefined" && FB.ui !== undefined) {

                  FB.ui({

                    method: "feed",

                    display: "popup",

                    link: _0x19cf46,

                    name: _0x4efa6c,

                    caption: _0x4a9633,

                    description: _0x18ba4c,

                    picture: _0x4fc42f

                  }, function () {});

                }

              });

              return _0x1f0b4e;

            }

            var _0x5effab = $("#final-caption");

            var _0x4327d6 = $("#final-continue");

            var _0x20e204 = $("#congrats-bg");

            var _0x1902e8 = $("#unl6wj4czdl84o9b");

            $("#congrats");

            var _0x135ec7 = $("#final-share-fb");

            var _0x480cd3 = $("#final-message");

            var _0x253636 = $("#final-score");

            var _0x421d66 = $("#final-place");

            var _0x18a9ed = $("#final-board");

            var _0x2822cb = decoder.M(_0x232886.kf, function () {

              _0x232886.kf.call(this, _0x232886.Fk.wn);

              var _0x160364 = this;

              var _0x225387 = _0x5d39d0();

              _0x135ec7.toggle(_0x460971.xn);

              _0x5effab.text(decoder.H("index.game.result.title"));

              _0x4327d6.text(decoder.H("index.game.result.continue"));

              _0x4327d6.html("Continue");

              _0x4327d6.after("<div id='final-replay'>Respawn</div>");

              

              _0x4327d6.click(function () {

                _0x225387.Ci.Be();

                _0x225387.zn.yn.ka();

                _0x225387.Ci.pe(_0x232886.ge.je._e);

                _0x225387.og.Ak(_0x225387.og._e);

              });

            

              $("#final-replay").css({

                "position": "absolute",

                "top": "60px",

                "left": "15px",

                "right": "15px",

                "background": "#f7941d",

                "color": "#ffffff",

                "line-height": "50px",

                "border-radius": "5px",

                "text-align": "center",

                "cursor": "pointer",

                "border": "none",

                "font-size": "24px",

                "z-index": "9999",

                "pointer-events": "auto"

              });

            

              // تأثير hover خفيف جداً

              $("#final-replay").hover(

                function() {

                  $(this).css({

                    "background": "#af5e00ff"

                  });

                },

                function() {

                  $(this).css({

                    "background": "#f7941d",

                    "box-shadow": "0 1px 1px 0 rgba(0,0,0,.5)"

                  });

                }

              );

            

              $("#final-replay").click(function () {

                respawnFn();

              });

              $("html").keydown(function (_0x238c8c) {

                if (_0x238c8c.keyCode === 32) {

                  _0x160364.An = true;

                }

              }).keyup(function (_0x36106e) {

                if (_0x36106e.keyCode === 32) {

                  _0x160364.An = false;

                }

              });

              this.ng = new _0x232886.Eg(_0x232886.kf.gameCanvas);

              this.Cn = 0;

              this.Bn = 0;

              this.An = false;

            });

            _0x2822cb.prototype.ha = function () {};

            _0x2822cb.prototype.Gk = function () {

              if (this.Cn === 0) {

                _0x232886.kf.jn.stop();

                _0x232886.kf.jn.fadeIn(500);

                _0x232886.kf.ln.stop();

                _0x232886.kf.ln.fadeOut(1);

                _0x232886.kf.nn.stop();

                _0x232886.kf.nn.fadeOut(50);

                _0x232886.kf.pn.stop();

                _0x232886.kf.pn.fadeOut(50);

                _0x232886.kf.sn.stop();

                _0x232886.kf.sn.fadeOut(50);

                _0x232886.kf.qn.stop();

                _0x232886.kf.qn.fadeOut(50);

                _0x232886.kf.rn.stop();

                _0x232886.kf.rn.fadeOut(50);

                _0x232886.kf.tn.stop();

                _0x232886.kf.tn.fadeOut(50);

                _0x232886.kf.un_error.stop();

                _0x232886.kf.un_error.fadeOut(50);

                _0x232886.kf.mn.stop();

                _0x232886.kf.mn.fadeOut(1);

                _0x232886.kf.bgcanvas.stop();

                _0x232886.kf.bgcanvas.fadeOut(50);

                _0x232886.GameView.Kf(false);

                _0x232886.kf.socialButtons.stop();

                _0x232886.kf.socialButtons.fadeOut(50);

                _0x232886.kf.vn.stop();

                _0x232886.kf.vn.fadeOut(50);

              } else {

                _0x232886.kf.jn.stop();

                _0x232886.kf.jn.fadeIn(500);

                _0x232886.kf.ln.stop();

                _0x232886.kf.ln.fadeIn(500);

                _0x232886.kf.nn.stop();

                _0x232886.kf.nn.fadeOut(50);

                _0x232886.kf.pn.stop();

                _0x232886.kf.pn.fadeOut(50);

                _0x232886.kf.sn.stop();

                _0x232886.kf.sn.fadeOut(50);

                _0x232886.kf.qn.stop();

                _0x232886.kf.qn.fadeOut(50);

                _0x232886.kf.rn.stop();

                _0x232886.kf.rn.fadeOut(50);

                _0x232886.kf.tn.stop();

                _0x232886.kf.tn.fadeOut(50);

                _0x232886.kf.un_error.stop();

                _0x232886.kf.un_error.fadeOut(50);

                _0x232886.kf.mn.stop();

                _0x232886.kf.mn.fadeOut(1);

                _0x232886.kf.bgcanvas.stop();

                _0x232886.kf.bgcanvas.fadeOut(50);

                _0x232886.GameView.Kf(false);

                _0x232886.kf.socialButtons.stop();

                _0x232886.kf.socialButtons.fadeOut(50);

                _0x232886.kf.vn.stop();

                _0x232886.kf.vn.fadeOut(50);

              }

            };

            _0x2822cb.prototype.Dn = function () {

              this.Cn = 0;

              return this;

            };

            _0x2822cb.prototype.En = function () {

              _0x20e204.hide();

              setTimeout(function () {

                _0x20e204.fadeIn(500);

              }, 3000);

              _0x1902e8.hide();

              setTimeout(function () {

                _0x1902e8.fadeIn(500);

              }, 500);

              this.Cn = 1;

              return this;

            };

            _0x2822cb.prototype.Hk = function () {

              this.An = false;

              this.ng.Jf();

              if (this.Cn === 1) {

                _0x5d39d0().Ci.Fe();

              }

            };

            _0x2822cb.prototype.Jf = function () {

              this.ng.Jf();

            };

            _0x2822cb.prototype.Nf = function (_0xba3d14, _0x3593a2) {

              this.ng.Nf(_0xba3d14, _0x3593a2);

            };

            _0x2822cb.prototype.Fn = function (_0x2b3a12, _0xece49f, _0xb61f43) {

              var _0x154cb4 = undefined;

              var _0x309904 = undefined;

              var _0x1a9c06 = undefined;

              if (_0xece49f >= 1 && _0xece49f <= 10) {

                _0x154cb4 = decoder.H("index.game.result.place.i" + _0xece49f);

                _0x309904 = decoder.H("index.game.result.placeInBoard");

                _0x1a9c06 = decoder.H("index.game.social.shareResult.messGood").replace("{0}", _0xb61f43).replace("{1}", _0x2b3a12).replace("{2}", _0x154cb4);

              } else {

                _0x154cb4 = "";

                _0x309904 = decoder.H("index.game.result.tryHit");

                _0x1a9c06 = decoder.H("index.game.social.shareResult.messNorm").replace("{0}", _0xb61f43).replace("{1}", _0x2b3a12);

              }

              _0x480cd3.html(decoder.H("index.game.result.your"));

              _0x253636.html(_0x2b3a12);

              _0x421d66.html(_0x154cb4);

              _0x18a9ed.html(_0x309904);

              if (_0x460971.xn) {

                var _0x5778bc = decoder.H("index.game.result.share");

                decoder.H("index.game.social.shareResult.caption");

                _0x135ec7.empty().append(_0x35d960(_0x5778bc, "https://wormate.io", "wormate.io", _0x1a9c06, _0x1a9c06, "https://wormate.io/images/og-share-img-new.jpg"));

              }

            };

            _0x2822cb.prototype.Gn = function () {

              return this.Bn;

            };

            _0x2822cb.prototype.Hn = function () {

              return this.An;

            };

            return _0x2822cb;

          }();

          _0x232886.sk = function () {

            var _0x58f61a = $("#loading-progress-cont");

            var _0x3b724b = $("#loading-progress-bar");

            var _0xa6a947 = $("#loading-progress-text");

            var _0x2ba2cf = decoder.M(_0x232886.kf, function () {

              _0x232886.kf.call(this, _0x232886.Fk.wn);

              this.In = -1;

              this.Jn = "";

            });

            _0x2ba2cf.prototype.ha = function () {};

            _0x2ba2cf.prototype.Gk = function () {

              _0x232886.kf.jn.stop();

              _0x232886.kf.jn.fadeOut(50);

              _0x232886.kf.ln.stop();

              _0x232886.kf.ln.fadeOut(50);

              _0x232886.kf.nn.stop();

              _0x232886.kf.nn.fadeOut(50);

              _0x232886.kf.pn.stop();

              _0x232886.kf.pn.fadeOut(50);

              _0x232886.kf.sn.stop();

              _0x232886.kf.sn.fadeOut(50);

              _0x232886.kf.qn.stop();

              _0x232886.kf.qn.fadeIn(500);

              _0x232886.kf.rn.stop();

              _0x232886.kf.rn.fadeOut(50);

              _0x232886.kf.tn.stop();

              _0x232886.kf.tn.fadeOut(50);

              _0x232886.kf.un_error.stop();

              _0x232886.kf.un_error.fadeOut(50);

              _0x232886.kf.mn.stop();

              _0x232886.kf.mn.fadeIn(1);

              _0x232886.kf.bgcanvas.stop();

              _0x232886.kf.bgcanvas.fadeIn(500);

              _0x232886.GameView.Kf(true);

              _0x232886.kf.socialButtons.stop();

              _0x232886.kf.socialButtons.fadeOut(50);

              _0x232886.kf.vn.stop();

              _0x232886.kf.vn.fadeOut(50);

            };

            _0x2ba2cf.prototype.Hk = function () {

              _0x5d39d0().Ci.pe(_0x232886.ge.je.ie);

            };

            _0x2ba2cf.prototype.Bk = function () {};

            _0x2ba2cf.prototype.Kn = function () {

              this.Ln("", 0);

              _0x58f61a.stop();

              _0x58f61a.fadeIn(100);

            };

            _0x2ba2cf.prototype.Mn = function () {

              _0x58f61a.stop();

              _0x58f61a.fadeOut(100);

            };

            _0x2ba2cf.prototype.Ln = function (_0x3145ea, _0x2a071) {

              if (this.Jn !== _0x3145ea) {

                this.Jn = _0x3145ea;

              }

              var _0x3f5c01 = decoder.P(Math.floor(_0x2a071 * 100), 0, 100);

              if (this.In !== _0x3f5c01) {

                _0x3b724b.css({

                  width: _0x3f5c01 + "%"

                });

                _0xa6a947.html(_0x3f5c01 + " %");

              }

            };

            return _0x2ba2cf;

          }();

          _0x232886.Wj = function () {

            var _0x17c4b9 = $("#mm-line-top");

            $("#mm-line-center");

            $("#mm-line-bottom");

            var _0x377e4e = $("#mm-bottom-buttons");

            var _0x160515 = $("#mm-menu-cont");

            var _0x2a114b = $("#mm-loading");

            var _0x22ab4b = $("#mm-loading-progress-bar");

            var _0x2f2f16 = $("#mm-loading-progress-text");

            $("#mm-event-text");

            var _0xa646ac = $("#mm-skin-canv");

            var _0x453a9b = $("#mm-skin-prev");

            var _0xcd6d67 = $("#mm-skin-next");

            var _0x2b6b07 = $("#mm-skin-over");

            var _0x3151d3 = $("#mm-skin-over-button-list");

            var _0x1cb438 = $("#mm-params-nickname");

            var _0x52ed76 = $("#mm-params-game-mode");

            var _0x56fd78 = $("#mm-action-play");

            var _0x4e07f7 = $("#mm-action-guest");

            var _0xe6d51a = $("#mm-action-login");

            var _0x36b57f = $("#mm-player-info");

            var _0x56ba18 = $("#mm-store");

            var _0x10c97b = $("#mm-leaders");

            var _0x51525e = $("#mm-settings");

            var _0x5f2739 = $("#mm-coins-box");

            var _0x2b8c03 = $("#mm-player-avatar");

            var _0x48b5fd = $("#mm-player-username");

            var _0x5a5419 = $("#mm-coins-val");

            var _0x188496 = $("#mm-player-exp-bar");

            var _0x1348a2 = $("#mm-player-exp-val");

            var _0x4f76f7 = $("#mm-player-level");

            var _0x35360e = decoder.M(_0x232886.kf, function () {

              _0x232886.kf.call(this, _0x232886.Fk.Ek);

              var _0x5a9b4f = _0x5d39d0();

              this.In = -1;

              this.Jn = "";

              this.Nn = new _0x232886.dm(_0xa646ac);

              _0x52ed76.click(function () {

                _0x5a9b4f.Ci.Be();

              });

              _0xa646ac.click(function () {

                if (_0x5a9b4f.Ij.Hj()) {

                  _0x5a9b4f.Ci.Be();

                  _0x5a9b4f.og.Ak(_0x5a9b4f.og.ik);

                }

              });

              _0x453a9b.click(function () {

                _0x5a9b4f.Ci.Be();

                _0x5a9b4f.On.Ej();

              });

              _0xcd6d67.click(function () {

                _0x5a9b4f.Ci.Be();

                _0x5a9b4f.On.Dj();

              });

              _0x1cb438.keypress(function (_0x283822) {

                if (_0x283822.keyCode == 13) {

                  _0x5a9b4f.Pn(true);

                }

              });

              _0x56fd78.click(function () {

                _0x5a9b4f.Ci.Be();

                _0x5a9b4f.Pn(true);

              });

              _0x4e07f7.click(function () {

                _0x5a9b4f.Ci.Be();

                _0x5a9b4f.Pn(true);

              });

              _0xe6d51a.click(function () {

                _0x5a9b4f.Ci.Be();

                _0x5a9b4f.og.Ak(_0x5a9b4f.og.fk);

              });

              _0x51525e.click(function () {

                _0x5a9b4f.Ci.Be();

                _0x5a9b4f.og.Ak(_0x5a9b4f.og.$h);

              });

              _0x36b57f.click(function () {

                if (_0x5a9b4f.Ij.Hj()) {

                  _0x5a9b4f.Ci.Be();

                  _0x5a9b4f.og.Ak(_0x5a9b4f.og.dk);

                }

              });

              _0x10c97b.click(function () {

                if (_0x5a9b4f.Ij.Hj()) {

                  _0x5a9b4f.Ci.Be();

                  _0x5a9b4f.og.Ak(_0x5a9b4f.og.bk);

                }

              });

              _0x56ba18.click(function () {

                if (_0x5a9b4f.Ij.Hj()) {

                  _0x5a9b4f.Ci.Be();

                  _0x5a9b4f.og.Ak(_0x5a9b4f.og.kk);

                }

              });

              _0x5f2739.click(function () {

                if (_0x5a9b4f.Ij.Hj()) {

                  _0x5a9b4f.Ci.Be();

                  _0x5a9b4f.og.Ak(_0x5a9b4f.og._j);

                }

              });

              this.Qn();

              this.Rn();

              var _0x43d6e5 = _0x232886.Vf.fg(_0x232886.Vf._f);

              if (_0x43d6e5 !== "ARENA" && _0x43d6e5 !== "TEAM2") {

                _0x43d6e5 = "ARENA";

              }

              _0x52ed76.val(_0x43d6e5);

            });

            _0x35360e.prototype.ha = function () {

              var _0x589c20 = _0x5d39d0();

              var _0x5d7c18 = this;

              _0x589c20.Ij.zl(function () {

                if (_0x589c20.Ij.Hj()) {

                  _0x589c20.On.Fj(_0x589c20.Ij.ml(), _0x232886.tj.sj);

                  _0x589c20.On.Fj(_0x589c20.Ij.nl(), _0x232886.tj.uj);

                  _0x589c20.On.Fj(_0x589c20.Ij.ol(), _0x232886.tj.vj);

                  _0x589c20.On.Fj(_0x589c20.Ij.pl(), _0x232886.tj.xj);

                  _0x589c20.On.Fj(_0x589c20.Ij.ql(), _0x232886.tj.wj);

                } else {

                  _0x589c20.On.Fj(_0x589c20.Sn(), _0x232886.tj.sj);

                  _0x589c20.On.Fj(0, _0x232886.tj.uj);

                  _0x589c20.On.Fj(0, _0x232886.tj.vj);

                  _0x589c20.On.Fj(0, _0x232886.tj.xj);

                  _0x589c20.On.Fj(0, _0x232886.tj.wj);

                }

              });

              _0x589c20.Ij.zl(function () {

                _0x56fd78.toggle(_0x589c20.Ij.Hj());

                _0xe6d51a.toggle(!_0x589c20.Ij.Hj());

                _0x36b57f.toggle(true);

                _0x4e07f7.toggle(!_0x589c20.Ij.Hj());

                _0x51525e.toggle(true);

                _0x10c97b.toggle(_0x589c20.Ij.Hj());

                _0x56ba18.toggle(_0x589c20.Ij.Hj());

                _0x5f2739.toggle(_0x589c20.Ij.Hj());

                if (_0x589c20.Ij.Hj()) {

                  _0x2b6b07.hide();

                  _0x48b5fd.html(_0x589c20.Ij.dl());

                  _0x2b8c03.attr("src", _0x589c20.Ij.fl());

                  _0x5a5419.html(_0x589c20.Ij.il());

                  _0x188496.width(_0x589c20.Ij.kl() * 100 / _0x589c20.Ij.ll() + "%");

                  _0x1348a2.html(_0x589c20.Ij.kl() + " / " + _0x589c20.Ij.ll());

                  _0x4f76f7.html(_0x589c20.Ij.jl());

                  _0x1cb438.val(_0x589c20.Ij.el());

                } else {

                  _0x2b6b07.toggle(_0x460971.xn && !_0x589c20.Tn());

                  _0x48b5fd.html(_0x48b5fd.data("guest"));

                  _0x2b8c03.attr("src", decoder.a.e);

                  _0x5a5419.html("10");

                  _0x188496.width("0");

                  _0x1348a2.html("");

                  _0x4f76f7.html(1);

                  _0x1cb438.val(_0x232886.Vf.fg(_0x232886.Vf.ag));

                }

              });

              _0x589c20.On.zj(function () {

                _0x5d7c18.Nn.$l(_0x589c20.On.yj());

              });

            };

            _0x35360e.prototype.Gk = function () {

              _0x232886.kf.jn.stop();

              _0x232886.kf.jn.fadeOut(50);

              _0x232886.kf.ln.stop();

              _0x232886.kf.ln.fadeOut(50);

              _0x232886.kf.nn.stop();

              _0x232886.kf.nn.fadeIn(500);

              _0x232886.kf.pn.stop();

              _0x232886.kf.pn.fadeOut(50);

              _0x232886.kf.sn.stop();

              _0x232886.kf.sn.fadeOut(50);

              _0x232886.kf.qn.stop();

              _0x232886.kf.qn.fadeOut(50);

              _0x232886.kf.rn.stop();

              _0x232886.kf.rn.fadeOut(50);

              _0x232886.kf.tn.stop();

              _0x232886.kf.tn.fadeOut(50);

              _0x232886.kf.un_error.stop();

              _0x232886.kf.un_error.fadeOut(50);

              _0x232886.kf.mn.stop();

              _0x232886.kf.mn.fadeIn(1);

              _0x232886.kf.bgcanvas.stop();

              _0x232886.kf.bgcanvas.fadeIn(500);

              _0x232886.GameView.Kf(true);

              _0x232886.kf.socialButtons.stop();

              _0x232886.kf.socialButtons.fadeIn(500);

              _0x232886.kf.vn.stop();

              _0x232886.kf.vn.fadeIn(500);

            };

            _0x35360e.prototype.Un = function () {

              _0x17c4b9.fadeIn(500);

              _0x377e4e.fadeIn(500);

              _0x160515.fadeIn(500);

              _0x2a114b.fadeOut(100);

            };

            _0x35360e.prototype.Vn = function () {

              _0x17c4b9.fadeOut(100);

              _0x377e4e.fadeOut(100);

              _0x160515.fadeOut(100);

              _0x2a114b.fadeIn(500);

            };

            _0x35360e.prototype.Ln = function (_0x35cb7b, _0x1f004a) {

              if (this.Jn !== _0x35cb7b) {

                this.Jn = _0x35cb7b;

              }

              var _0x17bb1a = decoder.P(Math.floor(_0x1f004a * 100), 0, 100);

              if (this.In !== _0x17bb1a) {

                _0x22ab4b.css({

                  width: _0x17bb1a + "%"

                });

                _0x2f2f16.html(_0x17bb1a + " %");

              }

            };

            _0x35360e.prototype.Hk = function () {

              _0x5d39d0().Ci.Ce();

              this.Nn.Kf(true);

            };

            _0x35360e.prototype.Bk = function () {

              this.Nn.Kf(false);

            };

            _0x35360e.prototype.Jf = function () {

              this.Nn.Jf();

            };

            _0x35360e.prototype.Nf = function (_0x1bd9d1, _0x4c09e8) {

              this.Nn.Nf();

            };

            _0x35360e.prototype.el = function () {

              return _0x1cb438.val();

            };

            _0x35360e.prototype.Wn = function () {

              return _0x52ed76.val();

            };

            _0x35360e.prototype.Qn = function () {};

            _0x35360e.prototype.Rn = function () {

              function _0x3a5f1b() {

                _0x1bc29b.Xn(true);

                setTimeout(function () {

                  _0x2b6b07.hide();

                }, 3000);

              }

              var _0x1bc29b = _0x5d39d0();

              if (_0x460971.xn && !_0x1bc29b.Tn()) {

                _0x2b6b07.show();

                var _0x5b4cdf = decoder.H("index.game.main.menu.unlockSkins.share");

                var _0x3e6868 = encodeURIComponent(decoder.H("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");

                var _0x2a9556 = encodeURIComponent(decoder.H("index.game.main.menu.unlockSkins.comeAndPlay"));

                _0x3151d3.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + _0x3e6868 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + _0x5b4cdf + "</span></a>").click(_0x3a5f1b));

                _0x3151d3.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + _0x2a9556 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + _0x5b4cdf + "</span></a>").click(_0x3a5f1b));

              }

            };

            return _0x35360e;

          }();

          _0x232886.yk = function () {

            var _0x4cc083 = decoder.M(_0x232886.kf, function () {

              _0x232886.kf.call(this, _0x232886.Fk.wn);

            });

            _0x4cc083.prototype.ha = function () {};

            _0x4cc083.prototype.Gk = function () {

              _0x232886.kf.jn.stop();

              _0x232886.kf.jn.fadeOut(50);

              _0x232886.kf.ln.stop();

              _0x232886.kf.ln.fadeOut(50);

              _0x232886.kf.nn.stop();

              _0x232886.kf.nn.fadeOut(50);

              _0x232886.kf.pn.stop();

              _0x232886.kf.pn.fadeOut(50);

              _0x232886.kf.sn.stop();

              _0x232886.kf.sn.fadeOut(50);

              _0x232886.kf.qn.stop();

              _0x232886.kf.qn.fadeOut(50);

              _0x232886.kf.rn.stop();

              _0x232886.kf.rn.fadeOut(50);

              _0x232886.kf.tn.stop();

              _0x232886.kf.tn.fadeOut(50);

              _0x232886.kf.un_error.stop();

              _0x232886.kf.un_error.fadeOut(50);

              _0x232886.kf.mn.stop();

              _0x232886.kf.mn.fadeOut(1);

              _0x232886.kf.bgcanvas.stop();

              _0x232886.kf.bgcanvas.fadeOut(50);

              _0x232886.GameView.Kf(false);

              _0x232886.kf.socialButtons.stop();

              _0x232886.kf.socialButtons.fadeOut(50);

              _0x232886.kf.vn.stop();

              _0x232886.kf.vn.fadeOut(50);

            };

            return _0x4cc083;

          }();

          _0x232886.pk = function () {

            var _0x3c76bd = decoder.M(_0x232886.kf, function () {

              _0x232886.kf.call(this, _0x232886.Fk.wn);

            });

            _0x3c76bd.prototype.ha = function () {};

            _0x3c76bd.prototype.Gk = function () {

              _0x232886.kf.jn.stop();

              _0x232886.kf.jn.fadeOut(50);

              _0x232886.kf.ln.stop();

              _0x232886.kf.ln.fadeOut(50);

              _0x232886.kf.nn.stop();

              _0x232886.kf.nn.fadeOut(50);

              _0x232886.kf.pn.stop();

              _0x232886.kf.pn.fadeOut(50);

              _0x232886.kf.sn.stop();

              _0x232886.kf.sn.fadeOut(50);

              _0x232886.kf.qn.stop();

              _0x232886.kf.qn.fadeOut(50);

              _0x232886.kf.rn.stop();

              _0x232886.kf.rn.fadeIn(500);

              _0x232886.kf.tn.stop();

              _0x232886.kf.tn.fadeOut(50);

              _0x232886.kf.un_error.stop();

              _0x232886.kf.un_error.fadeOut(50);

              _0x232886.kf.mn.stop();

              _0x232886.kf.mn.fadeIn(1);

              _0x232886.kf.bgcanvas.stop();

              _0x232886.kf.bgcanvas.fadeIn(500);

              _0x232886.GameView.Kf(true);

              _0x232886.kf.socialButtons.stop();

              _0x232886.kf.socialButtons.fadeOut(50);

              _0x232886.kf.vn.stop();

              _0x232886.kf.vn.fadeOut(50);

            };

            _0x3c76bd.prototype.Hk = function () {};

            return _0x3c76bd;

          }();

          _0x232886.rk = function () {

            var _0x20f27b = $("#toaster-stack");

            var _0x310708 = decoder.M(_0x232886.kf, function () {

              _0x232886.kf.call(this, _0x232886.Fk.wn);

              this.Yn = [];

              this.Zn = null;

            });

            _0x310708.prototype.ha = function () {};

            _0x310708.prototype.Gk = function () {

              _0x232886.kf.jn.stop();

              _0x232886.kf.jn.fadeOut(50);

              _0x232886.kf.ln.stop();

              _0x232886.kf.ln.fadeOut(50);

              _0x232886.kf.nn.stop();

              _0x232886.kf.nn.fadeOut(50);

              _0x232886.kf.pn.stop();

              _0x232886.kf.pn.fadeOut(50);

              _0x232886.kf.sn.stop();

              _0x232886.kf.sn.fadeIn(500);

              _0x232886.kf.qn.stop();

              _0x232886.kf.qn.fadeOut(50);

              _0x232886.kf.rn.stop();

              _0x232886.kf.rn.fadeOut(50);

              _0x232886.kf.tn.stop();

              _0x232886.kf.tn.fadeOut(50);

              _0x232886.kf.un_error.stop();

              _0x232886.kf.un_error.fadeOut(50);

              _0x232886.kf.mn.stop();

              _0x232886.kf.mn.fadeIn(1);

              _0x232886.kf.bgcanvas.stop();

              _0x232886.kf.bgcanvas.fadeIn(500);

              _0x232886.GameView.Kf(true);

              _0x232886.kf.socialButtons.stop();

              _0x232886.kf.socialButtons.fadeOut(50);

              _0x232886.kf.vn.stop();

              _0x232886.kf.vn.fadeIn(500);

            };

            _0x310708.prototype.Hk = function () {

              this.$n();

            };

            _0x310708.prototype.Kk = function () {

              return this.Zn != null || this.Yn.length > 0;

            };

            _0x310708.prototype._n = function (_0x343049) {

              this.Yn.unshift(_0x343049);

              setTimeout(function () {

                _0x5d39d0().og.Ik();

              }, 0);

            };

            _0x310708.prototype.El = function (_0xbb874f) {

              this.Yn.push(_0xbb874f);

              setTimeout(function () {

                _0x5d39d0().og.Ik();

              }, 0);

            };

            _0x310708.prototype.$n = function () {

              var _0x22088f = this;

              if (this.Zn == null) {

                if (this.Yn.length == 0) {

                  _0x5d39d0().og.Dk();

                  return;

                }

                var _0x38e69a = this.Yn.shift();

                this.Zn = _0x38e69a;

                var _0x104b78 = _0x38e69a.tf();

                _0x104b78.hide();

                _0x104b78.fadeIn(300);

                _0x20f27b.append(_0x104b78);

                _0x38e69a.ao = function () {

                  _0x104b78.fadeOut(300);

                  setTimeout(function () {

                    _0x104b78.remove();

                  }, 300);

                  if (_0x22088f.Zn == _0x38e69a) {

                    _0x22088f.Zn = null;

                  }

                  _0x22088f.$n();

                };

                _0x38e69a.Hk();

              }

            };

            return _0x310708;

          }();

          _0x232886.Fk = {

            wn: 0,

            Ek: 1

          };

          _0x232886.bo = function () {

            var _0x51a845 = $("#popup-menu-label");

            var _0x3a7af2 = $("#popup-menu-coins-box");

            var _0x464057 = $("#popup-menu-coins-val");

            $("#popup-menu-back").click(function () {

              var _0x33a84c = _0x5d39d0();

              _0x33a84c.Ci.Be();

              _0x33a84c.og.Dk();

            });

            _0x3a7af2.click(function () {

              var _0x273ed5 = _0x5d39d0();

              if (_0x273ed5.Ij.Hj()) {

                _0x273ed5.Ci.Be();

                _0x273ed5.og.Ak(_0x273ed5.og._j);

              }

            });

            var _0x52429f = decoder.M(_0x232886.kf, function (_0x514a4e, _0x3a22ba) {

              _0x232886.kf.call(this, _0x232886.Fk.Ek);

              this.ma = _0x514a4e;

              this.co = _0x3a22ba;

              this.do = [];

            });

            _0x52429f.prototype.ha = function () {

              _0x52429f.parent.prototype.ha.call(this);

              if (!_0x52429f.eo) {

                _0x52429f.eo = true;

                var _0xe80668 = _0x5d39d0();

                _0xe80668.Ij.zl(function () {

                  if (_0xe80668.Ij.Hj()) {

                    _0x464057.html(_0xe80668.Ij.il());

                  } else {

                    _0x464057.html("0");

                  }

                });

              }

              _0x232886.bo.fo.stop();

              _0x232886.bo.fo.fadeOut(100);

            };

            _0x52429f.go = $("#coins-view");

            _0x52429f.ho = $("#leaders-view");

            _0x52429f.io = $("#profile-view");

            _0x52429f.jo = $("#settings-view");

            _0x52429f.ko = $("#login-view");

            _0x52429f.lo = $("#skins-view");

            _0x52429f.mo = $("#store-view");

            _0x52429f.no = $("#wear-view");

            _0x52429f.oo = $("#withdraw-consent-view");

            _0x52429f.po = $("#delete-account-view");

            _0x52429f.fo = $("#please-wait-view");

            _0x52429f.prototype.Gk = function () {

              _0x232886.kf.jn.stop();

              _0x232886.kf.jn.fadeOut(200);

              _0x232886.kf.ln.stop();

              _0x232886.kf.ln.fadeOut(200);

              _0x232886.kf.nn.stop();

              _0x232886.kf.nn.fadeOut(200);

              _0x232886.kf.pn.stop();

              _0x232886.kf.pn.fadeIn(200);

              _0x232886.kf.sn.stop();

              _0x232886.kf.sn.fadeOut(200);

              _0x232886.kf.qn.stop();

              _0x232886.kf.qn.fadeOut(200);

              _0x232886.kf.rn.stop();

              _0x232886.kf.rn.fadeOut(200);

              _0x232886.kf.tn.stop();

              _0x232886.kf.tn.fadeOut(200);

              _0x232886.kf.un_error.stop();

              _0x232886.kf.un_error.fadeOut(200);

              _0x232886.kf.mn.stop();

              _0x232886.kf.mn.fadeIn(1);

              _0x232886.kf.bgcanvas.stop();

              _0x232886.kf.bgcanvas.fadeIn(500);

              _0x232886.GameView.Kf(true);

              _0x232886.kf.socialButtons.stop();

              _0x232886.kf.socialButtons.fadeIn(200);

              _0x232886.kf.vn.stop();

              _0x232886.kf.vn.fadeIn(200);

              _0x51a845.html(this.ma);

              _0x3a7af2.toggle(this.co);

              this.qo();

            };

            _0x52429f.prototype.qo = function () {};

            _0x52429f.prototype.ro = function (_0x5a3b84) {

              var _0xba82 = this;

              var _0x2209cf = decoder.V(0, 2147483647) & 2147483647;

              this.do.push(_0x2209cf);

              _0x232886.bo.fo.stop();

              _0x232886.bo.fo.fadeIn(100);

              setTimeout(function () {

                _0xba82.so(_0x2209cf);

              }, _0x5a3b84);

              return new _0x5d196c(this, _0x2209cf);

            };

            _0x52429f.prototype.so = function (_0x5b62aa) {

              var _0x413d34 = this.do.indexOf(_0x5b62aa);

              if (!(_0x413d34 < 0)) {

                this.do.splice(_0x413d34, 1);

                if (this.do.length === 0) {

                  _0x232886.bo.fo.stop();

                  _0x232886.bo.fo.fadeOut(100);

                }

              }

            };

            return _0x52429f;

          }();

          var _0x5d196c = function () {

            function _0x5306ca(_0x258a4b, _0x2a7caa) {

              this.to = _0x258a4b;

              this.uo = _0x2a7caa;

            }

            _0x5306ca.prototype.vo = function () {

              this.to.so(this.uo);

            };

            return _0x5306ca;

          }();

          _0x232886.ak = function () {

            var _0x1dfc52 = $("#store-buy-coins_125000");

            var _0x5a1ab4 = $("#store-buy-coins_50000");

            var _0x35cb87 = $("#store-buy-coins_16000");

            var _0x1733f6 = $("#store-buy-coins_7000");

            var _0x1ccb56 = $("#store-buy-coins_3250");

            var _0x11f85 = $("#store-buy-coins_1250");

            var _0x3d8527 = decoder.M(_0x232886.bo, function () {

              _0x232886.bo.call(this, decoder.H("index.game.popup.menu.coins.tab"), false);

              var _0x24fb32 = _0x5d39d0();

              var _0x3b824e = this;

              _0x1dfc52.click(function () {

                _0x24fb32.Ci.Be();

                _0x3b824e.wo("coins_125000");

              });

              _0x5a1ab4.click(function () {

                _0x24fb32.Ci.Be();

                _0x3b824e.wo("coins_50000");

              });

              _0x35cb87.click(function () {

                _0x24fb32.Ci.Be();

                _0x3b824e.wo("coins_16000");

              });

              _0x1733f6.click(function () {

                _0x24fb32.Ci.Be();

                _0x3b824e.wo("coins_7000");

              });

              _0x1ccb56.click(function () {

                _0x24fb32.Ci.Be();

                _0x3b824e.wo("coins_3250");

              });

              _0x11f85.click(function () {

                _0x24fb32.Ci.Be();

                _0x3b824e.wo("coins_1250");

              });

            });

            _0x3d8527.prototype.ha = function () {

              _0x3d8527.parent.prototype.ha.call(this);

            };

            _0x3d8527.prototype.qo = function () {

              _0x232886.bo.go.stop();

              _0x232886.bo.go.fadeIn(200);

              _0x232886.bo.ho.stop();

              _0x232886.bo.ho.fadeOut(50);

              _0x232886.bo.io.stop();

              _0x232886.bo.io.fadeOut(50);

              _0x232886.bo.ko.stop();

              _0x232886.bo.ko.fadeOut(50);

              _0x232886.bo.jo.stop();

              _0x232886.bo.jo.fadeOut(50);

              _0x232886.bo.lo.stop();

              _0x232886.bo.lo.fadeOut(50);

              _0x232886.bo.mo.stop();

              _0x232886.bo.mo.fadeOut(50);

              _0x232886.bo.no.stop();

              _0x232886.bo.no.fadeOut(50);

              _0x232886.bo.oo.stop();

              _0x232886.bo.oo.fadeOut(50);

              _0x232886.bo.po.stop();

              _0x232886.bo.po.fadeOut(50);

            };

            _0x3d8527.prototype.Hk = function () {

              _0x5d39d0().Ci.Ce();

            };

            _0x3d8527.prototype.wo = function (_0x132a68) {};

            return _0x3d8527;

          }();

          _0x232886.ck = function () {

            var _0x781821 = $("#highscore-table");

            var _0x147746 = $("#leaders-button-level");

            var _0x5906dc = $("#leaders-button-highscore");

            var _0x2f37ac = $("#leaders-button-kills");

            var _0x1ed10a = decoder.M(_0x232886.bo, function () {

              _0x232886.bo.call(this, decoder.H("index.game.popup.menu.leaders.tab"), true);

              var _0x1cd267 = _0x5d39d0();

              var _0x3f3d46 = this;

              this.xo = {};

              this.yo = {

                zo: {

                  Ao: _0x147746,

                  Bo: "byLevel"

                },

                Co: {

                  Ao: _0x5906dc,

                  Bo: "byHighScore"

                },

                Do: {

                  Ao: _0x2f37ac,

                  Bo: "byKillsAndHeadShots"

                }

              };

              _0x147746.click(function () {

                _0x1cd267.Ci.Be();

                _0x3f3d46.Eo(_0x3f3d46.yo.zo);

              });

              _0x5906dc.click(function () {

                _0x1cd267.Ci.Be();

                _0x3f3d46.Eo(_0x3f3d46.yo.Co);

              });

              _0x2f37ac.click(function () {

                _0x1cd267.Ci.Be();

                _0x3f3d46.Eo(_0x3f3d46.yo.Do);

              });

            });

            _0x1ed10a.prototype.ha = function () {

              _0x1ed10a.parent.prototype.ha.call(this);

            };

            _0x1ed10a.prototype.qo = function () {

              _0x232886.bo.go.stop();

              _0x232886.bo.go.fadeOut(50);

              _0x232886.bo.ho.stop();

              _0x232886.bo.ho.fadeIn(200);

              _0x232886.bo.io.stop();

              _0x232886.bo.io.fadeOut(50);

              _0x232886.bo.ko.stop();

              _0x232886.bo.ko.fadeOut(50);

              _0x232886.bo.jo.stop();

              _0x232886.bo.jo.fadeOut(50);

              _0x232886.bo.lo.stop();

              _0x232886.bo.lo.fadeOut(50);

              _0x232886.bo.mo.stop();

              _0x232886.bo.mo.fadeOut(50);

              _0x232886.bo.no.stop();

              _0x232886.bo.no.fadeOut(50);

              _0x232886.bo.oo.stop();

              _0x232886.bo.oo.fadeOut(50);

              _0x232886.bo.po.stop();

              _0x232886.bo.po.fadeOut(50);

            };

            _0x1ed10a.prototype.Hk = function () {

              var _0x67984 = this;

              _0x5d39d0().Ci.Ce();

              var _0x147ca0 = this.ro(5000);

              var _0x36d692 = decoder.a.b + "/pub/leaders";

              decoder.Z(_0x36d692, function () {

                _0x67984.xo = {

                  byLevel: [],

                  byHighScore: [],

                  byKillsAndHeadShots: []

                };

                _0x67984.Eo(_0x67984.Fo ?? _0x67984.yo.zo);

                _0x147ca0.vo();

              }, function (_0x9b2863) {

                _0x67984.xo = _0x9b2863;

                _0x67984.Eo(_0x67984.Fo ?? _0x67984.yo.zo);

                _0x147ca0.vo();

              });

            };

            _0x1ed10a.prototype.Eo = function (_0x46410a) {

              this.Fo = _0x46410a;

              for (var _0x41f998 in this.yo) {

                if (this.yo.hasOwnProperty(_0x41f998)) {

                  var _0xa865b2 = this.yo[_0x41f998];

                  _0xa865b2.Ao.removeClass("pressed");

                }

              }

              this.Fo.Ao.addClass("pressed");

              for (var _0x626c1c = this.xo[this.Fo.Bo], _0x495810 = "", _0x5a9d34 = 0; _0x5a9d34 < _0x626c1c.length; _0x5a9d34++) {

                var _0x9222b8 = _0x626c1c[_0x5a9d34];

                _0x495810 += "<div class=\"table-row\"><span>" + (_0x5a9d34 + 1) + "</span><span><img src=\"" + _0x9222b8.avatarUrl + "\"/></span><span>" + _0x9222b8.username + "</span><span>" + _0x9222b8.level + "</span><span>" + _0x9222b8.highScore + "</span><span>" + _0x9222b8.headShots + " / " + _0x9222b8.kills + "</span></div>";

              }

              _0x781821.empty();

              _0x781821.append(_0x495810);

            };

            return _0x1ed10a;

          }();

          _0x232886.gk = function () {

            var _0x4af561 = $("#popup-login-gg");

            var _0x1a11d6 = $("#popup-login-fb");

            var _0x14c847 = decoder.M(_0x232886.bo, function () {

              var _0x35495d = this;

              _0x232886.bo.call(this, decoder.H("index.game.popup.menu.login.tab"), false);

              var _0x36b650 = _0x5d39d0();

              _0x4af561.click(function () {

                _0x36b650.Ci.Be();

                var _0xb63f4e = _0x35495d.ro(10000);

                setTimeout(function () {

                  _0x36b650.Ij.Ml(function () {

                    if (_0x36b650.Ij.Hj()) {

                      _0x36b650.Ci.Fe();

                    }

                    _0xb63f4e.vo();

                  });

                }, 500);

              });

              _0x1a11d6.click(function () {

                _0x36b650.Ci.Be();

                var _0x1c7e5c = _0x35495d.ro(10000);

                setTimeout(function () {

                  _0x36b650.Ij.Jl(function () {

                    if (_0x36b650.Ij.Hj()) {

                      _0x36b650.Ci.Fe();

                    }

                    _0x1c7e5c.vo();

                  });

                }, 500);

              });

            });

            _0x14c847.prototype.ha = function () {

              _0x14c847.parent.prototype.ha.call(this);

            };

            _0x14c847.prototype.qo = function () {

              _0x232886.bo.go.stop();

              _0x232886.bo.go.fadeOut(50);

              _0x232886.bo.ho.stop();

              _0x232886.bo.ho.fadeOut(50);

              _0x232886.bo.io.stop();

              _0x232886.bo.io.fadeOut(50);

              _0x232886.bo.ko.stop();

              _0x232886.bo.ko.fadeIn(200);

              _0x232886.bo.jo.stop();

              _0x232886.bo.jo.fadeOut(50);

              _0x232886.bo.lo.stop();

              _0x232886.bo.lo.fadeOut(50);

              _0x232886.bo.mo.stop();

              _0x232886.bo.mo.fadeOut(50);

              _0x232886.bo.no.stop();

              _0x232886.bo.no.fadeOut(50);

              _0x232886.bo.oo.stop();

              _0x232886.bo.oo.fadeOut(50);

              _0x232886.bo.po.stop();

              _0x232886.bo.po.fadeOut(50);

            };

            _0x14c847.prototype.Hk = function () {

              _0x5d39d0().Ci.Ce();

            };

            return _0x14c847;

          }();

          _0x232886.ek = function () {

            var _0x295a72 = $("#profile-avatar");

            var _0x3a3fe8 = $("#profile-username");

            var _0x400436 = $("#profile-experience-bar");

            var _0x118517 = $("#profile-experience-val");

            var _0x5a65d9 = $("#profile-level");

            var _0x58745e = $("#profile-stat-highScore");

            var _0x50b67a = $("#profile-stat-bestSurvivalTime");

            var _0x2b6b9f = $("#profile-stat-kills");

            var _0x44f282 = $("#profile-stat-headshots");

            var _0x1e7e3b = $("#profile-stat-gamesPlayed");

            var _0x17bf15 = $("#profile-stat-totalTimeSpent");

            var _0x3a90bd = $("#profile-stat-registrationDate");

            var _0x172674 = decoder.M(_0x232886.bo, function () {

              _0x232886.bo.call(this, decoder.H("index.game.popup.menu.profile.tab"), true);

            });

            _0x172674.prototype.ha = function () {

              _0x172674.parent.prototype.ha.call(this);

            };

            _0x172674.prototype.qo = function () {

              _0x232886.bo.go.stop();

              _0x232886.bo.go.fadeOut(50);

              _0x232886.bo.ho.stop();

              _0x232886.bo.ho.fadeOut(50);

              _0x232886.bo.io.stop();

              _0x232886.bo.io.fadeIn(200);

              _0x232886.bo.ko.stop();

              _0x232886.bo.ko.fadeOut(50);

              _0x232886.bo.jo.stop();

              _0x232886.bo.jo.fadeOut(50);

              _0x232886.bo.lo.stop();

              _0x232886.bo.lo.fadeOut(50);

              _0x232886.bo.mo.stop();

              _0x232886.bo.mo.fadeOut(50);

              _0x232886.bo.no.stop();

              _0x232886.bo.no.fadeOut(50);

              _0x232886.bo.oo.stop();

              _0x232886.bo.oo.fadeOut(50);

              _0x232886.bo.po.stop();

              _0x232886.bo.po.fadeOut(50);

            };

            _0x172674.prototype.Hk = function () {

              var _0x519098 = _0x5d39d0();

              _0x519098.Ci.Ce();

              var _0x13beeb = _0x519098.Ij.xl();

              var _0x1f3fda = moment([_0x13beeb.year, _0x13beeb.month - 1, _0x13beeb.day]).format("LL");

              _0x3a3fe8.html(_0x519098.Ij.dl());

              _0x295a72.attr("src", _0x519098.Ij.fl());

              _0x400436.width(_0x519098.Ij.kl() * 100 / _0x519098.Ij.ll() + "%");

              _0x118517.html(_0x519098.Ij.kl() + " / " + _0x519098.Ij.ll());

              _0x5a65d9.html(_0x519098.Ij.jl());

              _0x58745e.html(_0x519098.Ij.rl());

              _0x50b67a.html(decoder.J(_0x519098.Ij.sl()));

              _0x2b6b9f.html(_0x519098.Ij.tl());

              _0x44f282.html(_0x519098.Ij.ul());

              _0x1e7e3b.html(_0x519098.Ij.vl());

              _0x17bf15.html(decoder.J(_0x519098.Ij.wl()));

              _0x3a90bd.html(_0x1f3fda);

            };

            return _0x172674;

          }();

          _0x232886.hk = function () {

            var _0x335a92 = $("#settings-music-enabled-switch");

            var _0x336ab4 = $("#settings-sfx-enabled-switch");

            var _0x5e8180 = $("#settings-show-names-switch");

            var _0x34e6bb = $("#popup-logout");

            var _0x27c9e7 = $("#popup-logout-container");

            var _0x5ca5c5 = $("#popup-delete-account");

            var _0x3d9e18 = $("#popup-delete-account-container");

            var _0x496540 = $("#popup-withdraw-consent");

            var _0x3bc1ab = decoder.M(_0x232886.bo, function () {

              _0x232886.bo.call(this, decoder.H("index.game.popup.menu.settings.tab"), false);

              var _0x44d402 = this;

              var _0x29df11 = _0x5d39d0();

              _0x335a92.click(function () {

                var _0x14c59d = !!_0x335a92.prop("checked");

                _0x232886.Vf.eg(_0x232886.Vf.Yf, _0x14c59d, 30);

                _0x29df11.Ci.re(_0x14c59d);

                _0x29df11.Ci.Be();

              });

              _0x336ab4.click(function () {

                var _0x2cc30e = !!_0x336ab4.prop("checked");

                _0x232886.Vf.eg(_0x232886.Vf.Zf, _0x2cc30e, 30);

                _0x29df11.Ci.oe(_0x2cc30e);

                _0x29df11.Ci.Be();

              });

              _0x5e8180.click(function () {

                _0x29df11.Ci.Be();

              });

              _0x34e6bb.click(function () {

                _0x29df11.Ci.Be();

                _0x44d402.ro(500);

                _0x29df11.Ij.Kl();

              });

              _0x5ca5c5.click(function () {

                if (_0x29df11.Ij.Hj()) {

                  _0x29df11.Ci.Be();

                  _0x29df11.og.Ak(_0x29df11.og.Zj);

                } else {

                  _0x29df11.Ci.Ge();

                }

              });

              _0x496540.click(function () {

                if (_0x29df11.Go()) {

                  _0x29df11.Ci.Be();

                  _0x29df11.og.Ak(_0x29df11.og.Xj);

                } else {

                  _0x29df11.Ci.Ge();

                }

              });

            });

            _0x3bc1ab.prototype.ha = function () {

              _0x3bc1ab.parent.prototype.ha.call(this);

              var _0xa2a5db = _0x5d39d0();

              var _0x7bde12 = undefined;

              switch (_0x232886.Vf.fg(_0x232886.Vf.Yf)) {

                case "false":

                  _0x7bde12 = false;

                  break;

                default:

                  _0x7bde12 = true;

              }

              _0x335a92.prop("checked", _0x7bde12);

              _0xa2a5db.Ci.re(_0x7bde12);

              var _0x24084c = undefined;

              switch (_0x232886.Vf.fg(_0x232886.Vf.Zf)) {

                case "false":

                  _0x24084c = false;

                  break;

                default:

                  _0x24084c = true;

              }

              _0x336ab4.prop("checked", _0x24084c);

              _0xa2a5db.Ci.oe(_0x24084c);

              var _0x37ead3 = undefined;

              switch (_0x232886.Vf.fg(_0x232886.Vf.Xf)) {

                case "false":

                  _0x37ead3 = false;

                  break;

                default:

                  _0x37ead3 = true;

              }

              _0x5e8180.prop("checked", _0x37ead3);

              _0xa2a5db.Ij.yl(function () {

                _0x27c9e7.toggle(_0xa2a5db.Ij.Hj());

                _0x3d9e18.toggle(_0xa2a5db.Ij.Hj());

              });

            };

            _0x3bc1ab.prototype.qo = function () {

              _0x232886.bo.go.stop();

              _0x232886.bo.go.fadeOut(50);

              _0x232886.bo.ho.stop();

              _0x232886.bo.ho.fadeOut(50);

              _0x232886.bo.io.stop();

              _0x232886.bo.io.fadeOut(50);

              _0x232886.bo.ko.stop();

              _0x232886.bo.ko.fadeOut(50);

              _0x232886.bo.jo.stop();

              _0x232886.bo.jo.fadeIn(200);

              _0x232886.bo.lo.stop();

              _0x232886.bo.lo.fadeOut(50);

              _0x232886.bo.mo.stop();

              _0x232886.bo.mo.fadeOut(50);

              _0x232886.bo.no.stop();

              _0x232886.bo.no.fadeOut(50);

              _0x232886.bo.oo.stop();

              _0x232886.bo.oo.fadeOut(50);

              _0x232886.bo.po.stop();

              _0x232886.bo.po.fadeOut(50);

            };

            _0x3bc1ab.prototype.Hk = function () {

              var _0x780f22 = _0x5d39d0();

              _0x780f22.Ci.Ce();

              if (_0x780f22.Go()) {

                _0x496540.show();

              } else {

                _0x496540.hide();

              }

            };

            _0x3bc1ab.prototype.Zh = function () {

              return _0x5e8180.prop("checked");

            };

            return _0x3bc1ab;

          }();

          _0x232886.jk = function () {

            var _0x2d5e6b = $("#store-view-canv");

            var _0x295973 = $("#skin-description-text");

            var _0x311b40 = $("#skin-group-description-text");

            var _0xa2d86c = $("#store-locked-bar");

            var _0x1c8d48 = $("#store-locked-bar-text");

            var _0x4db65d = $("#store-buy-button");

            var _0x19f9e7 = $("#store-item-price");

            var _0x3e6143 = $("#store-groups");

            var _0x34d11b = $("#store-view-prev");

            var _0x6029b8 = $("#store-view-next");

            var _0x18ddd7 = decoder.M(_0x232886.bo, function () {

              _0x232886.bo.call(this, decoder.H("index.game.popup.menu.skins.tab"), true);

              var _0x1f3617 = this;

              var _0x4cdd78 = _0x5d39d0();

              this.Ho = null;

              this.Io = [];

              this.Jo = {};

              this.Ko = new _0x232886.dm(_0x2d5e6b);

              _0x4db65d.click(function () {

                _0x4cdd78.Ci.Be();

                _0x1f3617.Lo();

              });

              _0x34d11b.click(function () {

                _0x4cdd78.Ci.Be();

                _0x1f3617.Ho.Mo();

              });

              _0x6029b8.click(function () {

                _0x4cdd78.Ci.Be();

                _0x1f3617.Ho.No();

              });

            });

            _0x18ddd7.prototype.ha = function () {

              _0x18ddd7.parent.prototype.ha.call(this);

              var _0x42cae3 = this;

              var _0x508117 = _0x5d39d0();

              _0x508117.Lc.$b(function () {

                var _0x5cbaef = _0x508117.Lc.Xb();

                _0x42cae3.Io = [];

                for (var _0xcd334a = 0; _0xcd334a < _0x5cbaef.skinGroupArrayDict.length; _0xcd334a++) {

                  _0x42cae3.Io.push(new _0x1b5fbc(_0x42cae3, _0x5cbaef.skinGroupArrayDict[_0xcd334a]));

                }

                _0x42cae3.Jo = {};

                for (var _0xe286d5 = 0; _0xe286d5 < _0x5cbaef.skinArrayDict.length; _0xe286d5++) {

                  var _0x524fa0 = _0x5cbaef.skinArrayDict[_0xe286d5];

                  _0x42cae3.Jo[_0x524fa0.id] = _0x524fa0;

                }

                _0x42cae3.Oo();

              });

              this.Po(false);

              _0x508117.On.zj(function () {

                _0x42cae3.Po(false);

              });

            };

            _0x18ddd7.prototype.qo = function () {

              _0x232886.bo.go.stop();

              _0x232886.bo.go.fadeOut(50);

              _0x232886.bo.ho.stop();

              _0x232886.bo.ho.fadeOut(50);

              _0x232886.bo.io.stop();

              _0x232886.bo.io.fadeOut(50);

              _0x232886.bo.ko.stop();

              _0x232886.bo.ko.fadeOut(50);

              _0x232886.bo.jo.stop();

              _0x232886.bo.jo.fadeOut(50);

              _0x232886.bo.lo.stop();

              _0x232886.bo.lo.fadeIn(200);

              _0x232886.bo.mo.stop();

              _0x232886.bo.mo.fadeOut(50);

              _0x232886.bo.no.stop();

              _0x232886.bo.no.fadeOut(50);

              _0x232886.bo.oo.stop();

              _0x232886.bo.oo.fadeOut(50);

              _0x232886.bo.po.stop();

              _0x232886.bo.po.fadeOut(50);

            };

            _0x18ddd7.prototype.Hk = function () {

              _0x5d39d0().Ci.pe(_0x232886.ge.je._e);

              _0x5d39d0().Ci.Ce();

              this.Oo();

              this.Ko.Kf(true);

            };

            _0x18ddd7.prototype.Bk = function () {

              this.Ko.Kf(false);

            };

            _0x18ddd7.prototype.Jf = function () {

              this.Ko.Jf();

            };

            _0x18ddd7.prototype.Nf = function (_0x2bdf30, _0x36d0cd) {

              this.Ko.Nf();

            };

            _0x18ddd7.prototype.Oo = function () {

              var _0x4d735c = this;

              var _0x5a0dce = this;

              var _0x3178dc = _0x5d39d0();

              _0x3e6143.empty();

              for (var _0x4e2973 = 0; _0x4e2973 < this.Io.length; _0x4e2973++) {

                (function (_0x5c3676) {

                  var _0x561a87 = _0x4d735c.Io[_0x5c3676];

                  var _0x4fb916 = document.createElement("li");

                  _0x3e6143.append(_0x4fb916);

                  var _0x569fb3 = $(_0x4fb916);

                  if (_0x561a87.To && _0x561a87.To.isCustom) {

                    _0x569fb3.css("background-color", "#FFF");

                    _0x569fb3.css("color", "#000");

                  }

                  _0x569fb3.html(_0x561a87.Qo());

                  _0x569fb3.click(function () {

                    _0x3178dc.Ci.Be();

                    _0x5a0dce.Ro(_0x561a87);

                  });

                  _0x561a87.So = _0x569fb3;

                })(_0x4e2973);

              }

              if (this.Io.length > 0) {

                var _0xe9432c = _0x3178dc.On.rj(_0x232886.tj.sj);

                for (var _0x4e2973 = 0; _0x4e2973 < this.Io.length; _0x4e2973++) {

                  var _0x54a52e = this.Io[_0x4e2973];

                  for (var _0x474eef = _0x54a52e.To.list, _0x49ccf5 = 0; _0x49ccf5 < _0x474eef.length; _0x49ccf5++) {

                    if (_0x474eef[_0x49ccf5] == _0xe9432c) {

                      _0x54a52e.Uo = _0x49ccf5;

                      this.Ro(_0x54a52e);

                      return;

                    }

                  }

                }

                this.Ro(this.Io[0]);

              }

            };

            _0x18ddd7.prototype.Ro = function (_0x2bed2a) {

              var _0x1e7df9 = _0x5d39d0();

              if (this.Ho !== _0x2bed2a) {

                this.Ho = _0x2bed2a;

                _0x3e6143.children().removeClass("pressed");

                if (this.Ho.So) {

                  this.Ho.So.addClass("pressed");

                }

                _0x311b40.html("");

                if (_0x2bed2a.To != null) {

                  var _0x465828 = _0x1e7df9.Lc.Xb().textDict[_0x2bed2a.To.description];

                  if (_0x465828 != null) {

                    _0x311b40.html(decoder.K(decoder.I(_0x465828)));

                  }

                }

                this.Po(true);

              }

            };

            _0x18ddd7.prototype.Vo = function () {

              if (this.Ho == null) {

                return _0x232886.Si.Ui();

              } else {

                return this.Ho.Wo();

              }

            };

            _0x18ddd7.prototype.Lo = function () {

              var _0x42839a = this;

              var _0x4bd849 = this.Vo();

              if (_0x4bd849.Wi()) {

                var _0x6953ab = _0x4bd849.bc();

                _0x42839a.Xo(_0x6953ab);

              }

            };

            _0x18ddd7.prototype.Xo = function (_0xca4901) {

              var _0x205e49 = _0x5d39d0();

              var _0xd0e781 = _0x205e49.On.Gj(_0xca4901, _0x232886.tj.sj);

              if (_0xd0e781 != null) {

                var _0x50df79 = _0xd0e781.Jj();

                if (!(_0x205e49.Ij.il() < _0x50df79)) {

                  var _0x405087 = _0x205e49.On.rj(_0x232886.tj.sj);

                  var _0x99cb7a = _0x205e49.On.rj(_0x232886.tj.uj);

                  var _0x3bf88b = _0x205e49.On.rj(_0x232886.tj.vj);

                  var _0x343d11 = _0x205e49.On.rj(_0x232886.tj.xj);

                  var _0x4f0d1e = _0x205e49.On.rj(_0x232886.tj.wj);

                  var _0x16c562 = this.ro(5000);

                  _0x205e49.Ij.Hl(_0xca4901, _0x232886.tj.sj, function () {

                    _0x16c562.vo();

                    _0x205e49.og.Ak(_0x205e49.og.tk);

                  }, function (_0x44179e) {

                    _0x205e49.Ij.Bl(function () {

                      _0x205e49.On.Fj(_0x405087, _0x232886.tj.sj);

                      _0x205e49.On.Fj(_0x99cb7a, _0x232886.tj.uj);

                      _0x205e49.On.Fj(_0x3bf88b, _0x232886.tj.vj);

                      _0x205e49.On.Fj(_0x343d11, _0x232886.tj.xj);

                      _0x205e49.On.Fj(_0x4f0d1e, _0x232886.tj.wj);

                      _0x205e49.On.Fj(_0xca4901, _0x232886.tj.sj);

                      _0x16c562.vo();

                    });

                  });

                }

              }

            };

            _0x18ddd7.prototype.Po = function (_0x2ccbdb) {

              var _0x1dc3f4 = _0x5d39d0();

              var _0x51f315 = _0x1dc3f4.On.yj();

              var _0xbf8fc8 = this.Vo();

              if (_0xbf8fc8.Wi()) {

                var _0x44fadf = _0xbf8fc8.bc();

                var _0x253800 = _0x1dc3f4.On.Gj(_0x44fadf, _0x232886.tj.sj);

                var _0x51d52c = false;

                var _0x4b68f6 = _0x1dc3f4.On.Cj(_0x44fadf, _0x232886.tj.sj);

                var _0x443a91 = true;

                if (_0x4b68f6) {

                  _0xa2d86c.hide();

                  _0x4db65d.hide();

                } else if (_0x253800 == null || _0x253800.Kj()) {

                  _0x51d52c = true;

                  _0xa2d86c.show();

                  _0x4db65d.hide();

                  _0x1c8d48.text(decoder.H("index.game.popup.menu.store.locked"));

                  if (_0x253800 != null && _0x253800.Kj()) {

                    var _0xd679a5 = _0x1dc3f4.Lc.Xb().textDict[_0x253800.Em()];

                    if (_0xd679a5 != null) {

                      _0x1c8d48.text(decoder.I(_0xd679a5));

                    }

                  }

                } else {

                  _0x443a91 = false;

                  _0xa2d86c.hide();

                  _0x4db65d.show();

                  _0x19f9e7.html(_0x253800.Jj());

                }

                _0x295973.html("");

                var _0x43c449 = _0x1dc3f4.Lc.Xb().textDict[_0x253800.Fm()];

                var _0x4901fa = _0x43c449 ? decoder.K(decoder.I(_0x43c449)) : _0x253800.Fm();

                if (_0x253800 != null && _0x253800.Fm() != null) {

                  _0x295973.html(_0x4901fa);

                }

if (true) {

  _0x1107b5.html(`<button onclick="mbf.mbf_cambiar_add('${_0x44fadf}', '${_0x4901fa}')">Add</button>`);

} else {

  _0x1107b5.html("");

}

                this.Ko.$l(_0x51f315.Um(_0x44fadf));

                this.Ko.um(_0x51d52c);

                if (_0x2ccbdb) {

                  _0x1dc3f4.On.Fj(_0x44fadf, _0x232886.tj.sj);

                }

              }

            };

            var _0x1b5fbc = function () {

              function _0x5f4838(_0x53865f, _0x5be8ac) {

                this.Yo = _0x53865f;

                this.Uo = 0;

                this.To = _0x5be8ac;

              }

              _0x5f4838.prototype.Mo = function () {

                if (--this.Uo < 0) {

                  this.Uo = this.To.list.length - 1;

                }

                this.Yo.Po(true);

              };

              _0x5f4838.prototype.No = function () {

                if (++this.Uo >= this.To.list.length) {

                  this.Uo = 0;

                }

                this.Yo.Po(true);

              };

              _0x5f4838.prototype.Qo = function () {

                if (this.To.img) {

                  var _0x57f0b4 = _0x5d39d0().Lc.Xb().customPaths;

                  var _0x2a9fcf = URL_CDN + "/images/" + _0x57f0b4.texture;

                  var _0x325e9e = [];

                  try {

                    _0x325e9e.push(`background-image:url('${_0x2a9fcf}')`);

                    _0x325e9e.push(`background-position: -${_0x57f0b4.map[this.To.img].x}px -${_0x57f0b4.map[this.To.img].y}px`);

                    _0x325e9e.push("background-repeat:no-repeat");

                    _0x325e9e.push("width: 180px");

                    _0x325e9e.push("height: 40px");

                  } catch (_0x234cab) {

                    console.error(_0x2a9fcf, _0x234cab);

                  }

                  return `<div id="${this.To.id}" style="${_0x325e9e.join(";")}"></div>`;

                }

                return decoder.I(this.To.name);

              };

              _0x5f4838.prototype.Wo = function () {

                if (this.Uo >= this.To.list.length) {

                  return _0x232886.Si.Ui();

                } else {

                  return _0x232886.Si.Vi(this.To.list[this.Uo]);

                }

              };

              return _0x5f4838;

            }();

            return _0x18ddd7;

          }();

          _0x232886.lk = function () {

            var _0x269ec1 = $("#store-go-coins-button");

            var _0x335abc = $("#store-go-skins-button");

            var _0x849157 = $("#store-go-wear-button");

            var _0x37f108 = decoder.M(_0x232886.bo, function () {

              _0x232886.bo.call(this, decoder.H("index.game.popup.menu.store.tab"), true);

              var _0x29c46c = _0x5d39d0();

              _0x269ec1.click(function () {

                _0x29c46c.Ci.Be();

                _0x29c46c.og.Ak(_0x29c46c.og._j);

              });

              _0x335abc.click(function () {

                _0x29c46c.Ci.Be();

                _0x29c46c.og.Ak(_0x29c46c.og.ik);

              });

              _0x849157.click(function () {

                _0x29c46c.Ci.Be();

                _0x29c46c.og.Ak(_0x29c46c.og.mk);

              });

            });

            _0x37f108.prototype.ha = function () {

              _0x37f108.parent.prototype.ha.call(this);

            };

            _0x37f108.prototype.qo = function () {

              _0x232886.bo.go.stop();

              _0x232886.bo.go.fadeOut(50);

              _0x232886.bo.ho.stop();

              _0x232886.bo.ho.fadeOut(50);

              _0x232886.bo.io.stop();

              _0x232886.bo.io.fadeOut(50);

              _0x232886.bo.ko.stop();

              _0x232886.bo.ko.fadeOut(50);

              _0x232886.bo.jo.stop();

              _0x232886.bo.jo.fadeOut(50);

              _0x232886.bo.lo.stop();

              _0x232886.bo.lo.fadeOut(50);

              _0x232886.bo.mo.stop();

              _0x232886.bo.mo.fadeIn(200);

              _0x232886.bo.no.stop();

              _0x232886.bo.no.fadeOut(50);

              _0x232886.bo.oo.stop();

              _0x232886.bo.oo.fadeOut(50);

              _0x232886.bo.po.stop();

              _0x232886.bo.po.fadeOut(50);

            };

            _0x37f108.prototype.Hk = function () {

              _0x5d39d0().Ci.Ce();

            };

            return _0x37f108;

          }();

          _0x232886.nk = function () {

            var _0x237142 = $("#wear-view-canv");

            var _0x467ee4 = $("#wear-description-text");

            var _0x1dedf5 = $("#wear-locked-bar");

            var _0x5d2ba1 = $("#wear-locked-bar-text");

            var _0xb6a7fc = $("#wear-buy-button");

            var _0x696dde = $("#wear-item-price");

            var _0x244857 = $("#wear-eyes-button");

            var _0x333512 = $("#wear-mouths-button");

            var _0xa0a28a = $("#wear-glasses-button");

            var _0x4b36a4 = $("#wear-hats-button");

            var _0x11e9be = $("#wear-tint-chooser");

            var _0x104518 = $("#wear-view-prev");

            var _0x3e500c = $("#wear-view-next");

            var _0x426679 = decoder.M(_0x232886.bo, function () {

              var _0x20d3b6 = this;

              _0x232886.bo.call(this, decoder.H("index.game.popup.menu.wear.tab"), true);

              var _0x3ed6db = _0x5d39d0();

              var _0x27c24a = this;

              this.Zo = [];

              this.uj = new _0x2efedd(this, _0x232886.tj.uj, _0x244857);

              this.vj = new _0x2efedd(this, _0x232886.tj.vj, _0x333512);

              this.xj = new _0x2efedd(this, _0x232886.tj.xj, _0xa0a28a);

              this.wj = new _0x2efedd(this, _0x232886.tj.wj, _0x4b36a4);

              this.$o = null;

              this._o = null;

              this.ap = null;

              this.bp = null;

              this.cp = null;

              this.dp = null;

              this.Ko = new _0x232886.dm(_0x237142);

              _0xb6a7fc.click(function () {

                _0x3ed6db.Ci.Be();

                _0x27c24a.ep();

              });

              _0x104518.click(function () {

                _0x3ed6db.Ci.Be();

                _0x27c24a.$o.fp();

              });

              _0x3e500c.click(function () {

                _0x3ed6db.Ci.Be();

                _0x27c24a.$o.gp();

              });

              _0x244857.click(function () {

                _0x3ed6db.Ci.Be();

                _0x27c24a.hp(_0x20d3b6.uj);

              });

              _0x333512.click(function () {

                _0x3ed6db.Ci.Be();

                _0x27c24a.hp(_0x20d3b6.vj);

              });

              _0xa0a28a.click(function () {

                _0x3ed6db.Ci.Be();

                _0x27c24a.hp(_0x20d3b6.xj);

              });

              _0x4b36a4.click(function () {

                _0x3ed6db.Ci.Be();

                _0x27c24a.hp(_0x20d3b6.wj);

              });

              this.Zo.push(this.uj);

              this.Zo.push(this.vj);

              this.Zo.push(this.xj);

              this.Zo.push(this.wj);

            });

            _0x426679.prototype.ha = function () {

              _0x426679.parent.prototype.ha.call(this);

              var _0x44f519 = _0x5d39d0();

              var _0x3bde55 = this;

              _0x44f519.Lc.$b(function () {

                var _0x4e785e = _0x44f519.Lc.Xb();

                _0x3bde55._o = _0x4e785e.eyesDict;

                _0x3bde55.ap = _0x4e785e.mouthDict;

                _0x3bde55.bp = _0x4e785e.glassesDict;

                _0x3bde55.cp = _0x4e785e.hatDict;

                _0x3bde55.dp = _0x4e785e.colorDict;

                _0x3bde55.uj.ip(_0x4e785e.eyesVariantArray);

                _0x3bde55.uj.jp(_0x3bde55._o);

                _0x3bde55.vj.ip(_0x4e785e.mouthVariantArray);

                _0x3bde55.vj.jp(_0x3bde55.ap);

                _0x3bde55.xj.ip(_0x4e785e.glassesVariantArray);

                _0x3bde55.xj.jp(_0x3bde55.bp);

                _0x3bde55.wj.ip(_0x4e785e.hatVariantArray);

                _0x3bde55.wj.jp(_0x3bde55.cp);

              });

              this.Po(false);

              _0x44f519.On.zj(function () {

                _0x3bde55.Po(false);

              });

            };

            _0x426679.prototype.qo = function () {

              _0x232886.bo.go.stop();

              _0x232886.bo.go.fadeOut(50);

              _0x232886.bo.ho.stop();

              _0x232886.bo.ho.fadeOut(50);

              _0x232886.bo.io.stop();

              _0x232886.bo.io.fadeOut(50);

              _0x232886.bo.ko.stop();

              _0x232886.bo.ko.fadeOut(50);

              _0x232886.bo.jo.stop();

              _0x232886.bo.jo.fadeOut(50);

              _0x232886.bo.lo.stop();

              _0x232886.bo.lo.fadeOut(50);

              _0x232886.bo.mo.stop();

              _0x232886.bo.mo.fadeOut(50);

              _0x232886.bo.no.stop();

              _0x232886.bo.no.fadeIn(200);

              _0x232886.bo.oo.stop();

              _0x232886.bo.oo.fadeOut(50);

              _0x232886.bo.po.stop();

              _0x232886.bo.po.fadeOut(50);

            };

            _0x426679.prototype.Hk = function () {

              _0x5d39d0().Ci.pe(_0x232886.ge.je._e);

              _0x5d39d0().Ci.Ce();

              this.hp(this.$o ?? this.uj);

              this.Ko.Kf(true);

            };

            _0x426679.prototype.Bk = function () {

              this.Ko.Kf(false);

            };

            _0x426679.prototype.Jf = function () {

              this.Ko.Jf();

            };

            _0x426679.prototype.Nf = function (_0x9c7025, _0x3a0fe3) {

              this.Ko.Nf();

            };

            _0x426679.prototype.hp = function (_0x14d1ea) {

              this.$o = _0x14d1ea;

              for (var _0x272ffb = 0; _0x272ffb < this.Zo.length; _0x272ffb++) {

                this.Zo[_0x272ffb].Ao.removeClass("pressed");

              }

              this.$o.Ao.addClass("pressed");

              this.$o.Gk();

            };

            _0x426679.prototype.kp = function () {

              if (this.$o == null) {

                return _0x232886.Si.Ui();

              } else {

                return _0x232886.Si.Vi({

                  ae: this.$o.Wo(),

                  nd: this.$o.nd

                });

              }

            };

            _0x426679.prototype.ep = function () {

              var _0x418445 = this;

              var _0x277af0 = this.kp();

              if (_0x277af0.Wi()) {

                var _0x3bb16c = _0x277af0.bc();

                _0x418445.lp(_0x3bb16c.ae, _0x3bb16c.nd);

              }

            };

            _0x426679.prototype.lp = function (_0x431923, _0x22afef) {

              var _0x1d57fc = _0x5d39d0();

              var _0x460b13 = _0x1d57fc.On.Gj(_0x431923, _0x22afef);

              if (_0x460b13 != null) {

                var _0x1abd93 = _0x460b13.Jj();

                if (!(_0x1d57fc.Ij.il() < _0x1abd93)) {

                  var _0x500b3e = _0x1d57fc.On.rj(_0x232886.tj.sj);

                  var _0x59ef2c = _0x1d57fc.On.rj(_0x232886.tj.uj);

                  var _0x542547 = _0x1d57fc.On.rj(_0x232886.tj.vj);

                  var _0x149b19 = _0x1d57fc.On.rj(_0x232886.tj.xj);

                  var _0x55aa7d = _0x1d57fc.On.rj(_0x232886.tj.wj);

                  var _0x143aed = this.ro(5000);

                  _0x1d57fc.Ij.Hl(_0x431923, _0x22afef, function () {

                    _0x143aed.vo();

                    _0x1d57fc.og.Ak(_0x1d57fc.og.tk);

                  }, function (_0x56296a) {

                    _0x1d57fc.Ij.Bl(function () {

                      _0x1d57fc.On.Fj(_0x500b3e, _0x232886.tj.sj);

                      _0x1d57fc.On.Fj(_0x59ef2c, _0x232886.tj.uj);

                      _0x1d57fc.On.Fj(_0x542547, _0x232886.tj.vj);

                      _0x1d57fc.On.Fj(_0x149b19, _0x232886.tj.xj);

                      _0x1d57fc.On.Fj(_0x55aa7d, _0x232886.tj.wj);

                      _0x1d57fc.On.Fj(_0x431923, _0x22afef);

                      _0x143aed.vo();

                    });

                  });

                }

              }

            };

            _0x426679.prototype.Po = function (_0x154d26) {

              var _0x4ab959 = _0x5d39d0();

              var _0x23bc74 = _0x4ab959.On.yj();

              var _0x14071d = this.kp();

              if (_0x14071d.Wi()) {

                var _0xc625a = _0x14071d.bc();

                var _0x30c9f7 = _0x4ab959.On.Gj(_0xc625a.ae, _0xc625a.nd);

                var _0xd18cab = false;

                if (_0x4ab959.On.Cj(_0xc625a.ae, _0xc625a.nd)) {

                  _0x1dedf5.hide();

                  _0xb6a7fc.hide();

                } else if (_0x30c9f7 == null || _0x30c9f7.Kj()) {

                  _0xd18cab = true;

                  _0x1dedf5.show();

                  _0xb6a7fc.hide();

                  _0x5d2ba1.text(decoder.H("index.game.popup.menu.store.locked"));

                  if (_0x30c9f7 != null && _0x30c9f7.Kj()) {

                    var _0x323794 = _0x4ab959.Lc.Xb().textDict[_0x30c9f7.Em()];

                    if (_0x323794 != null) {

                      _0x5d2ba1.text(decoder.I(_0x323794));

                    }

                  }

                } else {

                  _0x1dedf5.hide();

                  _0xb6a7fc.show();

                  _0x696dde.html(_0x30c9f7.Jj());

                }

                _0x467ee4.html("");

                if (_0x30c9f7 != null && _0x30c9f7.Fm() != null) {

                  var _0x406a8c = _0x4ab959.Lc.Xb().textDict[_0x30c9f7.Fm()];

                  if (_0x406a8c != null) {

                    _0x467ee4.html(decoder.K(decoder.I(_0x406a8c)));

                  }

                }

                var _0x4b94d9 = this.Ko;

                switch (_0xc625a.nd) {

                  case _0x232886.tj.uj:

                    _0x4b94d9.$l(_0x23bc74.Vm(_0xc625a.ae));

                    _0x4b94d9.vm(_0xd18cab);

                    break;

                  case _0x232886.tj.vj:

                    _0x4b94d9.$l(_0x23bc74.Wm(_0xc625a.ae));

                    _0x4b94d9.wm(_0xd18cab);

                    break;

                  case _0x232886.tj.xj:

                    _0x4b94d9.$l(_0x23bc74.Ym(_0xc625a.ae));

                    _0x4b94d9.ym(_0xd18cab);

                    break;

                  case _0x232886.tj.wj:

                    _0x4b94d9.$l(_0x23bc74.Xm(_0xc625a.ae));

                    _0x4b94d9.xm(_0xd18cab);

                }

                if (_0x154d26) {

                  _0x4ab959.On.Fj(_0xc625a.ae, _0xc625a.nd);

                }

              }

            };

            var _0x2efedd = function () {

              function _0x28a436(_0x58b98c, _0x5cbc84, _0x45ac2f) {

                this.Yo = _0x58b98c;

                this.nd = _0x5cbc84;

                this.Ao = _0x45ac2f;

                this.ac = {};

                this.mp = [[]];

                this.np = -10;

                this.op = -10;

              }

              _0x28a436.prototype.ip = function (_0x5e4a48) {

                this.mp = _0x5e4a48;

              };

              _0x28a436.prototype.jp = function (_0x8d1ed5) {

                this.ac = _0x8d1ed5;

              };

              _0x28a436.prototype.Gk = function () {

                var _0x137acd = _0x5d39d0();

                var _0x391e12 = _0x137acd.On.rj(this.nd);

                for (var _0xbdda01 = 0; _0xbdda01 < this.mp.length; _0xbdda01++) {

                  for (var _0x1dd662 = 0; _0x1dd662 < this.mp[_0xbdda01].length; _0x1dd662++) {

                    if (this.mp[_0xbdda01][_0x1dd662] == _0x391e12) {

                      this.pp(_0xbdda01);

                      this.qp(_0x1dd662);

                      return;

                    }

                  }

                }

                this.pp(0);

                this.qp(0);

              };

              _0x28a436.prototype.fp = function () {

                var _0x303083 = this.np - 1;

                if (_0x303083 < 0) {

                  _0x303083 = this.mp.length - 1;

                }

                this.pp(_0x303083);

                this.qp(this.op % this.mp[_0x303083].length);

              };

              _0x28a436.prototype.gp = function () {

                var _0x1e9db7 = this.np + 1;

                if (_0x1e9db7 >= this.mp.length) {

                  _0x1e9db7 = 0;

                }

                this.pp(_0x1e9db7);

                this.qp(this.op % this.mp[_0x1e9db7].length);

              };

              _0x28a436.prototype.pp = function (_0xd8c9d1) {

                var _0x2489ad = this;

                if (!(_0xd8c9d1 < 0) && !(_0xd8c9d1 >= this.mp.length)) {

                  this.np = _0xd8c9d1;

                  _0x11e9be.empty();

                  var _0x368fe8 = this.mp[this.np];

                  if (_0x368fe8.length > 1) {

                    for (var _0x445029 = 0; _0x445029 < _0x368fe8.length; _0x445029++) {

                      (function (_0x4bd20d) {

                        var _0x65dede = _0x368fe8[_0x4bd20d];

                        var _0x5e65e7 = _0x2489ad.ac[_0x65dede];

                        var _0x424457 = "#" + _0x2489ad.Yo.dp[_0x5e65e7.prime];

                        var _0x490bb4 = $("<div style=\"border-color:" + _0x424457 + "\"></div>");

                        _0x490bb4.click(function () {

                          _0x5d39d0().Ci.Be();

                          _0x2489ad.qp(_0x4bd20d);

                        });

                        _0x11e9be.append(_0x490bb4);

                      })(_0x445029);

                    }

                  }

                }

              };

              _0x28a436.prototype.qp = function (_0x4833b) {

                if (!(_0x4833b < 0) && !(_0x4833b >= this.mp[this.np].length)) {

                  this.op = _0x4833b;

                  _0x11e9be.children().css("background-color", "transparent");

                  var _0x582dad = _0x11e9be.children(":nth-child(" + (1 + _0x4833b) + ")");

                  _0x582dad.css("background-color", _0x582dad.css("border-color"));

                  this.Yo.Po(true);

                }

              };

              _0x28a436.prototype.Wo = function () {

                return this.mp[this.np][this.op];

              };

              return _0x28a436;

            }();

            return _0x426679;

          }();

          _0x232886.Yj = function () {

            var _0x25671c = $("#withdraw-consent-yes");

            var _0x5d9ef4 = $("#withdraw-consent-no");

            var _0x23b688 = decoder.M(_0x232886.bo, function () {

              _0x232886.bo.call(this, decoder.H("index.game.popup.menu.consent.tab"), false);

              var _0x13173b = _0x5d39d0();

              _0x25671c.click(function () {

                _0x13173b.Ci.Be();

                if (_0x13173b.Go()) {

                  _0x13173b.og.Ak(_0x13173b.og._e);

                  _0x13173b.rp(false, true);

                  _0x13173b.og.qk._n(new _0x232886.sp());

                } else {

                  _0x13173b.og.Dk();

                }

              });

              _0x5d9ef4.click(function () {

                _0x13173b.Ci.Be();

                _0x13173b.og.Dk();

              });

            });

            _0x23b688.prototype.ha = function () {

              _0x23b688.parent.prototype.ha.call(this);

            };

            _0x23b688.prototype.qo = function () {

              _0x232886.bo.go.stop();

              _0x232886.bo.go.fadeOut(50);

              _0x232886.bo.ho.stop();

              _0x232886.bo.ho.fadeOut(50);

              _0x232886.bo.io.stop();

              _0x232886.bo.io.fadeOut(50);

              _0x232886.bo.ko.stop();

              _0x232886.bo.ko.fadeOut(50);

              _0x232886.bo.jo.stop();

              _0x232886.bo.jo.fadeOut(50);

              _0x232886.bo.lo.stop();

              _0x232886.bo.lo.fadeOut(50);

              _0x232886.bo.mo.stop();

              _0x232886.bo.mo.fadeOut(50);

              _0x232886.bo.no.stop();

              _0x232886.bo.no.fadeOut(50);

              _0x232886.bo.oo.stop();

              _0x232886.bo.oo.fadeIn(200);

              _0x232886.bo.po.stop();

              _0x232886.bo.po.fadeOut(50);

            };

            _0x23b688.prototype.Hk = function () {

              _0x5d39d0().Ci.Ce();

            };

            return _0x23b688;

          }();

          _0x232886.$j = function () {

            var _0x129b59 = $("#delete-account-timer");

            var _0x20463c = $("#delete-account-yes");

            var _0x1deb35 = $("#delete-account-no");

            var _0x10c0b2 = decoder.M(_0x232886.bo, function () {

              _0x232886.bo.call(this, decoder.H("index.game.popup.menu.delete.tab"), false);

              var _0x1dbeb2 = _0x5d39d0();

              _0x20463c.click(function () {

                _0x1dbeb2.Ci.Be();

                if (_0x1dbeb2.Ij.Hj()) {

                  _0x1dbeb2.Ij.Sl();

                  _0x1dbeb2.Ij.Kl();

                } else {

                  _0x1dbeb2.og.Dk();

                }

              });

              _0x1deb35.click(function () {

                _0x1dbeb2.Ci.Be();

                _0x1dbeb2.og.Dk();

              });

              this.tp = [];

            });

            _0x10c0b2.prototype.ha = function () {

              _0x10c0b2.parent.prototype.ha.call(this);

            };

            _0x10c0b2.prototype.qo = function () {

              _0x232886.bo.go.stop();

              _0x232886.bo.go.fadeOut(50);

              _0x232886.bo.ho.stop();

              _0x232886.bo.ho.fadeOut(50);

              _0x232886.bo.io.stop();

              _0x232886.bo.io.fadeOut(50);

              _0x232886.bo.ko.stop();

              _0x232886.bo.ko.fadeOut(50);

              _0x232886.bo.jo.stop();

              _0x232886.bo.jo.fadeOut(50);

              _0x232886.bo.lo.stop();

              _0x232886.bo.lo.fadeOut(50);

              _0x232886.bo.mo.stop();

              _0x232886.bo.mo.fadeOut(50);

              _0x232886.bo.no.stop();

              _0x232886.bo.no.fadeOut(50);

              _0x232886.bo.oo.stop();

              _0x232886.bo.oo.fadeOut(50);

              _0x232886.bo.po.stop();

              _0x232886.bo.po.fadeIn(200);

            };

            _0x10c0b2.prototype.Hk = function () {

              _0x5d39d0().Ci.Ge();

              _0x20463c.stop();

              _0x20463c.hide();

              _0x129b59.stop();

              _0x129b59.show();

              _0x129b59.text(".. 10 ..");

              this.up();

              this.vp(function () {

                _0x129b59.text(".. 9 ..");

              }, 1000);

              this.vp(function () {

                _0x129b59.text(".. 8 ..");

              }, 2000);

              this.vp(function () {

                _0x129b59.text(".. 7 ..");

              }, 3000);

              this.vp(function () {

                _0x129b59.text(".. 6 ..");

              }, 4000);

              this.vp(function () {

                _0x129b59.text(".. 5 ..");

              }, 5000);

              this.vp(function () {

                _0x129b59.text(".. 4 ..");

              }, 6000);

              this.vp(function () {

                _0x129b59.text(".. 3 ..");

              }, 7000);

              this.vp(function () {

                _0x129b59.text(".. 2 ..");

              }, 8000);

              this.vp(function () {

                _0x129b59.text(".. 1 ..");

              }, 9000);

              this.vp(function () {

                _0x129b59.hide();

                _0x20463c.fadeIn(300);

              }, 10000);

            };

            _0x10c0b2.prototype.vp = function (_0x5e0ed7, _0x514ab8) {

              var _0x201472 = setTimeout(_0x5e0ed7, _0x514ab8);

              this.tp.push(_0x201472);

            };

            _0x10c0b2.prototype.up = function () {

              for (var _0x523ddf = 0; _0x523ddf < this.tp.length; _0x523ddf++) {

                clearTimeout(this.tp[_0x523ddf]);

              }

              this.tp = [];

            };

            return _0x10c0b2;

          }();

          _0x232886.wp = function () {

            function _0x582406() {

              this.ao = function () {};

            }

            _0x582406.prototype.tf = function () {};

            _0x582406.prototype.Hk = function () {};

            return _0x582406;

          }();

          _0x232886.Gl = function () {

            var _0x53d273 = decoder.M(_0x232886.wp, function (_0x107a25) {

              _0x232886.wp.call(this);

              var _0x224afc = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);

              this.xp = $("<div id=\"" + _0x224afc + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + _0x107a25 + "</div>    <div class=\"toaster-coins-close\">" + decoder.H("index.game.toaster.continue") + "</div></div>");

              var _0x6e6e9e = this;

              this.xp.find(".toaster-coins-close").click(function () {

                _0x5d39d0().Ci.Be();

                _0x6e6e9e.ao();

              });

            });

            _0x53d273.prototype.tf = function () {

              return this.xp;

            };

            _0x53d273.prototype.Hk = function () {

              _0x5d39d0().Ci.Ee();

            };

            return _0x53d273;

          }();

          _0x232886.Fl = function () {

            var _0x899e2c = decoder.M(_0x232886.wp, function (_0xacbd99) {

              _0x232886.wp.call(this);

              var _0x93db82 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);

              this.xp = $("<div id=\"" + _0x93db82 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + _0xacbd99 + "</div>    <div class=\"toaster-levelup-text\">" + decoder.H("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + decoder.H("index.game.toaster.continue") + "</div></div>");

              var _0x54933e = this;

              this.xp.find(".toaster-levelup-close").click(function () {

                _0x5d39d0().Ci.Be();

                _0x54933e.ao();

              });

            });

            _0x899e2c.prototype.tf = function () {

              return this.xp;

            };

            _0x899e2c.prototype.Hk = function () {

              _0x5d39d0().Ci.De();

            };

            return _0x899e2c;

          }();

          _0x232886.sp = function () {

            var _0x2f7154 = decoder.M(_0x232886.wp, function () {

              _0x232886.wp.call(this);

              var _0x5e95b0 = this;

              var _0x518d29 = _0x5d39d0();

              var _0x5d6045 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);

              this.xp = $("<div id=\"" + _0x5d6045 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + decoder.a.d + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + decoder.H("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + decoder.H("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + decoder.H("index.game.toaster.consent.iAccept") + "</div></div>");

              this.yp = this.xp.find(".toaster-consent-close");

              this.yp.hide();

              this.yp.click(function () {

                _0x518d29.Ci.Be();

                if (_0x518d29.Go()) {

                  _0x518d29.rp(true, true);

                }

                _0x5e95b0.ao();

              });

            });

            _0x2f7154.prototype.tf = function () {

              return this.xp;

            };

            _0x2f7154.prototype.Hk = function () {

              var _0x3c455b = this;

              var _0x202bf6 = _0x5d39d0();

              if (_0x202bf6.Go() && !_0x202bf6.hl()) {

                _0x202bf6.Ci.Ge();

                setTimeout(function () {

                  _0x3c455b.yp.fadeIn(300);

                }, 2000);

              } else {

                setTimeout(function () {

                  _0x3c455b.ao();

                }, 0);

              }

            };

            return _0x2f7154;

          }();

          _0x232886.uk = function () {

            var _0x453678 = $("#error-gateway-connection-retry");

            var _0x74b198 = decoder.M(_0x232886.kf, function () {

              _0x232886.kf.call(this, _0x232886.Fk.wn);

              var _0x451faf = _0x5d39d0();

              _0x453678.click(function () {

                _0x451faf.Ci.Be();

                _0x451faf.og.ie.Mn();

                _0x451faf.og.Ak(_0x451faf.og.ie);

                setTimeout(function () {

                  var _0x550735 = decoder.a.b + "/pub/healthCheck/ping";

                  decoder.Z(_0x550735, function () {

                    _0x451faf.og.Ak(_0x451faf.og.tk);

                  }, function (_0x48aedd) {

                    _0x451faf.og.ie.Kn();

                    _0x451faf.Lc.Ib(function () {

                      _0x451faf.og.Ak(_0x451faf.og._e);

                    }, function (_0x1e4fe9) {

                      _0x451faf.og.Ak(_0x451faf.og.tk);

                    }, function (_0x9801db, _0x1319e8) {

                      var _0x52177d = _0x9801db;

                      _0x451faf.og.ie.Ln(_0x52177d, _0x1319e8);

                    });

                  });

                }, 2000);

              });

            });

            _0x74b198.prototype.ha = function () {};

            _0x74b198.prototype.Gk = function () {

              _0x232886.kf.jn.stop();

              _0x232886.kf.jn.fadeOut(50);

              _0x232886.kf.ln.stop();

              _0x232886.kf.ln.fadeOut(50);

              _0x232886.kf.nn.stop();

              _0x232886.kf.nn.fadeOut(50);

              _0x232886.kf.pn.stop();

              _0x232886.kf.pn.fadeOut(50);

              _0x232886.kf.sn.stop();

              _0x232886.kf.sn.fadeOut(50);

              _0x232886.kf.qn.stop();

              _0x232886.kf.qn.fadeOut(50);

              _0x232886.kf.rn.stop();

              _0x232886.kf.rn.fadeOut(50);

              _0x232886.kf.tn.stop();

              _0x232886.kf.tn.fadeIn(500);

              _0x232886.kf.un_error.stop();

              _0x232886.kf.un_error.fadeOut(50);

              _0x232886.kf.mn.stop();

              _0x232886.kf.mn.fadeIn(1);

              _0x232886.kf.bgcanvas.stop();

              _0x232886.kf.bgcanvas.fadeIn(500);

              _0x232886.GameView.Kf(true);

              _0x232886.kf.socialButtons.stop();

              _0x232886.kf.socialButtons.fadeOut(50);

              _0x232886.kf.vn.stop();

              _0x232886.kf.vn.fadeOut(50);

            };

            _0x74b198.prototype.Hk = function () {

              var _0x217c68 = _0x5d39d0();

              _0x217c68.Ci.pe(_0x232886.ge.je._e);

              _0x217c68.Ci.Ge();

            };

            return _0x74b198;

          }();

          _0x232886.wk = function () {

            var _0x10e2f0 = $("#error-game-connection-retry");

            var _0x12cb4f = decoder.M(_0x232886.kf, function () {

              _0x232886.kf.call(this, _0x232886.Fk.wn);

              var _0x2f930c = _0x5d39d0();

              _0x10e2f0.click(function () {

                _0x2f930c.Ci.Be();

                _0x2f930c.og.Ak(_0x2f930c.og._e);

              });

            });

            _0x12cb4f.prototype.ha = function () {};

            _0x12cb4f.prototype.Gk = function () {

              _0x232886.kf.jn.stop();

              _0x232886.kf.jn.fadeOut(50);

              _0x232886.kf.ln.stop();

              _0x232886.kf.ln.fadeOut(50);

              _0x232886.kf.nn.stop();

              _0x232886.kf.nn.fadeOut(50);

              _0x232886.kf.pn.stop();

              _0x232886.kf.pn.fadeOut(50);

              _0x232886.kf.sn.stop();

              _0x232886.kf.sn.fadeOut(50);

              _0x232886.kf.qn.stop();

              _0x232886.kf.qn.fadeOut(50);

              _0x232886.kf.rn.stop();

              _0x232886.kf.rn.fadeOut(50);

              _0x232886.kf.tn.stop();

              _0x232886.kf.tn.fadeOut(50);

              _0x232886.kf.un_error.stop();

              _0x232886.kf.un_error.fadeIn(500);

              _0x232886.kf.mn.stop();

              _0x232886.kf.mn.fadeIn(1);

              _0x232886.kf.bgcanvas.stop();

              _0x232886.kf.bgcanvas.fadeIn(500);

              _0x232886.GameView.Kf(true);

              _0x232886.kf.socialButtons.stop();

              _0x232886.kf.socialButtons.fadeOut(50);

              _0x232886.kf.vn.stop();

              _0x232886.kf.vn.fadeOut(50);

            };

            _0x12cb4f.prototype.Hk = function () {

              var _0x221beb = _0x5d39d0();

              _0x221beb.Ci.pe(_0x232886.ge.je._e);

              _0x221beb.Ci.Ge();

            };

            return _0x12cb4f;

          }();

          decoder.zp = function () {

            function _0x30e418(_0x5be896) {

              var _0x317c2d = _0x5be896 + Math.floor(Math.random() * 65535) * 37;

              _0x232886.Vf.eg(_0x232886.Vf.cg, _0x317c2d, 30);

            }

            function _0x1d8e03() {

              return parseInt(_0x232886.Vf.fg(_0x232886.Vf.cg)) % 37;

            }

            return function () {

              var _0x517360 = _0x1d8e03();

              if (!(_0x517360 >= 0) || !(_0x517360 < _0x460971.Ap)) {

                _0x517360 = Math.max(0, _0x460971.Ap - 2);

              }

              var _0x11271b = {

                zn: _0x460971,

                Bp: false

              };

              _0x11271b.Cp = Date.now();

              _0x11271b.Dp = 0;

              _0x11271b.Ep = 0;

              _0x11271b.Fp = null;

              _0x11271b.Gp = decoder.a.j;

              _0x11271b.Hp = decoder.a.i;

              _0x11271b.dh = null;

              _0x11271b.Lc = null;

              _0x11271b.xe = null;

              _0x11271b.Ci = null;

              _0x11271b.og = null;

              _0x11271b.On = null;

              _0x11271b.Ij = null;

              try {

                if (navigator && navigator.geolocation) {

                  navigator.geolocation.getCurrentPosition(function (_0x106e78) {

                    if (_0x106e78.coords !== undefined) {

                      var _0x485ed6 = _0x106e78.coords;

                      if (_0x485ed6.latitude !== undefined && _0x485ed6.longitude !== undefined) {

                        _0x11271b.Fp = _0x106e78;

                      }

                    }

                  }, function (_0x461ce5) {});

                }

              } catch (_0x4793e6) {}

              _0x11271b.Ip = function () {

                _0x11271b.dh = new _0x232886.Engine();

                _0x11271b.dh.Kp = new _0x232886.MessageProcessor(_0x11271b.dh);

                _0x11271b.Lc = new _0x232886._a();

                _0x11271b.xe = new _0x232886.Qj();

                _0x11271b.Ci = new _0x232886.ge();

                _0x11271b.og = new _0x232886.Tj();

                _0x11271b.On = new _0x232886.kj();

                _0x11271b.Ij = new _0x232886.Mk();

                _0x11271b.ha();

              };

              _0x11271b.ha = function () {

                try {

                  ga("send", "event", "app", window.runtimeHash + "_init");

                } catch (_0xce4604) {}

                _0x11271b.dh.Lp = function () {

                  _0x11271b.og.Ak(_0x11271b.og.vk);

                };

                _0x11271b.dh.Mp = function () {

                  var _0x806471 = _0x11271b.og._e.Wn();

                  try {

                    ga("send", "event", "game", window.runtimeHash + "_start", _0x806471);

                  } catch (_0x2d11d6) {}

                  _0x11271b.Ci.pe(_0x232886.ge.je.af);

                  _0x11271b.og.Ak(_0x11271b.og.af.Dn());

                };

                _0x11271b.dh.Np = function () {

                  try {

                    ga("send", "event", "game", window.runtimeHash + "_end");

                  } catch (_0x468207) {}

                  if ($("body").height() >= 430) {

                    _0x11271b.zn.Op.ka();

                  }

                  _0x11271b.Lc.Ib(null, null, null);

                  (function () {

                    var _0x34a95a = Math.floor(_0x11271b.dh.ch.Bh);

                    var _0x56f909 = _0x11271b.dh.Ih;

                    if (_0x11271b.Ij.Hj()) {

                      _0x11271b.Ij.Bl(function () {

                        _0x11271b.Pp(_0x34a95a, _0x56f909);

                      });

                    } else {

                      _0x11271b.Pp(_0x34a95a, _0x56f909);

                    }

                  })();

                };

                _0x11271b.dh.Qp = function (_0xc5b063) {

                  _0xc5b063(_0x11271b.og.af.Gn(), _0x11271b.og.af.Hn());

                };

                _0x11271b.Ij.yl(function () {

                  var _0x2c3f77 = _0x11271b.og.Lk();

                  if (_0x2c3f77 != null && _0x2c3f77.nd === _0x232886.Fk.Ek) {

                    _0x11271b.Ci.pe(_0x232886.ge.je._e);

                    _0x11271b.og.Ak(_0x11271b.og._e);

                  }

                  if (_0x11271b.Ij.Hj()) {

                    try {

                      var _0x221426 = _0x11271b.Ij.cl();

                      ga("set", "userId", _0x221426);

                    } catch (_0x1a6e23) {}

                  }

                  if (_0x11271b.Go() && _0x11271b.Ij.Hj() && !_0x11271b.Ij.hl()) {

                    _0x11271b.rp(false, false);

                    _0x11271b.og.qk._n(new _0x232886.sp());

                  } else {

                    _0x11271b.Rp(true);

                  }

                });

                _0x11271b.dh.run();

                _0x11271b.og.ha();

                _0x11271b.On.ha();

                _0x11271b.Lc.ha();

                _0x11271b.og._e.Vn();

                _0x11271b.og.Ak(_0x11271b.og._e);

                _0x11271b.xe.ha(function () {

                  _0x11271b.Ci.ha();

                  _0x11271b.Ij.ha();

                  _0x11271b.Lc.Ib(function () {

                    _0x11271b.og._e.Un();

                    _0x11271b.og.Ak(_0x11271b.og._e);

                  }, function (_0x4bd0b3) {

                    _0x11271b.og._e.Un();

                    _0x11271b.og.Ak(_0x11271b.og.tk);

                  }, function (_0x2f4a9c, _0x142acf) {

                    var _0x51dc39 = _0x2f4a9c;

                    _0x11271b.og.ie.Ln(_0x51dc39, _0x142acf);

                    _0x11271b.og._e.Ln(_0x51dc39, _0x142acf);

                  });

                  if (_0x11271b.Go() && !_0x11271b.hl()) {

                    _0x11271b.og.qk._n(new _0x232886.sp());

                  } else {

                    _0x11271b.Rp(true);

                  }

                });

              };

              _0x11271b.Sp = function (_0x5aee0c) {

                if (_0x11271b.Ij.Hj()) {

                  var _0x3d9f27 = _0x11271b.Ij.Al();

                  var _0x41e04e = decoder.a.b + "/pub/wuid/" + _0x3d9f27 + "/consent/change?value=" + encodeURI(_0x5aee0c);

                  decoder.Z(_0x41e04e, function () {}, function (_0x5ce62d) {});

                }

              };

              _0x11271b.Pn = function (_0x555f6a) {

                _0x517360++;

                if (!_0x11271b.zn.Tp && _0x517360 >= _0x11271b.zn.Ap) {

                  _0x11271b.og.Ak(_0x11271b.og.xk);

                  _0x11271b.Ci.pe(_0x232886.ge.je.cf);

                  _0x11271b.zn.Up.ia();

                } else {

                  _0x30e418(_0x517360);

                  _0x11271b.Vp(_0x555f6a);

                }

              };

              _0x11271b.Vp = function (_0x25b62e) {

                if (_0x11271b.dh.Wp()) {

                  _0x11271b.og.ie.Mn();

                  _0x11271b.og.Ak(_0x11271b.og.ie);

                  var _0x368739 = _0x11271b.og._e.Wn();

                  _0x232886.Vf.eg(_0x232886.Vf._f, _0x368739, 30);

                  var _0x48cc3e = _0x11271b.og.$h.Zh();

                  _0x232886.Vf.eg(_0x232886.Vf.Xf, _0x48cc3e, 30);

                  var _0x5a63af = 0;

                  if (_0x11271b.Fp != null) {

                    var _0x2a4f87 = _0x11271b.Fp.coords.latitude;

                    var _0x5e96e2 = _0x11271b.Fp.coords.longitude;

                    _0x5a63af = Math.max(0, Math.min(32767, (_0x2a4f87 + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (_0x5e96e2 + 180) / 360 * 65536)) << 16;

                  }

                  if (_0x11271b.Ij.Hj()) {

                    _0x11271b.Xp(_0x368739, _0x5a63af, _0x25b62e);

                  } else {

                    var _0x4f91ef = _0x11271b.og._e.el();

                    _0x232886.Vf.eg(_0x232886.Vf.ag, _0x4f91ef, 30);

                    var _0x25973a = _0x11271b.On.rj(_0x232886.tj.sj);

                    _0x232886.Vf.eg(_0x232886.Vf.bg, _0x25973a, 30);

                    _0x11271b.Yp(_0x368739, _0x5a63af);

                  }

                }

              };

              _0x11271b.Xp = function (_0x3fce75, _0x3a5e57, _0x52163d) {

                var _0x16b31b = _0x11271b;

                var _0xd50c4a = _0x11271b.Ij.Al();

                var _0x33698a = _0x11271b.og._e.el();

                var _0x137b1d = _0x11271b.On.rj(_0x232886.tj.sj);

                var _0xceeb81 = _0x11271b.On.rj(_0x232886.tj.uj);

                var _0x562f8e = _0x11271b.On.rj(_0x232886.tj.vj);

                var _0xa0793b = _0x11271b.On.rj(_0x232886.tj.xj);

                var _0x1c6a96 = _0x11271b.On.rj(_0x232886.tj.wj);

                var _0x19b692 = (_0x51c67d ? URL_CDN : decoder.a.b) + "/pub/wuid/" + _0xd50c4a + "/start?gameMode=" + encodeURI(_0x3fce75) + "&gh=" + _0x3a5e57 + "&nickname=" + _0x39fe91.Xp(_0xd50c4a, _0x33698a, _0x137b1d, _0xceeb81, _0x562f8e, _0xa0793b, _0x1c6a96) + "&skinId=" + encodeURI(_wwc.validInput(_0x137b1d || 0)) + "&eyesId=" + encodeURI(_wwc.validInputWear(_0xceeb81)) + "&mouthId=" + encodeURI(_wwc.validInputWear(_0x562f8e)) + "&glassesId=" + encodeURI(_wwc.validInputWear(_0xa0793b)) + "&hatId=" + encodeURI(_wwc.validInputWear(_0x1c6a96));

                decoder.Z(_0x19b692, function () {

                  _0x16b31b.og.Ak(_0x16b31b.og.tk);

                }, function (_0xb104a5) {

                  if (_0xb104a5.code === 1460) {

                    _0x16b31b.og.Ak(_0x16b31b.og.ok);

                    try {

                      ga("send", "event", "restricted", window.runtimeHash + "_tick");

                    } catch (_0x16e2a7) {}

                  } else if (false) {} else {

                    if (!_0xb104a5.server_url) {

                      _0x1f8817.dh.Cq();

                      return;

                    }

                    var _0x4d6dd6 = _0xb104a5.server_url;

                    _0x16b31b.dh.Zp(_0x4d6dd6, _0xd50c4a, _0x52163d);

                  }

                });

              };

              _0x11271b.Yp = function (_0x56bbf2, _0x244523) {

                var _0x5ca944 = _0x11271b;

                var _0x176038 = _0x11271b.og._e.el();

                var _0x4e022a = _0x11271b.On.rj(_0x232886.tj.sj);

                var _0x3c9b92 = decoder.a.b + "/pub/wuid/guest/start?gameMode=" + encodeURI(_0x56bbf2) + "&gh=" + _0x244523 + "&nickname=" + encodeURI(_0x176038) + "&skinId=" + encodeURI(_0x4e022a);

                decoder.Z(_0x3c9b92, function () {

                  _0x5ca944.og.Ak(_0x5ca944.og.tk);

                }, function (_0xd68c53) {

                  if (_0xd68c53.code === 1460) {

                    _0x5ca944.og.Ak(_0x5ca944.og.ok);

                    try {

                      ga("send", "event", "restricted", window.runtimeHash + "_tick");

                    } catch (_0x4c4c3b) {}

                  } else if (_0xd68c53.code !== 1200) {

                    _0x5ca944.og.Ak(_0x5ca944.og.tk);

                  } else {

                    var _0x4438f7 = _0xd68c53.server_url;

                    _0x5ca944.dh.$p(_0x4438f7, _0x176038, _0x4e022a);

                  }

                });

              };

              _0x11271b.Pp = function (_0x2a27d0, _0x1e7c8a) {

                var _0x57560f = _0x11271b.og._e.el();

                _0x11271b.og.af.Fn(_0x2a27d0, _0x1e7c8a, _0x57560f);

                _0x11271b.Ci.pe(_0x232886.ge.je.bf);

                _0x11271b.og.Ak(_0x11271b.og.af.En());

              };

              _0x11271b.Sn = function () {

                if (!_0x11271b.Tn()) {

                  return _0x11271b.On.Bj();

                }

                var _0x1012f6 = parseInt(_0x232886.Vf.fg(_0x232886.Vf.bg));

                if (_0x1012f6 != null && _0x11271b.On.Cj(_0x1012f6, _0x232886.tj.sj)) {

                  return _0x1012f6;

                } else {

                  return _0x11271b.On.Bj();

                }

              };

              _0x11271b.Xn = function (_0x190854) {

                _0x232886.Vf.eg(_0x232886.Vf.dg, _0x190854 ? "true" : "false", 1800);

              };

              _0x11271b.Tn = function () {

                return _0x232886.Vf.fg(_0x232886.Vf.dg) === "true";

              };

              _0x11271b.Rp = function (_0x4df8a5) {

                if (_0x4df8a5 !== _0x11271b.Bp) {

                  _0x11271b.Bp = _0x4df8a5;

                  var _0x2768a9 = _0x2768a9 || {};

                  _0x2768a9.consented = _0x4df8a5;

                  _0x2768a9.gdprConsent = _0x4df8a5;

                  _0x11271b.zn.yn.ha();

                  _0x11271b.zn.Op.ha();

                  _0x11271b.zn.Up.ha(function (_0x318a5c) {

                    if (_0x318a5c) {

                      _0x30e418(_0x517360 = 0);

                    }

                    _0x11271b.Vp();

                  });

                }

              };

              _0x11271b.rp = function (_0x1d245f, _0x2de308) {

                _0x232886.Vf.eg(_0x232886.Vf.Wf, _0x1d245f ? "true" : "false");

                if (_0x2de308) {

                  _0x11271b.Sp(_0x1d245f);

                }

                _0x11271b.Rp(_0x1d245f);

              };

              _0x11271b.hl = function () {

                switch (_0x232886.Vf.fg(_0x232886.Vf.Wf)) {

                  case "true":

                    return true;

                  default:

                    return false;

                }

              };

              _0x11271b.Go = function () {

                try {

                  return !!window.isIPInEEA || _0x11271b.Fp != null && !!_0x1c15a7.gg.hg(_0x11271b.Fp.coords.latitude, _0x11271b.Fp.coords.longitude);

                } catch (_0x54e1bf) {

                  return true;

                }

              };

              _0x11271b.Nf = function () {

                _0x11271b.Dp = performance.now();

                _0x11271b.Ep = _0x11271b.Dp - _0x11271b.Cp;

                _0x11271b.dh.lh(_0x11271b.Dp, _0x11271b.Ep);

                _0x11271b.og.lh(_0x11271b.Dp, _0x11271b.Ep);

                _0x11271b.Cp = _0x11271b.Dp;

              };

              _0x11271b.Jf = function () {

                _0x11271b.og.Jf();

              };

              return _0x11271b;

            }();

          };

          _0x232886.Engine = function () {

            var _0x5e2453 = {

              dq: 30,

              fq: new Float32Array(100),

              gq: 0,

              hq: 0,

              iq: 0,

              jq: 0,

              kq: 0,

              lq: 0,

              Cn: 0,

              mq: null,

              nq: 300,

              Mp: function () {},

              Np: function () {},

              Qp: function () {},

              Lp: function () {},

              hh: new _0x232886.GameParams(),

              Kp: null,

              ch: null,

              Hi: {},

              Fh: {},

              Di: 12.5,

              eh: 40,

              oq: 1,

              pq: -1,

              qq: 1,

              rq: 1,

              sq: -1,

              tq: -1,

              uq: 1,

              vq: 1,

              wq: -1,

              Ih: 500,

              yh: 500

            };

            _0x5e2453.hh.zg = 500;

            _0x5e2453.ch = new _0x232886.Worm(_0x5e2453.hh);

            _0x5e2453.run = function () {

              _0x5e2453.ch.ti(_0x5d39d0().og.af.ng);

            };

            _0x5e2453.gh = function (_0xa1bdb0, _0x55efa4, _0x144eaa, _0x39b4d7) {

              _0x5e2453.pq = _0xa1bdb0;

              _0x5e2453.qq = _0x55efa4;

              _0x5e2453.rq = _0x144eaa;

              _0x5e2453.sq = _0x39b4d7;

              _0x5e2453.yq();

            };

            _0x5e2453.zq = function (_0x332b6a) {

              _0x5e2453.oq = _0x332b6a;

              _0x5e2453.yq();

            };

            _0x5e2453.yq = function () {

              _0x5e2453.tq = _0x5e2453.pq - _0x5e2453.oq;

              _0x5e2453.uq = _0x5e2453.qq + _0x5e2453.oq;

              _0x5e2453.vq = _0x5e2453.rq - _0x5e2453.oq;

              _0x5e2453.wq = _0x5e2453.sq + _0x5e2453.oq;

            };

            _0x5e2453.lh = function (_0x4eb69d, _0x111c2d) {

              _0x5e2453.iq += _0x111c2d;

              _0x5e2453.hq -= _0x5e2453.gq * 0.2 * _0x111c2d;

              _0x5e2453.Kp.Rh();

              if (_0x5e2453.mq !== null && (_0x5e2453.Cn === 2 || _0x5e2453.Cn === 3)) {

                _0x5e2453.Aq(_0x4eb69d, _0x111c2d);

                _0x5e2453.eh = 4 + _0x5e2453.Di * _0x5e2453.ch.$c;

              }

              var _0x74b18d = 1000 / Math.max(1, _0x111c2d);

              var _0x5a3246 = 0;

              for (var _0x1a9dff = 0; _0x1a9dff < _0x5e2453.fq.length - 1; _0x1a9dff++) {

                _0x5a3246 += _0x5e2453.fq[_0x1a9dff];

                _0x5e2453.fq[_0x1a9dff] = _0x5e2453.fq[_0x1a9dff + 1];

              }

              _0x5e2453.fq[_0x5e2453.fq.length - 1] = _0x74b18d;

              _0x5e2453.dq = (_0x5a3246 + _0x74b18d) / _0x5e2453.fq.length;

            };

            _0x5e2453.Bq = function (_0x390594, _0xefab6b) {

              return _0x390594 > _0x5e2453.tq && _0x390594 < _0x5e2453.uq && _0xefab6b > _0x5e2453.vq && _0xefab6b < _0x5e2453.wq;

            };

            _0x5e2453.Aq = function (_0x486516, _0xddc483) {

              var _0x50838c = _0x5e2453.iq + _0x5e2453.hq;

              var _0x5bbf12 = (_0x50838c - _0x5e2453.jq) / (_0x5e2453.kq - _0x5e2453.jq);

              _0x5e2453.ch.hj(_0x486516, _0xddc483);

              _0x5e2453.ch.ij(_0x486516, _0xddc483, _0x5bbf12, _0x5e2453.Bq);

              var _0x289093 = 0;

              for (var _0x5b0d6f in _0x5e2453.Fh) {

                var _0x4ed1a9 = _0x5e2453.Fh[_0x5b0d6f];

                _0x4ed1a9.hj(_0x486516, _0xddc483);

                _0x4ed1a9.ij(_0x486516, _0xddc483, _0x5bbf12, _0x5e2453.Bq);

                if (_0x4ed1a9.xi && _0x4ed1a9.$c > _0x289093) {

                  _0x289093 = _0x4ed1a9.$c;

                }

                if (!_0x4ed1a9.wi && (!!(_0x4ed1a9.dj < 0.005) || !_0x4ed1a9.xi)) {

                  _0x4ed1a9.si();

                  delete _0x5e2453.Fh[_0x4ed1a9.Eh.ae];

                }

              }

              _0x5e2453.zq(_0x289093 * 3);

              for (var _0x34ae44 in _0x5e2453.Hi) {

                var _0x105f25 = _0x5e2453.Hi[_0x34ae44];

                _0x105f25.hj(_0x486516, _0xddc483);

                _0x105f25.ij(_0x486516, _0xddc483, _0x5e2453.Bq);

                if (_0x105f25.Ni && (_0x105f25.dj < 0.005 || !_0x5e2453.Bq(_0x105f25.Zi, _0x105f25.$i))) {

                  _0x105f25.si();

                  delete _0x5e2453.Hi[_0x105f25.Eh.ae];

                }

              }

            };

            _0x5e2453.ki = function (_0x72335c, _0x568470) {

              if (_0x5e2453.Cn === 1) {

                _0x5e2453.Cn = 2;

                _0x5e2453.Mp();

              }

              var _0x4ec62b = _0x5d39d0().Dp;

              _0x5e2453.lq = _0x72335c;

              if (_0x72335c === 0) {

                _0x5e2453.jq = _0x4ec62b - 95;

                _0x5e2453.kq = _0x4ec62b;

                _0x5e2453.iq = _0x5e2453.jq;

                _0x5e2453.hq = 0;

              } else {

                _0x5e2453.jq = _0x5e2453.kq;

                _0x5e2453.kq = _0x5e2453.kq + _0x568470;

              }

              var _0x5f2832 = _0x5e2453.iq + _0x5e2453.hq;

              _0x5e2453.gq = (_0x5f2832 - _0x5e2453.jq) / (_0x5e2453.kq - _0x5e2453.jq);

            };

            _0x5e2453.Oi = function () {

              if (_0x5e2453.Cn === 1 || _0x5e2453.Cn === 2) {

                _0x5e2453.Cn = 3;

                var _0x22717d = _0x5e2453.mq;

                setTimeout(function () {

                  if (_0x5e2453.Cn === 3) {

                    _0x5e2453.Cn = 0;

                  }

                  if (_0x22717d != null && _0x22717d === _0x5e2453.mq) {

                    _0x5e2453.mq.close();

                    _0x5e2453.mq = null;

                  }

                }, 4500);

                _0x5e2453.Np();

              }

            };

            _0x5e2453.Wp = function () {

              return _0x5e2453.Cn !== 2 && (_0x5e2453.Cn = 1, _0x5e2453.Kp.Qh(), _0x5e2453.Hi = {}, _0x5e2453.Fh = {}, _0x5e2453.ch.Pm(), _0x5e2453.mq != null && (_0x5e2453.mq.close(), _0x5e2453.mq = null), true);

            };

            _0x5e2453.Cq = function () {

              _0x5e2453.mq = null;

              _0x5e2453.Kp.Qh();

              if (_0x5e2453.Cn !== 3) {

                _0x5e2453.Lp();

              }

              _0x5e2453.Cn = 0;

            };

// إنشاء إعدادات اللعبة مع حفظ الاسم الصحيح

if (typeof window.gameConfig === 'undefined') {

  window.gameConfig = {

    infiniteRespawn: false,

    playerName: "" // حفظ الاسم الصحيح هنا

  };

}



// حفظ الاسم الصحيح عند بدء اللعب

(function() {

    // مراقبة تغيير الاسم في حقل النص

    const observeNameChanges = setInterval(() => {

        const nicknameElement = document.getElementById("mm-params-nickname");

        

        if (nicknameElement && nicknameElement.value && nicknameElement.value.length > 0) {

            // التأكد أن القيمة ليست توكن (التوكن عادة يحتوي على نقاط أو أحرف خاصة)

            const value = nicknameElement.value;

            if (!value.includes('.') && !value.includes('eyJ') && value.length < 50) {

                window.gameConfig.playerName = value;

                console.log("💾 تم حفظ اسم اللاعب:", value);

            }

        }

        

        // حفظ من bbs إذا كان متوفراً

        if (typeof bbs !== 'undefined' && bbs.nickname && bbs.nickname.length > 0) {

            const nickname = bbs.nickname;

            if (!nickname.includes('.') && !nickname.includes('eyJ') && nickname.length < 50) {

                window.gameConfig.playerName = nickname;

                console.log("💾 تم حفظ اسم اللاعب من bbs:", nickname);

            }

        }

    }, 1000);

    

    // إيقاف المراقبة بعد دقيقة

    setTimeout(() => {

        clearInterval(observeNameChanges);

    }, 60000);

})();



// إضافة مستمع للضغط على مفتاح F9 لتفعيل/تعطيل ميزة infinite respawn

document.addEventListener('keydown', function(event) {

  if (event.key === 'F9') {

    window.gameConfig.infiniteRespawn = !window.gameConfig.infiniteRespawn;

    

    const status = window.gameConfig?.infiniteRespawn ? "wwc" : "wwc";

    const playerName = window.gameConfig?.playerName ?? "wwc";

    

    console.log("🔄 wwc Infinite Respawn:", status);

    console.log("👤 اسم اللاعب المحفوظ:", playerName);

    

    // إظهار تنبيه في الشاشة

    if (typeof _wwc !== 'undefined' && _wwc.showMessage) {

        _wwc.showMessage(`wwc Infinite Respawn: ${status}\nPlayer: ${playerName}`);

    }

  }

});



// تعديل الدالة الأولى مع استخدام الاسم المحفوظ

_0x5e2453.Zp = function (_0x515c7d, _0x233b37) {

  _0x5e2453.Dq(_0x515c7d, function () {

    if (window.gameConfig?.infiniteRespawn) {

      // ✅ استخدام الاسم المحفوظ مسبقاً

      var playerName = window.gameConfig?.playerName;

      

      // إذا لم يكن هناك اسم محفوظ، ابحث عنه_0x225f93 

      if (!playerName || playerName.length === 0) {

        // البحث في العناصر المختلفة

        const nicknameElement = document.getElementById("mm-params-nickname");

        if (nicknameElement && nicknameElement.value) {

          const value = nicknameElement.value;

          // تجنب التوكن

          if (!value.includes('.') && !value.includes('eyJ') && value.length < 50) {

            playerName = value;

            window.gameConfig.playerName = value; // حفظه للمرات القادمة

          }

        }

        

        // البحث في bbs

        if (!playerName && typeof bbs !== 'undefined' && bbs.nickname) {

          const nickname = bbs.nickname;

          if (!nickname.includes('.') && !nickname.includes('eyJ') && nickname.length < 50) {

            playerName = nickname;

            window.gameConfig.playerName = nickname;

          }

        }

        

        // اسم افتراضي

        if (!playerName) {

          playerName = "Player";

        }

      }

      

      console.log("🎮 wwc Infinite Respawn - اسم اللاعب:", playerName);

      console.log("🔍 البيانات الممررة (_0x233b37):", _0x233b37 ? _0x233b37.substring(0, 50) + "..." : "فارغ");

      

      var _0x2a3c8f = 128;

      var _0x3d5b2e = Math.min(32, playerName.length);

      var _0x4e7f91 = new ArrayBuffer(7 + _0x3d5b2e * 2);

      var _0x5a8c4d = new DataView(_0x4e7f91);

      var _0x6b9e3a = 0;

      _0x5a8c4d.setInt8(_0x6b9e3a, 129);

      _0x6b9e3a += 1;

      _0x5a8c4d.setInt16(_0x6b9e3a, 2800);

      _0x6b9e3a += 2;

      _0x5a8c4d.setInt8(_0x6b9e3a, 0);

      _0x6b9e3a += 1;

      _0x5a8c4d.setInt16(_0x6b9e3a, _0x2a3c8f);

      _0x6b9e3a += 2;

      _0x5a8c4d.setInt8(_0x6b9e3a, _0x3d5b2e);

      _0x6b9e3a++;

      for (var _0x7c1f5b = 0; _0x7c1f5b < _0x3d5b2e; _0x7c1f5b++) {

        _0x5a8c4d.setInt16(_0x6b9e3a, playerName.charCodeAt(_0x7c1f5b));

        _0x6b9e3a += 2;

      }

      _0x5e2453.Eq(_0x4e7f91);

    } else {

      // الكود الأصلي بدون تغيير

      var _0x4b3f70 = Math.min(2048, _0x233b37.length);

      var _0x4f41c2 = new ArrayBuffer(6 + _0x4b3f70 * 2);

      var _0x49e45d = new DataView(_0x4f41c2);

      var _0x4cc885 = 0;

      _0x49e45d.setInt8(_0x4cc885, 129);

      _0x4cc885 += 1;

      _0x49e45d.setInt16(_0x4cc885, 2800);

      _0x4cc885 += 2;

      _0x49e45d.setInt8(_0x4cc885, 1);

      _0x4cc885 += 1;

      _0x49e45d.setInt16(_0x4cc885, _0x4b3f70);

      _0x4cc885 += 2;

      for (var _0x57e7cd = 0; _0x57e7cd < _0x4b3f70; _0x57e7cd++) {

        _0x49e45d.setInt16(_0x4cc885, _0x233b37.charCodeAt(_0x57e7cd));

        _0x4cc885 += 2;

      }

      _0x5e2453.Eq(_0x4f41c2);

    }

  });

};



// ترك الدالة الثانية كما هي بدون تغيير

_0x5e2453.$p = function (_0x1a697a, _0x2bfc65, _0x39a499) {

  _0x5e2453.Dq(_0x1a697a, function () {

    var _0x3dd730 = Math.min(32, _0x2bfc65.length);

    var _0x909366 = new ArrayBuffer(7 + _0x3dd730 * 2);

    var _0x432bd1 = new DataView(_0x909366);

    var _0x1aae62 = 0;

    _0x432bd1.setInt8(_0x1aae62, 129);

    _0x1aae62 += 1;

    _0x432bd1.setInt16(_0x1aae62, 2800);

    _0x1aae62 += 2;

    _0x432bd1.setInt8(_0x1aae62, 0);

    _0x1aae62 += 1;

    _0x432bd1.setInt16(_0x1aae62, _0x39a499);

    _0x1aae62 += 2;

    _0x432bd1.setInt8(_0x1aae62, _0x3dd730);

    _0x1aae62++;

    for (var _0x3e3ad3 = 0; _0x3e3ad3 < _0x3dd730; _0x3e3ad3++) {

      _0x432bd1.setInt16(_0x1aae62, _0x2bfc65.charCodeAt(_0x3e3ad3));

      _0x1aae62 += 2;

    }

    _0x5e2453.Eq(_0x909366);

  });

};



// دوال للتحكم والاختبار

window.setPlayerName = function(name) {

    window.gameConfig.playerName = name;

    console.log("✅ تم تعيين اسم اللاعب:", name);

};



window.getPlayerName = function() {

    console.log("👤 اسم اللاعب الحالي:", window.gameConfig.playerName);

    return window.gameConfig.playerName;

};



window.testInfiniteRespawn = function() {

    console.log("🔍 اختبار إعدادات Infinite Respawn:");

    console.log("  wwc الحالة:", window.gameConfig?.infiniteRespawn ? "wwc" : "wwc");

    console.log("  اسم اللاعب:", window.gameConfig?.playerName ?? "wwc");

    

    // محاولة العثور على الاسم الحالي

    const nicknameElement = document.getElementById("mm-params-nickname");

    if (nicknameElement) {

        console.log("  حقل الاسم:", nicknameElement.value || "فارغ");

    }

    

    if (typeof bbs !== 'undefined') {

        console.log("  bbs.nickname:", bbs.nickname || "غير موجود");

    }

};



console.log("🎮 تم تحميل wwc Infinite Respawn مع حفظ الاسم");

console.log("📋 الأوامر المتاحة:");

console.log("  setPlayerName('اسمك') - لتعيين الاسم يدوياً");

console.log("  getPlayerName() - لعرض الاسم المحفوظ");

console.log("  testInfiniteRespawn() - لاختبار الإعدادات");

            _0x5e2453.Eq = function (_0x563ad1) {

              try {

                if (_0x5e2453.mq != null && _0x5e2453.mq.readyState === WebSocket.OPEN) {

                  _0x5e2453.mq.send(_0x563ad1);

                }

              } catch (_0x1b5698) {

                _0x5e2453.Cq();

              }

            };

            

            

            _0x5e2453.xq = function (_0x30b586, _0x574a36) {

              var _0x33c786 = _0x574a36 ? 128 : 0;

              var _0x2eef52 = decoder.N(_0x30b586) / _0x1c15a7.F * 128 & 127;

              var _0x3e4cac = (_0x33c786 | _0x2eef52) & 255;

                var _0x3fe0c4 = new ArrayBuffer(1);

                new DataView(_0x3fe0c4).setInt8(0, _0x3e4cac);

                _0x5e2453.Eq(_0x3fe0c4);

                _0x5e2453.nq = _0x3e4cac;

             

            };

            

            

            





/*

_0x5e2453.xq = function (_0x30b586, _0x574a36) {

  var _0x33c786 = _0x574a36 ? 128 : 0;

  var _0x2eef52 = decoder.N(_0x30b586) / _0x1c15a7.F * 128 & 127;

  var _0x3e4cac = (_0x33c786 | _0x2eef52) & 255;

  

  var now = Date.now();

  if (_0x5e2453.nq !== _0x3e4cac || now - (_0x5e2453.lastPing || 0) > 800) {

    var _0x3fe0c4 = new ArrayBuffer(1);

    new DataView(_0x3fe0c4).setInt8(0, _0x3e4cac);

    _0x5e2453.Eq(_0x3fe0c4);

    _0x5e2453.nq = _0x3e4cac;

    _0x5e2453.lastPing = now;

  }

};

*/            

            

            

            _0x5e2453.Dq = function (_0x4d198c, _0xe39399) {

              var _0x88dc9a = _0x5e2453.mq = new WebSocket(_0x4d198c);

              _0x88dc9a.binaryType = "arraybuffer";

              _0x88dc9a.onopen = function () {

                if (_0x5e2453.mq === _0x88dc9a) {

                  _0xe39399();

                }

              };

              _0x88dc9a.onclose = function () {

                if (_0x5e2453.mq === _0x88dc9a) {

                  _0x5e2453.Cq();

                }

              };

              _0x88dc9a.onerror = function (_0x578675) {

                if (_0x5e2453.mq === _0x88dc9a) {

                  _0x5e2453.Cq();

                }

              };

              _0x88dc9a.onmessage = function (_0x543625) {

                if (_0x5e2453.mq === _0x88dc9a) {

                  _0x5e2453.Kp.Ph(_0x543625.data);

                }

              };

            };

            return _0x5e2453;

          };

          var _0x167356 = _0x201363({}, _0x39fe91);

          _0x39fe91 = _0x201363({

            $C: _0x232886,

            $V: _0x1c15a7,

            $F: decoder,

            POGL: _0x429afb

          }, _0x167356);

          _0x39fe91.Jb = function () {

            (_0x1f8817.Lc.zb.ud.skinArrayDict || []).forEach(function (_0x517054) {

              if (_0x517054.associados && _0x517054.associados.includes(_0x1f8817.Ij.Rk.userId)) {

                _0x517054[["n", "o", "n", "b", "u", "y", "a", "b", "l", "e"].join("")] = false;

              }

            });

          };

          var _0x460971 = function (_0x14a556) {

            var _0x10d4eb = {};

            _0x10d4eb.main = {

              yn: decoder.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),

              Op: decoder.ja("ltmolilci1iurq1i", "wormate-io_970x250"),

              Up: decoder.ga(),

              Ap: 4,

              Tp: false,

              xn: true

            };

            _0x10d4eb.miniclip = {

              yn: decoder.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),

              Op: decoder.ja("ltmolilci1iurq1i", "wormate-io_970x250"),

              Up: decoder.ga(),

              Ap: 4,

              Tp: false,

              xn: false

            };

            var _0xb5314 = _0x10d4eb[window.ENV];

            _0xb5314 ||= _0x10d4eb.main;

            return _0xb5314;

          }(window.ENV);

          $(function () {

            FastClick.attach(document.body);

          });

          addEventListener("contextmenu", function (_0x23e4d8) {

            _0x23e4d8.preventDefault();

            _0x23e4d8.stopPropagation();

            return false;

          });

          window.fbAsyncInit = function () {

            FB.init({

              appId: "861926850619051",

              cookie: true,

              xfbml: true,

              status: true,

              version: "v14.0"

            });

          };

          decoder.L("//apis.google.com/js/api:client.js", null, function () {

            gapi.load("auth2", function () {

              _0x3d881c = gapi.auth2.init({

                client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"

              });

            });

          });

          decoder.L("//connect.facebook.net/" + decoder.a.j + "/sdk.js", {

            id: "facebook-jssdk",

            async: true,

            defer: true,

            crossorigin: "anonymous"

          });

          _0x1f8817 = decoder.zp();

          _0x1f8817.Ip();

          (function () {

            function _0x2eed1e() {

              requestAnimationFrame(_0x2eed1e);

              _0x5d39d0().Nf();

            }

            _0x2eed1e();

          })();

          (function () {

            function _0x50218d() {

              var _0x19ceae = _0x5a48fe.width();

              var _0x97dee4 = _0x5a48fe.height();

              var _0x19efb9 = _0x3160c1.outerWidth();

              var _0x552cbf = _0x3160c1.outerHeight();

              var _0x4c9574 = _0x5c0fe6.outerHeight();

              var _0x5b6569 = _0x14ba14.outerHeight();

              var _0x472535 = Math.min(1, Math.min((_0x97dee4 - _0x5b6569 - _0x4c9574) / _0x552cbf, _0x19ceae / _0x19efb9));

              var _0x4794f8 = "translate(-50%, -50%) scale(" + _0x472535 + ")";

              _0x3160c1.css({

                "-webkit-transform": _0x4794f8,

                "-moz-transform": _0x4794f8,

                "-ms-transform": _0x4794f8,

                "-o-transform": _0x4794f8,

                transform: _0x4794f8

              });

              _0x5d39d0().Jf();

              window.scrollTo(0, 1);

            }

            var _0x5a48fe = $("body");

            var _0x3160c1 = $("#stretch-box");

            var _0x5c0fe6 = $("#markup-header");

            var _0x14ba14 = $("#markup-footer");

            _0x50218d();

            $(window).resize(_0x50218d);

          })();

        })();

      });

      setTimeout(function () {

        $(".mm-merchant-cont").append(`

      <div style="display: flex; justify-content: center; align-items: center; margin-top: 10px;">

        <a href="#" target="_blank" style="margin-right: 10px;">

      

        </a>

    

      </div>

      `);

        $(".mm-merchant-cont").css("top", "-10px");

      }, 4500);

      $(".description-text").css("height", "300px");



      var _0x513918 = "#001f3f";

      var _0x4a374a = function _0x29ea15(_0x4082da) {

        // Removed problematic background image URL
        var _0x360586 = "";

        document.body.style.backgroundColor = "#1a1a2e";

        document.body.style.backgroundImage = "none";

        document.body.style.backgroundRepeat = "no-repeat";

        document.body.style.backgroundSize = "cover";

        var _0x5856bb = document.getElementById("background-canvas");

        var _0x20ac25 = document.getElementById("game-wrap");

        _0x5856bb.style.backgroundColor = _0x513918;

        _0x5856bb.style.opacity = "0.65";

        _0x20ac25.style.backgroundColor = "transparent";

      };

      if (_0x5bc6f5) {

        _0x5bc6f5 = JSON.parse(_0x5bc6f5);

        if (_0x5bc6f5.background) {

          _0x4a374a(_0x5bc6f5.background);

        } else {

          _0x4a374a();

        }

      } else {

        _0x4a374a();

      }

      if (_0x38041d) {

        _0x38041d = JSON.parse(_0x38041d);

        if (_0x38041d && _0x38041d.audio) {

          _0x49249a.headshot = new _0x5a6428.Howl({

            src: [_0x38041d.audio],

            html5: true,

            autoplay: false,

            loop: false

          });

        }

      }

      window.testAudioCustom = function () {

        if (_0x38041d && _0x38041d.audio) {

          console.log("Playing custom audio?", _0x38041d.audio);

          _0x49249a.headshot.play();

        }

      };

      var _0xf99823 = _0xf99ac0(function _0xcfbe0b(_0x2e04d9, _0x429213, _0x5b77bf, _0xfb5a51, _0x2d1467, _0x4d3f78) {

        _0xafbee0(this, _0xcfbe0b);

        this.sid = null;

        this.wid = _0x2e04d9;

        this.refer = _0x429213;

        this.nickname = _0x5b77bf;

        this.score = _0x2d1467;

        this.myRoom = _0xfb5a51;

        this.myLocation = {

          x: 0,

          y: 0

        };

        this.teamRoom = _0x4d3f78;

        this.wuid = bbs.wuid;

      });

      w2c2020.containerHsRec.alpha = 0;

      w2c2020.containerHstop.alpha = 0;

      var _0x858c82 = [16711680, 65280, 16776960, 16752640, 16711935, 16777215, 10066329, 65535, 8388736, 255, 3447003, 2719929, 3066993, 1752220];

      function _0x4ba897(_0x3bde68, _0x2bbd2f) {

        if (!_0x2bbd2f) {

          return;

        }

        _0x2bbd2f.playerMap.position.x = _0x3bde68.position.x;

        _0x2bbd2f.playerMap.position.y = _0x3bde68.position.y;

      }

      function _0x1e0fa2(_0x433a59, _0x3bb76c, _0x373189) {

        var _0x431818 = Array.from(_0x433a59.keys()).indexOf(_0x3bb76c.sid);

        if (_0x431818 < 0) {

          _0x431818 = 0;

        }

        console.log("Index", _0x431818);

        var _0x4e7a5c = _0x858c82[_0x431818 % _0x858c82.length];

        var _0x83c7fe = `${_0x431818 + 1} - ${_0x3bb76c.nickname.substring(0, 15)}`;

        var _0xd59a1a = new PIXI.Text(_0x83c7fe, {

          fontFamily: "Arial",

          fontSize: 9.5,

          fill: _0x4e7a5c,

          align: "left"

        });

        _0xd59a1a.position.y = _0x431818 * 13;

        w2c2020.friends.addChild(_0xd59a1a);

        return _0xd59a1a;

      }

      function _0x11aaee(_0xf13856, _0x7c6335) {

        var _0x4064e3 = Array.from(_0xf13856.keys()).indexOf(_0x7c6335.sid);

        if (_0x4064e3 < 0) {

          _0x4064e3 = 0;

        }

        console.log("Index", _0x4064e3);

        var _0x13efae = _0x858c82[_0x4064e3 % _0x858c82.length];

        var _0x12706c = new PIXI.Graphics();

        _0x12706c.id = _0x7c6335.sid;

        _0x12706c.zIndex = 3;

        _0x12706c.alpha = 1;

        _0x12706c.beginFill(_0x13efae, 1);

        _0x12706c.drawCircle(0, 0, 3.5);

        _0x12706c.endFill();

        _0x12706c.position.x = _0x7c6335.position.x;

        _0x12706c.position.y = _0x7c6335.position.y;

        w2c2020.conteinerTeam.addChild(_0x12706c);

        return _0x12706c;

      }

      _wwcio.connect = function (_0x1c0630) {

        var _0x598aa0 = new Map();

        var _0x132003 = (bbs.con || "").match(/(wss:|ws:)\/\/(.*?)-(.*):(.*?)\//);

        if (!_0x132003) {

          _0x132003 = [];

        }

        if (_0x132003 && _0x2a3828.includes(_0x132003[2])) {

          _wwcio.leaderboardUpdated([], []);

          var _0x55d2fa = _0x24c052 ? "local" : _0x132003[2];

          var _0x3c44f9 = _wwc._anApp.dh.hh.xg + (_0x132003[2] || "L") + (_0x132003[4] || "0");

          _wwcio.player = new _0xf99823(bbs.userId, _0x1c0630 ? _0x1c0630.ae : userId, _0x1c0630 ? _0x1c0630.ma : "AN", _0x3c44f9, 0, _wwcio.player.teamRoom);

          try {

            var _0x21faf6 = (0, _0x3265ad.io)(_0x3a85d3[_0x55d2fa], {

              path: "/api/",

              transports: ["websocket"],

              reconnectionAttempts: 5

            });

            var _0x176e5a = function _0x6433a9() {

              _0x21faf6.emit("join", _wwcio.player, function (_0x23db08) {

                _wwcio.leaderboardUpdated(_0x23db08.top10, _0x23db08.top3);

                if (_wwcio.player.teamRoom) {

                  _0x21faf6.emit("joinTeam");

                  var _0x42e672 = _0x1e0fa2(_0x598aa0, _wwcio.player, true);

                  _0x598aa0.set(_wwcio.player.sid, {

                    wid: _wwcio.player.wid,

                    playerMap: null,

                    playerText: _0x42e672

                  });

                  w2c2020.friends.alpha = 1;

                  console.log("Conectado com Team!", _wwcio.player.teamRoom);

                }

              });

            };

            _0x21faf6.on("connect", function () {

              console.log("Conectado ao servidor:", _0x21faf6.id);

              _wwcio.player.sid = _0x21faf6.id;

              _0x176e5a();

            });

            _0x21faf6.on("message", function (_0x1bc9ee) {

              console.log("Recebido", _0x1bc9ee);

              switch (_0x1bc9ee.type) {

                case "join":

                  _wwcio.obj.sid = _0x1bc9ee.sid;

                  break;

                case "leaderBoard":

                  _wwcio.leaderboardUpdated(_0x1bc9ee.top10, _0x1bc9ee.top3);

                  break;

                case "update":

                  break;

                case "leave":

                  break;

                default:

                  break;

              }

              if (_0x1bc9ee && _0x1bc9ee.top10) {

                _wwcio.leaderboardUpdated(_0x1bc9ee.top10, _0x1bc9ee.top3);

              }

            });

            _0x21faf6.on("connect_error", function (_0x212428) {

              console.error("Erro de conexão:", _0x212428);

            });

            _0x21faf6.on("disconnect", function () {

              console.warn("Desconectado.");

              _0x598aa0.forEach(function (_0x57fadb) {

                w2c2020.conteinerTeam.removeChild(_0x57fadb.playerMap);

                w2c2020.friends.removeChild(_0x57fadb.playerText);

              });

              _0x598aa0.clear();

            });

            _0x21faf6.on("error", function (_0x5c0b2d) {

              console.error("Erro:", _0x5c0b2d);

            });

            _0x21faf6.on("updateLocation", function (_0x281b39) {

              if (!_0x281b39) {

                return;

              }

              var _0x36aae4 = _0x598aa0.get(_0x281b39.sid);

              if (!_0x36aae4) {

                var _0x5e4776 = Array.from(_0x598aa0.values()).find(function (_0x5e3056) {

                  return _0x5e3056.wid === _0x281b39.wid;

                });

                console.log("Player", _0x5e4776);

                _0x598aa0.set(_0x281b39.sid, {

                  wid: _0x281b39.wid

                });

                var _0xce80ea = _0x1e0fa2(_0x598aa0, _0x281b39);

                var _0x2949d0 = _0x11aaee(_0x598aa0, _0x281b39);

                _0x36aae4 = _0x598aa0.get(_0x281b39.sid);

                _0x36aae4.playerMap = _0x2949d0;

                _0x36aae4.playerText = _0xce80ea;

              }

              _0x4ba897(_0x281b39, _0x36aae4);

            });

            _0x21faf6.on("leaveTeam", function (_0x29ce99) {

              console.log("Saiu do time", _0x29ce99);

              var _0x4e4548 = _0x598aa0.get(_0x29ce99.sid);

              if (_0x4e4548) {

                w2c2020.conteinerTeam.removeChild(_0x4e4548.playerMap);

                w2c2020.friends.removeChild(_0x4e4548.playerText);

                _0x598aa0.delete(_0x29ce99.sid);

              }

            });

            _wwcio.sendLocation = function (_0x335f47) {

              _0x21faf6.emit("updateLocation", _0x335f47);

            };

            _wwcio.update = function (_0x3a5d05, _0x324061) {

              if (_0x3a5d05 >= 6) {

                _0x3a5d05 = 1;

              }

              var _0x2d5184 = !!(_0x3a5d05 & 2);

              var _0x27ecb7 = "update";

              if (_0x2d5184 && _0x324061) {

                _0x27ecb7 = "headshot";

              }

              if (typeof _0x3a5d05 === "string") {

                _0x27ecb7 = _0x3a5d05;

              }

              _0x21faf6.emit("message", {

                action: _0x27ecb7,

                player: _wwcio.player

              }, function (_0x5237fd) {

                _wwcio.player.score = _0x5237fd.player.score;

              });

            };

            _wwcio.close = function () {

              _0x21faf6.emit("leaveTeam");

              setTimeout(function () {

                _0x21faf6.disconnect();

                _0x21faf6.close();

              }, 1000);

            };

          } catch (_0x1b1718) {

            w2c2020.containerHsRec.alpha = 0;

            w2c2020.containerHstop.alpha = 0;

            console.error("Erro: Servidor não disponível.");

            _wwcio.close();

          }

        } else {

          w2c2020.containerHsRec.alpha = 0;

          w2c2020.containerHstop.alpha = 0;

          console.error("NO MATCH!");

        }

      };

    }

  };

  var _0x3b6b15 = {};

  function _0x39cd93(_0x2090be) {

    var _0x27f2e5 = _0x3b6b15[_0x2090be];

    if (_0x27f2e5 !== undefined) {

      return _0x27f2e5.exports;

    }

    var _0xeef38e = _0x3b6b15[_0x2090be] = {

      id: _0x2090be,

      loaded: false,

      exports: {}

    };

    _0x2f7c71[_0x2090be](_0xeef38e, _0xeef38e.exports, _0x39cd93);

    _0xeef38e.loaded = true;

    return _0xeef38e.exports;

  }

  (() => {

    _0x39cd93.amdO = {};

  })();

  (() => {

    _0x39cd93.n = _0x3fea13 => {

      var _0x530d05 = _0x3fea13 && _0x3fea13.__esModule ? () => _0x3fea13.default : () => _0x3fea13;

      _0x39cd93.d(_0x530d05, {

        a: _0x530d05

      });

      return _0x530d05;

    };

  })();

  (() => {

    _0x39cd93.d = (_0x43cf7b, _0x264b8f) => {

      for (var _0x199c9d in _0x264b8f) {

        if (_0x39cd93.o(_0x264b8f, _0x199c9d) && !_0x39cd93.o(_0x43cf7b, _0x199c9d)) {

          Object.defineProperty(_0x43cf7b, _0x199c9d, {

            enumerable: true,

            get: _0x264b8f[_0x199c9d]

          });

        }

      }

    };

  })();

  (() => {

    _0x39cd93.g = function () {

      if (typeof globalThis === "object") {

        return globalThis;

      }

      try {

        return this || new Function("return this")();

      } catch (_0x53bfd9) {

        if (typeof window === "object") {

          return window;

        }

      }

    }();

  })();

  (() => {

    _0x39cd93.hmd = _0x3621de => {

      _0x3621de = Object.create(_0x3621de);

      if (!_0x3621de.children) {

        _0x3621de.children = [];

      }

      Object.defineProperty(_0x3621de, "exports", {

        enumerable: true,

        set: () => {

          throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + _0x3621de.id);

        }

      });

      return _0x3621de;

    };

  })();

  (() => {

    _0x39cd93.o = (_0x32ec86, _0x25ab66) => Object.prototype.hasOwnProperty.call(_0x32ec86, _0x25ab66);

  })();

  (() => {

    _0x39cd93.r = _0x7534f9 => {

      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {

        Object.defineProperty(_0x7534f9, Symbol.toStringTag, {

          value: "Module"

        });

      }

      Object.defineProperty(_0x7534f9, "__esModule", {

        value: true

      });

    };

  })();

  var _0x3b47c8 = _0x39cd93("./src/temp.js");

})();















































// اعتراض جميع طلبات fetch

(function() {

    const originalFetch = window.fetch;

    

    window.fetch = function(...args) {

        const url = args[0];

        console.log("🌐 طلب fetch:", url);

        

        return originalFetch.apply(this, args)

            .then(response => {

                console.log("📥 استجابة من:", url);

                

                // اعتراض طلب set-worm-world

                if (url.includes('/extension/set-worm-world') || url.includes('/set-worm-world')) {

                    console.log("🎯 اعتراض set-worm-world");

                    

                    // إنشاء استجابة مخصصة كاملة

                    const customResponse = `<style>

  .news-box-wormworld {

    background-color: #ffffff;

    padding: 10px;

    border: 2px solid #ff0000;

    border-radius: 5px;

    margin-bottom: 10px;

    width: 100%;

    height: 86%;

    position: relative;

    z-index: 1;

    overflow-y: scroll;

  }



  .news-box-wormworld .news-content {

    width: 100%;

    height: 85%;

    overflow-y: auto;

    padding: 10px;

    border: 1px solid #eb0000;

    box-sizing: border-box;

  }



  .news-box-wormworld .news-button {

    position: absolute;

    bottom: 20px;

    display: flex;

    align-items: center;

    gap: 5px;

    width: 100%;

  }



  .news-box-wormworld .close-button {

    position: absolute;

    right: 33px;

    background-color: #f44336;

    color: white;

    border: none;

    padding: 5px 10px;

    cursor: pointer;

    font-size: 12px;

    top: -24px;

    width: 100px;

    height: 50px;

  }



  #idwormworld a {

    color: #fff;

  }



  .wwc-joystick div {

    min-width: 100px;

    display: inline-block;

  }



  @keyframes mmwwcGlow {
    0%, 100% {
      box-shadow: 0 0 8px 2px rgba(0, 200, 255, 0.5), 0 0 15px 4px rgba(0, 200, 255, 0.3);
    }
    50% {
      box-shadow: 0 0 12px 3px rgba(0, 200, 255, 0.7), 0 0 20px 6px rgba(0, 200, 255, 0.5);
    }
  }

  #game-wrap #game-cont #stretch-box #main-menu-view .line-bottom #mm-wwc {

    background: #00ccff;

    color: #fff;

    overflow: hidden;

    height: 50px;

    line-height: 50px;

    font-size: 20px;

    padding: 0 10px;

    box-sizing: border-box;

    border-radius: 5px;

    border: 0;

    outline: 0;

    box-shadow: 0 0 8px 2px rgba(0, 200, 255, 0.5), 0 0 15px 4px rgba(0, 200, 255, 0.3);

    text-align: center;

    text-shadow: 0 0 3px rgba(0, 200, 255, 0.5);

    cursor: pointer;

    transition: all 0.3s ease;
    animation: mmwwcGlow 2s ease-in-out infinite;

    min-width: 120px;

    display: inline-block;

    margin: 0 3px;

  }



  .group-tab-button {

    display: flex;

    margin-top: 7px;

  }



  .tab-button {

    cursor: pointer;

    padding: 5px 15px;

    background-color: #eee;

    border: 1px solid #ccc;

    border-radius: 5px 5px 0 0;

  }



  .tab-button:hover {

    background-color: #000;

    color: #fff;

  }



  .tab-button.active {

    background-color: #fff;

    color: #ff0000;

  }



  .tab-content {

    display: none;

    padding: 5px 10px 0 10px;

    border-radius: 0 0 5px 5px;

  }



  .active-tab {

    display: block;

  }



  .sub-title {

    font-size: 14px;

    font-weight: bold;

    display: block;

    color: rgb(0, 0, 0);

    border-bottom: 1px solid;

    margin: 10px 0;

  }



  #idReplaceSkin button {

    font-size: small;

    padding: 5px 15px;

    z-index: 1;

    position: absolute;

    background-color: transparent;

    color: #FFF;

    border: 1px solid #eb991c;

    border-radius: 15px;

  }

<style>


  #idReplaceSkin button:hover {

    background-color: #eb991c;

    color: #000;

    border: 1px solid #cfcfcf;

  }

</style>



<div style="position: relative; padding: 10px; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); border-radius: 8px;">

  <h2 style="text-align: center; color: #00ccff; margin: 0 0 12px 0; font-size: 18px; font-weight: bold; text-shadow: 0 0 8px rgba(0, 200, 255, 0.4);">🐛 WormWorld 🐛</h2>

  <button style="background: linear-gradient(135deg, #ff4444, #cc0000); color: #fff; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-weight: bold; box-shadow: 0 1px 3px rgba(0,0,0,0.2); position: absolute; top: 8px; right: 8px; font-size: 12px;" id="mm-wwc-close">

    ✕ CLOSE

  </button>

  <div style="margin-bottom: 10px; background: white; padding: 8px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); clear: both; margin-top: 5px;">

    <label style="font-weight: bold; color: #333; font-size: 12px; display: block; margin-bottom: 4px;">📋 ID:</label>

    <div style="display: flex; gap: 6px; align-items: center;">

      <input type="text" value="${bbs.userId}" id="wormate_id" readonly style="flex: 1; padding: 5px; border: 1px solid #00ccff; border-radius: 4px; background: #f0f8ff; font-family: monospace; font-size: 11px;" />

      <button onclick="navigator.clipboard.writeText('${bbs.userId}')" style="background: #4CAF50; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-weight: bold; box-shadow: 0 1px 3px rgba(0,0,0,0.2); font-size: 11px;">COPY</button>

    </div>

  </div>

  

    

      <form name="formSkin" method="POST" enctype="multipart/form-data" style="background: white; padding: 8px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 10px;">

        <label style="font-weight: bold; color: #333; font-size: 12px; display: block; margin-bottom: 4px;">📁 File:</label>

        <input id="fileSkin" type="file" accept="application/json" style="padding: 5px; border: 1px solid #00ccff; border-radius: 4px; width: 100%; box-sizing: border-box; font-size: 11px;" />

      </form>

      
        <div class="page-set-worm-world">

          <div class="group-tab-button">

            <div id="tab_b1" class="tab-button active" onclick="changeTab(0)">

              SET

            </div>

            <div id="tab_b3" class="tab-button" onclick="changeTab(2)">Account</div>

            <div id="tab_b4" class="tab-button" onclick="changeTab(3)">HELP</div>

            <div id="tab_b5" class="tab-button" onclick="changeTab(4)">CUSTOM</div>

            <div id="tab_b6" class="tab-button" onclick="changeTab(5)">SET ZOOM</div>

            <div id="tab_b7" class="tab-button" onclick="changeTab(6)">SKIN SWAP</div>

            <div id="tab_b8" class="tab-button" onclick="changeTab(7)">JOYSTICK</div>

          </div>



          <div id="tab1" class="tab-content active-tab">

            

              <div style="display: flex">

    <div style="width: 33%">

        <label>SAVE Kill:</label>

        <input type="checkbox" id="saveGame" />

    </div>

    <div style="width: 33%">

        <label>Background:</label>

        <select id="backgroundArena"></select>
    </div>

    <div style="width: 25%">
        <label style="display: block; text-align: center; font-weight: bold; color: #00ccff; text-shadow: 0 0 5px rgba(0,204,255,0.5); font-size: 14px; margin-bottom: 3px;">&#128028; ZIGZAG &#128028;</label>
        <select id="sel_zigzag" style="width: 100%; padding: 4px; border: 1px solid #4a9bff; border-radius: 4px; background: #1a1a2e; color: white; font-size: 12px; box-shadow: 0 0 5px rgba(74,155,255,0.3);">
            <option value="0">Normal</option>
            <option value="1">Zigzag 1</option>
            <option value="2">Zigzag 2</option>
            <option value="3">Zigzag 3</option>
        </select>
    </div>



    <div style="width: 34%">

        <label>Replace SKIN:</label>

        <input style="width: 60px" type="text" name="inputReplaceSkin" id="inputReplaceSkin" value="35" maxlength="4"

            onchange="setIdReplaceSkin(this)" />

    </div>

</div>

<div style="display: grid;

          grid-template-columns: repeat(3, 1fr);

          grid-template-rows: 1fr;

          grid-column-gap: 0px;

          grid-row-gap: 0px;

          margin-top: 10px;">

    <div>

        <label>TOP HS ("9")</label>

        <input type="checkbox" id="showTophs" />

    </div>

    <div>

        <label>Record HS ("0")</label>

        <input type="checkbox" id="showRechs" />

    </div>

    <div>

        <label>TOP 3</label>

        <input type="checkbox" id="onlytop" />

    </div>

</div>

            <div class="setting-item" style="text-align: right;">

              <span class="setting-label"><i class="fas fa-desktop" style="color: #ffbb00;"></i> :</span>

              <select id="hudPositionMode">

                <option value="0">100%</option>

                <option value="1">75%</option>

                <option value="2">Center</option>

              </select>

            </div>

<div style="margin-bottom: 5px">

    <strong class="sub-title">Joystick Settings</strong>

    <div class="wwc-joystick">

        <div>

            <label style="display: block">Active</label>

            <input type="checkbox" id="joystick_checked" onclick="setconfigjoystick_checked(this)" />

        </div>

        <div>

            <label style="display: block">Color</label>

            <select id="joystick_color" onchange="setconfigjoystick_color(this)">

                <option value="red">RED</option>

                <option value="blue">BLUE</option>

                <option value="white">WHITE</option>

                <option value="black">Black</option>

            </select>

        </div>

        <div>

            <label style="display: block">Mode</label>

            <select id="joystick_mode" onchange="setconfigjoystick_mode(this)">

                <option value="dynamic">Dynamic</option>

                <option value="static">Static</option>

            </select>

        </div>

        <div>

            <label style="display: block">Position</label>

            <select id="joystick_position" onchange="setconfigjoystick_position(this)">

                <option value="R">Right</option>

                <option value="L">Left</option>

            </select>

        </div>

        <div>

            <label style="display: block; margin-top: 10px;">Size</label>

            <select id="joystick_size" onchange="setconfigjoystick_size(this)">

                <option value="110">110</option>

                <option value="100">100</option>

                <option value="90">90</option>

                <option value="80">80</option>

                <option value="75">75</option>

                <option value="70">70</option>

            </select>

        </div>

    </div>

</div>

<strong class="sub-title">Plus</strong>

<div style="

          display: grid;

          grid-template-columns: repeat(4, 1fr);

          grid-template-rows: 1fr;

          grid-column-gap: 0px;

          grid-row-gap: 0px;

          margin-top: 10px;

        ">

    <div>

        <label>Bad Language</label>

        <input type="checkbox" id="activeBadLang" />

    </div>

    <div>

        <label>SOUNDS:</label>

        <input type="checkbox" id="activeSounds" />

    </div>

</div>

                

          </div>

          <div id="tab2" class="tab-content">

            em construção

          </div>

          <div id="tab3" class="tab-content">

            <style>

  .tabLabel {

    display: block;

    font-size: 12px;

  }

</style>

<div style="position: relative; padding: 30px; background: linear-gradient(to bottom, #00f0ff, #c285ff); border-radius: 20px; width: 400px; box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); color: #fff;">

  <div style="text-align: center;">

    <span style="float: right; cursor: pointer; font-size: 24px; font-weight: bold; color: #fff;" id="mm-wwc-close">&times;</span>

    <h2 style="margin: 0 0 20px 0; font-size: 32px;">⚙️</h2>

  </div>

  
  <div style="margin-bottom: 15px;">

    <label for="wormate_id" style="display: block; margin-bottom: 8px; font-weight: bold;">📋 Account ID</label>

    <div style="display: flex; gap: 10px;">

      <input value="${bbs.userId}" type="text" id="wormate_id" readonly style="padding: 8px; border: none; border-radius: 8px; flex: 1; box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);" />

      <button onclick="navigator.clipboard.writeText('${bbs.userId}')" style="background-color: #910e91; color: white; border: none; border-radius: 8px; padding: 8px 12px; cursor: pointer; font-weight: bold; box-shadow: 0 0 10px #f0f; transition: 0.3s ease;" onmouseover="this.style.backgroundColor='#b91ab9'; this.style.boxShadow='0 0 20px #f0f'" onmouseout="this.style.backgroundColor='#910e91'; this.style.boxShadow='0 0 10px #f0f'">COPY</button>

    </div>

  </div>

  

  <div style="margin-bottom: 15px;">

    <label for="fileSkin" style="display: block; margin-bottom: 8px; font-weight: bold;">📁 Skin_Wear_file (.json)</label>

    <div style="display: flex; gap: 10px;">

      <input type="file" accept=".json" id="fileSkin" style="padding: 8px; border: none; border-radius: 8px; flex: 1; box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);" />

      <button onclick="document.getElementById('fileSkin').value=''" style="background-color: #910e91; color: white; border: none; border-radius: 8px; padding: 8px 12px; cursor: pointer; font-weight: bold; box-shadow: 0 0 10px #f0f; transition: 0.3s ease;" onmouseover="this.style.backgroundColor='#b91ab9'; this.style.boxShadow='0 0 20px #f0f'" onmouseout="this.style.backgroundColor='#910e91'; this.style.boxShadow='0 0 10px #f0f'">Clear</button>

    </div>

  </div>

  <br>

      
  <div style="margin: 10px 0;border-bottom: 1px  solid #CCC;padding-bottom: 5px;">

    <button id="toShareRank" onclick="toShareRank()">To Share in data e Rank</button>

  </div>

  <div style="margin: 10px 0;border-bottom: 1px  solid #CCC;padding-bottom: 5px;">

    The data is updated manually only due to data sharing regulations.

    <div style="margin: 10px 0;">

      <button id="btnGenerateToken" type="button" onclick="onOpen()"

        style="width: 100%;background-color: #54fd36;padding: 6px;font-size: 20px;">

        Open Account

      </button>

    </div>

  </div>

  <br />

  <div style="margin-top: 5px;">

    <div style="display: flex;gap: 10px;justify-content: space-between;align-items: center;">

      <div>

        <label for="sharedLocation">CONNECT IN</label>

        <input type="text" placeholder="ROOM CODE" id="roomCode" name="roomCode" />

        <div style="display: flex;justify-content: space-between;gap: 5px;margin: 5px 0;">

          <button style="width: 100%;" onclick="setRoomCode(true)">CONNECT</button>

          <button style="width: 100%;" onclick="setRoomCode(false)">DISCONNECT</button>

        </div>

      </div>

      

    </div>

  </div>

</div>

<script>

  const serverGame = JSON.parse(localStorage.getItem("serverGame") || "{}");

  const url_token = "https://wormworld.io/extension";

  

  // ✅ استخدام التوكن المحفوظ

  var token = localStorage.getItem("wormworld_token") || bbs.tk;

  var idwormate = bbs.userId;



  (async function () {

    if (document.getElementById("code")) {

      document.getElementById("code").value = serverGame.code || "";

    }

    document.getElementById("roomCode").value = serverGame.roomCode || "";

    _wwcio.player.teamRoom = serverGame.roomCode || "";



    console.log(_wwcio.player);

  })();



  function copyToken(e) {

    const copyText = document.getElementById("code");

    copyText.select();

    copyText.setSelectionRange(0, 99999);

    document.execCommand("copy");

    alert("Copied the text: " + copyText.value);

  }



  function onOpen() {

    var newWindow = window.open("", "_blank");

    onGenerateToken(function () {

      newWindow.location.href = "https://wormworld.io/admin?page=login&token=" + token;

    });

  }



  function createRoom() {

    const oldCode = document.getElementById("code").value;

    serverGame.code = window.gerarCodigoUnico();

    document.getElementById("code").value = serverGame.code;

    serverGame.roomCode = serverGame.code;

    localStorage.setItem("serverGame", JSON.stringify(serverGame));

    alert("Room created successfully!");

  }



  function setRoomCode(connect) {

    try {



      serverGame.roomCode = connect ? document.getElementById("roomCode").value : "";

      _wwcio.player.teamRoom = serverGame.roomCode;

      localStorage.setItem("serverGame", JSON.stringify(serverGame));

      alert("Room " + (connect ? "connected" : "disconnected") + " successfully!");



    } catch (e) {

      console.log(e);

    }

  }



  function onChangeCode() {

    serverGame.code = document.getElementById("code").value;

    localStorage.setItem("serverGame", JSON.stringify(serverGame));

  }



  function onGenerateToken(fn) {

    fetch(url_token + "/account/gen", {

      method: "POST",

      headers: {

        "Content-Type": "application/json",

      },

      body: JSON.stringify({

        tk: token, // ✅ استخدام التوكن المحفوظ

        wuid: bbs.wuid,

      }),

    }).then(async function (response) {

      const json = await response.json();

      token = json.tk;

      // ✅ حفظ التوكن الجديد

      localStorage.setItem("wormworld_token", token);

      if (fn) {

        fn();

      }

    });

  }



  function toShareRank() {

    if (!confirm("Are you sure you want to share your rank?")) {

      return;

    }

    const url_token = "https://gateway.wormate.io/pub/wuid/" + bbs.wuid + "/consent/change?value=true";



    fetch(url_token).then(async function (response) {

      alert("To Share Rank Success!");

      window.location.reload();

    });

  }

</script>

          </div>

          <div id="tab4" class="tab-content">

            

              <strong class="sub-title">KEYBOARD</strong>

<div style="padding: 5px; margin-top: 5px; border: #eb991c 1px solid; display: flex;">

  <ul>

    <li>0 - SHOW/HIDE RECORD HS</li>

    <li>1 - SKIN REPLACE</li>

    <li>9 - SHOW/HIDE TOP HS</li>

    <li>8 - AUTOMATIC LOOP</li>

    <li>7 - AUTOMATIC SPIRAL</li>

    <li>6 - SHOW/HIDE NAMES TOP(1 SEG RUN)</li>

  </ul>

  <ul>

    <li>5 - RESPAWN</li>

    <li>4 - LASER</li>

    <li>3 - BACKGROUND</li>

    <li>&lt;|, - ZOOM(+ 0.25)</li>

    <li>&gt;|. - ZOOM(- 0.25)</li>

    <li>Z = ZOOM(1)</li>

    <li>C = CLOSE-UP(0.5)</li>

  </ul>

</div>

                

          </div>

          <div id="tab5" class="tab-content">

            

              <div style="display:flex; gap: 15px;">

  <div>

    <strong class="sub-title">LASER</strong>

    <input type="checkbox" id="laser" name="laser" value="laser" checked>

    <input type="color" id="color" name="color" value="#ff0000">

    <input type="range" id="range" name="range" min="0.1" max="1" step="0.1" value="0.1">

    <span id="range-value">0.1</span>

  </div>

  <div>

    <strong class="sub-title">ENEMY NAME COLOR</strong>

    <input type="color" id="enemyNameColor" name="enemyNameColor" value="#ff0000">

    <input type="number" id="enemyNameFontSize" name="enemyNameFontSize" min="14" max="28" step="1" value="14">

  </div>

</div>

<strong class="sub-title">CUSTOMIZE</strong>

<button id="TestAUDIO" onclick="testAudio()">Test AUDIO</button>

<button id="clearBackground" onclick="clearBackground()">Clear WALLPAPERS</button>

<button id="clearPosition" onclick="clearMapPosition()">Clear Map Position</button>

<button id="clearClock" onclick="clearClock()">Clear Map Clock</button>

<button id="clearJoyStick" onclick="clearJoyStick()">Clear Joy Stick</button>

<button id="clearBgGame" onclick="clearBgGame()">Clear Bg GAME</button>



<script>



  const range = document.getElementById('range');

  const rangeValue = document.getElementById('range-value');

  const color = document.getElementById('color');

  const laserActive = document.getElementById('laser');

  const enemyNameColor = document.getElementById('enemyNameColor');

  const enemyNameFontSize = document.getElementById('enemyNameFontSize');



  range.value = bbs.laser || 0.1;

  rangeValue.textContent = bbs.laser || 0.1;

  color.value = bbs.laserColor || 0xff0000;

  laserActive.checked = bbs.laserActive || false;

  enemyNameColor.value = bbs.enemyNameColor;

  enemyNameFontSize.value = bbs.enemyNameFontSize || 14;



  range.addEventListener('input', (e) => {

    const value = parseFloat(e.target.value).toFixed(1);

    rangeValue.textContent = value;

    bbs.laser = value;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  });



  color.addEventListener('input', (e) => {

    const colorValue = e.target.value;

    bbs.laserColor = colorValue;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    console.log("Selected color: " + colorValue);

  });



  laserActive.addEventListener('change', (e) => {

    bbs.laserActive = e.target.checked;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  });



  enemyNameColor.addEventListener('input', (e) => {

    const colorValue = e.target.value;

    bbs.enemyNameColor = colorValue;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    console.log("Selected color: " + colorValue);

  });



  enemyNameFontSize.addEventListener('input', (e) => {

    const fontSizeValue = e.target.value;

    bbs.enemyNameFontSize = parseInt(fontSizeValue, 10);

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    console.log("Selected font size: " + fontSizeValue);

  });



  function testAudio() {

    testAudioCustom();

  }



  function clearBackground() {

    bbs.backgroundUri = null;

    bbs.background = 0;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    alert("Clear Background");

  }





  function clearMapPosition() {

    bbs.display.clock = { x: 60, y: 60, Tg: null };

    bbs.display.top = { x: 225, y: 1 };

    bbs.display.custom = false;

    bbs.displayFriends = {

      x: -10,

      y: 315,

      rotation: 0,

    }

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    alert("Clear Map Position");

    window.location.reload();

  }



  function clearClock() {

    bbs.display.customClock = null;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    alert("CLOCK MAP UPDATE OK!");

    window.location.reload();

  }



  function clearJoyStick() {

    bbs.customJoystick = null;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    alert("JOYSTICK MAP UPDATE OK!");

    window.location.reload();

  }



  function clearBgGame() {

    bbs.background = null;

    bbs.backgroundIsCustom = false;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    alert("BG GAME CLEAR OK!");

    window.location.reload();

  }





</script>

                

          </div>

          <div id="tab6" class="tab-content">



            <style>

  .set-zoom-wwc {

    display: grid;

    grid-template-columns: repeat(2, 1fr);

    grid-template-rows: repeat(3, 1fr);

    grid-column-gap: 0px;

    grid-row-gap: 0px;

    margin-top: 10px;

  }



  .szwwc-item {

    grid-column: 1 / 3;

  }



  .szwwc-item label {

    display: block;

  }



  .szwwc-item div {

    display: flex;

    align-items: center;

  }



  .szwwc-item input[type="range"] {

    flex: 1;

    width: 90%;

  }

</style>

<div class="set-zoom-wwc">

  <div>

    <label>Zoom PC</label>

    <input type="checkbox" id="activeZoom" />

  </div>

  <div>

    <label>Zoom Mobile</label>

    <input type="checkbox" id="activeZoomMobile" />

  </div>

  <div class="szwwc-item">

    <label>Zoom Limit Down</label>

    <div>

      <input type="range" id="limitDown" min="0.25" max="2" step="0.25" />

      <span id="limitDownValue"></span>

    </div>

  </div>

  <div class="szwwc-item">

    <label>Zoom +|- step (CAUTION)</label>

    <div>

      <input type="range" id="step" min="0.25" max="2" step="0.25" />

      <span id="stepValue"></span>

    </div>

  </div>

  <div class="szwwc-item">

    <label>Zoom Keyboard (c or C)</label>

    <div>

      <input type="range" id="closeUp" min="0.25" max="2" step="0.25" />

      <span id="closeUpValue"></span>

    </div>

  </div>

  <div class="szwwc-item">

    <label>Zoom Keyboard (z or Z)</label>

    <div>

      <input type="range" id="closeDown" min="0.25" max="2" step="0.25" />

      <span id="closeDownValue"></span>

    </div>

  </div>

</div>



<script>

  const configZoom = bbs.configZoom || {

    limitDown: 0.25,

    step: 0.25,

    closeUp: 0.5,

    closeDown: 1,

  };



  document.getElementById("limitDown").value = configZoom.limitDown;

  document.getElementById("step").value = configZoom.step;

  document.getElementById("closeUp").value = configZoom.closeUp;

  document.getElementById("closeDown").value = configZoom.closeDown;



  document.getElementById("limitDownValue").textContent = configZoom.limitDown;

  document.getElementById("stepValue").textContent = configZoom.step;

  document.getElementById("closeUpValue").textContent = configZoom.closeUp;

  document.getElementById("closeDownValue").textContent = configZoom.closeDown;



  function updateConfigZoom() {

    bbs.configZoom = {

      limitDown: parseFloat(document.getElementById("limitDown").value),

      step: parseFloat(document.getElementById("step").value),

      closeUp: parseFloat(document.getElementById("closeUp").value),

      closeDown: parseFloat(document.getElementById("closeDown").value),

    };

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  }



  document.getElementById("limitDown").addEventListener("input", function () {

    document.getElementById("limitDownValue").textContent = this.value;

    updateConfigZoom();

  });



  document.getElementById("step").addEventListener("input", function () {

    document.getElementById("stepValue").textContent = this.value;

    updateConfigZoom();

  });



  document.getElementById("closeUp").addEventListener("input", function () {

    document.getElementById("closeUpValue").textContent = this.value;

    updateConfigZoom();

  });



  document.getElementById("closeDown").addEventListener("input", function () {

    document.getElementById("closeDownValue").textContent = this.value;

    updateConfigZoom();

  });



  document.getElementById("activeZoom").checked = bbs.activeZoom;



  if (false) {

    bbs.activeZoom = false;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  }



  document.getElementById("activeZoom").addEventListener("change", function () {

    if (false) {

      bbs.activeZoom = false;

    } else {

      bbs.activeZoom = this.checked;

    }

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    window.location.reload();

  });



  document.getElementById("activeZoomMobile").checked = bbs.activeZoomMobile;

  document.getElementById("activeZoomMobile").addEventListener("change", function () {

    bbs.activeZoomMobile = this.checked;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    window.location.reload();

  });



</script>



          </div>

          <div id="tab7" class="tab-content">

            

              <style>

  .container-tab7 {}

</style>

<div class="container-tab7">

  <h3>SKINS SELECTEDS</h3>

  <ul id="myListSkin"></ul>

  <hr />

  <button id="cleanTheSkinShed" onclick="initTab7()">Reload LIST</button>

  <button id="cleanTheSkinShed" onclick="cleanTheSkinShed()">Clean LIST</button>

</div>

<script>

  const initTab7 = () => {

    const myListSkin = document.getElementById("myListSkin");

    bbs.cambiar = bbs.cambiar || {};

    if(Object.keys(bbs.cambiar).length === 0){

      myListSkin.innerHTML = "<li>Empty</li>";

      return;

    }

    myListSkin.innerHTML = "";

    for (const key in bbs.cambiar) {

      const li = document.createElement("li");

      li.innerHTML = bbs.cambiar[key];

      myListSkin.appendChild(li);

    }

  }



  function cleanTheSkinShed() {

    bbs.cambiar = {};

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    alert("Clean the skin shed.");

    initTab7();

  }



  initTab7();

</script>

                

          </div>

          <div id="tab8" class="tab-content">

            

              <style>

    .game-area {

        border: 1px solid #CCC;

    }



    .menu-bar {

        width: 100%;

        display: flex;

        gap: 10px;

        justify-content: center;

        align-content: flex-start;

        align-items: flex-start;

    }



    .slider-container-01 {

        width: 95%;

        height: 110px;

        background: #eee;

        display: flex;

        align-content: center;

        justify-content: center;

        align-items: center;

    }



    .slider-container-02 {

        width: 5%;

        display: flex;

        justify-content: center;

    }



    .slider-container-02 input[type="range"] {

        transform: rotate(270deg);

    }

</style>

<div style="padding: 0 0 5px 0;border-bottom: 1px solid #CCC;margin: 0 0 5px 0;">

    <div style="display: flex;">

        <div>

            <label>Type Button Zoom</label>

            <select id="joystickSelectTypeCurrent" name="joystickSelectTypeCurrent">

                <option value="btn">BUTTON</option>

                <option value="range">RANGE</option>

            </select>

        </div> &nbsp; | &nbsp;

        <div>

            <label>Type Name</label>

            <select id="joystickSelectTypeName" name="joystickSelectTypeCurrentName">

                <option value="all">all</option>

                <option value="abb">abbreviated</option>

            </select>

        </div>

    </div>

    <div id="joystickButtons" style="display: flex;margin: 5px 0;justify-content: space-between;">

    </div>

</div>

PREVIEW

<div class="game-area">

    <div class="menu-bar"></div>

    <div style="display: flex;">

        <div class="slider-container-01">

            TOUCH DIRECTIONAL

        </div>

        <div class="slider-container-02">

            <input id="sliderZoom" type="range" min="0.25" max="2" step="0.25" value="1" style="width: 90px;">

        </div>

    </div>

</div>

<hr>

<div>

    <button id="joystickCleanConfig">CLEAN CONFIG</button>

</div>

<script>

    const btn = "btn_";



    document.getElementById("joystickCleanConfig").addEventListener("click", () => {

        if(!confirm("Do you want to clean the configuration?")) return;

        bbs.configJoystick = null

        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

        location.reload();

    });



    const initTab8 = () => {



        document.querySelector(".menu-bar").innerHTML = "";

        document.getElementById("joystickButtons").innerHTML = "";



        Object.keys(bbs.configJoystick.buttons).forEach((key) => {



            const button = bbs.configJoystick.buttons[key];

            const buttonElement = document.createElement("button");

            buttonElement.innerHTML = bbs.configJoystick.typeCurrentName === 'all' ? button.label : button.labelAbbreviation;

            buttonElement.id = btn + key;

            buttonElement.disabled = !button.active;

            document.querySelector(".menu-bar").appendChild(buttonElement);



            const checkebox = document.createElement("input");

            checkebox.type = "checkbox";

            checkebox.id = btn + key + "check";

            checkebox.checked = button.active;

            checkebox.addEventListener("change", (event) => {

                bbs.configJoystick.buttons[key].active = event.target.checked;

                localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

                document.getElementById(btn + key).disabled = !event.target.checked;

            });



            const label = document.createElement("label");

            label.htmlFor = checkebox.id;

            label.textContent = button.label;



            const container = document.getElementById("joystickButtons");

            label.prepend(checkebox);

            container.appendChild(label);

        });



        const joystickSelect = document.getElementById("joystickSelectTypeCurrent");

        joystickSelect.value = bbs.configJoystick.typeCurrent;



        joystickSelect.addEventListener("change", (event) => {

            bbs.configJoystick.typeCurrent = event.target.value;

            localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

            initTab8();

        });



        const joystickSelectName = document.getElementById("joystickSelectTypeName");

        joystickSelectName.value = bbs.configJoystick.typeCurrentName;



        joystickSelectName.addEventListener("change", (event) => {

            bbs.configJoystick.typeCurrentName = event.target.value;

            localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

            initTab8();

        });



        const sliderZoom = document.getElementById("sliderZoom");

        if (joystickSelect.value === "btn") {

            sliderZoom.disabled = true;

            document.getElementById(btn + "zoomplus").disabled = false;

            document.getElementById(btn + "zoomminus").disabled = false;

        } else {

            sliderZoom.disabled = false;

            document.getElementById(btn + "zoomplus").disabled = true;

            document.getElementById(btn + "zoomminus").disabled = true;

        }





    }

    initTab8();

</script>

                

          </div>

        </div>

        

          

</div>

<script>

  function changeTab(tabIndex) {

    const tabButtons = document.querySelectorAll(".tab-button");

    for (let i = 0; i < tabButtons.length; i++) {

      tabButtons[i].classList.remove("active");

    }

    const selectedButton = document.getElementById("tab_b" + (tabIndex + 1));

    selectedButton.classList.add("active");



    const tabContents = document.querySelectorAll(".tab-content");

    for (let i = 0; i < tabContents.length; i++) {

      tabContents[i].classList.remove("active-tab");

    }

    const selectedTab = document.getElementById("tab" + (tabIndex + 1));

    selectedTab.classList.add("active-tab");

  }

</script>

<script>

  if (false) {

    function _0x5d83(){const _0x206afa=['prototype','key','77ZtDLrZ','click','includes','return\\x20(function()\\x20','__proto__','9iCzcDS','3174892TttXOR','console','{}.constructor(\\x22return\\x20this\\x22)(\\x20)','1261272KMMZqr','opacity','warn','style','1318701xpEzMU','constructor','5bzjkOa','bind','2554388YgJKyP','log','5574462mflStJ','2182920EZdGNs','(((.+)+)+)+$','getElementById','search','apply','error','stopPropagation','1202714pzPFzR','pointerEvents','length','2hiYRgI','trace','toString','0.5'];_0x5d83=function(){return _0x206afa;};return _0x5d83();}const _0x1fe8a1=_0x100d;(function(_0x543c18,_0x1395cb){const _0x59b7d8=_0x100d,_0x2f54e7=_0x543c18();while(!![]){try{const _0x549729=-parseInt(_0x59b7d8(0x130))/0x1*(parseInt(_0x59b7d8(0x133))/0x2)+-parseInt(_0x59b7d8(0x146))/0x3+-parseInt(_0x59b7d8(0x14a))/0x4+parseInt(_0x59b7d8(0x148))/0x5*(parseInt(_0x59b7d8(0x14c))/0x6)+parseInt(_0x59b7d8(0x13f))/0x7+-parseInt(_0x59b7d8(0x142))/0x8*(-parseInt(_0x59b7d8(0x13e))/0x9)+parseInt(_0x59b7d8(0x14d))/0xa*(parseInt(_0x59b7d8(0x139))/0xb);if(_0x549729===_0x1395cb)break;else _0x2f54e7['push'](_0x2f54e7['shift']());}catch(_0x4d846a){_0x2f54e7['push'](_0x2f54e7['shift']());}}}(_0x5d83,0xc0402));const _0x267f96=(function(){let _0x323eb7=!![];return function(_0x5bd17a,_0x523ed9){const _0x1910a2=_0x323eb7?function(){const _0x2d0df1=_0x100d;if(_0x523ed9){const _0x701c6c=_0x523ed9[_0x2d0df1(0x12d)](_0x5bd17a,arguments);return _0x523ed9=null,_0x701c6c;}}:function(){};return _0x323eb7=![],_0x1910a2;};}()),_0x544ecf=_0x267f96(this,function(){const _0x540910=_0x100d;return _0x544ecf[_0x540910(0x135)]()[_0x540910(0x12c)](_0x540910(0x12a))['toString']()[_0x540910(0x147)](_0x544ecf)[_0x540910(0x12c)](_0x540910(0x12a));});function _0x100d(_0x3ce5b8,_0x168500){const _0x41f287=_0x5d83();return _0x100d=function(_0x5f257c,_0xaf3251){_0x5f257c=_0x5f257c-0x12a;let _0x57c0ce=_0x41f287[_0x5f257c];return _0x57c0ce;},_0x100d(_0x3ce5b8,_0x168500);}_0x544ecf();const _0xaf3251=(function(){let _0xc75621=!![];return function(_0x1a75f7,_0x13e69d){const _0x289d37=_0xc75621?function(){if(_0x13e69d){const _0x4fea53=_0x13e69d['apply'](_0x1a75f7,arguments);return _0x13e69d=null,_0x4fea53;}}:function(){};return _0xc75621=![],_0x289d37;};}()),_0x5f257c=_0xaf3251(this,function(){const _0x1a93d5=_0x100d,_0xca38f9=function(){const _0x3bb04d=_0x100d;let _0x2eed00;try{_0x2eed00=Function(_0x3bb04d(0x13c)+_0x3bb04d(0x141)+');')();}catch(_0x1cec9c){_0x2eed00=window;}return _0x2eed00;},_0x5468ef=_0xca38f9(),_0x27b0a5=_0x5468ef[_0x1a93d5(0x140)]=_0x5468ef['console']||{},_0x3ef65f=[_0x1a93d5(0x14b),_0x1a93d5(0x144),'info',_0x1a93d5(0x12e),'exception','table',_0x1a93d5(0x134)];for(let _0x232895=0x0;_0x232895<_0x3ef65f[_0x1a93d5(0x132)];_0x232895++){const _0x468347=_0xaf3251[_0x1a93d5(0x147)][_0x1a93d5(0x137)][_0x1a93d5(0x149)](_0xaf3251),_0x23f84f=_0x3ef65f[_0x232895],_0xa80bb4=_0x27b0a5[_0x23f84f]||_0x468347;_0x468347[_0x1a93d5(0x13d)]=_0xaf3251[_0x1a93d5(0x149)](_0xaf3251),_0x468347[_0x1a93d5(0x135)]=_0xa80bb4[_0x1a93d5(0x135)]['bind'](_0xa80bb4),_0x27b0a5[_0x23f84f]=_0x468347;}});_0x5f257c(),window['onwheel']=_0x12b532=>{const _0x140b92=_0x100d;luaDeCristal=0x1,e['preventDefault'](),e[_0x140b92(0x12f)]();},window['addEventListener']('keydown',function(_0x3a5d5d){const _0x599c55=_0x100d;['<',',','>','.','z','c'][_0x599c55(0x13b)](_0x3a5d5d[_0x599c55(0x138)])&&(luaDeCristal=0x1,_0x3a5d5d['preventDefault'](),_0x3a5d5d[_0x599c55(0x12f)]());},![]);const el=document[_0x1fe8a1(0x12b)]('mm-action-play');el&&(el['disabled']=!![],el[_0x1fe8a1(0x145)][_0x1fe8a1(0x131)]='none',el[_0x1fe8a1(0x145)][_0x1fe8a1(0x143)]=_0x1fe8a1(0x136),el['addEventListener'](_0x1fe8a1(0x13a),_0xcf1853=>{_0xcf1853['preventDefault'](),_0xcf1853['stopPropagation']();},!![]));setInterval(()=>{luaDeCristal=0x1;},0xbb8);

  }

  var setWormworld = document.getElementById("set_wormworld");

  if (setWormworld) {

    setWormworld.addEventListener("click", function() {

      document.getElementById("mm-settings").click();

    });

  }



  var select = document.getElementById("backgroundArena");

  var inputFile = document.getElementById("fileSkin");



  const setconfigjoystick_checked = function (e) {

    if (!bbs.joystick) {

      bbs.joystick = window._wwc.joystick();

    }

    bbs.joystick.checked = e.checked;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  };

  const setconfigjoystick_color = function (e) {

    if (!bbs.joystick) {

      bbs.joystick = window._wwc.joystick();

    }

    bbs.joystick.color = e.value;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  };

  const setconfigjoystick_mode = function (e) {

    if (!bbs.joystick) {

      bbs.joystick = window._wwc.joystick();

    }

    bbs.joystick.mode = e.value;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    console.log(bbs.joystick);

  };

  const setconfigjoystick_position = function (e) {

    if (!bbs.joystick) {

      bbs.joystick = window._wwc.joystick();

    }

    bbs.joystick.position = {

      left: "75px",

      bottom: "75px",

    };

    if (e.value === "R") {

      bbs.joystick.position = {

        right: "75px",

        bottom: "75px",

      };

    }

    bbs.joystick.positionMode = e.value;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  };

  const setconfigjoystick_pxy = function (e) {

    if (!bbs.joystick) {

      bbs.joystick = window._wwc.joystick();

    }

    bbs.joystick.position = {

      left: (parseInt(e.value) + 10).toString() + "px",

      bottom: e.value + "px",

    };

    if (bbs.joystick.positionMode === "R") {

      bbs.joystick.position = {

        right: (parseInt(e.value) + 10).toString() + "px",

        bottom: e.value + "px",

      };

    }

    bbs.joystick.pxy = e.value;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  };

  const setconfigjoystick_size = function (e) {

    if (!bbs.joystick) {

      bbs.joystick = window._wwc.joystick();

    }

    bbs.joystick.size = e.value;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  };

  const setIdReplaceSkin = function (e) {

    bbs.idReplaceSkin = window._wwc.isNumberValid(e.value) ? e.value : 32;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  };



  if (document.getElementById("setArrawInd")) {

    document.getElementById("setArrawInd").checked = bbs.arrow;

    document.getElementById("setArrawInd").addEventListener("change", function () {

      bbs.arrow = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

      window.location.reload();

    });

  }



  if (document.getElementById("onlytop")) {

    document.getElementById("onlytop").checked = bbs.lr;

    document.getElementById("onlytop").addEventListener("change", function () {

      bbs.lr = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    });

  }



  if (document.getElementById("showTophs")) {

    document.getElementById("showTophs").checked = bbs.showTophs;

    document.getElementById("showTophs").addEventListener("change", function () {

      bbs.showTophs = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    });

  }



  if (document.getElementById("showRechs")) {

    document.getElementById("showRechs").checked = bbs.showRechs;

    document.getElementById("showRechs").addEventListener("change", function () {

      bbs.showRechs = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    });

  }



  if (document.getElementById("activeBadLang")) {

    document.getElementById("activeBadLang").checked = bbs.activeBadLang;

    document.getElementById("activeBadLang").addEventListener("change", function () {

      bbs.activeBadLang = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

      window.location.reload();

    });

  }



  if (document.getElementById("activeSounds")) {

    document.getElementById("activeSounds").checked = bbs.activeSounds2;

    document.getElementById("activeSounds").addEventListener("change", function () {

      bbs.activeSounds2 = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

      window.location.reload();

    });

  }





    // إضافة كود Screen Mode هنا

  if (document.getElementById("hudPositionMode")) {

    document.getElementById("hudPositionMode").value = bbs.hudSettings?.mode || 0;

    

    document.getElementById("hudPositionMode").addEventListener("change", function() {

      if (!bbs.hudSettings) {

        bbs.hudSettings = { mode: 0, wi: 1 };

      }

      

      bbs.hudSettings.mode = parseInt(this.value);

      

      if (bbs.hudSettings.mode == 1) {

        bbs.hudSettings.wi = screen.height / (screen.width * 2);

      } else if (bbs.hudSettings.mode == 2) {

        bbs.hudSettings.wi = 0;

      } else {

        bbs.hudSettings.wi = 1;

      }

      

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

      console.log("HUD mode changed to:", bbs.hudSettings.mode);

    });

  }



  if (document.getElementById("modoSTREAMER")) {

    document.getElementById("modoSTREAMER").checked = bbs.display.custom;

    document.getElementById("modoSTREAMER").addEventListener("change", function () {

      bbs.display.clock.x = this.checked ? 250 : 60;

      bbs.display.clock.y = 60;

      bbs.display.top.x = this.checked ? 475 : 225;

      bbs.display.top.y = 1;

      bbs.display.custom = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

      window.location.reload();

    });

  }



  if (select && typeof backgroundArena !== 'undefined') {

    for (var i = 0; i < backgroundArena.length; i++) {

      let opt = document.createElement("option");

      opt.value = i;

      opt.innerHTML = backgroundArena[i].nome;

      select.appendChild(opt);

    }

    select.value = isNaN(bbs.background) ? 0 : bbs.background || 0;

  }



  function onChange(event) {

    var reader = new FileReader();

    reader.onload = onReaderLoad;

    reader.readAsText(event.target.files[0]);

  }



  var region = function (a, d, t, e) {

    return {

      texture: d,

      h: t - 5,

      w: t - 5,

      x: t * (e ? 0 : a || 0),

      y: 0,

    };

  };



  function onReaderLoad(event) {

    try {

      let hasBrowserCompatible = "55524c534552565f574f524d574f524c44";

      var hex = hasBrowserCompatible.toString();

      var name_browser = "";



      for (var n = 0; n < hex.length; n += 2) {

        name_browser += String.fromCharCode(parseInt(hex.substr(n, 2), 16));

      }



      if (!window[name_browser]) {

        document.location.reload(true);

        return;

      }



      hasBrowserCompatible =

        /w.*wo.*rl.*h.*ap/gim.test(window[name_browser]) ||

        /l.*host/gim.test(window[name_browser]);



      let t = JSON.parse(event.target.result);



      if (t && t.wear) {

        localStorage.setItem("custom_wormworld_wear", event.target.result);

        alert("LOAD WEAR OK!");

        window.location.reload();

        return;

      }



      if (t && t.skin) {

        localStorage.setItem("custom_wormworld_skin", event.target.result);

        alert("LOAD SKIN OK!");

        window.location.reload();

        return;

      }

      

        if (t.typeCustom && t.typeCustom === "background") {

          alert("Free MODE!");

        }

      

      

        if (t.typeCustom && t.typeCustom === "bgGame") {

          alert("Free MODE!");

        }

      



      

        if (t.typeCustom && t.typeCustom === "audio") {

          alert("Free MODE!");

        }

      

      if (t.typeCustom && t.typeCustom === "customJoyStick") {

        bbs.customJoystick = t;

        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

        alert("BACKGROUND JOYSTICK OK!");

        window.location.reload();

        return;

      }

      

        if (t.typeCustom && t.typeCustom === "clockMap") {

          alert("Free MODE!");

        }

      

      if (t.typeCustom && t.typeCustom === "demoSetLayout") {

        bbs.display.clock.x = t.data.wc || 60;

        bbs.display.clock.y = t.data.hc || 60;

        bbs.display.clock.rc = t.data.rc || 0;

        bbs.display.top.x = t.data.wt || 225;

        bbs.display.top.y = t.data.ht || 1;

        bbs.display.top.rt = t.data.rt || 0;

        bbs.display.custom = true;



        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

        alert("LAYOUT UPDATE OK!");

        return;

      }



      if (Array.isArray(t) && t.length > 0) {

        localStorage.setItem("custom_wormworld_badLang", JSON.stringify(t));

        let regex = [];

        (t || []).forEach((x) => {

          regex.push(x + " | " + x + " | " + x);

        });

        if (typeof badLanguageRegEx !== 'undefined') {

          badLanguageRegEx = badLanguageRegEx + "|" + regex.join("|");

        }

        alert("LIST UPDATE OK!");

        window.location.reload();

      }



      if (t.version_skin === 2) {

        let id_item = "SKIN_" + t.id + "___Z"

        const obj = {

          id: t.id,

          regionDict: {},

          textureDict: {},

          skinArrayDict: [],

          skinGroupArrayDict: [{

            id: t.id,

            name: { en: "Custom V2" },

            list: [],

          }],

          version_skin: 3

        }

        const skin = {

          id: id_item,

          guest: false,

          price: 0,

          priceBefore: 0,

          nonbuyable: false,

          prime: "c_white",

          glow: t.glow,

          base: [],

        };

        for (let c = t.len - 1; 0 <= c; c--) {

          obj.regionDict[id_item + "_" + c] = region(c, id_item, t.cos, 0);

          skin.base.push(id_item + "_" + c);

        }

        obj.textureDict[id_item] = {

          custom: true,

          re1ativePath: t.file || t.td.file,

          h1: true,

        };

        obj.skinArrayDict.push(skin);

        obj.skinGroupArrayDict[0].list.push(id_item);



        alert("SKIN OK!");

        localStorage.setItem("custom_wormworld_skin", JSON.stringify(obj));

        window.location.reload();

      }



      if (t.version_skin === 3) {

        let id_wormate = document.getElementById("wormate_id").value;

        const obj = {

          id: t.id,

          regionDict: {},

          textureDict: {},

          skinArrayDict: [],

          skinGroupArrayDict: [{

            id: t.id,

            name: { en: "CUSTON PACK:" + (t.skins.length) },

            list: [],

          }],

          version_skin: 3

        }

        for (let item of t.skins) {

          const skin = {

            id: item.id,

            guest: false,

            price: 0,

            priceBefore: 0,

            nonbuyable: item.associados.includes(id_wormate),

            prime: "c_white",

            associados: item.associados,

            glow: item.glow,

            base: [],

          };

          for (let c = t.len - 1; 0 <= c; c--) {

            obj.regionDict[item.id + "_" + c] = region(c, item.id, t.cos, 0);

            skin.base.push(item.id + "_" + c);

          }

          obj.textureDict[item.id] = {

            custom: true,

            re1ativePath: item.file,

            h1: true,

            h4: true,

          };

          obj.skinArrayDict.push(skin);

          obj.skinGroupArrayDict[0].list.push(item.id);

        }

        alert("PACKAGE SKIN OK!");

        localStorage.setItem("custom_wormworld_skin", JSON.stringify(obj));

        window.location.reload();

      }



    } catch (error) {

      console.error(error);

      alert("file not valid!");

    }

  }



  if (inputFile) {

    document.getElementById("fileSkin").addEventListener("change", onChange);

  }



  function closeWwcSetView() {

    const element = document.getElementById("wwc-set-view");

    if (element) element.style.display = "none";

  }



  if (document.getElementById("mm-wwc-close")) {

    document.getElementById("mm-wwc-close").addEventListener("click", closeWwcSetView);

  }



  const newsBox = document.querySelector(".news-box-wormworld");

  const newsBoxClose = document.getElementById("close-news-button");

  const newsCheckbox = document.getElementById("news-checkbox");



  var novidadewormworld = 1;



  if (newsCheckbox) {

    newsCheckbox.addEventListener("change", function () {

      if (this.checked) {

        bbs.novidadewormworld = novidadewormworld;

      } else {

        bbs.novidadewormworld = 0;

      }

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    });

  }



  if (newsBoxClose) {

    newsBoxClose.addEventListener("click", function () {

      newsBox.style.display = "none";

    });

  }





  if (newsBox && novidadewormworld != bbs.novidadewormworld) {

    newsBox.style.display = "block";

    fetch("https://wormworld.io/news/index.html")

      .then((response) => {

        if (!response.ok) {

          throw new Error("Network response was not ok");

        }

        return response.text();

      })

      .then((html) => {

        document.querySelector(".news-content").innerHTML = html;

      })

      .catch((error) => {

        console.error("Error loading HTML:", error);

      });

  }

</script>`;

                    

                    // إنشاء response جديد

                    return Promise.resolve(new Response(customResponse, {

                        status: 200,

                        statusText: 'OK',

                        headers: {

                            'Content-Type': 'text/html'

                        }

                    }));

                }

                

                // للطلبات الأخرى، إرجاع الاستجابة الأصلية

                return response;

            })

            .catch(error => {

                console.error("❌ خطأ في fetch:", error);

                throw error;

            });

    };

    

    console.log("🔧 تم تثبيت مُعترض fetch المُحدث");

})();



// إضافة اعتراض XMLHttpRequest أيضاً

(function() {

    const originalOpen = XMLHttpRequest.prototype.open;

    const originalSend = XMLHttpRequest.prototype.send;

    

    XMLHttpRequest.prototype.open = function(method, url, ...args) {

        this._url = url;

        console.log("🌐 طلب XHR:", method, url);

        return originalOpen.apply(this, [method, url, ...args]);

    };

    

    XMLHttpRequest.prototype.send = function(...args) {

        const xhr = this;

        

        if (this._url && (this._url.includes('/extension/set-worm-world') || this._url.includes('/set-worm-world'))) {

            console.log("🎯 اعتراض XHR set-worm-world");

            

            // منع الطلب الأصلي

            setTimeout(() => {

                const customResponse = `<h3>✅ CUSTOMER MODE ACTIVATED VIA XHR ✅</h3>`;

                

                Object.defineProperty(xhr, 'status', { value: 200 });

                Object.defineProperty(xhr, 'statusText', { value: 'OK' });

                Object.defineProperty(xhr, 'responseText', { value: customResponse });

                Object.defineProperty(xhr, 'response', { value: customResponse });

                Object.defineProperty(xhr, 'readyState', { value: 4 });

                

                if (xhr.onreadystatechange) xhr.onreadystatechange();

                if (xhr.onload) xhr.onload();

            }, 100);

            

            return;

        }

        

        return originalSend.apply(this, args);

    };

    

    console.log("🔧 تم تثبيت مُعترض XHR");

})();



console.log("🚀 مُعترض الطلبات جاهز - مع إصلاح مشكلة التوكن!");

























































































































// Headshot Simulator for WormWorld.io

// Updated version with improved features from original game code



// Global configuration

const HeadshotSimulator = {

  // Configuration

  config: {

    defaultCount: 1000,

    delayBetween: 3200, // تم تعديل الوقت إلى 4200 مللي ثانية

    soundEnabled: true,

    visualEnabled: true,

    logEnabled: true,

    soundVolume: 0.0, // تم زيادة مستوى الصوت للسماع

    keyBinding: 'h'

  },

  

  // State

  state: {

    running: false,

    sentCount: 0,

    targetCount: 0,

    startTime: 0,

    floatingTexts: [] // لتتبع النصوص العائمة

  },

  

  // Initialize the simulator

  init: function() {

    this.setupKeyBinding();

    // Silent initialization - no UI message

    return this;

  },

  

  // Setup keyboard shortcut

  setupKeyBinding: function() {

    // إزالة أي مستمع موجود لتجنب التكرار

    try {

      if (this._eventListenerAdded) {

        document.removeEventListener('keydown', this._keyDownHandler);

      }

    } catch (e) {

      // تجاهل الأخطاء هنا

    }

    

    // إنشاء معالج جديد يغلق على هذا

    const self = this;

    this._keyDownHandler = function(event) {

      if (event.key.toLowerCase() === self.config.keyBinding.toLowerCase()) {

        self.start();

        event.preventDefault();

      }

    };

    

    // إضافة المستمع الجديد

    document.addEventListener('keydown', this._keyDownHandler);

    this._eventListenerAdded = true;

  },

  

  // Start simulation with optional count

  start: function(count) {

    if (this.state.running) {

      // Silent - no UI message

      return false;

    }

    

    // Validate game state

    if (!this.validateGameState()) {

      return false;

    }

    

    // Initialize simulation

    this.state.running = true;

    this.state.sentCount = 0;

    this.state.targetCount = count || this.config.defaultCount;

    this.state.startTime = Date.now();

    

    // No initialization message

    this.simulateNext();

    return true;

  },

  

  // Start with just 2 headshots

  startTwoHeadshots: function() {

    if (this.state.running) {

      // Already running

      return false;

    }

    

    // Validate game state

    if (!this.validateGameState()) {

      return false;

    }

    

    // Initialize simulation

    this.log("Starting 2 headshots with interval");

    

    // First headshot immediately

    this.simulateHeadshot();

    this.log("Headshot 1/2 simulated", "success");

    

    // Second headshot after delay

    setTimeout(() => {

      this.simulateHeadshot();

      this.log("Headshot 2/2 simulated", "success");

      

      // Continue with normal simulation if needed

      this.log("Two headshots completed, continuing normal operation");

    }, this.config.delayBetween);

    

    return true;

  },

  

  // Validate the current game state

  validateGameState: function() {

    if (!window._wwc || !window._wwc._anApp) {

      this.log("Error: Game not properly initialized or not in-game", "error");

      return false;

    }

    

    // Check if we're in the game by checking for player existence

    if (!window._wwcio || !window._wwcio.player || !window.bbs) {

      this.log("Error: Player not initialized or not in-game", "error");

      return false;

    }

    

    return true;

  },

  

  // Simulate next headshot

  simulateNext: function() {

    if (!this.state.running || this.state.sentCount >= this.state.targetCount) {

      this.complete();

      return;

    }

    

    // Increment counter

    this.state.sentCount++;

    

    // Perform simulation

    try {

      this.simulateHeadshot();

      this.log(`Headshot ${this.state.sentCount}/${this.state.targetCount} simulated`, "success");

      

      // Schedule next with delay

      setTimeout(() => this.simulateNext(), this.config.delayBetween);

    } catch (error) {

      this.log("Error in headshot simulation: " + error.message, "error");

      this.complete();

    }

  },

  

  // Complete the simulation

  complete: function() {

    if (!this.state.running) return;

    

    const duration = ((Date.now() - this.state.startTime) / 1000).toFixed(1);

    this.log(`Simulation complete! ${this.state.sentCount} headshots in ${duration}s`);

    

    // Reset state

    this.state.running = false;

    

    // Save to localStorage

    if (window.bbs) {

      localStorage.setItem("wwcSaveGame", JSON.stringify(window.bbs));

    }

  },

  

  // Core simulation function - UPDATED to match original game logic

  simulateHeadshot: function() {

    // التحقق من حالة اللعبة

    if (!this.validateGameState()) {

      this.log("Game state is no longer valid, stopping simulation", "error");

      this.state.running = false;

      return;

    }

    

    try {

      // استدعاء الدالة الأصلية fnSetCounts من اللعبة إذا كانت متاحة

      if (window._wwc && typeof window._wwc.fnSetCounts === 'function') {

        window._wwc.fnSetCounts("count", true);

      } else {

        // تحديث العدادات يدويًا إذا لم تكن الدالة متاحة

        this.updateCountersManually();

      }

      

      // تحديث نتيجة اللاعب إذا كان ممكنًا

      try {

        if (window._wwcio && window._wwcio.update) {

          window._wwcio.update("headshot");

        }

      } catch (e) {

        this.log("Couldn't update player score", "warn");

      }

      

      // تشغيل صوت headshot - مع دعم للصوت الخاص كل 10 headshots

      if (this.config.soundEnabled) {

        this.playHeadshotSound();

      }

      

      // تنشيط التأثير المرئي إذا كان ممكّنًا

      if (this.config.visualEnabled) {

        this.triggerVisualEffect();

      }

    } catch (error) {

      this.log("Error in headshot simulation: " + error.message, "error");

    }

  },

  

  // NEW: Update counters manually if original function is not available

  updateCountersManually: function() {

    if (window.bbs) {

      // Update all relevant counters like the original game

      window.bbs.headshot = (window.bbs.headshot || 0) + 1;

      window.bbs.theadshot = (window.bbs.theadshot || 0) + 1;

      

      // Update HOL (Highest headshot count) like original game

      window.bbs.HOL = window.bbs.headshot > (window.bbs.HOL || 0) ? window.bbs.headshot : (window.bbs.HOL || 0);

      

      // Try to update the UI counters if setCountGame function exists

      try {

        if (window._wwc && typeof window._wwc.setCountGame === 'function') {

          window._wwc.setCountGame(

            window.bbs.kill || 0,

            window.bbs.headshot || 0,

            window.bbs.tkill || 0,

            window.bbs.theadshot || 0

          );

        }

      } catch (e) {

        this.log("Couldn't update counters in UI", "warn");

      }

      

      // Save to localStorage like original game

      localStorage.setItem("wwcSaveGame", JSON.stringify(window.bbs));

    }

  },

  

  // UPDATED: Play headshot sound to match original game logic

  playHeadshotSound: function() {

    try {

      // Logic from original game: play special sound every 10 headshots

      const isSpecialSound = window.bbs && window.bbs.headshot && !(window.bbs.headshot % 10);

      const soundType = isSpecialSound ? "shaokahn" : "headshot";

      

      // Try to use original game sound system first

      if (window._0x49249a && typeof window._0x49249a.fxdo === 'function') {

        window._0x49249a.fxdo(soundType);

        return;

      } 

      // Second approach - direct Howl objects if available

      else if (window._0x49249a) {

        if (isSpecialSound && window._0x49249a.shaokahn && window._0x49249a.shaokahn.play) {

          window._0x49249a.shaokahn.play();

          return;

        } else if (window._0x49249a.headshot && window._0x49249a.headshot.play) {

          window._0x49249a.headshot.play();

          return;

        }

      }

      

      // Fallback to direct audio playback

      const soundFile = isSpecialSound ? 

        "/sounds/shaokahn_sound_effect.mp3" : 

        "/sounds/headshot_sound_effect.mp3";

      

      const audioElement = document.createElement("audio");

      audioElement.src = (window.URL_CDN || "") + soundFile;

      audioElement.volume = this.config.soundVolume;

      audioElement.play();

    } catch (error) {

      this.log("Couldn't play sound: " + error.message, "warn");

    }

  },

  

  // UPDATED: Trigger visual effect to match original game

  triggerVisualEffect: function() {

    try {

      // Check if we can access the game's UI functions

      if (window._wwc && window._wwc._anApp && typeof window._wwc._anApp.addChild === 'function') {

        // This is just a simulation - no actual floating text is added

        this.log("Floating headshot text would appear now", "info");

      } else {

        this.log("Visual effect triggered silently", "info");

      }

    } catch (error) {

      this.log("Error triggering visual effect: " + error.message, "warn");

    }

  },

  

  // Logging utility - only logs to console, not UI

  log: function(message, type = "info") {

    if (!this.config.logEnabled) return;

    

    const prefix = "🎯 HeadshotSim: ";

    

    switch (type) {

      case "error":

        console.error(prefix + message);

        break;

      case "warn":

        console.warn(prefix + message);

        break;

      default:

        console.log(prefix + message);

    }

  }

};



// تهيئة المحاكي عندما تكون الصفحة جاهزة

(() => {

  // تنظيف أي نسخة سابقة إذا كانت موجودة

  if (window.HeadshotSimulator && window.HeadshotSimulator._cleanupFn) {

    try {

      window.HeadshotSimulator._cleanupFn();

    } catch (e) {

      console.log("Error cleaning up previous simulator:", e);

    }

  }



  // إزالة أي عنصر toast موجود من إصدارات سابقة

  const oldToast = document.getElementById('headshot-toast');

  if (oldToast && oldToast.parentNode) {

    oldToast.parentNode.removeChild(oldToast);

  }



  // انتظر لحظة حتى تتم تهيئة اللعبة

  setTimeout(() => {

    // تهيئة المحاكي بصمت

    HeadshotSimulator.init();

    

    // دالة التنظيف لفصل الأحداث

    HeadshotSimulator._cleanupFn = function() {

      try {

        if (HeadshotSimulator._eventListenerAdded) {

          document.removeEventListener('keydown', HeadshotSimulator._keyDownHandler);

          HeadshotSimulator._eventListenerAdded = false;

        }

      } catch (e) {

        console.log("Error during cleanup:", e);

      }

    };

  }, 3000);

})();



// جعله متاح من خلال متغير عالمي

window.HeadshotSimulator = HeadshotSimulator;



// لاستخدام وظيفة الـ headshots الثنائية:

// HeadshotSimulator.startTwoHeadshots();



// أو للسلوك العادي:

// HeadshotSimulator.start(10);



































































































































































































/**

 * WormWorld Skin Changer - مغير سكنات وورم وورلد المطور

 * تم إزالة ميزة الدوران وإبقاء باقي الميزات

 * الإصدار النهائي 1.1 - معدل

 */

(function() {

    'use strict';

    

    // =============== الإعدادات الأساسية ===============

    

    // السكنات الافتراضية للتبديل - يمكن أن تكون أرقاماً أو نصوصاً مختلطة

    const SKIN_IDS = [87, 131];

    

    // أسماء اللاعبين للتبديل عند النقر بزر الماوس الأيمن

    const NAME_OPTIONS = ["انا كلب", "انا حمار", "ستريم جحاش"];

    

    // متغيرات التحكم

    let pauseUpdates = false;

    let flyingInterval = null;

    let effectsActive = false;

    let isPlayerListVisible = false;

    let isToggleButtonVisible = false; // إضافة متغير للتحكم في ظهور الزر

    let modalOpen = false; // إضافة متغير للتحقق من وجود نافذة مفتوحة

    let inputActive = false; // إضافة متغير للتحقق من حالة الإدخال النشطة

    let isHoveringList = false; // إضافة متغير للتحقق من تحويم الماوس فوق القائمة

    let originalMousePosition = null; // لحفظ موضع الماوس الأصلي

    let effectsMode = 'none'; // حالة التأثيرات: none, hover, modal

    

    // سجل التغييرات للاعبين

    const playerChanges = {};

    

    // =============== وظائف المساعدة ===============

    

    // قص اسم اللاعب للعرض

    function truncateName(name, maxLength = 15) {

        if (!name || name.trim() === '') {

            return '********';

        }

        return name.length > maxLength ? name.substring(0, maxLength) + '...' : name;

    }

    

    // إنشاء معرف عشوائي

    function generateRandomId() {

        return Math.random().toString(36).substring(2, 10);

    }

    

    // الحصول على اللاعب الحالي

    function getCurrentPlayer() {

        if (window._wwc && window._wwc._anApp && window._wwc._anApp.dh && window._wwc._anApp.dh.ch) {

            return window._wwc._anApp.dh.ch;

        }

        return null;

    }

    

    // التحقق من حالة اللعب

    function isInGameState() {

        return window._wwc && 

               window._wwc._anApp && 

               window._wwc._anApp.dh && 

               window._wwc._anApp.dh.ch;

    }

    

    // =============== وظائف التأثيرات الخاصة ===============

    

    // حفظ حالة اللاعب الأصلية

    function saveOriginalPlayerState() {

        try {

            if (!isInGameState()) return;

            

            const currentPlayer = getCurrentPlayer();

            if (!currentPlayer) return;

            

            // حفظ موضع اللاعب الأصلي إذا لم يكن محفوظًا بالفعل

            if (originalMousePosition === null) {

                const playerPos = currentPlayer.fh();

                originalMousePosition = { x: playerPos.x, y: playerPos.y };

            }

            

            console.log("تم حفظ حالة اللاعب الأصلية");

        } catch (e) {

            console.error("خطأ في حفظ حالة اللاعب:", e);

        }

    }

    

    // استعادة حالة اللاعب الأصلية

    function restoreOriginalPlayerState() {

        try {

            if (!isInGameState()) return;

            

            // استعادة موضع اللاعب إذا كان محفوظاً

            if (originalMousePosition !== null) {

                const currentPlayer = getCurrentPlayer();

                if (currentPlayer && currentPlayer.vh) {

                    currentPlayer.vh(originalMousePosition.x, originalMousePosition.y);

                }

            }

            

            console.log("تم استعادة حالة اللاعب الأصلية");

            

        } catch (e) {

            console.error("خطأ في استعادة حالة اللاعب:", e);

        }

    }

    

    // تحديث حالة التأثيرات بناءً على الوضع الحالي

    function updateEffectsState() {

        // تحديد وضع التأثيرات الحالي

        let newEffectsMode = 'none';

        

        if (modalOpen) {

            // إذا كانت هناك نافذة مفتوحة، فعّل التأثيرات دائمًا

            newEffectsMode = 'modal';

        } else if (isPlayerListVisible && isHoveringList) {

            // إذا كانت القائمة مفتوحة والمؤشر فوقها، فعّل التأثيرات

            newEffectsMode = 'hover';

        } else {

            // في الحالات الأخرى، أوقف التأثيرات

            newEffectsMode = 'none';

        }

        

        // تطبيق التغييرات إذا كان هناك تغيير في الوضع

        if (newEffectsMode !== effectsMode) {

            effectsMode = newEffectsMode;

            

            // تطبيق التأثيرات أو إيقافها حسب الوضع الجديد

            if (effectsMode === 'none') {

                // إيقاف التأثيرات واستعادة التحكم الطبيعي

                if (effectsActive) {

                    stopSpecialEffects();

                }

            } else {

                // تفعيل التأثيرات إذا لم تكن مفعلة بالفعل

                if (!effectsActive) {

                    startSpecialEffects();

                }

            }

            

            console.log("تم تحديث حالة التأثيرات:", effectsMode);

        }

    }

    

    // بدء تأثير الطيران

    function startFlying() {

        // إيقاف تأثير الطيران الحالي أولاً

        stopFlying();

        

        // حفظ حالة اللاعب الأصلية إذا لم تكن محفوظة بالفعل

        if (originalMousePosition === null) {

            saveOriginalPlayerState();

        }

        

        let flyStep = 0;

        let amplitude = 4; // تم تقليل مقدار الارتفاع والانخفاض

        

        // تأثير الحركة لأعلى وأسفل

        flyingInterval = setInterval(function() {

            try {

                if (!isInGameState()) {

                    return;

                }

                

                const currentPlayer = getCurrentPlayer();

                if (!currentPlayer || !currentPlayer.vh) {

                    return;

                }

                

                // التحقق من وضع التأثيرات الحالي

                if (effectsMode === 'none') {

                    // استعادة الموضع الأصلي في وضع عدم التأثيرات

                    if (originalMousePosition !== null) {

                        currentPlayer.vh(originalMousePosition.x, originalMousePosition.y);

                    }

                } else {

                    // تطبيق تأثير الطيران في أوضاع التأثيرات

                    if (originalMousePosition !== null) {

                        // تحريك اللاعب لأعلى وأسفل بشكل متموج

                        const verticalOffset = amplitude * Math.sin(flyStep);

                        

                        // تحديد المكان الجديد للاعب

                        currentPlayer.vh(originalMousePosition.x, originalMousePosition.y + verticalOffset);

                        

                        // زيادة خطوة التأثير

                        flyStep += 0.1;

                    }

                }

            } catch (e) {

                console.log("خطأ في تأثير الطيران:", e);

            }

        }, 50);

        

        console.log("تم تشغيل تأثير الطيران");

    }

    

    // إيقاف تأثير الطيران مع استعادة الحالة

    function stopFlying() {

        if (flyingInterval !== null) {

            clearInterval(flyingInterval);

            flyingInterval = null;

            

            try {

                // استعادة موضع اللاعب الأصلي

                if (originalMousePosition !== null && isInGameState()) {

                    const currentPlayer = getCurrentPlayer();

                    if (currentPlayer && currentPlayer.vh) {

                        currentPlayer.vh(originalMousePosition.x, originalMousePosition.y);

                    }

                }

            } catch (e) {

                console.error("خطأ أثناء استعادة موضع اللاعب:", e);

            }

            

            console.log("تم إيقاف تأثير الطيران");

        }

    }

    

    // تفعيل التأثيرات الخاصة

    function startSpecialEffects() {

        if (effectsActive) return;

        

        effectsActive = true;

        console.log('بدء التأثيرات الخاصة');

        

        // حفظ حالة اللاعب الأصلية قبل بدء التأثيرات

        saveOriginalPlayerState();

        

        // إطلاق تأثير الطيران فقط

        setTimeout(() => {

            startFlying();

        }, 50);

    }

    

    // إيقاف التأثيرات الخاصة واستعادة التحكم

    function stopSpecialEffects() {

        if (!effectsActive) return;

        

        console.log('إيقاف التأثيرات الخاصة');

        effectsActive = false;

        stopFlying();

        

        // استعادة حالة اللاعب الأصلية

        restoreOriginalPlayerState();

        

        // إعادة تعيين المتغيرات المتعلقة بالتأثيرات

        originalMousePosition = null;

    }

    

    // التأكد من إيقاف التأثيرات في جميع الحالات

    function forceStopEffects() {

        effectsActive = false;

        stopFlying();

        

        // استعادة حالة اللاعب الأصلية

        restoreOriginalPlayerState();

        

        // إعادة تعيين المتغيرات المتعلقة بالتأثيرات

        originalMousePosition = null;

        

        // إعادة تعيين وضع التأثيرات

        effectsMode = 'none';

    }

    

    // =============== وظائف تغيير السكنات والأسماء ===============

    

    // تغيير السكن للاعب - تم تحسينها لدعم المعرفات المختلطة

    function cycleSkin(playerId) {

        if (!playerId || !isInGameState()) return;

        

        // الحصول على اللاعب من قائمة اللاعبين

        const player = window._wwc._anApp.dh.Fh[playerId];

        if (!player || !player.Eh) return;

        

        // إنشاء سجل للتغييرات إذا لم يكن موجودًا

        if (!playerChanges[playerId]) {

            playerChanges[playerId] = {

                originalSkin: player.Eh.Hh,

                originalName: player.Eh.ma,

                changes: [],

                currentNameIndex: -1

            };

        }

        

        // دورة السكنات بين القيم المحددة - دعم المعرفات المختلطة

        const currentSkin = String(player.Eh.Hh);

        const currentSkinIndex = SKIN_IDS.findIndex(id => String(id) === currentSkin);

        const nextIndex = (currentSkinIndex === -1 || currentSkinIndex + 1 >= SKIN_IDS.length) ? 0 : currentSkinIndex + 1;

        

        // تغيير السكن

        player.Eh.Hh = SKIN_IDS[nextIndex];

        

        // تسجيل التغيير

        playerChanges[playerId].changes.push({

            type: 'skin',

            from: playerChanges[playerId].originalSkin,

            to: player.Eh.Hh,

            timestamp: Date.now()

        });

    }

    

    // تعيين سكن محدد للاعب - تم تحسينها لدعم المعرفات المختلطة

    function setSkinById(playerId, skinId) {

        if (!playerId || !isInGameState()) return;

        

        // الحصول على اللاعب من قائمة اللاعبين

        const player = window._wwc._anApp.dh.Fh[playerId];

        if (!player || !player.Eh) return;

        

        // التعامل مع معرفات السكن سواء كانت أرقاماً أو حروفاً أو مختلطة

        const newSkinId = skinId;

        

        // إنشاء سجل للتغييرات إذا لم يكن موجودًا

        if (!playerChanges[playerId]) {

            playerChanges[playerId] = {

                originalSkin: player.Eh.Hh,

                originalName: player.Eh.ma,

                changes: [],

                currentNameIndex: -1

            };

        }

        

        // تعيين السكن الجديد

        player.Eh.Hh = newSkinId;

        

        // تسجيل التغيير

        playerChanges[playerId].changes.push({

            type: 'skin',

            from: playerChanges[playerId].originalSkin,

            to: newSkinId,

            timestamp: Date.now()

        });

    }

    

    // تغيير اسم اللاعب

    function setCustomName(playerId, customName) {

        if (!playerId || !isInGameState()) return;

        

        // التحقق من صحة الاسم

        if (!customName || customName.trim() === '') return;

        

        // الحصول على اللاعب من قائمة اللاعبين

        const player = window._wwc._anApp.dh.Fh[playerId];

        if (!player || !player.Eh) return;

        

        // إنشاء سجل للتغييرات إذا لم يكن موجودًا

        if (!playerChanges[playerId]) {

            playerChanges[playerId] = {

                originalSkin: player.Eh.Hh,

                originalName: player.Eh.ma,

                changes: [],

                currentNameIndex: -1

            };

        }

        

        // الاسم السابق

        const previousName = player.Eh.ma;

        

        // تعيين الاسم الجديد

        player.Eh.ma = customName;

        

        // تسجيل التغيير

        playerChanges[playerId].changes.push({

            type: 'name',

            from: previousName,

            to: customName,

            timestamp: Date.now()

        });

    }

    

    // تدوير الاسم بين الخيارات المحددة

    function cycleNameOption(playerId) {

        if (!playerId || !isInGameState()) return;

        

        // الحصول على اللاعب من قائمة اللاعبين

        const player = window._wwc._anApp.dh.Fh[playerId];

        if (!player || !player.Eh) return;

        

        // إنشاء سجل للتغييرات إذا لم يكن موجودًا

        if (!playerChanges[playerId]) {

            playerChanges[playerId] = {

                originalSkin: player.Eh.Hh,

                originalName: player.Eh.ma,

                changes: [],

                currentNameIndex: -1

            };

        }

        

        // الاسم السابق

        const previousName = player.Eh.ma;

        

        // تغيير الاسم للخيار التالي

        playerChanges[playerId].currentNameIndex = 

            (playerChanges[playerId].currentNameIndex + 1) % NAME_OPTIONS.length;

        

        const newName = NAME_OPTIONS[playerChanges[playerId].currentNameIndex];

        

        // تعيين الاسم الجديد

        player.Eh.ma = newName;

        

        // تسجيل التغيير

        playerChanges[playerId].changes.push({

            type: 'name',

            from: previousName,

            to: newName,

            timestamp: Date.now()

        });

        

        return newName;

    }

    

    // إعادة تعيين سكن اللاعب

    function resetSkin(playerId) {

        if (!playerId || !isInGameState()) return;

        

        // الحصول على اللاعب من قائمة اللاعبين

        const player = window._wwc._anApp.dh.Fh[playerId];

        if (!player || !player.Eh) return;

        

        // التحقق من وجود سجل للتغييرات

        if (playerChanges[playerId] && playerChanges[playerId].originalSkin) {

            // إعادة السكن الأصلي

            player.Eh.Hh = playerChanges[playerId].originalSkin;

            

            // تسجيل التغيير

            playerChanges[playerId].changes.push({

                type: 'reset_skin',

                timestamp: Date.now()

            });

        }

    }

    

    // إعادة تعيين اسم اللاعب

    function resetName(playerId) {

        if (!playerId || !isInGameState()) return;

        

        // الحصول على اللاعب من قائمة اللاعبين

        const player = window._wwc._anApp.dh.Fh[playerId];

        if (!player || !player.Eh) return;

        

        // التحقق من وجود سجل للتغييرات

        if (playerChanges[playerId] && playerChanges[playerId].originalName) {

            // إعادة الاسم الأصلي

            player.Eh.ma = playerChanges[playerId].originalName;

            

            // تسجيل التغيير

            playerChanges[playerId].changes.push({

                type: 'reset_name',

                timestamp: Date.now()

            });

            

            // إعادة ضبط مؤشر الاسم

            playerChanges[playerId].currentNameIndex = -1;

        }

    }

    

    // إعادة تعيين جميع إعدادات اللاعب

    function resetAllSettings(playerId) {

        resetSkin(playerId);

        resetName(playerId);

    }

    

    // =============== وظائف واجهة المستخدم - معالجة المدخلات ===============

    

    // تعيين حالة الإدخال النشطة

    function setInputState(active) {

        inputActive = active;

    }

    

    // =============== وظائف واجهة المستخدم - النافذة المخصصة ===============

    

    // إضافة تأثير رفرفة للنافذة

    function addFlutterEffect(promptId) {

        const overlay = $('#' + promptId);

        if (!overlay.length) return;

        

        const promptBox = overlay.find('.wwc-custom-prompt-box');

        

        // إضافة تأثير الرفرفة

        let angle = 0;

        const flutterInterval = setInterval(function() {

            angle += 0.1;

            

            const scaleValue = 1 + Math.sin(angle * 1.5) * 0.03;

            

            promptBox.css({

                'transform': `scale(${scaleValue})`

            });

        }, 50);

        

        // حفظ الفاصل الزمني في كائن النافذة لإيقافه لاحقًا

        overlay.data('flutterInterval', flutterInterval);

        

        // إيقاف التأثير عند إزالة النافذة

        overlay.on('remove', function() {

            clearInterval(flutterInterval);

            

            // إيقاف حالة الإدخال النشطة

            setInputState(false);

            

            // إيقاف حالة النافذة المفتوحة

            modalOpen = false;

            

            // تحديث حالة التأثيرات

            setTimeout(function() {

                updateEffectsState();

            }, 50);

        });

    }

    

    // إنشاء نافذة إدخال مخصصة

    function createCustomPrompt(title, defaultValue, callback) {

        // إزالة أي نوافذ سابقة

        $('.wwc-custom-prompt-overlay').remove();

        

        // تعيين متغير النافذة المفتوحة

        modalOpen = true;

        

        // حفظ حالة اللاعب الأصلية قبل فتح النافذة

        saveOriginalPlayerState();

        

        // تحديث حالة التأثيرات

        setTimeout(function() {

            updateEffectsState();

        }, 50);

        

        // إنشاء معرف فريد للنافذة

        const promptId = 'wwc-prompt-' + generateRandomId();

        

        // إنشاء العناصر

        const overlay = $("<div>").addClass("wwc-custom-prompt-overlay").attr('id', promptId).css({

            position: 'fixed',

            top: 0,

            left: 0,

            width: '100%',

            height: '100%',

            backgroundColor: 'rgba(0,0,0,0)',

            zIndex: 999999,

            display: 'flex',

            justifyContent: 'flex-end',

            alignItems: 'flex-start',

            backdropFilter: 'none'

        });

        

        const promptBox = $("<div>").addClass("wwc-custom-prompt-box").css({

            backgroundColor: 'rgba(0, 0, 0, 0.8)',

            padding: '15px',

            borderRadius: '8px',

            minWidth: '200px',

            maxWidth: '250px',

            boxShadow: '0 0 15px rgba(0,128,255,0.7)',

            display: 'flex',

            flexDirection: 'column',

            gap: '6px',

            margin: '180px 15px 0 0',

            border: '1px solid rgba(100, 200, 255, 0.5)'

        });

        

        const promptTitle = $("<div>").addClass("wwc-custom-prompt-title").text(title).css({

            fontWeight: 'bold',

            fontSize: '15px',

            color: '#fff',

            marginBottom: '5px',

            textAlign: 'center',

            textShadow: '0 0 5px rgba(0,150,255,0.8)'

        });

        

        const promptInput = $("<input>").addClass("wwc-custom-prompt-input").attr({

            type: 'text',

            value: defaultValue || ''

        }).css({

            padding: '6px',

            border: '1px solid #4a90e2',

            borderRadius: '4px',

            width: '100%',

            boxSizing: 'border-box',

            backgroundColor: 'rgba(255, 255, 255, 0.9)',

            color: '#000',

            fontSize: '14px'

        });

        

        const buttonContainer = $("<div>").css({

            display: 'flex',

            justifyContent: 'space-between',

            marginTop: '8px'

        });

        

        const cancelBtn = $("<button>").text("إلغاء").css({

            padding: '5px 10px',

            backgroundColor: 'rgba(244, 67, 54, 0.8)',

            color: 'white',

            border: 'none',

            borderRadius: '4px',

            cursor: 'pointer',

            flex: '1',

            marginRight: '5px',

            transition: 'all 0.3s ease'

        }).hover(

            function() { $(this).css('backgroundColor', 'rgba(244, 67, 54, 1)'); },

            function() { $(this).css('backgroundColor', 'rgba(244, 67, 54, 0.8)'); }

        ).click(function() {

            overlay.remove();

            setInputState(false);

            

            // إيقاف حالة النافذة المفتوحة

            modalOpen = false;

            

            // تحديث حالة التأثيرات

            setTimeout(function() {

                updateEffectsState();

            }, 50);

        });

        

        const confirmBtn = $("<button>").text("تأكيد").css({

            padding: '5px 10px',

            backgroundColor: 'rgba(76, 175, 80, 0.8)',

            color: 'white',

            border: 'none',

            borderRadius: '4px',

            cursor: 'pointer',

            flex: '1',

            marginLeft: '5px',

            transition: 'all 0.3s ease'

        }).hover(

            function() { $(this).css('backgroundColor', 'rgba(76, 175, 80, 1)'); },

            function() { $(this).css('backgroundColor', 'rgba(76, 175, 80, 0.8)'); }

        ).click(function() {

            const value = promptInput.val();

            overlay.remove();

            setInputState(false);

            

            // إيقاف حالة النافذة المفتوحة

            modalOpen = false;

            

            // تحديث حالة التأثيرات

            setTimeout(function() {

                updateEffectsState();

                

                // استدعاء دالة الاسترجاع بعد استعادة التحكم

                if (callback) callback(value);

            }, 50);

        });

        

        // تجميع العناصر

        buttonContainer.append(cancelBtn, confirmBtn);

        promptBox.append(promptTitle, promptInput, buttonContainer);

        overlay.append(promptBox);

        

        // إضافة النافذة إلى الصفحة

        $("body").append(overlay);

        

        // تركيز الإدخال

        promptInput.focus();

        

        // تفعيل حالة الإدخال النشطة

        setInputState(true);

        

        // تعيين معالجات أحداث حقل الإدخال

        promptInput

            .on('focus', function() {

                setInputState(true);

            })

            .on('blur', function() {

                // لا تقم بإلغاء تنشيط الإدخال لأن هذا قد يحدث عند النقر على الأزرار

            })

            .on('keydown', function(e) {

                // منع انتشار أحداث مفتاح R خارج حقل الإدخال

                if (e.key === 'r' || e.key === 'R') {

                    e.stopPropagation();

                }

                

                // معالجة الضغط على Enter

                if (e.key === 'Enter') {

                    const value = promptInput.val();

                    overlay.remove();

                    setInputState(false);

                    

                    // إيقاف حالة النافذة المفتوحة

                    modalOpen = false;

                    

                    // تحديث حالة التأثيرات

                    setTimeout(function() {

                        updateEffectsState();

                        

                        // استدعاء دالة الاسترجاع بعد استعادة التحكم

                        if (callback) callback(value);

                    }, 50);

                }

            });

        

        // معالجة الضغط على ESC

        $(document).on('keydown.customprompt', function(e) {

            if (e.key === 'Escape') {

                overlay.remove();

                setInputState(false);

                $(document).off('keydown.customprompt');

                

                // إيقاف حالة النافذة المفتوحة

                modalOpen = false;

                

                // تحديث حالة التأثيرات

                setTimeout(function() {

                    updateEffectsState();

                }, 50);

            }

        });

        

        // تأثيرات الحركة للنافذة

        promptBox.css({

            animation: 'wwc-float 3s infinite ease-in-out'

        });

        

        // تأثيرات الحركة للنافذة

        promptBox.css({

            animation: 'wwc-float 3s infinite ease-in-out'

        });

        

        // إضافة تأثير الرفرفة

        addFlutterEffect(promptId);

        

        return promptId;

    }



    // =============== وظائف واجهة المستخدم - قائمة اللاعبين ===============

    

    // إنشاء واجهة المستخدم الرئيسية

    function createUI() {

        // إنشاء قائمة اللاعبين

        if ($("#wwc-player-names").length === 0) {

            const playerList = $("<div id='wwc-player-names' style='top: 180px; right: 10px; width:200px; z-index: 999999; position: absolute; display: none;'></div>")

                .prependTo("body")

                .on('mouseenter', function() {

                    pauseUpdates = true;

                    isHoveringList = true;

                    

                    // تحديث حالة التأثيرات

                    updateEffectsState();

                })

                .on('mouseleave', function() {

                    pauseUpdates = false;

                    isHoveringList = false;

                    

                    // تحديث حالة التأثيرات

                    updateEffectsState();

                    

                    updatePlayerList();

                });

            

            // إضافة أنماط CSS

            const style = $("<style></style>").text(`

                #wwc-player-names {

                    display: flex;

                    flex-direction: column;

                    gap: 1px;

                    padding: 4px;

                    margin: 0;

                    background-color: rgba(0, 0, 0, 0.7);

                    border-radius: 8px;

                    border: 1px solid rgba(100, 180, 255, 0.4);

                    box-shadow: 0 0 15px rgba(0, 120, 255, 0.3);

                    backdrop-filter: blur(3px);

                    max-height: 80vh;

                    overflow-y: auto;

                }

                .wwc-player-row {

                    display: flex;

                    align-items: center;

                    width: 100%;

                    margin: 1px 0;

                    padding: 2px;

                    position: relative;

                    height: 18px;

                    line-height: 18px;

                    background-color: rgba(30, 30, 40, 0.6);

                    border-radius: 5px;

                    transition: all 0.3s ease;

                }

                .wwc-player-row:hover {

                    background-color: rgba(50, 50, 80, 0.8);

                    transform: translateX(-3px);

                }

                .wwc-player-name {

                    position: absolute;

                    left: 5px;

                    right: 65px;

                    color: white;

                    font-size: 11px;

                    white-space: nowrap;

                    overflow: hidden;

                    text-overflow: ellipsis;

                    transition: all 0.3s ease;

                    padding: 0;

                    margin: 0;

                }

                .wwc-player-name.skin-changed {

                    text-decoration: underline wavy #4a90e2;

                    color: #a0e0ff;

                }

                .wwc-player-name.name-changed {

                    font-style: italic;

                    color: #ff9999;

                }

                .wwc-player-controls {

                    position: absolute;

                    right: 0;

                    top: 0;

                    display: flex;

                    height: 100%;

                }

                .wwc-player-btn {

                    width: 18px;

                    height: 18px;

                    display: flex;

                    justify-content: center;

                    align-items: center;

                    font-size: 11px;

                    cursor: pointer;

                    transition: all 0.3s ease;

                    opacity: 0.8;

                    margin: 0 1px;

                    padding: 0;

                    line-height: 18px;

                    border-radius: 3px;

                }

                .wwc-player-btn:hover {

                    opacity: 1;

                    transform: scale(1.2);

                }

                .wwc-player-btn.skin-btn { color: #a0d0ff; }

                .wwc-player-btn.reset-btn { color: #a0ffa0; }

                .wwc-player-btn.name-btn { color: #ffa0a0; }

                

                /* تأثيرات النوافذ والحركة */

                .wwc-custom-prompt-overlay {

                    animation: wwc-pulse 3s infinite;

                }

                @keyframes wwc-pulse {

                    0% { background-color: rgba(0,0,0,0); }

                    50% { background-color: rgba(0,0,0,0.05); }

                    100% { background-color: rgba(0,0,0,0); }

                }

                @keyframes wwc-float {

                    0% { transform: translateY(0px); }

                    50% { transform: translateY(-8px); }

                    100% { transform: translateY(0px); }

                }

                

               /* زر التبديل */

                #wwc-toggle-button {

                    position: fixed;

                    top: 140px;

                    right: 10px;

                    width: 30px;

                    height: 30px;

                    border-radius: 50%;

                    background-color: rgba(20, 120, 220, 0.8);

                    color: white;

                    display: none;

                    justify-content: center;

                    align-items: center;

                    cursor: pointer;

                    z-index: 999999;

                    font-size: 16px;

                    box-shadow: 0 0 10px rgba(0, 100, 255, 0.5);

                    border: 2px solid rgba(255, 255, 255, 0.3);

                    transition: all 0.3s ease;

                }

                #wwc-toggle-button:hover {

                    transform: scale(1.1);

                    background-color: rgba(30, 150, 255, 0.9);

                }

            `);

            

            // إضافة زر تبديل الظهور (مخفي في البداية)

            const toggleButton = $("<div>")

                .attr("id", "wwc-toggle-button")

                .html("👁️")

                .attr("title", "إظهار/إخفاء قائمة اللاعبين (اضغط M)")

                .click(function() {

                    togglePlayerList();

                });

            

            $("head").append(style);

            $("body").append(toggleButton);

        }

    }

    

    // =============== وظائف تحديث قائمة اللاعبين ===============

    

    // تبديل إظهار/إخفاء قائمة اللاعبين

    function togglePlayerList() {

        isPlayerListVisible = !isPlayerListVisible;

        

        if (isPlayerListVisible) {

            // حفظ حالة اللاعب الأصلية قبل فتح القائمة

            saveOriginalPlayerState();

            

            $("#wwc-player-names").fadeIn(300);

            updatePlayerList();

            $("#wwc-toggle-button").css("background-color", "rgba(30, 150, 255, 0.9)");

        } else {

            $("#wwc-player-names").fadeOut(300);

            $("#wwc-toggle-button").css("background-color", "rgba(20, 120, 220, 0.8)");

            

            // إعادة تعيين متغير التحويم عند إغلاق القائمة

            isHoveringList = false;

        }

        

        // تحديث حالة التأثيرات

        setTimeout(function() {

            updateEffectsState();

        }, 50);

    }



    

    // إظهار زر التبديل

    function showToggleButton() {

        if (!isToggleButtonVisible) {

            isToggleButtonVisible = true;

            $("#wwc-toggle-button").css('display', 'flex').fadeIn(300);

        }

    }

    

    // إخفاء زر التبديل

    function hideToggleButton() {

        if (isToggleButtonVisible) {

            isToggleButtonVisible = false;

            $("#wwc-toggle-button").fadeOut(300);

            

            // إخفاء القائمة أيضاً إذا كانت مفتوحة

            if (isPlayerListVisible) {

                isPlayerListVisible = false;

                $("#wwc-player-names").fadeOut(300);

                isHoveringList = false;

                

                // تحديث حالة التأثيرات

                setTimeout(function() {

                    updateEffectsState();

                }, 50);

            }

        }

    }

    

    // تحديث قائمة اللاعبين

    function updatePlayerList() {

        // إذا كان التحديث متوقفاً، لا تقم بالتحديث

        if (pauseUpdates) return;

        

        const playerContainer = $("#wwc-player-names");

        playerContainer.empty();

        

        // التحقق من حالة اللعب

        if (!isInGameState()) {

            playerContainer.hide();

            isPlayerListVisible = false;

            isHoveringList = false;

            

            // تحديث حالة التأثيرات

            updateEffectsState();

            return;

        }

        

        // إظهار القائمة فقط إذا كانت الحالة "مرئية"

        if (isPlayerListVisible) {

            playerContainer.show();

        } else {

            playerContainer.hide();

            return;

        }

        

        // الحصول على اللاعب الحالي

        const currentPlayer = getCurrentPlayer();

        if (!currentPlayer || !currentPlayer.Eh) return;

        

        const currentPlayerId = currentPlayer.Eh.ae;

        const currentPos = currentPlayer.fh();

        

        // إضافة العنوان

        playerContainer.append(

            $("<div>").css({

                color: 'white',

                textAlign: 'center',

                padding: '2px',

                marginBottom: '3px',

                borderBottom: '1px solid rgba(255,255,255,0.3)',

                fontSize: '12px',

                fontWeight: 'bold'

            }).text("قائمة اللاعبين القريبين")

        );

        

        // جمع وترتيب اللاعبين حسب القرب

        const nearbyPlayers = [];

        

        // مرر على جميع اللاعبين في اللعبة

        for (const playerId in window._wwc._anApp.dh.Fh) {

            const player = window._wwc._anApp.dh.Fh[playerId];

            

            // تجاهل اللاعب الحالي

            if (playerId == currentPlayerId) continue;

            

            // تأكد من أن اللاعب موجود ونشط

            if (!player || !player.Eh || !player.xi) continue;

            

            // حساب المسافة بين اللاعبين

            const playerPos = player.fh();

            const distance = Math.sqrt(

                Math.pow(playerPos.x - currentPos.x, 2) + 

                Math.pow(playerPos.y - currentPos.y, 2)

            );

            

            // إضافة اللاعب وتفاصيله إلى القائمة إذا كان ضمن نطاق محدد

            if (distance <= 1000) {

                nearbyPlayers.push({

                    id: playerId,

                    player: player,

                    distance: distance,

                    name: player.Eh.ma || "لاعب مجهول",

                    skin: player.Eh.Hh

                });

            }

        }

        

        // ترتيب اللاعبين حسب القرب

        nearbyPlayers.sort((a, b) => a.distance - b.distance);

        

        // قصر القائمة على عدد محدد من اللاعبين

        const limitedPlayers = nearbyPlayers.slice(0, 8);

        

        // عرض كل لاعب في القائمة

        limitedPlayers.forEach((playerData) => {

            // إنشاء صف للاعب

            const playerRow = $("<div>").addClass("wwc-player-row");

            

            // اسم اللاعب

            const displayName = truncateName(playerData.name);

            const playerName = $("<span>")

                .addClass("wwc-player-name")

                .text(displayName)

                .on('click', function(e) {

                    e.preventDefault();

                    e.stopPropagation();

                    

                    // تغيير السكن عند النقر

                    cycleSkin(playerData.id);

                    

                    // إضافة تأثير

                    $(this).addClass('skin-changed');

                    

                    return false;

                })

                .on('contextmenu', function(e) {

                    e.preventDefault();

                    e.stopPropagation();

                    

                    // تغيير اسم اللاعب بين الخيارات المحددة

                    const newName = cycleNameOption(playerData.id);

                    

                    // تحديث النص المعروض

                    $(this).text(truncateName(newName));

                    $(this).addClass('name-changed');

                    

                    return false;

                });

            

            // تطبيق تأثيرات إضافية على الاسم إذا كان السكن قد تغير - دعم المعرفات المختلطة

            if (playerChanges[playerData.id] && 

                String(playerChanges[playerData.id].originalSkin) !== String(playerData.player.Eh.Hh)) {

                playerName.addClass('skin-changed');

            }

            

            // أزرار التحكم

            const playerControls = $("<div>").addClass("wwc-player-controls");

            

            // زر تغيير الاسم

            const nameBtn = $("<div>")

                .addClass("wwc-player-btn name-btn")

                .html("📝")

                .attr('title', 'تغيير الاسم')

                .click((e) => {

                    e.preventDefault();

                    e.stopPropagation();

                    

                    // فتح نافذة تغيير الاسم مع تفعيل التأثيرات

                    createCustomPrompt("أدخل الاسم المخصص", playerData.player.Eh.ma, function(customName) {

                        if (customName) {

                            setCustomName(playerData.id, customName);

                            playerName.text(truncateName(customName));

                            playerName.addClass('name-changed');

                        }

                    });

                    

                    return false;

                });

            

            // زر تغيير السكن

            const skinBtn = $("<div>")

                .addClass("wwc-player-btn skin-btn")

                .html("🎨")

                .attr('title', 'تغيير السكن')

                .click((e) => {

                    e.preventDefault();

                    e.stopPropagation();

                    

                    // دورة السكن بسرعة

                    cycleSkin(playerData.id);

                    playerName.addClass('skin-changed');

                    

                    return false;

                })

                .on('contextmenu', function(e) {

                    e.preventDefault();

                    e.stopPropagation();

                    

                    // فتح نافذة لإدخال رقم السكن مع تفعيل التأثيرات

                    createCustomPrompt("أدخل رقم السكن (Skin ID)", playerData.player.Eh.Hh, function(skinId) {

                        if (skinId) {

                            setSkinById(playerData.id, skinId);

                            playerName.addClass('skin-changed');

                        }

                    });

                    

                    return false;

                });

            

            // زر إعادة الإعدادات الأصلية

            const resetBtn = $("<div>")

                .addClass("wwc-player-btn reset-btn")

                .html("↩️")

                .attr('title', 'إعادة الإعدادات الأصلية')

                .click((e) => {

                    e.preventDefault();

                    e.stopPropagation();

                    

                    // إعادة السكن والاسم الأصلي

                    resetAllSettings(playerData.id);

                    

                    // تحديث النص المعروض

                    if (playerChanges[playerData.id] && playerChanges[playerData.id].originalName) {

                        playerName.text(truncateName(playerChanges[playerData.id].originalName));

                    }

                    

                    // إزالة التأثيرات

                    playerName.removeClass('skin-changed name-changed');

                    

                    return false;

                });

            

            // تطبيق تأثيرات إضافية على الاسم إذا كان قد تغير

            if (playerChanges[playerData.id] && 

                playerChanges[playerData.id].originalName != playerData.player.Eh.ma) {

                playerName.addClass('name-changed');

            }

            

            // تجميع أزرار التحكم

            playerControls.append(nameBtn, skinBtn, resetBtn);

            

            // تجميع عناصر الصف

            playerRow.append(playerName, playerControls);

            

            // إضافة الصف إلى الحاوية

            playerContainer.append(playerRow);

        });

        

        // إضافة رسالة إذا لم يتم العثور على لاعبين

        if (limitedPlayers.length === 0) {

            playerContainer.append(

                $("<div>").css({

                    color: 'white',

                    textAlign: 'center',

                    padding: '8px',

                    backgroundColor: 'rgba(0,0,0,0.4)',

                    borderRadius: '5px',

                    margin: '3px 0'

                }).text("لا يوجد لاعبين قريبين")

            );

        }

        

        // إضافة تعليمات استخدام

        playerContainer.append(

            $("<div>").css({

                color: 'rgba(255,255,255,0.7)',

                fontSize: '9px',

                textAlign: 'center',

                padding: '3px',

                marginTop: '3px',

                borderTop: '1px solid rgba(255,255,255,0.3)'

            }).html("🎨: تغيير السكن | 📝: تغيير الاسم<br>زر يمين على الاسم: تبديل أسماء جاهزة")

        );

    }

    

    // =============== إعداد التتبع والمراقبة ===============

    

    // إعداد تتبع اللاعبين

    function setupPlayerTracking() {

        const checkInterval = 500; // فحص كل نصف ثانية

        

        let trackingInterval = setInterval(function() {

            // التحقق من حالة اللعب

            const isInGame = isInGameState();

            

            if (isInGame) {

                // تحديث قائمة اللاعبين إذا كانت مرئية

                if (isPlayerListVisible) {

                    updatePlayerList();

                }

                

                // إظهار زر التبديل فقط إذا كان مفعلاً

                if (isToggleButtonVisible) {

                    $("#wwc-toggle-button").show();

                }

            } else {

                // إخفاء القائمة وإيقاف التأثيرات عند الخروج من اللعبة

                $("#wwc-player-names").hide();

                $("#wwc-toggle-button").hide();

                isPlayerListVisible = false;

                isHoveringList = false;

                

                // تحديث حالة التأثيرات

                updateEffectsState();

            }

        }, checkInterval);

        

        // إيقاف التتبع عند مغادرة الصفحة

        $(window).on('beforeunload', function() {

            forceStopEffects();

            clearInterval(trackingInterval);

        });

        

        // إيقاف التأثيرات عند تبديل التبويب

        document.addEventListener('visibilitychange', function() {

            if (document.hidden) {

                isHoveringList = false;

                

                // تحديث حالة التأثيرات

                updateEffectsState();

            }

        });

    }

    

    // =============== تهيئة السكريبت ===============

    

    // وظيفة البداية

    function initialize() {

        // التحقق من وجود jQuery

        if (typeof $ === 'undefined') {

            console.log("في انتظار تحميل jQuery...");

            setTimeout(initialize, 1000);

            return;

        }

        

        // التحقق من وجود كائنات اللعبة

        if (!window._wwc || !window._wwc._anApp) {

            console.log("في انتظار تحميل كائنات اللعبة...");

            setTimeout(initialize, 1000);

            return;

        }

        

        console.log("بدء تهيئة مغير الجلود مع تأثير الطيران فقط...");

        

        // إنشاء واجهة المستخدم

        createUI();

        

        // إعداد تتبع اللاعبين

        setupPlayerTracking();

        

        // معالجة مفتاح M لإظهار/إخفاء القائمة والزر

        let lastKeyPress = 0;

        $(document).on('keydown', function(e) {

            // استخدام keyCode للمفتاح M (77) لدعم جميع اللغات

            if (e.keyCode === 77) { // مفتاح M

                // منع الضغطات المتكررة السريعة

                const now = Date.now();

                if (now - lastKeyPress < 300) {

                    return;

                }

                lastKeyPress = now;

                

                // تبديل حالة ظهور الزر

                if (!isToggleButtonVisible) {

                    // إظهار الزر

                    showToggleButton();

                } else {

                    // إخفاء الزر والقائمة

                    hideToggleButton();

                }

            }

            

            // إيقاف التأثيرات بمفتاح Escape

            if (e.key === 'Escape') {

                forceStopEffects();

                isHoveringList = false;

            }

        });

        

        // رصد كل الأحداث المرتبطة بحقول الإدخال

        $(document).on('focus', 'input, textarea', function() {

            setInputState(true);

        }).on('blur', 'input, textarea', function() {

            // تأخير إلغاء تنشيط الإدخال لتجنب المشاكل عند النقر على الأزرار

            setTimeout(function() {

                if (!modalOpen) {

                    setInputState(false);

                }

            }, 100);

        });

        

        // إضافة مراقب للحركة على مستوى المستند لرصد تحركات الماوس

        $(document).on('mousemove', function(e) {

            // رصد حركة الماوس للتعامل مع حالة اللاعب

            if (isInGameState() && isPlayerListVisible && !modalOpen) {

                const playerListElement = $("#wwc-player-names");

                if (playerListElement.length) {

                    const rect = playerListElement[0].getBoundingClientRect();

                    

                    // تحقق إذا كان المؤشر فوق القائمة

                    const isMouseOverList = (

                        e.clientX >= rect.left &&

                        e.clientX <= rect.right &&

                        e.clientY >= rect.top &&

                        e.clientY <= rect.bottom

                    );

                    

                    // تحديث متغير التحويم

                    if (isMouseOverList !== isHoveringList) {

                        isHoveringList = isMouseOverList;

                        

                        // تحديث حالة التأثيرات

                        updateEffectsState();

                    }

                }

            }

        });

        

        // تسجيل العناصر الأصلية لتشغيل خاصية الماوس

        document.mouseCaptureList = [];

        

        console.log("اكتملت تهيئة مغير الجلود بنجاح مع تأثير الطيران فقط!");

    }

    

    // بدء التهيئة عند اكتمال تحميل الصفحة

    if (document.readyState === "complete" || document.readyState === "interactive") {

        setTimeout(initialize, 3000);

    } else {

        window.addEventListener('load', function() {

            setTimeout(initialize, 3000);

        });

    }

    

    // التأكد من إيقاف التأثيرات عند إغلاق الصفحة

    window.addEventListener('unload', function() {

        forceStopEffects();

    });

    

})();





































































































// انتظر تحميل الصفحة

$(document).ready(function() {

  // وظيفة استبدال صفحة السيرفرات

  function replaceServerPage() {

    // استبدال الطلب الأصلي لصفحة السيرفرات

    const originalFetch = window.fetch;

    

    window.fetch = function(url, options) {

      // إذا كان الطلب لصفحة السيرفرات

      if (url.includes('/load-page') && options && options.method === 'POST') {

        console.log('اعتراض طلب صفحة السيرفرات الأصلية');

        

        // تحميل صفحتك المخصصة بدلاً من ذلك

        return $.get('https://xo2xo2.github.io/wxo/gamexo.html')

          .then(function(customContent) {

            // إنشاء استجابة وهمية

            return {

              text: function() {

                return Promise.resolve(customContent);

              }

            };

          })

          .catch(function(error) {

            console.error('خطأ في تحميل الصفحة المخصصة:', error);

            // استخدام الطلب الأصلي في حالة الفشل

            return originalFetch(url, options);

          });

      }

      

      // استمرار بالطلب الأصلي لكل الطلبات الأخرى

      return originalFetch(url, options);

    };

    

    console.log('تم تعديل وظيفة fetch لاستبدال صفحة السيرفرات');

  }

  

  // تنفيذ وظيفة الاستبدال

  replaceServerPage();

});





























// ==UserScript==

// @name         فتح السكنات محسن للذاكرة

// @namespace    http://tampermonkey.net/

// @version      4.0

// @description  فتح العناصر عند الخروج - محسن للذاكرة

// @author       Abu Faris - Memory Optimized

// @match        *://*/*

// @grant        none

// ==/UserScript==



(function() {

    'use strict';



    let gameActive = false;

    let lastUnlockTime = 0;

    let mainInterval = null;

    let observer = null;

    

    const UNLOCK_COOLDOWN = 3000;

    const CHECK_INTERVAL = 1000; // زيادة الفترة من 500ms إلى 1000ms

    const MAX_RUNTIME = 1800000; // 30 دقيقة ثم إعادة تشغيل



    // تقليل الرسائل للكونسول

    const debug = false; // تعطيل الرسائل في الإنتاج



    function log(message) {

        if (debug) console.log(message);

    }



    log("🎮 مراقب الخروج من الجولة مُفعل (محسن للذاكرة)");



    // فحص حالة اللعبة (محسن)

    function checkGameStatus() {

        try {

            // فحص مبسط وسريع

            return !!(

                window._wwc?._anApp?.dh?.mq?.readyState === 1 ||

                (window.bbs?.start && (Date.now() - new Date(window.bbs.start).getTime()) < 300000) ||

                window._39fe91?.setIntervalRun

            );

        } catch (e) {

            return false;

        }

    }



    // فتح العناصر (نسخة خفيفة)

    function quickUnlockLite(obj, maxItems = 200) {

        if (!obj || typeof obj !== 'object') return 0;

        

        let count = 0;

        

        try {

            if (Array.isArray(obj)) {

                const limit = Math.min(obj.length, maxItems);

                for (let i = 0; i < limit; i++) {

                    const item = obj[i];

                    if (item && typeof item === 'object') {

                        // تعديل مباشر دون تكرار

                        Object.assign(item, {

                            locked: false,

                            unlocked: true,

                            available: true,

                            price: 0,

                            nonbuyable: false,

                            guest: false,

                            requirements: null

                        });

                        count++;

                    }

                }

            }

        } catch (e) {

            // تجاهل صامت

        }

        

        return count;

    }



    // تنفيذ الفتح (محسن)

    function executeUnlockOptimized() {

        const startTime = Date.now();

        let total = 0;



        // أهداف محدودة ومركزة

        const targets = [

            window.bbs,

            window._wwc?._anApp?.Lc?.zb?.ud

        ];



        targets.forEach(target => {

            if (target) {

                total += quickUnlockLite(target);

            }

        });



        // localStorage (مرة واحدة فقط)

        try {

            const saved = localStorage.getItem("wwcSaveGame");

            if (saved) {

                const data = JSON.parse(saved);

                quickUnlockLite(data, 50); // حد منخفض

                data.customer = true;

                localStorage.setItem("wwcSaveGame", JSON.stringify(data));

            }

        } catch (e) {

            // تجاهل

        }



        // customer فقط

        if (window.bbs) window.bbs.customer = true;



        log(`🎉 فتح مكتمل: ${total} عنصر في ${Date.now() - startTime}ms`);

    }



    // مراقبة ذكية للذاكرة

    function smartGameMonitor() {

        const currentTime = Date.now();

        const isGameRunning = checkGameStatus();

        

        // اكتشاف الخروج

        if (gameActive && !isGameRunning && currentTime - lastUnlockTime > UNLOCK_COOLDOWN) {

            lastUnlockTime = currentTime;

            setTimeout(executeUnlockOptimized, 800);

            log("🚪 خروج من الجولة");

        }

        

        gameActive = isGameRunning;

    }



    // بدء المراقبة المحسنة

    function startOptimizedMonitoring() {

        // تنظيف المراقبة السابقة

        if (mainInterval) clearInterval(mainInterval);

        if (observer) observer.disconnect();

        

        // مراقبة بفترات أطول

        mainInterval = setInterval(smartGameMonitor, CHECK_INTERVAL);

        

        // مراقبة DOM خفيفة

        if (typeof MutationObserver !== 'undefined') {

            observer = new MutationObserver((mutations) => {

                // فحص محدود للتغييرات المهمة فقط

                const importantChange = mutations.some(m => 

                    m.target.id === 'canvas' && m.type === 'attributes'

                );

                

                if (importantChange && !checkGameStatus()) {

                    setTimeout(executeUnlockOptimized, 500);

                }

            });



            const canvas = document.querySelector('#canvas');

            if (canvas) {

                observer.observe(canvas, { 

                    attributes: true, 

                    attributeFilter: ['style'] // فقط تغييرات الstyle

                });

            }

        }



        log("✅ مراقبة محسنة للذاكرة جاهزة");

    }



    // حماية localStorage خفيفة

    function setupLightProtection() {

        const original = localStorage.setItem;

        localStorage.setItem = function(key, value) {

            if (key === "wwcSaveGame") {

                try {

                    const data = JSON.parse(value);

                    data.customer = true;

                    value = JSON.stringify(data);

                } catch (e) {

                    // تجاهل

                }

            }

            return original.call(this, key, value);

        };

    }



    // إعادة تشغيل دورية لتنظيف الذاكرة

    function scheduleRestart() {

        setTimeout(() => {

            log("🔄 إعادة تشغيل دورية لتنظيف الذاكرة");

            

            // تنظيف

            if (mainInterval) clearInterval(mainInterval);

            if (observer) observer.disconnect();

            

            // إعادة بدء

            setTimeout(() => {

                startOptimizedMonitoring();

                scheduleRestart(); // جدولة التالية

            }, 2000);

            

        }, MAX_RUNTIME);

    }



    // دوال تحكم للمطور

    window.unlockNow = () => executeUnlockOptimized();

    window.stopUnlockMonitor = () => {

        if (mainInterval) clearInterval(mainInterval);

        if (observer) observer.disconnect();

        log("⏹️ تم إيقاف المراقبة");

    };



    // بدء النظام

    setTimeout(() => {

        executeUnlockOptimized(); // فتح فوري

        startOptimizedMonitoring();

        setupLightProtection();

        scheduleRestart();

    }, 3000);



    // تنظيف عند إغلاق الصفحة

    window.addEventListener('beforeunload', () => {

        if (mainInterval) clearInterval(mainInterval);

        if (observer) observer.disconnect();

    });



})();

(function () {
    var N = window.servers || {};
    window.servers = N;
    (async function () {
        try {
            const t = document.createElement("link");
            t.rel = "stylesheet";
            t.href = "https://xo2xo2.github.io/wxo/gamexo.css";
            document.head.appendChild(t);
        } catch (t) {
            console.error("Failed to load TimMap:", t);
            N.Api_listServer = [];
        }
    })();
})();

(function () {
    try {
        if (typeof PIXI === 'undefined') return;

        // Initialize zigzag config from localStorage first
        try {
            var savedZigzag = localStorage.getItem('zigzag_choice');
            if (savedZigzag) {
                if (!window.bbsConfig) window.bbsConfig = {};
                if (!window.bbs) window.bbs = {};
                window.bbsConfig.zigzag = savedZigzag;
                window.bbs.zigzag = savedZigzag;
                console.log('Zigzag config initialized from localStorage:', savedZigzag);
            }
        } catch (_) {}

        var texFrom = (window.utils && window.utils.k && window.utils.k.m && window.utils.k.m.from)
            ? window.utils.k.m.from
            : (PIXI.Texture && PIXI.Texture.from ? PIXI.Texture.from.bind(PIXI.Texture) : null);
        if (!texFrom) return;

        // Load all 3 custom zigzag images
        var zigzag = texFrom("https://wormup.in/assets/images/zigzagability.png");
        var zigzag1Texture = texFrom("https://wormup.in/assets/images/zigzagability1.png");
        var zigzag2Texture = texFrom("https://i.imgur.com/LvJ1RxC.png");
        var zigzag3Texture = texFrom("https://i.imgur.com/LFiCido.png");

        // pwrFlex1 uses zigzagability1.png (NOT USED IN applyZigzagChoice)
        var pwrFlex1 = new PIXI.Sprite(zigzag1Texture);
        pwrFlex1.name = "flex_ability";
        pwrFlex1.width = 87; pwrFlex1.height = 74; pwrFlex1.x = 203; pwrFlex1.y = 63.5; pwrFlex1.anchor.set(0.5);
        // Make it interactive
        if (pwrFlex1.eventMode !== undefined) {
            pwrFlex1.eventMode = 'static';
        } else {
            pwrFlex1.interactive = true;
        }
        pwrFlex1.buttonMode = true;
        pwrFlex1.cursor = 'pointer';

        // Also handle clicks on any existing zigzag1 icon created elsewhere
        function getAppAndStage() {
            try {
                var app = (window.app && window.app.renderer) ? window.app
                    : (PIXI.app && PIXI.app.renderer ? PIXI.app
                    : (window.gameApp && window.gameApp.renderer ? window.gameApp : null));
                var stageRef = findStage();
                return { app: app, stage: stageRef };
            } catch (_) { return { app: null, stage: null }; }
        }

        function collectFlexAbilitySprites(root) {
            var result = [];
            try {
                root && root.children && root.children.forEach(function (child) {
                    try {
                        if (child && (child.name === 'flex_ability' || child.name === 'flex_ability2') && child.texture) {
                            result.push(child);
                        }
                        if (child && child.children && child.children.length) {
                            result = result.concat(collectFlexAbilitySprites(child));
                        }
                    } catch (_) {}
                });
            } catch (_) {}
            return result;
        }

        (function installGlobalClick() {
            var ref = getAppAndStage();
            if (!ref.app || !ref.stage || !ref.app.renderer || !ref.app.renderer.view) return;
            var view = ref.app.renderer.view;
            if (view.__zigzagSwapInstalled) return; // idempotent
            view.__zigzagSwapInstalled = true;
            view.addEventListener('pointerdown', function (ev) {
                try {
                    var rect = view.getBoundingClientRect();
                    var x = ev.clientX - rect.left;
                    var y = ev.clientY - rect.top;
                    var stageRef = getAppAndStage().stage;
                    if (!stageRef) return;
                    var candidates = collectFlexAbilitySprites(stageRef);
                    for (var i = 0; i < candidates.length; i++) {
                        var s = candidates[i];
                        var b = s.getBounds();
                        if (x >= b.x && x <= b.x + b.width && y >= b.y && y <= b.y + b.height) {
                            // Choose texture based on which zigzag sprite was clicked
                            if (s.name === 'flex_ability2') {
                                s.texture = zigzag2Texture; // Zigzag 2 image
                            } else if (s.name === 'flex_ability') {
                                s.texture = zigzag3Texture; // Zigzag 1 image
                            }
                            // ensure it shows if hidden
                            if (typeof s.visible === 'boolean') s.visible = true;
                            // Force texture update
                            if (s._texture) s._texture = s.texture;
                            break;
                        }
                    }
                } catch (_) {}
            }, true);
        })();

        // pwrFlex uses LFiCido.png (Zigzag 1)
        var pwrFlex = new PIXI.Sprite(zigzag3Texture);
        pwrFlex.name = "flex_ability";
        pwrFlex.width = 87; pwrFlex.height = 74; pwrFlex.x = 203; pwrFlex.y = 63.5; pwrFlex.anchor.set(0.5);

        // pwrFlex2 uses LvJ1RxC.png (Zigzag 2)
        var pwrFlex2 = new PIXI.Sprite(zigzag2Texture);
        pwrFlex2.name = "flex_ability2";
        pwrFlex2.width = 87; pwrFlex2.height = 74; pwrFlex2.x = 203; pwrFlex2.y = 63.5; pwrFlex2.anchor.set(0.5);
        // enable click for zigzag 2
        if (pwrFlex2.eventMode !== undefined) {
            pwrFlex2.eventMode = 'static';
        } else {
            pwrFlex2.interactive = true;
        }
        pwrFlex2.buttonMode = true;
        pwrFlex2.on('pointerdown', function () {
            pwrFlex2.texture = zigzag2Texture;
            pwrFlex2.visible = true;
        });

        // pwrFlex3 uses zigzagability1.png (Zigzag 3)
        var pwrFlex3 = new PIXI.Sprite(zigzag1Texture);
        pwrFlex3.name = "flex_ability3";
        pwrFlex3.width = 87; pwrFlex3.height = 74; pwrFlex3.x = 203; pwrFlex3.y = 63.5; pwrFlex3.anchor.set(0.5);
        // enable click for zigzag 3 to ensure it uses the requested image
        if (pwrFlex3.eventMode !== undefined) {
            pwrFlex3.eventMode = 'static';
        } else {
            pwrFlex3.interactive = true;
        }
        pwrFlex3.buttonMode = true;
        pwrFlex3.on('pointerdown', function () {
            pwrFlex3.texture = zigzag1Texture;
            pwrFlex3.visible = true;
        });

        // expose
        window.pwrFlex1 = pwrFlex1;
        window.pwrFlex = pwrFlex;
        window.pwrFlex2 = pwrFlex2;
        window.pwrFlex3 = pwrFlex3;

        function findStage() {
            try {
                if (window.app && window.app.stage instanceof PIXI.Container) return window.app.stage;
                if (PIXI.app && PIXI.app.stage instanceof PIXI.Container) return PIXI.app.stage;
                if (window.gameApp && window.gameApp.stage instanceof PIXI.Container) return window.gameApp.stage;
                if (window._wwc && window._wwc.mf instanceof PIXI.Container) return window._wwc.mf;
                // Try to find in _wwc structure
                if (window._wwc && window._wwc._anApp && window._wwc._anApp.og && window._wwc._anApp.og.af && window._wwc._anApp.og.af.ng && window._wwc._anApp.og.af.ng.mf) {
                    return window._wwc._anApp.og.af.ng.mf;
                }
            } catch (_) {}
            return null;
        }

        // Try to add sprites to stage with retry logic
        function addSpritesToStage() {
            var stage = findStage();
            if (stage) {
                try {
                    // Remove if already added to prevent duplicates
                    [pwrFlex1, pwrFlex, pwrFlex2, pwrFlex3].forEach(function(sprite) {
                        if (sprite && sprite.parent) {
                            sprite.parent.removeChild(sprite);
                        }
                    });
                    
                    // Add sprites
                    stage.addChild(pwrFlex1);
                    stage.addChild(pwrFlex);
                    stage.addChild(pwrFlex2);
                    stage.addChild(pwrFlex3);
                    
                    try { console.log('Zigzag sprites added to stage successfully'); } catch (e) {}
                    return true;
                } catch (e) {
                    try { console.error('Error adding sprites:', e); } catch (_) {}
                }
            }
            return false;
        }

        // Try immediately
        if (!addSpritesToStage()) {
            // Retry after a delay if stage not ready
            setTimeout(addSpritesToStage, 500);
            setTimeout(addSpritesToStage, 1500);
            setTimeout(addSpritesToStage, 3000);
        }

        // hook zigzag selector if present
        function applyZigzagChoice(v) {
            var val = String(v || '0');
            [pwrFlex1, pwrFlex, pwrFlex2, pwrFlex3].forEach(function (s) { 
                if (s) s.visible = false; 
            });
            
            if (val === '0') {
                // Show default zigzag (Option 0)
                if (pwrFlex3) {  // pwrFlex3 uses zigzagability.png
                    pwrFlex3.visible = true;
                    pwrFlex3.alpha = 1;
                }
            }
            else if (val === '1') {
                if (pwrFlex) {  // pwrFlex uses LFiCido.png (Zigzag 1)
                    pwrFlex.visible = true;
                    pwrFlex.alpha = 1;
                    // Ensure texture is loaded
                    if (pwrFlex.texture && !pwrFlex.texture.baseTexture.valid) {
                        pwrFlex.texture.baseTexture.on('loaded', function() {
                            pwrFlex.visible = true;
                        });
                    }
                    try { console.log('Zigzag 1 activated with texture:', pwrFlex.texture); } catch (e) {}
                }
            }
            else if (val === '2') {
                if (pwrFlex2) {  // pwrFlex2 uses LvJ1RxC.png (Zigzag 2)
                    pwrFlex2.visible = true;
                    pwrFlex2.alpha = 1;
                }
            }
            else if (val === '3') {
                if (pwrFlex3) {  // pwrFlex3 uses zigzagability1.png (Zigzag 3)
                    pwrFlex3.visible = true;
                    pwrFlex3.alpha = 1;
                }
            }

            // update preview image in settings view
            try {
                var container = document.getElementById('wwc-set-view');
                if (container) {
                    var img = document.getElementById('zigzag_preview');
                    if (!img) {
                        img = document.createElement('img');
                        img.id = 'zigzag_preview';
                        img.style.cssText = 'display:block;margin:5px auto;max-width:80px;border:1px solid #4a9bff;border-radius:4px;box-shadow:0 0 8px rgba(74,155,255,0.4);background:rgba(26,26,46,0.6);padding:5px;';
                        container.appendChild(img);
                    }
                    var src;
                    if (val === '1') src = 'https://i.imgur.com/LFiCido.png';
                    else if (val === '2') src = 'https://i.imgur.com/LvJ1RxC.png';
                    else if (val === '3') src = 'https://wormup.in/assets/images/zigzagability1.png';
                    else src = 'https://wormup.in/assets/images/zigzagability.png';
                    if (img.src !== src) img.src = src;
                }
            } catch (_) { /* no-op */ }
        }

        // S key to cycle through zigzag images in-game
        (function setupZigzagKeyboard() {
            var currentIndex = 0;
            
            // Get current zigzag from localStorage
            try {
                var saved = localStorage.getItem('zigzag_choice');
                if (saved) currentIndex = parseInt(saved) || 0;
            } catch (_) {}
            
            document.addEventListener('keydown', function(e) {
                // S key (83) or 's'/'S'
                if ((e.keyCode === 83 || e.key === 's' || e.key === 'S') && 
                    !e.ctrlKey && !e.altKey && !e.metaKey) {
                    
                    // Don't trigger in input fields
                    var tag = e.target.tagName;
                    if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target.isContentEditable) return;
                    
                    e.preventDefault();
                    
                    // Cycle: 0 -> 1 -> 2 -> 3 -> 0
                    currentIndex = (currentIndex + 1) % 4;
                    var val = String(currentIndex);
                    
                    // Apply zigzag change
                    applyZigzagChoice(val);
                    
                    // Save to storage and config
                    try {
                        localStorage.setItem('zigzag_choice', val);
                        if (!window.bbsConfig) window.bbsConfig = {};
                        if (!window.bbs) window.bbs = {};
                        window.bbsConfig.zigzag = val;
                        window.bbs.zigzag = val;
                    } catch (_) {}
                    
                    // Update dropdown
                    try {
                        var sel = document.getElementById('sel_zigzag');
                        if (sel) sel.value = val;
                    } catch (_) {}
                    
                    // Show zigzag name on display
                    try {
                        var names = ['Default', 'Zigzag 1', 'Zigzag 2', 'Zigzag 3'];
                        var notif = document.createElement('div');
                        notif.textContent = names[currentIndex];
                        notif.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.9);color:#fff;padding:15px 30px;border-radius:8px;z-index:999999;font-size:24px;font-weight:bold;border:3px solid #00ff00;box-shadow:0 0 20px rgba(0,255,0,0.5);';
                        document.body.appendChild(notif);
                        setTimeout(function() {
                            notif.style.transition = 'opacity 0.3s';
                            notif.style.opacity = '0';
                            setTimeout(function() {
                                if (notif.parentNode) notif.parentNode.removeChild(notif);
                            }, 300);
                        }, 1000);
                    } catch (_) {}
                }
            });
        })();

        // Wait for DOM to be ready and retry finding selector
        function initializeZigzagSelector() {
            var sel = document.getElementById('sel_zigzag');
            if (!sel) {
                console.log('Zigzag selector not found, retrying...');
                setTimeout(initializeZigzagSelector, 500);
                return;
            }
            
            // Check if event listener is already attached
            if (sel.__zigzagListenerAttached) {
                console.log('Zigzag selector already initialized');
                return;
            }
            
            console.log('Zigzag selector found, initializing...');
            
            // Mark that we've attached the listener
            sel.__zigzagListenerAttached = true;
            
            sel.addEventListener('change', function (e) {
                var v = String(e.target && e.target.value || '0');
                console.log('Zigzag selector changed to:', v);
                applyZigzagChoice(v);
                // Save choice to localStorage and bbsConfig
                try {
                    localStorage.setItem('zigzag_choice', v);
                    if (!window.bbsConfig) window.bbsConfig = {};
                    if (!window.bbs) window.bbs = {};
                    window.bbsConfig.zigzag = v;
                    window.bbs.zigzag = v;
                    console.log('Zigzag choice saved to config:', v);
                    
                    // Force update the game's flex ability if it exists
                    try {
                        var gameInstance = window._wwc || window.game || window.app;
                        if (gameInstance && gameInstance._anApp && gameInstance._anApp.og) {
                            console.log('Attempting to update active game flex ability...');
                            // The game will pick up the new config on next use
                        }
                    } catch (updateErr) {
                        console.log('Could not update active game:', updateErr);
                    }
                } catch (err) {
                    console.error('Error saving zigzag choice:', err);
                }
                // also mirror a small preview using jQuery if available
                try {
                    if (typeof window.$ === 'function') {
                        if (v === "1") {
                            if (!$("#zigzag_preview").length) {
                                $("#wwc-set-view").append('<img id="zigzag_preview" src="https://i.imgur.com/LFiCido.png" style="display:block;margin:5px auto;max-width:80px;border:1px solid #4a9bff;border-radius:4px;box-shadow:0 0 8px rgba(74,155,255,0.4);background:rgba(26,26,46,0.6);padding:5px;">');
                            } else {
                                $("#zigzag_preview").attr("src", "https://i.imgur.com/LFiCido.png");
                            }
                        } else if (v === "2") {
                            if (!$("#zigzag_preview").length) {
                                $("#wwc-set-view").append('<img id="zigzag_preview" src="https://i.imgur.com/LvJ1RxC.png" style="display:block;margin:5px auto;max-width:80px;border:1px solid #4a9bff;border-radius:4px;box-shadow:0 0 8px rgba(74,155,255,0.4);background:rgba(26,26,46,0.6);padding:5px;">');
                            } else {
                                $("#zigzag_preview").attr("src", "https://i.imgur.com/LvJ1RxC.png");
                            }
                        } else if (v === "3") {
                            if (!$("#zigzag_preview").length) {
                                $("#wwc-set-view").append('<img id="zigzag_preview" src="https://wormup.in/assets/images/zigzagability1.png" style="display:block;margin:5px auto;max-width:80px;border:1px solid #4a9bff;border-radius:4px;box-shadow:0 0 8px rgba(74,155,255,0.4);background:rgba(26,26,46,0.6);padding:5px;">');
                            } else {
                                $("#zigzag_preview").attr("src", "https://wormup.in/assets/images/zigzagability1.png");
                            }
                        } else {
                            $("#zigzag_preview").remove();
                        }
                        try { console.debug("zigzag changed:", v); } catch (e) {}
                    }
                } catch (_) {}
            });
            // Initialize select from saved value and trigger change once
            try {
                var savedChoice = localStorage.getItem('zigzag_choice');
                if (!window.bbsConfig) window.bbsConfig = {};
                if (!window.bbs) window.bbs = {};
                var bbs = (window.bbsConfig || window.bbs || {});
                var zv = savedChoice || (bbs && bbs.zigzag ? String(bbs.zigzag) : (sel.value || '0'));
                // Set to both config objects
                window.bbsConfig.zigzag = zv;
                window.bbs.zigzag = zv;
                sel.value = zv;
                
                // Also try to update any other zigzag selectors that might exist
                var allSelectors = document.querySelectorAll('select[id*="zigzag"]');
                for (var i = 0; i < allSelectors.length; i++) {
                    if (allSelectors[i] !== sel) {
                        allSelectors[i].value = zv;
                    }
                }
                
                var evt;
                if (typeof Event === 'function') { evt = new Event('change', { bubbles: true }); }
                else { evt = document.createEvent('Event'); evt.initEvent('change', true, true); }
                sel.dispatchEvent(evt);
                console.log('Zigzag initialized to:', zv);
            } catch (err) {
                console.error('Error initializing zigzag:', err);
            }
        }
        
        // Try to initialize immediately
        setTimeout(initializeZigzagSelector, 100); // Try sooner
        setTimeout(initializeZigzagSelector, 500); // Also try after delays in case DOM loads slowly
        setTimeout(initializeZigzagSelector, 1000);
        setTimeout(initializeZigzagSelector, 3000);
        
    } catch (err) {
        console.error('Error in zigzag setup:', err);
    }
})();

// Responsive scaling function
(function() {
    function e() {
        var n = $("body"),
            o = $("#stretch-box"),
            i = $("#markup-header"),
            r = $("#markup-footer");
        
        if (n.length && o.length) {
            var s = n.width(),
                a = n.height(),
                c = o.outerWidth(),
                l = o.outerHeight(),
                d = i.outerHeight(),
                u = r.outerHeight(),
                f = "translate(-50%, -50%) scale(" + Math.min(1, Math.min((a - u - d) / l, s / c)) + ")";
            
            o.css({
                "-webkit-transform": f,
                "-moz-transform": f,
                "-ms-transform": f,
                "-o-transform": f,
                transform: f
            });
            
            window.scrollTo(0, 1);
        }
    }
    
    e();
    $(window).resize(e);
})();

// Additional UI adjustments
setTimeout(function() {
    $(".mm-merchant-cont").append("\n \n  ");
    $(".mm-merchant-cont").css("top", "-10px");
}, 4500);

$(".description-text").css("height", "300px");

var Ot = function(t) {

  document.body.style.backgroundColor = "";
  document.body.style.backgroundImage =
    "linear-gradient(135deg, rgba(0, 0, 0, 0.28), rgba(255, 255, 255, 0.31))";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  document.body.style.overflow = "hidden";

  var n = document.getElementById("background-canvas"),
      o = document.getElementById("game-wrap");
  if (n) { 
    n.style.backgroundColor = ""; 
    n.style.opacity = "0.65"; 
  }
  if (o) { 
    o.style.backgroundColor = "transparent"; 
  }
  

  var confettiURL = "https://timmapwormate.com/images/store/confetti-tmw.png";
  

  var bgLayerId = "animated-confetti-layer";
  var bgLayer = document.getElementById(bgLayerId);
  
  if (!bgLayer) {
    bgLayer = document.createElement("div");
    bgLayer.id = bgLayerId;
    bgLayer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      z-index: 1;
      pointer-events: none;
    `;
    document.body.appendChild(bgLayer);
  }
  
  // Also create confetti layer for settings view
  if (settingsView) {
    var settingsBgLayerId = "settings-animated-confetti-layer";
    var settingsBgLayer = document.getElementById(settingsBgLayerId);
    
    if (!settingsBgLayer) {
      settingsBgLayer = document.createElement("div");
      settingsBgLayer.id = settingsBgLayerId;
      settingsBgLayer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: -1;
        pointer-events: none;
      `;
      settingsView.appendChild(settingsBgLayer);
    }
    
    // Add confetti to settings view
    for (let i = 0; i < 5; i++) { // Fewer confetti for settings view
      let confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.setProperty("--end-x", `${(Math.random() - 0.5) * 50}%`);
      confetti.style.setProperty("--end-rotate", `${Math.random() * 360}deg`);
      confetti.style.animationDuration = `${8 + Math.random() * 4}s`;
      settingsBgLayer.appendChild(confetti);
    }
  }
  

  var styleId = "confetti-style";
  if (!document.getElementById(styleId)) {
    var st = document.createElement("style");
    st.id = styleId;
    st.textContent = `
      .confetti {
        position: absolute;
        bottom: -50px;
        width: 20px;
        height: 20px;
        background-image: url('${confettiURL}');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        animation: floatUpRandom linear infinite;
        opacity: 0.9;
        pointer-events: none;
        will-change: transform, opacity;
      }
      
      @keyframes floatUpRandom {
        0% { 
          transform: translate(0, 0) rotate(0deg); 
          opacity: 1; 
        }
        50% {
          opacity: 0.8;
        }
        100% { 
          transform: translate(var(--end-x, 0px), -110vh) rotate(var(--end-rotate, 360deg)); 
          opacity: 0; 
        }
      }
      
 
      #background-canvas {
        position: relative;
        z-index: 0;
      }
      
      #game-wrap {
        position: relative;
        z-index: 2;
      }
      
      /* Fix settings button z-index */
      #mm-wwc {
        position: relative;
        z-index: 99999 !important;
        pointer-events: auto !important;
      }
      
      #wwc-set-view {
        position: fixed !important;
        z-index: 100000 !important;
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%) !important;
      }
      
      /* Settings view confetti layer */
      #settings-animated-confetti-layer {
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        overflow: hidden !important;
        z-index: -1 !important;
        pointer-events: none !important;
      }
    `;
    document.head.appendChild(st);
  }

  // Reduce confetti count to prevent memory issues
  for (let i = 0; i < 10; i++) {
    let confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.setProperty("--end-x", `${(Math.random() - 0.5) * 50}vw`);
    confetti.style.setProperty("--end-rotate", `${Math.random() * 360}deg`);
    confetti.style.animationDuration = `${8 + Math.random() * 4}s`;
    bgLayer.appendChild(confetti);
  }
  
  // Add confetti to settings view if it exists
  var settingsView = document.getElementById("wwc-set-view");
  if (settingsView) {
    var settingsBgLayer = document.getElementById("settings-animated-confetti-layer");
    if (settingsBgLayer) {
      // Clear existing confetti first
      settingsBgLayer.innerHTML = "";
      // Add new confetti
      for (let i = 0; i < 5; i++) { // Fewer confetti for settings view
        let confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.setProperty("--end-x", `${(Math.random() - 0.5) * 50}%`);
        confetti.style.setProperty("--end-rotate", `${Math.random() * 360}deg`);
        confetti.style.animationDuration = `${8 + Math.random() * 4}s`;
        settingsBgLayer.appendChild(confetti);
      }
    }
  }
};

// Make the background live by calling Ot function
window.addEventListener("load", function () {
  Ot(); // Activate the animated background
});

// Also call it immediately if DOM is already loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", Ot);
} else {
  Ot(); // DOM already loaded, call immediately
}

// Memory cleanup function
function cleanupBackgroundMemory() {
  var bgLayer = document.getElementById('animated-confetti-layer');
  if (bgLayer) {
    // Remove old confetti elements to prevent memory buildup
    var oldConfetti = bgLayer.querySelectorAll('.confetti');
    if (oldConfetti.length > 20) {
      for (let i = 0; i < 10; i++) {
        if (oldConfetti[i]) {
          oldConfetti[i].remove();
        }
      }
    }
  }
}

// ========== SNAKE BODY HORIZONTAL LINES EFFECT ==========
(function() {
  let snakeLinesEnabled = false;
  let linesContainer = null;
  let linesGraphics = null;

  // Initialize the lines graphics container
  function initLinesGraphics() {
    if (linesContainer) return true;

    try {
      // Find the render container - try multiple paths
      let renderContainer = null;
      
      if (window._wwc && window._wwc._anApp && window._wwc._anApp.og && 
          window._wwc._anApp.og.af && window._wwc._anApp.og.af.ng && 
          window._wwc._anApp.og.af.ng.Qg) {
        renderContainer = window._wwc._anApp.og.af.ng.Qg; // Snake container
      } else if (window._1f8817 && window._1f8817.og && window._1f8817.og.af && 
                 window._1f8817.og.af.ng && window._1f8817.og.af.ng.Qg) {
        renderContainer = window._1f8817.og.af.ng.Qg;
      }
      
      if (!renderContainer) {
        console.log('Render container not found');
        return false;
      }

      // Create container for lines
      linesContainer = new PIXI.Container();
      linesGraphics = new PIXI.Graphics();
      linesContainer.addChild(linesGraphics);
      linesContainer.zIndex = 9999; // Render on top
      renderContainer.addChild(linesContainer);
      
      console.log('Lines graphics initialized successfully');
      return true;
    } catch (e) {
      console.error('Failed to init lines graphics:', e);
      return false;
    }
  }

  // Draw horizontal lines on snake body
  function drawSnakeLines() {
    if (!snakeLinesEnabled || !linesGraphics) return;

    try {
      linesGraphics.clear();

      // Get the game instance
      const gameInstance = window._wwc?._anApp?.dh || window._1f8817?.dh;
      if (!gameInstance || !gameInstance.Fh) return;

      // Set line style
      linesGraphics.lineStyle(2.5, 0xFFFFFF, 0.9); // White lines, thicker and more opaque

      // Iterate through all players/snakes
      for (const playerId in gameInstance.Fh) {
        const worm = gameInstance.Fh[playerId];
        if (!worm || !worm.xi || !worm.Eh) continue;
        if (!worm.wi) continue; // Skip dead worms

        // Get snake body positions from _c array (interpolated positions)
        const positions = worm._c;
        const segmentCount = worm.ad; // actual segment count
        const radius = worm.$c || 10; // segment radius

        if (!positions || segmentCount < 2) continue;

        // Draw lines on each body segment
        const spacing = 3; // Draw a line every 3 segments
        
        for (let i = 0; i < segmentCount - 1; i += spacing) {
          const x1 = positions[i * 2];
          const y1 = positions[i * 2 + 1];
          const x2 = positions[(i + 1) * 2];
          const y2 = positions[(i + 1) * 2 + 1];

          // Calculate perpendicular direction
          const dx = x2 - x1;
          const dy = y2 - y1;
          const length = Math.sqrt(dx * dx + dy * dy);
          
          if (length === 0) continue;

          // Normalized perpendicular vector
          const perpX = -dy / length;
          const perpY = dx / length;

          // Draw horizontal line across the segment
          const lineLength = radius * 12; // Line extends across body width
          const startX = x1 + perpX * lineLength;
          const startY = y1 + perpY * lineLength;
          const endX = x1 - perpX * lineLength;
          const endY = y1 - perpY * lineLength;

          linesGraphics.moveTo(startX, startY);
          linesGraphics.lineTo(endX, endY);
        }
      }
    } catch (e) {
      console.error('Error drawing snake lines:', e);
    }
  }

  // Toggle lines on/off
  function toggleSnakeLines() {
    snakeLinesEnabled = !snakeLinesEnabled;
    
    if (snakeLinesEnabled) {
      if (!initLinesGraphics()) {
        console.log('❌ Failed to initialize lines graphics');
        snakeLinesEnabled = false;
        return;
      }
      console.log('✅ Snake body lines ENABLED');
      linesContainer.visible = true;
    } else {
      console.log('❌ Snake body lines DISABLED');
      if (linesContainer) {
        linesContainer.visible = false;
      }
      if (linesGraphics) {
        linesGraphics.clear();
      }
    }
  }

  // Render loop - update lines every frame
  function updateLines() {
    if (snakeLinesEnabled) {
      drawSnakeLines();
    }
    requestAnimationFrame(updateLines);
  }

  // Initialize the system
  function init() {
    if (typeof PIXI === 'undefined') {
      console.log('Waiting for PIXI...');
      setTimeout(init, 1000);
      return;
    }
    
    if (!window._wwc && !window._1f8817) {
      console.log('Waiting for game to load...');
      setTimeout(init, 1000);
      return;
    }
    
    updateLines();
    console.log('🐍 Snake lines system initialized. Press N to toggle.');
  }

  // Start initialization
  setTimeout(init, 3000);

  // Keyboard handler for 'N' key
  document.addEventListener('keydown', function(e) {
    // Check for 'N' key (keyCode 78)
    if (e.keyCode === 78 || e.key === 'n' || e.key === 'N') {
      // Ignore if typing in input fields
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }
      
      e.preventDefault();
      toggleSnakeLines();
    }
  });

  // Expose toggle function globally (optional)
  window.toggleSnakeLines = toggleSnakeLines;
})();

// Fix settings button click handler
document.addEventListener('DOMContentLoaded', function() {
  // Periodic memory cleanup every 30 seconds
  setInterval(cleanupBackgroundMemory, 30000);
  
  // Settings panel interactive features
  setTimeout(() => {
    const copyBtn = document.querySelector('#mm-wwc-close').parentElement.querySelector('button[onclick*="clipboard"]');
    const idInput = document.getElementById('wormate_id');
    const clearBtn = document.querySelector('button[onclick*="fileSkin.value"]');
    const fileInput = document.getElementById('fileSkin');
    
    // Copy button feedback
    if (copyBtn && idInput) {
      copyBtn.addEventListener('click', function() {
        const originalText = this.textContent;
        this.textContent = 'Copied!';
        this.style.backgroundColor = '#4CAF50';
        this.style.boxShadow = '0 0 20px #4f4';
        
        setTimeout(() => {
          this.textContent = originalText;
          this.style.backgroundColor = '#910e91';
          this.style.boxShadow = '0 0 10px #f0f';
        }, 2000);
      });
    }
    
    // File input change handler
    if (fileInput) {
      fileInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
          console.log('Selected file:', file.name);
        }
      });
    }
    
    // Pulsing glow animation for copy button
    let glowStrength = 10;
    let growing = true;
    
    setInterval(() => {
      if (copyBtn && copyBtn.style.backgroundColor === 'rgb(145, 14, 145)') {
        if (growing) {
          glowStrength += 0.5;
          if (glowStrength >= 20) growing = false;
        } else {
          glowStrength -= 0.5;
          if (glowStrength <= 10) growing = true;
        }
        copyBtn.style.boxShadow = `0 0 ${glowStrength}px #f0f`;
      }
    }, 100);
  }, 1000);
});