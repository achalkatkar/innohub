import React from 'react'
import './enroll.css'

const Enroll = () => {
  return (
    <>

    <div className='enroll-container'>
        <div className='enroll-img-div'>
            <img src='https://www.millionairetrack.com/assets/images/signin-form-banner-desk.png' height={630} width={510} className='enroll-img'></img>
        </div>
        <div className='enroll-form'>
            <h2 className='enroll-heading'>Enroll to marketing mastery</h2>
            <form>
                <label className='enroll-label'>Name</label><br/>
                <input type='test' className='input-box' placeholder='enter name'/>

                <label className='enroll-label'>Email</label><br/>
                <input type='test' className='input-box' placeholder='enter Email'/>

                <label className='enroll-label'>Confirm Email</label><br/>
                <input type='email' className='input-box' />

                <label className='enroll-label'>Password</label><br/>
                <input type='password' className='input-box' placeholder='Password'/>

                <label className='enroll-label'>Monile Number</label><br/>
                <input type='number' className='input-box' placeholder='Enter Mobile Number'/>

                <label className='enroll-label'>Your City</label><br/>
                <input type='test' className='input-box' placeholder='enter Your City'/>

                <label className='enroll-label'>Enter Referral Code</label><br/>
                <input type='test' className='input-box' placeholder='enter Referral Code'/>
            </form>

        </div>
    </div>

    <b className='b-mm-text'> MM bundle Course</b>

    <div className='class-container'>
        
        <div className='small-img-cont'>
            <img src='https://www.millionairetrack.com/assets/images/PERSONAL_BRAND.png' height={200} width={270} className='img-cont'></img>
            <p className='enroll-text'>Personal Branding</p>
        </div>
        <div className='small-img-cont'>
           <img src='https://www.millionairetrack.com/assets/images/SOFT_SKILL.png' height={200} width={270} className='img-cont'></img>
           <p className='enroll-text'>Soft Skills Mastery</p>
        </div>
        <div className='small-img-cont'>
           <img src='https://www.millionairetrack.com/assets/images/DIGITAL_MAKETING.png' height={200} width={270} className='img-cont'></img>
            <p className='enroll-text'>Digital Marketing Mastery</p>
        </div>

        <div className='small-img-cont'>
           <img src='https://www.millionairetrack.com/assets/images/online_MARKETING_MASTERY.png' height={200} width={270} className='img-cont'></img>
            <p className='enroll-text'>Online Marketing Mastery</p>
        </div>
        <div className='small-img-cont'>
           <img src='https://www.millionairetrack.com/assets/images/FINANCE_MASTERY.png' height={200} width={270} className='img-cont'></img>
            <p className='enroll-text'>Finance Mastery</p>
        </div>
        <div className='small-img-cont'>
            <img src='https://www.millionairetrack.com/assets/images/DATA_SCIENCE.png' height={200} width={270} className='img-cont'></img>
            <p className='enroll-text'>Data Science</p>
        </div>

        
    </div>

    <button className='enroll-btn'>Submit</button>
    
    </>
  )
}

export default Enroll
