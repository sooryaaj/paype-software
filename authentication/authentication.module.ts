import { Module } from "@nestjs/common";
import { AuthenticationController } from "./authentication.controller";
import { AuthenticationService } from "./authentication.service";
import { UserModule } from "./User/user.module";
import {JwtModule} from "@nestjs/jwt";
import { JwtGuard } from "src/authentication/guards/jwt.guards";
import { JwtStrategy } from "src/authentication/guards/jwt.strategy";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
    imports:[
        UserModule,
        ConfigModule,
        JwtModule.registerAsync({
            imports:[ConfigModule],
            inject:[ConfigService],
            useFactory: async (configService:ConfigService)=>({
                secret: configService.get('JWT_SECRET'),
                signOptions: {
                    expiresIn: `${configService.get('JWT_EXPIRATION_TIME')}s`,
                }
            })
        })
    ],
    controllers:[AuthenticationController],
    providers:[AuthenticationService, JwtGuard, JwtStrategy]
})
export class AuthenticationModule{}













































































// DEVELOPMENT.....


// imports:[UserModule, JwtModule.registerAsync({
    //     useFactory: () => ({
    //         secret: "secret",
    //         signOptions: {expiresIn: '36s'}
    //     })
    // })],