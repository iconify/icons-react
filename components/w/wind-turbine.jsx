import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnj_f4vdk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnj_f4vdk"/>`,
		"fallback": "roentgen:wind-turbine",
	});
}

export default Component;
