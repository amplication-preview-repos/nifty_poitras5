import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { PostController } from "../post.controller";
import { PostService } from "../post.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  author: "exampleAuthor",
  blogAuthor: "exampleBlogAuthor",
  blogContent: "exampleBlogContent",
  bodyContent: "exampleBodyContent",
  content: "exampleContent",
  createdAt: new Date(),
  createdTimestamp: new Date(),
  creationDate: new Date(),
  creationDateTime: new Date(),
  creationTimestamp: new Date(),
  headline: "exampleHeadline",
  id: "exampleId",
  modificationDate: new Date(),
  modificationDateTime: new Date(),
  modificationTimestamp: new Date(),
  postAuthor: "examplePostAuthor",
  postBody: "examplePostBody",
  postContent: "examplePostContent",
  postCreationDate: new Date(),
  postModificationDate: new Date(),
  postTitle: "examplePostTitle",
  postWriter: "examplePostWriter",
  title: "exampleTitle",
  updatedAt: new Date(),
  updatedTimestamp: new Date(),
  writer: "exampleWriter",
};
const CREATE_RESULT = {
  author: "exampleAuthor",
  blogAuthor: "exampleBlogAuthor",
  blogContent: "exampleBlogContent",
  bodyContent: "exampleBodyContent",
  content: "exampleContent",
  createdAt: new Date(),
  createdTimestamp: new Date(),
  creationDate: new Date(),
  creationDateTime: new Date(),
  creationTimestamp: new Date(),
  headline: "exampleHeadline",
  id: "exampleId",
  modificationDate: new Date(),
  modificationDateTime: new Date(),
  modificationTimestamp: new Date(),
  postAuthor: "examplePostAuthor",
  postBody: "examplePostBody",
  postContent: "examplePostContent",
  postCreationDate: new Date(),
  postModificationDate: new Date(),
  postTitle: "examplePostTitle",
  postWriter: "examplePostWriter",
  title: "exampleTitle",
  updatedAt: new Date(),
  updatedTimestamp: new Date(),
  writer: "exampleWriter",
};
const FIND_MANY_RESULT = [
  {
    author: "exampleAuthor",
    blogAuthor: "exampleBlogAuthor",
    blogContent: "exampleBlogContent",
    bodyContent: "exampleBodyContent",
    content: "exampleContent",
    createdAt: new Date(),
    createdTimestamp: new Date(),
    creationDate: new Date(),
    creationDateTime: new Date(),
    creationTimestamp: new Date(),
    headline: "exampleHeadline",
    id: "exampleId",
    modificationDate: new Date(),
    modificationDateTime: new Date(),
    modificationTimestamp: new Date(),
    postAuthor: "examplePostAuthor",
    postBody: "examplePostBody",
    postContent: "examplePostContent",
    postCreationDate: new Date(),
    postModificationDate: new Date(),
    postTitle: "examplePostTitle",
    postWriter: "examplePostWriter",
    title: "exampleTitle",
    updatedAt: new Date(),
    updatedTimestamp: new Date(),
    writer: "exampleWriter",
  },
];
const FIND_ONE_RESULT = {
  author: "exampleAuthor",
  blogAuthor: "exampleBlogAuthor",
  blogContent: "exampleBlogContent",
  bodyContent: "exampleBodyContent",
  content: "exampleContent",
  createdAt: new Date(),
  createdTimestamp: new Date(),
  creationDate: new Date(),
  creationDateTime: new Date(),
  creationTimestamp: new Date(),
  headline: "exampleHeadline",
  id: "exampleId",
  modificationDate: new Date(),
  modificationDateTime: new Date(),
  modificationTimestamp: new Date(),
  postAuthor: "examplePostAuthor",
  postBody: "examplePostBody",
  postContent: "examplePostContent",
  postCreationDate: new Date(),
  postModificationDate: new Date(),
  postTitle: "examplePostTitle",
  postWriter: "examplePostWriter",
  title: "exampleTitle",
  updatedAt: new Date(),
  updatedTimestamp: new Date(),
  writer: "exampleWriter",
};

