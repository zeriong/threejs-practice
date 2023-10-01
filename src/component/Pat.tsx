import {useSearchParams} from 'react-router-dom';
import {useEffect, useMemo, useState} from 'react';

export const Pat = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const currentPat = useMemo(() => {
        return 'sdf'
    }, [searchParams])

    useEffect(() => {
        if (searchParams.get('name') === '야옹이') console.log('애옹')
    }, [searchParams.get('name')])
    return (
        <div>
            sdf
        </div>
    )
}