## Express.js: Note Taker

  ## Table of Contents
  * [About](#about)
  * [Criteria](#criteria)
  * [Build](#build)
  * [Installation](#installation)
  * [Link](#link)
  * [Demos](#demos)

## My Mission

This application will use an Express.js back end and will save and retrieve note data from a JSON file.
I want to be able to write and save notes so that I can organize my thoughts and keep track of tasks I need to complete.

## Criteria

Given a note-taking application
When I open the Note Taker, then I am presented with a landing page with a link to a notes page
When I click on the link to the notes page, then I am presented with a page with existing notes listed in the left-hand column, 
plus empty fields to enter a new note title and the note’s text in the right-hand column
When I enter a new note title and the note’s text, then a Save icon appears in the navigation at the top of the page
When I click on the Save icon, then the new note I have entered is saved and appears in the left-hand 
column with the other existing notes
When I click on an existing note in the list in the left-hand column, then that note appears in the right-hand column
When I click on the Write icon in the navigation at the top of the page, then I am presented with empty fields to enter a new note title and the 
note’s text in the right-hand column.

## Build

Set up some starter code
Created a server.js, starter folders/files and local host port for listen
Installed express and fs - test listening on port
Reviewing get and push code
Delete is a work in progress - need to double check if it relates to the pre-provided index.js
The index.js code looks like it needs some work.
Testing on Postman - not recognizing notes file.
Got a few post requests as I progressed but need to work out links from rearrangeing pile structure
for now turn in. 
Testing was not working so I am expanding the app beyond the server and index.js to break down code to separate files and use a router.
Separated route and util, a challenge was getting the server to populate the db. Looked a bit more into stringify, parsing and fs.
The app 

## Installation 

app will run on heroku

if forked use npm i and node server.js to run on localhost. Type note, save and refresh page.
Used express, uuid, fs, path 

## Link

!https://note-taker-09574.herokuapp.com/

## Demos

![demo](./assets/note-taker.gif)

