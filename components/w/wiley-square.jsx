import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7lrwob-f.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7lrwob-f"/>`,
		"fallback": "academicons:wiley-square",
	});
}

export default Component;
