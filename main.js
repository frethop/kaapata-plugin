'use strict';

var obsidian = require('obsidian');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var Configure = /** @class */ (function (_super) {
    __extends(Configure, _super);
    function Configure(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.buttonDiv = Array(6);
        _this.openDiv = Array(6);
        _this.writeDiv = Array(6);
        _this.commandDiv = Array(6);
        _this.cameraDiv = Array(6);
        _this.buttons = Array(6);
        _this.label = Array(6);
        _this.image = Array(6);
        _this.vault = Array(6);
        _this.action = Array(6);
        _this.openChoice = Array(6);
        _this.note = Array(6);
        _this.bookmark = Array(6);
        _this.writeChoice = Array(6);
        _this.notew = Array(6);
        _this.folderw = Array(6);
        _this.modew = Array(6);
        _this.promptw = Array(6);
        _this.command = Array(6);
        _this.commandChoice = Array(6);
        _this.commandNote = Array(6);
        _this.commandBookmark = Array(6);
        _this.cameraFolder = Array(6);
        _this.cameraNote = Array(6);
        _this.app = app;
        _this.plugin = plugin;
        console.log(_this.plugin.settings);
        return _this;
    }
    Configure.prototype.display = function () {
        var _this = this;
        this.numberOfButtons = 6;
        this.json = '{ "shape": "ring", "buttons": [';
        var containerEl = this.containerEl;
        containerEl.empty();
        containerEl.createEl('h1', { text: 'Configure the Ferramenta widget here.' });
        var imagetable = containerEl.createEl('table');
        var imagerow = imagetable.createEl('tr');
        var imagecell = imagerow.createEl('td');
        var img = imagecell.createEl('img', { attr: { src: "http://rizzo.hope.edu/~jipping/ring.png", width: "250px" } });
        imagerow.createEl('td');
        var img2 = imagecell.createEl('img', { attr: { src: "http://rizzo.hope.edu/~jipping/pill.png", width: "250px" } });
        var shapeDropdown = new obsidian.Setting(containerEl)
            .setName('Shape')
            .setDesc('Ring or Pill?')
            .addDropdown(function (drop) { return drop
            .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.shape = value;
                if (value == "Ring") {
                    img.show();
                    img2.hide();
                    this.numberOfButtons = 6;
                    this.json = '{ "shape": "ring", "buttons": [';
                }
                else if (value == "Pill") {
                    img.hide();
                    img2.show();
                    this.numberOfButtons = 3;
                    this.json = '{ "shape": "pill", "buttons": [';
                }
                return [2 /*return*/];
            });
        }); }); });
        shapeDropdown.components[0].addOption("Ring", "Ring");
        shapeDropdown.components[0].addOption("Pill", "Pill");
        var _loop_1 = function (i) {
            // Button config section
            //console.log("Button "+i+" config section");
            this_1.buttons[i] = new obsidian.Setting(containerEl)
                .setName('Use Button #' + (i + 1) + '?')
                .setDesc('Configure button #' + (i + 1) + '.')
                .addToggle(function (toggle) { return toggle
                .setValue(_this.plugin.settings.buttons[i].useButton)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.plugin.settings.buttons[i].useButton = value;
                    if (value) {
                        this.buttonDiv[i].show();
                    }
                    else {
                        this.buttonDiv[i].hide();
                    }
                    return [2 /*return*/];
                });
            }); }); });
            this_1.buttonDiv[i] = containerEl.createDiv();
            this_1.buttonDiv[i].setAttribute("style", "border: 1px solid black; padding: 10px; margin: 10px;");
            this_1.label[i] = new obsidian.Setting(this_1.buttonDiv[i])
                .setName('Label?')
                .setDesc('Give a label for this button.')
                .addText(function (text) { return text
                .setPlaceholder('Label Text')
                .setValue(_this.plugin.settings.buttons[i].label)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.plugin.settings.buttons[i].label = value;
                    return [2 /*return*/];
                });
            }); }); });
            this_1.image[i] = new obsidian.Setting(this_1.buttonDiv[i])
                .setName('Image?')
                .setDesc('Select the image to put on the button.')
                .addText(function (text) { return text
                .setPlaceholder('Path name')
                .setValue(_this.plugin.settings.buttons[i].image)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.plugin.settings.buttons[i].image = value;
                    return [2 /*return*/];
                });
            }); }); });
            this_1.vault[i] = new obsidian.Setting(this_1.buttonDiv[i])
                .setName('Vault?')
                .setDesc('Select the vault to perform the action in.')
                .addText(function (text) { return text
                .setPlaceholder('Vault name')
                .setValue(_this.plugin.settings.buttons[i].vault)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.plugin.settings.buttons[i].vault = value;
                    return [2 /*return*/];
                });
            }); }); });
            this_1.action[i] = new obsidian.Setting(this_1.buttonDiv[i])
                .setName('Action?')
                .setDesc('Select the action to perform.')
                .addDropdown(function (drop) { return drop
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.log(value);
                    this.plugin.settings.buttons[i].action = value;
                    if (value == "open") {
                        this.openDiv[i].show();
                        this.writeDiv[i].hide();
                        this.commandDiv[i].hide();
                        this.cameraDiv[i].hide();
                    }
                    else if (value == "write") {
                        this.openDiv[i].hide();
                        this.writeDiv[i].show();
                        this.commandDiv[i].hide();
                        this.cameraDiv[i].hide();
                    }
                    else if (value == "command") {
                        this.openDiv[i].hide();
                        this.writeDiv[i].hide();
                        this.commandDiv[i].show();
                        this.cameraDiv[i].hide();
                    }
                    else if (value == "camera") {
                        this.openDiv[i].hide();
                        this.writeDiv[i].hide();
                        this.commandDiv[i].hide();
                        this.cameraDiv[i].show();
                    }
                    else if (value == "task") {
                        this.openDiv[i].hide();
                        this.writeDiv[i].hide();
                        this.commandDiv[i].hide();
                        this.cameraDiv[i].hide();
                    }
                    else {
                        this.openDiv[i].hide();
                        this.writeDiv[i].hide();
                        this.commandDiv[i].hide();
                        this.cameraDiv[i].hide();
                    }
                    return [2 /*return*/];
                });
            }); }); });
            this_1.action[i].components[0].addOption("open", "Open");
            this_1.action[i].components[0].addOption("write", "Write");
            this_1.action[i].components[0].addOption("command", "Command");
            this_1.action[i].components[0].addOption("camera", "Camera");
            this_1.action[i].components[0].addOption("task", "Task");
            this_1.action[i].components[0].setValue(this_1.plugin.settings.buttons[i].action);
            // -- Action is Open --
            this_1.openDiv[i] = this_1.buttonDiv[i].createDiv();
            this_1.openChoice[i] = new obsidian.Setting(this_1.openDiv[i])
                .setName('Open Choice?')
                .setDesc('Select the type of note open.')
                .addDropdown(function (drop) { return drop
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.plugin.settings.buttons[i].openChoice = value;
                    if (value == "daily") {
                        this.note[i].settingEl.hide();
                        this.bookmark[i].settingEl.hide();
                    }
                    else if (value == "note") {
                        this.note[i].settingEl.show();
                        this.bookmark[i].settingEl.hide();
                    }
                    else if (value == "bookmark") {
                        this.note[i].settingEl.hide();
                        this.bookmark[i].settingEl.show();
                    }
                    return [2 /*return*/];
                });
            }); }); });
            this_1.openChoice[i].components[0].addOption("daily", "Daily Note");
            this_1.openChoice[i].components[0].addOption("note", "Note");
            this_1.openChoice[i].components[0].addOption("bookmark", "Bookmark");
            this_1.note[i] = new obsidian.Setting(this_1.openDiv[i])
                .setName('Note Name?')
                .setDesc('Select the note to open.')
                .addText(function (text) { return text
                .setPlaceholder('Note name')
                .setValue(_this.plugin.settings.buttons[i].noteName)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.plugin.settings.buttons[i].noteName = value;
                    return [2 /*return*/];
                });
            }); }); });
            this_1.note[i].settingEl.hide();
            this_1.bookmark[i] = new obsidian.Setting(this_1.openDiv[i])
                .setName('Bookmark Name?')
                .setDesc('Select the bookmark to open.')
                .addText(function (text) { return text
                .setPlaceholder('Bookmark name')
                .setValue(_this.plugin.settings.buttons[i].bookmarkName)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.plugin.settings.buttons[i].bookmarkName = value;
                    return [2 /*return*/];
                });
            }); }); });
            this_1.bookmark[i].settingEl.hide();
            var value = this_1.plugin.settings.buttons[i].openChoice;
            this_1.openChoice[i].components[0].setValue(value);
            if (this_1.plugin.settings.buttons[i].action == "open") {
                if (value == "daily") {
                    this_1.note[i].settingEl.hide();
                    this_1.bookmark[i].settingEl.hide();
                }
                else if (value == "note") {
                    this_1.note[i].settingEl.show();
                    this_1.bookmark[i].settingEl.hide();
                }
                else if (value == "bookmark") {
                    this_1.note[i].settingEl.hide();
                    this_1.bookmark[i].settingEl.show();
                }
            }
            // -- Action is Write --
            this_1.writeDiv[i] = this_1.buttonDiv[i].createDiv();
            this_1.writeChoice[i] = new obsidian.Setting(this_1.writeDiv[i])
                .setName('Write Choice?')
                .setDesc('Select the type of note to write.')
                .addDropdown(function (drop) { return drop
                .setValue(_this.plugin.settings.buttons[i].writeChoice)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.log(value);
                    this.plugin.settings.buttons[i].writeChoice = value;
                    if (value == "daily") {
                        this.notew[i].settingEl.hide();
                        this.folderw[i].settingEl.hide();
                    }
                    else if (value == "random") {
                        this.notew[i].settingEl.hide();
                        this.folderw[i].settingEl.show();
                    }
                    else if (value == "specific") {
                        this.notew[i].settingEl.show();
                        this.folderw[i].settingEl.hide();
                    }
                    return [2 /*return*/];
                });
            }); }); });
            this_1.writeChoice[i].components[0].addOption("daily", "Daily Note");
            this_1.writeChoice[i].components[0].addOption("random", "Random Note");
            this_1.writeChoice[i].components[0].addOption("specific", "Specific Note");
            this_1.notew[i] = new obsidian.Setting(this_1.writeDiv[i])
                .setName('Note Name?')
                .setDesc('Select the note to open.')
                .addText(function (text) { return text
                .setPlaceholder('Note name')
                .setValue(_this.plugin.settings.buttons[i].notew)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.plugin.settings.buttons[i].notew = value;
                    return [2 /*return*/];
                });
            }); }); });
            this_1.notew[i].settingEl.hide();
            this_1.folderw[i] = new obsidian.Setting(this_1.writeDiv[i])
                .setName('Folder?')
                .setDesc('Select the folder in which to open the note.')
                .addText(function (text) { return text
                .setPlaceholder('Folder name')
                .setValue(_this.plugin.settings.buttons[i].folderw)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.plugin.settings.buttons[i].folderw = value;
                    return [2 /*return*/];
                });
            }); }); });
            this_1.folderw[i].settingEl.hide();
            this_1.modew[i] = new obsidian.Setting(this_1.writeDiv[i])
                .setName('Writing mode?')
                .setDesc('Select the mode of writing.')
                .addDropdown(function (drop) { return drop
                .setValue(_this.plugin.settings.buttons[i].modew)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.plugin.settings.buttons[i].modew = value;
                    return [2 /*return*/];
                });
            }); }); });
            this_1.modew[i].components[0].addOption("append", "Append");
            this_1.modew[i].components[0].addOption("prepend", "Prepend");
            this_1.modew[i].components[0].addOption("overwrite", "Overwrite");
            this_1.modew[i].components[0].addOption("new", "New");
            this_1.modew[i].components[0].setValue(this_1.plugin.settings.buttons[i].modew);
            this_1.modew[i].settingEl.show();
            this_1.promptw[i] = new obsidian.Setting(this_1.writeDiv[i])
                .setName('Prompt?')
                .setDesc('Prompt to describe the writing.')
                .addText(function (text) { return text
                .setPlaceholder('Prompt')
                .setValue(_this.plugin.settings.buttons[i].promptw)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.plugin.settings.buttons[i].promptw = value;
                    return [2 /*return*/];
                });
            }); }); });
            this_1.promptw[i].settingEl.show();
            value = this_1.plugin.settings.buttons[i].writeChoice;
            this_1.writeChoice[i].components[0].setValue(value);
            if (this_1.plugin.settings.buttons[i].action == "write") {
                if (value == "daily") {
                    this_1.notew[i].settingEl.hide();
                    this_1.folderw[i].settingEl.hide();
                }
                else if (value == "random") {
                    this_1.notew[i].settingEl.hide();
                    this_1.folderw[i].settingEl.show();
                }
                else if (value == "specific") {
                    this_1.notew[i].settingEl.show();
                    this_1.folderw[i].settingEl.hide();
                }
            }
            this_1.writeDiv[i].hide();
            // -- Command -- 
            this_1.commandDiv[i] = this_1.buttonDiv[i].createDiv();
            this_1.command[i] = new obsidian.Setting(this_1.commandDiv[i])
                .setName('Command?')
                .setDesc('Specify the command to execute.')
                .addText(function (text) { return text
                .setPlaceholder('Command')
                .setValue(_this.plugin.settings.buttons[i].command)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.plugin.settings.buttons[i].command = value;
                    value.replace(/ /g, '_');
                    return [2 /*return*/];
                });
            }); }); });
            this_1.commandChoice[i] = new obsidian.Setting(this_1.commandDiv[i])
                .setName('Command with Open Choice?')
                .setDesc('Select the type of note open.')
                .addDropdown(function (drop) { return drop
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.plugin.settings.buttons[i].commmandChoice = value;
                    if (value == "daily") {
                        this.commandNote[i].settingEl.hide();
                        this.commandBookmark[i].settingEl.hide();
                    }
                    else if (value == "note") {
                        this.commandNote[i].settingEl.show();
                        this.commandBookmark[i].settingEl.hide();
                    }
                    else if (value == "bookmark") {
                        this.commandNote[i].settingEl.hide();
                        this.commandBookmark[i].settingEl.show();
                    }
                    return [2 /*return*/];
                });
            }); }); });
            this_1.commandChoice[i].components[0].addOption("daily", "Daily Note");
            this_1.commandChoice[i].components[0].addOption("note", "Note");
            this_1.commandChoice[i].components[0].addOption("bookmark", "Bookmark");
            this_1.commandChoice[i].components[0].setValue(this_1.plugin.settings.buttons[i].commmandChoice);
            this_1.commandNote[i] = new obsidian.Setting(this_1.commandDiv[i])
                .setName('Note Name?')
                .setDesc('Select the note to open.')
                .addText(function (text) { return text
                .setPlaceholder('Note name')
                .setValue(_this.plugin.settings.buttons[i].commandNote)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.plugin.settings.buttons[i].commandNote = value;
                    return [2 /*return*/];
                });
            }); }); });
            this_1.commandNote[i].settingEl.hide();
            this_1.commandBookmark[i] = new obsidian.Setting(this_1.commandDiv[i])
                .setName('Bookmark Name?')
                .setDesc('Select the bookmark to open.')
                .addText(function (text) { return text
                .setPlaceholder('Bookmark name')
                .setValue(_this.plugin.settings.buttons[i].commandBookmark)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.plugin.settings.buttons[i].commandBookmark = value;
                    return [2 /*return*/];
                });
            }); }); });
            this_1.commandBookmark[i].settingEl.hide();
            value = this_1.plugin.settings.buttons[i].commmandChoice;
            if (value == "daily") {
                this_1.commandNote[i].settingEl.hide();
                this_1.commandBookmark[i].settingEl.hide();
            }
            else if (value == "note") {
                this_1.commandNote[i].settingEl.show();
                this_1.commandBookmark[i].settingEl.hide();
            }
            else if (value == "bookmark") {
                this_1.commandNote[i].settingEl.hide();
                this_1.commandBookmark[i].settingEl.show();
            }
            this_1.commandDiv[i].hide();
            // -- Camera -- 
            this_1.cameraDiv[i] = this_1.buttonDiv[i].createDiv();
            this_1.cameraFolder[i] = new obsidian.Setting(this_1.cameraDiv[i])
                .setName('Folder?')
                .setDesc('Select the folder in which to deposit the image.')
                .addText(function (text) { return text
                .setPlaceholder('Folder name')
                .setValue(_this.plugin.settings.buttons[i].cameraFolder)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.plugin.settings.buttons[i].cameraFolder = value;
                    return [2 /*return*/];
                });
            }); }); });
            //this.cameraFolder[i].settingEl.hide();
            this_1.cameraNote[i] = new obsidian.Setting(this_1.cameraDiv[i])
                .setName('Note Name?')
                .setDesc('Select the note to create.')
                .addText(function (text) { return text
                .setPlaceholder('Note name')
                .setValue(_this.plugin.settings.buttons[i].cameraNote)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.plugin.settings.buttons[i].cameraNote = value;
                    return [2 /*return*/];
                });
            }); }); });
            //this.cameraNote[i].settingEl.hide();
            this_1.cameraDiv[i].hide();
            if (this_1.plugin.settings.buttons[i].useButton) {
                this_1.buttonDiv[i].show();
                value = this_1.plugin.settings.buttons[i].action;
                if (value == "open") {
                    this_1.openDiv[i].show();
                    this_1.writeDiv[i].hide();
                    this_1.commandDiv[i].hide();
                    this_1.cameraDiv[i].hide();
                }
                else if (value == "write") {
                    this_1.openDiv[i].hide();
                    this_1.writeDiv[i].show();
                    this_1.commandDiv[i].hide();
                    this_1.cameraDiv[i].hide();
                }
                else if (value == "command") {
                    this_1.openDiv[i].hide();
                    this_1.writeDiv[i].hide();
                    this_1.commandDiv[i].show();
                    this_1.cameraDiv[i].hide();
                }
                else if (value == "camera") {
                    this_1.openDiv[i].hide();
                    this_1.writeDiv[i].hide();
                    this_1.commandDiv[i].hide();
                    this_1.cameraDiv[i].show();
                }
                else if (value == "task") {
                    this_1.openDiv[i].hide();
                    this_1.writeDiv[i].hide();
                    this_1.commandDiv[i].hide();
                    this_1.cameraDiv[i].hide();
                }
                else {
                    this_1.openDiv[i].hide();
                    this_1.writeDiv[i].hide();
                    this_1.commandDiv[i].hide();
                    this_1.cameraDiv[i].hide();
                }
            }
            else {
                this_1.buttonDiv[i].hide();
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.numberOfButtons; i++) {
            _loop_1(i);
        }
    };
    Configure.prototype.hide = function () {
        return __awaiter(this, void 0, void 0, function () {
            var value, i, value_1, str, taf, jsonfile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Saving settings");
                        this.plugin.saveData(this.plugin.settings);
                        this.plugin.saveSettings();
                        console.log(this.plugin.settings);
                        console.log("Generating JSON");
                        value = this.plugin.settings.shape;
                        if (value == "ring") {
                            this.json = '{ "shape": "ring", "buttons": [';
                            this.numberOfButtons = 6;
                        }
                        else if (value == "pill") {
                            this.json = '{ "shape": "pill", "buttons": [';
                            this.numberOfButtons = 3;
                        }
                        else {
                            this.json = '{ "shape": "error" }';
                            this.numberOfButtons = 0;
                        }
                        for (i = 0; i < this.numberOfButtons; i++) {
                            if (this.plugin.settings.buttons[i].useButton) {
                                this.json += '{ "button": ' + (i + 1) + ', ';
                                this.json += '"label": "' + this.plugin.settings.buttons[i].label + '", ';
                                this.json += '"image": "' + this.plugin.settings.buttons[i].image + '", ';
                                this.json += '"vault": "' + this.plugin.settings.buttons[i].vault + '", ';
                                // Action = "open"
                                if (this.plugin.settings.buttons[i].action == "open") {
                                    this.json += '"action": "' + this.plugin.settings.buttons[i].action + ' ';
                                    //this.json += '"'+this.plugin.settings.buttons[i].openChoice+'", ';	
                                    if (this.plugin.settings.buttons[i].openChoice == "daily") {
                                        this.json += 'daily"';
                                    }
                                    else if (this.plugin.settings.buttons[i].openChoice == "note") {
                                        this.json += this.plugin.settings.buttons[i].noteName + '"';
                                    }
                                    else if (this.plugin.settings.buttons[i].openChoice == "bookmark") {
                                        this.json += 'bookmark ' + this.plugin.settings.buttons[i].bookmarkName + '"';
                                    }
                                    // Action = "write"
                                }
                                else if (this.plugin.settings.buttons[i].action == "write") {
                                    this.json += '"action": "' + this.plugin.settings.buttons[i].action + ' ';
                                    //this.json += '"'+this.plugin.settings.buttons[i].writeChoice+'", ';	
                                    if (this.plugin.settings.buttons[i].openChoice == "daily") {
                                        this.json += 'daily"';
                                    }
                                    else if (this.plugin.settings.buttons[i].writeChoice == "specific") {
                                        this.json += this.plugin.settings.buttons[i].notew + '", ';
                                    }
                                    else if (this.plugin.settings.buttons[i].writeChoice == "random") {
                                        this.json += '"folder": "' + this.plugin.settings.buttons[i].folderw + '", ';
                                    }
                                    this.json += '"mode": "' + this.plugin.settings.buttons[i].modew + '", ';
                                    this.json += '"prompt": "' + this.plugin.settings.buttons[i].promptw + '"';
                                    // Action = "command"
                                }
                                else if (this.plugin.settings.buttons[i].action == "command") {
                                    value_1 = this.plugin.settings.buttons[i].command;
                                    str = value_1.replace(/ /g, '_');
                                    this.json += '"command": "' + str;
                                    if (this.plugin.settings.buttons[i].commmandChoice == "daily") {
                                        this.json += ' daily"';
                                    }
                                    else if (this.plugin.settings.buttons[i].commmandChoice == "note") {
                                        this.json += this.plugin.settings.buttons[i].commandNote + '"';
                                    }
                                    else if (this.plugin.settings.buttons[i].commmandChoice == "bookmark") {
                                        this.json += ' bookmark ' + this.plugin.settings.buttons[i].commandBookmark + '"';
                                    }
                                    // Action = "camera"
                                }
                                else if (this.plugin.settings.buttons[i].action == "camera") {
                                    this.json += '"folder": "' + this.plugin.settings.buttons[i].cameraFolder + '", ';
                                    this.json += '"note": "' + this.plugin.settings.buttons[i].cameraNote + '"';
                                }
                                this.json += "},";
                            }
                        }
                        this.json += ']}';
                        console.log(this.json);
                        taf = this.app.vault.getAbstractFileByPath("kaapata.json");
                        return [4 /*yield*/, this.app.vault.delete(taf)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.app.vault.create("kaapata.json", this.json)];
                    case 2:
                        jsonfile = _a.sent();
                        console.log(jsonfile);
                        return [2 /*return*/];
                }
            });
        });
    };
    Configure.prototype.fileExists = function (fileName, folder) {
        var file = folder.children.find(function (afile) { return afile.name === fileName; });
        return (file !== undefined);
    };
    return Configure;
}(obsidian.PluginSettingTab));

