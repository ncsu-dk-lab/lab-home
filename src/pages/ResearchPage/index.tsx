import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'umi';
import { Row, Col, Image } from 'antd';
import { SwapRightOutlined } from '@ant-design/icons';
import { getReasearchList } from '@/service/service';

import styles from './index.less';

export default function ResearchPage() {
  const [ResearchList, setResearchList] = useState<any>({});

  // 新闻
  const getResearchListData = useCallback(() => {
    getReasearchList &&
      getReasearchList().then((res: any = {}) => {
        if (res) {
          setResearchList(res.research);
        }
      });
  }, [getReasearchList]);

  useEffect(() => {
    getResearchListData();
  }, []);
  return (
    <div className="layoutContent">
      {ResearchList[0] &&
        ResearchList?.map((item: any) => (
          <div
            key={item.name}
            style={{
              backgroundColor: '#f5f5f5',
              padding: 50,
              marginBottom: 30,
              borderRadius: 10,
            }}
          >
            <div
              className="researchBox"
              style={{
                // display: 'flex',
                marginBottom: 20,
                paddingBottom: 10,
                borderBottom: '1px solid #ddd',
              }}
            >
              {/* <div style={{ marginRight: 20 }}>
                <Image width={240} src={item.pic} style={{ borderRadius: 5 }} />
              </div> */}
              <div style={{ marginBottom: 15 }}>
                <h1 style={{ fontSize: 22, fontWeight: 800 }}>
                  <span style={{ color: '#525b64' }}>Reaserch: </span>

                  <span style={{ color: '#c75c10' }}>{item.name}</span>
                </h1>
                <div>{item.info}</div>
              </div>
              <Row style={{ marginRight: 20, marginBottom: 15 }}>
                {item?.pic?.map((ele: any) => (
                  <Col span={8}>
                    <Image width={240} src={ele} style={{ borderRadius: 5 }} />
                  </Col>
                ))}
              </Row>
              <div>
                <h3 style={{ color: '#525b64' }}>Project Websites</h3>
                <ul>
                  {item?.website?.map((ele: any) => (
                    <li>
                      <span className="projectName">{ele[0]}: </span>
                      <span className="projectLink">
                        <a
                          href={ele[2]}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {ele[1]}
                        </a>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {item.projects &&
              item.projects?.map((ele: any) => (
                <div
                  className="projectBox"
                  style={{
                    display: 'flex',
                    marginLeft: 70,
                    marginBottom: 20,
                    paddingBottom: 10,
                    borderBottom: '1px solid #ddd',
                  }}
                  key={ele.name}
                >
                  <div style={{ marginRight: 20 }}>
                    <Image
                      width={200}
                      src={ele.pic}
                      style={{ borderRadius: 5 }}
                    />
                  </div>
                  <div>
                    <h1 style={{ fontSize: 22, fontWeight: 800 }}>
                      <span style={{ color: '#525b64' }}>Project: </span>
                      <span style={{ color: '#dea009' }}>{ele.name}</span>
                    </h1>
                    <div>{ele.info}</div>
                  </div>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
}
