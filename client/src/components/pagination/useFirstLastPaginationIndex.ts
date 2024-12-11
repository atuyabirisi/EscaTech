export const useFirstLastPaginationIndex = (postsPerPage: number, pageNumber: number) => {
    const lastIndex = postsPerPage * pageNumber,
          firstIndex = lastIndex - postsPerPage;   
    return { firstIndex, lastIndex };
}