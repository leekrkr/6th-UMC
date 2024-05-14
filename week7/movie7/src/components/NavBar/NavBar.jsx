import React, { useContext } from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {
    BarContainer,
    BarWrap,
    BarWrapRight,
    BarTitle,
    BarItemWrap,
    ListContainer,
    ItemList,
} from './NavBarStyle';



export default function NavBar() {

    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            setIsLoggedIn(true);
        }

    }, [isLoggedIn]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };
    

    return (

    <BarContainer>
        <BarWrap>
            <BarWrapRight>
                <Link to='/'>
                    <BarTitle>UMC&nbsp;Movie</BarTitle>
                </Link>
                <ListContainer>
                    {isLoggedIn ? (
                        <ItemList>
                            <BarItemWrap onClick={handleLogout}>로그아웃</BarItemWrap>
                        </ItemList>
                    ) : (
                        <>
                        <ItemList>
                        <Link to='/login'>
                            <BarItemWrap>로그인</BarItemWrap>
                        </Link>
                    </ItemList>
                    <ItemList>
                        <Link to='/signup'>
                            <BarItemWrap>회원가입</BarItemWrap>
                        </Link>
                    </ItemList>
                        </>
                    )}
                    <ItemList>
                        <Link to='/popular'>
                            <BarItemWrap>Popular</BarItemWrap>
                        </Link>
                    </ItemList>
                    <ItemList>
                        <Link to='/nowplaying'>
                            <BarItemWrap>Nowplaying</BarItemWrap>
                        </Link>
                    </ItemList>
                    <ItemList>
                        <Link to='/toprated'>
                            <BarItemWrap>Toprated</BarItemWrap>
                        </Link>
                    </ItemList>
                    <ItemList>
                        <Link to='/upcoming'>
                            <BarItemWrap>Upcoming</BarItemWrap>
                        </Link>
                    </ItemList>
                </ListContainer>
            </BarWrapRight>
        </BarWrap>
    </BarContainer>
  );

}