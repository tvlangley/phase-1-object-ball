// function gameObject () {}

const gameObject = () => {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
}

console.log(gameObject())

function homeTeamName() {
  let object = gameObject()
  return object['home']['teamName']
}

// console.log(homeTeamName())

function numPointsScored (playersName) {
    // loop through home team object to look for player
    for (player in gameObject().home.players) {
        if (player === playersName) {
            // return that player's points
            return gameObject().home.players[player].points
        }
    }

    // loop through away team object to look for player
    for (player in gameObject().away.players) {
        if (player === playersName) {
            // return that player's points
            return gameObject().away.players[player].points
        }
    }

    // debugger
}


function playerStats (playersName) {    
    // loop through home team object to look for player
    for (player in gameObject().home.players) {
        if (player === playersName) {
            // return stats of specific player
            return gameObject().home.players[player]
        }
    }

    // loop through away team object to look for player
    for (player in gameObject().away.players) {
        if (player === playersName) {
            // return stats of specific player
            return gameObject().away.players[player]
        }
    }
}


const shoeSize = (playerName) => {
    const homeTeam = gameObject().home.players
    for (player in homeTeam) {
        if (player === playerName) {
            return homeTeam[player].shoe
        }
    }

    const awayTeam = gameObject().away.players
    for (player in awayTeam) {
        if (player === playerName) {
            return awayTeam[player].shoe
        }
    }
}


const teamColors = (teamName) => {
    if (teamName === gameObject().home.teamName) {
        return gameObject().home.colors
    } else if (teamName === gameObject().away.teamName) {
        return gameObject().away.colors
    }
}

const teamNames = () => {
    return [gameObject().home.teamName, gameObject().away.teamName]
}

const playerNumbers = (teamName) => {
    if (teamName === gameObject().home.teamName) {
        const playerObjects = Object.values(gameObject().home.players)
        return playerObjects.map(player => player.number)
    } else if (teamName === gameObject().away.teamName) {
        const playerObjects = Object.values(gameObject().away.players)
        return playerObjects.map(player => player.number)
    }
}

const bigShoeRebounds = () => {
    let biggestShoeSize = 0
    let reboundsOfBiggestShoeSize = null

    const homeTeam = gameObject().home.players
    for (player in homeTeam) {
        if (homeTeam[player].shoe > biggestShoeSize) {
            biggestShoeSize = homeTeam[player].shoe
            reboundsOfBiggestShoeSize = homeTeam[player].rebounds
        }
    }

    const awayTeam = gameObject().away.players
    for (player in awayTeam) {
        if (awayTeam[player].shoe > biggestShoeSize) {
            biggestShoeSize = awayTeam[player].shoe
            reboundsOfBiggestShoeSize = awayTeam[player].rebounds
        }
    }
    return reboundsOfBiggestShoeSize
}