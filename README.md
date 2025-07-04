# Youtube Music Search

Firefox extensions to search for the track you're listening to on Beatport or Amazon Music.

### Testing the extension

- clone this repository
- go to `about:debugging` in Firefox, click on `This Firefox` and `Load Temporary Add-on...`
- select the `manifest.json` file in one of the subdirectories
- click the extension puzzle piece button (top right toolbar) and then on the "Youtube Music [Service] Search" button

### Permanently installing the extension

This is a bit more involved, but you won't have to load the extension every time you open Firefox.

#### Uploading a private build to Mozilla Developer Hub

- if you don't have `web-ext` installed, install that first via: `npm install -g web-ext`
- clone this repository
- `cd amazon` or `cd beatport`
- in `manifest.json`, make sure to set the `browser_specific_settings.gecko.id` to something unique and possibly bump the `version`
- run `web-ext lint` to make sure the extension doesn't have any issues
- run `zip -r my-extension.zip .`
- go the [Developer Hub](https://addons.mozilla.org/en-US/developers/)
- sign in or create an account

#### Submitting a new add on

- go to [Submit a New Add-on](https://addons.mozilla.org/en-US/developers/addon/submit/agreement), distribute on your own, and upload the `my-extension.zip` file from earlier
- wait a bit for it to be approved (you'll get an email notification when it is)
- go to [My Add-ons](https://addons.mozilla.org/en-US/developers/addons), select `Youtube Music [Service] Search`, then `View All` in the left column
- click on the latest version and download the `xpi` file, then agree to add the extension

#### Uploading a new version

- go to [My Add-ons](https://addons.mozilla.org/en-US/developers/addons), select `Youtube Music [Service] Search`, then `Upload New Version` in the left column
- upload the `my-extension.zip` file from earlier
- wait a bit for it to be approved (you'll get an email notification when it is)
- click on the latest version and download the `xpi` file, then agree to add the extension
