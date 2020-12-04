import React, {Component} from 'react';
import { faPhoneSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class About extends Component {
    render() {
        return (
            <div id='about-wrapper'>
                <h2>About me</h2>
                <div className='row'>
                    <div className='col-sm'>
                        <div id='face'>
                            <img src='/img/face.jpg' alt='myFace'/>
                        </div>
                        <div id='img-bottom'>
                        <span>
                            <h5>Park Moonsoo / 박문수</h5>
                            <p id='job'>Full Stack Developer</p>
                            <hr/>
                            <span>
                                <FontAwesomeIcon icon={faPhoneSquare}/>
                                010 9536 7314<br/>
                                <FontAwesomeIcon icon={faEnvelope}/>
                                DevPrkms@gmail.com<br/>
                            </span>
                        </span>
                        </div>
                    </div>
                    <div className='col-sm' id='img-right'>
                        <div id='Certificate'>
                            <h5>Certificate</h5>
                            <ul>
                                <li>2020.11.12(예정) 정보처리산업기사</li>
                            </ul>
                        </div>

                        <div id='Project'>
                            <h5>Project</h5>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;