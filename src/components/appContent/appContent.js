import React,{Component} from 'react';
import {Button} from 'reactstrap';
import PhotoList from '../photoList/photoList';
import './appContent.css';
export default class AppContent extends Component{
    render(){
        return(
            <div className='content'>
               <PhotoList photoList={[1,2,3,4]}/>
            </div>
        )
    }
}