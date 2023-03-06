import { Input } from 'antd';
import styles from './index.module.less'
const Index = ({ children }) => {
  return <>
    <div><Input placeholder='请输入' /></div>
    {children}
    <div>footer</div>
  </>
}

export default Index;