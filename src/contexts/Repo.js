import { createContext, useState } from "react";

export const RepoContext = createContext();

const initialData = { error: null, data: [] };

export const RepoProvider = ({ children }) => {
  const [repo, setRepo] = useState(initialData);

  const dispatchRepoEvent = (actionType, payload) => {
    switch (actionType) {
      case "SET_ACTIVITY":
        setRepo({ error: null, data: payload.activities });
        return;
      case "REMOVE_ACTIVITY":
        setRepo(initialData);
        return;
      case "SET_ERROR":
        setRepo({ error: payload.error, data: [] });
        return;
      default:
        return;
    }
  };

  return (
    <RepoContext.Provider value={{ repo, dispatchRepoEvent }}>
      {children}
    </RepoContext.Provider>
  );
};
