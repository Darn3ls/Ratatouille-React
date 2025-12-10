import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Rating from '@mui/material/Rating';

export default function RecipeCard({ recipe }) {
  return (
    <Card
      sx={{
        background: 'white',
        borderRadius: '8px',
        padding: '0rem',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        transition: 'box-shadow 0.2s ease',
        
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={recipe.imagePath}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">

            {recipe.title}

            <p style={{ fontSize: '12px', color: '#626c7c', margin: '0.5rem 0' }}>⏱ {recipe.time} · {recipe.difficulty}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e5e5e0' }}>
            <p style={{ margin: 0, fontSize: '12px' }}> 👤 {recipe.author}</p>
            <Rating name="size-small" value={recipe.rating} size="small" precision={0.5} readOnly/>
            
          </div>

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}