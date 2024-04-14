import {Nav, NavBarContainer, NavText, NavPopular, NavNowplaying, NavToprated, NavUpcoming } from "./NavBarElement";

function NavBar(){
    return(
        <Nav>
            <NavBarContainer>
                <NavText to="/">
                    <Text1>UMC Movie</Text1>
                </NavText>
                <NavPopular to="/popular">
                    <Text2>Popular</Text2>
                </NavPopular>
                <NavNowplaying to="/nowplaying">
                    <Text3>Nowplaying</Text3>
                </NavNowplaying>
                <NavToprated to="/toprated">
                    <Text4>Toprated</Text4>
                </NavToprated>
                <NavUpcoming to="/upcoming">
                    <Text5>Upcoming</Text5>
                </NavUpcoming>
            </NavBarContainer>
        </Nav>
    );
}

export default NavBar;