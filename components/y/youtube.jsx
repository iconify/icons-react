import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft08bqkvi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft08bqkvi"/>`,
		"fallback": "bi:youtube",
	});
}

export default Component;
