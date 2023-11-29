import React,{useState} from 'react';
import './Header.css';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';


export function Header(){
    const [userState,setUserState]=useState(false);
    let presentState;
    let WheatherToDisplayOrNot;
    if(userState===false){
      presentState='login';
      WheatherToDisplayOrNot='display-none';
    }
    else{
        presentState='logout';
        WheatherToDisplayOrNot='display-inline';
    }
    function handleOnclick(userState){
        setUserState(!userState);
    }
    return(
   <div className='header'>
    <div style={{display:'inline-flex',alignItems:'center'}}>
       
        <NewspaperIcon fontSize="large"  />
        
   
       <h1 className='display-inline'>News Today</h1>

    </div>
   
        <div  style={{display:'inline-flex',alignItems:'center'}}>
            <span className={WheatherToDisplayOrNot}>
            <AccountCircleIcon fontSize="large"/>
            </span>
       
    <span style={{fontSize:'22px',fontFamily:'sans-serif',fontWeight:'bold'}}  className={WheatherToDisplayOrNot} >Admin</span>
    <Button varient="contained" style={{backgroundColor:'skyblue',color:'white',marginLeft:'16px' }} onClick={()=>handleOnclick(userState)}>{presentState}</Button>
       
    
   
    </div>
      
      
   </div>

    );

}