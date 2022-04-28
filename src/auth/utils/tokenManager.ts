import jwt from "jsonwebtoken";

export const createAuthToken = (payload: {}): string => {
  return jwt.sign(payload, `${process.env.JWT_AUTH_SECRET}`, {
    expiresIn: "1w",
  });
};


export const validateToken = (token: string) => {
  token=token.split(' ')[1]
  console.log(token)
  return <jwt.UserIDJwtPayload>(
    jwt.verify(token, `${process.env.JWT_AUTH_SECRET}`)
  );
};