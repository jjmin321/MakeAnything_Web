import react from 'react'
import { IUser } from '../../../../interface/IUser';

interface IBannerUser  {
    info: IUser;
}

const BannerUser = ({info} :IBannerUser) => {
    return (
        <>
        {info.name}
        </>
    )
}

export default BannerUser;