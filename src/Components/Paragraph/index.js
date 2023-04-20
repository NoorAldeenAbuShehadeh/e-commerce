import { Typography } from "@mui/material"

const Paragraph = (props)=>{
    return(
     <Typography variant="p" {...props.textP}>
        {props.textP}
        
        </Typography>
    )
}
export default Paragraph;