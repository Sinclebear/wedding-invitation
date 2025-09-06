import React, { useEffect, useRef } from 'react';
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps';
import pinIcon from '../assets/location-pin.png';

const MapComponent = () => {
  const navermaps = useNavermaps();
  const mapRef = useRef(null);

  useEffect(() => {
    return () => {
      // 컴포넌트 언마운트 시 지도 정리
      if (mapRef.current) {
        try {
          mapRef.current.destroy();
        } catch (error) {
          console.warn('Map cleanup error:', error);
        }
      }
    };
  }, []);

  if (!navermaps) {
    return <div style={{width: '100%', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>지도를 불러오는 중...</div>;
  }

  return (
    <MapDiv
      style={{
        width: '100%',
        height: '350px'
      }}
    >
      <NaverMap 
        ref={mapRef}
        defaultCenter={new navermaps.LatLng(37.50177, 127.0316)}
        defaultZoom={16}
      >
        <Marker 
          position={new navermaps.LatLng(37.50177, 127.0316)} 
          icon={{
            url: pinIcon,
            size: new navermaps.Size(64, 64),
          }}
        />
      </NaverMap>
    </MapDiv>
  );
};

export default MapComponent;
