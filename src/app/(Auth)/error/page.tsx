import Link from "next/link"


const ErrorPage = () => {
    return (
        <div className='flex justify-center py-20'>

      <div className='flex flex-col justify-center'>

        <h1 className='text-center'>Oops! Somthing went wrong</h1>
        <Link href="/login" className="text-center">Back to login</Link>


      </div>


    </div>
    )
}

export default ErrorPage