// export function getLocalStorageData(key, initialValue) {
//     if (typeof window === "undefined") {
//         return initialValue;
//     }
//     try {
//         const item = window.localStorage.getItem(key);
//         return item ? JSON.parse(item) : initialValue;
//     } catch (error) {
//         console.log(error);
//         return initialValue;
//     }
// }
//
// export function setLocalStorageData(key, value) {
//     try {
//         if (typeof window !== "undefined") {
//             window.localStorage.setItem(key, JSON.stringify(value));
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// import {useEffect, useState} from "react";
//
// function getSavedValue(key, initialValue) {
//     const savedValue = JSON.parse(localStorage.getItem(key))
//     if (savedValue) return savedValue
//     if (initialValue instanceof Function) return initialValue()
//     return initialValue
// }
//
// export default function useLocalStorage(key, initialValue) {
//
//     const [value, setValue] = useState(() => {
//         return getSavedValue(key, initialValue)
//     });
//     useEffect(() => {
//         localStorage.setItem(key, JSON.stringify(value))
//     }, [value])
//     return [value, setValue]
//
// }
