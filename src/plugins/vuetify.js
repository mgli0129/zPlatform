import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.pink,
                secondary: '#1F7087',
                accent: colors.yellow,
                error: colors.red.accent3,
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107'
            },

        },
    },

})
