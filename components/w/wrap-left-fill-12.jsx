import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knc4mgb-d.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knc4mgb-d"/>`,
		"fallback": "garden:wrap-left-fill-12",
	});
}

export default Component;
