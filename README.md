📚 Sinta
(Helping create a equitable hiring process)

<br>
App home: https://sintaapp.com/
   

## Problem:**
Businesses spend too much time & move too slowly on hiring. On average, completing a hiring cycle will take 2-3 months

## Solution:**
Sinta is a Web app that integrates with Slack's API hat allows teams to quickly assess candidates realtime and reduce time to a decision


   
<img width="1512" alt="Screen Shot 2022-12-05 at 11 27 11 AM" src="https://user-images.githubusercontent.com/114022804/205537462-a466203e-83c3-469d-bf4a-7cfc5b05d684.png">




## Getting Started
### Setup

Install gems
```
bundle install
```
Install JS packages
```
yarn install
```

### ENV Variables
Create `.env` file
```
touch .env
```
Inside `.env`, set these variables. For any APIs, see group Slack channel.
```
CLOUDINARY_URL=your_own_cloudinary_url_key
```

### DB Setup
```
rails db:create
rails db:migrate
rails db:seed
```

### Run a server
```
rails s
```


###Prerequisites:
Slack App with the following features / functionality:

Incoming Webhooks
Interactive Components
Bots
Permissions
Getting Started
Slack App
Create a Slack App from the slack API to act as communication (interview kits) and data collection (responses and feedback).

Paste the following into Request URL field in Interactivity & Shortcuts tab
```
https://kyoro-manager.herokuapp.com/api/v1/user_answers
```

Create a Slash Interview Kit to collect Feedback From your Team Members on Canadiates in Your Interview Cycles!
 
```
https://kyoro-manager.herokuapp.com/api/v1/user_answers
```
.env FILE
Add your Slack Channel ID to the .env file, example below

SLACK_CHANNEL_ID=###########
Add your Bot User OAuth Token to .env file, found in Slack App > Settings > Install App, example below

SLACK_TOKEN=xoxb-############-############-##################
Add a Webhook to Workspace Then copy the webhook and add to .env file, example below

SLACK_WEBHOOK_URL=https://hooks.slack.com/services/########/########/###############
Cloudinary
Add cloudinary API Environment variable to .env file, example below:

CLOUDINARY_URL=cloudinary://###########:##################@########
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Built With
- [Rails 7](https://guides.rubyonrails.org/) - Backend / Front-end
- [Stimulus JS](https://stimulus.hotwired.dev/) - Front-end JS
- [Heroku](https://heroku.com/) - Deployment
- [PostgreSQL](https://www.postgresql.org/) - Database
- [Bootstrap](https://getbootstrap.com/) — Styling
- [Figma](https://www.figma.com) — Prototyping

## Team Members
- [Tashika Cruz](https://www.linkedin.com/in/tashikacruz/)
- [Thomas Price] 
- [Sammy Kavanagh]
 
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## More Screenshots of Platform
 <img width="1512" alt="Screen Shot 2022-12-05 at 11 26 59 AM" src="https://user-images.githubusercontent.com/114022804/205537458-505ac56b-4b6d-4255-8167-59f9acc72ea8.png">
<img width="1512" alt="Screen Shot 2022-12-05 at 11 27 44 AM" src="https://user-images.githubusercontent.com/114022804/205537471-b34c6215-0c4b-4334-8c01-98a2eee62582.png">
