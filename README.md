# Express Boilerplate
![](https://img.shields.io/badge/Code%20Style-Standard-yellow.svg)
![](https://img.shields.io/badge/Dependencies-Express-green.svg)
![](https://img.shields.io/badge/License-Beerware-yellowgreen.svg)

---
## Table of Contents
---
- [Introduction](#introduction)
- [Prerequiste](#prerequiste)
- [Configuration](#configuration)
- [Installation](#installation)
  - [Clone](#clone)
  - [Environment](#create-environment-variable)
  - [Start](#start-development-server)
- [Dependencies](#dependencies)
- [License](#license)


## Introduction
---

## Prerequiste
---
- Node.js - Download and Install [Node.js](https://nodejs.org/en/) - Simple bash script to manage multiple active node.js versions.

- Nodemon - Download and Install [Nodemon](https://nodemon.io/) - nodemon is a tool that automatically restarting the node application when file changes in the directory are detected.

## Configuration
---
<ol>
  <li>Basic Configuration</li>
  <li>Structured</li>
  <li>File Handling</li>
  <li>Auth with JWT</li>
  <li>Unit Testing</li>
  <li>Redis Implementation</li>
</ol>

## Installation
---
### Clone
```bash
$ git clone https://github.com/tatasfachrul/express-boileplate
$ cd express-boilerplate
$ npm install
```

### Create Environment Variable
```bash
$ cp .env.example .env
$ nano .env
```

```bash
SERVER_PORT = YOUR-PORT
WHITELIST = "YOUR-WHITELIST"

DB_HOST = "YOU-DB-HOST"
DB_USER = "YOUR-DB-USER"
DB_PASSWORD = "YOUR-DB-PASSWORD"
DB_NAME = "YOUR-DB-NAME"

SECRET_KEY = "YOUR-SECRET-KEY"
REQUEST_HEADERS = "YOUR-APP-HEADERS"
```
### Start Development Server
```bash
$ npm start
```

## Other Dependencies
---
- [mysql](#)
- [crypto](#)
- [jsonwebtoken](#)
- [multer](#)
- [cloudinary](#)
- [multer-s3](#)
- [morgan](#)
- [mocha](#)
- etc.


## License
---

[Beerware](https://en.wikipedia.org/wiki/Beerware "Beerware") © [Tatas](https://github.com/tatasfachrul "Tatas")
