# NBA players' info (Vuel...)


# List of players

Develop an SPA in Angular 4 that shows NBA statistics using this api: https://stats.nba.com/stats

The aplication should show a list of players indicating their name, surname, equipment and their age.

For this case, the following endpoint will be user: **leaguedashplayerbiostats**


Parameters:

- PerMode: "Totals"
- LeagueID: NBA = 00, ABA = 01
- Season Format NNNN-NN (ex. 2016-17)
- SeasonType: One of "Regular Season", "Pre Season", "Playoffs", "All-Star", "All Star", "Preseason"


# Player screen

When you select a player, display a screen with the player's data (Name, Surname and date of birth in format: Sep 3, 2010) using the following endpoint: **commonplayerinfo**

Parameters:

- PlayerID


# Special conditions:


- Do not focus your efforts in the UI or UX. The important part is the readability of the code, as well as the architecture and maintainability. The development of tests will be evaluated.

- **Please, write "Finished" on final commit comment, this comment inform us that is finished and we can proceed to validate the code.**

# NbaPlayers

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
