import React from 'react';
import { Container, Row, Col, CardColumns } from 'reactstrap';

import PhotoFrame from './photoFrame/photoFrame';
const PhotoList=(props)=>{
   // const {photolist} = props.photolist;
    return(
        <CardColumns>
            <PhotoFrame src=''/>
            <PhotoFrame src=''/>
            <PhotoFrame src=''/>
            <PhotoFrame src=''/>
            <PhotoFrame src=''/>
            <PhotoFrame src=''/>
            <PhotoFrame src=''/>
            <PhotoFrame src=''/>
            <PhotoFrame src=''/>
        </CardColumns>

    )
}

export default PhotoList;