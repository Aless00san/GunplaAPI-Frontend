Small Frontend App for managing my other project (gunplaAPI) endpoints on a user friendly way 

# Introduction
This React Project was made as a demo for interacting with my Springboot gunpla API, this readme will contain information on how the final product works, and also how to setup a local version if needed

# How it works

The demo version runs on [AWS Amplify](https://aws.amazon.com/amplify) and the backend cross origin is configured to only allow it's IP, this makes a strict and robust way to interactuate with the API, the structure is as following:

<img src="Server-Client-Model.svg" alt="Server Client Model Diagram" width="400" height="320"/>

The frontend fetches data from the API that needs direct acces to the database, to achieve better response times they are running on the same server, this also increases security as the database is not accesible from outside the machine and only via localhost

# Deploying a local version
## What do you need?
1. Your own data source
   - [Information on how to host your own backend](https://github.com/Aless00san/Gunpla-API)
2. pnpm 9.12 or higher
3. Node.js 24.4 or higher

## Running the code locally
When you clone or download the repo first thing you should do is navigate to the GunplaAPI-Frontend-main directory and run on a terminal the following command: 
```
pnpm install
```
This will locally install all the depedencies needed for this project, note that by default amplify will be added, if you don't plan on using it you can remove it from the project after the install with the following command
```
pnpm remove aws-amplify
```
After that you can start the app with
```
pnpm run dev
```
It should start on http://localhost:5173 and you should see an error if you haven't touched anything yet, that's because the default backend implementation won't work on your machine, that's why you'll need your own datasource

## Stack:

<div style="background-color:#ff0000; padding:20px; border-radius:5px; display: flex; align-items: center; justify-content: center;">
  <a href="https://react.dev/" target="_blank" style="margin-right: 10px;">
    <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="React Logo" width="50" height="50">
  </a>
  <a href="https://axios-http.com/" target="_blank" style="margin-right: 10px;">
    <img src="https://www.vectorlogo.zone/logos/axios/axios-icon.svg" alt="Axios Logo" width="50" height="50">
  </a>
  <a href="https://bulma.io/" target="_blank" style="margin-right: 10px;">
    <img src="https://bulma.io/assets/brand/Bulma%20Icon.svg" alt="Bulma CSS Logo" width="50" height="50">
  </a>
</div>


