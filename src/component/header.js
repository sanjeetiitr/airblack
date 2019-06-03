import React , {Component} from  "react";
import {Row,Col,Menu, Icon, Layout} from 'antd';
import { Input } from 'antd';

const Search = Input.Search;
const { Header, Content, Footer } = Layout;

export class HeaderComp extends Component{
    constructor(props){
        super(props);
        this.state = {
            scroll : false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        if (window.scrollY >= 200 && this.state.scroll === false) {
            this.setState({scroll: true});
        }
        else if (window.scrollY < 200 && this.state.scroll === true){
            this.setState({scroll: false});
        }
    }

    render(){
        return(
            <Layout>
            <Header style={{ position: 'fixed', zIndex: 2, width: '100%', backgroundColor : "white" , height : this.state.scroll === true ? "auto" : "77px"}}>
            <Row type="flex" justify="center" style={{}}>
                <Col
                    style={{display : 'flex'}}
                    xs={{ span: 24, offset: 0 }}
                    sm={{ span: 24, offset: 0 }}
                    mg={{ span: 24, offset: 0 }}
                    lg={{ span: 20, offset: 0 }}
                    xl={{ span: 20, offset: 0 }}
                >
                    <div style={{flex :  this.state.scroll ? '4 0 0' : ' 0 0 0'}} className="hdr-icon"><Icon type="instagram" /></div>
                    {this.state.scroll ? "":<div className='hdr-ic-2'>|</div>}
                    {this.state.scroll ? "":<div className='hdr-ic-3'></div>}
                    
                    <div className='hdr-ic-4 display-mob-hide'>
                        <Search
                        placeholder="Search"
                        style={{ width: 220 , height : '25px' }}
                        />
                    </div>
                    <div className="hdr-icon-2"><Icon type="compass" /></div>
                    <div className="hdr-icon-2"><Icon type="heart" /></div>
                    <div className="hdr-icon-2"><Icon type="user" /></div>
                </Col>
            </Row>
            </Header>
            {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
          </Layout>
        )
    }
}