var DEFAULT_SETTINGS = {
    shape: "ring",
    buttons: [
        {
            useButton: false,
            label: "Button Label",
            image: "",
            vault: "Vault",
            action: "open",
            openChoice: "note",
            noteName: "Note Name",
            bookmarkName: "Bookmark Name",
            writeChoice: "note",
            notew: "Note Name",
            folderw: "Folder Name",
            modew: "Mode",
            promptw: "Prompt",
            command: "Command",
            commmandChoice: "note",
            commandNote: "Note Name",
            commandBookmark: "Bookmark Name",
            cameraFolder: "Folder Name",
            cameraNote: "Note Name"
        },
        {
            useButton: false,
            label: "Button Label",
            image: "",
            vault: "Vault",
            action: "open",
            openChoice: "note",
            noteName: "Note Name",
            bookmarkName: "Bookmark Name",
            writeChoice: "note",
            notew: "Note Name",
            folderw: "Folder Name",
            modew: "Mode",
            promptw: "Prompt",
            command: "Command",
            commmandChoice: "note",
            commandNote: "Note Name",
            commandBookmark: "Bookmark Name",
            cameraFolder: "Folder Name",
            cameraNote: "Note Name"
        },
        {
            useButton: false,
            label: "Button Label",
            image: "",
            vault: "Vault",
            action: "open",
            openChoice: "note",
            noteName: "Note Name",
            bookmarkName: "Bookmark Name",
            writeChoice: "note",
            notew: "Note Name",
            folderw: "Folder Name",
            modew: "Mode",
            promptw: "Prompt",
            command: "Command",
            commmandChoice: "note",
            commandNote: "Note Name",
            commandBookmark: "Bookmark Name",
            cameraFolder: "Folder Name",
            cameraNote: "Note Name"
        },
        {
            useButton: false,
            label: "Button Label",
            image: "",
            vault: "Vault",
            action: "open",
            openChoice: "note",
            noteName: "Note Name",
            bookmarkName: "Bookmark Name",
            writeChoice: "note",
            notew: "Note Name",
            folderw: "Folder Name",
            modew: "Mode",
            promptw: "Prompt",
            command: "Command",
            commmandChoice: "note",
            commandNote: "Note Name",
            commandBookmark: "Bookmark Name",
            cameraFolder: "Folder Name",
            cameraNote: "Note Name"
        },
        {
            useButton: false,
            label: "Button Label",
            image: "",
            vault: "Vault",
            action: "open",
            openChoice: "note",
            noteName: "Note Name",
            bookmarkName: "Bookmark Name",
            writeChoice: "note",
            notew: "Note Name",
            folderw: "Folder Name",
            modew: "Mode",
            promptw: "Prompt",
            command: "Command",
            commmandChoice: "note",
            commandNote: "Note Name",
            commandBookmark: "Bookmark Name",
            cameraFolder: "Folder Name",
            cameraNote: "Note Name"
        },
        {
            useButton: false,
            label: "Button Label",
            image: "",
            vault: "Vault",
            action: "open",
            openChoice: "note",
            noteName: "Note Name",
            bookmarkName: "Bookmark Name",
            writeChoice: "note",
            notew: "Note Name",
            folderw: "Folder Name",
            modew: "Mode",
            promptw: "Prompt",
            command: "Command",
            commmandChoice: "note",
            commandNote: "Note Name",
            commandBookmark: "Bookmark Name",
            cameraFolder: "Folder Name",
            cameraNote: "Note Name"
        }
    ]
};
var Ferramenta = /** @class */ (function (_super) {
    __extends(Ferramenta, _super);
    function Ferramenta() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.version = "0.0.1 (12282023)";
        return _this;
    }
    Ferramenta.prototype.onInit = function () {
    };
    Ferramenta.prototype.onload = function () {
        console.log('loading Ferramenta plugin, version ' + this.version);
        this.loadSettings();
        this.addSettingTab(new Configure(this.app, this));
    };
    Ferramenta.prototype.onunload = function () {
        console.log('unloading plugin');
    };
    Ferramenta.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        _c = (_b = Object).assign;
                        _d = [{}, DEFAULT_SETTINGS];
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = _c.apply(_b, _d.concat([_e.sent()]));
                        return [2 /*return*/];
                }
            });
        });
    };
    Ferramenta.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Ferramenta;
}(obsidian.Plugin));

