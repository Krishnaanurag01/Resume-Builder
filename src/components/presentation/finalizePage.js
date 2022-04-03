import React from "react";
import ResumePreview from './resumePreview'
import  jsPDF  from "jspdf";
import html2canvas from 'html2canvas';
import { connect } from "react-redux";
import {useFirestore} from 'react-redux-firebase'

   function Finalize(props) {
  
     let educationSection= props.educationSection
     let contactSection=props.contactSection
     let documentd=props.document
     let experienceSection = props.experienceSection
     let skillSection = props.skillSection
     let firestore = useFirestore()

    //  console.log("contact section - " , contactSection);
    //  console.log("education section - " , educationSection);
    //  console.log("document section - " , documentd);
    //  console.log("experience section - " , experienceSection);
    //  console.log("skill section - " , skillSection); 
     
    const saveToDatabase= async()=>{  // 
     //add or update to firestore
      let user = await firestore.collection('users').doc(props.auth.uid).get()
      user = user.data()
      let obj
      if(user.resumeIds!=undefined){
          obj = {...user.resumeIds,[documentd.id]:{educationSection:educationSection,contactSection:contactSection,document:documentd,experienceSection:experienceSection,skillSection:skillSection}}
      }else{
          obj = {[documentd.id]:{educationSection:educationSection,contactSection:contactSection,document:documentd,experienceSection:experienceSection,skillSection:skillSection}}
      }
      await firestore.collection('users').doc(props.auth.uid).update({
        resumeIds : obj
      })
    }

    // this will convert the image into pdf.
    const downloadResume=()=> {
    
       const input = document.getElementById('resumePreview');
      // console.log(document)
       html2canvas(input)
         .then((canvas) => {
           const imgData = canvas.toDataURL('image/png');
           const pdf = new jsPDF("p", "mm", "a4");
           var width = pdf.internal.pageSize.getHeight()
           var height = pdf.internal.pageSize.getWidth()
           pdf.addImage(imgData, 'JPEG', 0, 0,width,height);
           // pdf.output('dataurlnewwindow');
           pdf.save("resume.pdf");
         }).catch(function(error){
           console.log(error)
         })
     }
    return (
      <>
      <div className="container full finalize-page" >
      <div className="funnel-section ">
          <div className="finalize-preview-card " id="resumePreview">
            <ResumePreview contactSection={contactSection} documentSection={documentd} educationSection={educationSection} experienceSection={experienceSection}
            skillSection={skillSection} skinCd={documentd.skincd}></ResumePreview>   
          </div>
          <div className="finalize-settings center">            

             
              <div className=" download-resume resume-options">
                <p className="no-margin"  >
                  Download Resume As PdF
                </p>
                    <a style={{cursor:'pointer'}}  onClick={downloadResume}  >download Resume</a>
             </div>
             <div className=" download-resume resume-options">
                <p className="no-margin"  >
                 Save to Database 
                </p>
                    <a style={{cursor:'pointer'}}  onClick={saveToDatabase}  >Save to Database</a>
             </div>
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
    document : state.document,
    contactSection : state.contact,
    educationSection : state.education,
    experienceSection : state.experience,
    skillSection : state.skill,
    auth:state.firebase.auth
  }
}

export default connect(mapStateToProps)(Finalize)