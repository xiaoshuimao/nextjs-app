import { Input } from 'antd';
import styles from './index.module.less'
const Index = ({ children }) => {
  return <>
    <div><Input placeholder='请输入2' /></div>
    {children}
    <div>footer2</div>
  </>
}

export default Index;