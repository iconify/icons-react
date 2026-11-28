import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcqt--beo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcqt--beo"/>`,
		"fallback": "noviair-light:wrench-alert",
	});
}

export default Component;
