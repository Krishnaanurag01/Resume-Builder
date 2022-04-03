import React,{useState} from "react";
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import ResumePreview from './resumePreview'
import {skinCodes, fieldCd} from './../../constants/typeCodes';
// import { connect } from 'react-redux'
// import * as educationActions from '../../actions/educationActions';
// import {bindActionCreators} from 'redux';
import { useHistory } from "react-router-dom";
import { SetEducation, UpdateEducation } from "../../Redux/actions/educationActions";
import { connect } from "react-redux";

function Education(props) {
  // console.log('Education');
  let history = useHistory();
  const [education,setEducation]= useState(props.educationSection); //{}

  const onchange = (event) => {
    var key =event.target.name;
    var val =event.target.value;
    setEducation({...education,[key]:val})
  }
  const getFieldData=(key)=>{
    if(education && education[key]){
      return education[key]
    }
    return "";
}
  const onSubmit = async(e) => {
    if(props.educationSection!=null){
      //update
      props.updateEducation(education)
    }else{
      //set
      props.setEducation(education)
    }

    // console.log(education);
     history.push('/experience')
  }

    
    return (
      <>
      <div className="container med education" >
        <div className="section funnel-section">
          <div className="form-card resume-form ">
            <h2 className="form-heading center">Educational Section</h2>
            <div className="form-section">
              <div className="input-group"><label>College Name</label>
                <div className="effect"><input type="text" name={fieldCd.SchoolName}
                  onChange={onchange} value={getFieldData(fieldCd.SchoolName)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Degree</label>
                <div className="effect"><input type="text" name={fieldCd.Degree}
                  onChange={onchange} value={getFieldData(fieldCd.Degree)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Branch</label>
                <div className="effect"><input type="text" name={fieldCd.GraduationBranch}
                  onChange={onchange} value={getFieldData(fieldCd.GraduationBranch)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>CGPA</label>
                <div className="effect"><input type="text" name={fieldCd.GraduationCGPA}
                  onChange={onchange} value={getFieldData(fieldCd.GraduationCGPA)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Graduation Year</label>
                <div className="effect"><input type="text" name={fieldCd.GraduationYear}
                  onChange={onchange} value={getFieldData(fieldCd.GraduationYear)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>City/State</label>
                <div className="effect"><input type="text"  name={fieldCd.City}
                  onChange={onchange} value={getFieldData(fieldCd.City)} /><span></span>
                </div>
                <div className="error"></div>
              </div>


              {/* 12th details */}

              <div className="input-group"><label>Intermediate School </label>
                <div className="effect"><input type="text"  name={fieldCd.InterSchoolName}
                  onChange={onchange} value={getFieldData(fieldCd.InterSchoolName)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label> Passing Year</label>
                <div className="effect"><input type="text"  name={fieldCd.InterPassingYear}
                  onChange={onchange} value={getFieldData(fieldCd.InterPassingYear)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>CGPA</label>
                <div className="effect"><input type="text"  name={fieldCd.InterCGPA}
                  onChange={onchange} value={getFieldData(fieldCd.InterCGPA)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>City/State</label>
                <div className="effect"><input type="text"  name={fieldCd.InterSchoolAdd}
                  onChange={onchange} value={getFieldData(fieldCd.InterSchoolAdd)} /><span></span>
                </div>
                <div className="error"></div>
              </div>


              {/* end details */}

              

              <div className="form-buttons">
                <button className="btn hvr-float-shadow" type='button' onClick={onSubmit}>Next</button>
                <NavLink to='/contact' className="center">Back</NavLink>
              </div>
            </div>
          </div>
          <div className="preview-card">
            <ResumePreview contactSection={props.contactSection} educationSection={education} skinCd={props.document.skincd}></ResumePreview>            
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
    educationSection : state.education
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setEducation : (education) => dispatch(SetEducation(education)),
    updateEducation : (education) => dispatch(UpdateEducation(education))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Education)
