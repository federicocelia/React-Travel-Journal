export default function Entry(prop) {
  return (
    <article className="entry">
      <section className="entry-photo-container">
        <img className="entry-photo" img={prop.img} />
      </section>

      <section>
        <div className="sub-section-location">
          <img src="../public/marker.png" alt="marker location icon" />
          <p className="location-map">
            {prop.name}{" "}
            <a className="maps-link" href={prop.googleMapsLink}>
              View on Google Maps
            </a>
          </p>
        </div>

        <h3 className="location-name">{prop.name}</h3>
        <p className="date">{prop.dates}</p>
        <p className="entry-text">{prop.text}</p>
      </section>
    </article>
  );
}
