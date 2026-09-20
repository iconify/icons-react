import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpxp0oysk.css';
import '../../css/l/l6_aktb5q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="vpxp0oysk"/><path class="l6_aktb5q"/>`,
		"fallback": "selfhst:xubuntu",
	});
}

export default Component;
