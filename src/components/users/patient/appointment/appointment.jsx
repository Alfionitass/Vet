import React, { useCallback, useEffect, useState } from "react";
import { Card } from "react-bootstrap";

import CardItem from "../../../reusable/cardItem";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";

import CatLoader from '../../../reusable/utilities/catLoader'
function PatientAppointment(props) {
  const [paginationConfig, SetConfig] = useState({
    offset: 0,
    data: [],
    perPage: 4,
    currentPage: 0,
    pageCount: 0
  });


  useEffect(() => {
    console.log(paginationConfig)
  },[paginationConfig])
  const [renderPostData, setPost] = useState();

  const renderData = () => {
    const data = props.AppointmentPayloads.dataAppointment;
    const dataOnPage = data.slice(
      paginationConfig.offset,
      paginationConfig.offset + paginationConfig.perPage
    );
    const postData = dataOnPage.map((item) => (
      <CardItem type="appointment-patient" data={item} />
    ));
    SetConfig({
      ...paginationConfig,
      pageCount: Math.ceil(data.length / paginationConfig.perPage),
      postData
    });
 };

  const handlePageClick = useCallback((e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * paginationConfig.perPage;
    SetConfig({
      ...paginationConfig,
      currentPage: selectedPage,
      offset: offset,
    });
  });

  useEffect(() => {
    props.AppointmentPayloads.dataAppointment.length && renderData()
  },[paginationConfig.offset])

  useEffect(() => {props.AppointmentPayloads.dataAppointment.length && renderData()}, []);

  return (
    <Card.Body className="appointment-fix-height">
      {props.AppointmentPayloads.dataAppointment && paginationConfig.postData}
      {!paginationConfig.postData && <CatLoader text="Appointment" opacity={0.3} opacity={0.3} weight={500}/>}
      <div className="d-flex justify-content-center my-2 pagination-absolute">
      {paginationConfig.pageCount !== 0 && <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        pageCount={paginationConfig.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={(e) => handlePageClick(e)}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        activeClassName={"active"}
      />}
      </div>
    </Card.Body>
  );
}

const mapStateToProps = (state) => {
  return {
    AppointmentPayloads: state.Appointment,
  };
};
export default connect(mapStateToProps,null)(PatientAppointment)


