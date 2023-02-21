import React, {useEffect, useState} from 'react';

const useToken = () => {  //bu hooks local storage ye kaydettiğimiz tokeni döndüren bir hookstur.

    const [token, setToken] = useState("");

    useEffect(() => {
        setToken(JSON.parse(localStorage.getItem("auth")))
    }, []);

    return [token];
}
export default useToken;