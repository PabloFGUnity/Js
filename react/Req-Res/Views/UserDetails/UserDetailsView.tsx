import { IUser } from "../../src/interfaces/User"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';

type Props = {
    user: IUser | null
  }

  
function UserDetailsView({user}:Props) {
    
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
      </ImageListItem>
        <ImageListItem >
          <img
            src={user?.avatar}
            alt={user?.first_name}
           
          />
          <ImageListItemBar
            title={user?.first_name}
            subtitle={user?.email}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${user?.first_name}`}
              >
              </IconButton>
            }
          />
        </ImageListItem>
      
    </ImageList>
  )
}

export default UserDetailsView