import React, { Component } from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style';

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <NavSearch></NavSearch>
                        <i className="iconfont">&#xe69d;</i>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="reg">注册</Button>
                    <Button className="writing">
                        <i className="iconfont">&#xe624;</i>写文章
                    </Button>
                </Addition>
            </HeaderWrapper>
        )


    }
}

export default Header;