const service = {
  createPost() {
    return CREATE_RESULT;
  },
  posts: () => FIND_MANY_RESULT,
  post: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Post", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PostService,
          useValue: service,
        },
      ],
      controllers: [PostController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /posts", async () => {
    await request(app.getHttpServer())
      .post("/posts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        createdTimestamp: CREATE_RESULT.createdTimestamp.toISOString(),
        creationDate: CREATE_RESULT.creationDate.toISOString(),
        creationDateTime: CREATE_RESULT.creationDateTime.toISOString(),
        creationTimestamp: CREATE_RESULT.creationTimestamp.toISOString(),
        modificationDate: CREATE_RESULT.modificationDate.toISOString(),
        modificationDateTime: CREATE_RESULT.modificationDateTime.toISOString(),
        modificationTimestamp:
          CREATE_RESULT.modificationTimestamp.toISOString(),
        postCreationDate: CREATE_RESULT.postCreationDate.toISOString(),
        postModificationDate: CREATE_RESULT.postModificationDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        updatedTimestamp: CREATE_RESULT.updatedTimestamp.toISOString(),
      });
  });

  test("GET /posts", async () => {
    await request(app.getHttpServer())
      .get("/posts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          createdTimestamp: FIND_MANY_RESULT[0].createdTimestamp.toISOString(),
          creationDate: FIND_MANY_RESULT[0].creationDate.toISOString(),
          creationDateTime: FIND_MANY_RESULT[0].creationDateTime.toISOString(),
          creationTimestamp:
            FIND_MANY_RESULT[0].creationTimestamp.toISOString(),
          modificationDate: FIND_MANY_RESULT[0].modificationDate.toISOString(),
          modificationDateTime:
            FIND_MANY_RESULT[0].modificationDateTime.toISOString(),
          modificationTimestamp:
            FIND_MANY_RESULT[0].modificationTimestamp.toISOString(),
          postCreationDate: FIND_MANY_RESULT[0].postCreationDate.toISOString(),
          postModificationDate:
            FIND_MANY_RESULT[0].postModificationDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          updatedTimestamp: FIND_MANY_RESULT[0].updatedTimestamp.toISOString(),
        },
      ]);
  });

  test("GET /posts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/posts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /posts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/posts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        createdTimestamp: FIND_ONE_RESULT.createdTimestamp.toISOString(),
        creationDate: FIND_ONE_RESULT.creationDate.toISOString(),
        creationDateTime: FIND_ONE_RESULT.creationDateTime.toISOString(),
        creationTimestamp: FIND_ONE_RESULT.creationTimestamp.toISOString(),
        modificationDate: FIND_ONE_RESULT.modificationDate.toISOString(),
        modificationDateTime:
          FIND_ONE_RESULT.modificationDateTime.toISOString(),
        modificationTimestamp:
          FIND_ONE_RESULT.modificationTimestamp.toISOString(),
        postCreationDate: FIND_ONE_RESULT.postCreationDate.toISOString(),
        postModificationDate:
          FIND_ONE_RESULT.postModificationDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        updatedTimestamp: FIND_ONE_RESULT.updatedTimestamp.toISOString(),
      });
  });

  test("POST /posts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/posts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        createdTimestamp: CREATE_RESULT.createdTimestamp.toISOString(),
        creationDate: CREATE_RESULT.creationDate.toISOString(),
        creationDateTime: CREATE_RESULT.creationDateTime.toISOString(),
        creationTimestamp: CREATE_RESULT.creationTimestamp.toISOString(),
        modificationDate: CREATE_RESULT.modificationDate.toISOString(),
        modificationDateTime: CREATE_RESULT.modificationDateTime.toISOString(),
        modificationTimestamp:
          CREATE_RESULT.modificationTimestamp.toISOString(),
        postCreationDate: CREATE_RESULT.postCreationDate.toISOString(),
        postModificationDate: CREATE_RESULT.postModificationDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        updatedTimestamp: CREATE_RESULT.updatedTimestamp.toISOString(),
      })
      .then(function () {
        agent
          .post("/posts")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
