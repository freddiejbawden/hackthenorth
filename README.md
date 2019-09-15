# matchbox
_Built during HackTheNorth 2019 13th - 15th September_
## Inspiration

One of our teammates went to the team formation workshop on Friday. This was one of the ideas he pitched - to have an app that would support hackers in finding likeminded developers before the hackathon starts. We wanted to have a product that would be deeply integrated with Devpost and Github profiles to provide as much useful information as possible.

Other solutions, such as the popular Slack have no organisation and can lead to a wall of text that is very hard to digest. We believe that by matching using statistical analysis we can create better way for hackers to find like minded individuals, igniting the fire for great ideas to emerge out of.

## What it does

matchbox creates rich user profiles using information collected from the two most important hackathon participant resources - Devpost and Github. This enables smart friend/teammate recommendations based on skillsets, interests and experience. Lists of events are presented as well for easy organisation of different meet ups and workshops.

## How we built it

We used React to build a web app that populated user profiles from Github and Devpost. To achieve this, we used the Github API and creating an API on our own for scraping information from Devpost. To design our app we used Sketch and Adobe XD.

The recommendations are computed using Google's Cloud Functions service based on the K-Nearest Neighbours algorithm which is triggered by a Firebase Function Trigger. We used Cloud Firestore to allow for rapid prototpying of our data structures and ease of use in our web app, along with Firebase Authentication to help personalise each hackers experience.

## Challenges we ran into

Surprisingly, Devpost does not have a public/maintained API! Our teammate decided to take on the quest of scraping most of the website's public contents and creating an open source API both for the purposes of developing this web app and providing it for future hacker use. We also have quite some trouble making React behave nicely with Firebase which took a lot of our time left to complete the app.

## Accomplishments that we're proud of

Although we did not manage to complete the MVP that we planned for matchbox, we are very proud by the progress we have made in the 36 hours (despite the fact that we were seriously jet-lagged!). We each learned a lot from one another and got confidence in working with different technologies on a larger project.

## What we learned

The simplest things sometimes take up the most time - numerous occasions over the weekend where each of us stumbled on basic errors. But all of this is part of the journey!

## What's next for matchbox

Hopefully we will continue working on the application. It would need a better user interface, additional features and support for major operating systems.
