export default function RecipeCard({ recipe }) {
  return (

    <div style={{
      background: 'white',
      borderRadius: '8px',
      padding: '1rem',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      transition: 'box-shadow 0.2s ease'
    }}>
        
      <div style={{ 
        backgroundColor: '#ddd', 
        height: '150px', 
        width: '150px',
        borderRadius: '6px', 
        marginBottom: '1rem',
        overflow: 'hidden'
      }}>
        <img 
          src={recipe.imagePath}
          alt={recipe.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
      
      <h4 style={{ margin: '0.5rem 0', fontSize: '18px', color: '#1f2121' }}>{recipe.title}</h4>
      <p style={{ fontSize: '12px', color: '#626c7c', margin: '0.5rem 0' }}>⏱ {recipe.time} · {recipe.difficulty}</p>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e5e5e0' }}>
        <p style={{ margin: 0, fontSize: '12px' }}> 👤 {recipe.author}</p>
        <p style={{ margin: 0, fontSize: '12px', color: '#e74c3c' }}> {recipe.rating} / 5 </p>
      </div>
    </div>
  )
}
