// @project
/*
{
    name: string,
    data: number
}
*/

// @project in timestamps
/*
{
    id: number,
    name: string,
    data: number
}
*/


let id = 0 //We need to define id. Our id is going to start at 0 and increment upwards
let name //We need to define name. We do not have to give it a value, as the users will give us the values of the name
let data //We need to define data. Again, the users will give us the values of the data


let timestamps = [ //This array is what will hold the data from the user's projects. Each object will be a project shown in timestamps.
    {
        id,
        name,
        data
    },
]




module.exports = { //We need to export these functions for use. ***

    getTimestamps: (req, res) => {        //This function will return the array of objects (the objects being shown in timestamps.)
        res.status(200).send(timestamps)
    },

    addTimestamp: (req, res) => {       //This function will accept a request from the user to add to the existing data.
        let { name, data } = req.body   //We will accept a name (for the project) and data (stopwatch time). This will come from the body.

        if (timestamps.map(name) === name) {

        }

        //I want my function to search for the exact same name, and if it exists, to update that object with the new information instead of creating a new object. 
        //this is a post request. If the user was editing data, that is when it becomes a put request. If our function is changing the data. It is a post request still.

        id++ //This will increment each time the function is run.
        let project = { //This will create a new object each time the function is run.
            id,
            name,
            data
        }

        timestamps.push(project)//This will push the new object into the timestamps array each time the function is run.

        //assign an id
        //collect the name from react
        //collect the data from react


        //What to do if the project is not in the timestamps

        //What to do if the project is already in my timestamps


        res.status(200).send(timestamps)
    },


    getOneTimestamp: (req, res) => {
        //
        res.status(200).send(timestamps)
    },

    editProjectName: (req, res) => {
        //allow the new project name to be added to the timestamps array.
        res.status(200).send(timestamps)
    },

    deleteTimestamp: (req, res) => {
        //allow a project to be removed from the timestamps array.
        res.status(200).send(timestamps)
    }


}