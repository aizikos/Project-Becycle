import React from 'react'
import { useAuth } from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import userImg from '../../../assets/png/avatar/avatar.webp'

const Profile = () => {
    const { user, loOutUser } = useAuth();
    const navigate = useNavigate()
    return (
        <div id='profile'>
            <div className="container">
                <div className="profile">
                    <div className="profile--box">
                        <h1>Личный кабинет</h1>
                        <div className="profile--box__img">
                            {
                                user?.photoUrl ?(
                                    <img src={user?.photoURL} alt="" />
                                ): <img src={userImg} alt="USER" />
                            }
                        </div>
                        <h1>{user?.email}</h1>
                        <button onClick={() => {
                            loOutUser();
                            navigate('/accaunt')
                        }}>
                            Выйти
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile