import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardImgOverlay} from 'reactstrap';
const PhotoFrame =(props)=>{
    const {src} = props
    return(
        <div>
            <Card className="photoCategory">
                <CardImg top width="100%" src={src}  alt="Card image cap" />
                <CardImgOverlay>
                    <CardTitle>Fashion</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    )
}
export default PhotoFrame;