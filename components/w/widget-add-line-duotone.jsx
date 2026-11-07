import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xwwl7-bgf.css';
import '../../css/k/kj2zw7btc.css';
import '../../css/e/er3yhebux.css';
import '../../css/g/g__gnlzti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xwwl7-bgf"/><path class="kj2zw7btc"/><path class="er3yhebux"/><path class="g__gnlzti"/></g>`,
		"fallback": "solar:widget-add-line-duotone",
	});
}

export default Component;
