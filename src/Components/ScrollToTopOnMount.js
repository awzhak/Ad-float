import React, { useEffect , useState} from 'react';

export default function ScrollToTopOnMount(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    return(
        null
    )
}