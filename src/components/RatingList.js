import { Table, } from 'antd';

function RatingList(props) {

    return <Table scroll={{x: 1100}} style={{ padding: 50, paddingTop: 100}} bordered dataSource={props.dataSource} columns={props.columns} />;
}


export default RatingList;