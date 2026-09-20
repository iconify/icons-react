import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rx19rbc2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rx19rbc2s"/>`,
		"fallback": "lucide:zodiac-sagittarius",
	});
}

export default Component;
