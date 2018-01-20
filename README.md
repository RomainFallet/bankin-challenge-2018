# Bankin Challenge Engineering 2018 : Web Scrapping

This script is meant to perform a full web scrapping of the webpage : https://web.bankin.com/challenge/index.html for [the Bankin Web Scapping challenge](https://blog.bankin.com/challenge-engineering-web-scrapping-dc5839543117).

## Getting Started

These instructions will get you a copy of the project up and running on **Ubuntu 16.04 LTS** with [the NodeJS implementation called "Puppeteer"](https://github.com/GoogleChrome/puppeteer) of **Chome Headless**. It may works on other linux distributions.

### Prerequisites

#### 1. Puppeteer dependencies

We first need to install the environment dependencies of our Puppeteer API.

```
sudo apt-get update
```
```
sudo apt-get install git curl gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
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

Simply clone this repository.

```
git clone https://github.com/RomainFallet/bankin-challenge-2018
```
### Usage

Simply run the script with node :

```
node ./script.js
```
You'll find a file "datas.json" alongside the script with the result.

## Built With

* [Puppeteer](https://github.com/GoogleChrome/puppeteer) - The NodeJS implementation of Chrome Headless

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/RomainFallet/bankin-challenge-2018/tags). 

## Authors

* **Romain Fallet** - *Initial work*

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](LICENSE.md) file for details