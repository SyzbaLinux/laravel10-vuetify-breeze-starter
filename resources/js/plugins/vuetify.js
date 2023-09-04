import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VDataTable } from 'vuetify/labs/VDataTable'

import '@mdi/font/css/materialdesignicons.min.css'


export default createVuetify({
    components: {
        VDataTable,
    },

    theme: {
        themes: {
            light: {
                colors: {
                    background:'#dcdcdc',
                    surface: "#fafafa",
                    primary: "#c76b00",
                    secondary: "#1f2937",
                    error: "#881c1c",
                    info: "#3b82f6",
                    success: "#0f7735",
                    warning: "#f59e0b",
                    accent: '#FF9800'
                },
            },
        },
    },
})
