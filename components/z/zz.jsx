import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbcc0f97s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbcc0f97s"/>`,
		"fallback": "nrk:zz",
	});
}

export default Component;
