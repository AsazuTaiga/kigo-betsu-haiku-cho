// see https://github.com/vercel/next.js/tree/canary/examples/with-firebase-authentication

import { verifyIdToken } from '../../utils/auth/firebase-admin'
const favoriteFoods = ['pizza', 'burger', 'chips', 'tortilla']

const getFood = async (req, res) => {
  const token = req.headers.token

  try {
    await verifyIdToken(token)
    return res.status(200).json({
      food: favoriteFoods[Math.floor(Math.random() * favoriteFoods.length)],
    })
  } catch (error) {
    return res.status(401).send('You are unauthorised')
  }
}

export default getFood
