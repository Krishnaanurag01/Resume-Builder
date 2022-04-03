import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import ResumePreview from './resumePreview'
import {skinCodes, fieldCd} from './../../constants/typeCodes';
import { SetExperience, UpdateExperience } from '../../Redux/actions/experienceAction';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";


 function Experience(props) {

  // console.log('Experience Section');
  let history = useHistory();
  const [experience, setExperience] = useState(props.experience) ;
  // const  [projectCount, setCount] = useState( props.experience?.[projectCount] ? props.experience[projectCount] : 1) ;

  const onchange = (event) => {
    var key =event.target.name;
    var val =event.target.value;
    setExperience({...experience,[key]:val})
  // console.log('Experience Section ',experience);

  }
  const getFieldData=(key)=>{
    if(experience && experience[key]){
      return experience[key]
    }
    return "";
}
  const onSubmit = async(e) => {
    if(props.experience!=null){
      //update
      props.updateExperience(experience)
    }else{
      //set
      props.setExperience(experience)
    }

    // console.log("*********************",experience,"********************");
     history.push('/skill')
  }

  return (
    <> 
    <div className="container med education" >
    <div className="section funnel-section">
      <div className="form-card resume-form">
        <h2 className="form-heading center">Project Section</h2>
        <div className="form-section">

          {/* project 1 Details */}

        <div style={{width:"100%", paddingLeft:"3rem",marginBottom:"3rem"}} >
        <label className="form-heading">Project 1 :</label>
        </div>

          <div className="input-group"><label>Project Name</label>
            <div className="effect"><input type="text" name={fieldCd.FirstProjectName}
              onChange={onchange} value={getFieldData(fieldCd.FirstProjectName)} /><span></span>
            </div>
            <div className="error"></div>
          </div>

          <div className="input-group"><label>Summary</label>
            <div className="effect"><input type="text" name={fieldCd.FirstProjectSummary}
              onChange={onchange} value={getFieldData(fieldCd.FirstProjectSummary)} /><span></span>
            </div>
            <div className="error"></div>
          </div>

          <div className="input-group"><label>Tech Stack</label>
            <div className="effect"><input type="text" name={fieldCd.FirstProjectTechStack}
              onChange={onchange} value={getFieldData(fieldCd.FirstProjectTechStack)} /><span></span>
            </div>
            <div className="error"></div>
          </div>

          <div className="input-group"><label>Date</label>
            <div className="effect"><input type="text" name={fieldCd.FirstProjectDate}
              onChange={onchange} value={getFieldData(fieldCd.FirstProjectDate)} /><span></span>
            </div>
            <div className="error"></div>
          </div>

          

          {/* end details */}



          {/* project 2 Details */}

        <div style={{width:"100%", paddingLeft:"3rem",marginBottom:"3rem",marginTop:"3rem"}} >
        <label className="form-heading">Project 2 :</label>
        </div>

          <div className="input-group"><label>Project Name</label>
            <div className="effect"><input type="text" name={fieldCd.SecondProjectName}
              onChange={onchange} value={getFieldData(fieldCd.SecondProjectName)} /><span></span>
            </div>
            <div className="error"></div>
          </div>

          <div className="input-group"><label>Summary</label>
            <div className="effect"><input type="text" name={fieldCd.SecondProjectSummary}
              onChange={onchange} value={getFieldData(fieldCd.SecondProjectSummary)} /><span></span>
            </div>
            <div className="error"></div>
          </div>

          <div className="input-group"><label>Tech Stack</label>
            <div className="effect"><input type="text" name={fieldCd.SecondProjectTechStack}
              onChange={onchange} value={getFieldData(fieldCd.SecondProjectTechStack)} /><span></span>
            </div>
            <div className="error"></div>
          </div>

          <div className="input-group"><label>Date</label>
            <div className="effect"><input type="text" name={fieldCd.SecondProjectDate}
              onChange={onchange} value={getFieldData(fieldCd.SecondProjectDate)} /><span></span>
            </div>
            <div className="error"></div>
          </div>

          {/* end details */}

          

          <div className="form-buttons">
            <button className="btn hvr-float-shadow" type='button' onClick={onSubmit}>Next</button>
            <NavLink to='/education' className="center">Back</NavLink>
          </div>
        </div>
      </div>
      <div className="preview-card">
        <ResumePreview contactSection={props.contact} experienceSection={experience} educationSection={props.education} skinCd={props.document.skincd}></ResumePreview>            
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

  )
}


const mapStateToProps = (state) => {
    
    return{
        document : state.document ,
        contact : state.contact,
        education : state.education,
        experience : state.experience
    }
}

const mapDispatchToProps = (dispatch) => {

    return{
        setExperience : (experience) => dispatch(SetExperience(experience)),
        updateExperience : (experience) => dispatch(UpdateExperience(experience))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Experience)