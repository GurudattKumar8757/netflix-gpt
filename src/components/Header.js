import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute z-10 flex justify-between w-full px-8 py-2 bg-gradient-to-b from-black">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center p-2">
          {showGptSearch && (
            <select
              className="px-3 py-2 m-2 text-white bg-gray-500 rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.identifier}>{lang.name}</option>
              ))}
            </select>
          )}
          <button
            className="flex items-center gap-1 px-4 py-2 mx-4 text-white bg-purple-600 rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? (
              "Homepage"
            ) : (
              <>
                <MagnifyingGlassIcon className="w-5 h-5" />
                GPTSearch
              </>
            )}
          </button>
          <img
            alt="usericon"
            className="w-12 h-12 rounded-md"
            src={user?.photoURL}
          />
          <button
            className="p-2 m-2 font-medium text-white bg-red-500 rounded-lg"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
