import { useEffect } from "react";
import { Button, Collapse, Modal, Spin } from 'antd'
import Script from 'next/script'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import styles from './test.module.less'
import Link from "next/link";


const Index = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  const getList = async () => {
    console.log(1111)
    const response = await fetch('/api/api/media/list', { method: 'get' })
  }
  const { Panel } = Collapse;

  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  useEffect(() => {
    getList()
  }, [])
  return <div>
    <div></div>
    {props.x}
    <Link href={'/test2'}>test2</Link>
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
  return {
    props: {
      x: 1
    }
  }
}

export default Index;