import { mockCreateFavorite } from "../../shared/mockData/mockCreateFavorite";
import { mockFavorite } from "../../shared/mockData/mockFavorite";
import { mockDatabase } from "../../shared/mockData/mockDatabase";
import supertest from "supertest";
import app from "../../app";
import { mockCreateUser } from "../../shared/mockData/mockCreateUser";

const api = supertest(app);
const db = mockDatabase();
const LOG_IN_ROUTE = "/api/local/login";
const SIGN_IN_ROUTE = "/api/local/signup";
const CREATE_FAV_ROUTE = "/api/favs";

let Token = "";

beforeAll(async () => {
  (await db).connect();
  const { email, password } = mockCreateUser;

  await api
    .post(SIGN_IN_ROUTE)    
    .send(mockCreateUser)
    .set("Accept", "application/json");

  const response = await api
    .post(LOG_IN_ROUTE)
    .send({ email, password })
    .set("Accept", "application/json");

  Token = response.body.token;

  await api
    .post(CREATE_FAV_ROUTE)
    .send(mockFavorite)
    .set("Accept", "application/json")
    .set("Authorization", `Bearer ${Token}`);

  await api
    .post(CREATE_FAV_ROUTE)
    .send(mockFavorite)
    .set("Accept", "application/json")
    .set("Authorization", `Bearer ${Token}`);
});

afterAll(async () => (await db).close());

describe(`${CREATE_FAV_ROUTE} evaluation`, () => {
  it("should return status 401 when no token provided", async () => {
    const response = await api
      .get(CREATE_FAV_ROUTE)
      .set("Accept", "application/json");

    expect(response.status).toEqual(401);
    expect(response.body).toEqual({
      message: "No token provided",
    });
  });
});
