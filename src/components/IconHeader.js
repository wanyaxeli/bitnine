import React,{useState,useEffect} from 'react'

export default function IconHeader() {
  const [height,setHeight]=useState(0)
  const [search,setSearch]=useState(true)
  const [inpt,setIpt]=useState({change:'inputSearch'})
  const [cssClass,setcssClass]=useState({toTop:''})
  console.log(height)
 function handleScroll(){
  setHeight(window.scrollY)
  changeHeight()
 }
 const handleChangeIcon=()=>{
  if (search===false){
    setSearch(true)
    setIpt({change:'inputSearch'})
  }else{
    setSearch(false)
    setIpt({change:'inputsizeChanger'})
  }
 }
 function changeHeight(){
  if (height>50){
      setcssClass({toTop:'PopheaderHeightSetter'})
  }else{
      setcssClass({toTop:''})
  }
 }
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  },[height])
  return (
    <div className={`iconHeaderWrapper ${cssClass.toTop}`}>
      <div></div>
      <div className='rightWrapper'>
        <div className='headBtnWrapper'>
          <span>
            <input className={`${inpt.change}`} placeholder='search' type='search'/>
            <button onClick={handleChangeIcon}>{search===false?<i className="fa fa-times" aria-hidden="true"></i>:
            <i className="fa fa-search" aria-hidden="true"></i>}</button>
          </span>
          <button className='contactBtn'>contact</button>
        </div>
        <div className='HeadericonContainer'>
          <ul>
           <span data-color='#ddd'> <li><i className="fa fa-github" aria-hidden="true"></i></li></span>
           <span data-color='#red'> <li><i className="fa fa-youtube-play" aria-hidden="true"></i></li></span>
           <span data-color='##0082cb'> <li><i className="fa fa-facebook" aria-hidden="true"></i></li></span>
          </ul>
        </div>
      </div>
    </div>
  )
}
