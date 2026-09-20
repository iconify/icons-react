import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz6zjacrc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz6zjacrc"/>`,
		"fallback": "ix:weibo-logo",
	});
}

export default Component;
