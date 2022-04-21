import bycript from "bcrypt";

export const encryptPassword = async (password: string) => {
      //console.log(`HOLAAAAAAAAAAAAAAPASWORD${password}`);
  const salt = await bycript.genSalt(10);
  const hashPassword = await bycript.hash(password, salt);
  return hashPassword;
};

export const validatePassword = async (
  password: string,
  encryptedPassword: string
): Promise<boolean> => {
  return await bycript.compare(password, encryptedPassword);
};
