import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do9ouabki.css';
import '../../css/s/sdvjx-b-j.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/l/l8f-2szii.css';
import '../../css/b/bnvd08bmr.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do9ouabki"/><path class="sdvjx-b-j"/><g class="x8poo_bjf"><path class="l8f-2szii"/><path class="bnvd08bmr"/></g>`,
		"fallback": "openmoji:worm",
	});
}

export default Component;
