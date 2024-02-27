'use strict';

var obsidian = require('obsidian');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var obsidian__default = /*#__PURE__*/_interopDefaultLegacy(obsidian);

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

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var main = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });



const DEFAULT_DAILY_NOTE_FORMAT = "YYYY-MM-DD";
const DEFAULT_WEEKLY_NOTE_FORMAT = "gggg-[W]ww";
const DEFAULT_MONTHLY_NOTE_FORMAT = "YYYY-MM";
const DEFAULT_QUARTERLY_NOTE_FORMAT = "YYYY-[Q]Q";
const DEFAULT_YEARLY_NOTE_FORMAT = "YYYY";

function shouldUsePeriodicNotesSettings(periodicity) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const periodicNotes = window.app.plugins.getPlugin("periodic-notes");
    return periodicNotes && periodicNotes.settings?.[periodicity]?.enabled;
}
/**
 * Read the user settings for the `daily-notes` plugin
 * to keep behavior of creating a new note in-sync.
 */
function getDailyNoteSettings() {
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { internalPlugins, plugins } = window.app;
        if (shouldUsePeriodicNotesSettings("daily")) {
            const { format, folder, template } = plugins.getPlugin("periodic-notes")?.settings?.daily || {};
            return {
                format: format || DEFAULT_DAILY_NOTE_FORMAT,
                folder: folder?.trim() || "",
                template: template?.trim() || "",
            };
        }
        const { folder, format, template } = internalPlugins.getPluginById("daily-notes")?.instance?.options || {};
        return {
            format: format || DEFAULT_DAILY_NOTE_FORMAT,
            folder: folder?.trim() || "",
            template: template?.trim() || "",
        };
    }
    catch (err) {
        console.info("No custom daily note settings found!", err);
    }
}
/**
 * Read the user settings for the `weekly-notes` plugin
 * to keep behavior of creating a new note in-sync.
 */
function getWeeklyNoteSettings() {
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const pluginManager = window.app.plugins;
        const calendarSettings = pluginManager.getPlugin("calendar")?.options;
        const periodicNotesSettings = pluginManager.getPlugin("periodic-notes")?.settings?.weekly;
        if (shouldUsePeriodicNotesSettings("weekly")) {
            return {
                format: periodicNotesSettings.format || DEFAULT_WEEKLY_NOTE_FORMAT,
                folder: periodicNotesSettings.folder?.trim() || "",
                template: periodicNotesSettings.template?.trim() || "",
            };
        }
        const settings = calendarSettings || {};
        return {
            format: settings.weeklyNoteFormat || DEFAULT_WEEKLY_NOTE_FORMAT,
            folder: settings.weeklyNoteFolder?.trim() || "",
            template: settings.weeklyNoteTemplate?.trim() || "",
        };
    }
    catch (err) {
        console.info("No custom weekly note settings found!", err);
    }
}
/**
 * Read the user settings for the `periodic-notes` plugin
 * to keep behavior of creating a new note in-sync.
 */
function getMonthlyNoteSettings() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pluginManager = window.app.plugins;
    try {
        const settings = (shouldUsePeriodicNotesSettings("monthly") &&
            pluginManager.getPlugin("periodic-notes")?.settings?.monthly) ||
            {};
        return {
            format: settings.format || DEFAULT_MONTHLY_NOTE_FORMAT,
            folder: settings.folder?.trim() || "",
            template: settings.template?.trim() || "",
        };
    }
    catch (err) {
        console.info("No custom monthly note settings found!", err);
    }
}
/**
 * Read the user settings for the `periodic-notes` plugin
 * to keep behavior of creating a new note in-sync.
 */
function getQuarterlyNoteSettings() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pluginManager = window.app.plugins;
    try {
        const settings = (shouldUsePeriodicNotesSettings("quarterly") &&
            pluginManager.getPlugin("periodic-notes")?.settings?.quarterly) ||
            {};
        return {
            format: settings.format || DEFAULT_QUARTERLY_NOTE_FORMAT,
            folder: settings.folder?.trim() || "",
            template: settings.template?.trim() || "",
        };
    }
    catch (err) {
        console.info("No custom quarterly note settings found!", err);
    }
}
/**
 * Read the user settings for the `periodic-notes` plugin
 * to keep behavior of creating a new note in-sync.
 */
function getYearlyNoteSettings() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pluginManager = window.app.plugins;
    try {
        const settings = (shouldUsePeriodicNotesSettings("yearly") &&
            pluginManager.getPlugin("periodic-notes")?.settings?.yearly) ||
            {};
        return {
            format: settings.format || DEFAULT_YEARLY_NOTE_FORMAT,
            folder: settings.folder?.trim() || "",
            template: settings.template?.trim() || "",
        };
    }
    catch (err) {
        console.info("No custom yearly note settings found!", err);
    }
}

// Credit: @creationix/path.js
function join(...partSegments) {
    // Split the inputs into a list of path commands.
    let parts = [];
    for (let i = 0, l = partSegments.length; i < l; i++) {
        parts = parts.concat(partSegments[i].split("/"));
    }
    // Interpret the path commands to get the new resolved path.
    const newParts = [];
    for (let i = 0, l = parts.length; i < l; i++) {
        const part = parts[i];
        // Remove leading and trailing slashes
        // Also remove "." segments
        if (!part || part === ".")
            continue;
        // Push new path segments.
        else
            newParts.push(part);
    }
    // Preserve the initial slash if there was one.
    if (parts[0] === "")
        newParts.unshift("");
    // Turn back into a single string path.
    return newParts.join("/");
}
function basename(fullPath) {
    let base = fullPath.substring(fullPath.lastIndexOf("/") + 1);
    if (base.lastIndexOf(".") != -1)
        base = base.substring(0, base.lastIndexOf("."));
    return base;
}
async function ensureFolderExists(path) {
    const dirs = path.replace(/\\/g, "/").split("/");
    dirs.pop(); // remove basename
    if (dirs.length) {
        const dir = join(...dirs);
        if (!window.app.vault.getAbstractFileByPath(dir)) {
            await window.app.vault.createFolder(dir);
        }
    }
}
async function getNotePath(directory, filename) {
    if (!filename.endsWith(".md")) {
        filename += ".md";
    }
    const path = obsidian__default["default"].normalizePath(join(directory, filename));
    await ensureFolderExists(path);
    return path;
}
async function getTemplateInfo(template) {
    const { metadataCache, vault } = window.app;
    const templatePath = obsidian__default["default"].normalizePath(template);
    if (templatePath === "/") {
        return Promise.resolve(["", null]);
    }
    try {
        const templateFile = metadataCache.getFirstLinkpathDest(templatePath, "");
        const contents = await vault.cachedRead(templateFile);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const IFoldInfo = window.app.foldManager.load(templateFile);
        return [contents, IFoldInfo];
    }
    catch (err) {
        console.error(`Failed to read the daily note template '${templatePath}'`, err);
        new obsidian__default["default"].Notice("Failed to read the daily note template");
        return ["", null];
    }
}

/**
 * dateUID is a way of weekly identifying daily/weekly/monthly notes.
 * They are prefixed with the granularity to avoid ambiguity.
 */
function getDateUID(date, granularity = "day") {
    const ts = date.clone().startOf(granularity).format();
    return `${granularity}-${ts}`;
}
function removeEscapedCharacters(format) {
    return format.replace(/\[[^\]]*\]/g, ""); // remove everything within brackets
}
/**
 * XXX: When parsing dates that contain both week numbers and months,
 * Moment choses to ignore the week numbers. For the week dateUID, we
 * want the opposite behavior. Strip the MMM from the format to patch.
 */
function isFormatAmbiguous(format, granularity) {
    if (granularity === "week") {
        const cleanFormat = removeEscapedCharacters(format);
        return (/w{1,2}/i.test(cleanFormat) &&
            (/M{1,4}/.test(cleanFormat) || /D{1,4}/.test(cleanFormat)));
    }
    return false;
}
function getDateFromFile(file, granularity) {
    return getDateFromFilename(file.basename, granularity);
}
function getDateFromPath(path, granularity) {
    return getDateFromFilename(basename(path), granularity);
}
function getDateFromFilename(filename, granularity) {
    const getSettings = {
        day: getDailyNoteSettings,
        week: getWeeklyNoteSettings,
        month: getMonthlyNoteSettings,
        quarter: getQuarterlyNoteSettings,
        year: getYearlyNoteSettings,
    };
    const format = getSettings[granularity]().format.split("/").pop();
    const noteDate = window.moment(filename, format, true);
    if (!noteDate.isValid()) {
        return null;
    }
    if (isFormatAmbiguous(format, granularity)) {
        if (granularity === "week") {
            const cleanFormat = removeEscapedCharacters(format);
            if (/w{1,2}/i.test(cleanFormat)) {
                return window.moment(filename, 
                // If format contains week, remove day & month formatting
                format.replace(/M{1,4}/g, "").replace(/D{1,4}/g, ""), false);
            }
        }
    }
    return noteDate;
}

class DailyNotesFolderMissingError extends Error {
}
/**
 * This function mimics the behavior of the daily-notes plugin
 * so it will replace {{date}}, {{title}}, and {{time}} with the
 * formatted timestamp.
 *
 * Note: it has an added bonus that it's not 'today' specific.
 */
async function createDailyNote(date) {
    const app = window.app;
    const { vault } = app;
    const moment = window.moment;
    const { template, format, folder } = getDailyNoteSettings();
    const [templateContents, IFoldInfo] = await getTemplateInfo(template);
    const filename = date.format(format);
    const normalizedPath = await getNotePath(folder, filename);
    try {
        const createdFile = await vault.create(normalizedPath, templateContents
            .replace(/{{\s*date\s*}}/gi, filename)
            .replace(/{{\s*time\s*}}/gi, moment().format("HH:mm"))
            .replace(/{{\s*title\s*}}/gi, filename)
            .replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (_, _timeOrDate, calc, timeDelta, unit, momentFormat) => {
            const now = moment();
            const currentDate = date.clone().set({
                hour: now.get("hour"),
                minute: now.get("minute"),
                second: now.get("second"),
            });
            if (calc) {
                currentDate.add(parseInt(timeDelta, 10), unit);
            }
            if (momentFormat) {
                return currentDate.format(momentFormat.substring(1).trim());
            }
            return currentDate.format(format);
        })
            .replace(/{{\s*yesterday\s*}}/gi, date.clone().subtract(1, "day").format(format))
            .replace(/{{\s*tomorrow\s*}}/gi, date.clone().add(1, "d").format(format)));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        app.foldManager.save(createdFile, IFoldInfo);
        return createdFile;
    }
    catch (err) {
        console.error(`Failed to create file: '${normalizedPath}'`, err);
        new obsidian__default["default"].Notice("Unable to create new file.");
    }
}
function getDailyNote(date, dailyNotes) {
    return dailyNotes[getDateUID(date, "day")] ?? null;
}
function getAllDailyNotes() {
    /**
     * Find all daily notes in the daily note folder
     */
    const { vault } = window.app;
    const { folder } = getDailyNoteSettings();
    const dailyNotesFolder = vault.getAbstractFileByPath(obsidian__default["default"].normalizePath(folder));
    if (!dailyNotesFolder) {
        throw new DailyNotesFolderMissingError("Failed to find daily notes folder");
    }
    const dailyNotes = {};
    obsidian__default["default"].Vault.recurseChildren(dailyNotesFolder, (note) => {
        if (note instanceof obsidian__default["default"].TFile) {
            const date = getDateFromFile(note, "day");
            if (date) {
                const dateString = getDateUID(date, "day");
                dailyNotes[dateString] = note;
            }
        }
    });
    return dailyNotes;
}

class WeeklyNotesFolderMissingError extends Error {
}
function getDaysOfWeek() {
    const { moment } = window;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let weekStart = moment.localeData()._week.dow;
    const daysOfWeek = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
    ];
    while (weekStart) {
        daysOfWeek.push(daysOfWeek.shift());
        weekStart--;
    }
    return daysOfWeek;
}
function getDayOfWeekNumericalValue(dayOfWeekName) {
    return getDaysOfWeek().indexOf(dayOfWeekName.toLowerCase());
}
async function createWeeklyNote(date) {
    const { vault } = window.app;
    const { template, format, folder } = getWeeklyNoteSettings();
    const [templateContents, IFoldInfo] = await getTemplateInfo(template);
    const filename = date.format(format);
    const normalizedPath = await getNotePath(folder, filename);
    try {
        const createdFile = await vault.create(normalizedPath, templateContents
            .replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (_, _timeOrDate, calc, timeDelta, unit, momentFormat) => {
            const now = window.moment();
            const currentDate = date.clone().set({
                hour: now.get("hour"),
                minute: now.get("minute"),
                second: now.get("second"),
            });
            if (calc) {
                currentDate.add(parseInt(timeDelta, 10), unit);
            }
            if (momentFormat) {
                return currentDate.format(momentFormat.substring(1).trim());
            }
            return currentDate.format(format);
        })
            .replace(/{{\s*title\s*}}/gi, filename)
            .replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm"))
            .replace(/{{\s*(sunday|monday|tuesday|wednesday|thursday|friday|saturday)\s*:(.*?)}}/gi, (_, dayOfWeek, momentFormat) => {
            const day = getDayOfWeekNumericalValue(dayOfWeek);
            return date.weekday(day).format(momentFormat.trim());
        }));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.app.foldManager.save(createdFile, IFoldInfo);
        return createdFile;
    }
    catch (err) {
        console.error(`Failed to create file: '${normalizedPath}'`, err);
        new obsidian__default["default"].Notice("Unable to create new file.");
    }
}
function getWeeklyNote(date, weeklyNotes) {
    return weeklyNotes[getDateUID(date, "week")] ?? null;
}
function getAllWeeklyNotes() {
    const weeklyNotes = {};
    if (!appHasWeeklyNotesPluginLoaded()) {
        return weeklyNotes;
    }
    const { vault } = window.app;
    const { folder } = getWeeklyNoteSettings();
    const weeklyNotesFolder = vault.getAbstractFileByPath(obsidian__default["default"].normalizePath(folder));
    if (!weeklyNotesFolder) {
        throw new WeeklyNotesFolderMissingError("Failed to find weekly notes folder");
    }
    obsidian__default["default"].Vault.recurseChildren(weeklyNotesFolder, (note) => {
        if (note instanceof obsidian__default["default"].TFile) {
            const date = getDateFromFile(note, "week");
            if (date) {
                const dateString = getDateUID(date, "week");
                weeklyNotes[dateString] = note;
            }
        }
    });
    return weeklyNotes;
}

class MonthlyNotesFolderMissingError extends Error {
}
/**
 * This function mimics the behavior of the daily-notes plugin
 * so it will replace {{date}}, {{title}}, and {{time}} with the
 * formatted timestamp.
 *
 * Note: it has an added bonus that it's not 'today' specific.
 */
async function createMonthlyNote(date) {
    const { vault } = window.app;
    const { template, format, folder } = getMonthlyNoteSettings();
    const [templateContents, IFoldInfo] = await getTemplateInfo(template);
    const filename = date.format(format);
    const normalizedPath = await getNotePath(folder, filename);
    try {
        const createdFile = await vault.create(normalizedPath, templateContents
            .replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (_, _timeOrDate, calc, timeDelta, unit, momentFormat) => {
            const now = window.moment();
            const currentDate = date.clone().set({
                hour: now.get("hour"),
                minute: now.get("minute"),
                second: now.get("second"),
            });
            if (calc) {
                currentDate.add(parseInt(timeDelta, 10), unit);
            }
            if (momentFormat) {
                return currentDate.format(momentFormat.substring(1).trim());
            }
            return currentDate.format(format);
        })
            .replace(/{{\s*date\s*}}/gi, filename)
            .replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm"))
            .replace(/{{\s*title\s*}}/gi, filename));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.app.foldManager.save(createdFile, IFoldInfo);
        return createdFile;
    }
    catch (err) {
        console.error(`Failed to create file: '${normalizedPath}'`, err);
        new obsidian__default["default"].Notice("Unable to create new file.");
    }
}
function getMonthlyNote(date, monthlyNotes) {
    return monthlyNotes[getDateUID(date, "month")] ?? null;
}
function getAllMonthlyNotes() {
    const monthlyNotes = {};
    if (!appHasMonthlyNotesPluginLoaded()) {
        return monthlyNotes;
    }
    const { vault } = window.app;
    const { folder } = getMonthlyNoteSettings();
    const monthlyNotesFolder = vault.getAbstractFileByPath(obsidian__default["default"].normalizePath(folder));
    if (!monthlyNotesFolder) {
        throw new MonthlyNotesFolderMissingError("Failed to find monthly notes folder");
    }
    obsidian__default["default"].Vault.recurseChildren(monthlyNotesFolder, (note) => {
        if (note instanceof obsidian__default["default"].TFile) {
            const date = getDateFromFile(note, "month");
            if (date) {
                const dateString = getDateUID(date, "month");
                monthlyNotes[dateString] = note;
            }
        }
    });
    return monthlyNotes;
}

class QuarterlyNotesFolderMissingError extends Error {
}
/**
 * This function mimics the behavior of the daily-notes plugin
 * so it will replace {{date}}, {{title}}, and {{time}} with the
 * formatted timestamp.
 *
 * Note: it has an added bonus that it's not 'today' specific.
 */
async function createQuarterlyNote(date) {
    const { vault } = window.app;
    const { template, format, folder } = getQuarterlyNoteSettings();
    const [templateContents, IFoldInfo] = await getTemplateInfo(template);
    const filename = date.format(format);
    const normalizedPath = await getNotePath(folder, filename);
    try {
        const createdFile = await vault.create(normalizedPath, templateContents
            .replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (_, _timeOrDate, calc, timeDelta, unit, momentFormat) => {
            const now = window.moment();
            const currentDate = date.clone().set({
                hour: now.get("hour"),
                minute: now.get("minute"),
                second: now.get("second"),
            });
            if (calc) {
                currentDate.add(parseInt(timeDelta, 10), unit);
            }
            if (momentFormat) {
                return currentDate.format(momentFormat.substring(1).trim());
            }
            return currentDate.format(format);
        })
            .replace(/{{\s*date\s*}}/gi, filename)
            .replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm"))
            .replace(/{{\s*title\s*}}/gi, filename));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.app.foldManager.save(createdFile, IFoldInfo);
        return createdFile;
    }
    catch (err) {
        console.error(`Failed to create file: '${normalizedPath}'`, err);
        new obsidian__default["default"].Notice("Unable to create new file.");
    }
}
function getQuarterlyNote(date, quarterly) {
    return quarterly[getDateUID(date, "quarter")] ?? null;
}
function getAllQuarterlyNotes() {
    const quarterly = {};
    if (!appHasQuarterlyNotesPluginLoaded()) {
        return quarterly;
    }
    const { vault } = window.app;
    const { folder } = getQuarterlyNoteSettings();
    const quarterlyFolder = vault.getAbstractFileByPath(obsidian__default["default"].normalizePath(folder));
    if (!quarterlyFolder) {
        throw new QuarterlyNotesFolderMissingError("Failed to find quarterly notes folder");
    }
    obsidian__default["default"].Vault.recurseChildren(quarterlyFolder, (note) => {
        if (note instanceof obsidian__default["default"].TFile) {
            const date = getDateFromFile(note, "quarter");
            if (date) {
                const dateString = getDateUID(date, "quarter");
                quarterly[dateString] = note;
            }
        }
    });
    return quarterly;
}

class YearlyNotesFolderMissingError extends Error {
}
/**
 * This function mimics the behavior of the daily-notes plugin
 * so it will replace {{date}}, {{title}}, and {{time}} with the
 * formatted timestamp.
 *
 * Note: it has an added bonus that it's not 'today' specific.
 */
async function createYearlyNote(date) {
    const { vault } = window.app;
    const { template, format, folder } = getYearlyNoteSettings();
    const [templateContents, IFoldInfo] = await getTemplateInfo(template);
    const filename = date.format(format);
    const normalizedPath = await getNotePath(folder, filename);
    try {
        const createdFile = await vault.create(normalizedPath, templateContents
            .replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (_, _timeOrDate, calc, timeDelta, unit, momentFormat) => {
            const now = window.moment();
            const currentDate = date.clone().set({
                hour: now.get("hour"),
                minute: now.get("minute"),
                second: now.get("second"),
            });
            if (calc) {
                currentDate.add(parseInt(timeDelta, 10), unit);
            }
            if (momentFormat) {
                return currentDate.format(momentFormat.substring(1).trim());
            }
            return currentDate.format(format);
        })
            .replace(/{{\s*date\s*}}/gi, filename)
            .replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm"))
            .replace(/{{\s*title\s*}}/gi, filename));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.app.foldManager.save(createdFile, IFoldInfo);
        return createdFile;
    }
    catch (err) {
        console.error(`Failed to create file: '${normalizedPath}'`, err);
        new obsidian__default["default"].Notice("Unable to create new file.");
    }
}
function getYearlyNote(date, yearlyNotes) {
    return yearlyNotes[getDateUID(date, "year")] ?? null;
}
function getAllYearlyNotes() {
    const yearlyNotes = {};
    if (!appHasYearlyNotesPluginLoaded()) {
        return yearlyNotes;
    }
    const { vault } = window.app;
    const { folder } = getYearlyNoteSettings();
    const yearlyNotesFolder = vault.getAbstractFileByPath(obsidian__default["default"].normalizePath(folder));
    if (!yearlyNotesFolder) {
        throw new YearlyNotesFolderMissingError("Failed to find yearly notes folder");
    }
    obsidian__default["default"].Vault.recurseChildren(yearlyNotesFolder, (note) => {
        if (note instanceof obsidian__default["default"].TFile) {
            const date = getDateFromFile(note, "year");
            if (date) {
                const dateString = getDateUID(date, "year");
                yearlyNotes[dateString] = note;
            }
        }
    });
    return yearlyNotes;
}

function appHasDailyNotesPluginLoaded() {
    const { app } = window;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dailyNotesPlugin = app.internalPlugins.plugins["daily-notes"];
    if (dailyNotesPlugin && dailyNotesPlugin.enabled) {
        return true;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const periodicNotes = app.plugins.getPlugin("periodic-notes");
    return periodicNotes && periodicNotes.settings?.daily?.enabled;
}
/**
 * XXX: "Weekly Notes" live in either the Calendar plugin or the periodic-notes plugin.
 * Check both until the weekly notes feature is removed from the Calendar plugin.
 */
function appHasWeeklyNotesPluginLoaded() {
    const { app } = window;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (app.plugins.getPlugin("calendar")) {
        return true;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const periodicNotes = app.plugins.getPlugin("periodic-notes");
    return periodicNotes && periodicNotes.settings?.weekly?.enabled;
}
function appHasMonthlyNotesPluginLoaded() {
    const { app } = window;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const periodicNotes = app.plugins.getPlugin("periodic-notes");
    return periodicNotes && periodicNotes.settings?.monthly?.enabled;
}
function appHasQuarterlyNotesPluginLoaded() {
    const { app } = window;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const periodicNotes = app.plugins.getPlugin("periodic-notes");
    return periodicNotes && periodicNotes.settings?.quarterly?.enabled;
}
function appHasYearlyNotesPluginLoaded() {
    const { app } = window;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const periodicNotes = app.plugins.getPlugin("periodic-notes");
    return periodicNotes && periodicNotes.settings?.yearly?.enabled;
}
function getPeriodicNoteSettings(granularity) {
    const getSettings = {
        day: getDailyNoteSettings,
        week: getWeeklyNoteSettings,
        month: getMonthlyNoteSettings,
        quarter: getQuarterlyNoteSettings,
        year: getYearlyNoteSettings,
    }[granularity];
    return getSettings();
}
function createPeriodicNote(granularity, date) {
    const createFn = {
        day: createDailyNote,
        month: createMonthlyNote,
        week: createWeeklyNote,
    };
    return createFn[granularity](date);
}

exports.DEFAULT_DAILY_NOTE_FORMAT = DEFAULT_DAILY_NOTE_FORMAT;
exports.DEFAULT_MONTHLY_NOTE_FORMAT = DEFAULT_MONTHLY_NOTE_FORMAT;
exports.DEFAULT_QUARTERLY_NOTE_FORMAT = DEFAULT_QUARTERLY_NOTE_FORMAT;
exports.DEFAULT_WEEKLY_NOTE_FORMAT = DEFAULT_WEEKLY_NOTE_FORMAT;
exports.DEFAULT_YEARLY_NOTE_FORMAT = DEFAULT_YEARLY_NOTE_FORMAT;
exports.appHasDailyNotesPluginLoaded = appHasDailyNotesPluginLoaded;
exports.appHasMonthlyNotesPluginLoaded = appHasMonthlyNotesPluginLoaded;
exports.appHasQuarterlyNotesPluginLoaded = appHasQuarterlyNotesPluginLoaded;
exports.appHasWeeklyNotesPluginLoaded = appHasWeeklyNotesPluginLoaded;
exports.appHasYearlyNotesPluginLoaded = appHasYearlyNotesPluginLoaded;
exports.createDailyNote = createDailyNote;
exports.createMonthlyNote = createMonthlyNote;
exports.createPeriodicNote = createPeriodicNote;
exports.createQuarterlyNote = createQuarterlyNote;
exports.createWeeklyNote = createWeeklyNote;
exports.createYearlyNote = createYearlyNote;
exports.getAllDailyNotes = getAllDailyNotes;
exports.getAllMonthlyNotes = getAllMonthlyNotes;
exports.getAllQuarterlyNotes = getAllQuarterlyNotes;
exports.getAllWeeklyNotes = getAllWeeklyNotes;
exports.getAllYearlyNotes = getAllYearlyNotes;
exports.getDailyNote = getDailyNote;
exports.getDailyNoteSettings = getDailyNoteSettings;
exports.getDateFromFile = getDateFromFile;
exports.getDateFromPath = getDateFromPath;
exports.getDateUID = getDateUID;
exports.getMonthlyNote = getMonthlyNote;
exports.getMonthlyNoteSettings = getMonthlyNoteSettings;
exports.getPeriodicNoteSettings = getPeriodicNoteSettings;
exports.getQuarterlyNote = getQuarterlyNote;
exports.getQuarterlyNoteSettings = getQuarterlyNoteSettings;
exports.getTemplateInfo = getTemplateInfo;
exports.getWeeklyNote = getWeeklyNote;
exports.getWeeklyNoteSettings = getWeeklyNoteSettings;
exports.getYearlyNote = getYearlyNote;
exports.getYearlyNoteSettings = getYearlyNoteSettings;
});

