import '../Cat/Cat.css';
import React, { useState } from 'react';
import { Card, Input, Image } from 'semantic-ui-react';

function InputOutput() {
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');

    const handleInputChange1 = (event) => {
        setTopText(event.target.value);
    };

    const handleInputChange2 = (event) => {
        setBottomText(event.target.value);
    };

    return (
        <div className="cardBackground">
            <Image src='./images/cat-icon.png' style={{ position: 'absolute', top: '359px', left: '40%', transform: 'translateX(-50%)', zIndex: '1', width: '10%', height: '15%' }}/>
            <Card className="catCard" style={{ marginRight: '10px' }}>
                <Card.Content>
                    <Card.Header>So fur, so good...</Card.Header>
                    <Card.Description>
                        <Input
                            fluid
                            placeholder="Enter top text..."
                            value={topText}
                            onChange={handleInputChange1}
                        />
                        <Input
                            fluid
                            style={{ marginTop: '10px' }}
                            placeholder="Enter bottom text..."
                            value={bottomText}
                            onChange={handleInputChange2}
                        />
                    </Card.Description>
                </Card.Content>
            </Card>
            <Card className="catCard">
                <Card.Content>
                    <Card.Header>Meow you’re talking!</Card.Header>
                    <Card.Description>
                        <p>{topText}</p>
                        {/* <Image style={{ marginTop: '10px', marginBottom: '20px' }} src={photoUrl} /> */}
                        <p>{bottomText}</p>
                    </Card.Description>
                </Card.Content>
            </Card>
        </div>
    );
}

export default InputOutput;
