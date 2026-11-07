import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xwwl7-bgf.css';
import '../../css/k/kj2zw7btc.css';
import '../../css/e/er3yhebux.css';
import '../../css/d/djqs5cxtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xwwl7-bgf"/><path class="kj2zw7btc"/><path class="er3yhebux"/><path class="djqs5cxtc"/></g>`,
		"fallback": "solar:widget-add-linear",
	});
}

export default Component;
