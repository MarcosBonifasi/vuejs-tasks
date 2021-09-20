"use strict"

const endPointsDevelopment = {
    oneDocument: "http://localhost:3000/api/bucket/tasks/document",
    documents: "http://localhost:3000/api/bucket/tasks/documents"
}

module.exports = {
    postTask: async(task) => {

        return await fetch( endPointsDevelopment.oneDocument, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(task)
        }).then(result => result.json())

    },
    getTasks: async() => {

        return await fetch( endPointsDevelopment.documents )
        .then(result => result.json())

    },
    async putTask(task_id, new_data){
        return await fetch(`${endPointsDevelopment.oneDocument}/${task_id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(new_data)
        }).then(result => result.json())
    },
    deleteTask: async(task_id) => {

        return await fetch( `${endPointsDevelopment.oneDocument}/${task_id}`, {
            method: "DELETE"
        }).then(result => result.json())

    }
}