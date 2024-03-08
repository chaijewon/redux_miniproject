import {Fragment} from "react";
import {Link} from "react-router-dom";

function Header(){
    return (
        <Fragment>
        <div className="wrapper row1">
            <header id="header" className="clear">
                <div id="logo" className="fl_left">
                    <h1><a href="/">Recipe And Food</a></h1>
                </div>
                <div className="fl_right">
                    <ul className="inline">
                        <li><i className="fa fa-phone"></i>ID:<input type="text"  size="15"/> </li>
                        <li><i className="fa fa-envelope-o"></i>PW:<input type="password"  size="15" /> </li>
                        <li><input type="button" value="로그인"/></li>
                    </ul>
                    <ul className="inline">
                        <li><i className="fa fa-phone"></i></li>
                        <li><i className="fa fa-envelope-o"></i></li>
                        <li><input type="button" value="로그아웃"/></li>
                    </ul>
                </div>
            </header>
        </div>
        <div className="wrapper row2">
        <nav id="mainav" className="clear">
            <ul className="clear">
                <li className="active"><a href="/">Home</a></li>
                <li><a className="drop" href="#">맛집</a>
                    <ul>
                        <li><a href="/food/list">맛집 목록</a></li>
                        <li><a href="/food/find">맛집 찾기</a></li>
                    </ul>
                </li>
                <li><a className="drop" href="#">레시피</a>
                    <ul>
                        <li><a href="/recipe/main">레시피</a></li>
                        <li><a href="/recipe/chef">쉐프</a></li>
                    </ul>
                </li>
                <li><a className="drop" href="#">스토어</a>
                    <ul>
                        <li><a href="pages/gallery.html">전체상품</a></li>
                        <li><a href="pages/full-width.html">베스트상품</a></li>
                        <li><a href="pages/full-width.html">특가상품</a></li>
                        <li><a href="pages/full-width.html">신상품</a></li>
                    </ul>
                </li>
                <li><a href="/board/list">커뮤니티</a></li>
                <li><a href="/emp/list">연습용</a></li>
            </ul>
        </nav>
       </div>
        </Fragment>
    )
}
export default Header