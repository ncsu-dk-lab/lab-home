import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'umi';
import { Row, Col, Image, Card } from 'antd';
import { SwapRightOutlined } from '@ant-design/icons';
import { getSeminarList } from '@/service/service';

import styles from './index.less';

export default function Contact() {
  const [SeminarList, setSeminarList] = useState<any>({});

  const getData = useCallback(() => {
    getSeminarList &&
      getSeminarList().then((res: any = {}) => {
        if (res?.state) {

          setSeminarList(res);
        }
      });
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="layoutContent">
      <Row style={{ display: 'flex' }}>
        {SeminarList?.state === 1 &&
          SeminarList?.data.map((item: any) => (
            <div style={{ marginRight: 20, marginBottom: 20 }} key={item.title}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    style={{ width: 300, height: 200 }}
                    src={item.pic}
                  />
                }
              >
                <div style={{ fontSize: 20, fontWeight: 800 }}>
                  {item.title}{' '}
                </div>
                <div
                  style={{
                    height: 85,
                    overflow: 'hidden',
                  }}
                  // className={styles.semInfo}
                >
                  {item.info}{' '}
                </div>
              </Card>
            </div>
          ))}
      </Row>
    </div>
  );
}
