import React from 'react';


class Footer extends React.Component {


    render() {
        return(
        <div className='footer'>
            <div className="footer-links">
                
                <a className="footer-link" onClick={() => window.open('https://github.com/HelenEdwards')}><img src="assets/logo_github_icon_143196.png" title="github"/></a>
                <a className="footer-link" onClick={() => window.open("https://www.linkedin.com/in/helen-edwards-96981532/")}><img src="assets/LinkedIn_icon-icons.com_66270.png" title="linkendin" /></a>
                <a className="footer-link" onClick={() => window.open("https://heyimhelen.com")}><img src="assets/resume-icon.png" title="portfolio site"/></a>
                
            </div>
        </div>  
        )
    }
}

export default Footer   