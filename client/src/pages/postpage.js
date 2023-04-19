import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faSave, faEllipsis, faThumbsDown, faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons'
import postImageExample from '../components/images/example4.jpg'
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSideBar';
import { FloatingLabel, Form, Button, Stack } from "react-bootstrap";
import exampleImage from '../components/images/example1.jpg'
import Comment from '../components/comment';
import RightSideBar from '../components/RightSideBar';

function Postpage() {
    return (
        <div style={{ display: 'flex' }}>
            <LeftSidebar />
            <div className="hivebody">
                <div>
                    <Header></Header>
                    <RightSideBar></RightSideBar>
                </div>
                <div className='postcontainer'>
                    <div className='post-list'>
                        <div className="post-container">
                            <h3>Test</h3>
                            <h6>Test</h6>
                            <div className='postcontent'>
                                <div className='likecontainer'>
                                    <FontAwesomeIcon icon={faThumbsUp} /> <br></br>
                                    <label>
                                        0
                                    </label>
                                    <br></br><FontAwesomeIcon icon={faThumbsDown} />
                                </div>
                                <div>
                                    <img className='post-image' src={postImageExample} alt="example" />
                                </div>
                            </div>

                            <Stack className='poststats' direction='horizontal' gap='4'>
                                <Button className="btn btn-dark bg-black"><FontAwesomeIcon icon={faComment} /> 1 Comment</Button>
                                <Button className="btn btn-dark bg-black"><FontAwesomeIcon icon={faCreditCard} /> Augment</Button>
                                <Button className="btn btn-dark bg-black"><FontAwesomeIcon icon={faSave} /> Save</Button>
                                <Button className="btn btn-dark bg-black"><FontAwesomeIcon icon={faEllipsis} /></Button>
                            </Stack>
                        </div>
                        <div className="createcommentcontainer">
                            <div className='createprofileicon'>
                                <img src={exampleImage} alt="Profile Icon" className="neon-icon" />
                            </div>
                            <FloatingLabel className='searchtext' controlId="floatingInputGrid" label="Comment..">
                                <Form.Control className='searchbar' placeholder="Create Post.." />
                            </FloatingLabel>
                        </div>
                        <Comment></Comment>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Postpage
