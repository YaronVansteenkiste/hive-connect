import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function createtext() {

    return (
        <div class="post-container">
              <h3>Submit your post</h3>

              <div class="postcontent">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="title"
                      style={{ border: 'none', backgroundColor: "#191032", color: "#fff" }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="postContent">
                    <ReactQuill
                      value={content}
                      onChange={setContent}
                      style={{ border: 'none',backgroundColor: "#191032", color: "#fff" }}
                    />
                  </Form.Group>
                  <Button type="submit" variant="primary">
                    Submit
                  </Button>
                </Form>
              </div>
              <div class="poststats hstack gap-4">
                <button
                  type="button"
                  class="btn btn-dark bg-black btn btn-primary"
                >
                  cancel
                </button>
                <button
                  type="button"
                  class="btn btn-dark bg-black btn btn-primary"
                  onClick={handleSubmit}
                >
                  post
                </button>
              </div>
            </div>
    )
}

export default createtext;