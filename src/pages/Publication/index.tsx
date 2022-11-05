import React, { useState, useCallback, useEffect } from 'react';
import { Link, useRequest } from 'umi';
import { Row, Col, Image } from 'antd';
import { SwapRightOutlined } from '@ant-design/icons';

import { getPublicationList } from '@/service/service';

import styles from './index.less';

const Publication = () => {
  const [PublicationList, setPublicationList] = useState<any>({});

  const getPaperData = useCallback(() => {
    getPublicationList &&
      getPublicationList().then((res: any = [{}]) => {
        if (res) {
          setPublicationList(res);
        }
      });
  }, []);

  useEffect(() => {
    getPaperData();
  }, []);

  return (
    <div className="layoutContent">
      {PublicationList?.state === 1 &&
        PublicationList?.publication?.map((item: any) => (
          <div className="yearBlock" key={item.year}>
            <h1
              style={{
                fontSize: 26,
                fontWeight: 800,
                borderBottom: '1px solid #ccc',
              }}
            >
              {item.year}
            </h1>

            {item.papers.map((ele: any) => (
              <div
                className="paperBox"
                style={{ display: 'flex', marginBottom: 20 }}
                key={ele.title}
              >
                <div style={{ marginRight: 20 }}>
                  <Image
                    width={150}
                    height={120}
                    src={ele.pic}
                    style={{ borderRadius: 5 }}
                  />
                </div>

                <div
                  className="infoBox"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{}}>
                    <div style={{ fontWeight: 600, fontSize: 18 }}>
                      {ele.title}
                    </div>
                    <div>{ele.people}</div>
                    <div>{ele.publicator}</div>
                  </div>

                  <div>
                    {' '}
                    <div>
                      {ele.pdf ? (
                        <a href={ele.pdf} style={{ marginRight: 10 }}>
                          PDF
                        </a>
                      ) : (
                        ''
                      )}
                      {ele.code ? (
                        <a href={ele.code} style={{ marginRight: 10 }}>
                          Code
                        </a>
                      ) : (
                        ''
                      )}
                      {ele.slide ? (
                        <a href={ele.slide} style={{ marginRight: 10 }}>
                          Slide
                        </a>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default React.memo(Publication);
