import {Component, Input} from '@angular/core'

import { uiConfig } from '../../../../app.config'

@Component({
  selector: 'ui-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  config = uiConfig
  containerClass = uiConfig.fluid ? 'container-fluid' : 'container'
}
