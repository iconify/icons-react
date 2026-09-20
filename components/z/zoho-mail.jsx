import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpie12blh.css';
import '../../css/w/w092a3gwv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpie12blh"/><path class="w092a3gwv"/>`,
		"fallback": "selfhst:zoho-mail",
	});
}

export default Component;
