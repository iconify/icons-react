import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahhe4s6pz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahhe4s6pz"/>`,
		"fallback": "file-icons:yaml-alt1",
	});
}

export default Component;
