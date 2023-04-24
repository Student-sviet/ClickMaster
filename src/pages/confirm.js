import React from 'react'
import tw from 'tailwind-styled-components'
import { useEffect,useState } from 'react'
import Map from'../components/Map'
import { useRouter } from 'next/router'
import Rider from './Rider'
const Confirm = () => {
    const router = useRouter()

    const {pick} = router.query



    const [pickup, setPickup] = useState()
     
    const getPickupCoordinates = (pick) => {
        const pickup = pick;
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
        new URLSearchParams({
            access_token: "pk.eyJ1IjoicGFydmVlbjIzIiwiYSI6ImNsZ254a29rMDAwaGgzaW1yaWJwMWJ6Mm4ifQ.3VxAjPvVhzv24X-pHvCG_g"
            // limit: 1
        })
        )
        .then(response => response.json())
        .then(data => {
            // console.log(data.features[0].center)

            const coordinates = data.features[0].center
            setPickup(coordinates)
            
        })


        }
        // const getDropoffCoordinates = (drop) => {
        //     const dropoff = drop;
        //     fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+
        //     new URLSearchParams({
        //         access_token: "pk.eyJ1IjoicGFydmVlbjIzIiwiYSI6ImNsZ254a29rMDAwaGgzaW1yaWJwMWJ6Mm4ifQ.3VxAjPvVhzv24X-pHvCG_g"
        //         // limit: 1
        //     })
        //     )
        //     .then(response => response.json())
        //     .then(data => {
        //         // console.log(data.features[0].center)
    
        //         const coordinates = data.features[0].center
        //         setDropoff(coordinates)
        //     })
    
        // }
    useEffect(() => {
        getPickupCoordinates(pick);
        // getDropoffCoordinates(drop);
    }, [pick])

    return(
        <Wrapper>
       
        <Map
            pickup={pickup}
           
        />
            <RideContainer>
                <Rider/>

               

                
                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm Ride
                    </ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const RideContainer = tw.div`
fex-1 flex  flex-col h-1/2
 `
const Wrapper = tw.div`
flex   flex-col  h-screen
`

const ConfirmButton = tw.div`
bg-black text-white text-center my-4 mx-4 py-4 rounded-lg text-xl
`
const ConfirmButtonContainer = tw.div`
border-t-2
`

