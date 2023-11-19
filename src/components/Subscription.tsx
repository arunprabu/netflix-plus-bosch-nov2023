/* Styling in ReactJS
  0. global styles in index.css (Recommended)
  1. external styles for components
  2. inline styles 
  3. internal styles 
  4. styled-components (TODO - RECOMMENDED)
*/

import "./Subscription.css"; //importing external css

const Subscription = () => {
  const subscriptionStyles = {
    renewStyle: {
      color: "#000",
      backgroundColor: "yellow",
      padding: "20px",
      border: "solid 3px #ccc",
    },
    btnStyle: {
      backgroundColor: 'red',
      color: '#fff',
      padding: '10px 20px',
      border: 'solid 3px darkred',
      borderRadius: '10px'
    }
  };

  return (
    // using external css class from bootstrap
    <div className="text-center">
      {/* External Styles -- Subscription.css */}
      <h3 className="subscription-info">
        You are an Active Subscriber of Netflix Premium
      </h3>

      {/* Inline Styles -- NEVER EVER TRY THIS LISTS / loops */}
      <p
        style={{
          color: "#fff",
          backgroundColor: "red",
          padding: "20px",
          border: "solid 3px #ccc",
        }}
      >
        Your Subscription Ends in Two Weeks
      </p>

      {/* Internal Styles */}
      <p style={subscriptionStyles.renewStyle}>
        Renew now to get 50% discount. Use Coupon Code: OFFER50
      </p>
      <button style={subscriptionStyles.btnStyle}>RENEW NOW</button>
    </div>
  );
};

export default Subscription;
