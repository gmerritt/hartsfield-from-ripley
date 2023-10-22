import 'vuetify/styles'
import {aliases, mdi} from 'vuetify/iconsets/mdi-svg'
import {createVuetify} from 'vuetify'
import {VAlert} from 'vuetify/components/VAlert'
import {VAppBar, VAppBarTitle} from 'vuetify/components/VAppBar'
import {VApp} from 'vuetify/components/VApp'
import {VBtn} from 'vuetify/components/VBtn'
import {VBtnToggle} from 'vuetify/components/VBtnToggle'
import {VCard, VCardActions, VCardSubtitle, VCardText, VCardTitle} from 'vuetify/components/VCard'
import {VCheckbox} from 'vuetify/components/VCheckbox'
import {VCol, VContainer, VSpacer, VRow} from 'vuetify/components/VGrid'
import {VDataTable, VDataTableVirtual} from 'vuetify/labs/VDataTable'
import {VDialog} from 'vuetify/components/VDialog'
import {VDivider} from 'vuetify/components/VDivider'
import {VExpandTransition} from 'vuetify/components/transitions'
import {VExpansionPanel, VExpansionPanels, VExpansionPanelText, VExpansionPanelTitle} from 'vuetify/components/VExpansionPanel'
import {VIcon} from 'vuetify/components/VIcon'
import {VImg} from 'vuetify/components/VImg'
import {VList, VListItem, VListItemAction, VListItemSubtitle, VListItemTitle} from 'vuetify/components/VList'
import {VMain} from 'vuetify/components/VMain'
import {VMenu} from 'vuetify/components/VMenu'
import {VProgressCircular} from 'vuetify/components/VProgressCircular'
import {VProgressLinear} from 'vuetify/components/VProgressLinear'
import {VRadio} from 'vuetify/components/VRadio'
import {VRadioGroup} from 'vuetify/components/VRadioGroup'
import {VSnackbar} from 'vuetify/components/VSnackbar'
import {VSwitch} from 'vuetify/components/VSwitch'
import {VTooltip} from 'vuetify/components/VTooltip'
import {VTextarea} from 'vuetify/components/VTextarea'
import {VTextField} from 'vuetify/components/VTextField'

// @ts-ignore
import colors from 'vuetify/lib/util/colors'

export default createVuetify({
  components: {
    VAlert,
    VApp,
    VAppBar,
    VAppBarTitle,
    VBtn,
    VBtnToggle,
    VCard,
    VCardActions,
    VCardSubtitle,
    VCardText,
    VCardTitle,
    VCheckbox,
    VCol,
    VContainer,
    VDataTable,
    VDataTableVirtual,
    VDialog,
    VDivider,
    VExpandTransition,
    VExpansionPanel,
    VExpansionPanels,
    VExpansionPanelText,
    VExpansionPanelTitle,
    VIcon,
    VImg,
    VList,
    VListItem,
    VListItemAction,
    VListItemSubtitle,
    VListItemTitle,
    VMain,
    VMenu,
    VProgressCircular,
    VProgressLinear,
    VRadio,
    VRadioGroup,
    VRow,
    VSnackbar,
    VSpacer,
    VSwitch,
    VTextarea,
    VTextField,
    VTooltip
  },
  display: {
    thresholds: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    themes: {
      light: {
        colors: {
          alert: '#fef6e6',
          error: '#b94a48',
          info: '#3a87ad',
          primary: '#377695',
          red: colors.red.darken1,
          secondary: '#eee',
          success: '#468847'
        }
      }
    }
  }
})
