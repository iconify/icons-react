import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecdu1dgna.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecdu1dgna"/>`,
		"fallback": "selfhst:zabbix-dark",
	});
}

export default Component;
