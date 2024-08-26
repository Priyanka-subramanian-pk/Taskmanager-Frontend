import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../api/axios/Axios";
import { auth, provider } from "../../../utils/firebase/Firebase";
import { toast } from 'react-toastify';

export const useGoogleSignup = () => {

    // const [value, setValue] = useState("");
    const navigate = useNavigate();

    const handleGoogleSignup = async () => {
        try {
            const data = await signInWithPopup(auth, provider);
            const uid = data?.user?.uid;
            console.log("uid", uid)

            // setValue(uid);


            if (uid) {
                // Send email to backend using Axios
                const response = await axiosInstance.post("/api/auth/createuser", { uid });

                if (response.status === 200) {
                    toast.success('Account created successfully,You can login now.');
                    console.log("Email sent successfully:", response?.data);
                    navigate("/login");
                } else {
                    console.error("Error sending email:", response?.data);
                    toast.error('Failed to signup. Please try again.');
                }
            } else {
                toast.error('Something went wrong');
            }
        } catch (error) {
            console.error("Error during Google sign-in:", error);
            toast.error('Failed to send email. Please try again.');
        }
    };

    return { handleGoogleSignup };
};