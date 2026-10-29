import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bjjjhtu0t.css';
import '../../css/x/xoejyzbtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bjjjhtu0t"/><path class="xoejyzbtx"/></g>`,
		"fallback": "vadivam:zodiac-leo",
	});
}

export default Component;
