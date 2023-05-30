import axios from "axios";

export const signupService = async (email, password) => {
    return await axios.post("/api/auth/signup", {email, password})
}
