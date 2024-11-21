const passport = require("passport");
const { Strategy } = require("passport-local");
const User = require("../models/User");
const bcryptjs = require("bcryptjs");

passport.serializeUser((user, done) => {
  console.log(`Inside the serialize user ${user} `);
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  console.log(`Inside the Deserialize user ${id} `);
  try {
    const findUser = await User.findById(id).lean();
    if (!findUser) throw new Error("User not found!");
    done(null, findUser);
  } catch (error) {
    done(error, null);
  }
});

passport.use(
  new Strategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
      // console.log(`email: ${email}, password: ${password}`);
      try {
        const findUSer = await User.findOne({ email });
        if (!findUSer) throw new Error("User not found!");
        if (!findUSer || !(await bcryptjs.compare(password, findUSer.password)))
          throw new Error("Invalid password");
        done(null, findUSer);
      } catch (error) {
        done(err, null);
      }
    }
  )
);

module.export = passport;
