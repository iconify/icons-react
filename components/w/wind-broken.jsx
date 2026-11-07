import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gt-b8gb9l.css';
import '../../css/i/ige762y5f.css';
import '../../css/h/hl1uepbsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gt-b8gb9l"/><path class="ige762y5f"/><path class="hl1uepbsv"/></g>`,
		"fallback": "solar:wind-broken",
	});
}

export default Component;
