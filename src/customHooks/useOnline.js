import {useState, useEffect} from 'react'


const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(()=>{
        checkIsOnline()
        //Unmounting process
        return ()=> { 
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)
        }
    }, [])

    const handleOnline = () => {
        setIsOnline(true)
    }
    const handleOffline = () => {
        setIsOnline(false)
    }

    const checkIsOnline = () => {
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline',handleOffline);
    }

    return isOnline;
}

export default useOnline