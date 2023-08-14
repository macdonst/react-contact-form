import { NextResponse } from 'next/server'

export async function POST(req, res) {
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('req: ', req)

    let firstName, lastName
    try {
      const formData = await req.formData()
      console.log('formData: ', formData)
      firstName = formData.get('firstName')
      lastName = formData.get('lastName')
    } catch (err) {
      let data = await req.json()
      console.log('data: ', data)
      firstName = data.firstName
      lastName = data.lastName
    }

    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!firstName || !lastName) {
      // Sends a HTTP bad request error code
      return new Response('First or last name not found', {
        status: 400,
      })
    }

    // Found the name.
    // Sends a HTTP success code
    return NextResponse.json({ data: `${firstName} ${lastName}` })
  }
