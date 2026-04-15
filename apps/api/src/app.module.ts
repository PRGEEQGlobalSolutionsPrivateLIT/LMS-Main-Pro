import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./modules/auth/auth.module";
import { NotificationsModule } from "./modules/notifications/notifications.module";
import { OtpVerificationEntity } from "./modules/auth/entities/otp-verification.entity";
import { InstitutionAdminEntity } from "./modules/auth/entities/institution-admin.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.POSTGRES_HOST || "localhost",
      port: Number(process.env.POSTGRES_PORT || 5432),
      username: process.env.POSTGRES_USER || "postgres",
      password: process.env.POSTGRES_PASSWORD || "",
      database: process.env.POSTGRES_DB || "signup_db",
      entities: [OtpVerificationEntity, InstitutionAdminEntity],
      synchronize: true,
    }),
    AuthModule,
    NotificationsModule,
  ],
})
export class AppModule {}