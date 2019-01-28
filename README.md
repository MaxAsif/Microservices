# SocialCops Node Task

Build a simple stateless microservice in Nodejs, with three major functionalities -
Authentication
JSON patching
Image Thumbnail Generation

## Getting Started

```bash
$ git clone https://github.com/MaxAsif/Microservices.git
$ cd /to/root/dir
$ npm install
$ npm start
```

### Prerequisites

Should have [node](https://nodejs.org/en/download/) and [npm](https://nodejs.org/en/download/) installed.

```bash
$ node -v
$ npm -v
```



## Running the tests

Used [mocha](https://mochajs.org/) for test and [istanbul](https://github.com/gotwarlost/istanbul) for code coverage.

### Test for the API

To run the test :

```bash
$ npm test
```

## Deployment

Deploy with [docker](https://docs.docker.com/).

```bash
$ cd /to/dir/Dockerfile
$ docker build -t app .
$ docker run  -p 3000:3000 -d app
```

## Built With

* [express](https://expressjs.com/) - Node.js web application framework
* [pino](https://github.com/pinojs/pino) - Node.js logger
* [jwt](https://jwt.io/) - Used to generate Json Web Token and for authentication and security of API
* [jwt](https://jwt.io/) - Used to generate Json Web Token and for authentication and security of API
* [mocha](https://mochajs.org/) - JavaScript test framework running on Node.js
* [istanbul](https://github.com/gotwarlost/istanbul) - To evaluate code coverage
* [resize-image](https://www.npmjs.com/package/resize-img) - To resize image

## Authors

* **Md Asif Iqbal** - *Initial work* - [MaxAsif](https://github.com/MaxAsif)
