module.exports = {
  "roots": [
    "<rootDir>/__tests__"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupTestFrameworkScriptFile": "<rootDir>/__tests__/setupEnzyme.ts",
}
