import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'umi';
import { Carousel, Row, Col, Card, Image, List } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';

import styles from './index.less';
import { getNewsList } from '@/service/service';
import { Timeline } from 'react-twitter-widgets';

export default function HomePage() {
  const [NewsList, setNewsList] = useState<any>({});

  // 新闻
  const getNewsListData = useCallback(() => {
    getNewsList &&
      getNewsList().then((res: any = {}) => {
        if (res) {
          setNewsList(res);
        }
      });
  }, [getNewsList]);

  useEffect(() => {
    getNewsListData();
  }, []);

  const Arrow = ({ type, style, className, onClick }: any) => {
    return type === 'left' ? (
      <LeftCircleOutlined className={styles.prevArrow} onClick={onClick} />
    ) : (
      <RightCircleOutlined className={styles.nextArrow} onClick={onClick} />
    );
  };

  return (
    <div className="layoutContent">
      <Row gutter={[16, 24]}>
        <h3 className={styles.title}>
          Welcome To NCSU Efficient & Intelligent Computing Lab
        </h3>
        <Col span={12}>
          <div style={{ fontSize: 16 }}>
            <p>
              SMILE lab focuses on the frontier research of Artificial
              Intelligence, especially Machine Learning, Computer Vision and
              Data Mining. Our research is driven by the explosion of real-world
              diverse and massive data from the Internet, social media, sensor,
              personal or publicly available texts, photos, audios and videos.{' '}
            </p>
            <p>
              We start by treating fundamental theory from learning algorithm as
              the soul of machine intelligence and arm it with visual
              perception. What follows is a machine learning system that not
              only actively collects massive visual information from the
              environment, but also processes and responds human interactively
              through recognition, classification, understanding, and inference.
              We approach visual problem "what is it?" but we are more
              interested in "what should we do?" or "what does it mean?" and
              hopefully tackle them by interacting with machines when data are
              in large-scale and parsing process is extremely complex, e.g.,
              mining representations among billions of images, recommending
              through visual cues, deep understanding and early prediction of
              events and activities under social context.
            </p>
          </div>
        </Col>
        <Col span={12}>
          <Carousel
            arrows={true}
            autoplay={true}
            effect="fade"
            prevArrow={<Arrow type="left" className={styles.prevArrow} />}
            nextArrow={<Arrow type="right" className={styles.nextArrow} />}
          >
            <Image preview={false} src={require('../assets/banner_1.jpeg')} />
            <Image preview={false} src={require('../assets/banner_2.jpeg')} />
            <Image preview={false} src={require('../assets/banner_3.jpeg')} />
            <Image preview={false} src={require('../assets/banner_4.jpeg')} />
          </Carousel>
        </Col>
      </Row>

      <Row >
        <h3 className={styles.title} style={{"marginTop":20}}>Opening</h3>
        <Col span={24}>
          <div style={{ fontSize: 16 }}>
            <p>
              I am recruiting talented and well-motivated Ph.D. students every
              year! If you are interested, please apply here for the CS
              department and list Dr. Peng as your intended supervisor.
            </p>
            <p>
              If you are a UCLA or USC student and are interested in joining our
              lab, please fill in the following form. I will go over the
              applications at the beginning of each quarter/semester and contact
              you if you fit our lab. You don’t have to send me another email,
              as the form will generate one automatically. Unfortunately, due to
              a large number of requests, I won’t be able to give individual
              feedback.
            </p>
            <ul>
              <li>
                I’m actively looking for a postdoc. If you are interested,
                please drop me an email with your CV and research statement.
              </li>
              <li>
                For prospective PhD students, I start contacting students for a
                phone interview around January/Feburary. If you have submitted
                an official application, you don’t need to email me before
                Feburary.
              </li>
              <li>
                For prospective summer interns, please apply through the
                UCLA-CSST summer program if applicable. Otherwise, please send
                me your request by 3/31.
              </li>
            </ul>
            <p>
              If you have trouble in submitting the form, please send send the
              related information to my email.
            </p>
          </div>
        </Col>
      </Row>

      <Row gutter={[24, 30]} className={styles.recommend}>
        <Col className="gutter-row" span={14}>
          <h3 className={styles.title}>News</h3>
          <div style={{ maxHeight: '500px', overflow: 'scroll' }}>
            <List
              bordered
              dataSource={NewsList?.news}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </div>
        </Col>

        <Col className="gutter-row" span={10}>
          <h3 className={styles.title}>Twitters</h3>
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'TwitterDev',
            }}
            options={{
              height: '500',
            }}
          />
        </Col>
      </Row>
    </div>
  );
}
