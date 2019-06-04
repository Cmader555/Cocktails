const router   = require("express").Router();
const passport = require('passport');

// ALL match with /api/....
// =====================================
// LOGIN ===============================
// =====================================
router.post('/login', function(req, res, next){ 
    passport.authenticate("local-login", function(err, user, info) {
        if (err) {
          console.log(err)
          return next(err); // will generate a 500 error
        }

        // Generate a JSON response reflecting authentication status
        if (!user) {
          console.log(info)
          return res.send({ success : false, message : info });
        }
    
        // ***********************************************************************
        // "Note that when using a custom callback, it becomes the application's
        // responsibility to establish a session (by calling req.login()) and send
        // a response."
        // Source: http://passportjs.org/docs
        // ***********************************************************************
        else{
          req.login(user, loginErr => {
            if (loginErr) {
              console.log("loginerr", loginErr)
              return next(loginErr);
            }
    
            res.cookie('user_email', user.email );
            res.cookie('authenticated', "true" );
    
            res.json(true)
          });
        }
      })(req, res, next);
});

// =====================================
// SIGNUP ==============================
// =====================================
router.post('/signup', function(req, res, next){ 
    passport.authenticate("local-signup", function(err, user, info) {
        if (err) {
          console.log(err)
          return next(err); // will generate a 500 error
        }
        // Generate a JSON response reflecting authentication status
        if (! user) {
          console.log(info)
          return res.send({ success : false, message : info });
        }
    
        // ***********************************************************************
        // "Note that when using a custom callback, it becomes the application's
        // responsibility to establish a session (by calling req.login()) and send
        // a response."
        // Source: http://passportjs.org/docs
        // ***********************************************************************
        else{
          req.login(user, loginErr => {
            if (loginErr) {
              console.log("loginerr", loginErr)
              return next(loginErr);
            }
        
    
            res.cookie('user_email', user.email );
            res.cookie('authenticated', "true" );
    
            return res.json(true);
          });
        }
      })(req, res, next);
});

// =====================================
// LOGOUT ==============================
// =====================================
router.get('/logout', function(req, res, next){ 
  console.log("logout")
    req.session.destroy(function(err) {
        if(err) return next(err); // will generate a 500 error
       
        req.logout();
        res.clearCookie("user_sid");
        res.clearCookie("user_email");
        res.clearCookie("authenticated");

        res.json(false);
      });
});

// =====================================
// VALIDATE ============================
// =====================================
router.get('/auth', function(req, res){
    var auth = req.isAuthenticated();
    
    res.json(auth);
});

module.exports = router;