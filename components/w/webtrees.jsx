import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al0ngib-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="al0ngib-p"/>`,
		"fallback": "thesvg-color:webtrees",
	});
}

export default Component;
