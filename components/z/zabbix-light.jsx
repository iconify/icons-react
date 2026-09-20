import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kss7hkagu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kss7hkagu"/>`,
		"fallback": "selfhst:zabbix-light",
	});
}

export default Component;
