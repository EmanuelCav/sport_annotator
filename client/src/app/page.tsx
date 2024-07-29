"use client"

import { useEffect } from "react";

import { generateUserApi } from "@/server/api/user.api";
import { userStore } from "../server/store/user.store";

import { getUserStorage } from "@/utils/storage";

export default function Home() {

  const { isLoggedIn, generateUser } = userStore()

  useEffect(() => {
    if (!isLoggedIn && !getUserStorage().isLoggedIn) {
      generateUserApi().then(data => {
        generateUser(data);
      });
    }
  }, [isLoggedIn])

  return (
    <div className="bg-red-200">

    </div>
  );
}
