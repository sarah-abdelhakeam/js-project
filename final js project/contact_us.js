// var name_field = document.getElementById("name_id").value;
// var email_field = document.getElementById("email_id").value;

// // function setCookie()
// //create cookie
// document.cookie = "username="+name_field;
// document.cookie="useremail="+email_field;

// // tell the browser waht path the cookie belongs to 
// // by default , to the current page 
// // i need to make it to all my website
// document.cookie="username=+name_field ; path=/";

// let user_name = document.cookie;
// let user_email = document.cookie;

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=.";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  

function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
        // try to make him take the name from the text field
    //    user = prompt("Please enter your name:","");
       user = document.getElementById("name_id").value;

       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }



//  function deleteCookie()
//  {
//     document.cookie = user + '=; Max-Age=0'
//     // username=document.cookie;
//     alert("cookie is deleted");
//  }

//  function deleteCookie(name) {
//     document.cookie = name + '=; Max-Age=0'
//     alert("cookie is deleted");
// }
function deleteCookie() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        alert("cookie is deleted");
    }
}