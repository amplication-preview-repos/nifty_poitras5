import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BlogEventService } from "./blogEvent.service";
import { BlogEventControllerBase } from "./base/blogEvent.controller.base";

@swagger.ApiTags("blogEvents")
@common.Controller("blogEvents")
export class BlogEventController extends BlogEventControllerBase {
  constructor(protected readonly service: BlogEventService) {
    super(service);
  }
}
