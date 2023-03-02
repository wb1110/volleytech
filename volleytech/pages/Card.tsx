import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

interface CardProps {
  title: string;
  value: string;
}

export default function Card({ title, value }: CardProps) {
  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Typography component="p" variant="h4">
        {value}
      </Typography>
    </React.Fragment>
  );
}