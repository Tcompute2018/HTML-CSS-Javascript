var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = (currentDateTime.getDate() + 1);

if (date < 10) {
    date = '0' + date;
}
if (month < 10) {
    month = '0' + month;
}

var dateTomorrow = year + "-" + month + "-" + date;
var checkinElem = document.querySelector("#checkin-date");
var checkoutElem = document.querySelector("#checkout-date");

checkinElem.setAttribute("min", dateTomorrow);
checkinElem.onchange = function () {
    checkoutElem.setAttribute("min", this.value);
}

function Booking(){

var myname = document.getElementById("name")
var email = document.getElementById("email")
var phone = document.getElementById("phone")
var adult = document.getElementById("adult")
var child = document.getElementById("child")
var checkin_date = document.getElementById("checkin-date")
var checkout_date = document.getElementById("checkout-date")
var roomSize = document.getElementById("BedSize")
var message = document.getElementById("message")


if (myname == 0) {
    alert("Please enter Input");
    return
}

console.log(myname)
console.log(email)
// console.log(phone)
// console.log(adult)
// console.log(child)
// console.log(checkin_date)
// console.log(checkout_date)
// console.log(roomSize)
// console.log(message)

}

