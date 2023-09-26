# PokeApp - Web Code Challenge

We've created a Code Challenge that will guide you through all the coding standards that Triple manages and will get you started in a React application.
This also is the main reason that we've set this up.
If you are not that familiar with React right now, we would recommend you to also check out the links in the reading list on the Wiki. This way you can read on how to do some things and immediately try to build it yourself and put it to practice. 

## Fork and Clone the repository
Before you get started on this we would like you to fork this repo and name it as following:  
`code_challenge_react.{firstname}.{lastname}`  
This will be the repository you will be working in and where you will be able to create Pull Requests in as well.  
You will create a PR per functionality/user story. It can be possible that a user story is to big to place in a single PR, if this happens, you can 'split' the work in 2 different PRs (for example: one for the functionality and one for UI).
The guideline of a PR is a maximum of about 20-30 files, if it gets bigger than this, it should be split in multiple PR's.

## Get the app up and running
To get this app started, always run the following commands:

Install the packages:
```tcl
npm install
```
Start the application:
```tcl
npm start
```
This will get the app started and running on port `3000`

## The Design
There is a design that is created in Figma, Figma also is the tool that we use for all the designs within Triple.
This way you will get to know how to work with Figma and to recreate the design in the web application.
Please note that you are looking at the 'Web' tab within Figma, this also contains the responsive design.
https://www.figma.com/file/dsgGXcu5WELIvRW90m5308/Pokemon-Code-Challenge?node-id=15%3A2863

## The API
The app is build on the PokeAPI, all documentation of this API can be found on the following url:
https://pokeapi.co/ 


## The challenges
To get you started, a small base has already been setup in React, the first API calls are already implemented and from here on you should be able to continue by taking on each challenge step by step.
The most important thing to know is that you can always aks questions to your mentor. This is why they are here, and why they are seated near you. They are already familiar with the challenge and therefore will be able to help you where needed.
Next to that you'll need to know that there is no deadline for this, you can work on the challenges and get to know React on your own tempo. As you can see the user stories are setup with MoSCoW, so not all challenges **must** be done.

With each PR you can 'check' the user story that is related to it, so you have a clear overview of what still needs to be done.

- [x] The user must be able to see all of the following stories on either PC, Tablet of Mobile (Responsive)
- [x] The user must be able to see a list of pokemons in the styled overview
- [x] The user must be able to see the sidebar and its content
- [x] The user must be able to use the 'more' popup of a single Pokemon
- [x] The user must be able to favorite a Pokemon
- [x] The user must be able to open a single Pokemon in a Modal View (`React.createPortal`)
- [x] The user must be able to see all the stats of a pokemon in three tabs
- [x] The user must be able to see an overview of all their favorite Pokemons on a different page/route
- [x] The user should see a 'not found' page when the route is not identified
- [x] The user should be able to search through all the pokemons
- [x] The user should be able to switch to darkmode in the sidebar
- [x] Search loading states (spinner of skeleton loading)
- [ ] "Not found" search empty state
- [ ] Favorites empty state
- [ ] App loading state
- [ ] Pokemon battle functie?
- [ ] Accessibility verbeteren
- [ ] The user could be treated with nice animations throughout the app
