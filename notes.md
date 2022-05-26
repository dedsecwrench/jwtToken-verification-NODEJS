# JSONWEBTOKEN

    This package is used to create jsonwebtokens.
    jsonwebtoken are generated when user gets logged in.

# Command to install jsonwebtoken

    npm install jsonwebtoken

# SECRET KEY 

    => ***IMPORTANT***
    when your talking about jsonwebtoken there something known as "SECRET_KEY".
    This is that much important, when companies built their websites,
    they even pay to store or keep in some cloud area.

    If one person whose login in, one token will be created.

    If you wanna keep your application simple then you can keep this inside your project also.
    But if you're building any client based project,
    where they can't afford, so in that case they will be storing the secret keys inside the cloud.

    when you create a secret key there should be proper naming convention.
    that they should be in a uppercase only.
    because this is very important stuff if this is leaked,
    then your whole application is a gone case.
    then your not securing any person's data in that application.

***What exactly is a secret key ?***

    It is a common key usIng which you'll create the tokens.
    from one end you are taking the password.
    users credentials and everything and you're not just simply taking that users password
    because now we are not in that hashing zone

    NOTE => TOKEN CAN BE DECCODED BUT THE PASSWORD CAN'T BE RE-HASHED OR UN-HASHED.

    ENCODING OF TOKEN MEANS YOU ARE CREATING THE TOKEN.
    YOU CAN DECODE THE TOKEN ONCE AGAIN
    YOU'LL GET THE CORRECT OUTPUT.

    SECRET_KEY IS USED TO CREATE THE TOKEN

    now using this token if again you want to find the user's information,
    so you can decode this token using SECRET_KEY.

***creation of token***

    whatever variable you used for importing jsonwebtoken package use that.

    const jwt = require("jsonwebtoken");
    const token = jwt.sign();

    .sign() is the function used to create the token.

    => IMPORTANT
        inside .sign() never provide your password or request password.
        inside .sign() it's not only about the password,
        It's about user complete imformation and his credentials.

    jwt.sign() will take two parameters
    one is request.query in which everything comes like user's credentials.
    another parameter is your SECRET_KEY.

***verification of token***

    for verification of token check server.js file! 