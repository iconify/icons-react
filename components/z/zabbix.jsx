import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4minvbuf.css';
import '../../css/i/i6s53x8dt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4minvbuf"/><path class="i6s53x8dt"/>`,
		"fallback": "selfhst:zabbix",
	});
}

export default Component;
