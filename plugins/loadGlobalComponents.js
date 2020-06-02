import Vue from 'vue'

// const components = require.context('../node_modules/@p-moreira/', true, /[A-Z]\w+\.(vue)$/)

// organisms
import OSection from '@/components/organisms/OSection.vue'
import OWrapper from '@/components/organisms/OWrapper.vue'

// atoms
import AButton from '@/components/atoms/AButton.vue'
import AText from '@/components/atoms/AText.vue'
import ATitle from '@/components/atoms/ATitle.vue'
// import AInput from '@/components/atoms/AInput.vue'
import AImage from '@/components/atoms/AImage.vue'

Vue.component('OSection', OSection)
Vue.component('OWrapper', OWrapper)

Vue.component('AButton', AButton)
Vue.component('AText', AText)
Vue.component('ATitle', ATitle)
// Vue.component('AInput', AInput)
Vue.component('AImage', AImage)

// components.keys().forEach( fileName => {
//     const componentConfig = components(fileName)
//     const componentName = fileName.split('/').pop().split('.')[0]
//     Vue.component(componentName, componentConfig.default || componentConfig)
// })
