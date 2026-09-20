import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fybd5wb6c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fybd5wb6c"/>`,
		"fallback": "ix:workspace",
	});
}

export default Component;
