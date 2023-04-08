// console.log(fetch("https://reqres.in/api/users").then(res=>console.log(res)));


/*fetch("https://reqres.in/api/users")
.then(res=> res.json())
.then(data => console.log(data))
*/


/*fetch("https://reqres.in/api/users")
.then(res=> res.json())
.then(data => console.log(data))
*/

/*
fetch("https://reqres.in/api/users")
.then(res=> res.json())
.then(data => console.log(data))
.catch(error => console.log("Error"));
*/

/*
fetch("https://reqres.in/api/users")
.then(res=> {
    if(res.ok){
        console.log('Fetch Successful')
    }else (
        console.log('Fetch is NOT SUCCESSFUL!!')
    )
    res.json()
})
.then((data)=>console.log(data))
.catch(error => console.log("Error"));*/


fetch("https://reqres.in/api/users",{
    method: 'POST',
    header: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        name: 'New User 1'
    })    
})
.then(res=> {
    return res.json()})
.then((data)=>console.log(data))
.catch(error => console.log("Error"));