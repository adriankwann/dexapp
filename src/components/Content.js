import React, {useEffect, useState} from 'react';
import "./Content.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {motion, useTransform, useMotionValue} from 'framer-motion';
import uni from "../icons/uni.png";
import sushi from "../icons/sushi.png";
import curve from "../icons/curve.png";
import balancer from "../icons/balancer.png";
import dodo from "../icons/dodo.png";
import bancor from "../icons/bancor.png";
import mstable from "../icons/mstable.png";
import lido from "../icons/lido.png";
import synthetix from "../icons/synthetix.png";
import kyber from "../icons/kyberswap.png";
import cryptocom from "../icons/cryptocom.png";
import shiba from "../icons/shiba.png";


  const decimals = 
    {
      "USDT": 6,
      "USDC": 6,
      "CRV": 18,
      "ETH": 18,
      "WETH": 18,
      "UNI": 18,
      "BNB": 18,
      "MATIC": 18,
      "DAI": 18,
      "LINK": 18,
      "WBTC": 8,
      "MKR": 18,
      "FRAX": 18,
      "BUSD": 18,
      "AAVE": 18,
      "COMP": 18
};
const tokenToGeckoId = {
      "USDT": "tether",
      "USDC": "usd-coin",
      "CRV": "curve-dao-token",
      "ETH": "ethereum",
      "WETH": "weth",
      "UNI": "uniswap",
      "BNB": "binancecoin",
      "MATIC": "matic-network",
      "DAI": "dai",
      "LINK": "chainlink",
      "WBTC": "bitcoin",
      "MKR": "maker",
      "FRAX": "frax",
      "BUSD": "binance-usd",
      "AAVE": "aave",
      "COMP": "compound-governance-token"
}

const resToIcn = {
  "Uniswap_V3": uni,
  "Uniswap_V2": uni,
  "Uniswap": uni,
  "Balancer": balancer,
  "Balancer_V2": balancer,
  "Bancor": bancor,
  "BancorV3": bancor,
  "Curve": curve,
  "Curve_V2": curve,
  "DODO": dodo,
  "DODO_V2": dodo,
  "mStable": mstable,
  "Lido": lido,
  "SushiSwap": sushi,
  "Synthetix": synthetix,
  "KyberDMM": kyber, 
  "KyberElastic": kyber,
  "CryptoCom": cryptocom,
  "ShibaSwap":shiba
}



