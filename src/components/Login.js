import styled from 'styled-components';
import { connect } from 'react-redux';
import { signInAPI } from '../actions';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
    console.log('props : ', props)
    return (
        <Container>
            {
                props.user &&
                <Redirect to="/home" />
            }
            <Nav>
                <a href="/">
                    <img src="/images/linkedin_logo.svg" alt="" />
                </a>
                <div>
                    <Join>Join now</Join>
                    <SignIn>Sign In</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>프로를 위한 커뮤니티</h1>
                    <img src="/images/login_hero.svg" alt="" />
                </Hero>
                <Form>
                    <Google onClick={() => props.signIn()}>
                        <img src="/images/google.svg" alt="" />
                        Sign in with Google
                    </Google>
                </Form>
            </Section>
        </Container>
    )
};

// styled compontents
const Container = styled.div`
    padding: 0px;
`;
const Nav = styled.nav`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;

    & > a {
        width: 135px;
        height: 34px;
        @media (max-width: 768px) {
            padding: 0 5px;
        }
    }
`;
const Join = styled.a`
    margin-right: 12px;
    padding: 10px 12px;
    border-radius: 4px;
    text-decoration: none;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    
    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.9);
        text-decoration: none;
    }
`;
const SignIn = styled.a`
    transition-duration: 167ms;
    padding: 10px 24px;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 24px;
    box-shadow: inset 0 0 0 1px #0a66c2;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    color: #0a66c2;
    text-align: center;

    &:hover {
        background-color: rgba(112, 181, 249, 0.15);
        color: #0a66ce;
        text-decoration: none;
    }
`;
const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-content: start;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 1128px;
    min-height: 700px;
    margin: auto;
    padding-bottom: 138px;
    padding-top: 40px;
    padding: 60px 0;
    
    @media (max-width: 768px) {
        min-height: 0px;
        margin: auto;
    }
`;
const Hero = styled.div`
    width: 100%;

    h1 {
        width: 55%;
        padding-bottom: 0;
        font-size: 56px;
        font-weight: 200;
        color: #2977c9;
        line-height: 70px;

        @media (max-width: 768px) {
            width: 100%;
            line-height: 2;
            text-align: center;
            font-size: 20px;
        }
    }

    img {
        position: absolute;
        right: -150px;
        bottom: -2px;
        width: 700px;
        height: 670px;

        @media (max-width: 768px) {
            position: initial;
            top: 230px;
            width: initial;
            height: initial;
        }
    }
`;
const Form = styled.div`
    width: 408px;
    margin-top: 100px;

    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;
const Google = styled.button`
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 56px;
    background-color: #fff;
    border-radius: 28px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
    vertical-align: middle;
    transition-duration: 167ms;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6);

    &:hover {
        background-color: rgba(207, 207, 207, 0.25);
        color: rgba(0, 0, 0, 0.75);
    }
`;

const mapStateToProps = (state) => {
    console.log('state : ', state)
    return {
        user: state.userState.user
    };
};

//함수에 파견 -> 액션을 일으킴
const mapDispatchToProps = (dispatch) => ({
    signIn: () => dispatch(signInAPI())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);