import React , {Component} from  "react";
import {Col, Row, Avatar,Button, Icon} from 'antd';


export class ProfileHeader extends Component{


    render(){
        return(
            <Row type="flex" justify="center" className='row-main'>
                <Col
                    className='profile-img'
                    xs={{span: 6, offset: 0}}
                    sm={{ span: 6, offset: 0 }}
                    mg={{ span: 6, offset: 0 }}
                    lg={{ span: 6, offset: 0 }}
                    xl={{ span: 6, offset: 0 }}
                >
                    <Avatar 
                    className="pf-hd-img" 
                    src="https://scontent-bom1-1.cdninstagram.com/vp/0e8a19879581ba17dacd56278d90d913/5D7AF0B1/t51.2885-19/s150x150/44823507_2336085469767258_857513782836985856_n.jpg?_nc_ht=scontent-bom1-1.cdninstagram.com" 
                    />
                    
                </Col>
                <Col
                    className='display-mob-hide'
                    xs={{ span: 18, offset: 0 }}
                    sm={{ span: 16, offset: 0 }}
                    mg={{ span: 14, offset: 2 }}
                    lg={{ span: 12, offset: 0 }}
                    xl={{ span: 12, offset: 0 }}    
                >
                    <section>
                        <div style={{display : 'flex'}}>

                            <h1 className="pf-name">doyoutravel</h1>
                            <span className="verified-img"></span>

                            <div style={{flex: '0 0 auto', paddingLeft: '4%'}}>
                                <Button className='btn-pf-1' type="primary">Follow</Button>
                            </div>
                            <div style={{flex: '0 0 auto'}}>
                                <Button  className='btn-pf-2' type="primary" icon="caret-down" ></Button>
                            </div>
                            <div style={{flex: '0 0 auto'}}>
                                {/* <Icon style={{fontSize : '12px'}} type="ellipsis" /> */}
                                <Button  className='btn-pf-3' type="primary" icon="ellipsis" ></Button>
                            </div>
                        </div>
                        <ul className='list-pf'>
                            <li><span  style={{fontWeight : 600}}>754</span> posts</li>
                            <li><span style={{fontWeight : 600}}>2.7m</span> followers</li>
                            <li><span style={{fontWeight : 600}}>344</span> following</li>
                        </ul>
                        <div>
                            <h1 className="usr-name">JACK MORRIS</h1>
                            <span className='usd-1'>Currently in Bali</span>
                            <br/>
                            <span className='usd-1'>Get my editing presets below!</span>
                            <h4 className='foll-usp'><b>Followed by </b><span style={{fontWeight : 600}}>yestheory</span>,<span style={{fontWeight : 600}}>sanjeet</span>,<span style={{fontWeight : 600}}>amitsingh112</span> <b>+1 more</b></h4>
                        </div>
                    </section>
                </Col>  
                <Col
                className="display-mob-hdr"
                    xs={{ span: 17, offset: 1 }}
                    sm={{ span: 16, offset: 0 }}
                    mg={{ span: 14, offset: 2 }}
                    lg={{ span: 12, offset: 0 }}
                    xl={{ span: 12, offset: 0 }}    
                >
                    <section>
                        <div style={{display : 'flex'}}>

                            <h1 className="pf-name">doyoutravel</h1>
                            <span className="verified-img"></span>
                            <div style={{flex: '0 0 auto'}}>
                                {/* <Icon style={{fontSize : '12px'}} type="ellipsis" /> */}
                                <Button  className='btn-pf-3' type="primary" icon="ellipsis" ></Button>
                            </div>
                        </div>
                        <div  style={{display : 'flex'}}>
                            <div style={{flex: '0 0 auto', paddingLeft: '4%'}}>
                                <Button className='btn-pf-1' type="primary">Follow</Button>
                            </div>
                            <div style={{flex: '0 0 auto'}}>
                                <Button  className='btn-pf-2' type="primary" icon="caret-down" ></Button>
                            </div>
                        </div>
                    </section>
                </Col>  
                <Col
                    className="display-mob-hdr"
                    style={{marginTop : '5%'}}
                    xs={{ span: 22, offset: 0 }}
                    sm={{ span: 16, offset: 0 }}
                    mg={{ span: 14, offset: 2 }} 
                >
                    <section>
                        {/* <div style={{display : 'flex'}}>

                            <h1 className="pf-name">doyoutravel</h1>
                            <span className="verified-img"></span>

                            <div style={{flex: '0 0 auto', paddingLeft: '4%'}}>
                                <Button className='btn-pf-1' type="primary">Follow</Button>
                            </div>
                            <div style={{flex: '0 0 auto'}}>
                                <Button  className='btn-pf-2' type="primary" icon="caret-down" ></Button>
                            </div>
                            <div style={{flex: '0 0 auto'}}>
                                <Button  className='btn-pf-3' type="primary" icon="ellipsis" ></Button>
                            </div>
                        </div> */}
                        {/* <ul className='list-pf'>
                            <li><span  style={{fontWeight : 600}}>754</span> posts</li>
                            <li><span style={{fontWeight : 600}}>2.7m</span> followers</li>
                            <li><span style={{fontWeight : 600}}>344</span> following</li>
                        </ul> */}
                        <div>
                            <h1 className="usr-name">JACK MORRIS</h1>
                            <span className='usd-1'>Currently in Bali</span>
                            <br/>
                            <span className='usd-1'>Get my editing presets below!</span>
                            <h4 className='foll-usp'><b>Followed by </b><span style={{fontWeight : 600}}>yestheory</span>,<span style={{fontWeight : 600}}>sanjeet</span>,<span style={{fontWeight : 600}}>amitsingh112</span> <b>+1 more</b></h4>
                        </div>
                    </section>
                </Col> 
            </Row>
        )
    }
}