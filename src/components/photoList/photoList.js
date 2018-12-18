import React from 'react';
import { Container, Row, Col, CardColumns } from 'reactstrap';

import PhotoFrame from './photoFrame/photoFrame';
const PhotoList=(props)=>{
   // const {photolist} = props.photolist;
   const url = 'https://firebasestorage.googleapis.com/v0/b/bangloreclicks.appspot.com/o/MainContent%2Ffashion%2FSUB3088.jpg?alt=media&token=963d5d70-5690-4b68-89b9-50d832c48c65';
    return(
        <CardColumns>
            <PhotoFrame src='https://firebasestorage.googleapis.com/v0/b/bangloreclicks.appspot.com/o/MainContent%2FEvents%2FDSC_8076.jpg?alt=media&token=b58a7ae3-4673-4e0a-a2d2-6fa898f65e0f'/>
            <PhotoFrame src='https://firebasestorage.googleapis.com/v0/b/bangloreclicks.appspot.com/o/MainContent%2FEvents%2FDSC_3289.jpg?alt=media&token=667857cf-b58e-446d-8fee-3b36879ce721'/>
            <PhotoFrame src='https://firebasestorage.googleapis.com/v0/b/bangloreclicks.appspot.com/o/MainContent%2FEvents%2FDSC_3238.jpg?alt=media&token=82b10ce8-c821-4c95-ae0a-4c884e752b20'/>
            <PhotoFrame src='https://firebasestorage.googleapis.com/v0/b/bangloreclicks.appspot.com/o/MainContent%2FEvents%2FDSC_2321.JPG?alt=media&token=fb95153a-cd7e-45c5-98d9-b2569f0e0742'/>
            
            <PhotoFrame src='https://firebasestorage.googleapis.com/v0/b/bangloreclicks.appspot.com/o/MainContent%2FEvents%2FDSC_7557.jpg?alt=media&token=f70cbd86-c241-43a3-9372-fb60522527a3'/>
            <PhotoFrame src='https://firebasestorage.googleapis.com/v0/b/bangloreclicks.appspot.com/o/MainContent%2FEvents%2FDSC_3238.jpg?alt=media&token=82b10ce8-c821-4c95-ae0a-4c884e752b20'/>
            <PhotoFrame src={url}/>
            <PhotoFrame src='https://firebasestorage.googleapis.com/v0/b/bangloreclicks.appspot.com/o/MainContent%2FEvents%2FDSC_8076.jpg?alt=media&token=b58a7ae3-4673-4e0a-a2d2-6fa898f65e0f'/>

            <PhotoFrame src='https://firebasestorage.googleapis.com/v0/b/bangloreclicks.appspot.com/o/MainContent%2FEvents%2FDSC_3289.jpg?alt=media&token=667857cf-b58e-446d-8fee-3b36879ce721'/>
            <PhotoFrame src='https://firebasestorage.googleapis.com/v0/b/bangloreclicks.appspot.com/o/MainContent%2FEvents%2FDSC_8076.jpg?alt=media&token=b58a7ae3-4673-4e0a-a2d2-6fa898f65e0f'/>
            <PhotoFrame src={url}/>

            
            <PhotoFrame src='https://firebasestorage.googleapis.com/v0/b/bangloreclicks.appspot.com/o/MainContent%2FEvents%2FDSC_7557.jpg?alt=media&token=f70cbd86-c241-43a3-9372-fb60522527a3'/>
            <PhotoFrame src='https://firebasestorage.googleapis.com/v0/b/bangloreclicks.appspot.com/o/MainContent%2FEvents%2FDSC_3238.jpg?alt=media&token=82b10ce8-c821-4c95-ae0a-4c884e752b20'/>
            <PhotoFrame src={url}/>
            <PhotoFrame src='https://firebasestorage.googleapis.com/v0/b/bangloreclicks.appspot.com/o/MainContent%2FEvents%2FDSC_8076.jpg?alt=media&token=b58a7ae3-4673-4e0a-a2d2-6fa898f65e0f'/>

        </CardColumns>

    )
}

export default PhotoList;