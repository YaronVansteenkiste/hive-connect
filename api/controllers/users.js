import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import multer from "multer";
import fileUpload from 'express-fileupload';
import upload from "../middleware/upload.js";

export const getUser = (req, res) => {
  const userId = req.params.userId;
  const q = "SELECT * FROM users WHERE id=?";

  db.query(q, [userId], (err, data) => {
    if (err) return res.status(500).json(err);
    const { password, ...info } = data[0];
    return res.json(info);
  });
};

export const updateUser = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "UPDATE users SET `name`=? WHERE id=?";

    db.query(q, [req.body.name, userInfo.id], (err, data) => {
      if (err) res.status(500).json(err);
      if (data.affectedRows > 0) return res.json("Updated!");
      return res.status(403).json("Forbidden");
    });
  });
};

export const updateProfilePic = [
  upload.single("profilePic"),
  (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, "secretkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");

      const q = "UPDATE users SET `profilePic`=? WHERE id=?";

      const image = req.file && Buffer.from(req.file.buffer).toString('base64');
      const userId = userInfo.id;

      if (!image) {
        return res.status(400).json("No profile picture provided.");
      }

      db.query(q, [image, userId], (err, data) => {
        if (err) res.status(500).json(err);
        if (data.affectedRows > 0) return res.json("Profile picture updated!");
        return res.status(403).json("Forbidden");
      });

    });
  },
];



