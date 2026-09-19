import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/s/sol3rjohs.css';
import '../../css/t/t1fbcccnj.css';
import '../../css/c/cd50-o5ef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><circle class="sol3rjohs"/><path class="t1fbcccnj"/><path class="cd50-o5ef"/></g>`,
		"fallback": "iconamoon:winking-face",
	});
}

export default Component;
