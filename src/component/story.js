import React , {Component} from  "react";
import {Row, Col, Avatar} from 'antd'


export class StoryComp extends Component{


    render(){
        return(
            <Row type="flex" justify="center" style={{}} className='stry-main-sty'>
                <Col
                style={{ overflowX: 'auto'}}
                    xs={{ span: 24, offset: 0 }}
                    sm={{ span: 24, offset: 0 }}
                    mg={{ span: 24, offset: 0 }}
                    lg={{ span: 18, offset: 0 }}
                    xl={{ span: 18, offset: 0 }}
                >
                    <div>
                        <ul className='stry-main'>
                            <li>
                                <Avatar 
                                className='stry-prf'
                                src="https://scontent-bom1-1.cdninstagram.com/vp/1a8d7f13f9a3def118def474ac0d1610/5CF60F1A/t51.12442-15/e35/c182.616.604.604a/s150x150/50867049_326382584669546_1813280236643272132_n.jpg?_nc_ht=scontent-bom1-1.cdninstagram.com" 
                                />
                                <h4 className='str-txt'>Bali Trip</h4>
                            </li>
                            <li>
                                <Avatar 
                                className='stry-prf'
                                src="https://scontent-bom1-1.cdninstagram.com/vp/6ed5ec55fcfd6bfdcc34980fa629438f/5CF67C54/t51.12442-15/e35/c8.296.768.768a/s150x150/56757837_109094426808033_7398687548151844083_n.jpg?_nc_ht=scontent-bom1-1.cdninstagram.com" 
                                />
                                <h4 className='str-txt'>Abu Dhabi</h4>
                            </li>
                            <li>
                                <Avatar 
                                className='stry-prf'
                                src="https://scontent-bom1-1.cdninstagram.com/vp/f88298ecbcb0a9ccdcc2eb8d36a465ed/5D8075BA/t51.2885-15/s150x150/53183096_643901649366042_1740773292927743085_n.jpg?_nc_ht=scontent-bom1-1.cdninstagram.com" 
                                />
                                <h4 className='str-txt'>India</h4>
                            </li>
                            <li>
                                <Avatar 
                                className='stry-prf'
                                src="https://scontent-bom1-1.cdninstagram.com/vp/29928171d85448bba0f330005d365c4a/5CF669B8/t51.12442-15/e35/c12.422.1001.1001a/s150x150/47586334_354486468672246_2005692313765104027_n.jpg?_nc_ht=scontent-bom1-1.cdninstagram.com" 
                                />
                                <h4 className='str-txt'>Ameax</h4>
                            </li>
                            <li>
                                <Avatar 
                                className='stry-prf'
                                src="https://scontent-bom1-1.cdninstagram.com/vp/dcffb1750486b3906debeef6704ac894/5CF66F6C/t51.12442-15/e35/c51.349.1001.1001a/s150x150/30937273_1638063302914600_6543518022760398848_n.jpg?_nc_ht=scontent-bom1-1.cdninstagram.com" 
                                />
                                <h4 className='str-txt'>How I edit</h4>
                            </li>
                            <li>
                                <Avatar 
                                className='stry-prf'
                                src="https://scontent-bom1-1.cdninstagram.com/vp/1a8d7f13f9a3def118def474ac0d1610/5CF60F1A/t51.12442-15/e35/c182.616.604.604a/s150x150/50867049_326382584669546_1813280236643272132_n.jpg?_nc_ht=scontent-bom1-1.cdninstagram.com" 
                                />
                                <h4 className='str-txt'>Bali Trip</h4>
                            </li>
                            <li>
                                <Avatar 
                                className='stry-prf'
                                src="https://scontent-bom1-1.cdninstagram.com/vp/6ed5ec55fcfd6bfdcc34980fa629438f/5CF67C54/t51.12442-15/e35/c8.296.768.768a/s150x150/56757837_109094426808033_7398687548151844083_n.jpg?_nc_ht=scontent-bom1-1.cdninstagram.com" 
                                />
                                <h4 className='str-txt'>Abu Dhabi</h4>
                            </li>
                            <li>
                                <Avatar 
                                className='stry-prf'
                                src="https://scontent-bom1-1.cdninstagram.com/vp/f88298ecbcb0a9ccdcc2eb8d36a465ed/5D8075BA/t51.2885-15/s150x150/53183096_643901649366042_1740773292927743085_n.jpg?_nc_ht=scontent-bom1-1.cdninstagram.com" 
                                />
                                <h4 className='str-txt'>India</h4>
                            </li>
                            <li>
                                <Avatar 
                                className='stry-prf'
                                src="https://scontent-bom1-1.cdninstagram.com/vp/29928171d85448bba0f330005d365c4a/5CF669B8/t51.12442-15/e35/c12.422.1001.1001a/s150x150/47586334_354486468672246_2005692313765104027_n.jpg?_nc_ht=scontent-bom1-1.cdninstagram.com" 
                                />
                                <h4 className='str-txt'>Ameax</h4>
                            </li>
                            <li>
                                <Avatar 
                                className='stry-prf'
                                src="https://scontent-bom1-1.cdninstagram.com/vp/dcffb1750486b3906debeef6704ac894/5CF66F6C/t51.12442-15/e35/c51.349.1001.1001a/s150x150/30937273_1638063302914600_6543518022760398848_n.jpg?_nc_ht=scontent-bom1-1.cdninstagram.com" 
                                />
                                <h4 className='str-txt'>How I edit</h4>
                            </li>
                        </ul>
                    </div>
                    
                </Col>
                <Col
                style={{borderTop : "1PX SOLID #EFEFEF"}}
                className="display-mob-hdr"
                xs={{ span: 24, offset: 0 }}
                sm={{ span: 24, offset: 0 }}
                mg={{ span: 24, offset: 0 }}
                >
                    <Col
                    style={{textAlign : 'center',paddingTop: '2%'}}
                    xs={{ span: 8, offset: 0 }}
                    sm={{ span: 8, offset: 0 }}
                    mg={{ span: 8, offset: 0 }}
                    >
                        <span  style={{fontWeight : 600,  color : '#262626', fontSize : '1rem'}}>754</span> 
                        <br/> 
                        <span style={{ fontSize : '1rem',  color : '#999'}}>posts</span>
                    </Col>
                    <Col
                    style={{textAlign : 'center', paddingTop: '2%'}}
                    xs={{ span: 8, offset: 0 }}
                    sm={{ span: 8, offset: 0 }}
                    mg={{ span: 8, offset: 0 }}
                    >
                        <span  style={{fontWeight : 600, color : '#262626', fontSize : '1rem'}}>2.7m</span> 
                        <br/> 
                        <span style={{ fontSize : '1rem',  color : '#999'}}>followers</span>
                    </Col>
                    <Col
                    style={{textAlign : 'center', paddingTop: '2%'}}
                    xs={{ span: 8, offset: 0 }}
                    sm={{ span: 8, offset: 0 }}
                    mg={{ span: 8, offset: 0 }}
                    >
                        <span  style={{fontWeight : 600,  color : '#262626', fontSize : '1rem'}}>334</span>
                        <br/> 
                        <span style={{ fontSize : '1rem',  color : '#999'}}>following</span>
                    </Col>
                </Col>
            </Row>
        )
    }
}