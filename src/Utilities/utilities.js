export const cleanVanGoghData = (data) => {
  return data.map(work => {
    const cleanedWork = {
      objectID: work.objectID,
      primaryImageSmall: work.primaryImageSmall,
      title: work.title,
      accessionYear: work.accessionYear,
      GalleryNumber: work.GalleryNumber,
      dimensions: work.dimensions,
      medium: work.medium,
      department: work.department,
      creditLine: work.creditLine,
      objectURL: work.objectURL,
      objectWikidata_URL: work.objectWikidata_URL,
      artistDisplayName: work.artistDisplayName,
    }
    return cleanedWork;
  })
}