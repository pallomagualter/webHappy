import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../images/map-marker.svg';

import './styles.css';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,

    iconSize: [58, 68], //largura, altura
    iconAnchor: [29, 68], //para ele entender que o ponto central do icon é a pontinha inferior, vamos passar a position (metade da Largura ou seja 29 e a altura para saber que é finalzinho)
    popupAnchor: [170, 2],
})

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha uma casa de acolhimento no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Teresina</strong>
                    <span>Piauí</span>
                </footer>
            </aside>

            <Map
                center={[-5.0819027,-42.7858102]} //latitude, longitude
                zoom={17}
                style={{ width: '100%', height: '100%' }}
            >
             
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {/* 
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                 */}

                <Marker
                    icon={mapIcon}
                    position={[-5.0806958,-42.7863853]}
                > 
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup" >
                        Happy Home!
                        <Link to="/orphanages/7">
                            <FiArrowRight size={20} color="#fff" />
                        </Link>
                    </Popup>   
                </Marker>
            </Map>

            <Link to="/orphanages/create" className="create-orphanage" >
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;