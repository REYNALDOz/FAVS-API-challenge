import * as yup from "yup";

export const createFavoriteSchema = yup.object({
  body: yup.object({
    title: yup
      .string()
      .min(5, "title must be at least 5 characters")
      .max(40, "title must be at max 40 characters")
      .required("title is required"),
    description: yup
      .string()
      .min(5, "title must be at least 5 characters")
      .max(200, "title must be at max 40 characters")
      .required("description is required"),
    link: yup
      .string()
      .required("link is required"),
  }),
});
/* export const editProjectSchema = yup.object({
  body: yup.object({
    title: yup
      .string()
      .min(5, "title must be at least 5 characters")
      .max(40, "title must be at max 40 characters")
      .required("title is required"),
  }),
  params: yup.object({}),
});
 */