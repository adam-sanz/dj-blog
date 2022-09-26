export const getCommentsById = async (postId) => {
  try {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/comments/?postId=${postId}`
    )
    return await data.json()
  } catch (error) {
    console.error(error)
  }
}
