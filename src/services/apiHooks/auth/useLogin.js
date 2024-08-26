
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../api/axios/Axios";


export const useLogin = () => {

    const navigate = useNavigate();

    const handleLogin = async (formData) => {
        try {

            // Send email to backend using Axios
            const response = await axiosInstance.post("/api/your-endpoint", formData);

            if (response.status === 200) {
                console.log("Email sent successfully:", response?.data);
                toast.success('Login successfull');
                navigate("/");
                return;
            }

        } catch (error) {
            console.error("Error during Google sign-in:", error);
            alert("Sign-in failed. Please try again.");
        }
    };

    return { handleLogin };
};