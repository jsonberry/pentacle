module.exports = {
  name: 'shared-util-ghosts',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/util-ghosts',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
