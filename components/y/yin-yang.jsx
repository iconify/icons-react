import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j7qjn6psg.css';
import '../../css/s/sd0_zvbjf.css';
import '../../css/b/b_qx7vbou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j7qjn6psg"/><path class="sd0_zvbjf"/><path class="b_qx7vbou"/></g>`,
		"fallback": "tabler:yin-yang",
	});
}

export default Component;
