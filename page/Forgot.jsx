import { BASE_URL } from "../api/domain";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export const getForgot = async (e, email) => {
  e.preventDefault();

  try {
    const res = await fetch(`${BASE_URL}/api/v1/auth/password/forgot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });

    const data = await res.json();

    console.log("Status:", res.status);
    console.log("Data:", data);

    if (!res.ok) {
      throw new Error(data.message || "ایمیل نامعتبر است");
    }

    toast.success(data.message || "درخواست بازیابی رمز ارسال شد");

    return true;
  } catch (err) {
    toast.error(err.message || "خطا در ارتباط با سرور");

    return false;
  }
};
