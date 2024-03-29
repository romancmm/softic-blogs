async function useGetData(endpPoint: string) {
 // console.log('endpPoint:', endpPoint)
 const res = await fetch(
  `${process.env.NEXT_PUBLIC_APP_ROOT_API + endpPoint}`,
  {
   headers: {
    'content-type': 'application/json',
   },
  },
 )
 // The return value is *not* serialized
 // You can return Date, Map, Set, etc.

 //  if (!res.ok) {
 //   // This will activate the closest `error.js` Error Boundary
 //   throw new Error('Failed to fetch data')
 //  }

 return res.json()
}

export default useGetData
