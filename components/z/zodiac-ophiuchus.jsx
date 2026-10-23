import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mlew1kcbr.css';
import '../../css/s/s7g6nsbtj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mlew1kcbr"/><path class="s7g6nsbtj"/></g>`,
		"fallback": "vadivam:zodiac-ophiuchus",
	});
}

export default Component;
