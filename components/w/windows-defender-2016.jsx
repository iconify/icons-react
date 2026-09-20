import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttfp4kbjm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttfp4kbjm"/>`,
		"fallback": "selfhst:windows-defender-2016",
	});
}

export default Component;
