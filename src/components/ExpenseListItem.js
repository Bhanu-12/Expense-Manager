import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startRemoveExpense } from "../actions/expenses";
import moment from "moment";
// import numeral from "numeral";
// {numeral(amount/100).format('$0,0,00')}
const ExpenseListItem = ({  id, description, amount, createdAt }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__sub-title">
        {moment(createdAt).format("MMMM Do, YYYY")}
      </span>
    </div>
    <h3 className="list-item__data">₹{amount}</h3>
  </Link>
);

export default connect(state => {
  return {
    expenses: state.expenses
  };
})(ExpenseListItem);
