import React,{useState,useEffect} from 'react'
import img from "../assets/bitnine.png"
export default function Header() {
    const [height,setHeight]=useState(0)
    const [cssClass,setcssClass]=useState({toTop:''})
    const [logowidth,setLogoWidth]=useState({reduceWidth:''})
    console.log(height)
   function handleScroll(){
    setHeight(window.scrollY)
    changeHeight()
   }
   function changeHeight(){
    if (height>50){
        setcssClass({toTop:'headerHeightSetter'})
    }else{
        setcssClass({toTop:''})
    }
    if (height > 80){
        setLogoWidth({reduceWidth:'logoWidth'})
    }else{
        setLogoWidth({reduceWidth:''})
    }
   }
    useEffect(()=>{
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };

    },[height])
  return (
    <div className={`headerWrapper ${cssClass.toTop}`}>
        <nav>
            <div className={`logoWrapper ${logowidth.reduceWidth}`}>
                <img src={img}/>
            </div>
            <div className='listWrapper'>
            <ul>
                <li className='active list'>product
                <ul>
                    <li>graph database</li>
                    <li>relational database</li>
                </ul>
                </li>
                <li className='list'>use cases</li>
                <li className='list'>services</li>
                <li className='list'>resources
                    <ul>
                        <li>documentation</li>
                        <li>learn</li>
                    </ul>
                </li>
                <li className='list'>blog</li>
                <li className='list'>company
                    <ul>
                        <li>about us</li>
                        <li>contact</li>
                    </ul>
                </li>
                <li className='list'>IR</li>
            </ul>
            <button>try free</button>
            </div>
        </nav>
    </div>
  )
}
