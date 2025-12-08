import RecipeCard from '../common/RecipeCard'
import recipes from '../../assets/recipes.json'

export default function Home() {
  return (
    <>

      <main style={{ minHeight: 'calc(100vh - 200px)', maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <section style={{ marginBottom: '3rem' }}>
          <h2>Good Morning, Chef! 👨‍🍳 </h2>
        </section>

        <section>
          <h3 style={{ fontSize: '20px', marginBottom: '1.5rem' }}>
            Fresh from the Community
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {recipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>
      </main>

    </>
  );
}
