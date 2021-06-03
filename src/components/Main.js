import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import PostModal from './PostModal';
import { getArticlesAPI } from '../actions';

const Main = (props) => {
    const [showModal, setShowModal] = useState("close");

    useEffect(() => {
        props.getArticles();
        console.log('props.articles : ', props.articles)
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget) {
            return;
        }
        console.log('showModal : ', showModal)
        switch (showModal) {
            case "open":
                setShowModal("close");
                break;

            case "close":
                setShowModal("open");
                break;

            default:
                setShowModal("close");
                break;
        }
    };

    return (
        <>
            {
                props.articles.length === 0 ? (
                    <p>There are no articles</p>
                ) : (
                    <Container>
                        <ShareBox>
                            <div>
                                {
                                    props.user && props.user.photoURL ? (
                                        <img src={props.user.photoURL} alt="" />
                                    ) : (
                                        <img src="/images/user.svg" alt="" />
                                    )
                                }
                                <button onClick={handleClick} disabled={props.loading ? true : false}>Start a post</button>
                            </div>

                            <div>
                                <button>
                                    <img src="/images/photo-icon.svg" alt="" />
                                    <span>Photo</span>
                                </button>

                                <button>
                                    <img src="/images/video-icon.svg" alt="" />
                                    <span>Video</span>
                                </button>

                                <button>
                                    <img src="/images/event-icon.svg" alt="" />
                                    <span>Event</span>
                                </button>

                                <button>
                                    <img src="/images/article-icon.svg" alt="" />
                                    <span>Write article</span>
                                </button>
                            </div>
                        </ShareBox>
                        <Content>
                            {
                                props.loading && <img src="./images/ellipsis.svg" alt="" />
                            }
                            {
                                props.articles.length > 0 &&
                                props.articles.map((article, key) => (
                                    <Atricle key={key}>
                                        <ShareActor>
                                            <a>
                                                <img src={article.actor.image} alt="" />
                                                <div>
                                                    <span>{article.actor.title}</span>
                                                    <span>{article.actor.description}</span>
                                                    <span>{article.actor.date.toDate().toLocaleDateString()}</span>
                                                </div>
                                            </a>
                                            <button>
                                                <img src="/images/ellipsis.svg" alt="" />
                                            </button>
                                        </ShareActor>
                                        <Description>{article.description}</Description>
                                        <SharedImg>
                                            <a>
                                                {
                                                    !article.sharedImg && article.video ? (
                                                        <ReactPlayer width={'100%'} url={article.video} />
                                                    ) : (
                                                        article.sharedImg && <img src={article.sharedImg} alt="" />
                                                    )
                                                }
                                            </a>
                                        </SharedImg>
                                        <SocialCounts>
                                            <li>
                                                <button>
                                                    <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="" />
                                                    <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt="" />
                                                </button>
                                                <span>75</span>
                                            </li>
                                            <li>
                                                <a>{article.comments}</a>
                                            </li>
                                        </SocialCounts>
                                        <SocialActions>    
                                            <button>
                                                <img src="/images/like-icon.svg" alt="" />
                                                <span>Like</span>
                                            </button>
                                            <button>
                                                <img src="/images/comments-icon.svg" alt="" />
                                                <span>Comments</span>
                                            </button>
                                            <button>
                                                <img src="/images/share-icon.svg" alt="" />
                                                <span>Share</span>
                                            </button>
                                            <button>
                                                <img src="/images/send-icon.svg" alt="" />
                                                <span>Send</span>
                                            </button>
                                        </SocialActions>
                                    </Atricle>
                                ))
                            }
                        </Content>
                        <PostModal showModal={showModal} handleClick={handleClick} />
                    </Container>
                )
                
            }
        </>
    )
};

// styled compontents
const Container = styled.div`
    grid-area: main;
`;

const CommonCard = styled.div`
    overflow: hidden;
    position: relative;
    margin-bottom: 8px;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 1px rgb(0 0 0 / 20%);
    text-align: center;
`;
const ShareBox = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    //margin: 0 0 0 8px;
    background: white;
    color: #958b7b;

    div {
        button {
            display: flex;
            align-items: center;
            min-height: 48px;
            background: transparent;
            border: none;
            outline: none;
            font-size: 14px;
            font-weight: 600;
            line-height: 1.5;
            color: rgba(0, 0, 0, 0.6);
        }

        &:first-child {
            display: flex;
            align-items: center;
            padding: 8px 16px 0;

            img {
                width: 48px;
                margin-right: 8px;
                border-radius: 50%;
            }

            button {
                flex-grow: 1;
                margin: 4px 0;
                padding-left: 16px;
                background-color: white;
                border: 1px solid rgba(0, 0, 0, 0.15);
                border-radius: 35px;
                text-align: left;
            }
        }

        &:nth-child(2) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-bottom: 4px;

            button {
                img {
                    margin: 0 4px 0 -2px;
                }
            }
        }
    }
`;
const Atricle = styled(CommonCard)`
    overflow: visible;
    margin: 0 0 8px;
    padding: 0;
`;
const ShareActor = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin-bottom: 8px;
    padding-right: 40px;
    padding: 12px 16px 0;

    a {
        overflow: hidden;
        display: flex;
        flex-grow: 1;
        margin-right: 12px;
        text-decoration: none;

        img {
            width: 48px;
            height: 48px;
        }

        & > div {
            overflow: hidden;
            display: flex;
            flex-grow: 1;
            flex-basis: 0;
            flex-direction: column;
            margin-left: 8px;

            span {
                text-align: left;

                &:first-child {
                    font-size: 14px;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                }

                &:nth-child(n+1) {
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.6);
                }
            }
        }
    }

    button {
        position: absolute;
        top: 0;
        right: 12px;
        background: transparent;
        border: none;
        outline: none;
    }
`;
const Description = styled.div`
    overflow: hidden;
    padding: 0 16px;
    font-size: 14px;
    text-align: left;
    color: rgba(0, 0, 0, 0.9);
`;
const SharedImg = styled.div`
    display: block;
    position: relative;
    width: 100%;
    margin-top: 8px;
    background-color: #f9fafb;

    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`;
const SocialCounts = styled.ul`
    overflow: auto;
    display: flex;
    align-items: flex-start;
    margin: 0 16px;
    padding: 8px 0;
    border-bottom: 1px solid #e9e5df;
    line-height: 1.3;
    list-style: none;

    li {
        margin-right: 5px;
        font-size: 12px;

        button {
            display: flex;
            background-color: white;
            border: none;
        }
    }
`;
const SocialActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-height: 40px;
    margin: 0;
    padding: 4px 8px;

    button {
        display: inline-flex;
        align-items: center;
        padding: 8px;
        background-color: white;
        border: none;
        color: #0a66c2;

        @media (max-width: 768px) {
            span {
                margin-left: 8px;
            }
        }
    }
`;
const Content = styled.div`
    text-align: center;

    & > img {
        width: 30px;
    }
`;

//현재 리덕스 스토어의 상태를 조회하여 props를 넘겨줌
const mapStateToProps = (state) => {
    console.log(state)
    return {
        loading: state.articleState.loading,
        user: state.userState.user,
        articles: state.articleState.articles
    };
};
  
//함수에 파견 -> 액션을 일으킴
const mapDispatchToProps = (dispatch) => ({
    getArticles: () => dispatch(getArticlesAPI())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);