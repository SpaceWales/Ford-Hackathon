# Tech Connect Ford Hackathon

This project was written and inspired by the Ford sponsored DevOps Hackathon Project.

## Description:

This multi-purpose web application is intended to give you full control over your chosen vehicle,
and includes location data, remote commands, information and current status- everything Ford
has to offer on your Smart vehicle!
We made a decision early on not to reinvent the wheel, but to present the data and commands in a
streamlined environment that is easy to use and understand.

### Technologies:

**React:** As a truly light-weight and modern option, our application is built from the ground up
to give a dynamic, high-performing, responsive UI, without the weight of a lot of external dependencies
and databases to bog down your loading screens and gives the snappy feedback everyone wants.

**Google Maps:** Can't remember where you parked? No worries! Using cutting-edge Satellite technology,
we import your location data and give you a live map showing your vehicle location from anywhere. No
more walking down the street clicking the alarm button on your keys, (though you can do that on our app too!).

**Bootstrap:** Tired of your websites looking like a bad MySpace page? Think CSS is an absolute drag? Stand
on the shoulders of giants and use Bootstrap!
_Personally I think Wikipedia is the ideal website, but in 2021 people like fancy buttons and transformations_

## Installation:

'npm install' installs node modules associated with project  
'npm start' 

### Packages:
_Packages are installed automatically_
**Google Maps API:** 'npm install @react-google-maps/api'  
**Bootstrap** 'npm install react-bootstrap bootstrap@4.6.0'
**Bootstrap Icons** 'npm install react-bootstrap-icons'
**Json-Loader** 'npm install --save-dev json-loader'

## How to Use:

Once a vehicle has been authorized by Ford, using the application is a simple matter of booting it up and
navigating the preferred option you are looking for.
All authorization procedures are done behind the scenes and no user input is required

### Home Page

Here you will find your latest location data, links to vehicle commands, and easy to find information about fuel
levels and engine / alarm status

### Remote commands

Controlling your vehicle is a snap, the toggle will indicate the current status, and simply flipping the toggle
will send a call to your vehicle to update whatever you wish

### Vehicle Status

Here you find the less used statistics about your vehicle, oil life, tire pressure, things you should be aware of
but not neccessarily used every day

## Credits:

Ryan Khzouz - instrumental in UI design  
James Worthington - facilitated our command calls and user functions  
William Wales - authorization and information/status supplied to UI  
Phil Pomante - presentation and public relations
