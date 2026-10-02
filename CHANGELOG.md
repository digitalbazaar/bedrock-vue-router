# bedrock-vue-router ChangeLog

## 1.1.0 - 2026-mm-dd

### Added
- Add an `options.defaultTitle` optional input param for `augmentRouter`.

## 1.0.0 - 2026-09-02

### Added
- Add `augmentRouter`, moved from `@bedrock/vue` v5. This package owns the
  `vue-router` peer dependency so a host app's router major is independent of
  `@bedrock/vue`. The function is unchanged.
