import {
  addDoc,
  collection,
  doc,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { firebaseDB } from "firebaseApp";
import { getFormattedDate } from "utils/helper";

export const pushNewFirebaseMessage = async (
  senderId: any,
  receiverId: any,
  message: any
) => {
  const createdAt = serverTimestamp();
  const messageTime = getFormattedDate("");

  await addDoc(collection(firebaseDB, `${senderId}/${receiverId}/messages`), {
    ...message,
    senderId,
    receiverId,
    createdAt,
    messageTime,
  });

  const updateSenderLastMessageRef = doc(firebaseDB, senderId, receiverId);
  setDoc(updateSenderLastMessageRef, {
    lastMessage: {
      ...message,
      senderId,
      receiverId,
      createdAt,
      messageTime,
    },
  });

  const updateReceiverLastMessageRef = doc(firebaseDB, receiverId, senderId);
  setDoc(updateReceiverLastMessageRef, {
    lastMessage: {
      ...message,
      senderId,
      receiverId,
      createdAt,
      messageTime,
    },
  });

  return await addDoc(
    collection(firebaseDB, `${receiverId}/${senderId}/messages`),
    {
      ...message,
      senderId,
      receiverId,
      createdAt,
      messageTime,
    }
  );
};

export const pullFirebaseMessagesQuery = (senderId: any, receiverId: any) =>
  query(
    collection(firebaseDB, `${senderId}/${receiverId}/messages`),
    orderBy("createdAt", "asc")
  );

export const pullFirebaseCollections = (senderId?: any, receiverId?: any) =>
  query(collection(firebaseDB, "65378449f8d215173041dad9"));
