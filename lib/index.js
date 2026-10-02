/*!
 * Copyright 2018 - 2026 Digital Bazaar, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

export function augmentRouter({app, router, options} = {}) {
  if(typeof app !== 'object') {
    throw new TypeError('"app" must be an object.');
  }
  if(typeof router !== 'object') {
    throw new TypeError('"router" must be an object.');
  }

  // add not found component by default
  router.addRoute({
    path: '/:pathMatch(.*)*',
    component: () => import(
      /* webpackChunkName: "NotFound" */
      '@bedrock/vue/components/NotFound.vue')
  });

  // update page titles by default
  const defaultTitle = options?.defaultTitle ?? document.title;
  const updateTitle = (to, from) => {
    if(typeof to.meta?.title === 'string') {
      document.title = to.meta.title;
    } else if(typeof to.meta?.title === 'function') {
      document.title = to.meta.title({to, from});
    } else {
      document.title = defaultTitle;
    }
  };
  updateTitle(router.currentRoute.value, null);
  router.beforeEach(updateTitle);
}
