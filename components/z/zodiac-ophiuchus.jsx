import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/opwu4psgy.css';
import '../../css/b/blil4ds5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="opwu4psgy"/><path class="blil4ds5p"/></g>`,
		"fallback": "lucide:zodiac-ophiuchus",
	});
}

export default Component;
