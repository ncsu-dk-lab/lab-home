import React, { useState, useCallback, useEffect } from 'react';
import { Link, useRequest } from 'umi';
import { Row, Col, Tabs, Image } from 'antd';

import { getActivitiesList } from '@/service/service';

import styles from './index.less';

const { TabPane } = Tabs;

const Activities = () => {
  const [ActList, setActList] = useState<any>({});
  const [keyCurrent, setkeyCurrent] = useState<any>('Party');
  const [TabsName, setTabsName] = useState<any>([]);

  const getActData = useCallback(() => {
    getActivitiesList &&
      getActivitiesList().then((res: any = [{}]) => {
        if (res) {
          setActList(res);
          setTabsName(Object.keys(res.data));
        }
      });
  }, []);

  const onChange = (key: string) => {
    setkeyCurrent(key);
  };
  useEffect(() => {
    getActData();
  }, []);

  return (
    <div className="layoutContent">
      <Tabs onChange={onChange} size="large" className="actTab">
        {ActList.state === 1 &&
          TabsName.map((item: any) => (
            <TabPane tab={item} key={item}>
              <Row style={{ display: 'flex', width: '100%' }}>
                {ActList.state === 1 &&
                  ActList?.data[keyCurrent].map((ele: any) => (
                    <div style={{ marginRight: 20, marginBottom: 20 }}>
                      <Image
                        width={200}
                        height={150}
                        src={ele}
                        style={{ borderRadius: 5 }}
                      />
                    </div>
                  ))}
              </Row>
            </TabPane>
          ))}
      </Tabs>
    </div>
  );
};

export default React.memo(Activities);
