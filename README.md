# Portfolio

You can see this portfolio live by visiting: https://psbhagat.github.io/portfolio

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Technlogies used: Angular, HTML and Bootstrap 

## There are 6 pages:  

About 

Experience 

Education 

Skills 

Projects 

Contact Us 

 

## Project Structure 

I have created a components folder in src which has the components and modules for above 6 items, it also has a core folder which has the navigation, footer and providers.  

The scss files are placed together under src/assets/sass folder. 

I have modularized the scss rules by created different files for different components, all these files are imported in the main styles.scss file which also has a few global rules. 

## Features Implemented: 

### Routing Implemented: 

I have implemented routing and thus have achieved to create an SPA. 

### Loading strategy implementd: 

Eager Loading components: Navigation, Footer and About are eagerly loaded as they are part of the landing page. 

Lazy Loading components: Experience, Education, Skills, Projects and Contact Us are lazy loaded. 

### Core Components Folder: 

I have put the common components like navigation and footer in the core folder.  

### Provider Created: 

Just to demo use of providers, I have created a mock data inside the providers folder and created an Injectable service, which returns this data. This data is actually the paths of the images that are loaded in the skills page. I have returned an observable from this service and subscribed to the observable in the skills component and used that json object array data to show the skills by looping over the data using *ngFor directive. 

### Favicon Images Generated: 

Favicon image is also added for different devices and browsers. 

### SASS Features used: 

I have utilized various SASS features like imports, variables.  

I have created a few CSS animations using keyframes and by playing around with the transform property.  

## Flow of the application 

As soon as you launch the portfolio, you can on the about page which has the navigation on top. 

*About*: This Page just has a one liner text and a small blink animation in the subheading. 

*Experience*: This page has details of my job experience. I have added an animation when routed to this page, the border of the two cards blinks and changing color for 5 secs. You can also hover on any card to see color change of the card. 

*Education*: This has my education details. You can hover on any card to see my percentage pop-up. 

*Skills*: It has images of the skills. You can hover on any image to see a cool effect achieved by scaling the image on hover. 

*Projects*: This page has details of my projects. Click on the github symbol beside any project heading to go to the github repository. 

*Contact Us*: This is just a dummy form for contact Us created. 
