# router-toggle

Automate the toggling of internet access for a device using your router admin panel.

This is made for the **Netgear C7000** router but the idea could be applied to others. Some routers have a better HTTP API and you might even find a Node or Python client library.

## run this repo

1. run `npm install`
2. create a file `playwright/.auth/config.json` with this structure
   ```json
   {
     "accessUrl": "",
     "httpCredentials": {
       "username": "",
       "password": ""
     }
   }
   ```
3. run `npx playwright test -g toggle`

**bonus:** create a function in your .zshrc to change directories and run it like so

```sh
toggle_device_internet() {
  (
    cd ~/toast/git-repos/router
    npx playwright test -g toggle
  )
}
```

## apply idea to other router

1. install the playwright vscode extension
2. install a browser with the extension
3. click the "Record new" extension button
4. navigate to the router admin panel and disable the internet for a device
5. repeat steps 3 and 4 while enabling the internet for a device
6. use the generated code and the sample code in this repo to create a toggle test
