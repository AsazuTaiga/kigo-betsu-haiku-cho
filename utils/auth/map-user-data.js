// see https://github.com/vercel/next.js/tree/canary/examples/with-firebase-authentication

export const mapUserData = async (user) => {
  const { uid, email } = user
  const token = await user.getIdToken(true)
  return {
    id: uid,
    email,
    token,
  }
}
