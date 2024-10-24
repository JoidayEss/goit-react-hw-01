import FriendList from "./components/FriendList/FriendList.jsx";
import Profile from "./components/Profile/Profile.jsx";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import friends from "./assets/friends.json";
import userData from "./assets/userData.json";
import transactions from "./assets/transactions.json";
import "modern-normalize";
import "./global.css";

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
