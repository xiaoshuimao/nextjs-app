import { useEffect } from "react";
import { Button } from 'antd'
import Script from 'next/script'
import Link from "next/link";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";

const Index = () => {

  const getList = async () => {
    console.log(1111)
    const response = await fetch('/api/api/media/list', { method: 'get' })
  }
  const { user } = useStore()

  useEffect(() => {
    getList()
  }, [])
  return <div>
    <p>nick: {user.userInfo.nick}</p>
    <Link href={'/test3'}>test3</Link>
    <Button type="primary">2222</Button>

  </div>
}

export default observer(Index);