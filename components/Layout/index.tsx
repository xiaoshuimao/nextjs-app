import { Input } from 'antd';
import { useRouter } from 'next/router';
import styles from './index.module.less'
const Index = ({ children }) => {
  const router = useRouter()
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      router.push(`/?keyword=${e.target.value}`)
    }
  }
  return <>
    <div><Input placeholder='请输入' onKeyDown={handleKeyDown} /></div>
    {children}
    <div>footer</div>
  </>
}

export default Index;