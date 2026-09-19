import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ondal-58d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ondal-58d"/>`,
		"fallback": "icomoon-free:xing",
	});
}

export default Component;
