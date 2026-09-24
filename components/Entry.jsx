export default function Entry(prop) {
  return (
    <article className="entry">
      <section className="entry-photo-container">
        <img
          className="entry-photo"
          src={prop.place.img.src}
          alt={prop.place.img.alt}
        />
      </section>

      <section>
        <div className="sub-section-location">
          <img src="../public/marker.png" alt="marker location icon" />
          <p className="location-map">
            {prop.place.country}{" "}
            <a className="maps-link" href={prop.place.googleMapsLink}>
              View on Google Maps
            </a>
          </p>
        </div>

        <h3 className="location-name">{prop.place.title}</h3>
        <p className="date">{prop.place.dates}</p>
        <p className="entry-text">{prop.place.text}</p>
      </section>
    </article>
  );
}
