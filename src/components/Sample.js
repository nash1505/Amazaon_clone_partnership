import React from 'react'
import { useParams } from 'react-router-dom'
import 'fomantic-ui-css/semantic.css';
import '../assets/fomantic/dist/semantic.css';
const Sample = () => {


    const { category } = useParams();
    const data = {
        "mobiles": {
            title1: "Latest launches in smartphones",
            description: "abcaaccacacacacac"
        }
    }
    return (
        <div>
            <h1>{data[category].title1}</h1>
            <p>{data[category].description}</p>

            <div class="ui three column grid">
                <div class="column">
                    <div class="ui fluid card">
                        <div class="image">
                            <img src="/images/avatar/large/daniel.jpg" />
                        </div>
                        <div class="content">
                            <a class="header">Daniel Louise</a> 
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="ui fluid card">
                        <div class="image">
                            <img src="/images/avatar/large/helen.jpg" />
                        </div>
                        <div class="content">
                            <a class="header">Helen Troy</a>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="ui fluid card">
                        <div class="image">
                            <img src="/images/avatar/large/elliot.jpg" />
                        </div>
                        <div class="content">
                            <a class="header">Elliot Fu</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Sample
