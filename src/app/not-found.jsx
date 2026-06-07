import Link from 'next/link'
 import NotFoundImg from '@/assets/pet-not-found.png'
import Image from 'next/image'
import { Button } from '@heroui/react'
import { IoMdHome } from 'react-icons/io'
export default function NotFound() {
  return (
    <div className='flex flex-col items-center my-5'>
     <Image src={NotFoundImg} alt='not found' width={600} height={600}></Image>
     <Button className='bg-pink-600'> <IoMdHome/>
 <Link href="/">Back to Home</Link></Button>
    </div>
  )
}