'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'

const Quantity = () => {
    const [num, setNum] = useState(1)
    return (
        <div className='flex gap-x-2 items-center'>
            {/* Minus */}
            <Button className='text-black border h-8 w-8 rounded-full center font-semibold' onClick={() => {
                setNum(num <=1 ? 1: num - 1)
            }}>
                -
            </Button>

            {/* Number */}
            <span className='text-sm'>{num}</span>

            {/* Plus */}
            <Button className='text-bleck border h-8 w-8 rounded-full center font-semibold' onClick={() => {
                setNum(num + 1)
            }}>
                +
            </Button>
        </div>
    )
}

export default Quantity
