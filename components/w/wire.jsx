import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhua0w9kb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhua0w9kb"/>`,
		"fallback": "thesvg-color:wire",
	});
}

export default Component;
