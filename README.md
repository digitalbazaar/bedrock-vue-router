# bedrock-vue-router

[vue-router][] integration for [Vue][] applications running on [Bedrock][].

This package owns the `vue-router` peer dependency so that a host application's
router major version is independent of [@bedrock/vue][]. It provides
`augmentRouter`, which was part of `@bedrock/vue` through v5.

## Usage

`augmentRouter` adds the common "not found" route and page title handling to a
router created by the host application:

```js
import {augmentRouter} from '@bedrock/vue-router';
import {initialize} from '@bedrock/vue';
import {createRouter, createWebHistory} from 'vue-router';
import MyApp from '../components/MyApp.vue';

initialize({
  async beforeMount({app}) {
    const router = createRouter({
      history: createWebHistory(),
      routes: []
    });
    // adds common functionality like "not found" route
    // and page title setter
    augmentRouter({app, router});
    app.use(router);

    return MyApp;
  }
})
```

A route may set `meta.title` to either a string or a function called with
`{to, from}`. A route without one restores the document's original title.

The "not found" route renders `NotFound.vue` from [@bedrock/vue][], so this
package must be used inside a `@bedrock/vue` application.

## License

[Apache License, Version 2.0](LICENSE) Copyright 2011-2026 Digital Bazaar, Inc.

Other Digital Bazaar products are available under a non-commercial license.
Please contact Digital Bazaar for details.

Commercial licensing and support are available by contacting
[Digital Bazaar](https://digitalbazaar.com/) <support@digitalbazaar.com>.

[@bedrock/vue]: https://github.com/digitalbazaar/bedrock-vue
[Bedrock]: https://github.com/digitalbazaar/bedrock
[Vue]: https://vuejs.org/
[vue-router]: https://router.vuejs.org/
