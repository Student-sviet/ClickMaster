import React from 'react'
import tw from 'tailwind-styled-components'
import {cardetail} from './cardetail'
import { useEffect,useState } from 'react'

const Rider = () => {

    const [car,setCar] = useState([]);
    
    useEffect(() => {
        setCar(cardetail)
    },[])
    return (
        <Wrapper>
            <Title>Choose a ride</Title>
            <CarList>
            {cardetail.map((cardetail)=>
            <Car>
            <CarImg src={cardetail.image} />
            <CarDetails>
                <Service>
                    {cardetail.title}
                </Service>
                <Time>
                    8:03PM 
                </Time>
            </CarDetails>
            <Price>
                $52.00
            </Price>
        </Car>
            
            )
            }
                {/* {cardetail.map(car, index => (

                    <Car key={ index }>
                        
                        
                        <CarImg src= { cardetail.image} />
                        <CarDetails>
                            <Service>{cardetail.title}</Service>
                            <Price> $52.00</Price>
                        </CarDetails>
                        <Time>8:03PM drop off</Time>
                    </Car>
                      ))
        } */}
                    
            
      
            </CarList>
        </Wrapper>
    )
}

export default Rider

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`
const Title = tw.h1`
text-gray-500 text-center text-xs py-2 border-b
`
const CarList = tw.div`
overflow-y-scroll
`
const Car = tw.div`
flex p-4 items-center justify-between border-b cursor-pointer hover:bg-gray-200 
`
const CarImg = tw.img`
h-14 mr-4
`
const CarDetails = tw.div`
flex-1 
`
const Price = tw.div`
text-sm
`
const Service = tw.div`
font-medium
`
const Time = tw.div`
text-xs text-blue-500
`
