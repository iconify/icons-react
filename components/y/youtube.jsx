import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tluqhzo9a.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tluqhzo9a"/>`,
		"fallback": "fa-brands:youtube",
	});
}

export default Component;
