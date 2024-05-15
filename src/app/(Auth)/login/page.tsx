import { Divider } from '@nextui-org/react'
import React, { Suspense } from 'react'
import SocialLoginButtons from '@/components/auth/social-login-buttons'
import { LoginForm } from '@/components/auth/login-form'

const Login = () => {
  return (
    <div className='flex justify-center py-20'>

      <div className='flex flex-col justify-center md:w-[400px]'>

        <h1 className='text-center'>Welcome Back</h1>
        <p className='text-center'>Log in to your account to continue</p>

        <div className='flex flex-wrap gap-3 w-full my-5'>
          <SocialLoginButtons />
        </div>

        <div className='flex items-center gap-3 text-gray-400'>
          <Divider className='flex-1' />or<Divider className='flex-1' />
        </div>
        <Suspense>
          <LoginForm className='mt-4' />
        </Suspense>

      </div>

    </div>
  )
}

export default Login