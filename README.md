

# thumbbuddies
interactive social game

## TODO
- ERD
- stack choices:  build app in Xcode and Ionic.  see which feels better. go from there.
- skeleton/structure decisions:
    - ionic or native?
      Most likely this will have to be native.  Sure there might be separate maintenance, but with the potential of growing the UI and the importance of good UI choices is important
    - Mongo or Postgres?: Start with Postgres due to the strong relationships between entities.  Potential future migration to mongo depending on growth.
- Backend:
  - setup Postgres on AWS
  - initial db schema and dummy data
  - node backend for gets and puts.  separate micro services?

- Frontend-iOS
  - Native

- Frontend-Web
  - Angular



## Features

### Characters
+ sub categories:
  - Planets
  - Species
+ abilities in the future? Either inherent, species based, or growth based.

### Social Profile Connection


### T-Battles
+ P1:
  - Open app, select character
  - scan code for opponent --- entering battle + details about opponent
  - winner or loser declared
  - points assigned accordingly and pushed up to cloud api
+ P2:
  - Augmented reality? Video-based confirmation?

----------------------------------------- issues ----------------------------------------------------
* players scanning their own characters and replaying over and over for points
  - no points for characters owned by same user

* players playing against fictional users
* players playing the same friend over and over again and going back and forth with each other for points
  - diminishing points against same opponent
  - time constraints:
    - p1 vs p2:  1st win = 100pts, 2nd-50pts, 3rd-25pts, 4th-10pts, 5th-5pts, 6th through 10th = 1pt
    - resets up each day, up to a max of 50pts in a week.



### Scoring



### Battlegrounds
- battlegrounds - designated locations that have higher points per battlegrounds.
- [Google Maps API](https://developers.google.com/maps/documentation/javascript/examples/map-geolocation)


### Tournaments
- tournaments can be hosted on battlegrounds.  Winners get extra points, and a multiplier for each leg of victories.  I.e quarter-final is a 2x, semi: 5x, final: 10x


## future:
- chat
- character AIs?




## Future Considerations
### Data
- DB scaling or migration
- Are GUIDs needed? If so where, selective or blanket?
- System/method to change db schema without losing data
- Way to update running production version without loss of sevice (AWS load balancers?)
- Automate all the things: Jenkins, Octopus, Docker?


## Tech

### DB
- Postgres hosted on AWS RDS
- Sequelize as ORM: 
  * [github link](https://github.com/sequelize/cli)
  * [Sequelize documentation](http://docs.sequelizejs.com/manual/tutorial/migrations.html)

### ERD
![](https://www.lucidchart.com/publicSegments/view/a7dce623-1772-45e7-b327-545b57e0894c/image.png)

### Notes
- scoreboard can be determined by querying user/thumbbuddy table intersected with battles.  
