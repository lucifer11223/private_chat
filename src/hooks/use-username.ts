import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const ANIMALS = ["bear", "cat", "dog", "elephant", "hippo"];
const STORAGE_KEY = "chat_username";

const generateUserName = () => {
    const word = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
    return `anonymous-${word}-${nanoid(5)}`;
}

export const useUsername = () => {
    const [username, setUsername] = useState("");

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            setUsername(stored);
            return;
        }

        const name = generateUserName();
        localStorage.setItem(STORAGE_KEY, name);
        setUsername(name);

    }, []);


    return { username}
}