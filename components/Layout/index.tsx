import { useStore } from '@/store';
import { Input } from 'antd';
import { observer, Observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import styles from './index.module.less'
const Index = ({ children }) => {
  const router = useRouter()
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      router.push(`/?keyword=${e.target.value}`)
    }
  }
  const { user } = useStore();
  return <>
    <div>
      <Observer>{() => {
        return <div>{user?.userInfo?.nick}</div>
      }}</Observer>
      <Input placeholder='请输入' onKeyDown={handleKeyDown} />
    </div>
    {children}
    <div>footer</div>
  </>
}

export default observer(Index);