module.exports = Ferramenta;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIkNvbmZpZ3VyZS50cyIsIm1haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlLCBTdXBwcmVzc2VkRXJyb3IsIFN5bWJvbCAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19lc0RlY29yYXRlKGN0b3IsIGRlc2NyaXB0b3JJbiwgZGVjb3JhdG9ycywgY29udGV4dEluLCBpbml0aWFsaXplcnMsIGV4dHJhSW5pdGlhbGl6ZXJzKSB7XHJcbiAgICBmdW5jdGlvbiBhY2NlcHQoZikgeyBpZiAoZiAhPT0gdm9pZCAwICYmIHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGdW5jdGlvbiBleHBlY3RlZFwiKTsgcmV0dXJuIGY7IH1cclxuICAgIHZhciBraW5kID0gY29udGV4dEluLmtpbmQsIGtleSA9IGtpbmQgPT09IFwiZ2V0dGVyXCIgPyBcImdldFwiIDoga2luZCA9PT0gXCJzZXR0ZXJcIiA/IFwic2V0XCIgOiBcInZhbHVlXCI7XHJcbiAgICB2YXIgdGFyZ2V0ID0gIWRlc2NyaXB0b3JJbiAmJiBjdG9yID8gY29udGV4dEluW1wic3RhdGljXCJdID8gY3RvciA6IGN0b3IucHJvdG90eXBlIDogbnVsbDtcclxuICAgIHZhciBkZXNjcmlwdG9yID0gZGVzY3JpcHRvckluIHx8ICh0YXJnZXQgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgY29udGV4dEluLm5hbWUpIDoge30pO1xyXG4gICAgdmFyIF8sIGRvbmUgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbikgY29udGV4dFtwXSA9IHAgPT09IFwiYWNjZXNzXCIgPyB7fSA6IGNvbnRleHRJbltwXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbi5hY2Nlc3MpIGNvbnRleHQuYWNjZXNzW3BdID0gY29udGV4dEluLmFjY2Vzc1twXTtcclxuICAgICAgICBjb250ZXh0LmFkZEluaXRpYWxpemVyID0gZnVuY3Rpb24gKGYpIHsgaWYgKGRvbmUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgYWRkIGluaXRpYWxpemVycyBhZnRlciBkZWNvcmF0aW9uIGhhcyBjb21wbGV0ZWRcIik7IGV4dHJhSW5pdGlhbGl6ZXJzLnB1c2goYWNjZXB0KGYgfHwgbnVsbCkpOyB9O1xyXG4gICAgICAgIHZhciByZXN1bHQgPSAoMCwgZGVjb3JhdG9yc1tpXSkoa2luZCA9PT0gXCJhY2Nlc3NvclwiID8geyBnZXQ6IGRlc2NyaXB0b3IuZ2V0LCBzZXQ6IGRlc2NyaXB0b3Iuc2V0IH0gOiBkZXNjcmlwdG9yW2tleV0sIGNvbnRleHQpO1xyXG4gICAgICAgIGlmIChraW5kID09PSBcImFjY2Vzc29yXCIpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCB0eXBlb2YgcmVzdWx0ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkXCIpO1xyXG4gICAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuZ2V0KSkgZGVzY3JpcHRvci5nZXQgPSBfO1xyXG4gICAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuc2V0KSkgZGVzY3JpcHRvci5zZXQgPSBfO1xyXG4gICAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuaW5pdCkpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChfID0gYWNjZXB0KHJlc3VsdCkpIHtcclxuICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwiZmllbGRcIikgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XHJcbiAgICAgICAgICAgIGVsc2UgZGVzY3JpcHRvcltrZXldID0gXztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGFyZ2V0KSBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSwgZGVzY3JpcHRvcik7XHJcbiAgICBkb25lID0gdHJ1ZTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3J1bkluaXRpYWxpemVycyh0aGlzQXJnLCBpbml0aWFsaXplcnMsIHZhbHVlKSB7XHJcbiAgICB2YXIgdXNlVmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5pdGlhbGl6ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFsdWUgPSB1c2VWYWx1ZSA/IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcsIHZhbHVlKSA6IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVzZVZhbHVlID8gdmFsdWUgOiB2b2lkIDA7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wcm9wS2V5KHgpIHtcclxuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIiA/IHggOiBcIlwiLmNvbmNhdCh4KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NldEZ1bmN0aW9uTmFtZShmLCBuYW1lLCBwcmVmaXgpIHtcclxuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIikgbmFtZSA9IG5hbWUuZGVzY3JpcHRpb24gPyBcIltcIi5jb25jYXQobmFtZS5kZXNjcmlwdGlvbiwgXCJdXCIpIDogXCJcIjtcclxuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZiwgXCJuYW1lXCIsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogcHJlZml4ID8gXCJcIi5jb25jYXQocHJlZml4LCBcIiBcIiwgbmFtZSkgOiBuYW1lIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xyXG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcclxuICAgICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcclxuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogZmFsc2UgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4oc3RhdGUsIHJlY2VpdmVyKSB7XHJcbiAgICBpZiAocmVjZWl2ZXIgPT09IG51bGwgfHwgKHR5cGVvZiByZWNlaXZlciAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcmVjZWl2ZXIgIT09IFwiZnVuY3Rpb25cIikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlICdpbicgb3BlcmF0b3Igb24gbm9uLW9iamVjdFwiKTtcclxuICAgIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZShlbnYsIHZhbHVlLCBhc3luYykge1xyXG4gICAgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB2b2lkIDApIHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkLlwiKTtcclxuICAgICAgICB2YXIgZGlzcG9zZTtcclxuICAgICAgICBpZiAoYXN5bmMpIHtcclxuICAgICAgICAgICAgaWYgKCFTeW1ib2wuYXN5bmNEaXNwb3NlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jRGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuYXN5bmNEaXNwb3NlXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRpc3Bvc2UgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICBpZiAoIVN5bWJvbC5kaXNwb3NlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmRpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgICAgICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmRpc3Bvc2VdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGRpc3Bvc2UgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBub3QgZGlzcG9zYWJsZS5cIik7XHJcbiAgICAgICAgZW52LnN0YWNrLnB1c2goeyB2YWx1ZTogdmFsdWUsIGRpc3Bvc2U6IGRpc3Bvc2UsIGFzeW5jOiBhc3luYyB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGFzeW5jKSB7XHJcbiAgICAgICAgZW52LnN0YWNrLnB1c2goeyBhc3luYzogdHJ1ZSB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxudmFyIF9TdXBwcmVzc2VkRXJyb3IgPSB0eXBlb2YgU3VwcHJlc3NlZEVycm9yID09PSBcImZ1bmN0aW9uXCIgPyBTdXBwcmVzc2VkRXJyb3IgOiBmdW5jdGlvbiAoZXJyb3IsIHN1cHByZXNzZWQsIG1lc3NhZ2UpIHtcclxuICAgIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIGUubmFtZSA9IFwiU3VwcHJlc3NlZEVycm9yXCIsIGUuZXJyb3IgPSBlcnJvciwgZS5zdXBwcmVzc2VkID0gc3VwcHJlc3NlZCwgZTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2Rpc3Bvc2VSZXNvdXJjZXMoZW52KSB7XHJcbiAgICBmdW5jdGlvbiBmYWlsKGUpIHtcclxuICAgICAgICBlbnYuZXJyb3IgPSBlbnYuaGFzRXJyb3IgPyBuZXcgX1N1cHByZXNzZWRFcnJvcihlLCBlbnYuZXJyb3IsIFwiQW4gZXJyb3Igd2FzIHN1cHByZXNzZWQgZHVyaW5nIGRpc3Bvc2FsLlwiKSA6IGU7XHJcbiAgICAgICAgZW52Lmhhc0Vycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICAgICAgd2hpbGUgKGVudi5zdGFjay5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIHJlYyA9IGVudi5zdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZWMuZGlzcG9zZSAmJiByZWMuZGlzcG9zZS5jYWxsKHJlYy52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVjLmFzeW5jKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCkudGhlbihuZXh0LCBmdW5jdGlvbihlKSB7IGZhaWwoZSk7IHJldHVybiBuZXh0KCk7IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBmYWlsKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbnYuaGFzRXJyb3IpIHRocm93IGVudi5lcnJvcjtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIF9fZXh0ZW5kczogX19leHRlbmRzLFxyXG4gICAgX19hc3NpZ246IF9fYXNzaWduLFxyXG4gICAgX19yZXN0OiBfX3Jlc3QsXHJcbiAgICBfX2RlY29yYXRlOiBfX2RlY29yYXRlLFxyXG4gICAgX19wYXJhbTogX19wYXJhbSxcclxuICAgIF9fbWV0YWRhdGE6IF9fbWV0YWRhdGEsXHJcbiAgICBfX2F3YWl0ZXI6IF9fYXdhaXRlcixcclxuICAgIF9fZ2VuZXJhdG9yOiBfX2dlbmVyYXRvcixcclxuICAgIF9fY3JlYXRlQmluZGluZzogX19jcmVhdGVCaW5kaW5nLFxyXG4gICAgX19leHBvcnRTdGFyOiBfX2V4cG9ydFN0YXIsXHJcbiAgICBfX3ZhbHVlczogX192YWx1ZXMsXHJcbiAgICBfX3JlYWQ6IF9fcmVhZCxcclxuICAgIF9fc3ByZWFkOiBfX3NwcmVhZCxcclxuICAgIF9fc3ByZWFkQXJyYXlzOiBfX3NwcmVhZEFycmF5cyxcclxuICAgIF9fc3ByZWFkQXJyYXk6IF9fc3ByZWFkQXJyYXksXHJcbiAgICBfX2F3YWl0OiBfX2F3YWl0LFxyXG4gICAgX19hc3luY0dlbmVyYXRvcjogX19hc3luY0dlbmVyYXRvcixcclxuICAgIF9fYXN5bmNEZWxlZ2F0b3I6IF9fYXN5bmNEZWxlZ2F0b3IsXHJcbiAgICBfX2FzeW5jVmFsdWVzOiBfX2FzeW5jVmFsdWVzLFxyXG4gICAgX19tYWtlVGVtcGxhdGVPYmplY3Q6IF9fbWFrZVRlbXBsYXRlT2JqZWN0LFxyXG4gICAgX19pbXBvcnRTdGFyOiBfX2ltcG9ydFN0YXIsXHJcbiAgICBfX2ltcG9ydERlZmF1bHQ6IF9faW1wb3J0RGVmYXVsdCxcclxuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQ6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQsXHJcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0OiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0LFxyXG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEluOiBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4sXHJcbiAgICBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZTogX19hZGREaXNwb3NhYmxlUmVzb3VyY2UsXHJcbiAgICBfX2Rpc3Bvc2VSZXNvdXJjZXM6IF9fZGlzcG9zZVJlc291cmNlcyxcclxufTtcclxuIiwiaW1wb3J0IHsgQXBwLCBCdXR0b25Db21wb25lbnQsIERyb3Bkb3duQ29tcG9uZW50LCBNb2RhbCwgTm90aWNlLCBQbHVnaW4sIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcsIFRGaWxlLCBURm9sZGVyLCBUb2dnbGVDb21wb25lbnQgfSBmcm9tICdvYnNpZGlhbic7XG5cbmltcG9ydCBGZXJyYW1lbnRhICBmcm9tICcuL21haW4nO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlndXJlIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG5cblx0cGx1Z2luOiBGZXJyYW1lbnRhO1xuXHRhcHAgOiBBcHA7XG5cblx0c2hhcGU6IHN0cmluZztcblx0bnVtYmVyT2ZCdXR0b25zOiBudW1iZXI7XG5cblx0c2hhcGVEcm9wZG93bjogRHJvcGRvd25Db21wb25lbnQ7XG5cblx0XG5cdGJ1dHRvbkRpdjogSFRNTERpdkVsZW1lbnRbXSA9IEFycmF5KDYpO1xuXHRvcGVuRGl2OiBIVE1MRGl2RWxlbWVudFtdID0gQXJyYXkoNik7XG5cdHdyaXRlRGl2OiBIVE1MRGl2RWxlbWVudFtdID0gQXJyYXkoNik7XG5cdGNvbW1hbmREaXY6IEhUTUxEaXZFbGVtZW50W10gPSBBcnJheSg2KTtcblx0Y2FtZXJhRGl2OiBIVE1MRGl2RWxlbWVudFtdID0gQXJyYXkoNik7XG5cdFxuXHRidXR0b25zOiBTZXR0aW5nW10gPSBBcnJheSg2KTtcblx0bGFiZWw6IFNldHRpbmdbXSA9IEFycmF5KDYpO1xuXHRpbWFnZTogU2V0dGluZ1tdID0gQXJyYXkoNik7XG5cdHZhdWx0OiBTZXR0aW5nW10gPSBBcnJheSg2KTtcblx0YWN0aW9uOiBTZXR0aW5nW10gPSBBcnJheSg2KTtcblx0b3BlbkNob2ljZTogU2V0dGluZ1tdID0gQXJyYXkoNik7XG5cdG5vdGU6IFNldHRpbmdbXSA9IEFycmF5KDYpO1xuXHRib29rbWFyazogU2V0dGluZ1tdID0gQXJyYXkoNik7XG5cdHdyaXRlQ2hvaWNlOiBTZXR0aW5nW10gPSBBcnJheSg2KTtcblx0bm90ZXc6IFNldHRpbmdbXSA9IEFycmF5KDYpO1x0XG5cdGZvbGRlcnc6IFNldHRpbmdbXSA9IEFycmF5KDYpO1x0XG5cdG1vZGV3OiBTZXR0aW5nW10gPSBBcnJheSg2KTtcdFxuXHRwcm9tcHR3OiBTZXR0aW5nW10gPSBBcnJheSg2KTtcblx0Y29tbWFuZDogU2V0dGluZ1tdID0gQXJyYXkoNik7XG5cdGNvbW1hbmRDaG9pY2U6IFNldHRpbmdbXSA9IEFycmF5KDYpO1xuXHRjb21tYW5kTm90ZTogU2V0dGluZ1tdID0gQXJyYXkoNik7XG5cdGNvbW1hbmRCb29rbWFyazogU2V0dGluZ1tdID0gQXJyYXkoNik7XG5cdGNhbWVyYUZvbGRlcjogU2V0dGluZ1tdID0gQXJyYXkoNik7XG5cdGNhbWVyYU5vdGU6IFNldHRpbmdbXSA9IEFycmF5KDYpO1xuXG5cdGpzb246IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBGZXJyYW1lbnRhKSB7XG5cdFx0c3VwZXIoYXBwLCBwbHVnaW4pO1xuXHRcdHRoaXMuYXBwID0gYXBwO1xuXHRcdHRoaXMucGx1Z2luID0gcGx1Z2luO1xuXG5cdFx0Y29uc29sZS5sb2codGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xuXHR9XG5cblx0ZGlzcGxheSgpOiB2b2lkIHtcblx0XHR0aGlzLm51bWJlck9mQnV0dG9ucyA9IDY7XG5cdFx0dGhpcy5qc29uID0gJ3sgXCJzaGFwZVwiOiBcInJpbmdcIiwgXCJidXR0b25zXCI6IFsnO1x0XG5cblx0XHRsZXQge2NvbnRhaW5lckVsfSA9IHRoaXM7XG5cblx0XHRjb250YWluZXJFbC5lbXB0eSgpO1xuXG5cdFx0Y29udGFpbmVyRWwuY3JlYXRlRWwoJ2gxJywge3RleHQ6ICdDb25maWd1cmUgdGhlIEZlcnJhbWVudGEgd2lkZ2V0IGhlcmUuJ30pO1xuXG5cdFx0bGV0IGltYWdldGFibGUgPSBjb250YWluZXJFbC5jcmVhdGVFbCgndGFibGUnKTtcblx0XHRsZXQgaW1hZ2Vyb3cgPSBpbWFnZXRhYmxlLmNyZWF0ZUVsKCd0cicpO1xuXHRcdGxldCBpbWFnZWNlbGwgPSBpbWFnZXJvdy5jcmVhdGVFbCgndGQnKTtcblx0XHRsZXQgaW1nID0gaW1hZ2VjZWxsLmNyZWF0ZUVsKCdpbWcnLCBcblx0XHQgICB7YXR0cjoge3NyYzogXCJodHRwOi8vcml6em8uaG9wZS5lZHUvfmppcHBpbmcvcmluZy5wbmdcIiwgd2lkdGg6IFwiMjUwcHhcIn19KTtcblx0ICAgbGV0IGltYWdlY2VsbDIgPSBpbWFnZXJvdy5jcmVhdGVFbCgndGQnKTtcblx0XHQgICBsZXQgaW1nMiA9IGltYWdlY2VsbC5jcmVhdGVFbCgnaW1nJywgXG5cdFx0XHQgIHthdHRyOiB7c3JjOiBcImh0dHA6Ly9yaXp6by5ob3BlLmVkdS9+amlwcGluZy9waWxsLnBuZ1wiLCB3aWR0aDogXCIyNTBweFwifX0pO1xuICAgXG5cdFx0bGV0IHNoYXBlRHJvcGRvd24gPSBuZXcgU2V0dGluZyhjb250YWluZXJFbClcblx0XHRcdC5zZXROYW1lKCdTaGFwZScpXG5cdFx0XHQuc2V0RGVzYygnUmluZyBvciBQaWxsPycpXG5cdFx0XHQuYWRkRHJvcGRvd24oZHJvcCA9PiBkcm9wXG5cdFx0XHRcdC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcblx0XHRcdFx0XHR0aGlzLnNoYXBlID0gdmFsdWU7XG5cdFx0XHRcdFx0aWYgKHZhbHVlID09IFwiUmluZ1wiKSB7XG5cdFx0XHRcdFx0XHRpbWcuc2hvdygpO1xuXHRcdFx0XHRcdFx0aW1nMi5oaWRlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLm51bWJlck9mQnV0dG9ucyA9IDY7XG5cdFx0XHRcdFx0XHR0aGlzLmpzb24gPSAneyBcInNoYXBlXCI6IFwicmluZ1wiLCBcImJ1dHRvbnNcIjogWyc7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh2YWx1ZSA9PSBcIlBpbGxcIikge1xuXHRcdFx0XHRcdFx0aW1nLmhpZGUoKTtcblx0XHRcdFx0XHRcdGltZzIuc2hvdygpO1xuXHRcdFx0XHRcdFx0dGhpcy5udW1iZXJPZkJ1dHRvbnMgPSAzO1xuXHRcdFx0XHRcdFx0dGhpcy5qc29uID0gJ3sgXCJzaGFwZVwiOiBcInBpbGxcIiwgXCJidXR0b25zXCI6IFsnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0KHNoYXBlRHJvcGRvd24uY29tcG9uZW50c1swXSBhcyBEcm9wZG93bkNvbXBvbmVudCkuYWRkT3B0aW9uKFwiUmluZ1wiLCBcIlJpbmdcIik7XG5cdFx0KHNoYXBlRHJvcGRvd24uY29tcG9uZW50c1swXSBhcyBEcm9wZG93bkNvbXBvbmVudCkuYWRkT3B0aW9uKFwiUGlsbFwiLCBcIlBpbGxcIik7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZCdXR0b25zOyBpKyspIHtcblx0XHQvLyBCdXR0b24gY29uZmlnIHNlY3Rpb25cblx0XHQvL2NvbnNvbGUubG9nKFwiQnV0dG9uIFwiK2krXCIgY29uZmlnIHNlY3Rpb25cIik7XG5cdFx0dGhpcy5idXR0b25zW2ldID0gbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG5cdFx0XHQuc2V0TmFtZSgnVXNlIEJ1dHRvbiAjJysoaSsxKSsnPycpXG5cdFx0XHQuc2V0RGVzYygnQ29uZmlndXJlIGJ1dHRvbiAjJysoaSsxKSsnLicpXG5cdFx0XHQuYWRkVG9nZ2xlKHRvZ2dsZSA9PiB0b2dnbGVcblx0XHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0udXNlQnV0dG9uKVxuXHRcdFx0XHQub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS51c2VCdXR0b24gPSB2YWx1ZTtcblx0XHRcdFx0XHRpZiAodmFsdWUpIHtcblx0XHRcdFx0XHRcdHRoaXMuYnV0dG9uRGl2W2ldLnNob3coKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5idXR0b25EaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0XG5cdFx0dGhpcy5idXR0b25EaXZbaV0gPSBjb250YWluZXJFbC5jcmVhdGVEaXYoKTtcblx0XHR0aGlzLmJ1dHRvbkRpdltpXS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyBwYWRkaW5nOiAxMHB4OyBtYXJnaW46IDEwcHg7XCIpO1xuXHRcdHRoaXMubGFiZWxbaV0gPSBuZXcgU2V0dGluZyh0aGlzLmJ1dHRvbkRpdltpXSlcblx0XHRcdC5zZXROYW1lKCdMYWJlbD8nKVxuXHRcdFx0LnNldERlc2MoJ0dpdmUgYSBsYWJlbCBmb3IgdGhpcyBidXR0b24uJylcblx0XHRcdC5hZGRUZXh0KHRleHQgPT4gdGV4dFxuXHRcdFx0XHQuc2V0UGxhY2Vob2xkZXIoJ0xhYmVsIFRleHQnKVxuXHRcdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5sYWJlbClcblx0XHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0ubGFiZWwgPSB2YWx1ZTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0dGhpcy5pbWFnZVtpXSA9IG5ldyBTZXR0aW5nKHRoaXMuYnV0dG9uRGl2W2ldKVxuXHRcdFx0LnNldE5hbWUoJ0ltYWdlPycpXG5cdFx0XHQuc2V0RGVzYygnU2VsZWN0IHRoZSBpbWFnZSB0byBwdXQgb24gdGhlIGJ1dHRvbi4nKVxuXHRcdFx0LmFkZFRleHQodGV4dCA9PiB0ZXh0XG5cdFx0XHRcdC5zZXRQbGFjZWhvbGRlcignUGF0aCBuYW1lJylcblx0XHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uaW1hZ2UpXG5cdFx0XHRcdC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmltYWdlID0gdmFsdWU7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdFx0dGhpcy52YXVsdFtpXSA9IG5ldyBTZXR0aW5nKHRoaXMuYnV0dG9uRGl2W2ldKVxuXHRcdFx0LnNldE5hbWUoJ1ZhdWx0PycpXG5cdFx0XHQuc2V0RGVzYygnU2VsZWN0IHRoZSB2YXVsdCB0byBwZXJmb3JtIHRoZSBhY3Rpb24gaW4uJylcblx0XHRcdC5hZGRUZXh0KHRleHQgPT4gdGV4dFxuXHRcdFx0XHQuc2V0UGxhY2Vob2xkZXIoJ1ZhdWx0IG5hbWUnKVxuXHRcdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS52YXVsdClcblx0XHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0udmF1bHQgPSB2YWx1ZTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cblx0XHR0aGlzLmFjdGlvbltpXSA9IG5ldyBTZXR0aW5nKHRoaXMuYnV0dG9uRGl2W2ldKVxuXHRcdFx0LnNldE5hbWUoJ0FjdGlvbj8nKVxuXHRcdFx0LnNldERlc2MoJ1NlbGVjdCB0aGUgYWN0aW9uIHRvIHBlcmZvcm0uJylcblx0XHRcdC5hZGREcm9wZG93bihkcm9wID0+IGRyb3Bcblx0XHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmFjdGlvbiA9IHZhbHVlO1xuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PSBcIm9wZW5cIikge1xuXHRcdFx0XHRcdFx0dGhpcy5vcGVuRGl2W2ldLnNob3coKTtcblx0XHRcdFx0XHRcdHRoaXMud3JpdGVEaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy5jb21tYW5kRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0XHRcdHRoaXMuY2FtZXJhRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHZhbHVlID09IFwid3JpdGVcIikge1xuXHRcdFx0XHRcdFx0dGhpcy5vcGVuRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0XHRcdHRoaXMud3JpdGVEaXZbaV0uc2hvdygpO1xuXHRcdFx0XHRcdFx0dGhpcy5jb21tYW5kRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0XHRcdHRoaXMuY2FtZXJhRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHZhbHVlID09IFwiY29tbWFuZFwiKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm9wZW5EaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy53cml0ZURpdltpXS5oaWRlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLmNvbW1hbmREaXZbaV0uc2hvdygpO1xuXHRcdFx0XHRcdFx0dGhpcy5jYW1lcmFEaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPT0gXCJjYW1lcmFcIikge1xuXHRcdFx0XHRcdFx0dGhpcy5vcGVuRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0XHRcdHRoaXMud3JpdGVEaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy5jb21tYW5kRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0XHRcdHRoaXMuY2FtZXJhRGl2W2ldLnNob3coKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHZhbHVlID09IFwidGFza1wiKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm9wZW5EaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy53cml0ZURpdltpXS5oaWRlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLmNvbW1hbmREaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy5jYW1lcmFEaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLm9wZW5EaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy53cml0ZURpdltpXS5oaWRlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLmNvbW1hbmREaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy5jYW1lcmFEaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHRcdCh0aGlzLmFjdGlvbltpXS5jb21wb25lbnRzWzBdIGFzIERyb3Bkb3duQ29tcG9uZW50KS5hZGRPcHRpb24oXCJvcGVuXCIsIFwiT3BlblwiKTtcblx0XHRcdCh0aGlzLmFjdGlvbltpXS5jb21wb25lbnRzWzBdIGFzIERyb3Bkb3duQ29tcG9uZW50KS5hZGRPcHRpb24oXCJ3cml0ZVwiLCBcIldyaXRlXCIpO1xuXHRcdFx0KHRoaXMuYWN0aW9uW2ldLmNvbXBvbmVudHNbMF0gYXMgRHJvcGRvd25Db21wb25lbnQpLmFkZE9wdGlvbihcImNvbW1hbmRcIiwgXCJDb21tYW5kXCIpO1xuXHRcdFx0KHRoaXMuYWN0aW9uW2ldLmNvbXBvbmVudHNbMF0gYXMgRHJvcGRvd25Db21wb25lbnQpLmFkZE9wdGlvbihcImNhbWVyYVwiLCBcIkNhbWVyYVwiKTtcblx0XHRcdCh0aGlzLmFjdGlvbltpXS5jb21wb25lbnRzWzBdIGFzIERyb3Bkb3duQ29tcG9uZW50KS5hZGRPcHRpb24oXCJ0YXNrXCIsIFwiVGFza1wiKTtcblxuXHRcdFx0KHRoaXMuYWN0aW9uW2ldLmNvbXBvbmVudHNbMF0gYXMgRHJvcGRvd25Db21wb25lbnQpLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uYWN0aW9uKTtcblx0XHRcblx0XHQvLyAtLSBBY3Rpb24gaXMgT3BlbiAtLVxuXHRcdHRoaXMub3BlbkRpdltpXSA9IHRoaXMuYnV0dG9uRGl2W2ldLmNyZWF0ZURpdigpO1xuXHRcdHRoaXMub3BlbkNob2ljZVtpXSA9IG5ldyBTZXR0aW5nKHRoaXMub3BlbkRpdltpXSlcblx0XHRcdC5zZXROYW1lKCdPcGVuIENob2ljZT8nKVxuXHRcdFx0LnNldERlc2MoJ1NlbGVjdCB0aGUgdHlwZSBvZiBub3RlIG9wZW4uJylcblx0XHRcdC5hZGREcm9wZG93bihkcm9wID0+IGRyb3Bcblx0XHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0ub3BlbkNob2ljZSA9IHZhbHVlO1xuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PSBcImRhaWx5XCIpIHtcblx0XHRcdFx0XHRcdHRoaXMubm90ZVtpXS5zZXR0aW5nRWwuaGlkZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy5ib29rbWFya1tpXS5zZXR0aW5nRWwuaGlkZSgpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPT0gXCJub3RlXCIpIHtcblx0XHRcdFx0XHRcdHRoaXMubm90ZVtpXS5zZXR0aW5nRWwuc2hvdygpO1xuXHRcdFx0XHRcdFx0dGhpcy5ib29rbWFya1tpXS5zZXR0aW5nRWwuaGlkZSgpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPT0gXCJib29rbWFya1wiKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm5vdGVbaV0uc2V0dGluZ0VsLmhpZGUoKTtcblx0XHRcdFx0XHRcdHRoaXMuYm9va21hcmtbaV0uc2V0dGluZ0VsLnNob3coKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdFx0KHRoaXMub3BlbkNob2ljZVtpXS5jb21wb25lbnRzWzBdIGFzIERyb3Bkb3duQ29tcG9uZW50KS5hZGRPcHRpb24oXCJkYWlseVwiLCBcIkRhaWx5IE5vdGVcIik7XG5cdFx0XHQodGhpcy5vcGVuQ2hvaWNlW2ldLmNvbXBvbmVudHNbMF0gYXMgRHJvcGRvd25Db21wb25lbnQpLmFkZE9wdGlvbihcIm5vdGVcIiwgXCJOb3RlXCIpO1xuXHRcdFx0KHRoaXMub3BlbkNob2ljZVtpXS5jb21wb25lbnRzWzBdIGFzIERyb3Bkb3duQ29tcG9uZW50KS5hZGRPcHRpb24oXCJib29rbWFya1wiLCBcIkJvb2ttYXJrXCIpO1xuXG5cdFx0dGhpcy5ub3RlW2ldID0gbmV3IFNldHRpbmcodGhpcy5vcGVuRGl2W2ldKVxuXHRcdFx0LnNldE5hbWUoJ05vdGUgTmFtZT8nKVxuXHRcdFx0LnNldERlc2MoJ1NlbGVjdCB0aGUgbm90ZSB0byBvcGVuLicpXG5cdFx0XHQuYWRkVGV4dCh0ZXh0ID0+IHRleHRcblx0XHRcdFx0LnNldFBsYWNlaG9sZGVyKCdOb3RlIG5hbWUnKVxuXHRcdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5ub3RlTmFtZSlcblx0XHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0ubm90ZU5hbWUgPSB2YWx1ZTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0dGhpcy5ub3RlW2ldLnNldHRpbmdFbC5oaWRlKCk7XG5cdFx0dGhpcy5ib29rbWFya1tpXSA9IG5ldyBTZXR0aW5nKHRoaXMub3BlbkRpdltpXSlcblx0XHRcdC5zZXROYW1lKCdCb29rbWFyayBOYW1lPycpXG5cdFx0XHQuc2V0RGVzYygnU2VsZWN0IHRoZSBib29rbWFyayB0byBvcGVuLicpXG5cdFx0XHQuYWRkVGV4dCh0ZXh0ID0+IHRleHRcblx0XHRcdFx0LnNldFBsYWNlaG9sZGVyKCdCb29rbWFyayBuYW1lJylcblx0XHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uYm9va21hcmtOYW1lKVxuXHRcdFx0XHQub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5ib29rbWFya05hbWUgPSB2YWx1ZTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0dGhpcy5ib29rbWFya1tpXS5zZXR0aW5nRWwuaGlkZSgpO1xuXG5cdFx0bGV0IHZhbHVlID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5vcGVuQ2hvaWNlO1xuXHRcdCh0aGlzLm9wZW5DaG9pY2VbaV0uY29tcG9uZW50c1swXSBhcyBEcm9wZG93bkNvbXBvbmVudCkuc2V0VmFsdWUodmFsdWUpO1xuXHRcdGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmFjdGlvbiA9PSBcIm9wZW5cIikge1xuXHRcdFx0aWYgKHZhbHVlID09IFwiZGFpbHlcIikge1xuXHRcdFx0XHR0aGlzLm5vdGVbaV0uc2V0dGluZ0VsLmhpZGUoKTtcblx0XHRcdFx0dGhpcy5ib29rbWFya1tpXS5zZXR0aW5nRWwuaGlkZSgpO1xuXHRcdFx0fSBlbHNlIGlmICh2YWx1ZSA9PSBcIm5vdGVcIikge1xuXHRcdFx0XHR0aGlzLm5vdGVbaV0uc2V0dGluZ0VsLnNob3coKTtcblx0XHRcdFx0dGhpcy5ib29rbWFya1tpXS5zZXR0aW5nRWwuaGlkZSgpO1xuXHRcdFx0fSBlbHNlIGlmICh2YWx1ZSA9PSBcImJvb2ttYXJrXCIpIHtcblx0XHRcdFx0dGhpcy5ub3RlW2ldLnNldHRpbmdFbC5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuYm9va21hcmtbaV0uc2V0dGluZ0VsLnNob3coKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyAtLSBBY3Rpb24gaXMgV3JpdGUgLS1cblx0XHR0aGlzLndyaXRlRGl2W2ldID0gdGhpcy5idXR0b25EaXZbaV0uY3JlYXRlRGl2KCk7XG5cdFx0dGhpcy53cml0ZUNob2ljZVtpXSA9IG5ldyBTZXR0aW5nKHRoaXMud3JpdGVEaXZbaV0pXG5cdFx0XHQuc2V0TmFtZSgnV3JpdGUgQ2hvaWNlPycpXG5cdFx0XHQuc2V0RGVzYygnU2VsZWN0IHRoZSB0eXBlIG9mIG5vdGUgdG8gd3JpdGUuJylcblx0XHRcdC5hZGREcm9wZG93bihkcm9wID0+IGRyb3Bcblx0XHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0ud3JpdGVDaG9pY2UpXG5cdFx0XHRcdC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh2YWx1ZSk7XG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS53cml0ZUNob2ljZSA9IHZhbHVlO1xuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PSBcImRhaWx5XCIpIHtcblx0XHRcdFx0XHRcdHRoaXMubm90ZXdbaV0uc2V0dGluZ0VsLmhpZGUoKTtcblx0XHRcdFx0XHRcdHRoaXMuZm9sZGVyd1tpXS5zZXR0aW5nRWwuaGlkZSgpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPT0gXCJyYW5kb21cIikge1xuXHRcdFx0XHRcdFx0dGhpcy5ub3Rld1tpXS5zZXR0aW5nRWwuaGlkZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy5mb2xkZXJ3W2ldLnNldHRpbmdFbC5zaG93KCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh2YWx1ZSA9PSBcInNwZWNpZmljXCIpIHtcblx0XHRcdFx0XHRcdHRoaXMubm90ZXdbaV0uc2V0dGluZ0VsLnNob3coKTtcblx0XHRcdFx0XHRcdHRoaXMuZm9sZGVyd1tpXS5zZXR0aW5nRWwuaGlkZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0XHQodGhpcy53cml0ZUNob2ljZVtpXS5jb21wb25lbnRzWzBdIGFzIERyb3Bkb3duQ29tcG9uZW50KS5hZGRPcHRpb24oXCJkYWlseVwiLCBcIkRhaWx5IE5vdGVcIik7XG5cdFx0XHQodGhpcy53cml0ZUNob2ljZVtpXS5jb21wb25lbnRzWzBdIGFzIERyb3Bkb3duQ29tcG9uZW50KS5hZGRPcHRpb24oXCJyYW5kb21cIiwgXCJSYW5kb20gTm90ZVwiKTtcblx0XHRcdCh0aGlzLndyaXRlQ2hvaWNlW2ldLmNvbXBvbmVudHNbMF0gYXMgRHJvcGRvd25Db21wb25lbnQpLmFkZE9wdGlvbihcInNwZWNpZmljXCIsIFwiU3BlY2lmaWMgTm90ZVwiKTtcblxuXHRcdHRoaXMubm90ZXdbaV09IG5ldyBTZXR0aW5nKHRoaXMud3JpdGVEaXZbaV0pXG5cdFx0XHQuc2V0TmFtZSgnTm90ZSBOYW1lPycpXG5cdFx0XHQuc2V0RGVzYygnU2VsZWN0IHRoZSBub3RlIHRvIG9wZW4uJylcblx0XHRcdC5hZGRUZXh0KHRleHQgPT4gdGV4dFxuXHRcdFx0XHQuc2V0UGxhY2Vob2xkZXIoJ05vdGUgbmFtZScpXG5cdFx0XHRcdC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLm5vdGV3KVxuXHRcdFx0XHQub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5ub3RldyA9IHZhbHVlO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR0aGlzLm5vdGV3W2ldLnNldHRpbmdFbC5oaWRlKCk7XG5cdFx0dGhpcy5mb2xkZXJ3W2ldID0gbmV3IFNldHRpbmcodGhpcy53cml0ZURpdltpXSlcblx0XHRcdC5zZXROYW1lKCdGb2xkZXI/Jylcblx0XHRcdC5zZXREZXNjKCdTZWxlY3QgdGhlIGZvbGRlciBpbiB3aGljaCB0byBvcGVuIHRoZSBub3RlLicpXG5cdFx0XHQuYWRkVGV4dCh0ZXh0ID0+IHRleHRcblx0XHRcdFx0LnNldFBsYWNlaG9sZGVyKCdGb2xkZXIgbmFtZScpXG5cdFx0XHRcdC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmZvbGRlcncpXG5cdFx0XHRcdC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmZvbGRlcncgPSB2YWx1ZTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0dGhpcy5mb2xkZXJ3W2ldLnNldHRpbmdFbC5oaWRlKCk7XG5cblx0XHR0aGlzLm1vZGV3W2ldID0gbmV3IFNldHRpbmcodGhpcy53cml0ZURpdltpXSlcblx0XHRcdC5zZXROYW1lKCdXcml0aW5nIG1vZGU/Jylcblx0XHRcdC5zZXREZXNjKCdTZWxlY3QgdGhlIG1vZGUgb2Ygd3JpdGluZy4nKVxuXHRcdFx0LmFkZERyb3Bkb3duKGRyb3AgPT4gZHJvcFxuXHRcdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5tb2Rldylcblx0XHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0ubW9kZXcgPSB2YWx1ZTtcblxuXHRcdFx0fSlcblx0XHQpO1xuXHRcdCh0aGlzLm1vZGV3W2ldLmNvbXBvbmVudHNbMF0gYXMgRHJvcGRvd25Db21wb25lbnQpLmFkZE9wdGlvbihcImFwcGVuZFwiLCBcIkFwcGVuZFwiKTtcblx0XHQodGhpcy5tb2Rld1tpXS5jb21wb25lbnRzWzBdIGFzIERyb3Bkb3duQ29tcG9uZW50KS5hZGRPcHRpb24oXCJwcmVwZW5kXCIsIFwiUHJlcGVuZFwiKTtcblx0XHQodGhpcy5tb2Rld1tpXS5jb21wb25lbnRzWzBdIGFzIERyb3Bkb3duQ29tcG9uZW50KS5hZGRPcHRpb24oXCJvdmVyd3JpdGVcIiwgXCJPdmVyd3JpdGVcIik7XG5cdFx0KHRoaXMubW9kZXdbaV0uY29tcG9uZW50c1swXSBhcyBEcm9wZG93bkNvbXBvbmVudCkuYWRkT3B0aW9uKFwibmV3XCIsIFwiTmV3XCIpO1xuXG5cdFx0KHRoaXMubW9kZXdbaV0uY29tcG9uZW50c1swXSBhcyBEcm9wZG93bkNvbXBvbmVudCkuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5tb2Rldyk7XG5cdFx0XG5cdFx0dGhpcy5tb2Rld1tpXS5zZXR0aW5nRWwuc2hvdygpO1xuXG5cdFx0dGhpcy5wcm9tcHR3W2ldID0gbmV3IFNldHRpbmcodGhpcy53cml0ZURpdltpXSlcblx0XHRcdC5zZXROYW1lKCdQcm9tcHQ/Jylcblx0XHRcdC5zZXREZXNjKCdQcm9tcHQgdG8gZGVzY3JpYmUgdGhlIHdyaXRpbmcuJylcblx0XHRcdC5hZGRUZXh0KHRleHQgPT4gdGV4dFxuXHRcdFx0XHQuc2V0UGxhY2Vob2xkZXIoJ1Byb21wdCcpXG5cdFx0XHRcdC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLnByb21wdHcpXG5cdFx0XHRcdC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLnByb21wdHcgPSB2YWx1ZTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0dGhpcy5wcm9tcHR3W2ldLnNldHRpbmdFbC5zaG93KCk7XG5cblx0XHR2YWx1ZSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0ud3JpdGVDaG9pY2U7XG5cdFx0KHRoaXMud3JpdGVDaG9pY2VbaV0uY29tcG9uZW50c1swXSBhcyBEcm9wZG93bkNvbXBvbmVudCkuc2V0VmFsdWUodmFsdWUpO1xuXHRcdGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmFjdGlvbiA9PSBcIndyaXRlXCIpIHtcblx0XHRcdGlmICh2YWx1ZSA9PSBcImRhaWx5XCIpIHtcblx0XHRcdFx0dGhpcy5ub3Rld1tpXS5zZXR0aW5nRWwuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLmZvbGRlcndbaV0uc2V0dGluZ0VsLmhpZGUoKTtcblx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPT0gXCJyYW5kb21cIikge1xuXHRcdFx0XHR0aGlzLm5vdGV3W2ldLnNldHRpbmdFbC5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuZm9sZGVyd1tpXS5zZXR0aW5nRWwuc2hvdygpO1xuXHRcdFx0fSBlbHNlIGlmICh2YWx1ZSA9PSBcInNwZWNpZmljXCIpIHtcblx0XHRcdFx0dGhpcy5ub3Rld1tpXS5zZXR0aW5nRWwuc2hvdygpO1xuXHRcdFx0XHR0aGlzLmZvbGRlcndbaV0uc2V0dGluZ0VsLmhpZGUoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLndyaXRlRGl2W2ldLmhpZGUoKTtcblxuXHRcdC8vIC0tIENvbW1hbmQgLS0gXG5cdFx0dGhpcy5jb21tYW5kRGl2W2ldID0gdGhpcy5idXR0b25EaXZbaV0uY3JlYXRlRGl2KCk7XG5cdFx0dGhpcy5jb21tYW5kW2ldID0gbmV3IFNldHRpbmcodGhpcy5jb21tYW5kRGl2W2ldKVxuXHRcdFx0LnNldE5hbWUoJ0NvbW1hbmQ/Jylcblx0XHRcdC5zZXREZXNjKCdTcGVjaWZ5IHRoZSBjb21tYW5kIHRvIGV4ZWN1dGUuJylcblx0XHRcdC5hZGRUZXh0KHRleHQgPT4gdGV4dFxuXHRcdFx0XHQuc2V0UGxhY2Vob2xkZXIoJ0NvbW1hbmQnKVxuXHRcdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5jb21tYW5kKVxuXHRcdFx0XHQub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5jb21tYW5kID0gdmFsdWU7XG5cdFx0XHRcdFx0bGV0IHN0ciA9IHZhbHVlLnJlcGxhY2UoLyAvZywgJ18nKTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0dGhpcy5jb21tYW5kQ2hvaWNlW2ldID0gbmV3IFNldHRpbmcodGhpcy5jb21tYW5kRGl2W2ldKVxuXHRcdFx0LnNldE5hbWUoJ0NvbW1hbmQgd2l0aCBPcGVuIENob2ljZT8nKVxuXHRcdFx0LnNldERlc2MoJ1NlbGVjdCB0aGUgdHlwZSBvZiBub3RlIG9wZW4uJylcblx0XHRcdC5hZGREcm9wZG93bihkcm9wID0+IGRyb3Bcblx0XHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uY29tbW1hbmRDaG9pY2UgPSB2YWx1ZTtcblx0XHRcdFx0XHRpZiAodmFsdWUgPT0gXCJkYWlseVwiKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNvbW1hbmROb3RlW2ldLnNldHRpbmdFbC5oaWRlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLmNvbW1hbmRCb29rbWFya1tpXS5zZXR0aW5nRWwuaGlkZSgpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPT0gXCJub3RlXCIpIHtcblx0XHRcdFx0XHRcdHRoaXMuY29tbWFuZE5vdGVbaV0uc2V0dGluZ0VsLnNob3coKTtcblx0XHRcdFx0XHRcdHRoaXMuY29tbWFuZEJvb2ttYXJrW2ldLnNldHRpbmdFbC5oaWRlKCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh2YWx1ZSA9PSBcImJvb2ttYXJrXCIpIHtcblx0XHRcdFx0XHRcdHRoaXMuY29tbWFuZE5vdGVbaV0uc2V0dGluZ0VsLmhpZGUoKTtcblx0XHRcdFx0XHRcdHRoaXMuY29tbWFuZEJvb2ttYXJrW2ldLnNldHRpbmdFbC5zaG93KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHRcdCh0aGlzLmNvbW1hbmRDaG9pY2VbaV0uY29tcG9uZW50c1swXSBhcyBEcm9wZG93bkNvbXBvbmVudCkuYWRkT3B0aW9uKFwiZGFpbHlcIiwgXCJEYWlseSBOb3RlXCIpO1xuXHRcdFx0KHRoaXMuY29tbWFuZENob2ljZVtpXS5jb21wb25lbnRzWzBdIGFzIERyb3Bkb3duQ29tcG9uZW50KS5hZGRPcHRpb24oXCJub3RlXCIsIFwiTm90ZVwiKTtcblx0XHRcdCh0aGlzLmNvbW1hbmRDaG9pY2VbaV0uY29tcG9uZW50c1swXSBhcyBEcm9wZG93bkNvbXBvbmVudCkuYWRkT3B0aW9uKFwiYm9va21hcmtcIiwgXCJCb29rbWFya1wiKTtcblxuXHRcdFx0KHRoaXMuY29tbWFuZENob2ljZVtpXS5jb21wb25lbnRzWzBdIGFzIERyb3Bkb3duQ29tcG9uZW50KS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmNvbW1tYW5kQ2hvaWNlKTtcblx0XHRcblx0XHR0aGlzLmNvbW1hbmROb3RlW2ldID0gbmV3IFNldHRpbmcodGhpcy5jb21tYW5kRGl2W2ldKVxuXHRcdFx0LnNldE5hbWUoJ05vdGUgTmFtZT8nKVxuXHRcdFx0LnNldERlc2MoJ1NlbGVjdCB0aGUgbm90ZSB0byBvcGVuLicpXG5cdFx0XHQuYWRkVGV4dCh0ZXh0ID0+IHRleHRcblx0XHRcdFx0LnNldFBsYWNlaG9sZGVyKCdOb3RlIG5hbWUnKVxuXHRcdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5jb21tYW5kTm90ZSlcblx0XHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uY29tbWFuZE5vdGUgPSB2YWx1ZTtcdFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR0aGlzLmNvbW1hbmROb3RlW2ldLnNldHRpbmdFbC5oaWRlKCk7XG5cdFx0dGhpcy5jb21tYW5kQm9va21hcmtbaV0gPSBuZXcgU2V0dGluZyh0aGlzLmNvbW1hbmREaXZbaV0pXG5cdFx0XHQuc2V0TmFtZSgnQm9va21hcmsgTmFtZT8nKVxuXHRcdFx0LnNldERlc2MoJ1NlbGVjdCB0aGUgYm9va21hcmsgdG8gb3Blbi4nKVxuXHRcdFx0LmFkZFRleHQodGV4dCA9PiB0ZXh0XG5cdFx0XHRcdC5zZXRQbGFjZWhvbGRlcignQm9va21hcmsgbmFtZScpXG5cdFx0XHRcdC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmNvbW1hbmRCb29rbWFyaylcblx0XHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uY29tbWFuZEJvb2ttYXJrID0gdmFsdWU7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdHRoaXMuY29tbWFuZEJvb2ttYXJrW2ldLnNldHRpbmdFbC5oaWRlKCk7XG5cblx0XHR2YWx1ZSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uY29tbW1hbmRDaG9pY2U7XG5cdFx0aWYgKHZhbHVlID09IFwiZGFpbHlcIikge1xuXHRcdFx0dGhpcy5jb21tYW5kTm90ZVtpXS5zZXR0aW5nRWwuaGlkZSgpO1xuXHRcdFx0dGhpcy5jb21tYW5kQm9va21hcmtbaV0uc2V0dGluZ0VsLmhpZGUoKTtcblx0XHR9IGVsc2UgaWYgKHZhbHVlID09IFwibm90ZVwiKSB7XG5cdFx0XHR0aGlzLmNvbW1hbmROb3RlW2ldLnNldHRpbmdFbC5zaG93KCk7XG5cdFx0XHR0aGlzLmNvbW1hbmRCb29rbWFya1tpXS5zZXR0aW5nRWwuaGlkZSgpO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgPT0gXCJib29rbWFya1wiKSB7XG5cdFx0XHR0aGlzLmNvbW1hbmROb3RlW2ldLnNldHRpbmdFbC5oaWRlKCk7XG5cdFx0XHR0aGlzLmNvbW1hbmRCb29rbWFya1tpXS5zZXR0aW5nRWwuc2hvdygpO1xuXHRcdH1cblxuXHRcdHRoaXMuY29tbWFuZERpdltpXS5oaWRlKCk7XG5cblx0XHQvLyAtLSBDYW1lcmEgLS0gXG5cdFx0dGhpcy5jYW1lcmFEaXZbaV0gPSB0aGlzLmJ1dHRvbkRpdltpXS5jcmVhdGVEaXYoKTtcblx0XHR0aGlzLmNhbWVyYUZvbGRlcltpXSA9IG5ldyBTZXR0aW5nKHRoaXMuY2FtZXJhRGl2W2ldKVxuXHRcdFx0LnNldE5hbWUoJ0ZvbGRlcj8nKVxuXHRcdFx0LnNldERlc2MoJ1NlbGVjdCB0aGUgZm9sZGVyIGluIHdoaWNoIHRvIGRlcG9zaXQgdGhlIGltYWdlLicpXG5cdFx0XHQuYWRkVGV4dCh0ZXh0ID0+IHRleHRcblx0XHRcdFx0LnNldFBsYWNlaG9sZGVyKCdGb2xkZXIgbmFtZScpXG5cdFx0XHRcdC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmNhbWVyYUZvbGRlcilcblx0XHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uY2FtZXJhRm9sZGVyID0gdmFsdWU7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdC8vdGhpcy5jYW1lcmFGb2xkZXJbaV0uc2V0dGluZ0VsLmhpZGUoKTtcblx0XHR0aGlzLmNhbWVyYU5vdGVbaV0gPSBuZXcgU2V0dGluZyh0aGlzLmNhbWVyYURpdltpXSlcblx0XHRcdC5zZXROYW1lKCdOb3RlIE5hbWU/Jylcblx0XHRcdC5zZXREZXNjKCdTZWxlY3QgdGhlIG5vdGUgdG8gY3JlYXRlLicpXG5cdFx0XHQuYWRkVGV4dCh0ZXh0ID0+IHRleHRcblx0XHRcdFx0LnNldFBsYWNlaG9sZGVyKCdOb3RlIG5hbWUnKVxuXHRcdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5jYW1lcmFOb3RlKVxuXHRcdFx0XHQub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5jYW1lcmFOb3RlID0gdmFsdWU7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdC8vdGhpcy5jYW1lcmFOb3RlW2ldLnNldHRpbmdFbC5oaWRlKCk7XG5cblx0XHR0aGlzLmNhbWVyYURpdltpXS5oaWRlKCk7XG5cblx0XHRpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS51c2VCdXR0b24pIHtcblx0XHRcdHRoaXMuYnV0dG9uRGl2W2ldLnNob3coKTtcblx0XHRcdHZhbHVlID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5hY3Rpb247XG5cdFx0XHRpZiAodmFsdWUgPT0gXCJvcGVuXCIpIHtcblx0XHRcdFx0dGhpcy5vcGVuRGl2W2ldLnNob3coKTtcblx0XHRcdFx0dGhpcy53cml0ZURpdltpXS5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuY29tbWFuZERpdltpXS5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuY2FtZXJhRGl2W2ldLmhpZGUoKTtcblx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPT0gXCJ3cml0ZVwiKSB7XG5cdFx0XHRcdHRoaXMub3BlbkRpdltpXS5oaWRlKCk7XG5cdFx0XHRcdHRoaXMud3JpdGVEaXZbaV0uc2hvdygpO1xuXHRcdFx0XHR0aGlzLmNvbW1hbmREaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHR0aGlzLmNhbWVyYURpdltpXS5oaWRlKCk7XG5cdFx0XHR9IGVsc2UgaWYgKHZhbHVlID09IFwiY29tbWFuZFwiKSB7XG5cdFx0XHRcdHRoaXMub3BlbkRpdltpXS5oaWRlKCk7XG5cdFx0XHRcdHRoaXMud3JpdGVEaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHR0aGlzLmNvbW1hbmREaXZbaV0uc2hvdygpO1xuXHRcdFx0XHR0aGlzLmNhbWVyYURpdltpXS5oaWRlKCk7XG5cdFx0XHR9IGVsc2UgaWYgKHZhbHVlID09IFwiY2FtZXJhXCIpIHtcblx0XHRcdFx0dGhpcy5vcGVuRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0dGhpcy53cml0ZURpdltpXS5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuY29tbWFuZERpdltpXS5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuY2FtZXJhRGl2W2ldLnNob3coKTtcblx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPT0gXCJ0YXNrXCIpIHtcblx0XHRcdFx0dGhpcy5vcGVuRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0dGhpcy53cml0ZURpdltpXS5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuY29tbWFuZERpdltpXS5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuY2FtZXJhRGl2W2ldLmhpZGUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMub3BlbkRpdltpXS5oaWRlKCk7XG5cdFx0XHRcdHRoaXMud3JpdGVEaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHR0aGlzLmNvbW1hbmREaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHR0aGlzLmNhbWVyYURpdltpXS5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYnV0dG9uRGl2W2ldLmhpZGUoKTtcblx0XHR9XG5cdH1cblx0fVxuXG5cdGFzeW5jIGhpZGUoKSB7XG5cdFx0Y29uc29sZS5sb2coXCJTYXZpbmcgc2V0dGluZ3NcIik7XG5cdFx0dGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xuXHRcdHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcblx0XHRcblx0XHRjb25zb2xlLmxvZyhcIkdlbmVyYXRpbmcgSlNPTlwiKTtcblx0XHRsZXQgdmFsdWUgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaGFwZTtcblx0XHRpZiAodmFsdWUgPT0gXCJyaW5nXCIpIHtcblx0XHRcdHRoaXMuanNvbiA9ICd7IFwic2hhcGVcIjogXCJyaW5nXCIsIFwiYnV0dG9uc1wiOiBbJztcblx0XHRcdHRoaXMubnVtYmVyT2ZCdXR0b25zID0gNjtcblx0XHR9IGVsc2UgaWYgKHZhbHVlID09IFwicGlsbFwiKSB7XG5cdFx0XHR0aGlzLmpzb24gPSAneyBcInNoYXBlXCI6IFwicGlsbFwiLCBcImJ1dHRvbnNcIjogWyc7XG5cdFx0XHR0aGlzLm51bWJlck9mQnV0dG9ucyA9IDM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuanNvbiA9ICd7IFwic2hhcGVcIjogXCJlcnJvclwiIH0nO1xuXHRcdFx0dGhpcy5udW1iZXJPZkJ1dHRvbnMgPSAwO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1iZXJPZkJ1dHRvbnM7IGkrKykge1x0XHRcblx0XHRcdGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLnVzZUJ1dHRvbikge1xuXHRcdFx0XHR0aGlzLmpzb24gKz0gJ3sgXCJidXR0b25cIjogJysoaSsxKSsnLCAnO1xuXHRcdFx0XHR0aGlzLmpzb24gKz0gJ1wibGFiZWxcIjogXCInK3RoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0ubGFiZWwrJ1wiLCAnO1xuXHRcdFx0XHR0aGlzLmpzb24gKz0gJ1wiaW1hZ2VcIjogXCInK3RoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uaW1hZ2UrJ1wiLCAnO1xuXHRcdFx0XHR0aGlzLmpzb24gKz0gJ1widmF1bHRcIjogXCInK3RoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0udmF1bHQrJ1wiLCAnO1x0XG5cblx0XHRcdFx0Ly8gQWN0aW9uID0gXCJvcGVuXCJcblx0XHRcdFx0aWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uYWN0aW9uID09IFwib3BlblwiKSB7XG5cdFx0XHRcdFx0dGhpcy5qc29uICs9ICdcImFjdGlvblwiOiBcIicrdGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5hY3Rpb24rJyAnO1xuXHRcdFx0XHRcdC8vdGhpcy5qc29uICs9ICdcIicrdGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5vcGVuQ2hvaWNlKydcIiwgJztcdFxuXHRcdFx0XHRcdGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLm9wZW5DaG9pY2UgPT0gXCJkYWlseVwiKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmpzb24gKz0gJ2RhaWx5XCInO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5vcGVuQ2hvaWNlID09IFwibm90ZVwiKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuanNvbiArPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLm5vdGVOYW1lKydcIic7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLm9wZW5DaG9pY2UgPT0gXCJib29rbWFya1wiKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmpzb24gKz0gJ2Jvb2ttYXJrICcrdGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5ib29rbWFya05hbWUrJ1wiJztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQWN0aW9uID0gXCJ3cml0ZVwiXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5hY3Rpb24gPT0gXCJ3cml0ZVwiKSB7XG5cdFx0XHRcdFx0dGhpcy5qc29uICs9ICdcImFjdGlvblwiOiBcIicrdGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5hY3Rpb24rJyAnO1xuXHRcdFx0XHRcdC8vdGhpcy5qc29uICs9ICdcIicrdGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS53cml0ZUNob2ljZSsnXCIsICc7XHRcblx0XHRcdFx0XHRpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5vcGVuQ2hvaWNlID09IFwiZGFpbHlcIikge1xuXHRcdFx0XHRcdFx0dGhpcy5qc29uICs9ICdkYWlseVwiJztcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0ud3JpdGVDaG9pY2UgPT0gXCJzcGVjaWZpY1wiKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmpzb24gKz0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5ub3RldysnXCIsICc7XHRcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0ud3JpdGVDaG9pY2UgPT0gXCJyYW5kb21cIikge1xuXHRcdFx0XHRcdFx0dGhpcy5qc29uICs9ICdcImZvbGRlclwiOiBcIicrdGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5mb2xkZXJ3KydcIiwgJztcdFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmpzb24gKz0gJ1wibW9kZVwiOiBcIicrdGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5tb2RldysnXCIsICc7XHRcblx0XHRcdFx0XHR0aGlzLmpzb24gKz0gJ1wicHJvbXB0XCI6IFwiJyt0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLnByb21wdHcrJ1wiJztcdFxuXG5cdFx0XHRcdC8vIEFjdGlvbiA9IFwiY29tbWFuZFwiXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5hY3Rpb24gPT0gXCJjb21tYW5kXCIpIHtcblx0XHRcdFx0XHRsZXQgdmFsdWUgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmNvbW1hbmQ7XG5cdFx0XHRcdFx0bGV0IHN0ciA9IHZhbHVlLnJlcGxhY2UoLyAvZywgJ18nKTtcblxuXHRcdFx0XHRcdHRoaXMuanNvbiArPSAnXCJjb21tYW5kXCI6IFwiJytzdHI7XHRcblx0XHRcdFx0XHRpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5jb21tbWFuZENob2ljZSA9PSBcImRhaWx5XCIpIHtcblx0XHRcdFx0XHRcdHRoaXMuanNvbiArPSAnIGRhaWx5XCInO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5jb21tbWFuZENob2ljZSA9PSBcIm5vdGVcIikge1xuXHRcdFx0XHRcdFx0dGhpcy5qc29uICs9IHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uY29tbWFuZE5vdGUrJ1wiJztcdFxuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5jb21tbWFuZENob2ljZSA9PSBcImJvb2ttYXJrXCIpIHtcblx0XHRcdFx0XHRcdHRoaXMuanNvbiArPSAnIGJvb2ttYXJrICcrdGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5jb21tYW5kQm9va21hcmsrJ1wiJztcdFxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBBY3Rpb24gPSBcImNhbWVyYVwiXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5hY3Rpb24gPT0gXCJjYW1lcmFcIikge1xuXHRcdFx0XHRcdHRoaXMuanNvbiArPSAnXCJmb2xkZXJcIjogXCInK3RoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uY2FtZXJhRm9sZGVyKydcIiwgJztcdFxuXHRcdFx0XHRcdHRoaXMuanNvbiArPSAnXCJub3RlXCI6IFwiJyt0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmNhbWVyYU5vdGUrJ1wiJztcdFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5qc29uICs9IFwifSxcIjtcblx0XHRcdH1cblxuXHRcdH1cblx0XHR0aGlzLmpzb24gKz0gJ119Jztcblx0XHRjb25zb2xlLmxvZyh0aGlzLmpzb24pO1xuXG5cdFx0Ly8gV3JpdGUgdG8gYSBmaWxlXG5cblx0XHQvLyBEZWxldGUgdGhlIG9sZCBmaWxlXHRcdFxuXHRcdC8vIGlmICh0aGlzLmZpbGVFeGlzdHMoXCJrYWFwYXRhLmpzb25cIiwgXCIvXCIgYXMgVEZvbGRlcikpIHsgXG5cdFx0Ly8gXHRsZXQgdGFmID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKG9nZmlsZW5hbWUpIGFzIFRGaWxlO1xuXHRcdC8vIFx0Y29uc29sZS5sb2coXCJUcnlpbmcgdG8gZGVsZXRlIFwiK3RhZi5wYXRoKVxuXHRcdC8vIFx0aWYgKHRhZiAhPT0gdW5kZWZpbmVkKSBhd2FpdCB0aGlzLmFwcC52YXVsdC5kZWxldGUodGFmKTtcblx0XHQvLyB9XG4gIFxuXHRcdC8vIGNvbnN0IGpzb25maWxlOiBURmlsZSA9IGF3YWl0ICh0aGlzLmFwcC5maWxlTWFuYWdlciBhcyBhbnkpXG5cdFx0Ly8gIFx0LmNyZWF0ZU5ld01hcmtkb3duRmlsZSh0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlRmlsZSgpPy5wYXRoLCBcImthYXBhdGEuanNvblwiKTtcblx0XHRsZXQgdGFmID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKFwia2FhcGF0YS5qc29uXCIpIGFzIFRGaWxlO1xuXHRcdGF3YWl0IHRoaXMuYXBwLnZhdWx0LmRlbGV0ZSh0YWYpO1xuXHQgXHRjb25zdCBqc29uZmlsZTogVEZpbGUgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGUoXCJrYWFwYXRhLmpzb25cIiwgdGhpcy5qc29uKTtcblx0XHRjb25zb2xlLmxvZyhqc29uZmlsZSk7XG5cdFx0Ly9hd2FpdCB0aGlzLmFwcC52YXVsdC5tb2RpZnkoanNvbmZpbGUsIHRoaXMuanNvbik7XG5cblx0fVxuXG5cdGZpbGVFeGlzdHMoZmlsZU5hbWU6IHN0cmluZywgZm9sZGVyOiBURm9sZGVyKTogQm9vbGVhbiB7XG5cdFx0dmFyIHJlczogYm9vbGVhbiA9IGZhbHNlO1xuXHRcdGxldCBmaWxlID0gZm9sZGVyLmNoaWxkcmVuLmZpbmQoYWZpbGUgPT4gYWZpbGUubmFtZSA9PT0gZmlsZU5hbWUpO1xuXHRcdHJldHVybiAoZmlsZSAhPT0gdW5kZWZpbmVkKTtcblx0fVxuXG59IiwiaW1wb3J0IHsgQXBwLCBNb2RhbCwgTm90aWNlLCBQbHVnaW4sIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcgfSBmcm9tICdvYnNpZGlhbic7XHJcblxyXG5pbXBvcnQgeyBDb25maWd1cmUgfSBmcm9tICcuL0NvbmZpZ3VyZSc7XHJcblxyXG5pbnRlcmZhY2UgRmVycmFtZW50YVNldHRpbmcge1xyXG5cdHVzZUJ1dHRvbjogYm9vbGVhbjtcclxuXHRsYWJlbDogc3RyaW5nO1xyXG5cdGltYWdlOiBzdHJpbmc7XHJcblx0dmF1bHQ6IHN0cmluZztcclxuXHRhY3Rpb246IHN0cmluZztcclxuXHRvcGVuQ2hvaWNlOiBzdHJpbmc7XHJcblx0bm90ZU5hbWU6IHN0cmluZztcclxuXHRib29rbWFya05hbWU6IHN0cmluZztcclxuXHR3cml0ZUNob2ljZTogc3RyaW5nO1xyXG5cdG5vdGV3OiBzdHJpbmc7XHJcblx0Zm9sZGVydzogc3RyaW5nO1xyXG5cdG1vZGV3OiBzdHJpbmc7XHJcblx0cHJvbXB0dzogc3RyaW5nO1xyXG5cdGNvbW1hbmQ6IHN0cmluZztcclxuXHRjb21tbWFuZENob2ljZTogc3RyaW5nO1xyXG5cdGNvbW1hbmROb3RlOiBzdHJpbmc7XHJcblx0Y29tbWFuZEJvb2ttYXJrOiBzdHJpbmc7XHJcblx0Y2FtZXJhRm9sZGVyOiBzdHJpbmc7XHJcblx0Y2FtZXJhTm90ZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRmVycmFtZW50YVNldHRpbmdzIHtcclxuXHRzaGFwZTogc3RyaW5nO1xyXG5cclxuXHRidXR0b25zOiBBcnJheTxGZXJyYW1lbnRhU2V0dGluZz47XHJcblxyXG59XHJcblxyXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBGZXJyYW1lbnRhU2V0dGluZ3MgPSB7XHJcblx0c2hhcGU6IFwicmluZ1wiLFxyXG5cclxuXHRidXR0b25zOiBbXHJcblx0XHR7XHJcblx0XHRcdHVzZUJ1dHRvbjogZmFsc2UsXHJcblx0XHRcdGxhYmVsOiBcIkJ1dHRvbiBMYWJlbFwiLFxyXG5cdFx0XHRpbWFnZTogXCJcIixcclxuXHRcdFx0dmF1bHQ6IFwiVmF1bHRcIixcclxuXHRcdFx0YWN0aW9uOiBcIm9wZW5cIixcclxuXHRcdFx0b3BlbkNob2ljZTogXCJub3RlXCIsXHJcblx0XHRcdG5vdGVOYW1lOiBcIk5vdGUgTmFtZVwiLFxyXG5cdFx0XHRib29rbWFya05hbWU6IFwiQm9va21hcmsgTmFtZVwiLFxyXG5cdFx0XHR3cml0ZUNob2ljZTogXCJub3RlXCIsXHJcblx0XHRcdG5vdGV3OiBcIk5vdGUgTmFtZVwiLFxyXG5cdFx0XHRmb2xkZXJ3OiBcIkZvbGRlciBOYW1lXCIsXHJcblx0XHRcdG1vZGV3OiBcIk1vZGVcIixcclxuXHRcdFx0cHJvbXB0dzogXCJQcm9tcHRcIixcclxuXHRcdFx0Y29tbWFuZDogXCJDb21tYW5kXCIsXHJcblx0XHRcdGNvbW1tYW5kQ2hvaWNlOiBcIm5vdGVcIixcclxuXHRcdFx0Y29tbWFuZE5vdGU6IFwiTm90ZSBOYW1lXCIsXHJcblx0XHRcdGNvbW1hbmRCb29rbWFyazogXCJCb29rbWFyayBOYW1lXCIsXHJcblx0XHRcdGNhbWVyYUZvbGRlcjogXCJGb2xkZXIgTmFtZVwiLFxyXG5cdFx0XHRjYW1lcmFOb3RlOiBcIk5vdGUgTmFtZVwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR1c2VCdXR0b246IGZhbHNlLFxyXG5cdFx0XHRsYWJlbDogXCJCdXR0b24gTGFiZWxcIixcclxuXHRcdFx0aW1hZ2U6IFwiXCIsXHJcblx0XHRcdHZhdWx0OiBcIlZhdWx0XCIsXHJcblx0XHRcdGFjdGlvbjogXCJvcGVuXCIsXHJcblx0XHRcdG9wZW5DaG9pY2U6IFwibm90ZVwiLFxyXG5cdFx0XHRub3RlTmFtZTogXCJOb3RlIE5hbWVcIixcclxuXHRcdFx0Ym9va21hcmtOYW1lOiBcIkJvb2ttYXJrIE5hbWVcIixcclxuXHRcdFx0d3JpdGVDaG9pY2U6IFwibm90ZVwiLFxyXG5cdFx0XHRub3RldzogXCJOb3RlIE5hbWVcIixcclxuXHRcdFx0Zm9sZGVydzogXCJGb2xkZXIgTmFtZVwiLFxyXG5cdFx0XHRtb2RldzogXCJNb2RlXCIsXHJcblx0XHRcdHByb21wdHc6IFwiUHJvbXB0XCIsXHJcblx0XHRcdGNvbW1hbmQ6IFwiQ29tbWFuZFwiLFxyXG5cdFx0XHRjb21tbWFuZENob2ljZTogXCJub3RlXCIsXHJcblx0XHRcdGNvbW1hbmROb3RlOiBcIk5vdGUgTmFtZVwiLFxyXG5cdFx0XHRjb21tYW5kQm9va21hcms6IFwiQm9va21hcmsgTmFtZVwiLFxyXG5cdFx0XHRjYW1lcmFGb2xkZXI6IFwiRm9sZGVyIE5hbWVcIixcclxuXHRcdFx0Y2FtZXJhTm90ZTogXCJOb3RlIE5hbWVcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0dXNlQnV0dG9uOiBmYWxzZSxcclxuXHRcdFx0bGFiZWw6IFwiQnV0dG9uIExhYmVsXCIsXHJcblx0XHRcdGltYWdlOiBcIlwiLFxyXG5cdFx0XHR2YXVsdDogXCJWYXVsdFwiLFxyXG5cdFx0XHRhY3Rpb246IFwib3BlblwiLFxyXG5cdFx0XHRvcGVuQ2hvaWNlOiBcIm5vdGVcIixcclxuXHRcdFx0bm90ZU5hbWU6IFwiTm90ZSBOYW1lXCIsXHJcblx0XHRcdGJvb2ttYXJrTmFtZTogXCJCb29rbWFyayBOYW1lXCIsXHJcblx0XHRcdHdyaXRlQ2hvaWNlOiBcIm5vdGVcIixcclxuXHRcdFx0bm90ZXc6IFwiTm90ZSBOYW1lXCIsXHJcblx0XHRcdGZvbGRlcnc6IFwiRm9sZGVyIE5hbWVcIixcclxuXHRcdFx0bW9kZXc6IFwiTW9kZVwiLFxyXG5cdFx0XHRwcm9tcHR3OiBcIlByb21wdFwiLFxyXG5cdFx0XHRjb21tYW5kOiBcIkNvbW1hbmRcIixcclxuXHRcdFx0Y29tbW1hbmRDaG9pY2U6IFwibm90ZVwiLFxyXG5cdFx0XHRjb21tYW5kTm90ZTogXCJOb3RlIE5hbWVcIixcclxuXHRcdFx0Y29tbWFuZEJvb2ttYXJrOiBcIkJvb2ttYXJrIE5hbWVcIixcclxuXHRcdFx0Y2FtZXJhRm9sZGVyOiBcIkZvbGRlciBOYW1lXCIsXHJcblx0XHRcdGNhbWVyYU5vdGU6IFwiTm90ZSBOYW1lXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHVzZUJ1dHRvbjogZmFsc2UsXHJcblx0XHRcdGxhYmVsOiBcIkJ1dHRvbiBMYWJlbFwiLFxyXG5cdFx0XHRpbWFnZTogXCJcIixcclxuXHRcdFx0dmF1bHQ6IFwiVmF1bHRcIixcclxuXHRcdFx0YWN0aW9uOiBcIm9wZW5cIixcclxuXHRcdFx0b3BlbkNob2ljZTogXCJub3RlXCIsXHJcblx0XHRcdG5vdGVOYW1lOiBcIk5vdGUgTmFtZVwiLFxyXG5cdFx0XHRib29rbWFya05hbWU6IFwiQm9va21hcmsgTmFtZVwiLFxyXG5cdFx0XHR3cml0ZUNob2ljZTogXCJub3RlXCIsXHJcblx0XHRcdG5vdGV3OiBcIk5vdGUgTmFtZVwiLFxyXG5cdFx0XHRmb2xkZXJ3OiBcIkZvbGRlciBOYW1lXCIsXHJcblx0XHRcdG1vZGV3OiBcIk1vZGVcIixcclxuXHRcdFx0cHJvbXB0dzogXCJQcm9tcHRcIixcclxuXHRcdFx0Y29tbWFuZDogXCJDb21tYW5kXCIsXHJcblx0XHRcdGNvbW1tYW5kQ2hvaWNlOiBcIm5vdGVcIixcclxuXHRcdFx0Y29tbWFuZE5vdGU6IFwiTm90ZSBOYW1lXCIsXHJcblx0XHRcdGNvbW1hbmRCb29rbWFyazogXCJCb29rbWFyayBOYW1lXCIsXHJcblx0XHRcdGNhbWVyYUZvbGRlcjogXCJGb2xkZXIgTmFtZVwiLFxyXG5cdFx0XHRjYW1lcmFOb3RlOiBcIk5vdGUgTmFtZVwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR1c2VCdXR0b246IGZhbHNlLFxyXG5cdFx0XHRsYWJlbDogXCJCdXR0b24gTGFiZWxcIixcclxuXHRcdFx0aW1hZ2U6IFwiXCIsXHJcblx0XHRcdHZhdWx0OiBcIlZhdWx0XCIsXHJcblx0XHRcdGFjdGlvbjogXCJvcGVuXCIsXHJcblx0XHRcdG9wZW5DaG9pY2U6IFwibm90ZVwiLFxyXG5cdFx0XHRub3RlTmFtZTogXCJOb3RlIE5hbWVcIixcclxuXHRcdFx0Ym9va21hcmtOYW1lOiBcIkJvb2ttYXJrIE5hbWVcIixcclxuXHRcdFx0d3JpdGVDaG9pY2U6IFwibm90ZVwiLFxyXG5cdFx0XHRub3RldzogXCJOb3RlIE5hbWVcIixcclxuXHRcdFx0Zm9sZGVydzogXCJGb2xkZXIgTmFtZVwiLFxyXG5cdFx0XHRtb2RldzogXCJNb2RlXCIsXHJcblx0XHRcdHByb21wdHc6IFwiUHJvbXB0XCIsXHJcblx0XHRcdGNvbW1hbmQ6IFwiQ29tbWFuZFwiLFxyXG5cdFx0XHRjb21tbWFuZENob2ljZTogXCJub3RlXCIsXHJcblx0XHRcdGNvbW1hbmROb3RlOiBcIk5vdGUgTmFtZVwiLFxyXG5cdFx0XHRjb21tYW5kQm9va21hcms6IFwiQm9va21hcmsgTmFtZVwiLFxyXG5cdFx0XHRjYW1lcmFGb2xkZXI6IFwiRm9sZGVyIE5hbWVcIixcclxuXHRcdFx0Y2FtZXJhTm90ZTogXCJOb3RlIE5hbWVcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0dXNlQnV0dG9uOiBmYWxzZSxcclxuXHRcdFx0bGFiZWw6IFwiQnV0dG9uIExhYmVsXCIsXHJcblx0XHRcdGltYWdlOiBcIlwiLFxyXG5cdFx0XHR2YXVsdDogXCJWYXVsdFwiLFxyXG5cdFx0XHRhY3Rpb246IFwib3BlblwiLFxyXG5cdFx0XHRvcGVuQ2hvaWNlOiBcIm5vdGVcIixcclxuXHRcdFx0bm90ZU5hbWU6IFwiTm90ZSBOYW1lXCIsXHJcblx0XHRcdGJvb2ttYXJrTmFtZTogXCJCb29rbWFyayBOYW1lXCIsXHJcblx0XHRcdHdyaXRlQ2hvaWNlOiBcIm5vdGVcIixcclxuXHRcdFx0bm90ZXc6IFwiTm90ZSBOYW1lXCIsXHJcblx0XHRcdGZvbGRlcnc6IFwiRm9sZGVyIE5hbWVcIixcclxuXHRcdFx0bW9kZXc6IFwiTW9kZVwiLFxyXG5cdFx0XHRwcm9tcHR3OiBcIlByb21wdFwiLFxyXG5cdFx0XHRjb21tYW5kOiBcIkNvbW1hbmRcIixcclxuXHRcdFx0Y29tbW1hbmRDaG9pY2U6IFwibm90ZVwiLFxyXG5cdFx0XHRjb21tYW5kTm90ZTogXCJOb3RlIE5hbWVcIixcclxuXHRcdFx0Y29tbWFuZEJvb2ttYXJrOiBcIkJvb2ttYXJrIE5hbWVcIixcclxuXHRcdFx0Y2FtZXJhRm9sZGVyOiBcIkZvbGRlciBOYW1lXCIsXHJcblx0XHRcdGNhbWVyYU5vdGU6IFwiTm90ZSBOYW1lXCJcclxuXHRcdH1cclxuXHRdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlcnJhbWVudGEgZXh0ZW5kcyBQbHVnaW4ge1xyXG5cdHNldHRpbmdzOiBGZXJyYW1lbnRhU2V0dGluZ3M7XHJcblxyXG5cdHZlcnNpb246IHN0cmluZyA9IFwiMC4wLjEgKDEyMjgyMDIzKVwiO1xyXG5cclxuXHRvbkluaXQoKSB7XHJcblxyXG5cdH1cclxuXHJcblx0b25sb2FkKCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ2xvYWRpbmcgRmVycmFtZW50YSBwbHVnaW4sIHZlcnNpb24gJyArIHRoaXMudmVyc2lvbik7XHJcblxyXG5cdFx0dGhpcy5sb2FkU2V0dGluZ3MoKTtcclxuXHJcblx0XHR0aGlzLmFkZFNldHRpbmdUYWIobmV3IENvbmZpZ3VyZSh0aGlzLmFwcCwgdGhpcykpO1xyXG5cdH1cclxuXHJcblx0b251bmxvYWQoKSB7XHJcblx0XHRjb25zb2xlLmxvZygndW5sb2FkaW5nIHBsdWdpbicpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgbG9hZFNldHRpbmdzKCkge1xyXG5cdFx0dGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfU0VUVElOR1MsIGF3YWl0IHRoaXMubG9hZERhdGEoKSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBzYXZlU2V0dGluZ3MoKSB7XHJcblx0XHRhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiU2V0dGluZyIsIlBsdWdpblNldHRpbmdUYWIiLCJQbHVnaW4iXSwibWFwcGluZ3Mi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UyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdEgsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUUsS0FBSyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0Q7QUFDTyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzNDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNySCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdKLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDdEUsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDdEIsUUFBUSxJQUFJLENBQUMsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDdEUsUUFBUSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSTtBQUN0RCxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pLLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QixnQkFBZ0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTTtBQUM5QyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQ3hFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQjtBQUNoQixvQkFBb0IsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtBQUNoSSxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUMxRyxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxF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QyxJQUFJLEVBQUUsQ0FBQztBQUN2QixvQkFBQSxNQUFBLENBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3hCLG9CQUFBLE1BQUEsQ0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDMUIsb0JBQUEsTUFBQSxDQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN6QixpQkFBQTtxQkFBTSxJQUFJLEtBQUssSUFBSSxTQUFTLEVBQUU7QUFDOUIsb0JBQUEsTUFBQSxDQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN2QixvQkFBQSxNQUFBLENBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3hCLG9CQUFBLE1BQUEsQ0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDMUIsb0JBQUEsTUFBQSxDQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN6QixpQkFBQTtxQkFBTSxJQUFJLEtBQUssSUFBSSxRQUFRLEVBQUU7QUFDN0Isb0JBQUEsTUFBQSxDQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN2QixvQkFBQSxNQUFBLENBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3hCLG9CQUFBLE1BQUEsQ0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDMUIsb0JBQUEsTUFBQSxDQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN6QixpQkFBQTtxQkFBTSxJQUFJLEtBQUssSUFBSSxNQUFNLEVBQUU7QUFDM0Isb0JBQUEsTUFBQSxDQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN2QixvQkFB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QUEsSUFBSSxDQUFDLElBQUksSUFBSSxZQUFZLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBQyxLQUFLLENBQUM7QUFDdEUsZ0NBQUEsSUFBSSxDQUFDLElBQUksSUFBSSxZQUFZLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBQyxLQUFLLENBQUM7O0FBR3RFLGdDQUFBLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxNQUFNLEVBQUU7QUFDckQsb0NBQUEsSUFBSSxDQUFDLElBQUksSUFBSSxhQUFhLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxHQUFHLENBQUM7O0FBRXRFLG9DQUFBLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUU7QUFDMUQsd0NBQUEsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUM7QUFDdEIscUNBQUE7QUFBTSx5Q0FBQSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLElBQUksTUFBTSxFQUFFO0FBQy9ELHdDQUFBLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBQyxHQUFHLENBQUM7QUFDM0QscUNBQUE7QUFBTSx5Q0FBQSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLElBQUksVUFBVSxFQUFFO0FBQ3BFLHdDQUFBLElBQUks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
