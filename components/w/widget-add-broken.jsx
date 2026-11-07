import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xwwl7-bgf.css';
import '../../css/s/smlcbcyjn.css';
import '../../css/k/kj2zw7btc.css';
import '../../css/e/er3yhebux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xwwl7-bgf"/><path class="smlcbcyjn"/><path class="kj2zw7btc"/><path class="er3yhebux"/></g>`,
		"fallback": "solar:widget-add-broken",
	});
}

export default Component;
