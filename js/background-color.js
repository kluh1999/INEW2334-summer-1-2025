//Cookie to change color
document.cookie = "userPrefColor=pink; expires=Mon, 30 Jun 2025 12:30:00 UTC; path=/";

document.cookie = "lName=Pope; expires=Mon, 30 Jun 2025 12:30:00 UTC; path=/";

console.log(document.cookie);

function getCookieByName(name){
    const cookies = document.cookie.split(";");
    for(let cookie of cookie) {
        cookie=cookie.trim();
        if(cookie.startsWith(name+"=")) {
            return cookie.substring(name.length+1);
        }
    }
    return null;
}

// check cookie
var cookieColorExist = getCookieByName("userPrefColor");
document.body.style.backgroundColor='purple';