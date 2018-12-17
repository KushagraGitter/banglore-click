import React from 'react';
import { Card, CardImg, CardTitle, CardBody} from 'reactstrap';
const PhotoFrame =(props)=>{
    const {src} = props
    return(
        <div>
            <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                    </CardBody>
            </Card>
        </div>
    )
}
export default PhotoFrame;