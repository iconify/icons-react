import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlo573dxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlo573dxq"/>`,
		"fallback": "thesvg:weblate",
	});
}

export default Component;
