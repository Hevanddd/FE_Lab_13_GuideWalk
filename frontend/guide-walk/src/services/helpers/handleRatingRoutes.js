export const filterRatingRoutes = (userRoutesData, { routeId, rating, userRateIds }) => {
  const index = userRoutesData.findIndex(({ _id }) => _id === routeId);
  const findRoute = userRoutesData[index];

  findRoute.rating = rating;
  findRoute.userRateIds = userRateIds;
  userRoutesData.splice(index, 1, findRoute);

  return [...userRoutesData];
};
