import { mockCreateUser } from '../../shared/mockData/mockCreateUser';
import { mockDatabase } from '../../shared/mockData/mockDatabase';
import supertest from "supertest";
import app from "../../app"

const api = supertest(app);
const db = mockDatabase();
const LOG_IN_ROUTE = "/api/local/login";
const SIGN_IN_ROUTE = "/api/local/signup";


beforeAll(async () => (await db).connect());
afterAll(async () => (await db).close());

describe(`${LOG_IN_ROUTE} evaluation`, () => {
    it("should return status 403 when no provided body", async () => {
      const response = await api
        .post(LOG_IN_ROUTE)
        .set("Accept", "application/json");
  
      expect(response.status).toEqual(403);
      expect(response.body).toEqual({
        message: "Password is required",
        type: "validation",
      });

    });

    it("should return status 200 when given correct body", async () => {
      await api
        .post(SIGN_IN_ROUTE)
        .send(mockCreateUser)
        .set("Content-Type", "application/json");
      
      const {email, password} = mockCreateUser;

      const response = await api
        .post(LOG_IN_ROUTE)
        .send({ email, password })
        .set("Content-Type", "application/json");
  
      expect(response.status).toEqual(200);
      expect(Object.keys(response.body)).toEqual(["token"])
    })
});


describe(`${SIGN_IN_ROUTE} evaluation`, () => {
  it("should return status 403 when no provided body", async () => {
    const response = await api
      .post(SIGN_IN_ROUTE)
      .set("Accept", "application/json");

    expect(response.status).toEqual(403);
    expect(response.body).toEqual({
      message: "Password confirmation is required",
      type: "validation",
    });
  });

  it("should return status 400 when the email exist", async () => {
    const { name, email, password ,passwordConfirmation} = mockCreateUser;
    const response = await api
      .post(SIGN_IN_ROUTE)
      .send({ name, email, password, passwordConfirmation })
      .set("Accept", "application/json");

    expect(response.status).toEqual(400);
    expect(response.body).toEqual({
      message: `error creating user with email ${email}`,
    });
  });


});