import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu8s29bva.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu8s29bva"/>`,
		"fallback": "dinkie-icons:wrench-small-filled",
	});
}

export default Component;
