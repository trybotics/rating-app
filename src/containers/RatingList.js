import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Modal, Button, Space, Rate } from 'antd';
import { NavLink } from 'react-router-dom'

import RatingList from '../components/RatingList';

import { getRatingList } from '../actions/Rating'

function info(message) {
  Modal.info({
    title: 'This is a review text.',
    content: (
      <div>
        <p>{message}</p>
      </div>
    ),
    onOk() { },
  });
}


const columns = [
  {
    title: 'Rating',
    dataIndex: 'review_rating',
    key: 'review_rating',
    render: (review_rating) => (
      <span>
        <p style={{ marginBottom: 0 }}>{review_rating}</p>
        <Rate disabled allowHalf defaultValue={review_rating ? Number(review_rating.split('out of')[0].trim()) : 0} />
      </span>
    ),
  },
  {
    title: 'Profile Name',
    dataIndex: 'profile_name',
    key: 'profile_name',
  },
  {
    title: 'Title',
    dataIndex: 'review_title',
    key: 'review_title',
  },
  {
    title: 'Action',
    key: 'action',
    render: (record) => (
      <Space size="middle">
        <Button type="primary" ghost onClick={() => info(record.review_text)}>
          Show Review Text
        </Button>
        <Button type="primary" ghost>
          <NavLink key={record.id} to={{ pathname: `rating/${record.id}`, ratingDetails: record }}>Show Review Details</NavLink>
        </Button>
      </Space>
    ),
  },
];

function Rating(props) {
  useEffect(() => {
    if (!props.ratingState.ratingList.length) {
      props.getRatingList()
    }
  }, [])

  const { ratingList } = props.ratingState

  return <RatingList dataSource={ratingList} columns={columns} />;
}

const mapStateToProps = state => {
  return {
    ratingState: state.ratingState,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRatingList: () => {
      return dispatch(getRatingList())
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Rating);
