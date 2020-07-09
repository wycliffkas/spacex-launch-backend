const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Rocket {
        rocket_id:  String,
        rocket_name: String
        rocket_type: String
    }

    type Launch {
        flight_number: Int,
        mission_name: String,
        launch_year: String,
        launch_date_local: String,
        launch_success: Boolean,
        rocket: Rocket
    }

    input userInputData {
        flight_number: Int
    }

    type RootQuery {
        getLaunches: [Launch]
        getLaunch(userInput: userInputData): Launch
    }

    schema {
        query: RootQuery
    }
`)