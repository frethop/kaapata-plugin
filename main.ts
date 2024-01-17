import { App, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

import { Configure } from './Configure';

interface FerramentaSetting {
	useButton: boolean;
	label: string;
	image: string;
	vault: string;
	action: string;
	openChoice: string;
	noteName: string;
	bookmarkName: string;
	writeChoice: string;
	notew: string;
	folderw: string;
	modew: string;
	promptw: string;
	command: string;
	commmandChoice: string;
	commandNote: string;
	commandBookmark: string;
	cameraFolder: string;
	cameraNote: string;
}

interface FerramentaSettings {
	shape: string;

	buttons: Array<FerramentaSetting>;

}

const DEFAULT_SETTINGS: FerramentaSettings = {
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
}

export default class Ferramenta extends Plugin {
	settings: FerramentaSettings;

	version: string = "0.0.1 (12282023)";

	onInit() {

	}

	onload() {
		console.log('loading Ferramenta plugin, version ' + this.version);

		this.loadSettings();

		this.addSettingTab(new Configure(this.app, this));
	}

	onunload() {
		console.log('unloading plugin');
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

}


