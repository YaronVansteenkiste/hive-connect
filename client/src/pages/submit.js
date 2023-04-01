import axios from "axios";
import React, { useState, useRef } from "react";
import LeftSidebar from "../components/LeftSideBar";
import Header from "../components/Header";
import { Button, Form, Tab, Tabs } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import RightSideBar from "../components/RightSideBar.js";
import { useNavigate } from "react-router-dom";
import { makeRequest } from "../axios";
import { useContext } from "react";
import { UserContext } from "../components/context/UserContext.js";


const SubmitPost = () => {
    let navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState(null);
    const [img, setImg] = useState(null);
    const fileInputRef = useRef(null);
    const [descHtml, setDescHtml] = useState("");

    const { currentUser } = useContext(UserContext); // retrieve currentUser from UserContext

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!currentUser) return navigate("/login");
        try {
            const data = {
                title,
                desc: content,
                img
            };
            const res = await makeRequest.post("posts", data, {
                headers: {
                    Authorization: "Bearer " + currentUser,
                    "Content-Type": "application/json"
                }
            });
            setDescHtml(content);
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };


    function goHome() {
        navigate("/");
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
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
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
                                        <Form.Group
                                            className="mb-3"
                                            controlId="postContent"
                                        >
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
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                type="file"
                                                onChange={(e) => setImg(e.target.files[0])}
                                                ref={fileInputRef}
                                                style={{ display: "none" }}
                                            />
                                        </Form.Group>
                                        <Button type="submit" variant="primary">
                                            Submit
                                        </Button>
                                        <Button
                                            onClick={goHome}
                                            type="cancel"
                                            variant="primary"
                                        >
                                            Cancel
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="images" title="images">
                            <Button
                                variant="outline-secondary"
                                onClick={() => fileInputRef.current.click()}
                            >
                                Add image
                            </Button>{" "}
                        </Tab>
                    </Tabs>
                </div>
                <RightSideBar />
            </div>
        </div>
    );
};

export default SubmitPost;




