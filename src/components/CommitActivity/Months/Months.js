import { fromUnixTime, addMonths, format } from "date-fns";

import { StyledMonthWrapper } from "./Months.styles";

export const Months = ({ firstWeek }) => {
  const date = fromUnixTime(firstWeek);
  const months = [];

  for (let i = 0; i < 12; i++) {
    const month = format(addMonths(date, i), "MMM");
    months.push(<span key={month}>{month}</span>);
  }

  return <StyledMonthWrapper>{months}</StyledMonthWrapper>;
};
