import * as Yup from "yup";

const SearchSchema = Yup.object().shape({
  owner: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  repo: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!")
});

export default SearchSchema;
