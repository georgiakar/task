import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as solutionActions from "../../redux/solution/solution.actions";
import Loader from "../../components/Loader/Loader.component";
import Pagination from "../../components/Pagination/Pagination.component";
import Table from "../../components/Table/Table.component";
import Dropdown from "../../components/Dropdown/Dropdown.component";
import Heading from "../../components/Heading/Heading.component";
import "./Solution.style.css";

const Solution = ({ terms, fetchTerms, page, loader }) => {
  const defaultPageNumber = 0;
  const defaultPageSize = 5;
  const defaultPageSizeOptions = [5, 10, 20, 50, 100];  

  useEffect(() => {
    fetchTerms(defaultPageNumber, defaultPageSize);
  }, [fetchTerms]);

  const prepareTableData = (data) => {
    let columns = [];
    return data.map((term, index) => {
      columns = [
        <p><a key={"iri-" + index} href={term.iri} target="_blank" rel="noreferrer">{term?.short_form}</a></p>,
        <p>{term?.label}</p>,
        <>{term?.description?.map((item, index) => <p key={index}>{item}</p>)}</>,
        <p>{term.synonyms ? term.synonyms.join(", ") : ""}</p>
      ];
      return columns;
    });
  };

  return (
    <div className="solution">
      <Heading
        title="Terms"
        description="All terms from the Ontology Lookup Service repository"
      />
      <Dropdown
        options={defaultPageSizeOptions}
        defaultValue={defaultPageSize}
        onSelect={(size) => fetchTerms(defaultPageNumber, size)}
        label="Per:"
      />
      <Loader loader={loader}>
        <Table
          headings={["Id", "Label", "Description", "Synonyms"]}
          contents={prepareTableData(terms)}
          columnProps={[
            { className: "idCol" },
            { className: "labelCol" },
            { className: "descriptionCol" },
            { className: "synonymsCol" },
          ]}
        />
      </Loader>
      <Pagination
        size={page.size}
        number={page.number}
        totalElements={page.totalElements}
        onPageChange={(number) => fetchTerms(number, page.size)}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  terms: state.solution.terms,
  page: state.solution.page,
  loader: state.app.loader,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...solutionActions,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Solution);
