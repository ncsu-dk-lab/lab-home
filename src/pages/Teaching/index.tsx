import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'umi';
import { Carousel, Row, Col, Card, Image, List } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';

import styles from './index.less';
import { getTeachingList } from '@/service/service';

export default function Teaching() {
  const [TeachingList, setTeachingList] = useState<any>({});

  const getTeachData = useCallback(() => {
    getTeachingList &&
      getTeachingList().then((res: any = [{}]) => {
        if (res.state) {
          setTeachingList(res);
        }
      });
  }, []);

  useEffect(() => {
    getTeachData();
  }, []);
  return (
    <div className="layoutContent">


      {TeachingList.state === 1 &&
        TeachingList.data.map((item: any) => (
          <div style={{marginBottom:30}}>
            <h1 key={item.classification}>{item.classification}</h1>
            {item?.course?.map((ele: any) => (
              <div style={{paddingLeft:20, marginBottom:20}} key={ele.name}>
                <div>{ele.name}</div>
                <div>
                  {ele.instructor ? (<span style={{ marginRight: 20,display:'inline-block' }}>Instructor: <a
                      href={ele.instructorLink}
                      target="_blank"

                    >
                       {ele.instructor}
                    </a></span>

                  ) : (
                    ''
                  )}

                  {ele.materials ? (<span>Course Materials:  <a href={ele.materialsLink} >
                      {ele.materials}
                    </a></span>

                  ) : (
                    ''
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}
