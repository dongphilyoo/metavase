import React from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => (
  <div>
    <span
      className="fa fa-map-marker"
      style={{ fontSize: '4rem', color: '#0d6efd' }}
    />
    <span className="fw-bold fs-6">{text}</span>
  </div>
)

const Map = () => {
  const defaultProps = {
    center: {
      lat: 64.15047837247405,
      lng: -21.93298012688392,
    },
    zoom: 14,
  }
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDiGBGtkjkLY9f0PzHu90vdkUzlqlhiw3M' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={64.15047837247405}
          lng={-21.93298012688392}
          text={'Metavase'}
        />
      </GoogleMapReact>
    </div>
  )
}

export default Map
