import React from "react"

import { HeartIcon } from '../HeartIcon/index';

export const VotedImage=({id,votedPost ,idImage})=>{
    console.log(idImage)
    return(
        <div className={`${votedPost?"flex":"hidden"} bg-white rounded-full h-16 w-16 justify-center items-center`}>
            <HeartIcon/>
        </div>
    )
}