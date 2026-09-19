import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/x/xr1zzs9rr.css';
import '../../css/r/rg3rwgsal.css';
import '../../css/p/p8oc13bex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><circle class="xr1zzs9rr"/><path class="rg3rwgsal"/><path class="p8oc13bex"/></g>`,
		"fallback": "iconamoon:winking-face-thin",
	});
}

export default Component;
