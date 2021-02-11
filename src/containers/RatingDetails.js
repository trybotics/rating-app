import React, { useEffect } from "react";
import { Typography, Spin, Rate, Avatar, Card, Breadcrumb } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom'

import { getRatingDetails } from "../actions/Rating";

const { Title, Paragraph, Text, Link } = Typography;

function RatingDetails(props) {
  let ratingDetails = {};
  let ratingId = props.match.params.id;
  useEffect(() => {
    if (props.location.ratingDetails === undefined) {
      props.getRatingDetails(ratingId);
    }
  }, []);

  if (props.location.ratingDetails) {
    ratingDetails = props.location.ratingDetails;
  } else {
    ratingDetails = props.ratingState.ratingDetails;
  }

  return (
    <div style={{ padding: 50, paddingTop: 100}}>
      <Breadcrumb style={{ margin: "16px 16px" }}>
        {/* <NavLink to={{ pathname: `/`}}><Breadcrumb.Item>Home</Breadcrumb.Item></NavLink> */}
        <NavLink to={{ pathname: `/rating`}}><Breadcrumb.Item>Rating</Breadcrumb.Item></NavLink>
        <Breadcrumb.Item>{ratingId}</Breadcrumb.Item>
      </Breadcrumb>
      {Object.keys(ratingDetails).length ? (
        <Card>
          <Typography>
            <Avatar size="large" icon={<UserOutlined />} /> &nbsp;
            <Text style={{ fontSize: "larger" }} strong>
              {ratingDetails.profile_name}
            </Text>
            <br />
            <Rate
              disabled
              style={{ marginLeft: -20 }}
              allowHalf
              defaultValue={Number(
                ratingDetails.review_rating.split("out of")[0].trim()
              )}
            />
            <Paragraph>
              Reviewed in {ratingDetails.review_country} on{" "}
              {ratingDetails.reviewed_at}{" "}
            </Paragraph>
            <Title style={{ marginTop: 0 }} level={3}>
              {ratingDetails.review_title}
            </Title>
            <Paragraph>
              <Text strong>Product Name: </Text>
              {ratingDetails.product}
            </Paragraph>
            <Paragraph>
              <Text strong>Product Link: </Text>
              <Link href={ratingDetails.url}>Click Here</Link>
            </Paragraph>
            <Paragraph>
              <Text strong>Product Company: </Text>
              {ratingDetails.product_company}
            </Paragraph>
            <Paragraph>
              <Text strong>Review Text: </Text>
              {ratingDetails.review_text}
            </Paragraph>
          </Typography>
        </Card>
      ) : (
        <Spin tip="Loading..." />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ratingState: state.ratingState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRatingDetails: (id) => {
      return dispatch(getRatingDetails(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RatingDetails);
