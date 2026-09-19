import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/u/uuky_gise.css';
import '../../css/w/wg2j35btb.css';
import '../../css/g/gvowxd0ue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><circle class="uuky_gise"/><path class="wg2j35btb"/><path class="gvowxd0ue"/></g>`,
		"fallback": "iconamoon:winking-face-light",
	});
}

export default Component;
