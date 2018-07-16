# Ojet 5.x Bookstore App

### Uninstalling OJET CLI
sudo npm uninstall -g @oracle/ojet-cli

### Installing OJET CLI
sudo npm install -g @oracle/ojet-cli

### Workflow
```bash
# Install
yarn install

# Build
ojet build

# Serve
ojet serve
ojet serve --theme=build

# Run WebService
node server.js
```

### Set Proxy
npm config set proxy http-proxy-server-URL:proxy-port
npm config set https-proxy https-proxy-server-URL:proxy-port

### Others
```bash
# Creating a basic OJET Navbar App
ojet create ojet-5-bookstore-app --template=navbar
```