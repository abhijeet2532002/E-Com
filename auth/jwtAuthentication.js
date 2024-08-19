import passport from "passport";
import { Strategy as JwtStrategy } from 'passport-jwt';
import { ExtractJwt as ExtractJwt } from 'passport-jwt';
import dotenv from 'dotenv';
import User from "../model/User/User.js";

dotenv.config();

let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SCRETE_KEY

}

passport.use(new JwtStrategy(opts, async (payload, done) => {
    try {
        const user = await User.findById(payload._id);
        if (user) {
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    } catch (err) {
        console.log("there is Error while",err);
        
    }
}))


export default passport;

