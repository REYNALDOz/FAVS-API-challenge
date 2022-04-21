import { object, string } from "yup";
export const editFavoriteValidateSchema = object({
  body: object().shape(
    {
      title: string().when("description", {
        is: (description: string) => !description || description.length === 0,
        then: string().required("Title or description is required").when(
            "link", {
                is: (link:string) => !link || link.length ===0,
                then: string().required("Title or link is required")
            }
        ),
      }),
      description: string().when("title", {
        is: (title: string) => !title || title.length === 0,
        then: string().required(
          "Title or description At least one of the fields is required"
        ).when(
            "link", {
                is: (link:string) => !link || link.length ===0,
                then: string().required("Title or link is required")
            }
        ),
      }),

      link: string().when("title", {
        is: (title: string) => !title || title.length === 0,
        then: string().required(
          "link or title At least one of the fields is required"
        ).when("description", {
        is: (description: string) => !description || description.length === 0,
        then: string().required("Title or description is required")
        }
        )
      }),
    },
    [["title", "description"]]
  ),
  params: object({
    id: string().required("favorite id is required"),
  }),
});
