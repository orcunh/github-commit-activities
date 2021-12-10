import React, { useContext, useCallback } from "react";
import { useFormik } from "formik";

import { Input, Button } from "../";
import { RepoContext } from "../../contexts/Repo";
import SearchSchema from "./Search.schema";
import { StyledForm, StyledButtonWrapper } from "./Search.styles";

const initialValues = {
  owner: "vercel",
  repo: "next.js"
};

export const Search = () => {
  const { dispatchRepoEvent } = useContext(RepoContext);

  const handleOnSubmit = useCallback(
    async ({ owner, repo }) => {
      const res = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/stats/commit_activity`
      );

      switch (res.status) {
        case 200:
          const activities = await res.json();
          dispatchRepoEvent("SET_ACTIVITY", { activities });
          break;

        case 404:
          dispatchRepoEvent("SET_ERROR", { error: "Owner or Repo not found!" });
          break;

        default:
          dispatchRepoEvent("SET_ERROR", { error: "Someting went wrong!" });
          break;
      }
    },
    [dispatchRepoEvent]
  );

  const { handleSubmit, getFieldProps, touched, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: SearchSchema,
    onSubmit: handleOnSubmit
  });

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <Input
          label="Github Owner"
          placeholder="Owner"
          error={touched.owner && errors.owner}
          {...getFieldProps("owner")}
        />
      </div>
      <div>
        <Input
          label="Github Repo"
          placeholder="Repo"
          error={touched.repo && errors.repo}
          {...getFieldProps("repo")}
        />
      </div>
      <StyledButtonWrapper>
        <Button type="submit">Collect Data</Button>
      </StyledButtonWrapper>
    </StyledForm>
  );
};
