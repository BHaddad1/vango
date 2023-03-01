export const fetchVanGoghData = () => {
  return Promise.all([
    fetchIndividualWork(459123), 
    fetchIndividualWork(436533), 
    fetchIndividualWork(437984), 
    fetchIndividualWork(436535), 
    fetchIndividualWork(436528), 
    fetchIndividualWork(436532), 
    fetchIndividualWork(459532), 
    fetchIndividualWork(459193),
    fetchIndividualWork(436529),
    fetchIndividualWork(436530),
    fetchIndividualWork(436531),
    fetchIndividualWork(436527),
    fetchIndividualWork(336327),
    fetchIndividualWork(437998),
    fetchIndividualWork(438722),
    fetchIndividualWork(436526),
    fetchIndividualWork(436524),
    fetchIndividualWork(436536),
    fetchIndividualWork(436534),
    fetchIndividualWork(437980),
    fetchIndividualWork(436525),
    fetchIndividualWork(632941),
    fetchIndividualWork(437112),
    fetchIndividualWork(484335),
    fetchIndividualWork(438011),
    fetchIndividualWork(436170),
    fetchIndividualWork(489124),
    fetchIndividualWork(482733),
    fetchIndividualWork(335338),
    fetchIndividualWork(336318),
    fetchIndividualWork(335536),
    fetchIndividualWork(849056),
    fetchIndividualWork(335537),
    fetchIndividualWork(482734),
    fetchIndividualWork(849055),
    fetchIndividualWork(849054),
    fetchIndividualWork(849052),
    fetchIndividualWork(436882),
    fetchIndividualWork(436176),
    fetchIndividualWork(276299),
    fetchIndividualWork(437394),
    fetchIndividualWork(437042),
    fetchIndividualWork(335535),
    fetchIndividualWork(459299),
    fetchIndividualWork(749639),
    fetchIndividualWork(875741),
    fetchIndividualWork(761395),
    fetchIndividualWork(419570),
  ])
};

export const fetchIndividualWork = (objectId) => {
  return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error(`Failed to fetch ${objectId}`)
      }
    })
};