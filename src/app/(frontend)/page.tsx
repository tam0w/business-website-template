import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import './globals.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  return (
    <div className='min-h-full'>
      <div className="bg-red-300 h-full">
        {!user && <h1>Welcome to your new project.</h1>}
        {user && <h1 className='text-sm'>Welcome back, {user.email}</h1>}
      </div>
    </div>
  )
}
