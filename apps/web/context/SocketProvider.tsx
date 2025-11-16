"use client";
import React, { createContext, useCallback, useEffect } from "react";
import { io } from "socket.io-client";
interface socketProviderTypes {
  children?: React.ReactNode;
}
interface socketContexInterface {
  sendMessage: (msg: string) => any; // this allows me to define a fucntion and its types
}
const socketContex = createContext<socketContexInterface | null>(null);

export const SocketProvider: React.FC<socketProviderTypes> = ({ children }) => {
  const sendMessage: socketContexInterface["sendMessage"] = useCallback(
    // this cide is to send messgae
    (msg) => {
      console.log(`send msg : ${msg}`);
    },
    []
  );
  useEffect(() => {
    const _socket = io("http://localhost:8080");
    return () => {
      _socket.disconnect();
    };
  }, []);
  return <socketContex.Provider value={null}>{children}</socketContex.Provider>;
};
