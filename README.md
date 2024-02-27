**This is a work in progress and should be considered an alpha version.**

I have released Kaapata, an Android widget that does mobile capture for Obsidian.  The widget is configured using an Obsidian plugin and can respond in 4 different action areas:
- **Shortcut**: Open Obsidian on a daily note or a specific note
- **Write**: Write text to a note in Obsidian.  Text is gathered using a dialog and the written string can access info through variables.
- **Command**: Execute a command, with parameters augmented with variables, in Obsidian
- **Camera**: Take a picture using the phone's camera, placing the result in Obsidian, with optional link insertion

The user interface can be seen below.  The top 3 icons have a fixed, standard function (open a new note, open the daily note, take a picture).  The bottom area can accomodate up  to 6 configurable actions, represented by icons and labels.

One can think of many use cases using the above 4 action areas.  Some might involve voice-to-text; this has not been implemented (yet) because good voice-to-text exists with apps and keyboards (Google's gboard is an example).  Some use cases might also use Google Assistant; this functionality is planned, but perhaps not for version 1.0.  

**I am seeking advice and feedback on this software.**  If you use it, I would appreciate any feedback you might have.  See below for how to register your advice.  I have thick skin, but please be kind.

Here's how to get started with Kaapata:
- An *installation guide* is on Github at this link.  Installation involves installing the plugin for Obsidian and installing the Android app.  The plugin is not in the official repository, so you will have to install it via the BRAT plugin or manually.  The Android app is not in Google Play, so you will have to install it as a "side load" (and you will not have the Google Play assurances of malware detection).
- The *user manual* (such as it is) is available on Github at this link.  "Usage" of the Kaapata app (not the widget) amounts to more configuration and an integrity check on the configuration generated.
- The *feedback form* is available on Github at this link.

Kaapata can be used from the Android lockscreen.  In order to use widgets from the lockscreen, one needs to install and configure another app.  [Details are available at this link.](https://www.howtogeek.com/811705/how-to-get-lock-screen-widgets-on-android/)

I am not releasing source at this time, since I'm still developing.  I will release source code -- open sourced, of course -- when I release version 1.0, ready for use.  If you really want to figure out how the Javascript works for the plugin, you can obviously do that.  

Thanks in advance for anything you can provide on feedback.  I will take the feedback seriously and will continue to develop the widget to meet people's needs.  

**Again, please note that Kaapata is work in progress and should be considered an alpha version.  Do not use this for anything you depend on.  

*Side note:* "Kaapata" is Finnish for "capture".  I tend to be braindead when it comes to naming apps, so I give them a bland name and translate the blandness into a different language.  The translation always sounds cool.

*Side note #2:* A note about me, so that you might trust installing Kaapata from non-official sources.  I am a professor of computer science at a small liberal arts school in west Michigan, U.S.A.  I built Kaapata because I was interested in using Javascript on a non-Web-browser app and to see how a mobile capture app for Obsidian might look.  If you are curious: "frethop" is an anagram.