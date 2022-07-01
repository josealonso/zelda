import create from "zustand";

import { User } from "../models/User";

interface UserState {
  user: User
  setAddress: (addrString: string, isMaker: boolean) => void
}

export const userStore = create<UserState>((set) => ({
  // initial state
  user: {network: "", addrString: "", isMaker: false},
  // methods for manipulating state
  setAddress: (_polyAddress: string, _isMaker: boolean) => {
    set((state) => ({
      user: {network: "polygon", addrString: _polyAddress, isMaker: _isMaker}
    }));
  }
}));
