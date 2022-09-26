export const getAll = async () => {
  try {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    return await data.json()
  } catch (error) {
    console.error(error)
  }
}

export const getPostById = async (postId) => {
  try {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    )
    return await data.json()
  } catch (error) {
    console.error(error)
  }
}
