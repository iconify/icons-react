import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1vka2bku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1vka2bku"/>`,
		"fallback": "thesvg:wp-rocket",
	});
}

export default Component;
