import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/maqypibpp.css';
import '../../css/g/gjdc_xbhk.css';
import '../../css/m/mx_pkno7j.css';
import '../../css/o/o7-4xfbnf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="maqypibpp"/><path class="gjdc_xbhk"/><path class="mx_pkno7j"/><path class="o7-4xfbnf"/></g>`,
		"fallback": "icon-park-outline:weight",
	});
}

export default Component;
