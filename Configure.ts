import { App, ButtonComponent, DropdownComponent, Modal, Notice, Plugin, PluginSettingTab, Setting, TFile, TFolder, ToggleComponent } from 'obsidian';

import Ferramenta  from './main';

export class Configure extends PluginSettingTab {

	plugin: Ferramenta;
	app : App;

	shape: string;
	numberOfButtons: number;

	shapeDropdown: DropdownComponent;

	
	buttonDiv: HTMLDivElement[] = Array(6);
	openDiv: HTMLDivElement[] = Array(6);
	writeDiv: HTMLDivElement[] = Array(6);
	commandDiv: HTMLDivElement[] = Array(6);
	cameraDiv: HTMLDivElement[] = Array(6);
	
	buttons: Setting[] = Array(6);
	label: Setting[] = Array(6);
	image: Setting[] = Array(6);
	vault: Setting[] = Array(6);
	action: Setting[] = Array(6);
	openChoice: Setting[] = Array(6);
	note: Setting[] = Array(6);
	bookmark: Setting[] = Array(6);
	writeChoice: Setting[] = Array(6);
	notew: Setting[] = Array(6);	
	folderw: Setting[] = Array(6);	
	modew: Setting[] = Array(6);	
	promptw: Setting[] = Array(6);
	command: Setting[] = Array(6);
	commandChoice: Setting[] = Array(6);
	commandNote: Setting[] = Array(6);
	commandBookmark: Setting[] = Array(6);
	cameraFolder: Setting[] = Array(6);
	cameraNote: Setting[] = Array(6);

	json: string;

	constructor(app: App, plugin: Ferramenta) {
		super(app, plugin);
		this.app = app;
		this.plugin = plugin;

		console.log(this.plugin.settings);
	}

