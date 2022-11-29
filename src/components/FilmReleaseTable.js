import { useState } from "react";
import FilmRow from "./FilmRow"
import "./FilmReleaseTable.css"
const FilmReleaseTable = ({allFilms}) => {

    const filmNodes = allFilms.map((film) => {
        return (
            <FilmRow key={film.id} filmObj = {film} />
        )

    } )


    return (

        <>
            <ul>
                {filmNodes}
            </ul>
        </>
    )



}

export default FilmReleaseTable;