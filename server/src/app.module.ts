import { Module } from "@nestjs/common";
import { AppGateWay } from "./app.gateway";

@Module({providers: [AppGateWay]})
export class AppModule{}