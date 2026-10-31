import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iin4xh33f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iin4xh33f"/>`,
		"fallback": "coolicons:zodiac-sagittarius-fill-round",
	});
}

export default Component;
