### Overview


# GreedosBB
Greedos is a intergalactic bounty board for aspiring and experienced bounty hunters across the galaxy. This website shows a list of star wars characters and the information on each of the characters including, planet, eye color, affiliations, and if they are alive. 



<br>

### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.

landscape: https://imgur.com/fMAibec

mobile:    https://imgur.com/oPjNfA4



<br>

### MVP

1. I want to make the application fir for both mobile and landscape to fit computer screens appropriately.
3. I will add a CSS component that will use the data from the API and css to contruct an appealing and inviting application.
4. I will use the API that I obtained from SWAPI to bring in data about the star wars characters that will fill my website that includes height, weight, skin color.
5. I will structure my code with the means of professionaism. I will avoid dirty code and remove all console.logs and notes that are not required for those who read the code in the future. 


<br>

#### Goals
My goal is to create an application that will share relative information about characters in the Star Wars universe. I wanted to create an application that is scable and easy to add onto in the future giving me more opportunity to be creative and apply React features regularly moving forward. 

|     Day          | Deliverable                                |
| :--------------: | :----------------------------------------- |
|   June 1.        | Project Prompt approval                    |
|   June 1.        |  Have a successful API call with images    |
|   June 2.        |  React and Routing complete                |
|   June 3.        | Storybook project materials                |
|   June 3-4       | CSS completed.                             |
|   June 3-4       | Debugging completed.                       |
|   June 5.        | Present and Pray                           |



<br>

#### Libraries

> Use this section to list all supporting libraries and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | Allows me to use router for my app.        |
|   Axios          | Allows me to call an API successfully.     |


<br>

#### Data

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| SWAPI      |      yes      | swapi.dev.    |      https://swapi.dev/api/people/1/    |

```
"name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "http://swapi.dev/api/planets/1/",
    "films": [
        "http://swapi.dev/api/films/1/",
        "http://swapi.dev/api/films/2/",
        "http://swapi.dev/api/films/3/",
        "http://swapi.dev/api/films/6/"
    ],
    "species": [],
    "vehicles": [
        "http://swapi.dev/api/vehicles/14/",
        "http://swapi.dev/api/vehicles/30/"
    ],
    "starships": [
        "http://swapi.dev/api/starships/12/",
        "http://swapi.dev/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "http://swapi.dev/api/people/1/"
}
```

<br>

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

```
src
|______
      |__ App.css
      |__ App.js
      |__App.test.js
      |__ Counter.jsx
      |__ Footer.css
      |__ Footer.jsx
      |__ Headr.css
      |__ Header.jsx
      |__ index.css
      |__ index.js
      |__ Logo.jsx
      |__People.css
      |__People.css
      |__serviceWorker.js
      |__setupTests.js
      |__Show.css
      |__ Show.jsx
      
```

<br>

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | State | Props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Logo.       | functional |   n   |   n   | _This component holds the Logo of the website application        |
|   People     | functional |   y   |   n   | _This component holds all the info_                              |
|    App.      | functional |   n   |   n   | _This page holds all the routes and links_.                      |
|    Footer    | functional |   y   |   y   | _This component holds where I received the API and my name.      |
|    Counter   | functional |   y   |   y   | _This component holds the counter component for random numbers.  |
|    CSS pages | functional |   y   |   y   | _These components hold all of the styling for my application.    |

<br>

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above. 
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add header compoent |    M     |     3 hrs      |      2hrs     |      2hrs      |
| Call API.           |    H     |     3 hrs      |      3hrs     |      3hrs      |
| Render images       |    H     |     3 hrs      |      5hrs     |      5hrs      |
| Create Links        |    H     |     4 hrs      |      2hrs     |      2 hrs     |
| Develop Show Page   |    H     |     5 hrs      |      5hrs     |     5 hrs     |
| Add Counter Page    |    H     |     1 hrs      |      1hrs     |     1  hr      |
| CSS                 |    M     |     5 hrs      |      5hrs     |     5hr       |
| StoryBook           |    H     |     5 hrs      |      0hrs     |     0        |
| Creating Logo       |    H     |     1 hrs      |      1hrs     |     1hr      |
|     Debugging       |    H     |     3 hrs      |      4hrs     |     4hrs      |
| TOTAL               |          |     37 hrs     |     29hrs     |      29hrs    |

<br>


<br>

### Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

- Add randomizer for random bounty amounts for each character shown.
- Add more endpoints to increase the information shared including planets and starships.
- Add animations to make it feel more inline with the movie series. 
- Add more css that will make it look more futuristic.
- Add form for comments.
- Add a rule that makes it so if a character has died the character is marked with an "x".
- Add "free" music.
- Add a translator APIs to add a linguistics page. 
- Add video clips from YouTube.
- ADD a game API that allows the user to pull information from related games to amplify the fun.
- Maybe add an audio quote when the characters page shows up.
- Add a page that shares links to other star wars pages.

<br>

***

## Project Delivery

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

```
export default class Counter extends Component {
    constructor() {
        super();
        this.state = {

            number: 1
        }
    }
    componentDidMount = () => {
        const randomNumber = Math.floor(Math.random() * 100000000000000) + 100;
        this.setState({
            number: randomNumber
        })
    }
    render() {
        return (
            <>
                <p>{this.state.number}</p>
            </>
        );
    }
}
```

### Code Issues & Resolutions

> I removed the StoryBook MVP due to it not being needed for this project any longer. 
>I added a few more components due to need. I added a Logo component, Counter Component, and 4 more CSS components for styling individual elements.
>I changed the layout slightly due to the infomation my API allowed, the images are smaller some I was able to hold more names on 1 line.
>The placement of my Logo and homebutton were moved due to styling changes. 
