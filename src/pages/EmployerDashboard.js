import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';
import {tasks} from '../mock';

export default function EmployerDashboard() {
  return (
    <Card sx={{ margin: '20px' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Tasks
        </Typography>
        <List>
          {tasks.map((task) => (
            <ListItem key={task.id}>
              <ListItemText primary={task.task} secondary={`Deadline: ${task.deadline}`} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
