import { Button, Dialog, Typography } from '@mui/material';

export const DeleteModal = () => {
  return (
    <Dialog open={true}>
      <Typography>Are you sure you want to delete todo ?</Typography>
      <Button>delete</Button>
      <Button>Cancel</Button>
    </Dialog>
  );
};
