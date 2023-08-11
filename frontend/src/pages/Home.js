import React, {useEffect,useState} from "react";
import axios from "axios";


export default function Home(){

    const [anneeAcademiques, SetAnneeAcademique]=useState ([]);

    useEffect(() =>{
        //console.log("abcddcdcdc")
        loadAnneeAcademique();
    },[] );

    const loadAnneeAcademique=async()=>{
        const result = axios.get("http://localhost:8080/anneeAcademique")
        SetAnneeAcademique((await result).data)

    } 

    return (
        <div className="container">
            <div className="py-4">

            <table class="table" border="shadow">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        anneeAcademiques.map((anneeAcademiques,index)=>(
                            <tr>
                                <th scope="row" key={index} >{index+1}</th>
                                <td>{anneeAcademiques.dateDebut}</td>
                                <td>{anneeAcademiques.dateDeFin}</td>
                                <td>@mdo</td>
                            </tr>

                        ))
                    }
                    
                   
                   
                </tbody>
                </table>

            </div>

        </div>
    )

}