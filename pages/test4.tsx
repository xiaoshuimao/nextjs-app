import { useEffect } from "react";
import { Button } from 'antd'
import styles from './test.module.less'
import type { NextPageWithLayout } from "./_app";
import CenterLayout from '@/components/CenterLayout'

const Index: NextPageWithLayout = () => {

  const getList = async () => {
    console.log(1111)
    const response = await fetch('/api/api/media/list', { method: 'get' })
  }

  useEffect(() => {
    getList()
  }, [])
  return <div>

    <div className={styles.button}>111</div>
    <Button type="primary">2222</Button>

  </div>
}

Index.getLayout = (page) => {
  return <CenterLayout>{page}</CenterLayout>
}

export default Index;