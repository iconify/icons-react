import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugm2nob5s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugm2nob5s"/>`,
		"fallback": "selfhst:zenmux-light",
	});
}

export default Component;
