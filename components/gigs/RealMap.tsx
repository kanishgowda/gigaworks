"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Gig } from "@/lib/types";
import { Button } from "@/components/ui/Button";

// Leaflet Icon Fix for Next.js
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom Student Icon (Graduation Cap)
const studentIcon = L.divIcon({
    className: 'custom-student-marker',
    html: `<div style="
    background-color: #7c3aed; 
    width: 44px; 
    height: 44px; 
    border-radius: 50%; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    border: 3px solid white; 
    box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.2), 0 10px 15px -3px rgba(0, 0, 0, 0.5);
    color: white;
  ">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 0 6-1 6-5.5"/><path d="M6 19c0 1.1 2.24 2 5 2s5-.9 5-2"/></svg>
  </div>`,
    iconSize: [44, 44],
    iconAnchor: [22, 22],
    popupAnchor: [0, -22]
});

interface RealMapProps {
    gigs: Gig[];
}

function LocationMarker() {
    const [position, setPosition] = useState<L.LatLng | null>(null);
    const map = useMap();

    useEffect(() => {
        map.locate().on("locationfound", function (e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, 13);
        });
    }, [map]);

    return position === null ? null : (
        <Marker position={position} icon={studentIcon}>
            <Popup>You are here (Student)</Popup>
        </Marker>
    );
}

// Helper to fuzz locations around a center
const getRandomPos = (lat: number, lng: number) => {
    const r = 0.02; // ~2km radius
    return [
        lat + (Math.random() - 0.5) * r,
        lng + (Math.random() - 0.5) * r
    ] as [number, number];
};

export default function RealMap({ gigs }: RealMapProps) {
    const [userLoc, setUserLoc] = useState<[number, number] | null>(null);
    const [status, setStatus] = useState("Locating...");

    useEffect(() => {
        if (!navigator.geolocation) {
            setStatus("Geolocation is not supported by your browser");
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus("Found location");
                setUserLoc([position.coords.latitude, position.coords.longitude]);
            }, () => {
                setStatus("Unable to retrieve your location. Showing default.");
                setUserLoc([28.6139, 77.2090]); // Default to New Delhi
            });
        }
    }, []);

    if (!userLoc) return (
        <div className="w-full h-[600px] bg-zinc-900 border border-white/5 rounded-2xl flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-zinc-500">{status}</p>
            </div>
        </div>
    );

    return (
        <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-white/5 relative z-0">
            <MapContainer
                center={userLoc}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />

                <LocationMarker />

                {gigs.map((gig) => {
                    const pos = getRandomPos(userLoc[0], userLoc[1]);
                    return (
                        <Marker key={gig.id} position={pos}>
                            <Popup className="custom-popup">
                                <div className="p-1 min-w-[150px]">
                                    <h3 className="font-bold text-sm mb-1">{gig.title}</h3>
                                    <p className="text-xs text-gray-600 mb-2 font-bold">₹{gig.price}</p>
                                    <Button size="sm" className="h-6 text-[10px] w-full">View Details</Button>
                                </div>
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>
        </div>
    );
}
