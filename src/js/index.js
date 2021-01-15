import{httpGetRequest} from './util/fetch-data.js'
 import employeeView from './views/employee-view.js'
 import createElementsFromTemplate from './util/createElementFromTemplate.js'
 import markupContainer from './util/addMarkupToPage.js'

window.addEventListener('load', function(e){
    /* HTTP get request for JSON data

        Modal
        https://reqres.in/api/users

            View
            Template Literal string of markup
            Convert the template to a dom node
            seed the template with the data
            wrap the data in container
            append the container to the dom
    */
    httpGetRequest("https://reqres.in/api/users").then(data=>{
        const template = employeeView(result.data)
        console.log(templates)
        const markup = createElementsFromTemplate(templates)
        const employees = markupContainer('aside','display' ,markup)

    })


})