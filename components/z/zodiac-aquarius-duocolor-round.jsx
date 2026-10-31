import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rst98qbxf.css';
import '../../css/u/ut8kv4wom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rst98qbxf"/><path class="ut8kv4wom"/></g>`,
		"fallback": "coolicons:zodiac-aquarius-duocolor-round",
	});
}

export default Component;
