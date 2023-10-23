import {BsFillHeartFill} from "react-icons/bs"

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; { year} Pascual Eburi. All rights reserved.
      </small>
      <p className="text-xs text-center">
        <span className="font-semibold">About this website:</span> 
        <span className="flex w-full"> 
            Made with <span className="mx-2"><BsFillHeartFill color="#f87171"/> </span> 
             & built with React & Next.js, TypeScript, Tailwind CSS, Framer Motion, Vercel hosting.
        </span>
      </p>
    </footer>
  )
}
