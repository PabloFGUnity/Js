import {Pagination} from '@mui/material';
import Stack from '@mui/material/Stack';

export default function PaginationUI({total, pages, onChange}) {
  

  return (
    <Stack spacing={2}>
      <Pagination count={total} page={pages} onChange={onChange} />
    </Stack>
  );
}