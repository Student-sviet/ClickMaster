import { useEffect } from 'react'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import Map from '../components/Map'
import Link from 'next/link'
import HomepageMap from './HomepageMap'
import logo from './logo.png'
import When from './When'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import CameraIcon from '@mui/icons-material/Camera';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Sidenav from './Sidenav'
const inter = Inter({ subsets: ['latin'] })
const styleForButton = {
  height: '50px',
  width: '50px'
}



export default function Home() {


  // const maps = new mapboxgl.Map({
  //   container: 'map',
  //   style: 'mapbox://styles/mapbox/streets-v11',
  //   center: ,
  //   zoom:  ,
  // });
  

  return (
   
    <Wrapper>
     
      {/* <Map id="map" /> */}
      <MapWrapper>
      <HomepageMap id ="map"/>
      <Sidenav />
      
      <Header>
        
        <UberLogo src= "https://theuniques.in//images/clickmasterslogo.png" />
        <Profile>
          <Name>Parveen</Name>
          <UserImage
          src="https://yt3.ggpht.com/D4tiMfc_Py3XhTpXrnsdn3QyAdK-dxgLMYjqKA_9esk_3CtLMfUSI5ASC7DiGBXQlEDIx6wyhIw=s88-c-k-c0x00ffffff-no-rj-mo"
          />
        </Profile>
       
      </Header>
      <ActionButtons>
      <ActionButtonWrapper>
      <Link href ="/Search">
      <ActionButton>
       <AddAPhotoIcon  style={styleForButton} />
       Hire a Photographer</ActionButton>
      </Link>
      </ActionButtonWrapper>  
      <ActionButton>
      
      <CameraIcon style={styleForButton} />
      Become a Photographer</ActionButton>
      <Help>
      <Link href ="/">
      <ActionButton>
        
      <SupportAgentIcon style={styleForButton}/>
      Help</ActionButton></Link>
      </Help>
      </ActionButtons>
      </MapWrapper>
    {/* 
      
      
      
    </ActionItems>  */}
    
      {/* <InputButtons>Where To?</InputButtons> */}
    
  
   </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col h-screen 
 `


const ActionItems = tw.div`
h-96

`
const Header = tw.div `
flex justify-between items-center
`
const UberLogo = tw.img`
h-20
`
const Profile = tw.div`
flex items-center
`
const UserImage =tw.img`
h-12 w-12 rounded-full border-gray-200 p-px
`
const Name = tw.div`
mr-4 w-20`
const ActionButtons = tw.div `
flex mt-5
`
const ActionButton = tw.div `
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl` 
// const ActionButtonImage =tw.img`
// h-3/5
// `
const InputButtons = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex item-center mt-8
`
const ActionButtonWrapper = tw.div`
flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl`

const Help = tw.div`
flex-1 m-1
h-80 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl`

const MapWrapper = tw.div`
flex-1 h-screen overflow-hidden`