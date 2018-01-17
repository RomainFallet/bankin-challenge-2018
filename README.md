# Bankin Challenge Engineering 2018 : Web Scrapping

This script is meant to perform a full web scrapping of the webpage : https://web.bankin.com/challenge/index.html for [the Bankin Web Scapping challenge](https://blog.bankin.com/challenge-engineering-web-scrapping-dc5839543117).

## Getting Started

These instructions will get you a copy of the project up and running on **Ubuntu 16.04 LTS** with [the NodeJS Puppeteer implementation](https://github.com/GoogleChrome/puppeteer) of **Chome Headless**.

### Prerequisites

#### 1. Puppeteer dependencies

We first need to install the environment dependencies of our Puppeteer API.


```
sudo apt-get update
```
```
sudo apt-get install curl gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
```
#### 2. NodeJS v7

We will then install NodeJS v7. First, we add it to our registry because the default ubuntu package ships only NodeJS v5.

```
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
```

Then we install NodeJS v7.

```
sudo apt-get install nodejs
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Romain Fallet** - *Initial work*

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
