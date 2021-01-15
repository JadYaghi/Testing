function employeeView( employees){
    // bring data create a array of template strings
    // returning the template strings as an array
    console.log(employees)
    const templateMarkup = employees.map((employee, index)=>{
        const template = `<figure>
        <img src="${employee.avatar}" alt="" width="140" height="140" loading="lazy"> 
        <figcaption>
        <ul>
        <li>${employee.first_name} ${employee.last_name}</li>
        <li>${employee.email}</li>
        </ul>
        </figcaption>
        </figure>`
        return employee
    })
    
    return templateMarkup
    
    }
    
    export default employeeView