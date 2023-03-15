import { useEffect } from "react";
import { Button } from 'antd'
import type { NextPageWithLayout } from "./_app";
import CenterLayout from '@/components/CenterLayout'
import Link from "next/link";

const Index: NextPageWithLayout = () => {

  const getList = async () => {
    console.log(1111)
    const response = await fetch('/api/api/media/list', { method: 'get' })
  }

  useEffect(() => {
    getList()
  }, [])
  return <div>
    <Link href={'/test4'}></Link>
    <Button type="primary">2222</Button>

  </div>
}

Index.getLayout = (page) => {
  return <CenterLayout>
    我是其他布局的CenterLayout
    {page}
    </CenterLayout>
}

export default Index;