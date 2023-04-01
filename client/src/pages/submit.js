import React, { useState, useRef } from "react";
import LeftSidebar from "../components/LeftSideBar";
import Header from "../components/Header";
import { Button, Form, Tab, Tabs } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import RightSideBar from "../components/RightSideBar.js";
import { useNavigate } from "react-router-dom";


const SubmitPost = () => {
    let navigate = useNavigate();
    const [content, setContent] = useState("");
    const fileInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission
    };

    function goHome() {
        navigate('/');
    }

    return (
        <div style={{ display: "flex" }}>
            <LeftSidebar />
            <div className="hivebody" style={{ backgroundColor: "#09040f" }}>
                <div>
                    <Header />
                </div>
                <div className="postcontainer">
                    <h3>Submit your post</h3>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="title"
                            style={{
                                border: "none",
                                backgroundColor: "#191032",
                                color: "#fff",
                            }}
                        />
                    </Form.Group>
                    <Tabs
                        defaultActiveKey="post"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="post" title="Post">
                            <div>
                                <div className="postcontent">
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="postContent">
                                            <ReactQuill
                                                value={content}
                                                onChange={setContent}
                                                style={{
                                                    border: "none",
                                                    backgroundColor: "#191032",
                                                    color: "#fff",
                                                }}
                                            />
                                        </Form.Group>
                                        <Button type="submit" variant="primary">
                                            Submit
                                        </Button>
                                        <Button onClick={goHome} type="cancel" variant="primary">
                                            Cancel
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="images" title="Images">
                            <div>
                                <div className="file-upload-wrapper">
                                    <input
                                        type="file"
                                        id="input-file-now-custom-1"
                                        className="file-upload"
                                        data-default-file="https://mdbootstrap.com/img/Photos/Others/images/89.webp"
                                        ref={fileInputRef}
                                    />
                                    <Button
                                        type="button"
                                        variant="primary"
                                    >
                                        Add Image
                                    </Button>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                    <RightSideBar />
                </div>
            </div>
        </div>
    );
};

export default SubmitPost;
