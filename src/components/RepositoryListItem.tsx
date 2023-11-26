import React, { Key } from 'react';
import { ListItem, ListItemText, Link } from '@mui/material';
import { Node } from '../types';

type Props = {
  node: Node, 
  actions: React.ReactNode
}

export const RepositoryListItem: React.FC<Props> = ({ node, actions }) => {
  return (
    <ListItem key={(node.id as Key)}>
      <ListItemText
        primary={`${node.owner.login} / ${node.name}`}
        secondary={node.description}
        sx={{ width: '50%' }}
      />
      <ListItemText
        primary={`Stars: ${node.stargazerCount}`}
        secondary={
          <Link href={node.url} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </Link>
        }
      />
      <>
        {actions}
      </>
    </ListItem>
  )
}