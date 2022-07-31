import React from 'react'
import '../components/ClassLayout.css'
import Tank from './images/tankbadge.png'
import Heal from './images/healbadge.png'
import Dps from './images/dpsbadge.png'

const ClassLayout = (props) => {
  return (
    <div className='class_page'>
        <div className='class_desc'>
            <h2 className='class_title'>{props.title}</h2>
            <p>{props.desc}</p>
            <p>{props.desc2}</p>
        </div>
        <div className='class_img_area'>
            <img src={Tank} alt="Tank" />
            <div className='class_spec'> 
                <h3 className='class_title'>{props.talentTitleFirst}</h3>
                <p className='class_talentDesc'>{props.talentDescFirst}</p>
            </div>
        </div>
        <div className='class_heal_right'>
            <div className='class_img_area'>
                <img src={Heal} alt="Heal" />
                <div className='class_spec'>
                    <h3 className='class_title'>{props.talentTitleSecond}</h3>
                    <p className='class_talentDesc'>{props.talentDescSecond}</p>
                </div>
            </div>
        </div>
            <div className='class_img_area'>
            <img src={Dps} alt="Dps" />
                <div className='class_spec'>
                    <h3 className='class_title'>{props.talentTitleThird}</h3>
                    <p className='class_talentDesc'>{props.talentDescThird}</p>
                </div>
            </div>
{/*
            <div className='class_heal_right'>
                <div className='class_img_area_heal'>
                    <img src={Heal} alt="Heal" />
                    <div className='class_spec_heal'>
                        <h3 className='class_title'>{props.talentTitleSecond}</h3>
                        <p className='class_talentDesc'>{props.talentDescSecond}</p>
                    </div>
                </div>
            </div>
*/}

        <div className='class_profession'>
            <h4 className='class_profTitle'>{props.professionTitle}</h4>
            <p>{props.profession}</p>
        </div>
    </div>
  )
}

export default ClassLayout;