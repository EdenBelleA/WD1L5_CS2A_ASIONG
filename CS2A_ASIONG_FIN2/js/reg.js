//1. get user details, concatenate, save to local storage
function saveUserDetails() {
    let first_name = document.getElementById("fname").value;
    let last_name = document.getElementById("lname").value;
    let address = document.getElementById("address").value;
    let user_name = document.getElementById("uname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pword").value;

    //make sure that all blanks are filled
    //HTML Tag Input "required"
    //OR make our own remarks

    if (first_name === "" || last_name === "" || address === ""
        || user_name === "" || email === "" || password === ""
    ) {
        document.getElementById("regMessage").innerHTML = 
            "<h3 style='color:red'>Please Complete Details</h3>";
            return;
    }

    //String Concatenate ass Details
    let userDetails = first_name + " | " + last_name + " | " +
                    address + " | " + user_name + " | " +
                    email + " | " + password;


// save to localStorage (to store setItem/ to retrieve getItem)
    localStorage.setItem("userRecord", userDetails);

    document.getElementById("regMessage").innerHTML =
        "<h3 style='color:green'>Register successful! You may now log in.</h3>";

    alert(localStorage.getItem("userRecord"));

    //move to next page
    window.location.href = "login.html";
    
}