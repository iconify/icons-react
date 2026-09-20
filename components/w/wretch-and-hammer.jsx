import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg0ggj7rx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg0ggj7rx"/>`,
		"fallback": "roentgen:wretch-and-hammer",
	});
}

export default Component;
