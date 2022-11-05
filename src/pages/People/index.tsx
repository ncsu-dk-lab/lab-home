import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'umi';
import { Carousel, Row, Col, Card, Image, Divider } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faTiktok,
  faYoutube,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBuildingColumns,
  faEnvelope,
  faMapLocation,
  faGraduationCap,
  faHashtag,
} from '@fortawesome/free-solid-svg-icons';
import styles from './index.less';
import { getPeopleList, getNewsList } from '@/service/service';

const { Meta } = Card;

function shuffle(arr: any) {
  var l = arr.length;
  var index, temp;
  while (l > 0) {
    index = Math.floor(Math.random() * l);
    temp = arr[l - 1];
    arr[l - 1] = arr[index];
    arr[index] = temp;
    l--;
  }
  return arr;
}

export default function People() {
  const [PeopleList, setPeopleList] = useState<any>({});
  const [PhdIndexArr, setPhdIndexArr] = useState<any>({});
  const [MsIndexArr, setMsIndexArr] = useState<any>({});

  const getPeopleListData = useCallback(() => {
    getPeopleList &&
      getPeopleList().then((res: any = {}) => {
        if (res) {
          let tmpPhdIndex = [];
          let tmpMsIndex = [];

          for (let i in res.phd) {
            tmpPhdIndex.push(i);

            res.phd[i] = shuffle(res.phd[i]);
          }
          tmpPhdIndex?.sort(function (a, b) {
            return parseInt(b) - parseInt(a);
          });
          setPhdIndexArr(tmpPhdIndex);

          for (let j in res.master) {
            tmpMsIndex.push(j);

            res.master[j] = shuffle(res.master[j]);
          }
          tmpMsIndex?.sort(function (a, b) {
            return parseInt(b) - parseInt(a);
          });
          setMsIndexArr(tmpMsIndex);

          setPeopleList(res);
        }
      });
  }, [getPeopleList]);

  useEffect(() => {
    getPeopleListData();
  }, []);

  return (
    <div className="layoutContent">
      <Row
        gutter={[16, 24]}
        style={{
          marginBottom: '30px',
          padding: 20,
          background: '#f5f5f5',
          borderRadius: 5,
        }}
      >
        <Col>
          <h3 className={styles.title}>Lab Director</h3>
          <Row gutter={[16, 24]}>
            {PeopleList.director?.map((item: any) => (
              <>
                <Col>
                  <Image
                    width={260}
                    height={260}
                    src={require('../../assets/peoples/DongkuanXu.jpg')}
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'top',
                      borderRadius: 600,
                    }}
                  />
                </Col>
                <Col style={{ width: 700, fontSize: 18, marginLeft: 10 }}>
                  <div
                    style={{
                      fontWeight: '700',
                      fontSize: '20px',
                      textAlign: 'left',
                      marginBottom: 20,
                    }}
                  >
                    {item.name}
                  </div>
                  <Row gutter={[16, 24]}>
                    <Col span={12}>
                      <p>
                        <FontAwesomeIcon
                          icon={faBuildingColumns}
                          size="xl"
                          style={{ marginRight: '10px' }}
                        />{' '}
                        {item.pos}
                      </p>
                      <p>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          size="xl"
                          style={{ marginRight: '10px' }}
                        />{' '}
                        {item.mail}
                      </p>
                      <p>
                        <FontAwesomeIcon
                          icon={faMapLocation}
                          size="xl"
                          style={{ marginRight: '10px' }}
                        />
                        {item.address}
                      </p>
                      <p>
                        <FontAwesomeIcon
                          icon={faHashtag}
                          size="xl"
                          style={{ marginRight: '10px' }}
                        />
                        {item.major}
                      </p>
                    </Col>
                    <Col span={12}>
                      <p>
                        <FontAwesomeIcon
                          icon={faGraduationCap}
                          size="xl"
                          style={{ marginRight: '10px' }}
                        />
                        <a
                          href={item.scholarlink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#000' }}
                        >
                          Google Scholar
                        </a>
                      </p>
                      <p>
                        <FontAwesomeIcon
                          icon={faTwitter}
                          size="xl"
                          style={{ marginRight: '10px' }}
                        />
                        <a
                          href={item.twitterlink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#000' }}
                        >
                          Twitter
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </>
            ))}
          </Row>
        </Col>
      </Row>

      <Row
        gutter={[16, 24]}
        style={{
          padding: 20,
          marginBottom: '30px',
          background: '#f5f5f5',
          borderRadius: 5,
        }}
      >
        <Col>
          <h3 className={styles.title}>Phd Students</h3>
          {PhdIndexArr[0] &&
            PhdIndexArr?.map((item: any) => (
              <Row key={item} gutter={[16, 24]} style={{ marginTop: '20px' }}>
                <Col span={24}>
                  <h2>{item}</h2>
                </Col>
                {PeopleList?.phd &&
                  PeopleList?.phd[item]?.map((ele: any) => (
                    <Col key={ele.name}>
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="img" src={ele.pic} />}
                      >
                        <div style={{ fontWeight: '700', fontSize: '18px' }}>
                          {ele.name}
                        </div>
                        <div>{ele.major}</div>
                        <div>{ele.mail}</div>
                        <div>
                          <a href={ele.homepage} target="_blank">
                            Hompage
                          </a>
                        </div>
                      </Card>
                    </Col>
                  ))}
              </Row>
            ))}
        </Col>
      </Row>

      <Row
        gutter={[16, 24]}
        style={{
          marginBottom: '30px',
          padding: 20,
          background: '#f5f5f5',
          borderRadius: 5,
        }}
      >
        <Col>
          <h3 className={styles.title}>Master Students</h3>
          {MsIndexArr[0] &&
            MsIndexArr?.map((item: any) => (
              <Row key={item} gutter={[16, 24]} style={{ marginBottom: 20 }}>
                <Col span={24}>
                  <h2>{item}</h2>
                </Col>
                {PeopleList?.master &&
                  PeopleList?.master[item]?.map((ele: any) => (
                    // <div key={ele.name}>ele.name</div>
                    <Col key={ele.name}>
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="img" src={ele.pic} />}
                      >
                        <div style={{ fontWeight: '700', fontSize: '18px' }}>
                          {ele.name}
                        </div>
                        <div>{ele.major}</div>
                        <div>{ele.mail}</div>
                        <div>
                          <a href={ele.homepage} target="_blank">
                            Hompage
                          </a>
                        </div>
                      </Card>
                    </Col>
                  ))}
              </Row>
            ))}
        </Col>
      </Row>
    </div>
  );
}
