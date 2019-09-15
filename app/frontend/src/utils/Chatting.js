import io from "socket.io-client";
import axios from "axios";

// const socket = io.connect("http://localhost:5000");

/**
 * create notes and save them on database
 */
const createMessages = async (noteData, context) => {
  try {
    const response = await axios.post("/api/note", noteData);
    const { data } = response;
    console.log("Message Data ==> ", data);
    return data;
  } catch (error) {
    console.log("Save Message to database Error", error.response);
  }
};

export { createMessages };
