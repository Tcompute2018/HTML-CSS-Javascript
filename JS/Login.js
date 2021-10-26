
var info = [
    {
    username: "Tuan",
    password: "password"
    },
    {
    username: "tom",
    password: "password"
    },
    {
    username: "john",
    password: "password"
    }
]




function getInfo() {
    var username = document.getElementById("name").value
    var password = document.getElementById("pass").value

    if (username == 0 || password ==0){
        alert("Please enter Input");
        return
    }

    for (i = 0; i < info.length;i++){
        if (username == info[i].username && password == info[i].password){
            console.log(username +" is logged in")
        }
        else{
            console.log("Error!! your Username or Password does not match")
        }
    } 

   
}