import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#FF6817',
                secondary: '#1F8DFF',
                accent: '#EBCB5E',
                error: '#FF1000',
                warning: '#E6FFC7',
                info: '#E6FFC7',
                success: '#3EEB9C'
            },
            dark: {
                primary: '#FFC705',
                secondary: '#8DB3A5',
                accent: '#00FFA7',
                error: '#BC1201',
                warning: '#D7FFB0',
                info: '#B3A269',
                success: '#ff5722'
            }


        },
    },

})
