import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
    href:'/'
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 56px;
    width: 100px;
    background: url(${logoPic});
    background-size: contain;
`

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
`


export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .slide-enter{
        width:160px;
        transition: all .2s ease-out;
    }
    .slide-enter-active{
        width: 240px;
    }
    .slide-exit{
        transition: all .2s ease-out;
    }
    .slide-exit-active{
        width: 160px;
    }
    .iconfont {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused{
            background: #777;
            color: #fff;
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    padding: 0 30px 0 20px;
    box-solid: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    margin-left: 20px;
    color: #666;
    &:: placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
`

export const Addition = styled.div` 
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
    
`

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    margin-right: 20px;
    padding: 0 20px;
    font-size: 14px;
    &.reg{
        color: #ec6149;
    }
    &.writing{
        color: #fff;
        background: #ec6149;
    }
`

export default HeaderWrapper;