import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atig-hh7l.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atig-hh7l"/>`,
		"fallback": "fa-brands:wpressr",
	});
}

export default Component;
