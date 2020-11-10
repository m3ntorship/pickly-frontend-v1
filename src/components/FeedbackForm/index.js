import React,{useState,useEffect} from "react"
import { Button, BUTTON_OPTIONS } from '../Button/index';
import icon from "./down-chevron.svg"
import { PICKLY } from '../../apis/clients';

export const FeedbackForm=()=>{
  const [categories,setCategories]=useState(null)
  const [value,setVal]=useState({val:"",errorMsg:"",status:false,dropDownValue:"",textLength:0})
  const [length,setLength]=useState({min:50 , max:500,errMsg:""})
  useEffect(()=>{

    PICKLY.getGategories().then(({data})=>{
        setCategories(data)
    }).catch(err => {
      console.log(err)
    });
  },[value.status])
    const handleDropDown =()=>{
      setVal({...value,errorMsg:"",status:!value.status})
    }
    const validationHandling=()=>{
      alert("done")
      console.log(value.val)
      
      console.log(value.dropDownValue)
      if(value.val===""||value.dropDownValue===""){
          setVal({...value,errorMsg:"Problem field needed"})
      }
  }
    const handleValueFromDropDown=(e)=>{
      console.log(value.dropDownValue)
      
      setVal({...value,status:false,dropDownValue:e.target.innerHTML})
    }
    return(
        <form className="relative mb-12 bg-c900" onSubmit={(e)=>{
          e.preventDefault()
          PICKLY.sendFeedback({
            "category": value.dropDownValue,
            "body":value.val
          }).then((res)=>{
            console.log(res)
          }).catch((err)=>{
            console.log(err)
          })
          }}>
             
              <div className="cursor-pointer absolute w-full h-16 flex justify-end" onClick={handleDropDown}>
                  <input type="text" value={value.dropDownValue} readOnly placeholder="Category" className="cursor-pointer z-40 absolute w-full h-16 shadow-background text-c500 rounded-lg pl-4"/>
                  <div  className="absolute w-16 h-16 text-c500 flex justify-center items-center z-40">
             
                <img src={icon} alt=""/>
              </div>
              </div>
              <div>
               {value.status?<div className={`absolute shadow-xl text-c500 w-full z-30 bg-white`}>
              <ul className=" mt-20 w-full">
               { categories?categories.data.map((categorie,id)=>{
                 return(
                   <div key={id}>
                    <li onClick={handleValueFromDropDown} 
                    className="cursor-pointer pt-2 pb-2 pl-4 w-full hover:bg-c900 hover:pl-0 hover:text-black">
                      {categorie.title}
                    </li>
                    </div>
                 )
               }):null}
              </ul>
              
                {/* <ul className=" mt-20 w-full">
                     <li 
                     onClick={handleValueFromDropDown}
                     className="pt-2 pb-2 pl-4 w-full hover:bg-c900 hover:pl-0 hover:text-black">Problem1</li>
                     <li onClick={handleValueFromDropDown} className="pt-2 pb-2 pl-4 w-full hover:bg-c900 hover:pl-0 hover:text-black">Problem2</li>
                     <li onClick={handleValueFromDropDown} className="pt-2 pb-2 pl-4 w-full hover:bg-c900 hover:pl-0 hover:text-black">Problem3</li>
                </ul>  */}
                </div>:null} 
              <textarea
                onChange={(e)=>{
                  console.log(value.val.length)
                  if(value.val.length<length.min){
                    setLength({...length,errMsg:"should msg between 50 to 500 character"})
                  }else if(value.val.length>length.min){
                    setLength({...length,errMsg:""})

                  }
                  setVal({...value,val:e.target.value,errorMsg:"Problem field needed",textLength:e.target.value.length})
                }}
                minLength={length.min}
                maxLength={length.max}
                defaultValue={value.val}
                className={`absolute ${value.textLength?"border-c200":null} w-full h-16 shadow-background text-c500 rounded-lg pl-4 pt-4 resize-none block top-50 z-10`}
                type="text"
                placeholder="Problem"
                style={{top:"6rem"}}
                
              ></textarea>
            {/* <p className="text-c200">{value.errorMsg}</p> */}
              <p className={`text-c200 ${value.val?"invisible":"visible"}`} style={{padding:"11rem 0 0 0"}}>{value.errorMsg}</p>
              <p className={`text-c200 ${value.val.length<length.errMsg?"invisible":"visible"}`}>{length.errMsg}</p>

            <div className="flex w-full h-full justify-center lg:justify-start">

              <Button handleClick={validationHandling} shadow={true} disabled={value.val&&value.val.length>length.min&&value.val.length<500?false:true} isRounded={true} backgroundColor={value.val&&value.val.length>length.min&&value.val.length?BUTTON_OPTIONS.BACKGROUND_COLOR.Blue:BUTTON_OPTIONS.BACKGROUND_COLOR.SecondaryGrey} color={BUTTON_OPTIONS.COLOR.White} padding={BUTTON_OPTIONS.PADDING.BIG}>
                Send Your Feedback
              </Button>
              </div>
              </div>
            </form>
    )
}