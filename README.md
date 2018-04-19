# bdd_wdio
Test automation boilerplate with WebdriverIO

# Get started

* install docker and docker-compose
* clone this repo
* write your tests and put them in the test folder 
* build docker image for webdriverio service: 
  * `cd images/webdriverio`
  * `./build.sh`
* run selenium hub and nodes:
  * `cd ../../`
  * `docker-compose up`
  * `docker-compose run webdriverio wdio`