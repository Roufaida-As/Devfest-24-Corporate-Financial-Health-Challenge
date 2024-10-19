import Header from "../components/Header"
import logo from '../assets/MoneyScopeLogoFinalPng.png'
import { Link } from "react-router-dom"
const data = [
    {
        img: `https://s3-alpha-sig.figma.com/img/c82e/8fc7/bd88e61b4322066b21d81ad7776ec1ea?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KMbz~cD020TwSp2eO1IxwOabxOiJl5rrSnapEwK8QX9xJ9G8cbnq0Tw9lgk5rnh9kOpC~sPGMdjbnuQt8oO40Jx3BClc5o0uhmtT9~lUkqQAgEqC1jmr5OS6vxOaLUwXzr7pKyM7EPUgGyrzik9i1XPkqzRcqnTSfdzwdkkLh84qyjaqel-5GBbcO0o~rmqhRZ6~9YpgEcHShQWN1Q5py1OKyybzz7K82Ku0OIbOEGWw4ECDX3gv6m5Z5D0VHoztojm8GPzo6H43v7hnS2fPJLez1qChc343VqZoljK9422h1p3lEW1Rwkf-MrERFmMjf3qgUIbWbxitzCV0RJy34g__`,
        name: "Emma M",
        message : "I saved 20% more this year with the daily tips!"
    },
    {
        img: `https://s3-alpha-sig.figma.com/img/88fe/abfc/dc13cdc4d4307e6d4e7c5d314e67d797?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i3OvdAJRFIgo-iLzmt6gSRZ4sNWZLoygsJ-2WPbj1TgABDCEJIu7l8l0RZSGvtW6qQ-~dDk8C4Kq1ipRYRXou-zvnjnPaWQtawsaowHOxAu1L49POlvMrtBTcEp07Pikm54Gna~Ng1RdjExQrQIjfdhIMWSJ53DyW3UmSGVuxpPQnvfdMvADGhcNen85vcK8JI80cQWumzEm5WzvGmcs96tMPcWKx1Qy85GSERMR0LWakrRXrLIb5bBK36CxffWZZVXH0stQ~wg7hUy~dR3djiaXN8U3bEprlA7F79aD6MV0eHtgfYYxxOxLtEixWW~X6FMKr84XqXj7EQUnkrqOJA__`,
        name: "Karan L",
        message : "The advice helped me boost my savings by 10% in a month."
    },
    {
        img: `https://s3-alpha-sig.figma.com/img/524c/ad64/b63612cd70fb6669dca9580eaa59bd48?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eU35RroAQJPGYKnpU9GSNk8P5-iVAn3kBAIW1k1GF10T3tVK6tLdukSUiGzLEmfT5qfET~f6M5~2izuvwlIXKhEw3zIdDjByPJRyWDFi6I~RrI3MQJAfFpvak3KM-ZftPYHJh9PZiuZtGXLJU8tuztd0tNMqgqQdU7~GTWr3mwnDvvSFF-NEQ6xbGqC22eUACU6SM~tm6MPEImT73VrNZ7euaKVVFW9CHX--TWvjRgfQ4MnVTk4Gw9OW76FEFq3aP8q5LnY1KHE1iVwQ9zj~O3xN~6ND-y5vjjE3IR~aZzz0Co6EA1JrnufdFMSG-H6imyAAWBdPcrFkrs8kOnC9uw__`,
        name: "Chloe P",
        message : "I saved for my first vacation in just six months!"
    },
    {
        img: `https://s3-alpha-sig.figma.com/img/cbd3/93b7/ac834ab2f5f8869f31ec259938fe1eaf?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XvfWtRhyjnf2IXvbqc4xg-XQhhqPibqoit7uqeFPd1~ibOw3e0A-XzrHunDlEcQQQyi89M-UQWQ-6XFrddWX11Ci7LnqtNcUSFRz2FoHMiRjIDS1try2hvMYSbV8wyPXWyoEYINWIE6y2u1Mb1aGnVhNLwmDrwU9DZ5r~5y70RPCbBoTZ8cES-3BdAEzyQBmv~gTIle6XBFlJgfsXgPdDCf-IyGnR-IcVkze0BWEK-gAPD5MYI5onvd87RaSIt5ZFS7yTIjbxNpmWTmOJBMBLHvT92d~GAFhKxGLf8VPIpR2bhMz~PM~h~fzgDFBv3JLRRgSLOn0Kik70H9VTk-R4g__`,
        name: "Lily K",
        message : "Now I understand my spending and save more every week."
    }
]
export default function Home() {
  return (
    <div className="home-ctn">
        <Header/>
        <div className="home-heroSection">
            <span>
                <h1>Money Stress? <br /> <span className="blue">MoneyScope</span>'s Got you!</h1>
                <p>Get personalized advice,<br /> track your spending, and <br />build better savings habits <br /> with our easy-to-use tools.</p>
            </span>
            <div className="home-heroSection-div">
            <img src={`https://s3-alpha-sig.figma.com/img/0197/284e/5cdccbf4357f4a332ea3e74fb566fd19?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iEaH9suj-f3-e7ZKaiAszXYy3cZPOPIdsSIRGbg5tl0MuIOiNFnydvq~r7Mu5DSKc4dhUTtpAY7Ijg01Ex37p1sAW0MNt0XOdQepZQwohF1FGujKCq8VAHvcg7FBY9VchSGSbft4YKXn8hJADFJ1LA838pEKoRFcFQa5Gq8uDsN2LEWUj4ts8VkexGh-wiM4Wq8dqMB78~S79SjVqaTNXpJ3R96nCnt7l~T4aJCilMX5vCbLMYGMg9wYVqrz7WGo40PTfdZtMSm2Iv998Uix~sWAGuuIAwDkTiOR7NPwr-zOFXXgmnWgVwXHtfwGfrrj35q5I4XAT8q0Aj8pKGrWEw__`} alt="" />
            <Link className="home-heroSection-div-button" to="/sign-up">Get started</Link>
            </div>
            </div>
        <div className="home-div2">
            <div className=" home-div2-div1">
                <img src={`https://s3-alpha-sig.figma.com/img/d505/d713/af85143b2aadab0ccfb9be46efe70b4d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=avYmBZJf3-3nSh3I-ntW7CSWuQm7n4k77mIVCOO1lu1Rasi8UPpJGEcTz2a6ZYjiMPjwWTMzRQWf-pRn5wjD1ZevEhT1onws4kLaRzmxtemxHVgkdjjFf09QyOxKboay0iyuOiOfLR~h2pMeipn2OXFAEgOmJKUdtxFdofRKdHpQsUsfJ7ALYwP8sy22PEIkOEIybpwvZz~TjdfK2o7cXPTNNFPj5~cH3Qvzc4fKRZJVvlVBF1KwLaCIRnQuKanlhWDdxnh4Uw5GV9DJ1EpgM5vwaCDZlZgKQv3wSBfl8XgxytJZBNcOweUqX9bcV9nI5hVGXqWkSvJVLAxCmrJgzw__`} alt="" />
                <span>
                        <h1>Let  <span className="white"> us</span> do the <span className="white"> work.</span ></h1>
                        <p>You can track your bills easily in <br /> MoneyScope. We recommend <br />auto-savings plans for goals,<br /> so you always know how much <br /> money is available to spend.</p>
                </span>
            </div>
            <Link className="home-div2-btn"> Learn more</Link>
        </div>
        <div className="home-div3">
            <div className="home-div3-div1">
                <span>
                        <h1>Track  <span className="white"> your</span>  monthly <br />spending and<span className="white"> more.</span></h1>
                        <p>Review your transactions,<br /> track your spending by <br />category and receive monthly <br />insights that help you better <br /> understand your money habits.</p>
                </span>
                <img src={`https://s3-alpha-sig.figma.com/img/1ca2/8919/b754c36f1bcdd541a98138882c0367c6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BJ3BuV5gjJcvyWmJh~SaUBYQaFIG480ByRhofaNnmw~gmcShBKJEaNhn5FHycvFmvs~CpWWpOSFKzgZcB-1bdcLWK366N8sIH1oZdaOcq5uxV~Iupw3-9IEn9fQge-NRwgPRN-nQWOHh54TzAXE~HFdRL4G49f5A9W2vfFaxiNOfambqYnuCu0WBS8UoiciUBG0nGgYvhIqCLFuGOFzLjr7PKUD051XChNvB5aU5jdg9cUhdCTsQrIpO9mdMKzQvtW3rfEdX5MXNxwf9ExdKR~0Qr2FaAmzqYR6FK2ZkxKkb4Lwdeo7Om45uRMX6UusR10ODRgX3azi-S~eeWTHtqg__`} alt="" />
            </div>
            <div className="home-div3-btn"> Learn more</div>
        </div>
        <div className="home-div4">
            <h1>Hear from <span className="white"> people</span> like <span className="white">you.</span></h1>
            <div className="home-div4-div1">
                {data.map((item, index) => (
                <div key={index} >
                     <img src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.message}</p>
                </div>
            ))}
            </div>
            
        </div>
        <div className="home-footer">
            <img src={logo} alt="" />
        </div>
    </div>
  )
}