function getDailyNoteSettingsPath() {
    return __awaiter(this, void 0, void 0, function () {
        var format, folder;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, main.getDailyNoteSettings()];
                case 1:
                    format = (_a.sent()).format;
                    return [4 /*yield*/, main.getDailyNoteSettings()];
                case 2:
                    folder = (_a.sent()).folder;
                    if (folder == "")
                        return [2 /*return*/, "".concat(format)];
                    else
                        return [2 /*return*/, "".concat(folder, "/").concat(format)];
            }
        });
    });
}

var Configure = /** @class */ (function (_super) {
    __extends(Configure, _super);
    function Configure(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.buttonDiv = Array(6);
        _this.openDiv = Array(6);
        _this.writeDiv = Array(6);
        _this.commandDiv = Array(6);
        _this.cameraDiv = Array(6);
        _this.taskDiv = Array(6);
        _this.buttons = Array(6);
        _this.label = Array(6);
        _this.vault = Array(6);
        _this.action = Array(6);
        _this.openChoice = Array(6);
        _this.note = Array(6);
        _this.bookmark = Array(6);
        _this.writeLines = Array(6);
        _this.writeChoice = Array(6);
        _this.notew = Array(6);
        _this.folderw = Array(6);
        _this.modew = Array(6);
        _this.promptw = Array(6);
        _this.writeStr = Array(6);
        _this.command = Array(6);
        _this.commandChoice = Array(6);
        _this.commandNote = Array(6);
        _this.commandBookmark = Array(6);
        _this.cameraFolder = Array(6);
        _this.cameraLink = Array(6);
        _this.cameraNote = Array(6);
        _this.cameraBookmark = Array(6);
        _this.tasktags = Array(6);
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
        containerEl.createEl('h1', { text: 'Configure the Kaapata widget.' });
        this.standardDiv = containerEl.createDiv();
        this.standardDiv.createEl('h2', { text: 'Configure vaults for the three standard buttons.' });
        new obsidian.Setting(this.standardDiv)
            .setName('Vault for "new note"?')
            .setDesc('Give the vault for the "new note" button.')
            .addText(function (text) { return text
            .setPlaceholder('Vault')
            .setValue(_this.plugin.settings.vault1)
            .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.plugin.settings.vault1 = value;
                return [2 /*return*/];
            });
        }); }); });
        new obsidian.Setting(this.standardDiv)
            .setName('Vault for "daily note"?')
            .setDesc('Give the vault for the "daily note" button.')
            .addText(function (text) { return text
            .setPlaceholder('Vault')
            .setValue(_this.plugin.settings.vault2)
            .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.plugin.settings.vault2 = value;
                return [2 /*return*/];
            });
        }); }); });
        new obsidian.Setting(this.standardDiv)
            .setName('Vault for "camera"?')
            .setDesc('Give the vault for the "camera" button.')
            .addText(function (text) { return text
            .setPlaceholder('Vault')
            .setValue(_this.plugin.settings.vault3)
            .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.plugin.settings.vault3 = value;
                return [2 /*return*/];
            });
        }); }); });
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
            var vault = (this_1.plugin.settings.buttons[i].vault == "")
                ? this_1.plugin.settings.vault1
                : this_1.plugin.settings.buttons[i].vault;
            this_1.vault[i] = new obsidian.Setting(this_1.buttonDiv[i])
                .setName('Vault?')
                .setDesc('Select the vault to perform the action in.')
                .addText(function (text) { return text
                .setPlaceholder(vault)
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
            //(this.action[i].components[0] as DropdownComponent).addOption("task", "Task");
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
            if (this_1.plugin.settings.buttons[i].openChoice !== "note")
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
            if (this_1.plugin.settings.buttons[i].openChoice !== "bookmark")
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
            this_1.writeLines[i] = new obsidian.Setting(this_1.writeDiv[i])
                .setName('How many lines of input?')
                .setDesc('Select how many lines of input you will use.')
                .addDropdown(function (drop) { return drop
                .setValue(_this.plugin.settings.buttons[i].writeLines)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.log(value);
                    this.plugin.settings.buttons[i].writeLines = value;
                    return [2 /*return*/];
                });
            }); }); });
            this_1.writeLines[i].components[0].addOption("one", "One Line");
            this_1.writeLines[i].components[0].addOption("multi", "Multiple Lines");
            this_1.writeChoice[i] = new obsidian.Setting(this_1.writeDiv[i])
                .setName('Write Choice?')
                .setDesc('Select the note to write.')
                .addDropdown(function (drop) { return drop
                .setValue(_this.plugin.settings.buttons[i].writeChoice)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.log(value);
                    this.plugin.settings.buttons[i].writeChoice = value;
                    if (value == "daily") {
                        this.notew[i].settingEl.hide();
                        this.folderw[i].settingEl.hide();
                        this.modew[i].settingEl.show();
                    }
                    else if (value == "new") {
                        this.notew[i].settingEl.hide();
                        this.folderw[i].settingEl.show();
                        this.modew[i].settingEl.hide();
                    }
                    else if (value == "specific") {
                        this.notew[i].settingEl.show();
                        this.folderw[i].settingEl.hide();
                        this.modew[i].settingEl.show();
                    }
                    return [2 /*return*/];
                });
            }); }); });
            this_1.writeChoice[i].components[0].addOption("daily", "Daily Note");
            this_1.writeChoice[i].components[0].addOption("new", "New Note");
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
            if (this_1.plugin.settings.buttons[i].writeChoice !== "note")
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
            if (this_1.plugin.settings.buttons[i].writeChoice !== "note")
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
            this_1.writeStr[i] = new obsidian.Setting(this_1.writeDiv[i])
                .setName('Written?')
                .setDesc('The string to be written to the file.  May contain variables.')
                .addText(function (text) { return text
                .setPlaceholder('String')
                .setValue(_this.plugin.settings.buttons[i].writeString)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.plugin.settings.buttons[i].writeString = value;
                    return [2 /*return*/];
                });
            }); }); });
            this_1.writeStr[i].settingEl.show();
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
            this_1.cameraLink[i] = new obsidian.Setting(this_1.cameraDiv[i])
                .setName('Insert link?')
                .setDesc('Insert a link to image file?')
                .addDropdown(function (drop) { return drop
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.plugin.settings.buttons[i].cameraLink = value;
                    if (value == "no" || value == "daily") {
                        this.cameraNote[i].settingEl.hide();
                        this.cameraBookmark[i].settingEl.hide();
                    }
                    else if (value == "note") {
                        this.cameraNote[i].settingEl.show();
                        this.cameraBookmark[i].settingEl.hide();
                    }
                    else if (value == "bookmark") {
                        this.cameraNote[i].settingEl.hide();
                        this.cameraBookmark[i].settingEl.show();
                    }
                    return [2 /*return*/];
                });
            }); }); });
            this_1.cameraLink[i].components[0].addOption("no", "No");
            this_1.cameraLink[i].components[0].addOption("daily", "Daily Note");
            this_1.cameraLink[i].components[0].addOption("note", "Note");
            this_1.cameraLink[i].components[0].addOption("bookmark", "Bookmark");
            this_1.cameraNote[i] = new obsidian.Setting(this_1.cameraDiv[i])
                .setName('Note Name?')
                .setDesc('Select the note for link insertion.')
                .addText(function (text) { return text
                .setPlaceholder('Note name')
                .setValue(_this.plugin.settings.buttons[i].cameraNote)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.plugin.settings.buttons[i].cameraNote = value;
                    return [2 /*return*/];
                });
            }); }); });
            this_1.cameraNote[i].settingEl.hide();
            this_1.cameraBookmark[i] = new obsidian.Setting(this_1.cameraDiv[i])
                .setName('Bookmark Name?')
                .setDesc('Select the bookmark for link insertion.')
                .addText(function (text) { return text
                .setPlaceholder('Bookmark name')
                .setValue(_this.plugin.settings.buttons[i].cameraBookmark)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.plugin.settings.buttons[i].cameraBookmark = value;
                    return [2 /*return*/];
                });
            }); }); });
            this_1.cameraBookmark[i].settingEl.hide();
            value = this_1.plugin.settings.buttons[i].cameraLink;
            this_1.cameraLink[i].components[0].setValue(value);
            if (this_1.plugin.settings.buttons[i].action == "camera") {
                if (value == "no" || value == "daily") {
                    this_1.cameraNote[i].settingEl.hide();
                    this_1.cameraBookmark[i].settingEl.hide();
                }
                else if (value == "note") {
                    this_1.cameraNote[i].settingEl.show();
                    this_1.cameraBookmark[i].settingEl.hide();
                }
                else if (value == "bookmark") {
                    this_1.cameraNote[i].settingEl.hide();
                    this_1.cameraBookmark[i].settingEl.show();
                }
            }
            this_1.cameraDiv[i].hide();
            // -- Task -- (almost the same as write)
            this_1.taskDiv[i] = this_1.buttonDiv[i].createDiv();
            this_1.tasktags[i] = new obsidian.Setting(this_1.taskDiv[i])
                .setName('Predefined tags')
                .setDesc('Specify tags to be added to the task.')
                .addText(function (text) { return text
                .setPlaceholder('Tags')
                .setValue(_this.plugin.settings.buttons[i].tasktags)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.plugin.settings.buttons[i].tasktags = value;
                    return [2 /*return*/];
                });
            }); }); });
            this_1.taskDiv[i].hide();
            if (this_1.plugin.settings.buttons[i].useButton) {
                this_1.buttonDiv[i].show();
                value = this_1.plugin.settings.buttons[i].action;
                if (value == "open") {
                    this_1.openDiv[i].show();
                    this_1.writeDiv[i].hide();
                    this_1.commandDiv[i].hide();
                    this_1.cameraDiv[i].hide();
                    this_1.taskDiv[i].hide();
                }
                else if (value == "write") {
                    this_1.openDiv[i].hide();
                    this_1.writeDiv[i].show();
                    this_1.commandDiv[i].hide();
                    this_1.cameraDiv[i].hide();
                    this_1.taskDiv[i].hide();
                }
                else if (value == "command") {
                    this_1.openDiv[i].hide();
                    this_1.writeDiv[i].hide();
                    this_1.commandDiv[i].show();
                    this_1.cameraDiv[i].hide();
                    this_1.taskDiv[i].hide();
                }
                else if (value == "camera") {
                    this_1.openDiv[i].hide();
                    this_1.writeDiv[i].hide();
                    this_1.commandDiv[i].hide();
                    this_1.cameraDiv[i].show();
                    this_1.taskDiv[i].hide();
                }
                else if (value == "task") {
                    this_1.openDiv[i].hide();
                    this_1.writeDiv[i].hide();
                    this_1.commandDiv[i].hide();
                    this_1.cameraDiv[i].hide();
                    this_1.taskDiv[i].show();
                }
                else {
                    this_1.openDiv[i].hide();
                    this_1.writeDiv[i].hide();
                    this_1.commandDiv[i].hide();
                    this_1.cameraDiv[i].hide();
                    this_1.taskDiv[i].hide();
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
            var _a, _b, i, value, str, taf, jsonfile;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log("Saving settings");
                        this.plugin.saveData(this.plugin.settings);
                        this.plugin.saveSettings();
                        console.log(this.plugin.settings);
                        console.log("Generating JSON");
                        this.json = '{ "dailynoteloc": "';
                        _a = this;
                        _b = _a.json;
                        return [4 /*yield*/, getDailyNoteSettingsPath()];
                    case 1:
                        _a.json = _b + ((_c.sent()) + '", ');
                        console.log(this.json);
                        this.json += '"vault1": "' + this.plugin.settings.vault1 + '", ';
                        this.json += '"vault2": "' + this.plugin.settings.vault2 + '", ';
                        this.json += '"vault3": "' + this.plugin.settings.vault3 + '", ';
                        this.json += '"buttons": [';
                        for (i = 0; i < this.numberOfButtons; i++) {
                            if (this.plugin.settings.buttons[i].useButton) {
                                this.json += '{ "button": ' + (i + 1) + ', ';
                                this.json += '"label": "' + this.plugin.settings.buttons[i].label + '", ';
                                if (this.plugin.settings.buttons[i].vault == "")
                                    this.json += '"vault": "' + this.plugin.settings.vault1 + '", ';
                                else
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
                                    if (this.plugin.settings.buttons[i].writeChoice == "daily") {
                                        this.json += 'daily", ';
                                    }
                                    else if (this.plugin.settings.buttons[i].writeChoice == "specific") {
                                        this.json += this.plugin.settings.buttons[i].notew + '", ';
                                    }
                                    else if (this.plugin.settings.buttons[i].writeChoice == "new") {
                                        this.json += 'new", "folder": "' + this.plugin.settings.buttons[i].folderw + '", ';
                                    }
                                    this.json += '"lines": "' + this.plugin.settings.buttons[i].writeLines + '", ';
                                    this.json += '"mode": "' + this.plugin.settings.buttons[i].modew + '", ';
                                    this.json += '"prompt": "' + this.plugin.settings.buttons[i].promptw + '",';
                                    this.json += '"writeString": "' + this.plugin.settings.buttons[i].writeString + '"';
                                    // Action = "command"
                                }
                                else if (this.plugin.settings.buttons[i].action == "command") {
                                    value = this.plugin.settings.buttons[i].command;
                                    str = value.replace(/ /g, '_');
                                    this.json += '"action": "' + this.plugin.settings.buttons[i].action + ' ' + str + ' ';
                                    if (this.plugin.settings.buttons[i].commmandChoice == "daily") {
                                        this.json += 'daily"';
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
                                    this.json += '"action": "' + this.plugin.settings.buttons[i].action + '", ';
                                    this.json += '"folder": "' + this.plugin.settings.buttons[i].cameraFolder + '", ';
                                    this.json += '"cameraLink": "' + this.plugin.settings.buttons[i].cameraLink + '", ';
                                    this.json += '"cameraNote": "' + this.plugin.settings.buttons[i].cameraNote + '", ';
                                    this.json += '"cameraBookmark": "' + this.plugin.settings.buttons[i].cameraBookmark + '" ';
                                    // Action = "task"
                                }
                                else if (this.plugin.settings.buttons[i].action == "task") {
                                    this.json += '"action": "' + this.plugin.settings.buttons[i].action + '", ';
                                    this.json += '"tags": "' + this.plugin.settings.buttons[i].tasktags + '" ';
                                }
                                this.json += "},";
                            }
                        }
                        this.json += ']}';
                        console.log(this.json);
                        taf = this.app.vault.getAbstractFileByPath("kaapata.json");
                        return [4 /*yield*/, this.app.vault.delete(taf)];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, this.app.vault.create("kaapata.json", this.json)];
                    case 3:
                        jsonfile = _c.sent();
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
    vault1: "Base",
    vault2: "Base",
    vault3: "Base",
    buttons: [
        {
            useButton: false,
            label: "",
            image: "",
            vault: "",
            action: "open",
            openChoice: "note",
            noteName: "",
            bookmarkName: "",
            writeLines: "one",
            writeChoice: "note",
            notew: "",
            folderw: "",
            modew: "Mode",
            promptw: "",
            writeString: "{{input}}",
            command: "",
            commmandChoice: "note",
            commandNote: "",
            commandBookmark: "",
            cameraFolder: "",
            cameraLink: "",
            cameraNote: "",
            cameraBookmark: "",
            tasktags: ""
        },
        {
            useButton: false,
            label: "",
            image: "",
            vault: "",
            action: "open",
            openChoice: "note",
            noteName: "",
            bookmarkName: "",
            writeLines: "one",
            writeChoice: "note",
            notew: "",
            folderw: "",
            modew: "Mode",
            promptw: "",
            writeString: "{{input}}",
            command: "",
            commmandChoice: "note",
            commandNote: "",
            commandBookmark: "",
            cameraFolder: "",
            cameraLink: "",
            cameraNote: "",
            cameraBookmark: "",
            tasktags: ""
        },
        {
            useButton: false,
            label: "",
            image: "",
            vault: "",
            action: "open",
            openChoice: "note",
            noteName: "",
            bookmarkName: "",
            writeLines: "one",
            writeChoice: "note",
            notew: "",
            folderw: "",
            modew: "Mode",
            promptw: "",
            writeString: "{{input}}",
            command: "",
            commmandChoice: "note",
            commandNote: "",
            commandBookmark: "",
            cameraFolder: "",
            cameraLink: "",
            cameraNote: "",
            cameraBookmark: "",
            tasktags: ""
        },
        {
            useButton: false,
            label: "",
            image: "",
            vault: "",
            action: "open",
            openChoice: "note",
            noteName: "",
            bookmarkName: "",
            writeLines: "one",
            writeChoice: "note",
            notew: "",
            folderw: "",
            modew: "Mode",
            promptw: "",
            writeString: "{{input}}",
            command: "",
            commmandChoice: "note",
            commandNote: "",
            commandBookmark: "",
            cameraFolder: "",
            cameraLink: "",
            cameraNote: "",
            cameraBookmark: "",
            tasktags: ""
        },
        {
            useButton: false,
            label: "",
            image: "",
            vault: "",
            action: "open",
            openChoice: "note",
            noteName: "",
            bookmarkName: "",
            writeLines: "one",
            writeChoice: "note",
            notew: "",
            folderw: "",
            modew: "Mode",
            promptw: "",
            writeString: "{{input}}",
            command: "",
            commmandChoice: "note",
            commandNote: "",
            commandBookmark: "",
            cameraFolder: "",
            cameraLink: "",
            cameraNote: "",
            cameraBookmark: "",
            tasktags: ""
        },
        {
            useButton: false,
            label: "",
            image: "",
            vault: "",
            action: "open",
            openChoice: "note",
            noteName: "",
            bookmarkName: "",
            writeLines: "one",
            writeChoice: "note",
            notew: "",
            folderw: "",
            modew: "Mode",
            promptw: "",
            writeString: "{{input}}",
            command: "",
            commmandChoice: "note",
            commandNote: "",
            commandBookmark: "",
            cameraFolder: "",
            cameraLink: "",
            cameraNote: "",
            cameraBookmark: "",
            tasktags: ""
        }
    ]
};
var kaapata = /** @class */ (function (_super) {
    __extends(kaapata, _super);
    function kaapata() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.version = "0.1.0 (02282024)";
        return _this;
    }
    kaapata.prototype.onInit = function () {
    };
    kaapata.prototype.onload = function () {
        console.log('Loading Kaapata plugin, version ' + this.version);
        this.loadSettings();
        this.addSettingTab(new Configure(this.app, this));
    };
    kaapata.prototype.onunload = function () {
        console.log('unloading plugin');
    };
    kaapata.prototype.loadSettings = function () {
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
    kaapata.prototype.saveSettings = function () {
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
    return kaapata;
}(obsidian.Plugin));

module.exports = kaapata;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5vZGVfbW9kdWxlcy9vYnNpZGlhbi1kYWlseS1ub3Rlcy1pbnRlcmZhY2UvZGlzdC9tYWluLmpzIiwiRGFpbHlOb3RlLnRzIiwiQ29uZmlndXJlLnRzIiwibWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UsIFN1cHByZXNzZWRFcnJvciwgU3ltYm9sICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2VzRGVjb3JhdGUoY3RvciwgZGVzY3JpcHRvckluLCBkZWNvcmF0b3JzLCBjb250ZXh0SW4sIGluaXRpYWxpemVycywgZXh0cmFJbml0aWFsaXplcnMpIHtcclxuICAgIGZ1bmN0aW9uIGFjY2VwdChmKSB7IGlmIChmICE9PSB2b2lkIDAgJiYgdHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZ1bmN0aW9uIGV4cGVjdGVkXCIpOyByZXR1cm4gZjsgfVxyXG4gICAgdmFyIGtpbmQgPSBjb250ZXh0SW4ua2luZCwga2V5ID0ga2luZCA9PT0gXCJnZXR0ZXJcIiA/IFwiZ2V0XCIgOiBraW5kID09PSBcInNldHRlclwiID8gXCJzZXRcIiA6IFwidmFsdWVcIjtcclxuICAgIHZhciB0YXJnZXQgPSAhZGVzY3JpcHRvckluICYmIGN0b3IgPyBjb250ZXh0SW5bXCJzdGF0aWNcIl0gPyBjdG9yIDogY3Rvci5wcm90b3R5cGUgOiBudWxsO1xyXG4gICAgdmFyIGRlc2NyaXB0b3IgPSBkZXNjcmlwdG9ySW4gfHwgKHRhcmdldCA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSkgOiB7fSk7XHJcbiAgICB2YXIgXywgZG9uZSA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluKSBjb250ZXh0W3BdID0gcCA9PT0gXCJhY2Nlc3NcIiA/IHt9IDogY29udGV4dEluW3BdO1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluLmFjY2VzcykgY29udGV4dC5hY2Nlc3NbcF0gPSBjb250ZXh0SW4uYWNjZXNzW3BdO1xyXG4gICAgICAgIGNvbnRleHQuYWRkSW5pdGlhbGl6ZXIgPSBmdW5jdGlvbiAoZikgeyBpZiAoZG9uZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBhZGQgaW5pdGlhbGl6ZXJzIGFmdGVyIGRlY29yYXRpb24gaGFzIGNvbXBsZXRlZFwiKTsgZXh0cmFJbml0aWFsaXplcnMucHVzaChhY2NlcHQoZiB8fCBudWxsKSk7IH07XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9ICgwLCBkZWNvcmF0b3JzW2ldKShraW5kID09PSBcImFjY2Vzc29yXCIgPyB7IGdldDogZGVzY3JpcHRvci5nZXQsIHNldDogZGVzY3JpcHRvci5zZXQgfSA6IGRlc2NyaXB0b3Jba2V5XSwgY29udGV4dCk7XHJcbiAgICAgICAgaWYgKGtpbmQgPT09IFwiYWNjZXNzb3JcIikge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHR5cGVvZiByZXN1bHQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5nZXQpKSBkZXNjcmlwdG9yLmdldCA9IF87XHJcbiAgICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5zZXQpKSBkZXNjcmlwdG9yLnNldCA9IF87XHJcbiAgICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5pbml0KSkgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKF8gPSBhY2NlcHQocmVzdWx0KSkge1xyXG4gICAgICAgICAgICBpZiAoa2luZCA9PT0gXCJmaWVsZFwiKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcclxuICAgICAgICAgICAgZWxzZSBkZXNjcmlwdG9yW2tleV0gPSBfO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0YXJnZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbnRleHRJbi5uYW1lLCBkZXNjcmlwdG9yKTtcclxuICAgIGRvbmUgPSB0cnVlO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcnVuSW5pdGlhbGl6ZXJzKHRoaXNBcmcsIGluaXRpYWxpemVycywgdmFsdWUpIHtcclxuICAgIHZhciB1c2VWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbml0aWFsaXplcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YWx1ZSA9IHVzZVZhbHVlID8gaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZywgdmFsdWUpIDogaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXNlVmFsdWUgPyB2YWx1ZSA6IHZvaWQgMDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Byb3BLZXkoeCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiID8geCA6IFwiXCIuY29uY2F0KHgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc2V0RnVuY3Rpb25OYW1lKGYsIG5hbWUsIHByZWZpeCkge1xyXG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiKSBuYW1lID0gbmFtZS5kZXNjcmlwdGlvbiA/IFwiW1wiLmNvbmNhdChuYW1lLmRlc2NyaXB0aW9uLCBcIl1cIikgOiBcIlwiO1xyXG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcIm5hbWVcIiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBwcmVmaXggPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiIFwiLCBuYW1lKSA6IG5hbWUgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XHJcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xyXG4gICAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBmYWxzZSB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcclxuICAgIGlmIChyZWNlaXZlciA9PT0gbnVsbCB8fCAodHlwZW9mIHJlY2VpdmVyICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiByZWNlaXZlciAhPT0gXCJmdW5jdGlvblwiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB1c2UgJ2luJyBvcGVyYXRvciBvbiBub24tb2JqZWN0XCIpO1xyXG4gICAgcmV0dXJuIHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgPT09IHN0YXRlIDogc3RhdGUuaGFzKHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlKGVudiwgdmFsdWUsIGFzeW5jKSB7XHJcbiAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWQuXCIpO1xyXG4gICAgICAgIHZhciBkaXNwb3NlO1xyXG4gICAgICAgIGlmIChhc3luYykge1xyXG4gICAgICAgICAgICBpZiAoIVN5bWJvbC5hc3luY0Rpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNEaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgICAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5hc3luY0Rpc3Bvc2VdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGlzcG9zZSA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIGlmICghU3ltYm9sLmRpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuZGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuZGlzcG9zZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgZGlzcG9zZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IG5vdCBkaXNwb3NhYmxlLlwiKTtcclxuICAgICAgICBlbnYuc3RhY2sucHVzaCh7IHZhbHVlOiB2YWx1ZSwgZGlzcG9zZTogZGlzcG9zZSwgYXN5bmM6IGFzeW5jIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoYXN5bmMpIHtcclxuICAgICAgICBlbnYuc3RhY2sucHVzaCh7IGFzeW5jOiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG52YXIgX1N1cHByZXNzZWRFcnJvciA9IHR5cGVvZiBTdXBwcmVzc2VkRXJyb3IgPT09IFwiZnVuY3Rpb25cIiA/IFN1cHByZXNzZWRFcnJvciA6IGZ1bmN0aW9uIChlcnJvciwgc3VwcHJlc3NlZCwgbWVzc2FnZSkge1xyXG4gICAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICByZXR1cm4gZS5uYW1lID0gXCJTdXBwcmVzc2VkRXJyb3JcIiwgZS5lcnJvciA9IGVycm9yLCBlLnN1cHByZXNzZWQgPSBzdXBwcmVzc2VkLCBlO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGlzcG9zZVJlc291cmNlcyhlbnYpIHtcclxuICAgIGZ1bmN0aW9uIGZhaWwoZSkge1xyXG4gICAgICAgIGVudi5lcnJvciA9IGVudi5oYXNFcnJvciA/IG5ldyBfU3VwcHJlc3NlZEVycm9yKGUsIGVudi5lcnJvciwgXCJBbiBlcnJvciB3YXMgc3VwcHJlc3NlZCBkdXJpbmcgZGlzcG9zYWwuXCIpIDogZTtcclxuICAgICAgICBlbnYuaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgICAgICB3aGlsZSAoZW52LnN0YWNrLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgcmVjID0gZW52LnN0YWNrLnBvcCgpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlYy5kaXNwb3NlICYmIHJlYy5kaXNwb3NlLmNhbGwocmVjLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZWMuYXN5bmMpIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KS50aGVuKG5leHQsIGZ1bmN0aW9uKGUpIHsgZmFpbChlKTsgcmV0dXJuIG5leHQoKTsgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGZhaWwoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVudi5oYXNFcnJvcikgdGhyb3cgZW52LmVycm9yO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgX19leHRlbmRzOiBfX2V4dGVuZHMsXHJcbiAgICBfX2Fzc2lnbjogX19hc3NpZ24sXHJcbiAgICBfX3Jlc3Q6IF9fcmVzdCxcclxuICAgIF9fZGVjb3JhdGU6IF9fZGVjb3JhdGUsXHJcbiAgICBfX3BhcmFtOiBfX3BhcmFtLFxyXG4gICAgX19tZXRhZGF0YTogX19tZXRhZGF0YSxcclxuICAgIF9fYXdhaXRlcjogX19hd2FpdGVyLFxyXG4gICAgX19nZW5lcmF0b3I6IF9fZ2VuZXJhdG9yLFxyXG4gICAgX19jcmVhdGVCaW5kaW5nOiBfX2NyZWF0ZUJpbmRpbmcsXHJcbiAgICBfX2V4cG9ydFN0YXI6IF9fZXhwb3J0U3RhcixcclxuICAgIF9fdmFsdWVzOiBfX3ZhbHVlcyxcclxuICAgIF9fcmVhZDogX19yZWFkLFxyXG4gICAgX19zcHJlYWQ6IF9fc3ByZWFkLFxyXG4gICAgX19zcHJlYWRBcnJheXM6IF9fc3ByZWFkQXJyYXlzLFxyXG4gICAgX19zcHJlYWRBcnJheTogX19zcHJlYWRBcnJheSxcclxuICAgIF9fYXdhaXQ6IF9fYXdhaXQsXHJcbiAgICBfX2FzeW5jR2VuZXJhdG9yOiBfX2FzeW5jR2VuZXJhdG9yLFxyXG4gICAgX19hc3luY0RlbGVnYXRvcjogX19hc3luY0RlbGVnYXRvcixcclxuICAgIF9fYXN5bmNWYWx1ZXM6IF9fYXN5bmNWYWx1ZXMsXHJcbiAgICBfX21ha2VUZW1wbGF0ZU9iamVjdDogX19tYWtlVGVtcGxhdGVPYmplY3QsXHJcbiAgICBfX2ltcG9ydFN0YXI6IF9faW1wb3J0U3RhcixcclxuICAgIF9faW1wb3J0RGVmYXVsdDogX19pbXBvcnREZWZhdWx0LFxyXG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldDogX19jbGFzc1ByaXZhdGVGaWVsZEdldCxcclxuICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQ6IF9fY2xhc3NQcml2YXRlRmllbGRTZXQsXHJcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkSW46IF9fY2xhc3NQcml2YXRlRmllbGRJbixcclxuICAgIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlOiBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZSxcclxuICAgIF9fZGlzcG9zZVJlc291cmNlczogX19kaXNwb3NlUmVzb3VyY2VzLFxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBvYnNpZGlhbiA9IHJlcXVpcmUoJ29ic2lkaWFuJyk7XG5cbmNvbnN0IERFRkFVTFRfREFJTFlfTk9URV9GT1JNQVQgPSBcIllZWVktTU0tRERcIjtcbmNvbnN0IERFRkFVTFRfV0VFS0xZX05PVEVfRk9STUFUID0gXCJnZ2dnLVtXXXd3XCI7XG5jb25zdCBERUZBVUxUX01PTlRITFlfTk9URV9GT1JNQVQgPSBcIllZWVktTU1cIjtcbmNvbnN0IERFRkFVTFRfUVVBUlRFUkxZX05PVEVfRk9STUFUID0gXCJZWVlZLVtRXVFcIjtcbmNvbnN0IERFRkFVTFRfWUVBUkxZX05PVEVfRk9STUFUID0gXCJZWVlZXCI7XG5cbmZ1bmN0aW9uIHNob3VsZFVzZVBlcmlvZGljTm90ZXNTZXR0aW5ncyhwZXJpb2RpY2l0eSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgY29uc3QgcGVyaW9kaWNOb3RlcyA9IHdpbmRvdy5hcHAucGx1Z2lucy5nZXRQbHVnaW4oXCJwZXJpb2RpYy1ub3Rlc1wiKTtcbiAgICByZXR1cm4gcGVyaW9kaWNOb3RlcyAmJiBwZXJpb2RpY05vdGVzLnNldHRpbmdzPy5bcGVyaW9kaWNpdHldPy5lbmFibGVkO1xufVxuLyoqXG4gKiBSZWFkIHRoZSB1c2VyIHNldHRpbmdzIGZvciB0aGUgYGRhaWx5LW5vdGVzYCBwbHVnaW5cbiAqIHRvIGtlZXAgYmVoYXZpb3Igb2YgY3JlYXRpbmcgYSBuZXcgbm90ZSBpbi1zeW5jLlxuICovXG5mdW5jdGlvbiBnZXREYWlseU5vdGVTZXR0aW5ncygpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICBjb25zdCB7IGludGVybmFsUGx1Z2lucywgcGx1Z2lucyB9ID0gd2luZG93LmFwcDtcbiAgICAgICAgaWYgKHNob3VsZFVzZVBlcmlvZGljTm90ZXNTZXR0aW5ncyhcImRhaWx5XCIpKSB7XG4gICAgICAgICAgICBjb25zdCB7IGZvcm1hdCwgZm9sZGVyLCB0ZW1wbGF0ZSB9ID0gcGx1Z2lucy5nZXRQbHVnaW4oXCJwZXJpb2RpYy1ub3Rlc1wiKT8uc2V0dGluZ3M/LmRhaWx5IHx8IHt9O1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGZvcm1hdCB8fCBERUZBVUxUX0RBSUxZX05PVEVfRk9STUFULFxuICAgICAgICAgICAgICAgIGZvbGRlcjogZm9sZGVyPy50cmltKCkgfHwgXCJcIixcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGU/LnRyaW0oKSB8fCBcIlwiLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGZvbGRlciwgZm9ybWF0LCB0ZW1wbGF0ZSB9ID0gaW50ZXJuYWxQbHVnaW5zLmdldFBsdWdpbkJ5SWQoXCJkYWlseS1ub3Rlc1wiKT8uaW5zdGFuY2U/Lm9wdGlvbnMgfHwge307XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmb3JtYXQ6IGZvcm1hdCB8fCBERUZBVUxUX0RBSUxZX05PVEVfRk9STUFULFxuICAgICAgICAgICAgZm9sZGVyOiBmb2xkZXI/LnRyaW0oKSB8fCBcIlwiLFxuICAgICAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlPy50cmltKCkgfHwgXCJcIixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmluZm8oXCJObyBjdXN0b20gZGFpbHkgbm90ZSBzZXR0aW5ncyBmb3VuZCFcIiwgZXJyKTtcbiAgICB9XG59XG4vKipcbiAqIFJlYWQgdGhlIHVzZXIgc2V0dGluZ3MgZm9yIHRoZSBgd2Vla2x5LW5vdGVzYCBwbHVnaW5cbiAqIHRvIGtlZXAgYmVoYXZpb3Igb2YgY3JlYXRpbmcgYSBuZXcgbm90ZSBpbi1zeW5jLlxuICovXG5mdW5jdGlvbiBnZXRXZWVrbHlOb3RlU2V0dGluZ3MoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgY29uc3QgcGx1Z2luTWFuYWdlciA9IHdpbmRvdy5hcHAucGx1Z2lucztcbiAgICAgICAgY29uc3QgY2FsZW5kYXJTZXR0aW5ncyA9IHBsdWdpbk1hbmFnZXIuZ2V0UGx1Z2luKFwiY2FsZW5kYXJcIik/Lm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHBlcmlvZGljTm90ZXNTZXR0aW5ncyA9IHBsdWdpbk1hbmFnZXIuZ2V0UGx1Z2luKFwicGVyaW9kaWMtbm90ZXNcIik/LnNldHRpbmdzPy53ZWVrbHk7XG4gICAgICAgIGlmIChzaG91bGRVc2VQZXJpb2RpY05vdGVzU2V0dGluZ3MoXCJ3ZWVrbHlcIikpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZm9ybWF0OiBwZXJpb2RpY05vdGVzU2V0dGluZ3MuZm9ybWF0IHx8IERFRkFVTFRfV0VFS0xZX05PVEVfRk9STUFULFxuICAgICAgICAgICAgICAgIGZvbGRlcjogcGVyaW9kaWNOb3Rlc1NldHRpbmdzLmZvbGRlcj8udHJpbSgpIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHBlcmlvZGljTm90ZXNTZXR0aW5ncy50ZW1wbGF0ZT8udHJpbSgpIHx8IFwiXCIsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gY2FsZW5kYXJTZXR0aW5ncyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZvcm1hdDogc2V0dGluZ3Mud2Vla2x5Tm90ZUZvcm1hdCB8fCBERUZBVUxUX1dFRUtMWV9OT1RFX0ZPUk1BVCxcbiAgICAgICAgICAgIGZvbGRlcjogc2V0dGluZ3Mud2Vla2x5Tm90ZUZvbGRlcj8udHJpbSgpIHx8IFwiXCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogc2V0dGluZ3Mud2Vla2x5Tm90ZVRlbXBsYXRlPy50cmltKCkgfHwgXCJcIixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmluZm8oXCJObyBjdXN0b20gd2Vla2x5IG5vdGUgc2V0dGluZ3MgZm91bmQhXCIsIGVycik7XG4gICAgfVxufVxuLyoqXG4gKiBSZWFkIHRoZSB1c2VyIHNldHRpbmdzIGZvciB0aGUgYHBlcmlvZGljLW5vdGVzYCBwbHVnaW5cbiAqIHRvIGtlZXAgYmVoYXZpb3Igb2YgY3JlYXRpbmcgYSBuZXcgbm90ZSBpbi1zeW5jLlxuICovXG5mdW5jdGlvbiBnZXRNb250aGx5Tm90ZVNldHRpbmdzKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgY29uc3QgcGx1Z2luTWFuYWdlciA9IHdpbmRvdy5hcHAucGx1Z2lucztcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IChzaG91bGRVc2VQZXJpb2RpY05vdGVzU2V0dGluZ3MoXCJtb250aGx5XCIpICYmXG4gICAgICAgICAgICBwbHVnaW5NYW5hZ2VyLmdldFBsdWdpbihcInBlcmlvZGljLW5vdGVzXCIpPy5zZXR0aW5ncz8ubW9udGhseSkgfHxcbiAgICAgICAgICAgIHt9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZm9ybWF0OiBzZXR0aW5ncy5mb3JtYXQgfHwgREVGQVVMVF9NT05USExZX05PVEVfRk9STUFULFxuICAgICAgICAgICAgZm9sZGVyOiBzZXR0aW5ncy5mb2xkZXI/LnRyaW0oKSB8fCBcIlwiLFxuICAgICAgICAgICAgdGVtcGxhdGU6IHNldHRpbmdzLnRlbXBsYXRlPy50cmltKCkgfHwgXCJcIixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmluZm8oXCJObyBjdXN0b20gbW9udGhseSBub3RlIHNldHRpbmdzIGZvdW5kIVwiLCBlcnIpO1xuICAgIH1cbn1cbi8qKlxuICogUmVhZCB0aGUgdXNlciBzZXR0aW5ncyBmb3IgdGhlIGBwZXJpb2RpYy1ub3Rlc2AgcGx1Z2luXG4gKiB0byBrZWVwIGJlaGF2aW9yIG9mIGNyZWF0aW5nIGEgbmV3IG5vdGUgaW4tc3luYy5cbiAqL1xuZnVuY3Rpb24gZ2V0UXVhcnRlcmx5Tm90ZVNldHRpbmdzKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgY29uc3QgcGx1Z2luTWFuYWdlciA9IHdpbmRvdy5hcHAucGx1Z2lucztcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IChzaG91bGRVc2VQZXJpb2RpY05vdGVzU2V0dGluZ3MoXCJxdWFydGVybHlcIikgJiZcbiAgICAgICAgICAgIHBsdWdpbk1hbmFnZXIuZ2V0UGx1Z2luKFwicGVyaW9kaWMtbm90ZXNcIik/LnNldHRpbmdzPy5xdWFydGVybHkpIHx8XG4gICAgICAgICAgICB7fTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZvcm1hdDogc2V0dGluZ3MuZm9ybWF0IHx8IERFRkFVTFRfUVVBUlRFUkxZX05PVEVfRk9STUFULFxuICAgICAgICAgICAgZm9sZGVyOiBzZXR0aW5ncy5mb2xkZXI/LnRyaW0oKSB8fCBcIlwiLFxuICAgICAgICAgICAgdGVtcGxhdGU6IHNldHRpbmdzLnRlbXBsYXRlPy50cmltKCkgfHwgXCJcIixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmluZm8oXCJObyBjdXN0b20gcXVhcnRlcmx5IG5vdGUgc2V0dGluZ3MgZm91bmQhXCIsIGVycik7XG4gICAgfVxufVxuLyoqXG4gKiBSZWFkIHRoZSB1c2VyIHNldHRpbmdzIGZvciB0aGUgYHBlcmlvZGljLW5vdGVzYCBwbHVnaW5cbiAqIHRvIGtlZXAgYmVoYXZpb3Igb2YgY3JlYXRpbmcgYSBuZXcgbm90ZSBpbi1zeW5jLlxuICovXG5mdW5jdGlvbiBnZXRZZWFybHlOb3RlU2V0dGluZ3MoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBjb25zdCBwbHVnaW5NYW5hZ2VyID0gd2luZG93LmFwcC5wbHVnaW5zO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gKHNob3VsZFVzZVBlcmlvZGljTm90ZXNTZXR0aW5ncyhcInllYXJseVwiKSAmJlxuICAgICAgICAgICAgcGx1Z2luTWFuYWdlci5nZXRQbHVnaW4oXCJwZXJpb2RpYy1ub3Rlc1wiKT8uc2V0dGluZ3M/LnllYXJseSkgfHxcbiAgICAgICAgICAgIHt9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZm9ybWF0OiBzZXR0aW5ncy5mb3JtYXQgfHwgREVGQVVMVF9ZRUFSTFlfTk9URV9GT1JNQVQsXG4gICAgICAgICAgICBmb2xkZXI6IHNldHRpbmdzLmZvbGRlcj8udHJpbSgpIHx8IFwiXCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogc2V0dGluZ3MudGVtcGxhdGU/LnRyaW0oKSB8fCBcIlwiLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhcIk5vIGN1c3RvbSB5ZWFybHkgbm90ZSBzZXR0aW5ncyBmb3VuZCFcIiwgZXJyKTtcbiAgICB9XG59XG5cbi8vIENyZWRpdDogQGNyZWF0aW9uaXgvcGF0aC5qc1xuZnVuY3Rpb24gam9pbiguLi5wYXJ0U2VnbWVudHMpIHtcbiAgICAvLyBTcGxpdCB0aGUgaW5wdXRzIGludG8gYSBsaXN0IG9mIHBhdGggY29tbWFuZHMuXG4gICAgbGV0IHBhcnRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBwYXJ0U2VnbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHBhcnRzID0gcGFydHMuY29uY2F0KHBhcnRTZWdtZW50c1tpXS5zcGxpdChcIi9cIikpO1xuICAgIH1cbiAgICAvLyBJbnRlcnByZXQgdGhlIHBhdGggY29tbWFuZHMgdG8gZ2V0IHRoZSBuZXcgcmVzb2x2ZWQgcGF0aC5cbiAgICBjb25zdCBuZXdQYXJ0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gcGFydHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgICAgLy8gUmVtb3ZlIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXNcbiAgICAgICAgLy8gQWxzbyByZW1vdmUgXCIuXCIgc2VnbWVudHNcbiAgICAgICAgaWYgKCFwYXJ0IHx8IHBhcnQgPT09IFwiLlwiKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIC8vIFB1c2ggbmV3IHBhdGggc2VnbWVudHMuXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIG5ld1BhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICAgIC8vIFByZXNlcnZlIHRoZSBpbml0aWFsIHNsYXNoIGlmIHRoZXJlIHdhcyBvbmUuXG4gICAgaWYgKHBhcnRzWzBdID09PSBcIlwiKVxuICAgICAgICBuZXdQYXJ0cy51bnNoaWZ0KFwiXCIpO1xuICAgIC8vIFR1cm4gYmFjayBpbnRvIGEgc2luZ2xlIHN0cmluZyBwYXRoLlxuICAgIHJldHVybiBuZXdQYXJ0cy5qb2luKFwiL1wiKTtcbn1cbmZ1bmN0aW9uIGJhc2VuYW1lKGZ1bGxQYXRoKSB7XG4gICAgbGV0IGJhc2UgPSBmdWxsUGF0aC5zdWJzdHJpbmcoZnVsbFBhdGgubGFzdEluZGV4T2YoXCIvXCIpICsgMSk7XG4gICAgaWYgKGJhc2UubGFzdEluZGV4T2YoXCIuXCIpICE9IC0xKVxuICAgICAgICBiYXNlID0gYmFzZS5zdWJzdHJpbmcoMCwgYmFzZS5sYXN0SW5kZXhPZihcIi5cIikpO1xuICAgIHJldHVybiBiYXNlO1xufVxuYXN5bmMgZnVuY3Rpb24gZW5zdXJlRm9sZGVyRXhpc3RzKHBhdGgpIHtcbiAgICBjb25zdCBkaXJzID0gcGF0aC5yZXBsYWNlKC9cXFxcL2csIFwiL1wiKS5zcGxpdChcIi9cIik7XG4gICAgZGlycy5wb3AoKTsgLy8gcmVtb3ZlIGJhc2VuYW1lXG4gICAgaWYgKGRpcnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGRpciA9IGpvaW4oLi4uZGlycyk7XG4gICAgICAgIGlmICghd2luZG93LmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZGlyKSkge1xuICAgICAgICAgICAgYXdhaXQgd2luZG93LmFwcC52YXVsdC5jcmVhdGVGb2xkZXIoZGlyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIGdldE5vdGVQYXRoKGRpcmVjdG9yeSwgZmlsZW5hbWUpIHtcbiAgICBpZiAoIWZpbGVuYW1lLmVuZHNXaXRoKFwiLm1kXCIpKSB7XG4gICAgICAgIGZpbGVuYW1lICs9IFwiLm1kXCI7XG4gICAgfVxuICAgIGNvbnN0IHBhdGggPSBvYnNpZGlhbi5ub3JtYWxpemVQYXRoKGpvaW4oZGlyZWN0b3J5LCBmaWxlbmFtZSkpO1xuICAgIGF3YWl0IGVuc3VyZUZvbGRlckV4aXN0cyhwYXRoKTtcbiAgICByZXR1cm4gcGF0aDtcbn1cbmFzeW5jIGZ1bmN0aW9uIGdldFRlbXBsYXRlSW5mbyh0ZW1wbGF0ZSkge1xuICAgIGNvbnN0IHsgbWV0YWRhdGFDYWNoZSwgdmF1bHQgfSA9IHdpbmRvdy5hcHA7XG4gICAgY29uc3QgdGVtcGxhdGVQYXRoID0gb2JzaWRpYW4ubm9ybWFsaXplUGF0aCh0ZW1wbGF0ZSk7XG4gICAgaWYgKHRlbXBsYXRlUGF0aCA9PT0gXCIvXCIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXCJcIiwgbnVsbF0pO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZUZpbGUgPSBtZXRhZGF0YUNhY2hlLmdldEZpcnN0TGlua3BhdGhEZXN0KHRlbXBsYXRlUGF0aCwgXCJcIik7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRzID0gYXdhaXQgdmF1bHQuY2FjaGVkUmVhZCh0ZW1wbGF0ZUZpbGUpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICBjb25zdCBJRm9sZEluZm8gPSB3aW5kb3cuYXBwLmZvbGRNYW5hZ2VyLmxvYWQodGVtcGxhdGVGaWxlKTtcbiAgICAgICAgcmV0dXJuIFtjb250ZW50cywgSUZvbGRJbmZvXTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gcmVhZCB0aGUgZGFpbHkgbm90ZSB0ZW1wbGF0ZSAnJHt0ZW1wbGF0ZVBhdGh9J2AsIGVycik7XG4gICAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoXCJGYWlsZWQgdG8gcmVhZCB0aGUgZGFpbHkgbm90ZSB0ZW1wbGF0ZVwiKTtcbiAgICAgICAgcmV0dXJuIFtcIlwiLCBudWxsXTtcbiAgICB9XG59XG5cbi8qKlxuICogZGF0ZVVJRCBpcyBhIHdheSBvZiB3ZWVrbHkgaWRlbnRpZnlpbmcgZGFpbHkvd2Vla2x5L21vbnRobHkgbm90ZXMuXG4gKiBUaGV5IGFyZSBwcmVmaXhlZCB3aXRoIHRoZSBncmFudWxhcml0eSB0byBhdm9pZCBhbWJpZ3VpdHkuXG4gKi9cbmZ1bmN0aW9uIGdldERhdGVVSUQoZGF0ZSwgZ3JhbnVsYXJpdHkgPSBcImRheVwiKSB7XG4gICAgY29uc3QgdHMgPSBkYXRlLmNsb25lKCkuc3RhcnRPZihncmFudWxhcml0eSkuZm9ybWF0KCk7XG4gICAgcmV0dXJuIGAke2dyYW51bGFyaXR5fS0ke3RzfWA7XG59XG5mdW5jdGlvbiByZW1vdmVFc2NhcGVkQ2hhcmFjdGVycyhmb3JtYXQpIHtcbiAgICByZXR1cm4gZm9ybWF0LnJlcGxhY2UoL1xcW1teXFxdXSpcXF0vZywgXCJcIik7IC8vIHJlbW92ZSBldmVyeXRoaW5nIHdpdGhpbiBicmFja2V0c1xufVxuLyoqXG4gKiBYWFg6IFdoZW4gcGFyc2luZyBkYXRlcyB0aGF0IGNvbnRhaW4gYm90aCB3ZWVrIG51bWJlcnMgYW5kIG1vbnRocyxcbiAqIE1vbWVudCBjaG9zZXMgdG8gaWdub3JlIHRoZSB3ZWVrIG51bWJlcnMuIEZvciB0aGUgd2VlayBkYXRlVUlELCB3ZVxuICogd2FudCB0aGUgb3Bwb3NpdGUgYmVoYXZpb3IuIFN0cmlwIHRoZSBNTU0gZnJvbSB0aGUgZm9ybWF0IHRvIHBhdGNoLlxuICovXG5mdW5jdGlvbiBpc0Zvcm1hdEFtYmlndW91cyhmb3JtYXQsIGdyYW51bGFyaXR5KSB7XG4gICAgaWYgKGdyYW51bGFyaXR5ID09PSBcIndlZWtcIikge1xuICAgICAgICBjb25zdCBjbGVhbkZvcm1hdCA9IHJlbW92ZUVzY2FwZWRDaGFyYWN0ZXJzKGZvcm1hdCk7XG4gICAgICAgIHJldHVybiAoL3d7MSwyfS9pLnRlc3QoY2xlYW5Gb3JtYXQpICYmXG4gICAgICAgICAgICAoL017MSw0fS8udGVzdChjbGVhbkZvcm1hdCkgfHwgL0R7MSw0fS8udGVzdChjbGVhbkZvcm1hdCkpKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gZ2V0RGF0ZUZyb21GaWxlKGZpbGUsIGdyYW51bGFyaXR5KSB7XG4gICAgcmV0dXJuIGdldERhdGVGcm9tRmlsZW5hbWUoZmlsZS5iYXNlbmFtZSwgZ3JhbnVsYXJpdHkpO1xufVxuZnVuY3Rpb24gZ2V0RGF0ZUZyb21QYXRoKHBhdGgsIGdyYW51bGFyaXR5KSB7XG4gICAgcmV0dXJuIGdldERhdGVGcm9tRmlsZW5hbWUoYmFzZW5hbWUocGF0aCksIGdyYW51bGFyaXR5KTtcbn1cbmZ1bmN0aW9uIGdldERhdGVGcm9tRmlsZW5hbWUoZmlsZW5hbWUsIGdyYW51bGFyaXR5KSB7XG4gICAgY29uc3QgZ2V0U2V0dGluZ3MgPSB7XG4gICAgICAgIGRheTogZ2V0RGFpbHlOb3RlU2V0dGluZ3MsXG4gICAgICAgIHdlZWs6IGdldFdlZWtseU5vdGVTZXR0aW5ncyxcbiAgICAgICAgbW9udGg6IGdldE1vbnRobHlOb3RlU2V0dGluZ3MsXG4gICAgICAgIHF1YXJ0ZXI6IGdldFF1YXJ0ZXJseU5vdGVTZXR0aW5ncyxcbiAgICAgICAgeWVhcjogZ2V0WWVhcmx5Tm90ZVNldHRpbmdzLFxuICAgIH07XG4gICAgY29uc3QgZm9ybWF0ID0gZ2V0U2V0dGluZ3NbZ3JhbnVsYXJpdHldKCkuZm9ybWF0LnNwbGl0KFwiL1wiKS5wb3AoKTtcbiAgICBjb25zdCBub3RlRGF0ZSA9IHdpbmRvdy5tb21lbnQoZmlsZW5hbWUsIGZvcm1hdCwgdHJ1ZSk7XG4gICAgaWYgKCFub3RlRGF0ZS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChpc0Zvcm1hdEFtYmlndW91cyhmb3JtYXQsIGdyYW51bGFyaXR5KSkge1xuICAgICAgICBpZiAoZ3JhbnVsYXJpdHkgPT09IFwid2Vla1wiKSB7XG4gICAgICAgICAgICBjb25zdCBjbGVhbkZvcm1hdCA9IHJlbW92ZUVzY2FwZWRDaGFyYWN0ZXJzKGZvcm1hdCk7XG4gICAgICAgICAgICBpZiAoL3d7MSwyfS9pLnRlc3QoY2xlYW5Gb3JtYXQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5tb21lbnQoZmlsZW5hbWUsIFxuICAgICAgICAgICAgICAgIC8vIElmIGZvcm1hdCBjb250YWlucyB3ZWVrLCByZW1vdmUgZGF5ICYgbW9udGggZm9ybWF0dGluZ1xuICAgICAgICAgICAgICAgIGZvcm1hdC5yZXBsYWNlKC9NezEsNH0vZywgXCJcIikucmVwbGFjZSgvRHsxLDR9L2csIFwiXCIpLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vdGVEYXRlO1xufVxuXG5jbGFzcyBEYWlseU5vdGVzRm9sZGVyTWlzc2luZ0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xufVxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIG1pbWljcyB0aGUgYmVoYXZpb3Igb2YgdGhlIGRhaWx5LW5vdGVzIHBsdWdpblxuICogc28gaXQgd2lsbCByZXBsYWNlIHt7ZGF0ZX19LCB7e3RpdGxlfX0sIGFuZCB7e3RpbWV9fSB3aXRoIHRoZVxuICogZm9ybWF0dGVkIHRpbWVzdGFtcC5cbiAqXG4gKiBOb3RlOiBpdCBoYXMgYW4gYWRkZWQgYm9udXMgdGhhdCBpdCdzIG5vdCAndG9kYXknIHNwZWNpZmljLlxuICovXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVEYWlseU5vdGUoZGF0ZSkge1xuICAgIGNvbnN0IGFwcCA9IHdpbmRvdy5hcHA7XG4gICAgY29uc3QgeyB2YXVsdCB9ID0gYXBwO1xuICAgIGNvbnN0IG1vbWVudCA9IHdpbmRvdy5tb21lbnQ7XG4gICAgY29uc3QgeyB0ZW1wbGF0ZSwgZm9ybWF0LCBmb2xkZXIgfSA9IGdldERhaWx5Tm90ZVNldHRpbmdzKCk7XG4gICAgY29uc3QgW3RlbXBsYXRlQ29udGVudHMsIElGb2xkSW5mb10gPSBhd2FpdCBnZXRUZW1wbGF0ZUluZm8odGVtcGxhdGUpO1xuICAgIGNvbnN0IGZpbGVuYW1lID0gZGF0ZS5mb3JtYXQoZm9ybWF0KTtcbiAgICBjb25zdCBub3JtYWxpemVkUGF0aCA9IGF3YWl0IGdldE5vdGVQYXRoKGZvbGRlciwgZmlsZW5hbWUpO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZWRGaWxlID0gYXdhaXQgdmF1bHQuY3JlYXRlKG5vcm1hbGl6ZWRQYXRoLCB0ZW1wbGF0ZUNvbnRlbnRzXG4gICAgICAgICAgICAucmVwbGFjZSgve3tcXHMqZGF0ZVxccyp9fS9naSwgZmlsZW5hbWUpXG4gICAgICAgICAgICAucmVwbGFjZSgve3tcXHMqdGltZVxccyp9fS9naSwgbW9tZW50KCkuZm9ybWF0KFwiSEg6bW1cIikpXG4gICAgICAgICAgICAucmVwbGFjZSgve3tcXHMqdGl0bGVcXHMqfX0vZ2ksIGZpbGVuYW1lKVxuICAgICAgICAgICAgLnJlcGxhY2UoL3t7XFxzKihkYXRlfHRpbWUpXFxzKigoWystXVxcZCspKFt5cW13ZGhzXSkpP1xccyooOi4rPyk/fX0vZ2ksIChfLCBfdGltZU9yRGF0ZSwgY2FsYywgdGltZURlbHRhLCB1bml0LCBtb21lbnRGb3JtYXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IG1vbWVudCgpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBkYXRlLmNsb25lKCkuc2V0KHtcbiAgICAgICAgICAgICAgICBob3VyOiBub3cuZ2V0KFwiaG91clwiKSxcbiAgICAgICAgICAgICAgICBtaW51dGU6IG5vdy5nZXQoXCJtaW51dGVcIiksXG4gICAgICAgICAgICAgICAgc2Vjb25kOiBub3cuZ2V0KFwic2Vjb25kXCIpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoY2FsYykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnREYXRlLmFkZChwYXJzZUludCh0aW1lRGVsdGEsIDEwKSwgdW5pdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobW9tZW50Rm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnREYXRlLmZvcm1hdChtb21lbnRGb3JtYXQuc3Vic3RyaW5nKDEpLnRyaW0oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudERhdGUuZm9ybWF0KGZvcm1hdCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAucmVwbGFjZSgve3tcXHMqeWVzdGVyZGF5XFxzKn19L2dpLCBkYXRlLmNsb25lKCkuc3VidHJhY3QoMSwgXCJkYXlcIikuZm9ybWF0KGZvcm1hdCkpXG4gICAgICAgICAgICAucmVwbGFjZSgve3tcXHMqdG9tb3Jyb3dcXHMqfX0vZ2ksIGRhdGUuY2xvbmUoKS5hZGQoMSwgXCJkXCIpLmZvcm1hdChmb3JtYXQpKSk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIGFwcC5mb2xkTWFuYWdlci5zYXZlKGNyZWF0ZWRGaWxlLCBJRm9sZEluZm8pO1xuICAgICAgICByZXR1cm4gY3JlYXRlZEZpbGU7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGNyZWF0ZSBmaWxlOiAnJHtub3JtYWxpemVkUGF0aH0nYCwgZXJyKTtcbiAgICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZShcIlVuYWJsZSB0byBjcmVhdGUgbmV3IGZpbGUuXCIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldERhaWx5Tm90ZShkYXRlLCBkYWlseU5vdGVzKSB7XG4gICAgcmV0dXJuIGRhaWx5Tm90ZXNbZ2V0RGF0ZVVJRChkYXRlLCBcImRheVwiKV0gPz8gbnVsbDtcbn1cbmZ1bmN0aW9uIGdldEFsbERhaWx5Tm90ZXMoKSB7XG4gICAgLyoqXG4gICAgICogRmluZCBhbGwgZGFpbHkgbm90ZXMgaW4gdGhlIGRhaWx5IG5vdGUgZm9sZGVyXG4gICAgICovXG4gICAgY29uc3QgeyB2YXVsdCB9ID0gd2luZG93LmFwcDtcbiAgICBjb25zdCB7IGZvbGRlciB9ID0gZ2V0RGFpbHlOb3RlU2V0dGluZ3MoKTtcbiAgICBjb25zdCBkYWlseU5vdGVzRm9sZGVyID0gdmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKG9ic2lkaWFuLm5vcm1hbGl6ZVBhdGgoZm9sZGVyKSk7XG4gICAgaWYgKCFkYWlseU5vdGVzRm9sZGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBEYWlseU5vdGVzRm9sZGVyTWlzc2luZ0Vycm9yKFwiRmFpbGVkIHRvIGZpbmQgZGFpbHkgbm90ZXMgZm9sZGVyXCIpO1xuICAgIH1cbiAgICBjb25zdCBkYWlseU5vdGVzID0ge307XG4gICAgb2JzaWRpYW4uVmF1bHQucmVjdXJzZUNoaWxkcmVuKGRhaWx5Tm90ZXNGb2xkZXIsIChub3RlKSA9PiB7XG4gICAgICAgIGlmIChub3RlIGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBnZXREYXRlRnJvbUZpbGUobm90ZSwgXCJkYXlcIik7XG4gICAgICAgICAgICBpZiAoZGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBnZXREYXRlVUlEKGRhdGUsIFwiZGF5XCIpO1xuICAgICAgICAgICAgICAgIGRhaWx5Tm90ZXNbZGF0ZVN0cmluZ10gPSBub3RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhaWx5Tm90ZXM7XG59XG5cbmNsYXNzIFdlZWtseU5vdGVzRm9sZGVyTWlzc2luZ0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xufVxuZnVuY3Rpb24gZ2V0RGF5c09mV2VlaygpIHtcbiAgICBjb25zdCB7IG1vbWVudCB9ID0gd2luZG93O1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgbGV0IHdlZWtTdGFydCA9IG1vbWVudC5sb2NhbGVEYXRhKCkuX3dlZWsuZG93O1xuICAgIGNvbnN0IGRheXNPZldlZWsgPSBbXG4gICAgICAgIFwic3VuZGF5XCIsXG4gICAgICAgIFwibW9uZGF5XCIsXG4gICAgICAgIFwidHVlc2RheVwiLFxuICAgICAgICBcIndlZG5lc2RheVwiLFxuICAgICAgICBcInRodXJzZGF5XCIsXG4gICAgICAgIFwiZnJpZGF5XCIsXG4gICAgICAgIFwic2F0dXJkYXlcIixcbiAgICBdO1xuICAgIHdoaWxlICh3ZWVrU3RhcnQpIHtcbiAgICAgICAgZGF5c09mV2Vlay5wdXNoKGRheXNPZldlZWsuc2hpZnQoKSk7XG4gICAgICAgIHdlZWtTdGFydC0tO1xuICAgIH1cbiAgICByZXR1cm4gZGF5c09mV2Vlaztcbn1cbmZ1bmN0aW9uIGdldERheU9mV2Vla051bWVyaWNhbFZhbHVlKGRheU9mV2Vla05hbWUpIHtcbiAgICByZXR1cm4gZ2V0RGF5c09mV2VlaygpLmluZGV4T2YoZGF5T2ZXZWVrTmFtZS50b0xvd2VyQ2FzZSgpKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdlZWtseU5vdGUoZGF0ZSkge1xuICAgIGNvbnN0IHsgdmF1bHQgfSA9IHdpbmRvdy5hcHA7XG4gICAgY29uc3QgeyB0ZW1wbGF0ZSwgZm9ybWF0LCBmb2xkZXIgfSA9IGdldFdlZWtseU5vdGVTZXR0aW5ncygpO1xuICAgIGNvbnN0IFt0ZW1wbGF0ZUNvbnRlbnRzLCBJRm9sZEluZm9dID0gYXdhaXQgZ2V0VGVtcGxhdGVJbmZvKHRlbXBsYXRlKTtcbiAgICBjb25zdCBmaWxlbmFtZSA9IGRhdGUuZm9ybWF0KGZvcm1hdCk7XG4gICAgY29uc3Qgbm9ybWFsaXplZFBhdGggPSBhd2FpdCBnZXROb3RlUGF0aChmb2xkZXIsIGZpbGVuYW1lKTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBjcmVhdGVkRmlsZSA9IGF3YWl0IHZhdWx0LmNyZWF0ZShub3JtYWxpemVkUGF0aCwgdGVtcGxhdGVDb250ZW50c1xuICAgICAgICAgICAgLnJlcGxhY2UoL3t7XFxzKihkYXRlfHRpbWUpXFxzKigoWystXVxcZCspKFt5cW13ZGhzXSkpP1xccyooOi4rPyk/fX0vZ2ksIChfLCBfdGltZU9yRGF0ZSwgY2FsYywgdGltZURlbHRhLCB1bml0LCBtb21lbnRGb3JtYXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IHdpbmRvdy5tb21lbnQoKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gZGF0ZS5jbG9uZSgpLnNldCh7XG4gICAgICAgICAgICAgICAgaG91cjogbm93LmdldChcImhvdXJcIiksXG4gICAgICAgICAgICAgICAgbWludXRlOiBub3cuZ2V0KFwibWludXRlXCIpLFxuICAgICAgICAgICAgICAgIHNlY29uZDogbm93LmdldChcInNlY29uZFwiKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGNhbGMpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZS5hZGQocGFyc2VJbnQodGltZURlbHRhLCAxMCksIHVuaXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1vbWVudEZvcm1hdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50RGF0ZS5mb3JtYXQobW9tZW50Rm9ybWF0LnN1YnN0cmluZygxKS50cmltKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnREYXRlLmZvcm1hdChmb3JtYXQpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnJlcGxhY2UoL3t7XFxzKnRpdGxlXFxzKn19L2dpLCBmaWxlbmFtZSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC97e1xccyp0aW1lXFxzKn19L2dpLCB3aW5kb3cubW9tZW50KCkuZm9ybWF0KFwiSEg6bW1cIikpXG4gICAgICAgICAgICAucmVwbGFjZSgve3tcXHMqKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KVxccyo6KC4qPyl9fS9naSwgKF8sIGRheU9mV2VlaywgbW9tZW50Rm9ybWF0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXkgPSBnZXREYXlPZldlZWtOdW1lcmljYWxWYWx1ZShkYXlPZldlZWspO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUud2Vla2RheShkYXkpLmZvcm1hdChtb21lbnRGb3JtYXQudHJpbSgpKTtcbiAgICAgICAgfSkpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICB3aW5kb3cuYXBwLmZvbGRNYW5hZ2VyLnNhdmUoY3JlYXRlZEZpbGUsIElGb2xkSW5mbyk7XG4gICAgICAgIHJldHVybiBjcmVhdGVkRmlsZTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gY3JlYXRlIGZpbGU6ICcke25vcm1hbGl6ZWRQYXRofSdgLCBlcnIpO1xuICAgICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKFwiVW5hYmxlIHRvIGNyZWF0ZSBuZXcgZmlsZS5cIik7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0V2Vla2x5Tm90ZShkYXRlLCB3ZWVrbHlOb3Rlcykge1xuICAgIHJldHVybiB3ZWVrbHlOb3Rlc1tnZXREYXRlVUlEKGRhdGUsIFwid2Vla1wiKV0gPz8gbnVsbDtcbn1cbmZ1bmN0aW9uIGdldEFsbFdlZWtseU5vdGVzKCkge1xuICAgIGNvbnN0IHdlZWtseU5vdGVzID0ge307XG4gICAgaWYgKCFhcHBIYXNXZWVrbHlOb3Rlc1BsdWdpbkxvYWRlZCgpKSB7XG4gICAgICAgIHJldHVybiB3ZWVrbHlOb3RlcztcbiAgICB9XG4gICAgY29uc3QgeyB2YXVsdCB9ID0gd2luZG93LmFwcDtcbiAgICBjb25zdCB7IGZvbGRlciB9ID0gZ2V0V2Vla2x5Tm90ZVNldHRpbmdzKCk7XG4gICAgY29uc3Qgd2Vla2x5Tm90ZXNGb2xkZXIgPSB2YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgob2JzaWRpYW4ubm9ybWFsaXplUGF0aChmb2xkZXIpKTtcbiAgICBpZiAoIXdlZWtseU5vdGVzRm9sZGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBXZWVrbHlOb3Rlc0ZvbGRlck1pc3NpbmdFcnJvcihcIkZhaWxlZCB0byBmaW5kIHdlZWtseSBub3RlcyBmb2xkZXJcIik7XG4gICAgfVxuICAgIG9ic2lkaWFuLlZhdWx0LnJlY3Vyc2VDaGlsZHJlbih3ZWVrbHlOb3Rlc0ZvbGRlciwgKG5vdGUpID0+IHtcbiAgICAgICAgaWYgKG5vdGUgaW5zdGFuY2VvZiBvYnNpZGlhbi5URmlsZSkge1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGdldERhdGVGcm9tRmlsZShub3RlLCBcIndlZWtcIik7XG4gICAgICAgICAgICBpZiAoZGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBnZXREYXRlVUlEKGRhdGUsIFwid2Vla1wiKTtcbiAgICAgICAgICAgICAgICB3ZWVrbHlOb3Rlc1tkYXRlU3RyaW5nXSA9IG5vdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gd2Vla2x5Tm90ZXM7XG59XG5cbmNsYXNzIE1vbnRobHlOb3Rlc0ZvbGRlck1pc3NpbmdFcnJvciBleHRlbmRzIEVycm9yIHtcbn1cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBtaW1pY3MgdGhlIGJlaGF2aW9yIG9mIHRoZSBkYWlseS1ub3RlcyBwbHVnaW5cbiAqIHNvIGl0IHdpbGwgcmVwbGFjZSB7e2RhdGV9fSwge3t0aXRsZX19LCBhbmQge3t0aW1lfX0gd2l0aCB0aGVcbiAqIGZvcm1hdHRlZCB0aW1lc3RhbXAuXG4gKlxuICogTm90ZTogaXQgaGFzIGFuIGFkZGVkIGJvbnVzIHRoYXQgaXQncyBub3QgJ3RvZGF5JyBzcGVjaWZpYy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY3JlYXRlTW9udGhseU5vdGUoZGF0ZSkge1xuICAgIGNvbnN0IHsgdmF1bHQgfSA9IHdpbmRvdy5hcHA7XG4gICAgY29uc3QgeyB0ZW1wbGF0ZSwgZm9ybWF0LCBmb2xkZXIgfSA9IGdldE1vbnRobHlOb3RlU2V0dGluZ3MoKTtcbiAgICBjb25zdCBbdGVtcGxhdGVDb250ZW50cywgSUZvbGRJbmZvXSA9IGF3YWl0IGdldFRlbXBsYXRlSW5mbyh0ZW1wbGF0ZSk7XG4gICAgY29uc3QgZmlsZW5hbWUgPSBkYXRlLmZvcm1hdChmb3JtYXQpO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRQYXRoID0gYXdhaXQgZ2V0Tm90ZVBhdGgoZm9sZGVyLCBmaWxlbmFtZSk7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3JlYXRlZEZpbGUgPSBhd2FpdCB2YXVsdC5jcmVhdGUobm9ybWFsaXplZFBhdGgsIHRlbXBsYXRlQ29udGVudHNcbiAgICAgICAgICAgIC5yZXBsYWNlKC97e1xccyooZGF0ZXx0aW1lKVxccyooKFsrLV1cXGQrKShbeXFtd2Roc10pKT9cXHMqKDouKz8pP319L2dpLCAoXywgX3RpbWVPckRhdGUsIGNhbGMsIHRpbWVEZWx0YSwgdW5pdCwgbW9tZW50Rm9ybWF0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub3cgPSB3aW5kb3cubW9tZW50KCk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IGRhdGUuY2xvbmUoKS5zZXQoe1xuICAgICAgICAgICAgICAgIGhvdXI6IG5vdy5nZXQoXCJob3VyXCIpLFxuICAgICAgICAgICAgICAgIG1pbnV0ZTogbm93LmdldChcIm1pbnV0ZVwiKSxcbiAgICAgICAgICAgICAgICBzZWNvbmQ6IG5vdy5nZXQoXCJzZWNvbmRcIiksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChjYWxjKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudERhdGUuYWRkKHBhcnNlSW50KHRpbWVEZWx0YSwgMTApLCB1bml0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtb21lbnRGb3JtYXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudERhdGUuZm9ybWF0KG1vbWVudEZvcm1hdC5zdWJzdHJpbmcoMSkudHJpbSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50RGF0ZS5mb3JtYXQoZm9ybWF0KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC97e1xccypkYXRlXFxzKn19L2dpLCBmaWxlbmFtZSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC97e1xccyp0aW1lXFxzKn19L2dpLCB3aW5kb3cubW9tZW50KCkuZm9ybWF0KFwiSEg6bW1cIikpXG4gICAgICAgICAgICAucmVwbGFjZSgve3tcXHMqdGl0bGVcXHMqfX0vZ2ksIGZpbGVuYW1lKSk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIHdpbmRvdy5hcHAuZm9sZE1hbmFnZXIuc2F2ZShjcmVhdGVkRmlsZSwgSUZvbGRJbmZvKTtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZWRGaWxlO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBjcmVhdGUgZmlsZTogJyR7bm9ybWFsaXplZFBhdGh9J2AsIGVycik7XG4gICAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoXCJVbmFibGUgdG8gY3JlYXRlIG5ldyBmaWxlLlwiKTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRNb250aGx5Tm90ZShkYXRlLCBtb250aGx5Tm90ZXMpIHtcbiAgICByZXR1cm4gbW9udGhseU5vdGVzW2dldERhdGVVSUQoZGF0ZSwgXCJtb250aFwiKV0gPz8gbnVsbDtcbn1cbmZ1bmN0aW9uIGdldEFsbE1vbnRobHlOb3RlcygpIHtcbiAgICBjb25zdCBtb250aGx5Tm90ZXMgPSB7fTtcbiAgICBpZiAoIWFwcEhhc01vbnRobHlOb3Rlc1BsdWdpbkxvYWRlZCgpKSB7XG4gICAgICAgIHJldHVybiBtb250aGx5Tm90ZXM7XG4gICAgfVxuICAgIGNvbnN0IHsgdmF1bHQgfSA9IHdpbmRvdy5hcHA7XG4gICAgY29uc3QgeyBmb2xkZXIgfSA9IGdldE1vbnRobHlOb3RlU2V0dGluZ3MoKTtcbiAgICBjb25zdCBtb250aGx5Tm90ZXNGb2xkZXIgPSB2YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgob2JzaWRpYW4ubm9ybWFsaXplUGF0aChmb2xkZXIpKTtcbiAgICBpZiAoIW1vbnRobHlOb3Rlc0ZvbGRlcikge1xuICAgICAgICB0aHJvdyBuZXcgTW9udGhseU5vdGVzRm9sZGVyTWlzc2luZ0Vycm9yKFwiRmFpbGVkIHRvIGZpbmQgbW9udGhseSBub3RlcyBmb2xkZXJcIik7XG4gICAgfVxuICAgIG9ic2lkaWFuLlZhdWx0LnJlY3Vyc2VDaGlsZHJlbihtb250aGx5Tm90ZXNGb2xkZXIsIChub3RlKSA9PiB7XG4gICAgICAgIGlmIChub3RlIGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBnZXREYXRlRnJvbUZpbGUobm90ZSwgXCJtb250aFwiKTtcbiAgICAgICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZVN0cmluZyA9IGdldERhdGVVSUQoZGF0ZSwgXCJtb250aFwiKTtcbiAgICAgICAgICAgICAgICBtb250aGx5Tm90ZXNbZGF0ZVN0cmluZ10gPSBub3RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1vbnRobHlOb3Rlcztcbn1cblxuY2xhc3MgUXVhcnRlcmx5Tm90ZXNGb2xkZXJNaXNzaW5nRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG59XG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gbWltaWNzIHRoZSBiZWhhdmlvciBvZiB0aGUgZGFpbHktbm90ZXMgcGx1Z2luXG4gKiBzbyBpdCB3aWxsIHJlcGxhY2Uge3tkYXRlfX0sIHt7dGl0bGV9fSwgYW5kIHt7dGltZX19IHdpdGggdGhlXG4gKiBmb3JtYXR0ZWQgdGltZXN0YW1wLlxuICpcbiAqIE5vdGU6IGl0IGhhcyBhbiBhZGRlZCBib251cyB0aGF0IGl0J3Mgbm90ICd0b2RheScgc3BlY2lmaWMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVF1YXJ0ZXJseU5vdGUoZGF0ZSkge1xuICAgIGNvbnN0IHsgdmF1bHQgfSA9IHdpbmRvdy5hcHA7XG4gICAgY29uc3QgeyB0ZW1wbGF0ZSwgZm9ybWF0LCBmb2xkZXIgfSA9IGdldFF1YXJ0ZXJseU5vdGVTZXR0aW5ncygpO1xuICAgIGNvbnN0IFt0ZW1wbGF0ZUNvbnRlbnRzLCBJRm9sZEluZm9dID0gYXdhaXQgZ2V0VGVtcGxhdGVJbmZvKHRlbXBsYXRlKTtcbiAgICBjb25zdCBmaWxlbmFtZSA9IGRhdGUuZm9ybWF0KGZvcm1hdCk7XG4gICAgY29uc3Qgbm9ybWFsaXplZFBhdGggPSBhd2FpdCBnZXROb3RlUGF0aChmb2xkZXIsIGZpbGVuYW1lKTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBjcmVhdGVkRmlsZSA9IGF3YWl0IHZhdWx0LmNyZWF0ZShub3JtYWxpemVkUGF0aCwgdGVtcGxhdGVDb250ZW50c1xuICAgICAgICAgICAgLnJlcGxhY2UoL3t7XFxzKihkYXRlfHRpbWUpXFxzKigoWystXVxcZCspKFt5cW13ZGhzXSkpP1xccyooOi4rPyk/fX0vZ2ksIChfLCBfdGltZU9yRGF0ZSwgY2FsYywgdGltZURlbHRhLCB1bml0LCBtb21lbnRGb3JtYXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IHdpbmRvdy5tb21lbnQoKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gZGF0ZS5jbG9uZSgpLnNldCh7XG4gICAgICAgICAgICAgICAgaG91cjogbm93LmdldChcImhvdXJcIiksXG4gICAgICAgICAgICAgICAgbWludXRlOiBub3cuZ2V0KFwibWludXRlXCIpLFxuICAgICAgICAgICAgICAgIHNlY29uZDogbm93LmdldChcInNlY29uZFwiKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGNhbGMpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZS5hZGQocGFyc2VJbnQodGltZURlbHRhLCAxMCksIHVuaXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1vbWVudEZvcm1hdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50RGF0ZS5mb3JtYXQobW9tZW50Rm9ybWF0LnN1YnN0cmluZygxKS50cmltKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnREYXRlLmZvcm1hdChmb3JtYXQpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnJlcGxhY2UoL3t7XFxzKmRhdGVcXHMqfX0vZ2ksIGZpbGVuYW1lKVxuICAgICAgICAgICAgLnJlcGxhY2UoL3t7XFxzKnRpbWVcXHMqfX0vZ2ksIHdpbmRvdy5tb21lbnQoKS5mb3JtYXQoXCJISDptbVwiKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC97e1xccyp0aXRsZVxccyp9fS9naSwgZmlsZW5hbWUpKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgd2luZG93LmFwcC5mb2xkTWFuYWdlci5zYXZlKGNyZWF0ZWRGaWxlLCBJRm9sZEluZm8pO1xuICAgICAgICByZXR1cm4gY3JlYXRlZEZpbGU7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGNyZWF0ZSBmaWxlOiAnJHtub3JtYWxpemVkUGF0aH0nYCwgZXJyKTtcbiAgICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZShcIlVuYWJsZSB0byBjcmVhdGUgbmV3IGZpbGUuXCIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldFF1YXJ0ZXJseU5vdGUoZGF0ZSwgcXVhcnRlcmx5KSB7XG4gICAgcmV0dXJuIHF1YXJ0ZXJseVtnZXREYXRlVUlEKGRhdGUsIFwicXVhcnRlclwiKV0gPz8gbnVsbDtcbn1cbmZ1bmN0aW9uIGdldEFsbFF1YXJ0ZXJseU5vdGVzKCkge1xuICAgIGNvbnN0IHF1YXJ0ZXJseSA9IHt9O1xuICAgIGlmICghYXBwSGFzUXVhcnRlcmx5Tm90ZXNQbHVnaW5Mb2FkZWQoKSkge1xuICAgICAgICByZXR1cm4gcXVhcnRlcmx5O1xuICAgIH1cbiAgICBjb25zdCB7IHZhdWx0IH0gPSB3aW5kb3cuYXBwO1xuICAgIGNvbnN0IHsgZm9sZGVyIH0gPSBnZXRRdWFydGVybHlOb3RlU2V0dGluZ3MoKTtcbiAgICBjb25zdCBxdWFydGVybHlGb2xkZXIgPSB2YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgob2JzaWRpYW4ubm9ybWFsaXplUGF0aChmb2xkZXIpKTtcbiAgICBpZiAoIXF1YXJ0ZXJseUZvbGRlcikge1xuICAgICAgICB0aHJvdyBuZXcgUXVhcnRlcmx5Tm90ZXNGb2xkZXJNaXNzaW5nRXJyb3IoXCJGYWlsZWQgdG8gZmluZCBxdWFydGVybHkgbm90ZXMgZm9sZGVyXCIpO1xuICAgIH1cbiAgICBvYnNpZGlhbi5WYXVsdC5yZWN1cnNlQ2hpbGRyZW4ocXVhcnRlcmx5Rm9sZGVyLCAobm90ZSkgPT4ge1xuICAgICAgICBpZiAobm90ZSBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGaWxlKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gZ2V0RGF0ZUZyb21GaWxlKG5vdGUsIFwicXVhcnRlclwiKTtcbiAgICAgICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZVN0cmluZyA9IGdldERhdGVVSUQoZGF0ZSwgXCJxdWFydGVyXCIpO1xuICAgICAgICAgICAgICAgIHF1YXJ0ZXJseVtkYXRlU3RyaW5nXSA9IG5vdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcXVhcnRlcmx5O1xufVxuXG5jbGFzcyBZZWFybHlOb3Rlc0ZvbGRlck1pc3NpbmdFcnJvciBleHRlbmRzIEVycm9yIHtcbn1cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBtaW1pY3MgdGhlIGJlaGF2aW9yIG9mIHRoZSBkYWlseS1ub3RlcyBwbHVnaW5cbiAqIHNvIGl0IHdpbGwgcmVwbGFjZSB7e2RhdGV9fSwge3t0aXRsZX19LCBhbmQge3t0aW1lfX0gd2l0aCB0aGVcbiAqIGZvcm1hdHRlZCB0aW1lc3RhbXAuXG4gKlxuICogTm90ZTogaXQgaGFzIGFuIGFkZGVkIGJvbnVzIHRoYXQgaXQncyBub3QgJ3RvZGF5JyBzcGVjaWZpYy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY3JlYXRlWWVhcmx5Tm90ZShkYXRlKSB7XG4gICAgY29uc3QgeyB2YXVsdCB9ID0gd2luZG93LmFwcDtcbiAgICBjb25zdCB7IHRlbXBsYXRlLCBmb3JtYXQsIGZvbGRlciB9ID0gZ2V0WWVhcmx5Tm90ZVNldHRpbmdzKCk7XG4gICAgY29uc3QgW3RlbXBsYXRlQ29udGVudHMsIElGb2xkSW5mb10gPSBhd2FpdCBnZXRUZW1wbGF0ZUluZm8odGVtcGxhdGUpO1xuICAgIGNvbnN0IGZpbGVuYW1lID0gZGF0ZS5mb3JtYXQoZm9ybWF0KTtcbiAgICBjb25zdCBub3JtYWxpemVkUGF0aCA9IGF3YWl0IGdldE5vdGVQYXRoKGZvbGRlciwgZmlsZW5hbWUpO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZWRGaWxlID0gYXdhaXQgdmF1bHQuY3JlYXRlKG5vcm1hbGl6ZWRQYXRoLCB0ZW1wbGF0ZUNvbnRlbnRzXG4gICAgICAgICAgICAucmVwbGFjZSgve3tcXHMqKGRhdGV8dGltZSlcXHMqKChbKy1dXFxkKykoW3lxbXdkaHNdKSk/XFxzKig6Lis/KT99fS9naSwgKF8sIF90aW1lT3JEYXRlLCBjYWxjLCB0aW1lRGVsdGEsIHVuaXQsIG1vbWVudEZvcm1hdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gd2luZG93Lm1vbWVudCgpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBkYXRlLmNsb25lKCkuc2V0KHtcbiAgICAgICAgICAgICAgICBob3VyOiBub3cuZ2V0KFwiaG91clwiKSxcbiAgICAgICAgICAgICAgICBtaW51dGU6IG5vdy5nZXQoXCJtaW51dGVcIiksXG4gICAgICAgICAgICAgICAgc2Vjb25kOiBub3cuZ2V0KFwic2Vjb25kXCIpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoY2FsYykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnREYXRlLmFkZChwYXJzZUludCh0aW1lRGVsdGEsIDEwKSwgdW5pdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobW9tZW50Rm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnREYXRlLmZvcm1hdChtb21lbnRGb3JtYXQuc3Vic3RyaW5nKDEpLnRyaW0oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudERhdGUuZm9ybWF0KGZvcm1hdCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAucmVwbGFjZSgve3tcXHMqZGF0ZVxccyp9fS9naSwgZmlsZW5hbWUpXG4gICAgICAgICAgICAucmVwbGFjZSgve3tcXHMqdGltZVxccyp9fS9naSwgd2luZG93Lm1vbWVudCgpLmZvcm1hdChcIkhIOm1tXCIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoL3t7XFxzKnRpdGxlXFxzKn19L2dpLCBmaWxlbmFtZSkpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICB3aW5kb3cuYXBwLmZvbGRNYW5hZ2VyLnNhdmUoY3JlYXRlZEZpbGUsIElGb2xkSW5mbyk7XG4gICAgICAgIHJldHVybiBjcmVhdGVkRmlsZTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gY3JlYXRlIGZpbGU6ICcke25vcm1hbGl6ZWRQYXRofSdgLCBlcnIpO1xuICAgICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKFwiVW5hYmxlIHRvIGNyZWF0ZSBuZXcgZmlsZS5cIik7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0WWVhcmx5Tm90ZShkYXRlLCB5ZWFybHlOb3Rlcykge1xuICAgIHJldHVybiB5ZWFybHlOb3Rlc1tnZXREYXRlVUlEKGRhdGUsIFwieWVhclwiKV0gPz8gbnVsbDtcbn1cbmZ1bmN0aW9uIGdldEFsbFllYXJseU5vdGVzKCkge1xuICAgIGNvbnN0IHllYXJseU5vdGVzID0ge307XG4gICAgaWYgKCFhcHBIYXNZZWFybHlOb3Rlc1BsdWdpbkxvYWRlZCgpKSB7XG4gICAgICAgIHJldHVybiB5ZWFybHlOb3RlcztcbiAgICB9XG4gICAgY29uc3QgeyB2YXVsdCB9ID0gd2luZG93LmFwcDtcbiAgICBjb25zdCB7IGZvbGRlciB9ID0gZ2V0WWVhcmx5Tm90ZVNldHRpbmdzKCk7XG4gICAgY29uc3QgeWVhcmx5Tm90ZXNGb2xkZXIgPSB2YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgob2JzaWRpYW4ubm9ybWFsaXplUGF0aChmb2xkZXIpKTtcbiAgICBpZiAoIXllYXJseU5vdGVzRm9sZGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBZZWFybHlOb3Rlc0ZvbGRlck1pc3NpbmdFcnJvcihcIkZhaWxlZCB0byBmaW5kIHllYXJseSBub3RlcyBmb2xkZXJcIik7XG4gICAgfVxuICAgIG9ic2lkaWFuLlZhdWx0LnJlY3Vyc2VDaGlsZHJlbih5ZWFybHlOb3Rlc0ZvbGRlciwgKG5vdGUpID0+IHtcbiAgICAgICAgaWYgKG5vdGUgaW5zdGFuY2VvZiBvYnNpZGlhbi5URmlsZSkge1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGdldERhdGVGcm9tRmlsZShub3RlLCBcInllYXJcIik7XG4gICAgICAgICAgICBpZiAoZGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBnZXREYXRlVUlEKGRhdGUsIFwieWVhclwiKTtcbiAgICAgICAgICAgICAgICB5ZWFybHlOb3Rlc1tkYXRlU3RyaW5nXSA9IG5vdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4geWVhcmx5Tm90ZXM7XG59XG5cbmZ1bmN0aW9uIGFwcEhhc0RhaWx5Tm90ZXNQbHVnaW5Mb2FkZWQoKSB7XG4gICAgY29uc3QgeyBhcHAgfSA9IHdpbmRvdztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIGNvbnN0IGRhaWx5Tm90ZXNQbHVnaW4gPSBhcHAuaW50ZXJuYWxQbHVnaW5zLnBsdWdpbnNbXCJkYWlseS1ub3Rlc1wiXTtcbiAgICBpZiAoZGFpbHlOb3Rlc1BsdWdpbiAmJiBkYWlseU5vdGVzUGx1Z2luLmVuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgY29uc3QgcGVyaW9kaWNOb3RlcyA9IGFwcC5wbHVnaW5zLmdldFBsdWdpbihcInBlcmlvZGljLW5vdGVzXCIpO1xuICAgIHJldHVybiBwZXJpb2RpY05vdGVzICYmIHBlcmlvZGljTm90ZXMuc2V0dGluZ3M/LmRhaWx5Py5lbmFibGVkO1xufVxuLyoqXG4gKiBYWFg6IFwiV2Vla2x5IE5vdGVzXCIgbGl2ZSBpbiBlaXRoZXIgdGhlIENhbGVuZGFyIHBsdWdpbiBvciB0aGUgcGVyaW9kaWMtbm90ZXMgcGx1Z2luLlxuICogQ2hlY2sgYm90aCB1bnRpbCB0aGUgd2Vla2x5IG5vdGVzIGZlYXR1cmUgaXMgcmVtb3ZlZCBmcm9tIHRoZSBDYWxlbmRhciBwbHVnaW4uXG4gKi9cbmZ1bmN0aW9uIGFwcEhhc1dlZWtseU5vdGVzUGx1Z2luTG9hZGVkKCkge1xuICAgIGNvbnN0IHsgYXBwIH0gPSB3aW5kb3c7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBpZiAoYXBwLnBsdWdpbnMuZ2V0UGx1Z2luKFwiY2FsZW5kYXJcIikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgY29uc3QgcGVyaW9kaWNOb3RlcyA9IGFwcC5wbHVnaW5zLmdldFBsdWdpbihcInBlcmlvZGljLW5vdGVzXCIpO1xuICAgIHJldHVybiBwZXJpb2RpY05vdGVzICYmIHBlcmlvZGljTm90ZXMuc2V0dGluZ3M/LndlZWtseT8uZW5hYmxlZDtcbn1cbmZ1bmN0aW9uIGFwcEhhc01vbnRobHlOb3Rlc1BsdWdpbkxvYWRlZCgpIHtcbiAgICBjb25zdCB7IGFwcCB9ID0gd2luZG93O1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgY29uc3QgcGVyaW9kaWNOb3RlcyA9IGFwcC5wbHVnaW5zLmdldFBsdWdpbihcInBlcmlvZGljLW5vdGVzXCIpO1xuICAgIHJldHVybiBwZXJpb2RpY05vdGVzICYmIHBlcmlvZGljTm90ZXMuc2V0dGluZ3M/Lm1vbnRobHk/LmVuYWJsZWQ7XG59XG5mdW5jdGlvbiBhcHBIYXNRdWFydGVybHlOb3Rlc1BsdWdpbkxvYWRlZCgpIHtcbiAgICBjb25zdCB7IGFwcCB9ID0gd2luZG93O1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgY29uc3QgcGVyaW9kaWNOb3RlcyA9IGFwcC5wbHVnaW5zLmdldFBsdWdpbihcInBlcmlvZGljLW5vdGVzXCIpO1xuICAgIHJldHVybiBwZXJpb2RpY05vdGVzICYmIHBlcmlvZGljTm90ZXMuc2V0dGluZ3M/LnF1YXJ0ZXJseT8uZW5hYmxlZDtcbn1cbmZ1bmN0aW9uIGFwcEhhc1llYXJseU5vdGVzUGx1Z2luTG9hZGVkKCkge1xuICAgIGNvbnN0IHsgYXBwIH0gPSB3aW5kb3c7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBjb25zdCBwZXJpb2RpY05vdGVzID0gYXBwLnBsdWdpbnMuZ2V0UGx1Z2luKFwicGVyaW9kaWMtbm90ZXNcIik7XG4gICAgcmV0dXJuIHBlcmlvZGljTm90ZXMgJiYgcGVyaW9kaWNOb3Rlcy5zZXR0aW5ncz8ueWVhcmx5Py5lbmFibGVkO1xufVxuZnVuY3Rpb24gZ2V0UGVyaW9kaWNOb3RlU2V0dGluZ3MoZ3JhbnVsYXJpdHkpIHtcbiAgICBjb25zdCBnZXRTZXR0aW5ncyA9IHtcbiAgICAgICAgZGF5OiBnZXREYWlseU5vdGVTZXR0aW5ncyxcbiAgICAgICAgd2VlazogZ2V0V2Vla2x5Tm90ZVNldHRpbmdzLFxuICAgICAgICBtb250aDogZ2V0TW9udGhseU5vdGVTZXR0aW5ncyxcbiAgICAgICAgcXVhcnRlcjogZ2V0UXVhcnRlcmx5Tm90ZVNldHRpbmdzLFxuICAgICAgICB5ZWFyOiBnZXRZZWFybHlOb3RlU2V0dGluZ3MsXG4gICAgfVtncmFudWxhcml0eV07XG4gICAgcmV0dXJuIGdldFNldHRpbmdzKCk7XG59XG5mdW5jdGlvbiBjcmVhdGVQZXJpb2RpY05vdGUoZ3JhbnVsYXJpdHksIGRhdGUpIHtcbiAgICBjb25zdCBjcmVhdGVGbiA9IHtcbiAgICAgICAgZGF5OiBjcmVhdGVEYWlseU5vdGUsXG4gICAgICAgIG1vbnRoOiBjcmVhdGVNb250aGx5Tm90ZSxcbiAgICAgICAgd2VlazogY3JlYXRlV2Vla2x5Tm90ZSxcbiAgICB9O1xuICAgIHJldHVybiBjcmVhdGVGbltncmFudWxhcml0eV0oZGF0ZSk7XG59XG5cbmV4cG9ydHMuREVGQVVMVF9EQUlMWV9OT1RFX0ZPUk1BVCA9IERFRkFVTFRfREFJTFlfTk9URV9GT1JNQVQ7XG5leHBvcnRzLkRFRkFVTFRfTU9OVEhMWV9OT1RFX0ZPUk1BVCA9IERFRkFVTFRfTU9OVEhMWV9OT1RFX0ZPUk1BVDtcbmV4cG9ydHMuREVGQVVMVF9RVUFSVEVSTFlfTk9URV9GT1JNQVQgPSBERUZBVUxUX1FVQVJURVJMWV9OT1RFX0ZPUk1BVDtcbmV4cG9ydHMuREVGQVVMVF9XRUVLTFlfTk9URV9GT1JNQVQgPSBERUZBVUxUX1dFRUtMWV9OT1RFX0ZPUk1BVDtcbmV4cG9ydHMuREVGQVVMVF9ZRUFSTFlfTk9URV9GT1JNQVQgPSBERUZBVUxUX1lFQVJMWV9OT1RFX0ZPUk1BVDtcbmV4cG9ydHMuYXBwSGFzRGFpbHlOb3Rlc1BsdWdpbkxvYWRlZCA9IGFwcEhhc0RhaWx5Tm90ZXNQbHVnaW5Mb2FkZWQ7XG5leHBvcnRzLmFwcEhhc01vbnRobHlOb3Rlc1BsdWdpbkxvYWRlZCA9IGFwcEhhc01vbnRobHlOb3Rlc1BsdWdpbkxvYWRlZDtcbmV4cG9ydHMuYXBwSGFzUXVhcnRlcmx5Tm90ZXNQbHVnaW5Mb2FkZWQgPSBhcHBIYXNRdWFydGVybHlOb3Rlc1BsdWdpbkxvYWRlZDtcbmV4cG9ydHMuYXBwSGFzV2Vla2x5Tm90ZXNQbHVnaW5Mb2FkZWQgPSBhcHBIYXNXZWVrbHlOb3Rlc1BsdWdpbkxvYWRlZDtcbmV4cG9ydHMuYXBwSGFzWWVhcmx5Tm90ZXNQbHVnaW5Mb2FkZWQgPSBhcHBIYXNZZWFybHlOb3Rlc1BsdWdpbkxvYWRlZDtcbmV4cG9ydHMuY3JlYXRlRGFpbHlOb3RlID0gY3JlYXRlRGFpbHlOb3RlO1xuZXhwb3J0cy5jcmVhdGVNb250aGx5Tm90ZSA9IGNyZWF0ZU1vbnRobHlOb3RlO1xuZXhwb3J0cy5jcmVhdGVQZXJpb2RpY05vdGUgPSBjcmVhdGVQZXJpb2RpY05vdGU7XG5leHBvcnRzLmNyZWF0ZVF1YXJ0ZXJseU5vdGUgPSBjcmVhdGVRdWFydGVybHlOb3RlO1xuZXhwb3J0cy5jcmVhdGVXZWVrbHlOb3RlID0gY3JlYXRlV2Vla2x5Tm90ZTtcbmV4cG9ydHMuY3JlYXRlWWVhcmx5Tm90ZSA9IGNyZWF0ZVllYXJseU5vdGU7XG5leHBvcnRzLmdldEFsbERhaWx5Tm90ZXMgPSBnZXRBbGxEYWlseU5vdGVzO1xuZXhwb3J0cy5nZXRBbGxNb250aGx5Tm90ZXMgPSBnZXRBbGxNb250aGx5Tm90ZXM7XG5leHBvcnRzLmdldEFsbFF1YXJ0ZXJseU5vdGVzID0gZ2V0QWxsUXVhcnRlcmx5Tm90ZXM7XG5leHBvcnRzLmdldEFsbFdlZWtseU5vdGVzID0gZ2V0QWxsV2Vla2x5Tm90ZXM7XG5leHBvcnRzLmdldEFsbFllYXJseU5vdGVzID0gZ2V0QWxsWWVhcmx5Tm90ZXM7XG5leHBvcnRzLmdldERhaWx5Tm90ZSA9IGdldERhaWx5Tm90ZTtcbmV4cG9ydHMuZ2V0RGFpbHlOb3RlU2V0dGluZ3MgPSBnZXREYWlseU5vdGVTZXR0aW5ncztcbmV4cG9ydHMuZ2V0RGF0ZUZyb21GaWxlID0gZ2V0RGF0ZUZyb21GaWxlO1xuZXhwb3J0cy5nZXREYXRlRnJvbVBhdGggPSBnZXREYXRlRnJvbVBhdGg7XG5leHBvcnRzLmdldERhdGVVSUQgPSBnZXREYXRlVUlEO1xuZXhwb3J0cy5nZXRNb250aGx5Tm90ZSA9IGdldE1vbnRobHlOb3RlO1xuZXhwb3J0cy5nZXRNb250aGx5Tm90ZVNldHRpbmdzID0gZ2V0TW9udGhseU5vdGVTZXR0aW5ncztcbmV4cG9ydHMuZ2V0UGVyaW9kaWNOb3RlU2V0dGluZ3MgPSBnZXRQZXJpb2RpY05vdGVTZXR0aW5ncztcbmV4cG9ydHMuZ2V0UXVhcnRlcmx5Tm90ZSA9IGdldFF1YXJ0ZXJseU5vdGU7XG5leHBvcnRzLmdldFF1YXJ0ZXJseU5vdGVTZXR0aW5ncyA9IGdldFF1YXJ0ZXJseU5vdGVTZXR0aW5ncztcbmV4cG9ydHMuZ2V0VGVtcGxhdGVJbmZvID0gZ2V0VGVtcGxhdGVJbmZvO1xuZXhwb3J0cy5nZXRXZWVrbHlOb3RlID0gZ2V0V2Vla2x5Tm90ZTtcbmV4cG9ydHMuZ2V0V2Vla2x5Tm90ZVNldHRpbmdzID0gZ2V0V2Vla2x5Tm90ZVNldHRpbmdzO1xuZXhwb3J0cy5nZXRZZWFybHlOb3RlID0gZ2V0WWVhcmx5Tm90ZTtcbmV4cG9ydHMuZ2V0WWVhcmx5Tm90ZVNldHRpbmdzID0gZ2V0WWVhcmx5Tm90ZVNldHRpbmdzO1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlRGFpbHlOb3RlLFxuICBnZXRBbGxEYWlseU5vdGVzLFxuICBnZXREYWlseU5vdGUsXG4gIGdldERhaWx5Tm90ZVNldHRpbmdzLFxufSBmcm9tIFwib2JzaWRpYW4tZGFpbHktbm90ZXMtaW50ZXJmYWNlXCI7XG5cbmltcG9ydCB0eXBlIHsgTW9tZW50IH0gZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHR5cGUgeyBURmlsZSB9IGZyb20gXCJvYnNpZGlhblwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRGFpbHlOb3RlSWZOZWVkZWQobW9tZW50OiBNb21lbnQpOiBQcm9taXNlPFRGaWxlPiB7XG4gIHJldHVybiBnZXREYWlseU5vdGUobW9tZW50LCBnZXRBbGxEYWlseU5vdGVzKCkpIHx8IGNyZWF0ZURhaWx5Tm90ZShtb21lbnQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGFpbHlOb3RlUGF0aChtb21lbnQ6IE1vbWVudCk6IFByb21pc2U8c3RyaW5nPiB7XG4gIHJldHVybiAoYXdhaXQgY3JlYXRlRGFpbHlOb3RlSWZOZWVkZWQobW9tZW50KSkucGF0aDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhaWx5Tm90ZVNldHRpbmdzUGF0aCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCBmb3JtYXQgPSAoYXdhaXQgZ2V0RGFpbHlOb3RlU2V0dGluZ3MoKSkuZm9ybWF0O1xuICBjb25zdCBmb2xkZXIgPSAoYXdhaXQgZ2V0RGFpbHlOb3RlU2V0dGluZ3MoKSkuZm9sZGVyO1xuICBpZiAoZm9sZGVyID09IFwiXCIpIFxuICAgIHJldHVybiBgJHtmb3JtYXR9YDtcbiAgZWxzZVxuICAgIHJldHVybiBgJHtmb2xkZXJ9LyR7Zm9ybWF0fWBcbn0iLCJpbXBvcnQgeyBBcHAsIEJ1dHRvbkNvbXBvbmVudCwgRHJvcGRvd25Db21wb25lbnQsIE1vZGFsLCBOb3RpY2UsIFBsdWdpbiwgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZywgVEZpbGUsIFRGb2xkZXIsIFRvZ2dsZUNvbXBvbmVudCB9IGZyb20gJ29ic2lkaWFuJztcbmltcG9ydCB7IGdldERhaWx5Tm90ZVBhdGgsIGdldERhaWx5Tm90ZVNldHRpbmdzUGF0aCB9IGZyb20gJy4vRGFpbHlOb3RlJztcblxuaW1wb3J0IEZlcnJhbWVudGEgIGZyb20gJy4vbWFpbic7XG5cbmV4cG9ydCBjbGFzcyBDb25maWd1cmUgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcblxuXHRwbHVnaW46IEZlcnJhbWVudGE7XG5cdGFwcCA6IEFwcDtcblxuXHRzaGFwZTogc3RyaW5nO1xuXHRudW1iZXJPZkJ1dHRvbnM6IG51bWJlcjtcblxuXHRzdGFuZGFyZERpdjogSFRNTERpdkVsZW1lbnQ7XG5cdGJ1dHRvbkRpdjogSFRNTERpdkVsZW1lbnRbXSA9IEFycmF5KDYpO1xuXHRvcGVuRGl2OiBIVE1MRGl2RWxlbWVudFtdID0gQXJyYXkoNik7XG5cdHdyaXRlRGl2OiBIVE1MRGl2RWxlbWVudFtdID0gQXJyYXkoNik7XG5cdGNvbW1hbmREaXY6IEhUTUxEaXZFbGVtZW50W10gPSBBcnJheSg2KTtcblx0Y2FtZXJhRGl2OiBIVE1MRGl2RWxlbWVudFtdID0gQXJyYXkoNik7XG5cdHRhc2tEaXY6IEhUTUxEaXZFbGVtZW50W10gPSBBcnJheSg2KTtcblxuXHRzdGFuZGFyZFZhdWx0MTogU2V0dGluZztcblx0c3RhbmRhcmRWYXVsdDI6IFNldHRpbmc7XG5cdHN0YW5kYXJkVmF1bHQzOiBTZXR0aW5nO1xuXHRcblx0YnV0dG9uczogU2V0dGluZ1tdID0gQXJyYXkoNik7XG5cdGxhYmVsOiBTZXR0aW5nW10gPSBBcnJheSg2KTtcblx0dmF1bHQ6IFNldHRpbmdbXSA9IEFycmF5KDYpO1xuXHRhY3Rpb246IFNldHRpbmdbXSA9IEFycmF5KDYpO1xuXHRvcGVuQ2hvaWNlOiBTZXR0aW5nW10gPSBBcnJheSg2KTtcblx0bm90ZTogU2V0dGluZ1tdID0gQXJyYXkoNik7XG5cdGJvb2ttYXJrOiBTZXR0aW5nW10gPSBBcnJheSg2KTtcblx0d3JpdGVMaW5lczogU2V0dGluZ1tdID0gQXJyYXkoNik7XG5cdHdyaXRlQ2hvaWNlOiBTZXR0aW5nW10gPSBBcnJheSg2KTtcblx0bm90ZXc6IFNldHRpbmdbXSA9IEFycmF5KDYpO1x0XG5cdGZvbGRlcnc6IFNldHRpbmdbXSA9IEFycmF5KDYpO1x0XG5cdG1vZGV3OiBTZXR0aW5nW10gPSBBcnJheSg2KTtcdFxuXHRwcm9tcHR3OiBTZXR0aW5nW10gPSBBcnJheSg2KTtcblx0d3JpdGVTdHI6IFNldHRpbmdbXSA9IEFycmF5KDYpO1xuXHRjb21tYW5kOiBTZXR0aW5nW10gPSBBcnJheSg2KTtcblx0Y29tbWFuZENob2ljZTogU2V0dGluZ1tdID0gQXJyYXkoNik7XG5cdGNvbW1hbmROb3RlOiBTZXR0aW5nW10gPSBBcnJheSg2KTtcblx0Y29tbWFuZEJvb2ttYXJrOiBTZXR0aW5nW10gPSBBcnJheSg2KTtcblx0Y2FtZXJhRm9sZGVyOiBTZXR0aW5nW10gPSBBcnJheSg2KTtcblx0Y2FtZXJhTGluazogU2V0dGluZ1tdID0gQXJyYXkoNik7XG5cdGNhbWVyYU5vdGU6IFNldHRpbmdbXSA9IEFycmF5KDYpO1xuXHRjYW1lcmFCb29rbWFyazogU2V0dGluZ1tdID0gQXJyYXkoNik7XG5cdHRhc2t0YWdzOiBTZXR0aW5nW10gPSBBcnJheSg2KTtcblxuXHRqc29uOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogRmVycmFtZW50YSkge1xuXHRcdHN1cGVyKGFwcCwgcGx1Z2luKTtcblx0XHR0aGlzLmFwcCA9IGFwcDtcblx0XHR0aGlzLnBsdWdpbiA9IHBsdWdpbjtcblxuXHRcdGNvbnNvbGUubG9nKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcblx0fVxuXG5cdGRpc3BsYXkoKTogdm9pZCB7XG5cdFx0dGhpcy5udW1iZXJPZkJ1dHRvbnMgPSA2O1xuXHRcdHRoaXMuanNvbiA9ICd7IFwic2hhcGVcIjogXCJyaW5nXCIsIFwiYnV0dG9uc1wiOiBbJztcdFxuXG5cdFx0bGV0IHtjb250YWluZXJFbH0gPSB0aGlzO1xuXG5cdFx0Y29udGFpbmVyRWwuZW1wdHkoKTtcblxuXHRcdGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMScsIHt0ZXh0OiAnQ29uZmlndXJlIHRoZSBLYWFwYXRhIHdpZGdldC4nfSk7XG5cblx0XHR0aGlzLnN0YW5kYXJkRGl2ID0gY29udGFpbmVyRWwuY3JlYXRlRGl2KCk7XG5cdFx0dGhpcy5zdGFuZGFyZERpdi5jcmVhdGVFbCgnaDInLCB7dGV4dDogJ0NvbmZpZ3VyZSB2YXVsdHMgZm9yIHRoZSB0aHJlZSBzdGFuZGFyZCBidXR0b25zLid9KTtcblx0XHRuZXcgU2V0dGluZyh0aGlzLnN0YW5kYXJkRGl2KVxuXHRcdC5zZXROYW1lKCdWYXVsdCBmb3IgXCJuZXcgbm90ZVwiPycpXG5cdFx0LnNldERlc2MoJ0dpdmUgdGhlIHZhdWx0IGZvciB0aGUgXCJuZXcgbm90ZVwiIGJ1dHRvbi4nKVxuXHRcdC5hZGRUZXh0KHRleHQgPT4gdGV4dFxuXHRcdFx0LnNldFBsYWNlaG9sZGVyKCdWYXVsdCcpXG5cdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudmF1bHQxKVxuXHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy52YXVsdDEgPSB2YWx1ZTtcblx0XHRcdH0pXG5cdFx0KTtcblx0XHRuZXcgU2V0dGluZyh0aGlzLnN0YW5kYXJkRGl2KVxuXHRcdC5zZXROYW1lKCdWYXVsdCBmb3IgXCJkYWlseSBub3RlXCI/Jylcblx0XHQuc2V0RGVzYygnR2l2ZSB0aGUgdmF1bHQgZm9yIHRoZSBcImRhaWx5IG5vdGVcIiBidXR0b24uJylcblx0XHQuYWRkVGV4dCh0ZXh0ID0+IHRleHRcblx0XHRcdC5zZXRQbGFjZWhvbGRlcignVmF1bHQnKVxuXHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnZhdWx0Milcblx0XHRcdC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcblx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MudmF1bHQyID0gdmFsdWU7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdFx0bmV3IFNldHRpbmcodGhpcy5zdGFuZGFyZERpdilcblx0XHQuc2V0TmFtZSgnVmF1bHQgZm9yIFwiY2FtZXJhXCI/Jylcblx0XHQuc2V0RGVzYygnR2l2ZSB0aGUgdmF1bHQgZm9yIHRoZSBcImNhbWVyYVwiIGJ1dHRvbi4nKVxuXHRcdC5hZGRUZXh0KHRleHQgPT4gdGV4dFxuXHRcdFx0LnNldFBsYWNlaG9sZGVyKCdWYXVsdCcpXG5cdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudmF1bHQzKVxuXHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy52YXVsdDMgPSB2YWx1ZTtcblx0XHRcdH0pXG5cdFx0KTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1iZXJPZkJ1dHRvbnM7IGkrKykge1xuXHRcdC8vIEJ1dHRvbiBjb25maWcgc2VjdGlvblxuXHRcdC8vY29uc29sZS5sb2coXCJCdXR0b24gXCIraStcIiBjb25maWcgc2VjdGlvblwiKTtcblx0XHR0aGlzLmJ1dHRvbnNbaV0gPSBuZXcgU2V0dGluZyhjb250YWluZXJFbClcblx0XHRcdC5zZXROYW1lKCdVc2UgQnV0dG9uICMnKyhpKzEpKyc/Jylcblx0XHRcdC5zZXREZXNjKCdDb25maWd1cmUgYnV0dG9uICMnKyhpKzEpKycuJylcblx0XHRcdC5hZGRUb2dnbGUodG9nZ2xlID0+IHRvZ2dsZVxuXHRcdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS51c2VCdXR0b24pXG5cdFx0XHRcdC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLnVzZUJ1dHRvbiA9IHZhbHVlO1xuXHRcdFx0XHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5idXR0b25EaXZbaV0uc2hvdygpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLmJ1dHRvbkRpdltpXS5oaWRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHRcblx0XHR0aGlzLmJ1dHRvbkRpdltpXSA9IGNvbnRhaW5lckVsLmNyZWF0ZURpdigpO1xuXHRcdHRoaXMuYnV0dG9uRGl2W2ldLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IHBhZGRpbmc6IDEwcHg7IG1hcmdpbjogMTBweDtcIik7XG5cdFx0dGhpcy5sYWJlbFtpXSA9IG5ldyBTZXR0aW5nKHRoaXMuYnV0dG9uRGl2W2ldKVxuXHRcdFx0LnNldE5hbWUoJ0xhYmVsPycpXG5cdFx0XHQuc2V0RGVzYygnR2l2ZSBhIGxhYmVsIGZvciB0aGlzIGJ1dHRvbi4nKVxuXHRcdFx0LmFkZFRleHQodGV4dCA9PiB0ZXh0XG5cdFx0XHRcdC5zZXRQbGFjZWhvbGRlcignTGFiZWwgVGV4dCcpXG5cdFx0XHRcdC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmxhYmVsKVxuXHRcdFx0XHQub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5sYWJlbCA9IHZhbHVlO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHRjb25zdCB2YXVsdCA9ICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLnZhdWx0ID09IFwiXCIpIFxuXHRcdFx0XHRcdFx0XHQ/IHRoaXMucGx1Z2luLnNldHRpbmdzLnZhdWx0MSBcblx0XHRcdFx0XHRcdFx0OiB0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLnZhdWx0O1xuXHRcdHRoaXMudmF1bHRbaV0gPSBuZXcgU2V0dGluZyh0aGlzLmJ1dHRvbkRpdltpXSlcblx0XHRcdC5zZXROYW1lKCdWYXVsdD8nKVxuXHRcdFx0LnNldERlc2MoJ1NlbGVjdCB0aGUgdmF1bHQgdG8gcGVyZm9ybSB0aGUgYWN0aW9uIGluLicpXG5cdFx0XHQuYWRkVGV4dCh0ZXh0ID0+IHRleHRcblx0XHRcdFx0LnNldFBsYWNlaG9sZGVyKHZhdWx0KVxuXHRcdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS52YXVsdClcblx0XHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0udmF1bHQgPSB2YWx1ZTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cblx0XHR0aGlzLmFjdGlvbltpXSA9IG5ldyBTZXR0aW5nKHRoaXMuYnV0dG9uRGl2W2ldKVxuXHRcdFx0LnNldE5hbWUoJ0FjdGlvbj8nKVxuXHRcdFx0LnNldERlc2MoJ1NlbGVjdCB0aGUgYWN0aW9uIHRvIHBlcmZvcm0uJylcblx0XHRcdC5hZGREcm9wZG93bihkcm9wID0+IGRyb3Bcblx0XHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmFjdGlvbiA9IHZhbHVlO1xuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PSBcIm9wZW5cIikge1xuXHRcdFx0XHRcdFx0dGhpcy5vcGVuRGl2W2ldLnNob3coKTtcblx0XHRcdFx0XHRcdHRoaXMud3JpdGVEaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy5jb21tYW5kRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0XHRcdHRoaXMuY2FtZXJhRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHZhbHVlID09IFwid3JpdGVcIikge1xuXHRcdFx0XHRcdFx0dGhpcy5vcGVuRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0XHRcdHRoaXMud3JpdGVEaXZbaV0uc2hvdygpO1xuXHRcdFx0XHRcdFx0dGhpcy5jb21tYW5kRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0XHRcdHRoaXMuY2FtZXJhRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHZhbHVlID09IFwiY29tbWFuZFwiKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm9wZW5EaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy53cml0ZURpdltpXS5oaWRlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLmNvbW1hbmREaXZbaV0uc2hvdygpO1xuXHRcdFx0XHRcdFx0dGhpcy5jYW1lcmFEaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPT0gXCJjYW1lcmFcIikge1xuXHRcdFx0XHRcdFx0dGhpcy5vcGVuRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0XHRcdHRoaXMud3JpdGVEaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy5jb21tYW5kRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0XHRcdHRoaXMuY2FtZXJhRGl2W2ldLnNob3coKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHZhbHVlID09IFwidGFza1wiKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm9wZW5EaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy53cml0ZURpdltpXS5oaWRlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLmNvbW1hbmREaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy5jYW1lcmFEaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLm9wZW5EaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy53cml0ZURpdltpXS5oaWRlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLmNvbW1hbmREaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy5jYW1lcmFEaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHRcdCh0aGlzLmFjdGlvbltpXS5jb21wb25lbnRzWzBdIGFzIERyb3Bkb3duQ29tcG9uZW50KS5hZGRPcHRpb24oXCJvcGVuXCIsIFwiT3BlblwiKTtcblx0XHRcdCh0aGlzLmFjdGlvbltpXS5jb21wb25lbnRzWzBdIGFzIERyb3Bkb3duQ29tcG9uZW50KS5hZGRPcHRpb24oXCJ3cml0ZVwiLCBcIldyaXRlXCIpO1xuXHRcdFx0KHRoaXMuYWN0aW9uW2ldLmNvbXBvbmVudHNbMF0gYXMgRHJvcGRvd25Db21wb25lbnQpLmFkZE9wdGlvbihcImNvbW1hbmRcIiwgXCJDb21tYW5kXCIpO1xuXHRcdFx0KHRoaXMuYWN0aW9uW2ldLmNvbXBvbmVudHNbMF0gYXMgRHJvcGRvd25Db21wb25lbnQpLmFkZE9wdGlvbihcImNhbWVyYVwiLCBcIkNhbWVyYVwiKTtcblx0XHRcdC8vKHRoaXMuYWN0aW9uW2ldLmNvbXBvbmVudHNbMF0gYXMgRHJvcGRvd25Db21wb25lbnQpLmFkZE9wdGlvbihcInRhc2tcIiwgXCJUYXNrXCIpO1xuXG5cdFx0XHQodGhpcy5hY3Rpb25baV0uY29tcG9uZW50c1swXSBhcyBEcm9wZG93bkNvbXBvbmVudCkuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5hY3Rpb24pO1xuXHRcdFxuXHRcdC8vIC0tIEFjdGlvbiBpcyBPcGVuIC0tXG5cdFx0dGhpcy5vcGVuRGl2W2ldID0gdGhpcy5idXR0b25EaXZbaV0uY3JlYXRlRGl2KCk7XG5cdFx0dGhpcy5vcGVuQ2hvaWNlW2ldID0gbmV3IFNldHRpbmcodGhpcy5vcGVuRGl2W2ldKVxuXHRcdFx0LnNldE5hbWUoJ09wZW4gQ2hvaWNlPycpXG5cdFx0XHQuc2V0RGVzYygnU2VsZWN0IHRoZSB0eXBlIG9mIG5vdGUgb3Blbi4nKVxuXHRcdFx0LmFkZERyb3Bkb3duKGRyb3AgPT4gZHJvcFxuXHRcdFx0XHQub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5vcGVuQ2hvaWNlID0gdmFsdWU7XG5cdFx0XHRcdFx0aWYgKHZhbHVlID09IFwiZGFpbHlcIikge1xuXHRcdFx0XHRcdFx0dGhpcy5ub3RlW2ldLnNldHRpbmdFbC5oaWRlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLmJvb2ttYXJrW2ldLnNldHRpbmdFbC5oaWRlKCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh2YWx1ZSA9PSBcIm5vdGVcIikge1xuXHRcdFx0XHRcdFx0dGhpcy5ub3RlW2ldLnNldHRpbmdFbC5zaG93KCk7XG5cdFx0XHRcdFx0XHR0aGlzLmJvb2ttYXJrW2ldLnNldHRpbmdFbC5oaWRlKCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh2YWx1ZSA9PSBcImJvb2ttYXJrXCIpIHtcblx0XHRcdFx0XHRcdHRoaXMubm90ZVtpXS5zZXR0aW5nRWwuaGlkZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy5ib29rbWFya1tpXS5zZXR0aW5nRWwuc2hvdygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0XHQodGhpcy5vcGVuQ2hvaWNlW2ldLmNvbXBvbmVudHNbMF0gYXMgRHJvcGRvd25Db21wb25lbnQpLmFkZE9wdGlvbihcImRhaWx5XCIsIFwiRGFpbHkgTm90ZVwiKTtcblx0XHRcdCh0aGlzLm9wZW5DaG9pY2VbaV0uY29tcG9uZW50c1swXSBhcyBEcm9wZG93bkNvbXBvbmVudCkuYWRkT3B0aW9uKFwibm90ZVwiLCBcIk5vdGVcIik7XG5cdFx0XHQodGhpcy5vcGVuQ2hvaWNlW2ldLmNvbXBvbmVudHNbMF0gYXMgRHJvcGRvd25Db21wb25lbnQpLmFkZE9wdGlvbihcImJvb2ttYXJrXCIsIFwiQm9va21hcmtcIik7XG5cblx0XHR0aGlzLm5vdGVbaV0gPSBuZXcgU2V0dGluZyh0aGlzLm9wZW5EaXZbaV0pXG5cdFx0XHQuc2V0TmFtZSgnTm90ZSBOYW1lPycpXG5cdFx0XHQuc2V0RGVzYygnU2VsZWN0IHRoZSBub3RlIHRvIG9wZW4uJylcblx0XHRcdC5hZGRUZXh0KHRleHQgPT4gdGV4dFxuXHRcdFx0XHQuc2V0UGxhY2Vob2xkZXIoJ05vdGUgbmFtZScpXG5cdFx0XHRcdC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLm5vdGVOYW1lKVxuXHRcdFx0XHQub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5ub3RlTmFtZSA9IHZhbHVlO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHRpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5vcGVuQ2hvaWNlICE9PSBcIm5vdGVcIikgdGhpcy5ub3RlW2ldLnNldHRpbmdFbC5oaWRlKCk7XG5cdFx0dGhpcy5ib29rbWFya1tpXSA9IG5ldyBTZXR0aW5nKHRoaXMub3BlbkRpdltpXSlcblx0XHRcdC5zZXROYW1lKCdCb29rbWFyayBOYW1lPycpXG5cdFx0XHQuc2V0RGVzYygnU2VsZWN0IHRoZSBib29rbWFyayB0byBvcGVuLicpXG5cdFx0XHQuYWRkVGV4dCh0ZXh0ID0+IHRleHRcblx0XHRcdFx0LnNldFBsYWNlaG9sZGVyKCdCb29rbWFyayBuYW1lJylcblx0XHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uYm9va21hcmtOYW1lKVxuXHRcdFx0XHQub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5ib29rbWFya05hbWUgPSB2YWx1ZTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0XHRpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5vcGVuQ2hvaWNlICE9PSBcImJvb2ttYXJrXCIpIHRoaXMuYm9va21hcmtbaV0uc2V0dGluZ0VsLmhpZGUoKTtcblxuXHRcdGxldCB2YWx1ZSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0ub3BlbkNob2ljZTtcblx0XHQodGhpcy5vcGVuQ2hvaWNlW2ldLmNvbXBvbmVudHNbMF0gYXMgRHJvcGRvd25Db21wb25lbnQpLnNldFZhbHVlKHZhbHVlKTtcblx0XHRpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5hY3Rpb24gPT0gXCJvcGVuXCIpIHtcblx0XHRcdGlmICh2YWx1ZSA9PSBcImRhaWx5XCIpIHtcblx0XHRcdFx0dGhpcy5ub3RlW2ldLnNldHRpbmdFbC5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuYm9va21hcmtbaV0uc2V0dGluZ0VsLmhpZGUoKTtcblx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPT0gXCJub3RlXCIpIHtcblx0XHRcdFx0dGhpcy5ub3RlW2ldLnNldHRpbmdFbC5zaG93KCk7XG5cdFx0XHRcdHRoaXMuYm9va21hcmtbaV0uc2V0dGluZ0VsLmhpZGUoKTtcblx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPT0gXCJib29rbWFya1wiKSB7XG5cdFx0XHRcdHRoaXMubm90ZVtpXS5zZXR0aW5nRWwuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLmJvb2ttYXJrW2ldLnNldHRpbmdFbC5zaG93KCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gLS0gQWN0aW9uIGlzIFdyaXRlIC0tXG5cdFx0dGhpcy53cml0ZURpdltpXSA9IHRoaXMuYnV0dG9uRGl2W2ldLmNyZWF0ZURpdigpO1xuXHRcdHRoaXMud3JpdGVMaW5lc1tpXSA9IG5ldyBTZXR0aW5nKHRoaXMud3JpdGVEaXZbaV0pXG5cdFx0XHQuc2V0TmFtZSgnSG93IG1hbnkgbGluZXMgb2YgaW5wdXQ/Jylcblx0XHRcdC5zZXREZXNjKCdTZWxlY3QgaG93IG1hbnkgbGluZXMgb2YgaW5wdXQgeW91IHdpbGwgdXNlLicpXG5cdFx0XHQuYWRkRHJvcGRvd24oZHJvcCA9PiBkcm9wXG5cdFx0XHRcdC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLndyaXRlTGluZXMpXG5cdFx0XHRcdC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh2YWx1ZSk7XG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS53cml0ZUxpbmVzID0gdmFsdWU7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdCh0aGlzLndyaXRlTGluZXNbaV0uY29tcG9uZW50c1swXSBhcyBEcm9wZG93bkNvbXBvbmVudCkuYWRkT3B0aW9uKFwib25lXCIsIFwiT25lIExpbmVcIik7XG5cdFx0KHRoaXMud3JpdGVMaW5lc1tpXS5jb21wb25lbnRzWzBdIGFzIERyb3Bkb3duQ29tcG9uZW50KS5hZGRPcHRpb24oXCJtdWx0aVwiLCBcIk11bHRpcGxlIExpbmVzXCIpO1xuXG5cdFx0dGhpcy53cml0ZUNob2ljZVtpXSA9IG5ldyBTZXR0aW5nKHRoaXMud3JpdGVEaXZbaV0pXG5cdFx0XHQuc2V0TmFtZSgnV3JpdGUgQ2hvaWNlPycpXG5cdFx0XHQuc2V0RGVzYygnU2VsZWN0IHRoZSBub3RlIHRvIHdyaXRlLicpXG5cdFx0XHQuYWRkRHJvcGRvd24oZHJvcCA9PiBkcm9wXG5cdFx0XHRcdC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLndyaXRlQ2hvaWNlKVxuXHRcdFx0XHQub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2codmFsdWUpO1xuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0ud3JpdGVDaG9pY2UgPSB2YWx1ZTtcblx0XHRcdFx0XHRpZiAodmFsdWUgPT0gXCJkYWlseVwiKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm5vdGV3W2ldLnNldHRpbmdFbC5oaWRlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLmZvbGRlcndbaV0uc2V0dGluZ0VsLmhpZGUoKTtcblx0XHRcdFx0XHRcdHRoaXMubW9kZXdbaV0uc2V0dGluZ0VsLnNob3coKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHZhbHVlID09IFwibmV3XCIpIHtcblx0XHRcdFx0XHRcdHRoaXMubm90ZXdbaV0uc2V0dGluZ0VsLmhpZGUoKTtcblx0XHRcdFx0XHRcdHRoaXMuZm9sZGVyd1tpXS5zZXR0aW5nRWwuc2hvdygpO1xuXHRcdFx0XHRcdFx0dGhpcy5tb2Rld1tpXS5zZXR0aW5nRWwuaGlkZSgpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPT0gXCJzcGVjaWZpY1wiKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm5vdGV3W2ldLnNldHRpbmdFbC5zaG93KCk7XG5cdFx0XHRcdFx0XHR0aGlzLmZvbGRlcndbaV0uc2V0dGluZ0VsLmhpZGUoKTtcblx0XHRcdFx0XHRcdHRoaXMubW9kZXdbaV0uc2V0dGluZ0VsLnNob3coKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdFx0KHRoaXMud3JpdGVDaG9pY2VbaV0uY29tcG9uZW50c1swXSBhcyBEcm9wZG93bkNvbXBvbmVudCkuYWRkT3B0aW9uKFwiZGFpbHlcIiwgXCJEYWlseSBOb3RlXCIpO1xuXHRcdFx0KHRoaXMud3JpdGVDaG9pY2VbaV0uY29tcG9uZW50c1swXSBhcyBEcm9wZG93bkNvbXBvbmVudCkuYWRkT3B0aW9uKFwibmV3XCIsIFwiTmV3IE5vdGVcIik7XG5cdFx0XHQodGhpcy53cml0ZUNob2ljZVtpXS5jb21wb25lbnRzWzBdIGFzIERyb3Bkb3duQ29tcG9uZW50KS5hZGRPcHRpb24oXCJzcGVjaWZpY1wiLCBcIlNwZWNpZmljIE5vdGVcIik7XG5cblx0XHR0aGlzLm5vdGV3W2ldPSBuZXcgU2V0dGluZyh0aGlzLndyaXRlRGl2W2ldKVxuXHRcdFx0LnNldE5hbWUoJ05vdGUgTmFtZT8nKVxuXHRcdFx0LnNldERlc2MoJ1NlbGVjdCB0aGUgbm90ZSB0byBvcGVuLicpXG5cdFx0XHQuYWRkVGV4dCh0ZXh0ID0+IHRleHRcblx0XHRcdFx0LnNldFBsYWNlaG9sZGVyKCdOb3RlIG5hbWUnKVxuXHRcdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5ub3Rldylcblx0XHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0ubm90ZXcgPSB2YWx1ZTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0aWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0ud3JpdGVDaG9pY2UgIT09IFwibm90ZVwiKSB0aGlzLm5vdGV3W2ldLnNldHRpbmdFbC5oaWRlKCk7XG5cdFx0dGhpcy5mb2xkZXJ3W2ldID0gbmV3IFNldHRpbmcodGhpcy53cml0ZURpdltpXSlcblx0XHRcdC5zZXROYW1lKCdGb2xkZXI/Jylcblx0XHRcdC5zZXREZXNjKCdTZWxlY3QgdGhlIGZvbGRlciBpbiB3aGljaCB0byBvcGVuIHRoZSBub3RlLicpXG5cdFx0XHQuYWRkVGV4dCh0ZXh0ID0+IHRleHRcblx0XHRcdFx0LnNldFBsYWNlaG9sZGVyKCdGb2xkZXIgbmFtZScpXG5cdFx0XHRcdC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmZvbGRlcncpXG5cdFx0XHRcdC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmZvbGRlcncgPSB2YWx1ZTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0aWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0ud3JpdGVDaG9pY2UgIT09IFwibm90ZVwiKSB0aGlzLmZvbGRlcndbaV0uc2V0dGluZ0VsLmhpZGUoKTtcblxuXHRcdHRoaXMubW9kZXdbaV0gPSBuZXcgU2V0dGluZyh0aGlzLndyaXRlRGl2W2ldKVxuXHRcdFx0LnNldE5hbWUoJ1dyaXRpbmcgbW9kZT8nKVxuXHRcdFx0LnNldERlc2MoJ1NlbGVjdCB0aGUgbW9kZSBvZiB3cml0aW5nLicpXG5cdFx0XHQuYWRkRHJvcGRvd24oZHJvcCA9PiBkcm9wXG5cdFx0XHRcdC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLm1vZGV3KVxuXHRcdFx0XHQub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5tb2RldyA9IHZhbHVlO1xuXHRcdFx0fSlcblx0XHQpO1xuXHRcdCh0aGlzLm1vZGV3W2ldLmNvbXBvbmVudHNbMF0gYXMgRHJvcGRvd25Db21wb25lbnQpLmFkZE9wdGlvbihcImFwcGVuZFwiLCBcIkFwcGVuZFwiKTtcblx0XHQodGhpcy5tb2Rld1tpXS5jb21wb25lbnRzWzBdIGFzIERyb3Bkb3duQ29tcG9uZW50KS5hZGRPcHRpb24oXCJwcmVwZW5kXCIsIFwiUHJlcGVuZFwiKTtcblx0XHQodGhpcy5tb2Rld1tpXS5jb21wb25lbnRzWzBdIGFzIERyb3Bkb3duQ29tcG9uZW50KS5hZGRPcHRpb24oXCJvdmVyd3JpdGVcIiwgXCJPdmVyd3JpdGVcIik7XG5cdFx0KHRoaXMubW9kZXdbaV0uY29tcG9uZW50c1swXSBhcyBEcm9wZG93bkNvbXBvbmVudCkuYWRkT3B0aW9uKFwibmV3XCIsIFwiTmV3XCIpO1xuXG5cdFx0KHRoaXMubW9kZXdbaV0uY29tcG9uZW50c1swXSBhcyBEcm9wZG93bkNvbXBvbmVudCkuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5tb2Rldyk7XG5cdFx0XG5cdFx0dGhpcy5tb2Rld1tpXS5zZXR0aW5nRWwuc2hvdygpO1xuXG5cdFx0dGhpcy5wcm9tcHR3W2ldID0gbmV3IFNldHRpbmcodGhpcy53cml0ZURpdltpXSlcblx0XHRcdC5zZXROYW1lKCdQcm9tcHQ/Jylcblx0XHRcdC5zZXREZXNjKCdQcm9tcHQgdG8gZGVzY3JpYmUgdGhlIHdyaXRpbmcuJylcblx0XHRcdC5hZGRUZXh0KHRleHQgPT4gdGV4dFxuXHRcdFx0XHQuc2V0UGxhY2Vob2xkZXIoJ1Byb21wdCcpXG5cdFx0XHRcdC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLnByb21wdHcpXG5cdFx0XHRcdC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLnByb21wdHcgPSB2YWx1ZTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0dGhpcy5wcm9tcHR3W2ldLnNldHRpbmdFbC5zaG93KCk7XG5cblx0XHR2YWx1ZSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0ud3JpdGVDaG9pY2U7XG5cdFx0KHRoaXMud3JpdGVDaG9pY2VbaV0uY29tcG9uZW50c1swXSBhcyBEcm9wZG93bkNvbXBvbmVudCkuc2V0VmFsdWUodmFsdWUpO1xuXHRcdGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmFjdGlvbiA9PSBcIndyaXRlXCIpIHtcblx0XHRcdGlmICh2YWx1ZSA9PSBcImRhaWx5XCIpIHtcblx0XHRcdFx0dGhpcy5ub3Rld1tpXS5zZXR0aW5nRWwuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLmZvbGRlcndbaV0uc2V0dGluZ0VsLmhpZGUoKTtcblx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPT0gXCJyYW5kb21cIikge1xuXHRcdFx0XHR0aGlzLm5vdGV3W2ldLnNldHRpbmdFbC5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuZm9sZGVyd1tpXS5zZXR0aW5nRWwuc2hvdygpO1xuXHRcdFx0fSBlbHNlIGlmICh2YWx1ZSA9PSBcInNwZWNpZmljXCIpIHtcblx0XHRcdFx0dGhpcy5ub3Rld1tpXS5zZXR0aW5nRWwuc2hvdygpO1xuXHRcdFx0XHR0aGlzLmZvbGRlcndbaV0uc2V0dGluZ0VsLmhpZGUoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLndyaXRlU3RyW2ldID0gbmV3IFNldHRpbmcodGhpcy53cml0ZURpdltpXSlcblx0XHRcdC5zZXROYW1lKCdXcml0dGVuPycpXG5cdFx0XHQuc2V0RGVzYygnVGhlIHN0cmluZyB0byBiZSB3cml0dGVuIHRvIHRoZSBmaWxlLiAgTWF5IGNvbnRhaW4gdmFyaWFibGVzLicpXG5cdFx0XHQuYWRkVGV4dCh0ZXh0ID0+IHRleHRcblx0XHRcdFx0LnNldFBsYWNlaG9sZGVyKCdTdHJpbmcnKVxuXHRcdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS53cml0ZVN0cmluZylcblx0XHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0ud3JpdGVTdHJpbmcgPSB2YWx1ZTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0dGhpcy53cml0ZVN0cltpXS5zZXR0aW5nRWwuc2hvdygpO1xuXG5cdFx0dGhpcy53cml0ZURpdltpXS5oaWRlKCk7XG5cblx0XHQvLyAtLSBDb21tYW5kIC0tIFxuXHRcdHRoaXMuY29tbWFuZERpdltpXSA9IHRoaXMuYnV0dG9uRGl2W2ldLmNyZWF0ZURpdigpO1xuXHRcdHRoaXMuY29tbWFuZFtpXSA9IG5ldyBTZXR0aW5nKHRoaXMuY29tbWFuZERpdltpXSlcblx0XHRcdC5zZXROYW1lKCdDb21tYW5kPycpXG5cdFx0XHQuc2V0RGVzYygnU3BlY2lmeSB0aGUgY29tbWFuZCB0byBleGVjdXRlLicpXG5cdFx0XHQuYWRkVGV4dCh0ZXh0ID0+IHRleHRcblx0XHRcdFx0LnNldFBsYWNlaG9sZGVyKCdDb21tYW5kJylcblx0XHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uY29tbWFuZClcblx0XHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uY29tbWFuZCA9IHZhbHVlO1xuXHRcdFx0XHRcdGxldCBzdHIgPSB2YWx1ZS5yZXBsYWNlKC8gL2csICdfJyk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdHRoaXMuY29tbWFuZENob2ljZVtpXSA9IG5ldyBTZXR0aW5nKHRoaXMuY29tbWFuZERpdltpXSlcblx0XHRcdC5zZXROYW1lKCdDb21tYW5kIHdpdGggT3BlbiBDaG9pY2U/Jylcblx0XHRcdC5zZXREZXNjKCdTZWxlY3QgdGhlIHR5cGUgb2Ygbm90ZSBvcGVuLicpXG5cdFx0XHQuYWRkRHJvcGRvd24oZHJvcCA9PiBkcm9wXG5cdFx0XHRcdC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmNvbW1tYW5kQ2hvaWNlID0gdmFsdWU7XG5cdFx0XHRcdFx0aWYgKHZhbHVlID09IFwiZGFpbHlcIikge1xuXHRcdFx0XHRcdFx0dGhpcy5jb21tYW5kTm90ZVtpXS5zZXR0aW5nRWwuaGlkZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy5jb21tYW5kQm9va21hcmtbaV0uc2V0dGluZ0VsLmhpZGUoKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHZhbHVlID09IFwibm90ZVwiKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNvbW1hbmROb3RlW2ldLnNldHRpbmdFbC5zaG93KCk7XG5cdFx0XHRcdFx0XHR0aGlzLmNvbW1hbmRCb29rbWFya1tpXS5zZXR0aW5nRWwuaGlkZSgpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPT0gXCJib29rbWFya1wiKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNvbW1hbmROb3RlW2ldLnNldHRpbmdFbC5oaWRlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLmNvbW1hbmRCb29rbWFya1tpXS5zZXR0aW5nRWwuc2hvdygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0XHQodGhpcy5jb21tYW5kQ2hvaWNlW2ldLmNvbXBvbmVudHNbMF0gYXMgRHJvcGRvd25Db21wb25lbnQpLmFkZE9wdGlvbihcImRhaWx5XCIsIFwiRGFpbHkgTm90ZVwiKTtcblx0XHRcdCh0aGlzLmNvbW1hbmRDaG9pY2VbaV0uY29tcG9uZW50c1swXSBhcyBEcm9wZG93bkNvbXBvbmVudCkuYWRkT3B0aW9uKFwibm90ZVwiLCBcIk5vdGVcIik7XG5cdFx0XHQodGhpcy5jb21tYW5kQ2hvaWNlW2ldLmNvbXBvbmVudHNbMF0gYXMgRHJvcGRvd25Db21wb25lbnQpLmFkZE9wdGlvbihcImJvb2ttYXJrXCIsIFwiQm9va21hcmtcIik7XG5cblx0XHRcdCh0aGlzLmNvbW1hbmRDaG9pY2VbaV0uY29tcG9uZW50c1swXSBhcyBEcm9wZG93bkNvbXBvbmVudCkuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5jb21tbWFuZENob2ljZSk7XG5cdFx0XG5cdFx0dGhpcy5jb21tYW5kTm90ZVtpXSA9IG5ldyBTZXR0aW5nKHRoaXMuY29tbWFuZERpdltpXSlcblx0XHRcdC5zZXROYW1lKCdOb3RlIE5hbWU/Jylcblx0XHRcdC5zZXREZXNjKCdTZWxlY3QgdGhlIG5vdGUgdG8gb3Blbi4nKVxuXHRcdFx0LmFkZFRleHQodGV4dCA9PiB0ZXh0XG5cdFx0XHRcdC5zZXRQbGFjZWhvbGRlcignTm90ZSBuYW1lJylcblx0XHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uY29tbWFuZE5vdGUpXG5cdFx0XHRcdC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmNvbW1hbmROb3RlID0gdmFsdWU7XHRcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0dGhpcy5jb21tYW5kTm90ZVtpXS5zZXR0aW5nRWwuaGlkZSgpO1xuXHRcdHRoaXMuY29tbWFuZEJvb2ttYXJrW2ldID0gbmV3IFNldHRpbmcodGhpcy5jb21tYW5kRGl2W2ldKVxuXHRcdFx0LnNldE5hbWUoJ0Jvb2ttYXJrIE5hbWU/Jylcblx0XHRcdC5zZXREZXNjKCdTZWxlY3QgdGhlIGJvb2ttYXJrIHRvIG9wZW4uJylcblx0XHRcdC5hZGRUZXh0KHRleHQgPT4gdGV4dFxuXHRcdFx0XHQuc2V0UGxhY2Vob2xkZXIoJ0Jvb2ttYXJrIG5hbWUnKVxuXHRcdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5jb21tYW5kQm9va21hcmspXG5cdFx0XHRcdC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmNvbW1hbmRCb29rbWFyayA9IHZhbHVlO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR0aGlzLmNvbW1hbmRCb29rbWFya1tpXS5zZXR0aW5nRWwuaGlkZSgpO1xuXG5cdFx0dmFsdWUgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmNvbW1tYW5kQ2hvaWNlO1xuXHRcdGlmICh2YWx1ZSA9PSBcImRhaWx5XCIpIHtcblx0XHRcdHRoaXMuY29tbWFuZE5vdGVbaV0uc2V0dGluZ0VsLmhpZGUoKTtcblx0XHRcdHRoaXMuY29tbWFuZEJvb2ttYXJrW2ldLnNldHRpbmdFbC5oaWRlKCk7XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA9PSBcIm5vdGVcIikge1xuXHRcdFx0dGhpcy5jb21tYW5kTm90ZVtpXS5zZXR0aW5nRWwuc2hvdygpO1xuXHRcdFx0dGhpcy5jb21tYW5kQm9va21hcmtbaV0uc2V0dGluZ0VsLmhpZGUoKTtcblx0XHR9IGVsc2UgaWYgKHZhbHVlID09IFwiYm9va21hcmtcIikge1xuXHRcdFx0dGhpcy5jb21tYW5kTm90ZVtpXS5zZXR0aW5nRWwuaGlkZSgpO1xuXHRcdFx0dGhpcy5jb21tYW5kQm9va21hcmtbaV0uc2V0dGluZ0VsLnNob3coKTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbW1hbmREaXZbaV0uaGlkZSgpO1xuXG5cdFx0Ly8gLS0gQ2FtZXJhIC0tIFxuXHRcdHRoaXMuY2FtZXJhRGl2W2ldID0gdGhpcy5idXR0b25EaXZbaV0uY3JlYXRlRGl2KCk7XG5cdFx0dGhpcy5jYW1lcmFGb2xkZXJbaV0gPSBuZXcgU2V0dGluZyh0aGlzLmNhbWVyYURpdltpXSlcblx0XHRcdC5zZXROYW1lKCdGb2xkZXI/Jylcblx0XHRcdC5zZXREZXNjKCdTZWxlY3QgdGhlIGZvbGRlciBpbiB3aGljaCB0byBkZXBvc2l0IHRoZSBpbWFnZS4nKVxuXHRcdFx0LmFkZFRleHQodGV4dCA9PiB0ZXh0XG5cdFx0XHRcdC5zZXRQbGFjZWhvbGRlcignRm9sZGVyIG5hbWUnKVxuXHRcdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5jYW1lcmFGb2xkZXIpXG5cdFx0XHRcdC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmNhbWVyYUZvbGRlciA9IHZhbHVlO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHQvL3RoaXMuY2FtZXJhRm9sZGVyW2ldLnNldHRpbmdFbC5oaWRlKCk7XG5cdFx0dGhpcy5jYW1lcmFMaW5rW2ldID0gbmV3IFNldHRpbmcodGhpcy5jYW1lcmFEaXZbaV0pXG5cdFx0XHQuc2V0TmFtZSgnSW5zZXJ0IGxpbms/Jylcblx0XHRcdC5zZXREZXNjKCdJbnNlcnQgYSBsaW5rIHRvIGltYWdlIGZpbGU/Jylcblx0XHRcdC5hZGREcm9wZG93bihkcm9wID0+IGRyb3Bcblx0XHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uY2FtZXJhTGluayA9IHZhbHVlO1xuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PSBcIm5vXCIgfHwgdmFsdWUgPT0gXCJkYWlseVwiKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNhbWVyYU5vdGVbaV0uc2V0dGluZ0VsLmhpZGUoKTtcblx0XHRcdFx0XHRcdHRoaXMuY2FtZXJhQm9va21hcmtbaV0uc2V0dGluZ0VsLmhpZGUoKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHZhbHVlID09IFwibm90ZVwiKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNhbWVyYU5vdGVbaV0uc2V0dGluZ0VsLnNob3coKTtcblx0XHRcdFx0XHRcdHRoaXMuY2FtZXJhQm9va21hcmtbaV0uc2V0dGluZ0VsLmhpZGUoKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHZhbHVlID09IFwiYm9va21hcmtcIikge1xuXHRcdFx0XHRcdFx0dGhpcy5jYW1lcmFOb3RlW2ldLnNldHRpbmdFbC5oaWRlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLmNhbWVyYUJvb2ttYXJrW2ldLnNldHRpbmdFbC5zaG93KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdCk7XG5cdFx0KHRoaXMuY2FtZXJhTGlua1tpXS5jb21wb25lbnRzWzBdIGFzIERyb3Bkb3duQ29tcG9uZW50KS5hZGRPcHRpb24oXCJub1wiLCBcIk5vXCIpO1xuXHRcdCh0aGlzLmNhbWVyYUxpbmtbaV0uY29tcG9uZW50c1swXSBhcyBEcm9wZG93bkNvbXBvbmVudCkuYWRkT3B0aW9uKFwiZGFpbHlcIiwgXCJEYWlseSBOb3RlXCIpO1xuXHRcdCh0aGlzLmNhbWVyYUxpbmtbaV0uY29tcG9uZW50c1swXSBhcyBEcm9wZG93bkNvbXBvbmVudCkuYWRkT3B0aW9uKFwibm90ZVwiLCBcIk5vdGVcIik7XG5cdFx0KHRoaXMuY2FtZXJhTGlua1tpXS5jb21wb25lbnRzWzBdIGFzIERyb3Bkb3duQ29tcG9uZW50KS5hZGRPcHRpb24oXCJib29rbWFya1wiLCBcIkJvb2ttYXJrXCIpO1xuXG5cdFx0dGhpcy5jYW1lcmFOb3RlW2ldID0gbmV3IFNldHRpbmcodGhpcy5jYW1lcmFEaXZbaV0pXG5cdFx0XHQuc2V0TmFtZSgnTm90ZSBOYW1lPycpXG5cdFx0XHQuc2V0RGVzYygnU2VsZWN0IHRoZSBub3RlIGZvciBsaW5rIGluc2VydGlvbi4nKVxuXHRcdFx0LmFkZFRleHQodGV4dCA9PiB0ZXh0XG5cdFx0XHRcdC5zZXRQbGFjZWhvbGRlcignTm90ZSBuYW1lJylcblx0XHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uY2FtZXJhTm90ZSlcblx0XHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uY2FtZXJhTm90ZSA9IHZhbHVlO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR0aGlzLmNhbWVyYU5vdGVbaV0uc2V0dGluZ0VsLmhpZGUoKTtcblx0XHR0aGlzLmNhbWVyYUJvb2ttYXJrW2ldID0gbmV3IFNldHRpbmcodGhpcy5jYW1lcmFEaXZbaV0pXG5cdFx0XHQuc2V0TmFtZSgnQm9va21hcmsgTmFtZT8nKVxuXHRcdFx0LnNldERlc2MoJ1NlbGVjdCB0aGUgYm9va21hcmsgZm9yIGxpbmsgaW5zZXJ0aW9uLicpXG5cdFx0XHQuYWRkVGV4dCh0ZXh0ID0+IHRleHRcblx0XHRcdFx0LnNldFBsYWNlaG9sZGVyKCdCb29rbWFyayBuYW1lJylcblx0XHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uY2FtZXJhQm9va21hcmspXG5cdFx0XHRcdC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmNhbWVyYUJvb2ttYXJrID0gdmFsdWU7XG5cdFx0XHRcdH0pXG5cdFx0KTtcblx0XHR0aGlzLmNhbWVyYUJvb2ttYXJrW2ldLnNldHRpbmdFbC5oaWRlKCk7XG5cblx0XHR2YWx1ZSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uY2FtZXJhTGluaztcblx0XHQodGhpcy5jYW1lcmFMaW5rW2ldLmNvbXBvbmVudHNbMF0gYXMgRHJvcGRvd25Db21wb25lbnQpLnNldFZhbHVlKHZhbHVlKTtcblx0XHRpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5hY3Rpb24gPT0gXCJjYW1lcmFcIikge1xuXHRcdFx0aWYgKHZhbHVlID09IFwibm9cIiB8fCB2YWx1ZSA9PSBcImRhaWx5XCIpIHtcblx0XHRcdFx0dGhpcy5jYW1lcmFOb3RlW2ldLnNldHRpbmdFbC5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuY2FtZXJhQm9va21hcmtbaV0uc2V0dGluZ0VsLmhpZGUoKTtcblx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPT0gXCJub3RlXCIpIHtcblx0XHRcdFx0dGhpcy5jYW1lcmFOb3RlW2ldLnNldHRpbmdFbC5zaG93KCk7XG5cdFx0XHRcdHRoaXMuY2FtZXJhQm9va21hcmtbaV0uc2V0dGluZ0VsLmhpZGUoKTtcblx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPT0gXCJib29rbWFya1wiKSB7XG5cdFx0XHRcdHRoaXMuY2FtZXJhTm90ZVtpXS5zZXR0aW5nRWwuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLmNhbWVyYUJvb2ttYXJrW2ldLnNldHRpbmdFbC5zaG93KCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuY2FtZXJhRGl2W2ldLmhpZGUoKTtcblxuXHRcdC8vIC0tIFRhc2sgLS0gKGFsbW9zdCB0aGUgc2FtZSBhcyB3cml0ZSlcblx0XHR0aGlzLnRhc2tEaXZbaV0gPSB0aGlzLmJ1dHRvbkRpdltpXS5jcmVhdGVEaXYoKTtcblx0XHR0aGlzLnRhc2t0YWdzW2ldID0gbmV3IFNldHRpbmcodGhpcy50YXNrRGl2W2ldKVxuXHRcdFx0LnNldE5hbWUoJ1ByZWRlZmluZWQgdGFncycpXG5cdFx0XHQuc2V0RGVzYygnU3BlY2lmeSB0YWdzIHRvIGJlIGFkZGVkIHRvIHRoZSB0YXNrLicpXG5cdFx0XHQuYWRkVGV4dCh0ZXh0ID0+IHRleHRcblx0XHRcdC5zZXRQbGFjZWhvbGRlcignVGFncycpXG5cdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS50YXNrdGFncylcblx0XHRcdC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcblx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS50YXNrdGFncyA9IHZhbHVlO1xuXHRcdFx0fSlcblx0XHQpO1xuXG5cdFx0dGhpcy50YXNrRGl2W2ldLmhpZGUoKTtcblxuXHRcdGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLnVzZUJ1dHRvbikge1xuXHRcdFx0dGhpcy5idXR0b25EaXZbaV0uc2hvdygpO1xuXHRcdFx0dmFsdWUgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmFjdGlvbjtcblx0XHRcdGlmICh2YWx1ZSA9PSBcIm9wZW5cIikge1xuXHRcdFx0XHR0aGlzLm9wZW5EaXZbaV0uc2hvdygpO1xuXHRcdFx0XHR0aGlzLndyaXRlRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0dGhpcy5jb21tYW5kRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0dGhpcy5jYW1lcmFEaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHR0aGlzLnRhc2tEaXZbaV0uaGlkZSgpO1xuXHRcdFx0fSBlbHNlIGlmICh2YWx1ZSA9PSBcIndyaXRlXCIpIHtcblx0XHRcdFx0dGhpcy5vcGVuRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0dGhpcy53cml0ZURpdltpXS5zaG93KCk7XG5cdFx0XHRcdHRoaXMuY29tbWFuZERpdltpXS5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuY2FtZXJhRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0dGhpcy50YXNrRGl2W2ldLmhpZGUoKTtcblx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPT0gXCJjb21tYW5kXCIpIHtcblx0XHRcdFx0dGhpcy5vcGVuRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0dGhpcy53cml0ZURpdltpXS5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuY29tbWFuZERpdltpXS5zaG93KCk7XG5cdFx0XHRcdHRoaXMuY2FtZXJhRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0dGhpcy50YXNrRGl2W2ldLmhpZGUoKTtcblx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPT0gXCJjYW1lcmFcIikge1xuXHRcdFx0XHR0aGlzLm9wZW5EaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHR0aGlzLndyaXRlRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0dGhpcy5jb21tYW5kRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0dGhpcy5jYW1lcmFEaXZbaV0uc2hvdygpO1xuXHRcdFx0XHR0aGlzLnRhc2tEaXZbaV0uaGlkZSgpO1xuXHRcdFx0fSBlbHNlIGlmICh2YWx1ZSA9PSBcInRhc2tcIikge1xuXHRcdFx0XHR0aGlzLm9wZW5EaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHR0aGlzLndyaXRlRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0dGhpcy5jb21tYW5kRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0dGhpcy5jYW1lcmFEaXZbaV0uaGlkZSgpO1xuXHRcdFx0XHR0aGlzLnRhc2tEaXZbaV0uc2hvdygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5vcGVuRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0dGhpcy53cml0ZURpdltpXS5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuY29tbWFuZERpdltpXS5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuY2FtZXJhRGl2W2ldLmhpZGUoKTtcblx0XHRcdFx0dGhpcy50YXNrRGl2W2ldLmhpZGUoKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5idXR0b25EaXZbaV0uaGlkZSgpO1xuXHRcdH1cblx0fVxuXHR9XG5cblx0YXN5bmMgaGlkZSgpIHtcblx0XHRjb25zb2xlLmxvZyhcIlNhdmluZyBzZXR0aW5nc1wiKTtcblx0XHR0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XG5cdFx0dGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG5cdFx0Y29uc29sZS5sb2codGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xuXHRcdFxuXHRcdGNvbnNvbGUubG9nKFwiR2VuZXJhdGluZyBKU09OXCIpO1xuXG5cdFx0dGhpcy5qc29uID0gJ3sgXCJkYWlseW5vdGVsb2NcIjogXCInO1xuXHRcdHRoaXMuanNvbiArPSBhd2FpdCBnZXREYWlseU5vdGVTZXR0aW5nc1BhdGgoKSsnXCIsICc7XG5cdFx0Y29uc29sZS5sb2codGhpcy5qc29uKTtcblxuXHRcdHRoaXMuanNvbiArPSAnXCJ2YXVsdDFcIjogXCInK3RoaXMucGx1Z2luLnNldHRpbmdzLnZhdWx0MSsnXCIsICc7XG5cdFx0dGhpcy5qc29uICs9ICdcInZhdWx0MlwiOiBcIicrdGhpcy5wbHVnaW4uc2V0dGluZ3MudmF1bHQyKydcIiwgJztcblx0XHR0aGlzLmpzb24gKz0gJ1widmF1bHQzXCI6IFwiJyt0aGlzLnBsdWdpbi5zZXR0aW5ncy52YXVsdDMrJ1wiLCAnO1xuXHRcdHRoaXMuanNvbiArPSAnXCJidXR0b25zXCI6IFsnO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bWJlck9mQnV0dG9uczsgaSsrKSB7XHRcdFxuXHRcdFx0aWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0udXNlQnV0dG9uKSB7XG5cdFx0XHRcdHRoaXMuanNvbiArPSAneyBcImJ1dHRvblwiOiAnKyhpKzEpKycsICc7XG5cdFx0XHRcdHRoaXMuanNvbiArPSAnXCJsYWJlbFwiOiBcIicrdGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5sYWJlbCsnXCIsICc7XG5cdFx0XHRcdGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLnZhdWx0ID09IFwiXCIpXG5cdFx0XHRcdFx0dGhpcy5qc29uICs9ICdcInZhdWx0XCI6IFwiJyt0aGlzLnBsdWdpbi5zZXR0aW5ncy52YXVsdDErJ1wiLCAnO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0dGhpcy5qc29uICs9ICdcInZhdWx0XCI6IFwiJyt0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLnZhdWx0KydcIiwgJztcdFxuXG5cdFx0XHRcdC8vIEFjdGlvbiA9IFwib3BlblwiXG5cdFx0XHRcdGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmFjdGlvbiA9PSBcIm9wZW5cIikge1xuXHRcdFx0XHRcdHRoaXMuanNvbiArPSAnXCJhY3Rpb25cIjogXCInK3RoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uYWN0aW9uKycgJztcblx0XHRcdFx0XHQvL3RoaXMuanNvbiArPSAnXCInK3RoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0ub3BlbkNob2ljZSsnXCIsICc7XHRcblx0XHRcdFx0XHRpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5vcGVuQ2hvaWNlID09IFwiZGFpbHlcIikge1xuXHRcdFx0XHRcdFx0dGhpcy5qc29uICs9ICdkYWlseVwiJztcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0ub3BlbkNob2ljZSA9PSBcIm5vdGVcIikge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmpzb24gKz0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5ub3RlTmFtZSsnXCInO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5vcGVuQ2hvaWNlID09IFwiYm9va21hcmtcIikge1xuXHRcdFx0XHRcdFx0dGhpcy5qc29uICs9ICdib29rbWFyayAnK3RoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uYm9va21hcmtOYW1lKydcIic7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFjdGlvbiA9IFwid3JpdGVcIlxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uYWN0aW9uID09IFwid3JpdGVcIikge1xuXHRcdFx0XHRcdHRoaXMuanNvbiArPSAnXCJhY3Rpb25cIjogXCInK3RoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uYWN0aW9uKycgJztcblx0XHRcdFx0XHRpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS53cml0ZUNob2ljZSA9PSBcImRhaWx5XCIpIHtcblx0XHRcdFx0XHRcdHRoaXMuanNvbiArPSAnZGFpbHlcIiwgJztcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0ud3JpdGVDaG9pY2UgPT0gXCJzcGVjaWZpY1wiKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmpzb24gKz0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5ub3RldysnXCIsICc7XHRcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0ud3JpdGVDaG9pY2UgPT0gXCJuZXdcIikge1xuXHRcdFx0XHRcdFx0dGhpcy5qc29uICs9ICduZXdcIiwgXCJmb2xkZXJcIjogXCInK3RoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uZm9sZGVydysnXCIsICc7XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5qc29uICs9ICdcImxpbmVzXCI6IFwiJyt0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLndyaXRlTGluZXMrJ1wiLCAnO1xuXHRcdFx0XHRcdHRoaXMuanNvbiArPSAnXCJtb2RlXCI6IFwiJyt0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLm1vZGV3KydcIiwgJztcdFxuXHRcdFx0XHRcdHRoaXMuanNvbiArPSAnXCJwcm9tcHRcIjogXCInK3RoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0ucHJvbXB0dysnXCIsJztcdFxuXHRcdFx0XHRcdHRoaXMuanNvbiArPSAnXCJ3cml0ZVN0cmluZ1wiOiBcIicrdGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS53cml0ZVN0cmluZysnXCInO1xuXG5cdFx0XHRcdC8vIEFjdGlvbiA9IFwiY29tbWFuZFwiXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5hY3Rpb24gPT0gXCJjb21tYW5kXCIpIHtcblx0XHRcdFx0XHRsZXQgdmFsdWUgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmNvbW1hbmQ7XG5cdFx0XHRcdFx0bGV0IHN0ciA9IHZhbHVlLnJlcGxhY2UoLyAvZywgJ18nKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR0aGlzLmpzb24gKz0gJ1wiYWN0aW9uXCI6IFwiJyt0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmFjdGlvbisnICcrc3RyKycgJztcblx0XHRcdFx0XHRpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5jb21tbWFuZENob2ljZSA9PSBcImRhaWx5XCIpIHtcblx0XHRcdFx0XHRcdHRoaXMuanNvbiArPSAnZGFpbHlcIic7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmNvbW1tYW5kQ2hvaWNlID09IFwibm90ZVwiKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmpzb24gKz0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5jb21tYW5kTm90ZSsnXCInO1x0XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmNvbW1tYW5kQ2hvaWNlID09IFwiYm9va21hcmtcIikge1xuXHRcdFx0XHRcdFx0dGhpcy5qc29uICs9ICcgYm9va21hcmsgJyt0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmNvbW1hbmRCb29rbWFyaysnXCInO1x0XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFjdGlvbiA9IFwiY2FtZXJhXCJcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmFjdGlvbiA9PSBcImNhbWVyYVwiKSB7XG5cdFx0XHRcdFx0dGhpcy5qc29uICs9ICdcImFjdGlvblwiOiBcIicrdGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5hY3Rpb24rJ1wiLCAnO1xuXHRcdFx0XHRcdHRoaXMuanNvbiArPSAnXCJmb2xkZXJcIjogXCInK3RoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uY2FtZXJhRm9sZGVyKydcIiwgJztcblx0XHRcdFx0XHR0aGlzLmpzb24gKz0gJ1wiY2FtZXJhTGlua1wiOiBcIicrdGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS5jYW1lcmFMaW5rKydcIiwgJztcdFxuXHRcdFx0XHRcdHRoaXMuanNvbiArPSAnXCJjYW1lcmFOb3RlXCI6IFwiJyt0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmNhbWVyYU5vdGUrJ1wiLCAnO1x0XG5cdFx0XHRcdFx0dGhpcy5qc29uICs9ICdcImNhbWVyYUJvb2ttYXJrXCI6IFwiJyt0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmNhbWVyYUJvb2ttYXJrKydcIiAnO1x0XG5cblx0XHRcdFx0Ly8gQWN0aW9uID0gXCJ0YXNrXCJcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5idXR0b25zW2ldLmFjdGlvbiA9PSBcInRhc2tcIikge1xuXHRcdFx0XHRcdHRoaXMuanNvbiArPSAnXCJhY3Rpb25cIjogXCInK3RoaXMucGx1Z2luLnNldHRpbmdzLmJ1dHRvbnNbaV0uYWN0aW9uKydcIiwgJztcblx0XHRcdFx0XHR0aGlzLmpzb24gKz0gJ1widGFnc1wiOiBcIicrdGhpcy5wbHVnaW4uc2V0dGluZ3MuYnV0dG9uc1tpXS50YXNrdGFncysnXCIgJztcdFx0XHRcdFx0XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmpzb24gKz0gXCJ9LFwiO1xuXHRcdFx0fVxuXG5cdFx0fVxuXHRcdHRoaXMuanNvbiArPSAnXX0nO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuanNvbik7XG5cblx0XHQvLyBXcml0ZSB0byBhIGZpbGVcblxuXHRcdC8vIERlbGV0ZSB0aGUgb2xkIGZpbGVcdFx0XG5cdFx0Ly8gaWYgKHRoaXMuZmlsZUV4aXN0cyhcImthYXBhdGEuanNvblwiLCBcIi9cIiBhcyBURm9sZGVyKSkgeyBcblx0XHQvLyBcdGxldCB0YWYgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgob2dmaWxlbmFtZSkgYXMgVEZpbGU7XG5cdFx0Ly8gXHRjb25zb2xlLmxvZyhcIlRyeWluZyB0byBkZWxldGUgXCIrdGFmLnBhdGgpXG5cdFx0Ly8gXHRpZiAodGFmICE9PSB1bmRlZmluZWQpIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmRlbGV0ZSh0YWYpO1xuXHRcdC8vIH1cbiAgXG5cdFx0Ly8gY29uc3QganNvbmZpbGU6IFRGaWxlID0gYXdhaXQgKHRoaXMuYXBwLmZpbGVNYW5hZ2VyIGFzIGFueSlcblx0XHQvLyAgXHQuY3JlYXRlTmV3TWFya2Rvd25GaWxlKHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVGaWxlKCk/LnBhdGgsIFwia2FhcGF0YS5qc29uXCIpO1xuXHRcdGxldCB0YWYgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoXCJrYWFwYXRhLmpzb25cIikgYXMgVEZpbGU7XG5cdFx0YXdhaXQgdGhpcy5hcHAudmF1bHQuZGVsZXRlKHRhZik7XG5cdCBcdGNvbnN0IGpzb25maWxlOiBURmlsZSA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShcImthYXBhdGEuanNvblwiLCB0aGlzLmpzb24pO1xuXHRcdGNvbnNvbGUubG9nKGpzb25maWxlKTtcblx0XHQvL2F3YWl0IHRoaXMuYXBwLnZhdWx0Lm1vZGlmeShqc29uZmlsZSwgdGhpcy5qc29uKTtcblxuXHR9XG5cblx0ZmlsZUV4aXN0cyhmaWxlTmFtZTogc3RyaW5nLCBmb2xkZXI6IFRGb2xkZXIpOiBCb29sZWFuIHtcblx0XHR2YXIgcmVzOiBib29sZWFuID0gZmFsc2U7XG5cdFx0bGV0IGZpbGUgPSBmb2xkZXIuY2hpbGRyZW4uZmluZChhZmlsZSA9PiBhZmlsZS5uYW1lID09PSBmaWxlTmFtZSk7XG5cdFx0cmV0dXJuIChmaWxlICE9PSB1bmRlZmluZWQpO1xuXHR9XG5cbn0iLCJpbXBvcnQgeyBBcHAsIE1vZGFsLCBOb3RpY2UsIFBsdWdpbiwgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZyB9IGZyb20gJ29ic2lkaWFuJztcclxuXHJcbmltcG9ydCB7IENvbmZpZ3VyZSB9IGZyb20gJy4vQ29uZmlndXJlJztcclxuXHJcbmludGVyZmFjZSBLYWFwYXRhU2V0dGluZyB7XHJcblx0dXNlQnV0dG9uOiBib29sZWFuO1xyXG5cdGxhYmVsOiBzdHJpbmc7XHJcblx0aW1hZ2U6IHN0cmluZztcclxuXHR2YXVsdDogc3RyaW5nO1xyXG5cdGFjdGlvbjogc3RyaW5nO1xyXG5cdG9wZW5DaG9pY2U6IHN0cmluZztcclxuXHRub3RlTmFtZTogc3RyaW5nO1xyXG5cdGJvb2ttYXJrTmFtZTogc3RyaW5nO1xyXG5cdHdyaXRlTGluZXM6IHN0cmluZztcclxuXHR3cml0ZUNob2ljZTogc3RyaW5nO1xyXG5cdG5vdGV3OiBzdHJpbmc7XHJcblx0Zm9sZGVydzogc3RyaW5nO1xyXG5cdG1vZGV3OiBzdHJpbmc7XHJcblx0cHJvbXB0dzogc3RyaW5nO1xyXG5cdHdyaXRlU3RyaW5nOiBzdHJpbmc7XHJcblx0Y29tbWFuZDogc3RyaW5nO1xyXG5cdGNvbW1tYW5kQ2hvaWNlOiBzdHJpbmc7XHJcblx0Y29tbWFuZE5vdGU6IHN0cmluZztcclxuXHRjb21tYW5kQm9va21hcms6IHN0cmluZztcclxuXHRjYW1lcmFGb2xkZXI6IHN0cmluZztcclxuXHRjYW1lcmFMaW5rOiBzdHJpbmc7XHJcblx0Y2FtZXJhTm90ZTogc3RyaW5nO1xyXG5cdGNhbWVyYUJvb2ttYXJrOiBzdHJpbmc7XHJcblx0dGFza3RhZ3M6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIEthYXBhdGFTZXR0aW5ncyB7XHJcblx0dmF1bHQxOiBzdHJpbmc7XHJcblx0dmF1bHQyOiBzdHJpbmc7XHJcblx0dmF1bHQzOiBzdHJpbmc7XHJcblxyXG5cdGJ1dHRvbnM6IEFycmF5PEthYXBhdGFTZXR0aW5nPjtcclxuXHJcbn1cclxuXHJcbmNvbnN0IERFRkFVTFRfU0VUVElOR1M6IEthYXBhdGFTZXR0aW5ncyA9IHtcclxuXHR2YXVsdDE6IFwiQmFzZVwiLFxyXG5cdHZhdWx0MjogXCJCYXNlXCIsXHJcblx0dmF1bHQzOiBcIkJhc2VcIixcclxuXHJcblx0YnV0dG9uczogW1xyXG5cdFx0e1xyXG5cdFx0XHR1c2VCdXR0b246IGZhbHNlLFxyXG5cdFx0XHRsYWJlbDogXCJcIixcclxuXHRcdFx0aW1hZ2U6IFwiXCIsXHJcblx0XHRcdHZhdWx0OiBcIlwiLFxyXG5cdFx0XHRhY3Rpb246IFwib3BlblwiLFxyXG5cdFx0XHRvcGVuQ2hvaWNlOiBcIm5vdGVcIixcclxuXHRcdFx0bm90ZU5hbWU6IFwiXCIsXHJcblx0XHRcdGJvb2ttYXJrTmFtZTogXCJcIixcclxuXHRcdFx0d3JpdGVMaW5lczogXCJvbmVcIixcclxuXHRcdFx0d3JpdGVDaG9pY2U6IFwibm90ZVwiLFxyXG5cdFx0XHRub3RldzogXCJcIixcclxuXHRcdFx0Zm9sZGVydzogXCJcIixcclxuXHRcdFx0bW9kZXc6IFwiTW9kZVwiLFxyXG5cdFx0XHRwcm9tcHR3OiBcIlwiLFxyXG5cdFx0XHR3cml0ZVN0cmluZzogXCJ7e2lucHV0fX1cIixcclxuXHRcdFx0Y29tbWFuZDogXCJcIixcclxuXHRcdFx0Y29tbW1hbmRDaG9pY2U6IFwibm90ZVwiLFxyXG5cdFx0XHRjb21tYW5kTm90ZTogXCJcIixcclxuXHRcdFx0Y29tbWFuZEJvb2ttYXJrOiBcIlwiLFxyXG5cdFx0XHRjYW1lcmFGb2xkZXI6IFwiXCIsXHJcblx0XHRcdGNhbWVyYUxpbms6IFwiXCIsXHJcblx0XHRcdGNhbWVyYU5vdGU6IFwiXCIsXHJcblx0XHRcdGNhbWVyYUJvb2ttYXJrOiBcIlwiLFxyXG5cdFx0XHR0YXNrdGFnczogXCJcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0dXNlQnV0dG9uOiBmYWxzZSxcclxuXHRcdFx0bGFiZWw6IFwiXCIsXHJcblx0XHRcdGltYWdlOiBcIlwiLFxyXG5cdFx0XHR2YXVsdDogXCJcIixcclxuXHRcdFx0YWN0aW9uOiBcIm9wZW5cIixcclxuXHRcdFx0b3BlbkNob2ljZTogXCJub3RlXCIsXHJcblx0XHRcdG5vdGVOYW1lOiBcIlwiLFxyXG5cdFx0XHRib29rbWFya05hbWU6IFwiXCIsXHJcblx0XHRcdHdyaXRlTGluZXM6IFwib25lXCIsXHJcblx0XHRcdHdyaXRlQ2hvaWNlOiBcIm5vdGVcIixcclxuXHRcdFx0bm90ZXc6IFwiXCIsXHJcblx0XHRcdGZvbGRlcnc6IFwiXCIsXHJcblx0XHRcdG1vZGV3OiBcIk1vZGVcIixcclxuXHRcdFx0cHJvbXB0dzogXCJcIixcclxuXHRcdFx0d3JpdGVTdHJpbmc6IFwie3tpbnB1dH19XCIsXHJcblx0XHRcdGNvbW1hbmQ6IFwiXCIsXHJcblx0XHRcdGNvbW1tYW5kQ2hvaWNlOiBcIm5vdGVcIixcclxuXHRcdFx0Y29tbWFuZE5vdGU6IFwiXCIsXHJcblx0XHRcdGNvbW1hbmRCb29rbWFyazogXCJcIixcclxuXHRcdFx0Y2FtZXJhRm9sZGVyOiBcIlwiLFxyXG5cdFx0XHRjYW1lcmFMaW5rOiBcIlwiLFxyXG5cdFx0XHRjYW1lcmFOb3RlOiBcIlwiLFxyXG5cdFx0XHRjYW1lcmFCb29rbWFyazogXCJcIixcclxuXHRcdFx0dGFza3RhZ3M6IFwiXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHVzZUJ1dHRvbjogZmFsc2UsXHJcblx0XHRcdGxhYmVsOiBcIlwiLFxyXG5cdFx0XHRpbWFnZTogXCJcIixcclxuXHRcdFx0dmF1bHQ6IFwiXCIsXHJcblx0XHRcdGFjdGlvbjogXCJvcGVuXCIsXHJcblx0XHRcdG9wZW5DaG9pY2U6IFwibm90ZVwiLFxyXG5cdFx0XHRub3RlTmFtZTogXCJcIixcclxuXHRcdFx0Ym9va21hcmtOYW1lOiBcIlwiLFxyXG5cdFx0XHR3cml0ZUxpbmVzOiBcIm9uZVwiLFxyXG5cdFx0XHR3cml0ZUNob2ljZTogXCJub3RlXCIsXHJcblx0XHRcdG5vdGV3OiBcIlwiLFxyXG5cdFx0XHRmb2xkZXJ3OiBcIlwiLFxyXG5cdFx0XHRtb2RldzogXCJNb2RlXCIsXHJcblx0XHRcdHByb21wdHc6IFwiXCIsXHJcblx0XHRcdHdyaXRlU3RyaW5nOiBcInt7aW5wdXR9fVwiLFxyXG5cdFx0XHRjb21tYW5kOiBcIlwiLFxyXG5cdFx0XHRjb21tbWFuZENob2ljZTogXCJub3RlXCIsXHJcblx0XHRcdGNvbW1hbmROb3RlOiBcIlwiLFxyXG5cdFx0XHRjb21tYW5kQm9va21hcms6IFwiXCIsXHJcblx0XHRcdGNhbWVyYUZvbGRlcjogXCJcIixcclxuXHRcdFx0Y2FtZXJhTGluazogXCJcIixcclxuXHRcdFx0Y2FtZXJhTm90ZTogXCJcIixcclxuXHRcdFx0Y2FtZXJhQm9va21hcms6IFwiXCIsXHJcblx0XHRcdHRhc2t0YWdzOiBcIlwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR1c2VCdXR0b246IGZhbHNlLFxyXG5cdFx0XHRsYWJlbDogXCJcIixcclxuXHRcdFx0aW1hZ2U6IFwiXCIsXHJcblx0XHRcdHZhdWx0OiBcIlwiLFxyXG5cdFx0XHRhY3Rpb246IFwib3BlblwiLFxyXG5cdFx0XHRvcGVuQ2hvaWNlOiBcIm5vdGVcIixcclxuXHRcdFx0bm90ZU5hbWU6IFwiXCIsXHJcblx0XHRcdGJvb2ttYXJrTmFtZTogXCJcIixcclxuXHRcdFx0d3JpdGVMaW5lczogXCJvbmVcIixcclxuXHRcdFx0d3JpdGVDaG9pY2U6IFwibm90ZVwiLFxyXG5cdFx0XHRub3RldzogXCJcIixcclxuXHRcdFx0Zm9sZGVydzogXCJcIixcclxuXHRcdFx0bW9kZXc6IFwiTW9kZVwiLFxyXG5cdFx0XHRwcm9tcHR3OiBcIlwiLFxyXG5cdFx0XHR3cml0ZVN0cmluZzogXCJ7e2lucHV0fX1cIixcclxuXHRcdFx0Y29tbWFuZDogXCJcIixcclxuXHRcdFx0Y29tbW1hbmRDaG9pY2U6IFwibm90ZVwiLFxyXG5cdFx0XHRjb21tYW5kTm90ZTogXCJcIixcclxuXHRcdFx0Y29tbWFuZEJvb2ttYXJrOiBcIlwiLFxyXG5cdFx0XHRjYW1lcmFGb2xkZXI6IFwiXCIsXHJcblx0XHRcdGNhbWVyYUxpbms6IFwiXCIsXHJcblx0XHRcdGNhbWVyYU5vdGU6IFwiXCIsXHJcblx0XHRcdGNhbWVyYUJvb2ttYXJrOiBcIlwiLFxyXG5cdFx0XHR0YXNrdGFnczogXCJcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0dXNlQnV0dG9uOiBmYWxzZSxcclxuXHRcdFx0bGFiZWw6IFwiXCIsXHJcblx0XHRcdGltYWdlOiBcIlwiLFxyXG5cdFx0XHR2YXVsdDogXCJcIixcclxuXHRcdFx0YWN0aW9uOiBcIm9wZW5cIixcclxuXHRcdFx0b3BlbkNob2ljZTogXCJub3RlXCIsXHJcblx0XHRcdG5vdGVOYW1lOiBcIlwiLFxyXG5cdFx0XHRib29rbWFya05hbWU6IFwiXCIsXHJcblx0XHRcdHdyaXRlTGluZXM6IFwib25lXCIsXHJcblx0XHRcdHdyaXRlQ2hvaWNlOiBcIm5vdGVcIixcclxuXHRcdFx0bm90ZXc6IFwiXCIsXHJcblx0XHRcdGZvbGRlcnc6IFwiXCIsXHJcblx0XHRcdG1vZGV3OiBcIk1vZGVcIixcclxuXHRcdFx0cHJvbXB0dzogXCJcIixcclxuXHRcdFx0d3JpdGVTdHJpbmc6IFwie3tpbnB1dH19XCIsXHJcblx0XHRcdGNvbW1hbmQ6IFwiXCIsXHJcblx0XHRcdGNvbW1tYW5kQ2hvaWNlOiBcIm5vdGVcIixcclxuXHRcdFx0Y29tbWFuZE5vdGU6IFwiXCIsXHJcblx0XHRcdGNvbW1hbmRCb29rbWFyazogXCJcIixcclxuXHRcdFx0Y2FtZXJhRm9sZGVyOiBcIlwiLFxyXG5cdFx0XHRjYW1lcmFMaW5rOiBcIlwiLFxyXG5cdFx0XHRjYW1lcmFOb3RlOiBcIlwiLFxyXG5cdFx0XHRjYW1lcmFCb29rbWFyazogXCJcIixcclxuXHRcdFx0dGFza3RhZ3M6IFwiXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHVzZUJ1dHRvbjogZmFsc2UsXHJcblx0XHRcdGxhYmVsOiBcIlwiLFxyXG5cdFx0XHRpbWFnZTogXCJcIixcclxuXHRcdFx0dmF1bHQ6IFwiXCIsXHJcblx0XHRcdGFjdGlvbjogXCJvcGVuXCIsXHJcblx0XHRcdG9wZW5DaG9pY2U6IFwibm90ZVwiLFxyXG5cdFx0XHRub3RlTmFtZTogXCJcIixcclxuXHRcdFx0Ym9va21hcmtOYW1lOiBcIlwiLFxyXG5cdFx0XHR3cml0ZUxpbmVzOiBcIm9uZVwiLFxyXG5cdFx0XHR3cml0ZUNob2ljZTogXCJub3RlXCIsXHJcblx0XHRcdG5vdGV3OiBcIlwiLFxyXG5cdFx0XHRmb2xkZXJ3OiBcIlwiLFxyXG5cdFx0XHRtb2RldzogXCJNb2RlXCIsXHJcblx0XHRcdHByb21wdHc6IFwiXCIsXHJcblx0XHRcdHdyaXRlU3RyaW5nOiBcInt7aW5wdXR9fVwiLFxyXG5cdFx0XHRjb21tYW5kOiBcIlwiLFxyXG5cdFx0XHRjb21tbWFuZENob2ljZTogXCJub3RlXCIsXHJcblx0XHRcdGNvbW1hbmROb3RlOiBcIlwiLFxyXG5cdFx0XHRjb21tYW5kQm9va21hcms6IFwiXCIsXHJcblx0XHRcdGNhbWVyYUZvbGRlcjogXCJcIixcclxuXHRcdFx0Y2FtZXJhTGluazogXCJcIixcclxuXHRcdFx0Y2FtZXJhTm90ZTogXCJcIixcclxuXHRcdFx0Y2FtZXJhQm9va21hcms6IFwiXCIsXHJcblx0XHRcdHRhc2t0YWdzOiBcIlwiXHJcblx0XHR9XHJcblx0XVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBrYWFwYXRhIGV4dGVuZHMgUGx1Z2luIHtcclxuXHRzZXR0aW5nczogS2FhcGF0YVNldHRpbmdzO1xyXG5cclxuXHR2ZXJzaW9uOiBzdHJpbmcgPSBcIjAuMS4wICgwMjI4MjAyNClcIjtcclxuXHJcblx0b25Jbml0KCkge1xyXG5cclxuXHR9XHJcblxyXG5cdG9ubG9hZCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdMb2FkaW5nIEthYXBhdGEgcGx1Z2luLCB2ZXJzaW9uICcgKyB0aGlzLnZlcnNpb24pO1xyXG5cclxuXHRcdHRoaXMubG9hZFNldHRpbmdzKCk7XHJcblxyXG5cdFx0dGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBDb25maWd1cmUodGhpcy5hcHAsIHRoaXMpKTtcclxuXHR9XHJcblxyXG5cdG9udW5sb2FkKCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ3VubG9hZGluZyBwbHVnaW4nKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcclxuXHRcdHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1NFVFRJTkdTLCBhd2FpdCB0aGlzLmxvYWREYXRhKCkpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgc2F2ZVNldHRpbmdzKCkge1xyXG5cdFx0YXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcclxuXHR9XHJcblxyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIm9ic2lkaWFuIiwiZ2V0RGFpbHlOb3RlU2V0dGluZ3MiLCJT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QUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdEgsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUUsS0FBSyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0Q7QUFDTyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzNDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNySCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdKLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDdEUsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDdEIsUUFBUSxJQUFJLENBQUMsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDdEUsUUFBUSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSTtBQUN0RCxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pLLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QixnQkFBZ0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTTtBQUM5QyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQ3hFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQjtBQUNoQixvQkFBb0IsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtBQUNoSSxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUMxRyxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUss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
