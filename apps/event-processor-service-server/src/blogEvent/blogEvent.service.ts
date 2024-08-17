import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BlogEventServiceBase } from "./base/blogEvent.service.base";

@Injectable()
export class BlogEventService extends BlogEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
