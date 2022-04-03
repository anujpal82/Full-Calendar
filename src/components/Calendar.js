
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction"
import React, { useState } from 'react'
import axios from 'axios'


export default function Calendar() {

    const [dateClickInfo, setDateClickInfo] = useState({})
    const [users, setUsers] = useState([2402, 2437, 2399])
    const [response, setResponse] = useState({
        "employeeId": "2399",
        "activityId": "306",
        "code": {
            "alert_status": "ERROR",
            "bugs": "3",
            "code_smells": "44",
            "duplicated_lines_density": "26.9"
        },
        "report": [
            {
                "Frontend": []
            },
            {
                "HTML": []
            },
            {
                "Redmine-Git-SVN-FlowCharts": []
            },
            {
                "TypeScript": [
                    {
                        "assignments": [],
                        "practices": [
                            {
                                "title": "TypeScript DAY-1 PRACTICE DataTypes",
                                "analysis": {
                                    "info": "http://3.6.85.37/2399-Charmi.J-Feb22/TypeScript/Day_1/Practice/Analysis/Analysis.md",
                                    "flowchart": "http://3.6.85.37/2399-Charmi.J-Feb22/TypeScript/Day_1/Practice/Analysis/Flow Chart.jpeg"
                                },
                                "siteUrl": "https://stackblitz.com/edit/typescript-dhstsz?file=index.ts",
                                "sourcePath": "http://3.6.85.37/2399-Charmi.J-Feb22/TypeScript/Day_1/Practice/Source"
                            },
                            {
                                "title": "TypeScript DAY-2 PRACTICE TSBasicsPart2 ",
                                "analysis": {
                                    "info": "http://3.6.85.37/2399-Charmi.J-Feb22/TypeScript/Day_2/Practice/Analysis/Analysis.md",
                                    "flowchart": "http://3.6.85.37/2399-Charmi.J-Feb22/TypeScript/Day_2/Practice/Analysis/Flow Chart.jpeg"
                                },
                                "siteUrl": "https://stackblitz.com/edit/typescript-5kag1v?file=index.ts",
                                "sourcePath": "http://3.6.85.37/2399-Charmi.J-Feb22/TypeScript/Day_2/Practice/Source"
                            },
                            {
                                "title": "TypeScript DAY-4 PRACTICE TSBasicsPart3",
                                "analysis": {
                                    "info": "http://3.6.85.37/2399-Charmi.J-Feb22/TypeScript/Day_4/Practice/Analysis/Analysis.md",
                                    "flowchart": "http://3.6.85.37/2399-Charmi.J-Feb22/TypeScript/Day_4/Practice/Analysis/Flow Chart.jpeg"
                                },
                                "siteUrl": "https://stackblitz.com/edit/typescript-yafoel?file=index.ts",
                                "sourcePath": "http://3.6.85.37/2399-Charmi.J-Feb22/TypeScript/Day_4/Practice/Source"
                            }
                        ],
                        "internalExam": [{
                            "multipleChoiceResult": 10,
                            "assignments": [{
                                "title": "Addition",
                                "analysis": {
                                    "info": "",
                                    "flowchart": ""
                                },
                                "siteUrl": "",
                                "sourcePath": "https://google.co.in"
                            }, {
                                "title": "Addition",
                                "analysis": {
                                    "info": "",
                                    "flowchart": ""
                                },
                                "siteUrl": "",
                                "sourcePath": "https://google.co.in"
                            }],
                            "Grade": "",
                            "remarks": ""
                        },
                        ],
                        "externalExam": [{
                            "multipleChoiceResult": 10,
                            "assignments": [{
                                "title": "Addition",
                                "analysis": {
                                    "info": "",
                                    "flowchart": ""
                                },
                                "siteUrl": "",
                                "sourcePath": "https://google.co.in"
                            }],
                            "Grade": "",
                            "remarks": ""
                        }]
                    },



                ]
            }
        ]
    })
    const handleDateClick = (dateClickInfo) => {
        console.log(dateClickInfo);


    }
    function renderEventContent(eventInfo) {
        return (
            <>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.title}</i>

            </>
        )
    }
    const handleClick = (e) => {
        console.log(e.target.id);
        const data = response.report.find((item) => {
            if (item.TypeScript) {
                return true
            }
        })
        const temp = data.TypeScript[0].internalExam[0]
        console.log(temp);
        // axios.get(`http://3.6.85.37/${e.target.id}.json`).then((res) => {
        //     // console.log(res.data);
        //     const data = res.data.report.find((item) => {
        //         if (item.TypeScript) {
        //             return true
        //         }
        //     })
        //     console.log(data);
        // console.log(data.TypeScript);
        // const temp = data.TypeScript[0].practices.map((item) => {
        //     return <ul><li>{item.title}</li></ul>
        // })
        var app = document.querySelector(`#collapse${e.target.id}`);
        app.innerHTML = `<div class='mt-2 mx-3'>
        <div class='mt-2'>
            <h5 class='text-danger text-center fw-bold'>Internal Exam</h5>
            <div><span class="fw-bold">MCQ Result : </span> <span>${temp.multipleChoiceResult}</span></div>
           
            ${temp.assignments.map((item, index) => {
            console.log(item);
            return (`<div>
            <div class='fw-bold mt-2'>Assignment ${index + 1} :</div>
                <div class='mt-2'>
                    <span> Title : ${item.title}</span>
                </div>
                <div class='fw-bold mt-2'>
                    Analysis
                </div>
                <div class='mt-2'>
                    <span class='d-block'>Info : ${item.analysis.info}</span>
                    <span>Flowchart : ${item.analysis.flowchart}</span>
                </div>
                <div class='mt-2' >siteUrl : <a class='ms-2' href=${item.siteUrl}>${item.siteUrl}</a></div>
                <div class='mt-2'> Source Path : <a class='mt-2' href=${item.sourcePath}>${item.sourcePath}</a></div>
                <hr/>
            </div>`)
        })}
           
            <div class='mt-2'>Grade : <input class='ms-3' placeholder='Enter The Grade' type="text" /></div>
            <div class='mt-2'>Remarks : <input placeholder='Enter The Remarks Here' type="text" /></div>
            <button class='btn btn-primary mt-2 mx-auto'>Save</button>
        </div>

    </div>
    <div class='mt-2 mx-3'>
        <div class='mt-2'>
            <h5 class='text-danger text-center fw-bold'>External Exam</h5>
            <div><span class="fw-bold">MCQ Result : </span> <span>10</span></div>
            <div class='fw-bold mt-2'>Assignment :</div>
            <div class='mt-2'>
                <span> Title : Addition</span>
            </div>
            <div class='fw-bold mt-2'>
                Analysis
            </div>
            <div class='mt-2'>
                <span class='d-block'>Info : xyz</span>
                <span>Flowchart : sdjsk</span>
            </div>
            <div class='mt-2' >siteUrl : <a class='ms-2' href='https://google.co.in'>https://google.co.in</a></div>
            <div class='mt-2'> Source Path : <a class='mt-2' href='https://google.co.in'>https://google.co.in</a></div>
            <div class='mt-2'>Grade : <input class='ms-3' placeholder='Enter The Grade' type="text" /></div>
            <div class='mt-2'>Remarks : <input placeholder='Enter The Remarks Here' type="text" /></div>
            <div class=""><button class='btn mx-auto btn-primary mt-2 mx-auto'>Save</button></div>
        </div>

    </div>`
        // app.innerHTML = '<ul>' + data.TypeScript[0].practices.map(function (wizard) {
        //     return '<li>' + wizard.title + '</li>';
        // }).join('') + '</ul>';
        // console.log(temp);
        // }).catch((err) => {
        //     console.log(err);
        // })

    }
    return (
        < >
            <div className='row'>
                <div className='col-md-9'>
                    <FullCalendar plugins={[dayGridPlugin, interactionPlugin]} dateClick={handleDateClick}
                        eventClick={
                            function (arg) {
                                setDateClickInfo(arg)
                            }
                        } events={[
                            { title: 'event 1', date: '2022-04-01' },
                            { title: 'event 2', date: '2022-04-02' }

                        ]} eventContent={renderEventContent}
                    />
                </div>
                <div className='col-md-3'>{dateClickInfo && dateClickInfo.event && dateClickInfo.event._def.title === "event 1" ? "Anuj" :

                    <div class="accordion" id="accordionExample">
                        {users.map((item) => {
                            return (<div className='accordion-item'>
                                <h2 className='accordion-header'  >
                                    <button onClick={(e) => {
                                        handleClick(e);
                                    }} id={item} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item}`} aria-expanded="false" aria-controls={`collapseThree${item}`}>
                                        Employee Code {item}
                                    </button>
                                </h2>
                                <div id={`collapse${item}`} class="accordion-collapse collapse" aria-labelledby={`heading${item}`} data-bs-parent="#accordionExample">

                                </div>
                            </div>)

                        })}
                    </div>
                }</div></div></>

    )
}
