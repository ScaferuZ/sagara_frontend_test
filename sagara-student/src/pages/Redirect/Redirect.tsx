import { Button } from '@/components/ui/button'
import { NavLink } from 'react-router-dom'

const Redirect = () => {
  return (
    <>
      <div className='flex items-center justify-center'>
        <NavLink to="/dashboard">
          <Button variant="outline" className='bg-white-background dark:bg-background'>
            Redirecting...
          </Button>
        </NavLink>
      </div >
    </>
  )
}

export default Redirect
