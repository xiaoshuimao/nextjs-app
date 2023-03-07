import { useEffect } from "react";
import { Button, Collapse, Modal, Spin } from 'antd'
import getConfig from 'next/config'
import Script from 'next/script'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import InfiniteScroll from 'react-infinite-scroller';
import styles from './test.module.less'
import Link from "next/link";
import { useRouter } from "next/router";
import { worksApi } from "@/services";


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
  return <div>

    <InfiniteScroll
      initialLoad={true}
      loadMore={loadMore}
      hasMore={true}
      loader={<div key='loader' className={styles.loader}><Spin /> </div>}
    >
      <div className={styles.list}>
        {props?.data?.map(item => <div key={item._id} className={styles.item}>
          <img className={styles.img} loading="lazy" src={item.cover} />
        </div>)}
      </div>
    </InfiniteScroll>



    <Link href={'/test2'}>test2</Link>
    <div>
      <a onClick={handleClick}>test</a>
    </div>
    <div className={styles.button}>111</div>
    <Button type="primary" onClick={() => Modal.confirm({ content: '22222' })}>2222</Button>
    <Spin spinning tip="loading"></Spin>
    <Collapse defaultActiveKey={['1']} >
      <Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>

  </div>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.query)
  const response = await worksApi({ limit: 20 })
  return {
    props: {
      data: response?.data || []
    }
  }
}

export default Index;