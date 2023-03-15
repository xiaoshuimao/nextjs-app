import { useEffect, useState } from "react";
import { Button, Collapse, Input, Modal, Spin } from 'antd'
import getConfig from 'next/config'
import Script from 'next/script'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import InfiniteScroll from 'react-infinite-scroller';
import styles from './index.module.less'
import Link from "next/link";
import { useRouter } from "next/router";
import { worksApi } from "@/services";
import { useStore } from "@/store";
import { observer } from 'mobx-react-lite'

const Index = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  const getList = async () => {
    const response = await worksApi({ limit: 20, })
  }
  const { Panel } = Collapse;
  const router = useRouter()
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  useEffect(() => {
    getList()
  }, [])

  const handleClick = () => {
    router.push(`/test?t=${Date.now()}`)
  }

  const loadMore = async () => {

  }
  useEffect(() => {
    setData(props.data)
  }, [props.data])

  const [data, setData] = useState(props.data)

  // 全局状态
  const { user } = useStore()
  return <div>
    <InfiniteScroll
      initialLoad={true}
      loadMore={loadMore}
      hasMore={true}
      loader={<div key='loader' className={styles.loader}><Spin /> </div>}
    >
      <div className={styles.list}>
        {data.map(item => <div key={item._id} className={styles.item}>
          <img className={styles.img} loading="lazy" src={item.cover} />
        </div>)}
      </div>
    </InfiniteScroll>

    <p> nick: {user?.userInfo?.nick}</p>
    <Input onChange={e => {  
      user.setUserInfo({
        nick: e.target.value
      })
    }}  />

    <Link href={'/test2'}>test2</Link>
    <div>
      <a onClick={handleClick}>test</a>
    </div>
    <Button type="primary" onClick={() => Modal.confirm({ content: '22222' })}>2222</Button>


  </div>
}

type Props = {
  data: any[]
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  console.log(ctx.query.keyword, 'ctx.query.keyword')
  const response = await worksApi({ limit: 20, keyword: ctx.query.keyword })
  return {
    props: {
      data: response?.data || []
    }
  }
}


export default observer(Index);