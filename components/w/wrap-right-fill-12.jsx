import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_ses9b1l.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_ses9b1l"/>`,
		"fallback": "garden:wrap-right-fill-12",
	});
}

export default Component;
