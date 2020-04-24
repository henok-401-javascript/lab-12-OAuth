# OAuth Comparative Analysis - < LinkedIn Corporation >

Research Conducted By: < Henok, Eyob, Thomas >

## General Comments

* This application will be simplistic in nature, allowing users to be created in a temporary (non-persistant) database once they’ve authorized and logged in via a third party OAuth provider 

## Pros and Cons

#### Pros

- Well Documented.
- Login with third party application.
- Not only is it easy, but it’s incredibly time saving in the long run.
- We can trust giving critical information like our private financial details.
- It’s comforting that users can choose when authorization tokens expire.

#### Cons

- Lack of market saturation.
- Less interaction with Database.
- Limited integration with other providers.
- Allows limited access to the user's data.
- Needing to make anonymous alternate accounts can be just as annoying as having to  toggle dozens of site privacy settings each month.

## Documentation

- The documention is well written and contains examples. Links on the side bar could be better grouped for the User section. API documentation(Swagger) is also interactive.

## Ramp-Up Projections

< How long would/should it take a team of mid-junior developers to implement? >

- If they are familiar with oauth, the implementation is very straight forward. They should be able to implement within a day.

## Community Support and Adoption levels

< How popular is this provider? What big companies are running on it? >

- LinkedIn is the most popular and Lets you Develop faster with well documented and provied authentication, authorization & user management. Linkedin account is not as pervasive as having a Google or a Twitter account. Google supports common OAuth 2.0 scenarios such as those for web server, client-side, installed, and limited-input device applications

## Links and Resources

< Bulleted List >

## Code Demos

- < Deployed Heroku application link >
- < Code repo link >

## Operating Instructions

< If someone were to download your repo (above), what steps do they need to take to run the application >

- Create a new app on https://linkedin.com/ (a Linkedin is required)
- Configure .env (see readme for specific variables and definitions)
- `npm install && npm start` on both the front-end and the back-end runs
