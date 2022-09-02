import {ITableHeadCells} from "./types";
import {styled} from "@mui/material";
import {REDIRECT_URI} from "../../api/api.config";

const ShortLink = styled('a')(() => ({
    width: '100%',
    display: 'block'
}))

export const drawCell = (row: any, cell: ITableHeadCells) => {

    switch (cell.type) {
        case "text":
            return row[cell.field]
        case "link":
            return <a href={row[cell.field]} rel="noreferrer" target="_blank">{row[cell.field]}</a>
        case "short-link":
            return <ShortLink href={REDIRECT_URI + row[cell.field]} rel="noreferrer" target="_blank">{row[cell.field]}</ShortLink>
        default:
            return null
    }

}