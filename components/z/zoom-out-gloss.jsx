import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/demh73b4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="demh73b4w"/>`,
		"fallback": "withicons:zoom-out-gloss",
	});
}

export default Component;
