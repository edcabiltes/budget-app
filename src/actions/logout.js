import { redirect } from "react-router-dom";

// library
import { toast } from "react-toastify";

import { deleteItem } from "../helpers";

export async function logoutAction() {

    deleteItem({
        key: "userName"
    });
    toast.success("You've successfully deleted your account!")

    return redirect("/")
};