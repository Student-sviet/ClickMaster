import React from 'react'
import tw from "tailwind-styled-components"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Link from 'next/link'
import mapboxgl from '!mapbox-gl'
import { useState,useReducer } from 'react'
import Calendar from 'react-calendar'
import '../styles/Home.module.css'
import {DateRangeInput, DateSingleInput, Datepicker} from '@datepicker-react/styled'
const initialState = {
  startDate: null,
  endDate: null,
  focusedInput: null,
}

function reducer(state, action) {
  switch (action.type) {
    case 'focusChange':
      return {...state, focusedInput: action.payload}
    case 'dateChange':
      return action.payload
    default:
      throw new Error()
  }
}

const Search = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [pick, setpick] = useState("");
    const [value, setValue] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    // const [drop, setdrop] =useState("");
    console.log(pick)
    return (
        <Wrapper>

            <ButtnContainer>
                <Link href="/">
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </Link>
            </ButtnContainer>
            <InputContainer>
                <FromToIcons>
                    <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
                    <Line src="https://static.thenounproject.com/png/1729054-200.png" />
                    <Square src="https://cdn.icon-icons.com/icons2/3401/PNG/512/rounded_square_icon_215274.png" />
                </FromToIcons>
                <InputBoxes>
                    {/* <AddressAutofill accessToken={'pk.eyJ1IjoicGFydmVlbjIzIiwiYSI6ImNsZ254a29rMDAwaGgzaW1yaWJwMWJ6Mm4ifQ.3VxAjPvVhzv24X-pHvCG_g'}> */}
                    <Input type="text" placeholder="Where to?" autoComplete="shipping address-line1"

                        value={pick}

                        onChange={(e) => setpick(e.target.value)}

                    />
                    {/* <DatePickerWrapper> */}
                    <DateRangeInput
                        onDatesChange={data => dispatch({type: 'dateChange', payload: data})}
                        onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
                        startDate={state.startDate} // Date or null
                        endDate={state.endDate} // Date or null
                        focusedInput={state.focusedInput} // START_DATE, END_DATE or null
                        />
                    {/* </DatePickerWrapper> */}

                    {/* <Input type="text" placeholder="When?" 
            value={drop}
            onChange={(e)=>setdrop(e.target.value)}
            /> */}
                </InputBoxes>
                <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />

            </InputContainer>
            <SavedPlaces>
                <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
                Saved Places
            </SavedPlaces>
            <Link href={{
                pathname: "/confirm",
                query: {
                    pick: pick,
                    // drop: drop

                }
            }
            }>
                <ConfirmButtonContainer>

                    Confirm Location

                </ConfirmButtonContainer>
            </Link>


        </Wrapper>
    )
}

export default Search;
const ConfirmButtonContainer = tw.div`
bg-black text-white text-center mt-2 mx-4 px-4 py-3 text-2xl cursor-pointer`
const Wrapper = tw.div`
    h-screen bg-gray-200`
const ButtnContainer = tw.div`
bg-white  px-4
`
const BackButton = tw.img`
h-12 cursor-pointer `
const InputContainer = tw.div`
bg-white flex item-center px-4 mb-2 
`
const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none

`
const FromToIcons = tw.div`
w-10 flex flex-col mr-2 items-center
`
const Circle = tw.img`
h-2.5

`
const Line = tw.img`
h-10
`
const Square = tw.img`
h-3 
`

const InputBoxes = tw.div`
flex flex-col flex-1 h-51 pb-4
`

const PlusIcon = tw.img`
w-10 h-10 bg-gray-200 rounded-full 
`

const SavedPlaces = tw.div`
flex item-center bg-white px-4 py-2
`

const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`
const ConfirmButton = tw.div`
bg-white px-4 py-2
`

const Lbutton = tw.button`
bg-black text-white w-full py-2 rounded-2
`
const DatePickerWrapper = tw.div`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`

// const DatePicker = tw.date`
// h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
// `;