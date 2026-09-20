import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb_bc5q8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb_bc5q8y"/>`,
		"fallback": "thesvg-color:wgpu",
	});
}

export default Component;
