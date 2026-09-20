import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgk7kxbti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgk7kxbti"/>`,
		"fallback": "thesvg:webgpu",
	});
}

export default Component;
