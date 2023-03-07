import { Controller, Post } from "@nestjs/common";
import { AuthProvider } from "./auth.provider";
@Controller("auth")
export class AuthController {
    constructor(private authProvider: AuthProvider) {


        
    }
    @Post("signup")
    signup() {
    return 'signup';
    }


    @Post("signin")
    signin() {
        return "signin";
    }
 }