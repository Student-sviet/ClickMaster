import React from 'react'
import { useEffect,useState } from 'react'
import ReactDOM from "react-dom";
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'
import {PhotographerDetail} from '../Data/PhotographerDetail'
mapboxgl.accessToken = 'pk.eyJ1IjoicGFydmVlbjIzIiwiYSI6ImNsZ254a29rMDAwaGgzaW1yaWJwMWJ6Mm4ifQ.3VxAjPvVhzv24X-pHvCG_g';



const Map= (props)=> {

    const [Loc,setLoc] = useState([]);
 
    useEffect(() => {
        setLoc(PhotographerDetail)
    },[])
  
   
    
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            //   style: 'mapbox://styles/mapbox/streets-v11',
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [78.6254, 23.4039],
            zoom: 3,
            
        }
        )
        
      
        if (props.pickup) {
            addToMap(map, props.pickup)
        }
        PhotographerDetail.map((PhotographerDetail)=>
        PhotographerMap(map,PhotographerDetail.location)
        )
        
       
       
    }, [props.pickup,PhotographerDetail.location])


 
    // const [Loc,setLoc] = useState([]);
    // useEffect(() => {
    //     setLoc(Photographerdetail)

    // },[])
    // const Loca= Photographerdetail.Location
    const [map, setMap] = useState(null)
    const MyLoc =(map)=>{
        map.addControl(
            new mapboxgl.GeolocateControl({
            positionOptions: {
            enableHighAccuracy: true
            },
            // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
// Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: true
    },
    ),
    );
    }
  

    const addToMap=(map,coordinates)=>{
        const marker1 = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);
        MyLoc(map)

    }
    const PhotographerMap=(map,coordinates)=>{
        const marker2 = new mapboxgl.Marker(
            {color: 'black'}

        )
        .setLngLat(coordinates)
        .addTo(map);

    }
    
   

  
    return (
        <Wrapper id='map' >
        </Wrapper>
    )
}

export default Map
const Wrapper = tw.div`
flex-1 
`



