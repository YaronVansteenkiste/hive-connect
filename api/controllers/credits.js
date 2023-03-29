import { db } from "../connect.js";


export const getCredits = (req, res) => {
  const userId = req.params.id;

  const sql = `SELECT credits FROM users WHERE id = ?`; 
  db.query(sql, [userId], (error, results) => {
    if (error) throw error;
    const credits = results[0].credits;
    res.json({ credits }); 
  });
}
