# @dataplain/repositoryimage

Vue component to display an image from a pre configured repository.

* Report bugs: <https://github.com/dataplain/repositoryimage/issues>

## Install

Create a new vue project:

```shell
vue create
```

Install component:

```shell
npm install --save @dataplain/repositoryimage
```

## Environment setting

Make a src/resources folder at the root:

```shell
mkdir src/resources
```

### Configure the repositoryimage.js

Create the src/resources/repositoryimage.js:

```javascript
import Vue from "vue";
import RepositoryImage from "@dataplain/RepositoryImage";

Vue.use(RepositoryImage, { RepositoryImageName: "MyRepositoryImage" });
```

### Import repositoryimage.js

The "src/main.js" file should look like this:

```javascript
import Vue from "vue";
import App from "./App.vue";

import "./resources/repositoryimage";

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount("#app");

```

### Set .env file

```text
VUE_APP_IMAGEREPOSITORY=https://my-repository.example.com/images
```

## How to use (example in App.vue)

```vue
<template>
    <div>
        <my-repository-imagem src="my-image.jpg" />
        <my-repository-imagem src="another-image.jpg" fluid rounded @click="showAlert" />
    </div>
</template>

<script>
export default {
    methods: {
        showAlert() {
            alert("Image has clicked!");
        }
    }
}
</script>
```

## Properties

Property | Description | Required | Default
-|-|-|-
src | Image src | yes |
height | image height | no | null
width | image width | no | null
title | image title | no | null
alt | alternative text | no | null
fluid | auto scale size | no | false
rounded | rounded corners | no | false

## Events

Event | Description
-|-
click | Returns the clicked object

## Using in the browser

To use directly in the browser, import @dataplain/repositoryimage:

```html
<script src="https://unpkg.com/@dataplain/repositoryimage" />
```
