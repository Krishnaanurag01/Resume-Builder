import React from 'react';
import {fieldCd} from './../../constants/typeCodes'

function Skin1(props){

    let contactSection = props.contactSection ;
    let educationSection = props.contactSection ;
    let experienceSection = props.experienceSection  ;
    let skillSection = props.skillSection ;
    let documentSection = props.documentSection ;

    console.log("***********************");
    console.log(contactSection);
    console.log(educationSection);
    console.log(experienceSection);
    console.log(skillSection);
    console.log(documentSection);
    console.log("************************");

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

        return (
            <div className={props.skinCd + " resume-preview "}>
 {/* {console.log(props.documentSection.skincd)} */}
                <div className={'nameSection'} style={{border: "2px red "}} >
                    {/* completed here */}
                    <h1 className={" center " + " contactname" + " text-upper " } > {rvContact(fieldCd.FirstName,' ')  + rvContact(fieldCd.LastName)}  </h1>

                    <center>

                    <p className={'center'} style={{display:'inline'}} >{rvContact(fieldCd.Email )} | {rvContact(fieldCd.Phone) } </p>

                    </center>
                    

                    <p className={'center address'}>{rvContact(fieldCd.City,', ') + rvContact(fieldCd.State,', ') +  rvContact(fieldCd.Country,', ') + rvContact(fieldCd.ZipCode)}</p>
                </div>

                {/* { console.log(props.educationSection) } */}

            {

                    contactSection == null ? <> </> :

                    
                    <div className={'profSummSection text-upper'}>                   
                    <p className="heading bold">PROFESSIONAL SUMMARY</p>
                     <div className={'divider'}></div>
                     <p style={{marginBottom:'2rem'}} >{rvContact(fieldCd.ProfSummary)}</p>

                </div>

            }

                {/* // educationSection */}

            {
                    educationSection == null ? <> </> :
                <div className={'educationSection text-upper'}>                   
                    <p className="heading bold">EDUCATIONAL        DETAILS</p>
                     <div className={'divider'}></div>

                     {/* //college details */}
                     <h2 style={{fontSize:"1.6rem",marginLeft:"1rem"}} >{rvEducation(fieldCd.Degree)} | {rvEducation(fieldCd.GraduationBranch)} </h2>

                     <div className='eduStyle' >
                        <p>{rvEducation(fieldCd.SchoolName)},      {rvEducation(fieldCd.City)}</p>
                        {/*  <p></p> */}
                        {/* {console.log(props.contactSection)} */}
                        <p>CGPA : {rvEducation(fieldCd.GraduationCGPA)} | Passing year : {rvEducation(fieldCd.GraduationYear)}</p>
                        <p>{rvEducation(fieldCd.GraduationDate)}</p>
                        <p></p>
                    </div>



                    {/* 12th details */}
                     <h2 style={{fontSize:"1.6rem",marginLeft:"1rem"}} > Intermediate  </h2>

                     <div className='eduStyle' >
                        <p>{rvEducation(fieldCd.InterSchoolName)},      {rvEducation(fieldCd.InterSchoolAdd)}</p>
                        {/*  <p></p> */}
                        {/* {console.log(props.contactSection)} */}
                        <p>CGPA : {rvEducation(fieldCd.InterCGPA)} | Passing year : {rvEducation(fieldCd.InterPassingYear)}</p>
                        <p>{rvEducation(fieldCd.GraduationDate)}</p>
                        <p></p>
                    </div>

                     
                </div>
            }

                {/* // project details */}

            {
                    experienceSection == null ? <> </> :


                <div className={'projectSection text-upper'}>                   
                    <p className="heading bold">project DETAILS</p>
                     <div className={'divider'}></div>

                     {/* 1st Project detail */}

                     <h2 style={{fontSize:"1.6rem",marginLeft:"1rem"}} >{rvProjects(fieldCd.FirstProjectName)} | <a href={rvProjects(fieldCd.FirstProjectLink)} >  <span className='live' > LIVE </span> </a>  </h2>

                     <div className='eduStyle' >
                        <p> - {rvProjects(fieldCd.FirstProjectSummary)} </p>
                         {/* <p></p>
                        {console.log(props.contactSection)} */}

                        <p>Tech Stack: {rvProjects(fieldCd.FirstProjectTechStack)}</p>
                        <p>{rvEducation(fieldCd.GraduationDate)}</p>
                        <p></p>
                    </div>

                     {/* 2nd Project detail */}

                     <h2 style={{fontSize:"1.6rem",marginLeft:"1rem"}} >{rvProjects(fieldCd.SecondProjectName)} | <a href={rvProjects(fieldCd.FirstProjectLink)} >  <span className='live' > LIVE </span> </a>  </h2>

                     <div className='eduStyle' >
                        <p> - {rvProjects(fieldCd.SecondProjectSummary)} </p>
                         {/* <p></p>
                        {console.log(props.contactSection)} */}

                        <p>Tech Stack: {rvProjects(fieldCd.SecondProjectTechStack)}</p>
                        <p>{rvEducation(fieldCd.GraduationDate)}</p>
                        <p></p>
                    </div>


                     
                </div>

            }


               {/* // Skills details */}

            {
                    skillSection == null ? <> </> :


                <div className={'skillSection text-upper'}>                   
                    <p className="heading bold">Skills</p>
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
export default Skin1;