const Content = () => {
    useEffect(() => {
        AOS.init({duration:2000});
      }, []);

      const [token1, setToken1] = useState('DAI');
      const [token2, setToken2] = useState('WETH');
      const [amount, setAmount] = useState();
      const [cryptoData, setCryptoData] = useState({});
      const [token1Price, setToken1price] = useState();
      const [token2Price, setToken2price] = useState();
      const [ethPrice, setEthPrice] = useState();
      const [multiHop, setMultiHop] = useState([]);
      const [dex, setDex] = useState([]);
      const [isLoaded, setIsLoaded] = useState(false);

      const helper = (amount, decimals) => {
        let temp = (10**decimals).toString();
        temp = temp.slice(1);

        return amount.toString() + temp;
      };

      const getDex = (data) => {
        setMultiHop([]);
        let c = [];
        for (var i = 0; i < data.length; i++) {
          let b = data[i];
          if (b["name"] === "MultiHop") {
            getMultiHop(b);
          }
          else if (b["proportion"] > 0) {
            c.push([b["name"], b["proportion"]]);
          }
        }
        return c;
      
      }

      const getMultiHop = async (data) => {
        let temp = [];
        
        
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/ethereum/contract/${data['intermediateToken']}`
        );
        const res = await response.json();
        
        let token_name = res['symbol'].toUpperCase();
        temp.push([data["proportion"], token_name, data["hops"][0], data["hops"][1]]); 
        setMultiHop(temp);
      }

      const getData = async () => {

        setIsLoaded(false);
        
        const qs = require('qs');
        const params = {
          sellToken: token1,
          buyToken: token2,
          sellAmount: amount,
        }

        params.sellAmount = helper(amount, decimals[token1]);
  
        


        if (params.sellToken === "BNB") { 
          params.sellToken = "0xb8c77482e45f1f44de1745f52c74426c631bdd52";
        } else if (params.sellToken === "FRAX") {
          params.sellToken = "0x853d955acef822db058eb8505911ed77f175b99e";
        }
        
        const response = await fetch(
          `https://api.0x.org/swap/v1/quote?${qs.stringify(params)}`
        );
        const data = await response.json();
        setCryptoData(data);
        setDex(getDex(data["sources"]));

        const ethPrice = await fetch (
          `https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=0`
        );
        const eth = await ethPrice.json();
        setEthPrice(eth["prices"][0][1].toPrecision(5));

        const token1Price = await fetch (
          `https://api.coingecko.com/api/v3/coins/${tokenToGeckoId[token1]}/market_chart?vs_currency=usd&days=0`
        );
        const data1 = await token1Price.json();
        setToken1price(data1["prices"][0][1].toPrecision(5));

        const token2Price = await fetch (
          `https://api.coingecko.com/api/v3/coins/${tokenToGeckoId[token2]}/market_chart?vs_currency=usd&days=0`
        );
        const data2 = await token2Price.json();
        setToken2price(data2["prices"][0][1].toPrecision(5));
        setIsLoaded(true);
    
      }

      const x = useMotionValue(0);

      const background = useTransform(
        x,
        [-25, 0, 200],
        ["linear-gradient(to right top, #092652, #221a3a, #211124, #180913, #000000)", 
        "linear-gradient(to top, #051937, #171228, #190a1a, #12040d, #000000)", 
        "linear-gradient(to left top, #092652, #221a3a, #211124, #180913, #000000)"]
      )
      
  return (
    <div className = "wrap">
      
        
        <div className="ccontainer">
          
        <motion.div whileHover = {{scale: 1.05}} style = {{background, x}} className="create" drag
    dragConstraints={{
      top: -10,
      left: -25,
      right: 25,
      bottom: 10,
    }}>
      <h2>Enter your token pair:</h2>
      
      <form>
      <motion.div className = "swapbox" data-aos = "zoom-in">
        <label data-aos = "zoom-in">Token to sell:</label>
        <select
          value={token1}
          onChange={(e) => {setToken1(e.target.value); setIsLoaded(false);}}
        >
          <option value="USDC">USDC</option>
          <option value="DAI">DAI</option>
          <option value="ETH">ETH</option>
          <option value="WETH">WETH</option>
          <option value="USDT">USDT</option>
          <option value="UNI">UNI</option>
          <option value="CRV">CRV</option>
          <option value="WBTC">WBTC</option>
          <option value="MKR">MKR</option>
          <option value="BNB">BNB</option>
          <option value="MATIC">MATIC</option>
          <option value="LINK">LINK</option>
          <option value="FRAX">FRAX</option>
          <option value="BUSD">BUSD</option>
          <option value="AAVE">AAVE</option>
          <option value="COMP">COMP</option>
          
        </select>
        </motion.div>
        <motion.div className = "swapbox" data-aos = "zoom-in">
        <label>Token to buy:</label>
        <select
          value={token2}
          onChange={(e) => {setToken2(e.target.value); setIsLoaded(false);}}
        >
          <option value="USDC">USDC</option>
          <option value="DAI">DAI</option>
          <option value="ETH">ETH</option>
          <option value="WETH">WETH</option>
          <option value="USDT">USDT</option>
          <option value="UNI">UNI</option>
          <option value="CRV">CRV</option>
          <option value="WBTC">WBTC</option>
          <option value="MKR">MKR</option>
          <option value="BNB">BNB</option>
          <option value="MATIC">MATIC</option>
          <option value="LINK">LINK</option>
          <option value="FRAX">FRAX</option>
          <option value="BUSD">BUSD</option>
          <option value="AAVE">AAVE</option>
          <option value="COMP">COMP</option>
        </select>
        </motion.div>
        <motion.div className = "swapbox" data-aos ="zoom-in">
        <label>{token1} tokens provided:</label>
        <textarea
          required
          value={amount}
          onChange={(e) => {e.preventDefault(); setMultiHop([]); setIsLoaded(false);setAmount(e.target.value);}}
        ></textarea>
        </motion.div>
        <motion.button whileHover = {{scale: 1.05}} whileTap = {{scale:0.8}}onClick = {(e) => {e.preventDefault(); setMultiHop([]); getData(); }}>Submit</motion.button>
      </form>
    </motion.div>

    {isLoaded ? <div className = "card-wrap" > 
    <motion.div className = "card" whileHover = {{scale: 1.05}}>
      <div className = "card-title">{token1}/{token2} Pools</div>
      <div className = "card-text">Current {token1} price: {token1Price} USD</div>
      <div className = "card-text">Current {token2} price: {token2Price} USD</div>
      {/* <div className = "card-text">
        {token1} given: {(cryptoData["sellAmount"]/(10**decimals[token1])).toString()} tokens</div>
      <div className = "card-text"> {token2} received: {(cryptoData["buyAmount"]/(10**decimals[token2])).toFixed(5)} tokens</div> */}
      <div className = "card-text">Conversion Rate: 1 {token1} for {cryptoData["price"]} {token2}</div>

      <div className = "card-text">Gas Price: {cryptoData["gas"]} Gwei = {((cryptoData["gas"]/1000000000) * ethPrice).toPrecision(5)} USD</div>
      <div className = "card-text">Slippage: {(cryptoData["expectedSlippage"] * -100).toPrecision(3)}%</div>

      <div className = "strat-wrap">
        <div className = "strat-title">{token1}/{token2} Swapping Strategy</div>
        <div className = "strat-text">Exchanges used: </div>
        <div className = "strat-box">
        {dex.map((item, index) => (
          <div key = {index} className = "strat-text">
            <img src = {resToIcn[item[0]]} className = 'icn'></img>
          </div>
         
        ))}

        {multiHop.map((item, index) => 
          <div key = {index} className = "strat-text">
            <img src = {resToIcn[item[2]]} className = 'icn'></img>
            <img src = {resToIcn[item[3]]} className = 'icn'></img>
          </div>
        )}
        </div>

        <div className = "strat-text">You will be receiving the best conversion rate if you:</div>
        {dex.map((item, index) => (
          <div key = {index} className = "strat-text">
          - Swap {item[1]*amount} {token1} tokens ({(item[1] * 100).toFixed(0)}%) for {token2} on {item[0].replace(/_/g, "")}
          </div> //fix multihop bug and display flex bugs

        ))}
        
        {multiHop.map((item, index) => (
          <div key = {index} className = "strat-text"> 
          - Swap {item[0]*amount} {token1} tokens ({(item[0] * 100).toFixed(0)}%) for {item[1]} on {item[2].replace(/_/g, "")} <br></br> <br></br>
          -- Then, swap {item[1]} for {token2} on {item[3].replace(/_/g, "")}
          </div> //proportion, intermediate token, dex1, dex2
        ))}
        

      </div>




    </motion.div>
    </div>:
    <div className = "card-wrap">
      <motion.div className = "card" whileHover = {{scale: 1.05}}>

      <div class="card__content">
      <div className = "p_empty"/>

      <div className = "text_empty"/>
      <div className = "text_empty"/>
      <div className = "text_empty"/>
      <div className = "text_empty"/>
      <div className = "text_empty"/>
      
    </div>

    <div class = "card__image"></div>

        
      </motion.div>


    </div>
    
    
    
    }
    </div>
        

    </div>
  );
};

export default Content;