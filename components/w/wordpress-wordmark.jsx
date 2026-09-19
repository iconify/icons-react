import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2072ym-d.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y2072ym-d"/>`,
		"fallback": "devicon-plain:wordpress-wordmark",
	});
}

export default Component;
