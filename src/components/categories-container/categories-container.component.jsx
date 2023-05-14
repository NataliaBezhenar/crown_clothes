import CategoryItem from '../category-item/category-item.component'
import './categories-container.styles.scss'

const CategoriesContainer = ({categories})=><div className="categories-container">
{categories.map(({ title, imageUrl, id }) => (
  <CategoryItem key={id} title={title} imageUrl={imageUrl}/>
))}
</div>

export default CategoriesContainer