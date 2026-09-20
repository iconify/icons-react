import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut0ox1teu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ut0ox1teu"/>`,
		"fallback": "octicon:workflow-16",
	});
}

export default Component;
