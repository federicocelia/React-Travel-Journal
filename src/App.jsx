import Header from "../components/Header.jsx";
import Entry from "../components/Entry.jsx";
import data from "../data.js";

export default function App() {
  const entry = data.map((place) => {
    return (
      <Entry
        key={place.id}
        img={place.img}
        title={place.title}
        country={place.country}
        googleMapsLink={place.googleMapsLink}
        dates={place.dates}
        text={place.text}
      />
    );
  });

  return (
    <>
      <Header />
      {entry}
    </>
  );
}
