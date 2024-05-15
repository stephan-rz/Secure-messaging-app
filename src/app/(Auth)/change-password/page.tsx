import { NewPasswordForm } from '@/components/auth/new-password-form'
import React, { Suspense } from 'react'

function ChangePasswordPage() {
  return (
    <div className='flex justify-center py-20'>

      <div className='flex flex-col justify-center md:w-[400px]'>

        <h1 className='text-center'>Change Password</h1>
        <p className='text-center text-content1'>Enter a new password below to change your password.</p>

        
        <Suspense>
          <NewPasswordForm className='mt-4' />
        </Suspense>
      </div>


    </div>
  )
}

export default ChangePasswordPage