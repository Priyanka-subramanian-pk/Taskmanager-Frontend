import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import { auth, provider } from "../../../utils/firebase/Firebase"

export const useGoogleSignin = () => {
  const navigate = useNavigate();

  const handleGoogleSignin = async () => {
    try {

      const data = await signInWithPopup(auth, provider);
      const uid = data?.user?.uid;
      console.log("uid", uid)

      if (uid) {
        // Send email to backend using Axios
        const response = await axios.post("/api/your-endpoint", { uid });

        if (response.status === 200) {
          console.log("Email sent successfully:", response?.data);
          toast.success('Login successfull');
          navigate("/");
          return;
        }
      } else {
        toast.error('Failed to login. Please try again');
      }
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      alert("Sign-in failed. Please try again.");
    }
  };

  return { handleGoogleSignin };
};