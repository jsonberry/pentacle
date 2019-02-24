module.exports = {
  name: 'shared-util-decode-html-entities',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/util-decode-html-entities',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
