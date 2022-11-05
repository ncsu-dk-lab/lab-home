import { useEffect } from 'react';
import { Link, useLocation } from 'umi';
import { menus } from '../../config/routes';
import { Layout, Menu, Card } from 'antd';
import logoImg from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faTiktok,
  faYoutube,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

import styles from './index.less';
const useScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log('pathname===', pathname);
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
export default function BaseLayout(props) {
  console.log('props', props);
  // console.log('Router', router);
  useScrollToTop();
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <div className={[styles.headerLayout, styles.midbody].join(' ')}>
          <h1 className={styles.logoBox}>
            {/* <Link to="/"> */}
            <img
              className={styles.logo}
              src={logoImg}
              alt="log"
              style={{ width: 100 }}
            />
            {/* <span style={{ fontSize: 30, fontWeight: 800, color: '#4fa2d9' }}>
              EIC Lab
            </span> */}
            {/* </Link> */}
          </h1>
          <Menu
            className={styles.menu}
            // theme="dark"
            mode="horizontal"
            selectedKeys={[props?.location?.pathname + props?.location?.search]}
          >
            {(menus || []).map((menu) => (
              <Menu.Item key={menu.key} title={menu.title}>
                <Link to={menu.path} style={{ color: '#000' }}>
                  {menu.title}
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </Header>
      <Content className={styles.siteLayout}>{props.children}</Content>
      <Footer className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.contact}>
            <div
              style={{
                fontSize: '16px',
                marginBottom: '15px',
              }}
            >
              Contact US:
            </div>
            <div
              style={{
                display: 'flex',
                paddingRight: '50%',
              }}
            >
              <div
                style={{
                  flex: '1',
                  fontWeight: '600',
                  fontSize: '12px',
                }}
              >
                <div>Address: </div>
                <div>Tel: </div>
                <div>Email: </div>
              </div>
              <div
                style={{
                  flex: '2',
                  fontSize: '12px',
                }}
              >
                <div>421 Elizabeth Str, San Jose, CA, 94112 </div>
                <div>(408)-334-2395 </div>
                <div>ljw040426@gmail.com</div>
              </div>
            </div>
          </div>
          <div className={styles.social}>
            <FontAwesomeIcon
              icon={faTwitter}
              size="xl"
              style={{ margin: '5px' }}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              size="xl"
              style={{ margin: '5px' }}
            />
            <FontAwesomeIcon
              icon={faYoutube}
              size="xl"
              style={{ margin: '5px' }}
            />
            <FontAwesomeIcon
              icon={faGithub}
              size="xl"
              style={{ margin: '5px' }}
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              size="xl"
              style={{ margin: '5px' }}
            />
            <FontAwesomeIcon
              icon={faTiktok}
              size="xl"
              style={{ margin: '5px' }}
            />
          </div>
        </div>
        <p>2022 © NCSU Efficient & Intelligent Computing Lab</p>
      </Footer>
    </Layout>
  );
}
