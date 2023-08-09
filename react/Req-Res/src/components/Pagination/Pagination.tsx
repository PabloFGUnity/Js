import {Pagination as MUIPagination, Stack} from '@mui/material';
import { ChangeEvent } from 'react';

type Props = {
  page: number;
  onChange: (event: ChangeEvent<unknown>, page: number) => void;
  total: number;

}
export default function Pagination({total, page, onChange}:Props) {
  

  return (
    <Stack spacing={2}>
      <MUIPagination count={total} page={page} onChange={onChange} />
    </Stack>
  );
}