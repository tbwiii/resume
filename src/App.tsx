import "./App.css";
import { useEffect, useState } from "react";
import VersionSwitcher, {
  versions,
  type VersionKey,
} from "@components/version-switcher";
import Refined from "./versions/Refined";
import Editorial from "./versions/Editorial";

function initialVersion(): VersionKey {
  const hash = window.location.hash.slice(1);
  return versions.some((v) => v.key === hash) ? (hash as VersionKey) : "opal";
}

function App() {
  const [version, setVersion] = useState<VersionKey>(initialVersion);

  useEffect(() => {
    window.history.replaceState(null, "", `#${version}`);
  }, [version]);

  return (
    <>
      <VersionSwitcher value={version} onChange={setVersion} />
      {version === "editorial" ? (
        <Editorial />
      ) : (
        <Refined palette={version} />
      )}
    </>
  );
}

export default App;
