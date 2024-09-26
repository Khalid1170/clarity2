import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/body/navbar";
import Body from "@/components/body/body";
import Footer from "@/components/body/footer";



export default function Home() {
  return (
    <>
     <Navbar />
       <Body />
       <Footer/>
    </>
  );
}
