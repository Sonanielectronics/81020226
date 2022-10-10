const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
	new GoogleStrategy(
		{
			clientID: "754978109708-evbdrpbctisq8ndb4uul8lh0jhrhs72u.apps.googleusercontent.com",
			clientSecret: "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",
			callbackURL: "/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
