import React,{useState} from "react";
import { NavLink } from 'react-router-dom';
import ResumePreview from './resumePreview'
import {skinCodes, fieldCd} from './../../constants/typeCodes';
import { useHistory } from "react-router-dom";
import { setSkills, updateSkills } from "../../Redux/actions/skillAction";
import { connect } from "react-redux";

function Skills(props) {
  // console.log('Skill Section.');
  let history = useHistory();

  const [skill,setSkill]= useState(props.skill); //{}
//   const [skillCount,setCount] = useState( props.skill?props.skill.length? 0 : 0:0)
const [currSkill,changeCurrSkill] = useState('') ;

    const temp = () => {
         return
    }

    const addThisSkill = () => {

      if(currSkill.length == 0) return

        // console.log("under add this skill , " , currSkill );
        // console.log("unser add this skill", currSkill);
       setSkill([...skill,currSkill])
    //    currSkill = ''
    changeCurrSkill('')
    }

//   const onchange = (event) => {
//     var key =event.target.name;
//     var val =event.target.value;
//     setSkill({...skill,[key]:val})
//   }

//   const getFieldData=(key)=>{
//     if(skill && skill[key]){
//       return skill[key]
//     }
//     return "";
// }

  const onSubmit = async(e) => {
    if(props.skill.length > 0 ){
      //update
      props.updateSkill(skill)
    }else{
      //set
      props.setSkill(skill)
    }

    // console.log(skill);
     history.push('/finalize')
  }

    
    return (
      <>
      <div className="container med education" >
        <div className="section funnel-section">
          <div className="form-card resume-form">
            <h2 className="form-heading center">Skill Section</h2>
            <div className="form-section">
                
                {  
                
                skill.map((val,idx) => (
                  
                  <div key={idx} className="input-group"><label>Skill {idx+1} : </label>
                <div className="effect"><input type="text"  value={val} onChange={temp} /><span></span>
                </div>
                <div className="error"></div>
                   </div>
                ))
                
              }  

                {
                  skill.length != -1 ?         
                  
                  <div className="input-group"><label> Add Skill  : </label>
                <div className="effect"><input type="text"  
                  onChange={(e) => changeCurrSkill(e.target.value)} value={currSkill} /><span></span>
                </div>
                <div className="error"></div>
                <div className="form-buttons" style={{ }} >
                 <a className="center" onClick={addThisSkill}> <p> +Add this skills</p> </a>
                 {/* console.log(curr); */}
                 {/* {console.log(currSkill)} */}
              </div>
              </div> : <></>

}



              

              <div className="form-buttons">
                <button className="btn hvr-float-shadow" type='button' onClick={onSubmit}>Next</button>
                <NavLink to='/experience' className="center">Back</NavLink>
              </div>
            </div>
          </div>
          <div className="preview-card skills-preview ">
            <ResumePreview contactSection={props.contactSection} educationSection={props.educationSection} experienceSection={props.experienceSection} skillSection={skill} skinCd={props.document.skincd}></ResumePreview>            
          </div>
        </div>
      </div>

      <footer className="footer-comm" style={{  width:"100vw", bottom:"0" }} >  
    <div style={{ height : '100%', width:'100%' , display:'flex',flexDirections:'column', justifyContent:'center', alignItems:'center' }} >
{/* 
      <div>
        <img src="" />
      </div> */}

      <p style = {{color:"	#E2DFD2"}} >© Copyright 2022 Anurag Krishna</p>
    </div>
        </footer>
  </>
    );
  }

const mapStateToProps = (state) => {
  return{
    document : state.document,
    contactSection : state.contact,
    educationSection : state.education,
    experienceSection : state.experience,
    skill : state.skill
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setSkill : (Skill) => dispatch(setSkills(Skill)),
    updateSkill : (Skill) => dispatch(updateSkills(Skill))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Skills)
