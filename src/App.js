import { RepoProvider } from "./contexts/Repo";
import { Search, CommitActivity } from "./components";

export default function App() {
  return (
    <RepoProvider>
      <Search />
      <CommitActivity />
    </RepoProvider>
  );
}
