import { fromUnixTime, addDays, format } from "date-fns";

import { StyledDay } from "./Activity.styles";

export const Activity = ({ commitCount, week, day }) => {
  const date = fromUnixTime(week);
  const formatedDate = format(addDays(date, day), "MMM d, yyyy");

  return (
    <StyledDay
      title={`${commitCount} commits on ${formatedDate}`}
      commitCount={commitCount}
    />
  );
};
