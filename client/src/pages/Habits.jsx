import Header from "../components/Header"
export default function Habits() {
  return (
    <div className="habits">
      <Header/>
      <div className="habits-div">
        <span>
        <h1>Here are some habits that will help you save more money:</h1>
        <p>
        1. Track Spending: Know where your money goes <br />
        2. Create a Budget: Plan your monthly expenses.<br />
        3. Set Savings Goals: Aim for specific savings targets.<br />
        4. Automate Savings: Transfer money to savings<br />
        automatically.<br />
        5. Cut Unnecessary Subscriptions: Cancel <br />
        what you don’t use.<br />
        6. Use Cash More: Limit card spending.<br />
        7. Cook at Home: Reduce dining out costs.<br />
        8. Buy in Bulk: Save on frequently used items.<br />
        9. Wait Before Buying: Avoid impulse purchases.<br />
        10. Use Coupons and Discounts: Always look for deals.<br />
        </p>
        </span>
        <img src={`https://s3-alpha-sig.figma.com/img/3505/a2b9/806f0544aa77442b8a8f6cda25be1ef6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qucKR5F3vy41S7lLGQnv2RlqYqsr7JKSB0V3xYtI-HLO2zTOwkZsRqMYg8CRp8A3D0x7EfF2XrbnSYTUZJyk2OgKeFLKaxHcrCh~8z9pcPq7Nc69VEJjGRhmDs16moHhoNI~zgXB-18rJinkzlwgQQXQI4sFS6glzsGI7Rb~1gBxSr11dH5FHZZLuKL-QXWvrlMroN60kIeC5lxCX27KCxvYgad4XBvi21qTSS462hR1kMpJo-YCZLOcSefQRdav5sVCfB5MNhlZtxUXFVAJt0~Sh6iq6AYNpAS9wEuKWtR6~OQCmA6C0frX~EE4dEELVhzcK9a5lzDDNYuXcjPZIg__`} alt="" />
      </div>
    </div>
  )
}
