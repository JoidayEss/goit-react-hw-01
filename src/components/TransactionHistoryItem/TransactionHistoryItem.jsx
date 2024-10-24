import css from "./TransactionHistoryItem.module.css";

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr className={css.trtabl}>
      <td className={css.td}>{type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;
