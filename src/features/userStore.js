import { create } from "zustand";

const useUserStore = create((set) => ({
  name: "",
  email: "", // Add the email property
  photo: "",
  setUserLoginDetails: (user) =>
    set(() => ({ name: user.name, email: user.email, photo: user.photo })),
  setSignOutState: () => set(() => ({ name: "", email: "", photo: "" })),
}));
export const selectUserName = (state) => state.name;
export const selectUserEmail = (state) => state.email;
export const selectUserPhoto = (state) => state.photo;

export default useUserStore;
