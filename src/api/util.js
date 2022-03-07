import axios from 'axios'

// export const getProductsData = async () => {
//   try {
//     const data = await axios.get(
//       'https://target1.p.rapidapi.com/products/list-recommended',
//       {
//         params: { tcins: '84022117', store_id: '911' },
//         headers: {
//           'x-rapidapi-host': 'target1.p.rapidapi.com',
//           'x-rapidapi-key':
//             'e789fb8a4dmshb7828cd9984cab9p12ec5cjsn0d78732c45bc',
//         },
//       }
//     )
//     return data
//   } catch (error) {
//     console.log(error)
//   }
// }

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
          'x-rapidapi-key':
            'e789fb8a4dmshb7828cd9984cab9p12ec5cjsn0d78732c45bc',
        },
      }
    )
    return data
  } catch (error) {
    console.log(error)
  }
}
