export const BehavesAsBelongsTo = {
  fetchAvailableResources(resourceName, fieldAttribute, params) {
    return ExTeal.request().get(
      `/nova-api/${resourceName}/associatable/${fieldAttribute}`,
      params
    );
  }
};
