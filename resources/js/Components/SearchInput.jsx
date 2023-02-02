import { InputAdornment, OutlinedInput } from "@mui/material";
import { Search as SearchIcon } from '@mui/icons-material';

export default function SearchInput({searchValue, setSearchValue}) {
    return <OutlinedInput
        onChange={(event) => setSearchValue(event.target.value)}
        type={'text'}
        placeholder={'Search'}
        value={searchValue}
        size='small'
        startAdornment={
            <InputAdornment position="start">
                <SearchIcon></SearchIcon>
            </InputAdornment>
        }
    />
}