"use client"

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

import Main from "@/components/home/Main";
import Footer from "@/components/home/Footer";
import Sports from "@/components/home/Sports";
import Info from "@/components/home/Info";

import { generateUserApi } from "@/server/api/user.api";
import { categoriesApi } from "@/server/api/category.api";
import { userStore } from "../server/store/user.store";

import { ICategory } from "@/interface/dashboard";

import { getUserStorage } from "@/utils/storage";

export default function Home() {

  const { isLoggedIn, generateUser } = userStore()

  const router = useRouter()

  const [categories, setCategories] = useState<ICategory[]>([])

  useEffect(() => {
    if (!isLoggedIn && !getUserStorage().isLoggedIn) {
      generateUserApi().then(data => {
        generateUser(data);
      });
    }
  }, [isLoggedIn])

  useEffect(() => {
    categoriesApi().then(data => {
      setCategories(data);
    });
  }, [isLoggedIn])

  const redirectCreate = () => {
    router.push('/create')
  }

  return (
    <div className="max-w-6xl mx-auto">
      <Main redirectCreate={redirectCreate} />
      <Info />
      <Sports categories={categories} />
      <Footer />
    </div>
  );
}
