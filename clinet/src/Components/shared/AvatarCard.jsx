// @ts-nocheck
import React from 'react'
import { Box, Stack, AvatarGroup,Avatar } from "@mui/material";
import { transfromImage } from '../../lib/features';


const AvatarCard = ({avatar=[],max=4}) => {
  return (
    <Stack diretion={"row"} specing={0.5}>
        <AvatarGroup max={max} sx={{
            position:"relative"
        }}>
            <Box width={"5rem"} height={"3rem"}>

                {avatar.map((i,index)=>(
                    <Avatar 
                    key={index}
                    src={transfromImage(i)}
                    alt={`Avatar ${index}`}
                    sx={{
                        width: "3rem",
                        height: "3rem",
                        position:"absolute",
                        left:{
                            xs:`${0.5 + index}rem`,
                            sm:`${index}rem`,
                        }
                    }}


                    />
                ))}
            </Box>
        </AvatarGroup>
      
    </Stack>
  )
}

export default AvatarCard
