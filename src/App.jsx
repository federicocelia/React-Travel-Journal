import Header from "../components/Header.jsx";
import Entry from "../components/Entry.jsx";
import Map from "../components/Map.jsx";
import data from "../data.js";

export default function App() {
  const entry = data.map((place) => {
    return <Entry key={place.id} place={place} />;
  });

  return (
    <>
      <Header />
      <Map places={data} />
      <div className="entries-container">{entry}</div>
    </>
  );
}
