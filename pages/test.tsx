import { useEffect } from "react";
import { Button, Modal } from 'antd'
import Script from 'next/script'
import styles from './test.module.less'
import Link from "next/link";

const Index = () => {

  const getList = async () => {
    console.log(1111)
    const response = await fetch('/api/api/media/list', { method: 'get' })
  }

  useEffect(() => {
    getList()
  }, [])
  return <div>
    <Link href={'/test2'}>test2</Link>
    <div className={styles.button}>111</div>
    <Button type="primary" onClick={() => Modal.confirm({content: '22222'})}>2222</Button>

  </div>
}

export default Index;