import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import './CustomCard.scss';
import { useState } from 'react';

const CustomCard = ({ orders }) => {
    const [expandedState, setExpandedState] = useState(null);

    const toggleExpand = (index) => {
        setExpandedState((prevExpanded) => (prevExpanded === index ? null : index));
    };

    return (
        <Grid container spacing={5} className='customcard'>
            {orders.map((res, index) => (
                <Grid item xs={12} sm={12} md={4} ms={4} key={index}>
                    <Card className='card_container'>
                        <CardMedia
                            sx={{ height: 140, width: 140 }}
                            image={res.image}
                            title={res.title}
                            className='card_img'
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{
                                overflow: 'hidden',
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                textOverflow: 'ellipsis',
                                WebkitLineClamp: expandedState === index ? 'unset' : 1,
                                cursor: 'pointer',
                            }}
                                onClick={() => toggleExpand(index)}>
                                {res.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className='cardDescription' style={{
                                overflow: 'hidden',
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                textOverflow: 'ellipsis',
                                WebkitLineClamp: expandedState === index ? 'unset' : 2,
                                cursor: 'pointer',
                            }}
                                onClick={() => toggleExpand(index)}>
                                <span style={{ fontWeight: 'bold', fontSize: '16px', marginRight: '5px' }}>Address</span>
                                {res.description}
                            </Typography>
                            <Typography variant='p' style={{ marginTop: '5px' }}> Delivery Date : <span> 28-01-2024</span></Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Order Details</Button>
                            <Button size="small">Client Details</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default CustomCard;
