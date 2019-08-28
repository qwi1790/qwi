import React, {useState} from 'react';
import './BodyPost.css';
import './body-post-content/BodyPostContent';
import LeftBar from './body-post-leftbar/BodyPostLeftBar';
import Content from './body-post-content/BodyPostContent';
import {Row, Col, Container } from 'react-bootstrap';

function BodyPost(props) {
  const {posts} = props;
  let [post, setPost] = useState();
  let arrEvent = [];
  for(let i = 0; i < posts.length; i++){
    arrEvent = [...arrEvent, itemClick(i)];
  }
  function itemClick(index){
    return () => {
      setPost(posts[index]);
    }
  }
  return (
    <div className="BodyPost">
      <Container>
        <Row>
            <Col md={3} lg={2} sm={4} className="pl-0 pr-0">
              <LeftBar arrEvent={arrEvent} postList={posts}></LeftBar>
            </Col>
            <Col md={9} lg={10} sm={8} className="pl-0 pr-0">
              { post !== undefined && <Content title={post.title} content={post.content}></Content>}
            </Col>           
        </Row>   
      </Container>       
    </div>
  );  
}

export default BodyPost;