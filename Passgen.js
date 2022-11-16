var password = document.getElementById("password");
function generatepassword(){
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&:;<>{}[]*()";
    var plength = 20;
    var password = "";
    for(var i=0;i<plength;i++){
        var randomnumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomnumber, randomnumber + 1);
    }
    document.getElementById("password").value = password;
} 
function copytext(){
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 999);
    document.execCommand("copy");
}
/* Code By Nakul Mishra */
