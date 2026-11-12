import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8pv-4bgi.css';
import '../../css/a/a3mwubgrl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8pv-4bgi"/><path class="a3mwubgrl"/>`,
		"fallback": "selfhst:xrsh-light",
	});
}

export default Component;
