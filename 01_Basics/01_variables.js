const accountId = "12345"; // Const variables cannot be reassigned
let accountEmail = "sachin@google.com";
let accountPassword = "112233";
let accountCity = "kannauj"; // Declaring accountCity properly

// accountId = "111223124"; // This will throw an error since accountId is const
accountEmail = "sk@sk.com"; // Allowed since accountEmail is let
accountPassword = "11111111"; // Allowed since accountPassword is let
accountCity = "noida"; // Allowed since accountCity is let

console.table([accountId, accountEmail, accountPassword, accountCity]);
