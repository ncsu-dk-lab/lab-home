import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'umi';
import { Carousel, Row, Col, Card, Image, List } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';

import styles from './index.less';
import { getServiceList2 } from '@/service/service';

export default function Services() {
  const [ServiceList, setServiceList] = useState<any>({});

  const getTeachData = useCallback(() => {
    getServiceList2 &&
      getServiceList2().then((res: any = [{}]) => {
        if (res.state) {
          setServiceList(res);
        }
      });
  }, []);

  useEffect(() => {
    getTeachData();
  }, []);
  return (
    <div className="layoutContent">
      {ServiceList.state === 1 &&
        ServiceList.data.map((item: any) => (
          <div key={item.classification}>
            <h1>{item.classification}</h1>
            <ul>
              {item?.course?.map((ele: any) => (
                <li key={ele}>{ele}</li>
              ))}
            </ul>
          </div>
        ))}

      {/* {ServiceList.state === 1 &&
        ServiceList.data.map((item: any) => (
          <div style={{ marginBottom: 30 }} key={item.classification}>
            <h1>{item.classification}</h1>
            {item?.course?.map((ele: any) => (
              <div style={{ paddingLeft: 20, marginBottom: 15 }} key={ele}>
                <div>{ele}</div>

              </div>
            ))}
          </div>
        ))} */}
    </div>
  );
}
