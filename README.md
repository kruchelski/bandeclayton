<h1 align="center">
  🙀 scream in despair
</h1>

## _Desperate situations calls for desperate screams_. A simple Twitter Bot that screams every hour and reply with a scream to someone when a mention happens


<!-- Infos -->
<p align="center">
  <img src="https://img.shields.io/static/v1?labelColor=0f21a1&color=777777&label=created%20at&message=Sep%202021" alt="Creation Date" />

  <img src="https://img.shields.io/github/last-commit/kruchelski/scream-in-despair?label=updated%20at&labelColor=0f21a1&color=777777" alt="Update Date" />

  <img src="https://img.shields.io/github/v/tag/kruchelski/scream-in-despair?label=latest%20version&labelColor=0f21a1&color=777777" alt="Latest Version" />

  <img src="https://img.shields.io/github/license/kruchelski/scream-in-despair?labelColor=0f21a1&color=777777" alt="Project License" />
</p>

#### Important Note: This is a Work in Progress. At this moment some bugs may occur

#### Important Note 2: This project was done for studying purposes. The idea was based in the [endless screaming Twitter profile](https://twitter.com/infinite_scream)

<div style="color:#333333">

### 😶 Why bother creating this?

This project was made for studying purposes. The objective is to explore the Lambda Functions of AWS, the Twitter API and the Serverless framework.
The bot is very simple, it consists in two main Lambda functions:   

1. tweetSchedule: Every hour and 20 minutes it will post an update to status based in some random functions to generate the tweet
2. tweetMention: Every 1 minute it will retrieve the mentions and then reply to them with random screams.


### 🖥 How do these stuff work?

The tweetSchedule function will be triggered by a cron expression that is configured in the serverless.yml file. the tweetMention function will be triggered by the rate expression also configured in the serverless.yml.
The functions will connect to the Twitter API through te [twitter library](https://www.npmjs.com/package/twitter).

### 🚜 What is under the hood?

It is a very simple project with not so manny libraries or whatever. The main stuff:

- [AWS Lambda](https://aws.amazon.com/lambda/?nc1=h_ls)
- [Serverless Framework](https://www.serverless.com/)
- [twitter library](https://www.npmjs.com/package/twitter)

#### General

- [NPM](https://www.npmjs.com/)
- [Twitter Developer Account](https://developer.twitter.com/en)

### 🎛 So... How to set up the environment?

It is very simple to set up everything and run the project:
- Install Serverless on your machine
```bash
npm install -g serverless
```
- Create Twitter Developer Account and an app (if you don't have it yet) and then copy the API key/secret and Access Token/secret
- Create a AWS account (if you don't have it yet), setup a profile to the lambda in the IAM service
- With the keys from the the profile, generate the  credentials file in your computer (usually a credentials file at `~/.aws/`)
- Create the .env file according to the info in the .env.example and fill with the Key/Token from Twitter
- Use one of the scripts in the package.json to run:
```bash
npm run deploy  # to deploy the application in the AWS
npm run offline # to run the application offline
npm run cron    # to run the scheduled functions offline
```

> Note that the plugin serverless-offline-scheduler has an issue running the cron expressions with the serverless offline command. [See issue here](https://github.com/dherault/serverless-offline/issues/1044)   

The functions logs some info that can be read in the terminal screen (if running offline) or through AWS console

</div>
