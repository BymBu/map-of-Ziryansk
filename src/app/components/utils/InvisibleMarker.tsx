import L from "leaflet";


export const InvisibleMarker = L.divIcon({
  className: "invisible-marker",
  iconSize: [150, 150], // Зона клика
  iconAnchor: [40, 40],
});