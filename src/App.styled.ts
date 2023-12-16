import styled from '@emotion/styled';

export const Container = styled('header')({
  width: '100vw',
  justifyContent: 'center',
  display: 'flex',
  paddingTop: '50px',
  '&:before': {
    content: '" "',
    width: '100%',
    height: '360px',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'linear-gradient(300deg, deepskyblue, darkviolet)',
    backgroundSize: '120% 120%',
    backgroundRepeat: 'no-repeat',
    objectFit: 'cover',
  },
  '@media screen and (max-width: 480px)': {
    padding: '10px',
  },
});
