export const getJalanRayas = (state) => state.jalanRaya;

export const getJalanRayaByGid = (gid) => (state) =>
  getJalanRayas(state).data.get(gid);

export const getJalanRayaPageData = (state) => getJalanRayas(state).page;
