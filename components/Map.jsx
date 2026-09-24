import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map({ places }) {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      scrollWheelZoom={true}
      style={{
        height: "400px",
        width: "100%",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places.map((place) => (
        <Marker
          key={place.id}
          position={[place.coordinates.lat, place.coordinates.lng]}
        >
          <Popup>
            <h3>{place.title}</h3>
            <p>{place.country}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