	display(): void {
		this.numberOfButtons = 6;
		this.json = '{ "shape": "ring", "buttons": [';	

		let {containerEl} = this;

		containerEl.empty();

		containerEl.createEl('h1', {text: 'Configure the Ferramenta widget here.'});

		let imagetable = containerEl.createEl('table');
		let imagerow = imagetable.createEl('tr');
		let imagecell = imagerow.createEl('td');
		let img = imagecell.createEl('img', 
		   {attr: {src: "http://rizzo.hope.edu/~jipping/ring.png", width: "250px"}});
	   let imagecell2 = imagerow.createEl('td');
		   let img2 = imagecell.createEl('img', 
			  {attr: {src: "http://rizzo.hope.edu/~jipping/pill.png", width: "250px"}});
   
		let shapeDropdown = new Setting(containerEl)
			.setName('Shape')
			.setDesc('Ring or Pill?')
			.addDropdown(drop => drop
				.onChange(async (value) => {
					this.shape = value;
					if (value == "Ring") {
						img.show();
						img2.hide();
						this.numberOfButtons = 6;
						this.json = '{ "shape": "ring", "buttons": [';
					} else if (value == "Pill") {
						img.hide();
						img2.show();
						this.numberOfButtons = 3;
						this.json = '{ "shape": "pill", "buttons": [';
					}
				})
			);
		(shapeDropdown.components[0] as DropdownComponent).addOption("Ring", "Ring");
		(shapeDropdown.components[0] as DropdownComponent).addOption("Pill", "Pill");

		for (let i = 0; i < this.numberOfButtons; i++) {
		// Button config section
		//console.log("Button "+i+" config section");
		this.buttons[i] = new Setting(containerEl)
			.setName('Use Button #'+(i+1)+'?')
			.setDesc('Configure button #'+(i+1)+'.')
			.addToggle(toggle => toggle
				.setValue(this.plugin.settings.buttons[i].useButton)
				.onChange(async (value) => {
					this.plugin.settings.buttons[i].useButton = value;
					if (value) {
						this.buttonDiv[i].show();
					} else {
						this.buttonDiv[i].hide();
					}
				})
			);
		
		this.buttonDiv[i] = containerEl.createDiv();
		this.buttonDiv[i].setAttribute("style", "border: 1px solid black; padding: 10px; margin: 10px;");
		this.label[i] = new Setting(this.buttonDiv[i])
			.setName('Label?')
			.setDesc('Give a label for this button.')
			.addText(text => text
				.setPlaceholder('Label Text')
				.setValue(this.plugin.settings.buttons[i].label)
				.onChange(async (value) => {
					this.plugin.settings.buttons[i].label = value;
				})
			);
		this.image[i] = new Setting(this.buttonDiv[i])
			.setName('Image?')
			.setDesc('Select the image to put on the button.')
			.addText(text => text
				.setPlaceholder('Path name')
				.setValue(this.plugin.settings.buttons[i].image)
				.onChange(async (value) => {
					this.plugin.settings.buttons[i].image = value;
				})
			);
			this.vault[i] = new Setting(this.buttonDiv[i])
			.setName('Vault?')
			.setDesc('Select the vault to perform the action in.')
			.addText(text => text
				.setPlaceholder('Vault name')
				.setValue(this.plugin.settings.buttons[i].vault)
				.onChange(async (value) => {
					this.plugin.settings.buttons[i].vault = value;
				})
			);

		this.action[i] = new Setting(this.buttonDiv[i])
			.setName('Action?')
			.setDesc('Select the action to perform.')
			.addDropdown(drop => drop
				.onChange(async (value) => {
					console.log(value);
					this.plugin.settings.buttons[i].action = value;
					if (value == "open") {
						this.openDiv[i].show();
						this.writeDiv[i].hide();
						this.commandDiv[i].hide();
						this.cameraDiv[i].hide();
					} else if (value == "write") {
						this.openDiv[i].hide();
						this.writeDiv[i].show();
						this.commandDiv[i].hide();
						this.cameraDiv[i].hide();
					} else if (value == "command") {
						this.openDiv[i].hide();
						this.writeDiv[i].hide();
						this.commandDiv[i].show();
						this.cameraDiv[i].hide();
					} else if (value == "camera") {
						this.openDiv[i].hide();
						this.writeDiv[i].hide();
						this.commandDiv[i].hide();
						this.cameraDiv[i].show();
					} else if (value == "task") {
						this.openDiv[i].hide();
						this.writeDiv[i].hide();
						this.commandDiv[i].hide();
						this.cameraDiv[i].hide();
					} else {
						this.openDiv[i].hide();
						this.writeDiv[i].hide();
						this.commandDiv[i].hide();
						this.cameraDiv[i].hide();
					}

				})
			);
			(this.action[i].components[0] as DropdownComponent).addOption("open", "Open");
			(this.action[i].components[0] as DropdownComponent).addOption("write", "Write");
			(this.action[i].components[0] as DropdownComponent).addOption("command", "Command");
			(this.action[i].components[0] as DropdownComponent).addOption("camera", "Camera");
			(this.action[i].components[0] as DropdownComponent).addOption("task", "Task");

			(this.action[i].components[0] as DropdownComponent).setValue(this.plugin.settings.buttons[i].action);
		
		// -- Action is Open --
		this.openDiv[i] = this.buttonDiv[i].createDiv();
		this.openChoice[i] = new Setting(this.openDiv[i])
			.setName('Open Choice?')
			.setDesc('Select the type of note open.')
			.addDropdown(drop => drop
				.onChange(async (value) => {
					this.plugin.settings.buttons[i].openChoice = value;
					if (value == "daily") {
						this.note[i].settingEl.hide();
						this.bookmark[i].settingEl.hide();
					} else if (value == "note") {
						this.note[i].settingEl.show();
						this.bookmark[i].settingEl.hide();
					} else if (value == "bookmark") {
						this.note[i].settingEl.hide();
						this.bookmark[i].settingEl.show();
					}
				})
			);
			(this.openChoice[i].components[0] as DropdownComponent).addOption("daily", "Daily Note");
			(this.openChoice[i].components[0] as DropdownComponent).addOption("note", "Note");
			(this.openChoice[i].components[0] as DropdownComponent).addOption("bookmark", "Bookmark");

		this.note[i] = new Setting(this.openDiv[i])
			.setName('Note Name?')
			.setDesc('Select the note to open.')
			.addText(text => text
				.setPlaceholder('Note name')
				.setValue(this.plugin.settings.buttons[i].noteName)
				.onChange(async (value) => {
					this.plugin.settings.buttons[i].noteName = value;
				})
			);
		this.note[i].settingEl.hide();
		this.bookmark[i] = new Setting(this.openDiv[i])
			.setName('Bookmark Name?')
			.setDesc('Select the bookmark to open.')
			.addText(text => text
				.setPlaceholder('Bookmark name')
				.setValue(this.plugin.settings.buttons[i].bookmarkName)
				.onChange(async (value) => {
					this.plugin.settings.buttons[i].bookmarkName = value;
				})
			);
		this.bookmark[i].settingEl.hide();

		let value = this.plugin.settings.buttons[i].openChoice;
		(this.openChoice[i].components[0] as DropdownComponent).setValue(value);
		if (this.plugin.settings.buttons[i].action == "open") {
			if (value == "daily") {
				this.note[i].settingEl.hide();
				this.bookmark[i].settingEl.hide();
			} else if (value == "note") {
				this.note[i].settingEl.show();
				this.bookmark[i].settingEl.hide();
			} else if (value == "bookmark") {
				this.note[i].settingEl.hide();
				this.bookmark[i].settingEl.show();
			}
		}

		// -- Action is Write --
		this.writeDiv[i] = this.buttonDiv[i].createDiv();
		this.writeChoice[i] = new Setting(this.writeDiv[i])
			.setName('Write Choice?')
			.setDesc('Select the type of note to write.')
			.addDropdown(drop => drop
				.setValue(this.plugin.settings.buttons[i].writeChoice)
				.onChange(async (value) => {
					console.log(value);
					this.plugin.settings.buttons[i].writeChoice = value;
					if (value == "daily") {
						this.notew[i].settingEl.hide();
						this.folderw[i].settingEl.hide();
					} else if (value == "random") {
						this.notew[i].settingEl.hide();
						this.folderw[i].settingEl.show();
					} else if (value == "specific") {
						this.notew[i].settingEl.show();
						this.folderw[i].settingEl.hide();
					}
				})
			);
			(this.writeChoice[i].components[0] as DropdownComponent).addOption("daily", "Daily Note");
			(this.writeChoice[i].components[0] as DropdownComponent).addOption("random", "Random Note");
			(this.writeChoice[i].components[0] as DropdownComponent).addOption("specific", "Specific Note");

		this.notew[i]= new Setting(this.writeDiv[i])
			.setName('Note Name?')
			.setDesc('Select the note to open.')
			.addText(text => text
				.setPlaceholder('Note name')
				.setValue(this.plugin.settings.buttons[i].notew)
				.onChange(async (value) => {
					this.plugin.settings.buttons[i].notew = value;
				})
			);
		this.notew[i].settingEl.hide();
		this.folderw[i] = new Setting(this.writeDiv[i])
			.setName('Folder?')
			.setDesc('Select the folder in which to open the note.')
			.addText(text => text
				.setPlaceholder('Folder name')
				.setValue(this.plugin.settings.buttons[i].folderw)
				.onChange(async (value) => {
					this.plugin.settings.buttons[i].folderw = value;
				})
			);
		this.folderw[i].settingEl.hide();

		this.modew[i] = new Setting(this.writeDiv[i])
			.setName('Writing mode?')
			.setDesc('Select the mode of writing.')
			.addDropdown(drop => drop
				.setValue(this.plugin.settings.buttons[i].modew)
				.onChange(async (value) => {
					this.plugin.settings.buttons[i].modew = value;

			})
		);
		(this.modew[i].components[0] as DropdownComponent).addOption("append", "Append");
		(this.modew[i].components[0] as DropdownComponent).addOption("prepend", "Prepend");
		(this.modew[i].components[0] as DropdownComponent).addOption("overwrite", "Overwrite");
		(this.modew[i].components[0] as DropdownComponent).addOption("new", "New");

		(this.modew[i].components[0] as DropdownComponent).setValue(this.plugin.settings.buttons[i].modew);
		
		this.modew[i].settingEl.show();

		this.promptw[i] = new Setting(this.writeDiv[i])
			.setName('Prompt?')
			.setDesc('Prompt to describe the writing.')
			.addText(text => text
				.setPlaceholder('Prompt')
				.setValue(this.plugin.settings.buttons[i].promptw)
				.onChange(async (value) => {
					this.plugin.settings.buttons[i].promptw = value;
				})
			);
		this.promptw[i].settingEl.show();

		value = this.plugin.settings.buttons[i].writeChoice;
		(this.writeChoice[i].components[0] as DropdownComponent).setValue(value);
		if (this.plugin.settings.buttons[i].action == "write") {
			if (value == "daily") {
				this.notew[i].settingEl.hide();
				this.folderw[i].settingEl.hide();
			} else if (value == "random") {
				this.notew[i].settingEl.hide();
				this.folderw[i].settingEl.show();
			} else if (value == "specific") {
				this.notew[i].settingEl.show();
				this.folderw[i].settingEl.hide();
			}
		}

		this.writeDiv[i].hide();

		// -- Command -- 
		this.commandDiv[i] = this.buttonDiv[i].createDiv();
		this.command[i] = new Setting(this.commandDiv[i])
			.setName('Command?')
			.setDesc('Specify the command to execute.')
			.addText(text => text
				.setPlaceholder('Command')
				.setValue(this.plugin.settings.buttons[i].command)
				.onChange(async (value) => {
					this.plugin.settings.buttons[i].command = value;
					let str = value.replace(/ /g, '_');
				})
			);
		this.commandChoice[i] = new Setting(this.commandDiv[i])
			.setName('Command with Open Choice?')
			.setDesc('Select the type of note open.')
			.addDropdown(drop => drop
				.onChange(async (value) => {
					this.plugin.settings.buttons[i].commmandChoice = value;
					if (value == "daily") {
						this.commandNote[i].settingEl.hide();
						this.commandBookmark[i].settingEl.hide();
					} else if (value == "note") {
						this.commandNote[i].settingEl.show();
						this.commandBookmark[i].settingEl.hide();
					} else if (value == "bookmark") {
						this.commandNote[i].settingEl.hide();
						this.commandBookmark[i].settingEl.show();
					}
				})
			);
			(this.commandChoice[i].components[0] as DropdownComponent).addOption("daily", "Daily Note");
			(this.commandChoice[i].components[0] as DropdownComponent).addOption("note", "Note");
			(this.commandChoice[i].components[0] as DropdownComponent).addOption("bookmark", "Bookmark");

			(this.commandChoice[i].components[0] as DropdownComponent).setValue(this.plugin.settings.buttons[i].commmandChoice);
		
		this.commandNote[i] = new Setting(this.commandDiv[i])
			.setName('Note Name?')
			.setDesc('Select the note to open.')
			.addText(text => text
				.setPlaceholder('Note name')
				.setValue(this.plugin.settings.buttons[i].commandNote)
				.onChange(async (value) => {
					this.plugin.settings.buttons[i].commandNote = value;	
				})
			);
		this.commandNote[i].settingEl.hide();
		this.commandBookmark[i] = new Setting(this.commandDiv[i])
			.setName('Bookmark Name?')
			.setDesc('Select the bookmark to open.')
			.addText(text => text
				.setPlaceholder('Bookmark name')
				.setValue(this.plugin.settings.buttons[i].commandBookmark)
				.onChange(async (value) => {
					this.plugin.settings.buttons[i].commandBookmark = value;
				})
			);
		this.commandBookmark[i].settingEl.hide();

		value = this.plugin.settings.buttons[i].commmandChoice;
		if (value == "daily") {
			this.commandNote[i].settingEl.hide();
			this.commandBookmark[i].settingEl.hide();
		} else if (value == "note") {
			this.commandNote[i].settingEl.show();
			this.commandBookmark[i].settingEl.hide();
		} else if (value == "bookmark") {
			this.commandNote[i].settingEl.hide();
			this.commandBookmark[i].settingEl.show();
		}

		this.commandDiv[i].hide();

		// -- Camera -- 
		this.cameraDiv[i] = this.buttonDiv[i].createDiv();
		this.cameraFolder[i] = new Setting(this.cameraDiv[i])
			.setName('Folder?')
			.setDesc('Select the folder in which to deposit the image.')
			.addText(text => text
				.setPlaceholder('Folder name')
				.setValue(this.plugin.settings.buttons[i].cameraFolder)
				.onChange(async (value) => {
					this.plugin.settings.buttons[i].cameraFolder = value;
				})
			);
		//this.cameraFolder[i].settingEl.hide();
		this.cameraNote[i] = new Setting(this.cameraDiv[i])
			.setName('Note Name?')
			.setDesc('Select the note to create.')
			.addText(text => text
				.setPlaceholder('Note name')
				.setValue(this.plugin.settings.buttons[i].cameraNote)
				.onChange(async (value) => {
					this.plugin.settings.buttons[i].cameraNote = value;
				})
			);
		//this.cameraNote[i].settingEl.hide();

		this.cameraDiv[i].hide();

		if (this.plugin.settings.buttons[i].useButton) {
			this.buttonDiv[i].show();
			value = this.plugin.settings.buttons[i].action;
			if (value == "open") {
				this.openDiv[i].show();
				this.writeDiv[i].hide();
				this.commandDiv[i].hide();
				this.cameraDiv[i].hide();
			} else if (value == "write") {
				this.openDiv[i].hide();
				this.writeDiv[i].show();
				this.commandDiv[i].hide();
				this.cameraDiv[i].hide();
			} else if (value == "command") {
				this.openDiv[i].hide();
				this.writeDiv[i].hide();
				this.commandDiv[i].show();
				this.cameraDiv[i].hide();
			} else if (value == "camera") {
				this.openDiv[i].hide();
				this.writeDiv[i].hide();
				this.commandDiv[i].hide();
				this.cameraDiv[i].show();
			} else if (value == "task") {
				this.openDiv[i].hide();
				this.writeDiv[i].hide();
				this.commandDiv[i].hide();
				this.cameraDiv[i].hide();
			} else {
				this.openDiv[i].hide();
				this.writeDiv[i].hide();
				this.commandDiv[i].hide();
				this.cameraDiv[i].hide();
			}
		} else {
			this.buttonDiv[i].hide();
		}
	}
	}

