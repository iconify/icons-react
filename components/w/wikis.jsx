import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eaw2a-pso.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eaw2a-pso"/>`,
		"fallback": "carbon:wikis",
	});
}

export default Component;
