import { Module } from "@nestjs/common";
import { BlogEventModuleBase } from "./base/blogEvent.module.base";
import { BlogEventService } from "./blogEvent.service";
import { BlogEventController } from "./blogEvent.controller";
import { BlogEventResolver } from "./blogEvent.resolver";

@Module({
  imports: [BlogEventModuleBase],
  controllers: [BlogEventController],
  providers: [BlogEventService, BlogEventResolver],
  exports: [BlogEventService],
})
export class BlogEventModule {}
