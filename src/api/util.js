import axios from 'axios'

export const getProductsData = async () => {
  try {
    const data = await axios.get(
      'https://target1.p.rapidapi.com/products/v2/list',
      {
        params: {
          store_id: '911',
          category: '5xtg6',
          keyword: 'oculus quest',
          count: '20',
          offset: '0',
          default_purchasability_filter: 'true',
          sort_by: 'relevance',
        },
        headers: {
          'x-rapidapi-host': 'target1.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
        },
      }
    )
    return data
  } catch (error) {
    console.log(error)
  }
}
