import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsxj7eb8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsxj7eb8v"/>`,
		"fallback": "simple-icons:winmate",
	});
}

export default Component;
