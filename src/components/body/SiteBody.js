import React, {useState} from 'react';
import './SiteBody.css';
import './content/Content';
import LeftBar from './left-bar/LeftBar';
import Content from './content/Content';
import {Row, Col, Container } from 'react-bootstrap';

function SiteBody(props) {
  const {listPost} = props;
  let [post, setPost] = useState({});
  let arrEvent = [];
  for(let i = 0; i < listPost.length; i++){
    arrEvent = [...arrEvent, itemClick(i)];
  }
  function itemClick(index){
    return () => {
      setPost(listPost[index]);
    }
  }
  return (
    <div className="SiteBody">
      <Container>
        <Row>
            <Col md={3} lg={2} sm={4} className="pl-0 pr-0">
              <LeftBar arrEvent={arrEvent} postList={listPost}></LeftBar>
            </Col>
            <Col md={9} lg={10} sm={8} className="pl-0 pr-0">
              <Content title={post.title} content={post.content}></Content>
            </Col>           
        </Row>   
      </Container>       
    </div>
  );  
}

export default SiteBody;