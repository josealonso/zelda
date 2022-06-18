import { Description } from "@ethersproject/properties";
import create from "zustand";

import { User } from "./models/User";

interface UserState {
  user: User
  setAddress: (addrString: string) => void
}

export const useStore = create<UserState>((set) => ({
  // initial state
  user: {network: "", addrString: ""},
  // methods for manipulating state
  setAddress: (polyAddress: string) => {
    set((state) => ({
      user: {network: "polygon", addrString: polyAddress}
    }));
  }
}));
