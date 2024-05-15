import { ResetForm } from '@/components/auth/reset-form'
import React, { Suspense } from 'react'

function ResetPasswordPage() {
  return (
    <div className='flex justify-center py-20'>

      <div className='flex flex-col justify-center md:w-[400px]'>

        <h1 className='text-center'>Forgot your password?</h1>
        <p className='text-center text-content1'>Enter your email and we will help you reset your password.</p>

        
        <Suspense>
          <ResetForm className='mt-4' />
        </Suspense>
      </div>


    </div>
  )
}

export default ResetPasswordPage