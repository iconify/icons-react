import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me0uvwb_d.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="me0uvwb_d"/>`,
		"fallback": "dinkie-icons:webcam",
	});
}

export default Component;
