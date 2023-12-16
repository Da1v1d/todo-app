import styled from '@emotion/styled';
import { Dialog } from '@mui/material';

export const EditDialog = styled(Dialog)({
  '.MuiPaper-root': {
    borderRadius: '12px',
    padding: '30px 14px',
  },
  form: { border: 'none', maxWidth: '100%' },
});
