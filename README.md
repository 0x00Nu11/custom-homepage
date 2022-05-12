# custom-homepage
![2022-05-12_11-46](https://user-images.githubusercontent.com/101659928/168033755-46b110dc-0da6-4fbf-bcd5-94793ecebb53.png)
![2022-05-12_11-46_1](https://user-images.githubusercontent.com/101659928/168033887-582f4b5f-d376-4e88-a0d8-1b3c835db8e0.png)
![2022-05-12_11-46_2](https://user-images.githubusercontent.com/101659928/168033897-29216c42-ffef-41b2-9e68-2059a7fe2c7f.png)

## what's this
simple custom homepage for chromium (or any browser really), because ungoogled chromium doesn't have any way I know of to customize homepage and new tabs.
## how to:
1. download the zip or clone the repo
2. extract the zip into a directory unlikely to change, or if cloned make sure it's cloned in a directory unlikely to change
3. 
 - if on chromium based browser:
	1. go to `chrome://settings/`
	2. set chrome to open a new tab on startup
	3. set the new tab page to homepage
	4. enable the homepage button, and set the homepage to your_directory/index.html, e.g: `/home/0x00Nu11/custom-homepage/index.html` then disable the home button if you want to
- if on gecko based browser:
	1. versions 41+ no longer support the browser.newtab.url setting in `about:config`, so you have to rely on an extension. I suggest [New Tab Override by Sören Hentzschel
](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/)
	2. set the new tab either to `about:home` or to your_directory/index.html, e.g: `/home/0x00Nu11/custom-homepage/index.html`
	3. go to `about:preferences#home` and set the homepage and new windows to your_directory/index.html, e.g: `/home/0x00Nu11/custom-homepage/index.html`
## change default engine:
1. edit the `index.html` file
2. change the argument of the `switchEngine()` fucntion of `onload()` action in the `body` tag to your preferred engine, e.g: `onload="switchEngine('duckduckgo')"`
