import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import marcadorIcono from './media/ubi.png';
import L from 'leaflet';
const Mapa = () => {
  const manzanaresCoords = [39.0000, -3.3808]; // Coordenadas de Manzanares, Ciudad Real

  return (
      <MapContainer
        center={manzanaresCoords}
        zoom={15}
        style={{
          height: '350px',
          width: '60%',
          margin: '70px 10px 70px 100px',
          boxShadow: '3px 3px #1031424d, 6px 6px #10314233, 9px 9px #1031421a, 12px 12px #1031420d',
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={manzanaresCoords} icon={L.icon({ iconUrl: marcadorIcono, iconSize: [33, 35], iconAnchor: [12, 41] })}>
          <Popup>
            Manzanares, Ciudad Real
          </Popup>
        </Marker>
      </MapContainer>

  );
};

export default Mapa;