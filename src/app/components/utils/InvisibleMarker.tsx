import L from "leaflet";


export const InvisibleMarker = L.divIcon({
  className: "invisible-marker",
  iconSize: [100, 100], // Зона клика
  iconAnchor: [20, 20],
});