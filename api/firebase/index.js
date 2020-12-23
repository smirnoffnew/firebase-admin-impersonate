const express = require('express');
const router = express.Router();
const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
});

router.post('/createcustomtoken', (req, res) => {
  const userId = req.body.id
  admin.auth().createCustomToken(userId)
    .then(customToken => {
      res.send(customToken);
    })
    .catch(() => {
      res.send(401);
    });
});

router.get('/users', (req, res) => {
  admin.auth().listUsers()
    .then(users => {
      res.send(users);
    })
    .catch(() => {
      res.send(401);
    });
});

module.exports = router;
