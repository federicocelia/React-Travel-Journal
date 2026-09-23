export default function Entry() {
  return (
    <article className="entry">
      <section className="entry-photo-container">
        <img
          className="entry-photo"
          src="https://scrimba.com/links/travel-journal-japan-image-url"
          alt="winter photo of mount fuji with snow on a clear sunny day"
        />
      </section>

      <section>
        <div className="sub-section-location">
          <img src="../public/marker.png" alt="marker location icon" />
          <p className="location-map">
            JAPAN{" "}
            <a
              className="maps-link"
              href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
            >
              View on Google Maps
            </a>
          </p>
        </div>

        <h3 className="location-name">Mount Fuji</h3>
        <p className="date">12 Jan, 2021 - 24 Jan, 2021</p>
        <p className="entry-text">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </section>
    </article>
  );
}
