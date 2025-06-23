import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser ,removeUser } from '../utils/userSlice';




const Header = () => {
  const user = useSelector((store)=>store.user);
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const handleSignOut=()=>{
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  navigate("/error");
});
  }

  
    useEffect(() => {
 onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid , email , displayName} = user;
    dispatch(addUser({uid:uid , email: email , displayName:displayName}));
    navigate("/Browser")
    // ...
  } else {
    // User is signed out
    // ...
    dispatch(removeUser());
    navigate("/")
   
  }
});
    },[])
  return (
    <div className=" z-10 absolute px-8 py-2 bg-gradient-to-b from-black flex justify-between w-full">
      <img className="w-48" src = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='logo'></img>
    <div>
{user && <button className=" bg-red-600 text-white w-24 h-10 rounded-sm "onClick={handleSignOut}> Sign Out </button>}
    </div>
    </div>
  )
}

export default Header;
