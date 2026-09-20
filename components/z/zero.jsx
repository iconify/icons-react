import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l5zk7vk6d.css';
import '../../css/z/zop9rmbjf.css';
import '../../css/h/hz_za5x5c.css';

const viewBox = {"width":242,"height":241};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="l5zk7vk6d"/><path class="zop9rmbjf"/><path class="hz_za5x5c"/></g>`,
		"fallback": "thesvg:zero",
	});
}

export default Component;
