import React from 'react';
import {fieldCd} from './../../constants/typeCodes'
function ResumePreview(props){

    let contactSection = props.contactSection ;
    let educationSection = props.educationSection ;
    let experienceSection = props.experienceSection  ;
    let skillSection = props.skillSection ;
    let documentSection = props.documentSection ;

    // console.log("***********************");
    // console.log(contactSection);
    // console.log(educationSection);
    // console.log(experienceSection);
    // console.log(skillSection);
    // console.log(documentSection);
    // console.log("************************");

    // console.log('Resume Preview');
    const rvContact=(key, valToAppend)=>{
        if(props.contactSection){
          return props.contactSection[key]?props.contactSection[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }

    const rvEducation=(key, valToAppend)=>{
        if(props.educationSection){
          return props.educationSection[key]?props.educationSection[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }

    const rvProjects =(key, valToAppend)=>{
        if(props.experienceSection){
          return props.experienceSection[key]?props.experienceSection[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }

    // if (documentSection != null) {
    //     switch (documentSection.skincd) {
    //         case "skin1":
    //             <Skin1 contactSection={contactSection} documentSection={documentSection} educationSection={educationSection} experienceSection={experienceSection}
    //            skillSection={skillSection} skinCd={documentSection.skincd} />
    //             break;
        
    //         default:
    //             break;
    //     }
    // }
    

        return (
            <div className={props.skinCd + " resume-preview "}>
 {/* {console.log(props.documentSection.skincd)} */}
                <div className={'nameSection'}  >
                    {/* completed here */}
                    
                    <div className='user-name' >

                    <p className={" contactname" + " text-upper " } > {rvContact(fieldCd.FirstName,' ')  + rvContact(fieldCd.LastName)}  </p>
                    </div>

                   

                    <p  style={{display:'',width:"100%"}} >{rvContact(fieldCd.Email )} | {rvContact(fieldCd.Phone) } </p>

                    
                    

                    <p className={' address'}>{rvContact(fieldCd.City,', ') + rvContact(fieldCd.State,', ') +  rvContact(fieldCd.Country,', ') + rvContact(fieldCd.ZipCode)}</p>
                </div>

                {/* { console.log(props.educationSection) } */}

            {

                    contactSection == null ? <> </> :

                    
                    <div className={'profSummSection text-upper'}>  
                        <div className='sectionHeading' > 
                    <p >PROFESSIONAL SUMMARY</p>
                        </div>                 
                     <div className={'divider'}></div>
                     
                    <div className='introSum' >  <p style={{marginBottom:'2rem'}} >{rvContact(fieldCd.ProfSummary)}</p>
                    </div>
                </div>

            }

                {/* // educationSection */}

            {
                    educationSection == null ? <> </> :
                <div className={'educationSection text-upper'}>                   
                   <div className='sectionHeading'><p>EDUCATIONAL DETAILS</p> </div>
                     <div className={'divider'}></div>

                     {/* //college details */}
                     <h2 style={{fontSize:"1.6rem",marginLeft:"1rem"}} >{rvEducation(fieldCd.Degree)} {rvEducation(fieldCd.Degree) != '' ?'|' : ''} {rvEducation(fieldCd.GraduationBranch)} </h2>

                     <div className='eduStyle' >
                        <p> {rvEducation(fieldCd.SchoolName) != ''?  '-' : ''}  {rvEducation(fieldCd.SchoolName)}  {rvEducation(fieldCd.City) != '' ? ',' : '' }      {rvEducation(fieldCd.City)}</p>
                        {/*  <p></p> */}
                        {/* {console.log(props.contactSection)} */}
                        <p> {rvEducation(fieldCd.GraduationCGPA) != '' ?'- CGPA : ' : '' }  {rvEducation(fieldCd.GraduationCGPA)} {rvEducation(fieldCd.GraduationYear) != ''? '| Passing year : ' : '' }  {rvEducation(fieldCd.GraduationYear)}</p>
                        <p>{rvEducation(fieldCd.GraduationDate)}</p>
                        <p></p>
                    </div>



                    {/* 12th details */}
                     <h2 style={{fontSize:"1.6rem",marginLeft:"1rem"}} > {rvEducation(fieldCd.Degree) != '' ? 'Intermediate' : '' } </h2>

                     <div className='eduStyle' >
                        <p> {rvEducation(fieldCd.InterSchoolName) != ''? '- ' : '' }  {rvEducation(fieldCd.InterSchoolName)} {rvEducation(fieldCd.InterSchoolAdd) !='' ? ', ' : '' }     {rvEducation(fieldCd.InterSchoolAdd)}</p>
                        {/*  <p></p> */}
                        {/* {console.log(props.contactSection)} */}
                        <p> {rvEducation(fieldCd.InterCGPA) != '' ? '- CGPA : ' : '' }  {rvEducation(fieldCd.InterCGPA)}  {rvEducation(fieldCd.InterPassingYear) != '' ? '| Passing year :':''}  {rvEducation(fieldCd.InterPassingYear)}</p>
                        <p>{rvEducation(fieldCd.GraduationDate)}</p>
                        <p></p>
                    </div>

                     
                </div>
            }

                {/* // project details */}

            {
                    experienceSection == null ? <> </> :


                <div className={'projectSection text-upper'}>                   
                   <div className='sectionHeading' > <p>project DETAILS</p> </div>
                     <div className={'divider'}></div>

                     {/* 1st Project detail */}

                     <h2 style={{fontSize:"1.6rem",marginLeft:"1rem"}} >{rvProjects(fieldCd.FirstProjectName)} {rvProjects(fieldCd.FirstProjectDate) != '' ? ' | '+ rvProjects(fieldCd.FirstProjectDate) :''}  </h2>

                     <div className='eduStyle' >
                        <p>  {rvProjects(fieldCd.FirstProjectSummary) != '' ? '-' : ''}  {rvProjects(fieldCd.FirstProjectSummary)} </p>
                         {/* <p></p>
                        {console.log(props.contactSection)} */}

                        <p>  {rvProjects(fieldCd.FirstProjectTechStack) != '' ? '- Tech Stack:' : '' }  {rvProjects(fieldCd.FirstProjectTechStack)}</p>
                        <p>{rvEducation(fieldCd.GraduationDate)}</p>
                        <p></p>
                    </div>

                     {/* 2nd Project detail */}

                     <h2 style={{fontSize:"1.6rem",marginLeft:"1rem"}} >{rvProjects(fieldCd.SecondProjectName)} {rvProjects(fieldCd.SecondProjectDate) != '' ? ' | '+rvProjects(fieldCd.SecondProjectDate ) : '' }  </h2>

                     <div className='eduStyle' >
                        <p> {rvProjects(fieldCd.SecondProjectSummary) !='' ? '-' : ''}  {rvProjects(fieldCd.SecondProjectSummary)} </p>
                         {/* <p></p>
                        {console.log(props.contactSection)} */}

                        <p> {rvProjects(fieldCd.SecondProjectTechStack) != '' ? '- Tech Stack:' : '' }  {rvProjects(fieldCd.SecondProjectTechStack)}</p>
                        <p>{rvEducation(fieldCd.GraduationDate)}</p>
                        <p></p>
                    </div>


                     
                </div>

            }


               {/* // Skills details */}

            {
                    skillSection == null ? <> </> :


                <div className={'skillSection text-upper'}>                   
                   <div className='sectionHeading' > <p> Skills </p> </div>
                     <div className={'divider'}></div>


                <div className='skills-container' > 
                    {
                        skillSection.map((val,idx) => (
                            <div key={idx} className='skill-box' > 
                                {val}
                            </div>
                        ))
                    }

                </div>
                     
                </div>

            }
          
            </div>
        )
    }
export default ResumePreview;