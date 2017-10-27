webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__chat_chat_component__["a" /* ChatComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .app-content {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n} \n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container fullscreen>\n  <md-sidenav #sidenav>\n    <md-nav-list>\n      <a md-list-item href=\"https://luixaviles.com\" target=\"_blank\">\n        <md-icon md-list-icon>person</md-icon>\n        <span md-line>Author</span>\n      </a>\n      <a md-list-item href=\"https://github.com/luixaviles/socket-io-typescript-chat\" target=\"_blank\">\n        <md-icon md-list-icon>code</md-icon>\n        <span md-line>Source Code</span>\n      </a>\n      <a md-list-item href=\"https://luixaviles.com/2017/09/releasing-socket-io-typescript-chat-project\" target=\"_blank\">\n        <md-icon md-list-icon>web</md-icon>\n        <span md-line>Blog Post</span>\n      </a>\n    </md-nav-list>\n  </md-sidenav>\n\n  <div>\n    <md-toolbar color=\"primary\">\n      <button md-icon-button (click)=\"sidenav.toggle()\">\n      <md-icon>menu</md-icon>\n    </button>\n      <span>Typescript Chat</span>\n    </md-toolbar>\n\n    <div class=\"app-content\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</md-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.initModel = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'tcc-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat_module__ = __webpack_require__("../../../../../src/app/chat/chat.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_6__chat_chat_module__["a" /* ChatModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n[md-fab] {\n    position: absolute;\n    right: 2%;\n    top: 35px;\n    z-index: 1;\n}\n\n.chat-container {\n    position: fixed;\n    width: 100%; \n    height: 100%;  \n}\n\n.chat-input {\n    padding-top: 20px;\n    width: 80%; \n}\n\n.chat-list {\n    overflow: auto;\n    position: fixed;\n    top: 90px;\n    left: 25px;\n    right: 25px;\n    bottom: 120px;\n}\n\n.chat-list-item {\n    margin-top: 2px;\n    margin-bottom: 2px;\n    border-radius: 5px;\n    background-color: #E8EAF6;\n}\n\n.main-card {\n    height: 100%;  \n}\n\n.chat-footer-container {\n    position:fixed;\n    bottom:25px;\n    left:25px;\n    right:25px;\n}\n\n.chat-notification {\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<button md-fab (click)=\"onClickUserInfo()\">\n  <md-icon>person</md-icon>\n</button>\n<div class=\"chat-container\">\n  <md-card class=\"main-card\">\n    <md-list class=\"chat-list\">\n      <md-list-item *ngFor=\"let message of messages\" [ngClass]=\"[(message.action === undefined && message.from.id === user.id)? 'chat-list-item': '']\">\n        <img md-list-avatar *ngIf=\"message.action === undefined\" [src]=\"message.from.avatar\">\n        <h4 md-line *ngIf=\"message.action === undefined\">\n          <b>{{message.from.name}}</b>\n        </h4>\n        <p md-line *ngIf=\"message.action === undefined\">\n          <span> {{message.content}} </span>\n        </p>\n        <p md-line *ngIf=\"message.action === action.JOINED\" class=\"chat-notification\">\n          <span> <b>{{message.from.name}}</b> joined to the conversation. </span>\n        </p>\n        <p md-line *ngIf=\"message.action === action.RENAME\" class=\"chat-notification\">\n          <span> <b>{{message.content.previousUsername}}</b> is now <b>{{message.content.username}}</b> </span>\n        </p>\n      </md-list-item>\n    </md-list>\n    <div class=\"chat-footer-container\">\n      <md-icon>message</md-icon>\n      <md-input-container class=\"chat-input\">\n        <input mdInput \n               #inputMessage \n               maxlength=\"140\" \n               placeholder=\"Type your message\" \n               [(ngModel)]=\"messageContent\" \n               (keyup.enter)=\"sendMessage(messageContent)\">\n        <md-hint align=\"end\">{{inputMessage.value.length}}/140</md-hint>\n      </md-input-container>\n    </div>\n  </md-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_action__ = __webpack_require__("../../../../../src/app/shared/action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_socket_service__ = __webpack_require__("../../../../../src/app/shared/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialog_user_dialog_user_component__ = __webpack_require__("../../../../../src/app/dialog-user/dialog-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dialog_user_dialog_user_type__ = __webpack_require__("../../../../../src/app/dialog-user/dialog-user-type.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AVATAR_URL = 'https://api.adorable.io/avatars/285';
var ChatComponent = (function () {
    function ChatComponent(socketService, dialog) {
        this.socketService = socketService;
        this.dialog = dialog;
        this.action = __WEBPACK_IMPORTED_MODULE_2__shared_action__["a" /* Action */];
        this.messages = [];
        this.defaultDialogUserParams = {
            disableClose: true,
            data: {
                title: 'Wellcome',
                dialogType: __WEBPACK_IMPORTED_MODULE_5__dialog_user_dialog_user_type__["a" /* DialogUserType */].NEW
            }
        };
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initModel();
        // Using timeout due to https://github.com/angular/angular/issues/14748
        setTimeout(function () {
            _this.openUserPopup(_this.defaultDialogUserParams);
        }, 0);
    };
    ChatComponent.prototype.initModel = function () {
        var randomId = this.getRandomId();
        this.user = {
            id: randomId,
            avatar: AVATAR_URL + "/" + randomId + ".png"
        };
    };
    ChatComponent.prototype.initIoConnection = function () {
        var _this = this;
        this.socketService.initSocket();
        this.ioConnection = this.socketService.onMessage()
            .subscribe(function (message) {
            _this.messages.push(message);
        });
        this.socketService.onConnect()
            .subscribe(function () {
            console.log('onConnect');
        });
        this.socketService.onDisconnect()
            .subscribe(function () {
            console.log('onDisconnect');
        });
    };
    ChatComponent.prototype.getRandomId = function () {
        return Math.floor(Math.random() * (1000000)) + 1;
    };
    ChatComponent.prototype.onClickUserInfo = function () {
        this.openUserPopup({
            data: {
                username: this.user.name,
                title: 'Edit Details',
                dialogType: __WEBPACK_IMPORTED_MODULE_5__dialog_user_dialog_user_type__["a" /* DialogUserType */].EDIT
            }
        });
    };
    ChatComponent.prototype.openUserPopup = function (params) {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialog_user_dialog_user_component__["a" /* DialogUserComponent */], params);
        this.dialogRef.afterClosed().subscribe(function (paramsDialog) {
            if (!paramsDialog) {
                return;
            }
            _this.user.name = paramsDialog.username;
            if (paramsDialog.dialogType === __WEBPACK_IMPORTED_MODULE_5__dialog_user_dialog_user_type__["a" /* DialogUserType */].NEW) {
                _this.initIoConnection();
                _this.sendNotification(paramsDialog, __WEBPACK_IMPORTED_MODULE_2__shared_action__["a" /* Action */].JOINED);
            }
            else if (paramsDialog.dialogType === __WEBPACK_IMPORTED_MODULE_5__dialog_user_dialog_user_type__["a" /* DialogUserType */].EDIT) {
                _this.sendNotification(paramsDialog, __WEBPACK_IMPORTED_MODULE_2__shared_action__["a" /* Action */].RENAME);
            }
        });
    };
    ChatComponent.prototype.sendMessage = function (message) {
        if (!message) {
            return;
        }
        this.socketService.send({
            from: this.user,
            content: message
        });
        this.messageContent = null;
    };
    ChatComponent.prototype.sendNotification = function (params, action) {
        var message;
        if (action === __WEBPACK_IMPORTED_MODULE_2__shared_action__["a" /* Action */].JOINED) {
            message = {
                from: this.user,
                action: action
            };
        }
        else if (action === __WEBPACK_IMPORTED_MODULE_2__shared_action__["a" /* Action */].RENAME) {
            message = {
                action: action,
                content: {
                    username: this.user.name,
                    previousUsername: params.previousUsername
                }
            };
        }
        this.socketService.send(message);
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'tcc-chat',
        template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat/chat.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_socket_service__["a" /* SocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialog */]) === "function" && _b || Object])
], ChatComponent);

