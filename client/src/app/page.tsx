"use client"

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

import Main from "@/components/home/Main";
import Footer from "@/components/home/Footer";
import Sports from "@/components/home/Sports";
import Info from "@/components/home/Info";

import { categoriesApi } from "@/server/api/category.api";

import { ICategory } from "@/interface/dashboard";

export default function Home() {

  const router = useRouter()

  const [categories, setCategories] = useState<ICategory[]>([])

  useEffect(() => {
    categoriesApi().then(data => {
      setCategories(data);
    });
  }, [])

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
