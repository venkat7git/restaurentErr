import {Component} from 'react'
import DishItem from '../listItem'
import './index.css'

class Home extends Component {
  state = {dishesList: []}

  componentDidMount() {
    this.getApiData()
  }

  getApiData = async () => {
    const url =
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      const formatedData = data[0].table_menu_list.map(eachMenu => ({
      menuCategory: eachMenu.menu_category,
      menuCategoryId: eachMenu.menu_category_id,
      menuCategoryImage: eachMenu.menu_category_image,
      categoryDishes: eachMenu.category_dishes.map(eachDish => ({
        dishId: eachDish.dish_id,
        dishName: eachDish.dish_name,
        dishPrice: eachDish.dish_price,
        dishImage: eachDish.dish_image,
        dishCurrency: eachDish.dish_currency,
        dishCalories: eachDish.dish_calories,
        dishDescription: eachDish.dish_description,
        dishAvailability: eachDish.dish_Availability,
        dishType: eachDish.dish_Type,
        addonCat: eachDish.addonCat,
      })),
    }))
      console.log(formatedData)
      this.setState({dishesList: formatedData})
    }
  }

  renderCategoryList = () => {
    return (
      <div className="body-container">
        <ul className="category-list">
          <li className="list-item">
            <p className="item-para">Salads and Soup</p>
          </li>
          <li className="list-item">
            <p className="item-para">From The Barnyard</p>
          </li>
          <li className="list-item">
            <p className="item-para">From the Hen House</p>
          </li>
          <li className="list-item">
            <p className="item-para">Fresh From The Sea</p>
          </li>
          <li className="list-item">
            <p className="item-para">Biryani</p>
          </li>
          <li className="list-item">
            <p className="item-para">Fast Food</p>
          </li>
        </ul>
      </div>
    )
  }

  render() {
    const {dishesList} = this.state
    const list_a = dishesList.filter(each=>
      each.menuCategory === "Salads and Soup"
    )
    const cat_one = list_a[0]
    console.log(list_a)
    console.log(typeof(cat_one))


    return (
      <div>
        {this.renderCategoryList()}
        <ul className="dishes-container">
          {list_a.forEach(eachDish => (
            <DishItem />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
