import styled from 'styled-components';
import LeftSide from './LeftSide';
import Main from './Main';
import RightSide from './RightSide';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {
    return (
        <Container>
            {
                !props.user && <Redirect to="/" />
            }
            <Section>
                <h5>
                    <a href="#">Hiring in a hurry? -</a>
                    <p>Find talented pros in record time with upwork and keep business moving.</p>
                </h5>
            </Section>
            <Layout>
                <LeftSide />
                <Main />
                <RightSide />
            </Layout>
        </Container>
    )
};

const Container = styled.div`
    max-width: 100%;
    padding-top: 52px;
`;
const Content = styled.div`
    max-width: 1128px;
    margin-left: auto;
    margin-right: auto;
`;
const Section = styled.div`
    display: flex;
    justify-content: center;
    min-height: 50px;
    padding: 16px 0;
    box-sizing: content-box;
    text-align: center;
    text-decoration: underline;

    h5 {
        font-size: 14px;
        color: #0a66c2;

        a {
            font-weight: 700;
        }
    }

    p {
        font-size: 14px;
        font-weight: 600;
        color: #434649;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 5px;
    }
`;
const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    /* grid-template-rows: auto; */
    column-gap: 25px;
    row-gap: 25px;
    margin: 25px 0;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }
`;

//현재 리덕스 스토어의 상태를 조회하여 props를 넘겨줌
const mapStateToProps = (state) => {
    return {
        user: state.userState.user
    };
};

export default connect(mapStateToProps)(Home);