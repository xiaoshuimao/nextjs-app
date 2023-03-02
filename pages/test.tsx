import { useEffect } from "react";


const Index = () => {

  const getList =async () => {
    console.log(1111)
   const response = await fetch('/api/api/media/list', {method: 'get'})
  }

  useEffect(() => {
    getList()
  }, [])
  return <div>22</div>
}

export default Index;