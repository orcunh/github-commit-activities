import React, { useContext } from "react";

import { RepoContext } from "../../contexts/Repo";
import { Activity } from "./Activity";
import { Days } from "./Days";
import { Months } from "./Months";

import {
  StyledWrapper,
  StyledTable,
  StyledWeek,
  StyledError
} from "./CommitActivity.styles";

export const CommitActivity = () => {
  const { repo } = useContext(RepoContext);

  if (repo.error) return <StyledError>{repo.error}</StyledError>;

  if (!repo.data.length) return null;

  return (
    <StyledWrapper>
      <h3>Yearly Commit Activities</h3>
      <Months firstWeek={repo.data[0].week} />
      <StyledTable>
        <Days />
        {repo.data.map(({ week, days }) => (
          <StyledWeek key={week}>
            {days.map((commitCount, index) => (
              <Activity
                key={`${week}-${index}`}
                week={week}
                day={index}
                commitCount={commitCount}
              />
            ))}
          </StyledWeek>
        ))}
      </StyledTable>
    </StyledWrapper>
  );
};
