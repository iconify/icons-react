import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/eb7pf9bgu.css';
import '../../css/j/jzh2b1iqg.css';
import '../../css/a/azerz7bih.css';
import '../../css/b/bz_jzhbjq.css';
import '../../css/q/q8d7lubuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="eb7pf9bgu wm-shadow"/><path class="jzh2b1iqg"/><path class="azerz7bih"/><path class="bz_jzhbjq"/><path class="q8d7lubuw"/></g>`,
		"fallback": "withicons-retro:wine",
	});
}

export default Component;
