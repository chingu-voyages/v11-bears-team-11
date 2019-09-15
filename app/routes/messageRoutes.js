import express from "express";

import { Message } from "../models";

import { validateMessageInput } from "../validation";

const router = express.Router();

/**
 * Create the Note Route
 */
router.post("/message", (req, res) => {
  const { errors, isValid } = validateMessageInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  console.log("body", req.body);
  Message.create(
    { body: req.body.body, author: req.body.author },
    (error, note) => {
      if (error) {
        return res.status(400).json({ note: "error while saving your notes" });
      }
      console.log("Note Saved Successfully", note);
      res.json(note);
    }
  );
  console.log("body", req.body);
});

/**
 * get posts route
 */
router.get("/messages/", (req, res) => {
  // console.log('id ==> ', id);
  try {
    const getMessages = async () => {
      const messagesArray = await Message.find({});
      res.json(messagesArray);
    };
    getMessages();

    // res.json({ posts });
    // console.log('posts', posts);
  } catch (error) {
    console.log("find posts Errors", error);
  }
});

/**
 * Delete Note
 */
router.delete("/note/:id/delete", (req, res) => {
  if (req.params.id) {
    console.log("ID", req.params.id);
    try {
      Message.findByIdAndRemove(req.params.id, (error, note) => {
        console.log("noteid", req.params.id);
        // As always, handle any potential errors:
        if (error) return res.status(500).send(error);

        return res.status(200).json(note);
      });
    } catch (error) {
      console.log("Erroe == > ", error);
    }
  }
});

/**
 * Update Note
 */
router.post("/message/:id/update", (req, res) => {
  if (req.params.id) {
    console.log("ID", req.params.id);
    console.log("note", req.body);
    try {
      Message.findByIdAndUpdate(req.params.id, req.body, (error, note) => {
        console.log("noteid", req.params.id);
        // As always, handle any potential errors:
        if (error) return res.status(500).send(error);

        return res.status(200).json(note);
      });
    } catch (error) {
      console.log("Erroe == > ", error);
    }
  }
});

router.get("/messages/user/:id", (req, res) => {
  const { id } = req.params;
  console.log("id ==> ", id);

  try {
    const getMessages = async author => {
      const messagesArray = await Message.find({ author });
      res.json(messagesArray);
    };
    getMessages(id);

    // res.json({ posts });
    // console.log('posts', posts);
  } catch (error) {
    console.log("find posts Errors", error);
  }
});

export default router;
