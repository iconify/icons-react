import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qiok80bhz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qiok80bhz"/>`,
		"fallback": "xero-emoji:zzz",
	});
}

export default Component;
