import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jw-0m_b3v.css';
import '../../css/k/kmzc8gbuh.css';
import '../../css/g/gmdfz2brc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jw-0m_b3v"/><path class="kmzc8gbuh"/><path class="gmdfz2brc"/></g>`,
		"fallback": "fluent-emoji-flat:worm",
	});
}

export default Component;
