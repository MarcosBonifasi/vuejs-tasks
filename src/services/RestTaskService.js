"use strict"

const endPointsDevelopment = {
    urlDocument: "http://localhost:3000/api/bucket/tasks/document",
    urlDocuments: "http://localhost:3000/api/bucket/tasks/documents"
}

module.exports = {
    postTask: async(task) => {

        return await fetch( endPointsDevelopment.urlDocument, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(task)
        }).then(result => result.json())

    },
    getTasks: async() => {

        return await fetch( endPointsDevelopment.urlDocuments )
        .then(result => result.json())

    },
    async putTask(task_id, new_data){
        return await fetch(`${endPointsDevelopment.urlDocument}/${task_id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(new_data)
        }).then(result => result.json())
    },
    deleteTask: async(task_id) => {

        return await fetch( `${endPointsDevelopment.urlDocument}/${task_id}`, {
            method: "DELETE"
        }).then(result => result.json())

    }
}