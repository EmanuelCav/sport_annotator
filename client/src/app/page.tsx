"use client"

import { generateUserApi } from "@/server/api/user.api";

import { userStore } from "../server/store/user.store";

export default function Home() {

  const { isLoggedIn, generateUser } = userStore()

  // if (!isLoggedIn) {
  //   generateUserApi().then(data => {
  //     generateUser(data);
  //   });
  // }

  return (
    <div className="bg-red-200">

    </div>
  );
}
