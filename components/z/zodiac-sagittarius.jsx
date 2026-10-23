import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lg6bw_ihy.css';
import '../../css/l/lraxcbcxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lg6bw_ihy"/><path class="lraxcbcxq"/></g>`,
		"fallback": "vadivam:zodiac-sagittarius",
	});
}

export default Component;
