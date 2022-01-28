# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description & Planning Wireframes / Priority Matrix / Timeline| complete
|Day 2| Finished Nav bar & work on responsive design | complete
|Day 3| Finished dropdown from nav/ worked on project section/ attend bootstramp session | complete
|Day 4| Bootstrap carousel/ About me | complete
|Day 5| Dev Skills/Contact form/finishing details/href tags linked etc. | complete


## Project Description

My final project included a responsive navbar with a drop down menu for screens of 675 px or less. Used min and max width commands to layer responsive design. Used bootstrap to create responsive carousel as well as a responsive form. Uploaded Icons to demonstrate coding language proficiences and left buttons with anchor tags to link to future projects and their respective repositories and sites/apps. Overall, the portfolio is unique and aesthetically pleasing to my design tastes, its a clearly structured format across mobile, tablet and desktop formats, and is open to future improvement and additions.

## Wireframes

Include images of wireframe with a description of the specific wireframe.   

 ![Mobile](./MobileFormatPortfolio.png)
![Desktop](./WebTemplatePortfolio.png)
You can find my user-stories and project organization at [Project 1](https://tree.taiga.io/project/coreyvill-portfolio/kanban)

## Time/Priority Matrix 

I don't have a great estimation of how long I think each part is going to take given my lack of familiarity with tying a lot of these concepts together. I estimated the following:
|User Story| Estimtated time| Actual time|
|---|---|---|
|Nav Bar+Animation| 7 hours| 11|
|Welcome| 1 hour| ~1 hour
|Carousel+Animation|10 hours| ~4 hours
|About me| 3 hours| ~1.5
|Contact| 3 hours| ~3 hours
|Final details/wrapup| 2.5 hours|~2.5 hours
### MVP/PostMVP - 5min


- MVP
  - Nav bar must be formatted mobile first, containing hamburger menu 
  - Nav bar must expand to clear hypertext links for tablet and desktop 
  - Nav bar must link to welcome, contact me, projects and about me sections
  - Must contain welcome message from author 
  - Must contain career interest of software development and one personal interest
  - Must contain some type of animation for welcome text
  - About me section should contain a large text field for contextual info about the author 
  - Should contain an image or image placeholder for the author to upload image
  - Projects that dont yet exist will contain placeholder images and buttons for easy entry of info when created 
  - Projects should should contain text fields to add contextual information for each one
  - Project wireframes should have a dynamic animation (To meet animation requirement criteria)
  - Project link buttons should have hover effects including highlighting, to create a visually dynamic experience
  - Form capture for name 
  - Form capture for email 
  - Form capture for a message input by user


#### PostMVP 

- Post-MVP
  - Nav bar should contain a drop down menu from hamburger icon for mobile displays 
  - Nav bar should have highlighted elements when being hovered for tablet and desktop display 
  - ~~Nav bar should be sticky on all display formats~~
  - Welcome message will display a text carousel animation ~~using js~~
  - Welcome text must use attention grabbing font and color
  - ~~Author Image with some visually dynamic animation~~
  - A link back to relevant contact links 
  - Visuals that demonstrate coding language competencies 
  - ~~linkedin and github clickable images that link to respective accounts~~

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into smaller components.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the portfolio. Your estimates can then be used to evalute possibilities based on time needed and the actual time you have before the portfolio must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Hamburger | 1 | 3hr | ~4hr |
| Project Previews | 1 | 4hr | ~2.5hr |
| Regular Nav | 1 | 2hr | ~2hr |  
| Adding Form | 1 | 3hr|  ~1.5hr | 
| Other sections and flex| 1 | 3hr | ~3hr|
| Working with API | 3 | 0hrs| 0hrs|
| Responsive | 1 | 3hr | ~5.5hr |
| Social Media Icons | M | 1hr | ~1.5hr |
|Replanning of Body Design| 0hrs| ~3hrs|
| Total | 1 | 19.5hrs| 24.5 hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Project Carousel | 1 | 3hr | ~3.5hr|
| Hamburger Dropdown | 1 | 2hr | ~3hr |
| Bootstrap | H | 4hr | ~4hr |
| Total | H | 20hrs| 10.5hrs |

## Additional Libraries
Supporting libraries and thier role in the project
|Library/Resources|Role|
|---|---|
|[Flaticon](https://www.flaticon.com/)| Icons for Dev Skills|
|[Bootstrap](https://getbootstrap.com/)|Container formats and carousel-html for project section|
|[A Designer Who Codes](https://www.youtube.com/watch?v=aeNDvQi6O94)|Tutorial for using Bootstrap to build forms|
|[Adrian Twarog](https://www.youtube.com/watch?v=ku_97a6Bgkg)|Tutorial for Bootstrap 5 carousel using HTML

## Code Snippet

Brief code snippet of functionality that you are proud of an a brief description:

This section of code was really good because I underestimated the functionality of just the bootstrap library and html. I was able to create a carousel slider for my projects that didn't use any javascript and I thought that was cool. I also learned about the aria-hidden command for the buttons, which blocks code snippets for accesibility APIs as they are not relevant. It was a cool glimpse into accessibility features in code.


```
 <div id="myCarousel" class="carousel slide carousel-fade"
        data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
            <li data-target="#myCarousel" data-slide-to="4"></li>
        </ol>
            <div class="carousel-inner">
                <div class="carousel-item active"
                style="background-image:url()">
                    <div class="container">
                        <h1>Project 1</h1>
                        <p>The desert wind blew the tumbleweed in front of the car. Alex swerved to avoid the tumbleweed, but he turned the wheel a bit too strong and the car left the road and skidded onto the dirt median. He instantly slammed on the brakes and the car stopped in a cloud of dirt. When the dust cloud had settled and he could see around him again, he realized that he'd somehow crossed over into an entirely new dimension.</p>
                            <a href="#" class="btn btn-lg btn-primary" id="Git">
                                Git
                            </a>
                            <a href="#" class="btn btn-lg btn-primary" id="Site">
                                Website
                            </a>
                    </div>
                </div>
```

## Issues and Resolutions

My real major issue was just how I was going to tackle the projects section and create a body that flowed. I think the Bootstrap library was instrumental in overcoming that hurdle.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object