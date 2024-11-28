import SplineComponent from '@/components/dashboard/spline-component'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

import React from 'react'

const HomePage = () => {
  return (
    <div className='flex flex-col items-center bg-slate-600 pt-10'>
      <div className='flex flex-row gap-3'>
      <Link href="/auth">
        <Button>
        SignIn
        </Button>
      </Link>
      <Link href="/dashboard">
        <Button>
        Dashboard
        </Button>
      </Link>
      </div>
      <SplineComponent/>
    </div>
  )
}

export default HomePage