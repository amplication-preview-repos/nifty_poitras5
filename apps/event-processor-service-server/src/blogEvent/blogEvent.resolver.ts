import * as graphql from "@nestjs/graphql";
import { BlogEventResolverBase } from "./base/blogEvent.resolver.base";
import { BlogEvent } from "./base/BlogEvent";
import { BlogEventService } from "./blogEvent.service";

@graphql.Resolver(() => BlogEvent)
export class BlogEventResolver extends BlogEventResolverBase {
  constructor(protected readonly service: BlogEventService) {
    super(service);
  }
}
