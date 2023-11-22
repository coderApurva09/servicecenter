import React from 'react'
import { MenuItem ,FormControl ,InputLabel ,Select ,Box ,NativeSelect} from '@mui/material'
function DropDown({itemList, ClickItem , DefaultValue ,Label }) {
  return (
    <div>
    <Box >
    <FormControl fullWidth>
        <NativeSelect fullWidth
                value={DefaultValue}
                onChange={(e) => ClickItem(e.target.value)}
                id="select"
                >
                {DefaultValue == '' && <option>{Label}</option>}
                {itemList.map((item, i) => {
                    return (
                        <option value={item.Value} key={i}>
                            {item.Name}
                        </option>
                    );
                })}
            </NativeSelect>
        </FormControl>
    </Box>
    </div>
  )
}

export default DropDown