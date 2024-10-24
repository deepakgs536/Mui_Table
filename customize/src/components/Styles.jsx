import { BorderAll, WidthFull } from "@mui/icons-material";

const Styles = {
    HeaderStyle :{
        color: '#353448' ,
        fontSize:'18px',
        fontFamily : 'Poppins' ,
        fontWeight:'600',
        textAlign: 'left'
    },
    BodyStyle :{
        color: '#353448' ,
        fontSize:'16px',
        fontFamily : 'Poppins' ,
        textAlign: 'left',
        borderBottom:'0'
    },
    PerformanceStyle :{
        color: '#353448' ,
        fontSize:'16px',
        padding:'0 0 0 16px',
        fontFamily : 'Poppins' ,
        borderBottom:'0'

    },
    EditIcon : {
        color:'#49c792',
    },
    FeedbackButton : {
        height:'35px',
        fontSize:'14px',
        p:'0px 20px 0px 20px',
        bgcolor: '#49c792',
        border: 'none',  // Use 'border' to remove all borders
        '&:active': {
          outline: 'none',  // Correct use of the active pseudo-class
        },
    },
}
export default Styles ;