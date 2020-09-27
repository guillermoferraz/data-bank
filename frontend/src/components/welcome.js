import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default class Welcome extends Component {

    render() {
        return (
            <div id="welcomeMaster">
                <div id="welcomeSecondMaster">
                    <div className="container mx-auto">
                        <div className="container mx-auto mt-5">
                            <div className="container mx-auto p-0 m-0" id="containerLogo">
                                <div className="mx-auto p-0 m-0 mt-5" id="imgLogo"></div>

                            </div>
                            <h1 id="titleWelcome" className=" text-center mt-5">DATA BANK</h1>
                        </div>
                    </div>

                    

                </div>
            </div>    
        )
    }
}
