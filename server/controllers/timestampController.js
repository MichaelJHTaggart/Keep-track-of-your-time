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


let id = 1 //We need to define id. Our id is going to start at 0 and increment upwards
//We need to define name. We do not have to give it a value, as the users will give us the values of the name
//We need to define data. Again, the users will give us the values of the data


let timestamps = [] //This array is what will hold the data from the user's projects. Each object will be a project shown in timestamps.
let stopwatch = [] //These arrays need to be empty.



module.exports = { //We need to export these functions for use. ***

    getTimestamps: (req, res) => {        //This function will return the array of objects (the objects being shown in timestamps.)
        res.status(200).send(timestamps)
    },
    addTimestamp: (req, res) => {       //This function will accept a request from the user to add to the existing data.
        let { project, data } = req.body
        console.log(req.body)
        const index = timestamps.findIndex((element) => element.project === project) //We are going to return the index of the object that has the exact same project name

        if (index === -1) {         //findIndex() will return a -1 if it doesn't find the information.
            let timestamp = {         //We want to create an new object with the request data if it doesn't already exist.
                id,
                project,
                data
            }
            timestamps.push(timestamp)        //This will push the new object into the timestamps array each time the function is run.
            id++                            //increment id so it is updating each time.
        } else {
            timestamps[index].data += data //I want the data that exists to be added upon.
        }
        res.status(200).send(timestamps)
    },
    getOneTimestamp: (req, res) => {
        const { name } = req.params

        const index = timestamps.findIndex((element) => element.project === name)

        if (index === -1) {
            return res.status(404).send('Timestamp does not exist')
        } else {
            //remove any current data in stopwatch.
            stopwatch.splice(index, 2)
        }
        //paste the values into stopwatch array
        stopwatch.push(timestamps[index])
        //add the items on to the body.
        res.status(200).send({ timestamps, stopwatch })
    },

    editProjectName: (req, res) => {
        const { oldName, newName } = req.params

        const index = timestamps.findIndex((element) => element.project === oldName)
        if (index === -1) {
            return res.status(500).send('Timestamp does not exist')
        }
        timestamps[index].project = newName
        //allow the new project name to be added to the timestamps array.
        res.status(200).send(timestamps)
    },
    deleteTimestamp: (req, res) => {
        const { name } = req.params
        const index = timestamps.findIndex((element) => element.project === name)

        if (index === -1) {
            return res.status(404).send('Timestamp does not exist')
        }
        timestamps.splice(index, 1)
        res.status(200).send(timestamps)
    },
}