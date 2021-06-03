import styled from 'styled-components';
import { connect } from 'react-redux'

const LeftSide = (props) => {
    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackGround />
                    <a>
                        <Photo />
                        <Link>Welcome, {props.user ? props.user.displayName : 'there'}</Link>
                    </a>
                    <a>
                        <AddPhotoText>Add a Photo</AddPhotoText>
                    </a>
                </UserInfo>
                <Widget>
                    <a>
                        <div>
                            <span>Connections</span>
                            <span>Grow your network</span>
                        </div>
                        <img src="/images/widget-icon.svg" alt="" />
                    </a>
                </Widget>
                <Item>
                    <span>
                        <img src="/images/item-icon.svg" alt="" />
                        My Items
                    </span>
                </Item>
            </ArtCard>
            <CommunityCard>
                <a>
                    <span>Groups</span>
                </a>
                <a>
                    <span>
                        Events
                        <img src="/images/plus-icon.svg" alt="" />
                    </span>
                </a>
                <a>
                    <span>Follow Hashtags</span>
                </a>
                <a>
                    <span>Discover more</span>
                </a>
            </CommunityCard>
        </Container>
    )
};

// styled compontents
const Container = styled.div`
    grid-area: leftside;
`;
const ArtCard = styled.div`
    overflow: hidden;
    position: relative;
    margin-bottom: 8px;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 0  1px rgb(0 0 0 / 15%), 0 0 0  1px rgb(0 0 0 / 20%);
    transition: box-shadow 83ms;
    text-align: center;
`;
const UserInfo = styled.div`
    padding: 12px 12px 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    word-wrap: break-word;
    word-break: break-word;
`;
const CardBackGround = styled.div`
    height: 54px;
    margin: -12px -12px 0;
    background: url("/images/card-bg.svg");
    background-position: center;
    background-size: 462px;
`;
const Photo = styled.div`
    width: 72px;
    height: 72px;
    margin: -38px auto 12px;
    box-sizing: border-box;
    box-shadow: none;
    background-image: url("/images/photo.svg");
    background-position: center;
    background-clip: content-box;
    background-color: white;
    background-size: 60%;
    background-repeat: no-repeat;
    border: 2px solid white;
    border-radius: 50%;
`;
const Link = styled.div`
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.9);
`;
const AddPhotoText = styled.div`
    margin-top: 4px;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.33;
    color: #0a66c2;
`;
const Widget = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);

    & > a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4px 12px;
        text-decoration: none;

        &:hover {
            background-color: rgba(0, 0, 0, 0.08);
        }

        div {
            display: flex;
            flex-direction: column;
            text-align: left;

            span {
                font-size: 12px;
                line-height: 1.333;

                &:first-child {
                    color: rgba(0, 0, 0, 0.6);
                }

                &:nth-child(2) {
                    color: rgba(0, 0, 0, 1);
                }
            }
        }
    }

    svg {
        color: rgba(0, 0, 0, 1);
    }
`;
const Item = styled.a`
    display: block;
    padding: 12px;
    border-color: rgba(0, 0, 0, 0.8);
    font-size: 12px;
    text-align: left;

    span {
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 1);

        svg {
            color: rgba(0, 0, 0, 0.6);
        }
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }
`;
const CommunityCard = styled(ArtCard)`
    display: flex;
    flex-direction: column;
    padding: 8px 0 0;
    text-align: left;

    a {
        padding: 4px 12px;
        font-size: 12px;
        color: black;

        &:hover {
            color: #0a66c2;
        }

        span {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &:last-child {
            padding: 12px;
            border-top: 1px solid #d6cec2;
            color: rgba(0, 0, 0, 0.6);
            text-decoration: none;

            &:hover {
                background-color: rgba(0, 0, 0, 0.08);
            }
        }
    }
`;

//현재 리덕스 스토어의 상태를 조회하여 props를 넘겨줌
const mapStateToProps = (state) => {
    return {
        user: state.userState.user
    };
};

export default connect(mapStateToProps)(LeftSide);