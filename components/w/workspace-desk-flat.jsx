import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzl6tlean.css';
import '../../css/l/l15l_3bdk.css';
import '../../css/r/r-tzffbem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yzl6tlean"/><path clip-rule="evenodd" class="l15l_3bdk"/><path clip-rule="evenodd" class="r-tzffbem"/></g>`,
		"fallback": "streamline-sharp-color:workspace-desk-flat",
	});
}

export default Component;
