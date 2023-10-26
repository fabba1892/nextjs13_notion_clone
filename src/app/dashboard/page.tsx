import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { UserButton } from '@clerk/nextjs'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const DashboardPage = (props: Props) => {
  return (
    <>
    <div className="grainy min-h-screen">
      <div className="max-w-7xl mx-auto p-10">
        <div className="h-14"></div>
        <div className="flex justify-between items-center md:flex-row flex-col "></div>
        <div className="flex items-center">
          <Link href="/">
            <Button className="bg-green-600" size="sm">
              <ArrowLeft className="mr-1 w-4 h-4"></ArrowLeft>
              Back
            </Button>
          </Link>
          <div className="w-4"></div>
          <h1 className="text-3xl font-bold text-gray-900">My Notes</h1>
          <div className="w-4"></div>
          <UserButton />
        </div>
      </div>

     <div className="h-8"></div>
     <Separator/>
     <div className="h-8"></div>

    </div>
    </>
  )
}

export default DashboardPage