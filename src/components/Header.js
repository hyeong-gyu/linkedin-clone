import { connect } from 'react-redux';
import { signOutAPI } from '../actions';
import styled from 'styled-components';

const Header = (props) => {
    return (
        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src="/images/home-logo.svg" alt="" />
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type="text" placeholder="Search" />
                    </div>
                    <SearchIcon>
                        <img src="/images/search-icon.svg" />
                    </SearchIcon>
                </Search>
                <Nav>
                    <NavListWrap>
                        <NavList className="active">
                            <a>
                                <img src="/images/nav-home.svg" alt="" />
                                <span>Home</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a>
                                <img src="/images/nav-network.svg" alt="" />
                                <span>My Network</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a>
                                <img src="/images/nav-jobs.svg" alt="" />
                                <span>Jobs</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a>
                                <img src="/images/nav-messaging.svg" alt="" />
                                <span>Messaging</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a>
                                <img src="/images/nav-notifications.svg" alt="" />
                                <span>Notifications</span>
                            </a>
                        </NavList>

                        <User>
                            <a>
                                {
                                    props.user && props.user.photoURL ? (
                                        <img src={props.user.photoURL} alt="" />
                                    ) : (
                                        <img src="/images/user.svg" alt="" />
                                    )
                                }
                                <span>
                                    Me
                                    <img src="/images/down-icon.svg" alt="" />
                                </span>
                            </a>

                            <SignOut>
                                <a onClick={() => props.signOut()}>
                                    Sign Out
                                </a>
                            </SignOut>
                        </User>

                        <Work>
                            <a>
                                <img src="/images/nav-work.svg" alt="" />
                                <span>
                                    Work
                                    <img src="/images/down-icon.svg" alt="" />
                                </span>
                            </a>
                        </Work>
                    </NavListWrap>
                </Nav>
            </Content>
        </Container>
    )
};

const Container = styled.div`
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    padding: 0 24px;
    background-color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;
const Content = styled.div`
    display: flex;
    align-items: center;
    max-width: 1128px;
    min-height: 100%;
    margin: 0 auto;
`;
const Logo = styled.span`
    margin-right: 8px;
    font-size: 0;
`;
const Search = styled.div`
    position: relative;
    flex-grow: 1;
    opacity: 1;

    & > div {
        max-width: 280px;
        
        input {
            width: 218px;
            height: 34px;
            padding: 0 8px 0 40px;
            background-color: #eef3f8;
            border: none;
            border-color: #dce6f1;
            border-radius: 2px;
            box-shadow: none;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.75;
            vertical-align: text-top;
            color: rgba(0, 0, 0, 0.9);
        }
    }
`;
const SearchIcon = styled.div`
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 10px;
    left: 2px;
    width: 40px;
    margin: 0;
    border-radius: 0 2px 2px 0;
    pointer-events: none;
`;
const Nav = styled.nav`
    display: block;
    margin-left: auto;

    @media (max-width: 768px) {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: white;
    }
`;
const NavListWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;

    .active {
        span:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            border-bottom: 2px solid var(--white, #fff);
            border-color: rgba(0, 0, 0, 0.9);
            transform: scaleX(1);
            transition: transform 0.2s ease-in-out;
        }
    }
`;
const NavList = styled.li`
    display: flex;
    align-items: center;

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        min-width: 80px;
        min-height: 42px;
        background: transparent;
        font-size: 12px;
        font-weight: 400;
        text-decoration: none;
        line-height: 1.5;

        span {
            display: flex;
            align-items: center;
            color: rgba(0, 0, 0, 0.6);
        }

        @media (max-width: 768px) {
            min-width: 70px;
        }
    }

    &:hover,
    &:active {
        a {
            span {
                color: rgba(0, 0, 0, 0.9);
            }
        }
    }
`;
const SignOut = styled.div`
    display: none;
    position: absolute;
    top: 45px;
    width: 100px;
    height: 40px;
    background: white;
    border-radius: 0 0 5px 5px;
    font-size: 16px;
    text-align: center;
    transition-duration: 167ms;
`;
const User = styled(NavList)`
    a > svg {
        width: 24px;
        border-radius: 50%;
    }

    a > img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }

    span {
        display: flex;
        align-items: center;
    }

    &:hover {
        ${SignOut} {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;
const Work = styled(User)`
    border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

//현재 리덕스 스토어의 상태를 조회하여 props를 넘겨줌
const mapStateToProps = (state) => {
    return {
        user: state.userState.user
    };
};
  
//함수에 파견 -> 액션을 일으킴
const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOutAPI())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);