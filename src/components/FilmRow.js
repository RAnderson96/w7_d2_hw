import "./FilmRow.css"

const FilmRow = ({filmObj}) => {
    return (
        <div>
            <li><a href={filmObj.url} target="_blank" >{filmObj.name}</a></li>
        </div>
    )

}

export default FilmRow;