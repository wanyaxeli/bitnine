import React,{useState,useEffect} from 'react'

export default function HeaderPop() {
  const [height,setHeight]=useState(0)
  const [pop,setPop]=useState({toTop:'popWrapper'})
 function handleScroll(){
  setHeight(window.scrollY)
  changeHeight()
 }
 function changeHeight(){
  if (height>50){
      setPop({toTop:'popContainer'})
  }else{
      setPop({toTop:'popWrapper'})
  }

 }
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[height])
  return (
    <div  className={`${pop.toTop}`}>
    </div>
  )
}