	async hide() {
		console.log("Saving settings");
		this.plugin.saveData(this.plugin.settings);
		this.plugin.saveSettings();
		console.log(this.plugin.settings);
		
		console.log("Generating JSON");
		let value = this.plugin.settings.shape;
		if (value == "ring") {
			this.json = '{ "shape": "ring", "buttons": [';
			this.numberOfButtons = 6;
		} else if (value == "pill") {
			this.json = '{ "shape": "pill", "buttons": [';
			this.numberOfButtons = 3;
		} else {
			this.json = '{ "shape": "error" }';
			this.numberOfButtons = 0;
		}

		for (let i = 0; i < this.numberOfButtons; i++) {		
			if (this.plugin.settings.buttons[i].useButton) {
				this.json += '{ "button": '+(i+1)+', ';
				this.json += '"label": "'+this.plugin.settings.buttons[i].label+'", ';
				this.json += '"image": "'+this.plugin.settings.buttons[i].image+'", ';
				this.json += '"vault": "'+this.plugin.settings.buttons[i].vault+'", ';	

				// Action = "open"
				if (this.plugin.settings.buttons[i].action == "open") {
					this.json += '"action": "'+this.plugin.settings.buttons[i].action+' ';
					//this.json += '"'+this.plugin.settings.buttons[i].openChoice+'", ';	
					if (this.plugin.settings.buttons[i].openChoice == "daily") {
						this.json += 'daily"';
					} else if (this.plugin.settings.buttons[i].openChoice == "note") {
							this.json += this.plugin.settings.buttons[i].noteName+'"';
					} else if (this.plugin.settings.buttons[i].openChoice == "bookmark") {
						this.json += 'bookmark '+this.plugin.settings.buttons[i].bookmarkName+'"';
					}

				// Action = "write"
				} else if (this.plugin.settings.buttons[i].action == "write") {
					this.json += '"action": "'+this.plugin.settings.buttons[i].action+' ';
					//this.json += '"'+this.plugin.settings.buttons[i].writeChoice+'", ';	
					if (this.plugin.settings.buttons[i].openChoice == "daily") {
						this.json += 'daily"';
					} else if (this.plugin.settings.buttons[i].writeChoice == "specific") {
						this.json += this.plugin.settings.buttons[i].notew+'", ';	
					} else if (this.plugin.settings.buttons[i].writeChoice == "random") {
						this.json += '"folder": "'+this.plugin.settings.buttons[i].folderw+'", ';	
					}
					this.json += '"mode": "'+this.plugin.settings.buttons[i].modew+'", ';	
					this.json += '"prompt": "'+this.plugin.settings.buttons[i].promptw+'"';	

				// Action = "command"
				} else if (this.plugin.settings.buttons[i].action == "command") {
					let value = this.plugin.settings.buttons[i].command;
					let str = value.replace(/ /g, '_');

					this.json += '"command": "'+str;	
					if (this.plugin.settings.buttons[i].commmandChoice == "daily") {
						this.json += ' daily"';
					} else if (this.plugin.settings.buttons[i].commmandChoice == "note") {
						this.json += this.plugin.settings.buttons[i].commandNote+'"';	
					} else if (this.plugin.settings.buttons[i].commmandChoice == "bookmark") {
						this.json += ' bookmark '+this.plugin.settings.buttons[i].commandBookmark+'"';	
					}

				// Action = "camera"
				} else if (this.plugin.settings.buttons[i].action == "camera") {
					this.json += '"folder": "'+this.plugin.settings.buttons[i].cameraFolder+'", ';	
					this.json += '"note": "'+this.plugin.settings.buttons[i].cameraNote+'"';	
				}

				this.json += "},";
			}

		}
		this.json += ']}';
		console.log(this.json);

		// Write to a file

		// Delete the old file		
		// if (this.fileExists("kaapata.json", "/" as TFolder)) { 
		// 	let taf = this.app.vault.getAbstractFileByPath(ogfilename) as TFile;
		// 	console.log("Trying to delete "+taf.path)
		// 	if (taf !== undefined) await this.app.vault.delete(taf);
		// }
  
		// const jsonfile: TFile = await (this.app.fileManager as any)
		//  	.createNewMarkdownFile(this.app.workspace.getActiveFile()?.path, "kaapata.json");
		let taf = this.app.vault.getAbstractFileByPath("kaapata.json") as TFile;
		await this.app.vault.delete(taf);
	 	const jsonfile: TFile = await this.app.vault.create("kaapata.json", this.json);
		console.log(jsonfile);
		//await this.app.vault.modify(jsonfile, this.json);

	}

	fileExists(fileName: string, folder: TFolder): Boolean {
		var res: boolean = false;
		let file = folder.children.find(afile => afile.name === fileName);
		return (file !== undefined);
	}

}