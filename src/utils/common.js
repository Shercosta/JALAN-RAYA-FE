import _ from 'lodash';

export const toArray = (value) => (_.isArray(value) ? value : [value]);

export const normalizeMultiLineString = (multiline) => {
  const geom = multiline.geom;

  const coordinates = _.map(
    _.map(geom.coordinates, (coords) =>
      _.map(coords, (coord) => [coord[1], coord[0]])
    )
  );

  geom.coordinates = coordinates;

  return multiline;
};