var _a, _b;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_socket_service__ = __webpack_require__("../../../../../src/app/shared/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialog_user_dialog_user_component__ = __webpack_require__("../../../../../src/app/dialog-user/dialog-user.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ChatModule = (function () {
    function ChatModule() {
    }
    return ChatModule;
}());
ChatModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__chat_component__["a" /* ChatComponent */], __WEBPACK_IMPORTED_MODULE_6__dialog_user_dialog_user_component__["a" /* DialogUserComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MdDialog */], __WEBPACK_IMPORTED_MODULE_5__shared_socket_service__["a" /* SocketService */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_6__dialog_user_dialog_user_component__["a" /* DialogUserComponent */]]
    })
], ChatModule);

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ "../../../../../src/app/dialog-user/dialog-user-type.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogUserType; });
var DialogUserType;
(function (DialogUserType) {
    DialogUserType[DialogUserType["NEW"] = 0] = "NEW";
    DialogUserType[DialogUserType["EDIT"] = 1] = "EDIT";
})(DialogUserType || (DialogUserType = {}));
//# sourceMappingURL=dialog-user-type.js.map

/***/ }),

/***/ "../../../../../src/app/dialog-user/dialog-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-dialog-content {\n    overflow: hidden;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialog-user/dialog-user.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>{{params.title}}</h2>\n\n<md-dialog-content>\n  <md-input-container>\n    <input mdInput name=\"username\" placeholder=\"Username\" \n           [(ngModel)]=\"params.username\" (keyup.enter)=\"onSave()\" [formControl]=\"usernameFormControl\" required>\n    <md-error>This field is required</md-error>\n    <md-hint>Please type your username</md-hint>\n  </md-input-container>\n</md-dialog-content>\n\n<md-dialog-actions *ngIf=\"params?.typeDialog === 'new-user'\" [attr.align]=\"'end'\">\n  <button md-raised-button color=\"primary\" md-dialog-close (click)=\"onSave()\" [disabled]=\"usernameFormControl.hasError('required')\">Chat!</button>\n</md-dialog-actions>\n\n<md-dialog-actions *ngIf=\"params?.typeDialog === 'edit-user'\" [attr.align]=\"'end'\">\n  <button md-button md-dialog-close color=\"secondary\">Close</button>\n  <button md-raised-button color=\"primary\" md-dialog-close (click)=\"onSave()\">Save</button>\n</md-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/dialog-user/dialog-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DialogUserComponent = (function () {
    function DialogUserComponent(dialogRef, params) {
        this.dialogRef = dialogRef;
        this.params = params;
        this.usernameFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required]);
        this.previousUsername = params.username ? params.username : undefined;
    }
    DialogUserComponent.prototype.ngOnInit = function () {
    };
    DialogUserComponent.prototype.onSave = function () {
        this.dialogRef.close({
            username: this.params.username,
            dialogType: this.params.dialogType,
            previousUsername: this.previousUsername
        });
    };
    return DialogUserComponent;
}());
DialogUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'tcc-dialog-user',
        template: __webpack_require__("../../../../../src/app/dialog-user/dialog-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dialog-user/dialog-user.component.css")]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdDialogRef */]) === "function" && _a || Object, Object])
], DialogUserComponent);

var _a;
//# sourceMappingURL=dialog-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Action; });
var Action;
(function (Action) {
    Action[Action["JOINED"] = 0] = "JOINED";
    Action[Action["LEFT"] = 1] = "LEFT";
    Action[Action["RENAME"] = 2] = "RENAME";
})(Action || (Action = {}));
//# sourceMappingURL=action.js.map

/***/ }),

/***/ "../../../../../src/app/shared/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SERVER_URL = 'https://typescript-chat-server.herokuapp.com';
var SocketService = (function () {
    function SocketService() {
    }
    SocketService.prototype.initSocket = function () {
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(SERVER_URL);
    };
    SocketService.prototype.send = function (message) {
        this.socket.emit('message', message);
    };
    SocketService.prototype.onMessage = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
        });
    };
    SocketService.prototype.onConnect = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('connect', function () { return observer.next(); });
        });
    };
    SocketService.prototype.onDisconnect = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('disconnect', function () { return observer.next(); });
        });
    };
    return SocketService;
}());
SocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], SocketService);

//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map