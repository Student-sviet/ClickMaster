import React from 'react'
import { useEffect } from 'react'
import ReactDOM from "react-dom";
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'



mapboxgl.accessToken = 'pk.eyJ1IjoicGFydmVlbjIzIiwiYSI6ImNsZ254a29rMDAwaGgzaW1yaWJwMWJ6Mm4ifQ.3VxAjPvVhzv24X-pHvCG_g';

function HomepageMap() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
  
      //   style: 'mapbox://styles/mapbox/streets-v11',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [78.6254, 23.4039],
      zoom: 3,
    })
  }, [])
  return (
    
  
      <Wrapper id='map'>

      </Wrapper>
 
  )
}

export default HomepageMap
const Wrapper = tw.div`
flex-1 h-1/2
`