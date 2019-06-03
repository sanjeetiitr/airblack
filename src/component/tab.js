import React, { Component } from "react";
import { Tabs, Icon, Row, Col, Spin } from 'antd';
import InfiniteScroll from "react-infinite-scroll-component";
import { imageUrls } from '../asset/img.url';
import Lazyload from 'react-lazyload';
import { CSSTransition } from 'react-transition-group';

const { TabPane } = Tabs;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

export class TabView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasMore: true,
            data: imageUrls.slice(0, 5),
        }
    }
    fetchMoreData = () => {
        let all = imageUrls.length
        let initial = this.state.data
        let len = this.state.data.length;
        this.setState({
            data: initial.concat(imageUrls.slice(len, len + 5)),
            hasMore: true
        })
        if (len === all) {
            this.setState({
                hasMore: false
            })
        }
        else {
            setTimeout(() => {
                this.setState({
                    data: initial.concat(imageUrls.slice(len, len + 5)),
                    hasMore: true
                })
            }, 3000);
        }
    }

    render() {
        return (
            <Row type="flex" justify="center" style={{ marginTop: '2%', marginBottom: '15%' }}>
                <Col
                    xs={{ span: 24, offset: 0 }}
                    sm={{ span: 24, offset: 0 }}
                    mg={{ span: 24, offset: 0 }}
                    lg={{ span: 18, offset: 0 }}
                    xl={{ span: 18, offset: 0 }}
                >
                    <Tabs defaultActiveKey="1" className='usr-tab-main'>
                        <TabPane
                            tab={
                                <span className="tab-fnt">
                                    <Icon type="appstore" />
                                    POSTS
                                </span>
                            }
                            key="1"
                        >
                            <InfiniteScroll
                                style={{ height: 'auto', overflow: 'hidden' }}
                                dataLength={this.state.data.length}
                                next={this.fetchMoreData}
                                hasMore={this.state.hasMore}
                                scrollThreshold={.9}
                                loader={<Spin indicator={antIcon} />}
                                endMessage={
                                    <p style={{ textAlign: "center" }}>
                                        <div>Yay! You have seen it all</div>
                                    </p>
                                }
                            >
                                <Row type='flex'>

                                    {this.state.data.map((index) => (
                                        <Lazyload throttle={200} height={300}>
                                            <CSSTransition key="1"
                                                transitionName="fade"
                                                transitionAppear
                                                transitionAppearTimeout={300}
                                                transitionEnter={false}
                                                transitionLeave={false}>
                                                <Col
                                                    xs={{ span: 8, offset: 0 }}
                                                    style={{ padding: "1%" }}
                                                    sm={{ span: 8, offset: 0 }}
                                                    mg={{ span: 8, offset: 0 }}
                                                    lg={{ span: 8, offset: 0 }}
                                                    xl={{ span: 8, offset: 0 }}
                                                >
                                                    <div style={{ backgroundColor: "black", height: "auto", position: "relative" }} className='container'>
                                                        <img src={index} alt="Avatar" className="image" />
                                                        <div className="middle">
                                                            <div className="text"><Icon type="heart" theme="filled" /><span>23.4K</span><Icon type="message" theme="filled" /><span>1.4k</span></div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </CSSTransition>
                                        </Lazyload>
                                    ))}

                                </Row>
                            </InfiniteScroll>
                        </TabPane>
                        <TabPane
                            tab={
                                <span className="tab-fnt">
                                    <Icon type="desktop" />
                                    IGTV
                                </span>
                            }
                            key="2"
                        >
                            IGTV
                        </TabPane>
                        <TabPane
                            tab={
                                <span className="tab-fnt">
                                    <Icon type="tags" />
                                    TAGGED
                                </span>
                            }
                            key="3"
                        >
                            TAGGED
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>

        )
    }
}