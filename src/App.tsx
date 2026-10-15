import "./App.css";
import { useEffect, useState } from "react";
import VersionSwitcher, {
  versions,
  type VersionKey,
} from "@components/version-switcher";
import Refined from "./versions/Refined";
import Spec from "./versions/Spec";
import Editorial from "./versions/Editorial";
import Timeline from "./versions/Timeline";

const pages: Record<VersionKey, () => JSX.Element> = {
  refined: Refined,
  spec: Spec,
  editorial: Editorial,
  timeline: Timeline,
};

function initialVersion(): VersionKey {
  const hash = window.location.hash.slice(1);
  return versions.some((v) => v.key === hash) ? (hash as VersionKey) : "refined";
}

function App() {
  const [version, setVersion] = useState<VersionKey>(initialVersion);

  useEffect(() => {
    window.history.replaceState(null, "", `#${version}`);
  }, [version]);

  const Page = pages[version];
  return (
    <>
      <VersionSwitcher value={version} onChange={setVersion} />
      <Page />
    </>
  );
}

export default App;
