import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

export default function EmployeeDashboard() {
  return (
    <Card sx={{ maxWidth: 345, margin: '20px' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          My Details
        </Typography>
        {/* Assuming the first employee is the logged-in user */}
        <List>
          <ListItem>
            <ListItemText primary="Name" secondary="Alice Johnson" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Role" secondary="Software Engineer" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
